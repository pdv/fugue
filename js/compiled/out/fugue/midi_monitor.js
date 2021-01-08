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
return (function (p1__34733_SHARP_){
return on_change.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(mctx).call(null,p1__34733_SHARP_.target.value));
});})(mctx,temp__5718__auto__))
], null),(function (){var iter__4523__auto__ = ((function (mctx,temp__5718__auto__){
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
return "no midi ctx";
}
})()], null);
});
fugue.midi_monitor.note_monitor = (function fugue$midi_monitor$note_monitor(in_mult){
var msgs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var in_chan = cljs.core.async.chan.call(null);
var c__32685__auto___34784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___34784,msgs,in_chan){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___34784,msgs,in_chan){
return (function (state_34762){
var state_val_34763 = (state_34762[(1)]);
if((state_val_34763 === (1))){
var state_34762__$1 = state_34762;
var statearr_34764_34785 = state_34762__$1;
(statearr_34764_34785[(2)] = null);

(statearr_34764_34785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (2))){
var state_34762__$1 = state_34762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34762__$1,(4),in_chan);
} else {
if((state_val_34763 === (3))){
var inst_34760 = (state_34762[(2)]);
var state_34762__$1 = state_34762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34762__$1,inst_34760);
} else {
if((state_val_34763 === (4))){
var inst_34747 = (state_34762[(7)]);
var inst_34747__$1 = (state_34762[(2)]);
var inst_34748 = new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680).cljs$core$IFn$_invoke$arity$1(inst_34747__$1);
var inst_34749 = ((0) < inst_34748);
var state_34762__$1 = (function (){var statearr_34765 = state_34762;
(statearr_34765[(7)] = inst_34747__$1);

return statearr_34765;
})();
if(cljs.core.truth_(inst_34749)){
var statearr_34766_34786 = state_34762__$1;
(statearr_34766_34786[(1)] = (5));

} else {
var statearr_34767_34787 = state_34762__$1;
(statearr_34767_34787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (5))){
var inst_34747 = (state_34762[(7)]);
var inst_34751 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34747);
var inst_34752 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.assoc,inst_34751,inst_34747);
var state_34762__$1 = state_34762;
var statearr_34768_34788 = state_34762__$1;
(statearr_34768_34788[(2)] = inst_34752);

(statearr_34768_34788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (6))){
var inst_34747 = (state_34762[(7)]);
var inst_34754 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34747);
var inst_34755 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.dissoc,inst_34754);
var state_34762__$1 = state_34762;
var statearr_34769_34789 = state_34762__$1;
(statearr_34769_34789[(2)] = inst_34755);

(statearr_34769_34789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34763 === (7))){
var inst_34757 = (state_34762[(2)]);
var state_34762__$1 = (function (){var statearr_34770 = state_34762;
(statearr_34770[(8)] = inst_34757);

return statearr_34770;
})();
var statearr_34771_34790 = state_34762__$1;
(statearr_34771_34790[(2)] = null);

(statearr_34771_34790[(1)] = (2));


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
});})(c__32685__auto___34784,msgs,in_chan))
;
return ((function (switch__32590__auto__,c__32685__auto___34784,msgs,in_chan){
return (function() {
var fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__ = null;
var fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34772 = [null,null,null,null,null,null,null,null,null];
(statearr_34772[(0)] = fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__);

(statearr_34772[(1)] = (1));

return statearr_34772;
});
var fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____1 = (function (state_34762){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34773){if((e34773 instanceof Object)){
var ex__32594__auto__ = e34773;
var statearr_34774_34791 = state_34762;
(statearr_34774_34791[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34792 = state_34762;
state_34762 = G__34792;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__ = function(state_34762){
switch(arguments.length){
case 0:
return fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____1.call(this,state_34762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____0;
fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$midi_monitor$note_monitor_$_state_machine__32591__auto____1;
return fugue$midi_monitor$note_monitor_$_state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___34784,msgs,in_chan))
})();
var state__32687__auto__ = (function (){var statearr_34775 = f__32686__auto__.call(null);
(statearr_34775[(6)] = c__32685__auto___34784);

return statearr_34775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___34784,msgs,in_chan))
);


cljs.core.async.tap.call(null,in_mult,in_chan);

return ((function (msgs,in_chan){
return (function (){
var notes = cljs.core.keys.call(null,cljs.core.deref.call(null,msgs));
var possible_chords = fugue.chords.possible_chords.call(null,notes);
var contained_chords = fugue.chords.contained_chords.call(null,notes);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(notes)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = ((function (notes,possible_chords,contained_chords,msgs,in_chan){
return (function fugue$midi_monitor$note_monitor_$_iter__34776(s__34777){
return (new cljs.core.LazySeq(null,((function (notes,possible_chords,contained_chords,msgs,in_chan){
return (function (){
var s__34777__$1 = s__34777;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34777__$1);
if(temp__5720__auto__){
var s__34777__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34777__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34777__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34779 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34778 = (0);
while(true){
if((i__34778 < size__4522__auto__)){
var chord = cljs.core._nth.call(null,c__4521__auto__,i__34778);
cljs.core.chunk_append.call(null,b__34779,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null));

var G__34793 = (i__34778 + (1));
i__34778 = G__34793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34779),fugue$midi_monitor$note_monitor_$_iter__34776.call(null,cljs.core.chunk_rest.call(null,s__34777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34779),null);
}
} else {
var chord = cljs.core.first.call(null,s__34777__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null),fugue$midi_monitor$note_monitor_$_iter__34776.call(null,cljs.core.rest.call(null,s__34777__$2)));
}
} else {
return null;
}
break;
}
});})(notes,possible_chords,contained_chords,msgs,in_chan))
,null,null));
});})(notes,possible_chords,contained_chords,msgs,in_chan))
;
return iter__4523__auto__.call(null,possible_chords);
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = ((function (notes,possible_chords,contained_chords,msgs,in_chan){
return (function fugue$midi_monitor$note_monitor_$_iter__34780(s__34781){
return (new cljs.core.LazySeq(null,((function (notes,possible_chords,contained_chords,msgs,in_chan){
return (function (){
var s__34781__$1 = s__34781;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34781__$1);
if(temp__5720__auto__){
var s__34781__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34781__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34781__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34783 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34782 = (0);
while(true){
if((i__34782 < size__4522__auto__)){
var chord = cljs.core._nth.call(null,c__4521__auto__,i__34782);
cljs.core.chunk_append.call(null,b__34783,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null));

var G__34794 = (i__34782 + (1));
i__34782 = G__34794;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34783),fugue$midi_monitor$note_monitor_$_iter__34780.call(null,cljs.core.chunk_rest.call(null,s__34781__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34783),null);
}
} else {
var chord = cljs.core.first.call(null,s__34781__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null),fugue$midi_monitor$note_monitor_$_iter__34780.call(null,cljs.core.rest.call(null,s__34781__$2)));
}
} else {
return null;
}
break;
}
});})(notes,possible_chords,contained_chords,msgs,in_chan))
,null,null));
});})(notes,possible_chords,contained_chords,msgs,in_chan))
;
return iter__4523__auto__.call(null,contained_chords);
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

//# sourceMappingURL=midi_monitor.js.map?rel=1610066031639
