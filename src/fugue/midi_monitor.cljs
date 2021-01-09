(ns fugue.midi-monitor
  (:require [reagent.core :as r]
            [cljs.core.async :as async]
            [fugue.cof :refer [cof]]
            [fugue.midi :as midi]
            [fugue.chords :as chords]))

(defn midi-selector [midi-ctx on-change]
  (if-let [mctx @midi-ctx]
    (do
      [:select {:on-change #(on-change ((::midi/ins mctx) (.. % -target -value)))}
       [:option {:value nil} "Select an input"]
       (for [[in-name] (::midi/ins mctx)]
         [:option {:value in-name} in-name])])
    [:p "no midi ctx"]))

(defn note-on? [midi-msg]
  (and (= ::midi/note-on (::midi/type midi-msg))
       (not= 0 (::midi/velocity midi-msg))))

(defn note-off? [midi-msg]
  (case (::midi/type midi-msg)
    ::midi/note-off true
    ::midi/note-on (= 0 (::midi/velocity midi-msg))
    false))

(defn note-monitor-view [notes]
  [:div
   [cof notes]
   [:p (str notes)]
   [:ul
    (for [chord (chords/possible-chords notes)]
      [:li (str chord)])]
   [:hr]
   [:ol
    (for [chord (chords/contained-chords notes)]
      [:li (str chord)])]])

(defn monitor [midi-ctx]
  (let [msgs (r/atom {})
        in-mult (r/atom nil)
        in-chan (async/chan)]
    (async/go-loop []
                   (let [msg (async/<! in-chan)]
                     (print msg)
                     (cond
                       (note-on? msg)
                       (swap! msgs assoc (::midi/note msg) msg)
                       (note-off? msg)
                       (swap! msgs dissoc (::midi/note msg)))
                     (recur)))
    (fn []
      [:div
       [midi-selector midi-ctx (fn [in]
                                 (when-let [old-mult @in-mult]
                                   (async/untap old-mult in-chan))
                                 (reset! msgs {})
                                 (when-let [new-mult in]
                                   (async/tap new-mult in-chan))
                                 (reset! in-mult in))]
       [note-monitor-view (keys @msgs)]])))