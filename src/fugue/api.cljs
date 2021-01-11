(ns fugue.api
  (:require [clojure.string :as string]
            [goog.string :as gstring]
            [cljs.repl :as repl]
            [reagent.core :as r]
            [fugue.synthdef :as synthdef]
            [fugue.audio :as audio]
            [fugue.buffer :as buffer]
            [fugue.midi :as midi]
            [fugue.keyboard :as keyboard]
            [fugue.feedback :as feedback]
            [fugue.envelope :as envelope]
            [fugue.metronome :as metronome]
            [fugue.sequencer :as sequencer]
            [fugue.sampler :as sampler]
            [fugue.convolver :as convolver]
            [fugue.ctx-ctrls :as ctrls]
            [fugue.midi-monitor :as monitor]
            [fugue.colors :as colors]
            [fugue.cantor :as cantor]
            [fugue.components :as components]))

(def ratom r/atom)
(def make-synth synthdef/make-synth)
(def out audio/out)
(def in audio/in)
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
(def panner audio/panner)
(def compressor audio/compressor)
(def hz midi/hz)
(def gate midi/gate)
(def ctrl midi/ctrl)
(def dub-delay feedback/dub-delay)
(def kb keyboard/kb)
(def adsr envelope/adsr)
(def perc envelope/perc)
(def pulse envelope/pulse)
(def slide envelope/slide)
(def env-gen envelope/env-gen)
(def bpm metronome/bpm)
(def metro metronome/metro)
(def sequencer sequencer/sequencer)
(def sampler sampler/sampler)
(def conv convolver/convolver)
(def monitor monitor/monitor)

(def audio-ctx-ctrls ctrls/audio-ctx-ctrls)
(def midi-ctx-ctrls ctrls/midi-ctx-ctrls)
(def buffer-ctrl ctrls/buffer-ctrl)
(def slider components/slider)

(def format gstring/format)
(def color-by-note colors/color-by-note)
(def cantor-table cantor/cantor-table)

(defn make-renderer [actx-atom mctx-atom buffer-cache-atom]
  (fn [synthdef]
    (let [ctx (merge @actx-atom @mctx-atom {::buffer/buffer-cache @buffer-cache-atom})]
      (make-synth ctx synthdef))))

(def note-names ["C" "Db" "D" "Eb" "E" "F" "F#" "G" "Ab" "A" "Bb" "B"])

(def init-text "
(defn note->hz [note]
  (as-> note v
    (- v 69.0)
    (/ v 12)
    (js/Math.pow 2.0 v)
    (* v 440.0)))

(defn hz->note [freq]
  (as-> freq v
    (/ v 440)
    (.log2 js/Math v)
    (* v 12)
    (+ v 69)))

(def note-names [\"C\" \"Db\" \"D\" \"Eb\" \"E\" \"F\" \"F#\" \"G\" \"Ab\" \"A\" \"Bb\" \"B\"])

(defn cantor [root harmonics]
  (let [root-hz (note->hz root)]
    [:table:cantor
     [:thead
      (for [i (range harmonics)] [:th.cell (if (not= 0 i) i)])
      (for [denominator (range 1 harmonics)]
        [:tr
         [:th.cell denominator]
         (for [numerator (range 1 harmonics)
               :let [freq (/ (* root-hz numerator) denominator)
                     note (hz->note freq)
                     closest (.round js/Math note)
                     name (nth note-names (mod closest 12))
                     octave (int (/ closest 12))]]
           [:td.cantor
            {:style {:backgroundColor (colors/color-by-note note)}}
            (str name octave)
            [:br]
            (format \"%.2f\" (- note root))
            [:br]
            (format \"%.2f\" freq)])])]]))

(defn component []
  (let [root (ratom 60)
        harmonics (ratom 8)]
    (fn []
      [:div
        [slider root 0 120]
        [slider harmonics 1 30]
        [cantor @root @harmonics]])))

[component]
")


(defn mary-had-a-little-synth [tempo decay cutoff]
  (let [m (metro tempo)
        freq-gate (hz (sequencer [64 62 60 62 64 64 64 64] m))
        freq-env (env-gen (slide 0.01) freq-gate)
        gain-gate (sequencer [1 1 1 1 1 1 1 0] m)
        gain-env (env-gen (perc 0.1 decay) gain-gate 0.5)]
    (-> (saw freq-env)
        (gain gain-env)
        (lpf cutoff 2)
        (panner 0)
        (out))))

(defn aww []
  (out (sampler "pumpthat.wav" (metro 2000) 0)))

(def demo-text "hello")