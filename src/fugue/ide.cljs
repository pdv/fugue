(ns fugue.ide
  (:require [reagent.core :as r]
            [fugue.editor :refer [editor output-box]]))

(defn ide [init eval-fn]
  (let [input (r/atom init)
        selected (r/atom "")
        render-out (r/atom nil)
        eval-out (r/atom nil)
        vim-on (r/atom true)]
    (fn []
      [:div.ide
       [:div.ide-left
        (let [component (:value @render-out)]
          (if (vector? component) component))]
       [:div.ide-right
        [editor init
         (partial reset! input)
         (partial reset! selected)
         {:keyMap (if @vim-on "vim" "default")}]
        [:div.ide-toolbar
         [:button
          {:on-click #(eval-fn @input (partial reset! eval-out))}
          "eval all"]
         [:button
          {:on-click #(eval-fn @selected (partial reset! eval-out))
           :disabled (empty? @selected)}
          "eval selection"]
         [:button
          {:on-click #(reset! render-out @eval-out)
           :disabled (not (vector? (:value @eval-out)))}
          "render"]
         [:button
          {:on-click #(swap! vim-on not)}
          (str "vim on?" @vim-on)]]
        [output-box @eval-out]]])))
