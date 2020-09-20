(ns webcv.audio
  (:require [clojure.spec.alpha :as s]
            [oops.core :refer [oset! oget+]]
            [loom.graph :refer [graph? digraph add-nodes add-edges nodes edges successors]]
            [loom.attr :refer [attr attrs add-attr add-attr-to-edges remove-attr]]))

(s/def ::node-id uuid?)
(s/def ::edge (s/coll-of ::node-id :kind vector? :count 2))
(s/def ::channel-idx int?)
(s/def ::constructor string?)
(s/def ::node-type #{::input ::output ::source ::effect})
(s/def ::nodedef (s/keys :req [::node-type]))
(s/def ::synthdef (s/and graph?
                         #(s/valid? (s/coll-of ::node-id) (nodes %))))
(s/def ::actx #(== js/AudioContext (type %)))
(s/def ::outs #(== js/ChannelMergerNode (type %)))
(s/def ::node #(== js/AudioNode (type %)))
(s/def ::ctx (s/keys :req [::actx ::outs]))

;; Synthdef

(defn outputs [synthdef]
  {:pre [(s/valid? ::synthdef synthdef)]
   :post [(s/valid? (s/coll-of ::node-id) %)]}
  (filter (fn [node]
            (and (empty? (successors synthdef node))
                 (not= ::output (::node-type (attr synthdef node ::nodedef)))))
          (nodes synthdef)))

(s/def ::param-name string?)
(s/def ::param-val (s/or ::number number?
                         ::synthdef ::synthdef))
(defmulti add-param (fn [_ _ _ param-val]
                      (first (s/conform ::param-val param-val))))

(defmethod add-param ::number [graph node param-name param-val]
  (let [old-params (or (attr graph node ::static-params) {})]
    (add-attr graph node ::static-params (assoc old-params param-name param-val))))

(defmethod add-param ::synthdef [graph node param-name param-val]
  (let [new-edges (map #(vector % node) (outputs param-val))]
    (-> (apply (partial digraph graph param-val) new-edges)
        (add-attr-to-edges ::param-name param-name new-edges))))

(defn add-params [graph node params]
  (reduce-kv (fn [g param-name param-vals]
               (reduce (fn [g param-val]
                         (add-param g node param-name param-val))
                       g
                       param-vals))
             graph
             params))

(defn synthdef [nodedef params]
  {:pre [(s/valid? ::nodedef nodedef)]
   :post [(s/valid? ::synthdef %)]}
  (let [id (random-uuid)]
    (-> (digraph id)
        (add-attr id ::nodedef nodedef)
        (add-params id params))))

;; Builders

(defmulti make-node (fn [_ nodedef] (::node-type nodedef)))

(defmethod make-node ::output
  [{::keys [actx outs]} {::keys [channel-idx]}]
  (doto (.createGain actx)
    (.connect , outs 0 channel-idx)))

(defmethod make-node :default
  [{::keys [actx]} {::keys [node-type constructor props static-params]}]
  (let [node (js-invoke actx constructor)]
    (doseq [[k v] props]
      (oset! node k v))
    (doseq [[k v] static-params]
      (oset! node (str k ".value") v))
    (when (= ::source node-type)
      (.start node))
    node))

(defn make-synth
  [ctx synthdef]
  {:pre [(s/valid? ::ctx ctx)
         (s/valid? ::synthdef synthdef)]}
  (let [nodes-by-id (->> (nodes synthdef)
                         (map #(vector % (make-node ctx (attr synthdef % ::nodedef))))
                         (into {}))]
    (.log js/console nodes-by-id)
    (doseq [edge (edges synthdef)
            :let [param-name (attr synthdef edge ::param-name)
                  src-node (nodes-by-id (first edge))
                  dest-node (nodes-by-id (second edge))
                  dest (if (= ::input param-name) dest-node
                         (oget+ dest-node param-name))]]
      (.connect src-node dest))))

(defn make-ctx
  ([]
   {:post [(s/valid? ::ctx %)]}
   (let [ctx (js/AudioContext.)
         dest (.-destination ctx)
         out-chans (.-maxChannelCount dest)
         outs (.createChannelMerger ctx out-chans)]
     (set! (.-channelCount dest) out-chans)
     (.connect outs dest)
     {::actx ctx ::outs outs})))

;; DSL

(defn out [& ins]
  (synthdef {::node-type ::output
             ::channel-idx 0}
            {::input ins}))

(defn gain [in & gains]
  (synthdef {::node-type ::effect
             ::constructor "createGain"}
            {::input [in]
             "gain" gains}))

(defn mix [& ins]
  (synthdef {::node-type ::effect
             ::constructor "createGain"}
            {::input ins}))

(defn oscillator
  ([type frequency] (oscillator type frequency 0))
  ([type frequency detune]
   (synthdef {::node-type ::source
              ::constructor "createOscillator"
              ::props {"type" type}}
             {"frequency" [0 frequency]
              "detune" [0 detune]})))

(def sin-osc (partial oscillator "sine"))
(def saw (partial oscillator "sawtooth"))
(def square (partial oscillator "square"))
(def tri-osc (partial oscillator "triangle"))

(defn biquad-filter
  ([type in freq] (biquad-filter type in freq -1))
  ([type in freq q]
   (synthdef {::node-type ::effect
              ::constructor "createBiquadFilter"
              ::props {"type" type}}
             {::input [in]
              "frequency" [0 freq]
              "Q" [0 q]})))