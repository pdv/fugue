// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ctx_ctrls');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('fugue.buffer');
goog.require('fugue.midi');
goog.require('fugue.audio');
fugue.ctx_ctrls.midi_monitor = (function fugue$ctx_ctrls$midi_monitor(midi_ctx){
var inputs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__17023_17123 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__17025_17124 = null;
var count__17026_17125 = (0);
var i__17027_17126 = (0);
while(true){
if((i__17027_17126 < count__17026_17125)){
var vec__17069_17127 = cljs.core._nth.call(null,chunk__17025_17124,i__17027_17126);
var in_name_17128 = cljs.core.nth.call(null,vec__17069_17127,(0),null);
var in_mult_17129 = cljs.core.nth.call(null,vec__17069_17127,(1),null);
var in_chan_17130 = cljs.core.async.chan.call(null);
var c__14920__auto___17131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__17023_17123,chunk__17025_17124,count__17026_17125,i__17027_17126,c__14920__auto___17131,in_chan_17130,vec__17069_17127,in_name_17128,in_mult_17129,inputs){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (seq__17023_17123,chunk__17025_17124,count__17026_17125,i__17027_17126,c__14920__auto___17131,in_chan_17130,vec__17069_17127,in_name_17128,in_mult_17129,inputs){
return (function (state_17080){
var state_val_17081 = (state_17080[(1)]);
if((state_val_17081 === (1))){
var state_17080__$1 = state_17080;
var statearr_17082_17132 = state_17080__$1;
(statearr_17082_17132[(2)] = null);

(statearr_17082_17132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17081 === (2))){
var state_17080__$1 = state_17080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17080__$1,(4),in_chan_17130);
} else {
if((state_val_17081 === (3))){
var inst_17078 = (state_17080[(2)]);
var state_17080__$1 = state_17080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17080__$1,inst_17078);
} else {
if((state_val_17081 === (4))){
var inst_17074 = (state_17080[(2)]);
var inst_17075 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_17128,inst_17074);
var state_17080__$1 = (function (){var statearr_17083 = state_17080;
(statearr_17083[(7)] = inst_17075);

return statearr_17083;
})();
var statearr_17084_17133 = state_17080__$1;
(statearr_17084_17133[(2)] = null);

(statearr_17084_17133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__17023_17123,chunk__17025_17124,count__17026_17125,i__17027_17126,c__14920__auto___17131,in_chan_17130,vec__17069_17127,in_name_17128,in_mult_17129,inputs))
;
return ((function (seq__17023_17123,chunk__17025_17124,count__17026_17125,i__17027_17126,switch__14825__auto__,c__14920__auto___17131,in_chan_17130,vec__17069_17127,in_name_17128,in_mult_17129,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto____0 = (function (){
var statearr_17085 = [null,null,null,null,null,null,null,null];
(statearr_17085[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto__);

(statearr_17085[(1)] = (1));

return statearr_17085;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto____1 = (function (state_17080){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_17080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e17086){if((e17086 instanceof Object)){
var ex__14829__auto__ = e17086;
var statearr_17087_17134 = state_17080;
(statearr_17087_17134[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17135 = state_17080;
state_17080 = G__17135;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto__ = function(state_17080){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto____1.call(this,state_17080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto__;
})()
;})(seq__17023_17123,chunk__17025_17124,count__17026_17125,i__17027_17126,switch__14825__auto__,c__14920__auto___17131,in_chan_17130,vec__17069_17127,in_name_17128,in_mult_17129,inputs))
})();
var state__14922__auto__ = (function (){var statearr_17088 = f__14921__auto__.call(null);
(statearr_17088[(6)] = c__14920__auto___17131);

return statearr_17088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(seq__17023_17123,chunk__17025_17124,count__17026_17125,i__17027_17126,c__14920__auto___17131,in_chan_17130,vec__17069_17127,in_name_17128,in_mult_17129,inputs))
);


cljs.core.async.tap.call(null,in_mult_17129,in_chan_17130);


var G__17136 = seq__17023_17123;
var G__17137 = chunk__17025_17124;
var G__17138 = count__17026_17125;
var G__17139 = (i__17027_17126 + (1));
seq__17023_17123 = G__17136;
chunk__17025_17124 = G__17137;
count__17026_17125 = G__17138;
i__17027_17126 = G__17139;
continue;
} else {
var temp__5720__auto___17140 = cljs.core.seq.call(null,seq__17023_17123);
if(temp__5720__auto___17140){
var seq__17023_17141__$1 = temp__5720__auto___17140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17023_17141__$1)){
var c__4550__auto___17142 = cljs.core.chunk_first.call(null,seq__17023_17141__$1);
var G__17143 = cljs.core.chunk_rest.call(null,seq__17023_17141__$1);
var G__17144 = c__4550__auto___17142;
var G__17145 = cljs.core.count.call(null,c__4550__auto___17142);
var G__17146 = (0);
seq__17023_17123 = G__17143;
chunk__17025_17124 = G__17144;
count__17026_17125 = G__17145;
i__17027_17126 = G__17146;
continue;
} else {
var vec__17089_17147 = cljs.core.first.call(null,seq__17023_17141__$1);
var in_name_17148 = cljs.core.nth.call(null,vec__17089_17147,(0),null);
var in_mult_17149 = cljs.core.nth.call(null,vec__17089_17147,(1),null);
var in_chan_17150 = cljs.core.async.chan.call(null);
var c__14920__auto___17151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__17023_17123,chunk__17025_17124,count__17026_17125,i__17027_17126,c__14920__auto___17151,in_chan_17150,vec__17089_17147,in_name_17148,in_mult_17149,seq__17023_17141__$1,temp__5720__auto___17140,inputs){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (seq__17023_17123,chunk__17025_17124,count__17026_17125,i__17027_17126,c__14920__auto___17151,in_chan_17150,vec__17089_17147,in_name_17148,in_mult_17149,seq__17023_17141__$1,temp__5720__auto___17140,inputs){
return (function (state_17100){
var state_val_17101 = (state_17100[(1)]);
if((state_val_17101 === (1))){
var state_17100__$1 = state_17100;
var statearr_17102_17152 = state_17100__$1;
(statearr_17102_17152[(2)] = null);

(statearr_17102_17152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17101 === (2))){
var state_17100__$1 = state_17100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17100__$1,(4),in_chan_17150);
} else {
if((state_val_17101 === (3))){
var inst_17098 = (state_17100[(2)]);
var state_17100__$1 = state_17100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17100__$1,inst_17098);
} else {
if((state_val_17101 === (4))){
var inst_17094 = (state_17100[(2)]);
var inst_17095 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_17148,inst_17094);
var state_17100__$1 = (function (){var statearr_17103 = state_17100;
(statearr_17103[(7)] = inst_17095);

return statearr_17103;
})();
var statearr_17104_17153 = state_17100__$1;
(statearr_17104_17153[(2)] = null);

(statearr_17104_17153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__17023_17123,chunk__17025_17124,count__17026_17125,i__17027_17126,c__14920__auto___17151,in_chan_17150,vec__17089_17147,in_name_17148,in_mult_17149,seq__17023_17141__$1,temp__5720__auto___17140,inputs))
;
return ((function (seq__17023_17123,chunk__17025_17124,count__17026_17125,i__17027_17126,switch__14825__auto__,c__14920__auto___17151,in_chan_17150,vec__17089_17147,in_name_17148,in_mult_17149,seq__17023_17141__$1,temp__5720__auto___17140,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto____0 = (function (){
var statearr_17105 = [null,null,null,null,null,null,null,null];
(statearr_17105[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto__);

(statearr_17105[(1)] = (1));

return statearr_17105;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto____1 = (function (state_17100){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_17100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e17106){if((e17106 instanceof Object)){
var ex__14829__auto__ = e17106;
var statearr_17107_17154 = state_17100;
(statearr_17107_17154[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17155 = state_17100;
state_17100 = G__17155;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto__ = function(state_17100){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto____1.call(this,state_17100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__14826__auto__;
})()
;})(seq__17023_17123,chunk__17025_17124,count__17026_17125,i__17027_17126,switch__14825__auto__,c__14920__auto___17151,in_chan_17150,vec__17089_17147,in_name_17148,in_mult_17149,seq__17023_17141__$1,temp__5720__auto___17140,inputs))
})();
var state__14922__auto__ = (function (){var statearr_17108 = f__14921__auto__.call(null);
(statearr_17108[(6)] = c__14920__auto___17151);

return statearr_17108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(seq__17023_17123,chunk__17025_17124,count__17026_17125,i__17027_17126,c__14920__auto___17151,in_chan_17150,vec__17089_17147,in_name_17148,in_mult_17149,seq__17023_17141__$1,temp__5720__auto___17140,inputs))
);


cljs.core.async.tap.call(null,in_mult_17149,in_chan_17150);


var G__17156 = cljs.core.next.call(null,seq__17023_17141__$1);
var G__17157 = null;
var G__17158 = (0);
var G__17159 = (0);
seq__17023_17123 = G__17156;
chunk__17025_17124 = G__17157;
count__17026_17125 = G__17158;
i__17027_17126 = G__17159;
continue;
}
} else {
}
}
break;
}

return ((function (inputs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx)))," ins"].join('')], null),(function (){var iter__4523__auto__ = ((function (inputs){
return (function fugue$ctx_ctrls$midi_monitor_$_iter__17109(s__17110){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__17110__$1 = s__17110;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17110__$1);
if(temp__5720__auto__){
var s__17110__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17110__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17110__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17112 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17111 = (0);
while(true){
if((i__17111 < size__4522__auto__)){
var vec__17113 = cljs.core._nth.call(null,c__4521__auto__,i__17111);
var in_name = cljs.core.nth.call(null,vec__17113,(0),null);
var map__17116 = cljs.core.nth.call(null,vec__17113,(1),null);
var map__17116__$1 = (((((!((map__17116 == null))))?(((((map__17116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17116):map__17116);
var type = cljs.core.get.call(null,map__17116__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var note = cljs.core.get.call(null,map__17116__$1,new cljs.core.Keyword(null,"note","note",1426297904));
var velocity = cljs.core.get.call(null,map__17116__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
cljs.core.chunk_append.call(null,b__17112,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__17160 = (i__17111 + (1));
i__17111 = G__17160;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17112),fugue$ctx_ctrls$midi_monitor_$_iter__17109.call(null,cljs.core.chunk_rest.call(null,s__17110__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17112),null);
}
} else {
var vec__17118 = cljs.core.first.call(null,s__17110__$2);
var in_name = cljs.core.nth.call(null,vec__17118,(0),null);
var map__17121 = cljs.core.nth.call(null,vec__17118,(1),null);
var map__17121__$1 = (((((!((map__17121 == null))))?(((((map__17121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17121):map__17121);
var type = cljs.core.get.call(null,map__17121__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var note = cljs.core.get.call(null,map__17121__$1,new cljs.core.Keyword(null,"note","note",1426297904));
var velocity = cljs.core.get.call(null,map__17121__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__17109.call(null,cljs.core.rest.call(null,s__17110__$2)));
}
} else {
return null;
}
break;
}
});})(inputs))
,null,null));
});})(inputs))
;
return iter__4523__auto__.call(null,cljs.core.deref.call(null,inputs));
})()], null);
});
;})(inputs))
});
fugue.ctx_ctrls.midi_ctx_ctrls = (function fugue$ctx_ctrls$midi_ctx_ctrls(midi_ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.midi.make_ctx.call(null,cljs.core.partial.call(null,cljs.core.reset_BANG_,midi_ctx));
})], null),"reset midi context"], null),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,midi_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var mctx = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ctx_ctrls.midi_monitor,mctx], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"midi ctx not loaded"], null);
}
})()], null);
});
fugue.ctx_ctrls.audio_ctx_ctrls = (function fugue$ctx_ctrls$audio_ctx_ctrls(audio_ctx){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5718__auto___17164 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___17164)){
var old_ctx_17165 = temp__5718__auto___17164;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_17165).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__17162 = temp__5718__auto__;
var map__17162__$1 = (((((!((map__17162 == null))))?(((((map__17162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17162):map__17162);
var outs = cljs.core.get.call(null,map__17162__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__17161_SHARP_){
return console.log(p1__17161_SHARP_);
}));
})], null),"load inputs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = new cljs.core.Keyword("fugue.audio","ins","fugue.audio/ins",906609950).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx));
if(cljs.core.truth_(temp__5718__auto__)){
var ins = temp__5718__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ins.numberOfOutputs)," ins"].join('');
} else {
return "inputs not loaded";
}
})()], null)], null);
});
fugue.ctx_ctrls.read_file_upload = (function fugue$ctx_ctrls$read_file_upload(e,actx,buffer_cb){
var files = Array.from(e.target.files);
var seq__17168 = cljs.core.seq.call(null,files);
var chunk__17169 = null;
var count__17170 = (0);
var i__17171 = (0);
while(true){
if((i__17171 < count__17170)){
var file = cljs.core._nth.call(null,chunk__17169,i__17171);
file.arrayBuffer().then(((function (seq__17168,chunk__17169,count__17170,i__17171,file,files){
return (function (p1__17166_SHARP_){
return actx.decodeAudioData(p1__17166_SHARP_);
});})(seq__17168,chunk__17169,count__17170,i__17171,file,files))
).then(((function (seq__17168,chunk__17169,count__17170,i__17171,file,files){
return (function (p1__17167_SHARP_){
return buffer_cb.call(null,file.name,p1__17167_SHARP_);
});})(seq__17168,chunk__17169,count__17170,i__17171,file,files))
);


var G__17172 = seq__17168;
var G__17173 = chunk__17169;
var G__17174 = count__17170;
var G__17175 = (i__17171 + (1));
seq__17168 = G__17172;
chunk__17169 = G__17173;
count__17170 = G__17174;
i__17171 = G__17175;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__17168);
if(temp__5720__auto__){
var seq__17168__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17168__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17168__$1);
var G__17176 = cljs.core.chunk_rest.call(null,seq__17168__$1);
var G__17177 = c__4550__auto__;
var G__17178 = cljs.core.count.call(null,c__4550__auto__);
var G__17179 = (0);
seq__17168 = G__17176;
chunk__17169 = G__17177;
count__17170 = G__17178;
i__17171 = G__17179;
continue;
} else {
var file = cljs.core.first.call(null,seq__17168__$1);
file.arrayBuffer().then(((function (seq__17168,chunk__17169,count__17170,i__17171,file,seq__17168__$1,temp__5720__auto__,files){
return (function (p1__17166_SHARP_){
return actx.decodeAudioData(p1__17166_SHARP_);
});})(seq__17168,chunk__17169,count__17170,i__17171,file,seq__17168__$1,temp__5720__auto__,files))
).then(((function (seq__17168,chunk__17169,count__17170,i__17171,file,seq__17168__$1,temp__5720__auto__,files){
return (function (p1__17167_SHARP_){
return buffer_cb.call(null,file.name,p1__17167_SHARP_);
});})(seq__17168,chunk__17169,count__17170,i__17171,file,seq__17168__$1,temp__5720__auto__,files))
);


var G__17180 = cljs.core.next.call(null,seq__17168__$1);
var G__17181 = null;
var G__17182 = (0);
var G__17183 = (0);
seq__17168 = G__17180;
chunk__17169 = G__17181;
count__17170 = G__17182;
i__17171 = G__17183;
continue;
}
} else {
return null;
}
}
break;
}
});
fugue.ctx_ctrls.buffer_ctrl = (function fugue$ctx_ctrls$buffer_ctrl(audio_ctx,buffer_ctx){
if(cljs.core.truth_(cljs.core.deref.call(null,buffer_ctx))){
} else {
cljs.core.reset_BANG_.call(null,buffer_ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),cljs.core.PersistentArrayMap.EMPTY], null));
}

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var seq__17186 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__17187 = null;
var count__17188 = (0);
var i__17189 = (0);
while(true){
if((i__17189 < count__17188)){
var file = cljs.core._nth.call(null,chunk__17187,i__17189);
file.arrayBuffer().then(((function (seq__17186,chunk__17187,count__17188,i__17189,file){
return (function (p1__17184_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__17184_SHARP_);
});})(seq__17186,chunk__17187,count__17188,i__17189,file))
).then(((function (seq__17186,chunk__17187,count__17188,i__17189,file){
return (function (p1__17185_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__17185_SHARP_);
});})(seq__17186,chunk__17187,count__17188,i__17189,file))
);


var G__17200 = seq__17186;
var G__17201 = chunk__17187;
var G__17202 = count__17188;
var G__17203 = (i__17189 + (1));
seq__17186 = G__17200;
chunk__17187 = G__17201;
count__17188 = G__17202;
i__17189 = G__17203;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__17186);
if(temp__5720__auto__){
var seq__17186__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17186__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17186__$1);
var G__17204 = cljs.core.chunk_rest.call(null,seq__17186__$1);
var G__17205 = c__4550__auto__;
var G__17206 = cljs.core.count.call(null,c__4550__auto__);
var G__17207 = (0);
seq__17186 = G__17204;
chunk__17187 = G__17205;
count__17188 = G__17206;
i__17189 = G__17207;
continue;
} else {
var file = cljs.core.first.call(null,seq__17186__$1);
file.arrayBuffer().then(((function (seq__17186,chunk__17187,count__17188,i__17189,file,seq__17186__$1,temp__5720__auto__){
return (function (p1__17184_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__17184_SHARP_);
});})(seq__17186,chunk__17187,count__17188,i__17189,file,seq__17186__$1,temp__5720__auto__))
).then(((function (seq__17186,chunk__17187,count__17188,i__17189,file,seq__17186__$1,temp__5720__auto__){
return (function (p1__17185_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__17185_SHARP_);
});})(seq__17186,chunk__17187,count__17188,i__17189,file,seq__17186__$1,temp__5720__auto__))
);


var G__17208 = cljs.core.next.call(null,seq__17186__$1);
var G__17209 = null;
var G__17210 = (0);
var G__17211 = (0);
seq__17186 = G__17208;
chunk__17187 = G__17209;
count__17188 = G__17210;
i__17189 = G__17211;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__17190(s__17191){
return (new cljs.core.LazySeq(null,(function (){
var s__17191__$1 = s__17191;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17191__$1);
if(temp__5720__auto__){
var s__17191__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17191__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17191__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17193 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17192 = (0);
while(true){
if((i__17192 < size__4522__auto__)){
var vec__17194 = cljs.core._nth.call(null,c__4521__auto__,i__17192);
var name = cljs.core.nth.call(null,vec__17194,(0),null);
var buffer = cljs.core.nth.call(null,vec__17194,(1),null);
cljs.core.chunk_append.call(null,b__17193,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__17212 = (i__17192 + (1));
i__17192 = G__17212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17193),fugue$ctx_ctrls$buffer_ctrl_$_iter__17190.call(null,cljs.core.chunk_rest.call(null,s__17191__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17193),null);
}
} else {
var vec__17197 = cljs.core.first.call(null,s__17191__$2);
var name = cljs.core.nth.call(null,vec__17197,(0),null);
var buffer = cljs.core.nth.call(null,vec__17197,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__17190.call(null,cljs.core.rest.call(null,s__17191__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648).cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = cljs.core.deref.call(null,buffer_ctx);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
})()], null)], null);
});
});

//# sourceMappingURL=ctx_ctrls.js.map?rel=1611075880785
