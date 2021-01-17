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
var seq__14925_15025 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__14927_15026 = null;
var count__14928_15027 = (0);
var i__14929_15028 = (0);
while(true){
if((i__14929_15028 < count__14928_15027)){
var vec__14971_15029 = cljs.core._nth.call(null,chunk__14927_15026,i__14929_15028);
var in_name_15030 = cljs.core.nth.call(null,vec__14971_15029,(0),null);
var in_mult_15031 = cljs.core.nth.call(null,vec__14971_15029,(1),null);
var in_chan_15032 = cljs.core.async.chan.call(null);
var c__12822__auto___15033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__14925_15025,chunk__14927_15026,count__14928_15027,i__14929_15028,c__12822__auto___15033,in_chan_15032,vec__14971_15029,in_name_15030,in_mult_15031,inputs){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (seq__14925_15025,chunk__14927_15026,count__14928_15027,i__14929_15028,c__12822__auto___15033,in_chan_15032,vec__14971_15029,in_name_15030,in_mult_15031,inputs){
return (function (state_14982){
var state_val_14983 = (state_14982[(1)]);
if((state_val_14983 === (1))){
var state_14982__$1 = state_14982;
var statearr_14984_15034 = state_14982__$1;
(statearr_14984_15034[(2)] = null);

(statearr_14984_15034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14983 === (2))){
var state_14982__$1 = state_14982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14982__$1,(4),in_chan_15032);
} else {
if((state_val_14983 === (3))){
var inst_14980 = (state_14982[(2)]);
var state_14982__$1 = state_14982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14982__$1,inst_14980);
} else {
if((state_val_14983 === (4))){
var inst_14976 = (state_14982[(2)]);
var inst_14977 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_15030,inst_14976);
var state_14982__$1 = (function (){var statearr_14985 = state_14982;
(statearr_14985[(7)] = inst_14977);

return statearr_14985;
})();
var statearr_14986_15035 = state_14982__$1;
(statearr_14986_15035[(2)] = null);

(statearr_14986_15035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__14925_15025,chunk__14927_15026,count__14928_15027,i__14929_15028,c__12822__auto___15033,in_chan_15032,vec__14971_15029,in_name_15030,in_mult_15031,inputs))
;
return ((function (seq__14925_15025,chunk__14927_15026,count__14928_15027,i__14929_15028,switch__12727__auto__,c__12822__auto___15033,in_chan_15032,vec__14971_15029,in_name_15030,in_mult_15031,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto____0 = (function (){
var statearr_14987 = [null,null,null,null,null,null,null,null];
(statearr_14987[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto__);

(statearr_14987[(1)] = (1));

return statearr_14987;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto____1 = (function (state_14982){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_14982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e14988){if((e14988 instanceof Object)){
var ex__12731__auto__ = e14988;
var statearr_14989_15036 = state_14982;
(statearr_14989_15036[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15037 = state_14982;
state_14982 = G__15037;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto__ = function(state_14982){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto____1.call(this,state_14982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto__;
})()
;})(seq__14925_15025,chunk__14927_15026,count__14928_15027,i__14929_15028,switch__12727__auto__,c__12822__auto___15033,in_chan_15032,vec__14971_15029,in_name_15030,in_mult_15031,inputs))
})();
var state__12824__auto__ = (function (){var statearr_14990 = f__12823__auto__.call(null);
(statearr_14990[(6)] = c__12822__auto___15033);

return statearr_14990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(seq__14925_15025,chunk__14927_15026,count__14928_15027,i__14929_15028,c__12822__auto___15033,in_chan_15032,vec__14971_15029,in_name_15030,in_mult_15031,inputs))
);


cljs.core.async.tap.call(null,in_mult_15031,in_chan_15032);


var G__15038 = seq__14925_15025;
var G__15039 = chunk__14927_15026;
var G__15040 = count__14928_15027;
var G__15041 = (i__14929_15028 + (1));
seq__14925_15025 = G__15038;
chunk__14927_15026 = G__15039;
count__14928_15027 = G__15040;
i__14929_15028 = G__15041;
continue;
} else {
var temp__5720__auto___15042 = cljs.core.seq.call(null,seq__14925_15025);
if(temp__5720__auto___15042){
var seq__14925_15043__$1 = temp__5720__auto___15042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14925_15043__$1)){
var c__4550__auto___15044 = cljs.core.chunk_first.call(null,seq__14925_15043__$1);
var G__15045 = cljs.core.chunk_rest.call(null,seq__14925_15043__$1);
var G__15046 = c__4550__auto___15044;
var G__15047 = cljs.core.count.call(null,c__4550__auto___15044);
var G__15048 = (0);
seq__14925_15025 = G__15045;
chunk__14927_15026 = G__15046;
count__14928_15027 = G__15047;
i__14929_15028 = G__15048;
continue;
} else {
var vec__14991_15049 = cljs.core.first.call(null,seq__14925_15043__$1);
var in_name_15050 = cljs.core.nth.call(null,vec__14991_15049,(0),null);
var in_mult_15051 = cljs.core.nth.call(null,vec__14991_15049,(1),null);
var in_chan_15052 = cljs.core.async.chan.call(null);
var c__12822__auto___15053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__14925_15025,chunk__14927_15026,count__14928_15027,i__14929_15028,c__12822__auto___15053,in_chan_15052,vec__14991_15049,in_name_15050,in_mult_15051,seq__14925_15043__$1,temp__5720__auto___15042,inputs){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (seq__14925_15025,chunk__14927_15026,count__14928_15027,i__14929_15028,c__12822__auto___15053,in_chan_15052,vec__14991_15049,in_name_15050,in_mult_15051,seq__14925_15043__$1,temp__5720__auto___15042,inputs){
return (function (state_15002){
var state_val_15003 = (state_15002[(1)]);
if((state_val_15003 === (1))){
var state_15002__$1 = state_15002;
var statearr_15004_15054 = state_15002__$1;
(statearr_15004_15054[(2)] = null);

(statearr_15004_15054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (2))){
var state_15002__$1 = state_15002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15002__$1,(4),in_chan_15052);
} else {
if((state_val_15003 === (3))){
var inst_15000 = (state_15002[(2)]);
var state_15002__$1 = state_15002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15002__$1,inst_15000);
} else {
if((state_val_15003 === (4))){
var inst_14996 = (state_15002[(2)]);
var inst_14997 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_15050,inst_14996);
var state_15002__$1 = (function (){var statearr_15005 = state_15002;
(statearr_15005[(7)] = inst_14997);

return statearr_15005;
})();
var statearr_15006_15055 = state_15002__$1;
(statearr_15006_15055[(2)] = null);

(statearr_15006_15055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__14925_15025,chunk__14927_15026,count__14928_15027,i__14929_15028,c__12822__auto___15053,in_chan_15052,vec__14991_15049,in_name_15050,in_mult_15051,seq__14925_15043__$1,temp__5720__auto___15042,inputs))
;
return ((function (seq__14925_15025,chunk__14927_15026,count__14928_15027,i__14929_15028,switch__12727__auto__,c__12822__auto___15053,in_chan_15052,vec__14991_15049,in_name_15050,in_mult_15051,seq__14925_15043__$1,temp__5720__auto___15042,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto____0 = (function (){
var statearr_15007 = [null,null,null,null,null,null,null,null];
(statearr_15007[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto__);

(statearr_15007[(1)] = (1));

return statearr_15007;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto____1 = (function (state_15002){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_15002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e15008){if((e15008 instanceof Object)){
var ex__12731__auto__ = e15008;
var statearr_15009_15056 = state_15002;
(statearr_15009_15056[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15057 = state_15002;
state_15002 = G__15057;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto__ = function(state_15002){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto____1.call(this,state_15002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__12728__auto__;
})()
;})(seq__14925_15025,chunk__14927_15026,count__14928_15027,i__14929_15028,switch__12727__auto__,c__12822__auto___15053,in_chan_15052,vec__14991_15049,in_name_15050,in_mult_15051,seq__14925_15043__$1,temp__5720__auto___15042,inputs))
})();
var state__12824__auto__ = (function (){var statearr_15010 = f__12823__auto__.call(null);
(statearr_15010[(6)] = c__12822__auto___15053);

return statearr_15010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(seq__14925_15025,chunk__14927_15026,count__14928_15027,i__14929_15028,c__12822__auto___15053,in_chan_15052,vec__14991_15049,in_name_15050,in_mult_15051,seq__14925_15043__$1,temp__5720__auto___15042,inputs))
);


cljs.core.async.tap.call(null,in_mult_15051,in_chan_15052);


var G__15058 = cljs.core.next.call(null,seq__14925_15043__$1);
var G__15059 = null;
var G__15060 = (0);
var G__15061 = (0);
seq__14925_15025 = G__15058;
chunk__14927_15026 = G__15059;
count__14928_15027 = G__15060;
i__14929_15028 = G__15061;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__15011(s__15012){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__15012__$1 = s__15012;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15012__$1);
if(temp__5720__auto__){
var s__15012__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15012__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__15012__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__15014 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__15013 = (0);
while(true){
if((i__15013 < size__4522__auto__)){
var vec__15015 = cljs.core._nth.call(null,c__4521__auto__,i__15013);
var in_name = cljs.core.nth.call(null,vec__15015,(0),null);
var map__15018 = cljs.core.nth.call(null,vec__15015,(1),null);
var map__15018__$1 = (((((!((map__15018 == null))))?(((((map__15018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15018):map__15018);
var type = cljs.core.get.call(null,map__15018__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var note = cljs.core.get.call(null,map__15018__$1,new cljs.core.Keyword(null,"note","note",1426297904));
var velocity = cljs.core.get.call(null,map__15018__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
cljs.core.chunk_append.call(null,b__15014,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__15062 = (i__15013 + (1));
i__15013 = G__15062;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15014),fugue$ctx_ctrls$midi_monitor_$_iter__15011.call(null,cljs.core.chunk_rest.call(null,s__15012__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15014),null);
}
} else {
var vec__15020 = cljs.core.first.call(null,s__15012__$2);
var in_name = cljs.core.nth.call(null,vec__15020,(0),null);
var map__15023 = cljs.core.nth.call(null,vec__15020,(1),null);
var map__15023__$1 = (((((!((map__15023 == null))))?(((((map__15023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15023):map__15023);
var type = cljs.core.get.call(null,map__15023__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var note = cljs.core.get.call(null,map__15023__$1,new cljs.core.Keyword(null,"note","note",1426297904));
var velocity = cljs.core.get.call(null,map__15023__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__15011.call(null,cljs.core.rest.call(null,s__15012__$2)));
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
var temp__5718__auto___15066 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___15066)){
var old_ctx_15067 = temp__5718__auto___15066;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_15067).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__15064 = temp__5718__auto__;
var map__15064__$1 = (((((!((map__15064 == null))))?(((((map__15064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15064):map__15064);
var outs = cljs.core.get.call(null,map__15064__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__15063_SHARP_){
return console.log(p1__15063_SHARP_);
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
var seq__15070 = cljs.core.seq.call(null,files);
var chunk__15071 = null;
var count__15072 = (0);
var i__15073 = (0);
while(true){
if((i__15073 < count__15072)){
var file = cljs.core._nth.call(null,chunk__15071,i__15073);
file.arrayBuffer().then(((function (seq__15070,chunk__15071,count__15072,i__15073,file,files){
return (function (p1__15068_SHARP_){
return actx.decodeAudioData(p1__15068_SHARP_);
});})(seq__15070,chunk__15071,count__15072,i__15073,file,files))
).then(((function (seq__15070,chunk__15071,count__15072,i__15073,file,files){
return (function (p1__15069_SHARP_){
return buffer_cb.call(null,file.name,p1__15069_SHARP_);
});})(seq__15070,chunk__15071,count__15072,i__15073,file,files))
);


var G__15074 = seq__15070;
var G__15075 = chunk__15071;
var G__15076 = count__15072;
var G__15077 = (i__15073 + (1));
seq__15070 = G__15074;
chunk__15071 = G__15075;
count__15072 = G__15076;
i__15073 = G__15077;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15070);
if(temp__5720__auto__){
var seq__15070__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15070__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15070__$1);
var G__15078 = cljs.core.chunk_rest.call(null,seq__15070__$1);
var G__15079 = c__4550__auto__;
var G__15080 = cljs.core.count.call(null,c__4550__auto__);
var G__15081 = (0);
seq__15070 = G__15078;
chunk__15071 = G__15079;
count__15072 = G__15080;
i__15073 = G__15081;
continue;
} else {
var file = cljs.core.first.call(null,seq__15070__$1);
file.arrayBuffer().then(((function (seq__15070,chunk__15071,count__15072,i__15073,file,seq__15070__$1,temp__5720__auto__,files){
return (function (p1__15068_SHARP_){
return actx.decodeAudioData(p1__15068_SHARP_);
});})(seq__15070,chunk__15071,count__15072,i__15073,file,seq__15070__$1,temp__5720__auto__,files))
).then(((function (seq__15070,chunk__15071,count__15072,i__15073,file,seq__15070__$1,temp__5720__auto__,files){
return (function (p1__15069_SHARP_){
return buffer_cb.call(null,file.name,p1__15069_SHARP_);
});})(seq__15070,chunk__15071,count__15072,i__15073,file,seq__15070__$1,temp__5720__auto__,files))
);


var G__15082 = cljs.core.next.call(null,seq__15070__$1);
var G__15083 = null;
var G__15084 = (0);
var G__15085 = (0);
seq__15070 = G__15082;
chunk__15071 = G__15083;
count__15072 = G__15084;
i__15073 = G__15085;
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
var seq__15088 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__15089 = null;
var count__15090 = (0);
var i__15091 = (0);
while(true){
if((i__15091 < count__15090)){
var file = cljs.core._nth.call(null,chunk__15089,i__15091);
file.arrayBuffer().then(((function (seq__15088,chunk__15089,count__15090,i__15091,file){
return (function (p1__15086_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__15086_SHARP_);
});})(seq__15088,chunk__15089,count__15090,i__15091,file))
).then(((function (seq__15088,chunk__15089,count__15090,i__15091,file){
return (function (p1__15087_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__15087_SHARP_);
});})(seq__15088,chunk__15089,count__15090,i__15091,file))
);


var G__15102 = seq__15088;
var G__15103 = chunk__15089;
var G__15104 = count__15090;
var G__15105 = (i__15091 + (1));
seq__15088 = G__15102;
chunk__15089 = G__15103;
count__15090 = G__15104;
i__15091 = G__15105;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__15088);
if(temp__5720__auto__){
var seq__15088__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15088__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15088__$1);
var G__15106 = cljs.core.chunk_rest.call(null,seq__15088__$1);
var G__15107 = c__4550__auto__;
var G__15108 = cljs.core.count.call(null,c__4550__auto__);
var G__15109 = (0);
seq__15088 = G__15106;
chunk__15089 = G__15107;
count__15090 = G__15108;
i__15091 = G__15109;
continue;
} else {
var file = cljs.core.first.call(null,seq__15088__$1);
file.arrayBuffer().then(((function (seq__15088,chunk__15089,count__15090,i__15091,file,seq__15088__$1,temp__5720__auto__){
return (function (p1__15086_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__15086_SHARP_);
});})(seq__15088,chunk__15089,count__15090,i__15091,file,seq__15088__$1,temp__5720__auto__))
).then(((function (seq__15088,chunk__15089,count__15090,i__15091,file,seq__15088__$1,temp__5720__auto__){
return (function (p1__15087_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__15087_SHARP_);
});})(seq__15088,chunk__15089,count__15090,i__15091,file,seq__15088__$1,temp__5720__auto__))
);


var G__15110 = cljs.core.next.call(null,seq__15088__$1);
var G__15111 = null;
var G__15112 = (0);
var G__15113 = (0);
seq__15088 = G__15110;
chunk__15089 = G__15111;
count__15090 = G__15112;
i__15091 = G__15113;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__15092(s__15093){
return (new cljs.core.LazySeq(null,(function (){
var s__15093__$1 = s__15093;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15093__$1);
if(temp__5720__auto__){
var s__15093__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15093__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__15093__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__15095 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__15094 = (0);
while(true){
if((i__15094 < size__4522__auto__)){
var vec__15096 = cljs.core._nth.call(null,c__4521__auto__,i__15094);
var name = cljs.core.nth.call(null,vec__15096,(0),null);
var buffer = cljs.core.nth.call(null,vec__15096,(1),null);
cljs.core.chunk_append.call(null,b__15095,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__15114 = (i__15094 + (1));
i__15094 = G__15114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15095),fugue$ctx_ctrls$buffer_ctrl_$_iter__15092.call(null,cljs.core.chunk_rest.call(null,s__15093__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15095),null);
}
} else {
var vec__15099 = cljs.core.first.call(null,s__15093__$2);
var name = cljs.core.nth.call(null,vec__15099,(0),null);
var buffer = cljs.core.nth.call(null,vec__15099,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__15092.call(null,cljs.core.rest.call(null,s__15093__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610846308238
