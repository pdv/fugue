// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.midi_monitor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('fugue.cof');
goog.require('fugue.midi');
goog.require('fugue.chords');
fugue.midi_monitor.midi_selector = (function fugue$midi_monitor$midi_selector(midi_ctx,on_change){
var temp__5718__auto__ = cljs.core.deref.call(null,midi_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var mctx = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (mctx,temp__5718__auto__){
return (function (p1__34747_SHARP_){
return on_change.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(mctx).call(null,p1__34747_SHARP_.target.value));
});})(mctx,temp__5718__auto__))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),"Select an input"], null),(function (){var iter__4523__auto__ = ((function (mctx,temp__5718__auto__){
return (function fugue$midi_monitor$midi_selector_$_iter__34748(s__34749){
return (new cljs.core.LazySeq(null,((function (mctx,temp__5718__auto__){
return (function (){
var s__34749__$1 = s__34749;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34749__$1);
if(temp__5720__auto__){
var s__34749__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34749__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34749__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34751 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34750 = (0);
while(true){
if((i__34750 < size__4522__auto__)){
var vec__34752 = cljs.core._nth.call(null,c__4521__auto__,i__34750);
var in_name = cljs.core.nth.call(null,vec__34752,(0),null);
cljs.core.chunk_append.call(null,b__34751,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),in_name], null),in_name], null));

var G__34758 = (i__34750 + (1));
i__34750 = G__34758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34751),fugue$midi_monitor$midi_selector_$_iter__34748.call(null,cljs.core.chunk_rest.call(null,s__34749__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34751),null);
}
} else {
var vec__34755 = cljs.core.first.call(null,s__34749__$2);
var in_name = cljs.core.nth.call(null,vec__34755,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),in_name], null),in_name], null),fugue$midi_monitor$midi_selector_$_iter__34748.call(null,cljs.core.rest.call(null,s__34749__$2)));
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
var G__34759 = new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827).cljs$core$IFn$_invoke$arity$1(midi_msg);
var G__34759__$1 = (((G__34759 instanceof cljs.core.Keyword))?G__34759.fqn:null);
switch (G__34759__$1) {
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.cof.cof,notes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(notes)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$note_monitor_view_$_iter__34761(s__34762){
return (new cljs.core.LazySeq(null,(function (){
var s__34762__$1 = s__34762;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34762__$1);
if(temp__5720__auto__){
var s__34762__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34762__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34762__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34764 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34763 = (0);
while(true){
if((i__34763 < size__4522__auto__)){
var chord = cljs.core._nth.call(null,c__4521__auto__,i__34763);
cljs.core.chunk_append.call(null,b__34764,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null));

var G__34769 = (i__34763 + (1));
i__34763 = G__34769;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34764),fugue$midi_monitor$note_monitor_view_$_iter__34761.call(null,cljs.core.chunk_rest.call(null,s__34762__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34764),null);
}
} else {
var chord = cljs.core.first.call(null,s__34762__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null),fugue$midi_monitor$note_monitor_view_$_iter__34761.call(null,cljs.core.rest.call(null,s__34762__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,fugue.chords.possible_chords.call(null,notes));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$note_monitor_view_$_iter__34765(s__34766){
return (new cljs.core.LazySeq(null,(function (){
var s__34766__$1 = s__34766;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34766__$1);
if(temp__5720__auto__){
var s__34766__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34766__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34766__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34768 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34767 = (0);
while(true){
if((i__34767 < size__4522__auto__)){
var chord = cljs.core._nth.call(null,c__4521__auto__,i__34767);
cljs.core.chunk_append.call(null,b__34768,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null));

var G__34770 = (i__34767 + (1));
i__34767 = G__34770;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34768),fugue$midi_monitor$note_monitor_view_$_iter__34765.call(null,cljs.core.chunk_rest.call(null,s__34766__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34768),null);
}
} else {
var chord = cljs.core.first.call(null,s__34766__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null),fugue$midi_monitor$note_monitor_view_$_iter__34765.call(null,cljs.core.rest.call(null,s__34766__$2)));
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
var c__32685__auto___34811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___34811,msgs,in_mult,in_chan){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___34811,msgs,in_mult,in_chan){
return (function (state_34793){
var state_val_34794 = (state_34793[(1)]);
if((state_val_34794 === (7))){
var inst_34788 = (state_34793[(2)]);
var state_34793__$1 = (function (){var statearr_34795 = state_34793;
(statearr_34795[(7)] = inst_34788);

return statearr_34795;
})();
var statearr_34796_34812 = state_34793__$1;
(statearr_34796_34812[(2)] = null);

(statearr_34796_34812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (1))){
var state_34793__$1 = state_34793;
var statearr_34797_34813 = state_34793__$1;
(statearr_34797_34813[(2)] = null);

(statearr_34797_34813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (4))){
var inst_34773 = (state_34793[(8)]);
var inst_34773__$1 = (state_34793[(2)]);
var inst_34774 = cljs.core.print.call(null,inst_34773__$1);
var inst_34775 = fugue.midi_monitor.note_on_QMARK_.call(null,inst_34773__$1);
var state_34793__$1 = (function (){var statearr_34798 = state_34793;
(statearr_34798[(8)] = inst_34773__$1);

(statearr_34798[(9)] = inst_34774);

return statearr_34798;
})();
if(inst_34775){
var statearr_34799_34814 = state_34793__$1;
(statearr_34799_34814[(1)] = (5));

} else {
var statearr_34800_34815 = state_34793__$1;
(statearr_34800_34815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (6))){
var inst_34773 = (state_34793[(8)]);
var inst_34780 = fugue.midi_monitor.note_off_QMARK_.call(null,inst_34773);
var state_34793__$1 = state_34793;
if(cljs.core.truth_(inst_34780)){
var statearr_34801_34816 = state_34793__$1;
(statearr_34801_34816[(1)] = (8));

} else {
var statearr_34802_34817 = state_34793__$1;
(statearr_34802_34817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (3))){
var inst_34791 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34793__$1,inst_34791);
} else {
if((state_val_34794 === (2))){
var state_34793__$1 = state_34793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34793__$1,(4),in_chan);
} else {
if((state_val_34794 === (9))){
var state_34793__$1 = state_34793;
var statearr_34803_34818 = state_34793__$1;
(statearr_34803_34818[(2)] = null);

(statearr_34803_34818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (5))){
var inst_34773 = (state_34793[(8)]);
var inst_34777 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34773);
var inst_34778 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.assoc,inst_34777,inst_34773);
var state_34793__$1 = state_34793;
var statearr_34804_34819 = state_34793__$1;
(statearr_34804_34819[(2)] = inst_34778);

(statearr_34804_34819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (10))){
var inst_34786 = (state_34793[(2)]);
var state_34793__$1 = state_34793;
var statearr_34805_34820 = state_34793__$1;
(statearr_34805_34820[(2)] = inst_34786);

(statearr_34805_34820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34794 === (8))){
var inst_34773 = (state_34793[(8)]);
var inst_34782 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34773);
var inst_34783 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.dissoc,inst_34782);
var state_34793__$1 = state_34793;
var statearr_34806_34821 = state_34793__$1;
(statearr_34806_34821[(2)] = inst_34783);

(statearr_34806_34821[(1)] = (10));


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
});})(c__32685__auto___34811,msgs,in_mult,in_chan))
;
return ((function (switch__32590__auto__,c__32685__auto___34811,msgs,in_mult,in_chan){
return (function() {
var fugue$midi_monitor$monitor_$_state_machine__32591__auto__ = null;
var fugue$midi_monitor$monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34807 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34807[(0)] = fugue$midi_monitor$monitor_$_state_machine__32591__auto__);

(statearr_34807[(1)] = (1));

return statearr_34807;
});
var fugue$midi_monitor$monitor_$_state_machine__32591__auto____1 = (function (state_34793){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34808){if((e34808 instanceof Object)){
var ex__32594__auto__ = e34808;
var statearr_34809_34822 = state_34793;
(statearr_34809_34822[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34823 = state_34793;
state_34793 = G__34823;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$midi_monitor$monitor_$_state_machine__32591__auto__ = function(state_34793){
switch(arguments.length){
case 0:
return fugue$midi_monitor$monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$midi_monitor$monitor_$_state_machine__32591__auto____1.call(this,state_34793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$midi_monitor$monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$midi_monitor$monitor_$_state_machine__32591__auto____0;
fugue$midi_monitor$monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$midi_monitor$monitor_$_state_machine__32591__auto____1;
return fugue$midi_monitor$monitor_$_state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___34811,msgs,in_mult,in_chan))
})();
var state__32687__auto__ = (function (){var statearr_34810 = f__32686__auto__.call(null);
(statearr_34810[(6)] = c__32685__auto___34811);

return statearr_34810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___34811,msgs,in_mult,in_chan))
);


return ((function (msgs,in_mult,in_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.midi_monitor.midi_selector,midi_ctx,((function (msgs,in_mult,in_chan){
return (function (in$){
var temp__5720__auto___34824 = cljs.core.deref.call(null,in_mult);
if(cljs.core.truth_(temp__5720__auto___34824)){
var old_mult_34825 = temp__5720__auto___34824;
cljs.core.async.untap.call(null,old_mult_34825,in_chan);
} else {
}

cljs.core.reset_BANG_.call(null,msgs,cljs.core.PersistentArrayMap.EMPTY);

var temp__5720__auto___34826 = in$;
if(cljs.core.truth_(temp__5720__auto___34826)){
var new_mult_34827 = temp__5720__auto___34826;
cljs.core.async.tap.call(null,new_mult_34827,in_chan);
} else {
}

return cljs.core.reset_BANG_.call(null,in_mult,in$);
});})(msgs,in_mult,in_chan))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.midi_monitor.note_monitor_view,cljs.core.keys.call(null,cljs.core.deref.call(null,msgs))], null)], null);
});
;})(msgs,in_mult,in_chan))
});

//# sourceMappingURL=midi_monitor.js.map?rel=1610221077264
