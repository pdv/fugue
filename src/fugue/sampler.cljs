(ns fugue.sampler
  (:require [clojure.spec.alpha :as s]
            [cljs.core.async :as async]
            [oops.core :refer [oget oget+ oset!]]
            [fugue.audio :as audio]
            [fugue.buffer :as buffer]
            [fugue.chan :as chan]
            [fugue.ramp :as ramp]
            [fugue.synthdef :as synthdef]))

(defmethod synthdef/node-spec ::sampler-node [_]
  (s/keys :req [::buffer/buffer-name]))

(defmethod synthdef/make-node ::sampler-node
  [{::audio/keys [actx] ::buffer/keys [buffer-cache]} {::buffer/keys [buffer-name]}]
  {::detune-controller (doto (.createConstantSource actx) (.start))
   ::buffer/audio-buffer (get buffer-cache buffer-name)
   ::output (.createGain actx)})

(defn trigger-sample! [sampler-node actx]
  (let [node (.createBufferSource actx)]
    (oset! node "buffer" (::buffer/audio-buffer sampler-node))
    (.connect (::detune-controller sampler-node) (oget node "detune"))
    (.connect node (::output sampler-node))
    (.start node)))

(defmethod synthdef/make-edge [::chan/chan-node ::sampler-node]
  [_ src dest {::synthdef/keys [param-name]}]
  (let [ch (async/chan 1)
        actx (oget (::detune-controller dest) "context")
        detune-param (oget (::detune-controller dest) "offset")]
    (async/go-loop []
      (let [msg (async/<! ch)]
        (case param-name
          ::trigger (trigger-sample! dest actx)
          ::detune (ramp/schedule! detune-param msg))
        (recur)))
    (async/tap (::chan/mult-out src) ch)))

(defmethod synthdef/make-edge [::audio/audio-node ::sampler-node]
  [_ src dest _]
  (.connect src (oget (::detune-controller dest) "offset")))

(defmethod synthdef/make-edge [::sampler-node ::audio/audio-node]
  [_ src dest {::synthdef/keys [param-name]}]
  (.connect (::output src)
            (if (not= ::audio/input param-name)
              (oget+ dest param-name)
              dest)))

(defn note->detune [note]
  (* 100 (- note 60)))

(defn sampler [buffer-name trigger detune]
  (synthdef/synthdef
    {::synthdef/node-type ::sampler-node
     ::buffer/buffer-name buffer-name}
    {::trigger [trigger]
     "detune" [detune]}))