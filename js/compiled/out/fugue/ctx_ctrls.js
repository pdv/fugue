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
var seq__34899_34999 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34901_35000 = null;
var count__34902_35001 = (0);
var i__34903_35002 = (0);
while(true){
if((i__34903_35002 < count__34902_35001)){
var vec__34945_35003 = cljs.core._nth.call(null,chunk__34901_35000,i__34903_35002);
var in_name_35004 = cljs.core.nth.call(null,vec__34945_35003,(0),null);
var in_mult_35005 = cljs.core.nth.call(null,vec__34945_35003,(1),null);
var in_chan_35006 = cljs.core.async.chan.call(null);
var c__32691__auto___35007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34899_34999,chunk__34901_35000,count__34902_35001,i__34903_35002,c__32691__auto___35007,in_chan_35006,vec__34945_35003,in_name_35004,in_mult_35005,inputs){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (seq__34899_34999,chunk__34901_35000,count__34902_35001,i__34903_35002,c__32691__auto___35007,in_chan_35006,vec__34945_35003,in_name_35004,in_mult_35005,inputs){
return (function (state_34956){
var state_val_34957 = (state_34956[(1)]);
if((state_val_34957 === (1))){
var state_34956__$1 = state_34956;
var statearr_34958_35008 = state_34956__$1;
(statearr_34958_35008[(2)] = null);

(statearr_34958_35008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34957 === (2))){
var state_34956__$1 = state_34956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34956__$1,(4),in_chan_35006);
} else {
if((state_val_34957 === (3))){
var inst_34954 = (state_34956[(2)]);
var state_34956__$1 = state_34956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34956__$1,inst_34954);
} else {
if((state_val_34957 === (4))){
var inst_34950 = (state_34956[(2)]);
var inst_34951 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_35004,inst_34950);
var state_34956__$1 = (function (){var statearr_34959 = state_34956;
(statearr_34959[(7)] = inst_34951);

return statearr_34959;
})();
var statearr_34960_35009 = state_34956__$1;
(statearr_34960_35009[(2)] = null);

(statearr_34960_35009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34899_34999,chunk__34901_35000,count__34902_35001,i__34903_35002,c__32691__auto___35007,in_chan_35006,vec__34945_35003,in_name_35004,in_mult_35005,inputs))
;
return ((function (seq__34899_34999,chunk__34901_35000,count__34902_35001,i__34903_35002,switch__32596__auto__,c__32691__auto___35007,in_chan_35006,vec__34945_35003,in_name_35004,in_mult_35005,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0 = (function (){
var statearr_34961 = [null,null,null,null,null,null,null,null];
(statearr_34961[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__);

(statearr_34961[(1)] = (1));

return statearr_34961;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1 = (function (state_34956){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_34956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e34962){if((e34962 instanceof Object)){
var ex__32600__auto__ = e34962;
var statearr_34963_35010 = state_34956;
(statearr_34963_35010[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35011 = state_34956;
state_34956 = G__35011;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__ = function(state_34956){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1.call(this,state_34956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__;
})()
;})(seq__34899_34999,chunk__34901_35000,count__34902_35001,i__34903_35002,switch__32596__auto__,c__32691__auto___35007,in_chan_35006,vec__34945_35003,in_name_35004,in_mult_35005,inputs))
})();
var state__32693__auto__ = (function (){var statearr_34964 = f__32692__auto__.call(null);
(statearr_34964[(6)] = c__32691__auto___35007);

return statearr_34964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(seq__34899_34999,chunk__34901_35000,count__34902_35001,i__34903_35002,c__32691__auto___35007,in_chan_35006,vec__34945_35003,in_name_35004,in_mult_35005,inputs))
);


cljs.core.async.tap.call(null,in_mult_35005,in_chan_35006);


var G__35012 = seq__34899_34999;
var G__35013 = chunk__34901_35000;
var G__35014 = count__34902_35001;
var G__35015 = (i__34903_35002 + (1));
seq__34899_34999 = G__35012;
chunk__34901_35000 = G__35013;
count__34902_35001 = G__35014;
i__34903_35002 = G__35015;
continue;
} else {
var temp__5720__auto___35016 = cljs.core.seq.call(null,seq__34899_34999);
if(temp__5720__auto___35016){
var seq__34899_35017__$1 = temp__5720__auto___35016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34899_35017__$1)){
var c__4550__auto___35018 = cljs.core.chunk_first.call(null,seq__34899_35017__$1);
var G__35019 = cljs.core.chunk_rest.call(null,seq__34899_35017__$1);
var G__35020 = c__4550__auto___35018;
var G__35021 = cljs.core.count.call(null,c__4550__auto___35018);
var G__35022 = (0);
seq__34899_34999 = G__35019;
chunk__34901_35000 = G__35020;
count__34902_35001 = G__35021;
i__34903_35002 = G__35022;
continue;
} else {
var vec__34965_35023 = cljs.core.first.call(null,seq__34899_35017__$1);
var in_name_35024 = cljs.core.nth.call(null,vec__34965_35023,(0),null);
var in_mult_35025 = cljs.core.nth.call(null,vec__34965_35023,(1),null);
var in_chan_35026 = cljs.core.async.chan.call(null);
var c__32691__auto___35027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34899_34999,chunk__34901_35000,count__34902_35001,i__34903_35002,c__32691__auto___35027,in_chan_35026,vec__34965_35023,in_name_35024,in_mult_35025,seq__34899_35017__$1,temp__5720__auto___35016,inputs){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (seq__34899_34999,chunk__34901_35000,count__34902_35001,i__34903_35002,c__32691__auto___35027,in_chan_35026,vec__34965_35023,in_name_35024,in_mult_35025,seq__34899_35017__$1,temp__5720__auto___35016,inputs){
return (function (state_34976){
var state_val_34977 = (state_34976[(1)]);
if((state_val_34977 === (1))){
var state_34976__$1 = state_34976;
var statearr_34978_35028 = state_34976__$1;
(statearr_34978_35028[(2)] = null);

(statearr_34978_35028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34977 === (2))){
var state_34976__$1 = state_34976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34976__$1,(4),in_chan_35026);
} else {
if((state_val_34977 === (3))){
var inst_34974 = (state_34976[(2)]);
var state_34976__$1 = state_34976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34976__$1,inst_34974);
} else {
if((state_val_34977 === (4))){
var inst_34970 = (state_34976[(2)]);
var inst_34971 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_35024,inst_34970);
var state_34976__$1 = (function (){var statearr_34979 = state_34976;
(statearr_34979[(7)] = inst_34971);

return statearr_34979;
})();
var statearr_34980_35029 = state_34976__$1;
(statearr_34980_35029[(2)] = null);

(statearr_34980_35029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34899_34999,chunk__34901_35000,count__34902_35001,i__34903_35002,c__32691__auto___35027,in_chan_35026,vec__34965_35023,in_name_35024,in_mult_35025,seq__34899_35017__$1,temp__5720__auto___35016,inputs))
;
return ((function (seq__34899_34999,chunk__34901_35000,count__34902_35001,i__34903_35002,switch__32596__auto__,c__32691__auto___35027,in_chan_35026,vec__34965_35023,in_name_35024,in_mult_35025,seq__34899_35017__$1,temp__5720__auto___35016,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0 = (function (){
var statearr_34981 = [null,null,null,null,null,null,null,null];
(statearr_34981[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__);

(statearr_34981[(1)] = (1));

return statearr_34981;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1 = (function (state_34976){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_34976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e34982){if((e34982 instanceof Object)){
var ex__32600__auto__ = e34982;
var statearr_34983_35030 = state_34976;
(statearr_34983_35030[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35031 = state_34976;
state_34976 = G__35031;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__ = function(state_34976){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1.call(this,state_34976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__;
})()
;})(seq__34899_34999,chunk__34901_35000,count__34902_35001,i__34903_35002,switch__32596__auto__,c__32691__auto___35027,in_chan_35026,vec__34965_35023,in_name_35024,in_mult_35025,seq__34899_35017__$1,temp__5720__auto___35016,inputs))
})();
var state__32693__auto__ = (function (){var statearr_34984 = f__32692__auto__.call(null);
(statearr_34984[(6)] = c__32691__auto___35027);

return statearr_34984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(seq__34899_34999,chunk__34901_35000,count__34902_35001,i__34903_35002,c__32691__auto___35027,in_chan_35026,vec__34965_35023,in_name_35024,in_mult_35025,seq__34899_35017__$1,temp__5720__auto___35016,inputs))
);


cljs.core.async.tap.call(null,in_mult_35025,in_chan_35026);


var G__35032 = cljs.core.next.call(null,seq__34899_35017__$1);
var G__35033 = null;
var G__35034 = (0);
var G__35035 = (0);
seq__34899_34999 = G__35032;
chunk__34901_35000 = G__35033;
count__34902_35001 = G__35034;
i__34903_35002 = G__35035;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34985(s__34986){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34986__$1 = s__34986;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34986__$1);
if(temp__5720__auto__){
var s__34986__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34986__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34986__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34988 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34987 = (0);
while(true){
if((i__34987 < size__4522__auto__)){
var vec__34989 = cljs.core._nth.call(null,c__4521__auto__,i__34987);
var in_name = cljs.core.nth.call(null,vec__34989,(0),null);
var map__34992 = cljs.core.nth.call(null,vec__34989,(1),null);
var map__34992__$1 = (((((!((map__34992 == null))))?(((((map__34992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34992):map__34992);
var type = cljs.core.get.call(null,map__34992__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34992__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34992__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__34988,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__35036 = (i__34987 + (1));
i__34987 = G__35036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34988),fugue$ctx_ctrls$midi_monitor_$_iter__34985.call(null,cljs.core.chunk_rest.call(null,s__34986__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34988),null);
}
} else {
var vec__34994 = cljs.core.first.call(null,s__34986__$2);
var in_name = cljs.core.nth.call(null,vec__34994,(0),null);
var map__34997 = cljs.core.nth.call(null,vec__34994,(1),null);
var map__34997__$1 = (((((!((map__34997 == null))))?(((((map__34997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34997):map__34997);
var type = cljs.core.get.call(null,map__34997__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34997__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34997__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34985.call(null,cljs.core.rest.call(null,s__34986__$2)));
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
var temp__5718__auto___35040 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___35040)){
var old_ctx_35041 = temp__5718__auto___35040;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_35041).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__35038 = temp__5718__auto__;
var map__35038__$1 = (((((!((map__35038 == null))))?(((((map__35038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35038):map__35038);
var outs = cljs.core.get.call(null,map__35038__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__35037_SHARP_){
return console.log(p1__35037_SHARP_);
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
var seq__35044 = cljs.core.seq.call(null,files);
var chunk__35045 = null;
var count__35046 = (0);
var i__35047 = (0);
while(true){
if((i__35047 < count__35046)){
var file = cljs.core._nth.call(null,chunk__35045,i__35047);
file.arrayBuffer().then(((function (seq__35044,chunk__35045,count__35046,i__35047,file,files){
return (function (p1__35042_SHARP_){
return actx.decodeAudioData(p1__35042_SHARP_);
});})(seq__35044,chunk__35045,count__35046,i__35047,file,files))
).then(((function (seq__35044,chunk__35045,count__35046,i__35047,file,files){
return (function (p1__35043_SHARP_){
return buffer_cb.call(null,file.name,p1__35043_SHARP_);
});})(seq__35044,chunk__35045,count__35046,i__35047,file,files))
);


var G__35048 = seq__35044;
var G__35049 = chunk__35045;
var G__35050 = count__35046;
var G__35051 = (i__35047 + (1));
seq__35044 = G__35048;
chunk__35045 = G__35049;
count__35046 = G__35050;
i__35047 = G__35051;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35044);
if(temp__5720__auto__){
var seq__35044__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35044__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35044__$1);
var G__35052 = cljs.core.chunk_rest.call(null,seq__35044__$1);
var G__35053 = c__4550__auto__;
var G__35054 = cljs.core.count.call(null,c__4550__auto__);
var G__35055 = (0);
seq__35044 = G__35052;
chunk__35045 = G__35053;
count__35046 = G__35054;
i__35047 = G__35055;
continue;
} else {
var file = cljs.core.first.call(null,seq__35044__$1);
file.arrayBuffer().then(((function (seq__35044,chunk__35045,count__35046,i__35047,file,seq__35044__$1,temp__5720__auto__,files){
return (function (p1__35042_SHARP_){
return actx.decodeAudioData(p1__35042_SHARP_);
});})(seq__35044,chunk__35045,count__35046,i__35047,file,seq__35044__$1,temp__5720__auto__,files))
).then(((function (seq__35044,chunk__35045,count__35046,i__35047,file,seq__35044__$1,temp__5720__auto__,files){
return (function (p1__35043_SHARP_){
return buffer_cb.call(null,file.name,p1__35043_SHARP_);
});})(seq__35044,chunk__35045,count__35046,i__35047,file,seq__35044__$1,temp__5720__auto__,files))
);


var G__35056 = cljs.core.next.call(null,seq__35044__$1);
var G__35057 = null;
var G__35058 = (0);
var G__35059 = (0);
seq__35044 = G__35056;
chunk__35045 = G__35057;
count__35046 = G__35058;
i__35047 = G__35059;
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
var seq__35062 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__35063 = null;
var count__35064 = (0);
var i__35065 = (0);
while(true){
if((i__35065 < count__35064)){
var file = cljs.core._nth.call(null,chunk__35063,i__35065);
file.arrayBuffer().then(((function (seq__35062,chunk__35063,count__35064,i__35065,file){
return (function (p1__35060_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__35060_SHARP_);
});})(seq__35062,chunk__35063,count__35064,i__35065,file))
).then(((function (seq__35062,chunk__35063,count__35064,i__35065,file){
return (function (p1__35061_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__35061_SHARP_);
});})(seq__35062,chunk__35063,count__35064,i__35065,file))
);


var G__35076 = seq__35062;
var G__35077 = chunk__35063;
var G__35078 = count__35064;
var G__35079 = (i__35065 + (1));
seq__35062 = G__35076;
chunk__35063 = G__35077;
count__35064 = G__35078;
i__35065 = G__35079;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35062);
if(temp__5720__auto__){
var seq__35062__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35062__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35062__$1);
var G__35080 = cljs.core.chunk_rest.call(null,seq__35062__$1);
var G__35081 = c__4550__auto__;
var G__35082 = cljs.core.count.call(null,c__4550__auto__);
var G__35083 = (0);
seq__35062 = G__35080;
chunk__35063 = G__35081;
count__35064 = G__35082;
i__35065 = G__35083;
continue;
} else {
var file = cljs.core.first.call(null,seq__35062__$1);
file.arrayBuffer().then(((function (seq__35062,chunk__35063,count__35064,i__35065,file,seq__35062__$1,temp__5720__auto__){
return (function (p1__35060_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__35060_SHARP_);
});})(seq__35062,chunk__35063,count__35064,i__35065,file,seq__35062__$1,temp__5720__auto__))
).then(((function (seq__35062,chunk__35063,count__35064,i__35065,file,seq__35062__$1,temp__5720__auto__){
return (function (p1__35061_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__35061_SHARP_);
});})(seq__35062,chunk__35063,count__35064,i__35065,file,seq__35062__$1,temp__5720__auto__))
);


var G__35084 = cljs.core.next.call(null,seq__35062__$1);
var G__35085 = null;
var G__35086 = (0);
var G__35087 = (0);
seq__35062 = G__35084;
chunk__35063 = G__35085;
count__35064 = G__35086;
i__35065 = G__35087;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__35066(s__35067){
return (new cljs.core.LazySeq(null,(function (){
var s__35067__$1 = s__35067;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__35067__$1);
if(temp__5720__auto__){
var s__35067__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35067__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__35067__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__35069 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__35068 = (0);
while(true){
if((i__35068 < size__4522__auto__)){
var vec__35070 = cljs.core._nth.call(null,c__4521__auto__,i__35068);
var name = cljs.core.nth.call(null,vec__35070,(0),null);
var buffer = cljs.core.nth.call(null,vec__35070,(1),null);
cljs.core.chunk_append.call(null,b__35069,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__35088 = (i__35068 + (1));
i__35068 = G__35088;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35069),fugue$ctx_ctrls$buffer_ctrl_$_iter__35066.call(null,cljs.core.chunk_rest.call(null,s__35067__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35069),null);
}
} else {
var vec__35073 = cljs.core.first.call(null,s__35067__$2);
var name = cljs.core.nth.call(null,vec__35073,(0),null);
var buffer = cljs.core.nth.call(null,vec__35073,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__35066.call(null,cljs.core.rest.call(null,s__35067__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610330675909
