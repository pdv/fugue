(ns webcv.gain
  (:require [clojure.spec.alpha :as s]
            [oops.core :refer [oset!]]
            [webcv.synthdef :as synthdef]
            [webcv.web-audio :as web-audio]))

(s/def ::gain number?)

(defn gain [in amt]
  (synthdef/synthdef
    {::web-audio/node-type ::gain}
    {::synthdef/input in
     ::gain amt}))

(defmethod web-audio/node-spec ::gain [_]
  (s/keys :req [::gain]))

(defmethod web-audio/make-node ::gain
  [{::web-audio/keys [actx]} {::keys [gain]}]
  (doto (.createGain actx)
    (oset! "gain.value" gain)))
