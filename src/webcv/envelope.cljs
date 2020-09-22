(ns webcv.envelope
  (:require [clojure.spec.alpha :as s]
            [oops.core :refer [oget]]
            [webcv.audio :as audio]
            [webcv.synthdef :as synthdef]
            [webcv.ramp :as ramp]
            [webcv.chan :as chan]))

(s/def ::stage (s/keys :req [::duration ::target] :opt [::ramp/shape]))
(s/def ::stages (s/* ::stage))

(defn- start-event
  [start-time last-scheduled]
  {:pre [(s/valid? ::ramp/ramp last-scheduled)]
   :post [(s/valid? ::ramp/ramp %)]}
  (let [overlapping (< start-time (::ramp/time last-scheduled))]
    (into {::ramp/time start-time}
          (if overlapping
            {::ramp/shape ::ramp/cancel-and-hold}
            {::ramp/shape ::ramp/instant
             ::ramp/value (::ramp/value last-scheduled)}))))

(defn- ramps
  [start-time stages]
  {:pre [(s/valid? ::stages stages)]
   :post [(s/valid? (s/* ::ramp/ramp) %)]}
  (let [durations (map ::duration stages)
        times (reductions + start-time durations)
        levels (map ::target stages)
        shapes (map #(get % ::ramp/shape ::ramp/exponential) stages)]
    (map (fn [time level shape]
           {::ramp/time time ::ramp/value level ::ramp/shape shape})
         (rest times)
         levels
         shapes)))

(defn- stages-x-ramp
  "Returns a stateful transducer that maps envelope stage packets to ramps using now-fn"
  [now-fn]
  (fn [rf]
    (let [v-last-scheduled (volatile! {::ramp/shape ::ramp/cancel-and-hold
                                       ::ramp/value 0
                                       ::ramp/time (now-fn)})]
      (fn
        ([] (rf))
        ([result] (rf result))
        ([result stages]
         (let [last-scheduled @v-last-scheduled
               start-time (now-fn)
               start-event (start-event start-time last-scheduled)
               ramp-events (ramps start-time stages)]
           (if-not (empty? ramp-events)
             (let [all-events (cons start-event ramp-events)]
               (vreset! v-last-scheduled (last all-events))
               (reduce rf result all-events))
             result)))))))

(defmethod chan/make-transducer ::envelope
  [{::audio/keys [actx]} {::keys [open closed]}]
  (comp
    (map #(if (> % 0) open closed))
    (stages-x-ramp #(oget actx "currentTime"))))

(defn adsr [a d s r]
  {::open [{::duration a ::target 1}
           {::duration d ::target s}]
   ::closed [{::duration r ::target 0}]})

(defn perc [a d]
  {::open [{::duration a ::target 1}
           {::duration d ::target 0}]
   ::closed []})

(defn env-gen [gate env]
  (synthdef/synthdef
    {::synthdef/node-type ::chan/chan-node
     ::chan/chan-node-type ::chan/transducer
     ::chan/xforms [{::chan/xform-name ::envelope
                     ::open (::open env)
                     ::close (::closed env)}]}
    {"fmwfwef" [gate]}))