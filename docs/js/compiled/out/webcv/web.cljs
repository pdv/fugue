(ns webcv.web
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [oops.core :refer [oget+]]
            [webcv.ctx-ctrls :refer [init-controls-txt]]
            [webcv.box :as box]
            [cljs.repl :refer [source-fn]]))

(defn app []
  (let [boxes (r/atom [init-controls-txt])
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