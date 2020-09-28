(ns webcv.bootstrap
  (:require [webcv.feedback]
            [webcv.ctx-ctrls]
            [webcv.keyboard]
            [webcv.envelope]
            [reagent.core]
            [clojure.string :as string]))

(def prefix-forms
  [
   "(def ratom reagent.core/atom)"
   ; audio
   "(def out webcv.audio/out)"
   "(def gain webcv.audio/gain)"
   "(def mix webcv.audio/mix)"
   "(def const webcv.audio/const)"
   "(def sin-osc webcv.audio/sin-osc)"
   "(def saw webcv.audio/saw)"
   "(def square webcv.audio/square)"
   "(def tri-osc webcv.audio/tri-osc)"
   "(def lfo webcv.audio/lfo)"
   "(def lpf webcv.audio/lpf)"
   "(def hpf webcv.audio/hpf)"
   "(def bpf webcv.audio/bpf)"
   ; midi
   "(def midi-in webcv.midi/midi-in)"
   "(def hz webcv.midi/hz)"
   "(def gate webcv.midi/gate)"
   "(def ctrl webcv.midi/ctrl)"
   ; fb
   "(def dub-delay webcv.feedback/dub-delay)"
   ; kb
   "(def kb webcv.keyboard/kb)"
   ; envelope
   "(def adsr webcv.envelope/adsr)"
   "(def perc webcv.envelope/perc)"
   "(def env-gen webcv.envelope/env-gen)"
   "(def _ nil)"
   ])

(defn with-prefix [text]
  (string/join "\n" (conj prefix-forms text)))

(def context-forms
  [
   ; ctx
   "(defonce audio-ctx (ratom nil))"
   "(defonce midi-ctx (ratom nil))"
   "(def midi-ctrl webcv.ctx-ctrls/midi-controls)"
   "(def audio-ctrl webcv.ctx-ctrls/audio-controls)"
   ; controls
   "[:div"
   "  [audio-ctrl audio-ctx]"
   "  [midi-ctrl midi-ctx]]"])

(def context-str (string/join "\n" context-forms))
