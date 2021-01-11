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
var seq__34864_34964 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34866_34965 = null;
var count__34867_34966 = (0);
var i__34868_34967 = (0);
while(true){
if((i__34868_34967 < count__34867_34966)){
var vec__34910_34968 = cljs.core._nth.call(null,chunk__34866_34965,i__34868_34967);
var in_name_34969 = cljs.core.nth.call(null,vec__34910_34968,(0),null);
var in_mult_34970 = cljs.core.nth.call(null,vec__34910_34968,(1),null);
var in_chan_34971 = cljs.core.async.chan.call(null);
var c__32691__auto___34972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34864_34964,chunk__34866_34965,count__34867_34966,i__34868_34967,c__32691__auto___34972,in_chan_34971,vec__34910_34968,in_name_34969,in_mult_34970,inputs){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (seq__34864_34964,chunk__34866_34965,count__34867_34966,i__34868_34967,c__32691__auto___34972,in_chan_34971,vec__34910_34968,in_name_34969,in_mult_34970,inputs){
return (function (state_34921){
var state_val_34922 = (state_34921[(1)]);
if((state_val_34922 === (1))){
var state_34921__$1 = state_34921;
var statearr_34923_34973 = state_34921__$1;
(statearr_34923_34973[(2)] = null);

(statearr_34923_34973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34922 === (2))){
var state_34921__$1 = state_34921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34921__$1,(4),in_chan_34971);
} else {
if((state_val_34922 === (3))){
var inst_34919 = (state_34921[(2)]);
var state_34921__$1 = state_34921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34921__$1,inst_34919);
} else {
if((state_val_34922 === (4))){
var inst_34915 = (state_34921[(2)]);
var inst_34916 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34969,inst_34915);
var state_34921__$1 = (function (){var statearr_34924 = state_34921;
(statearr_34924[(7)] = inst_34916);

return statearr_34924;
})();
var statearr_34925_34974 = state_34921__$1;
(statearr_34925_34974[(2)] = null);

(statearr_34925_34974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34864_34964,chunk__34866_34965,count__34867_34966,i__34868_34967,c__32691__auto___34972,in_chan_34971,vec__34910_34968,in_name_34969,in_mult_34970,inputs))
;
return ((function (seq__34864_34964,chunk__34866_34965,count__34867_34966,i__34868_34967,switch__32596__auto__,c__32691__auto___34972,in_chan_34971,vec__34910_34968,in_name_34969,in_mult_34970,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0 = (function (){
var statearr_34926 = [null,null,null,null,null,null,null,null];
(statearr_34926[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__);

(statearr_34926[(1)] = (1));

return statearr_34926;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1 = (function (state_34921){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_34921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e34927){if((e34927 instanceof Object)){
var ex__32600__auto__ = e34927;
var statearr_34928_34975 = state_34921;
(statearr_34928_34975[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34976 = state_34921;
state_34921 = G__34976;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__ = function(state_34921){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1.call(this,state_34921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__;
})()
;})(seq__34864_34964,chunk__34866_34965,count__34867_34966,i__34868_34967,switch__32596__auto__,c__32691__auto___34972,in_chan_34971,vec__34910_34968,in_name_34969,in_mult_34970,inputs))
})();
var state__32693__auto__ = (function (){var statearr_34929 = f__32692__auto__.call(null);
(statearr_34929[(6)] = c__32691__auto___34972);

return statearr_34929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(seq__34864_34964,chunk__34866_34965,count__34867_34966,i__34868_34967,c__32691__auto___34972,in_chan_34971,vec__34910_34968,in_name_34969,in_mult_34970,inputs))
);


cljs.core.async.tap.call(null,in_mult_34970,in_chan_34971);


var G__34977 = seq__34864_34964;
var G__34978 = chunk__34866_34965;
var G__34979 = count__34867_34966;
var G__34980 = (i__34868_34967 + (1));
seq__34864_34964 = G__34977;
chunk__34866_34965 = G__34978;
count__34867_34966 = G__34979;
i__34868_34967 = G__34980;
continue;
} else {
var temp__5720__auto___34981 = cljs.core.seq.call(null,seq__34864_34964);
if(temp__5720__auto___34981){
var seq__34864_34982__$1 = temp__5720__auto___34981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34864_34982__$1)){
var c__4550__auto___34983 = cljs.core.chunk_first.call(null,seq__34864_34982__$1);
var G__34984 = cljs.core.chunk_rest.call(null,seq__34864_34982__$1);
var G__34985 = c__4550__auto___34983;
var G__34986 = cljs.core.count.call(null,c__4550__auto___34983);
var G__34987 = (0);
seq__34864_34964 = G__34984;
chunk__34866_34965 = G__34985;
count__34867_34966 = G__34986;
i__34868_34967 = G__34987;
continue;
} else {
var vec__34930_34988 = cljs.core.first.call(null,seq__34864_34982__$1);
var in_name_34989 = cljs.core.nth.call(null,vec__34930_34988,(0),null);
var in_mult_34990 = cljs.core.nth.call(null,vec__34930_34988,(1),null);
var in_chan_34991 = cljs.core.async.chan.call(null);
var c__32691__auto___34992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34864_34964,chunk__34866_34965,count__34867_34966,i__34868_34967,c__32691__auto___34992,in_chan_34991,vec__34930_34988,in_name_34989,in_mult_34990,seq__34864_34982__$1,temp__5720__auto___34981,inputs){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (seq__34864_34964,chunk__34866_34965,count__34867_34966,i__34868_34967,c__32691__auto___34992,in_chan_34991,vec__34930_34988,in_name_34989,in_mult_34990,seq__34864_34982__$1,temp__5720__auto___34981,inputs){
return (function (state_34941){
var state_val_34942 = (state_34941[(1)]);
if((state_val_34942 === (1))){
var state_34941__$1 = state_34941;
var statearr_34943_34993 = state_34941__$1;
(statearr_34943_34993[(2)] = null);

(statearr_34943_34993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34942 === (2))){
var state_34941__$1 = state_34941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34941__$1,(4),in_chan_34991);
} else {
if((state_val_34942 === (3))){
var inst_34939 = (state_34941[(2)]);
var state_34941__$1 = state_34941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34941__$1,inst_34939);
} else {
if((state_val_34942 === (4))){
var inst_34935 = (state_34941[(2)]);
var inst_34936 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34989,inst_34935);
var state_34941__$1 = (function (){var statearr_34944 = state_34941;
(statearr_34944[(7)] = inst_34936);

return statearr_34944;
})();
var statearr_34945_34994 = state_34941__$1;
(statearr_34945_34994[(2)] = null);

(statearr_34945_34994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34864_34964,chunk__34866_34965,count__34867_34966,i__34868_34967,c__32691__auto___34992,in_chan_34991,vec__34930_34988,in_name_34989,in_mult_34990,seq__34864_34982__$1,temp__5720__auto___34981,inputs))
;
return ((function (seq__34864_34964,chunk__34866_34965,count__34867_34966,i__34868_34967,switch__32596__auto__,c__32691__auto___34992,in_chan_34991,vec__34930_34988,in_name_34989,in_mult_34990,seq__34864_34982__$1,temp__5720__auto___34981,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0 = (function (){
var statearr_34946 = [null,null,null,null,null,null,null,null];
(statearr_34946[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__);

(statearr_34946[(1)] = (1));

return statearr_34946;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1 = (function (state_34941){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_34941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e34947){if((e34947 instanceof Object)){
var ex__32600__auto__ = e34947;
var statearr_34948_34995 = state_34941;
(statearr_34948_34995[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34996 = state_34941;
state_34941 = G__34996;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__ = function(state_34941){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1.call(this,state_34941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32597__auto__;
})()
;})(seq__34864_34964,chunk__34866_34965,count__34867_34966,i__34868_34967,switch__32596__auto__,c__32691__auto___34992,in_chan_34991,vec__34930_34988,in_name_34989,in_mult_34990,seq__34864_34982__$1,temp__5720__auto___34981,inputs))
})();
var state__32693__auto__ = (function (){var statearr_34949 = f__32692__auto__.call(null);
(statearr_34949[(6)] = c__32691__auto___34992);

return statearr_34949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(seq__34864_34964,chunk__34866_34965,count__34867_34966,i__34868_34967,c__32691__auto___34992,in_chan_34991,vec__34930_34988,in_name_34989,in_mult_34990,seq__34864_34982__$1,temp__5720__auto___34981,inputs))
);


cljs.core.async.tap.call(null,in_mult_34990,in_chan_34991);


var G__34997 = cljs.core.next.call(null,seq__34864_34982__$1);
var G__34998 = null;
var G__34999 = (0);
var G__35000 = (0);
seq__34864_34964 = G__34997;
chunk__34866_34965 = G__34998;
count__34867_34966 = G__34999;
i__34868_34967 = G__35000;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34950(s__34951){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34951__$1 = s__34951;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34951__$1);
if(temp__5720__auto__){
var s__34951__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34951__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34951__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34953 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34952 = (0);
while(true){
if((i__34952 < size__4522__auto__)){
var vec__34954 = cljs.core._nth.call(null,c__4521__auto__,i__34952);
var in_name = cljs.core.nth.call(null,vec__34954,(0),null);
var map__34957 = cljs.core.nth.call(null,vec__34954,(1),null);
var map__34957__$1 = (((((!((map__34957 == null))))?(((((map__34957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34957):map__34957);
var type = cljs.core.get.call(null,map__34957__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34957__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34957__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__34953,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__35001 = (i__34952 + (1));
i__34952 = G__35001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34953),fugue$ctx_ctrls$midi_monitor_$_iter__34950.call(null,cljs.core.chunk_rest.call(null,s__34951__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34953),null);
}
} else {
var vec__34959 = cljs.core.first.call(null,s__34951__$2);
var in_name = cljs.core.nth.call(null,vec__34959,(0),null);
var map__34962 = cljs.core.nth.call(null,vec__34959,(1),null);
var map__34962__$1 = (((((!((map__34962 == null))))?(((((map__34962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34962):map__34962);
var type = cljs.core.get.call(null,map__34962__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34962__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34962__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34950.call(null,cljs.core.rest.call(null,s__34951__$2)));
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
var temp__5718__auto___35005 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___35005)){
var old_ctx_35006 = temp__5718__auto___35005;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_35006).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__35003 = temp__5718__auto__;
var map__35003__$1 = (((((!((map__35003 == null))))?(((((map__35003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35003):map__35003);
var outs = cljs.core.get.call(null,map__35003__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__35002_SHARP_){
return console.log(p1__35002_SHARP_);
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
var seq__35009 = cljs.core.seq.call(null,files);
var chunk__35010 = null;
var count__35011 = (0);
var i__35012 = (0);
while(true){
if((i__35012 < count__35011)){
var file = cljs.core._nth.call(null,chunk__35010,i__35012);
file.arrayBuffer().then(((function (seq__35009,chunk__35010,count__35011,i__35012,file,files){
return (function (p1__35007_SHARP_){
return actx.decodeAudioData(p1__35007_SHARP_);
});})(seq__35009,chunk__35010,count__35011,i__35012,file,files))
).then(((function (seq__35009,chunk__35010,count__35011,i__35012,file,files){
return (function (p1__35008_SHARP_){
return buffer_cb.call(null,file.name,p1__35008_SHARP_);
});})(seq__35009,chunk__35010,count__35011,i__35012,file,files))
);


var G__35013 = seq__35009;
var G__35014 = chunk__35010;
var G__35015 = count__35011;
var G__35016 = (i__35012 + (1));
seq__35009 = G__35013;
chunk__35010 = G__35014;
count__35011 = G__35015;
i__35012 = G__35016;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35009);
if(temp__5720__auto__){
var seq__35009__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35009__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35009__$1);
var G__35017 = cljs.core.chunk_rest.call(null,seq__35009__$1);
var G__35018 = c__4550__auto__;
var G__35019 = cljs.core.count.call(null,c__4550__auto__);
var G__35020 = (0);
seq__35009 = G__35017;
chunk__35010 = G__35018;
count__35011 = G__35019;
i__35012 = G__35020;
continue;
} else {
var file = cljs.core.first.call(null,seq__35009__$1);
file.arrayBuffer().then(((function (seq__35009,chunk__35010,count__35011,i__35012,file,seq__35009__$1,temp__5720__auto__,files){
return (function (p1__35007_SHARP_){
return actx.decodeAudioData(p1__35007_SHARP_);
});})(seq__35009,chunk__35010,count__35011,i__35012,file,seq__35009__$1,temp__5720__auto__,files))
).then(((function (seq__35009,chunk__35010,count__35011,i__35012,file,seq__35009__$1,temp__5720__auto__,files){
return (function (p1__35008_SHARP_){
return buffer_cb.call(null,file.name,p1__35008_SHARP_);
});})(seq__35009,chunk__35010,count__35011,i__35012,file,seq__35009__$1,temp__5720__auto__,files))
);


var G__35021 = cljs.core.next.call(null,seq__35009__$1);
var G__35022 = null;
var G__35023 = (0);
var G__35024 = (0);
seq__35009 = G__35021;
chunk__35010 = G__35022;
count__35011 = G__35023;
i__35012 = G__35024;
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
var seq__35027 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__35028 = null;
var count__35029 = (0);
var i__35030 = (0);
while(true){
if((i__35030 < count__35029)){
var file = cljs.core._nth.call(null,chunk__35028,i__35030);
file.arrayBuffer().then(((function (seq__35027,chunk__35028,count__35029,i__35030,file){
return (function (p1__35025_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__35025_SHARP_);
});})(seq__35027,chunk__35028,count__35029,i__35030,file))
).then(((function (seq__35027,chunk__35028,count__35029,i__35030,file){
return (function (p1__35026_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__35026_SHARP_);
});})(seq__35027,chunk__35028,count__35029,i__35030,file))
);


var G__35041 = seq__35027;
var G__35042 = chunk__35028;
var G__35043 = count__35029;
var G__35044 = (i__35030 + (1));
seq__35027 = G__35041;
chunk__35028 = G__35042;
count__35029 = G__35043;
i__35030 = G__35044;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35027);
if(temp__5720__auto__){
var seq__35027__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35027__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35027__$1);
var G__35045 = cljs.core.chunk_rest.call(null,seq__35027__$1);
var G__35046 = c__4550__auto__;
var G__35047 = cljs.core.count.call(null,c__4550__auto__);
var G__35048 = (0);
seq__35027 = G__35045;
chunk__35028 = G__35046;
count__35029 = G__35047;
i__35030 = G__35048;
continue;
} else {
var file = cljs.core.first.call(null,seq__35027__$1);
file.arrayBuffer().then(((function (seq__35027,chunk__35028,count__35029,i__35030,file,seq__35027__$1,temp__5720__auto__){
return (function (p1__35025_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__35025_SHARP_);
});})(seq__35027,chunk__35028,count__35029,i__35030,file,seq__35027__$1,temp__5720__auto__))
).then(((function (seq__35027,chunk__35028,count__35029,i__35030,file,seq__35027__$1,temp__5720__auto__){
return (function (p1__35026_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__35026_SHARP_);
});})(seq__35027,chunk__35028,count__35029,i__35030,file,seq__35027__$1,temp__5720__auto__))
);


var G__35049 = cljs.core.next.call(null,seq__35027__$1);
var G__35050 = null;
var G__35051 = (0);
var G__35052 = (0);
seq__35027 = G__35049;
chunk__35028 = G__35050;
count__35029 = G__35051;
i__35030 = G__35052;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__35031(s__35032){
return (new cljs.core.LazySeq(null,(function (){
var s__35032__$1 = s__35032;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__35032__$1);
if(temp__5720__auto__){
var s__35032__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35032__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__35032__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__35034 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__35033 = (0);
while(true){
if((i__35033 < size__4522__auto__)){
var vec__35035 = cljs.core._nth.call(null,c__4521__auto__,i__35033);
var name = cljs.core.nth.call(null,vec__35035,(0),null);
var buffer = cljs.core.nth.call(null,vec__35035,(1),null);
cljs.core.chunk_append.call(null,b__35034,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__35053 = (i__35033 + (1));
i__35033 = G__35053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35034),fugue$ctx_ctrls$buffer_ctrl_$_iter__35031.call(null,cljs.core.chunk_rest.call(null,s__35032__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35034),null);
}
} else {
var vec__35038 = cljs.core.first.call(null,s__35032__$2);
var name = cljs.core.nth.call(null,vec__35038,(0),null);
var buffer = cljs.core.nth.call(null,vec__35038,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__35031.call(null,cljs.core.rest.call(null,s__35032__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610334750389
