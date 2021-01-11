(ns fugue.demo.cantor
  (:require [reagent.core :as r]
            [goog.string :refer [format]]
            [fugue.components :refer [slider picker]]))

(def ratom r/atom)

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

(defn rgb-string [r g b]
  (str "rgb(" r "," g "," b ")"))

(defn range-to-rgb [min max value]
  (let [ratio (/ (* 2 (- value min))
                 (- max min))
        b (int (.max js/Math 0 (* 255 (- 1 ratio))))
        r (int (.max js/Math 0 (* 255 (- ratio 1))))
        g (- 255 b r)]
    [r g b]))

(defn color-by-cents [value]
  (let [diff (- value (.round js/Math value))
        abs (* 255 5 (.abs js/Math diff))
        [r g b] (cond
                  (< diff 0) [0 255 abs]
                  (= 0 diff) [0 255 0]
                  (> diff 0) [abs 255 0])]
    (rgb-string r g b)))

(def note-colors
  ["#9e0142" "#d53e4f" "#f46d43" "#fdae61" "#fee08b" "#ffffbf"
   "#e6f598" "#abdda4" "#66c2a5" "#3288bd" "#5e4fa2" "#6a3d9a"])

(defn color-by-note [value]
  (let [tone (mod (.round js/Math value) 12)]
    (first (drop tone note-colors))))

(def color-fns
  {"none"  (constantly "#fff")
   "cents" color-by-cents
   "note"  color-by-note})

(defn cantor [root harmonics color-fn]
  (let [root-hz (note->hz root)]
    [:table
     {:style {:border-collapse "collapse"}}
     [:thead
      (for [i (range harmonics)] [:th (if (not= 0 i) i)])
      (for [denominator (range 1 harmonics)]
        ^{:key denominator}
        [:tr
         [:th denominator]
         (for [numerator (range 1 harmonics)
               :let [freq (/ (* root-hz numerator) denominator)
                     note (hz->note freq)
                     closest (.round js/Math note)]]
           ^{:key (str numerator "/" denominator)}
           [:td
            {:style {:backgroundColor (color-fn (- note root))
                     :height "60px" :width "60px"
                     :border "1px solid black"
                     :text-align "center"}}
            (str (nth note-names (mod closest 12)) (int (/ closest 12)))
            [:br]
            (format "%.2f" (- note root))
            [:br]
            (format "%.2f" freq)])])]]))

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
