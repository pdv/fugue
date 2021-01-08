(ns fugue.midi-monitor
  (:require [reagent.core :as r]
            [cljs.core.async :as async]
            [fugue.midi :as midi]
            [fugue.chords :as chords]))

(defn midi-selector [midi-ctx on-change]
  [:div
   (if-let [mctx @midi-ctx]
     (do
       (on-change (second (first (::midi/ins mctx))))
       [:select {:on-change #(on-change ((::midi/ins mctx) (.. % -target -value)))}
        (for [[in-name] (::midi/ins mctx)]
          [:option {:value in-name} in-name])])
     "no midi ctx")])

(defn note-on? [midi-msg]
  (and (= ::midi/note-on (::midi/type midi-msg))
       (not= 0 (::midi/velocity midi-msg))))

(defn note-off? [midi-msg]
  (case (::midi/type midi-msg)
    ::midi/note-off true
    ::midi/note-on (= 0 (::midi/velocity midi-msg))
    false))

(defn note-monitor [in-mult]
  (let [msgs (r/atom {})
        in-chan (async/chan)]
    (async/go-loop []
                   (let [msg (async/<! in-chan)]
                     (cond
                       (note-on? msg)
                       (swap! msgs assoc (::midi/note msg) msg)
                       (note-off? msg)
                       (swap! msgs dissoc (::midi/note msg)))
                     (recur)))
    (async/tap in-mult in-chan)
    (fn []
      (let [notes (keys @msgs)
            possible-chords (chords/possible-chords notes)
            contained-chords (chords/contained-chords notes)]
        [:div
         [:p (str notes)]
         [:ul
          (for [chord possible-chords]
            [:li (str chord)])]
         [:hr]
         [:ol
          (for [chord contained-chords]
            [:li (str chord)])]]))))

(defn monitor [midi-ctx]
  (let [in-chan (r/atom nil)]
    (fn []
      [:div
       [midi-selector midi-ctx (partial reset! in-chan)]
       (if-let [in-chan @in-chan]
         [note-monitor in-chan]
         "no input selected")])))