// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.ctx_ctrls');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('webcv.midi');
goog.require('webcv.audio');
webcv.ctx_ctrls.midi_monitor = (function webcv$ctx_ctrls$midi_monitor(midi_ctx){
var inputs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__34706_34806 = cljs.core.seq.call(null,new cljs.core.Keyword("webcv.midi","ins","webcv.midi/ins",1736405462).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34708_34807 = null;
var count__34709_34808 = (0);
var i__34710_34809 = (0);
while(true){
if((i__34710_34809 < count__34709_34808)){
var vec__34752_34810 = cljs.core._nth.call(null,chunk__34708_34807,i__34710_34809);
var in_name_34811 = cljs.core.nth.call(null,vec__34752_34810,(0),null);
var in_mult_34812 = cljs.core.nth.call(null,vec__34752_34810,(1),null);
var in_chan_34813 = cljs.core.async.chan.call(null);
var c__31547__auto___34814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34706_34806,chunk__34708_34807,count__34709_34808,i__34710_34809,c__31547__auto___34814,in_chan_34813,vec__34752_34810,in_name_34811,in_mult_34812,inputs){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (seq__34706_34806,chunk__34708_34807,count__34709_34808,i__34710_34809,c__31547__auto___34814,in_chan_34813,vec__34752_34810,in_name_34811,in_mult_34812,inputs){
return (function (state_34763){
var state_val_34764 = (state_34763[(1)]);
if((state_val_34764 === (1))){
var state_34763__$1 = state_34763;
var statearr_34765_34815 = state_34763__$1;
(statearr_34765_34815[(2)] = null);

(statearr_34765_34815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34764 === (2))){
var state_34763__$1 = state_34763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34763__$1,(4),in_chan_34813);
} else {
if((state_val_34764 === (3))){
var inst_34761 = (state_34763[(2)]);
var state_34763__$1 = state_34763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34763__$1,inst_34761);
} else {
if((state_val_34764 === (4))){
var inst_34757 = (state_34763[(2)]);
var inst_34758 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34811,inst_34757);
var state_34763__$1 = (function (){var statearr_34766 = state_34763;
(statearr_34766[(7)] = inst_34758);

return statearr_34766;
})();
var statearr_34767_34816 = state_34763__$1;
(statearr_34767_34816[(2)] = null);

(statearr_34767_34816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34706_34806,chunk__34708_34807,count__34709_34808,i__34710_34809,c__31547__auto___34814,in_chan_34813,vec__34752_34810,in_name_34811,in_mult_34812,inputs))
;
return ((function (seq__34706_34806,chunk__34708_34807,count__34709_34808,i__34710_34809,switch__31452__auto__,c__31547__auto___34814,in_chan_34813,vec__34752_34810,in_name_34811,in_mult_34812,inputs){
return (function() {
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__ = null;
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____0 = (function (){
var statearr_34768 = [null,null,null,null,null,null,null,null];
(statearr_34768[(0)] = webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__);

(statearr_34768[(1)] = (1));

return statearr_34768;
});
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____1 = (function (state_34763){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_34763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e34769){if((e34769 instanceof Object)){
var ex__31456__auto__ = e34769;
var statearr_34770_34817 = state_34763;
(statearr_34770_34817[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34818 = state_34763;
state_34763 = G__34818;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__ = function(state_34763){
switch(arguments.length){
case 0:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____0.call(this);
case 1:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____1.call(this,state_34763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____0;
webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____1;
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__;
})()
;})(seq__34706_34806,chunk__34708_34807,count__34709_34808,i__34710_34809,switch__31452__auto__,c__31547__auto___34814,in_chan_34813,vec__34752_34810,in_name_34811,in_mult_34812,inputs))
})();
var state__31549__auto__ = (function (){var statearr_34771 = f__31548__auto__.call(null);
(statearr_34771[(6)] = c__31547__auto___34814);

return statearr_34771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(seq__34706_34806,chunk__34708_34807,count__34709_34808,i__34710_34809,c__31547__auto___34814,in_chan_34813,vec__34752_34810,in_name_34811,in_mult_34812,inputs))
);


cljs.core.async.tap.call(null,in_mult_34812,in_chan_34813);


var G__34819 = seq__34706_34806;
var G__34820 = chunk__34708_34807;
var G__34821 = count__34709_34808;
var G__34822 = (i__34710_34809 + (1));
seq__34706_34806 = G__34819;
chunk__34708_34807 = G__34820;
count__34709_34808 = G__34821;
i__34710_34809 = G__34822;
continue;
} else {
var temp__5720__auto___34823 = cljs.core.seq.call(null,seq__34706_34806);
if(temp__5720__auto___34823){
var seq__34706_34824__$1 = temp__5720__auto___34823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34706_34824__$1)){
var c__4550__auto___34825 = cljs.core.chunk_first.call(null,seq__34706_34824__$1);
var G__34826 = cljs.core.chunk_rest.call(null,seq__34706_34824__$1);
var G__34827 = c__4550__auto___34825;
var G__34828 = cljs.core.count.call(null,c__4550__auto___34825);
var G__34829 = (0);
seq__34706_34806 = G__34826;
chunk__34708_34807 = G__34827;
count__34709_34808 = G__34828;
i__34710_34809 = G__34829;
continue;
} else {
var vec__34772_34830 = cljs.core.first.call(null,seq__34706_34824__$1);
var in_name_34831 = cljs.core.nth.call(null,vec__34772_34830,(0),null);
var in_mult_34832 = cljs.core.nth.call(null,vec__34772_34830,(1),null);
var in_chan_34833 = cljs.core.async.chan.call(null);
var c__31547__auto___34834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34706_34806,chunk__34708_34807,count__34709_34808,i__34710_34809,c__31547__auto___34834,in_chan_34833,vec__34772_34830,in_name_34831,in_mult_34832,seq__34706_34824__$1,temp__5720__auto___34823,inputs){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (seq__34706_34806,chunk__34708_34807,count__34709_34808,i__34710_34809,c__31547__auto___34834,in_chan_34833,vec__34772_34830,in_name_34831,in_mult_34832,seq__34706_34824__$1,temp__5720__auto___34823,inputs){
return (function (state_34783){
var state_val_34784 = (state_34783[(1)]);
if((state_val_34784 === (1))){
var state_34783__$1 = state_34783;
var statearr_34785_34835 = state_34783__$1;
(statearr_34785_34835[(2)] = null);

(statearr_34785_34835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (2))){
var state_34783__$1 = state_34783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34783__$1,(4),in_chan_34833);
} else {
if((state_val_34784 === (3))){
var inst_34781 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34783__$1,inst_34781);
} else {
if((state_val_34784 === (4))){
var inst_34777 = (state_34783[(2)]);
var inst_34778 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34831,inst_34777);
var state_34783__$1 = (function (){var statearr_34786 = state_34783;
(statearr_34786[(7)] = inst_34778);

return statearr_34786;
})();
var statearr_34787_34836 = state_34783__$1;
(statearr_34787_34836[(2)] = null);

(statearr_34787_34836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34706_34806,chunk__34708_34807,count__34709_34808,i__34710_34809,c__31547__auto___34834,in_chan_34833,vec__34772_34830,in_name_34831,in_mult_34832,seq__34706_34824__$1,temp__5720__auto___34823,inputs))
;
return ((function (seq__34706_34806,chunk__34708_34807,count__34709_34808,i__34710_34809,switch__31452__auto__,c__31547__auto___34834,in_chan_34833,vec__34772_34830,in_name_34831,in_mult_34832,seq__34706_34824__$1,temp__5720__auto___34823,inputs){
return (function() {
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__ = null;
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____0 = (function (){
var statearr_34788 = [null,null,null,null,null,null,null,null];
(statearr_34788[(0)] = webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__);

(statearr_34788[(1)] = (1));

return statearr_34788;
});
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____1 = (function (state_34783){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_34783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e34789){if((e34789 instanceof Object)){
var ex__31456__auto__ = e34789;
var statearr_34790_34837 = state_34783;
(statearr_34790_34837[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34838 = state_34783;
state_34783 = G__34838;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__ = function(state_34783){
switch(arguments.length){
case 0:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____0.call(this);
case 1:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____1.call(this,state_34783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____0;
webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____1;
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__;
})()
;})(seq__34706_34806,chunk__34708_34807,count__34709_34808,i__34710_34809,switch__31452__auto__,c__31547__auto___34834,in_chan_34833,vec__34772_34830,in_name_34831,in_mult_34832,seq__34706_34824__$1,temp__5720__auto___34823,inputs))
})();
var state__31549__auto__ = (function (){var statearr_34791 = f__31548__auto__.call(null);
(statearr_34791[(6)] = c__31547__auto___34834);

return statearr_34791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(seq__34706_34806,chunk__34708_34807,count__34709_34808,i__34710_34809,c__31547__auto___34834,in_chan_34833,vec__34772_34830,in_name_34831,in_mult_34832,seq__34706_34824__$1,temp__5720__auto___34823,inputs))
);


cljs.core.async.tap.call(null,in_mult_34832,in_chan_34833);


var G__34839 = cljs.core.next.call(null,seq__34706_34824__$1);
var G__34840 = null;
var G__34841 = (0);
var G__34842 = (0);
seq__34706_34806 = G__34839;
chunk__34708_34807 = G__34840;
count__34709_34808 = G__34841;
i__34710_34809 = G__34842;
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
return (function webcv$ctx_ctrls$midi_monitor_$_iter__34792(s__34793){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34793__$1 = s__34793;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34793__$1);
if(temp__5720__auto__){
var s__34793__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34793__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34793__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34795 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34794 = (0);
while(true){
if((i__34794 < size__4522__auto__)){
var vec__34796 = cljs.core._nth.call(null,c__4521__auto__,i__34794);
var in_name = cljs.core.nth.call(null,vec__34796,(0),null);
var map__34799 = cljs.core.nth.call(null,vec__34796,(1),null);
var map__34799__$1 = (((((!((map__34799 == null))))?(((((map__34799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34799):map__34799);
var type = cljs.core.get.call(null,map__34799__$1,new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868));
var note = cljs.core.get.call(null,map__34799__$1,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544));
var velocity = cljs.core.get.call(null,map__34799__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
cljs.core.chunk_append.call(null,b__34795,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__34843 = (i__34794 + (1));
i__34794 = G__34843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34795),webcv$ctx_ctrls$midi_monitor_$_iter__34792.call(null,cljs.core.chunk_rest.call(null,s__34793__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34795),null);
}
} else {
var vec__34801 = cljs.core.first.call(null,s__34793__$2);
var in_name = cljs.core.nth.call(null,vec__34801,(0),null);
var map__34804 = cljs.core.nth.call(null,vec__34801,(1),null);
var map__34804__$1 = (((((!((map__34804 == null))))?(((((map__34804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34804):map__34804);
var type = cljs.core.get.call(null,map__34804__$1,new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868));
var note = cljs.core.get.call(null,map__34804__$1,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544));
var velocity = cljs.core.get.call(null,map__34804__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),webcv$ctx_ctrls$midi_monitor_$_iter__34792.call(null,cljs.core.rest.call(null,s__34793__$2)));
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
var temp__5718__auto___34846 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34846)){
var old_ctx_34847 = temp__5718__auto___34846;
new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438).cljs$core$IFn$_invoke$arity$1(old_ctx_34847).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,webcv.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34844 = temp__5718__auto__;
var map__34844__$1 = (((((!((map__34844 == null))))?(((((map__34844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34844):map__34844);
var actx = cljs.core.get.call(null,map__34844__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(actx.destination.maxChannelCount)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null)], null);
});

//# sourceMappingURL=ctx_ctrls.js.map?rel=1601307463123
