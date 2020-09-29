(ns fugue.sequencer
  (:require [clojure.spec.alpha :as s]
            [fugue.synthdef :as synthdef]
            [fugue.chan :as chan]))

(defmethod chan/make-transducer ::sequencer [_ _]
  (fn [rf]
    (let [v-index (volatile! -1)]
      (fn
        ([] (rf))
        ([result] (rf result))
        ([result {::keys [sequence gate]}]
         (vswap! v-index inc)
         (->> (mod @v-index (count sequence))
              (nth sequence)
              (assoc gate :value)
              (rf result)))))))

(defn sequencer [sequence gate]
  (synthdef/synthdef
    {::synthdef/node-type ::chan/chan-node
     ::chan/chan-node-type ::chan/transducer
     ::chan/xform ::sequencer}
    {::gate [gate]
     ::sequence [sequence]}))


