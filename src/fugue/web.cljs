(ns fugue.web
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [fugue.bootstrap :as bootstrap]
            [fugue.api :as api]
            [fugue.ide :as ide]
            [fugue.box :as box]))

(defn app []
  [ide/ide api/init-text bootstrap/eval-str])

(defn boxes-component []
  (let [boxes (r/atom [api/init-text
                       api/demo-text])
        add-box #(swap! boxes conj "")]
    (fn []
      [:div#container
       (for [box-init @boxes]
        [box/box box-init bootstrap/eval-str])
       [:button#add {:on-click add-box} "+"]])))

(defn -main []
  (enable-console-print!)
  (rdom/render [app] (js/document.getElementById "app")))

(defn on-js-reload []
  (-main))

(-main)