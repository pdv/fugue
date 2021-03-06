(ns fugue.feedback
  (:require [clojure.spec.alpha :as s]
            [loom.graph :refer [digraph add-edges]]
            [loom.attr :refer [add-attr-to-edges]]
            [fugue.synthdef :as synthdef]
            [fugue.audio :as audio]))

(defn feedback [in f]
  (let [gain (audio/gain in 1)
        gain-id (first (synthdef/outputs gain))
        fb (f gain)
        fb-id (first (synthdef/outputs fb))
        output (audio/gain gain 1)
        fb-edge [fb-id gain-id]]
    (-> (synthdef/merge-graphs fb output)
        (add-edges fb-edge)
        (add-attr-to-edges ::synthdef/param-name ::audio/input [fb-edge]))))

(defn dub-delay [in time fb]
  (feedback in #(-> %
                    (audio/delay-node time)
                    (audio/gain fb))))