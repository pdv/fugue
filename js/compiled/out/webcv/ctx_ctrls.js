// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.ctx_ctrls');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('webcv.midi');
goog.require('webcv.audio');
webcv.ctx_ctrls.midi_monitor = (function webcv$ctx_ctrls$midi_monitor(midi_ctx){
var inputs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__34696_34796 = cljs.core.seq.call(null,new cljs.core.Keyword("webcv.midi","ins","webcv.midi/ins",1736405462).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34698_34797 = null;
var count__34699_34798 = (0);
var i__34700_34799 = (0);
while(true){
if((i__34700_34799 < count__34699_34798)){
var vec__34742_34800 = cljs.core._nth.call(null,chunk__34698_34797,i__34700_34799);
var in_name_34801 = cljs.core.nth.call(null,vec__34742_34800,(0),null);
var in_mult_34802 = cljs.core.nth.call(null,vec__34742_34800,(1),null);
var in_chan_34803 = cljs.core.async.chan.call(null);
var c__31547__auto___34804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,c__31547__auto___34804,in_chan_34803,vec__34742_34800,in_name_34801,in_mult_34802,inputs){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,c__31547__auto___34804,in_chan_34803,vec__34742_34800,in_name_34801,in_mult_34802,inputs){
return (function (state_34753){
var state_val_34754 = (state_34753[(1)]);
if((state_val_34754 === (1))){
var state_34753__$1 = state_34753;
var statearr_34755_34805 = state_34753__$1;
(statearr_34755_34805[(2)] = null);

(statearr_34755_34805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (2))){
var state_34753__$1 = state_34753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34753__$1,(4),in_chan_34803);
} else {
if((state_val_34754 === (3))){
var inst_34751 = (state_34753[(2)]);
var state_34753__$1 = state_34753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34753__$1,inst_34751);
} else {
if((state_val_34754 === (4))){
var inst_34747 = (state_34753[(2)]);
var inst_34748 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34801,inst_34747);
var state_34753__$1 = (function (){var statearr_34756 = state_34753;
(statearr_34756[(7)] = inst_34748);

return statearr_34756;
})();
var statearr_34757_34806 = state_34753__$1;
(statearr_34757_34806[(2)] = null);

(statearr_34757_34806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,c__31547__auto___34804,in_chan_34803,vec__34742_34800,in_name_34801,in_mult_34802,inputs))
;
return ((function (seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,switch__31452__auto__,c__31547__auto___34804,in_chan_34803,vec__34742_34800,in_name_34801,in_mult_34802,inputs){
return (function() {
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__ = null;
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____0 = (function (){
var statearr_34758 = [null,null,null,null,null,null,null,null];
(statearr_34758[(0)] = webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__);

(statearr_34758[(1)] = (1));

return statearr_34758;
});
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____1 = (function (state_34753){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_34753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e34759){if((e34759 instanceof Object)){
var ex__31456__auto__ = e34759;
var statearr_34760_34807 = state_34753;
(statearr_34760_34807[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34808 = state_34753;
state_34753 = G__34808;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__ = function(state_34753){
switch(arguments.length){
case 0:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____0.call(this);
case 1:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____1.call(this,state_34753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____0;
webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____1;
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__;
})()
;})(seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,switch__31452__auto__,c__31547__auto___34804,in_chan_34803,vec__34742_34800,in_name_34801,in_mult_34802,inputs))
})();
var state__31549__auto__ = (function (){var statearr_34761 = f__31548__auto__.call(null);
(statearr_34761[(6)] = c__31547__auto___34804);

return statearr_34761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,c__31547__auto___34804,in_chan_34803,vec__34742_34800,in_name_34801,in_mult_34802,inputs))
);


cljs.core.async.tap.call(null,in_mult_34802,in_chan_34803);


var G__34809 = seq__34696_34796;
var G__34810 = chunk__34698_34797;
var G__34811 = count__34699_34798;
var G__34812 = (i__34700_34799 + (1));
seq__34696_34796 = G__34809;
chunk__34698_34797 = G__34810;
count__34699_34798 = G__34811;
i__34700_34799 = G__34812;
continue;
} else {
var temp__5720__auto___34813 = cljs.core.seq.call(null,seq__34696_34796);
if(temp__5720__auto___34813){
var seq__34696_34814__$1 = temp__5720__auto___34813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34696_34814__$1)){
var c__4550__auto___34815 = cljs.core.chunk_first.call(null,seq__34696_34814__$1);
var G__34816 = cljs.core.chunk_rest.call(null,seq__34696_34814__$1);
var G__34817 = c__4550__auto___34815;
var G__34818 = cljs.core.count.call(null,c__4550__auto___34815);
var G__34819 = (0);
seq__34696_34796 = G__34816;
chunk__34698_34797 = G__34817;
count__34699_34798 = G__34818;
i__34700_34799 = G__34819;
continue;
} else {
var vec__34762_34820 = cljs.core.first.call(null,seq__34696_34814__$1);
var in_name_34821 = cljs.core.nth.call(null,vec__34762_34820,(0),null);
var in_mult_34822 = cljs.core.nth.call(null,vec__34762_34820,(1),null);
var in_chan_34823 = cljs.core.async.chan.call(null);
var c__31547__auto___34824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,c__31547__auto___34824,in_chan_34823,vec__34762_34820,in_name_34821,in_mult_34822,seq__34696_34814__$1,temp__5720__auto___34813,inputs){
return (function (){
var f__31548__auto__ = (function (){var switch__31452__auto__ = ((function (seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,c__31547__auto___34824,in_chan_34823,vec__34762_34820,in_name_34821,in_mult_34822,seq__34696_34814__$1,temp__5720__auto___34813,inputs){
return (function (state_34773){
var state_val_34774 = (state_34773[(1)]);
if((state_val_34774 === (1))){
var state_34773__$1 = state_34773;
var statearr_34775_34825 = state_34773__$1;
(statearr_34775_34825[(2)] = null);

(statearr_34775_34825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34774 === (2))){
var state_34773__$1 = state_34773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34773__$1,(4),in_chan_34823);
} else {
if((state_val_34774 === (3))){
var inst_34771 = (state_34773[(2)]);
var state_34773__$1 = state_34773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34773__$1,inst_34771);
} else {
if((state_val_34774 === (4))){
var inst_34767 = (state_34773[(2)]);
var inst_34768 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34821,inst_34767);
var state_34773__$1 = (function (){var statearr_34776 = state_34773;
(statearr_34776[(7)] = inst_34768);

return statearr_34776;
})();
var statearr_34777_34826 = state_34773__$1;
(statearr_34777_34826[(2)] = null);

(statearr_34777_34826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,c__31547__auto___34824,in_chan_34823,vec__34762_34820,in_name_34821,in_mult_34822,seq__34696_34814__$1,temp__5720__auto___34813,inputs))
;
return ((function (seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,switch__31452__auto__,c__31547__auto___34824,in_chan_34823,vec__34762_34820,in_name_34821,in_mult_34822,seq__34696_34814__$1,temp__5720__auto___34813,inputs){
return (function() {
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__ = null;
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____0 = (function (){
var statearr_34778 = [null,null,null,null,null,null,null,null];
(statearr_34778[(0)] = webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__);

(statearr_34778[(1)] = (1));

return statearr_34778;
});
var webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____1 = (function (state_34773){
while(true){
var ret_value__31454__auto__ = (function (){try{while(true){
var result__31455__auto__ = switch__31452__auto__.call(null,state_34773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31455__auto__;
}
break;
}
}catch (e34779){if((e34779 instanceof Object)){
var ex__31456__auto__ = e34779;
var statearr_34780_34827 = state_34773;
(statearr_34780_34827[(5)] = ex__31456__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31454__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34828 = state_34773;
state_34773 = G__34828;
continue;
} else {
return ret_value__31454__auto__;
}
break;
}
});
webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__ = function(state_34773){
switch(arguments.length){
case 0:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____0.call(this);
case 1:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____1.call(this,state_34773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____0;
webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto____1;
return webcv$ctx_ctrls$midi_monitor_$_state_machine__31453__auto__;
})()
;})(seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,switch__31452__auto__,c__31547__auto___34824,in_chan_34823,vec__34762_34820,in_name_34821,in_mult_34822,seq__34696_34814__$1,temp__5720__auto___34813,inputs))
})();
var state__31549__auto__ = (function (){var statearr_34781 = f__31548__auto__.call(null);
(statearr_34781[(6)] = c__31547__auto___34824);

return statearr_34781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31549__auto__);
});})(seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,c__31547__auto___34824,in_chan_34823,vec__34762_34820,in_name_34821,in_mult_34822,seq__34696_34814__$1,temp__5720__auto___34813,inputs))
);


cljs.core.async.tap.call(null,in_mult_34822,in_chan_34823);


var G__34829 = cljs.core.next.call(null,seq__34696_34814__$1);
var G__34830 = null;
var G__34831 = (0);
var G__34832 = (0);
seq__34696_34796 = G__34829;
chunk__34698_34797 = G__34830;
count__34699_34798 = G__34831;
i__34700_34799 = G__34832;
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
return (function webcv$ctx_ctrls$midi_monitor_$_iter__34782(s__34783){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34783__$1 = s__34783;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34783__$1);
if(temp__5720__auto__){
var s__34783__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34783__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34783__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34785 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34784 = (0);
while(true){
if((i__34784 < size__4522__auto__)){
var vec__34786 = cljs.core._nth.call(null,c__4521__auto__,i__34784);
var in_name = cljs.core.nth.call(null,vec__34786,(0),null);
var map__34789 = cljs.core.nth.call(null,vec__34786,(1),null);
var map__34789__$1 = (((((!((map__34789 == null))))?(((((map__34789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34789):map__34789);
var type = cljs.core.get.call(null,map__34789__$1,new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868));
var note = cljs.core.get.call(null,map__34789__$1,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544));
var velocity = cljs.core.get.call(null,map__34789__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
cljs.core.chunk_append.call(null,b__34785,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__34833 = (i__34784 + (1));
i__34784 = G__34833;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34785),webcv$ctx_ctrls$midi_monitor_$_iter__34782.call(null,cljs.core.chunk_rest.call(null,s__34783__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34785),null);
}
} else {
var vec__34791 = cljs.core.first.call(null,s__34783__$2);
var in_name = cljs.core.nth.call(null,vec__34791,(0),null);
var map__34794 = cljs.core.nth.call(null,vec__34791,(1),null);
var map__34794__$1 = (((((!((map__34794 == null))))?(((((map__34794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34794):map__34794);
var type = cljs.core.get.call(null,map__34794__$1,new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868));
var note = cljs.core.get.call(null,map__34794__$1,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544));
var velocity = cljs.core.get.call(null,map__34794__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),webcv$ctx_ctrls$midi_monitor_$_iter__34782.call(null,cljs.core.rest.call(null,s__34783__$2)));
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
var temp__5718__auto___34836 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34836)){
var old_ctx_34837 = temp__5718__auto___34836;
new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438).cljs$core$IFn$_invoke$arity$1(old_ctx_34837).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,webcv.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34834 = temp__5718__auto__;
var map__34834__$1 = (((((!((map__34834 == null))))?(((((map__34834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34834):map__34834);
var actx = cljs.core.get.call(null,map__34834__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(actx.destination.maxChannelCount)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null)], null);
});

//# sourceMappingURL=ctx_ctrls.js.map?rel=1601321438641
