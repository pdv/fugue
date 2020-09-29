// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ctx_ctrls');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('fugue.midi');
goog.require('fugue.audio');
fugue.ctx_ctrls.midi_monitor = (function fugue$ctx_ctrls$midi_monitor(midi_ctx){
var inputs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__34688_34788 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34690_34789 = null;
var count__34691_34790 = (0);
var i__34692_34791 = (0);
while(true){
if((i__34692_34791 < count__34691_34790)){
var vec__34734_34792 = cljs.core._nth.call(null,chunk__34690_34789,i__34692_34791);
var in_name_34793 = cljs.core.nth.call(null,vec__34734_34792,(0),null);
var in_mult_34794 = cljs.core.nth.call(null,vec__34734_34792,(1),null);
var in_chan_34795 = cljs.core.async.chan.call(null);
var c__32644__auto___34796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34688_34788,chunk__34690_34789,count__34691_34790,i__34692_34791,c__32644__auto___34796,in_chan_34795,vec__34734_34792,in_name_34793,in_mult_34794,inputs){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (seq__34688_34788,chunk__34690_34789,count__34691_34790,i__34692_34791,c__32644__auto___34796,in_chan_34795,vec__34734_34792,in_name_34793,in_mult_34794,inputs){
return (function (state_34745){
var state_val_34746 = (state_34745[(1)]);
if((state_val_34746 === (1))){
var state_34745__$1 = state_34745;
var statearr_34747_34797 = state_34745__$1;
(statearr_34747_34797[(2)] = null);

(statearr_34747_34797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (2))){
var state_34745__$1 = state_34745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34745__$1,(4),in_chan_34795);
} else {
if((state_val_34746 === (3))){
var inst_34743 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34745__$1,inst_34743);
} else {
if((state_val_34746 === (4))){
var inst_34739 = (state_34745[(2)]);
var inst_34740 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34793,inst_34739);
var state_34745__$1 = (function (){var statearr_34748 = state_34745;
(statearr_34748[(7)] = inst_34740);

return statearr_34748;
})();
var statearr_34749_34798 = state_34745__$1;
(statearr_34749_34798[(2)] = null);

(statearr_34749_34798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34688_34788,chunk__34690_34789,count__34691_34790,i__34692_34791,c__32644__auto___34796,in_chan_34795,vec__34734_34792,in_name_34793,in_mult_34794,inputs))
;
return ((function (seq__34688_34788,chunk__34690_34789,count__34691_34790,i__34692_34791,switch__32549__auto__,c__32644__auto___34796,in_chan_34795,vec__34734_34792,in_name_34793,in_mult_34794,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto____0 = (function (){
var statearr_34750 = [null,null,null,null,null,null,null,null];
(statearr_34750[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto__);

(statearr_34750[(1)] = (1));

return statearr_34750;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto____1 = (function (state_34745){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_34745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e34751){if((e34751 instanceof Object)){
var ex__32553__auto__ = e34751;
var statearr_34752_34799 = state_34745;
(statearr_34752_34799[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34800 = state_34745;
state_34745 = G__34800;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto__ = function(state_34745){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto____1.call(this,state_34745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto__;
})()
;})(seq__34688_34788,chunk__34690_34789,count__34691_34790,i__34692_34791,switch__32549__auto__,c__32644__auto___34796,in_chan_34795,vec__34734_34792,in_name_34793,in_mult_34794,inputs))
})();
var state__32646__auto__ = (function (){var statearr_34753 = f__32645__auto__.call(null);
(statearr_34753[(6)] = c__32644__auto___34796);

return statearr_34753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(seq__34688_34788,chunk__34690_34789,count__34691_34790,i__34692_34791,c__32644__auto___34796,in_chan_34795,vec__34734_34792,in_name_34793,in_mult_34794,inputs))
);


cljs.core.async.tap.call(null,in_mult_34794,in_chan_34795);


var G__34801 = seq__34688_34788;
var G__34802 = chunk__34690_34789;
var G__34803 = count__34691_34790;
var G__34804 = (i__34692_34791 + (1));
seq__34688_34788 = G__34801;
chunk__34690_34789 = G__34802;
count__34691_34790 = G__34803;
i__34692_34791 = G__34804;
continue;
} else {
var temp__5720__auto___34805 = cljs.core.seq.call(null,seq__34688_34788);
if(temp__5720__auto___34805){
var seq__34688_34806__$1 = temp__5720__auto___34805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34688_34806__$1)){
var c__4550__auto___34807 = cljs.core.chunk_first.call(null,seq__34688_34806__$1);
var G__34808 = cljs.core.chunk_rest.call(null,seq__34688_34806__$1);
var G__34809 = c__4550__auto___34807;
var G__34810 = cljs.core.count.call(null,c__4550__auto___34807);
var G__34811 = (0);
seq__34688_34788 = G__34808;
chunk__34690_34789 = G__34809;
count__34691_34790 = G__34810;
i__34692_34791 = G__34811;
continue;
} else {
var vec__34754_34812 = cljs.core.first.call(null,seq__34688_34806__$1);
var in_name_34813 = cljs.core.nth.call(null,vec__34754_34812,(0),null);
var in_mult_34814 = cljs.core.nth.call(null,vec__34754_34812,(1),null);
var in_chan_34815 = cljs.core.async.chan.call(null);
var c__32644__auto___34816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34688_34788,chunk__34690_34789,count__34691_34790,i__34692_34791,c__32644__auto___34816,in_chan_34815,vec__34754_34812,in_name_34813,in_mult_34814,seq__34688_34806__$1,temp__5720__auto___34805,inputs){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (seq__34688_34788,chunk__34690_34789,count__34691_34790,i__34692_34791,c__32644__auto___34816,in_chan_34815,vec__34754_34812,in_name_34813,in_mult_34814,seq__34688_34806__$1,temp__5720__auto___34805,inputs){
return (function (state_34765){
var state_val_34766 = (state_34765[(1)]);
if((state_val_34766 === (1))){
var state_34765__$1 = state_34765;
var statearr_34767_34817 = state_34765__$1;
(statearr_34767_34817[(2)] = null);

(statearr_34767_34817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (2))){
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34765__$1,(4),in_chan_34815);
} else {
if((state_val_34766 === (3))){
var inst_34763 = (state_34765[(2)]);
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34765__$1,inst_34763);
} else {
if((state_val_34766 === (4))){
var inst_34759 = (state_34765[(2)]);
var inst_34760 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34813,inst_34759);
var state_34765__$1 = (function (){var statearr_34768 = state_34765;
(statearr_34768[(7)] = inst_34760);

return statearr_34768;
})();
var statearr_34769_34818 = state_34765__$1;
(statearr_34769_34818[(2)] = null);

(statearr_34769_34818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34688_34788,chunk__34690_34789,count__34691_34790,i__34692_34791,c__32644__auto___34816,in_chan_34815,vec__34754_34812,in_name_34813,in_mult_34814,seq__34688_34806__$1,temp__5720__auto___34805,inputs))
;
return ((function (seq__34688_34788,chunk__34690_34789,count__34691_34790,i__34692_34791,switch__32549__auto__,c__32644__auto___34816,in_chan_34815,vec__34754_34812,in_name_34813,in_mult_34814,seq__34688_34806__$1,temp__5720__auto___34805,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto____0 = (function (){
var statearr_34770 = [null,null,null,null,null,null,null,null];
(statearr_34770[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto__);

(statearr_34770[(1)] = (1));

return statearr_34770;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto____1 = (function (state_34765){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_34765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e34771){if((e34771 instanceof Object)){
var ex__32553__auto__ = e34771;
var statearr_34772_34819 = state_34765;
(statearr_34772_34819[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34820 = state_34765;
state_34765 = G__34820;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto__ = function(state_34765){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto____1.call(this,state_34765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32550__auto__;
})()
;})(seq__34688_34788,chunk__34690_34789,count__34691_34790,i__34692_34791,switch__32549__auto__,c__32644__auto___34816,in_chan_34815,vec__34754_34812,in_name_34813,in_mult_34814,seq__34688_34806__$1,temp__5720__auto___34805,inputs))
})();
var state__32646__auto__ = (function (){var statearr_34773 = f__32645__auto__.call(null);
(statearr_34773[(6)] = c__32644__auto___34816);

return statearr_34773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(seq__34688_34788,chunk__34690_34789,count__34691_34790,i__34692_34791,c__32644__auto___34816,in_chan_34815,vec__34754_34812,in_name_34813,in_mult_34814,seq__34688_34806__$1,temp__5720__auto___34805,inputs))
);


cljs.core.async.tap.call(null,in_mult_34814,in_chan_34815);


var G__34821 = cljs.core.next.call(null,seq__34688_34806__$1);
var G__34822 = null;
var G__34823 = (0);
var G__34824 = (0);
seq__34688_34788 = G__34821;
chunk__34690_34789 = G__34822;
count__34691_34790 = G__34823;
i__34692_34791 = G__34824;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34774(s__34775){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34775__$1 = s__34775;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34775__$1);
if(temp__5720__auto__){
var s__34775__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34775__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34775__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34777 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34776 = (0);
while(true){
if((i__34776 < size__4522__auto__)){
var vec__34778 = cljs.core._nth.call(null,c__4521__auto__,i__34776);
var in_name = cljs.core.nth.call(null,vec__34778,(0),null);
var map__34781 = cljs.core.nth.call(null,vec__34778,(1),null);
var map__34781__$1 = (((((!((map__34781 == null))))?(((((map__34781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34781):map__34781);
var type = cljs.core.get.call(null,map__34781__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34781__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34781__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__34777,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__34825 = (i__34776 + (1));
i__34776 = G__34825;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34777),fugue$ctx_ctrls$midi_monitor_$_iter__34774.call(null,cljs.core.chunk_rest.call(null,s__34775__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34777),null);
}
} else {
var vec__34783 = cljs.core.first.call(null,s__34775__$2);
var in_name = cljs.core.nth.call(null,vec__34783,(0),null);
var map__34786 = cljs.core.nth.call(null,vec__34783,(1),null);
var map__34786__$1 = (((((!((map__34786 == null))))?(((((map__34786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34786):map__34786);
var type = cljs.core.get.call(null,map__34786__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34786__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34786__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34774.call(null,cljs.core.rest.call(null,s__34775__$2)));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5718__auto___34828 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34828)){
var old_ctx_34829 = temp__5718__auto___34828;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_34829).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34826 = temp__5718__auto__;
var map__34826__$1 = (((((!((map__34826 == null))))?(((((map__34826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34826):map__34826);
var actx = cljs.core.get.call(null,map__34826__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(actx.destination.maxChannelCount)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null)], null);
});
fugue.ctx_ctrls.read_file_upload = (function fugue$ctx_ctrls$read_file_upload(e,actx,buffer_cb){
var files = Array.from(e.target.files);
var seq__34832 = cljs.core.seq.call(null,files);
var chunk__34833 = null;
var count__34834 = (0);
var i__34835 = (0);
while(true){
if((i__34835 < count__34834)){
var file = cljs.core._nth.call(null,chunk__34833,i__34835);
file.arrayBuffer().then(((function (seq__34832,chunk__34833,count__34834,i__34835,file,files){
return (function (p1__34830_SHARP_){
return actx.decodeAudioData(p1__34830_SHARP_);
});})(seq__34832,chunk__34833,count__34834,i__34835,file,files))
).then(((function (seq__34832,chunk__34833,count__34834,i__34835,file,files){
return (function (p1__34831_SHARP_){
return buffer_cb.call(null,file.name,p1__34831_SHARP_);
});})(seq__34832,chunk__34833,count__34834,i__34835,file,files))
);


var G__34836 = seq__34832;
var G__34837 = chunk__34833;
var G__34838 = count__34834;
var G__34839 = (i__34835 + (1));
seq__34832 = G__34836;
chunk__34833 = G__34837;
count__34834 = G__34838;
i__34835 = G__34839;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34832);
if(temp__5720__auto__){
var seq__34832__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34832__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34832__$1);
var G__34840 = cljs.core.chunk_rest.call(null,seq__34832__$1);
var G__34841 = c__4550__auto__;
var G__34842 = cljs.core.count.call(null,c__4550__auto__);
var G__34843 = (0);
seq__34832 = G__34840;
chunk__34833 = G__34841;
count__34834 = G__34842;
i__34835 = G__34843;
continue;
} else {
var file = cljs.core.first.call(null,seq__34832__$1);
file.arrayBuffer().then(((function (seq__34832,chunk__34833,count__34834,i__34835,file,seq__34832__$1,temp__5720__auto__,files){
return (function (p1__34830_SHARP_){
return actx.decodeAudioData(p1__34830_SHARP_);
});})(seq__34832,chunk__34833,count__34834,i__34835,file,seq__34832__$1,temp__5720__auto__,files))
).then(((function (seq__34832,chunk__34833,count__34834,i__34835,file,seq__34832__$1,temp__5720__auto__,files){
return (function (p1__34831_SHARP_){
return buffer_cb.call(null,file.name,p1__34831_SHARP_);
});})(seq__34832,chunk__34833,count__34834,i__34835,file,seq__34832__$1,temp__5720__auto__,files))
);


var G__34844 = cljs.core.next.call(null,seq__34832__$1);
var G__34845 = null;
var G__34846 = (0);
var G__34847 = (0);
seq__34832 = G__34844;
chunk__34833 = G__34845;
count__34834 = G__34846;
i__34835 = G__34847;
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
var seq__34850 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__34851 = null;
var count__34852 = (0);
var i__34853 = (0);
while(true){
if((i__34853 < count__34852)){
var file = cljs.core._nth.call(null,chunk__34851,i__34853);
file.arrayBuffer().then(((function (seq__34850,chunk__34851,count__34852,i__34853,file){
return (function (p1__34848_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34848_SHARP_);
});})(seq__34850,chunk__34851,count__34852,i__34853,file))
).then(((function (seq__34850,chunk__34851,count__34852,i__34853,file){
return (function (p1__34849_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__34849_SHARP_);
});})(seq__34850,chunk__34851,count__34852,i__34853,file))
);


var G__34864 = seq__34850;
var G__34865 = chunk__34851;
var G__34866 = count__34852;
var G__34867 = (i__34853 + (1));
seq__34850 = G__34864;
chunk__34851 = G__34865;
count__34852 = G__34866;
i__34853 = G__34867;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34850);
if(temp__5720__auto__){
var seq__34850__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34850__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34850__$1);
var G__34868 = cljs.core.chunk_rest.call(null,seq__34850__$1);
var G__34869 = c__4550__auto__;
var G__34870 = cljs.core.count.call(null,c__4550__auto__);
var G__34871 = (0);
seq__34850 = G__34868;
chunk__34851 = G__34869;
count__34852 = G__34870;
i__34853 = G__34871;
continue;
} else {
var file = cljs.core.first.call(null,seq__34850__$1);
file.arrayBuffer().then(((function (seq__34850,chunk__34851,count__34852,i__34853,file,seq__34850__$1,temp__5720__auto__){
return (function (p1__34848_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34848_SHARP_);
});})(seq__34850,chunk__34851,count__34852,i__34853,file,seq__34850__$1,temp__5720__auto__))
).then(((function (seq__34850,chunk__34851,count__34852,i__34853,file,seq__34850__$1,temp__5720__auto__){
return (function (p1__34849_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__34849_SHARP_);
});})(seq__34850,chunk__34851,count__34852,i__34853,file,seq__34850__$1,temp__5720__auto__))
);


var G__34872 = cljs.core.next.call(null,seq__34850__$1);
var G__34873 = null;
var G__34874 = (0);
var G__34875 = (0);
seq__34850 = G__34872;
chunk__34851 = G__34873;
count__34852 = G__34874;
i__34853 = G__34875;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__34854(s__34855){
return (new cljs.core.LazySeq(null,(function (){
var s__34855__$1 = s__34855;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34855__$1);
if(temp__5720__auto__){
var s__34855__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34855__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34855__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34857 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34856 = (0);
while(true){
if((i__34856 < size__4522__auto__)){
var vec__34858 = cljs.core._nth.call(null,c__4521__auto__,i__34856);
var name = cljs.core.nth.call(null,vec__34858,(0),null);
var buffer = cljs.core.nth.call(null,vec__34858,(1),null);
cljs.core.chunk_append.call(null,b__34857,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__34876 = (i__34856 + (1));
i__34856 = G__34876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34857),fugue$ctx_ctrls$buffer_ctrl_$_iter__34854.call(null,cljs.core.chunk_rest.call(null,s__34855__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34857),null);
}
} else {
var vec__34861 = cljs.core.first.call(null,s__34855__$2);
var name = cljs.core.nth.call(null,vec__34861,(0),null);
var buffer = cljs.core.nth.call(null,vec__34861,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__34854.call(null,cljs.core.rest.call(null,s__34855__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1601408406898
