(ns fugue.boxes.state
  (:require [fugue.boxes.layout :as b]))

(def init-state
  {:boxes   '(1)
   :active  1
   :buffers {1 :default-text}
   :files   {:default-text "(+ 1 2)"}
   :key-seq nil})

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
        (update :boxes b/insert direction (:active state) id)
        (activate id))))

(defn write-file [state name value]
  (assoc-in state [:files name] value))

(defn window-count [state]
  (- (:next-id state) 1))

(defn multiple-windows? [state]
  (< 1 (window-count state)))

(defn kill-window [state id]
  (-> state
      (update :boxes b/remove id)
      (update :buffers dissoc id)
      (activate (dec id))))

(def popup-options
  {[" "] {"1-9" "jump to buffer"
          "e" "eval"
          "w" "window"}
   [" " "e"] {"b" "eval current buffer"}
   [" " "w"] {"/" "split left-right"
              "-" "split top-bottom"
              "x" "kill buffer and window"}})

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
         {[" " "w" "x"] (fn [s cb]
                          (cb kill-window (:active s)))
          [" " "w" "/"] (fn [s cb]
                          (cb open-file (active-filename s) :right))
          [" " "w" "-"] (fn [s cb]
                          (cb open-file (active-filename s) :below))
          [" " "e" "b"] (eval-action eval-state)}))

