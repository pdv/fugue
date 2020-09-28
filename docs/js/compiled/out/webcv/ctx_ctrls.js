// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.ctx_ctrls');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('webcv.midi');
goog.require('webcv.audio');
webcv.ctx_ctrls.midi_monitor = (function webcv$ctx_ctrls$midi_monitor(midi_ctx){
var inputs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__34861_34961 = cljs.core.seq.call(null,new cljs.core.Keyword("webcv.midi","ins","webcv.midi/ins",1736405462).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34863_34962 = null;
var count__34864_34963 = (0);
var i__34865_34964 = (0);
while(true){
if((i__34865_34964 < count__34864_34963)){
var vec__34907_34965 = cljs.core._nth.call(null,chunk__34863_34962,i__34865_34964);
var in_name_34966 = cljs.core.nth.call(null,vec__34907_34965,(0),null);
var in_mult_34967 = cljs.core.nth.call(null,vec__34907_34965,(1),null);
var in_chan_34968 = cljs.core.async.chan.call(null);
var c__31702__auto___34969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34861_34961,chunk__34863_34962,count__34864_34963,i__34865_34964,c__31702__auto___34969,in_chan_34968,vec__34907_34965,in_name_34966,in_mult_34967,inputs){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (seq__34861_34961,chunk__34863_34962,count__34864_34963,i__34865_34964,c__31702__auto___34969,in_chan_34968,vec__34907_34965,in_name_34966,in_mult_34967,inputs){
return (function (state_34918){
var state_val_34919 = (state_34918[(1)]);
if((state_val_34919 === (1))){
var state_34918__$1 = state_34918;
var statearr_34920_34970 = state_34918__$1;
(statearr_34920_34970[(2)] = null);

(statearr_34920_34970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34919 === (2))){
var state_34918__$1 = state_34918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34918__$1,(4),in_chan_34968);
} else {
if((state_val_34919 === (3))){
var inst_34916 = (state_34918[(2)]);
var state_34918__$1 = state_34918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34918__$1,inst_34916);
} else {
if((state_val_34919 === (4))){
var inst_34912 = (state_34918[(2)]);
var inst_34913 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34966,inst_34912);
var state_34918__$1 = (function (){var statearr_34921 = state_34918;
(statearr_34921[(7)] = inst_34913);

return statearr_34921;
})();
var statearr_34922_34971 = state_34918__$1;
(statearr_34922_34971[(2)] = null);

(statearr_34922_34971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34861_34961,chunk__34863_34962,count__34864_34963,i__34865_34964,c__31702__auto___34969,in_chan_34968,vec__34907_34965,in_name_34966,in_mult_34967,inputs))
;
return ((function (seq__34861_34961,chunk__34863_34962,count__34864_34963,i__34865_34964,switch__31607__auto__,c__31702__auto___34969,in_chan_34968,vec__34907_34965,in_name_34966,in_mult_34967,inputs){
return (function() {
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto__ = null;
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto____0 = (function (){
var statearr_34923 = [null,null,null,null,null,null,null,null];
(statearr_34923[(0)] = webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto__);

(statearr_34923[(1)] = (1));

return statearr_34923;
});
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto____1 = (function (state_34918){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_34918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e34924){if((e34924 instanceof Object)){
var ex__31611__auto__ = e34924;
var statearr_34925_34972 = state_34918;
(statearr_34925_34972[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34973 = state_34918;
state_34918 = G__34973;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto__ = function(state_34918){
switch(arguments.length){
case 0:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto____0.call(this);
case 1:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto____1.call(this,state_34918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto____0;
webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto____1;
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto__;
})()
;})(seq__34861_34961,chunk__34863_34962,count__34864_34963,i__34865_34964,switch__31607__auto__,c__31702__auto___34969,in_chan_34968,vec__34907_34965,in_name_34966,in_mult_34967,inputs))
})();
var state__31704__auto__ = (function (){var statearr_34926 = f__31703__auto__.call(null);
(statearr_34926[(6)] = c__31702__auto___34969);

return statearr_34926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(seq__34861_34961,chunk__34863_34962,count__34864_34963,i__34865_34964,c__31702__auto___34969,in_chan_34968,vec__34907_34965,in_name_34966,in_mult_34967,inputs))
);


cljs.core.async.tap.call(null,in_mult_34967,in_chan_34968);


var G__34974 = seq__34861_34961;
var G__34975 = chunk__34863_34962;
var G__34976 = count__34864_34963;
var G__34977 = (i__34865_34964 + (1));
seq__34861_34961 = G__34974;
chunk__34863_34962 = G__34975;
count__34864_34963 = G__34976;
i__34865_34964 = G__34977;
continue;
} else {
var temp__5720__auto___34978 = cljs.core.seq.call(null,seq__34861_34961);
if(temp__5720__auto___34978){
var seq__34861_34979__$1 = temp__5720__auto___34978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34861_34979__$1)){
var c__4550__auto___34980 = cljs.core.chunk_first.call(null,seq__34861_34979__$1);
var G__34981 = cljs.core.chunk_rest.call(null,seq__34861_34979__$1);
var G__34982 = c__4550__auto___34980;
var G__34983 = cljs.core.count.call(null,c__4550__auto___34980);
var G__34984 = (0);
seq__34861_34961 = G__34981;
chunk__34863_34962 = G__34982;
count__34864_34963 = G__34983;
i__34865_34964 = G__34984;
continue;
} else {
var vec__34927_34985 = cljs.core.first.call(null,seq__34861_34979__$1);
var in_name_34986 = cljs.core.nth.call(null,vec__34927_34985,(0),null);
var in_mult_34987 = cljs.core.nth.call(null,vec__34927_34985,(1),null);
var in_chan_34988 = cljs.core.async.chan.call(null);
var c__31702__auto___34989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34861_34961,chunk__34863_34962,count__34864_34963,i__34865_34964,c__31702__auto___34989,in_chan_34988,vec__34927_34985,in_name_34986,in_mult_34987,seq__34861_34979__$1,temp__5720__auto___34978,inputs){
return (function (){
var f__31703__auto__ = (function (){var switch__31607__auto__ = ((function (seq__34861_34961,chunk__34863_34962,count__34864_34963,i__34865_34964,c__31702__auto___34989,in_chan_34988,vec__34927_34985,in_name_34986,in_mult_34987,seq__34861_34979__$1,temp__5720__auto___34978,inputs){
return (function (state_34938){
var state_val_34939 = (state_34938[(1)]);
if((state_val_34939 === (1))){
var state_34938__$1 = state_34938;
var statearr_34940_34990 = state_34938__$1;
(statearr_34940_34990[(2)] = null);

(statearr_34940_34990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (2))){
var state_34938__$1 = state_34938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34938__$1,(4),in_chan_34988);
} else {
if((state_val_34939 === (3))){
var inst_34936 = (state_34938[(2)]);
var state_34938__$1 = state_34938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34938__$1,inst_34936);
} else {
if((state_val_34939 === (4))){
var inst_34932 = (state_34938[(2)]);
var inst_34933 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34986,inst_34932);
var state_34938__$1 = (function (){var statearr_34941 = state_34938;
(statearr_34941[(7)] = inst_34933);

return statearr_34941;
})();
var statearr_34942_34991 = state_34938__$1;
(statearr_34942_34991[(2)] = null);

(statearr_34942_34991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34861_34961,chunk__34863_34962,count__34864_34963,i__34865_34964,c__31702__auto___34989,in_chan_34988,vec__34927_34985,in_name_34986,in_mult_34987,seq__34861_34979__$1,temp__5720__auto___34978,inputs))
;
return ((function (seq__34861_34961,chunk__34863_34962,count__34864_34963,i__34865_34964,switch__31607__auto__,c__31702__auto___34989,in_chan_34988,vec__34927_34985,in_name_34986,in_mult_34987,seq__34861_34979__$1,temp__5720__auto___34978,inputs){
return (function() {
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto__ = null;
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto____0 = (function (){
var statearr_34943 = [null,null,null,null,null,null,null,null];
(statearr_34943[(0)] = webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto__);

(statearr_34943[(1)] = (1));

return statearr_34943;
});
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto____1 = (function (state_34938){
while(true){
var ret_value__31609__auto__ = (function (){try{while(true){
var result__31610__auto__ = switch__31607__auto__.call(null,state_34938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31610__auto__;
}
break;
}
}catch (e34944){if((e34944 instanceof Object)){
var ex__31611__auto__ = e34944;
var statearr_34945_34992 = state_34938;
(statearr_34945_34992[(5)] = ex__31611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34993 = state_34938;
state_34938 = G__34993;
continue;
} else {
return ret_value__31609__auto__;
}
break;
}
});
webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto__ = function(state_34938){
switch(arguments.length){
case 0:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto____0.call(this);
case 1:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto____1.call(this,state_34938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto____0;
webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto____1;
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31608__auto__;
})()
;})(seq__34861_34961,chunk__34863_34962,count__34864_34963,i__34865_34964,switch__31607__auto__,c__31702__auto___34989,in_chan_34988,vec__34927_34985,in_name_34986,in_mult_34987,seq__34861_34979__$1,temp__5720__auto___34978,inputs))
})();
var state__31704__auto__ = (function (){var statearr_34946 = f__31703__auto__.call(null);
(statearr_34946[(6)] = c__31702__auto___34989);

return statearr_34946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31704__auto__);
});})(seq__34861_34961,chunk__34863_34962,count__34864_34963,i__34865_34964,c__31702__auto___34989,in_chan_34988,vec__34927_34985,in_name_34986,in_mult_34987,seq__34861_34979__$1,temp__5720__auto___34978,inputs))
);


cljs.core.async.tap.call(null,in_mult_34987,in_chan_34988);


var G__34994 = cljs.core.next.call(null,seq__34861_34979__$1);
var G__34995 = null;
var G__34996 = (0);
var G__34997 = (0);
seq__34861_34961 = G__34994;
chunk__34863_34962 = G__34995;
count__34864_34963 = G__34996;
i__34865_34964 = G__34997;
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
return (function webcv$ctx_ctrls$midi_monitor_$_iter__34947(s__34948){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34948__$1 = s__34948;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34948__$1);
if(temp__5720__auto__){
var s__34948__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34948__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34948__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34950 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34949 = (0);
while(true){
if((i__34949 < size__4522__auto__)){
var vec__34951 = cljs.core._nth.call(null,c__4521__auto__,i__34949);
var in_name = cljs.core.nth.call(null,vec__34951,(0),null);
var map__34954 = cljs.core.nth.call(null,vec__34951,(1),null);
var map__34954__$1 = (((((!((map__34954 == null))))?(((((map__34954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34954):map__34954);
var type = cljs.core.get.call(null,map__34954__$1,new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868));
var note = cljs.core.get.call(null,map__34954__$1,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544));
var velocity = cljs.core.get.call(null,map__34954__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
cljs.core.chunk_append.call(null,b__34950,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__34998 = (i__34949 + (1));
i__34949 = G__34998;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34950),webcv$ctx_ctrls$midi_monitor_$_iter__34947.call(null,cljs.core.chunk_rest.call(null,s__34948__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34950),null);
}
} else {
var vec__34956 = cljs.core.first.call(null,s__34948__$2);
var in_name = cljs.core.nth.call(null,vec__34956,(0),null);
var map__34959 = cljs.core.nth.call(null,vec__34956,(1),null);
var map__34959__$1 = (((((!((map__34959 == null))))?(((((map__34959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34959):map__34959);
var type = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868));
var note = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544));
var velocity = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),webcv$ctx_ctrls$midi_monitor_$_iter__34947.call(null,cljs.core.rest.call(null,s__34948__$2)));
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
var temp__5718__auto___35001 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___35001)){
var old_ctx_35002 = temp__5718__auto___35001;
new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438).cljs$core$IFn$_invoke$arity$1(old_ctx_35002).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,webcv.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34999 = temp__5718__auto__;
var map__34999__$1 = (((((!((map__34999 == null))))?(((((map__34999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34999):map__34999);
var actx = cljs.core.get.call(null,map__34999__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(actx.destination.maxChannelCount)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null)], null);
});

//# sourceMappingURL=ctx_ctrls.js.map?rel=1601267806979
