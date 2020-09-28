// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.api');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('webcv.synthdef');
goog.require('webcv.audio');
goog.require('webcv.midi');
goog.require('webcv.keyboard');
goog.require('webcv.feedback');
goog.require('webcv.envelope');
goog.require('webcv.ctx_ctrls');
goog.require('webcv.components');
webcv.api.ratom = reagent.core.atom;
webcv.api.make_synth = webcv.synthdef.make_synth;
webcv.api.out = webcv.audio.out;
webcv.api.gain = webcv.audio.gain;
webcv.api.mix = webcv.audio.mix;
webcv.api.const$ = webcv.audio.const$;
webcv.api.sin_osc = webcv.audio.sin_osc;
webcv.api.saw = webcv.audio.saw;
webcv.api.square = webcv.audio.square;
webcv.api.tri_osc = webcv.audio.tri_osc;
webcv.api.lfo = webcv.audio.lfo;
webcv.api.lpf = webcv.audio.lpf;
webcv.api.hpf = webcv.audio.hpf;
webcv.api.bpf = webcv.audio.bpf;
webcv.api.hz = webcv.midi.hz;
webcv.api.gate = webcv.midi.gate;
webcv.api.ctrl = webcv.midi.ctrl;
webcv.api.dub_delay = webcv.feedback.dub_delay;
webcv.api.kb = webcv.keyboard.kb;
webcv.api.adsr = webcv.envelope.adsr;
webcv.api.perc = webcv.envelope.perc;
webcv.api.env_gen = webcv.envelope.env_gen;
webcv.api.audio_ctx_ctrl = webcv.ctx_ctrls.audio_controls;
webcv.api.midi_ctx_ctrl = webcv.ctx_ctrls.midi_controls;
webcv.api.slider = webcv.components.slider;
webcv.api.init_forms = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(defonce audio-ctx (ratom nil))","(defonce midi-ctx (ratom nil))","(defn render [synthdef]","  (make-synth (merge @audio-ctx @midi-ctx) synthdef))","[:div","  [audio-ctx-ctrl audio-ctx]","  [midi-ctx-ctrl midi-ctx]]"], null);
webcv.api.init_text = clojure.string.join.call(null,"\n",webcv.api.init_forms);
webcv.api.demo_forms = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(defn demo [freq]","  (out (sin-osc freq)))","(def freq-atom (ratom 440))","","[:div","  [slider freq-atom 20 10000]","  [:button","   {:on-click #(render (demo freq-atom))}","   \"run\"]]"], null);
webcv.api.demo_text = clojure.string.join.call(null,"\n",webcv.api.demo_forms);

//# sourceMappingURL=api.js.map?rel=1601328142751
