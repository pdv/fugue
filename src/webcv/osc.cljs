(ns webcv.osc
  (:require [clojure.spec.alpha :as s]
            [oops.core :refer [oset!]]
            [webcv.web-audio :as web-audio]
            [webcv.synthdef :as synthdef]))

(s/def ::frequency number?)
(s/def ::detune number?)
(s/def ::type #{::sine ::sawtooth ::square ::triangle})
(defmethod web-audio/node-spec ::osc [_]
  (s/keys :req [::type ::frequency ::detune]))

(defn oscillator
  ([type frequency] (oscillator type frequency 0))
  ([type frequency detune]
   (synthdef/synthdef
     {::web-audio/node-type ::osc
      ::type type
      ::frequency 0
      ::detune 0}
     {::frequency frequency
      ::detune detune})))

(def sin-osc (partial oscillator ::sine))
(def saw (partial oscillator ::sawtooth))
(def square (partial oscillator ::square))
(def tri-osc (partial oscillator ::triangle))

(defmethod web-audio/make-node ::osc
  [{::web-audio/keys [actx]} {::keys [type frequency detune]}]
  (doto (.createOscillator actx)
    (oset! "type" (name type))
    (oset! "frequency.value" frequency)
    (oset! "detune.value" detune)
    (.start)))
