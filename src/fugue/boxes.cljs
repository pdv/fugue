(ns fugue.boxes
  (:require [clojure.zip :as zip]))

(defn in-row? [loc]
  (-> (zip/path loc)
      (count)
      (mod 2)
      (= 1)))

(defn insert [boxes direction box new-box]
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
            :below (if (in-row? loc)
                     (zip/edit loc #(list % new-box))
                     (zip/insert-right loc new-box))
            :above (if (in-row? loc)
                     (zip/edit loc #(list new-box %))
                     (zip/insert-left loc new-box))))
        (recur (zip/next loc))))))

(defn map-values [boxes f]
  (loop [loc (zip/seq-zip boxes)]
    (if (zip/end? loc)
      (zip/root loc)
      (recur (zip/next (if-not (seq? (zip/node loc))
                         (zip/edit loc f)
                         loc))))))

(defn row-or-col [box is-row]
  [:div {:style {:display "flex"
                 :flex-grow 0
                 :flex-flow (if is-row "row" "column")}}
   (if (seq? box)
     (map #(row-or-col % (not is-row)) box)
     [:p (str box)])])

(defn boxes-container [boxes on-eval-click]
  [:div
   [:button {:on-click on-eval-click}
    "Click me"]
   [:p (str boxes)]
   (row-or-col boxes true)])
