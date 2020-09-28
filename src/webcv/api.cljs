(ns webcv.api
  (:require [clojure.string :as string]
            [reagent.core :as r]
            [webcv.synthdef :as synthdef]
            [webcv.audio :as audio]
            [webcv.midi :as midi]
            [webcv.keyboard :as keyboard]
            [webcv.feedback :as feedback]
            [webcv.envelope :as envelope]
            [webcv.ctx-ctrls :as ctrls]))

(def ratom r/atom)

(def make-synth synthdef/make-synth)

(def out audio/out)
(def gain audio/gain)
(def mix audio/mix)
(def const audio/const)
(def sin-osc audio/sin-osc)
(def saw audio/saw)
(def square audio/square)
(def tri-osc audio/tri-osc)
(def lfo audio/lfo)
(def lpf audio/lpf)
(def hpf audio/hpf)
(def bpf audio/bpf)

(def hz midi/hz)
(def gate midi/gate)
(def ctrl midi/ctrl)

(def dub-delay feedback/dub-delay)

(def kb keyboard/kb)

(def adsr envelope/adsr)
(def perc envelope/perc)
(def env-gen envelope/env-gen)

(def audio-ctx-ctrl ctrls/audio-controls)
(def midi-ctx-ctrl ctrls/midi-controls)

(def init-forms
  ["(defonce audio-ctx (ratom nil))"
   "(defonce midi-ctx (ratom nil))"
   "(defn render [synthdef]"
   "  (make-synth (merge @audio-ctx @midi-ctx) synthdef))"
   "[:div"
   "  [audio-ctx-ctrl audio-ctx]"
   "  [midi-ctx-ctrl midi-ctx]]"])

(def init-text
  (string/join "\n" init-forms))

(def demo-forms
  ["(defn demo [midi]"
   "  (out (sin-osc (hz midi))))"
   ""
   "[:div"
   "  [:button"
   "   {:on-click #(render (demo (kb)))}"
   "   \"run\"]]"])

(def demo-text
  (string/join "\n" demo-forms))

