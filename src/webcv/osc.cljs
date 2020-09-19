(ns webcv.osc
  (:require [clojure.spec.alpha :as s]
            [goog.object :as o]
            [webcv.web-audio :as web-audio]
            [webcv.synthdef :refer [source]]))

(s/def ::freq number?)
(s/def ::detune number?)
(s/def ::type #{::sine ::saw ::square ::tri})
(defmethod web-audio/node-spec ::osc [_]
  (s/keys :req [::type ::freq ::detune]))

(defn oscillator
  ([type freq] (oscillator type freq -1))
  ([type freq detune]
   (source {::web-audio/node-type ::osc
            ::type type
            ::freq -1
            ::detune -1}
           {::freq freq
            ::detune detune})))

(def sin-osc (partial oscillator ::sine))
(def saw (partial oscillator ::saw))
(def square (partial oscillator ::square))
(def tri-osc (partial oscillator ::tri))

(def type-name
  {::sine "sine"
   ::saw "sawtooth"
   ::square "square"
   ::tri "triange"})

(defmethod web-audio/make-node ::osc
  [{::web-audio/keys [actx]} {::keys [type freq detune]}]
  (doto (.createOscillator actx)
    (o/set "type" (type-name type))
    (o/set "frequency.value" freq)
    (o/set "detune.value" detune)
    (.start)))
