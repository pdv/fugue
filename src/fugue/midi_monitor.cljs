(ns fugue.midi-monitor
  (:require [reagent.core :as r]
            [goog.string :refer [format]]
            [goog.string.format]
            [cljs.core.async :as async]
            [fugue.cof :refer [cof]]
            [fugue.cantor :as cantor]
            [fugue.components :refer [slider picker]]
            [fugue.midi :as midi]
            [fugue.chords :as chords]))

(defn note-on? [midi-msg]
  (and (= ::midi/note-on (::midi/type midi-msg))
       (not= 0 (::midi/velocity midi-msg))))

(defn note-off? [midi-msg]
  (case (::midi/type midi-msg)
    ::midi/note-off true
    ::midi/note-on (= 0 (::midi/velocity midi-msg))
    false))

(defn midi-selector [midi-ins on-change]
  [:select {:on-change #(on-change (get midi-ins (.. % -target -value)))}
   [:option {:value nil} "Select an input"]
   (for [[in-name _] midi-ins]
     [:option {:value in-name} in-name])])

(defn input-monitor [_ notes-cb]
  (let [msgs (r/atom {})
        in-mult (r/atom nil)
        in-chan (async/chan)]
    (async/go-loop []
      (let [msg (async/<! in-chan)]
        (cond
          (note-on? msg) (swap! msgs assoc (::midi/note msg) msg)
          (note-off? msg) (swap! msgs dissoc (::midi/note msg)))
        (notes-cb (keys @msgs))
        (recur)))
    (fn [midi-ctx]
      [midi-selector
       (::midi/ins midi-ctx)
       (fn [in]
         (when-let [old-mult @in-mult]
           (async/untap old-mult in-chan))
         (reset! msgs {})
         (when-let [new-mult in]
           (async/tap new-mult in-chan))
         (reset! in-mult in))])))