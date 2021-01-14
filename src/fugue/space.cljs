(ns fugue.space
  (:require-macros [fugue.env :refer [analyzer-state]])
  (:require [cljs.js]
            [fugue.api]
            [clojure.zip :as zip]
            [reagent.core :as r]))

(def init-state-m
  {:boxes '(1 (2 3))
   :active 1
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


(defn load-namespace [eval-state]
  (assoc-in eval-state [:cljs.analyzer/namespaces 'cljs.user] (analyzer-state 'fugue.api)))

(defn current-buffer-text [state]
  (get-in state [:files (:active state)]))

(defn eval-settings [state]
  {:eval cljs.js/js-eval
   :context :statement
   :load (fn [m cb]
           (if-let [source (get-in state [:files (str :name m)])]
             (cb {:lang :clj :source source})
             (cb nil)))})

(defn eval-active [eval-state app-state cb]
  (cljs.js/eval-str eval-state (current-buffer-text app-state) nil (eval-settings app-state) cb))

(defn on-eval [state result]
  (-> state
      (assoc-in [:files (:next-id state)] (str result))
      (update :boxes insert :below (:active state) (:next-id state))))

(defn boxes [files box is-row]
  [:div {:style {:display "flex"
                 :flex-grow 0
                 :flex-flow (if is-row "row" "column")}}
   (if (seqable? box)
     (map #(boxes files % (not is-row)) box)
     [:p (str (get files box))])])

(defn app []
  (let [eval-state (cljs.js/empty-state load-namespace)
        app-state (r/atom init-state-m)]
    (defn eval! []
      (eval-active eval-state @app-state (partial swap! app-state on-eval)))
    (fn []
      [:div
       [:button {:on-click eval!}
        "Click me"]
       [:p (str @app-state)]
       (boxes (:files @app-state) (:boxes @app-state) true)])))




