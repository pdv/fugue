(ns fugue.ide.ui
  (:require [reagent.core :as r]
            [cljs.js]
            [fugue.ide.util :refer [log]]
            [fugue.ide.windows :refer [window-content]]
            [fugue.ide.popup :as popup]
            [fugue.ide.actions :as a]
            [fugue.ide.state :as s]))

(defn popup-options [actions key-seq]
  (->> (get-in actions key-seq)
       (filter (comp string? first))
       (map #(vector (first %) (:name (second %))))))

(defn available-actions [state]
  {"w" {:name "window"
        "x" {:name "kill-active-window"
             :action :kill-active-window}}})

(defn do-action [state eval-state swap-cb action-name]
  (case action-name
    :kill-active-window (swap-cb s/kill-active-window)))

(defn in-text-area? []
  (= "TEXTAREA" (.. js/document -activeElement -tagName)))

(defn windows-layout [state {:keys [on-box-click on-text-change on-shortcut]}]
  (s/layout state
            (fn [id value active]
              [:div {:class-name (if active "window focused" "window")
                     :on-mouse-down #(on-box-click id)}
               [window-content value active
                {:on-change #(if active (on-text-change id %))
                 :on-selection #()
                 :on-shortcut on-shortcut}]
               [:div.status-bar>a id]])))

(defn app []
  (let [eval-state (cljs.js/empty-state)
        state (r/atom s/init-state)
        key-seq (r/atom [])]
    (defn on-key-down [e]
      (when-not (in-text-area?)
        (.preventDefault e)
        (let [popup (s/in-popup? @state)
              key (.-key e)
              actions (get-in (available-actions state) @key-seq)
              action (:action (get actions key))]
          (cond
            (and (not popup) (= " " key))
            (swap! state s/open-popup)
            (and popup action)
            (do-action @state eval-state (partial swap! state) action)
            (and popup (contains? actions key))
            (swap! key-seq conj key)
            :else
            (swap! state s/close-popup)))))
    (.addEventListener js/document "keydown" on-key-down)
    (.defineAction js/CodeMirror.Vim "space!" #(swap! state s/open-popup))
    (.mapCommand js/CodeMirror.Vim "<Space>" "action" "space!" #js {} #js {"context" "normal"})
    (fn []
      (log @state)
      (log @key-seq)
      [:div.ide
       [windows-layout
        @state
        {:on-box-click #(swap! state s/activate %)
         :on-text-change (partial swap! state s/write-file)
         :on-shortcut #(swap! state s/open-popup)}]
       (if (s/in-popup? @state)
         [popup/popup-content
          (popup-options (available-actions @state) @key-seq)])])))
