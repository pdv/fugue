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

(defn file-browser [open-files filenames on-change]
  [:ul.ide-file-list
   (for [filename filenames]
     ^{:key filename}
     [:li
      {:on-click #(on-change filename)
       :style {:color (if (contains? open-files filename) "#666" "inherit")}}
      filename])])

(defn tabs-component [selected tab-names on-change on-close]
  [:ul.ide-tabs
   (for [name tab-names]
     ^{:key name}
     [:li {:class-name (if (= selected name) "selected" "unselected")}
      [:a.ide-tabs-name {:on-click #(on-change name)} name]
      [:a.ide-tabs-close {:on-click #(on-close name)} "✕"]])])

(def init-state
  {:buffer ""
   :tabs ["user"]
   :curr-tab "user"
   :files init-files
   :input ""
   :selection ""
   :output ""
   :rendering welcome
   :vim-on true})

(defn load-buffer [state name]
  (-> state
      (assoc :buffer (get-in state [:files name]))
      (assoc :curr-tab name)))

(defn counter [name]
  (let [state (r/atom 0)]
    (fn []
      [:button {:on-click #(swap! state inc)}
       (str "Clicked " @state " times by " name)])))

(defn ide [eval-fn]
  (let [state (r/atom init-state)]
    (fn []
      [counter])))

      (comment
        [:div.ide
         [:div.ide-left
          [counter]]
         [:div.ide-right
          [:div.ide-editor-container
           [file-browser @tabs (keys @files) (fn [new-filename]
                                               (swap! tabs #(if (not (contains? % new-filename))
                                                              (conj % new-filename)
                                                              %))
                                               (reset! demo (get @files new-filename))
                                               (reset! current-tab new-filename))]
           [:div.ide-tab-container
            (if (> (count @tabs) 0)
              [tabs-component
               @current-tab
               @tabs
               (fn [tab-name]
                 (reset! demo (get @files tab-name))
                 (reset! current-tab tab-name))
               (partial swap! tabs disj)] [:div])
            [editor @demo
             (fn [new-input] (swap! files #(assoc % @current-tab new-input)))
             (partial reset! selected)
             #(eval-fn @selected (partial reset! eval-out))
             {:keyMap (if @vim-on "vim" "default")}]]]
          [:div.ide-toolbar
           [:button
            {:on-click #(eval-fn (get @files @current-tab) (partial reset! eval-out))}
            "eval"]
           [:button
            {:on-click #(eval-fn @selected (partial reset! eval-out))
             :disabled (empty? @selected)}
            "eval selection (ctrl-shift-space)"]
           [:button
            {:on-click #(reset! render-out @eval-out)
             :disabled (not (vector? (:value @eval-out)))}
            "render"]
           [:button
            {:on-click #(swap! vim-on not)}
            (str (if @vim-on "disable" "enable") " vim bindings")]]
          [:div.ide-output-container
           [output-box @eval-out]]]])
