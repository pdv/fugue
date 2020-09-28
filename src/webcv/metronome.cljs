(ns webcv.metronome
  (:require [clojure.spec.alpha :as s]
            [cljs.core.async :as async]
            [webcv.synthdef :as synthdef]
            [webcv.chan :as chan]))

(defmethod chan/chan-node-spec ::metronome [_]
  (s/keys :req [::period-ms]))

(defmethod chan/make-chan-node ::metronome
  [_ {::keys [period-ms]}]
  (let [out-chan (async/chan 1)]
    (async/go-loop [gate 0]
      (async/put! out-chan gate)
      (async/<! (async/timeout period-ms))
      (recur (not gate)))
    {::chan/mult-out (async/mult out-chan)}))

(defn metro [period-ms]
  (synthdef/synthdef
    {::synthdef/node-type ::chan/chan-node
     ::chan/chan-node-type ::metronome
     ::period-ms period-ms}
    {}))


