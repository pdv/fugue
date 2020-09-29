(ns webcv.sampler
  (:require [clojure.spec.alpha :as s]
            [cljs.core.async :as async]
            [oops.core :refer [oget oget+ oset!]]
            [webcv.audio :as audio]
            [webcv.chan :as chan]
            [webcv.ramp :as ramp]
            [webcv.synthdef :as synthdef]))

(defmethod synthdef/node-spec ::sampler-node [_]
  (s/keys :req [::filename]))

(defmethod synthdef/make-node ::sampler-node
  [{::audio/keys [actx] ::keys [buffer-cache]} {::keys [filename]}]
  {::detune-controller (doto (.createConstantSource actx) (.start))
   ::filename filename
   ::output (.createGain actx)})

(defn trigger-sample! [sampler-node actx buffer]
  (let [node (.createBufferSource actx)]
    (oset! node "buffer" buffer)
    (.connect (::detune-controller sampler-node) (oget node "detune"))
    (.connect node (::output sampler-node))
    (.start node)))

(defmethod synthdef/make-edge [::chan/chan-node ::sampler-node]
  [ctx src dest {::synthdef/keys [param-name]}]
  (async/go-loop []
    (let [msg (async/<! (::chan/mult-out src))]
      (case param-name
        ::trigger
        (let [buffer (get-in ctx [::buffer-cache (::filename dest)])]
          (trigger-sample! dest (::audio/actx ctx) buffer))
        ::detune
        (ramp/schedule! (oget (::detune-node dest) "detune") msg))
      (recur))))

(defmethod synthdef/make-edge [::audio/audio-node ::sampler-node]
  [_ src dest _]
  (.connect src (::detune-controller dest)))

(defmethod synthdef/make-edge [::sampler-node ::audio/audio-node]
  [_ src dest {::synthdef/keys [param-name]}]
  (.connect (::output src)
            (if (not= ::audio/input param-name)
              (oget+ dest param-name)
              dest)))

(defn load-sample
  "Fetches and decodes the sample at url. Calls cb with an AudioBuffer"
  [actx url cb]
  (let [request (js/XMLHttpRequest.)
        onerror (fn [e] (.log js/console (.-err e)))
        onload #(.decodeAudioData actx (.-response request) cb onerror)]
    (.open request "GET" url true)
    (set! (.-responseType request) "arraybuffer")
    (set! (.-onload request) onload)
    (.send request)))

(defn note->detune [note]
  (* 100 (- note 60)))

(defn sampler [filename trigger detune]
  (synthdef/synthdef
    {::synthdef/node-type ::sampler-node
     ::filename filename}
    {::trigger [trigger]
     "detune" [detune]}))