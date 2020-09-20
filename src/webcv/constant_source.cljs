(ns webcv.constant-source
  (:require [clojure.spec.alpha :as s]
            [oops.core :refer [oset!]]
            [webcv.web-audio :as web-audio]
            [webcv.synthdef :refer [synthdef]]))

(s/def ::offset number?)
(defmethod web-audio/node-spec ::const [_]
  (s/keys :req [::offset]))

(defn const [offset]
  (synthdef {::web-audio/node-type ::const}
            {::offset offset}))

(defmethod web-audio/make-node ::const
  [{::web-audio/keys [actx]} {::keys [offset]}]
  (doto (.createConstantSource actx)
    (oset! "offset.value" offset)
    (.start)))