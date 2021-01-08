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
var seq__34825_34925 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34827_34926 = null;
var count__34828_34927 = (0);
var i__34829_34928 = (0);
while(true){
if((i__34829_34928 < count__34828_34927)){
var vec__34871_34929 = cljs.core._nth.call(null,chunk__34827_34926,i__34829_34928);
var in_name_34930 = cljs.core.nth.call(null,vec__34871_34929,(0),null);
var in_mult_34931 = cljs.core.nth.call(null,vec__34871_34929,(1),null);
var in_chan_34932 = cljs.core.async.chan.call(null);
var c__32685__auto___34933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34825_34925,chunk__34827_34926,count__34828_34927,i__34829_34928,c__32685__auto___34933,in_chan_34932,vec__34871_34929,in_name_34930,in_mult_34931,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34825_34925,chunk__34827_34926,count__34828_34927,i__34829_34928,c__32685__auto___34933,in_chan_34932,vec__34871_34929,in_name_34930,in_mult_34931,inputs){
return (function (state_34882){
var state_val_34883 = (state_34882[(1)]);
if((state_val_34883 === (1))){
var state_34882__$1 = state_34882;
var statearr_34884_34934 = state_34882__$1;
(statearr_34884_34934[(2)] = null);

(statearr_34884_34934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34883 === (2))){
var state_34882__$1 = state_34882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34882__$1,(4),in_chan_34932);
} else {
if((state_val_34883 === (3))){
var inst_34880 = (state_34882[(2)]);
var state_34882__$1 = state_34882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34882__$1,inst_34880);
} else {
if((state_val_34883 === (4))){
var inst_34876 = (state_34882[(2)]);
var inst_34877 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34930,inst_34876);
var state_34882__$1 = (function (){var statearr_34885 = state_34882;
(statearr_34885[(7)] = inst_34877);

return statearr_34885;
})();
var statearr_34886_34935 = state_34882__$1;
(statearr_34886_34935[(2)] = null);

(statearr_34886_34935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34825_34925,chunk__34827_34926,count__34828_34927,i__34829_34928,c__32685__auto___34933,in_chan_34932,vec__34871_34929,in_name_34930,in_mult_34931,inputs))
;
return ((function (seq__34825_34925,chunk__34827_34926,count__34828_34927,i__34829_34928,switch__32590__auto__,c__32685__auto___34933,in_chan_34932,vec__34871_34929,in_name_34930,in_mult_34931,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34887 = [null,null,null,null,null,null,null,null];
(statearr_34887[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34887[(1)] = (1));

return statearr_34887;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34882){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34888){if((e34888 instanceof Object)){
var ex__32594__auto__ = e34888;
var statearr_34889_34936 = state_34882;
(statearr_34889_34936[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34937 = state_34882;
state_34882 = G__34937;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34882){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34825_34925,chunk__34827_34926,count__34828_34927,i__34829_34928,switch__32590__auto__,c__32685__auto___34933,in_chan_34932,vec__34871_34929,in_name_34930,in_mult_34931,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34890 = f__32686__auto__.call(null);
(statearr_34890[(6)] = c__32685__auto___34933);

return statearr_34890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34825_34925,chunk__34827_34926,count__34828_34927,i__34829_34928,c__32685__auto___34933,in_chan_34932,vec__34871_34929,in_name_34930,in_mult_34931,inputs))
);


cljs.core.async.tap.call(null,in_mult_34931,in_chan_34932);


var G__34938 = seq__34825_34925;
var G__34939 = chunk__34827_34926;
var G__34940 = count__34828_34927;
var G__34941 = (i__34829_34928 + (1));
seq__34825_34925 = G__34938;
chunk__34827_34926 = G__34939;
count__34828_34927 = G__34940;
i__34829_34928 = G__34941;
continue;
} else {
var temp__5720__auto___34942 = cljs.core.seq.call(null,seq__34825_34925);
if(temp__5720__auto___34942){
var seq__34825_34943__$1 = temp__5720__auto___34942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34825_34943__$1)){
var c__4550__auto___34944 = cljs.core.chunk_first.call(null,seq__34825_34943__$1);
var G__34945 = cljs.core.chunk_rest.call(null,seq__34825_34943__$1);
var G__34946 = c__4550__auto___34944;
var G__34947 = cljs.core.count.call(null,c__4550__auto___34944);
var G__34948 = (0);
seq__34825_34925 = G__34945;
chunk__34827_34926 = G__34946;
count__34828_34927 = G__34947;
i__34829_34928 = G__34948;
continue;
} else {
var vec__34891_34949 = cljs.core.first.call(null,seq__34825_34943__$1);
var in_name_34950 = cljs.core.nth.call(null,vec__34891_34949,(0),null);
var in_mult_34951 = cljs.core.nth.call(null,vec__34891_34949,(1),null);
var in_chan_34952 = cljs.core.async.chan.call(null);
var c__32685__auto___34953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34825_34925,chunk__34827_34926,count__34828_34927,i__34829_34928,c__32685__auto___34953,in_chan_34952,vec__34891_34949,in_name_34950,in_mult_34951,seq__34825_34943__$1,temp__5720__auto___34942,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34825_34925,chunk__34827_34926,count__34828_34927,i__34829_34928,c__32685__auto___34953,in_chan_34952,vec__34891_34949,in_name_34950,in_mult_34951,seq__34825_34943__$1,temp__5720__auto___34942,inputs){
return (function (state_34902){
var state_val_34903 = (state_34902[(1)]);
if((state_val_34903 === (1))){
var state_34902__$1 = state_34902;
var statearr_34904_34954 = state_34902__$1;
(statearr_34904_34954[(2)] = null);

(statearr_34904_34954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34903 === (2))){
var state_34902__$1 = state_34902;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34902__$1,(4),in_chan_34952);
} else {
if((state_val_34903 === (3))){
var inst_34900 = (state_34902[(2)]);
var state_34902__$1 = state_34902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34902__$1,inst_34900);
} else {
if((state_val_34903 === (4))){
var inst_34896 = (state_34902[(2)]);
var inst_34897 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34950,inst_34896);
var state_34902__$1 = (function (){var statearr_34905 = state_34902;
(statearr_34905[(7)] = inst_34897);

return statearr_34905;
})();
var statearr_34906_34955 = state_34902__$1;
(statearr_34906_34955[(2)] = null);

(statearr_34906_34955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34825_34925,chunk__34827_34926,count__34828_34927,i__34829_34928,c__32685__auto___34953,in_chan_34952,vec__34891_34949,in_name_34950,in_mult_34951,seq__34825_34943__$1,temp__5720__auto___34942,inputs))
;
return ((function (seq__34825_34925,chunk__34827_34926,count__34828_34927,i__34829_34928,switch__32590__auto__,c__32685__auto___34953,in_chan_34952,vec__34891_34949,in_name_34950,in_mult_34951,seq__34825_34943__$1,temp__5720__auto___34942,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34907 = [null,null,null,null,null,null,null,null];
(statearr_34907[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34907[(1)] = (1));

return statearr_34907;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34902){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34908){if((e34908 instanceof Object)){
var ex__32594__auto__ = e34908;
var statearr_34909_34956 = state_34902;
(statearr_34909_34956[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34957 = state_34902;
state_34902 = G__34957;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34902){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34825_34925,chunk__34827_34926,count__34828_34927,i__34829_34928,switch__32590__auto__,c__32685__auto___34953,in_chan_34952,vec__34891_34949,in_name_34950,in_mult_34951,seq__34825_34943__$1,temp__5720__auto___34942,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34910 = f__32686__auto__.call(null);
(statearr_34910[(6)] = c__32685__auto___34953);

return statearr_34910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34825_34925,chunk__34827_34926,count__34828_34927,i__34829_34928,c__32685__auto___34953,in_chan_34952,vec__34891_34949,in_name_34950,in_mult_34951,seq__34825_34943__$1,temp__5720__auto___34942,inputs))
);


cljs.core.async.tap.call(null,in_mult_34951,in_chan_34952);


var G__34958 = cljs.core.next.call(null,seq__34825_34943__$1);
var G__34959 = null;
var G__34960 = (0);
var G__34961 = (0);
seq__34825_34925 = G__34958;
chunk__34827_34926 = G__34959;
count__34828_34927 = G__34960;
i__34829_34928 = G__34961;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34911(s__34912){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34912__$1 = s__34912;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34912__$1);
if(temp__5720__auto__){
var s__34912__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34912__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34912__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34914 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34913 = (0);
while(true){
if((i__34913 < size__4522__auto__)){
var vec__34915 = cljs.core._nth.call(null,c__4521__auto__,i__34913);
var in_name = cljs.core.nth.call(null,vec__34915,(0),null);
var map__34918 = cljs.core.nth.call(null,vec__34915,(1),null);
var map__34918__$1 = (((((!((map__34918 == null))))?(((((map__34918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34918):map__34918);
var type = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__34914,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__34962 = (i__34913 + (1));
i__34913 = G__34962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34914),fugue$ctx_ctrls$midi_monitor_$_iter__34911.call(null,cljs.core.chunk_rest.call(null,s__34912__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34914),null);
}
} else {
var vec__34920 = cljs.core.first.call(null,s__34912__$2);
var in_name = cljs.core.nth.call(null,vec__34920,(0),null);
var map__34923 = cljs.core.nth.call(null,vec__34920,(1),null);
var map__34923__$1 = (((((!((map__34923 == null))))?(((((map__34923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34923):map__34923);
var type = cljs.core.get.call(null,map__34923__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34923__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34923__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34911.call(null,cljs.core.rest.call(null,s__34912__$2)));
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
var temp__5718__auto___34966 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34966)){
var old_ctx_34967 = temp__5718__auto___34966;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_34967).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34964 = temp__5718__auto__;
var map__34964__$1 = (((((!((map__34964 == null))))?(((((map__34964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34964):map__34964);
var outs = cljs.core.get.call(null,map__34964__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__34963_SHARP_){
return console.log(p1__34963_SHARP_);
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
var seq__34970 = cljs.core.seq.call(null,files);
var chunk__34971 = null;
var count__34972 = (0);
var i__34973 = (0);
while(true){
if((i__34973 < count__34972)){
var file = cljs.core._nth.call(null,chunk__34971,i__34973);
file.arrayBuffer().then(((function (seq__34970,chunk__34971,count__34972,i__34973,file,files){
return (function (p1__34968_SHARP_){
return actx.decodeAudioData(p1__34968_SHARP_);
});})(seq__34970,chunk__34971,count__34972,i__34973,file,files))
).then(((function (seq__34970,chunk__34971,count__34972,i__34973,file,files){
return (function (p1__34969_SHARP_){
return buffer_cb.call(null,file.name,p1__34969_SHARP_);
});})(seq__34970,chunk__34971,count__34972,i__34973,file,files))
);


var G__34974 = seq__34970;
var G__34975 = chunk__34971;
var G__34976 = count__34972;
var G__34977 = (i__34973 + (1));
seq__34970 = G__34974;
chunk__34971 = G__34975;
count__34972 = G__34976;
i__34973 = G__34977;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34970);
if(temp__5720__auto__){
var seq__34970__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34970__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34970__$1);
var G__34978 = cljs.core.chunk_rest.call(null,seq__34970__$1);
var G__34979 = c__4550__auto__;
var G__34980 = cljs.core.count.call(null,c__4550__auto__);
var G__34981 = (0);
seq__34970 = G__34978;
chunk__34971 = G__34979;
count__34972 = G__34980;
i__34973 = G__34981;
continue;
} else {
var file = cljs.core.first.call(null,seq__34970__$1);
file.arrayBuffer().then(((function (seq__34970,chunk__34971,count__34972,i__34973,file,seq__34970__$1,temp__5720__auto__,files){
return (function (p1__34968_SHARP_){
return actx.decodeAudioData(p1__34968_SHARP_);
});})(seq__34970,chunk__34971,count__34972,i__34973,file,seq__34970__$1,temp__5720__auto__,files))
).then(((function (seq__34970,chunk__34971,count__34972,i__34973,file,seq__34970__$1,temp__5720__auto__,files){
return (function (p1__34969_SHARP_){
return buffer_cb.call(null,file.name,p1__34969_SHARP_);
});})(seq__34970,chunk__34971,count__34972,i__34973,file,seq__34970__$1,temp__5720__auto__,files))
);


var G__34982 = cljs.core.next.call(null,seq__34970__$1);
var G__34983 = null;
var G__34984 = (0);
var G__34985 = (0);
seq__34970 = G__34982;
chunk__34971 = G__34983;
count__34972 = G__34984;
i__34973 = G__34985;
continue;
}
} else {
return null;
}
}
break;
}
});
fugue.ctx_ctrls.buffer_ctrl = (function fugue$ctx_ctrls$buffer_ctrl(actx_atom,buffer_ctx){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var seq__34988 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__34989 = null;
var count__34990 = (0);
var i__34991 = (0);
while(true){
if((i__34991 < count__34990)){
var file = cljs.core._nth.call(null,chunk__34989,i__34991);
file.arrayBuffer().then(((function (seq__34988,chunk__34989,count__34990,i__34991,file){
return (function (p1__34986_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34986_SHARP_);
});})(seq__34988,chunk__34989,count__34990,i__34991,file))
).then(((function (seq__34988,chunk__34989,count__34990,i__34991,file){
return (function (p1__34987_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name,p1__34987_SHARP_);
});})(seq__34988,chunk__34989,count__34990,i__34991,file))
);


var G__35002 = seq__34988;
var G__35003 = chunk__34989;
var G__35004 = count__34990;
var G__35005 = (i__34991 + (1));
seq__34988 = G__35002;
chunk__34989 = G__35003;
count__34990 = G__35004;
i__34991 = G__35005;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34988);
if(temp__5720__auto__){
var seq__34988__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34988__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34988__$1);
var G__35006 = cljs.core.chunk_rest.call(null,seq__34988__$1);
var G__35007 = c__4550__auto__;
var G__35008 = cljs.core.count.call(null,c__4550__auto__);
var G__35009 = (0);
seq__34988 = G__35006;
chunk__34989 = G__35007;
count__34990 = G__35008;
i__34991 = G__35009;
continue;
} else {
var file = cljs.core.first.call(null,seq__34988__$1);
file.arrayBuffer().then(((function (seq__34988,chunk__34989,count__34990,i__34991,file,seq__34988__$1,temp__5720__auto__){
return (function (p1__34986_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34986_SHARP_);
});})(seq__34988,chunk__34989,count__34990,i__34991,file,seq__34988__$1,temp__5720__auto__))
).then(((function (seq__34988,chunk__34989,count__34990,i__34991,file,seq__34988__$1,temp__5720__auto__){
return (function (p1__34987_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name,p1__34987_SHARP_);
});})(seq__34988,chunk__34989,count__34990,i__34991,file,seq__34988__$1,temp__5720__auto__))
);


var G__35010 = cljs.core.next.call(null,seq__34988__$1);
var G__35011 = null;
var G__35012 = (0);
var G__35013 = (0);
seq__34988 = G__35010;
chunk__34989 = G__35011;
count__34990 = G__35012;
i__34991 = G__35013;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__34992(s__34993){
return (new cljs.core.LazySeq(null,(function (){
var s__34993__$1 = s__34993;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34993__$1);
if(temp__5720__auto__){
var s__34993__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34993__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34993__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34995 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34994 = (0);
while(true){
if((i__34994 < size__4522__auto__)){
var vec__34996 = cljs.core._nth.call(null,c__4521__auto__,i__34994);
var name = cljs.core.nth.call(null,vec__34996,(0),null);
var buffer = cljs.core.nth.call(null,vec__34996,(1),null);
cljs.core.chunk_append.call(null,b__34995,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__35014 = (i__34994 + (1));
i__34994 = G__35014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34995),fugue$ctx_ctrls$buffer_ctrl_$_iter__34992.call(null,cljs.core.chunk_rest.call(null,s__34993__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34995),null);
}
} else {
var vec__34999 = cljs.core.first.call(null,s__34993__$2);
var name = cljs.core.nth.call(null,vec__34999,(0),null);
var buffer = cljs.core.nth.call(null,vec__34999,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__34992.call(null,cljs.core.rest.call(null,s__34993__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,buffer_ctx)));
})()], null)], null);
});
});

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610145023436
