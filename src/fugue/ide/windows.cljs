(ns fugue.ide.windows
  (:require [fugue.ide.editor :as editor]))

(defn window-content [value focused {:keys [on-change on-selection on-shortcut]}]
  (cond
    (vector? value) [:div.output value]
    (string? value)
    [editor/editor value focused on-change on-selection
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
