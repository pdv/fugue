(ns webcv.chan
  (:require [clojure.spec.alpha :as s]
            [cljs.core.async :as async]
            [webcv.audio :as audio] ;; remove me
            [oops.core :refer [oset!+]] ;; remove me
            [webcv.synthdef :as synthdef]))

(defmulti chan-node-spec ::chan-node-type)

(defmethod synthdef/node-spec ::chan-node [_]
  (s/multi-spec chan-node-spec ::chan-node-type))

(defmethod chan-node-spec ::transducer [_]
  (s/keys :req [::xforms]))

(defmulti make-chan-node (fn [_ nodedef] (::chan-node-type nodedef)))

(defmethod synthdef/make-node ::chan-node [ctx nodedef]
  (make-chan-node ctx nodedef))

(defmulti make-transducer ::xform-name)

(defmethod make-chan-node ::transducer
  [_ {::keys [xforms]}]
  (let [xform (apply comp (map make-transducer xforms))
        in-chan (async/chan 1 xform)]
    {::in-chan in-chan ::out-mult (async/mult in-chan)}))

(defmethod synthdef/make-edge [::chan-node ::chan-node]
  [_ src dest _]
  (async/tap (::out-mult src) (::in-chan dest)))


; move this

(defmethod synthdef/make-edge [::chan-node ::audio/audio-node]
  [_ src dest {::synthdef/keys [param-name]}]
  (let [c (async/chan 0)]
    (async/go-loop []
                   (let [msg (async/<! c)]
                     (oset!+ dest (str param-name ".value") msg)
                     (recur)))
    (async/tap (::out-mult src) c)))