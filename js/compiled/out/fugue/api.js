// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.api');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('cljs.repl');
goog.require('cljs.core.async');
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
goog.require('fugue.colors');
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
fugue.api.make_midi_ctx = fugue.midi.make_ctx;
fugue.api.midi_context_manager = fugue.ctx_ctrls.midi_ctx_ctrls;
fugue.api.midi_input = fugue.midi_monitor.midi_input;
fugue.api.audio_ctx_ctrls = fugue.ctx_ctrls.audio_ctx_ctrls;
fugue.api.buffer_ctrl = fugue.ctx_ctrls.buffer_ctrl;
fugue.api.slider = fugue.components.slider;
fugue.api.picker = fugue.components.picker;
fugue.api.format = goog.string.format;
fugue.api.make_renderer = (function fugue$api$make_renderer(actx_atom,mctx_atom,buffer_cache_atom){
return (function (synthdef){
var ctx = cljs.core.merge.call(null,cljs.core.deref.call(null,actx_atom),cljs.core.deref.call(null,mctx_atom),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),cljs.core.deref.call(null,buffer_cache_atom)], null));
return fugue.api.make_synth.call(null,ctx,synthdef);
});
});
fugue.api.cantor_demo = "(defn note->hz [note]\n  (as-> note v\n    (- v 69.0)\n    (/ v 12)\n    (js/Math.pow 2.0 v)\n    (* v 440.0)))\n\n(defn hz->note [freq]\n  (as-> freq v\n    (/ v 440)\n    (.log2 js/Math v)\n    (* v 12)\n    (+ v 69)))\n\n(def note-names [\"C\" \"Db\" \"D\" \"Eb\" \"E\" \"F\" \"F#\" \"G\" \"Ab\" \"A\" \"Bb\" \"B\"])\n\n(defn cantor [root harmonics color-fn]\n  (let [root-hz (note->hz root)]\n    [:table\n     {:style {:border-collapse \"collapse\"}}\n     [:thead\n      (for [i (range harmonics)] [:th (if (not= 0 i) i)])\n      (for [denominator (range 1 harmonics)]\n        [:tr\n         [:th denominator]\n         (for [numerator (range 1 harmonics)\n               :let [freq (/ (* root-hz numerator) denominator)\n                     note (hz->note freq)\n                     closest (.round js/Math note)]]\n           [:td\n            {:style {:backgroundColor (color-fn note)\n                     :height \"60px\" :width \"60px\"\n                     :border \"1px solid black\"\n                     :text-align \"center\"}}\n            (str (nth note-names (mod closest 12)) (int (/ closest 12)))\n            [:br]\n            (format \"%.2f\" (- note root))\n            [:br]\n            (format \"%.2f\" freq)])])]]))\n\n(def color-fns\n  {\"none\" (constantly \"#fff\")\n   \"cents\" colors/color-by-cents\n   \"note\" colors/color-by-note})\n\n(defn component []\n  (let [root (ratom 60)\n        harmonics (ratom 8)\n        colors (ratom \"none\")]\n    (fn []\n      [:div\n        \"Root\"\n        [slider root 0 120]\n        \"Harmonics\"\n        [slider harmonics 1 30]\n        \"Colors\"\n        [picker colors (keys color-fns)]\n        [cantor @root @harmonics (get color-fns @colors)]])))\n\n[component]\n";
fugue.api.monitor_held_notes = (function fugue$api$monitor_held_notes(in_chan,out_atom){
var c__32691__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto__){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto__){
return (function (state_35531){
var state_val_35532 = (state_35531[(1)]);
if((state_val_35532 === (7))){
var inst_35509 = (state_35531[(7)]);
var inst_35509__$1 = (state_35531[(2)]);
var inst_35510 = fugue.midi.note_on_QMARK_.call(null,inst_35509__$1);
var state_35531__$1 = (function (){var statearr_35533 = state_35531;
(statearr_35533[(7)] = inst_35509__$1);

return statearr_35533;
})();
if(inst_35510){
var statearr_35534_35553 = state_35531__$1;
(statearr_35534_35553[(1)] = (8));

} else {
var statearr_35535_35554 = state_35531__$1;
(statearr_35535_35554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (1))){
var state_35531__$1 = state_35531;
var statearr_35536_35555 = state_35531__$1;
(statearr_35536_35555[(2)] = null);

(statearr_35536_35555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (4))){
var state_35531__$1 = state_35531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35531__$1,(7),in_chan);
} else {
if((state_val_35532 === (13))){
var inst_35521 = (state_35531[(2)]);
var state_35531__$1 = state_35531;
var statearr_35537_35556 = state_35531__$1;
(statearr_35537_35556[(2)] = inst_35521);

(statearr_35537_35556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (6))){
var inst_35527 = (state_35531[(2)]);
var state_35531__$1 = state_35531;
var statearr_35538_35557 = state_35531__$1;
(statearr_35538_35557[(2)] = inst_35527);

(statearr_35538_35557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (3))){
var inst_35529 = (state_35531[(2)]);
var state_35531__$1 = state_35531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35531__$1,inst_35529);
} else {
if((state_val_35532 === (12))){
var state_35531__$1 = state_35531;
var statearr_35539_35558 = state_35531__$1;
(statearr_35539_35558[(2)] = null);

(statearr_35539_35558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (2))){
var state_35531__$1 = state_35531;
var statearr_35540_35559 = state_35531__$1;
(statearr_35540_35559[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (11))){
var inst_35509 = (state_35531[(7)]);
var inst_35517 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_35509);
var inst_35518 = cljs.core.swap_BANG_.call(null,out_atom,cljs.core.disj,inst_35517);
var state_35531__$1 = state_35531;
var statearr_35542_35560 = state_35531__$1;
(statearr_35542_35560[(2)] = inst_35518);

(statearr_35542_35560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (9))){
var inst_35509 = (state_35531[(7)]);
var inst_35515 = fugue.midi.note_off_QMARK_.call(null,inst_35509);
var state_35531__$1 = state_35531;
if(cljs.core.truth_(inst_35515)){
var statearr_35543_35561 = state_35531__$1;
(statearr_35543_35561[(1)] = (11));

} else {
var statearr_35544_35562 = state_35531__$1;
(statearr_35544_35562[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (5))){
var state_35531__$1 = state_35531;
var statearr_35545_35563 = state_35531__$1;
(statearr_35545_35563[(2)] = null);

(statearr_35545_35563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (10))){
var inst_35523 = (state_35531[(2)]);
var state_35531__$1 = (function (){var statearr_35546 = state_35531;
(statearr_35546[(8)] = inst_35523);

return statearr_35546;
})();
var statearr_35547_35564 = state_35531__$1;
(statearr_35547_35564[(2)] = null);

(statearr_35547_35564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35532 === (8))){
var inst_35509 = (state_35531[(7)]);
var inst_35512 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_35509);
var inst_35513 = cljs.core.swap_BANG_.call(null,out_atom,cljs.core.conj,inst_35512);
var state_35531__$1 = state_35531;
var statearr_35548_35565 = state_35531__$1;
(statearr_35548_35565[(2)] = inst_35513);

(statearr_35548_35565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32691__auto__))
;
return ((function (switch__32596__auto__,c__32691__auto__){
return (function() {
var fugue$api$monitor_held_notes_$_state_machine__32597__auto__ = null;
var fugue$api$monitor_held_notes_$_state_machine__32597__auto____0 = (function (){
var statearr_35549 = [null,null,null,null,null,null,null,null,null];
(statearr_35549[(0)] = fugue$api$monitor_held_notes_$_state_machine__32597__auto__);

(statearr_35549[(1)] = (1));

return statearr_35549;
});
var fugue$api$monitor_held_notes_$_state_machine__32597__auto____1 = (function (state_35531){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_35531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e35550){if((e35550 instanceof Object)){
var ex__32600__auto__ = e35550;
var statearr_35551_35566 = state_35531;
(statearr_35551_35566[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35567 = state_35531;
state_35531 = G__35567;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
fugue$api$monitor_held_notes_$_state_machine__32597__auto__ = function(state_35531){
switch(arguments.length){
case 0:
return fugue$api$monitor_held_notes_$_state_machine__32597__auto____0.call(this);
case 1:
return fugue$api$monitor_held_notes_$_state_machine__32597__auto____1.call(this,state_35531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$api$monitor_held_notes_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$api$monitor_held_notes_$_state_machine__32597__auto____0;
fugue$api$monitor_held_notes_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$api$monitor_held_notes_$_state_machine__32597__auto____1;
return fugue$api$monitor_held_notes_$_state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto__))
})();
var state__32693__auto__ = (function (){var statearr_35552 = f__32692__auto__.call(null);
(statearr_35552[(6)] = c__32691__auto__);

return statearr_35552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto__))
);

return c__32691__auto__;
});
fugue.api.midi_monitor_demo = "\n(def names\n  [[\"C\" 0] [\"G\" 7] [\"D\" 2] [\"A\" 9] [\"E\" 4] [\"B\" 11]\n   [\"F#\" 6] [\"Db\" 1] [\"Ab\" 8] [\"Eb\" 3] [\"Bb\" 10] [\"F\" 5]])\n\n(defn cof [midi-notes]\n  (let [intervals (into #{} (map #(mod % 12) midi-notes))]\n    [:div.cof-container>div.cof>ul\n    (for [[name interval] names\n          :let [active (contains? intervals interval)]]\n      [:li>i {:class (if active \"active\" \"inactive\")} name])]))\n\n(defn component []\n  (let [midi-in-chan (async/chan)\n        held-notes (ratom #{})]\n    (monitor-held-notes midi-in-chan held-notes)\n    (fn []\n      [:div\n        [midi-input midi-in-chan]\n        [cof @held-notes]])))\n\n[component]\n";
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
fugue.api.demo_text = "hello";

//# sourceMappingURL=api.js.map?rel=1610339734982
