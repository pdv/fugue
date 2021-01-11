(ns fugue.demo.cantor
  (:require [fugue.colors :as colors]))

;; ~

(defn note->hz [note]
  (as-> note v
        (- v 69.0)
        (/ v 12)
        (js/Math.pow 2.0 v)
        (* v 440.0)))

(defn hz->note [freq]
  (as-> freq v
        (/ v 440)
        (.log2 js/Math v)
        (* v 12)
        (+ v 69)))

(def note-names ["C" "Db" "D" "Eb" "E" "F" "F#" "G" "Ab" "A" "Bb" "B"])

(defn cantor [root harmonics color-fn]
  (let [root-hz (note->hz root)]
    [:table
     {:style {:border-collapse "collapse"}}
     [:thead
      (for [i (range harmonics)] [:th (if (not= 0 i) i)])
      (for [denominator (range 1 harmonics)]
        [:tr
         [:th denominator]
         (for [numerator (range 1 harmonics)
               :let [freq (/ (* root-hz numerator) denominator)
                     note (hz->note freq)
                     closest (.round js/Math note)]]
           [:td
            {:style {:backgroundColor (color-fn note)
                     :height "60px" :width "60px"
                     :border "1px solid black"
                     :text-align "center"}}
            (str (nth note-names (mod closest 12)) (int (/ closest 12)))
            [:br]
            (format "%.2f" (- note root))
            [:br]
            (format "%.2f" freq)])])]]))

(def color-fns
  {"none"  (constantly "#fff")
   "cents" colors/color-by-cents
   "note"  colors/color-by-note})

(defn component []
  (let [root (ratom 60)
        harmonics (ratom 8)
        colors (ratom "none")]
    (fn []
      [:div
       "Root"
       [slider root 0 120]
       "Harmonics"
       [slider harmonics 1 30]
       "Colors"
       [picker colors (keys color-fns)]
       [cantor @root @harmonics (get color-fns @colors)]])))

[component]
