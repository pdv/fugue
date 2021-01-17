(ns fugue.boxes.boxes
  (:require [fugue.boxes.layout :as layout]
            [fugue.boxes.editor :as editor]
            [fugue.boxes.state :refer [in-popup?]]))

(def cm-settings {"keyMap" "vim" "theme" "base16-ocean"})

(defn box [value focused {:keys [on-change on-selection on-shortcut]}]
  (cond
    (vector? value) [:div.output value]
    (string? value)
    [editor/editor
     value
     focused
     on-change
     on-selection
     {:keyMap "vim"
      :theme "base16-ocean"
      :lineNumbers true
      :extraKeys #js {"Shift-Ctrl-Space" on-shortcut}}]
    (map? value)
    [:div.output>p.value-box
     (str (or (:value value)
              (if-let [error (:error value)]
                (.. error -cause -message))
              value))]
    :else
    [:div.output>p.value-box (str value)]))

(defn boxes [state {:keys [on-box-click on-text-change on-shortcut]}]
  [layout/boxes-container
   (layout/map-values
     (fn [id]
       (let [filename (get-in state [:buffers id])
             value (get-in state [:files filename])
             focused (and (= id (:active state))
                          (not (in-popup? state)))]
         [:div {:class-name (if focused "box focused" "box")
                :on-mouse-down #(on-box-click id)}
          [box value focused {:on-change #(if focused (on-text-change id %))
                              :on-selection #()
                              :on-shortcut on-shortcut}]
          [:div.status-bar>a id]]))
     (:boxes state))])