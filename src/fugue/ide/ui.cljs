(ns fugue.ide.ui
  (:require [reagent.core :as r]
            [cljs.js]
            [fugue.ide.util :refer [log]]
            [fugue.ide.windows :refer [windows-layout]]
            [fugue.ide.popup :as popup]
            [fugue.ide.actions :as actions]
            [fugue.ide.state :as b]))

(defn app []
  (let [eval-state (cljs.js/empty-state)
        state (r/atom b/init-state)]
    (defn on-keydown [e]
      (when-not (= "TEXTAREA" (.. js/document -activeElement -tagName))
        (.preventDefault e)
        (let [new-seq (conj (:key-seq @state) (.-key e))
              keymap (actions/default-keymap eval-state)]
          (cond
            (contains? keymap new-seq)
            ((get keymap new-seq) @state (partial swap! state))
            ;elseif
            (contains? popup/popup-options new-seq)
            (swap! state assoc :key-seq new-seq)
            :else
            (swap! state assoc :key-seq [])))))
    (.addEventListener js/document "keydown" on-keydown)
    (.defineAction js/CodeMirror.Vim "space!" #(swap! state assoc :key-seq [" "]))
    (.mapCommand js/CodeMirror.Vim "<Space>" "action" "space!" #js {} #js {"context" "normal"})
    (fn []
      (log @state)
      [:div.ide
       [windows-layout
        @state
        {:on-box-click #(swap! state b/activate %)
         :on-text-change (fn [id new-text]
                           (let [filename (get-in @state [:buffers id])]
                             (swap! state assoc-in [:files filename] new-text)))
         :on-shortcut #(swap! state assoc :key-seq [" "])}]
       [popup/popup
        @state
        #(swap! state assoc :minibuffer false)
        (actions/default-actions eval-state)
        (partial swap! state)]])))


