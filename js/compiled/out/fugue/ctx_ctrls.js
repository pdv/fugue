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
var seq__34810_34910 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34812_34911 = null;
var count__34813_34912 = (0);
var i__34814_34913 = (0);
while(true){
if((i__34814_34913 < count__34813_34912)){
var vec__34856_34914 = cljs.core._nth.call(null,chunk__34812_34911,i__34814_34913);
var in_name_34915 = cljs.core.nth.call(null,vec__34856_34914,(0),null);
var in_mult_34916 = cljs.core.nth.call(null,vec__34856_34914,(1),null);
var in_chan_34917 = cljs.core.async.chan.call(null);
var c__32707__auto___34918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34810_34910,chunk__34812_34911,count__34813_34912,i__34814_34913,c__32707__auto___34918,in_chan_34917,vec__34856_34914,in_name_34915,in_mult_34916,inputs){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (seq__34810_34910,chunk__34812_34911,count__34813_34912,i__34814_34913,c__32707__auto___34918,in_chan_34917,vec__34856_34914,in_name_34915,in_mult_34916,inputs){
return (function (state_34867){
var state_val_34868 = (state_34867[(1)]);
if((state_val_34868 === (1))){
var state_34867__$1 = state_34867;
var statearr_34869_34919 = state_34867__$1;
(statearr_34869_34919[(2)] = null);

(statearr_34869_34919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (2))){
var state_34867__$1 = state_34867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34867__$1,(4),in_chan_34917);
} else {
if((state_val_34868 === (3))){
var inst_34865 = (state_34867[(2)]);
var state_34867__$1 = state_34867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34867__$1,inst_34865);
} else {
if((state_val_34868 === (4))){
var inst_34861 = (state_34867[(2)]);
var inst_34862 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34915,inst_34861);
var state_34867__$1 = (function (){var statearr_34870 = state_34867;
(statearr_34870[(7)] = inst_34862);

return statearr_34870;
})();
var statearr_34871_34920 = state_34867__$1;
(statearr_34871_34920[(2)] = null);

(statearr_34871_34920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34810_34910,chunk__34812_34911,count__34813_34912,i__34814_34913,c__32707__auto___34918,in_chan_34917,vec__34856_34914,in_name_34915,in_mult_34916,inputs))
;
return ((function (seq__34810_34910,chunk__34812_34911,count__34813_34912,i__34814_34913,switch__32612__auto__,c__32707__auto___34918,in_chan_34917,vec__34856_34914,in_name_34915,in_mult_34916,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0 = (function (){
var statearr_34872 = [null,null,null,null,null,null,null,null];
(statearr_34872[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__);

(statearr_34872[(1)] = (1));

return statearr_34872;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1 = (function (state_34867){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_34867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e34873){if((e34873 instanceof Object)){
var ex__32616__auto__ = e34873;
var statearr_34874_34921 = state_34867;
(statearr_34874_34921[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34922 = state_34867;
state_34867 = G__34922;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__ = function(state_34867){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1.call(this,state_34867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__;
})()
;})(seq__34810_34910,chunk__34812_34911,count__34813_34912,i__34814_34913,switch__32612__auto__,c__32707__auto___34918,in_chan_34917,vec__34856_34914,in_name_34915,in_mult_34916,inputs))
})();
var state__32709__auto__ = (function (){var statearr_34875 = f__32708__auto__.call(null);
(statearr_34875[(6)] = c__32707__auto___34918);

return statearr_34875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(seq__34810_34910,chunk__34812_34911,count__34813_34912,i__34814_34913,c__32707__auto___34918,in_chan_34917,vec__34856_34914,in_name_34915,in_mult_34916,inputs))
);


cljs.core.async.tap.call(null,in_mult_34916,in_chan_34917);


var G__34923 = seq__34810_34910;
var G__34924 = chunk__34812_34911;
var G__34925 = count__34813_34912;
var G__34926 = (i__34814_34913 + (1));
seq__34810_34910 = G__34923;
chunk__34812_34911 = G__34924;
count__34813_34912 = G__34925;
i__34814_34913 = G__34926;
continue;
} else {
var temp__5720__auto___34927 = cljs.core.seq.call(null,seq__34810_34910);
if(temp__5720__auto___34927){
var seq__34810_34928__$1 = temp__5720__auto___34927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34810_34928__$1)){
var c__4550__auto___34929 = cljs.core.chunk_first.call(null,seq__34810_34928__$1);
var G__34930 = cljs.core.chunk_rest.call(null,seq__34810_34928__$1);
var G__34931 = c__4550__auto___34929;
var G__34932 = cljs.core.count.call(null,c__4550__auto___34929);
var G__34933 = (0);
seq__34810_34910 = G__34930;
chunk__34812_34911 = G__34931;
count__34813_34912 = G__34932;
i__34814_34913 = G__34933;
continue;
} else {
var vec__34876_34934 = cljs.core.first.call(null,seq__34810_34928__$1);
var in_name_34935 = cljs.core.nth.call(null,vec__34876_34934,(0),null);
var in_mult_34936 = cljs.core.nth.call(null,vec__34876_34934,(1),null);
var in_chan_34937 = cljs.core.async.chan.call(null);
var c__32707__auto___34938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34810_34910,chunk__34812_34911,count__34813_34912,i__34814_34913,c__32707__auto___34938,in_chan_34937,vec__34876_34934,in_name_34935,in_mult_34936,seq__34810_34928__$1,temp__5720__auto___34927,inputs){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (seq__34810_34910,chunk__34812_34911,count__34813_34912,i__34814_34913,c__32707__auto___34938,in_chan_34937,vec__34876_34934,in_name_34935,in_mult_34936,seq__34810_34928__$1,temp__5720__auto___34927,inputs){
return (function (state_34887){
var state_val_34888 = (state_34887[(1)]);
if((state_val_34888 === (1))){
var state_34887__$1 = state_34887;
var statearr_34889_34939 = state_34887__$1;
(statearr_34889_34939[(2)] = null);

(statearr_34889_34939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34888 === (2))){
var state_34887__$1 = state_34887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34887__$1,(4),in_chan_34937);
} else {
if((state_val_34888 === (3))){
var inst_34885 = (state_34887[(2)]);
var state_34887__$1 = state_34887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34887__$1,inst_34885);
} else {
if((state_val_34888 === (4))){
var inst_34881 = (state_34887[(2)]);
var inst_34882 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34935,inst_34881);
var state_34887__$1 = (function (){var statearr_34890 = state_34887;
(statearr_34890[(7)] = inst_34882);

return statearr_34890;
})();
var statearr_34891_34940 = state_34887__$1;
(statearr_34891_34940[(2)] = null);

(statearr_34891_34940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34810_34910,chunk__34812_34911,count__34813_34912,i__34814_34913,c__32707__auto___34938,in_chan_34937,vec__34876_34934,in_name_34935,in_mult_34936,seq__34810_34928__$1,temp__5720__auto___34927,inputs))
;
return ((function (seq__34810_34910,chunk__34812_34911,count__34813_34912,i__34814_34913,switch__32612__auto__,c__32707__auto___34938,in_chan_34937,vec__34876_34934,in_name_34935,in_mult_34936,seq__34810_34928__$1,temp__5720__auto___34927,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0 = (function (){
var statearr_34892 = [null,null,null,null,null,null,null,null];
(statearr_34892[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__);

(statearr_34892[(1)] = (1));

return statearr_34892;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1 = (function (state_34887){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_34887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e34893){if((e34893 instanceof Object)){
var ex__32616__auto__ = e34893;
var statearr_34894_34941 = state_34887;
(statearr_34894_34941[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34942 = state_34887;
state_34887 = G__34942;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__ = function(state_34887){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1.call(this,state_34887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32613__auto__;
})()
;})(seq__34810_34910,chunk__34812_34911,count__34813_34912,i__34814_34913,switch__32612__auto__,c__32707__auto___34938,in_chan_34937,vec__34876_34934,in_name_34935,in_mult_34936,seq__34810_34928__$1,temp__5720__auto___34927,inputs))
})();
var state__32709__auto__ = (function (){var statearr_34895 = f__32708__auto__.call(null);
(statearr_34895[(6)] = c__32707__auto___34938);

return statearr_34895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(seq__34810_34910,chunk__34812_34911,count__34813_34912,i__34814_34913,c__32707__auto___34938,in_chan_34937,vec__34876_34934,in_name_34935,in_mult_34936,seq__34810_34928__$1,temp__5720__auto___34927,inputs))
);


cljs.core.async.tap.call(null,in_mult_34936,in_chan_34937);


var G__34943 = cljs.core.next.call(null,seq__34810_34928__$1);
var G__34944 = null;
var G__34945 = (0);
var G__34946 = (0);
seq__34810_34910 = G__34943;
chunk__34812_34911 = G__34944;
count__34813_34912 = G__34945;
i__34814_34913 = G__34946;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34896(s__34897){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34897__$1 = s__34897;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34897__$1);
if(temp__5720__auto__){
var s__34897__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34897__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34897__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34899 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34898 = (0);
while(true){
if((i__34898 < size__4522__auto__)){
var vec__34900 = cljs.core._nth.call(null,c__4521__auto__,i__34898);
var in_name = cljs.core.nth.call(null,vec__34900,(0),null);
var map__34903 = cljs.core.nth.call(null,vec__34900,(1),null);
var map__34903__$1 = (((((!((map__34903 == null))))?(((((map__34903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34903):map__34903);
var type = cljs.core.get.call(null,map__34903__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var note = cljs.core.get.call(null,map__34903__$1,new cljs.core.Keyword(null,"note","note",1426297904));
var velocity = cljs.core.get.call(null,map__34903__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
cljs.core.chunk_append.call(null,b__34899,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__34947 = (i__34898 + (1));
i__34898 = G__34947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34899),fugue$ctx_ctrls$midi_monitor_$_iter__34896.call(null,cljs.core.chunk_rest.call(null,s__34897__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34899),null);
}
} else {
var vec__34905 = cljs.core.first.call(null,s__34897__$2);
var in_name = cljs.core.nth.call(null,vec__34905,(0),null);
var map__34908 = cljs.core.nth.call(null,vec__34905,(1),null);
var map__34908__$1 = (((((!((map__34908 == null))))?(((((map__34908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34908):map__34908);
var type = cljs.core.get.call(null,map__34908__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var note = cljs.core.get.call(null,map__34908__$1,new cljs.core.Keyword(null,"note","note",1426297904));
var velocity = cljs.core.get.call(null,map__34908__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34896.call(null,cljs.core.rest.call(null,s__34897__$2)));
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
var temp__5718__auto___34951 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34951)){
var old_ctx_34952 = temp__5718__auto___34951;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_34952).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34949 = temp__5718__auto__;
var map__34949__$1 = (((((!((map__34949 == null))))?(((((map__34949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34949):map__34949);
var outs = cljs.core.get.call(null,map__34949__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__34948_SHARP_){
return console.log(p1__34948_SHARP_);
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
var seq__34955 = cljs.core.seq.call(null,files);
var chunk__34956 = null;
var count__34957 = (0);
var i__34958 = (0);
while(true){
if((i__34958 < count__34957)){
var file = cljs.core._nth.call(null,chunk__34956,i__34958);
file.arrayBuffer().then(((function (seq__34955,chunk__34956,count__34957,i__34958,file,files){
return (function (p1__34953_SHARP_){
return actx.decodeAudioData(p1__34953_SHARP_);
});})(seq__34955,chunk__34956,count__34957,i__34958,file,files))
).then(((function (seq__34955,chunk__34956,count__34957,i__34958,file,files){
return (function (p1__34954_SHARP_){
return buffer_cb.call(null,file.name,p1__34954_SHARP_);
});})(seq__34955,chunk__34956,count__34957,i__34958,file,files))
);


var G__34959 = seq__34955;
var G__34960 = chunk__34956;
var G__34961 = count__34957;
var G__34962 = (i__34958 + (1));
seq__34955 = G__34959;
chunk__34956 = G__34960;
count__34957 = G__34961;
i__34958 = G__34962;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34955);
if(temp__5720__auto__){
var seq__34955__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34955__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34955__$1);
var G__34963 = cljs.core.chunk_rest.call(null,seq__34955__$1);
var G__34964 = c__4550__auto__;
var G__34965 = cljs.core.count.call(null,c__4550__auto__);
var G__34966 = (0);
seq__34955 = G__34963;
chunk__34956 = G__34964;
count__34957 = G__34965;
i__34958 = G__34966;
continue;
} else {
var file = cljs.core.first.call(null,seq__34955__$1);
file.arrayBuffer().then(((function (seq__34955,chunk__34956,count__34957,i__34958,file,seq__34955__$1,temp__5720__auto__,files){
return (function (p1__34953_SHARP_){
return actx.decodeAudioData(p1__34953_SHARP_);
});})(seq__34955,chunk__34956,count__34957,i__34958,file,seq__34955__$1,temp__5720__auto__,files))
).then(((function (seq__34955,chunk__34956,count__34957,i__34958,file,seq__34955__$1,temp__5720__auto__,files){
return (function (p1__34954_SHARP_){
return buffer_cb.call(null,file.name,p1__34954_SHARP_);
});})(seq__34955,chunk__34956,count__34957,i__34958,file,seq__34955__$1,temp__5720__auto__,files))
);


var G__34967 = cljs.core.next.call(null,seq__34955__$1);
var G__34968 = null;
var G__34969 = (0);
var G__34970 = (0);
seq__34955 = G__34967;
chunk__34956 = G__34968;
count__34957 = G__34969;
i__34958 = G__34970;
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
var seq__34973 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__34974 = null;
var count__34975 = (0);
var i__34976 = (0);
while(true){
if((i__34976 < count__34975)){
var file = cljs.core._nth.call(null,chunk__34974,i__34976);
file.arrayBuffer().then(((function (seq__34973,chunk__34974,count__34975,i__34976,file){
return (function (p1__34971_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__34971_SHARP_);
});})(seq__34973,chunk__34974,count__34975,i__34976,file))
).then(((function (seq__34973,chunk__34974,count__34975,i__34976,file){
return (function (p1__34972_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__34972_SHARP_);
});})(seq__34973,chunk__34974,count__34975,i__34976,file))
);


var G__34987 = seq__34973;
var G__34988 = chunk__34974;
var G__34989 = count__34975;
var G__34990 = (i__34976 + (1));
seq__34973 = G__34987;
chunk__34974 = G__34988;
count__34975 = G__34989;
i__34976 = G__34990;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34973);
if(temp__5720__auto__){
var seq__34973__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34973__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34973__$1);
var G__34991 = cljs.core.chunk_rest.call(null,seq__34973__$1);
var G__34992 = c__4550__auto__;
var G__34993 = cljs.core.count.call(null,c__4550__auto__);
var G__34994 = (0);
seq__34973 = G__34991;
chunk__34974 = G__34992;
count__34975 = G__34993;
i__34976 = G__34994;
continue;
} else {
var file = cljs.core.first.call(null,seq__34973__$1);
file.arrayBuffer().then(((function (seq__34973,chunk__34974,count__34975,i__34976,file,seq__34973__$1,temp__5720__auto__){
return (function (p1__34971_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__34971_SHARP_);
});})(seq__34973,chunk__34974,count__34975,i__34976,file,seq__34973__$1,temp__5720__auto__))
).then(((function (seq__34973,chunk__34974,count__34975,i__34976,file,seq__34973__$1,temp__5720__auto__){
return (function (p1__34972_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__34972_SHARP_);
});})(seq__34973,chunk__34974,count__34975,i__34976,file,seq__34973__$1,temp__5720__auto__))
);


var G__34995 = cljs.core.next.call(null,seq__34973__$1);
var G__34996 = null;
var G__34997 = (0);
var G__34998 = (0);
seq__34973 = G__34995;
chunk__34974 = G__34996;
count__34975 = G__34997;
i__34976 = G__34998;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__34977(s__34978){
return (new cljs.core.LazySeq(null,(function (){
var s__34978__$1 = s__34978;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34978__$1);
if(temp__5720__auto__){
var s__34978__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34978__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34978__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34980 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34979 = (0);
while(true){
if((i__34979 < size__4522__auto__)){
var vec__34981 = cljs.core._nth.call(null,c__4521__auto__,i__34979);
var name = cljs.core.nth.call(null,vec__34981,(0),null);
var buffer = cljs.core.nth.call(null,vec__34981,(1),null);
cljs.core.chunk_append.call(null,b__34980,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__34999 = (i__34979 + (1));
i__34979 = G__34999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34980),fugue$ctx_ctrls$buffer_ctrl_$_iter__34977.call(null,cljs.core.chunk_rest.call(null,s__34978__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34980),null);
}
} else {
var vec__34984 = cljs.core.first.call(null,s__34978__$2);
var name = cljs.core.nth.call(null,vec__34984,(0),null);
var buffer = cljs.core.nth.call(null,vec__34984,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__34977.call(null,cljs.core.rest.call(null,s__34978__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610418168969
