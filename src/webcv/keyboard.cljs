(ns webcv.keyboard
  (:require [clojure.spec.alpha :as s]
            [cljs.core.async :as async]
            [webcv.synthdef :as synthdef]
            [webcv.midi :as midi]
            [webcv.chan :as chan]))

(def key->offset ; from c
  (zipmap ["a" "w" "s" "e" "d" "f" "t" "g" "y" "h" "u" "j" "k" "l" "p"]
          (range)))

(defn keypress-x-midi
  "Returns a stateful transducer that maps keypress events to midi events.
  (a) -> c, (w) -> c#, (s) -> d, ...
  (z) lowers one octave, (x) raises one octave"
  ([] (keypress-x-midi 4))
  ([octave]
   (fn [rf]
     (let [voctave (volatile! (- octave 4))]
       (fn
         ([] (rf))
         ([result] (rf result))
         ([result keypress]
          (let [type (.-type keypress)
                key (.-key keypress)
                repeat (.-repeat keypress)
                offset (key->offset key)]
            (if-not (or (nil? offset) repeat)
              (rf result (into {::midi/note (+ 60 offset (* 12 @voctave))}
                               (case (.-type keypress)
                                 "keydown" {::midi/type ::midi/note-on ::midi/velocity 127}
                                 "keyup" {::midi/type ::midi/note-off ::midi/velocity 0})))
              (when (= "keydown" type)
                (vswap! voctave (case key "z" dec "x" inc identity))
                result)))))))))

(defn kb-midi-chan
  ([] (kb-midi-chan 3))
  ([octave]
   (let [c (async/chan 1 (keypress-x-midi octave))]
     (doseq [type ["keydown" "keyup"]]
       (.addEventListener js/document type (partial async/put! c)))
     c)))

(defmethod chan/chan-node-spec ::keyboard [_]
  (s/keys :req []))

(defmethod chan/make-chan-node ::keyboard [_ _]
  {::chan/out-mult (async/mult (kb-midi-chan))})

(defn kb []
  (synthdef/synthdef
    {::synthdef/node-type ::chan/chan-node
     ::chan/chan-node-type ::keyboard}
    {}))