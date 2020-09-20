(ns webcv.web
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs.pprint :refer [pprint]]
            [oops.core :refer [oget+]]
            [webcv.audio :as audio]
            [webcv.web-audio :as web-audio]
            [webcv.synthdef :as synthdef]
            [webcv.bootstrap :refer [read-eval]]))

(defn render [text cb]
  (let [graph (:value (read-eval text))]
    (synthdef/render graph
                     (partial web-audio/make-node (web-audio/make-ctx))
                     (fn [src dest param-name]
                       (.log js/console src dest)
                       (if (= ::synthdef/input param-name)
                         (.connect src dest)
                         (.connect src (oget+ dest (name param-name))))))
    (cb (with-out-str (pprint graph)))))

(defn render2 [text cb]
  (let [graph (read-eval text)]
    (audio/make-synth (audio/make-ctx) (:value graph))
    (cb (with-out-str (pprint graph)))))

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
                            {:default-value @input
                             :auto-complete "off"}])
    :component-did-mount (editor-did-mount input)}))

(def init-text
  "(-> (sin-osc 0.1) (gain 50) (saw) (out))")

(defn repl []
  (let [input (r/atom init-text)
        output (r/atom nil)]
    (fn []
      [:div
       [editor input]
       [:div
        [:button
         {:on-click #(render2 @input (partial reset! output))}
         "run"]]
       [:p @output]])))

(defn -main []
  (enable-console-print!)
  (rdom/render [repl] (js/document.getElementById "app")))

(-main)
