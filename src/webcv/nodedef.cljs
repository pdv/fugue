(ns webcv.nodedef)

(defn input [channel]
  {:type :input
   :channel channel})

(defn output [channel]
  {:type :output
   :channel channel})

(defn const [offset]
  {:type :source
   :constructor "createConstantSource"
   :audio-params {"offset" [0.0001 offset]}})

(defn oscillator
  ([type freq] (oscillator type freq 0))
  ([type freq detune]
   {:type :source
    :constructor "createOscillator"
    :static-params {"type" type}
    :audio-params {"frequency" [0 freq]
                   "detune" [0 detune]}}))

(def sin-osc (partial oscillator "sine"))
(def saw (partial oscillator "sawtooth"))
(def square (partial oscillator "square"))
(def tri-osc (partial oscillator "triangle"))

(defn biquad-filter
  ([type freq] (biquad-filter type freq 1))
  ([type freq q]
   {:type :effect
    :constructor "createBiquadFilter"
    :static-params {"type" type}
    :audio-params {"frequency" [0 freq]
                   "Q" [1 q]}}))

(def lpf (partial biquad-filter "lowpass"))
(def hpf (partial biquad-filter "highpass"))
(def bpf (partial biquad-filter "bandpass"))

(defn gain [amp]
  {:type :effect
   :constructor "createGain"
   :audio-params {"gain" [0 amp]}})

(defn delay-node [time]
  {:type :effect
   :constructor "createDelay"
   :audio-params {"delayTime" [0 time]}})


