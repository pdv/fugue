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
var seq__34820_34920 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34822_34921 = null;
var count__34823_34922 = (0);
var i__34824_34923 = (0);
while(true){
if((i__34824_34923 < count__34823_34922)){
var vec__34866_34924 = cljs.core._nth.call(null,chunk__34822_34921,i__34824_34923);
var in_name_34925 = cljs.core.nth.call(null,vec__34866_34924,(0),null);
var in_mult_34926 = cljs.core.nth.call(null,vec__34866_34924,(1),null);
var in_chan_34927 = cljs.core.async.chan.call(null);
var c__32685__auto___34928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34820_34920,chunk__34822_34921,count__34823_34922,i__34824_34923,c__32685__auto___34928,in_chan_34927,vec__34866_34924,in_name_34925,in_mult_34926,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34820_34920,chunk__34822_34921,count__34823_34922,i__34824_34923,c__32685__auto___34928,in_chan_34927,vec__34866_34924,in_name_34925,in_mult_34926,inputs){
return (function (state_34877){
var state_val_34878 = (state_34877[(1)]);
if((state_val_34878 === (1))){
var state_34877__$1 = state_34877;
var statearr_34879_34929 = state_34877__$1;
(statearr_34879_34929[(2)] = null);

(statearr_34879_34929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34878 === (2))){
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34877__$1,(4),in_chan_34927);
} else {
if((state_val_34878 === (3))){
var inst_34875 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34877__$1,inst_34875);
} else {
if((state_val_34878 === (4))){
var inst_34871 = (state_34877[(2)]);
var inst_34872 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34925,inst_34871);
var state_34877__$1 = (function (){var statearr_34880 = state_34877;
(statearr_34880[(7)] = inst_34872);

return statearr_34880;
})();
var statearr_34881_34930 = state_34877__$1;
(statearr_34881_34930[(2)] = null);

(statearr_34881_34930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34820_34920,chunk__34822_34921,count__34823_34922,i__34824_34923,c__32685__auto___34928,in_chan_34927,vec__34866_34924,in_name_34925,in_mult_34926,inputs))
;
return ((function (seq__34820_34920,chunk__34822_34921,count__34823_34922,i__34824_34923,switch__32590__auto__,c__32685__auto___34928,in_chan_34927,vec__34866_34924,in_name_34925,in_mult_34926,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34882 = [null,null,null,null,null,null,null,null];
(statearr_34882[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34882[(1)] = (1));

return statearr_34882;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34877){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34883){if((e34883 instanceof Object)){
var ex__32594__auto__ = e34883;
var statearr_34884_34931 = state_34877;
(statearr_34884_34931[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34932 = state_34877;
state_34877 = G__34932;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34877){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34820_34920,chunk__34822_34921,count__34823_34922,i__34824_34923,switch__32590__auto__,c__32685__auto___34928,in_chan_34927,vec__34866_34924,in_name_34925,in_mult_34926,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34885 = f__32686__auto__.call(null);
(statearr_34885[(6)] = c__32685__auto___34928);

return statearr_34885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34820_34920,chunk__34822_34921,count__34823_34922,i__34824_34923,c__32685__auto___34928,in_chan_34927,vec__34866_34924,in_name_34925,in_mult_34926,inputs))
);


cljs.core.async.tap.call(null,in_mult_34926,in_chan_34927);


var G__34933 = seq__34820_34920;
var G__34934 = chunk__34822_34921;
var G__34935 = count__34823_34922;
var G__34936 = (i__34824_34923 + (1));
seq__34820_34920 = G__34933;
chunk__34822_34921 = G__34934;
count__34823_34922 = G__34935;
i__34824_34923 = G__34936;
continue;
} else {
var temp__5720__auto___34937 = cljs.core.seq.call(null,seq__34820_34920);
if(temp__5720__auto___34937){
var seq__34820_34938__$1 = temp__5720__auto___34937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34820_34938__$1)){
var c__4550__auto___34939 = cljs.core.chunk_first.call(null,seq__34820_34938__$1);
var G__34940 = cljs.core.chunk_rest.call(null,seq__34820_34938__$1);
var G__34941 = c__4550__auto___34939;
var G__34942 = cljs.core.count.call(null,c__4550__auto___34939);
var G__34943 = (0);
seq__34820_34920 = G__34940;
chunk__34822_34921 = G__34941;
count__34823_34922 = G__34942;
i__34824_34923 = G__34943;
continue;
} else {
var vec__34886_34944 = cljs.core.first.call(null,seq__34820_34938__$1);
var in_name_34945 = cljs.core.nth.call(null,vec__34886_34944,(0),null);
var in_mult_34946 = cljs.core.nth.call(null,vec__34886_34944,(1),null);
var in_chan_34947 = cljs.core.async.chan.call(null);
var c__32685__auto___34948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34820_34920,chunk__34822_34921,count__34823_34922,i__34824_34923,c__32685__auto___34948,in_chan_34947,vec__34886_34944,in_name_34945,in_mult_34946,seq__34820_34938__$1,temp__5720__auto___34937,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34820_34920,chunk__34822_34921,count__34823_34922,i__34824_34923,c__32685__auto___34948,in_chan_34947,vec__34886_34944,in_name_34945,in_mult_34946,seq__34820_34938__$1,temp__5720__auto___34937,inputs){
return (function (state_34897){
var state_val_34898 = (state_34897[(1)]);
if((state_val_34898 === (1))){
var state_34897__$1 = state_34897;
var statearr_34899_34949 = state_34897__$1;
(statearr_34899_34949[(2)] = null);

(statearr_34899_34949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34898 === (2))){
var state_34897__$1 = state_34897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34897__$1,(4),in_chan_34947);
} else {
if((state_val_34898 === (3))){
var inst_34895 = (state_34897[(2)]);
var state_34897__$1 = state_34897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34897__$1,inst_34895);
} else {
if((state_val_34898 === (4))){
var inst_34891 = (state_34897[(2)]);
var inst_34892 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34945,inst_34891);
var state_34897__$1 = (function (){var statearr_34900 = state_34897;
(statearr_34900[(7)] = inst_34892);

return statearr_34900;
})();
var statearr_34901_34950 = state_34897__$1;
(statearr_34901_34950[(2)] = null);

(statearr_34901_34950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34820_34920,chunk__34822_34921,count__34823_34922,i__34824_34923,c__32685__auto___34948,in_chan_34947,vec__34886_34944,in_name_34945,in_mult_34946,seq__34820_34938__$1,temp__5720__auto___34937,inputs))
;
return ((function (seq__34820_34920,chunk__34822_34921,count__34823_34922,i__34824_34923,switch__32590__auto__,c__32685__auto___34948,in_chan_34947,vec__34886_34944,in_name_34945,in_mult_34946,seq__34820_34938__$1,temp__5720__auto___34937,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34902 = [null,null,null,null,null,null,null,null];
(statearr_34902[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34902[(1)] = (1));

return statearr_34902;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34897){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34903){if((e34903 instanceof Object)){
var ex__32594__auto__ = e34903;
var statearr_34904_34951 = state_34897;
(statearr_34904_34951[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34952 = state_34897;
state_34897 = G__34952;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34897){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34820_34920,chunk__34822_34921,count__34823_34922,i__34824_34923,switch__32590__auto__,c__32685__auto___34948,in_chan_34947,vec__34886_34944,in_name_34945,in_mult_34946,seq__34820_34938__$1,temp__5720__auto___34937,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34905 = f__32686__auto__.call(null);
(statearr_34905[(6)] = c__32685__auto___34948);

return statearr_34905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34820_34920,chunk__34822_34921,count__34823_34922,i__34824_34923,c__32685__auto___34948,in_chan_34947,vec__34886_34944,in_name_34945,in_mult_34946,seq__34820_34938__$1,temp__5720__auto___34937,inputs))
);


cljs.core.async.tap.call(null,in_mult_34946,in_chan_34947);


var G__34953 = cljs.core.next.call(null,seq__34820_34938__$1);
var G__34954 = null;
var G__34955 = (0);
var G__34956 = (0);
seq__34820_34920 = G__34953;
chunk__34822_34921 = G__34954;
count__34823_34922 = G__34955;
i__34824_34923 = G__34956;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34906(s__34907){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34907__$1 = s__34907;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34907__$1);
if(temp__5720__auto__){
var s__34907__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34907__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34907__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34909 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34908 = (0);
while(true){
if((i__34908 < size__4522__auto__)){
var vec__34910 = cljs.core._nth.call(null,c__4521__auto__,i__34908);
var in_name = cljs.core.nth.call(null,vec__34910,(0),null);
var map__34913 = cljs.core.nth.call(null,vec__34910,(1),null);
var map__34913__$1 = (((((!((map__34913 == null))))?(((((map__34913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34913):map__34913);
var type = cljs.core.get.call(null,map__34913__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34913__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34913__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__34909,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__34957 = (i__34908 + (1));
i__34908 = G__34957;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34909),fugue$ctx_ctrls$midi_monitor_$_iter__34906.call(null,cljs.core.chunk_rest.call(null,s__34907__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34909),null);
}
} else {
var vec__34915 = cljs.core.first.call(null,s__34907__$2);
var in_name = cljs.core.nth.call(null,vec__34915,(0),null);
var map__34918 = cljs.core.nth.call(null,vec__34915,(1),null);
var map__34918__$1 = (((((!((map__34918 == null))))?(((((map__34918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34918):map__34918);
var type = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34906.call(null,cljs.core.rest.call(null,s__34907__$2)));
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
var temp__5718__auto___34961 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34961)){
var old_ctx_34962 = temp__5718__auto___34961;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_34962).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34959 = temp__5718__auto__;
var map__34959__$1 = (((((!((map__34959 == null))))?(((((map__34959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34959):map__34959);
var outs = cljs.core.get.call(null,map__34959__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__34958_SHARP_){
return console.log(p1__34958_SHARP_);
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
var seq__34965 = cljs.core.seq.call(null,files);
var chunk__34966 = null;
var count__34967 = (0);
var i__34968 = (0);
while(true){
if((i__34968 < count__34967)){
var file = cljs.core._nth.call(null,chunk__34966,i__34968);
file.arrayBuffer().then(((function (seq__34965,chunk__34966,count__34967,i__34968,file,files){
return (function (p1__34963_SHARP_){
return actx.decodeAudioData(p1__34963_SHARP_);
});})(seq__34965,chunk__34966,count__34967,i__34968,file,files))
).then(((function (seq__34965,chunk__34966,count__34967,i__34968,file,files){
return (function (p1__34964_SHARP_){
return buffer_cb.call(null,file.name,p1__34964_SHARP_);
});})(seq__34965,chunk__34966,count__34967,i__34968,file,files))
);


var G__34969 = seq__34965;
var G__34970 = chunk__34966;
var G__34971 = count__34967;
var G__34972 = (i__34968 + (1));
seq__34965 = G__34969;
chunk__34966 = G__34970;
count__34967 = G__34971;
i__34968 = G__34972;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34965);
if(temp__5720__auto__){
var seq__34965__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34965__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34965__$1);
var G__34973 = cljs.core.chunk_rest.call(null,seq__34965__$1);
var G__34974 = c__4550__auto__;
var G__34975 = cljs.core.count.call(null,c__4550__auto__);
var G__34976 = (0);
seq__34965 = G__34973;
chunk__34966 = G__34974;
count__34967 = G__34975;
i__34968 = G__34976;
continue;
} else {
var file = cljs.core.first.call(null,seq__34965__$1);
file.arrayBuffer().then(((function (seq__34965,chunk__34966,count__34967,i__34968,file,seq__34965__$1,temp__5720__auto__,files){
return (function (p1__34963_SHARP_){
return actx.decodeAudioData(p1__34963_SHARP_);
});})(seq__34965,chunk__34966,count__34967,i__34968,file,seq__34965__$1,temp__5720__auto__,files))
).then(((function (seq__34965,chunk__34966,count__34967,i__34968,file,seq__34965__$1,temp__5720__auto__,files){
return (function (p1__34964_SHARP_){
return buffer_cb.call(null,file.name,p1__34964_SHARP_);
});})(seq__34965,chunk__34966,count__34967,i__34968,file,seq__34965__$1,temp__5720__auto__,files))
);


var G__34977 = cljs.core.next.call(null,seq__34965__$1);
var G__34978 = null;
var G__34979 = (0);
var G__34980 = (0);
seq__34965 = G__34977;
chunk__34966 = G__34978;
count__34967 = G__34979;
i__34968 = G__34980;
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
var seq__34983 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__34984 = null;
var count__34985 = (0);
var i__34986 = (0);
while(true){
if((i__34986 < count__34985)){
var file = cljs.core._nth.call(null,chunk__34984,i__34986);
file.arrayBuffer().then(((function (seq__34983,chunk__34984,count__34985,i__34986,file){
return (function (p1__34981_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34981_SHARP_);
});})(seq__34983,chunk__34984,count__34985,i__34986,file))
).then(((function (seq__34983,chunk__34984,count__34985,i__34986,file){
return (function (p1__34982_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__34982_SHARP_);
});})(seq__34983,chunk__34984,count__34985,i__34986,file))
);


var G__34997 = seq__34983;
var G__34998 = chunk__34984;
var G__34999 = count__34985;
var G__35000 = (i__34986 + (1));
seq__34983 = G__34997;
chunk__34984 = G__34998;
count__34985 = G__34999;
i__34986 = G__35000;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34983);
if(temp__5720__auto__){
var seq__34983__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34983__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34983__$1);
var G__35001 = cljs.core.chunk_rest.call(null,seq__34983__$1);
var G__35002 = c__4550__auto__;
var G__35003 = cljs.core.count.call(null,c__4550__auto__);
var G__35004 = (0);
seq__34983 = G__35001;
chunk__34984 = G__35002;
count__34985 = G__35003;
i__34986 = G__35004;
continue;
} else {
var file = cljs.core.first.call(null,seq__34983__$1);
file.arrayBuffer().then(((function (seq__34983,chunk__34984,count__34985,i__34986,file,seq__34983__$1,temp__5720__auto__){
return (function (p1__34981_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34981_SHARP_);
});})(seq__34983,chunk__34984,count__34985,i__34986,file,seq__34983__$1,temp__5720__auto__))
).then(((function (seq__34983,chunk__34984,count__34985,i__34986,file,seq__34983__$1,temp__5720__auto__){
return (function (p1__34982_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__34982_SHARP_);
});})(seq__34983,chunk__34984,count__34985,i__34986,file,seq__34983__$1,temp__5720__auto__))
);


var G__35005 = cljs.core.next.call(null,seq__34983__$1);
var G__35006 = null;
var G__35007 = (0);
var G__35008 = (0);
seq__34983 = G__35005;
chunk__34984 = G__35006;
count__34985 = G__35007;
i__34986 = G__35008;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__34987(s__34988){
return (new cljs.core.LazySeq(null,(function (){
var s__34988__$1 = s__34988;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34988__$1);
if(temp__5720__auto__){
var s__34988__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34988__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34988__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34990 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34989 = (0);
while(true){
if((i__34989 < size__4522__auto__)){
var vec__34991 = cljs.core._nth.call(null,c__4521__auto__,i__34989);
var name = cljs.core.nth.call(null,vec__34991,(0),null);
var buffer = cljs.core.nth.call(null,vec__34991,(1),null);
cljs.core.chunk_append.call(null,b__34990,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__35009 = (i__34989 + (1));
i__34989 = G__35009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34990),fugue$ctx_ctrls$buffer_ctrl_$_iter__34987.call(null,cljs.core.chunk_rest.call(null,s__34988__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34990),null);
}
} else {
var vec__34994 = cljs.core.first.call(null,s__34988__$2);
var name = cljs.core.nth.call(null,vec__34994,(0),null);
var buffer = cljs.core.nth.call(null,vec__34994,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__34987.call(null,cljs.core.rest.call(null,s__34988__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610120087616
