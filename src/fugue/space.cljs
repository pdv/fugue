(ns fugue.space
  (:require-macros [fugue.env :refer [analyzer-state]])
  (:require [cljs.js]
            [reagent.core :as r]
            [fugue.boxes :as boxes]
            [fugue.editor :as editor]))

(def init-state
  {:boxes '(1 (2 3))
   :active 1
   :next-id 4
   :result nil
   :files {1 "[fugue.space/app]" 2 [:h1 "this is an element"] 3 {:value 43}}})

(defn foo []
  "nice")

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
      (assoc-in [:files (:next-id state)] (:value result))
      (update :boxes boxes/insert :below (:active state) (:next-id state))))

(defn box [state on-shortcut name]
  (let [file (get-in state [:files name])]
    (cond
      (vector? file) file
      (string? file)
;      [:p file]
      [editor/editor file #(print "on-change") #(print "on-selection-change") on-shortcut {"keyMap" "vim"}]
      :else [:p (str file)])))

(defn mapped-boxes [state on-shortcut]
  (boxes/map-values (:boxes state) (partial box state on-shortcut)))

(defn app []
  (let [eval-state (cljs.js/empty-state)
        state (r/atom init-state)]
    (defn eval! []
      (let [[source settings] ((juxt current-buffer-text eval-settings) @state)
            cb (partial swap! state on-eval)]
        (cljs.js/eval-str eval-state source nil settings cb)))
    (fn []
      (let [mapped (mapped-boxes @state eval!)]
        (print mapped)
        [boxes/boxes-container mapped eval!]))))

