(ns fugue.boxes.ui
  (:require [reagent.core :as r]
            [cljs.js]
            [fugue.boxes.util :refer [log]]
            [fugue.boxes.layout :as layout]
            [fugue.boxes.editor :as editor]
            [fugue.boxes.state :as b]))

(defn popup-content [actions]
  [:div.popup>ul
   (for [[key name] actions]
     [:li (str key " - " name)])])

(def cm-settings {"keyMap" "vim" "theme" "base16-ocean"})

(defn box [value focused editor-callbacks]
  (cond
    (vector? value) [:div.output value]
    (string? value)
    [editor/editor value focused editor-callbacks cm-settings]
    (map? value)
    [:div.output>p.value-box (str (or (:value value)
                                      (.. (:error value) -cause -message)))]
    :else
    [:div.output>p.value-box (str value)]))


(defn boxes [state {:keys [on-box-click on-text-change on-shortcut]}]
  [layout/boxes-container
   (layout/map-values
     (fn [id]
       (let [value (get-in state [:files id])
             focused (and (= id (:active state))
                          (empty? (:key-seq state)))]
         [:div {:class-name (if focused "box focused" "box")
                :on-mouse-down #(on-box-click id)}
          [box value focused {:on-change (partial on-text-change id)
                              :on-shortcut on-shortcut}]
          [:div.status-bar>a id]]))
     (:boxes state))])

(defn app []
  (let [eval-state (cljs.js/empty-state)
        state (r/atom b/init-state)]
    (defn on-keydown [e]
      (when-not (= "TEXTAREA" (.. js/document -activeElement -tagName))
        (.preventDefault e)
        (let [new-seq (conj (:key-seq @state) (.-key e))
              keymap (b/default-keymap eval-state)]
          (cond
            (contains? keymap new-seq)
            ((get keymap new-seq) @state (partial swap! state))
            ;elseif
            (contains? b/popup-options new-seq)
            (swap! state assoc :key-seq new-seq)
            :else
            (swap! state assoc :key-seq [])))))
    (.addEventListener js/document "keydown" on-keydown)
    (.defineAction js/CodeMirror.Vim "space!" #(swap! state assoc :key-seq [" "]))
    (.mapCommand js/CodeMirror.Vim "<Space>" "action" "space!" #js {} #js {"context" "normal"})
    (fn []
      [:div.boxes
       [boxes
        @state
        {:on-box-click #(swap! state b/activate %)
         :on-text-change (fn [id new-text]
                           (swap! state assoc-in [:files id] new-text))
         :on-shortcut #(swap! state assoc :key-seq [" "])}]
       (if-let [options (get b/popup-options (:key-seq @state))]
         [popup-content options])])))

