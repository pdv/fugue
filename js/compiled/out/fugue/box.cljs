(ns fugue.box
  (:require [reagent.core :as r]
            [fugue.editor :refer [editor output-box]]))

(defn name-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn box [init eval-fn]
  (let [name (r/atom "")
        input (r/atom init)
        output (r/atom nil)]
    (fn []
      [:div.box
       [:div.box-toolbar
        (if @output
          [:p @name]
          [:div
           [name-input name]
           [:button#eval
            {:on-click #(eval-fn @input (partial reset! output))
             :disabled (empty? @name)}
            "evaluate"]])
        [:button#close {:on-click ()} "close"]]
       (when @output
         [:div.box-top
          [output-box @output]])
       [:div.box-bottom
        [editor init (partial reset! input)]]])))
