// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.midi_monitor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('fugue.midi');
fugue.midi_monitor.midi_selector = (function fugue$midi_monitor$midi_selector(midi_ctx,on_change){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,midi_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var mctx = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (mctx,temp__5718__auto__){
return (function (p1__34720_SHARP_){
return on_change.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(mctx).call(null,p1__34720_SHARP_.target.value));
});})(mctx,temp__5718__auto__))
], null),(function (){var iter__4523__auto__ = ((function (mctx,temp__5718__auto__){
return (function fugue$midi_monitor$midi_selector_$_iter__34721(s__34722){
return (new cljs.core.LazySeq(null,((function (mctx,temp__5718__auto__){
return (function (){
var s__34722__$1 = s__34722;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34722__$1);
if(temp__5720__auto__){
var s__34722__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34722__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34722__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34724 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34723 = (0);
while(true){
if((i__34723 < size__4522__auto__)){
var vec__34725 = cljs.core._nth.call(null,c__4521__auto__,i__34723);
var in_name = cljs.core.nth.call(null,vec__34725,(0),null);
cljs.core.chunk_append.call(null,b__34724,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),in_name], null),in_name], null));

var G__34731 = (i__34723 + (1));
i__34723 = G__34731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34724),fugue$midi_monitor$midi_selector_$_iter__34721.call(null,cljs.core.chunk_rest.call(null,s__34722__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34724),null);
}
} else {
var vec__34728 = cljs.core.first.call(null,s__34722__$2);
var in_name = cljs.core.nth.call(null,vec__34728,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),in_name], null),in_name], null),fugue$midi_monitor$midi_selector_$_iter__34721.call(null,cljs.core.rest.call(null,s__34722__$2)));
}
} else {
return null;
}
break;
}
});})(mctx,temp__5718__auto__))
,null,null));
});})(mctx,temp__5718__auto__))
;
return iter__4523__auto__.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(mctx));
})()], null);
} else {
return "no midi ctx";
}
})()], null);
});
fugue.midi_monitor.note_monitor = (function fugue$midi_monitor$note_monitor(in_mult){
var msgs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var in_chan = cljs.core.async.chan.call(null);
var c__32685__auto___34773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___34773,msgs,in_chan){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___34773,msgs,in_chan){
return (function (state_34749){
var state_val_34750 = (state_34749[(1)]);
if((state_val_34750 === (1))){
var state_34749__$1 = state_34749;
var statearr_34751_34774 = state_34749__$1;
(statearr_34751_34774[(2)] = null);

(statearr_34751_34774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (2))){
var state_34749__$1 = state_34749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34749__$1,(4),in_chan);
} else {
if((state_val_34750 === (3))){
var inst_34747 = (state_34749[(2)]);
var state_34749__$1 = state_34749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34749__$1,inst_34747);
} else {
if((state_val_34750 === (4))){
var inst_34734 = (state_34749[(7)]);
var inst_34734__$1 = (state_34749[(2)]);
var inst_34735 = new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680).cljs$core$IFn$_invoke$arity$1(inst_34734__$1);
var inst_34736 = ((0) < inst_34735);
var state_34749__$1 = (function (){var statearr_34752 = state_34749;
(statearr_34752[(7)] = inst_34734__$1);

return statearr_34752;
})();
if(cljs.core.truth_(inst_34736)){
var statearr_34753_34775 = state_34749__$1;
(statearr_34753_34775[(1)] = (5));

} else {
var statearr_34754_34776 = state_34749__$1;
(statearr_34754_34776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (5))){
var inst_34734 = (state_34749[(7)]);
var inst_34738 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34734);
var inst_34739 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.assoc,inst_34738,inst_34734);
var state_34749__$1 = state_34749;
var statearr_34755_34777 = state_34749__$1;
(statearr_34755_34777[(2)] = inst_34739);

(statearr_34755_34777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (6))){
var inst_34734 = (state_34749[(7)]);
var inst_34741 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34734);
var inst_34742 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.dissoc,inst_34741);
var state_34749__$1 = state_34749;
var statearr_34756_34778 = state_34749__$1;
(statearr_34756_34778[(2)] = inst_34742);

(statearr_34756_34778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34750 === (7))){
var inst_34744 = (state_34749[(2)]);
var state_34749__$1 = (function (){var statearr_34757 = state_34749;
(statearr_34757[(8)] = inst_34744);

return statearr_34757;
})();
var statearr_34758_34779 = state_34749__$1;
(statearr_34758_34779[(2)] = null);

(statearr_34758_34779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__32685__auto___34773,msgs,in_chan))
;
return ((function (switch__32590__auto__,c__32685__auto___34773,msgs,in_chan){
return (function() {
var fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__ = null;
var fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34759 = [null,null,null,null,null,null,null,null,null];
(statearr_34759[(0)] = fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__);

(statearr_34759[(1)] = (1));

return statearr_34759;
});
var fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____1 = (function (state_34749){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34760){if((e34760 instanceof Object)){
var ex__32594__auto__ = e34760;
var statearr_34761_34780 = state_34749;
(statearr_34761_34780[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34781 = state_34749;
state_34749 = G__34781;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__ = function(state_34749){
switch(arguments.length){
case 0:
return fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____1.call(this,state_34749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____0;
fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____1;
return fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___34773,msgs,in_chan))
})();
var state__32687__auto__ = (function (){var statearr_34762 = f__32686__auto__.call(null);
(statearr_34762[(6)] = c__32685__auto___34773);

return statearr_34762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___34773,msgs,in_chan))
);


cljs.core.async.tap.call(null,in_mult,in_chan);

return ((function (msgs,in_chan){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = ((function (msgs,in_chan){
return (function fugue$midi_monitor$note_monitor_$_iter__34763(s__34764){
return (new cljs.core.LazySeq(null,((function (msgs,in_chan){
return (function (){
var s__34764__$1 = s__34764;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34764__$1);
if(temp__5720__auto__){
var s__34764__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34764__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34764__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34766 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34765 = (0);
while(true){
if((i__34765 < size__4522__auto__)){
var vec__34767 = cljs.core._nth.call(null,c__4521__auto__,i__34765);
var _ = cljs.core.nth.call(null,vec__34767,(0),null);
var msg = cljs.core.nth.call(null,vec__34767,(1),null);
cljs.core.chunk_append.call(null,b__34766,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)], null));

var G__34782 = (i__34765 + (1));
i__34765 = G__34782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34766),fugue$midi_monitor$note_monitor_$_iter__34763.call(null,cljs.core.chunk_rest.call(null,s__34764__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34766),null);
}
} else {
var vec__34770 = cljs.core.first.call(null,s__34764__$2);
var _ = cljs.core.nth.call(null,vec__34770,(0),null);
var msg = cljs.core.nth.call(null,vec__34770,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)], null),fugue$midi_monitor$note_monitor_$_iter__34763.call(null,cljs.core.rest.call(null,s__34764__$2)));
}
} else {
return null;
}
break;
}
});})(msgs,in_chan))
,null,null));
});})(msgs,in_chan))
;
return iter__4523__auto__.call(null,cljs.core.deref.call(null,msgs));
})()], null);
});
;})(msgs,in_chan))
});
fugue.midi_monitor.monitor = (function fugue$midi_monitor$monitor(midi_ctx){
var in_chan = reagent.core.atom.call(null,null);
return ((function (in_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.midi_monitor.midi_selector,midi_ctx,cljs.core.partial.call(null,cljs.core.reset_BANG_,in_chan)], null),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,in_chan);
if(cljs.core.truth_(temp__5718__auto__)){
var in_chan__$1 = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.midi_monitor.note_monitor,in_chan__$1], null);
} else {
return "no input selected";
}
})()], null);
});
;})(in_chan))
});

//# sourceMappingURL=midi_monitor.js.map?rel=1610058838686
