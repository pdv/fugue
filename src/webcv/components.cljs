(ns webcv.components)

(defn to-midi-linear [x min max]
  (* 127 (/ (- x min)
            (- max min))))

(defn from-midi-linear [x min max]
  (+ min (* (- max min)
            (/ x 127))))

;; https://stackoverflow.com/questions/846221/logarithmic-slider

(defn to-midi-log [x min max]
  (let [minv (.log js/Math min)
        maxv (.log js/Math max)
        scale (/ (- maxv minv) 127)]
    (/ (- (.log js/Math x) minv)
       scale)))

(defn from-midi-log [x min max]
  (let [minv (.log js/Math min)
        maxv (.log js/Math max)
        scale (/ (- maxv minv) 127)]
    (.exp js/Math (+ minv (* scale x)))))

(defn slider
  ([value min max] (slider value min max :linear))
  ([value min max type]
   (let [to-midi (case type :linear to-midi-linear :log to-midi-log)
         from-midi (case type :linear from-midi-linear :log from-midi-log)]
     [:input {:type "range"
              :value (to-midi @value min max)
              :min 0 :max 127
              :style {:width "100%"}
              :on-change #(reset! value (-> (.. % -target -value)
                                            (js/parseInt)
                                            (from-midi min max)))}])))

