(ns fugue.ide.popup
  (:require [reagent.core :as r]
            [clojure.string :as string]
            [fugue.ide.editor :refer [editor]]))

(defn mini-buffer [options on-esc on-submit]
  (let [text (r/atom "")
        highlighted (r/atom 0)]
    (fn [options on-esc on-submit]
      (let [filtered (filter #(string/includes? (str %) @text) options)]
        [:div.popup.focused
         [editor
          ""
          (first options) ;; triggers clear on prop change
          true
          (partial reset! text)
          #()
          {:theme "base16-ocean"
           :lineNumbers false
           :extraKeys #js {"Esc" on-esc
                           "Up" (fn []
                                  (swap! highlighted #(max 0 (dec %))))
                           "Down" (fn []
                                    (swap! highlighted #(min (dec (count filtered))
                                                             (inc %))))
                           "Tab" (fn [cm]
                                   (.setValue cm (nth filtered @highlighted))
                                   (.setCursor cm (.lineCount cm) 0))
                           "Enter" #(on-submit (nth filtered @highlighted))}}]
         (if (not-empty filtered)
            [:ul {:foo @highlighted}
             (for [[i option] (map-indexed vector filtered)]
               [:li {:key i :class-name (if (= i @highlighted) "minibuffer-selected" "")} option])]
            [:ul>li "no results"])]))))

(defn shortcuts-popup [options]
  [:div.popup.focused>ul
   (for [[key name] (sort-by first options)]
     [:li {:key key} (str key " - " name)])])
