(ns fugue.boxes.state
  (:require [fugue.boxes.layout :as b]))

(def init-state
  {:boxes   '(1)
   :active  1
   :next-id 2
   :result  nil
   :files   {1 "(+ 1 23)"}
   :key-seq nil})

(defn current-buffer-text [state]
  (get-in state [:files (:active state)]))

(defn activate [state id]
  (-> state
      (assoc :active id)
      (assoc :key-seq [])))

(defn eval-settings [state]
  {:eval cljs.js/js-eval
   :context :statement
   :load (fn [m cb]
           (if-let [source (get-in state [:files (str :name m)])]
             (cb {:lang :clj :source source})
             (cb nil)))})

(defn on-eval [state result]
  (-> state
      (assoc-in [:files (:next-id state)] (:value result))
      (update :boxes b/insert :after (:active state) (:next-id state))
      (activate (:next-id state))
      (update :next-id inc)))

(defn window-count [state]
  (- (:next-id state) 1))

(defn multiple-windows? [state]
  (< 1 (window-count state)))

(defn kill-window [state id]
  (-> state
      (update :boxes b/remove id)
      (activate (dec (:active state)))))

(defn kill-active-window [state]
  (kill-window state (:active state)))

(defn eval-action [eval-state]
  (fn [state dispatch]
    (print "doing eval")
    (let [[source settings] ((juxt current-buffer-text eval-settings) state)]
      (cljs.js/eval-str eval-state source nil settings #(dispatch :on-eval %))
      (assoc state :result nil))))

(defn default-actions [eval-state]
  {:kill-active-window kill-active-window
   :eval-current-buffer (eval-action eval-state)
   :on-eval on-eval})

(def popup-options
  {[" "] {"1-9" "jump to buffer"
          "e" "eval"
          "w" "window"}
   [" " "e"] ["b" "eval current buffer"]
   [" " "w"] ["x" "kill buffer and window"]})

(def default-keys
  {[" " "w" "x"] :kill-active-window
   [" " "e" "b"] :eval-current-buffer})

(defn on-key
  "actions is a map of key sequences to actions (see make-actions)
   cb takes functions on state"
  [state key keymap actions cb]
  (let [new-seq (conj (:key-seq state) key)]
    (if-let [action (get actions (get keymap new-seq))]
      (cb (action state cb))
      (if (contains? popup-options new-seq)
        (cb #(assoc % :key-seq new-seq))))))
