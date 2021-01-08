// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.midi_monitor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('fugue.midi');
goog.require('fugue.chords');
fugue.midi_monitor.midi_selector = (function fugue$midi_monitor$midi_selector(midi_ctx,on_change){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,midi_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var mctx = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (mctx,temp__5718__auto__){
return (function (p1__34732_SHARP_){
return on_change.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(mctx).call(null,p1__34732_SHARP_.target.value));
});})(mctx,temp__5718__auto__))
], null),(function (){var iter__4523__auto__ = ((function (mctx,temp__5718__auto__){
return (function fugue$midi_monitor$midi_selector_$_iter__34733(s__34734){
return (new cljs.core.LazySeq(null,((function (mctx,temp__5718__auto__){
return (function (){
var s__34734__$1 = s__34734;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34734__$1);
if(temp__5720__auto__){
var s__34734__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34734__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34734__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34736 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34735 = (0);
while(true){
if((i__34735 < size__4522__auto__)){
var vec__34737 = cljs.core._nth.call(null,c__4521__auto__,i__34735);
var in_name = cljs.core.nth.call(null,vec__34737,(0),null);
cljs.core.chunk_append.call(null,b__34736,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),in_name], null),in_name], null));

var G__34743 = (i__34735 + (1));
i__34735 = G__34743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34736),fugue$midi_monitor$midi_selector_$_iter__34733.call(null,cljs.core.chunk_rest.call(null,s__34734__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34736),null);
}
} else {
var vec__34740 = cljs.core.first.call(null,s__34734__$2);
var in_name = cljs.core.nth.call(null,vec__34740,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),in_name], null),in_name], null),fugue$midi_monitor$midi_selector_$_iter__34733.call(null,cljs.core.rest.call(null,s__34734__$2)));
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
var c__32685__auto___34779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___34779,msgs,in_chan){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___34779,msgs,in_chan){
return (function (state_34761){
var state_val_34762 = (state_34761[(1)]);
if((state_val_34762 === (1))){
var state_34761__$1 = state_34761;
var statearr_34763_34780 = state_34761__$1;
(statearr_34763_34780[(2)] = null);

(statearr_34763_34780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (2))){
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34761__$1,(4),in_chan);
} else {
if((state_val_34762 === (3))){
var inst_34759 = (state_34761[(2)]);
var state_34761__$1 = state_34761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34761__$1,inst_34759);
} else {
if((state_val_34762 === (4))){
var inst_34746 = (state_34761[(7)]);
var inst_34746__$1 = (state_34761[(2)]);
var inst_34747 = new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680).cljs$core$IFn$_invoke$arity$1(inst_34746__$1);
var inst_34748 = ((0) < inst_34747);
var state_34761__$1 = (function (){var statearr_34764 = state_34761;
(statearr_34764[(7)] = inst_34746__$1);

return statearr_34764;
})();
if(cljs.core.truth_(inst_34748)){
var statearr_34765_34781 = state_34761__$1;
(statearr_34765_34781[(1)] = (5));

} else {
var statearr_34766_34782 = state_34761__$1;
(statearr_34766_34782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (5))){
var inst_34746 = (state_34761[(7)]);
var inst_34750 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34746);
var inst_34751 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.assoc,inst_34750,inst_34746);
var state_34761__$1 = state_34761;
var statearr_34767_34783 = state_34761__$1;
(statearr_34767_34783[(2)] = inst_34751);

(statearr_34767_34783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (6))){
var inst_34746 = (state_34761[(7)]);
var inst_34753 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34746);
var inst_34754 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.dissoc,inst_34753);
var state_34761__$1 = state_34761;
var statearr_34768_34784 = state_34761__$1;
(statearr_34768_34784[(2)] = inst_34754);

(statearr_34768_34784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34762 === (7))){
var inst_34756 = (state_34761[(2)]);
var state_34761__$1 = (function (){var statearr_34769 = state_34761;
(statearr_34769[(8)] = inst_34756);

return statearr_34769;
})();
var statearr_34770_34785 = state_34761__$1;
(statearr_34770_34785[(2)] = null);

(statearr_34770_34785[(1)] = (2));


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
});})(c__32685__auto___34779,msgs,in_chan))
;
return ((function (switch__32590__auto__,c__32685__auto___34779,msgs,in_chan){
return (function() {
var fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__ = null;
var fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34771 = [null,null,null,null,null,null,null,null,null];
(statearr_34771[(0)] = fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__);

(statearr_34771[(1)] = (1));

return statearr_34771;
});
var fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____1 = (function (state_34761){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34772){if((e34772 instanceof Object)){
var ex__32594__auto__ = e34772;
var statearr_34773_34786 = state_34761;
(statearr_34773_34786[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34787 = state_34761;
state_34761 = G__34787;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__ = function(state_34761){
switch(arguments.length){
case 0:
return fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____1.call(this,state_34761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____0;
fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____1;
return fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___34779,msgs,in_chan))
})();
var state__32687__auto__ = (function (){var statearr_34774 = f__32686__auto__.call(null);
(statearr_34774[(6)] = c__32685__auto___34779);

return statearr_34774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___34779,msgs,in_chan))
);


cljs.core.async.tap.call(null,in_mult,in_chan);

return ((function (msgs,in_chan){
return (function (){
var notes = cljs.core.keys.call(null,cljs.core.deref.call(null,msgs));
var chords = fugue.chords.possible_chords.call(null,notes);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(notes)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = ((function (notes,chords,msgs,in_chan){
return (function fugue$midi_monitor$note_monitor_$_iter__34775(s__34776){
return (new cljs.core.LazySeq(null,((function (notes,chords,msgs,in_chan){
return (function (){
var s__34776__$1 = s__34776;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34776__$1);
if(temp__5720__auto__){
var s__34776__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34776__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34776__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34778 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34777 = (0);
while(true){
if((i__34777 < size__4522__auto__)){
var chord = cljs.core._nth.call(null,c__4521__auto__,i__34777);
cljs.core.chunk_append.call(null,b__34778,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null));

var G__34788 = (i__34777 + (1));
i__34777 = G__34788;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34778),fugue$midi_monitor$note_monitor_$_iter__34775.call(null,cljs.core.chunk_rest.call(null,s__34776__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34778),null);
}
} else {
var chord = cljs.core.first.call(null,s__34776__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null),fugue$midi_monitor$note_monitor_$_iter__34775.call(null,cljs.core.rest.call(null,s__34776__$2)));
}
} else {
return null;
}
break;
}
});})(notes,chords,msgs,in_chan))
,null,null));
});})(notes,chords,msgs,in_chan))
;
return iter__4523__auto__.call(null,chords);
})()], null)], null);
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

//# sourceMappingURL=midi_monitor.js.map?rel=1610065044959
