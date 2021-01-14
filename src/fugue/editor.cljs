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
         (.setOption cm "extraKeys", #js {"Shift-Ctrl-Space" on-shortcut})
         (.defineAction js/CodeMirror.Vim "space" on-shortcut)
         (.mapCommand js/CodeMirror.Vim "<Space>" "action" "space" #js {} #js {"context" "normal"})
         (.on cm "change" #(on-change (.getValue %)))
         (.on cm "cursorActivity" #(on-selection-change (.getSelection %)))
         (.on cm "inputRead" (fn [_ event]
                               (if (re-find #"[a-zA-Z]" (first (oget event "text")))
                                 (.showHint cm #js {:completeSingle false}))))
         (vreset! codemirror cm)
         (js/setTimeout #(on-change init) 5)))
     :component-did-update
     (fn [this old-argv]
       (let [argv (r/argv this)
             old-init-text (second old-argv)
             new-init-text (second argv)
             new-options (last argv)]
         (if (not= old-init-text new-init-text)
           (.setValue @codemirror new-init-text))
         (doseq [[key value] new-options]
           (.setOption @codemirror (clj->js key) value))))})))

(defn repl-out [text]
  [:textarea.repl-out {:read-only true :value text}])

(defn output-box [{:keys [value error]}]
  (repl-out (if error
              (:cause (Error->map error))
              (with-out-str (pprint value)))))
