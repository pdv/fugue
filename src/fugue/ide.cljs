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

(defn welcome []
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
       :style {:backgroundColor (if (contains? open-files filename) "green" "inherit")}}
      filename])])

(defn tabs [selected filenames]
  [:ul.ide-tabs-list
   (for [filename filenames]
     ^{:key filename}
     [:li
      {:on-click #()
       :style {:backgroundColor (if (= selected filename) "green" "inherit")}}
      filename])])

(defn ide [eval-fn]
  (let [demo (r/atom "")
        filename (r/atom "user")
        files (r/atom init-files)
        open-files (r/atom [])
        input (r/atom "")
        selected (r/atom "")
        render-out (r/atom nil)
        eval-out (r/atom nil)
        vim-on (r/atom true)]
    (fn []
      [:div.ide
       [:div.ide-left
        (if-let [component (:value @render-out)]
          component
          [welcome (partial reset! demo)])]
       [:div.ide-right
        [:div.ide-editor-container
         [file-browser @filename (keys @files) (fn [new-filename]
                                                 (reset! demo (get @files new-filename))
                                                 (reset! filename new-filename))]
         [:div.ide-tab-container
          [tabs @filename (keys @files)]
          [editor @demo
           (fn [new-input] (swap! files #(assoc % @filename new-input)))
           (partial reset! selected)
           #(eval-fn @selected (partial reset! eval-out))
           {:keyMap (if @vim-on "vim" "default")}]]]
        [:div.ide-toolbar
         [:button
          {:on-click #(eval-fn (get @files @filename) (partial reset! eval-out))}
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
          [output-box @eval-out]]]])))
