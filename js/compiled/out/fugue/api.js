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
return (function (state_35506){
var state_val_35507 = (state_35506[(1)]);
if((state_val_35507 === (7))){
var inst_35484 = (state_35506[(7)]);
var inst_35484__$1 = (state_35506[(2)]);
var inst_35485 = fugue.midi.note_on_QMARK_.call(null,inst_35484__$1);
var state_35506__$1 = (function (){var statearr_35508 = state_35506;
(statearr_35508[(7)] = inst_35484__$1);

return statearr_35508;
})();
if(inst_35485){
var statearr_35509_35528 = state_35506__$1;
(statearr_35509_35528[(1)] = (8));

} else {
var statearr_35510_35529 = state_35506__$1;
(statearr_35510_35529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (1))){
var state_35506__$1 = state_35506;
var statearr_35511_35530 = state_35506__$1;
(statearr_35511_35530[(2)] = null);

(statearr_35511_35530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (4))){
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35506__$1,(7),in_chan);
} else {
if((state_val_35507 === (13))){
var inst_35496 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35512_35531 = state_35506__$1;
(statearr_35512_35531[(2)] = inst_35496);

(statearr_35512_35531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (6))){
var inst_35502 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
var statearr_35513_35532 = state_35506__$1;
(statearr_35513_35532[(2)] = inst_35502);

(statearr_35513_35532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (3))){
var inst_35504 = (state_35506[(2)]);
var state_35506__$1 = state_35506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35506__$1,inst_35504);
} else {
if((state_val_35507 === (12))){
var state_35506__$1 = state_35506;
var statearr_35514_35533 = state_35506__$1;
(statearr_35514_35533[(2)] = null);

(statearr_35514_35533[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (2))){
var state_35506__$1 = state_35506;
var statearr_35515_35534 = state_35506__$1;
(statearr_35515_35534[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (11))){
var inst_35484 = (state_35506[(7)]);
var inst_35492 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_35484);
var inst_35493 = cljs.core.swap_BANG_.call(null,out_atom,cljs.core.disj,inst_35492);
var state_35506__$1 = state_35506;
var statearr_35517_35535 = state_35506__$1;
(statearr_35517_35535[(2)] = inst_35493);

(statearr_35517_35535[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (9))){
var inst_35484 = (state_35506[(7)]);
var inst_35490 = fugue.midi.note_off_QMARK_.call(null,inst_35484);
var state_35506__$1 = state_35506;
if(cljs.core.truth_(inst_35490)){
var statearr_35518_35536 = state_35506__$1;
(statearr_35518_35536[(1)] = (11));

} else {
var statearr_35519_35537 = state_35506__$1;
(statearr_35519_35537[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (5))){
var state_35506__$1 = state_35506;
var statearr_35520_35538 = state_35506__$1;
(statearr_35520_35538[(2)] = null);

(statearr_35520_35538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (10))){
var inst_35498 = (state_35506[(2)]);
var state_35506__$1 = (function (){var statearr_35521 = state_35506;
(statearr_35521[(8)] = inst_35498);

return statearr_35521;
})();
var statearr_35522_35539 = state_35506__$1;
(statearr_35522_35539[(2)] = null);

(statearr_35522_35539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35507 === (8))){
var inst_35484 = (state_35506[(7)]);
var inst_35487 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_35484);
var inst_35488 = cljs.core.swap_BANG_.call(null,out_atom,cljs.core.conj,inst_35487);
var state_35506__$1 = state_35506;
var statearr_35523_35540 = state_35506__$1;
(statearr_35523_35540[(2)] = inst_35488);

(statearr_35523_35540[(1)] = (10));


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
var statearr_35524 = [null,null,null,null,null,null,null,null,null];
(statearr_35524[(0)] = fugue$api$monitor_held_notes_$_state_machine__32613__auto__);

(statearr_35524[(1)] = (1));

return statearr_35524;
});
var fugue$api$monitor_held_notes_$_state_machine__32613__auto____1 = (function (state_35506){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_35506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e35525){if((e35525 instanceof Object)){
var ex__32616__auto__ = e35525;
var statearr_35526_35541 = state_35506;
(statearr_35526_35541[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35542 = state_35506;
state_35506 = G__35542;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
fugue$api$monitor_held_notes_$_state_machine__32613__auto__ = function(state_35506){
switch(arguments.length){
case 0:
return fugue$api$monitor_held_notes_$_state_machine__32613__auto____0.call(this);
case 1:
return fugue$api$monitor_held_notes_$_state_machine__32613__auto____1.call(this,state_35506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$api$monitor_held_notes_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$api$monitor_held_notes_$_state_machine__32613__auto____0;
fugue$api$monitor_held_notes_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$api$monitor_held_notes_$_state_machine__32613__auto____1;
return fugue$api$monitor_held_notes_$_state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto__))
})();
var state__32709__auto__ = (function (){var statearr_35527 = f__32708__auto__.call(null);
(statearr_35527[(6)] = c__32707__auto__);

return statearr_35527;
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

//# sourceMappingURL=api.js.map?rel=1610383903348
