(ns fugue.cof)

(defn cof [midi-notes]
  [:div.cof
   [:ul
    (for [note (map #(mod % 12) midi-notes)]
      [:li
       [:i note]])]])
