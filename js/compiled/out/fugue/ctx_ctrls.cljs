(ns fugue.ctx-ctrls
  (:require [reagent.core :as r]
            [cljs.core.async :as async]
            [fugue.buffer :as buffer]
            [fugue.midi :as midi]
            [fugue.audio :as audio]))

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
      [:div
       [:p (str (count (::midi/ins midi-ctx)) " ins")]
       (for [[in-name {::midi/keys [type note velocity]}] @inputs]
         [:p (str in-name
                  " type: " type
                  " note: " note
                  " velo: " velocity)])])))

(defn midi-ctx-ctrls [midi-ctx]
  [:div
   [:button
    {:on-click #(midi/make-ctx (partial reset! midi-ctx))}
    "reset midi context"]
   (if-let [mctx @midi-ctx]
     [midi-monitor mctx]
     [:p "midi ctx not loaded"])])

(defn audio-ctx-ctrls [audio-ctx]
  [:div
   [:button
    {:on-click #(do
                  (if-let [old-ctx @audio-ctx]
                    (.close (::audio/actx old-ctx)))
                  (reset! audio-ctx (audio/make-ctx)))}
    "reset audio context"]
   [:p
    (if-let [{::audio/keys [outs]} @audio-ctx]
      (str (.-numberOfInputs outs) " outs")
      "audio ctx not loaded")]
   [:button
    {:on-click (fn []
                 (-> (audio/inputs-promise)
                     (.then (partial swap! audio-ctx audio/with-inputs))
                     (.catch #(.log js/console %))))}
    "load inputs"]
   [:p
    (if-let [ins (::audio/ins @audio-ctx)]
      (str (.-numberOfOutputs ins) " ins")
      "inputs not loaded")]])

(defn read-file-upload
  [e actx buffer-cb]
  (let [files (.from js/Array (-> e .-target .-files))]
    (doseq [file files]
      (-> (.arrayBuffer file)
          (.then #(.decodeAudioData actx %))
          (.then #(buffer-cb (.-name file) %))))))

(defn buffer-ctrl [actx-atom buffer-ctx]
  (fn []
    [:div
     [:input
      {:type :file
       :on-change
       (fn [e]
         (doseq [file (.from js/Array (-> e .-target .-files))]
           (-> (.arrayBuffer file)
               (.then #(.decodeAudioData (::audio/actx @actx-atom) %))
               (.then #(swap! buffer-ctx assoc-in ::buffer/buffer-cache (.-name file) %)))))}]
     [:ul
      (for [[name buffer] (::buffer/buffer-cache @buffer-ctx)]
        [:li (str name " - " (.-length buffer))])]]))
