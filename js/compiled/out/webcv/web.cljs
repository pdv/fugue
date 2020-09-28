(ns webcv.web
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [oops.core :refer [oget+]]
            [webcv.box :as box]
            [webcv.api :as api]
            [cljs.repl :refer [source-fn]]))

(defn app []
  (let [boxes (r/atom [api/init-text
                       api/demo-text])
        add-box #(swap! boxes conj "")]
    (fn []
      [:div#container
       (for [box-init @boxes]
        [box/box box-init])
       [:button#add {:on-click add-box} "+"]])))

(defn -main []
  (enable-console-print!)
  (rdom/render [app] (js/document.getElementById "app")))

(defn on-js-reload []
  (-main))

(-main)