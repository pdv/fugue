(ns webcv.web
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs.pprint :refer [pprint]]
            [oops.core :refer [oget+]]
            [webcv.audio :as audio]
            [webcv.bootstrap :refer [read-eval]]))

(defn render [ctx text cb]
  (let [graph (read-eval text)]
    (audio/make-synth ctx (:value graph))
    (cb {::ctx ctx
         ::graph graph})))

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
  "(out (sin-osc (lfo 440 100 0.2)))")

(defn repl []
  (let [ctx (r/atom nil)
        input (r/atom init-text)
        output (r/atom nil)]
    (fn []
      [:div
       [editor input]
       [:div
        [:button
         {:on-click #(do
                       (if-let [old-ctx @ctx] (.close (::audio/actx old-ctx)))
                       (reset! ctx (audio/make-ctx)))}
         "reset context"]
        [:button
         {:on-click #(render @ctx @input (partial reset! output))}
         "run"]]
       [:p (if @ctx "ctx loaded" "ctx not loaded")]
       [:p (with-out-str (pprint (::graph @output)))]])))

(defn -main []
  (enable-console-print!)
  (rdom/render [repl] (js/document.getElementById "app")))

(-main)
