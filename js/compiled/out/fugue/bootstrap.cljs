(ns fugue.bootstrap
  (:require-macros [fugue.env :refer [analyzer-state]])
  (:require [fugue.api]
            [cljs.js]))

;; https://stackoverflow.com/questions/51573858/

(defn init-state [state]
  (assoc-in state [:cljs.analyzer/namespaces 'cljs.user]
            (analyzer-state 'fugue.api)))

(def state (cljs.js/empty-state init-state))

(def eval-settings
  {:eval cljs.js/js-eval
   :context :statement})

(defn eval-str [source cb]
  (cljs.js/eval-str state source nil eval-settings cb))
