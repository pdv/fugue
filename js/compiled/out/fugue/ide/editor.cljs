(ns fugue.ide.editor
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

(defn editor [init focused on-change on-selection cm-options]
  (let [codemirror (volatile! nil)]
    (r/create-class
      {:render
       (fn []
         [:textarea.editor {:default-value init}])
       :component-did-mount
       (fn [this]
         (let [node (rdom/dom-node this)
               settings (clj->js (merge cm-options {:mode "clojure"}))
               cm (.fromTextArea js/CodeMirror node settings)]
           (vreset! codemirror cm)
           (when (and focused (not (.hasFocus @codemirror)))
             (.focus @codemirror))
           (doto cm
             (.on "change" #(on-change (.getValue %)))
             (.on "cursorActivity" #(on-selection (.getSelection %)))
             (.on "inputRead" maybe-show-hint))))
       :component-will-unmount
       (fn []
         (if-let [cm @codemirror] (.toTextArea cm)))
       :component-did-update
       (fn [this old-argv]
         (let [argv (r/argv this)
               new-text (last (drop-last 4 argv))
               is-focused (last (drop-last 3 argv))
               old-cm-options (last old-argv)
               new-cm-options (last argv)]
           (when (not is-focused)
             (.setValue @codemirror new-text)
             (.blur (.. @codemirror -display -input)))
           (when (and is-focused (not (.hasFocus @codemirror)))
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
