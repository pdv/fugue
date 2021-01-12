(ns fugue.ide
  (:require [reagent.core :as r]
            [fugue.demo.demo-loader :as demo-loader]
            [fugue.editor :refer [editor output-box]]))

(def welcome
  [:div
    [:h2 "welcome to fugue"]
    [:p "click 'eval' to evaluate the buffer"]
    [:p "then click 'render' to display the ui"]])

(def init-state
  {:buffer ""
   :tabs #{"fugue.user"}
   :curr-tab "fugue.user"
   :files {"demo.cantor-harmonies" demo-loader/cantor
           "demo.circle-of-fifths" demo-loader/cof
           "demo.chord-detector" demo-loader/midi-monitor
           "live.api" demo-loader/api
           "fugue.user" "(ns fugue.user)\n\n"}
   :input ""
   :selection ""
   :output ""
   :rendering welcome
   :vim-on true})

(defn load-buffer [state name]
  (-> state
      (update :tabs conj name)
      (assoc :buffer (get-in state [:files name]))
      (assoc :curr-tab name)))

(defn ide [eval-fn]
  (let [state (r/atom init-state)]
    (defn eval! [text]
      (eval-fn text
               (fn [m cb]
                 (let [filename (str (:name m))
                       source (if (= "fugue.api" filename)
                                ""
                                (get-in @state [:files filename]))]
                   (cb (if source {:lang :clj :source source} nil))))
               (partial swap! state assoc :output)))
    (fn []
      [:div.ide
       [:div.ide-left
        [:div.ide-editor-container
         [:ul.ide-file-list
          (for [filename (keys (:files @state))]
            ^{:key filename}
            [:li
             {:on-click #(swap! state load-buffer filename)
              :class-name (if (contains? (:tabs @state) filename) "open" "closed")}
             filename])]
         [:div.ide-tab-container
          [:ul.ide-tabs
           (for [tab-name (:tabs @state)]
             ^{:key tab-name}
             [:li {:class-name (if (= tab-name (:curr-tab @state)) "selected" "unselected")}
              [:a.ide-tabs-name
               {:on-click #(swap! state load-buffer tab-name)}
               tab-name]
              [:a.ide-tabs-close
               {:on-click #(swap! state update :tabs disj tab-name)}
               "✕"]])]
          [editor
           (:buffer @state)
           (partial swap! state assoc :input)
           (partial swap! state assoc :selection)
           #(eval! (:selection @state))
           {:keyMap (if (:vim-on @state) "vim" "default")}]]]
        [:div.ide-toolbar
         [:button {:on-click #(eval! (:input @state))} "eval"]
         [:button
          {:on-click #(eval! (:selected @state))
           :disabled (empty? (:selected @state))}
            "eval selection (ctrl-shift-space)"]
         [:button
          {:on-click #(swap! state assoc :rendering (:value (:output @state)))
           :disabled (-> @state :output :value vector? not)}
           "render"]
         [:button
          {:on-click #(swap! state update :vim-on not)}
          (str (if (:vim-on @state) "disable" "enable") " vim bindings")]]
        [:div.ide-output-container
         [output-box (:output @state)]]]
       [:div.ide-right (:rendering @state)]])))
