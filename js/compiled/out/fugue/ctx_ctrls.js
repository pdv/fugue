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
var seq__34794_34894 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34796_34895 = null;
var count__34797_34896 = (0);
var i__34798_34897 = (0);
while(true){
if((i__34798_34897 < count__34797_34896)){
var vec__34840_34898 = cljs.core._nth.call(null,chunk__34796_34895,i__34798_34897);
var in_name_34899 = cljs.core.nth.call(null,vec__34840_34898,(0),null);
var in_mult_34900 = cljs.core.nth.call(null,vec__34840_34898,(1),null);
var in_chan_34901 = cljs.core.async.chan.call(null);
var c__32685__auto___34902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34794_34894,chunk__34796_34895,count__34797_34896,i__34798_34897,c__32685__auto___34902,in_chan_34901,vec__34840_34898,in_name_34899,in_mult_34900,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34794_34894,chunk__34796_34895,count__34797_34896,i__34798_34897,c__32685__auto___34902,in_chan_34901,vec__34840_34898,in_name_34899,in_mult_34900,inputs){
return (function (state_34851){
var state_val_34852 = (state_34851[(1)]);
if((state_val_34852 === (1))){
var state_34851__$1 = state_34851;
var statearr_34853_34903 = state_34851__$1;
(statearr_34853_34903[(2)] = null);

(statearr_34853_34903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34852 === (2))){
var state_34851__$1 = state_34851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34851__$1,(4),in_chan_34901);
} else {
if((state_val_34852 === (3))){
var inst_34849 = (state_34851[(2)]);
var state_34851__$1 = state_34851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34851__$1,inst_34849);
} else {
if((state_val_34852 === (4))){
var inst_34845 = (state_34851[(2)]);
var inst_34846 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34899,inst_34845);
var state_34851__$1 = (function (){var statearr_34854 = state_34851;
(statearr_34854[(7)] = inst_34846);

return statearr_34854;
})();
var statearr_34855_34904 = state_34851__$1;
(statearr_34855_34904[(2)] = null);

(statearr_34855_34904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34794_34894,chunk__34796_34895,count__34797_34896,i__34798_34897,c__32685__auto___34902,in_chan_34901,vec__34840_34898,in_name_34899,in_mult_34900,inputs))
;
return ((function (seq__34794_34894,chunk__34796_34895,count__34797_34896,i__34798_34897,switch__32590__auto__,c__32685__auto___34902,in_chan_34901,vec__34840_34898,in_name_34899,in_mult_34900,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34856 = [null,null,null,null,null,null,null,null];
(statearr_34856[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34856[(1)] = (1));

return statearr_34856;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34851){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34857){if((e34857 instanceof Object)){
var ex__32594__auto__ = e34857;
var statearr_34858_34905 = state_34851;
(statearr_34858_34905[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34906 = state_34851;
state_34851 = G__34906;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34851){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34794_34894,chunk__34796_34895,count__34797_34896,i__34798_34897,switch__32590__auto__,c__32685__auto___34902,in_chan_34901,vec__34840_34898,in_name_34899,in_mult_34900,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34859 = f__32686__auto__.call(null);
(statearr_34859[(6)] = c__32685__auto___34902);

return statearr_34859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34794_34894,chunk__34796_34895,count__34797_34896,i__34798_34897,c__32685__auto___34902,in_chan_34901,vec__34840_34898,in_name_34899,in_mult_34900,inputs))
);


cljs.core.async.tap.call(null,in_mult_34900,in_chan_34901);


var G__34907 = seq__34794_34894;
var G__34908 = chunk__34796_34895;
var G__34909 = count__34797_34896;
var G__34910 = (i__34798_34897 + (1));
seq__34794_34894 = G__34907;
chunk__34796_34895 = G__34908;
count__34797_34896 = G__34909;
i__34798_34897 = G__34910;
continue;
} else {
var temp__5720__auto___34911 = cljs.core.seq.call(null,seq__34794_34894);
if(temp__5720__auto___34911){
var seq__34794_34912__$1 = temp__5720__auto___34911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34794_34912__$1)){
var c__4550__auto___34913 = cljs.core.chunk_first.call(null,seq__34794_34912__$1);
var G__34914 = cljs.core.chunk_rest.call(null,seq__34794_34912__$1);
var G__34915 = c__4550__auto___34913;
var G__34916 = cljs.core.count.call(null,c__4550__auto___34913);
var G__34917 = (0);
seq__34794_34894 = G__34914;
chunk__34796_34895 = G__34915;
count__34797_34896 = G__34916;
i__34798_34897 = G__34917;
continue;
} else {
var vec__34860_34918 = cljs.core.first.call(null,seq__34794_34912__$1);
var in_name_34919 = cljs.core.nth.call(null,vec__34860_34918,(0),null);
var in_mult_34920 = cljs.core.nth.call(null,vec__34860_34918,(1),null);
var in_chan_34921 = cljs.core.async.chan.call(null);
var c__32685__auto___34922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34794_34894,chunk__34796_34895,count__34797_34896,i__34798_34897,c__32685__auto___34922,in_chan_34921,vec__34860_34918,in_name_34919,in_mult_34920,seq__34794_34912__$1,temp__5720__auto___34911,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34794_34894,chunk__34796_34895,count__34797_34896,i__34798_34897,c__32685__auto___34922,in_chan_34921,vec__34860_34918,in_name_34919,in_mult_34920,seq__34794_34912__$1,temp__5720__auto___34911,inputs){
return (function (state_34871){
var state_val_34872 = (state_34871[(1)]);
if((state_val_34872 === (1))){
var state_34871__$1 = state_34871;
var statearr_34873_34923 = state_34871__$1;
(statearr_34873_34923[(2)] = null);

(statearr_34873_34923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34872 === (2))){
var state_34871__$1 = state_34871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34871__$1,(4),in_chan_34921);
} else {
if((state_val_34872 === (3))){
var inst_34869 = (state_34871[(2)]);
var state_34871__$1 = state_34871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34871__$1,inst_34869);
} else {
if((state_val_34872 === (4))){
var inst_34865 = (state_34871[(2)]);
var inst_34866 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34919,inst_34865);
var state_34871__$1 = (function (){var statearr_34874 = state_34871;
(statearr_34874[(7)] = inst_34866);

return statearr_34874;
})();
var statearr_34875_34924 = state_34871__$1;
(statearr_34875_34924[(2)] = null);

(statearr_34875_34924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34794_34894,chunk__34796_34895,count__34797_34896,i__34798_34897,c__32685__auto___34922,in_chan_34921,vec__34860_34918,in_name_34919,in_mult_34920,seq__34794_34912__$1,temp__5720__auto___34911,inputs))
;
return ((function (seq__34794_34894,chunk__34796_34895,count__34797_34896,i__34798_34897,switch__32590__auto__,c__32685__auto___34922,in_chan_34921,vec__34860_34918,in_name_34919,in_mult_34920,seq__34794_34912__$1,temp__5720__auto___34911,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34876 = [null,null,null,null,null,null,null,null];
(statearr_34876[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34876[(1)] = (1));

return statearr_34876;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34871){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34877){if((e34877 instanceof Object)){
var ex__32594__auto__ = e34877;
var statearr_34878_34925 = state_34871;
(statearr_34878_34925[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34926 = state_34871;
state_34871 = G__34926;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34871){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34794_34894,chunk__34796_34895,count__34797_34896,i__34798_34897,switch__32590__auto__,c__32685__auto___34922,in_chan_34921,vec__34860_34918,in_name_34919,in_mult_34920,seq__34794_34912__$1,temp__5720__auto___34911,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34879 = f__32686__auto__.call(null);
(statearr_34879[(6)] = c__32685__auto___34922);

return statearr_34879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34794_34894,chunk__34796_34895,count__34797_34896,i__34798_34897,c__32685__auto___34922,in_chan_34921,vec__34860_34918,in_name_34919,in_mult_34920,seq__34794_34912__$1,temp__5720__auto___34911,inputs))
);


cljs.core.async.tap.call(null,in_mult_34920,in_chan_34921);


var G__34927 = cljs.core.next.call(null,seq__34794_34912__$1);
var G__34928 = null;
var G__34929 = (0);
var G__34930 = (0);
seq__34794_34894 = G__34927;
chunk__34796_34895 = G__34928;
count__34797_34896 = G__34929;
i__34798_34897 = G__34930;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34880(s__34881){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34881__$1 = s__34881;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34881__$1);
if(temp__5720__auto__){
var s__34881__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34881__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34881__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34883 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34882 = (0);
while(true){
if((i__34882 < size__4522__auto__)){
var vec__34884 = cljs.core._nth.call(null,c__4521__auto__,i__34882);
var in_name = cljs.core.nth.call(null,vec__34884,(0),null);
var map__34887 = cljs.core.nth.call(null,vec__34884,(1),null);
var map__34887__$1 = (((((!((map__34887 == null))))?(((((map__34887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34887):map__34887);
var type = cljs.core.get.call(null,map__34887__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34887__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34887__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__34883,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__34931 = (i__34882 + (1));
i__34882 = G__34931;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34883),fugue$ctx_ctrls$midi_monitor_$_iter__34880.call(null,cljs.core.chunk_rest.call(null,s__34881__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34883),null);
}
} else {
var vec__34889 = cljs.core.first.call(null,s__34881__$2);
var in_name = cljs.core.nth.call(null,vec__34889,(0),null);
var map__34892 = cljs.core.nth.call(null,vec__34889,(1),null);
var map__34892__$1 = (((((!((map__34892 == null))))?(((((map__34892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34892):map__34892);
var type = cljs.core.get.call(null,map__34892__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34892__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34892__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34880.call(null,cljs.core.rest.call(null,s__34881__$2)));
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
var temp__5718__auto___34935 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34935)){
var old_ctx_34936 = temp__5718__auto___34935;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_34936).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34933 = temp__5718__auto__;
var map__34933__$1 = (((((!((map__34933 == null))))?(((((map__34933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34933):map__34933);
var outs = cljs.core.get.call(null,map__34933__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__34932_SHARP_){
return console.log(p1__34932_SHARP_);
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
var seq__34939 = cljs.core.seq.call(null,files);
var chunk__34940 = null;
var count__34941 = (0);
var i__34942 = (0);
while(true){
if((i__34942 < count__34941)){
var file = cljs.core._nth.call(null,chunk__34940,i__34942);
file.arrayBuffer().then(((function (seq__34939,chunk__34940,count__34941,i__34942,file,files){
return (function (p1__34937_SHARP_){
return actx.decodeAudioData(p1__34937_SHARP_);
});})(seq__34939,chunk__34940,count__34941,i__34942,file,files))
).then(((function (seq__34939,chunk__34940,count__34941,i__34942,file,files){
return (function (p1__34938_SHARP_){
return buffer_cb.call(null,file.name,p1__34938_SHARP_);
});})(seq__34939,chunk__34940,count__34941,i__34942,file,files))
);


var G__34943 = seq__34939;
var G__34944 = chunk__34940;
var G__34945 = count__34941;
var G__34946 = (i__34942 + (1));
seq__34939 = G__34943;
chunk__34940 = G__34944;
count__34941 = G__34945;
i__34942 = G__34946;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34939);
if(temp__5720__auto__){
var seq__34939__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34939__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34939__$1);
var G__34947 = cljs.core.chunk_rest.call(null,seq__34939__$1);
var G__34948 = c__4550__auto__;
var G__34949 = cljs.core.count.call(null,c__4550__auto__);
var G__34950 = (0);
seq__34939 = G__34947;
chunk__34940 = G__34948;
count__34941 = G__34949;
i__34942 = G__34950;
continue;
} else {
var file = cljs.core.first.call(null,seq__34939__$1);
file.arrayBuffer().then(((function (seq__34939,chunk__34940,count__34941,i__34942,file,seq__34939__$1,temp__5720__auto__,files){
return (function (p1__34937_SHARP_){
return actx.decodeAudioData(p1__34937_SHARP_);
});})(seq__34939,chunk__34940,count__34941,i__34942,file,seq__34939__$1,temp__5720__auto__,files))
).then(((function (seq__34939,chunk__34940,count__34941,i__34942,file,seq__34939__$1,temp__5720__auto__,files){
return (function (p1__34938_SHARP_){
return buffer_cb.call(null,file.name,p1__34938_SHARP_);
});})(seq__34939,chunk__34940,count__34941,i__34942,file,seq__34939__$1,temp__5720__auto__,files))
);


var G__34951 = cljs.core.next.call(null,seq__34939__$1);
var G__34952 = null;
var G__34953 = (0);
var G__34954 = (0);
seq__34939 = G__34951;
chunk__34940 = G__34952;
count__34941 = G__34953;
i__34942 = G__34954;
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
var seq__34957 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__34958 = null;
var count__34959 = (0);
var i__34960 = (0);
while(true){
if((i__34960 < count__34959)){
var file = cljs.core._nth.call(null,chunk__34958,i__34960);
file.arrayBuffer().then(((function (seq__34957,chunk__34958,count__34959,i__34960,file){
return (function (p1__34955_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34955_SHARP_);
});})(seq__34957,chunk__34958,count__34959,i__34960,file))
).then(((function (seq__34957,chunk__34958,count__34959,i__34960,file){
return (function (p1__34956_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__34956_SHARP_);
});})(seq__34957,chunk__34958,count__34959,i__34960,file))
);


var G__34971 = seq__34957;
var G__34972 = chunk__34958;
var G__34973 = count__34959;
var G__34974 = (i__34960 + (1));
seq__34957 = G__34971;
chunk__34958 = G__34972;
count__34959 = G__34973;
i__34960 = G__34974;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34957);
if(temp__5720__auto__){
var seq__34957__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34957__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34957__$1);
var G__34975 = cljs.core.chunk_rest.call(null,seq__34957__$1);
var G__34976 = c__4550__auto__;
var G__34977 = cljs.core.count.call(null,c__4550__auto__);
var G__34978 = (0);
seq__34957 = G__34975;
chunk__34958 = G__34976;
count__34959 = G__34977;
i__34960 = G__34978;
continue;
} else {
var file = cljs.core.first.call(null,seq__34957__$1);
file.arrayBuffer().then(((function (seq__34957,chunk__34958,count__34959,i__34960,file,seq__34957__$1,temp__5720__auto__){
return (function (p1__34955_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34955_SHARP_);
});})(seq__34957,chunk__34958,count__34959,i__34960,file,seq__34957__$1,temp__5720__auto__))
).then(((function (seq__34957,chunk__34958,count__34959,i__34960,file,seq__34957__$1,temp__5720__auto__){
return (function (p1__34956_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__34956_SHARP_);
});})(seq__34957,chunk__34958,count__34959,i__34960,file,seq__34957__$1,temp__5720__auto__))
);


var G__34979 = cljs.core.next.call(null,seq__34957__$1);
var G__34980 = null;
var G__34981 = (0);
var G__34982 = (0);
seq__34957 = G__34979;
chunk__34958 = G__34980;
count__34959 = G__34981;
i__34960 = G__34982;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__34961(s__34962){
return (new cljs.core.LazySeq(null,(function (){
var s__34962__$1 = s__34962;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34962__$1);
if(temp__5720__auto__){
var s__34962__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34962__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34962__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34964 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34963 = (0);
while(true){
if((i__34963 < size__4522__auto__)){
var vec__34965 = cljs.core._nth.call(null,c__4521__auto__,i__34963);
var name = cljs.core.nth.call(null,vec__34965,(0),null);
var buffer = cljs.core.nth.call(null,vec__34965,(1),null);
cljs.core.chunk_append.call(null,b__34964,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__34983 = (i__34963 + (1));
i__34963 = G__34983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34964),fugue$ctx_ctrls$buffer_ctrl_$_iter__34961.call(null,cljs.core.chunk_rest.call(null,s__34962__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34964),null);
}
} else {
var vec__34968 = cljs.core.first.call(null,s__34962__$2);
var name = cljs.core.nth.call(null,vec__34968,(0),null);
var buffer = cljs.core.nth.call(null,vec__34968,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__34961.call(null,cljs.core.rest.call(null,s__34962__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610058838760
