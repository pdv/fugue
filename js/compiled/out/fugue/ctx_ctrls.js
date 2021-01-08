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
var seq__34806_34906 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34808_34907 = null;
var count__34809_34908 = (0);
var i__34810_34909 = (0);
while(true){
if((i__34810_34909 < count__34809_34908)){
var vec__34852_34910 = cljs.core._nth.call(null,chunk__34808_34907,i__34810_34909);
var in_name_34911 = cljs.core.nth.call(null,vec__34852_34910,(0),null);
var in_mult_34912 = cljs.core.nth.call(null,vec__34852_34910,(1),null);
var in_chan_34913 = cljs.core.async.chan.call(null);
var c__32685__auto___34914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34806_34906,chunk__34808_34907,count__34809_34908,i__34810_34909,c__32685__auto___34914,in_chan_34913,vec__34852_34910,in_name_34911,in_mult_34912,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34806_34906,chunk__34808_34907,count__34809_34908,i__34810_34909,c__32685__auto___34914,in_chan_34913,vec__34852_34910,in_name_34911,in_mult_34912,inputs){
return (function (state_34863){
var state_val_34864 = (state_34863[(1)]);
if((state_val_34864 === (1))){
var state_34863__$1 = state_34863;
var statearr_34865_34915 = state_34863__$1;
(statearr_34865_34915[(2)] = null);

(statearr_34865_34915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34864 === (2))){
var state_34863__$1 = state_34863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34863__$1,(4),in_chan_34913);
} else {
if((state_val_34864 === (3))){
var inst_34861 = (state_34863[(2)]);
var state_34863__$1 = state_34863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34863__$1,inst_34861);
} else {
if((state_val_34864 === (4))){
var inst_34857 = (state_34863[(2)]);
var inst_34858 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34911,inst_34857);
var state_34863__$1 = (function (){var statearr_34866 = state_34863;
(statearr_34866[(7)] = inst_34858);

return statearr_34866;
})();
var statearr_34867_34916 = state_34863__$1;
(statearr_34867_34916[(2)] = null);

(statearr_34867_34916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34806_34906,chunk__34808_34907,count__34809_34908,i__34810_34909,c__32685__auto___34914,in_chan_34913,vec__34852_34910,in_name_34911,in_mult_34912,inputs))
;
return ((function (seq__34806_34906,chunk__34808_34907,count__34809_34908,i__34810_34909,switch__32590__auto__,c__32685__auto___34914,in_chan_34913,vec__34852_34910,in_name_34911,in_mult_34912,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34868 = [null,null,null,null,null,null,null,null];
(statearr_34868[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34868[(1)] = (1));

return statearr_34868;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34863){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34869){if((e34869 instanceof Object)){
var ex__32594__auto__ = e34869;
var statearr_34870_34917 = state_34863;
(statearr_34870_34917[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34918 = state_34863;
state_34863 = G__34918;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34863){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34806_34906,chunk__34808_34907,count__34809_34908,i__34810_34909,switch__32590__auto__,c__32685__auto___34914,in_chan_34913,vec__34852_34910,in_name_34911,in_mult_34912,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34871 = f__32686__auto__.call(null);
(statearr_34871[(6)] = c__32685__auto___34914);

return statearr_34871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34806_34906,chunk__34808_34907,count__34809_34908,i__34810_34909,c__32685__auto___34914,in_chan_34913,vec__34852_34910,in_name_34911,in_mult_34912,inputs))
);


cljs.core.async.tap.call(null,in_mult_34912,in_chan_34913);


var G__34919 = seq__34806_34906;
var G__34920 = chunk__34808_34907;
var G__34921 = count__34809_34908;
var G__34922 = (i__34810_34909 + (1));
seq__34806_34906 = G__34919;
chunk__34808_34907 = G__34920;
count__34809_34908 = G__34921;
i__34810_34909 = G__34922;
continue;
} else {
var temp__5720__auto___34923 = cljs.core.seq.call(null,seq__34806_34906);
if(temp__5720__auto___34923){
var seq__34806_34924__$1 = temp__5720__auto___34923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34806_34924__$1)){
var c__4550__auto___34925 = cljs.core.chunk_first.call(null,seq__34806_34924__$1);
var G__34926 = cljs.core.chunk_rest.call(null,seq__34806_34924__$1);
var G__34927 = c__4550__auto___34925;
var G__34928 = cljs.core.count.call(null,c__4550__auto___34925);
var G__34929 = (0);
seq__34806_34906 = G__34926;
chunk__34808_34907 = G__34927;
count__34809_34908 = G__34928;
i__34810_34909 = G__34929;
continue;
} else {
var vec__34872_34930 = cljs.core.first.call(null,seq__34806_34924__$1);
var in_name_34931 = cljs.core.nth.call(null,vec__34872_34930,(0),null);
var in_mult_34932 = cljs.core.nth.call(null,vec__34872_34930,(1),null);
var in_chan_34933 = cljs.core.async.chan.call(null);
var c__32685__auto___34934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34806_34906,chunk__34808_34907,count__34809_34908,i__34810_34909,c__32685__auto___34934,in_chan_34933,vec__34872_34930,in_name_34931,in_mult_34932,seq__34806_34924__$1,temp__5720__auto___34923,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34806_34906,chunk__34808_34907,count__34809_34908,i__34810_34909,c__32685__auto___34934,in_chan_34933,vec__34872_34930,in_name_34931,in_mult_34932,seq__34806_34924__$1,temp__5720__auto___34923,inputs){
return (function (state_34883){
var state_val_34884 = (state_34883[(1)]);
if((state_val_34884 === (1))){
var state_34883__$1 = state_34883;
var statearr_34885_34935 = state_34883__$1;
(statearr_34885_34935[(2)] = null);

(statearr_34885_34935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (2))){
var state_34883__$1 = state_34883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34883__$1,(4),in_chan_34933);
} else {
if((state_val_34884 === (3))){
var inst_34881 = (state_34883[(2)]);
var state_34883__$1 = state_34883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34883__$1,inst_34881);
} else {
if((state_val_34884 === (4))){
var inst_34877 = (state_34883[(2)]);
var inst_34878 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34931,inst_34877);
var state_34883__$1 = (function (){var statearr_34886 = state_34883;
(statearr_34886[(7)] = inst_34878);

return statearr_34886;
})();
var statearr_34887_34936 = state_34883__$1;
(statearr_34887_34936[(2)] = null);

(statearr_34887_34936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34806_34906,chunk__34808_34907,count__34809_34908,i__34810_34909,c__32685__auto___34934,in_chan_34933,vec__34872_34930,in_name_34931,in_mult_34932,seq__34806_34924__$1,temp__5720__auto___34923,inputs))
;
return ((function (seq__34806_34906,chunk__34808_34907,count__34809_34908,i__34810_34909,switch__32590__auto__,c__32685__auto___34934,in_chan_34933,vec__34872_34930,in_name_34931,in_mult_34932,seq__34806_34924__$1,temp__5720__auto___34923,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34888 = [null,null,null,null,null,null,null,null];
(statearr_34888[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34888[(1)] = (1));

return statearr_34888;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34883){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34889){if((e34889 instanceof Object)){
var ex__32594__auto__ = e34889;
var statearr_34890_34937 = state_34883;
(statearr_34890_34937[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34938 = state_34883;
state_34883 = G__34938;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34883){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34806_34906,chunk__34808_34907,count__34809_34908,i__34810_34909,switch__32590__auto__,c__32685__auto___34934,in_chan_34933,vec__34872_34930,in_name_34931,in_mult_34932,seq__34806_34924__$1,temp__5720__auto___34923,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34891 = f__32686__auto__.call(null);
(statearr_34891[(6)] = c__32685__auto___34934);

return statearr_34891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34806_34906,chunk__34808_34907,count__34809_34908,i__34810_34909,c__32685__auto___34934,in_chan_34933,vec__34872_34930,in_name_34931,in_mult_34932,seq__34806_34924__$1,temp__5720__auto___34923,inputs))
);


cljs.core.async.tap.call(null,in_mult_34932,in_chan_34933);


var G__34939 = cljs.core.next.call(null,seq__34806_34924__$1);
var G__34940 = null;
var G__34941 = (0);
var G__34942 = (0);
seq__34806_34906 = G__34939;
chunk__34808_34907 = G__34940;
count__34809_34908 = G__34941;
i__34810_34909 = G__34942;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34892(s__34893){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34893__$1 = s__34893;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34893__$1);
if(temp__5720__auto__){
var s__34893__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34893__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34893__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34895 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34894 = (0);
while(true){
if((i__34894 < size__4522__auto__)){
var vec__34896 = cljs.core._nth.call(null,c__4521__auto__,i__34894);
var in_name = cljs.core.nth.call(null,vec__34896,(0),null);
var map__34899 = cljs.core.nth.call(null,vec__34896,(1),null);
var map__34899__$1 = (((((!((map__34899 == null))))?(((((map__34899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34899):map__34899);
var type = cljs.core.get.call(null,map__34899__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34899__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34899__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__34895,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__34943 = (i__34894 + (1));
i__34894 = G__34943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34895),fugue$ctx_ctrls$midi_monitor_$_iter__34892.call(null,cljs.core.chunk_rest.call(null,s__34893__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34895),null);
}
} else {
var vec__34901 = cljs.core.first.call(null,s__34893__$2);
var in_name = cljs.core.nth.call(null,vec__34901,(0),null);
var map__34904 = cljs.core.nth.call(null,vec__34901,(1),null);
var map__34904__$1 = (((((!((map__34904 == null))))?(((((map__34904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34904):map__34904);
var type = cljs.core.get.call(null,map__34904__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34904__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34904__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34892.call(null,cljs.core.rest.call(null,s__34893__$2)));
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
var temp__5718__auto___34947 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34947)){
var old_ctx_34948 = temp__5718__auto___34947;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_34948).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34945 = temp__5718__auto__;
var map__34945__$1 = (((((!((map__34945 == null))))?(((((map__34945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34945):map__34945);
var outs = cljs.core.get.call(null,map__34945__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__34944_SHARP_){
return console.log(p1__34944_SHARP_);
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
var seq__34951 = cljs.core.seq.call(null,files);
var chunk__34952 = null;
var count__34953 = (0);
var i__34954 = (0);
while(true){
if((i__34954 < count__34953)){
var file = cljs.core._nth.call(null,chunk__34952,i__34954);
file.arrayBuffer().then(((function (seq__34951,chunk__34952,count__34953,i__34954,file,files){
return (function (p1__34949_SHARP_){
return actx.decodeAudioData(p1__34949_SHARP_);
});})(seq__34951,chunk__34952,count__34953,i__34954,file,files))
).then(((function (seq__34951,chunk__34952,count__34953,i__34954,file,files){
return (function (p1__34950_SHARP_){
return buffer_cb.call(null,file.name,p1__34950_SHARP_);
});})(seq__34951,chunk__34952,count__34953,i__34954,file,files))
);


var G__34955 = seq__34951;
var G__34956 = chunk__34952;
var G__34957 = count__34953;
var G__34958 = (i__34954 + (1));
seq__34951 = G__34955;
chunk__34952 = G__34956;
count__34953 = G__34957;
i__34954 = G__34958;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34951);
if(temp__5720__auto__){
var seq__34951__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34951__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34951__$1);
var G__34959 = cljs.core.chunk_rest.call(null,seq__34951__$1);
var G__34960 = c__4550__auto__;
var G__34961 = cljs.core.count.call(null,c__4550__auto__);
var G__34962 = (0);
seq__34951 = G__34959;
chunk__34952 = G__34960;
count__34953 = G__34961;
i__34954 = G__34962;
continue;
} else {
var file = cljs.core.first.call(null,seq__34951__$1);
file.arrayBuffer().then(((function (seq__34951,chunk__34952,count__34953,i__34954,file,seq__34951__$1,temp__5720__auto__,files){
return (function (p1__34949_SHARP_){
return actx.decodeAudioData(p1__34949_SHARP_);
});})(seq__34951,chunk__34952,count__34953,i__34954,file,seq__34951__$1,temp__5720__auto__,files))
).then(((function (seq__34951,chunk__34952,count__34953,i__34954,file,seq__34951__$1,temp__5720__auto__,files){
return (function (p1__34950_SHARP_){
return buffer_cb.call(null,file.name,p1__34950_SHARP_);
});})(seq__34951,chunk__34952,count__34953,i__34954,file,seq__34951__$1,temp__5720__auto__,files))
);


var G__34963 = cljs.core.next.call(null,seq__34951__$1);
var G__34964 = null;
var G__34965 = (0);
var G__34966 = (0);
seq__34951 = G__34963;
chunk__34952 = G__34964;
count__34953 = G__34965;
i__34954 = G__34966;
continue;
}
} else {
return null;
}
}
break;
}
});
fugue.ctx_ctrls.buffer_ctrl = (function fugue$ctx_ctrls$buffer_ctrl(actx_atom,buffer_cache_atom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var seq__34969 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__34970 = null;
var count__34971 = (0);
var i__34972 = (0);
while(true){
if((i__34972 < count__34971)){
var file = cljs.core._nth.call(null,chunk__34970,i__34972);
file.arrayBuffer().then(((function (seq__34969,chunk__34970,count__34971,i__34972,file){
return (function (p1__34967_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34967_SHARP_);
});})(seq__34969,chunk__34970,count__34971,i__34972,file))
).then(((function (seq__34969,chunk__34970,count__34971,i__34972,file){
return (function (p1__34968_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__34968_SHARP_);
});})(seq__34969,chunk__34970,count__34971,i__34972,file))
);


var G__34983 = seq__34969;
var G__34984 = chunk__34970;
var G__34985 = count__34971;
var G__34986 = (i__34972 + (1));
seq__34969 = G__34983;
chunk__34970 = G__34984;
count__34971 = G__34985;
i__34972 = G__34986;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34969);
if(temp__5720__auto__){
var seq__34969__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34969__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34969__$1);
var G__34987 = cljs.core.chunk_rest.call(null,seq__34969__$1);
var G__34988 = c__4550__auto__;
var G__34989 = cljs.core.count.call(null,c__4550__auto__);
var G__34990 = (0);
seq__34969 = G__34987;
chunk__34970 = G__34988;
count__34971 = G__34989;
i__34972 = G__34990;
continue;
} else {
var file = cljs.core.first.call(null,seq__34969__$1);
file.arrayBuffer().then(((function (seq__34969,chunk__34970,count__34971,i__34972,file,seq__34969__$1,temp__5720__auto__){
return (function (p1__34967_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34967_SHARP_);
});})(seq__34969,chunk__34970,count__34971,i__34972,file,seq__34969__$1,temp__5720__auto__))
).then(((function (seq__34969,chunk__34970,count__34971,i__34972,file,seq__34969__$1,temp__5720__auto__){
return (function (p1__34968_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__34968_SHARP_);
});})(seq__34969,chunk__34970,count__34971,i__34972,file,seq__34969__$1,temp__5720__auto__))
);


var G__34991 = cljs.core.next.call(null,seq__34969__$1);
var G__34992 = null;
var G__34993 = (0);
var G__34994 = (0);
seq__34969 = G__34991;
chunk__34970 = G__34992;
count__34971 = G__34993;
i__34972 = G__34994;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__34973(s__34974){
return (new cljs.core.LazySeq(null,(function (){
var s__34974__$1 = s__34974;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34974__$1);
if(temp__5720__auto__){
var s__34974__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34974__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34974__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34976 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34975 = (0);
while(true){
if((i__34975 < size__4522__auto__)){
var vec__34977 = cljs.core._nth.call(null,c__4521__auto__,i__34975);
var name = cljs.core.nth.call(null,vec__34977,(0),null);
var buffer = cljs.core.nth.call(null,vec__34977,(1),null);
cljs.core.chunk_append.call(null,b__34976,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__34995 = (i__34975 + (1));
i__34975 = G__34995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34976),fugue$ctx_ctrls$buffer_ctrl_$_iter__34973.call(null,cljs.core.chunk_rest.call(null,s__34974__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34976),null);
}
} else {
var vec__34980 = cljs.core.first.call(null,s__34974__$2);
var name = cljs.core.nth.call(null,vec__34980,(0),null);
var buffer = cljs.core.nth.call(null,vec__34980,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__34973.call(null,cljs.core.rest.call(null,s__34974__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.deref.call(null,buffer_cache_atom));
})()], null)], null);
});
});

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610066031741
