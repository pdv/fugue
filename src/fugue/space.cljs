(ns fugue.space
  (:require [clojure.zip :as zip]
            [reagent.core :as r]))

(def init-state
  {:boxes [1 [2 3]]
   :active-box 1
   :next-id 4
   :files {1 "foo" 2 "bar" 3 "biz"}})

(defn in-row? [loc]
  (-> (zip/path loc)
      (count)
      (mod 2)
      (= 1)))

(defn insert [boxes box new-box direction]
  (loop [loc (zip/seq-zip boxes)]
    (if (zip/end? loc)
      (zip/root loc)
      (if (= box (zip/node loc))
        (zip/root
          (case direction
            :right (if (in-row? loc)
                     (zip/insert-right loc new-box)
                     (zip/edit loc #(list % new-box)))
            :left (if (in-row? loc)
                    (zip/insert-left loc new-box)
                    (zip/edit loc #(list new-box %)))
            :down (if (in-row? loc)
                    (zip/edit loc #(list % new-box))
                    (zip/insert-right loc new-box))
            :up (if (in-row? loc)
                  (zip/edit loc #(list new-box %))
                  (zip/insert-left loc new-box))))
        (recur (zip/next loc))))))

(defn boxes [node is-row]
  [:div {:style {:display "flex"
                 :flex-grow 0
                 :flex-flow (if is-row "row" "column")}}
   (if (seqable? node)
     (map #(boxes % (not is-row)) node)
     [:p (str node)])])

(defn app []
  (let [state (r/atom init-state)]
    (fn []
      (boxes (:boxes @state) true))))




