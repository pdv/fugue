// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.bootstrap');
goog.require('cljs.core');
goog.require('webcv.feedback');
goog.require('webcv.ctx_ctrls');
goog.require('webcv.keyboard');
goog.require('webcv.envelope');
goog.require('clojure.string');
webcv.bootstrap.init_forms = new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(def ratom reagent.core/atom)","(def midi-ctrl webcv.ctx-ctrls/midi-controls)","(def audio-ctrl webcv.ctx-ctrls/audio-controls)","(def out webcv.audio/out)","(def gain webcv.audio/gain)","(def mix webcv.audio/mix)","(def const webcv.audio/const)","(def sin-osc webcv.audio/sin-osc)","(def saw webcv.audio/saw)","(def square webcv.audio/square)","(def tri-osc webcv.audio/tri-osc)","(def lfo webcv.audio/lfo)","(def lpf webcv.audio/lpf)","(def hpf webcv.audio/hpf)","(def bpf webcv.audio/bpf)","(def midi-in webcv.midi/midi-in)","(def hz webcv.midi/hz)","(def gate webcv.midi/gate)","(def ctrl webcv.midi/ctrl)","(def dub-delay webcv.feedback/dub-delay)","(def kb webcv.keyboard/kb)","(def adsr webcv.envelope/adsr)","(def perc webcv.envelope/perc)","(def env-gen webcv.envelope/env-gen)","(defonce audio-ctx (ratom nil))","(defonce midi-ctx (ratom nil))","[:div","  [audio-ctrl audio-ctx]","  [midi-ctrl midi-ctx]]"], null);
webcv.bootstrap.init_str = clojure.string.join.call(null,"\n",webcv.bootstrap.init_forms);

//# sourceMappingURL=bootstrap.js.map?rel=1601267807172
