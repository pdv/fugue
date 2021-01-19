(ns fugue.ide.ui
  (:require [reagent.core :as r]
            [cljs.js]
            [fugue.demo.demo-loader :as demo-loader]
            [fugue.ide.util :refer [log]]
            [fugue.ide.popup :as popup]
            [fugue.ide.editor :as editor]
            [fugue.ide.file :as file]
            [fugue.ide.state :as s]))

(defn in-text-area? []
  (= "TEXTAREA" (.. js/document -activeElement -tagName)))

(defn windows-layout [state {:keys [on-box-click on-text-change on-shortcut]}]
  (s/layout
    state
    (fn [id name value active]
      [:div {:class-name (if active "window focused" "window")
             :on-mouse-down #(on-box-click id)}
       (cond
         (vector? value) [:div.output value]
         ;;
         (string? value)
         [editor/editor value active (partial on-text-change name) #()
          {:keyMap (if (s/get-toggle state :vim) "vim" "default")
           :theme "base16-ocean"
           :lineNumbers (s/get-toggle state :line-numbers)
           :extraKeys #js {"Shift-Ctrl-Space" on-shortcut}}]
         ;;
         (map? value)
         (let [result (:value value)
               error (:error value)]
           [:div.output
            (cond
              (vector? result) result
              error [:span (.. error -cause -message)]
              :else [:span result])])
         :else
         [:div.output>p.value-box (str value)])
       [:div.status-bar
        [:a id]
        [:span name]]])))

(defn add-jumps [state swap-cb]
  (reduce (fn [acc i]
            (s/add-shortcut acc [(str i)] [:jump-to-window i]))
          (s/add-action state :jump-to-window (partial swap-cb s/activate))
          (range 1 10)))

(defn eval-settings [state]
  {:eval cljs.js/js-eval
   :context :statement
   :load (fn [m cb]
           (let [name (str (:name m))
                 source (s/file-contents state name)]
             (cond
               (= "live.api" name)
               (cb {:lang :clj :source demo-loader/api})
               source
               (cb {:lang :clj :source source})
               :else
               (cb nil))))})

(defn on-eval [state result]
  (let [filename (gensym "result")]
    (-> state
        (s/write-file filename result)
        (s/open-file filename :after))))

(defn eval-action [state eval-state swap-cb]
  (let [[source settings] ((juxt s/active-file eval-settings) state)
        on-result (fn [result]
                    (if (fn? (:value result))
                      (swap-cb (:value result))
                      (swap-cb on-eval result)))]
    (cljs.js/eval-str eval-state source nil settings on-result)))

(defn setup-actions [state eval-state]
  (-> @state
      (add-jumps (partial swap! state))
      ;;
      (s/add-shortcut-group ["t"] "toggle")
      (s/add-shortcut ["t" "v"] [:flip-toggle :vim])
      (s/add-shortcut ["t" "l"] [:flip-toggle :line-numbers])
      (s/add-action :flip-toggle (partial swap! state s/flip-toggle))
      ;;
      (s/add-shortcut-group ["w"] "window")
      (s/add-action :split-window (partial swap! state s/split))
      (s/add-shortcut ["w" "/"] [:split-window :right])
      (s/add-shortcut ["w" "-"] [:split-window :below])
      (s/add-shortcut ["w" "x"] :kill-active-window)
      (s/add-action :kill-active-window (partial swap! state s/kill-active-window))
      ;;
      (s/add-shortcut-group ["e"] "eval")
      (s/add-shortcut ["e" "w"] :eval-active-window)
      (s/add-action :eval-active-window
                    #(eval-action @state eval-state (partial swap! state)))
      ;;
      (s/add-shortcut-group ["f"] "file")
      (s/add-shortcut ["f" "d"] :file-download)
      (s/add-action :file-download
                    #(apply file/download ((juxt s/active-file-name s/active-file) @state)))
      (s/add-shortcut ["f" "u"] :file-upload)
      (s/add-action :file-upload
                    #(file/upload (partial swap! state s/on-upload)))))

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
       (if (s/in-shortcuts? @state)
         [popup/shortcuts-popup (s/popup-menu @state)])
       (if (s/in-minibuffer? @state)
         [popup/mini-buffer
          (s/action-names @state)
          #(swap! state s/close-popup)
          (partial s/perform-action @state)])])))

