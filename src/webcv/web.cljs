(ns webcv.web
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [cljs.pprint :refer [pprint]]
            [oops.core :refer [oget+]]
            [webcv.synthdef :as synthdef]
            [webcv.audio :as audio]
            [webcv.midi :as midi]
            [webcv.envelope :as env]
            [webcv.feedback :as fb]
            [webcv.keyboard :as kb]
            [webcv.bootstrap :refer [read-eval]]
            [cljs.core.async :as async]))

(defn render [ctx text cb]
  (let [graph (read-eval text)]
    (pprint graph)
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
   {:render (fn []
              [:textarea
               {:default-value @input}])
    :component-did-mount (editor-did-mount input)}))

(def init-text-old
  "(out (sin-osc (lfo 440 100 0.2)))")

(def init-text-2
  "(let [midi (midi-in \"Portable Grand-1\")]
     (-> (sin-osc (hz midi))
         (gain (gate midi))
         (out)))")

(def init-text
  "(let [midi (kb)\n      env (env-gen (adsr 0.1 0.3 0.4 0.4) (gate midi) 1400 50)]\n     (-> (saw (hz midi))\n         (lpf env)\n         (gain 0.5)\n         (dub-delay 0.3 0.5)\n         (out)))")

(defn midi-monitor [midi-ctx]
  (let [inputs (r/atom {})]
    (doseq [[in-name in-mult] (::midi/ins midi-ctx)
           :let [in-chan (async/chan)]]
      (async/go-loop []
        (let [msg (async/<! in-chan)]
          (swap! inputs assoc in-name msg)
          (recur)))
      (async/tap in-mult in-chan))
    (fn []
      [:ul
       (for [[in-name last-msg] @inputs]
         [:li (str in-name last-msg)])])))

(defn midi-controls [midi-ctx]
  [:div.box
   [:button
    {:on-click #(midi/make-ctx (partial reset! midi-ctx))}
    "reset midi context"]
   (if-let [mctx @midi-ctx]
     [midi-monitor mctx]
     [:p "midi ctx not loaded"])])

(defn audio-controls [audio-ctx]
  [:div.box
   [:button
    {:on-click #(do
                 (if-let [old-ctx @audio-ctx]
                   (.close (::audio/actx old-ctx)))
                 (reset! audio-ctx (audio/make-ctx)))}
   "reset audio context"]
  [:p
   (if-let [{::audio/keys [actx]} @audio-ctx]
     (str "audio ctx loaded, " (.-maxChannelCount (.-destination actx)) " outs")
     "audio ctx not loaded")]])

(defn runner [on-click]
  [:div.box
   [:button
    {:on-click on-click}
    "run"]])

(defn repl []
  (let [audio-ctx (r/atom nil)
        midi-ctx (r/atom nil)
        input (r/atom init-text)
        output (r/atom nil)]
    (fn []
      [:div#container
       [:div#controls
        [audio-controls audio-ctx]
        [midi-controls midi-ctx]
        [runner #(render (merge @audio-ctx @midi-ctx)
                         @input
                         (partial reset! output))]]
       [:div#editor.box
        [editor input]]
       [:textarea#output.box {:value (with-out-str (pprint (::graph @output)))}]])))

(defn -main []
  (enable-console-print!)
  (rdom/render [repl] (js/document.getElementById "app")))

(defn on-js-reload []
  (-main))

(-main)