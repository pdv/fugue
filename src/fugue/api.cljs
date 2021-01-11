(ns fugue.api
  (:require [clojure.string :as string]
            [goog.string :as gstring]
            [cljs.repl :as repl]
            [cljs.core.async :as async]
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

(def make-midi-ctx midi/make-ctx)
(def midi-context-manager ctrls/midi-ctx-ctrls)
(def midi-input monitor/midi-input)

(def audio-ctx-ctrls ctrls/audio-ctx-ctrls)
(def buffer-ctrl ctrls/buffer-ctrl)
(def slider components/slider)
(def int-slider components/int-slider)
(def picker components/picker)

(def format gstring/format)

(defn make-renderer [actx-atom mctx-atom buffer-cache-atom]
  (fn [synthdef]
    (let [ctx (merge @actx-atom @mctx-atom {::buffer/buffer-cache @buffer-cache-atom})]
      (make-synth ctx synthdef))))

(defn monitor-held-notes [in-chan out-atom]
  (async/go
    (while true
      (let [msg (async/<! in-chan)]
        (cond
          (midi/note-on? msg) (swap! out-atom conj (::midi/note msg))
          (midi/note-off? msg) (swap! out-atom disj (::midi/note msg)))))))

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