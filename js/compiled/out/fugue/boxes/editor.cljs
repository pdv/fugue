(ns fugue.boxes.editor
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [oops.core :refer [oget]]
            [clojure.string :refer [blank?]]
            [cljs.pprint :refer [pprint]]
            [cljs.repl :refer [Error->map]]))

(.registerHelper js/CodeMirror "hintWords" "clojure"
                 #js ["midi" "audio" "buffer" "render"])

(defn maybe-show-hint [cm input-read-event]
  (if (re-find #"[a-zA-Z]" (first (oget input-read-event "text")))
    (.showHint cm #js {:completeSingle false})))

(defn editor [init focused {:keys [on-change on-selection-change on-shortcut]} cm-options]
  (let [codemirror (volatile! nil)]
    (r/create-class
      {:render
       (fn []
         [:textarea.editor {:default-value init}])
       :component-did-mount
       (fn [this]
         (let [node (rdom/dom-node this)
               settings (clj->js (merge cm-options {:mode "clojure" :lineNumbers true}))
               cm (.fromTextArea js/CodeMirror node settings)]
           (vreset! codemirror cm)
           (doto cm
             (.on "change" #(on-change (.getValue %)))
             (.on "cursorActivity" #(on-selection-change (.getSelection %)))
             (.on "inputRead" maybe-show-hint)
             (.setOption "extraKeys" #js {"Shift-Ctrl-Space" on-shortcut})
             (.focus))))
       :component-will-unmount
       (fn []
         (if-let [cm @codemirror] (.toTextArea cm)))
       :component-did-update
       (fn [this old-argv]
         (let [argv (r/argv this)
               was-focused (last (drop-last 2 old-argv))
               is-focused (last (drop-last 2 argv))
               old-cm-options (last old-argv)
               new-cm-options (last argv)]
           (when (and was-focused (not is-focused))
             (.blur (.. @codemirror -display -input)))
           (when (and (not was-focused) is-focused)
             (.focus @codemirror))
           (doseq [[key value] new-cm-options]
             (when (not= value (get old-cm-options key))
               (.setOption @codemirror (clj->js key) value)))))})))

(defn repl-out [text]
  [:textarea.repl-out {:read-only true :value text}])

(defn output-box [{:keys [value error]}]
  (repl-out (if error
              (:cause (Error->map error))
              (with-out-str (pprint value)))))