(ns webcv.chan
  (:require [clojure.spec.alpha :as s]
            [cljs.core.async :as async]
            [webcv.synthdef :as synthdef]))

(defmulti chan-node-spec ::chan-node-type)

(defmethod synthdef/node-spec ::chan-node [_]
  (s/multi-spec chan-node-spec ::chan-node-type))

(defmethod chan-node-spec ::transducer [_]
  (s/keys :req [::xforms]))

(defmulti make-chan-node (fn [_ nodedef] (::chan-node-type nodedef)))

(defmethod synthdef/make-node ::chan-node [ctx nodedef]
  (make-chan-node ctx nodedef))

(defmulti make-transducer (fn [_ xform-def] (::xform-name xform-def)))

(defmethod make-chan-node ::transducer
  [ctx {::keys [xforms]}]
  (let [xform (apply comp (map (partial make-transducer ctx) xforms))
        in-chan (async/chan 1 xform)]
    {::in-chan in-chan ::out-mult (async/mult in-chan)}))

(defmethod synthdef/make-edge [::chan-node ::chan-node]
  [_ src dest _]
  (async/tap (::out-mult src) (::in-chan dest)))
