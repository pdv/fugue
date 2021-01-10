(ns fugue.cantor
  (:require [goog.string :refer [format]]
            [fugue.midi :refer [note->hz]]))

(defn relatives [root limit]
  (for [den (range 1 limit)]
    (for [num (range 1 limit)]
      (->> (/ (* num (note->hz root))
              (* den 440))
           (.log2 js/Math)
           (* 12)
           (+ 69)))))

(defn- color [value]
  (let [diff (- value (.round js/Math value))
        abs (- 255 (* 255 4 (.abs js/Math diff)))
        [r g b] (cond
                  (not= diff 0) [abs 255 255]
                  (= 0 diff) [255 255 255]
                  (> diff 0) [255 255 abs])]
    (str "rgb(" r "," g "," b ")")))

(def note-names ["C" "Db" "D" "Eb" "E" "F" "F#" "G" "Ab" "A" "Bb" "B"])

(defn cantor-table [root]
  [:table:cantor
   [:thead
    (for [i (range 12)] [:th.cell i])
    (for [[i row] (map-indexed vector (relatives root 12))]
      [:tr
       [:th.cell i]
       (for [col row]
         [:td.cantor
          {:style {:backgroundColor (color col)}}
          (let [closest (.round js/Math col)
                name (first (drop (mod closest 12) note-names))
                octave (int (/ closest 12))]
            (str name octave))
          [:br]
          (format "%.2f" (- col root))
          [:br]
          (format "%.2f" col)])])]])
