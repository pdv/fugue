// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.midi_monitor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.core.async');
goog.require('fugue.cof');
goog.require('fugue.cantor');
goog.require('fugue.components');
goog.require('fugue.midi');
goog.require('fugue.chords');
fugue.midi_monitor.note_on_QMARK_ = (function fugue$midi_monitor$note_on_QMARK_(midi_msg){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.midi","note-on","fugue.midi/note-on",1265446966),new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827).cljs$core$IFn$_invoke$arity$1(midi_msg))) && (cljs.core.not_EQ_.call(null,(0),new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680).cljs$core$IFn$_invoke$arity$1(midi_msg))));
});
fugue.midi_monitor.note_off_QMARK_ = (function fugue$midi_monitor$note_off_QMARK_(midi_msg){
var G__34780 = new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827).cljs$core$IFn$_invoke$arity$1(midi_msg);
var G__34780__$1 = (((G__34780 instanceof cljs.core.Keyword))?G__34780.fqn:null);
switch (G__34780__$1) {
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
fugue.midi_monitor.midi_selector = (function fugue$midi_monitor$midi_selector(midi_ins,on_change){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__34782_SHARP_){
return on_change.call(null,cljs.core.get.call(null,midi_ins,p1__34782_SHARP_.target.value));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),"Select an input"], null),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$midi_selector_$_iter__34783(s__34784){
return (new cljs.core.LazySeq(null,(function (){
var s__34784__$1 = s__34784;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34784__$1);
if(temp__5720__auto__){
var s__34784__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34784__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34784__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34786 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34785 = (0);
while(true){
if((i__34785 < size__4522__auto__)){
var vec__34787 = cljs.core._nth.call(null,c__4521__auto__,i__34785);
var in_name = cljs.core.nth.call(null,vec__34787,(0),null);
var _ = cljs.core.nth.call(null,vec__34787,(1),null);
cljs.core.chunk_append.call(null,b__34786,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),in_name], null),in_name], null));

var G__34793 = (i__34785 + (1));
i__34785 = G__34793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34786),fugue$midi_monitor$midi_selector_$_iter__34783.call(null,cljs.core.chunk_rest.call(null,s__34784__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34786),null);
}
} else {
var vec__34790 = cljs.core.first.call(null,s__34784__$2);
var in_name = cljs.core.nth.call(null,vec__34790,(0),null);
var _ = cljs.core.nth.call(null,vec__34790,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),in_name], null),in_name], null),fugue$midi_monitor$midi_selector_$_iter__34783.call(null,cljs.core.rest.call(null,s__34784__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,midi_ins);
})()], null);
});
fugue.midi_monitor.input_monitor = (function fugue$midi_monitor$input_monitor(_,notes_cb){
var msgs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var in_mult = reagent.core.atom.call(null,null);
var in_chan = cljs.core.async.chan.call(null);
var c__32691__auto___34836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___34836,msgs,in_mult,in_chan){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___34836,msgs,in_mult,in_chan){
return (function (state_34818){
var state_val_34819 = (state_34818[(1)]);
if((state_val_34819 === (7))){
var inst_34810 = (state_34818[(2)]);
var inst_34811 = cljs.core.deref.call(null,msgs);
var inst_34812 = cljs.core.keys.call(null,inst_34811);
var inst_34813 = notes_cb.call(null,inst_34812);
var state_34818__$1 = (function (){var statearr_34820 = state_34818;
(statearr_34820[(7)] = inst_34810);

(statearr_34820[(8)] = inst_34813);

return statearr_34820;
})();
var statearr_34821_34837 = state_34818__$1;
(statearr_34821_34837[(2)] = null);

(statearr_34821_34837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34819 === (1))){
var state_34818__$1 = state_34818;
var statearr_34822_34838 = state_34818__$1;
(statearr_34822_34838[(2)] = null);

(statearr_34822_34838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34819 === (4))){
var inst_34796 = (state_34818[(9)]);
var inst_34796__$1 = (state_34818[(2)]);
var inst_34797 = fugue.midi_monitor.note_on_QMARK_.call(null,inst_34796__$1);
var state_34818__$1 = (function (){var statearr_34823 = state_34818;
(statearr_34823[(9)] = inst_34796__$1);

return statearr_34823;
})();
if(inst_34797){
var statearr_34824_34839 = state_34818__$1;
(statearr_34824_34839[(1)] = (5));

} else {
var statearr_34825_34840 = state_34818__$1;
(statearr_34825_34840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34819 === (6))){
var inst_34796 = (state_34818[(9)]);
var inst_34802 = fugue.midi_monitor.note_off_QMARK_.call(null,inst_34796);
var state_34818__$1 = state_34818;
if(cljs.core.truth_(inst_34802)){
var statearr_34826_34841 = state_34818__$1;
(statearr_34826_34841[(1)] = (8));

} else {
var statearr_34827_34842 = state_34818__$1;
(statearr_34827_34842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34819 === (3))){
var inst_34816 = (state_34818[(2)]);
var state_34818__$1 = state_34818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34818__$1,inst_34816);
} else {
if((state_val_34819 === (2))){
var state_34818__$1 = state_34818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34818__$1,(4),in_chan);
} else {
if((state_val_34819 === (9))){
var state_34818__$1 = state_34818;
var statearr_34828_34843 = state_34818__$1;
(statearr_34828_34843[(2)] = null);

(statearr_34828_34843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34819 === (5))){
var inst_34796 = (state_34818[(9)]);
var inst_34799 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34796);
var inst_34800 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.assoc,inst_34799,inst_34796);
var state_34818__$1 = state_34818;
var statearr_34829_34844 = state_34818__$1;
(statearr_34829_34844[(2)] = inst_34800);

(statearr_34829_34844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34819 === (10))){
var inst_34808 = (state_34818[(2)]);
var state_34818__$1 = state_34818;
var statearr_34830_34845 = state_34818__$1;
(statearr_34830_34845[(2)] = inst_34808);

(statearr_34830_34845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34819 === (8))){
var inst_34796 = (state_34818[(9)]);
var inst_34804 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34796);
var inst_34805 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.dissoc,inst_34804);
var state_34818__$1 = state_34818;
var statearr_34831_34846 = state_34818__$1;
(statearr_34831_34846[(2)] = inst_34805);

(statearr_34831_34846[(1)] = (10));


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
});})(c__32691__auto___34836,msgs,in_mult,in_chan))
;
return ((function (switch__32596__auto__,c__32691__auto___34836,msgs,in_mult,in_chan){
return (function() {
var fugue$midi_monitor$input_monitor_$_state_machine__32597__auto__ = null;
var fugue$midi_monitor$input_monitor_$_state_machine__32597__auto____0 = (function (){
var statearr_34832 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34832[(0)] = fugue$midi_monitor$input_monitor_$_state_machine__32597__auto__);

(statearr_34832[(1)] = (1));

return statearr_34832;
});
var fugue$midi_monitor$input_monitor_$_state_machine__32597__auto____1 = (function (state_34818){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_34818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e34833){if((e34833 instanceof Object)){
var ex__32600__auto__ = e34833;
var statearr_34834_34847 = state_34818;
(statearr_34834_34847[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34848 = state_34818;
state_34818 = G__34848;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
fugue$midi_monitor$input_monitor_$_state_machine__32597__auto__ = function(state_34818){
switch(arguments.length){
case 0:
return fugue$midi_monitor$input_monitor_$_state_machine__32597__auto____0.call(this);
case 1:
return fugue$midi_monitor$input_monitor_$_state_machine__32597__auto____1.call(this,state_34818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$midi_monitor$input_monitor_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$midi_monitor$input_monitor_$_state_machine__32597__auto____0;
fugue$midi_monitor$input_monitor_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$midi_monitor$input_monitor_$_state_machine__32597__auto____1;
return fugue$midi_monitor$input_monitor_$_state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___34836,msgs,in_mult,in_chan))
})();
var state__32693__auto__ = (function (){var statearr_34835 = f__32692__auto__.call(null);
(statearr_34835[(6)] = c__32691__auto___34836);

return statearr_34835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___34836,msgs,in_mult,in_chan))
);


return ((function (msgs,in_mult,in_chan){
return (function (midi_ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.midi_monitor.midi_selector,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx),((function (msgs,in_mult,in_chan){
return (function (in$){
var temp__5720__auto___34849 = cljs.core.deref.call(null,in_mult);
if(cljs.core.truth_(temp__5720__auto___34849)){
var old_mult_34850 = temp__5720__auto___34849;
cljs.core.async.untap.call(null,old_mult_34850,in_chan);
} else {
}

cljs.core.reset_BANG_.call(null,msgs,cljs.core.PersistentArrayMap.EMPTY);

var temp__5720__auto___34851 = in$;
if(cljs.core.truth_(temp__5720__auto___34851)){
var new_mult_34852 = temp__5720__auto___34851;
cljs.core.async.tap.call(null,new_mult_34852,in_chan);
} else {
}

return cljs.core.reset_BANG_.call(null,in_mult,in$);
});})(msgs,in_mult,in_chan))
], null);
});
;})(msgs,in_mult,in_chan))
});

//# sourceMappingURL=midi_monitor.js.map?rel=1610334750268
