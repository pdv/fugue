(ns webcv.web
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs.pprint :refer [pprint]]
            [oops.core :refer [oget+]]
            [webcv.synthdef :as synthdef]
            [webcv.audio :as audio]
            [webcv.midi :as midi]
            [webcv.envelope :as env]
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

(def init-text-old
  "(out (sin-osc (lfo 440 100 0.2)))")

(def init-text-2
  "(let [midi (midi-in \"Portable Grand-1\")]
     (-> (sin-osc (hz midi))
         (gain (gate midi))
         (out)))")

(def init-text
  "(let [midi (midi-in \"Portable Grand-1\")\n      env (env-gen (adsr 0.1 0.3 0.4 0.4) (gate midi) 1400 50)]\n     (-> (saw (hz midi))\n         (lpf env)\n         (gain 0.5)\n         (out)))")

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
         {:on-click #(render (merge @audio-ctx @midi-ctx) @input (partial reset! output))}
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
          [:ul (for [[name _] (::midi/ins mctx)]
                 [:li name])]
          [:p "midi outs"]
          [:ul (for [[name _] (::midi/outs mctx)]
                 [:li name])]]
         [:p "midi ctx not loaded"])
       [:p (with-out-str (pprint (::graph @output)))]])))

(defn -main []
  (enable-console-print!)
  (rdom/render [repl] (js/document.getElementById "app")))

(defn on-js-reload []
  (-main))

(-main)