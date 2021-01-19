(ns fugue.web
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [fugue.bootstrap :as bootstrap]
            [fugue.ide.ui :as ide]))

(defn -main []
  (enable-console-print!)
  (rdom/render [ide/app] (js/document.getElementById "app")))

(defn on-js-reload []
  (-main))

(-main)