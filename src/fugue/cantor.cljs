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
        abs (* 255 5 (.abs js/Math diff))
        [r g b] (cond
                  (< diff 0) [0 255 abs]
                  (= 0 diff) [0 255 0]
                  (> diff 0) [abs 255 0])]
    (str "rgb(" r "," g "," b ")")))

(def note-names ["C" "Db" "D" "Eb" "E" "F" "F#" "G" "Ab" "A" "Bb" "B"])

(defn cantor-table [root harmonics]
  [:table:cantor
   [:thead
    (for [i (range harmonics)] [:th.cell (if (not= 0 i) i)])
    (for [[i row] (map-indexed vector (relatives root harmonics))]
      [:tr
       [:th.cell (inc i)]
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
