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
var seq__34717_34817 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34719_34818 = null;
var count__34720_34819 = (0);
var i__34721_34820 = (0);
while(true){
if((i__34721_34820 < count__34720_34819)){
var vec__34763_34821 = cljs.core._nth.call(null,chunk__34719_34818,i__34721_34820);
var in_name_34822 = cljs.core.nth.call(null,vec__34763_34821,(0),null);
var in_mult_34823 = cljs.core.nth.call(null,vec__34763_34821,(1),null);
var in_chan_34824 = cljs.core.async.chan.call(null);
var c__32673__auto___34825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34717_34817,chunk__34719_34818,count__34720_34819,i__34721_34820,c__32673__auto___34825,in_chan_34824,vec__34763_34821,in_name_34822,in_mult_34823,inputs){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (seq__34717_34817,chunk__34719_34818,count__34720_34819,i__34721_34820,c__32673__auto___34825,in_chan_34824,vec__34763_34821,in_name_34822,in_mult_34823,inputs){
return (function (state_34774){
var state_val_34775 = (state_34774[(1)]);
if((state_val_34775 === (1))){
var state_34774__$1 = state_34774;
var statearr_34776_34826 = state_34774__$1;
(statearr_34776_34826[(2)] = null);

(statearr_34776_34826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34775 === (2))){
var state_34774__$1 = state_34774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34774__$1,(4),in_chan_34824);
} else {
if((state_val_34775 === (3))){
var inst_34772 = (state_34774[(2)]);
var state_34774__$1 = state_34774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34774__$1,inst_34772);
} else {
if((state_val_34775 === (4))){
var inst_34768 = (state_34774[(2)]);
var inst_34769 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34822,inst_34768);
var state_34774__$1 = (function (){var statearr_34777 = state_34774;
(statearr_34777[(7)] = inst_34769);

return statearr_34777;
})();
var statearr_34778_34827 = state_34774__$1;
(statearr_34778_34827[(2)] = null);

(statearr_34778_34827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34717_34817,chunk__34719_34818,count__34720_34819,i__34721_34820,c__32673__auto___34825,in_chan_34824,vec__34763_34821,in_name_34822,in_mult_34823,inputs))
;
return ((function (seq__34717_34817,chunk__34719_34818,count__34720_34819,i__34721_34820,switch__32578__auto__,c__32673__auto___34825,in_chan_34824,vec__34763_34821,in_name_34822,in_mult_34823,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto____0 = (function (){
var statearr_34779 = [null,null,null,null,null,null,null,null];
(statearr_34779[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto__);

(statearr_34779[(1)] = (1));

return statearr_34779;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto____1 = (function (state_34774){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_34774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e34780){if((e34780 instanceof Object)){
var ex__32582__auto__ = e34780;
var statearr_34781_34828 = state_34774;
(statearr_34781_34828[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34829 = state_34774;
state_34774 = G__34829;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto__ = function(state_34774){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto____1.call(this,state_34774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto__;
})()
;})(seq__34717_34817,chunk__34719_34818,count__34720_34819,i__34721_34820,switch__32578__auto__,c__32673__auto___34825,in_chan_34824,vec__34763_34821,in_name_34822,in_mult_34823,inputs))
})();
var state__32675__auto__ = (function (){var statearr_34782 = f__32674__auto__.call(null);
(statearr_34782[(6)] = c__32673__auto___34825);

return statearr_34782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(seq__34717_34817,chunk__34719_34818,count__34720_34819,i__34721_34820,c__32673__auto___34825,in_chan_34824,vec__34763_34821,in_name_34822,in_mult_34823,inputs))
);


cljs.core.async.tap.call(null,in_mult_34823,in_chan_34824);


var G__34830 = seq__34717_34817;
var G__34831 = chunk__34719_34818;
var G__34832 = count__34720_34819;
var G__34833 = (i__34721_34820 + (1));
seq__34717_34817 = G__34830;
chunk__34719_34818 = G__34831;
count__34720_34819 = G__34832;
i__34721_34820 = G__34833;
continue;
} else {
var temp__5720__auto___34834 = cljs.core.seq.call(null,seq__34717_34817);
if(temp__5720__auto___34834){
var seq__34717_34835__$1 = temp__5720__auto___34834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34717_34835__$1)){
var c__4550__auto___34836 = cljs.core.chunk_first.call(null,seq__34717_34835__$1);
var G__34837 = cljs.core.chunk_rest.call(null,seq__34717_34835__$1);
var G__34838 = c__4550__auto___34836;
var G__34839 = cljs.core.count.call(null,c__4550__auto___34836);
var G__34840 = (0);
seq__34717_34817 = G__34837;
chunk__34719_34818 = G__34838;
count__34720_34819 = G__34839;
i__34721_34820 = G__34840;
continue;
} else {
var vec__34783_34841 = cljs.core.first.call(null,seq__34717_34835__$1);
var in_name_34842 = cljs.core.nth.call(null,vec__34783_34841,(0),null);
var in_mult_34843 = cljs.core.nth.call(null,vec__34783_34841,(1),null);
var in_chan_34844 = cljs.core.async.chan.call(null);
var c__32673__auto___34845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34717_34817,chunk__34719_34818,count__34720_34819,i__34721_34820,c__32673__auto___34845,in_chan_34844,vec__34783_34841,in_name_34842,in_mult_34843,seq__34717_34835__$1,temp__5720__auto___34834,inputs){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (seq__34717_34817,chunk__34719_34818,count__34720_34819,i__34721_34820,c__32673__auto___34845,in_chan_34844,vec__34783_34841,in_name_34842,in_mult_34843,seq__34717_34835__$1,temp__5720__auto___34834,inputs){
return (function (state_34794){
var state_val_34795 = (state_34794[(1)]);
if((state_val_34795 === (1))){
var state_34794__$1 = state_34794;
var statearr_34796_34846 = state_34794__$1;
(statearr_34796_34846[(2)] = null);

(statearr_34796_34846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (2))){
var state_34794__$1 = state_34794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34794__$1,(4),in_chan_34844);
} else {
if((state_val_34795 === (3))){
var inst_34792 = (state_34794[(2)]);
var state_34794__$1 = state_34794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34794__$1,inst_34792);
} else {
if((state_val_34795 === (4))){
var inst_34788 = (state_34794[(2)]);
var inst_34789 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34842,inst_34788);
var state_34794__$1 = (function (){var statearr_34797 = state_34794;
(statearr_34797[(7)] = inst_34789);

return statearr_34797;
})();
var statearr_34798_34847 = state_34794__$1;
(statearr_34798_34847[(2)] = null);

(statearr_34798_34847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34717_34817,chunk__34719_34818,count__34720_34819,i__34721_34820,c__32673__auto___34845,in_chan_34844,vec__34783_34841,in_name_34842,in_mult_34843,seq__34717_34835__$1,temp__5720__auto___34834,inputs))
;
return ((function (seq__34717_34817,chunk__34719_34818,count__34720_34819,i__34721_34820,switch__32578__auto__,c__32673__auto___34845,in_chan_34844,vec__34783_34841,in_name_34842,in_mult_34843,seq__34717_34835__$1,temp__5720__auto___34834,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto____0 = (function (){
var statearr_34799 = [null,null,null,null,null,null,null,null];
(statearr_34799[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto__);

(statearr_34799[(1)] = (1));

return statearr_34799;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto____1 = (function (state_34794){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_34794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e34800){if((e34800 instanceof Object)){
var ex__32582__auto__ = e34800;
var statearr_34801_34848 = state_34794;
(statearr_34801_34848[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34849 = state_34794;
state_34794 = G__34849;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto__ = function(state_34794){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto____1.call(this,state_34794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32579__auto__;
})()
;})(seq__34717_34817,chunk__34719_34818,count__34720_34819,i__34721_34820,switch__32578__auto__,c__32673__auto___34845,in_chan_34844,vec__34783_34841,in_name_34842,in_mult_34843,seq__34717_34835__$1,temp__5720__auto___34834,inputs))
})();
var state__32675__auto__ = (function (){var statearr_34802 = f__32674__auto__.call(null);
(statearr_34802[(6)] = c__32673__auto___34845);

return statearr_34802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(seq__34717_34817,chunk__34719_34818,count__34720_34819,i__34721_34820,c__32673__auto___34845,in_chan_34844,vec__34783_34841,in_name_34842,in_mult_34843,seq__34717_34835__$1,temp__5720__auto___34834,inputs))
);


cljs.core.async.tap.call(null,in_mult_34843,in_chan_34844);


var G__34850 = cljs.core.next.call(null,seq__34717_34835__$1);
var G__34851 = null;
var G__34852 = (0);
var G__34853 = (0);
seq__34717_34817 = G__34850;
chunk__34719_34818 = G__34851;
count__34720_34819 = G__34852;
i__34721_34820 = G__34853;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34803(s__34804){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34804__$1 = s__34804;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34804__$1);
if(temp__5720__auto__){
var s__34804__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34804__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34804__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34806 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34805 = (0);
while(true){
if((i__34805 < size__4522__auto__)){
var vec__34807 = cljs.core._nth.call(null,c__4521__auto__,i__34805);
var in_name = cljs.core.nth.call(null,vec__34807,(0),null);
var map__34810 = cljs.core.nth.call(null,vec__34807,(1),null);
var map__34810__$1 = (((((!((map__34810 == null))))?(((((map__34810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34810):map__34810);
var type = cljs.core.get.call(null,map__34810__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34810__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34810__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__34806,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__34854 = (i__34805 + (1));
i__34805 = G__34854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34806),fugue$ctx_ctrls$midi_monitor_$_iter__34803.call(null,cljs.core.chunk_rest.call(null,s__34804__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34806),null);
}
} else {
var vec__34812 = cljs.core.first.call(null,s__34804__$2);
var in_name = cljs.core.nth.call(null,vec__34812,(0),null);
var map__34815 = cljs.core.nth.call(null,vec__34812,(1),null);
var map__34815__$1 = (((((!((map__34815 == null))))?(((((map__34815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34815):map__34815);
var type = cljs.core.get.call(null,map__34815__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34815__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34815__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34803.call(null,cljs.core.rest.call(null,s__34804__$2)));
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
var temp__5718__auto___34858 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34858)){
var old_ctx_34859 = temp__5718__auto___34858;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_34859).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34856 = temp__5718__auto__;
var map__34856__$1 = (((((!((map__34856 == null))))?(((((map__34856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34856):map__34856);
var outs = cljs.core.get.call(null,map__34856__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__34855_SHARP_){
return console.log(p1__34855_SHARP_);
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
var seq__34862 = cljs.core.seq.call(null,files);
var chunk__34863 = null;
var count__34864 = (0);
var i__34865 = (0);
while(true){
if((i__34865 < count__34864)){
var file = cljs.core._nth.call(null,chunk__34863,i__34865);
file.arrayBuffer().then(((function (seq__34862,chunk__34863,count__34864,i__34865,file,files){
return (function (p1__34860_SHARP_){
return actx.decodeAudioData(p1__34860_SHARP_);
});})(seq__34862,chunk__34863,count__34864,i__34865,file,files))
).then(((function (seq__34862,chunk__34863,count__34864,i__34865,file,files){
return (function (p1__34861_SHARP_){
return buffer_cb.call(null,file.name,p1__34861_SHARP_);
});})(seq__34862,chunk__34863,count__34864,i__34865,file,files))
);


var G__34866 = seq__34862;
var G__34867 = chunk__34863;
var G__34868 = count__34864;
var G__34869 = (i__34865 + (1));
seq__34862 = G__34866;
chunk__34863 = G__34867;
count__34864 = G__34868;
i__34865 = G__34869;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34862);
if(temp__5720__auto__){
var seq__34862__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34862__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34862__$1);
var G__34870 = cljs.core.chunk_rest.call(null,seq__34862__$1);
var G__34871 = c__4550__auto__;
var G__34872 = cljs.core.count.call(null,c__4550__auto__);
var G__34873 = (0);
seq__34862 = G__34870;
chunk__34863 = G__34871;
count__34864 = G__34872;
i__34865 = G__34873;
continue;
} else {
var file = cljs.core.first.call(null,seq__34862__$1);
file.arrayBuffer().then(((function (seq__34862,chunk__34863,count__34864,i__34865,file,seq__34862__$1,temp__5720__auto__,files){
return (function (p1__34860_SHARP_){
return actx.decodeAudioData(p1__34860_SHARP_);
});})(seq__34862,chunk__34863,count__34864,i__34865,file,seq__34862__$1,temp__5720__auto__,files))
).then(((function (seq__34862,chunk__34863,count__34864,i__34865,file,seq__34862__$1,temp__5720__auto__,files){
return (function (p1__34861_SHARP_){
return buffer_cb.call(null,file.name,p1__34861_SHARP_);
});})(seq__34862,chunk__34863,count__34864,i__34865,file,seq__34862__$1,temp__5720__auto__,files))
);


var G__34874 = cljs.core.next.call(null,seq__34862__$1);
var G__34875 = null;
var G__34876 = (0);
var G__34877 = (0);
seq__34862 = G__34874;
chunk__34863 = G__34875;
count__34864 = G__34876;
i__34865 = G__34877;
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
var seq__34880 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__34881 = null;
var count__34882 = (0);
var i__34883 = (0);
while(true){
if((i__34883 < count__34882)){
var file = cljs.core._nth.call(null,chunk__34881,i__34883);
file.arrayBuffer().then(((function (seq__34880,chunk__34881,count__34882,i__34883,file){
return (function (p1__34878_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34878_SHARP_);
});})(seq__34880,chunk__34881,count__34882,i__34883,file))
).then(((function (seq__34880,chunk__34881,count__34882,i__34883,file){
return (function (p1__34879_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__34879_SHARP_);
});})(seq__34880,chunk__34881,count__34882,i__34883,file))
);


var G__34894 = seq__34880;
var G__34895 = chunk__34881;
var G__34896 = count__34882;
var G__34897 = (i__34883 + (1));
seq__34880 = G__34894;
chunk__34881 = G__34895;
count__34882 = G__34896;
i__34883 = G__34897;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34880);
if(temp__5720__auto__){
var seq__34880__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34880__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34880__$1);
var G__34898 = cljs.core.chunk_rest.call(null,seq__34880__$1);
var G__34899 = c__4550__auto__;
var G__34900 = cljs.core.count.call(null,c__4550__auto__);
var G__34901 = (0);
seq__34880 = G__34898;
chunk__34881 = G__34899;
count__34882 = G__34900;
i__34883 = G__34901;
continue;
} else {
var file = cljs.core.first.call(null,seq__34880__$1);
file.arrayBuffer().then(((function (seq__34880,chunk__34881,count__34882,i__34883,file,seq__34880__$1,temp__5720__auto__){
return (function (p1__34878_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34878_SHARP_);
});})(seq__34880,chunk__34881,count__34882,i__34883,file,seq__34880__$1,temp__5720__auto__))
).then(((function (seq__34880,chunk__34881,count__34882,i__34883,file,seq__34880__$1,temp__5720__auto__){
return (function (p1__34879_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__34879_SHARP_);
});})(seq__34880,chunk__34881,count__34882,i__34883,file,seq__34880__$1,temp__5720__auto__))
);


var G__34902 = cljs.core.next.call(null,seq__34880__$1);
var G__34903 = null;
var G__34904 = (0);
var G__34905 = (0);
seq__34880 = G__34902;
chunk__34881 = G__34903;
count__34882 = G__34904;
i__34883 = G__34905;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__34884(s__34885){
return (new cljs.core.LazySeq(null,(function (){
var s__34885__$1 = s__34885;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34885__$1);
if(temp__5720__auto__){
var s__34885__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34885__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34885__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34887 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34886 = (0);
while(true){
if((i__34886 < size__4522__auto__)){
var vec__34888 = cljs.core._nth.call(null,c__4521__auto__,i__34886);
var name = cljs.core.nth.call(null,vec__34888,(0),null);
var buffer = cljs.core.nth.call(null,vec__34888,(1),null);
cljs.core.chunk_append.call(null,b__34887,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__34906 = (i__34886 + (1));
i__34886 = G__34906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34887),fugue$ctx_ctrls$buffer_ctrl_$_iter__34884.call(null,cljs.core.chunk_rest.call(null,s__34885__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34887),null);
}
} else {
var vec__34891 = cljs.core.first.call(null,s__34885__$2);
var name = cljs.core.nth.call(null,vec__34891,(0),null);
var buffer = cljs.core.nth.call(null,vec__34891,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__34884.call(null,cljs.core.rest.call(null,s__34885__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1608403392927
