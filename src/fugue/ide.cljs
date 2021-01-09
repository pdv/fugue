(ns fugue.ide
  (:require [reagent.core :as r]
            [fugue.cof :refer [cof]]
            [fugue.editor :refer [editor output-box]]))

(defn welcome []
  [:div
   [cof (range 12)]
   [:h2 "welcome to fugue"]
   [:p "click 'eval' to evaluate the buffer"]
   [:p "then click 'render' to display the ui"]])

(defn ide [init eval-fn]
  (let [input (r/atom init)
        selected (r/atom "")
        render-out (r/atom nil)
        eval-out (r/atom nil)
        vim-on (r/atom true)]
    (fn []
      [:div.ide
       [:div.ide-left
        (if-let [component (:value @render-out)]
          component
          [welcome])]
       [:div.ide-right
        [editor init
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
