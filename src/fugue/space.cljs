(ns fugue.space
  (:require-macros [fugue.env :refer [analyzer-state]])
  (:require [cljs.js]
            [fugue.state]
            [reagent.core :as r]))

(defn load-namespace [eval-state]
  (assoc-in eval-state [:cljs.analyzer/namespaces 'fugue.state] (analyzer-state 'fugue.state)))

(defn app []
  (let [eval-state (cljs.js/empty-state load-namespace)]
    (fn []
      [fugue.state/component eval-state])))




