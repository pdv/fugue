(ns fugue.ide.popup
  (:require [reagent.core :as r]
            [clojure.string :as s]
            [fugue.ide.editor :refer [editor]]))

(defn keyboard [actions]
  [:div.popup>ul
   (for [[key name] actions]
     [:li (str key " - " name)])])

(defn mini-buffer [options on-close on-submit]
  (let [input (r/atom "")
        highlighted (r/atom 0)]
    (fn []
      [:div.popup.focused
       [editor
        @input
        true
        (partial reset! input)
        #()
        {:theme "base16-ocean"
         :lineNumbers false
         :extraKeys #js {"Escape" on-close
                         "Enter" #(on-submit @input)}}]
       [:ul
        (for [[i option] (map-indexed vector (filter #(s/starts-with? % @input) options))]
          [:li {:class-name (if (= i @highlighted) "minibuffer-selected" "foobar")} option])]])))

(def popup-options
  {[" "] {"1-9" "jump to buffer"
          "e" "eval"
          "w" "window"}
   [" " "e"] {"b" "eval current buffer"}
   [" " "w"] {"/" "split left-right"
              "-" "split top-bottom"
              "x" "kill buffer and window"}})

(def function-names
  {"open-file" ["name" "direction"]
   "kill-buffer" ["id"]})

(defn popup [state]
  (if-let [options (get popup-options (:key-seq state))]
    [keyboard options]
    (if (:minibuffer state)
      [mini-buffer (keys function-names)])))