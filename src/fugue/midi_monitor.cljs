(ns fugue.midi-monitor
  (:require [reagent.core :as r]
            [cljs.core.async :as async]
            [fugue.midi :as midi]))

(defn midi-selector [midi-ctx on-change]
  [:div
   (if-let [mctx @midi-ctx]
     [:select {:on-change #(on-change ((::midi/ins mctx) (.. % -target -value)))}
      (for [[in-name] (::midi/ins mctx)]
        [:option {:value in-name} in-name])]
     "no midi ctx")])

(defn note-monitor [in-mult]
  (let [msgs (r/atom {})
        in-chan (async/chan)]
    (async/go-loop []
                   (let [msg (async/<! in-chan)]
                     (if (< 0 (::midi/velocity msg))
                       (swap! msgs assoc (::midi/note msg) msg)
                       (swap! msgs dissoc (::midi/note msg)))
                     (recur)))
    (async/tap in-mult in-chan)
    (fn []
      [:ul
       (for [[_ msg] @msgs]
         [:li (str msg)])])))

(defn monitor [midi-ctx]
  (let [in-chan (r/atom nil)]
    (fn []
      [:div
       [midi-selector midi-ctx (partial reset! in-chan)]
       (if-let [in-chan @in-chan]
         [note-monitor in-chan]
         "no input selected")])))