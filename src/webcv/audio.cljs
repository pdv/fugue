(ns webcv.audio)

(defonce state (atom {:ctx nil :outs nil :ins nil}))

(defn reset-ctx!
  ([]
   (when-let [old-ctx (:ctx @state)]
     (.close old-ctx))
   (.then (.getUserMedia (.-mediaDevices js/navigator)
                         (clj->js {:audio true}))
          (partial reset-ctx!)))
  ([in-stream]
   (let [ctx (js/AudioContext.)
         dest (.-destination ctx)
         out-chans (.-maxChannelCount dest)
         outs (.createChannelMerger ctx out-chans)
         source (.createMediaStreamSource ctx in-stream)
         in-chans (.-channelCount source)
         ins (.createChannelSplitter ctx in-chans)]
     (set! (.-channelCount dest) out-chans)
     (.connect outs dest)
     (.connect source ins)
     (reset! state {:ctx ctx :outs outs :ins ins}))))

(defn out [n v]
  (.connect v (:outs @state) 0 (dec n)))

(defn in [n]
  (let [node (.createGain (:ctx @state))]
    (.connect (:ins @state) node (dec n))
    node))

(defprotocol Modulator
  (attach! [this param]))

(extend-protocol Modulator
  number
  (attach! [this param]
    (o/set param "value" this))
  js/AudioNode
  (attach! [this param]
    (.connect this param)))

(defn- node [{:keys [constructor static-params audio-params]}]
  (let [node (js-invoke (:ctx @state) constructor)]
    (doseq [[param-name value] static-params]
      (o/set node param-name value))
    (doseq [[param-name modulators] audio-params
            :let [param (o/get node param-name)]
            modulator modulators]
      (attach! modulator param))
    node))

(defn- source [nodedef]
  (doto (node nodedef) (.start)))

(defn- effect [nodedef in]
  (doto (node nodedef)
    (partial (.connect in))))

(defn- oscillator
  ([type freq] (oscillator type freq 0))
  ([type freq detune]
   (engine/source {:constructor "createOscillator"
                   :static-params {"type" type}
                   :audio-params {"frequency" [0 freq] 
                                  "detune" [0 detune]}})))

(def sin-osc (partial oscillator "sine"))
(def saw (partial oscillator "sawtooth"))
(def square (partial oscillator "square"))
(def tri-osc (partial oscillator "triangle"))

(defn- biquad-filter
  ([type in freq] (biquad-filter type in freq 1))
  ([type in freq q]
   (engine/effect in {:constructor "createBiquadFilter"
                      :static-params {"type" type}
                      :audio-params {"frequency" [0 freq] 
                                     "Q" [1 q]}})))

(def lpf (partial biquad-filter "lowpass"))
(def hpf (partial biquad-filter "highpass"))
(def bpf (partial biquad-filter "bandpass"))

(defn gain [in amp]
  (engine/effect in {:constructor "createGain"
                     :audio-params {"gain" [0 amp]}}))

(defn delay-node [in time]
  (engine/effect in {:constructor "createDelay"
                     :audio-params {"delayTime" [0 time]}}))

(defn const [& modulators]
  (engine/source {:constructor "createConstantSource"
                  :audio-params {"offset" (cons 0.0001 modulators)}}))

