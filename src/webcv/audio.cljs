(ns webcv.audio
  (:require [webcv.engine :as engine]))

(defn oscillator
  ([type freq] (oscillator type freq 0))
  ([type freq detune]
   (engine/source {:constructor "createOscillator"
                   :static-params {"type" type}
                   :audio-params {"frequency" freq "detune" detune}})))

(def sin-osc (partial oscillator "sine"))
(def saw (partial oscillator "sawtooth"))
(def square (partial oscillator "square"))
(def tri-osc (partial oscillator "triangle"))

(defn biquad-filter
  ([type in freq] (biquad-filter type in freq 1))
  ([type in freq q]
   (engine/effect in {:constructor "createBiquadFilter"
                      :static-params {"type" type}
                      :audio-params {"frequency" freq "Q" q}})))

(def lpf (partial biquad-filter "lowpass"))
(def hpf (partial biquad-filter "highpass"))
(def bpf (partial biquad-filter "bandpass"))

(defn gain [in amp]
  (engine/effect in {:constructor "createGain"
                     :audio-params {"gain" amp}}))

(defn const [offset]
  (engine/source {:constructor "createConstantSource"
                  :audio-params {"offset" offset}}))

