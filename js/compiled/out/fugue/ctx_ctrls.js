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
var seq__34729_34829 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34731_34830 = null;
var count__34732_34831 = (0);
var i__34733_34832 = (0);
while(true){
if((i__34733_34832 < count__34732_34831)){
var vec__34775_34833 = cljs.core._nth.call(null,chunk__34731_34830,i__34733_34832);
var in_name_34834 = cljs.core.nth.call(null,vec__34775_34833,(0),null);
var in_mult_34835 = cljs.core.nth.call(null,vec__34775_34833,(1),null);
var in_chan_34836 = cljs.core.async.chan.call(null);
var c__32685__auto___34837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34729_34829,chunk__34731_34830,count__34732_34831,i__34733_34832,c__32685__auto___34837,in_chan_34836,vec__34775_34833,in_name_34834,in_mult_34835,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34729_34829,chunk__34731_34830,count__34732_34831,i__34733_34832,c__32685__auto___34837,in_chan_34836,vec__34775_34833,in_name_34834,in_mult_34835,inputs){
return (function (state_34786){
var state_val_34787 = (state_34786[(1)]);
if((state_val_34787 === (1))){
var state_34786__$1 = state_34786;
var statearr_34788_34838 = state_34786__$1;
(statearr_34788_34838[(2)] = null);

(statearr_34788_34838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (2))){
var state_34786__$1 = state_34786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34786__$1,(4),in_chan_34836);
} else {
if((state_val_34787 === (3))){
var inst_34784 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34786__$1,inst_34784);
} else {
if((state_val_34787 === (4))){
var inst_34780 = (state_34786[(2)]);
var inst_34781 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34834,inst_34780);
var state_34786__$1 = (function (){var statearr_34789 = state_34786;
(statearr_34789[(7)] = inst_34781);

return statearr_34789;
})();
var statearr_34790_34839 = state_34786__$1;
(statearr_34790_34839[(2)] = null);

(statearr_34790_34839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34729_34829,chunk__34731_34830,count__34732_34831,i__34733_34832,c__32685__auto___34837,in_chan_34836,vec__34775_34833,in_name_34834,in_mult_34835,inputs))
;
return ((function (seq__34729_34829,chunk__34731_34830,count__34732_34831,i__34733_34832,switch__32590__auto__,c__32685__auto___34837,in_chan_34836,vec__34775_34833,in_name_34834,in_mult_34835,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34791 = [null,null,null,null,null,null,null,null];
(statearr_34791[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34791[(1)] = (1));

return statearr_34791;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34786){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34792){if((e34792 instanceof Object)){
var ex__32594__auto__ = e34792;
var statearr_34793_34840 = state_34786;
(statearr_34793_34840[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34841 = state_34786;
state_34786 = G__34841;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34786){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34729_34829,chunk__34731_34830,count__34732_34831,i__34733_34832,switch__32590__auto__,c__32685__auto___34837,in_chan_34836,vec__34775_34833,in_name_34834,in_mult_34835,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34794 = f__32686__auto__.call(null);
(statearr_34794[(6)] = c__32685__auto___34837);

return statearr_34794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34729_34829,chunk__34731_34830,count__34732_34831,i__34733_34832,c__32685__auto___34837,in_chan_34836,vec__34775_34833,in_name_34834,in_mult_34835,inputs))
);


cljs.core.async.tap.call(null,in_mult_34835,in_chan_34836);


var G__34842 = seq__34729_34829;
var G__34843 = chunk__34731_34830;
var G__34844 = count__34732_34831;
var G__34845 = (i__34733_34832 + (1));
seq__34729_34829 = G__34842;
chunk__34731_34830 = G__34843;
count__34732_34831 = G__34844;
i__34733_34832 = G__34845;
continue;
} else {
var temp__5720__auto___34846 = cljs.core.seq.call(null,seq__34729_34829);
if(temp__5720__auto___34846){
var seq__34729_34847__$1 = temp__5720__auto___34846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34729_34847__$1)){
var c__4550__auto___34848 = cljs.core.chunk_first.call(null,seq__34729_34847__$1);
var G__34849 = cljs.core.chunk_rest.call(null,seq__34729_34847__$1);
var G__34850 = c__4550__auto___34848;
var G__34851 = cljs.core.count.call(null,c__4550__auto___34848);
var G__34852 = (0);
seq__34729_34829 = G__34849;
chunk__34731_34830 = G__34850;
count__34732_34831 = G__34851;
i__34733_34832 = G__34852;
continue;
} else {
var vec__34795_34853 = cljs.core.first.call(null,seq__34729_34847__$1);
var in_name_34854 = cljs.core.nth.call(null,vec__34795_34853,(0),null);
var in_mult_34855 = cljs.core.nth.call(null,vec__34795_34853,(1),null);
var in_chan_34856 = cljs.core.async.chan.call(null);
var c__32685__auto___34857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34729_34829,chunk__34731_34830,count__34732_34831,i__34733_34832,c__32685__auto___34857,in_chan_34856,vec__34795_34853,in_name_34854,in_mult_34855,seq__34729_34847__$1,temp__5720__auto___34846,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34729_34829,chunk__34731_34830,count__34732_34831,i__34733_34832,c__32685__auto___34857,in_chan_34856,vec__34795_34853,in_name_34854,in_mult_34855,seq__34729_34847__$1,temp__5720__auto___34846,inputs){
return (function (state_34806){
var state_val_34807 = (state_34806[(1)]);
if((state_val_34807 === (1))){
var state_34806__$1 = state_34806;
var statearr_34808_34858 = state_34806__$1;
(statearr_34808_34858[(2)] = null);

(statearr_34808_34858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (2))){
var state_34806__$1 = state_34806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34806__$1,(4),in_chan_34856);
} else {
if((state_val_34807 === (3))){
var inst_34804 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34806__$1,inst_34804);
} else {
if((state_val_34807 === (4))){
var inst_34800 = (state_34806[(2)]);
var inst_34801 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34854,inst_34800);
var state_34806__$1 = (function (){var statearr_34809 = state_34806;
(statearr_34809[(7)] = inst_34801);

return statearr_34809;
})();
var statearr_34810_34859 = state_34806__$1;
(statearr_34810_34859[(2)] = null);

(statearr_34810_34859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34729_34829,chunk__34731_34830,count__34732_34831,i__34733_34832,c__32685__auto___34857,in_chan_34856,vec__34795_34853,in_name_34854,in_mult_34855,seq__34729_34847__$1,temp__5720__auto___34846,inputs))
;
return ((function (seq__34729_34829,chunk__34731_34830,count__34732_34831,i__34733_34832,switch__32590__auto__,c__32685__auto___34857,in_chan_34856,vec__34795_34853,in_name_34854,in_mult_34855,seq__34729_34847__$1,temp__5720__auto___34846,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34811 = [null,null,null,null,null,null,null,null];
(statearr_34811[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34811[(1)] = (1));

return statearr_34811;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34806){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34812){if((e34812 instanceof Object)){
var ex__32594__auto__ = e34812;
var statearr_34813_34860 = state_34806;
(statearr_34813_34860[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34861 = state_34806;
state_34806 = G__34861;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34806){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34729_34829,chunk__34731_34830,count__34732_34831,i__34733_34832,switch__32590__auto__,c__32685__auto___34857,in_chan_34856,vec__34795_34853,in_name_34854,in_mult_34855,seq__34729_34847__$1,temp__5720__auto___34846,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34814 = f__32686__auto__.call(null);
(statearr_34814[(6)] = c__32685__auto___34857);

return statearr_34814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34729_34829,chunk__34731_34830,count__34732_34831,i__34733_34832,c__32685__auto___34857,in_chan_34856,vec__34795_34853,in_name_34854,in_mult_34855,seq__34729_34847__$1,temp__5720__auto___34846,inputs))
);


cljs.core.async.tap.call(null,in_mult_34855,in_chan_34856);


var G__34862 = cljs.core.next.call(null,seq__34729_34847__$1);
var G__34863 = null;
var G__34864 = (0);
var G__34865 = (0);
seq__34729_34829 = G__34862;
chunk__34731_34830 = G__34863;
count__34732_34831 = G__34864;
i__34733_34832 = G__34865;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34815(s__34816){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34816__$1 = s__34816;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34816__$1);
if(temp__5720__auto__){
var s__34816__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34816__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34816__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34818 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34817 = (0);
while(true){
if((i__34817 < size__4522__auto__)){
var vec__34819 = cljs.core._nth.call(null,c__4521__auto__,i__34817);
var in_name = cljs.core.nth.call(null,vec__34819,(0),null);
var map__34822 = cljs.core.nth.call(null,vec__34819,(1),null);
var map__34822__$1 = (((((!((map__34822 == null))))?(((((map__34822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34822):map__34822);
var type = cljs.core.get.call(null,map__34822__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34822__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34822__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__34818,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__34866 = (i__34817 + (1));
i__34817 = G__34866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34818),fugue$ctx_ctrls$midi_monitor_$_iter__34815.call(null,cljs.core.chunk_rest.call(null,s__34816__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34818),null);
}
} else {
var vec__34824 = cljs.core.first.call(null,s__34816__$2);
var in_name = cljs.core.nth.call(null,vec__34824,(0),null);
var map__34827 = cljs.core.nth.call(null,vec__34824,(1),null);
var map__34827__$1 = (((((!((map__34827 == null))))?(((((map__34827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34827):map__34827);
var type = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34815.call(null,cljs.core.rest.call(null,s__34816__$2)));
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
var temp__5718__auto___34870 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34870)){
var old_ctx_34871 = temp__5718__auto___34870;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_34871).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34868 = temp__5718__auto__;
var map__34868__$1 = (((((!((map__34868 == null))))?(((((map__34868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34868):map__34868);
var outs = cljs.core.get.call(null,map__34868__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__34867_SHARP_){
return console.log(p1__34867_SHARP_);
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
var seq__34874 = cljs.core.seq.call(null,files);
var chunk__34875 = null;
var count__34876 = (0);
var i__34877 = (0);
while(true){
if((i__34877 < count__34876)){
var file = cljs.core._nth.call(null,chunk__34875,i__34877);
file.arrayBuffer().then(((function (seq__34874,chunk__34875,count__34876,i__34877,file,files){
return (function (p1__34872_SHARP_){
return actx.decodeAudioData(p1__34872_SHARP_);
});})(seq__34874,chunk__34875,count__34876,i__34877,file,files))
).then(((function (seq__34874,chunk__34875,count__34876,i__34877,file,files){
return (function (p1__34873_SHARP_){
return buffer_cb.call(null,file.name,p1__34873_SHARP_);
});})(seq__34874,chunk__34875,count__34876,i__34877,file,files))
);


var G__34878 = seq__34874;
var G__34879 = chunk__34875;
var G__34880 = count__34876;
var G__34881 = (i__34877 + (1));
seq__34874 = G__34878;
chunk__34875 = G__34879;
count__34876 = G__34880;
i__34877 = G__34881;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34874);
if(temp__5720__auto__){
var seq__34874__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34874__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34874__$1);
var G__34882 = cljs.core.chunk_rest.call(null,seq__34874__$1);
var G__34883 = c__4550__auto__;
var G__34884 = cljs.core.count.call(null,c__4550__auto__);
var G__34885 = (0);
seq__34874 = G__34882;
chunk__34875 = G__34883;
count__34876 = G__34884;
i__34877 = G__34885;
continue;
} else {
var file = cljs.core.first.call(null,seq__34874__$1);
file.arrayBuffer().then(((function (seq__34874,chunk__34875,count__34876,i__34877,file,seq__34874__$1,temp__5720__auto__,files){
return (function (p1__34872_SHARP_){
return actx.decodeAudioData(p1__34872_SHARP_);
});})(seq__34874,chunk__34875,count__34876,i__34877,file,seq__34874__$1,temp__5720__auto__,files))
).then(((function (seq__34874,chunk__34875,count__34876,i__34877,file,seq__34874__$1,temp__5720__auto__,files){
return (function (p1__34873_SHARP_){
return buffer_cb.call(null,file.name,p1__34873_SHARP_);
});})(seq__34874,chunk__34875,count__34876,i__34877,file,seq__34874__$1,temp__5720__auto__,files))
);


var G__34886 = cljs.core.next.call(null,seq__34874__$1);
var G__34887 = null;
var G__34888 = (0);
var G__34889 = (0);
seq__34874 = G__34886;
chunk__34875 = G__34887;
count__34876 = G__34888;
i__34877 = G__34889;
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
var seq__34892 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__34893 = null;
var count__34894 = (0);
var i__34895 = (0);
while(true){
if((i__34895 < count__34894)){
var file = cljs.core._nth.call(null,chunk__34893,i__34895);
file.arrayBuffer().then(((function (seq__34892,chunk__34893,count__34894,i__34895,file){
return (function (p1__34890_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34890_SHARP_);
});})(seq__34892,chunk__34893,count__34894,i__34895,file))
).then(((function (seq__34892,chunk__34893,count__34894,i__34895,file){
return (function (p1__34891_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__34891_SHARP_);
});})(seq__34892,chunk__34893,count__34894,i__34895,file))
);


var G__34906 = seq__34892;
var G__34907 = chunk__34893;
var G__34908 = count__34894;
var G__34909 = (i__34895 + (1));
seq__34892 = G__34906;
chunk__34893 = G__34907;
count__34894 = G__34908;
i__34895 = G__34909;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__34892);
if(temp__5720__auto__){
var seq__34892__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34892__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34892__$1);
var G__34910 = cljs.core.chunk_rest.call(null,seq__34892__$1);
var G__34911 = c__4550__auto__;
var G__34912 = cljs.core.count.call(null,c__4550__auto__);
var G__34913 = (0);
seq__34892 = G__34910;
chunk__34893 = G__34911;
count__34894 = G__34912;
i__34895 = G__34913;
continue;
} else {
var file = cljs.core.first.call(null,seq__34892__$1);
file.arrayBuffer().then(((function (seq__34892,chunk__34893,count__34894,i__34895,file,seq__34892__$1,temp__5720__auto__){
return (function (p1__34890_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__34890_SHARP_);
});})(seq__34892,chunk__34893,count__34894,i__34895,file,seq__34892__$1,temp__5720__auto__))
).then(((function (seq__34892,chunk__34893,count__34894,i__34895,file,seq__34892__$1,temp__5720__auto__){
return (function (p1__34891_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__34891_SHARP_);
});})(seq__34892,chunk__34893,count__34894,i__34895,file,seq__34892__$1,temp__5720__auto__))
);


var G__34914 = cljs.core.next.call(null,seq__34892__$1);
var G__34915 = null;
var G__34916 = (0);
var G__34917 = (0);
seq__34892 = G__34914;
chunk__34893 = G__34915;
count__34894 = G__34916;
i__34895 = G__34917;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__34896(s__34897){
return (new cljs.core.LazySeq(null,(function (){
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
var name = cljs.core.nth.call(null,vec__34900,(0),null);
var buffer = cljs.core.nth.call(null,vec__34900,(1),null);
cljs.core.chunk_append.call(null,b__34899,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__34918 = (i__34898 + (1));
i__34898 = G__34918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34899),fugue$ctx_ctrls$buffer_ctrl_$_iter__34896.call(null,cljs.core.chunk_rest.call(null,s__34897__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34899),null);
}
} else {
var vec__34903 = cljs.core.first.call(null,s__34897__$2);
var name = cljs.core.nth.call(null,vec__34903,(0),null);
var buffer = cljs.core.nth.call(null,vec__34903,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__34896.call(null,cljs.core.rest.call(null,s__34897__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610051528769
