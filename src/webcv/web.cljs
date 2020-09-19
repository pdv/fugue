(ns webcv.web
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs.pprint :refer [pprint]]
            [webcv.bootstrap :refer [read-eval]]))

(defn eval-audio [s cb]
  (cb (read-eval s)))

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

(defn -main []
  (enable-console-print!)
  (rdom/render [repl] (js/document.getElementById "app")))
