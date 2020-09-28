// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.ctx_ctrls');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('webcv.midi');
goog.require('webcv.audio');
webcv.ctx_ctrls.midi_monitor = (function webcv$ctx_ctrls$midi_monitor(midi_ctx){
var inputs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__30243_30343 = cljs.core.seq.call(null,new cljs.core.Keyword("webcv.midi","ins","webcv.midi/ins",1736405462).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__30245_30344 = null;
var count__30246_30345 = (0);
var i__30247_30346 = (0);
while(true){
if((i__30247_30346 < count__30246_30345)){
var vec__30289_30347 = cljs.core._nth.call(null,chunk__30245_30344,i__30247_30346);
var in_name_30348 = cljs.core.nth.call(null,vec__30289_30347,(0),null);
var in_mult_30349 = cljs.core.nth.call(null,vec__30289_30347,(1),null);
var in_chan_30350 = cljs.core.async.chan.call(null);
var c__23570__auto___30351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__30243_30343,chunk__30245_30344,count__30246_30345,i__30247_30346,c__23570__auto___30351,in_chan_30350,vec__30289_30347,in_name_30348,in_mult_30349,inputs){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (seq__30243_30343,chunk__30245_30344,count__30246_30345,i__30247_30346,c__23570__auto___30351,in_chan_30350,vec__30289_30347,in_name_30348,in_mult_30349,inputs){
return (function (state_30300){
var state_val_30301 = (state_30300[(1)]);
if((state_val_30301 === (1))){
var state_30300__$1 = state_30300;
var statearr_30302_30352 = state_30300__$1;
(statearr_30302_30352[(2)] = null);

(statearr_30302_30352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30301 === (2))){
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30300__$1,(4),in_chan_30350);
} else {
if((state_val_30301 === (3))){
var inst_30298 = (state_30300[(2)]);
var state_30300__$1 = state_30300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30300__$1,inst_30298);
} else {
if((state_val_30301 === (4))){
var inst_30294 = (state_30300[(2)]);
var inst_30295 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_30348,inst_30294);
var state_30300__$1 = (function (){var statearr_30303 = state_30300;
(statearr_30303[(7)] = inst_30295);

return statearr_30303;
})();
var statearr_30304_30353 = state_30300__$1;
(statearr_30304_30353[(2)] = null);

(statearr_30304_30353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__30243_30343,chunk__30245_30344,count__30246_30345,i__30247_30346,c__23570__auto___30351,in_chan_30350,vec__30289_30347,in_name_30348,in_mult_30349,inputs))
;
return ((function (seq__30243_30343,chunk__30245_30344,count__30246_30345,i__30247_30346,switch__23475__auto__,c__23570__auto___30351,in_chan_30350,vec__30289_30347,in_name_30348,in_mult_30349,inputs){
return (function() {
var webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto__ = null;
var webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto____0 = (function (){
var statearr_30305 = [null,null,null,null,null,null,null,null];
(statearr_30305[(0)] = webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto__);

(statearr_30305[(1)] = (1));

return statearr_30305;
});
var webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto____1 = (function (state_30300){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_30300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e30306){if((e30306 instanceof Object)){
var ex__23479__auto__ = e30306;
var statearr_30307_30354 = state_30300;
(statearr_30307_30354[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30355 = state_30300;
state_30300 = G__30355;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto__ = function(state_30300){
switch(arguments.length){
case 0:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto____0.call(this);
case 1:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto____1.call(this,state_30300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto____0;
webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto____1;
return webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto__;
})()
;})(seq__30243_30343,chunk__30245_30344,count__30246_30345,i__30247_30346,switch__23475__auto__,c__23570__auto___30351,in_chan_30350,vec__30289_30347,in_name_30348,in_mult_30349,inputs))
})();
var state__23572__auto__ = (function (){var statearr_30308 = f__23571__auto__.call(null);
(statearr_30308[(6)] = c__23570__auto___30351);

return statearr_30308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(seq__30243_30343,chunk__30245_30344,count__30246_30345,i__30247_30346,c__23570__auto___30351,in_chan_30350,vec__30289_30347,in_name_30348,in_mult_30349,inputs))
);


cljs.core.async.tap.call(null,in_mult_30349,in_chan_30350);


var G__30356 = seq__30243_30343;
var G__30357 = chunk__30245_30344;
var G__30358 = count__30246_30345;
var G__30359 = (i__30247_30346 + (1));
seq__30243_30343 = G__30356;
chunk__30245_30344 = G__30357;
count__30246_30345 = G__30358;
i__30247_30346 = G__30359;
continue;
} else {
var temp__5720__auto___30360 = cljs.core.seq.call(null,seq__30243_30343);
if(temp__5720__auto___30360){
var seq__30243_30361__$1 = temp__5720__auto___30360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30243_30361__$1)){
var c__4550__auto___30362 = cljs.core.chunk_first.call(null,seq__30243_30361__$1);
var G__30363 = cljs.core.chunk_rest.call(null,seq__30243_30361__$1);
var G__30364 = c__4550__auto___30362;
var G__30365 = cljs.core.count.call(null,c__4550__auto___30362);
var G__30366 = (0);
seq__30243_30343 = G__30363;
chunk__30245_30344 = G__30364;
count__30246_30345 = G__30365;
i__30247_30346 = G__30366;
continue;
} else {
var vec__30309_30367 = cljs.core.first.call(null,seq__30243_30361__$1);
var in_name_30368 = cljs.core.nth.call(null,vec__30309_30367,(0),null);
var in_mult_30369 = cljs.core.nth.call(null,vec__30309_30367,(1),null);
var in_chan_30370 = cljs.core.async.chan.call(null);
var c__23570__auto___30371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__30243_30343,chunk__30245_30344,count__30246_30345,i__30247_30346,c__23570__auto___30371,in_chan_30370,vec__30309_30367,in_name_30368,in_mult_30369,seq__30243_30361__$1,temp__5720__auto___30360,inputs){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (seq__30243_30343,chunk__30245_30344,count__30246_30345,i__30247_30346,c__23570__auto___30371,in_chan_30370,vec__30309_30367,in_name_30368,in_mult_30369,seq__30243_30361__$1,temp__5720__auto___30360,inputs){
return (function (state_30320){
var state_val_30321 = (state_30320[(1)]);
if((state_val_30321 === (1))){
var state_30320__$1 = state_30320;
var statearr_30322_30372 = state_30320__$1;
(statearr_30322_30372[(2)] = null);

(statearr_30322_30372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30321 === (2))){
var state_30320__$1 = state_30320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30320__$1,(4),in_chan_30370);
} else {
if((state_val_30321 === (3))){
var inst_30318 = (state_30320[(2)]);
var state_30320__$1 = state_30320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30320__$1,inst_30318);
} else {
if((state_val_30321 === (4))){
var inst_30314 = (state_30320[(2)]);
var inst_30315 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_30368,inst_30314);
var state_30320__$1 = (function (){var statearr_30323 = state_30320;
(statearr_30323[(7)] = inst_30315);

return statearr_30323;
})();
var statearr_30324_30373 = state_30320__$1;
(statearr_30324_30373[(2)] = null);

(statearr_30324_30373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__30243_30343,chunk__30245_30344,count__30246_30345,i__30247_30346,c__23570__auto___30371,in_chan_30370,vec__30309_30367,in_name_30368,in_mult_30369,seq__30243_30361__$1,temp__5720__auto___30360,inputs))
;
return ((function (seq__30243_30343,chunk__30245_30344,count__30246_30345,i__30247_30346,switch__23475__auto__,c__23570__auto___30371,in_chan_30370,vec__30309_30367,in_name_30368,in_mult_30369,seq__30243_30361__$1,temp__5720__auto___30360,inputs){
return (function() {
var webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto__ = null;
var webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto____0 = (function (){
var statearr_30325 = [null,null,null,null,null,null,null,null];
(statearr_30325[(0)] = webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto__);

(statearr_30325[(1)] = (1));

return statearr_30325;
});
var webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto____1 = (function (state_30320){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_30320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e30326){if((e30326 instanceof Object)){
var ex__23479__auto__ = e30326;
var statearr_30327_30374 = state_30320;
(statearr_30327_30374[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30375 = state_30320;
state_30320 = G__30375;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto__ = function(state_30320){
switch(arguments.length){
case 0:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto____0.call(this);
case 1:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto____1.call(this,state_30320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto____0;
webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto____1;
return webcv$ctx_ctrls$midi_monitor_$_state_machine__23476__auto__;
})()
;})(seq__30243_30343,chunk__30245_30344,count__30246_30345,i__30247_30346,switch__23475__auto__,c__23570__auto___30371,in_chan_30370,vec__30309_30367,in_name_30368,in_mult_30369,seq__30243_30361__$1,temp__5720__auto___30360,inputs))
})();
var state__23572__auto__ = (function (){var statearr_30328 = f__23571__auto__.call(null);
(statearr_30328[(6)] = c__23570__auto___30371);

return statearr_30328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(seq__30243_30343,chunk__30245_30344,count__30246_30345,i__30247_30346,c__23570__auto___30371,in_chan_30370,vec__30309_30367,in_name_30368,in_mult_30369,seq__30243_30361__$1,temp__5720__auto___30360,inputs))
);


cljs.core.async.tap.call(null,in_mult_30369,in_chan_30370);


var G__30376 = cljs.core.next.call(null,seq__30243_30361__$1);
var G__30377 = null;
var G__30378 = (0);
var G__30379 = (0);
seq__30243_30343 = G__30376;
chunk__30245_30344 = G__30377;
count__30246_30345 = G__30378;
i__30247_30346 = G__30379;
continue;
}
} else {
}
}
break;
}

return ((function (inputs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword("webcv.midi","ins","webcv.midi/ins",1736405462).cljs$core$IFn$_invoke$arity$1(midi_ctx)))," ins"].join('')], null),(function (){var iter__4523__auto__ = ((function (inputs){
return (function webcv$ctx_ctrls$midi_monitor_$_iter__30329(s__30330){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__30330__$1 = s__30330;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30330__$1);
if(temp__5720__auto__){
var s__30330__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30330__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__30330__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__30332 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__30331 = (0);
while(true){
if((i__30331 < size__4522__auto__)){
var vec__30333 = cljs.core._nth.call(null,c__4521__auto__,i__30331);
var in_name = cljs.core.nth.call(null,vec__30333,(0),null);
var map__30336 = cljs.core.nth.call(null,vec__30333,(1),null);
var map__30336__$1 = (((((!((map__30336 == null))))?(((((map__30336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30336):map__30336);
var type = cljs.core.get.call(null,map__30336__$1,new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868));
var note = cljs.core.get.call(null,map__30336__$1,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544));
var velocity = cljs.core.get.call(null,map__30336__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
cljs.core.chunk_append.call(null,b__30332,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__30380 = (i__30331 + (1));
i__30331 = G__30380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30332),webcv$ctx_ctrls$midi_monitor_$_iter__30329.call(null,cljs.core.chunk_rest.call(null,s__30330__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30332),null);
}
} else {
var vec__30338 = cljs.core.first.call(null,s__30330__$2);
var in_name = cljs.core.nth.call(null,vec__30338,(0),null);
var map__30341 = cljs.core.nth.call(null,vec__30338,(1),null);
var map__30341__$1 = (((((!((map__30341 == null))))?(((((map__30341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30341):map__30341);
var type = cljs.core.get.call(null,map__30341__$1,new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868));
var note = cljs.core.get.call(null,map__30341__$1,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544));
var velocity = cljs.core.get.call(null,map__30341__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),webcv$ctx_ctrls$midi_monitor_$_iter__30329.call(null,cljs.core.rest.call(null,s__30330__$2)));
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
webcv.ctx_ctrls.midi_controls = (function webcv$ctx_ctrls$midi_controls(midi_ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webcv.midi.make_ctx.call(null,cljs.core.partial.call(null,cljs.core.reset_BANG_,midi_ctx));
})], null),"reset midi context"], null),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,midi_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var mctx = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webcv.ctx_ctrls.midi_monitor,mctx], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"midi ctx not loaded"], null);
}
})()], null);
});
webcv.ctx_ctrls.audio_controls = (function webcv$ctx_ctrls$audio_controls(audio_ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5718__auto___30383 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___30383)){
var old_ctx_30384 = temp__5718__auto___30383;
new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438).cljs$core$IFn$_invoke$arity$1(old_ctx_30384).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,webcv.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__30381 = temp__5718__auto__;
var map__30381__$1 = (((((!((map__30381 == null))))?(((((map__30381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30381):map__30381);
var actx = cljs.core.get.call(null,map__30381__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(actx.destination.maxChannelCount)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null)], null);
});
webcv.ctx_ctrls.init_controls_txt = ["(defonce audio-ctx (reagent.core/atom nil))\n","(defonce midi-ctx (reagent.core/atom nil))\n","[:div\n","  [webcv.ctx-ctrls/audio-controls audio-ctx]\n","  [webcv.ctx-ctrls/midi-controls midi-ctx]]\n"].join('');

//# sourceMappingURL=ctx_ctrls.js.map?rel=1601256055000
