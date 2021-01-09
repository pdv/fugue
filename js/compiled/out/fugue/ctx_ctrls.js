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
var seq__34839_34939 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34841_34940 = null;
var count__34842_34941 = (0);
var i__34843_34942 = (0);
while(true){
if((i__34843_34942 < count__34842_34941)){
var vec__34885_34943 = cljs.core._nth.call(null,chunk__34841_34940,i__34843_34942);
var in_name_34944 = cljs.core.nth.call(null,vec__34885_34943,(0),null);
var in_mult_34945 = cljs.core.nth.call(null,vec__34885_34943,(1),null);
var in_chan_34946 = cljs.core.async.chan.call(null);
var c__32685__auto___34947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34839_34939,chunk__34841_34940,count__34842_34941,i__34843_34942,c__32685__auto___34947,in_chan_34946,vec__34885_34943,in_name_34944,in_mult_34945,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34839_34939,chunk__34841_34940,count__34842_34941,i__34843_34942,c__32685__auto___34947,in_chan_34946,vec__34885_34943,in_name_34944,in_mult_34945,inputs){
return (function (state_34896){
var state_val_34897 = (state_34896[(1)]);
if((state_val_34897 === (1))){
var state_34896__$1 = state_34896;
var statearr_34898_34948 = state_34896__$1;
(statearr_34898_34948[(2)] = null);

(statearr_34898_34948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34897 === (2))){
var state_34896__$1 = state_34896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34896__$1,(4),in_chan_34946);
} else {
if((state_val_34897 === (3))){
var inst_34894 = (state_34896[(2)]);
var state_34896__$1 = state_34896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34896__$1,inst_34894);
} else {
if((state_val_34897 === (4))){
var inst_34890 = (state_34896[(2)]);
var inst_34891 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34944,inst_34890);
var state_34896__$1 = (function (){var statearr_34899 = state_34896;
(statearr_34899[(7)] = inst_34891);

return statearr_34899;
})();
var statearr_34900_34949 = state_34896__$1;
(statearr_34900_34949[(2)] = null);

(statearr_34900_34949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34839_34939,chunk__34841_34940,count__34842_34941,i__34843_34942,c__32685__auto___34947,in_chan_34946,vec__34885_34943,in_name_34944,in_mult_34945,inputs))
;
return ((function (seq__34839_34939,chunk__34841_34940,count__34842_34941,i__34843_34942,switch__32590__auto__,c__32685__auto___34947,in_chan_34946,vec__34885_34943,in_name_34944,in_mult_34945,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34901 = [null,null,null,null,null,null,null,null];
(statearr_34901[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34901[(1)] = (1));

return statearr_34901;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34896){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34902){if((e34902 instanceof Object)){
var ex__32594__auto__ = e34902;
var statearr_34903_34950 = state_34896;
(statearr_34903_34950[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34951 = state_34896;
state_34896 = G__34951;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34896){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34839_34939,chunk__34841_34940,count__34842_34941,i__34843_34942,switch__32590__auto__,c__32685__auto___34947,in_chan_34946,vec__34885_34943,in_name_34944,in_mult_34945,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34904 = f__32686__auto__.call(null);
(statearr_34904[(6)] = c__32685__auto___34947);

return statearr_34904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34839_34939,chunk__34841_34940,count__34842_34941,i__34843_34942,c__32685__auto___34947,in_chan_34946,vec__34885_34943,in_name_34944,in_mult_34945,inputs))
);


cljs.core.async.tap.call(null,in_mult_34945,in_chan_34946);


var G__34952 = seq__34839_34939;
var G__34953 = chunk__34841_34940;
var G__34954 = count__34842_34941;
var G__34955 = (i__34843_34942 + (1));
seq__34839_34939 = G__34952;
chunk__34841_34940 = G__34953;
count__34842_34941 = G__34954;
i__34843_34942 = G__34955;
continue;
} else {
var temp__5720__auto___34956 = cljs.core.seq.call(null,seq__34839_34939);
if(temp__5720__auto___34956){
var seq__34839_34957__$1 = temp__5720__auto___34956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34839_34957__$1)){
var c__4550__auto___34958 = cljs.core.chunk_first.call(null,seq__34839_34957__$1);
var G__34959 = cljs.core.chunk_rest.call(null,seq__34839_34957__$1);
var G__34960 = c__4550__auto___34958;
var G__34961 = cljs.core.count.call(null,c__4550__auto___34958);
var G__34962 = (0);
seq__34839_34939 = G__34959;
chunk__34841_34940 = G__34960;
count__34842_34941 = G__34961;
i__34843_34942 = G__34962;
continue;
} else {
var vec__34905_34963 = cljs.core.first.call(null,seq__34839_34957__$1);
var in_name_34964 = cljs.core.nth.call(null,vec__34905_34963,(0),null);
var in_mult_34965 = cljs.core.nth.call(null,vec__34905_34963,(1),null);
var in_chan_34966 = cljs.core.async.chan.call(null);
var c__32685__auto___34967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34839_34939,chunk__34841_34940,count__34842_34941,i__34843_34942,c__32685__auto___34967,in_chan_34966,vec__34905_34963,in_name_34964,in_mult_34965,seq__34839_34957__$1,temp__5720__auto___34956,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34839_34939,chunk__34841_34940,count__34842_34941,i__34843_34942,c__32685__auto___34967,in_chan_34966,vec__34905_34963,in_name_34964,in_mult_34965,seq__34839_34957__$1,temp__5720__auto___34956,inputs){
return (function (state_34916){
var state_val_34917 = (state_34916[(1)]);
if((state_val_34917 === (1))){
var state_34916__$1 = state_34916;
var statearr_34918_34968 = state_34916__$1;
(statearr_34918_34968[(2)] = null);

(statearr_34918_34968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34917 === (2))){
var state_34916__$1 = state_34916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34916__$1,(4),in_chan_34966);
} else {
if((state_val_34917 === (3))){
var inst_34914 = (state_34916[(2)]);
var state_34916__$1 = state_34916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34916__$1,inst_34914);
} else {
if((state_val_34917 === (4))){
var inst_34910 = (state_34916[(2)]);
var inst_34911 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34964,inst_34910);
var state_34916__$1 = (function (){var statearr_34919 = state_34916;
(statearr_34919[(7)] = inst_34911);

return statearr_34919;
})();
var statearr_34920_34969 = state_34916__$1;
(statearr_34920_34969[(2)] = null);

(statearr_34920_34969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34839_34939,chunk__34841_34940,count__34842_34941,i__34843_34942,c__32685__auto___34967,in_chan_34966,vec__34905_34963,in_name_34964,in_mult_34965,seq__34839_34957__$1,temp__5720__auto___34956,inputs))
;
return ((function (seq__34839_34939,chunk__34841_34940,count__34842_34941,i__34843_34942,switch__32590__auto__,c__32685__auto___34967,in_chan_34966,vec__34905_34963,in_name_34964,in_mult_34965,seq__34839_34957__$1,temp__5720__auto___34956,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34921 = [null,null,null,null,null,null,null,null];
(statearr_34921[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34921[(1)] = (1));

return statearr_34921;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34916){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34922){if((e34922 instanceof Object)){
var ex__32594__auto__ = e34922;
var statearr_34923_34970 = state_34916;
(statearr_34923_34970[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34971 = state_34916;
state_34916 = G__34971;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34916){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34839_34939,chunk__34841_34940,count__34842_34941,i__34843_34942,switch__32590__auto__,c__32685__auto___34967,in_chan_34966,vec__34905_34963,in_name_34964,in_mult_34965,seq__34839_34957__$1,temp__5720__auto___34956,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34924 = f__32686__auto__.call(null);
(statearr_34924[(6)] = c__32685__auto___34967);

return statearr_34924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34839_34939,chunk__34841_34940,count__34842_34941,i__34843_34942,c__32685__auto___34967,in_chan_34966,vec__34905_34963,in_name_34964,in_mult_34965,seq__34839_34957__$1,temp__5720__auto___34956,inputs))
);


cljs.core.async.tap.call(null,in_mult_34965,in_chan_34966);


var G__34972 = cljs.core.next.call(null,seq__34839_34957__$1);
var G__34973 = null;
var G__34974 = (0);
var G__34975 = (0);
seq__34839_34939 = G__34972;
chunk__34841_34940 = G__34973;
count__34842_34941 = G__34974;
i__34843_34942 = G__34975;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34925(s__34926){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34926__$1 = s__34926;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34926__$1);
if(temp__5720__auto__){
var s__34926__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34926__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34926__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34928 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34927 = (0);
while(true){
if((i__34927 < size__4522__auto__)){
var vec__34929 = cljs.core._nth.call(null,c__4521__auto__,i__34927);
var in_name = cljs.core.nth.call(null,vec__34929,(0),null);
var map__34932 = cljs.core.nth.call(null,vec__34929,(1),null);
var map__34932__$1 = (((((!((map__34932 == null))))?(((((map__34932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34932):map__34932);
var type = cljs.core.get.call(null,map__34932__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34932__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34932__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__34928,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__34976 = (i__34927 + (1));
i__34927 = G__34976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34928),fugue$ctx_ctrls$midi_monitor_$_iter__34925.call(null,cljs.core.chunk_rest.call(null,s__34926__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34928),null);
}
} else {
var vec__34934 = cljs.core.first.call(null,s__34926__$2);
var in_name = cljs.core.nth.call(null,vec__34934,(0),null);
var map__34937 = cljs.core.nth.call(null,vec__34934,(1),null);
var map__34937__$1 = (((((!((map__34937 == null))))?(((((map__34937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34937):map__34937);
var type = cljs.core.get.call(null,map__34937__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34937__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34937__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34925.call(null,cljs.core.rest.call(null,s__34926__$2)));
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
var temp__5718__auto___34980 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34980)){
var old_ctx_34981 = temp__5718__auto___34980;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_34981).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34978 = temp__5718__auto__;
var map__34978__$1 = (((((!((map__34978 == null))))?(((((map__34978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34978):map__34978);
var outs = cljs.core.get.call(null,map__34978__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__34977_SHARP_){
return console.log(p1__34977_SHARP_);
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
var seq__34984 = cljs.core.seq.call(null,files);
var chunk__34985 = null;
var count__34986 = (0);
var i__34987 = (0);
while(true){
if((i__34987 < count__34986)){
var file = cljs.core._nth.call(null,chunk__34985,i__34987);
file.arrayBuffer().then(((function (seq__34984,chunk__34985,count__34986,i__34987,file,files){
return (function (p1__34982_SHARP_){
return actx.decodeAudioData(p1__34982_SHARP_);
});})(seq__34984,chunk__34985,count__34986,i__34987,file,files))
).then(((function (seq__34984,chunk__34985,count__34986,i__34987,file,files){
return (function (p1__34983_SHARP_){
return buffer_cb.call(null,file.name,p1__34983_SHARP_);
});})(seq__34984,chunk__34985,count__34986,i__34987,file,files))
);


var G__34988 = seq__34984;
var G__34989 = chunk__34985;
var G__34990 = count__34986;
var G__34991 = (i__34987 + (1));
seq__34984 = G__34988;
chunk__34985 = G__34989;
count__34986 = G__34990;
i__34987 = G__34991;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34984);
if(temp__5720__auto__){
var seq__34984__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34984__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34984__$1);
var G__34992 = cljs.core.chunk_rest.call(null,seq__34984__$1);
var G__34993 = c__4550__auto__;
var G__34994 = cljs.core.count.call(null,c__4550__auto__);
var G__34995 = (0);
seq__34984 = G__34992;
chunk__34985 = G__34993;
count__34986 = G__34994;
i__34987 = G__34995;
continue;
} else {
var file = cljs.core.first.call(null,seq__34984__$1);
file.arrayBuffer().then(((function (seq__34984,chunk__34985,count__34986,i__34987,file,seq__34984__$1,temp__5720__auto__,files){
return (function (p1__34982_SHARP_){
return actx.decodeAudioData(p1__34982_SHARP_);
});})(seq__34984,chunk__34985,count__34986,i__34987,file,seq__34984__$1,temp__5720__auto__,files))
).then(((function (seq__34984,chunk__34985,count__34986,i__34987,file,seq__34984__$1,temp__5720__auto__,files){
return (function (p1__34983_SHARP_){
return buffer_cb.call(null,file.name,p1__34983_SHARP_);
});})(seq__34984,chunk__34985,count__34986,i__34987,file,seq__34984__$1,temp__5720__auto__,files))
);


var G__34996 = cljs.core.next.call(null,seq__34984__$1);
var G__34997 = null;
var G__34998 = (0);
var G__34999 = (0);
seq__34984 = G__34996;
chunk__34985 = G__34997;
count__34986 = G__34998;
i__34987 = G__34999;
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
var seq__35002 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__35003 = null;
var count__35004 = (0);
var i__35005 = (0);
while(true){
if((i__35005 < count__35004)){
var file = cljs.core._nth.call(null,chunk__35003,i__35005);
file.arrayBuffer().then(((function (seq__35002,chunk__35003,count__35004,i__35005,file){
return (function (p1__35000_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__35000_SHARP_);
});})(seq__35002,chunk__35003,count__35004,i__35005,file))
).then(((function (seq__35002,chunk__35003,count__35004,i__35005,file){
return (function (p1__35001_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__35001_SHARP_);
});})(seq__35002,chunk__35003,count__35004,i__35005,file))
);


var G__35016 = seq__35002;
var G__35017 = chunk__35003;
var G__35018 = count__35004;
var G__35019 = (i__35005 + (1));
seq__35002 = G__35016;
chunk__35003 = G__35017;
count__35004 = G__35018;
i__35005 = G__35019;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35002);
if(temp__5720__auto__){
var seq__35002__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35002__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35002__$1);
var G__35020 = cljs.core.chunk_rest.call(null,seq__35002__$1);
var G__35021 = c__4550__auto__;
var G__35022 = cljs.core.count.call(null,c__4550__auto__);
var G__35023 = (0);
seq__35002 = G__35020;
chunk__35003 = G__35021;
count__35004 = G__35022;
i__35005 = G__35023;
continue;
} else {
var file = cljs.core.first.call(null,seq__35002__$1);
file.arrayBuffer().then(((function (seq__35002,chunk__35003,count__35004,i__35005,file,seq__35002__$1,temp__5720__auto__){
return (function (p1__35000_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__35000_SHARP_);
});})(seq__35002,chunk__35003,count__35004,i__35005,file,seq__35002__$1,temp__5720__auto__))
).then(((function (seq__35002,chunk__35003,count__35004,i__35005,file,seq__35002__$1,temp__5720__auto__){
return (function (p1__35001_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__35001_SHARP_);
});})(seq__35002,chunk__35003,count__35004,i__35005,file,seq__35002__$1,temp__5720__auto__))
);


var G__35024 = cljs.core.next.call(null,seq__35002__$1);
var G__35025 = null;
var G__35026 = (0);
var G__35027 = (0);
seq__35002 = G__35024;
chunk__35003 = G__35025;
count__35004 = G__35026;
i__35005 = G__35027;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__35006(s__35007){
return (new cljs.core.LazySeq(null,(function (){
var s__35007__$1 = s__35007;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__35007__$1);
if(temp__5720__auto__){
var s__35007__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35007__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__35007__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__35009 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__35008 = (0);
while(true){
if((i__35008 < size__4522__auto__)){
var vec__35010 = cljs.core._nth.call(null,c__4521__auto__,i__35008);
var name = cljs.core.nth.call(null,vec__35010,(0),null);
var buffer = cljs.core.nth.call(null,vec__35010,(1),null);
cljs.core.chunk_append.call(null,b__35009,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__35028 = (i__35008 + (1));
i__35008 = G__35028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35009),fugue$ctx_ctrls$buffer_ctrl_$_iter__35006.call(null,cljs.core.chunk_rest.call(null,s__35007__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35009),null);
}
} else {
var vec__35013 = cljs.core.first.call(null,s__35007__$2);
var name = cljs.core.nth.call(null,vec__35013,(0),null);
var buffer = cljs.core.nth.call(null,vec__35013,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__35006.call(null,cljs.core.rest.call(null,s__35007__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610221077369
