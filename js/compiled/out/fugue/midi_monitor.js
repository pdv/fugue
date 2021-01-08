// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.midi_monitor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('fugue.midi');
goog.require('fugue.chords');
fugue.midi_monitor.midi_selector = (function fugue$midi_monitor$midi_selector(midi_ctx,on_change){
var temp__5718__auto__ = cljs.core.deref.call(null,midi_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var mctx = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (mctx,temp__5718__auto__){
return (function (p1__34733_SHARP_){
return on_change.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(mctx).call(null,p1__34733_SHARP_.target.value));
});})(mctx,temp__5718__auto__))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),"Select an input"], null),(function (){var iter__4523__auto__ = ((function (mctx,temp__5718__auto__){
return (function fugue$midi_monitor$midi_selector_$_iter__34734(s__34735){
return (new cljs.core.LazySeq(null,((function (mctx,temp__5718__auto__){
return (function (){
var s__34735__$1 = s__34735;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34735__$1);
if(temp__5720__auto__){
var s__34735__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34735__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34735__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34737 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34736 = (0);
while(true){
if((i__34736 < size__4522__auto__)){
var vec__34738 = cljs.core._nth.call(null,c__4521__auto__,i__34736);
var in_name = cljs.core.nth.call(null,vec__34738,(0),null);
cljs.core.chunk_append.call(null,b__34737,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),in_name], null),in_name], null));

var G__34744 = (i__34736 + (1));
i__34736 = G__34744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34737),fugue$midi_monitor$midi_selector_$_iter__34734.call(null,cljs.core.chunk_rest.call(null,s__34735__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34737),null);
}
} else {
var vec__34741 = cljs.core.first.call(null,s__34735__$2);
var in_name = cljs.core.nth.call(null,vec__34741,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),in_name], null),in_name], null),fugue$midi_monitor$midi_selector_$_iter__34734.call(null,cljs.core.rest.call(null,s__34735__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"no midi ctx"], null);
}
});
fugue.midi_monitor.note_on_QMARK_ = (function fugue$midi_monitor$note_on_QMARK_(midi_msg){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.midi","note-on","fugue.midi/note-on",1265446966),new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827).cljs$core$IFn$_invoke$arity$1(midi_msg))) && (cljs.core.not_EQ_.call(null,(0),new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680).cljs$core$IFn$_invoke$arity$1(midi_msg))));
});
fugue.midi_monitor.note_off_QMARK_ = (function fugue$midi_monitor$note_off_QMARK_(midi_msg){
var G__34745 = new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827).cljs$core$IFn$_invoke$arity$1(midi_msg);
var G__34745__$1 = (((G__34745 instanceof cljs.core.Keyword))?G__34745.fqn:null);
switch (G__34745__$1) {
case "fugue.midi/note-off":
return true;

break;
case "fugue.midi/note-on":
return cljs.core._EQ_.call(null,(0),new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680).cljs$core$IFn$_invoke$arity$1(midi_msg));

break;
default:
return false;

}
});
fugue.midi_monitor.note_monitor_view = (function fugue$midi_monitor$note_monitor_view(notes){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(notes)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$note_monitor_view_$_iter__34747(s__34748){
return (new cljs.core.LazySeq(null,(function (){
var s__34748__$1 = s__34748;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34748__$1);
if(temp__5720__auto__){
var s__34748__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34748__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34748__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34750 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34749 = (0);
while(true){
if((i__34749 < size__4522__auto__)){
var chord = cljs.core._nth.call(null,c__4521__auto__,i__34749);
cljs.core.chunk_append.call(null,b__34750,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null));

var G__34755 = (i__34749 + (1));
i__34749 = G__34755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34750),fugue$midi_monitor$note_monitor_view_$_iter__34747.call(null,cljs.core.chunk_rest.call(null,s__34748__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34750),null);
}
} else {
var chord = cljs.core.first.call(null,s__34748__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null),fugue$midi_monitor$note_monitor_view_$_iter__34747.call(null,cljs.core.rest.call(null,s__34748__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,fugue.chords.possible_chords.call(null,notes));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$note_monitor_view_$_iter__34751(s__34752){
return (new cljs.core.LazySeq(null,(function (){
var s__34752__$1 = s__34752;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34752__$1);
if(temp__5720__auto__){
var s__34752__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34752__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34752__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34754 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34753 = (0);
while(true){
if((i__34753 < size__4522__auto__)){
var chord = cljs.core._nth.call(null,c__4521__auto__,i__34753);
cljs.core.chunk_append.call(null,b__34754,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null));

var G__34756 = (i__34753 + (1));
i__34753 = G__34756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34754),fugue$midi_monitor$note_monitor_view_$_iter__34751.call(null,cljs.core.chunk_rest.call(null,s__34752__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34754),null);
}
} else {
var chord = cljs.core.first.call(null,s__34752__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null),fugue$midi_monitor$note_monitor_view_$_iter__34751.call(null,cljs.core.rest.call(null,s__34752__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,fugue.chords.contained_chords.call(null,notes));
})()], null)], null);
});
fugue.midi_monitor.monitor = (function fugue$midi_monitor$monitor(midi_ctx){
var msgs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var in_mult = reagent.core.atom.call(null,null);
var in_chan = cljs.core.async.chan.call(null);
var c__32685__auto___34797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___34797,msgs,in_mult,in_chan){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___34797,msgs,in_mult,in_chan){
return (function (state_34779){
var state_val_34780 = (state_34779[(1)]);
if((state_val_34780 === (7))){
var inst_34774 = (state_34779[(2)]);
var state_34779__$1 = (function (){var statearr_34781 = state_34779;
(statearr_34781[(7)] = inst_34774);

return statearr_34781;
})();
var statearr_34782_34798 = state_34779__$1;
(statearr_34782_34798[(2)] = null);

(statearr_34782_34798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (1))){
var state_34779__$1 = state_34779;
var statearr_34783_34799 = state_34779__$1;
(statearr_34783_34799[(2)] = null);

(statearr_34783_34799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (4))){
var inst_34759 = (state_34779[(8)]);
var inst_34759__$1 = (state_34779[(2)]);
var inst_34760 = cljs.core.print.call(null,inst_34759__$1);
var inst_34761 = fugue.midi_monitor.note_on_QMARK_.call(null,inst_34759__$1);
var state_34779__$1 = (function (){var statearr_34784 = state_34779;
(statearr_34784[(9)] = inst_34760);

(statearr_34784[(8)] = inst_34759__$1);

return statearr_34784;
})();
if(inst_34761){
var statearr_34785_34800 = state_34779__$1;
(statearr_34785_34800[(1)] = (5));

} else {
var statearr_34786_34801 = state_34779__$1;
(statearr_34786_34801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (6))){
var inst_34759 = (state_34779[(8)]);
var inst_34766 = fugue.midi_monitor.note_off_QMARK_.call(null,inst_34759);
var state_34779__$1 = state_34779;
if(cljs.core.truth_(inst_34766)){
var statearr_34787_34802 = state_34779__$1;
(statearr_34787_34802[(1)] = (8));

} else {
var statearr_34788_34803 = state_34779__$1;
(statearr_34788_34803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (3))){
var inst_34777 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34779__$1,inst_34777);
} else {
if((state_val_34780 === (2))){
var state_34779__$1 = state_34779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34779__$1,(4),in_chan);
} else {
if((state_val_34780 === (9))){
var state_34779__$1 = state_34779;
var statearr_34789_34804 = state_34779__$1;
(statearr_34789_34804[(2)] = null);

(statearr_34789_34804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (5))){
var inst_34759 = (state_34779[(8)]);
var inst_34763 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34759);
var inst_34764 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.assoc,inst_34763,inst_34759);
var state_34779__$1 = state_34779;
var statearr_34790_34805 = state_34779__$1;
(statearr_34790_34805[(2)] = inst_34764);

(statearr_34790_34805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (10))){
var inst_34772 = (state_34779[(2)]);
var state_34779__$1 = state_34779;
var statearr_34791_34806 = state_34779__$1;
(statearr_34791_34806[(2)] = inst_34772);

(statearr_34791_34806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34780 === (8))){
var inst_34759 = (state_34779[(8)]);
var inst_34768 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34759);
var inst_34769 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.dissoc,inst_34768);
var state_34779__$1 = state_34779;
var statearr_34792_34807 = state_34779__$1;
(statearr_34792_34807[(2)] = inst_34769);

(statearr_34792_34807[(1)] = (10));


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
}
}
}
});})(c__32685__auto___34797,msgs,in_mult,in_chan))
;
return ((function (switch__32590__auto__,c__32685__auto___34797,msgs,in_mult,in_chan){
return (function() {
var fugue$midi_monitor$monitor_$_state_machine__32591__auto__ = null;
var fugue$midi_monitor$monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34793 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34793[(0)] = fugue$midi_monitor$monitor_$_state_machine__32591__auto__);

(statearr_34793[(1)] = (1));

return statearr_34793;
});
var fugue$midi_monitor$monitor_$_state_machine__32591__auto____1 = (function (state_34779){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34794){if((e34794 instanceof Object)){
var ex__32594__auto__ = e34794;
var statearr_34795_34808 = state_34779;
(statearr_34795_34808[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34809 = state_34779;
state_34779 = G__34809;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$midi_monitor$monitor_$_state_machine__32591__auto__ = function(state_34779){
switch(arguments.length){
case 0:
return fugue$midi_monitor$monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$midi_monitor$monitor_$_state_machine__32591__auto____1.call(this,state_34779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$midi_monitor$monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$midi_monitor$monitor_$_state_machine__32591__auto____0;
fugue$midi_monitor$monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$midi_monitor$monitor_$_state_machine__32591__auto____1;
return fugue$midi_monitor$monitor_$_state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___34797,msgs,in_mult,in_chan))
})();
var state__32687__auto__ = (function (){var statearr_34796 = f__32686__auto__.call(null);
(statearr_34796[(6)] = c__32685__auto___34797);

return statearr_34796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___34797,msgs,in_mult,in_chan))
);


return ((function (msgs,in_mult,in_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.midi_monitor.midi_selector,midi_ctx,((function (msgs,in_mult,in_chan){
return (function (in$){
var temp__5720__auto___34810 = cljs.core.deref.call(null,in_mult);
if(cljs.core.truth_(temp__5720__auto___34810)){
var old_mult_34811 = temp__5720__auto___34810;
cljs.core.async.untap.call(null,old_mult_34811,in_chan);
} else {
}

cljs.core.reset_BANG_.call(null,msgs,cljs.core.PersistentArrayMap.EMPTY);

var temp__5720__auto___34812 = in$;
if(cljs.core.truth_(temp__5720__auto___34812)){
var new_mult_34813 = temp__5720__auto___34812;
cljs.core.async.tap.call(null,new_mult_34813,in_chan);
} else {
}

return cljs.core.reset_BANG_.call(null,in_mult,in$);
});})(msgs,in_mult,in_chan))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.midi_monitor.note_monitor_view,cljs.core.keys.call(null,cljs.core.deref.call(null,msgs))], null)], null);
});
;})(msgs,in_mult,in_chan))
});

//# sourceMappingURL=midi_monitor.js.map?rel=1610148153642
