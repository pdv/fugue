(ns fugue.ide.layout
  (:require [clojure.zip :as zip]))

(defn in-row? [loc]
  (-> (zip/path loc)
      (count)
      odd?))

(defn insert-node [nodes direction node new-node]
  (loop [loc (zip/seq-zip nodes)]
    (if (zip/end? loc)
      (zip/root loc)
      (if (= node (zip/node loc))
        (zip/root
          (case direction
            :after (zip/insert-right loc new-node)
            :right (if (in-row? loc)
                     (zip/insert-right loc new-node)
                     (zip/edit loc #(list % new-node)))
            :left (if (in-row? loc)
                    (zip/insert-left loc new-node)
                    (zip/edit loc #(list new-node %)))
            :below (if (in-row? loc)
                     (zip/edit loc #(list % new-node))
                     (zip/insert-right loc new-node))
            :above (if (in-row? loc)
                     (zip/edit loc #(list new-node %))
                     (zip/insert-left loc new-node))))
        (recur (zip/next loc))))))

(defn remove-node [nodes node]
  (loop [loc (zip/seq-zip nodes)]
    (if (zip/end? loc)
      (zip/root loc)
      (if (= node (zip/node loc))
        (zip/root (zip/remove loc))
        (recur (zip/next loc))))))

(defn map-values [f nodes]
  (loop [loc (zip/seq-zip nodes)]
    (if (zip/end? loc)
      (zip/root loc)
      (recur (zip/next (if-not (seq? (zip/node loc))
                         (zip/edit loc f)
                         loc))))))

(defn row-or-col [node is-row]
  [:div.flex {:style {:flex-flow (if is-row "row" "column")}}
   (if (seq? node)
     (map #(row-or-col % (not is-row)) node)
     node)])

(defn container [root]
  (row-or-col root true))
