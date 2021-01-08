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
var seq__34800_34900 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34802_34901 = null;
var count__34803_34902 = (0);
var i__34804_34903 = (0);
while(true){
if((i__34804_34903 < count__34803_34902)){
var vec__34846_34904 = cljs.core._nth.call(null,chunk__34802_34901,i__34804_34903);
var in_name_34905 = cljs.core.nth.call(null,vec__34846_34904,(0),null);
var in_mult_34906 = cljs.core.nth.call(null,vec__34846_34904,(1),null);
var in_chan_34907 = cljs.core.async.chan.call(null);
var c__32685__auto___34908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34800_34900,chunk__34802_34901,count__34803_34902,i__34804_34903,c__32685__auto___34908,in_chan_34907,vec__34846_34904,in_name_34905,in_mult_34906,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34800_34900,chunk__34802_34901,count__34803_34902,i__34804_34903,c__32685__auto___34908,in_chan_34907,vec__34846_34904,in_name_34905,in_mult_34906,inputs){
return (function (state_34857){
var state_val_34858 = (state_34857[(1)]);
if((state_val_34858 === (1))){
var state_34857__$1 = state_34857;
var statearr_34859_34909 = state_34857__$1;
(statearr_34859_34909[(2)] = null);

(statearr_34859_34909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34858 === (2))){
var state_34857__$1 = state_34857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34857__$1,(4),in_chan_34907);
} else {
if((state_val_34858 === (3))){
var inst_34855 = (state_34857[(2)]);
var state_34857__$1 = state_34857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34857__$1,inst_34855);
} else {
if((state_val_34858 === (4))){
var inst_34851 = (state_34857[(2)]);
var inst_34852 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34905,inst_34851);
var state_34857__$1 = (function (){var statearr_34860 = state_34857;
(statearr_34860[(7)] = inst_34852);

return statearr_34860;
})();
var statearr_34861_34910 = state_34857__$1;
(statearr_34861_34910[(2)] = null);

(statearr_34861_34910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34800_34900,chunk__34802_34901,count__34803_34902,i__34804_34903,c__32685__auto___34908,in_chan_34907,vec__34846_34904,in_name_34905,in_mult_34906,inputs))
;
return ((function (seq__34800_34900,chunk__34802_34901,count__34803_34902,i__34804_34903,switch__32590__auto__,c__32685__auto___34908,in_chan_34907,vec__34846_34904,in_name_34905,in_mult_34906,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34862 = [null,null,null,null,null,null,null,null];
(statearr_34862[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34862[(1)] = (1));

return statearr_34862;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34857){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34863){if((e34863 instanceof Object)){
var ex__32594__auto__ = e34863;
var statearr_34864_34911 = state_34857;
(statearr_34864_34911[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34912 = state_34857;
state_34857 = G__34912;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34857){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34800_34900,chunk__34802_34901,count__34803_34902,i__34804_34903,switch__32590__auto__,c__32685__auto___34908,in_chan_34907,vec__34846_34904,in_name_34905,in_mult_34906,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34865 = f__32686__auto__.call(null);
(statearr_34865[(6)] = c__32685__auto___34908);

return statearr_34865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34800_34900,chunk__34802_34901,count__34803_34902,i__34804_34903,c__32685__auto___34908,in_chan_34907,vec__34846_34904,in_name_34905,in_mult_34906,inputs))
);


cljs.core.async.tap.call(null,in_mult_34906,in_chan_34907);


var G__34913 = seq__34800_34900;
var G__34914 = chunk__34802_34901;
var G__34915 = count__34803_34902;
var G__34916 = (i__34804_34903 + (1));
seq__34800_34900 = G__34913;
chunk__34802_34901 = G__34914;
count__34803_34902 = G__34915;
i__34804_34903 = G__34916;
continue;
} else {
var temp__5720__auto___34917 = cljs.core.seq.call(null,seq__34800_34900);
if(temp__5720__auto___34917){
var seq__34800_34918__$1 = temp__5720__auto___34917;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34800_34918__$1)){
var c__4550__auto___34919 = cljs.core.chunk_first.call(null,seq__34800_34918__$1);
var G__34920 = cljs.core.chunk_rest.call(null,seq__34800_34918__$1);
var G__34921 = c__4550__auto___34919;
var G__34922 = cljs.core.count.call(null,c__4550__auto___34919);
var G__34923 = (0);
seq__34800_34900 = G__34920;
chunk__34802_34901 = G__34921;
count__34803_34902 = G__34922;
i__34804_34903 = G__34923;
continue;
} else {
var vec__34866_34924 = cljs.core.first.call(null,seq__34800_34918__$1);
var in_name_34925 = cljs.core.nth.call(null,vec__34866_34924,(0),null);
var in_mult_34926 = cljs.core.nth.call(null,vec__34866_34924,(1),null);
var in_chan_34927 = cljs.core.async.chan.call(null);
var c__32685__auto___34928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34800_34900,chunk__34802_34901,count__34803_34902,i__34804_34903,c__32685__auto___34928,in_chan_34927,vec__34866_34924,in_name_34925,in_mult_34926,seq__34800_34918__$1,temp__5720__auto___34917,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34800_34900,chunk__34802_34901,count__34803_34902,i__34804_34903,c__32685__auto___34928,in_chan_34927,vec__34866_34924,in_name_34925,in_mult_34926,seq__34800_34918__$1,temp__5720__auto___34917,inputs){
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
});})(seq__34800_34900,chunk__34802_34901,count__34803_34902,i__34804_34903,c__32685__auto___34928,in_chan_34927,vec__34866_34924,in_name_34925,in_mult_34926,seq__34800_34918__$1,temp__5720__auto___34917,inputs))
;
return ((function (seq__34800_34900,chunk__34802_34901,count__34803_34902,i__34804_34903,switch__32590__auto__,c__32685__auto___34928,in_chan_34927,vec__34866_34924,in_name_34925,in_mult_34926,seq__34800_34918__$1,temp__5720__auto___34917,inputs){
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
;})(seq__34800_34900,chunk__34802_34901,count__34803_34902,i__34804_34903,switch__32590__auto__,c__32685__auto___34928,in_chan_34927,vec__34866_34924,in_name_34925,in_mult_34926,seq__34800_34918__$1,temp__5720__auto___34917,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34885 = f__32686__auto__.call(null);
(statearr_34885[(6)] = c__32685__auto___34928);

return statearr_34885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34800_34900,chunk__34802_34901,count__34803_34902,i__34804_34903,c__32685__auto___34928,in_chan_34927,vec__34866_34924,in_name_34925,in_mult_34926,seq__34800_34918__$1,temp__5720__auto___34917,inputs))
);


cljs.core.async.tap.call(null,in_mult_34926,in_chan_34927);


var G__34933 = cljs.core.next.call(null,seq__34800_34918__$1);
var G__34934 = null;
var G__34935 = (0);
var G__34936 = (0);
seq__34800_34900 = G__34933;
chunk__34802_34901 = G__34934;
count__34803_34902 = G__34935;
i__34804_34903 = G__34936;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34886(s__34887){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34887__$1 = s__34887;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34887__$1);
if(temp__5720__auto__){
var s__34887__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34887__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34887__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34889 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34888 = (0);
while(true){
if((i__34888 < size__4522__auto__)){
var vec__34890 = cljs.core._nth.call(null,c__4521__auto__,i__34888);
var in_name = cljs.core.nth.call(null,vec__34890,(0),null);
var map__34893 = cljs.core.nth.call(null,vec__34890,(1),null);
var map__34893__$1 = (((((!((map__34893 == null))))?(((((map__34893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34893):map__34893);
var type = cljs.core.get.call(null,map__34893__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34893__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34893__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__34889,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__34937 = (i__34888 + (1));
i__34888 = G__34937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34889),fugue$ctx_ctrls$midi_monitor_$_iter__34886.call(null,cljs.core.chunk_rest.call(null,s__34887__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34889),null);
}
} else {
var vec__34895 = cljs.core.first.call(null,s__34887__$2);
var in_name = cljs.core.nth.call(null,vec__34895,(0),null);
var map__34898 = cljs.core.nth.call(null,vec__34895,(1),null);
var map__34898__$1 = (((((!((map__34898 == null))))?(((((map__34898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34898):map__34898);
var type = cljs.core.get.call(null,map__34898__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34898__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34898__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34886.call(null,cljs.core.rest.call(null,s__34887__$2)));
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
var temp__5718__auto___34941 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34941)){
var old_ctx_34942 = temp__5718__auto___34941;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_34942).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34939 = temp__5718__auto__;
var map__34939__$1 = (((((!((map__34939 == null))))?(((((map__34939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34939):map__34939);
var outs = cljs.core.get.call(null,map__34939__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__34938_SHARP_){
return console.log(p1__34938_SHARP_);
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
var seq__34945 = cljs.core.seq.call(null,files);
var chunk__34946 = null;
var count__34947 = (0);
var i__34948 = (0);
while(true){
if((i__34948 < count__34947)){
var file = cljs.core._nth.call(null,chunk__34946,i__34948);
file.arrayBuffer().then(((function (seq__34945,chunk__34946,count__34947,i__34948,file,files){
return (function (p1__34943_SHARP_){
return actx.decodeAudioData(p1__34943_SHARP_);
});})(seq__34945,chunk__34946,count__34947,i__34948,file,files))
).then(((function (seq__34945,chunk__34946,count__34947,i__34948,file,files){
return (function (p1__34944_SHARP_){
return buffer_cb.call(null,file.name,p1__34944_SHARP_);
});})(seq__34945,chunk__34946,count__34947,i__34948,file,files))
);


var G__34949 = seq__34945;
var G__34950 = chunk__34946;
var G__34951 = count__34947;
var G__34952 = (i__34948 + (1));
seq__34945 = G__34949;
chunk__34946 = G__34950;
count__34947 = G__34951;
i__34948 = G__34952;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34945);
if(temp__5720__auto__){
var seq__34945__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34945__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34945__$1);
var G__34953 = cljs.core.chunk_rest.call(null,seq__34945__$1);
var G__34954 = c__4550__auto__;
var G__34955 = cljs.core.count.call(null,c__4550__auto__);
var G__34956 = (0);
seq__34945 = G__34953;
chunk__34946 = G__34954;
count__34947 = G__34955;
i__34948 = G__34956;
continue;
} else {
var file = cljs.core.first.call(null,seq__34945__$1);
file.arrayBuffer().then(((function (seq__34945,chunk__34946,count__34947,i__34948,file,seq__34945__$1,temp__5720__auto__,files){
return (function (p1__34943_SHARP_){
return actx.decodeAudioData(p1__34943_SHARP_);
});})(seq__34945,chunk__34946,count__34947,i__34948,file,seq__34945__$1,temp__5720__auto__,files))
).then(((function (seq__34945,chunk__34946,count__34947,i__34948,file,seq__34945__$1,temp__5720__auto__,files){
return (function (p1__34944_SHARP_){
return buffer_cb.call(null,file.name,p1__34944_SHARP_);
});})(seq__34945,chunk__34946,count__34947,i__34948,file,seq__34945__$1,temp__5720__auto__,files))
);


var G__34957 = cljs.core.next.call(null,seq__34945__$1);
var G__34958 = null;
var G__34959 = (0);
var G__34960 = (0);
seq__34945 = G__34957;
chunk__34946 = G__34958;
count__34947 = G__34959;
i__34948 = G__34960;
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
var seq__34963 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__34964 = null;
var count__34965 = (0);
var i__34966 = (0);
while(true){
if((i__34966 < count__34965)){
var file = cljs.core._nth.call(null,chunk__34964,i__34966);
file.arrayBuffer().then(((function (seq__34963,chunk__34964,count__34965,i__34966,file){
return (function (p1__34961_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34961_SHARP_);
});})(seq__34963,chunk__34964,count__34965,i__34966,file))
).then(((function (seq__34963,chunk__34964,count__34965,i__34966,file){
return (function (p1__34962_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__34962_SHARP_);
});})(seq__34963,chunk__34964,count__34965,i__34966,file))
);


var G__34977 = seq__34963;
var G__34978 = chunk__34964;
var G__34979 = count__34965;
var G__34980 = (i__34966 + (1));
seq__34963 = G__34977;
chunk__34964 = G__34978;
count__34965 = G__34979;
i__34966 = G__34980;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34963);
if(temp__5720__auto__){
var seq__34963__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34963__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34963__$1);
var G__34981 = cljs.core.chunk_rest.call(null,seq__34963__$1);
var G__34982 = c__4550__auto__;
var G__34983 = cljs.core.count.call(null,c__4550__auto__);
var G__34984 = (0);
seq__34963 = G__34981;
chunk__34964 = G__34982;
count__34965 = G__34983;
i__34966 = G__34984;
continue;
} else {
var file = cljs.core.first.call(null,seq__34963__$1);
file.arrayBuffer().then(((function (seq__34963,chunk__34964,count__34965,i__34966,file,seq__34963__$1,temp__5720__auto__){
return (function (p1__34961_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34961_SHARP_);
});})(seq__34963,chunk__34964,count__34965,i__34966,file,seq__34963__$1,temp__5720__auto__))
).then(((function (seq__34963,chunk__34964,count__34965,i__34966,file,seq__34963__$1,temp__5720__auto__){
return (function (p1__34962_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__34962_SHARP_);
});})(seq__34963,chunk__34964,count__34965,i__34966,file,seq__34963__$1,temp__5720__auto__))
);


var G__34985 = cljs.core.next.call(null,seq__34963__$1);
var G__34986 = null;
var G__34987 = (0);
var G__34988 = (0);
seq__34963 = G__34985;
chunk__34964 = G__34986;
count__34965 = G__34987;
i__34966 = G__34988;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__34967(s__34968){
return (new cljs.core.LazySeq(null,(function (){
var s__34968__$1 = s__34968;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34968__$1);
if(temp__5720__auto__){
var s__34968__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34968__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34968__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34970 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34969 = (0);
while(true){
if((i__34969 < size__4522__auto__)){
var vec__34971 = cljs.core._nth.call(null,c__4521__auto__,i__34969);
var name = cljs.core.nth.call(null,vec__34971,(0),null);
var buffer = cljs.core.nth.call(null,vec__34971,(1),null);
cljs.core.chunk_append.call(null,b__34970,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__34989 = (i__34969 + (1));
i__34969 = G__34989;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34970),fugue$ctx_ctrls$buffer_ctrl_$_iter__34967.call(null,cljs.core.chunk_rest.call(null,s__34968__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34970),null);
}
} else {
var vec__34974 = cljs.core.first.call(null,s__34968__$2);
var name = cljs.core.nth.call(null,vec__34974,(0),null);
var buffer = cljs.core.nth.call(null,vec__34974,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__34967.call(null,cljs.core.rest.call(null,s__34968__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610065045058
