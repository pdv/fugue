(ns fugue.chan
  (:require [clojure.spec.alpha :as s]
            [cljs.core.async :as async]
            [fugue.synthdef :as synthdef]))

(s/def ::chan (partial instance? cljs.core.async.impl.channels/ManyToManyChannel))

(defmulti chan-node-spec ::chan-node-type)

(defmethod synthdef/node-spec ::chan-node [_]
  (s/multi-spec chan-node-spec ::chan-node-type))

(defmethod chan-node-spec ::transducer [_]
  (s/keys :req [::xform]))

(defmulti make-chan-node (fn [_ nodedef] (::chan-node-type nodedef)))

(defmethod synthdef/make-node ::chan-node [ctx nodedef]
  (make-chan-node ctx nodedef))

(defmulti make-transducer (fn [_ xform-name] xform-name))

(defn val-x-map [name]
  (map #(assoc {} name %)))

(defn merge-xform [init]
  (fn [rf]
    (let [prev (volatile! init)]
      (fn
        ([] (rf))
        ([result] (rf result))
        ([result input]
         (let [next (merge @prev input)]
           (vreset! prev next)
           (rf result next)))))))

(defmethod make-chan-node ::transducer
  [ctx {::keys [xform] ::synthdef/keys [static-params]}]
  (let [out (async/chan 1 (comp (merge-xform {})
                                (make-transducer ctx xform)))]
    (doseq [[k v] static-params]
      (if (satisfies? IWatchable v)
        (add-watch v k #(async/put! out {k %4}))
        (async/put! out {k v})))
    {::mult-out (async/mult out)
     ::mix-out (async/mix out)}))

(defmethod synthdef/make-edge [::chan-node ::chan-node]
  [_ src dest {::synthdef/keys [param-name]}]
  (let [in-chan (async/chan 1 (val-x-map param-name))]
    (async/admix (::mix-out dest) in-chan)
    (async/tap (::mult-out src) in-chan)))
