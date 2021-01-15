(ns fugue.boxes.state
  (:require [fugue.boxes.layout :as b]))

(def init-state
  {:boxes '(1)
   :active 1
   :next-id 2
   :result nil
   :files {1 "(+ 1 23)"}
   :key-seq nil})

(defn current-buffer-text [state]
  (get-in state [:files (:active state)]))

(defn eval-settings [state]
  {:eval cljs.js/js-eval
   :context :statement
   :load (fn [m cb]
           (if-let [source (get-in state [:files (str :name m)])]
             (cb {:lang :clj :source source})
             (cb nil)))})

(defn show-popup [state]
  (assoc state :key-seq []))

(defn hide-popup [state]
  (assoc state :key-seq nil))

(defn activate [state id]
  (-> state
      (assoc :active id)
      (hide-popup)))

(defn on-eval [state result]
  (-> state
      (assoc-in [:files (:next-id state)] (:value result))
      (update :boxes b/insert :after (:active state) (:next-id state))
      (activate (:next-id state))
      (update :next-id inc)))

(defn do-eval [eval-state state state-cb]
  (let [[source settings] ((juxt current-buffer-text eval-settings) state)
        eval-cb #(state-cb (on-eval state %))]
    (cljs.js/eval-str eval-state source nil settings eval-cb)))

(defn on-key [state actions key cb]
  (cond
    (and (empty (:key-seq state)) (= " " key))
    (cb (show-popup state))
    (and (not-empty (:key-seq state)) (= "Escape" key))
    (cb (hide-popup state))
    :else
    (let [new-seq (conj (:key-seq state) key)]
      (if-let [action (get actions new-seq)]
        (action (assoc state :key-seq nil) cb)
        (cb (assoc state :key-seq new-seq))))))

(defn actions [eval-state]
  {["e" "b"] (partial do-eval eval-state)})