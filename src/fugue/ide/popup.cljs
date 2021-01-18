(ns fugue.ide.popup
  (:require [reagent.core :as r]
            [clojure.string :as string]
            [fugue.ide.editor :refer [editor]]))

(defn mini-buffer [options on-esc on-submit]
  (let [filtered (r/atom options)
        highlighted (r/atom 0)]
    (fn []
      [:div.popup.focused
       [editor
        ""
        true
        (fn [text]
          (reset! filtered (filter #(string/includes? % text) options)))
        #()
        {:theme "base16-ocean"
         :lineNumbers false
         :extraKeys #js {"Esc" on-esc
                         "Up" (fn []
                                (swap! highlighted #(max 0 (dec %))))
                         "Down" (fn []
                                  (swap! highlighted #(min (dec (count @filtered))
                                                           (inc %))))
                         "Tab" (fn [cm]
                                 (.setValue cm (nth @filtered @highlighted))
                                 (.setCursor cm (.lineCount cm) 0))
                         "Enter" #(on-submit (nth @filtered @highlighted))}}]
       (if (not-empty @filtered)
         [:ul {:foo @highlighted}
          (for [[i option] (map-indexed vector @filtered)]
            [:li {:class-name (if (= i @highlighted) "minibuffer-selected" "")} option])]
         [:ul>li "no results"])])))

(defn popup-content [options]
  [:div.popup.focused>ul
   (for [[key name] options]
     [:li (str key " - " name)])])
