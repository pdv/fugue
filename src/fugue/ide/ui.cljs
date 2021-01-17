(ns fugue.ide.ui
  (:require [reagent.core :as r]
            [cljs.js]
            [fugue.ide.util :refer [log]]
            [fugue.ide.windows :refer [windows-layout]]
            [fugue.ide.editor :as editor]
            [fugue.ide.state :as b]))

(defn popup-content [actions]
  [:div.popup>ul
   (for [[key name] actions]
     [:li (str key " - " name)])])

(defn minibuffer [{:keys [text selected-index]} on-change]
  [:div.popup.focused
   [editor/editor text true {:on-change on-change} {:theme "base16-ocean"
                                                    :lineNumbers false}]
   [:ul
    (for [[i option] (map-indexed vector (b/minibuffer-options text))]
      [:li {:class-name (if (= i selected-index) "minibuffer-selected" "foobar")} option])]])

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
      (log @state)
      [:div.ide
       [windows-layout
        @state
        {:on-box-click #(swap! state b/activate %)
         :on-text-change (fn [id new-text]
                           (let [filename (get-in @state [:buffers id])]
                             (swap! state assoc-in [:files filename] new-text)))
         :on-shortcut #(swap! state assoc :key-seq [" "])}]
       (if-let [text (:minibuffer @state)]
         [minibuffer text (partial swap! state assoc-in [:minibuffer :text])])
       (if-let [options (get b/popup-options (:key-seq @state))]
         [popup-content options])])))

