(ns fugue.boxes.state
  (:require [fugue.boxes.layout :as b]))

(def init-state
  {:boxes   '(1)
   :active  1
   :next-id 2
   :files   {1 "#(fugue.boxes.state/insert % \"nice\" :left)"}
   :key-seq nil})

(defn current-buffer-text [state]
  (get-in state [:files (:active state)]))

(defn valid-buffer? [state id]
  (some (partial = id) (flatten (:boxes state))))

(defn activate [state id]
  (-> state
      (assoc :active (if (valid-buffer? state id) id (:active state)))
      (assoc :key-seq [])))

(defn eval-settings [state]
  {:eval cljs.js/js-eval
   :context :statement
   :load (fn [m cb]
           (if-let [source (get-in state [:files (str :name m)])]
             (cb {:lang :clj :source source})
             (cb nil)))})

(defn insert [state value direction]
  (-> state
      (assoc-in [:files (:next-id state)] value)
      (update :boxes b/insert direction (:active state) (:next-id state))
      (activate (:next-id state))
      (update :next-id inc)))

(defn window-count [state]
  (- (:next-id state) 1))

(defn multiple-windows? [state]
  (< 1 (window-count state)))

(defn kill-window [state id]
  (-> state
      (update :boxes b/remove id)
      (activate (dec id))))

(def popup-options
  {[" "] {"1-9" "jump to buffer"
          "e" "eval"
          "w" "window"}
   [" " "e"] {"b" "eval current buffer"}
   [" " "w"] {"/" "split left-right"
              "-" "split top-bottom"
              "x" "kill buffer and window"}})

(defn eval-action [eval-state]
  (fn [state cb]
    (let [[source settings] ((juxt current-buffer-text eval-settings) state)
          on-result (fn [result]
                      (if (fn? (:value result))
                        (cb (:value result))
                        (cb insert result :after)))]
      (cljs.js/eval-str eval-state source nil settings on-result))))

(def number-jumps
  (into {} (map (fn [i] [[" " (str i)] (fn [_ cb] (cb activate i))]) (range 10))))

(defn default-keymap [eval-state]
  (merge number-jumps
         {[" " "w" "x"] (fn [s cb] (cb kill-window (:active s)))
          [" " "w" "/"] (fn [_ cb] (cb insert "" :right))
          [" " "w" "-"] (fn [_ cb] (cb insert "" :below))
          [" " "e" "b"] (eval-action eval-state)}))

