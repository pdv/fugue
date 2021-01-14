(ns fugue.state
  (:require [reagent.core :as r]
            [cljs.js]
            [fugue.boxes :as boxes]))

(def init-state
  {:boxes '(1 (2 3))
   :active 1
   :next-id 4
   :result nil
   :files {1 "(+ 82 34)" 2 "bar" 3 "biz"}})

(defn current-buffer-text [state]
  (get-in state [:files (:active state)]))

(defn eval-settings [state]
  {:eval cljs.js/js-eval
   :context :statement
   :load (fn [m cb]
           (if-let [source (get-in state [:files (str :name m)])]
             (cb {:lang :clj :source source})
             (cb nil)))})

(defn on-eval [state result]
  (-> state
      (assoc-in [:files (:next-id state)] (str result))
      (update :boxes boxes/insert :below (:active state) (:next-id state))))

(defn mapped-boxes [state]
  (boxes/map-values (:boxes state) #(get-in state [:files %])))

(defn component [eval-state]
  (let [state (r/atom init-state)]
    (defn eval! []
      (let [[source settings] ((juxt current-buffer-text eval-settings) @state)
            cb (partial swap! state on-eval)]
        (cljs.js/eval-str eval-state source nil settings cb)))
    (fn []
      (let [mapped (mapped-boxes @state)]
        (print mapped)
        [boxes/boxes-container mapped eval!]))))

