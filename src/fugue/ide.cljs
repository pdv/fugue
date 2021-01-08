(ns fugue.ide
  (:require [reagent.core :as r]
            [fugue.editor :refer [editor output-box]]))

(defn ide [init eval-fn]
  (let [input (r/atom init)
        output (r/atom nil)
        vim-on (r/atom true)]
    (fn []
      [:div.ide
       [:div.ide-left
        (when @output
          [output-box @output])]
       [:div.ide-right
        [editor init (partial reset! input) {:keyMap (if @vim-on "vim" "default")}]
        [:div.ide-toolbar
         [:button#eval
          {:on-click #(eval-fn @input (partial reset! output))}
          "eval"]
         [:button
          {:on-click #(swap! vim-on not)}
          (str "vim on?" @vim-on)]]
        [editor "repl" (partial print) {:readOnly true}]]])))
