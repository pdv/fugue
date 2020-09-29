(ns webcv.api
  (:require [clojure.string :as string]
            [cljs.repl :as repl]
            [reagent.core :as r]
            [webcv.synthdef :as synthdef]
            [webcv.audio :as audio]
            [webcv.midi :as midi]
            [webcv.keyboard :as keyboard]
            [webcv.feedback :as feedback]
            [webcv.envelope :as envelope]
            [webcv.metronome :as metronome]
            [webcv.sequencer :as sequencer]
            [webcv.sampler :as sampler]
            [webcv.ctx-ctrls :as ctrls]
            [webcv.components :as components]))

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

(def audio-ctx-ctrls ctrls/audio-ctx-ctrls)
(def midi-ctx-ctrls ctrls/midi-ctx-ctrls)
(def buffer-ctrl ctrls/buffer-ctrl)

(def slider components/slider)

(defn make-renderer [actx-atom mctx-atom buffer-cache-atom]
  (fn [synthdef]
    (let [ctx (merge @actx-atom @mctx-atom {::sampler/buffer-cache @buffer-cache-atom})]
      (make-synth ctx synthdef))))

(def init-forms
  ["(defonce audio-ctx (ratom nil))"
   "(defonce midi-ctx (ratom nil))"
   "(defonce buffer-cache (ratom {}))"
   "(def render (make-renderer audio-ctx midi-ctx buffer-cache))"
   ""
   "[:div"
   "  [audio-ctx-ctrls audio-ctx]"
   "  [midi-ctx-ctrls midi-ctx]"
   "  [buffer-ctrl audio-ctx buffer-cache]]"])

(def init-text
  (string/join "\n" init-forms))

(defn pump-that []
  (out (sampler "pumpthat.wav" (metro 10000) 0)))

(defn mary-had-a-little-synth []
  (let [m (metro (bpm 160))
        freq-gate (hz (sequencer [64 62 60 62 64 64 64 64] m))
        freq-env (env-gen (slide 0.01) freq-gate)
        gain-gate (sequencer [1 1 1 1 1 1 1 0] m)
        gain-env (env-gen (perc 0.1 0.1) gain-gate 0.5)]
    (-> (saw freq-env)
        (gain gain-env)
        (panner 0)
        (out))))

(def demo-forms
  [
   (with-out-str (repl/source pump-that))
   "[:div"
   "  [:button"
   "   {:on-click #(render (pump-that))}"
   "   \"run\"]]"
   ])

(def demo-text "")
