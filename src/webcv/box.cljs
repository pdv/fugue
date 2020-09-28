(ns webcv.box
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs.pprint :refer [pprint]]
            [cljs.repl :refer [Error->map]]
            [cljs.js]))

(defn editor [init on-change]
  (r/create-class
    {:render
     (fn [] [:textarea {:default-value init}])
     :component-did-mount
     (fn [this]
       (let [node (rdom/dom-node this)
             settings #js {:mode "clojure" :lineNumbers true}
             cm (.fromTextArea js/CodeMirror node settings)]
         (.on cm "change" #(on-change (.getValue %)))
         (js/setTimeout #(on-change init) 5)))}))

;; https://stackoverflow.com/questions/51573858/

(def state (cljs.js/empty-state))

(defn evaluate [source cb]
  (cljs.js/eval-str state source nil {:eval cljs.js/js-eval :context :statement} cb))

(defn top-text [text]
  [:textarea.repl-out {:read-only true :value text}])

(defn output-box [{:keys [value error]}]
  (cond
    (vector? value) value
    error (top-text (:cause (Error->map error)))
    :else (top-text (with-out-str (pprint value)))))

(defn box [init]
  (let [output (r/atom nil)
        cb (fn [in-str]
             (evaluate in-str (partial reset! output)))]
    (fn []
      [:div.box
       [:div.box-top
        [output-box @output]]
       [:div.box-bottom
        [editor init cb]]])))

