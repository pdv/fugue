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
var seq__34848_34948 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34850_34949 = null;
var count__34851_34950 = (0);
var i__34852_34951 = (0);
while(true){
if((i__34852_34951 < count__34851_34950)){
var vec__34894_34952 = cljs.core._nth.call(null,chunk__34850_34949,i__34852_34951);
var in_name_34953 = cljs.core.nth.call(null,vec__34894_34952,(0),null);
var in_mult_34954 = cljs.core.nth.call(null,vec__34894_34952,(1),null);
var in_chan_34955 = cljs.core.async.chan.call(null);
var c__32691__auto___34956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34848_34948,chunk__34850_34949,count__34851_34950,i__34852_34951,c__32691__auto___34956,in_chan_34955,vec__34894_34952,in_name_34953,in_mult_34954,inputs){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (seq__34848_34948,chunk__34850_34949,count__34851_34950,i__34852_34951,c__32691__auto___34956,in_chan_34955,vec__34894_34952,in_name_34953,in_mult_34954,inputs){
return (function (state_34905){
var state_val_34906 = (state_34905[(1)]);
if((state_val_34906 === (1))){
var state_34905__$1 = state_34905;
var statearr_34907_34957 = state_34905__$1;
(statearr_34907_34957[(2)] = null);

(statearr_34907_34957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34906 === (2))){
var state_34905__$1 = state_34905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34905__$1,(4),in_chan_34955);
} else {
if((state_val_34906 === (3))){
var inst_34903 = (state_34905[(2)]);
var state_34905__$1 = state_34905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34905__$1,inst_34903);
} else {
if((state_val_34906 === (4))){
var inst_34899 = (state_34905[(2)]);
var inst_34900 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34953,inst_34899);
var state_34905__$1 = (function (){var statearr_34908 = state_34905;
(statearr_34908[(7)] = inst_34900);

return statearr_34908;
})();
var statearr_34909_34958 = state_34905__$1;
(statearr_34909_34958[(2)] = null);

(statearr_34909_34958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34848_34948,chunk__34850_34949,count__34851_34950,i__34852_34951,c__32691__auto___34956,in_chan_34955,vec__34894_34952,in_name_34953,in_mult_34954,inputs))
;
return ((function (seq__34848_34948,chunk__34850_34949,count__34851_34950,i__34852_34951,switch__32596__auto__,c__32691__auto___34956,in_chan_34955,vec__34894_34952,in_name_34953,in_mult_34954,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0 = (function (){
var statearr_34910 = [null,null,null,null,null,null,null,null];
(statearr_34910[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__);

(statearr_34910[(1)] = (1));

return statearr_34910;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1 = (function (state_34905){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_34905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e34911){if((e34911 instanceof Object)){
var ex__32600__auto__ = e34911;
var statearr_34912_34959 = state_34905;
(statearr_34912_34959[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34960 = state_34905;
state_34905 = G__34960;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__ = function(state_34905){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1.call(this,state_34905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__;
})()
;})(seq__34848_34948,chunk__34850_34949,count__34851_34950,i__34852_34951,switch__32596__auto__,c__32691__auto___34956,in_chan_34955,vec__34894_34952,in_name_34953,in_mult_34954,inputs))
})();
var state__32693__auto__ = (function (){var statearr_34913 = f__32692__auto__.call(null);
(statearr_34913[(6)] = c__32691__auto___34956);

return statearr_34913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(seq__34848_34948,chunk__34850_34949,count__34851_34950,i__34852_34951,c__32691__auto___34956,in_chan_34955,vec__34894_34952,in_name_34953,in_mult_34954,inputs))
);


cljs.core.async.tap.call(null,in_mult_34954,in_chan_34955);


var G__34961 = seq__34848_34948;
var G__34962 = chunk__34850_34949;
var G__34963 = count__34851_34950;
var G__34964 = (i__34852_34951 + (1));
seq__34848_34948 = G__34961;
chunk__34850_34949 = G__34962;
count__34851_34950 = G__34963;
i__34852_34951 = G__34964;
continue;
} else {
var temp__5720__auto___34965 = cljs.core.seq.call(null,seq__34848_34948);
if(temp__5720__auto___34965){
var seq__34848_34966__$1 = temp__5720__auto___34965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34848_34966__$1)){
var c__4550__auto___34967 = cljs.core.chunk_first.call(null,seq__34848_34966__$1);
var G__34968 = cljs.core.chunk_rest.call(null,seq__34848_34966__$1);
var G__34969 = c__4550__auto___34967;
var G__34970 = cljs.core.count.call(null,c__4550__auto___34967);
var G__34971 = (0);
seq__34848_34948 = G__34968;
chunk__34850_34949 = G__34969;
count__34851_34950 = G__34970;
i__34852_34951 = G__34971;
continue;
} else {
var vec__34914_34972 = cljs.core.first.call(null,seq__34848_34966__$1);
var in_name_34973 = cljs.core.nth.call(null,vec__34914_34972,(0),null);
var in_mult_34974 = cljs.core.nth.call(null,vec__34914_34972,(1),null);
var in_chan_34975 = cljs.core.async.chan.call(null);
var c__32691__auto___34976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34848_34948,chunk__34850_34949,count__34851_34950,i__34852_34951,c__32691__auto___34976,in_chan_34975,vec__34914_34972,in_name_34973,in_mult_34974,seq__34848_34966__$1,temp__5720__auto___34965,inputs){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (seq__34848_34948,chunk__34850_34949,count__34851_34950,i__34852_34951,c__32691__auto___34976,in_chan_34975,vec__34914_34972,in_name_34973,in_mult_34974,seq__34848_34966__$1,temp__5720__auto___34965,inputs){
return (function (state_34925){
var state_val_34926 = (state_34925[(1)]);
if((state_val_34926 === (1))){
var state_34925__$1 = state_34925;
var statearr_34927_34977 = state_34925__$1;
(statearr_34927_34977[(2)] = null);

(statearr_34927_34977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34926 === (2))){
var state_34925__$1 = state_34925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34925__$1,(4),in_chan_34975);
} else {
if((state_val_34926 === (3))){
var inst_34923 = (state_34925[(2)]);
var state_34925__$1 = state_34925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34925__$1,inst_34923);
} else {
if((state_val_34926 === (4))){
var inst_34919 = (state_34925[(2)]);
var inst_34920 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34973,inst_34919);
var state_34925__$1 = (function (){var statearr_34928 = state_34925;
(statearr_34928[(7)] = inst_34920);

return statearr_34928;
})();
var statearr_34929_34978 = state_34925__$1;
(statearr_34929_34978[(2)] = null);

(statearr_34929_34978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34848_34948,chunk__34850_34949,count__34851_34950,i__34852_34951,c__32691__auto___34976,in_chan_34975,vec__34914_34972,in_name_34973,in_mult_34974,seq__34848_34966__$1,temp__5720__auto___34965,inputs))
;
return ((function (seq__34848_34948,chunk__34850_34949,count__34851_34950,i__34852_34951,switch__32596__auto__,c__32691__auto___34976,in_chan_34975,vec__34914_34972,in_name_34973,in_mult_34974,seq__34848_34966__$1,temp__5720__auto___34965,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0 = (function (){
var statearr_34930 = [null,null,null,null,null,null,null,null];
(statearr_34930[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__);

(statearr_34930[(1)] = (1));

return statearr_34930;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1 = (function (state_34925){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_34925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e34931){if((e34931 instanceof Object)){
var ex__32600__auto__ = e34931;
var statearr_34932_34979 = state_34925;
(statearr_34932_34979[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34980 = state_34925;
state_34925 = G__34980;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__ = function(state_34925){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1.call(this,state_34925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__;
})()
;})(seq__34848_34948,chunk__34850_34949,count__34851_34950,i__34852_34951,switch__32596__auto__,c__32691__auto___34976,in_chan_34975,vec__34914_34972,in_name_34973,in_mult_34974,seq__34848_34966__$1,temp__5720__auto___34965,inputs))
})();
var state__32693__auto__ = (function (){var statearr_34933 = f__32692__auto__.call(null);
(statearr_34933[(6)] = c__32691__auto___34976);

return statearr_34933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(seq__34848_34948,chunk__34850_34949,count__34851_34950,i__34852_34951,c__32691__auto___34976,in_chan_34975,vec__34914_34972,in_name_34973,in_mult_34974,seq__34848_34966__$1,temp__5720__auto___34965,inputs))
);


cljs.core.async.tap.call(null,in_mult_34974,in_chan_34975);


var G__34981 = cljs.core.next.call(null,seq__34848_34966__$1);
var G__34982 = null;
var G__34983 = (0);
var G__34984 = (0);
seq__34848_34948 = G__34981;
chunk__34850_34949 = G__34982;
count__34851_34950 = G__34983;
i__34852_34951 = G__34984;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34934(s__34935){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34935__$1 = s__34935;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34935__$1);
if(temp__5720__auto__){
var s__34935__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34935__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34935__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34937 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34936 = (0);
while(true){
if((i__34936 < size__4522__auto__)){
var vec__34938 = cljs.core._nth.call(null,c__4521__auto__,i__34936);
var in_name = cljs.core.nth.call(null,vec__34938,(0),null);
var map__34941 = cljs.core.nth.call(null,vec__34938,(1),null);
var map__34941__$1 = (((((!((map__34941 == null))))?(((((map__34941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34941):map__34941);
var type = cljs.core.get.call(null,map__34941__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34941__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34941__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__34937,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__34985 = (i__34936 + (1));
i__34936 = G__34985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34937),fugue$ctx_ctrls$midi_monitor_$_iter__34934.call(null,cljs.core.chunk_rest.call(null,s__34935__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34937),null);
}
} else {
var vec__34943 = cljs.core.first.call(null,s__34935__$2);
var in_name = cljs.core.nth.call(null,vec__34943,(0),null);
var map__34946 = cljs.core.nth.call(null,vec__34943,(1),null);
var map__34946__$1 = (((((!((map__34946 == null))))?(((((map__34946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34946):map__34946);
var type = cljs.core.get.call(null,map__34946__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34946__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34946__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34934.call(null,cljs.core.rest.call(null,s__34935__$2)));
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
var temp__5718__auto___34989 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34989)){
var old_ctx_34990 = temp__5718__auto___34989;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_34990).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34987 = temp__5718__auto__;
var map__34987__$1 = (((((!((map__34987 == null))))?(((((map__34987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34987):map__34987);
var outs = cljs.core.get.call(null,map__34987__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__34986_SHARP_){
return console.log(p1__34986_SHARP_);
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
var seq__34993 = cljs.core.seq.call(null,files);
var chunk__34994 = null;
var count__34995 = (0);
var i__34996 = (0);
while(true){
if((i__34996 < count__34995)){
var file = cljs.core._nth.call(null,chunk__34994,i__34996);
file.arrayBuffer().then(((function (seq__34993,chunk__34994,count__34995,i__34996,file,files){
return (function (p1__34991_SHARP_){
return actx.decodeAudioData(p1__34991_SHARP_);
});})(seq__34993,chunk__34994,count__34995,i__34996,file,files))
).then(((function (seq__34993,chunk__34994,count__34995,i__34996,file,files){
return (function (p1__34992_SHARP_){
return buffer_cb.call(null,file.name,p1__34992_SHARP_);
});})(seq__34993,chunk__34994,count__34995,i__34996,file,files))
);


var G__34997 = seq__34993;
var G__34998 = chunk__34994;
var G__34999 = count__34995;
var G__35000 = (i__34996 + (1));
seq__34993 = G__34997;
chunk__34994 = G__34998;
count__34995 = G__34999;
i__34996 = G__35000;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34993);
if(temp__5720__auto__){
var seq__34993__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34993__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34993__$1);
var G__35001 = cljs.core.chunk_rest.call(null,seq__34993__$1);
var G__35002 = c__4550__auto__;
var G__35003 = cljs.core.count.call(null,c__4550__auto__);
var G__35004 = (0);
seq__34993 = G__35001;
chunk__34994 = G__35002;
count__34995 = G__35003;
i__34996 = G__35004;
continue;
} else {
var file = cljs.core.first.call(null,seq__34993__$1);
file.arrayBuffer().then(((function (seq__34993,chunk__34994,count__34995,i__34996,file,seq__34993__$1,temp__5720__auto__,files){
return (function (p1__34991_SHARP_){
return actx.decodeAudioData(p1__34991_SHARP_);
});})(seq__34993,chunk__34994,count__34995,i__34996,file,seq__34993__$1,temp__5720__auto__,files))
).then(((function (seq__34993,chunk__34994,count__34995,i__34996,file,seq__34993__$1,temp__5720__auto__,files){
return (function (p1__34992_SHARP_){
return buffer_cb.call(null,file.name,p1__34992_SHARP_);
});})(seq__34993,chunk__34994,count__34995,i__34996,file,seq__34993__$1,temp__5720__auto__,files))
);


var G__35005 = cljs.core.next.call(null,seq__34993__$1);
var G__35006 = null;
var G__35007 = (0);
var G__35008 = (0);
seq__34993 = G__35005;
chunk__34994 = G__35006;
count__34995 = G__35007;
i__34996 = G__35008;
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
var seq__35011 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__35012 = null;
var count__35013 = (0);
var i__35014 = (0);
while(true){
if((i__35014 < count__35013)){
var file = cljs.core._nth.call(null,chunk__35012,i__35014);
file.arrayBuffer().then(((function (seq__35011,chunk__35012,count__35013,i__35014,file){
return (function (p1__35009_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__35009_SHARP_);
});})(seq__35011,chunk__35012,count__35013,i__35014,file))
).then(((function (seq__35011,chunk__35012,count__35013,i__35014,file){
return (function (p1__35010_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__35010_SHARP_);
});})(seq__35011,chunk__35012,count__35013,i__35014,file))
);


var G__35025 = seq__35011;
var G__35026 = chunk__35012;
var G__35027 = count__35013;
var G__35028 = (i__35014 + (1));
seq__35011 = G__35025;
chunk__35012 = G__35026;
count__35013 = G__35027;
i__35014 = G__35028;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35011);
if(temp__5720__auto__){
var seq__35011__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35011__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35011__$1);
var G__35029 = cljs.core.chunk_rest.call(null,seq__35011__$1);
var G__35030 = c__4550__auto__;
var G__35031 = cljs.core.count.call(null,c__4550__auto__);
var G__35032 = (0);
seq__35011 = G__35029;
chunk__35012 = G__35030;
count__35013 = G__35031;
i__35014 = G__35032;
continue;
} else {
var file = cljs.core.first.call(null,seq__35011__$1);
file.arrayBuffer().then(((function (seq__35011,chunk__35012,count__35013,i__35014,file,seq__35011__$1,temp__5720__auto__){
return (function (p1__35009_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__35009_SHARP_);
});})(seq__35011,chunk__35012,count__35013,i__35014,file,seq__35011__$1,temp__5720__auto__))
).then(((function (seq__35011,chunk__35012,count__35013,i__35014,file,seq__35011__$1,temp__5720__auto__){
return (function (p1__35010_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__35010_SHARP_);
});})(seq__35011,chunk__35012,count__35013,i__35014,file,seq__35011__$1,temp__5720__auto__))
);


var G__35033 = cljs.core.next.call(null,seq__35011__$1);
var G__35034 = null;
var G__35035 = (0);
var G__35036 = (0);
seq__35011 = G__35033;
chunk__35012 = G__35034;
count__35013 = G__35035;
i__35014 = G__35036;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__35015(s__35016){
return (new cljs.core.LazySeq(null,(function (){
var s__35016__$1 = s__35016;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__35016__$1);
if(temp__5720__auto__){
var s__35016__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35016__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__35016__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__35018 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__35017 = (0);
while(true){
if((i__35017 < size__4522__auto__)){
var vec__35019 = cljs.core._nth.call(null,c__4521__auto__,i__35017);
var name = cljs.core.nth.call(null,vec__35019,(0),null);
var buffer = cljs.core.nth.call(null,vec__35019,(1),null);
cljs.core.chunk_append.call(null,b__35018,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__35037 = (i__35017 + (1));
i__35017 = G__35037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35018),fugue$ctx_ctrls$buffer_ctrl_$_iter__35015.call(null,cljs.core.chunk_rest.call(null,s__35016__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35018),null);
}
} else {
var vec__35022 = cljs.core.first.call(null,s__35016__$2);
var name = cljs.core.nth.call(null,vec__35022,(0),null);
var buffer = cljs.core.nth.call(null,vec__35022,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__35015.call(null,cljs.core.rest.call(null,s__35016__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610339734523
