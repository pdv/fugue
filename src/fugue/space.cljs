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
   :files {1 "(+ 1 23)"}
   :key-seq nil})

(defn current-buffer-text [state]
  (get-in state [:files (:active state)]))

(defn eval-settings [state]
  {:eval cljs.js/js-eval
   :context :statement
   :load (fn [m cb]
           (if-let [source (get-in state [:files (str :name m)])]
             (cb {:lang :clj :source source})
             (cb nil)))})

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


(def popup-options
  {[] ["e - eval"
       "f - files"
       "w - windows"
       "x - x"]
   ["e"] ["b - eval current buffer"]
   ["f"] ["o - open" "u - upload" "d - download"]
   ["w"] ["s - split"]
   ["x"] ["x"]})

(defn popup-content [key-seq]
  [:div.popup>ul
   [:p (str key-seq)]
   (for [option (popup-options key-seq)]
     [:li option])])

(defn show-popup [state]
  (assoc state :key-seq []))

(defn hide-popup [state]
  (assoc state :key-seq nil))

(defn activate [state id]
  (-> state
      (assoc :active id)
      (hide-popup)))

(defn on-eval [state result]
  (-> state
      (hide-popup)
      (assoc-in [:files (:next-id state)] (:value result))
      (update :boxes b/insert :after (:active state) (:next-id state))
      (activate (:next-id state))
      (update :next-id inc)))

(defn on-key [state actions key]
  (cond
    (and (empty (:key-seq state)) (= " " key))
    (show-popup state)
    (and (not-empty (:key-seq state)) (= "Escape" key))
    (hide-popup state)
    :else
    (let [new-seq (conj (:key-seq state) key)]
      (if-let [action (get actions new-seq)]
        (action (assoc state :key-seq nil))
        (assoc state :key-seq new-seq)))))

(defn app []
  (let [eval-state (cljs.js/empty-state)
        state (r/atom init-state)]
    (defn eval! []
      (let [[source settings] ((juxt current-buffer-text eval-settings) @state)
            cb (partial swap! state on-eval)]
        (cljs.js/eval-str eval-state source nil settings cb)))
    (defn on-keydown [e]
      (let [in-popup (some? (:key-seq @state))
            in-textbox (= "TEXTAREA" (.. js/document -activeElement -tagName))
            key (.-key e)]
        (when (or in-popup (not in-textbox))
          (.preventDefault e)
          (swap! state on-key {} key))))
    (.defineAction js/CodeMirror.Vim "space!" #(swap! state show-popup))
    (.mapCommand js/CodeMirror.Vim "<Space>" "action" "space!" #js {} #js {"context" "normal"})
    (.addEventListener js/document "keydown" on-keydown)
    (fn []
      [:div.boxes
       [boxes
        @state
        {:on-box-click #(swap! state activate %)
         :on-text-change (fn [id new-text]
                           (swap! state assoc-in [:files id] new-text))
         :on-shortcut #(swap! state show-popup)}]
       (if-let [keys (:key-seq @state)]
         [popup-content keys])])))
