(ns fugue.editor
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
