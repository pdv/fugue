(ns fugue.space
  (:require-macros [fugue.env :refer [analyzer-state]])
  (:require [cljs.js]
            [fugue.state]
            [reagent.core :as r]))

(defn load-namespace [eval-state]
  (assoc-in eval-state [:cljs.analyzer/namespaces 'fugue.state] (analyzer-state 'fugue.state)))

(defn app []
  (let [eval-state (cljs.js/empty-state load-namespace)
        result (r/atom {:value [:p "not evaluated"]})]
    (defn eval! []
      (let [source "[fugue.state/component]"
            settings {:eval cljs.js/js-eval :context :statement}]
        (cljs.js/eval-str eval-state source nil settings (partial reset! result))))
    (fn []
      [:div
       [:button {:on-click eval!} "eval"]
       [:div (:value @result)]])))




