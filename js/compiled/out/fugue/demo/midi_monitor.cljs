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

(defn chords-from [predicate root notes]
  (let [relative-notes (map #(mod (- % root) 12) notes)]
    (->> chord-names
         (filter (fn [[_ chord]] (predicate chord relative-notes)))
         (map (fn [[name _]] [(nth note-names (mod root 12)) name])))))

(defn chords-where [predicate notes]
  (into #{} (mapcat #(chords-from predicate % notes) notes)))

(defn every-note-in-chord? [chord relative-notes]
  (every? #(contains? chord %) relative-notes))

(defn chord-contained-in-notes? [chord relative-notes]
  (every? #(contains? (set relative-notes) %) chord))

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
       (for [chord (chords-where every-note-in-chord? @held-notes)]
         [:p (str chord)])])))

[component]
