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
var seq__34850_34950 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34852_34951 = null;
var count__34853_34952 = (0);
var i__34854_34953 = (0);
while(true){
if((i__34854_34953 < count__34853_34952)){
var vec__34896_34954 = cljs.core._nth.call(null,chunk__34852_34951,i__34854_34953);
var in_name_34955 = cljs.core.nth.call(null,vec__34896_34954,(0),null);
var in_mult_34956 = cljs.core.nth.call(null,vec__34896_34954,(1),null);
var in_chan_34957 = cljs.core.async.chan.call(null);
var c__32707__auto___34958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34850_34950,chunk__34852_34951,count__34853_34952,i__34854_34953,c__32707__auto___34958,in_chan_34957,vec__34896_34954,in_name_34955,in_mult_34956,inputs){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (seq__34850_34950,chunk__34852_34951,count__34853_34952,i__34854_34953,c__32707__auto___34958,in_chan_34957,vec__34896_34954,in_name_34955,in_mult_34956,inputs){
return (function (state_34907){
var state_val_34908 = (state_34907[(1)]);
if((state_val_34908 === (1))){
var state_34907__$1 = state_34907;
var statearr_34909_34959 = state_34907__$1;
(statearr_34909_34959[(2)] = null);

(statearr_34909_34959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34908 === (2))){
var state_34907__$1 = state_34907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34907__$1,(4),in_chan_34957);
} else {
if((state_val_34908 === (3))){
var inst_34905 = (state_34907[(2)]);
var state_34907__$1 = state_34907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34907__$1,inst_34905);
} else {
if((state_val_34908 === (4))){
var inst_34901 = (state_34907[(2)]);
var inst_34902 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34955,inst_34901);
var state_34907__$1 = (function (){var statearr_34910 = state_34907;
(statearr_34910[(7)] = inst_34902);

return statearr_34910;
})();
var statearr_34911_34960 = state_34907__$1;
(statearr_34911_34960[(2)] = null);

(statearr_34911_34960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34850_34950,chunk__34852_34951,count__34853_34952,i__34854_34953,c__32707__auto___34958,in_chan_34957,vec__34896_34954,in_name_34955,in_mult_34956,inputs))
;
return ((function (seq__34850_34950,chunk__34852_34951,count__34853_34952,i__34854_34953,switch__32612__auto__,c__32707__auto___34958,in_chan_34957,vec__34896_34954,in_name_34955,in_mult_34956,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0 = (function (){
var statearr_34912 = [null,null,null,null,null,null,null,null];
(statearr_34912[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__);

(statearr_34912[(1)] = (1));

return statearr_34912;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1 = (function (state_34907){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_34907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e34913){if((e34913 instanceof Object)){
var ex__32616__auto__ = e34913;
var statearr_34914_34961 = state_34907;
(statearr_34914_34961[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34962 = state_34907;
state_34907 = G__34962;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__ = function(state_34907){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1.call(this,state_34907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__;
})()
;})(seq__34850_34950,chunk__34852_34951,count__34853_34952,i__34854_34953,switch__32612__auto__,c__32707__auto___34958,in_chan_34957,vec__34896_34954,in_name_34955,in_mult_34956,inputs))
})();
var state__32709__auto__ = (function (){var statearr_34915 = f__32708__auto__.call(null);
(statearr_34915[(6)] = c__32707__auto___34958);

return statearr_34915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(seq__34850_34950,chunk__34852_34951,count__34853_34952,i__34854_34953,c__32707__auto___34958,in_chan_34957,vec__34896_34954,in_name_34955,in_mult_34956,inputs))
);


cljs.core.async.tap.call(null,in_mult_34956,in_chan_34957);


var G__34963 = seq__34850_34950;
var G__34964 = chunk__34852_34951;
var G__34965 = count__34853_34952;
var G__34966 = (i__34854_34953 + (1));
seq__34850_34950 = G__34963;
chunk__34852_34951 = G__34964;
count__34853_34952 = G__34965;
i__34854_34953 = G__34966;
continue;
} else {
var temp__5720__auto___34967 = cljs.core.seq.call(null,seq__34850_34950);
if(temp__5720__auto___34967){
var seq__34850_34968__$1 = temp__5720__auto___34967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34850_34968__$1)){
var c__4550__auto___34969 = cljs.core.chunk_first.call(null,seq__34850_34968__$1);
var G__34970 = cljs.core.chunk_rest.call(null,seq__34850_34968__$1);
var G__34971 = c__4550__auto___34969;
var G__34972 = cljs.core.count.call(null,c__4550__auto___34969);
var G__34973 = (0);
seq__34850_34950 = G__34970;
chunk__34852_34951 = G__34971;
count__34853_34952 = G__34972;
i__34854_34953 = G__34973;
continue;
} else {
var vec__34916_34974 = cljs.core.first.call(null,seq__34850_34968__$1);
var in_name_34975 = cljs.core.nth.call(null,vec__34916_34974,(0),null);
var in_mult_34976 = cljs.core.nth.call(null,vec__34916_34974,(1),null);
var in_chan_34977 = cljs.core.async.chan.call(null);
var c__32707__auto___34978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34850_34950,chunk__34852_34951,count__34853_34952,i__34854_34953,c__32707__auto___34978,in_chan_34977,vec__34916_34974,in_name_34975,in_mult_34976,seq__34850_34968__$1,temp__5720__auto___34967,inputs){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (seq__34850_34950,chunk__34852_34951,count__34853_34952,i__34854_34953,c__32707__auto___34978,in_chan_34977,vec__34916_34974,in_name_34975,in_mult_34976,seq__34850_34968__$1,temp__5720__auto___34967,inputs){
return (function (state_34927){
var state_val_34928 = (state_34927[(1)]);
if((state_val_34928 === (1))){
var state_34927__$1 = state_34927;
var statearr_34929_34979 = state_34927__$1;
(statearr_34929_34979[(2)] = null);

(statearr_34929_34979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34928 === (2))){
var state_34927__$1 = state_34927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34927__$1,(4),in_chan_34977);
} else {
if((state_val_34928 === (3))){
var inst_34925 = (state_34927[(2)]);
var state_34927__$1 = state_34927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34927__$1,inst_34925);
} else {
if((state_val_34928 === (4))){
var inst_34921 = (state_34927[(2)]);
var inst_34922 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34975,inst_34921);
var state_34927__$1 = (function (){var statearr_34930 = state_34927;
(statearr_34930[(7)] = inst_34922);

return statearr_34930;
})();
var statearr_34931_34980 = state_34927__$1;
(statearr_34931_34980[(2)] = null);

(statearr_34931_34980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34850_34950,chunk__34852_34951,count__34853_34952,i__34854_34953,c__32707__auto___34978,in_chan_34977,vec__34916_34974,in_name_34975,in_mult_34976,seq__34850_34968__$1,temp__5720__auto___34967,inputs))
;
return ((function (seq__34850_34950,chunk__34852_34951,count__34853_34952,i__34854_34953,switch__32612__auto__,c__32707__auto___34978,in_chan_34977,vec__34916_34974,in_name_34975,in_mult_34976,seq__34850_34968__$1,temp__5720__auto___34967,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0 = (function (){
var statearr_34932 = [null,null,null,null,null,null,null,null];
(statearr_34932[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__);

(statearr_34932[(1)] = (1));

return statearr_34932;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1 = (function (state_34927){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_34927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e34933){if((e34933 instanceof Object)){
var ex__32616__auto__ = e34933;
var statearr_34934_34981 = state_34927;
(statearr_34934_34981[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34982 = state_34927;
state_34927 = G__34982;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__ = function(state_34927){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1.call(this,state_34927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__;
})()
;})(seq__34850_34950,chunk__34852_34951,count__34853_34952,i__34854_34953,switch__32612__auto__,c__32707__auto___34978,in_chan_34977,vec__34916_34974,in_name_34975,in_mult_34976,seq__34850_34968__$1,temp__5720__auto___34967,inputs))
})();
var state__32709__auto__ = (function (){var statearr_34935 = f__32708__auto__.call(null);
(statearr_34935[(6)] = c__32707__auto___34978);

return statearr_34935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(seq__34850_34950,chunk__34852_34951,count__34853_34952,i__34854_34953,c__32707__auto___34978,in_chan_34977,vec__34916_34974,in_name_34975,in_mult_34976,seq__34850_34968__$1,temp__5720__auto___34967,inputs))
);


cljs.core.async.tap.call(null,in_mult_34976,in_chan_34977);


var G__34983 = cljs.core.next.call(null,seq__34850_34968__$1);
var G__34984 = null;
var G__34985 = (0);
var G__34986 = (0);
seq__34850_34950 = G__34983;
chunk__34852_34951 = G__34984;
count__34853_34952 = G__34985;
i__34854_34953 = G__34986;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34936(s__34937){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34937__$1 = s__34937;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34937__$1);
if(temp__5720__auto__){
var s__34937__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34937__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34937__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34939 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34938 = (0);
while(true){
if((i__34938 < size__4522__auto__)){
var vec__34940 = cljs.core._nth.call(null,c__4521__auto__,i__34938);
var in_name = cljs.core.nth.call(null,vec__34940,(0),null);
var map__34943 = cljs.core.nth.call(null,vec__34940,(1),null);
var map__34943__$1 = (((((!((map__34943 == null))))?(((((map__34943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34943):map__34943);
var type = cljs.core.get.call(null,map__34943__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34943__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34943__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__34939,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__34987 = (i__34938 + (1));
i__34938 = G__34987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34939),fugue$ctx_ctrls$midi_monitor_$_iter__34936.call(null,cljs.core.chunk_rest.call(null,s__34937__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34939),null);
}
} else {
var vec__34945 = cljs.core.first.call(null,s__34937__$2);
var in_name = cljs.core.nth.call(null,vec__34945,(0),null);
var map__34948 = cljs.core.nth.call(null,vec__34945,(1),null);
var map__34948__$1 = (((((!((map__34948 == null))))?(((((map__34948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34948):map__34948);
var type = cljs.core.get.call(null,map__34948__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34948__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34948__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34936.call(null,cljs.core.rest.call(null,s__34937__$2)));
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
var temp__5718__auto___34991 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34991)){
var old_ctx_34992 = temp__5718__auto___34991;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_34992).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34989 = temp__5718__auto__;
var map__34989__$1 = (((((!((map__34989 == null))))?(((((map__34989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34989):map__34989);
var outs = cljs.core.get.call(null,map__34989__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__34988_SHARP_){
return console.log(p1__34988_SHARP_);
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
var seq__34995 = cljs.core.seq.call(null,files);
var chunk__34996 = null;
var count__34997 = (0);
var i__34998 = (0);
while(true){
if((i__34998 < count__34997)){
var file = cljs.core._nth.call(null,chunk__34996,i__34998);
file.arrayBuffer().then(((function (seq__34995,chunk__34996,count__34997,i__34998,file,files){
return (function (p1__34993_SHARP_){
return actx.decodeAudioData(p1__34993_SHARP_);
});})(seq__34995,chunk__34996,count__34997,i__34998,file,files))
).then(((function (seq__34995,chunk__34996,count__34997,i__34998,file,files){
return (function (p1__34994_SHARP_){
return buffer_cb.call(null,file.name,p1__34994_SHARP_);
});})(seq__34995,chunk__34996,count__34997,i__34998,file,files))
);


var G__34999 = seq__34995;
var G__35000 = chunk__34996;
var G__35001 = count__34997;
var G__35002 = (i__34998 + (1));
seq__34995 = G__34999;
chunk__34996 = G__35000;
count__34997 = G__35001;
i__34998 = G__35002;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34995);
if(temp__5720__auto__){
var seq__34995__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34995__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34995__$1);
var G__35003 = cljs.core.chunk_rest.call(null,seq__34995__$1);
var G__35004 = c__4550__auto__;
var G__35005 = cljs.core.count.call(null,c__4550__auto__);
var G__35006 = (0);
seq__34995 = G__35003;
chunk__34996 = G__35004;
count__34997 = G__35005;
i__34998 = G__35006;
continue;
} else {
var file = cljs.core.first.call(null,seq__34995__$1);
file.arrayBuffer().then(((function (seq__34995,chunk__34996,count__34997,i__34998,file,seq__34995__$1,temp__5720__auto__,files){
return (function (p1__34993_SHARP_){
return actx.decodeAudioData(p1__34993_SHARP_);
});})(seq__34995,chunk__34996,count__34997,i__34998,file,seq__34995__$1,temp__5720__auto__,files))
).then(((function (seq__34995,chunk__34996,count__34997,i__34998,file,seq__34995__$1,temp__5720__auto__,files){
return (function (p1__34994_SHARP_){
return buffer_cb.call(null,file.name,p1__34994_SHARP_);
});})(seq__34995,chunk__34996,count__34997,i__34998,file,seq__34995__$1,temp__5720__auto__,files))
);


var G__35007 = cljs.core.next.call(null,seq__34995__$1);
var G__35008 = null;
var G__35009 = (0);
var G__35010 = (0);
seq__34995 = G__35007;
chunk__34996 = G__35008;
count__34997 = G__35009;
i__34998 = G__35010;
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
var seq__35013 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__35014 = null;
var count__35015 = (0);
var i__35016 = (0);
while(true){
if((i__35016 < count__35015)){
var file = cljs.core._nth.call(null,chunk__35014,i__35016);
file.arrayBuffer().then(((function (seq__35013,chunk__35014,count__35015,i__35016,file){
return (function (p1__35011_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__35011_SHARP_);
});})(seq__35013,chunk__35014,count__35015,i__35016,file))
).then(((function (seq__35013,chunk__35014,count__35015,i__35016,file){
return (function (p1__35012_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__35012_SHARP_);
});})(seq__35013,chunk__35014,count__35015,i__35016,file))
);


var G__35027 = seq__35013;
var G__35028 = chunk__35014;
var G__35029 = count__35015;
var G__35030 = (i__35016 + (1));
seq__35013 = G__35027;
chunk__35014 = G__35028;
count__35015 = G__35029;
i__35016 = G__35030;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35013);
if(temp__5720__auto__){
var seq__35013__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35013__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35013__$1);
var G__35031 = cljs.core.chunk_rest.call(null,seq__35013__$1);
var G__35032 = c__4550__auto__;
var G__35033 = cljs.core.count.call(null,c__4550__auto__);
var G__35034 = (0);
seq__35013 = G__35031;
chunk__35014 = G__35032;
count__35015 = G__35033;
i__35016 = G__35034;
continue;
} else {
var file = cljs.core.first.call(null,seq__35013__$1);
file.arrayBuffer().then(((function (seq__35013,chunk__35014,count__35015,i__35016,file,seq__35013__$1,temp__5720__auto__){
return (function (p1__35011_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__35011_SHARP_);
});})(seq__35013,chunk__35014,count__35015,i__35016,file,seq__35013__$1,temp__5720__auto__))
).then(((function (seq__35013,chunk__35014,count__35015,i__35016,file,seq__35013__$1,temp__5720__auto__){
return (function (p1__35012_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__35012_SHARP_);
});})(seq__35013,chunk__35014,count__35015,i__35016,file,seq__35013__$1,temp__5720__auto__))
);


var G__35035 = cljs.core.next.call(null,seq__35013__$1);
var G__35036 = null;
var G__35037 = (0);
var G__35038 = (0);
seq__35013 = G__35035;
chunk__35014 = G__35036;
count__35015 = G__35037;
i__35016 = G__35038;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__35017(s__35018){
return (new cljs.core.LazySeq(null,(function (){
var s__35018__$1 = s__35018;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__35018__$1);
if(temp__5720__auto__){
var s__35018__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35018__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__35018__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__35020 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__35019 = (0);
while(true){
if((i__35019 < size__4522__auto__)){
var vec__35021 = cljs.core._nth.call(null,c__4521__auto__,i__35019);
var name = cljs.core.nth.call(null,vec__35021,(0),null);
var buffer = cljs.core.nth.call(null,vec__35021,(1),null);
cljs.core.chunk_append.call(null,b__35020,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__35039 = (i__35019 + (1));
i__35019 = G__35039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35020),fugue$ctx_ctrls$buffer_ctrl_$_iter__35017.call(null,cljs.core.chunk_rest.call(null,s__35018__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35020),null);
}
} else {
var vec__35024 = cljs.core.first.call(null,s__35018__$2);
var name = cljs.core.nth.call(null,vec__35024,(0),null);
var buffer = cljs.core.nth.call(null,vec__35024,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__35017.call(null,cljs.core.rest.call(null,s__35018__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610381656182
