(ns fugue.boxes.ui
  (:require [reagent.core :as r]
            [cljs.js]
            [fugue.boxes.layout :as layout]
            [fugue.boxes.editor :as editor]
            [fugue.boxes.state :as b]))

(defn popup-content [key-seq]
  [:div.popup>ul
   [:p (str key-seq)]
   (for [option (b/popup-options key-seq)]
     [:li option])])

(defn boxes [state {:keys [on-box-click on-text-change on-shortcut]}]
  [layout/boxes-container
   (layout/map-values
     (fn [id]
       [:div {:class-name (if (= id (:focused state)) "box focused" "box")
              :on-click   #(on-box-click id)}
        (let [value (get-in state [:files id])]
          (cond
            (vector? value) [:div.output value]
            (string? value)
            [editor/editor
             value
             (= id (:focused state))
             {:on-change #(on-text-change id %)
              :on-selection-change #(print "on-selection-change")
              :on-shortcut on-shortcut}
             {"keyMap" "vim" "theme" "base16-ocean"}]
            :else [:div.output>p.value-box (str value)]))
        [:div.status-bar>a id]])
     (:boxes state))])

(defn app []
  (let [eval-state (cljs.js/empty-state)
        state (r/atom b/init-state)]
    (defn on-keydown [e]
      (let [in-popup (some? (:key-seq @state))
            in-textbox (= "TEXTAREA" (.. js/document -activeElement -tagName))
            key (.-key e)]
        (when (or in-popup (not in-textbox))
          (.preventDefault e)
          (b/on-key @state (b/make-actions eval-state) key (partial reset! state)))))
    (.addEventListener js/document "keydown" on-keydown)
    (.defineAction js/CodeMirror.Vim "space!" #(swap! state b/show-popup))
    (.mapCommand js/CodeMirror.Vim "<Space>" "action" "space!" #js {} #js {"context" "normal"})
    (fn []
      [:div.boxes
       [boxes
        @state
        {:on-box-click #(swap! state b/activate %)
         :on-text-change (fn [id new-text]
                           (swap! state assoc-in [:files id] new-text))
         :on-shortcut #(swap! state b/show-popup)}]
       (if-let [keys (:key-seq @state)]
         [popup-content keys])])))

