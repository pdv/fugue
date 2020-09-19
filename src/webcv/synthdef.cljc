(ns webcv.synthdef
  (:require [clojure.spec.alpha :as s]
            [loom.graph :refer [graph? digraph add-nodes add-edges nodes edges successors]]
            [loom.attr :refer [attr add-attr add-attr-to-edges remove-attr]]
            [webcv.nodedef :as nodedef]))

(defn make-uuid []
  #?(:clj (.toString (java.util.UUID/randomUUID))
     :cljs (.toString (random-uuid))))

(s/def ::node-id string?)
(s/def ::node-ids (s/* ::node-id))
(s/def ::wire (s/coll-of ::node-id :kind vector? :count 2))
(s/def ::wires (s/* ::wire))
(s/def ::synthdef (s/and graph?
                         #(s/valid? (s/coll-of ::node-id) (nodes %))))

(defn outputs
  [synthdef]
  {:pre [(s/valid? ::synthdef synthdef)]
   :post [(s/valid? ::node-ids %)]}
  (filter (fn [node]
            (and (empty? (successors synthdef node))
                 (not= ::output? (attr synthdef node :type))))
          (nodes synthdef)))

(s/def ::param-name string?)
(s/def ::param-val (s/or ::number number?
                         ::synthdef ::synthdef))
(defmulti add-param (fn [_ _ _ param-val]
                      (first (s/conform ::param-val param-val))))

(defmethod add-param ::number [graph node-id param-name param-val]
  (add-attr graph node-id param-name param-val))

(defmethod add-param ::synthdef [graph node-id param-name param-val]
  (let [new-edges (map #(vector % node-id) (outputs param-val))]
    (-> (apply (partial digraph graph param-val) new-edges)
        (add-attr-to-edges ::param-name param-name new-edges))))

(defn add-params [graph node-id params]
  (reduce-kv (fn [g param-name param-val]
               (add-param g node-id param-name param-val))
             graph
             params))

(defn add-attrs-kv [g node-id coll]
  (reduce-kv (fn [g k v]
               (add-attr g node-id k v))
             g
             coll))

(defn source
  [sparams aparams]
  {:pre [(s/valid? ::nodedef/node sparams)]
   :post [(s/valid? ::synthdef %)]}
  (let [id (make-uuid)]
    (-> (digraph)
        (add-nodes id)
        (add-attrs-kv id sparams)
        (add-attr id ::source? true)
        (add-params id aparams))))

(defn effect
  [in sparams aparams]
  (let [id (make-uuid)
        new-edges (map #(vector % id) (outputs in))]
    (-> (apply (partial digraph in id) new-edges)
        (add-attrs-kv id sparams)
        (add-attr id :source? false)
        (add-params id aparams))))

