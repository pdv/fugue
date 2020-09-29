(ns fugue.audio
  (:require [clojure.spec.alpha :as s]
            [oops.core :refer [oset!+ oget+]]
            [fugue.synthdef :as synthdef]))

(s/def ::actx #(== js/AudioContext (type %)))
(s/def ::ins #(== js/ChannelSplitterNode (type %)))
(s/def ::outs #(== js/ChannelMergerNode (type %)))
(s/def ::node #(== js/AudioNode (type %)))
(s/def ::ctx (s/keys :req [::actx] :opt [::ins ::outs]))
(s/def ::constructor string?)

(defmulti audio-node-spec ::audio-node-type)
(defmethod synthdef/node-spec ::audio-node [_]
  (s/multi-spec audio-node-spec ::audio-node-type))
(defmethod audio-node-spec ::output [_]
  (s/keys :req [::channel-idx]))
(defmethod audio-node-spec ::input [_]
  (s/keys :req [::channel-idx]))
(defmethod audio-node-spec :default [_]
  (s/keys :req [::constructor]))

(defmulti make-audio-node (fn [_ nodedef] (::audio-node-type nodedef)))
(defmethod synthdef/make-node ::audio-node [ctx nodedef]
  (make-audio-node ctx nodedef))

(defn inputs-promise []
  (.getUserMedia (.-mediaDevices js/navigator)
                 (clj->js {:audio true})))

(defn with-inputs [ctx in-stream]
  {:pre [(s/valid? ::ctx ctx)]
   :post [(s/valid? ::ctx %)]}
  (.log js/console "with-inputs")
  (let [actx (::actx ctx)
        source (.createMediaStreamSource actx in-stream)
        splitter (.createChannelSplitter actx (.-channelCount source))]
    (.log js/console source splitter)
    (.connect source splitter)
    (assoc ctx ::ins splitter)))

(defn with-outputs [ctx]
  {:pre [(s/valid? ::ctx ctx)]
   :post [(s/valid? ::ctx %)]}
  (let [actx (::actx ctx)
        dest (.-destination actx)
        merger (.createChannelMerger actx (.-maxChannelCount dest))]
    (.connect merger dest)
    (assoc ctx ::outs merger)))

(defn make-ctx []
  {:post [(s/valid? ::ctx %)]}
  (with-outputs {::actx (js/AudioContext.)}))

(defmethod make-audio-node ::output
  [{::keys [actx outs]} {::keys [channel-idx]}]
  (let [node (.createGain actx)]
    (if channel-idx
      (.connect node outs 0 channel-idx)
      (.connect node (.-destination actx)))
    node))

(defmethod make-audio-node ::input
  [{::keys [actx ins]} {::keys [channel-idx]}]
  (let [node (.createGain actx)]
    (.connect ins node channel-idx)
    node))

(defn set-param [node param-name value]
  (cond
    (number? value)
    (oset!+ node (str param-name ".value") value)
    (satisfies? IWatchable value)
    (add-watch value param-name #(set-param node param-name %4))))

(defmethod make-audio-node :default
  [{::keys [actx]} {::keys [audio-node-type constructor props]
                    ::synthdef/keys [static-params]}]
  (let [node (js-invoke actx constructor)]
    (doseq [[k v] props]
      (oset!+ node k v))
    (doseq [[k v] static-params]
      (set-param node k v))
    (when (= ::source audio-node-type)
      (.start node))
    node))

(defmethod synthdef/make-edge [::audio-node ::audio-node]
  [_ src dest {::synthdef/keys [param-name]}]
  (.connect src (if (not= ::input param-name)
                  (oget+ dest param-name)
                  dest)))

;;

(defn out
  ([in] (out in nil))
  ([in channel-idx]
   (synthdef/synthdef
     {::synthdef/node-type ::audio-node
      ::audio-node-type ::output
      ::channel-idx channel-idx}
     {::input [in]})))

(defn in [channel-idx]
  (synthdef/synthdef
    {::synthdef/node-type ::audio-node
     ::audio-node-type ::input
     ::channel-idx channel-idx}
    {}))

(defn gain [in & gains]
  (synthdef/synthdef
    {::synthdef/node-type ::audio-node
     ::audio-node-type ::effect
     ::constructor "createGain"}
    {::input [in]
     "gain" gains}))

(defn mix [& ins]
  (synthdef/synthdef
    {::synthdef/node-type ::audio-node
     ::audio-node-type ::effect
     ::constructor "createGain"}
    {::input ins}))

(defn const [& offsets]
  (synthdef/synthdef
    {::synthdef/node-type ::audio-node
     ::audio-node-type ::source
     ::constructor "createConstantSource"}
    {"offset" offsets}))

(defn oscillator
  ([type frequency] (oscillator type frequency 0))
  ([type frequency detune]
   (synthdef/synthdef
     {::synthdef/node-type ::audio-node
      ::audio-node-type ::source
      ::constructor "createOscillator"
      ::props {"type" type}}
     {"frequency" [0 frequency]
      "detune" [0 detune]})))

(def sin-osc (partial oscillator "sine"))
(def saw (partial oscillator "sawtooth"))
(def square (partial oscillator "square"))
(def tri-osc (partial oscillator "triangle"))

(defn lfo [bias scale freq]
  (mix (const bias)
       (gain (sin-osc freq) scale)))

(defn biquad-filter
  ([type in freq] (biquad-filter type in freq -1))
  ([type in freq q]
   (synthdef/synthdef
     {::synthdef/node-type ::audio-node
      ::audio-node-type ::effect
      ::constructor "createBiquadFilter"
      ::props {"type" type}}
     {::input [in]
      "frequency" [0 freq]
      "Q" [0 q]})))

(def lpf (partial biquad-filter "lowpass"))
(def hpf (partial biquad-filter "highpass"))
(def bpf (partial biquad-filter "bandpass"))

(defn delay-node [in time]
  (synthdef/synthdef
    {::synthdef/node-type ::audio-node
     ::audio-node-type ::effect
     ::constructor "createDelay"}
    {::input [in]
     "delayTime" [0 time]}))

(defn panner [in amt]
  (synthdef/synthdef
    {::synthdef/node-type ::audio-node
     ::audio-node-type ::effect
     ::constructor "createStereoPanner"}
    {::input [in]
     "pan" [0 amt]}))

(defn compressor
  [in threshold knee ratio reduction attack release]
  (synthdef/synthdef
    {::synthdef/node-type ::audio-node
     ::audio-node-type ::effect
     ::constructor "createDynamicsCompressor"}
    {::input [in]
     "threshold" [-24 threshold]
     "knee" [30 knee]
     "ratio" [12 ratio]
     "reduction" [0 reduction]
     "attack" [0.003 attack]
     "release" [0.25 release]}))
