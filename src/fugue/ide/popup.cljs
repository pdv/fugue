(ns fugue.ide.popup
  (:require [reagent.core :as r]
            [clojure.string :as string]
            [fugue.ide.state :as s]
            [fugue.ide.editor :refer [editor]]))

(defn keyboard [actions]
  [:div.popup>ul
   (for [[key name] actions]
     [:li (str key " - " name)])])

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

(def popup-options
  {[" "] {"1-9" "jump to buffer"
          "e" "eval"
          "w" "window"}
   [" " "e"] {"b" "eval current buffer"}
   [" " "w"] {"/" "split left-right"
              "-" "split top-bottom"
              "x" "kill buffer and window"}})

(defn popup [state on-esc actions cb]
  (if-let [options (get popup-options (:key-seq state))]
    [keyboard options]
    (if (:minibuffer state)
      [mini-buffer
       (keys actions)
       on-esc
       #((get actions %) (s/close-minibuffer state) cb)])))