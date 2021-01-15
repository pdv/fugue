(ns fugue.space
  (:require-macros [fugue.env :refer [analyzer-state]])
  (:require [cljs.js]
            [clojure.string :as s]
            [reagent.core :as r]
            [fugue.boxes :as b]
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
      (update :boxes b/insert :after (:active state) (:next-id state))
      (update :next-id inc)))

(defn boxes [state {:keys [on-box-click on-text-change on-shortcut]}]
  [b/boxes-container
   (b/map-values
     (fn [id]
       [:div {:class-name (if (= id (:active state)) "box active" "box")
              :on-click #(on-box-click id)}
        (let [value (get-in state [:files id])]
          (cond
            (vector? value) [:div.output value]
            (string? value)
            [editor/editor
             value
             {:on-change #(on-text-change id %)
              :on-selection-change #(print "on-selection-change")
              :on-shortcut on-shortcut}
             {"keyMap" "vim"}]
            :else [:div.output>p.value-box (str value)]))
        [:div.status-bar>a id]])
     (:boxes state))])

(defn app []
  (let [eval-state (cljs.js/empty-state)
        state (r/atom init-state)
        popup (r/atom nil)]
    (defn eval! []
      (let [[source settings] ((juxt current-buffer-text eval-settings) @state)
            cb (partial swap! state on-eval)]
        (print "evaling")
        (.log js/console source)
        (cljs.js/eval-str eval-state source nil settings cb)))
    (defn show-popup! []
      (reset! popup []))
    (defn hide-popup! []
      (reset! popup nil))
    (defn on-keydown [e]
      (let [key (.-key e)]
        (cond
          (and (not @popup)
               (= " " key)
               (not= "textarea" (s/lower-case (.-tagName (.-activeElement js/document)))))
          (do
            (print (.-tagName (.-activeElement js/document)))
            (show-popup!))
          (not (nil? @popup))
          (do
            (.preventDefault e)
            (case key
              "Escape" (hide-popup!)
              (swap! popup conj key))))))
    (.defineAction js/CodeMirror.Vim "space!" show-popup!)
    (.mapCommand js/CodeMirror.Vim "<Space>" "action" "space!" #js {} #js {"context" "normal"})
    (.addEventListener js/document "keydown" on-keydown)
    (fn []
      [:div.boxes
       [boxes
        @state
        {:on-box-click (partial swap! state assoc :active)
         :on-text-change (fn [id new-text] (swap! state assoc-in [:files id] new-text))
         :on-shortcut show-popup!}]
       (if-let [keys @popup]
         [:div.popup>p (str keys)])])))

