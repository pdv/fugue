(ns fugue.demo.cof
  (:require [fugue.components :refer [int-slider]]
            [reagent.core :as r]))

;;

(def note-names ["C" "Db" "D" "Eb" "E" "F" "F#" "G" "Ab" "A" "Bb" "B"])
(def interval-names
  ["unison"
   "chromatic scale"
   "whole tone scale"
   "diminished chord"
   "augmented chord"
   "circle of fourths"
   "tritone"
   "circle of fifths"
   "augmented chord"
   "diminished chord"
   "chromatic scale"
   "octave"])

(def container-style
  {:width "400px"
   :height "400px"})

(def ul-style
  {:list-style "none"
   :height "38%"
   :width "0"
   :position "absolute"
   :bottom "50%"
   :left "50%"})

(def li-style
  {:height "100%"
   :position "absolute"
   :top "0"
   :left "0"
   :transform-origin "50% 100%"})

(def i-style
  {:font-style "normal"
   :position "absolute"
   :top "0"
   :left "50%"
   :transform "translateX(-50%)"
   :border-radius "50%"
   :width "32px"
   :height "32px"
   :padding "4px"
   :text-align "center"
   :font-size "28px"
   :border "2px solid #666"
   :background "#fff"
   :color "#666"})

(defn outer-transform [angle]
  (str "rotate(" angle "deg)"))

(defn inner-transform [angle]
  (str "translateX(-50%) rotate(" (* -1 angle) "deg)"))

(defn circle [children]
  (let [slice-angle (/ 360.0 (count children))]
    [:div {:style container-style}
     [:div {:style (assoc container-style :position "absolute")}
      [:ul {:style ul-style}
       (for [[i child] (map-indexed vector children)
             :let [angle (* i slice-angle)]]
         [:li
          {:style (assoc li-style :transform (outer-transform angle))}
          [:i
           {:style (assoc i-style :transform (inner-transform angle))}
           child]])]]]))

(defn gcd [a b]
  (if (zero? b) a (recur b (mod a b))))

(defn lcm [a b]
  (/ (* a b) (gcd a b)))

(defn interval-circle []
  (let [root (r/atom 0)
        interval (r/atom 5)]
    (fn []
      [:div
       [int-slider root 0 11]
       [:p (str "root: " (get note-names @root))]
       [int-slider interval 1 11]
       [:p (str @interval " semitones")]
       [:p (interval-names @interval)]
       (let [step @interval
             limit (lcm step 12)
             notes (map #(get note-names (mod (+ @root %) 12))
                        (range 0 limit step))]
         [circle notes])])))

[interval-circle]