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
var seq__34823_34923 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34825_34924 = null;
var count__34826_34925 = (0);
var i__34827_34926 = (0);
while(true){
if((i__34827_34926 < count__34826_34925)){
var vec__34869_34927 = cljs.core._nth.call(null,chunk__34825_34924,i__34827_34926);
var in_name_34928 = cljs.core.nth.call(null,vec__34869_34927,(0),null);
var in_mult_34929 = cljs.core.nth.call(null,vec__34869_34927,(1),null);
var in_chan_34930 = cljs.core.async.chan.call(null);
var c__32707__auto___34931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34823_34923,chunk__34825_34924,count__34826_34925,i__34827_34926,c__32707__auto___34931,in_chan_34930,vec__34869_34927,in_name_34928,in_mult_34929,inputs){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (seq__34823_34923,chunk__34825_34924,count__34826_34925,i__34827_34926,c__32707__auto___34931,in_chan_34930,vec__34869_34927,in_name_34928,in_mult_34929,inputs){
return (function (state_34880){
var state_val_34881 = (state_34880[(1)]);
if((state_val_34881 === (1))){
var state_34880__$1 = state_34880;
var statearr_34882_34932 = state_34880__$1;
(statearr_34882_34932[(2)] = null);

(statearr_34882_34932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34881 === (2))){
var state_34880__$1 = state_34880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34880__$1,(4),in_chan_34930);
} else {
if((state_val_34881 === (3))){
var inst_34878 = (state_34880[(2)]);
var state_34880__$1 = state_34880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34880__$1,inst_34878);
} else {
if((state_val_34881 === (4))){
var inst_34874 = (state_34880[(2)]);
var inst_34875 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34928,inst_34874);
var state_34880__$1 = (function (){var statearr_34883 = state_34880;
(statearr_34883[(7)] = inst_34875);

return statearr_34883;
})();
var statearr_34884_34933 = state_34880__$1;
(statearr_34884_34933[(2)] = null);

(statearr_34884_34933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34823_34923,chunk__34825_34924,count__34826_34925,i__34827_34926,c__32707__auto___34931,in_chan_34930,vec__34869_34927,in_name_34928,in_mult_34929,inputs))
;
return ((function (seq__34823_34923,chunk__34825_34924,count__34826_34925,i__34827_34926,switch__32612__auto__,c__32707__auto___34931,in_chan_34930,vec__34869_34927,in_name_34928,in_mult_34929,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0 = (function (){
var statearr_34885 = [null,null,null,null,null,null,null,null];
(statearr_34885[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__);

(statearr_34885[(1)] = (1));

return statearr_34885;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1 = (function (state_34880){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_34880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e34886){if((e34886 instanceof Object)){
var ex__32616__auto__ = e34886;
var statearr_34887_34934 = state_34880;
(statearr_34887_34934[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34935 = state_34880;
state_34880 = G__34935;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__ = function(state_34880){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1.call(this,state_34880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__;
})()
;})(seq__34823_34923,chunk__34825_34924,count__34826_34925,i__34827_34926,switch__32612__auto__,c__32707__auto___34931,in_chan_34930,vec__34869_34927,in_name_34928,in_mult_34929,inputs))
})();
var state__32709__auto__ = (function (){var statearr_34888 = f__32708__auto__.call(null);
(statearr_34888[(6)] = c__32707__auto___34931);

return statearr_34888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(seq__34823_34923,chunk__34825_34924,count__34826_34925,i__34827_34926,c__32707__auto___34931,in_chan_34930,vec__34869_34927,in_name_34928,in_mult_34929,inputs))
);


cljs.core.async.tap.call(null,in_mult_34929,in_chan_34930);


var G__34936 = seq__34823_34923;
var G__34937 = chunk__34825_34924;
var G__34938 = count__34826_34925;
var G__34939 = (i__34827_34926 + (1));
seq__34823_34923 = G__34936;
chunk__34825_34924 = G__34937;
count__34826_34925 = G__34938;
i__34827_34926 = G__34939;
continue;
} else {
var temp__5720__auto___34940 = cljs.core.seq.call(null,seq__34823_34923);
if(temp__5720__auto___34940){
var seq__34823_34941__$1 = temp__5720__auto___34940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34823_34941__$1)){
var c__4550__auto___34942 = cljs.core.chunk_first.call(null,seq__34823_34941__$1);
var G__34943 = cljs.core.chunk_rest.call(null,seq__34823_34941__$1);
var G__34944 = c__4550__auto___34942;
var G__34945 = cljs.core.count.call(null,c__4550__auto___34942);
var G__34946 = (0);
seq__34823_34923 = G__34943;
chunk__34825_34924 = G__34944;
count__34826_34925 = G__34945;
i__34827_34926 = G__34946;
continue;
} else {
var vec__34889_34947 = cljs.core.first.call(null,seq__34823_34941__$1);
var in_name_34948 = cljs.core.nth.call(null,vec__34889_34947,(0),null);
var in_mult_34949 = cljs.core.nth.call(null,vec__34889_34947,(1),null);
var in_chan_34950 = cljs.core.async.chan.call(null);
var c__32707__auto___34951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34823_34923,chunk__34825_34924,count__34826_34925,i__34827_34926,c__32707__auto___34951,in_chan_34950,vec__34889_34947,in_name_34948,in_mult_34949,seq__34823_34941__$1,temp__5720__auto___34940,inputs){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (seq__34823_34923,chunk__34825_34924,count__34826_34925,i__34827_34926,c__32707__auto___34951,in_chan_34950,vec__34889_34947,in_name_34948,in_mult_34949,seq__34823_34941__$1,temp__5720__auto___34940,inputs){
return (function (state_34900){
var state_val_34901 = (state_34900[(1)]);
if((state_val_34901 === (1))){
var state_34900__$1 = state_34900;
var statearr_34902_34952 = state_34900__$1;
(statearr_34902_34952[(2)] = null);

(statearr_34902_34952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34901 === (2))){
var state_34900__$1 = state_34900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34900__$1,(4),in_chan_34950);
} else {
if((state_val_34901 === (3))){
var inst_34898 = (state_34900[(2)]);
var state_34900__$1 = state_34900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34900__$1,inst_34898);
} else {
if((state_val_34901 === (4))){
var inst_34894 = (state_34900[(2)]);
var inst_34895 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34948,inst_34894);
var state_34900__$1 = (function (){var statearr_34903 = state_34900;
(statearr_34903[(7)] = inst_34895);

return statearr_34903;
})();
var statearr_34904_34953 = state_34900__$1;
(statearr_34904_34953[(2)] = null);

(statearr_34904_34953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34823_34923,chunk__34825_34924,count__34826_34925,i__34827_34926,c__32707__auto___34951,in_chan_34950,vec__34889_34947,in_name_34948,in_mult_34949,seq__34823_34941__$1,temp__5720__auto___34940,inputs))
;
return ((function (seq__34823_34923,chunk__34825_34924,count__34826_34925,i__34827_34926,switch__32612__auto__,c__32707__auto___34951,in_chan_34950,vec__34889_34947,in_name_34948,in_mult_34949,seq__34823_34941__$1,temp__5720__auto___34940,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0 = (function (){
var statearr_34905 = [null,null,null,null,null,null,null,null];
(statearr_34905[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__);

(statearr_34905[(1)] = (1));

return statearr_34905;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1 = (function (state_34900){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_34900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e34906){if((e34906 instanceof Object)){
var ex__32616__auto__ = e34906;
var statearr_34907_34954 = state_34900;
(statearr_34907_34954[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34955 = state_34900;
state_34900 = G__34955;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__ = function(state_34900){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1.call(this,state_34900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__;
})()
;})(seq__34823_34923,chunk__34825_34924,count__34826_34925,i__34827_34926,switch__32612__auto__,c__32707__auto___34951,in_chan_34950,vec__34889_34947,in_name_34948,in_mult_34949,seq__34823_34941__$1,temp__5720__auto___34940,inputs))
})();
var state__32709__auto__ = (function (){var statearr_34908 = f__32708__auto__.call(null);
(statearr_34908[(6)] = c__32707__auto___34951);

return statearr_34908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(seq__34823_34923,chunk__34825_34924,count__34826_34925,i__34827_34926,c__32707__auto___34951,in_chan_34950,vec__34889_34947,in_name_34948,in_mult_34949,seq__34823_34941__$1,temp__5720__auto___34940,inputs))
);


cljs.core.async.tap.call(null,in_mult_34949,in_chan_34950);


var G__34956 = cljs.core.next.call(null,seq__34823_34941__$1);
var G__34957 = null;
var G__34958 = (0);
var G__34959 = (0);
seq__34823_34923 = G__34956;
chunk__34825_34924 = G__34957;
count__34826_34925 = G__34958;
i__34827_34926 = G__34959;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34909(s__34910){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34910__$1 = s__34910;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34910__$1);
if(temp__5720__auto__){
var s__34910__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34910__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34910__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34912 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34911 = (0);
while(true){
if((i__34911 < size__4522__auto__)){
var vec__34913 = cljs.core._nth.call(null,c__4521__auto__,i__34911);
var in_name = cljs.core.nth.call(null,vec__34913,(0),null);
var map__34916 = cljs.core.nth.call(null,vec__34913,(1),null);
var map__34916__$1 = (((((!((map__34916 == null))))?(((((map__34916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34916):map__34916);
var type = cljs.core.get.call(null,map__34916__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34916__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34916__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__34912,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__34960 = (i__34911 + (1));
i__34911 = G__34960;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34912),fugue$ctx_ctrls$midi_monitor_$_iter__34909.call(null,cljs.core.chunk_rest.call(null,s__34910__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34912),null);
}
} else {
var vec__34918 = cljs.core.first.call(null,s__34910__$2);
var in_name = cljs.core.nth.call(null,vec__34918,(0),null);
var map__34921 = cljs.core.nth.call(null,vec__34918,(1),null);
var map__34921__$1 = (((((!((map__34921 == null))))?(((((map__34921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34921):map__34921);
var type = cljs.core.get.call(null,map__34921__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34921__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34921__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34909.call(null,cljs.core.rest.call(null,s__34910__$2)));
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
var temp__5718__auto___34964 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34964)){
var old_ctx_34965 = temp__5718__auto___34964;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_34965).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34962 = temp__5718__auto__;
var map__34962__$1 = (((((!((map__34962 == null))))?(((((map__34962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34962):map__34962);
var outs = cljs.core.get.call(null,map__34962__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__34961_SHARP_){
return console.log(p1__34961_SHARP_);
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
var seq__34968 = cljs.core.seq.call(null,files);
var chunk__34969 = null;
var count__34970 = (0);
var i__34971 = (0);
while(true){
if((i__34971 < count__34970)){
var file = cljs.core._nth.call(null,chunk__34969,i__34971);
file.arrayBuffer().then(((function (seq__34968,chunk__34969,count__34970,i__34971,file,files){
return (function (p1__34966_SHARP_){
return actx.decodeAudioData(p1__34966_SHARP_);
});})(seq__34968,chunk__34969,count__34970,i__34971,file,files))
).then(((function (seq__34968,chunk__34969,count__34970,i__34971,file,files){
return (function (p1__34967_SHARP_){
return buffer_cb.call(null,file.name,p1__34967_SHARP_);
});})(seq__34968,chunk__34969,count__34970,i__34971,file,files))
);


var G__34972 = seq__34968;
var G__34973 = chunk__34969;
var G__34974 = count__34970;
var G__34975 = (i__34971 + (1));
seq__34968 = G__34972;
chunk__34969 = G__34973;
count__34970 = G__34974;
i__34971 = G__34975;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34968);
if(temp__5720__auto__){
var seq__34968__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34968__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34968__$1);
var G__34976 = cljs.core.chunk_rest.call(null,seq__34968__$1);
var G__34977 = c__4550__auto__;
var G__34978 = cljs.core.count.call(null,c__4550__auto__);
var G__34979 = (0);
seq__34968 = G__34976;
chunk__34969 = G__34977;
count__34970 = G__34978;
i__34971 = G__34979;
continue;
} else {
var file = cljs.core.first.call(null,seq__34968__$1);
file.arrayBuffer().then(((function (seq__34968,chunk__34969,count__34970,i__34971,file,seq__34968__$1,temp__5720__auto__,files){
return (function (p1__34966_SHARP_){
return actx.decodeAudioData(p1__34966_SHARP_);
});})(seq__34968,chunk__34969,count__34970,i__34971,file,seq__34968__$1,temp__5720__auto__,files))
).then(((function (seq__34968,chunk__34969,count__34970,i__34971,file,seq__34968__$1,temp__5720__auto__,files){
return (function (p1__34967_SHARP_){
return buffer_cb.call(null,file.name,p1__34967_SHARP_);
});})(seq__34968,chunk__34969,count__34970,i__34971,file,seq__34968__$1,temp__5720__auto__,files))
);


var G__34980 = cljs.core.next.call(null,seq__34968__$1);
var G__34981 = null;
var G__34982 = (0);
var G__34983 = (0);
seq__34968 = G__34980;
chunk__34969 = G__34981;
count__34970 = G__34982;
i__34971 = G__34983;
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
var seq__34986 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__34987 = null;
var count__34988 = (0);
var i__34989 = (0);
while(true){
if((i__34989 < count__34988)){
var file = cljs.core._nth.call(null,chunk__34987,i__34989);
file.arrayBuffer().then(((function (seq__34986,chunk__34987,count__34988,i__34989,file){
return (function (p1__34984_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__34984_SHARP_);
});})(seq__34986,chunk__34987,count__34988,i__34989,file))
).then(((function (seq__34986,chunk__34987,count__34988,i__34989,file){
return (function (p1__34985_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__34985_SHARP_);
});})(seq__34986,chunk__34987,count__34988,i__34989,file))
);


var G__35000 = seq__34986;
var G__35001 = chunk__34987;
var G__35002 = count__34988;
var G__35003 = (i__34989 + (1));
seq__34986 = G__35000;
chunk__34987 = G__35001;
count__34988 = G__35002;
i__34989 = G__35003;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34986);
if(temp__5720__auto__){
var seq__34986__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34986__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34986__$1);
var G__35004 = cljs.core.chunk_rest.call(null,seq__34986__$1);
var G__35005 = c__4550__auto__;
var G__35006 = cljs.core.count.call(null,c__4550__auto__);
var G__35007 = (0);
seq__34986 = G__35004;
chunk__34987 = G__35005;
count__34988 = G__35006;
i__34989 = G__35007;
continue;
} else {
var file = cljs.core.first.call(null,seq__34986__$1);
file.arrayBuffer().then(((function (seq__34986,chunk__34987,count__34988,i__34989,file,seq__34986__$1,temp__5720__auto__){
return (function (p1__34984_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__34984_SHARP_);
});})(seq__34986,chunk__34987,count__34988,i__34989,file,seq__34986__$1,temp__5720__auto__))
).then(((function (seq__34986,chunk__34987,count__34988,i__34989,file,seq__34986__$1,temp__5720__auto__){
return (function (p1__34985_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__34985_SHARP_);
});})(seq__34986,chunk__34987,count__34988,i__34989,file,seq__34986__$1,temp__5720__auto__))
);


var G__35008 = cljs.core.next.call(null,seq__34986__$1);
var G__35009 = null;
var G__35010 = (0);
var G__35011 = (0);
seq__34986 = G__35008;
chunk__34987 = G__35009;
count__34988 = G__35010;
i__34989 = G__35011;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__34990(s__34991){
return (new cljs.core.LazySeq(null,(function (){
var s__34991__$1 = s__34991;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34991__$1);
if(temp__5720__auto__){
var s__34991__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34991__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34991__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34993 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34992 = (0);
while(true){
if((i__34992 < size__4522__auto__)){
var vec__34994 = cljs.core._nth.call(null,c__4521__auto__,i__34992);
var name = cljs.core.nth.call(null,vec__34994,(0),null);
var buffer = cljs.core.nth.call(null,vec__34994,(1),null);
cljs.core.chunk_append.call(null,b__34993,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__35012 = (i__34992 + (1));
i__34992 = G__35012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34993),fugue$ctx_ctrls$buffer_ctrl_$_iter__34990.call(null,cljs.core.chunk_rest.call(null,s__34991__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34993),null);
}
} else {
var vec__34997 = cljs.core.first.call(null,s__34991__$2);
var name = cljs.core.nth.call(null,vec__34997,(0),null);
var buffer = cljs.core.nth.call(null,vec__34997,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__34990.call(null,cljs.core.rest.call(null,s__34991__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610383902989
