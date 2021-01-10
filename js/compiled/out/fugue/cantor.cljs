(ns fugue.cantor
  (:require [goog.string :refer [format]]
            [fugue.colors :as colors]))

(defn midi->hz [note]
  (as-> note v
    (- v 69.0)
    (/ v 12)
    (js/Math.pow 2.0 v)
    (* v 440.0)))

(defn hz->midi [freq]
  (as-> freq v
    (/ v 440)
    (.log2 js/Math v)
    (* v 12)
    (+ v 69)))

(def note-names ["C" "Db" "D" "Eb" "E" "F" "F#" "G" "Ab" "A" "Bb" "B"])

(defn cantor-table [root harmonics]
  (let [root-hz (midi->hz root)]
    [:table:cantor
     [:thead
      (for [i (range harmonics)] [:th.cell (if (not= 0 i) i)])
      (for [denominator (range 1 harmonics)]
        [:tr
         [:th.cell denominator]
         (for [numerator (range 1 harmonics)
               :let [freq (/ (* root-hz numerator) denominator)
                     note (hz->midi freq)
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
