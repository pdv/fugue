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
fugue.api.int_slider = fugue.components.int_slider;
fugue.api.picker = fugue.components.picker;
fugue.api.format = goog.string.format;
fugue.api.make_renderer = (function fugue$api$make_renderer(actx_atom,mctx_atom,buffer_cache_atom){
return (function (synthdef){
var ctx = cljs.core.merge.call(null,cljs.core.deref.call(null,actx_atom),cljs.core.deref.call(null,mctx_atom),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),cljs.core.deref.call(null,buffer_cache_atom)], null));
return fugue.api.make_synth.call(null,ctx,synthdef);
});
});
fugue.api.monitor_held_notes = (function fugue$api$monitor_held_notes(in_chan,out_atom){
var c__32707__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto__){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto__){
return (function (state_35533){
var state_val_35534 = (state_35533[(1)]);
if((state_val_35534 === (7))){
var inst_35511 = (state_35533[(7)]);
var inst_35511__$1 = (state_35533[(2)]);
var inst_35512 = fugue.midi.note_on_QMARK_.call(null,inst_35511__$1);
var state_35533__$1 = (function (){var statearr_35535 = state_35533;
(statearr_35535[(7)] = inst_35511__$1);

return statearr_35535;
})();
if(inst_35512){
var statearr_35536_35555 = state_35533__$1;
(statearr_35536_35555[(1)] = (8));

} else {
var statearr_35537_35556 = state_35533__$1;
(statearr_35537_35556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (1))){
var state_35533__$1 = state_35533;
var statearr_35538_35557 = state_35533__$1;
(statearr_35538_35557[(2)] = null);

(statearr_35538_35557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (4))){
var state_35533__$1 = state_35533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35533__$1,(7),in_chan);
} else {
if((state_val_35534 === (13))){
var inst_35523 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35539_35558 = state_35533__$1;
(statearr_35539_35558[(2)] = inst_35523);

(statearr_35539_35558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (6))){
var inst_35529 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
var statearr_35540_35559 = state_35533__$1;
(statearr_35540_35559[(2)] = inst_35529);

(statearr_35540_35559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (3))){
var inst_35531 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35533__$1,inst_35531);
} else {
if((state_val_35534 === (12))){
var state_35533__$1 = state_35533;
var statearr_35541_35560 = state_35533__$1;
(statearr_35541_35560[(2)] = null);

(statearr_35541_35560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (2))){
var state_35533__$1 = state_35533;
var statearr_35542_35561 = state_35533__$1;
(statearr_35542_35561[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (11))){
var inst_35511 = (state_35533[(7)]);
var inst_35519 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_35511);
var inst_35520 = cljs.core.swap_BANG_.call(null,out_atom,cljs.core.disj,inst_35519);
var state_35533__$1 = state_35533;
var statearr_35544_35562 = state_35533__$1;
(statearr_35544_35562[(2)] = inst_35520);

(statearr_35544_35562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (9))){
var inst_35511 = (state_35533[(7)]);
var inst_35517 = fugue.midi.note_off_QMARK_.call(null,inst_35511);
var state_35533__$1 = state_35533;
if(cljs.core.truth_(inst_35517)){
var statearr_35545_35563 = state_35533__$1;
(statearr_35545_35563[(1)] = (11));

} else {
var statearr_35546_35564 = state_35533__$1;
(statearr_35546_35564[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (5))){
var state_35533__$1 = state_35533;
var statearr_35547_35565 = state_35533__$1;
(statearr_35547_35565[(2)] = null);

(statearr_35547_35565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (10))){
var inst_35525 = (state_35533[(2)]);
var state_35533__$1 = (function (){var statearr_35548 = state_35533;
(statearr_35548[(8)] = inst_35525);

return statearr_35548;
})();
var statearr_35549_35566 = state_35533__$1;
(statearr_35549_35566[(2)] = null);

(statearr_35549_35566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (8))){
var inst_35511 = (state_35533[(7)]);
var inst_35514 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_35511);
var inst_35515 = cljs.core.swap_BANG_.call(null,out_atom,cljs.core.conj,inst_35514);
var state_35533__$1 = state_35533;
var statearr_35550_35567 = state_35533__$1;
(statearr_35550_35567[(2)] = inst_35515);

(statearr_35550_35567[(1)] = (10));


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
});})(c__32707__auto__))
;
return ((function (switch__32612__auto__,c__32707__auto__){
return (function() {
var fugue$api$monitor_held_notes_$_state_machine__32613__auto__ = null;
var fugue$api$monitor_held_notes_$_state_machine__32613__auto____0 = (function (){
var statearr_35551 = [null,null,null,null,null,null,null,null,null];
(statearr_35551[(0)] = fugue$api$monitor_held_notes_$_state_machine__32613__auto__);

(statearr_35551[(1)] = (1));

return statearr_35551;
});
var fugue$api$monitor_held_notes_$_state_machine__32613__auto____1 = (function (state_35533){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_35533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e35552){if((e35552 instanceof Object)){
var ex__32616__auto__ = e35552;
var statearr_35553_35568 = state_35533;
(statearr_35553_35568[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35569 = state_35533;
state_35533 = G__35569;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
fugue$api$monitor_held_notes_$_state_machine__32613__auto__ = function(state_35533){
switch(arguments.length){
case 0:
return fugue$api$monitor_held_notes_$_state_machine__32613__auto____0.call(this);
case 1:
return fugue$api$monitor_held_notes_$_state_machine__32613__auto____1.call(this,state_35533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$api$monitor_held_notes_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$api$monitor_held_notes_$_state_machine__32613__auto____0;
fugue$api$monitor_held_notes_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$api$monitor_held_notes_$_state_machine__32613__auto____1;
return fugue$api$monitor_held_notes_$_state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto__))
})();
var state__32709__auto__ = (function (){var statearr_35554 = f__32708__auto__.call(null);
(statearr_35554[(6)] = c__32707__auto__);

return statearr_35554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto__))
);

return c__32707__auto__;
});
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

//# sourceMappingURL=api.js.map?rel=1610381656548
