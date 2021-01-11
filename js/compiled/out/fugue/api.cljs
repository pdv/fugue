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

(def make-midi-ctx midi/make-ctx)
(def midi-context-manager ctrls/midi-ctx-ctrls)
(def midi-input-monitor monitor/input-monitor)

(def audio-ctx-ctrls ctrls/audio-ctx-ctrls)
(def buffer-ctrl ctrls/buffer-ctrl)
(def slider components/slider)
(def picker components/picker)

(def format gstring/format)

(defn make-renderer [actx-atom mctx-atom buffer-cache-atom]
  (fn [synthdef]
    (let [ctx (merge @actx-atom @mctx-atom {::buffer/buffer-cache @buffer-cache-atom})]
      (make-synth ctx synthdef))))

(def cantor-demo "(defn note->hz [note]
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

(defn cantor [root harmonics color-fn]
  (let [root-hz (note->hz root)]
    [:table
     {:style {:border-collapse \"collapse\"}}
     [:thead
      (for [i (range harmonics)] [:th (if (not= 0 i) i)])
      (for [denominator (range 1 harmonics)]
        [:tr
         [:th denominator]
         (for [numerator (range 1 harmonics)
               :let [freq (/ (* root-hz numerator) denominator)
                     note (hz->note freq)
                     closest (.round js/Math note)]]
           [:td
            {:style {:backgroundColor (color-fn note)
                     :height \"60px\" :width \"60px\"
                     :border \"1px solid black\"
                     :text-align \"center\"}}
            (str (nth note-names (mod closest 12)) (int (/ closest 12)))
            [:br]
            (format \"%.2f\" (- note root))
            [:br]
            (format \"%.2f\" freq)])])]]))

(def color-fns
  {\"none\" (constantly \"#fff\")
   \"cents\" colors/color-by-cents
   \"note\" colors/color-by-note})

(defn component []
  (let [root (ratom 60)
        harmonics (ratom 8)
        colors (ratom \"none\")]
    (fn []
      [:div
        \"Root\"
        [slider root 0 120]
        \"Harmonics\"
        [slider harmonics 1 30]
        \"Colors\"
        [picker colors (keys color-fns)]
        [cantor @root @harmonics (get color-fns @colors)]])))

[component]
")

(def midi-monitor-demo "
(def names
  [[\"C\" 0] [\"G\" 7] [\"D\" 2] [\"A\" 9] [\"E\" 4] [\"B\" 11]
   [\"F#\" 6] [\"Db\" 1] [\"Ab\" 8] [\"Eb\" 3] [\"Bb\" 10] [\"F\" 5]])

(defn cof [midi-notes]
  (let [intervals (into #{} (map #(mod % 12) midi-notes))]
    [:div.cof-container>div.cof>ul
    (for [[name interval] names]
      [:li>i
       {:class (if (contains? intervals interval) \"active\" \"inactive\")}
       name])]))

(defn component []
  (let [midi-ctx (ratom nil)
        notes (ratom #{})]
    (fn []
      [:div
        (if-let [mctx @midi-ctx]
          [midi-input-monitor @midi-ctx (partial reset! notes)]
          [:button {:on-click #(midi/make-ctx (partial reset! midi-ctx))}
            (str (if @midi-ctx \"reset\" \"create\") \" midi context\")])
        [cof @notes]])))

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