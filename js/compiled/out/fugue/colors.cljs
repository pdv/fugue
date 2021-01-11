(ns fugue.colors)

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

