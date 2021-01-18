(ns fugue.ide.file-upload
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(defn file-upload [click on-upload]
  (r/create-class
    {:render
     (fn []
       [:input {:type "file" :style {:display "none"}}])
     :component-did-mount
     (fn [this]
       (let [node (rdom/dom-node this)]
         (.addEventListener node "change" (fn []
                                            (let [files (.-files node)
                                                  file (aget files (dec (.-length files)))
                                                  name (.-name file)]
                                              (when file
                                                (.then (.text file) (partial on-upload name))))))))
     :component-did-update
     (fn [this old-argv]
       (let [argv (r/argv this)
             was-click (second old-argv)
             is-click (second argv)]
         (print was-click is-click)
         (if (and (not was-click) is-click)
           (.click (rdom/dom-node this)))))}))
