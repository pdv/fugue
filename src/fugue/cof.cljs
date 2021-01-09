(ns fugue.cof)

(def names
  [["C" 0]
   ["G" 7]
   ["D" 2]
   ["A" 9]
   ["E" 4]
   ["B" 11]
   ["F#" 6]
   ["Db" 1]
   ["Ab" 8]
   ["Eb" 3]
   ["Bb" 10]
   ["F" 5]])

(defn cof [midi-notes]
  (let [intervals (into #{} (map #(mod % 12) midi-notes))]
    (print intervals)
  [:div.cof-container>div.cof>ul
   (for [[name interval] names]
     [:li>i
      {:class (if (contains? intervals interval) "active" "inactive")}
      name])]))
