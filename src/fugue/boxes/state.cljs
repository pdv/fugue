(ns fugue.boxes.state
  (:require [fugue.boxes.layout :as b]))

(def init-state
  {:boxes   '(1)
   :active  1
   :focused 1
   :next-id 2
   :result  nil
   :files   {1 "(+ 1 23)"}
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
  (-> state
      (assoc :focused nil)
      (assoc :key-seq [])))

(defn hide-popup [state]
  (-> state
      (assoc :focused (:active state))
      (assoc :key-seq nil)))

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
        eval-cb (fn [result]
                  (state-cb (fn [state]
                              (on-eval state result))))]
    (cljs.js/eval-str eval-state source nil settings eval-cb)))

(def popup-options
  {[] ["e - eval"
       "f - files"
       "w - windows"
       "x - x"]
   ["e"] ["b - eval current buffer"]
   ["f"] ["o - open" "u - upload" "d - download"]
   ["w"] ["s - split"]
   ["x"] ["x"]})

(defn make-actions [state eval-state]
  {["1"] (fn [_ cb]
           (print "action")
           (cb (fn [s]
                 (print "swap")
                 (activate s 1))))
   ["e" "b"] (partial do-eval eval-state)})

(defn on-key
  "actions is a map of key sequences to functions that take state and cb
   cb is a function that takes fns on state"
  [state actions key cb]
  (let [old-seq (:key-seq state)
        new-seq (conj old-seq key)]
    (cond
      ; Space opens the popup
      (and (empty? old-seq) (= " " key))
      (cb show-popup)
      ; If there's an action, close the popup and perform it
      (contains? actions new-seq)
      (do
        (print "here")
        ((get actions new-seq) state cb))
      ; If we're on track for an action, show the options
      (contains? popup-options new-seq)
      (cb #(assoc % :key-seq new-seq))
      :else
      (cb hide-popup))))
