(ns webcv.feedback
  (:require [clojure.spec.alpha :as s]
            [loom.graph :refer [digraph add-edges]]
            [webcv.synthdef :as synthdef]
            [webcv.audio :as audio]))

(defn feedback [in f]
  (let [gain (audio/gain in 1)
        gain-id (first (synthdef/outputs gain))
        fb (f gain)
        fb-id (first (synthdef/outputs fb))
        output (audio/gain gain 1)]
    (add-edges (digraph fb output)
               [fb-id gain-id])))

(defn dub-delay [in time fb]
  (feedback in #(-> %
                    (audio/delay-node time)
                    (audio/gain fb))))