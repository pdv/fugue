(ns fugue.cantor
  (:require [goog.string :refer [format]]
            [fugue.midi :refer [note->hz hz->note]]
            [fugue.colors :as colors]))

(def note-names ["C" "Db" "D" "Eb" "E" "F" "F#" "G" "Ab" "A" "Bb" "B"])

(defn cantor-table [root harmonics]
  (let [root-hz (note->hz root)]
    [:table:cantor
     [:thead
      (for [i (range harmonics)] [:th.cell (if (not= 0 i) i)])
      (for [denominator (range 1 harmonics)]
        [:tr
         [:th.cell denominator]
         (for [numerator (range 1 harmonics)
               :let [freq (/ (* root-hz numerator) denominator)
                     note (hz->note freq)
                     closest (.round js/Math note)
                     name (nth note-names (mod closest 12))
                     octave (int (/ closest 12))]]
           [:td.cantor
            {:style {:backgroundColor (colors/color-by-note note)}}
            (str name octave)
            [:br]
            (format "%.2f" (- note root))
            [:br]
            (format "%.2f" freq)])])]]))
