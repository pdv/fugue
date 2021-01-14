(ns fugue.space
  (:require-macros [fugue.env :refer [analyzer-state]])
  (:require [cljs.js]
            [fugue.api]
            [clojure.zip :as zip]
            [reagent.core :as r]))

(def init-state-m
  {:boxes '(1 (2 3))
   :active-box 1
   :next-id 4
   :result nil
   :files {1 "(+ 82 34)" 2 "bar" 3 "biz"}})

(defn in-row? [loc]
  (-> (zip/path loc)
      (count)
      (mod 2)
      (= 1)))

(defn insert [boxes direction box new-box]
  (loop [loc (zip/seq-zip boxes)]
    (print (zip/node loc))
    (if (zip/end? loc)
      (do
        (print "end")
        (zip/root loc))
      (if (= box (zip/node loc))
        (zip/root
          (case direction
            :right (if (in-row? loc)
                     (zip/insert-right loc new-box)
                     (zip/edit loc #(list % new-box)))
            :left (if (in-row? loc)
                    (zip/insert-left loc new-box)
                    (zip/edit loc #(list new-box %)))
            :below (if (in-row? loc)
                     (zip/edit loc #(list % new-box))
                     (zip/insert-right loc new-box))
            :above (if (in-row? loc)
                     (zip/edit loc #(list new-box %))
                     (zip/insert-left loc new-box))))
        (recur (zip/next loc))))))


(defn init-state [state]
  (assoc-in state [:cljs.analyzer/namespaces 'cljs.user]
            (analyzer-state 'fugue.api)))

(def state (cljs.js/empty-state init-state))

(def eval-settings
  {:eval cljs.js/js-eval
   :context :statement})

(defn eval-str [source load-fn cb]
  (cljs.js/eval-str state source nil (assoc eval-settings :load load-fn) cb))

(defn do-eval [state cb]
  (let [text (get-in state [:files (:active-box state)])
        load-fn (fn [m cb]
                  (if-let [source (get-in state [:files (str (:name m))])]
                    (cb {:lang :clj :source source})
                    (cb nil)))]
    (eval-str text load-fn cb)))

(defn boxes [files box is-row]
  [:div {:style {:display "flex"
                 :flex-grow 0
                 :flex-flow (if is-row "row" "column")}}
   (if (seqable? box)
     (map #(boxes files % (not is-row)) box)
     [:p (str (get files box))])])

(defn app []
  (let [state (r/atom init-state-m)]
    (fn []
      [:div
       [:button {:on-click #(do-eval @state (partial swap! state update :boxes insert :below (:active-box @state)))}
        "Click me"]
       [:p (str @state)]
       (boxes (:files @state) (:boxes @state) true)])))




