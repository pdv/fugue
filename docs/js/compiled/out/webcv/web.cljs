(ns webcv.web
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [oops.core :refer [oget+]]
            [webcv.box :as box]
            [webcv.bootstrap :as bootstrap]
            [cljs.repl :refer [source-fn]]))

(defn app []
  (let [boxes (r/atom [bootstrap/init-str
                       "(sin-osc 440)"])
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