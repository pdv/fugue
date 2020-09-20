(ns webcv.io
  (:require [clojure.spec.alpha :as s]
            [webcv.synthdef :as synthdef]
            [webcv.web-audio :as web-audio]))

(s/def ::channel-idx int?)

; (defmethod web-audio/node-spec ::input [_]
;  (s/keys :req [::channel-idx]))

; (defmethod web-audio/make-node ::input
;  [{:keys [actx ins]} nodedef]
;  (doto (.createGain actx)
;    #(.connect ins % (::channel-idx nodedef))))

(defmethod web-audio/node-spec ::output [_]
  (s/keys :req [::channel-idx]))

(defmethod web-audio/make-node ::output
  [{::web-audio/keys [actx outs]} nodedef]
  (doto (.createGain actx)
    (.connect , outs 0 (::channel-idx nodedef))))

(defn out [in]
  (synthdef/synthdef
    {::web-audio/node-type ::output
     ::channel-idx 0}
    {::synthdef/input in}))
