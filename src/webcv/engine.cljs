(ns webcv.engine
  (:require [goog.object :as o]))

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
    (o/set param "value" this)))

(defn node [{:keys [constructor static-params audio-params]}]
  (let [node (js-invoke (:ctx @state) constructor)]
    (doseq [[param-name value] static-params]
      (o/set node param-name value))
    (doseq [[param-name modulator] audio-params]
      (attach! modulator (o/get node param-name)))
    node))

(defn source [nodedef]
  (doto (node nodedef) (.start)))

(defn effect [nodedef in]
  (doto (node nodedef)
    (partial (.connect in))))

