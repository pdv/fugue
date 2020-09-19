(ns webcv.web
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs.pprint :refer [pprint]]
            [webcv.web-audio :as web-audio]
            [webcv.synthdef :as synthdef]
            [webcv.bootstrap :refer [read-eval]]))

(defn render [text cb]
  (let [graph (:value (read-eval text))]
    (synthdef/render graph
                     (partial web-audio/make-node (web-audio/make-ctx))
                     #(.connect %1 %2))
    (cb graph)))

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
         {:on-click #(render @input (partial reset! output))}
         "run"]]
       [:p (with-out-str (pprint @output))]])))

(defn -main []
  (enable-console-print!)
  (rdom/render [repl] (js/document.getElementById "app")))

(-main)
