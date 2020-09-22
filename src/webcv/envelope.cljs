(ns webcv.envelope
  (:require [clojure.spec.alpha :as s]
            [oops.core :refer [oget]]
            [webcv.synthdef :as synthdef]
            [webcv.midi :as midi]
            [webcv.audio :as audio]))

(defn- schedule!
  [param {:keys [value time shape]}]
  (let [value (max 0.0001 value)]
    (print time ":" value shape)
    (case shape
      :cancel-and-hold
      (.cancelAndHoldAtTime param time)
      (:linear nil)
      (.linearRampToValueAtTime param value time)
      :exponential
      (.exponentialRampToValueAtTime param (max 0.0001 value) time)
      :instant
      (.setValueAtTime param value time))))

(defn- curve-start-event [start-time last-scheduled]
  (let [overlapping (< start-time (:time last-scheduled))]
    (into {:time start-time}
          (if overlapping
            {:shape :cancel-and-hold}
            {:shape :instant :value (:value last-scheduled)}))))

(defn- curve-ramp-events [start-time ramps]
  (let [durations (map :duration ramps)
        times (reductions + start-time durations)
        levels (map :target ramps)
        shapes (map #(get % :shape :exponential) ramps)]
    (map (fn [time level shape]
           {:time time :value level :shape shape})
         (rest times)
         levels
         shapes)))

(defn- curve-x-schedule
  "Returns a stateful transducer that maps curves to schedulables using now-fn"
  [now-fn]
  (fn [rf]
    (let [v-last-scheduled (volatile! {:time (now-fn)})]
      (fn
        ([] (rf))
        ([result] (rf result))
        ([result curve]
         (let [last-scheduled @v-last-scheduled
               start-time (+ (now-fn) (:time curve))
               start-event (curve-start-event start-time last-scheduled)
               ramp-events (curve-ramp-events start-time (:ramps curve))]
           (if-not (empty? ramp-events)
             (let [all-events (cons start-event ramp-events)]
               (vreset! v-last-scheduled (last all-events))
               (reduce rf result all-events))
             result)))))))

(defn- schedule-xf
  "Creates a breakpoint-x-schedule transducer from a ctx and start time"
  [ctx at]
  (curve-x-schedule (fn [] (+ at (oget ctx "currentTime")))))

