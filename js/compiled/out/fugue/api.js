// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.api');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.repl');
goog.require('reagent.core');
goog.require('fugue.synthdef');
goog.require('fugue.audio');
goog.require('fugue.buffer');
goog.require('fugue.midi');
goog.require('fugue.keyboard');
goog.require('fugue.feedback');
goog.require('fugue.envelope');
goog.require('fugue.metronome');
goog.require('fugue.sequencer');
goog.require('fugue.sampler');
goog.require('fugue.convolver');
goog.require('fugue.ctx_ctrls');
goog.require('fugue.midi_monitor');
goog.require('fugue.cantor');
goog.require('fugue.components');
fugue.api.ratom = reagent.core.atom;
fugue.api.make_synth = fugue.synthdef.make_synth;
fugue.api.out = fugue.audio.out;
fugue.api.in$ = fugue.audio.in$;
fugue.api.gain = fugue.audio.gain;
fugue.api.mix = fugue.audio.mix;
fugue.api.const$ = fugue.audio.const$;
fugue.api.sin_osc = fugue.audio.sin_osc;
fugue.api.saw = fugue.audio.saw;
fugue.api.square = fugue.audio.square;
fugue.api.tri_osc = fugue.audio.tri_osc;
fugue.api.lfo = fugue.audio.lfo;
fugue.api.lpf = fugue.audio.lpf;
fugue.api.hpf = fugue.audio.hpf;
fugue.api.bpf = fugue.audio.bpf;
fugue.api.panner = fugue.audio.panner;
fugue.api.compressor = fugue.audio.compressor;
fugue.api.hz = fugue.midi.hz;
fugue.api.gate = fugue.midi.gate;
fugue.api.ctrl = fugue.midi.ctrl;
fugue.api.dub_delay = fugue.feedback.dub_delay;
fugue.api.kb = fugue.keyboard.kb;
fugue.api.adsr = fugue.envelope.adsr;
fugue.api.perc = fugue.envelope.perc;
fugue.api.pulse = fugue.envelope.pulse;
fugue.api.slide = fugue.envelope.slide;
fugue.api.env_gen = fugue.envelope.env_gen;
fugue.api.bpm = fugue.metronome.bpm;
fugue.api.metro = fugue.metronome.metro;
fugue.api.sequencer = fugue.sequencer.sequencer;
fugue.api.sampler = fugue.sampler.sampler;
fugue.api.conv = fugue.convolver.convolver;
fugue.api.monitor = fugue.midi_monitor.monitor;
fugue.api.audio_ctx_ctrls = fugue.ctx_ctrls.audio_ctx_ctrls;
fugue.api.midi_ctx_ctrls = fugue.ctx_ctrls.midi_ctx_ctrls;
fugue.api.buffer_ctrl = fugue.ctx_ctrls.buffer_ctrl;
fugue.api.slider = fugue.components.slider;
fugue.api.cantor = fugue.cantor.cantor_table;
fugue.api.make_renderer = (function fugue$api$make_renderer(actx_atom,mctx_atom,buffer_cache_atom){
return (function (synthdef){
var ctx = cljs.core.merge.call(null,cljs.core.deref.call(null,actx_atom),cljs.core.deref.call(null,mctx_atom),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),cljs.core.deref.call(null,buffer_cache_atom)], null));
return fugue.api.make_synth.call(null,ctx,synthdef);
});
});
fugue.api.welcome = (function fugue$api$welcome(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"nice work clicking those buttons"], null)], null);
});
fugue.api.init_forms = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(defonce root (ratom 60))","(defonce harmonics (ratom 13))","","(defn component []","  [:div","    \"Root\"","    [slider root 0 127]","    \"Harmonics\"","    [slider harmonics 0 20]","    [cantor @root @harmonics]])","","[component]"], null);
fugue.api.init_forms_234 = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(defonce audio-ctx (ratom nil))","(defonce midi-ctx (ratom nil))","(defonce buffer-ctx (ratom nil))","(defn play! [synthdef]","  (make-synth (merge @audio-ctx @midi-ctx @buffer-ctx) synthdef))","","(defn demo []","  (-> (sin-osc 440)","      (gain (env-gen (perc 0.01 2) 1))","      out))","","[:div","  [welcome]","  [audio-ctx-ctrls audio-ctx]","  [midi-ctx-ctrls midi-ctx]","  [buffer-ctrl audio-ctx buffer-ctx]","  [:button","   {:on-click #(play! (demo))}","   \"ping\"]","  [monitor midi-ctx]]"], null);
fugue.api.init_text = clojure.string.join.call(null,"\n",fugue.api.init_forms);
fugue.api.mary_had_a_little_synth = (function fugue$api$mary_had_a_little_synth(tempo,decay,cutoff){
var m = fugue.api.metro.call(null,tempo);
var freq_gate = fugue.api.hz.call(null,fugue.api.sequencer.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(64),(62),(60),(62),(64),(64),(64),(64)], null),m));
var freq_env = fugue.api.env_gen.call(null,fugue.api.slide.call(null,0.01),freq_gate);
var gain_gate = fugue.api.sequencer.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1),(1),(1),(1),(1),(0)], null),m);
var gain_env = fugue.api.env_gen.call(null,fugue.api.perc.call(null,0.1,decay),gain_gate,0.5);
return fugue.api.out.call(null,fugue.api.panner.call(null,fugue.api.lpf.call(null,fugue.api.gain.call(null,fugue.api.saw.call(null,freq_env),gain_env),cutoff,(2)),(0)));
});
fugue.api.aww = (function fugue$api$aww(){
return fugue.api.out.call(null,fugue.api.sampler.call(null,"pumpthat.wav",fugue.api.metro.call(null,(2000)),(0)));
});
fugue.api.demo_forms = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(defonce tempo (ratom 500))","(defonce decay (ratom 0.1))","(defonce cutoff (ratom 440))","",(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35590_35594 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35591_35595 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35592_35596 = true;
var _STAR_print_fn_STAR__temp_val__35593_35597 = ((function (_STAR_print_newline_STAR__orig_val__35590_35594,_STAR_print_fn_STAR__orig_val__35591_35595,_STAR_print_newline_STAR__temp_val__35592_35596,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35590_35594,_STAR_print_fn_STAR__orig_val__35591_35595,_STAR_print_newline_STAR__temp_val__35592_35596,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35592_35596;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35593_35597;

try{cljs.core.println.call(null,"(defn mary-had-a-little-synth [tempo decay cutoff]\n  (let [m (metro tempo)\n        freq-gate (hz (sequencer [64 62 60 62 64 64 64 64] m))\n        freq-env (env-gen (slide 0.01) freq-gate)\n        gain-gate (sequencer [1 1 1 1 1 1 1 0] m)\n        gain-env (env-gen (perc 0.1 decay) gain-gate 0.5)]\n    (-> (saw freq-env)\n        (gain gain-env)\n        (lpf cutoff 2)\n        (panner 0)\n        (out))))");
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35591_35595;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35590_35594;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})(),"[:div","  [slider tempo 100 1000]","  [slider decay 0.01 0.8]","  [slider cutoff 30 20000 :log]","  [:button","   {:on-click #(render (aww))}","   \"run\"]]"], null);
fugue.api.demo_text_old = clojure.string.join.call(null,"\n",fugue.api.demo_forms);
fugue.api.demo_text = "[:div [monitor midi-ctx]]";

//# sourceMappingURL=api.js.map?rel=1610319294643
