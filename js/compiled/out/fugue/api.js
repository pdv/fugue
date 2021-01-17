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
goog.require('fugue.midi_input');
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
fugue.api.chan = cljs.core.async.chan;
fugue.api.make_midi_ctx = fugue.midi.make_ctx;
fugue.api.midi_context_manager = fugue.ctx_ctrls.midi_ctx_ctrls;
fugue.api.midi_input = fugue.midi_input.midi_input;
fugue.api.note_on_QMARK_ = fugue.midi.note_on_QMARK_;
fugue.api.note_off_QMARK_ = fugue.midi.note_off_QMARK_;
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
fugue.api.monitor_chan = (function fugue$api$monitor_chan(in_chan,on_msg){
var c__12822__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto__){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto__){
return (function (state_15591){
var state_val_15592 = (state_15591[(1)]);
if((state_val_15592 === (1))){
var state_15591__$1 = state_15591;
var statearr_15593_15600 = state_15591__$1;
(statearr_15593_15600[(2)] = null);

(statearr_15593_15600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15592 === (2))){
var state_15591__$1 = state_15591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15591__$1,(4),in_chan);
} else {
if((state_val_15592 === (3))){
var inst_15589 = (state_15591[(2)]);
var state_15591__$1 = state_15591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15591__$1,inst_15589);
} else {
if((state_val_15592 === (4))){
var inst_15585 = (state_15591[(2)]);
var inst_15586 = on_msg.call(null,inst_15585);
var state_15591__$1 = (function (){var statearr_15594 = state_15591;
(statearr_15594[(7)] = inst_15586);

return statearr_15594;
})();
var statearr_15595_15601 = state_15591__$1;
(statearr_15595_15601[(2)] = null);

(statearr_15595_15601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__12822__auto__))
;
return ((function (switch__12727__auto__,c__12822__auto__){
return (function() {
var fugue$api$monitor_chan_$_state_machine__12728__auto__ = null;
var fugue$api$monitor_chan_$_state_machine__12728__auto____0 = (function (){
var statearr_15596 = [null,null,null,null,null,null,null,null];
(statearr_15596[(0)] = fugue$api$monitor_chan_$_state_machine__12728__auto__);

(statearr_15596[(1)] = (1));

return statearr_15596;
});
var fugue$api$monitor_chan_$_state_machine__12728__auto____1 = (function (state_15591){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_15591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e15597){if((e15597 instanceof Object)){
var ex__12731__auto__ = e15597;
var statearr_15598_15602 = state_15591;
(statearr_15598_15602[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15603 = state_15591;
state_15591 = G__15603;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
fugue$api$monitor_chan_$_state_machine__12728__auto__ = function(state_15591){
switch(arguments.length){
case 0:
return fugue$api$monitor_chan_$_state_machine__12728__auto____0.call(this);
case 1:
return fugue$api$monitor_chan_$_state_machine__12728__auto____1.call(this,state_15591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$api$monitor_chan_$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$api$monitor_chan_$_state_machine__12728__auto____0;
fugue$api$monitor_chan_$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$api$monitor_chan_$_state_machine__12728__auto____1;
return fugue$api$monitor_chan_$_state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto__))
})();
var state__12824__auto__ = (function (){var statearr_15599 = f__12823__auto__.call(null);
(statearr_15599[(6)] = c__12822__auto__);

return statearr_15599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto__))
);

return c__12822__auto__;
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

//# sourceMappingURL=api.js.map?rel=1610846308682
