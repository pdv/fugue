(ns webcv.components)

(defn to-midi [x min max]
  (* 127 (/ (- x min)
            (- max min))))

(defn from-midi [x min max]
  (+ min (* (- max min)
            (/ x 127))))

(defn slider [value min max]
  [:input {:type "range" :value (to-midi @value min max) :min 0 :max 127
           :style {:width "100%"}
           :on-change (fn [e]
                        (reset! value (-> (.. e -target -value)
                                          (js/parseInt)
                                          (from-midi min max))))}])

