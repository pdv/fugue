(ns webcv.synthdef
  (:require [clojure.spec.alpha :as s]
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
(defmulti make-edge (fn [_ _ edge-attrs] (::edge-type edge-attrs)))

(s/def ::synthdef graph?)

(s/def ::param-key (constantly true))
(s/def ::param-val (s/or ::number number?
                         ::synthdef ::synthdef))
(s/def ::param-vals (s/* ::param-val))
(s/def ::param-map (s/map-of ::param-key ::param-vals))

(defn outputs [synthdef]
  {:pre [(s/valid? ::synthdef synthdef)]
   :post [(s/valid? (s/coll-of ::node-id) %)]}
  (filter (fn [node]
            (and (empty? (successors synthdef node))
                 (not= ::output (::node-type (attr synthdef node ::nodedef)))))
          (nodes synthdef)))

;; Params

(defmulti add-param (fn [_ _ _ param-val]
                      (first (s/conform ::param-val param-val))))

(defmethod add-param ::number
  [graph node param-name param-val]
  (let [old-nodedef (attr graph node ::nodedef)
        old-sparams (or (::static-params old-nodedef) {})
        new-sparams (assoc old-sparams param-name param-val)
        new-nodedef (assoc old-nodedef ::static-params new-sparams)]
    (add-attr graph node ::nodedef new-nodedef)))

(defmethod add-param ::synthdef
  [graph node param-key param-val]
  (let [new-edges (map #(vector % node) (outputs param-val))]
    (-> (apply (partial digraph graph param-val) new-edges)
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
        (add-attr id ::nodedef nodedef)
        (add-params id params))))

(defn- node-builder [ctx synthdef]
  (fn [id]
    (make-node ctx (attr synthdef id ::nodedef))))

(defn- mapped-to [f coll]
  (into {} (map (juxt identity f)) coll))

;; should make-node and make-edge be injected?
(defn make-synth
  "Builds the synth defined by synthdef in ctx, calling make-node and make-edge"
  [ctx synthdef]
  {:pre [(s/valid? ::synthdef synthdef)]}
  (let [nodes-by-id (mapped-to (node-builder ctx synthdef) (nodes synthdef))]
    (doseq [edge (edges synthdef)]
      (make-edge (nodes-by-id (first edge))
                 (nodes-by-id (second edge))
                 (attr synthdef edge ::edgedef)))))

