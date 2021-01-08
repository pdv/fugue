(ns fugue.ide
  (:require [reagent.core :as r]
            [fugue.editor :refer [editor output-box]]))

(defn ide [init eval-fn]
  (let [input (r/atom init)
        output (r/atom nil)]
    (fn []
      [:div.ide
       [:div.ide-left
        (when @output
          [output-box @output])]
       [:div.ide-right
        [editor init (partial reset! input)]
        [:div.ide-toolbar
         [:button#eval
          {:on-click #(eval-fn @input (partial reset! output))}
          "eval"]]
        [editor "repl" (partial print)]]])))
