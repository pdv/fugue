(ns fugue.midi-monitor
  (:require [reagent.core :as r]
            [goog.string :refer [format]]
            [goog.string.format]
            [cljs.core.async :as async]
            [fugue.cof :refer [cof]]
            [fugue.cantor :as cantor]
            [fugue.components :refer [slider picker]]
            [fugue.midi :as midi]
            [fugue.keyboard :as kb]
            [fugue.chords :as chords]))

(defn midi-selector [midi-ins on-change]
  [:select {:on-change #(on-change (get midi-ins (.. % -target -value)))}
   [:option {:value nil} "choose an input"]
   (for [[in-name _] midi-ins]
     [:option {:value in-name} in-name])])

(defn midi-input-selector [midi-ctx out-chan]
  (let [in-mult (r/atom nil)]
    (fn []
      [midi-selector
       (::midi/ins midi-ctx)
       (fn [in]
         (when-let [old-mult @in-mult]
           (async/untap old-mult out-chan))
         (when-let [new-mult in]
           (async/tap new-mult out-chan))
         (reset! in-mult in))])))

(defn midi-input [out-chan]
  (let [midi-ctx (r/atom nil)
        using-keyboard (r/atom false)]
    (fn []
      (if-let [ctx @midi-ctx]
        (midi-input-selector ctx out-chan)
        (if @using-keyboard
          [:p "A is C, W is A#, S is D, etc. Z down octave X up"]
          [:div
           [:button {:on-click #(midi/make-ctx (partial reset! midi-ctx))}
            "midi input"]
           [:button {:on-click (fn []
                                 (async/pipe (kb/kb-midi-chan) out-chan)
                                 (reset! using-keyboard true))}
            "computer keyboard"]])))))

