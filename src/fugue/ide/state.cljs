(ns fugue.ide.state
  (:require [fugue.ide.layout :as layout]))

(def init-state
  {:layout     '(1)
   :active     1
   :buffers    {1 :default-text}
   :minibuffer false
   :files      {:default-text "(+ 1 2)"}
   :key-seq    nil})

(defn next-buffer-id [state]
  (first (filter #(not (contains? (:buffers state) %)) (range 1 10))))

(defn activate [state id]
  (-> state
      (assoc :active (if (contains? (:buffers state) id) id (:active state)))
      (assoc :key-seq [])))

(defn active-buffer-name [state]
  (get-in state [:buffers (:active state)]))

(defn get-file [state name]
  (get-in state [:files name]))

(defn active-buffer-file [state]
  (get-file state (active-buffer-name state)))

(defn open-file [state name direction]
  (let [id (next-buffer-id state)]
    (-> state
        (assoc-in [:buffers id] name)
        (update :layout layout/insert-node direction (:active state) id)
        (activate id))))

(defn write-file [state name value]
  (assoc-in state [:files name] value))

(defn window-count [state]
  (- (:next-id state) 1))

(defn multiple-windows? [state]
  (< 1 (window-count state)))

(defn kill-buffer [state id]
  (-> state
      (update :layout layout/remove-node id)
      (update :buffers dissoc id)
      (activate (dec id))))

(defn in-popup? [state]
  (or (not-empty (:key-seq state))
      (:minibuffer state)))

(defn open-minibuffer [state]
  (-> state
      (assoc :key-seq [])
      (assoc :minibuffer true)))

(defn close-minibuffer [state]
  (assoc state :minibuffer nil))
