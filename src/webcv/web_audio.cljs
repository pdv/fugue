(ns webcv.web-audio
  (:require [clojure.spec.alpha :as s]))

(defn type-is [type-name]
  (fn [x] (== type-name (type x))))

(s/def ::actx (type-is js/AudioContext))
(s/def ::outs (type-is js/ChannelMergerNode))
(s/def ::ctx (s/keys :req [::actx ::outs]))

(s/def ::promise (type-is js/Promise))
(s/def ::media-stream (type-is js/MediaStream))

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

(s/def ::node-type keyword?)

(defmulti node-spec ::node-type)
(s/def ::nodedef (s/multi-spec node-spec ::node-type))

(defmulti make-node (fn [_ nodedef] (::node-type nodedef)))
