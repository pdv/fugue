(ns webcv.core
  (:require [goog.object :as o]
            [clojure.spec.alpha :as s]
            [loom.graph :refer [graph? digraph add-nodes add-edges nodes edges successors]]
            [loom.attr :refer [attr add-attr remove-attr]]
            [loom.derived :refer [nodes-filtered-by]]))


(defn make-ctx
  ([]
   (.then (.getUserMedia (.-mediaDevices js/navigator)
                         (clj->js {:audio true}))
          (partial make-ctx)))
  ([in-stream]
   (let [ctx (js/AudioContext.)
         dest (.-destination ctx)
         out-chans (.-maxChannelCount dest)
         outs (.createChannelMerger ctx out-chans)
         source (.createMediaStreamSource ctx in-stream)
         in-chans (.-channelCount source)
         ins (.createChannelSplitter ctx in-chans)]
     (set! (.-channelCount dest) out-chans)
     (.connect outs dest)
     (.connect source ins)
     {:ctx ctx :outs outs :ins ins})))

(defprotocol Modulator
  (attach! [this param]))

(extend-protocol Modulator
  number
  (attach! [this param]
    (o/set param "value" this))
  js/AudioNode
  (attach! [this param]
    (.connect this param)))

(defn make-node 
  [{:keys [ctx ins outs]} nodedef]
  (case (:type nodedef)
    :input 
    (doto (.createGain ctx)
      #(.connect ins % (:channel nodedef)))
    :output
    (doto (.createGain ctx)
      (.connect , outs 0 (:channel nodedef)))
    (:source :effect)
    (let [node (js-invoke ctx (:constructor nodedef))]
      (doseq [[param-name value] (:static-params nodedef)]
        (o/set node param-name value))
      (doseq [[param-name modulators] (:audio-params nodedef)
              :let [param (o/get node param-name)]
              modulator modulators]
        (attach! modulator param))
      (when (= :source (:type nodedef))
        (.start node))
      node)))

(defn mapping [f col]
  (into {} (map #(vector % (f %)) col)))

(defn render [ctx synthdef]
  (let [node-map (mapping #(make-node ctx (attr synthdef % :nodedef))
                          (nodes synthdef))]
    (doseq [[from to] (edges synthdef)]
      (.connect (node-map from)
                (node-map to)))))

(defn input [channel]
  (let [id (random-uuid)]
    (-> (digraph)
        (add-nodes id)
        (add-attr id :type :input)
        (add-attr id :channel channel))))

(defn source [constructor static-params audio-params]
  (let [id (random-uuid)]
    (filter graph? audio-params)
    (-> (digraph)
        (add-nodes id)
        (add-attr id :type :source)
        (add-attr id :constructor constructor)
        (add-attr id :static-params static-params)
        (add-attr id :audio-params audio-params))))

(defn outputs [synthdef]
  (filter (fn [node]
            (and (empty? (successors synthdef node))
                 (not= :output (attr synthdef node :type))))
          (nodes synthdef)))

(defn effect [in constructor static-params audio-params]
  (let [id (random-uuid)]
    (-> in
        (add-nodes id)
        (add-attr id :type :effect)
        (add-attr id :constructor constructor)
        (add-attr id :static-params static-params)
        (add-attr id :audio-params audio-params)
        (add-edges (map #(vector % id) (outputs in))))))

(defn output [channel in]
  (let [id (random-uuid)]
    (-> in
        (add-nodes id)
        (add-attr id :type :output)
        (add-attr id :channel channel)
        (add-edges (map #(vector % id) (outputs in))))))

