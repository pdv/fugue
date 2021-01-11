(ns fugue.web
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [fugue.bootstrap :as bootstrap]
            [fugue.api :as api]
            [fugue.ide :as ide]
            [fugue.box :as box]))

(defn app []
  [ide/ide bootstrap/eval-str])

(defn -main []
  (enable-console-print!)
  (rdom/render [app] (js/document.getElementById "app")))

(defn on-js-reload []
  (-main))

(-main)