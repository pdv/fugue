(ns fugue.editor
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [oops.core :refer [oget]]
            [clojure.string :refer [blank?]]
            [cljs.pprint :refer [pprint]]
            [cljs.repl :refer [Error->map]]))

(.registerHelper js/CodeMirror "hintWords" "clojure"
                 #js ["midi" "audio" "buffer" "render"])

(defn editor [init on-change on-selection-change on-shortcut settings]
  (let [codemirror (volatile! nil)]
  (r/create-class
    {:render
     (fn [] [:textarea.editor {:default-value init}])
     :component-did-mount
     (fn [this]
       (let [node (rdom/dom-node this)
             settings (clj->js (merge settings {:mode "clojure" :lineNumbers true}))
             cm (.fromTextArea js/CodeMirror node settings)]
         (.setOption cm "extraKeys", #js {"Ctrl-Space" on-shortcut})
         (.on cm "change" #(on-change (.getValue %)))
         (.on cm "cursorActivity" #(on-selection-change (.getSelection %)))
         (.on cm "inputRead" (fn [_ event]
                               (if (re-find #"[a-zA-Z]" (first (oget event "text")))
                                 (.showHint cm #js {:completeSingle false}))))
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
