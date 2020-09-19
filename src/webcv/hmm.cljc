(ns webcv.hmm
  (:require [clojure.spec.alpha :as s]
            [loom.graph :refer [graph? digraph add-nodes add-edges nodes edges successors]]
            [loom.attr :refer [attr attrs add-attr add-attr-to-edges remove-attr]]))

(defn make-uuid []
  #?(:clj (.toString (java.util.UUID/randomUUID))
     :cljs (.toString (random-uuid))))

(s/def ::constructor string?)
(s/def ::sparams (s/keys :req [::constructor]))

(defn add-attrs-kv [g node-or-edge coll]
  (reduce-kv (fn [g k v] (add-attr g node-or-edge k v)) g coll))

(defn outputs [g]
  (filter (comp empty? (partial successors g)) (nodes g)))

(defn add-params [g node params]
  (reduce-kv (fn [g k v]
               (let [new-edges (map #(vector % node) (outputs v))]
                 (-> (apply (partial digraph g v) new-edges)
                     (add-attr-to-edges ::param-name k new-edges))))
             g
             params))

(defn synthdef [sparams aparams]
  (let [id (make-uuid)]
    (-> (digraph)
        (add-nodes id)
        (add-attrs-kv id sparams)
        (add-params id aparams))))

