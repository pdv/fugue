(ns fugue.ide.state
  (:require [clojure.string :as string]
            [fugue.ide.layout :as layout]))

(def init-state
  {:layout     '(1)
   :active     1
   :buffers    {1 :default-text}
   :minibuffer false
   :files      {:default-text "(+ 1 2)"}
   :key-seq    nil})

(defn next-buffer-id [state]
  (first (filter #(not (contains? (:buffers state) %)) (range 1 10))))

(defn current-buffer-text [state]
  (let [filename (get-in state [:buffers (:active state)])]
    (get-in state [:files filename])))

(defn activate [state id]
  (-> state
      (assoc :active (if (contains? (:buffers state) id) id (:active state)))
      (assoc :key-seq [])))

(defn eval-settings [state]
  {:eval cljs.js/js-eval
   :context :statement
   :load (fn [m cb]
           (if-let [source (get-in state [:files (str :name m)])]
             (cb {:lang :clj :source source})
             (cb nil)))})

(defn active-filename [state]
  (get-in state [:buffers (:active state)]))

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

(defn on-eval [state result]
  (let [filename (gensym "result")]
    (-> state
        (write-file filename result)
        (open-file filename :after))))

(defn eval-action [eval-state]
  (fn [state cb]
    (let [[source settings] ((juxt current-buffer-text eval-settings) state)
          on-result (fn [result]
                      (if (fn? (:value result))
                        (cb (:value result))
                        (cb on-eval result)))]
      (cljs.js/eval-str eval-state source nil settings on-result))))

(def number-jumps
  (into {} (map (fn [i] [[" " (str i)] (fn [_ cb] (cb activate i))]) (range 10))))

(defn default-keymap [eval-state]
  (merge number-jumps
         {[" " " "] (fn [s cb]
                      (cb open-minibuffer s))
          [" " "w" "x"] (fn [s cb]
                          (cb kill-buffer (:active s)))
          [" " "w" "/"] (fn [s cb]
                          (cb open-file (active-filename s) :right))
          [" " "w" "-"] (fn [s cb]
                          (cb open-file (active-filename s) :below))
          [" " "e" "b"] (eval-action eval-state)}))

