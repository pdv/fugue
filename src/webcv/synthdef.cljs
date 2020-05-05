(ns webcv.synthdef
  (:require [loom.graph :refer [digraph add-nodes add-edges nodes edges successors]]
            [loom.attr :refer [attr add-attr remove-attr]]
            [loom.derived :refer [nodes-filtered-by]]
            [webcv.nodedef :as nodedef]
            [webcv.audio :refer [make-node]]))

(defn mapping [f col]
  (into {} (map #(vector % (f %)) col)))

(defn render [ctx synthdef]
  (let [node-map (mapping #(make-node ctx (attr synthdef % :nodedef))
                          (nodes synthdef))]
    (doseq [[from to] (edges synthdef)]
      (.connect (nodemap from)
                (nodemap to)))))

(defn input [channel]
  (let [id (random-uuid)]
    (-> (digraph)
        (add-nodes id)
        (add-attr id :type :input)
        (add-attr id :channel channel))))

(defn source [nodedef]
  (let [id (random-uuid)]
    (-> (digraph)
        (add-nodes id)
        (add-attr id :type :source)
        (add-attr id :nodedef nodedef))))

(defn outputs [synthdef]
  (filter (fn [node]
            (and (empty? (successors synthdef node))
                 (not= :output (attr synthdef node :type))))
          (nodes synthdef)))

(defn effect [nodedef in]
  (let [id (random-uuid)]
    (-> in
        (add-nodes id)
        (add-attr id :type :effect)
        (add-attr id :nodedef nodedef)
        (add-edges (map #(vector % id) (outputs in))))))

(defn output [channel in]
  (let [id (random-uuid)]
    (-> in
        (add-nodes id)
        (add-attr id :type :output)
        (add-attr id :channel channel)
        (add-edges (map #(vector % id) (outputs in))))))

