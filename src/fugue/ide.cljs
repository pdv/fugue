(ns fugue.ide
  (:require [reagent.core :as r]
            [fugue.editor :refer [editor output-box]]))

(defn ide [init eval-fn]
  (let [input (r/atom init)
        render-out (r/atom nil)
        eval-out (r/atom nil)
        vim-on (r/atom true)]
    (fn []
      [:div.ide
       [:div.ide-left
        (let [component (:value @render-out)]
          (if (vector? component) component))]
       [:div.ide-right
        [editor init (partial reset! input) {:keyMap (if @vim-on "vim" "default")}]
        [:div.ide-toolbar
         [:button#eval
          {:on-click #(eval-fn @input (partial reset! eval-out))}
          "eval"]
         [:button#eval
          {:on-click #(reset! render-out @eval-out)}
          "render"]
         [:button
          {:on-click #(swap! vim-on not)}
          (str "vim on?" @vim-on)]]
        [output-box @eval-out]]])))
