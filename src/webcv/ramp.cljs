(ns webcv.ramp
  (:require [clojure.spec.alpha :as s]
            [cljs.core.async :as async]
            [oops.core :refer [oget+ oset!+]]
            [webcv.synthdef :as synthdef]
            [webcv.audio :as audio]
            [webcv.chan :as chan]))

(s/def ::shape #{::cancel-and-hold ::instant ::linear ::exponential})
(s/def ::value number?)
(s/def ::time number?) ;; absolute

(defmulti ramp-spec ::shape)
(defmethod ramp-spec ::cancel-and-hold [_]
  (s/keys :req []))
(defmethod ramp-spec ::instant [_]
  (s/keys :req [::value]))
(defmethod ramp-spec ::linear [_]
  (s/keys :req [::value ::time]))
(defmethod ramp-spec ::exponential [_]
  (s/keys :req [::value ::time]))
(s/def ::ramp (s/multi-spec ramp-spec ::shape))

(defn schedule!
  [audio-param {::keys [value time shape]}]
  (let [value (max 0.0001 value)]
    (case shape
      ::cancel-and-hold
      (.cancelAndHoldAtTime audio-param time)
      (::linear nil)
      (.linearRampToValueAtTime audio-param value time)
      ::exponential
      (.exponentialRampToValueAtTime audio-param (max 0.0001 value) time)
      ::instant
      (.setValueAtTime audio-param value time))))

(defmethod synthdef/make-edge [::chan/chan-node ::audio/audio-node]
  [_ src dest {::synthdef/keys [param-name]}]
  (let [c (async/chan 1)
        audio-param (oget+ dest param-name)]
    (async/go-loop []
      (let [msg (async/<! c)]
        (if (number? msg)
          (oset!+ audio-param "value" msg)
          (schedule! audio-param msg))
        (recur)))
    (async/tap (::chan/out-mult src) c)))
