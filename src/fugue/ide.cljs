(ns fugue.ide
  (:require [reagent.core :as r]
            [clojure.string :refer [join trim]]
            [fugue.components :refer [picker]]
            [fugue.demo.demo-loader :as demo-loader]
            [fugue.editor :refer [editor output-box]]))

(defn prepare-demo
  "Drops everything before the first comment (the ns clause)"
  [text]
  (join "" (drop-while (partial not= ";") text)))

(def init-files
  {"harmonic cantor table" demo-loader/cantor
   "circle of intervals" demo-loader/cof
   "midi chord detector" demo-loader/midi-monitor
   "user" "(ns fugue.user)\n\n"})

(def welcome
  [:div
    [:h2 "welcome to fugue"]
    [:p "click 'eval' to evaluate the buffer"]
    [:p "then click 'render' to display the ui"]])

(defn file-browser [filenames open-files on-select]
  [:ul.ide-file-list
   (for [filename filenames]
     ^{:key filename}
     [:li
      {:on-click #(on-select filename)
       :style {:color (if (contains? open-files filename) "#666" "inherit")}}
      filename])])

(defn tabs [tab-names selected-tab-name on-select on-close]
  [:ul.ide-tabs
   (for [name tab-names]
     ^{:key name}
     [:li {:class-name (if (= selected-tab-name name) "selected" "unselected")}
      [:a.ide-tabs-name {:on-click #(on-select name)} name]
      [:a.ide-tabs-close {:on-click #(on-close name)} "✕"]])])

(def init-state
  {:buffer ""
   :tabs #{"user"}
   :curr-tab "user"
   :files {"user" ""}
   :input ""
   :selection ""
   :output ""
   :rendering welcome
   :vim-on true})

(defn load-buffer [state name]
  (-> state
      (update :tabs conj name)
      (assoc :buffer (get-in state [:files name]))
      (assoc :curr-tab name)))

(defn ide [eval-fn]
  (let [state (r/atom init-state)]
    (defn eval! [text]
      (eval-fn text (partial swap! state assoc :output)))
    (fn []
      [:div.ide
       [:div.ide-left (:rendering @state)]
       [:div.ide-right
        [:div.ide-editor-container
         [file-browser
          (keys (:files @state))
          (:tabs @state)
          (partial swap! state load-buffer)]
         [:div.ide-tab-container
          [tabs
           (:tabs @state)
           (:curr-tab @state)
           (partial swap! state load-buffer)
           (partial swap! state update :tabs disj)]
          [editor
           (:buffer @state)
           (partial swap! state assoc :input)
           (partial swap! state assoc :selection)
           #(eval! (:selection @state))
           {:keyMap (if (:vim-on @state) "vim" "default")}]]]
        [:div.ide-toolbar
         [:button {:on-click #(eval! (:input @state))} "eval"]
         [:button
          {:on-click #(eval! (:selected @state))
           :disabled (empty? (:selected @state))}
            "eval selection (ctrl-shift-space)"]
         [:button
          {:on-click #(swap! state assoc :rendering (:output @state))
           :disabled (not (vector? (:output @state)))}
           "render"]
         [:button
          {:on-click #(swap! state update :vim-on not)}
          (str (if (:vim-on @state) "disable" "enable") " vim bindings")]]
        [:div.ide-output-container
         [output-box (:output @state)]]]])))
