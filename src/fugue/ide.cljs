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

(def demos
  {"harmonic cantor table" demo-loader/cantor
   "circle of intervals" demo-loader/cof
   "midi monitor" demo-loader/midi-monitor})

(defn welcome [reset-input]
  (let [selected-demo (r/atom (first (keys demos)))]
    (fn []
      [:div
       [:h2 "welcome to fugue"]
       [:p "click 'eval' to evaluate the buffer"]
       [:p "then click 'render' to display the ui"]
       [picker selected-demo (keys demos)]
       [:button {:on-click #(reset-input (prepare-demo (get demos @selected-demo)))}
        "load demo"]])))

(defn ide [eval-fn]
  (let [demo (r/atom "")
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
        [editor @demo
         (partial reset! input)
         (partial reset! selected)
         #(eval-fn @selected (partial reset! eval-out))
         {:keyMap (if @vim-on "vim" "default")}]
        [:div.ide-toolbar
         [:button
          {:on-click #(eval-fn @input (partial reset! eval-out))}
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
        [output-box @eval-out]]])))
