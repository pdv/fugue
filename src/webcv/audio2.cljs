(ns webcv.audio2
  (:require [clojure.spec.alpha :as s]
            [oops.core :refer [oset! oget+]]
            [webcv.synthdef :as synthdef]))

(s/def ::actx #(== js/AudioContext (type %)))
(s/def ::outs #(== js/ChannelMergerNode (type %)))
(s/def ::node #(== js/AudioNode (type %)))
(s/def ::ctx (s/keys :req [::actx ::outs]))
(s/def ::constructor string?)

(defmulti audio-node-spec ::audio-node-type)
(defmethod synthdef/node-spec ::audio-node [_]
  (s/multi-spec audio-node-spec ::audio-node-type))
(defmethod audio-node-spec ::output [_]
  (s/keys :req [::channel-idx]))
(defmethod audio-node-spec :default [_]
  (s/keys :req [::constructor]))

(defmulti make-audio-node (fn [_ nodedef] (::audio-node-type nodedef)))
(defmethod synthdef/make-node ::audio-node [ctx nodedef]
  (make-audio-node ctx nodedef))

(defn make-ctx
  ([]
   {:post [(s/valid? ::ctx %)]}
   (let [ctx (js/AudioContext.)
         dest (.-destination ctx)
         out-chans (.-maxChannelCount dest)
         outs (.createChannelMerger ctx out-chans)]
     (set! (.-channelCount dest) out-chans)
     (.connect outs dest)
     {::actx ctx ::outs outs})))

(defmethod make-audio-node ::output
  [{::keys [actx outs]} {::keys [channel-idx]}]
  (doto (.createGain actx)
    (.connect , outs 0 channel-idx)))

(defmethod make-audio-node :default
  [{::keys [actx]} {::keys [audio-node-type constructor props]
                    ::synthdef/keys [static-params]}]
  (let [node (js-invoke actx constructor)]
    (doseq [[k v] props]
      (oset! node k v))
    (doseq [[k v] static-params]
      (oset! node (str k ".value") v))
    (when (= ::source audio-node-type)
      (.start node))
    node))

(defmethod synthdef/make-edge [::audio-node ::audio-node]
  [_ src dest {::synthdef/keys [param-name]}]
  (.connect src (if (not= ::input param-name)
                  (oget+ dest param-name)
                  dest)))

;;

(defn out [& ins]
  (synthdef/synthdef
    {::synthdef/node-type ::audio-node
     ::audio-node-type ::output
     ::channel-idx 0}
    {::input ins}))

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
