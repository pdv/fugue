(ns webcv.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(defonce state (atom {:ctx nil :mixer nil}))

(defn reset-ctx! []
  (when-let [old-ctx (:ctx @state)]
    (.close old-ctx))
  (let [ctx (js/AudioContext.)
        dest (.-destination ctx)
        chans (.-maxChannelCount dest)
        mixer (.createChannelMerger ctx chans)]
    (set! (.-channelCount dest) chans)
    (.connect mixer dest)
    (reset! state {:ctx ctx :mixer mixer})))

(defn out [n v]
  (.connect v (:mixer @state) 0 (dec n)))

(defn sin-osc [freq]
  (let [ctx (:ctx @state)
        node (.createOscillator ctx)]
    (set! (.-value (.-frequency node)) freq)
    (.start node)
    node))

(defn greeting [message]
  [:h1 message])

(defn main []
  (enable-console-print!)
  (reset-ctx!)
  (rdom/render [greeting "howdy"] (js/document.getElementById "app")))

(main)

