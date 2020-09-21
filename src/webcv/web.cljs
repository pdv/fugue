(ns webcv.web
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs.pprint :refer [pprint]]
            [oops.core :refer [oget+]]
            [webcv.synthdef :as synthdef]
            [webcv.audio2 :as audio]
            [webcv.midi :as midi]
            [webcv.bootstrap :refer [read-eval]]))

(defn render [ctx text cb]
  (let [graph (read-eval text)]
    (synthdef/make-synth ctx (:value graph))
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
  (let [audio-ctx (r/atom nil)
        midi-ctx (r/atom nil)
        input (r/atom init-text)
        output (r/atom nil)]
    (fn []
      [:div
       [editor input]
       [:div
        [:button
         {:on-click #(do
                       (if-let [old-ctx @audio-ctx] (.close (::audio/actx old-ctx)))
                       (reset! audio-ctx (audio/make-ctx)))}
         "reset audio context"]
        [:button
         {:on-click #(render @audio-ctx @input (partial reset! output))}
         "run"]
        [:button
         {:on-click #(midi/make-ctx (partial reset! midi-ctx))}
         "reset midi context"]]
       [:p (if-let [{::audio/keys [actx]} @audio-ctx]
             (str "audio ctx loaded, " (.-maxChannelCount (.-destination actx)) " outs")
             "audio ctx not loaded")]
       (if-let [mctx @midi-ctx]
         [:div
          [:p "midi ins"]
          [:ul (for [in (:ins mctx)]
                 [:li (.-name in)])]
          [:p "midi outs"]
          [:ul (for [out (:outs mctx)]
                 [:li (.-name out)])]]
         [:p "midi ctx not loaded"])
       [:p (with-out-str (pprint (::graph @output)))]])))

(defn -main []
  (enable-console-print!)
  (rdom/render [repl] (js/document.getElementById "app")))

(-main)
