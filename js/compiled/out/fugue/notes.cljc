(ns fugue.notes)

(def chords
  {:dim [3]
   :min [3 4]
   :dom [4 3 3]
   :maj [4 3]
   :aug [4]})

(defn chord [root name]
  (reductions + root (cycle (chords name))))

(def modes
  {:maj 0
   :dor 1
   :mix 4
   :min 5})

(defn mode [root name]
  (reductions + root (drop (modes name) (cycle [2 2 1 2 2 2 1]))))

(def note-names [:c :c# :d :d# :e :f :f# :g :g# :a :a# :b])

(def intervals
  {:m2 1
   :M2 2
   :m3 3
   :M3 4
   :P4 5
   :TT 6
   :P5 7
   :m6 8
   :M6 9
   :m7 10
   :M7 11})

(def overtones [0 0 7 0 4 7 10 0 2 4])
(def undertones [0 0 5 0 8 5 2 0 10 8])
(def harmonics [0 12 19 24 28 31 34 36 38 40])
