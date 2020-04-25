(ns webcv.core
    (:require ))

(enable-console-print!)

(defonce app-state (atom {:text "Hello world!"}))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

(def ctx (js/AudioContext.))
(def dest (.-destination ctx))
(set! (.-channelCount dest) (.-maxChannelCount dest))
(def mixer (.createChannelMerger ctx (.-channelCount dest)))
(.connect mixer dest)

(defn out [n v]
  (.connect v mixer 0 n))

(defn sin-osc [freq]
  (let [node (.createOscillator ctx)]
    (set! (.-value (.-frequency node)) freq)
    (.start node)
    node))
