(ns webcv.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(defonce ctx (js/AudioContext.))
(defonce dest (.-destination ctx))
(defonce out-channel-count (.-maxChannelCount dest))
(defonce mixer (.createChannelMerger ctx out-channel-count))

(defn out [n v]
  (.connect v mixer 0 n))

(defn sin-osc [freq]
  (let [node (.createOscillator ctx)]
    (set! (.-value (.-frequency node)) freq)
    (.start node)
    node))

(defn greeting [message]
  [:h1 message])

(defn main []
  (enable-console-print!)
  (set! (.-channelCount dest) out-channel-count)
  (.connect mixer dest)
  (rdom/render [greeting "howdy"] (js/document.getElementById "app")))

(main)

