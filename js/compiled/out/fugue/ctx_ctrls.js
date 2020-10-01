// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ctx_ctrls');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('fugue.midi');
goog.require('fugue.audio');
fugue.ctx_ctrls.midi_monitor = (function fugue$ctx_ctrls$midi_monitor(midi_ctx){
var inputs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__34696_34796 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34698_34797 = null;
var count__34699_34798 = (0);
var i__34700_34799 = (0);
while(true){
if((i__34700_34799 < count__34699_34798)){
var vec__34742_34800 = cljs.core._nth.call(null,chunk__34698_34797,i__34700_34799);
var in_name_34801 = cljs.core.nth.call(null,vec__34742_34800,(0),null);
var in_mult_34802 = cljs.core.nth.call(null,vec__34742_34800,(1),null);
var in_chan_34803 = cljs.core.async.chan.call(null);
var c__32652__auto___34804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,c__32652__auto___34804,in_chan_34803,vec__34742_34800,in_name_34801,in_mult_34802,inputs){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,c__32652__auto___34804,in_chan_34803,vec__34742_34800,in_name_34801,in_mult_34802,inputs){
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
});})(seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,c__32652__auto___34804,in_chan_34803,vec__34742_34800,in_name_34801,in_mult_34802,inputs))
;
return ((function (seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,switch__32557__auto__,c__32652__auto___34804,in_chan_34803,vec__34742_34800,in_name_34801,in_mult_34802,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto____0 = (function (){
var statearr_34758 = [null,null,null,null,null,null,null,null];
(statearr_34758[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto__);

(statearr_34758[(1)] = (1));

return statearr_34758;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto____1 = (function (state_34753){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_34753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e34759){if((e34759 instanceof Object)){
var ex__32561__auto__ = e34759;
var statearr_34760_34807 = state_34753;
(statearr_34760_34807[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34808 = state_34753;
state_34753 = G__34808;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto__ = function(state_34753){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto____1.call(this,state_34753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto__;
})()
;})(seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,switch__32557__auto__,c__32652__auto___34804,in_chan_34803,vec__34742_34800,in_name_34801,in_mult_34802,inputs))
})();
var state__32654__auto__ = (function (){var statearr_34761 = f__32653__auto__.call(null);
(statearr_34761[(6)] = c__32652__auto___34804);

return statearr_34761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,c__32652__auto___34804,in_chan_34803,vec__34742_34800,in_name_34801,in_mult_34802,inputs))
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
var c__32652__auto___34824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,c__32652__auto___34824,in_chan_34823,vec__34762_34820,in_name_34821,in_mult_34822,seq__34696_34814__$1,temp__5720__auto___34813,inputs){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,c__32652__auto___34824,in_chan_34823,vec__34762_34820,in_name_34821,in_mult_34822,seq__34696_34814__$1,temp__5720__auto___34813,inputs){
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
});})(seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,c__32652__auto___34824,in_chan_34823,vec__34762_34820,in_name_34821,in_mult_34822,seq__34696_34814__$1,temp__5720__auto___34813,inputs))
;
return ((function (seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,switch__32557__auto__,c__32652__auto___34824,in_chan_34823,vec__34762_34820,in_name_34821,in_mult_34822,seq__34696_34814__$1,temp__5720__auto___34813,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto____0 = (function (){
var statearr_34778 = [null,null,null,null,null,null,null,null];
(statearr_34778[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto__);

(statearr_34778[(1)] = (1));

return statearr_34778;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto____1 = (function (state_34773){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_34773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e34779){if((e34779 instanceof Object)){
var ex__32561__auto__ = e34779;
var statearr_34780_34827 = state_34773;
(statearr_34780_34827[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34828 = state_34773;
state_34773 = G__34828;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto__ = function(state_34773){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto____1.call(this,state_34773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32558__auto__;
})()
;})(seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,switch__32557__auto__,c__32652__auto___34824,in_chan_34823,vec__34762_34820,in_name_34821,in_mult_34822,seq__34696_34814__$1,temp__5720__auto___34813,inputs))
})();
var state__32654__auto__ = (function (){var statearr_34781 = f__32653__auto__.call(null);
(statearr_34781[(6)] = c__32652__auto___34824);

return statearr_34781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(seq__34696_34796,chunk__34698_34797,count__34699_34798,i__34700_34799,c__32652__auto___34824,in_chan_34823,vec__34762_34820,in_name_34821,in_mult_34822,seq__34696_34814__$1,temp__5720__auto___34813,inputs))
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx)))," ins"].join('')], null),(function (){var iter__4523__auto__ = ((function (inputs){
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34782(s__34783){
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
var type = cljs.core.get.call(null,map__34789__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34789__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34789__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
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
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34785),fugue$ctx_ctrls$midi_monitor_$_iter__34782.call(null,cljs.core.chunk_rest.call(null,s__34783__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34785),null);
}
} else {
var vec__34791 = cljs.core.first.call(null,s__34783__$2);
var in_name = cljs.core.nth.call(null,vec__34791,(0),null);
var map__34794 = cljs.core.nth.call(null,vec__34791,(1),null);
var map__34794__$1 = (((((!((map__34794 == null))))?(((((map__34794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34794):map__34794);
var type = cljs.core.get.call(null,map__34794__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34794__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34794__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34782.call(null,cljs.core.rest.call(null,s__34783__$2)));
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
var temp__5718__auto___34837 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34837)){
var old_ctx_34838 = temp__5718__auto___34837;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_34838).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34835 = temp__5718__auto__;
var map__34835__$1 = (((((!((map__34835 == null))))?(((((map__34835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34835):map__34835);
var outs = cljs.core.get.call(null,map__34835__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__34834_SHARP_){
return console.log(p1__34834_SHARP_);
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
var seq__34841 = cljs.core.seq.call(null,files);
var chunk__34842 = null;
var count__34843 = (0);
var i__34844 = (0);
while(true){
if((i__34844 < count__34843)){
var file = cljs.core._nth.call(null,chunk__34842,i__34844);
file.arrayBuffer().then(((function (seq__34841,chunk__34842,count__34843,i__34844,file,files){
return (function (p1__34839_SHARP_){
return actx.decodeAudioData(p1__34839_SHARP_);
});})(seq__34841,chunk__34842,count__34843,i__34844,file,files))
).then(((function (seq__34841,chunk__34842,count__34843,i__34844,file,files){
return (function (p1__34840_SHARP_){
return buffer_cb.call(null,file.name,p1__34840_SHARP_);
});})(seq__34841,chunk__34842,count__34843,i__34844,file,files))
);


var G__34845 = seq__34841;
var G__34846 = chunk__34842;
var G__34847 = count__34843;
var G__34848 = (i__34844 + (1));
seq__34841 = G__34845;
chunk__34842 = G__34846;
count__34843 = G__34847;
i__34844 = G__34848;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34841);
if(temp__5720__auto__){
var seq__34841__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34841__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34841__$1);
var G__34849 = cljs.core.chunk_rest.call(null,seq__34841__$1);
var G__34850 = c__4550__auto__;
var G__34851 = cljs.core.count.call(null,c__4550__auto__);
var G__34852 = (0);
seq__34841 = G__34849;
chunk__34842 = G__34850;
count__34843 = G__34851;
i__34844 = G__34852;
continue;
} else {
var file = cljs.core.first.call(null,seq__34841__$1);
file.arrayBuffer().then(((function (seq__34841,chunk__34842,count__34843,i__34844,file,seq__34841__$1,temp__5720__auto__,files){
return (function (p1__34839_SHARP_){
return actx.decodeAudioData(p1__34839_SHARP_);
});})(seq__34841,chunk__34842,count__34843,i__34844,file,seq__34841__$1,temp__5720__auto__,files))
).then(((function (seq__34841,chunk__34842,count__34843,i__34844,file,seq__34841__$1,temp__5720__auto__,files){
return (function (p1__34840_SHARP_){
return buffer_cb.call(null,file.name,p1__34840_SHARP_);
});})(seq__34841,chunk__34842,count__34843,i__34844,file,seq__34841__$1,temp__5720__auto__,files))
);


var G__34853 = cljs.core.next.call(null,seq__34841__$1);
var G__34854 = null;
var G__34855 = (0);
var G__34856 = (0);
seq__34841 = G__34853;
chunk__34842 = G__34854;
count__34843 = G__34855;
i__34844 = G__34856;
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
var seq__34859 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__34860 = null;
var count__34861 = (0);
var i__34862 = (0);
while(true){
if((i__34862 < count__34861)){
var file = cljs.core._nth.call(null,chunk__34860,i__34862);
file.arrayBuffer().then(((function (seq__34859,chunk__34860,count__34861,i__34862,file){
return (function (p1__34857_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34857_SHARP_);
});})(seq__34859,chunk__34860,count__34861,i__34862,file))
).then(((function (seq__34859,chunk__34860,count__34861,i__34862,file){
return (function (p1__34858_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__34858_SHARP_);
});})(seq__34859,chunk__34860,count__34861,i__34862,file))
);


var G__34873 = seq__34859;
var G__34874 = chunk__34860;
var G__34875 = count__34861;
var G__34876 = (i__34862 + (1));
seq__34859 = G__34873;
chunk__34860 = G__34874;
count__34861 = G__34875;
i__34862 = G__34876;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34859);
if(temp__5720__auto__){
var seq__34859__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34859__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34859__$1);
var G__34877 = cljs.core.chunk_rest.call(null,seq__34859__$1);
var G__34878 = c__4550__auto__;
var G__34879 = cljs.core.count.call(null,c__4550__auto__);
var G__34880 = (0);
seq__34859 = G__34877;
chunk__34860 = G__34878;
count__34861 = G__34879;
i__34862 = G__34880;
continue;
} else {
var file = cljs.core.first.call(null,seq__34859__$1);
file.arrayBuffer().then(((function (seq__34859,chunk__34860,count__34861,i__34862,file,seq__34859__$1,temp__5720__auto__){
return (function (p1__34857_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34857_SHARP_);
});})(seq__34859,chunk__34860,count__34861,i__34862,file,seq__34859__$1,temp__5720__auto__))
).then(((function (seq__34859,chunk__34860,count__34861,i__34862,file,seq__34859__$1,temp__5720__auto__){
return (function (p1__34858_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__34858_SHARP_);
});})(seq__34859,chunk__34860,count__34861,i__34862,file,seq__34859__$1,temp__5720__auto__))
);


var G__34881 = cljs.core.next.call(null,seq__34859__$1);
var G__34882 = null;
var G__34883 = (0);
var G__34884 = (0);
seq__34859 = G__34881;
chunk__34860 = G__34882;
count__34861 = G__34883;
i__34862 = G__34884;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__34863(s__34864){
return (new cljs.core.LazySeq(null,(function (){
var s__34864__$1 = s__34864;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34864__$1);
if(temp__5720__auto__){
var s__34864__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34864__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34864__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34866 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34865 = (0);
while(true){
if((i__34865 < size__4522__auto__)){
var vec__34867 = cljs.core._nth.call(null,c__4521__auto__,i__34865);
var name = cljs.core.nth.call(null,vec__34867,(0),null);
var buffer = cljs.core.nth.call(null,vec__34867,(1),null);
cljs.core.chunk_append.call(null,b__34866,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__34885 = (i__34865 + (1));
i__34865 = G__34885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34866),fugue$ctx_ctrls$buffer_ctrl_$_iter__34863.call(null,cljs.core.chunk_rest.call(null,s__34864__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34866),null);
}
} else {
var vec__34870 = cljs.core.first.call(null,s__34864__$2);
var name = cljs.core.nth.call(null,vec__34870,(0),null);
var buffer = cljs.core.nth.call(null,vec__34870,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__34863.call(null,cljs.core.rest.call(null,s__34864__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1601516301389
