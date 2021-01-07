(ns fugue.box
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs.pprint :refer [pprint]]
            [cljs.repl :refer [Error->map]]))

(defn editor [init on-change]
  (r/create-class
    {:render
     (fn [] [:textarea.editor {:default-value init}])
     :component-did-mount
     (fn [this]
       (let [node (rdom/dom-node this)
             settings #js {:mode "clojure" :lineNumbers true}
             cm (.fromTextArea js/CodeMirror node settings)]
         (.on cm "change" #(on-change (.getValue %)))
         (js/setTimeout #(on-change init) 5)))}))

(defn top-text [text]
  [:textarea.repl-out {:read-only true :value text}])

(defn output-box [{:keys [value error]}]
  (cond
    (vector? value) value
    error (top-text (:cause (Error->map error)))
    :else (top-text (with-out-str (pprint value)))))

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
