(ns fugue.editor
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs.pprint :refer [pprint]]
            [cljs.repl :refer [Error->map]]))

(defn editor [init on-change settings]
  (let [codemirror (volatile! nil)]
  (r/create-class
    {:render
     (fn [] [:textarea.editor {:default-value init}])
     :component-did-mount
     (fn [this]
       (let [node (rdom/dom-node this)
             settings (clj->js (merge settings {:mode "clojure" :lineNumbers true}))
             cm (.fromTextArea js/CodeMirror node settings)]
         (.on cm "change" #(on-change (.getValue %)))
         (vreset! codemirror cm)
         (js/setTimeout #(on-change init) 5)))
     :component-did-update
     (fn [this old-argv]
       (doseq [[key value] (last (r/argv this))]
         (.setOption @codemirror (clj->js key) value)))})))

(defn repl-out [text]
  [:textarea.repl-out {:read-only true :value text}])

(defn output-box [{:keys [value error]}]
  (repl-out (if error
              (:cause (Error->map error))
              (with-out-str (pprint value)))))
