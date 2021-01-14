(ns fugue.space
  (:require-macros [fugue.env :refer [analyzer-state]])
  (:require [cljs.js]
            [reagent.core :as r]
            [fugue.boxes :as boxes]
            [fugue.editor :as editor]))

(def init-state
  {:boxes '(1)
   :active 1
   :next-id 2
   :result nil
   :files {1 "(+ 1 23)"}})

(defn foo []
  "nice")

(defn current-buffer-text [state]
  (get-in state [:files (:active state)]))

(defn eval-settings [state]
  {:eval cljs.js/js-eval
   :context :statement
   :load (fn [m cb]
           (if-let [source (get-in state [:files (str :name m)])]
             (cb {:lang :clj :source source})
             (cb nil)))})

(defn on-eval [state result]
  (-> state
      (assoc-in [:files (:next-id state)] (:value result))
      (update :boxes boxes/insert :after (:active state) (:next-id state))
      (update :next-id inc)))

(defn box [id value active on-change on-shortcut]
  [:div {:class-name (if active "box active" "box")}
   (cond
     (vector? value) [:div.output value]
     (string? value)
     [editor/editor
      value
      {:on-change on-change
       :on-selection-change #(print "on-selection-change")
       :on-shortcut on-shortcut}
      {"keyMap" "vim"}]
     :else [:div.output [:p.value-box (str value)]])
   [:div.status-bar
    [:a id]]])

(defn mapped-boxes [state on-change on-shortcut]
  (boxes/map-values (:boxes state)
                    (fn [id]
                      [box
                       id
                       (get-in state [:files id])
                       (= id (:active state))
                       #(on-change id %)
                       on-shortcut])))

(defn app []
  (let [eval-state (cljs.js/empty-state)
        state (r/atom init-state)]
    (defn eval! []
      (let [[source settings] ((juxt current-buffer-text eval-settings) @state)
            cb (partial swap! state on-eval)]
        (print "evaling")
        (.log js/console source)
        (cljs.js/eval-str eval-state source nil settings cb)))
    (.defineAction js/CodeMirror.Vim "eval!" eval!)
    (.mapCommand js/CodeMirror.Vim "<Space>" "action" "eval!" #js {} #js {"context" "normal"})
    (fn []
      (let [mapped (mapped-boxes @state
                                 (fn [id new-val]
                                   (swap! state assoc-in [:files id] new-val))
                                 eval!)]
        (print mapped)
        [boxes/boxes-container mapped eval!]))))

