(ns fugue.ide.windows
  (:require [fugue.ide.layout :as layout]
            [fugue.ide.editor :as editor]
            [fugue.ide.state :refer [in-popup?]]))

(defn window-content [value focused {:keys [on-change on-selection on-shortcut]}]
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

(defn windows-layout [state {:keys [on-box-click on-text-change on-shortcut]}]
  [layout/container
   (layout/map-values
     (fn [id]
       (let [filename (get-in state [:buffers id])
             value (get-in state [:files filename])
             focused (and (= id (:active state))
                          (not (in-popup? state)))]
         [:div {:class-name (if focused "window focused" "window")
                :on-mouse-down #(on-box-click id)}
          [window-content value focused {:on-change #(if focused (on-text-change id %))
                                         :on-selection         #()
                                         :on-shortcut          on-shortcut}]
          [:div.status-bar>a id]]))
     (:layout state))])