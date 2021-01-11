(ns fugue.demo.midi-monitor
  (:require [cljs.core.async :as async]
            [fugue.api :refer [monitor-chan midi-input ratom note-on? note-off? monitor-chan]]))

;;

(def chord-names
  {:dim7 #{0 3 6 9}
   :min #{0 3 7}
   :min7 #{0 3 7 10}
   :min9 #{0 2 3 7 10}
   :7 #{0 4 7 10}
   :7b9 #{0 1 4 7 10}
   :Maj #{0 4 7}
   :Maj7 #{0 4 7 11}
   :Maj9 #{0 2 4 7 11}
   :Aug #{0 4 8}
   :Maj6 #{0 4 7 9}})

(def note-names [:C :Db :D :Eb :E :F :F# :G :Ab :A :Bb :B])

(defn chords-where [predicate notes]
  (into #{}
        (mapcat (fn [root]
                  (let [relative (map #(mod (- % root) 12) notes)]
                    (->> chord-names
                         (filter (fn [[_ chord]]
                                   (predicate chord relative)))
                         (map (fn [[name _]]
                                [(nth note-names (mod root 12)) name])))))
                notes)))

(defn possible-chords [notes]
  (chords-where (fn [chord relative]
                  (every? #(contains? chord %) relative))
                notes))

(defn contained-chords [notes]
  (chords-where (fn [chord relative]
                  (every? #(contains? (set relative) %) chord))
                notes))

(defn component []
  (let [midi-in-chan (async/chan)
        held-notes (ratom #{})]
    (monitor-chan midi-in-chan
                  (fn [msg]
                    (print msg)
                    (cond
                      (note-on? msg) (swap! held-notes conj (:note msg))
                      (note-off? msg) (swap! held-notes disj (:note msg)))))
    (fn []
      [:div
       [midi-input midi-in-chan]
       [:p @held-notes]
       (for [chord (possible-chords @held-notes)]
         [:p (str chord)])])))

[component]
