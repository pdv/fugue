(ns webcv.osc
  (:require [clojure.spec.alpha :as s]
            [webcv.nodedef :as nodedef]
            [webcv.synthdef :refer [source]]))

(s/def ::freq number?)
(s/def ::detune number?)
(s/def ::type #{::sine ::saw ::square ::tri})
(defmethod nodedef/node-type ::osc [_]
  (s/keys :req [::type]))

(defmethod nodedef/constructor ::osc [_] "createOscillator")

(defn oscillator
  ([type freq] (oscillator type freq -1))
  ([type freq detune]
   (source {::nodedef/type ::osc
            ::type type
            ::freq -1
            ::detune -1}
           {::freq freq
            ::detune detune})))

(def sin-osc (partial oscillator ::sine))
(def saw (partial oscillator ::saw))
(def square (partial oscillator ::square))
(def tri-osc (partial oscillator ::tri))