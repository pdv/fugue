// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.api');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.repl');
goog.require('reagent.core');
goog.require('webcv.synthdef');
goog.require('webcv.audio');
goog.require('webcv.midi');
goog.require('webcv.keyboard');
goog.require('webcv.feedback');
goog.require('webcv.envelope');
goog.require('webcv.metronome');
goog.require('webcv.sequencer');
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
webcv.api.panner = webcv.audio.panner;
webcv.api.hz = webcv.midi.hz;
webcv.api.gate = webcv.midi.gate;
webcv.api.ctrl = webcv.midi.ctrl;
webcv.api.dub_delay = webcv.feedback.dub_delay;
webcv.api.kb = webcv.keyboard.kb;
webcv.api.adsr = webcv.envelope.adsr;
webcv.api.perc = webcv.envelope.perc;
webcv.api.pulse = webcv.envelope.pulse;
webcv.api.slide = webcv.envelope.slide;
webcv.api.env_gen = webcv.envelope.env_gen;
webcv.api.bpm = webcv.metronome.bpm;
webcv.api.metro = webcv.metronome.metro;
webcv.api.sequencer = webcv.sequencer.sequencer;
webcv.api.audio_ctx_ctrl = webcv.ctx_ctrls.audio_controls;
webcv.api.midi_ctx_ctrl = webcv.ctx_ctrls.midi_controls;
webcv.api.slider = webcv.components.slider;
webcv.api.init_forms = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(defonce audio-ctx (ratom nil))","(defonce midi-ctx (ratom nil))","(defn render [synthdef]","  (make-synth (merge @audio-ctx @midi-ctx) synthdef))","[:div","  [audio-ctx-ctrl audio-ctx]","  [midi-ctx-ctrl midi-ctx]]"], null);
webcv.api.init_text = clojure.string.join.call(null,"\n",webcv.api.init_forms);
webcv.api.mary_had_a_little_synth = (function webcv$api$mary_had_a_little_synth(){
var m = webcv.api.metro.call(null,webcv.api.bpm.call(null,(160)));
var freq_gate = webcv.api.hz.call(null,webcv.api.sequencer.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(64),(62),(60),(62),(64),(64),(64),(64)], null),m));
var freq_env = webcv.api.env_gen.call(null,webcv.api.slide.call(null,0.01),freq_gate);
var gain_gate = webcv.api.sequencer.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(0)], null),m);
var gain_env = webcv.api.env_gen.call(null,webcv.api.perc.call(null,0.1,0.1),gain_gate,0.5);
return webcv.api.out.call(null,webcv.api.panner.call(null,webcv.api.gain.call(null,webcv.api.saw.call(null,freq_env),gain_env),(0)));
});
webcv.api.demo_forms = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36908_36912 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36909_36913 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36910_36914 = true;
var _STAR_print_fn_STAR__temp_val__36911_36915 = ((function (_STAR_print_newline_STAR__orig_val__36908_36912,_STAR_print_fn_STAR__orig_val__36909_36913,_STAR_print_newline_STAR__temp_val__36910_36914,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__36908_36912,_STAR_print_fn_STAR__orig_val__36909_36913,_STAR_print_newline_STAR__temp_val__36910_36914,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36910_36914;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36911_36915;

try{cljs.core.println.call(null,"(defn mary-had-a-little-synth []\n  (let [m (metro (bpm 160))\n        freq-gate (hz (sequencer [64 62 60 62 64 64 64 64] m))\n        freq-env (env-gen (slide 0.01) freq-gate)\n        gain-gate (sequencer [1 1 1 1 1 1 1 0] m)\n        gain-env (env-gen (perc 0.1 0.1) gain-gate 0.5)]\n    (-> (saw freq-env)\n        (gain gain-env)\n        (panner 0)\n        (out))))");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36909_36913;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36908_36912;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})(),"[:div","  [:button","   {:on-click #(render (mary-had-a-little-synth))}","   \"run\"]]"], null);
webcv.api.demo_text = clojure.string.join.call(null,"\n",webcv.api.demo_forms);

//# sourceMappingURL=api.js.map?rel=1601347617470
