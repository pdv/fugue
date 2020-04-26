(ns webcv.repl 
  (:require-macros [webcv.env :refer [analyzer-state]])
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs.js]
            [cljs.pprint :refer [pprint]]
            [webcv.audio]))

;; https://yogthos.net/posts/2015-11-12-ClojureScript-Eval.html
;; https://stackoverflow.com/questions/51573858/

(def compiler-state (cljs.js/empty-state))

(def init-forms 
  ["(def out webcv.audio/out)"
   "(def saw webcv.audio/saw)"])

(let [init (atom false)]
  (defn read-eval
    [s]
    (let [x (atom nil)
          call-eval (fn [text]
                      (cljs.js/eval-str compiler-state text nil
                                        {:eval cljs.js/js-eval}
                        #(reset! x (:value %))))]
      (when-not @init
        (doseq [f init-forms] (call-eval f))
        (reset! init true))
      (when s (call-eval s))
      (deref x))))

(defn eval-audio [s cb]
  (.then (webcv.audio/reset-ctx!) 
         (fn [] (cb (read-eval s)))))

(defn editor-did-mount [input]
  (fn [this]
    (let [cm (.fromTextArea  js/CodeMirror
                             (rdom/dom-node this)
                             #js {:mode "clojure"
                                  :lineNumbers true})]
      (.on cm "change" #(reset! input (.getValue %))))))

(defn editor [input]
  (r/create-class
   {:render (fn [] [:textarea
                            {:default-value ""
                             :auto-complete "off"}])
    :component-did-mount (editor-did-mount input)}))

(defn repl []
  (let [input (r/atom nil)
        output (r/atom nil)]
    (fn []
      [:div
       [editor input]
       [:div
        [:button
         {:on-click #(eval-audio @input (partial reset! output))}
         "run"]]
       [:p (with-out-str (pprint @output))]])))

