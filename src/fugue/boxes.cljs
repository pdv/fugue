(ns fugue.boxes
  (:require [clojure.zip :as zip]))

(defn in-row? [loc]
  (-> (zip/path loc)
      (count)
      odd?))

(defn insert [boxes direction box new-box]
  (loop [loc (zip/seq-zip boxes)]
    (if (zip/end? loc)
      (zip/root loc)
      (if (= box (zip/node loc))
        (zip/root
          (case direction
            :after (zip/insert-right loc new-box)
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

(defn map-values [f boxes]
  (loop [loc (zip/seq-zip boxes)]
    (if (zip/end? loc)
      (zip/root loc)
      (recur (zip/next (if-not (seq? (zip/node loc))
                         (zip/edit loc f)
                         loc))))))

(defn row-or-col [box is-row]
  [:div {:style {:display "flex"
                 :flex 1
                 :flex-basis 0
                 :flex-flow (if is-row "row" "column")}}
   (if (seq? box)
     (map #(row-or-col % (not is-row)) box)
     box)])

(defn boxes-container [boxes]
  (row-or-col boxes true))
