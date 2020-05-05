(ns webcv.audio
  (:require [goog.object :as o]))

(defn make-ctx
  ([]
   (when-let [old-ctx (:ctx @state)]
     (.close old-ctx))
   (.then (.getUserMedia (.-mediaDevices js/navigator)
                         (clj->js {:audio true}))
          (partial make-ctx)))
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
     {:ctx ctx :outs outs :ins ins})))

(defprotocol Modulator
  (attach! [this param]))

(extend-protocol Modulator
  number
  (attach! [this param]
    (o/set param "value" this))
  js/AudioNode
  (attach! [this param]
    (.connect this param)))

(defn make-node 
  [{:keys [ctx ins outs]} nodedef]
  (case (:type nodedef)
    :input 
    (doto (.createGain ctx)
      #(.connect ins % (:channel nodedef)))
    :output
    (doto (.createGain ctx)
      (.connect outs 0 idx))
    (:source :effect)
    (let [node (js-invoke ctx (:constructor nodedef))]
      (doseq [[param-name value] (:static-params nodedef)]
        (o/set node param-name value))
      (doseq [[param-name modulators] (:audio-params nodedef)
              :let [param (o/get node param-name)]
              modulator modulators]
        (attach! modulator param))
      (when (= :source (:type nodedef))
        (.start node))
      node)))

