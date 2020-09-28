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
  [start-time stages scale bias]
  {:pre [(s/valid? ::stages stages)]
   :post [(s/valid? (s/* ::ramp/ramp) %)]}
  (let [durations (map ::duration stages)
        times (reductions + start-time durations)
        levels (map #(+ bias (* scale (::target %))) stages)
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
    (let [v-prev-gate (volatile! 0)
          v-last-scheduled (volatile! {::ramp/shape ::ramp/cancel-and-hold
                                       ::ramp/value 0
                                       ::ramp/time (now-fn)})]
      (fn
        ([] (rf))
        ([result] (rf result))
        ([result {::keys [env gate scale bias]}]
         (let [prev-gate @v-prev-gate
               last-scheduled @v-last-scheduled
               start-time (+ (now-fn) (or (:delay gate) 0))
               gate-val (or (:value gate) gate)
               stages ((if (> gate-val 0) ::open ::closed) env)
               start-event (start-event start-time last-scheduled)
               ramp-events (ramps start-time stages scale bias)]
           (if (and (not= prev-gate gate) (not-empty ramp-events))
             (let [all-events (cons start-event ramp-events)]
               (vreset! v-prev-gate gate)
               (vreset! v-last-scheduled (last all-events))
               (reduce rf result all-events))
             result)))))))

(defmethod chan/make-transducer ::adsr [_ _]
  (map (fn [{::keys [a d s r]}]
         {::open [{::duration a ::target 1}
                   {::duration d ::target s}]
          ::closed [{::duration r ::target 0}]})))

(defn adsr [a d s r]
  (synthdef/synthdef
    {::synthdef/node-type ::chan/chan-node
     ::chan/chan-node-type ::chan/transducer
     ::chan/xform ::adsr}
    {::a [a] ::d [d] ::s [s] ::r [r]}))

(defmethod chan/make-transducer ::perc [_ _]
  (map (fn [{::keys [a d]}]
         {::open [{::duration a ::target 1}
                  {::duration d ::target 0}]
          ::closed []})))

(defn perc [a d]
  (synthdef/synthdef
    {::synthdef/node-type ::chan/chan-node
     ::chan/chan-node-type ::chan/transducer
     ::chan/xform ::perc}
    {::a [0 a]
     ::d [0 d]}))

(defmethod chan/make-transducer ::env-gen
  [{::audio/keys [actx]} _]
  (stages-x-ramp #(oget actx "currentTime")))

(defn env-gen
  ([env gate] (env-gen env gate 1))
  ([env gate scale] (env-gen env gate scale 0))
  ([env gate scale bias]
   (synthdef/synthdef
     {::synthdef/node-type ::chan/chan-node
      ::chan/chan-node-type ::chan/transducer
      ::chan/xform ::env-gen}
     {::env [env]
      ::gate [gate]
      ::scale [scale]
      ::bias [bias]})))