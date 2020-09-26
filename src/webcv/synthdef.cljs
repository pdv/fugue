(ns webcv.synthdef
  (:require [clojure.spec.alpha :as s]
            [cljs.pprint :refer [pprint]]
            [loom.graph :refer [graph? digraph add-nodes add-edges nodes edges successors]]
            [loom.attr :refer [attr attrs add-attr add-attr-to-edges remove-attr]]))

(s/def ::node-id int?)
(let [next-id (atom 0)]
  (defn make-id []
    (swap! next-id inc)))

(s/def ::node-type keyword?)
(defmulti node-spec ::node-type)
(s/def ::nodedef (s/multi-spec node-spec ::node-type))
(defmulti make-node (fn [_ nodedef] (::node-type nodedef)))

(s/def ::edge-type keyword?)
(defmulti edge-spec ::edge-type)
(s/def ::edgedef (s/multi-spec edge-spec ::edge-type))
(defmulti make-edge (fn [edge-type _ _ _] edge-type))

(s/def ::synthdef graph?)

(s/def ::param-key (constantly true))
(s/def ::param-val (s/or ::synthdef ::synthdef
                         ::value (constantly true)))
(s/def ::param-vals (s/* ::param-val))
(s/def ::param-map (s/map-of ::param-key ::param-vals))

;; Graph utils

(defn add-attrs-kv [graph node-or-edge attrs-map]
  (reduce-kv (fn [g k v] (add-attr g node-or-edge k v)) graph attrs-map))

(defn outputs [synthdef]
  {:pre [(s/valid? ::synthdef synthdef)]
   :post [(s/valid? (s/coll-of ::node-id) %)]}
  (filter (fn [node]
            (and (empty? (successors synthdef node))
                 (not= ::output (::node-type (attr synthdef node ::nodedef)))))
          (nodes synthdef)))

(defn merge-graphs
  "The default digraph constructor overrides edge attrs"
  [g1 g2]
  (reduce (fn [g edge]
            (add-attrs-kv g edge (merge (attrs g1 edge)
                                        (attrs g2 edge))))
          (digraph g1 g2)
          (concat (edges g1) (edges g2))))

;; Params

(defmulti add-param (fn [_ _ _ param-val]
                      (first (s/conform ::param-val param-val))))

(defmethod add-param ::value
  [graph node param-name param-val]
  (let [old-sparams (attr graph node ::static-params)
        new-sparams (assoc old-sparams param-name param-val)]
    (add-attr graph node ::static-params new-sparams)))

(defmethod add-param ::synthdef
  [graph node param-key param-val]
  (let [new-edges (map #(vector % node) (outputs param-val))]
    (print (str "new edges - " param-key " :: " new-edges))
    (-> (apply add-edges (merge-graphs graph param-val) new-edges)
        (add-attr-to-edges ::param-name param-key new-edges))))

(defn add-params [graph node params]
  (reduce-kv (fn [g param-name param-vals]
               (reduce (fn [g param-val]
                         (add-param g node param-name param-val))
                       g
                       param-vals))
             graph
             params))

;; Public

(defn synthdef
  "Produces a synthdef from a single nodedef and a map of params, whose values
  may be synthdefs themselves"
  [nodedef params]
  {:pre [(s/valid? ::nodedef nodedef)
         (s/valid? ::param-map params)]
   :post [(s/valid? ::synthdef %)]}
  (let [id (make-id)]
    (-> (digraph id)
        (add-attrs-kv id nodedef)
        (add-params id params))))

(defn- node-builder [ctx synthdef]
  (fn [id]
    (print (str "building node " id))
    (doto (make-node ctx (attrs synthdef id))
      (pprint))))

(defn- mapped-to [f coll]
  (into {} (map (juxt identity f)) coll))

;; should make-node and make-edge be injected?
(defn make-synth
  "Builds the synth defined by synthdef in ctx, calling make-node and make-edge"
  [ctx synthdef]
  {:pre [(s/valid? ::synthdef synthdef)]}
  (let [nodes-by-id (mapped-to (node-builder ctx synthdef) (nodes synthdef))]
    (doseq [edge (edges synthdef)
            :let [edge-type (map #(attr synthdef % ::node-type) edge)
                  [src dest] (map nodes-by-id edge)
                  edge-attrs (attrs synthdef edge)]]
      (print (str "building edge " edge edge-attrs))
      (make-edge edge-type src dest edge-attrs))))

