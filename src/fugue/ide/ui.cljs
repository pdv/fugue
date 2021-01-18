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


(defn popup-options [shortcuts key-seq]
  (->> (get-in shortcuts key-seq)
       (filter (comp string? first))
       (map #(vector (first %) (:name (second %))))))

(defn default-shortcut-map []
  {"e" {:name "eval"
        "w" {:name "eval-active-window"
             :action :eval-active-window}}
   "w" {:name "window"
        "x" {:name "kill-active-window"
             :action :kill-active-window}}})

(defn default-actions [state-atom eval-state]
  {:eval-active-window #(a/eval-action @state-atom eval-state (partial swap! state-atom))
   :kill-active-window #(swap! state-atom s/kill-active-window)})

(defn app []
  (let [eval-state (cljs.js/empty-state)
        state (r/atom s/init-state)
        key-seq (r/atom [])
        shortcuts (r/atom (default-shortcut-map))
        actions (r/atom (default-actions state eval-state))]
    (defn on-key-down [e]
      (when-not (in-text-area?)
        (.preventDefault e)
        (let [popup (s/in-popup? @state)
              key (.-key e)
              menu (get-in @shortcuts @key-seq)
              action (:action (get menu key))]
          (cond
            (and (not popup) (= " " key))
            (swap! state s/open-popup)
            (and popup action)
            ((get @actions action))
            (and popup (contains? menu key))
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
          (popup-options @shortcuts @key-seq)])])))
