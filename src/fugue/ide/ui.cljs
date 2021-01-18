(ns fugue.ide.ui
  (:require [reagent.core :as r]
            [cljs.js]
            [fugue.ide.util :refer [log]]
            [fugue.ide.windows :refer [window-content]]
            [fugue.ide.popup :as popup]
            [fugue.ide.actions :as a]
            [fugue.ide.state :as s]))

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

(defn add-jumps [state swap-cb]
  (reduce (fn [acc i]
            (s/add-shortcut acc [(str i)] [:jump-to-window i]))
          (s/add-action state :jump-to-window (partial swap-cb s/activate))
          (range 1 10)))

(defn setup-actions [state eval-state]
  (-> @state
      (add-jumps (partial swap! state))
      (s/add-shortcut-group ["w"] "window")
      (s/add-shortcut ["w" "x"] :kill-active-window)
      (s/add-action :kill-active-window
                    #(swap! state s/kill-active-window))
      (s/add-shortcut-group ["e"] "eval")
      (s/add-shortcut ["e" "w"] :eval-active-window)
      (s/add-action :eval-active-window
                    #(a/eval-action @state eval-state (partial swap! state)))))

(defn app []
  (let [eval-state (cljs.js/empty-state)
        state (r/atom s/init-state)]
    (defn on-key-down [e]
      (when-not (in-text-area?)
        (.preventDefault e)
        (s/on-key @state (.-key e) (partial swap! state))))
    (.addEventListener js/document "keydown" on-key-down)
    (.defineAction js/CodeMirror.Vim "space!" #(swap! state s/open-popup))
    (.mapCommand js/CodeMirror.Vim "<Space>" "action" "space!" #js {} #js {"context" "normal"})
    (reset! state (setup-actions state eval-state))
    (fn []
      [:div.ide
       [windows-layout
        @state
        {:on-box-click #(swap! state s/activate %)
         :on-text-change (partial swap! state s/write-file)
         :on-shortcut #(swap! state s/open-popup)}]
       (if (s/in-popup? @state)
         [popup/popup-content (s/popup-menu @state)])
       (if (s/in-minibuffer? @state)
         [popup/mini-buffer
          (s/action-names @state)
          #(swap! state s/close-popup)
          #(s/perform-action @state %)])])))

