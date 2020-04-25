(ns webcv.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

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

(defn sin-osc [freq]
  (let [node (.createOscillator (:ctx @state))]
    (set! (.-value (.-frequency node)) freq)
    (.start node)
    node))

(defn v [volts] (/ volts 10))

(defn const [v]
  (let [node (.createConstantSource (:ctx @state))]
    (set! (.-value (.-offset node)) v)
    (.start node)
    node))

(defn greeting [message]
  [:h1 message])

(defn main []
  (enable-console-print!)
  (reset-ctx!)
  (rdom/render [greeting "howdy"] (js/document.getElementById "app")))

(main)

