(ns webcv.components)

(defn slider [value min max]
  [:input {:type "range" :value @value :min min :max max
           :style {:width "100%"}
           :on-change (fn [e]
                        (reset! value (js/parseInt (.. e -target -value))))}])



