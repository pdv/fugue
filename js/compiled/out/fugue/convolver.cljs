(ns fugue.convolver
  (:require [clojure.spec.alpha :as s]
            [oops.core :refer [oset!]]
            [fugue.synthdef :as synthdef]
            [fugue.audio :as audio]
            [fugue.buffer :as buffer]))

(defmethod audio/audio-node-spec ::convolver [_]
  (s/keys :req [::buffer/buffer-name]))

(defmethod audio/make-audio-node ::convolver
  [{::audio/keys [actx] ::buffer/keys [buffer-cache]} {::buffer/keys [buffer-name]}]
  (let [node (.createConvolver actx)]
    (oset! node "buffer" (get buffer-cache buffer-name))
    node))

(defn convolver [in buffer-name]
  (synthdef/synthdef
    {::synthdef/node-type ::audio/audio-node
     ::audio/audio-node-type ::convolver
     ::buffer/buffer-name buffer-name}
    {::audio/input [in]}))
