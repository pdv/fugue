// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.midi_input');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.core.async');
goog.require('fugue.components');
goog.require('fugue.midi');
goog.require('fugue.keyboard');
fugue.midi_input.midi_selector = (function fugue$midi_input$midi_selector(midi_ins,on_change){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__34792_SHARP_){
return on_change.call(null,cljs.core.get.call(null,midi_ins,p1__34792_SHARP_.target.value));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),"choose an input"], null),(function (){var iter__4523__auto__ = (function fugue$midi_input$midi_selector_$_iter__34793(s__34794){
return (new cljs.core.LazySeq(null,(function (){
var s__34794__$1 = s__34794;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34794__$1);
if(temp__5720__auto__){
var s__34794__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34794__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34794__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34796 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34795 = (0);
while(true){
if((i__34795 < size__4522__auto__)){
var vec__34797 = cljs.core._nth.call(null,c__4521__auto__,i__34795);
var in_name = cljs.core.nth.call(null,vec__34797,(0),null);
var _ = cljs.core.nth.call(null,vec__34797,(1),null);
cljs.core.chunk_append.call(null,b__34796,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),in_name], null),in_name], null));

var G__34803 = (i__34795 + (1));
i__34795 = G__34803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34796),fugue$midi_input$midi_selector_$_iter__34793.call(null,cljs.core.chunk_rest.call(null,s__34794__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34796),null);
}
} else {
var vec__34800 = cljs.core.first.call(null,s__34794__$2);
var in_name = cljs.core.nth.call(null,vec__34800,(0),null);
var _ = cljs.core.nth.call(null,vec__34800,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),in_name], null),in_name], null),fugue$midi_input$midi_selector_$_iter__34793.call(null,cljs.core.rest.call(null,s__34794__$2)));
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
fugue.midi_input.midi_input_selector = (function fugue$midi_input$midi_input_selector(midi_ctx,out_chan){
var in_mult = reagent.core.atom.call(null,null);
return ((function (in_mult){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.midi_input.midi_selector,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx),((function (in_mult){
return (function (in$){
var temp__5720__auto___34804 = cljs.core.deref.call(null,in_mult);
if(cljs.core.truth_(temp__5720__auto___34804)){
var old_mult_34805 = temp__5720__auto___34804;
cljs.core.async.untap.call(null,old_mult_34805,out_chan);
} else {
}

var temp__5720__auto___34806 = in$;
if(cljs.core.truth_(temp__5720__auto___34806)){
var new_mult_34807 = temp__5720__auto___34806;
cljs.core.async.tap.call(null,new_mult_34807,out_chan);
} else {
}

return cljs.core.reset_BANG_.call(null,in_mult,in$);
});})(in_mult))
], null);
});
;})(in_mult))
});
fugue.midi_input.midi_input = (function fugue$midi_input$midi_input(out_chan){
var midi_ctx = reagent.core.atom.call(null,null);
var using_keyboard = reagent.core.atom.call(null,false);
return ((function (midi_ctx,using_keyboard){
return (function (){
var temp__5718__auto__ = cljs.core.deref.call(null,midi_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var ctx = temp__5718__auto__;
return fugue.midi_input.midi_input_selector.call(null,ctx,out_chan);
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,using_keyboard))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"A is C, W is A#, S is D, etc. Z down octave X up"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__5718__auto__,midi_ctx,using_keyboard){
return (function (){
return fugue.midi.make_ctx.call(null,cljs.core.partial.call(null,cljs.core.reset_BANG_,midi_ctx));
});})(temp__5718__auto__,midi_ctx,using_keyboard))
], null),"midi input"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__5718__auto__,midi_ctx,using_keyboard){
return (function (){
cljs.core.async.pipe.call(null,fugue.keyboard.kb_midi_chan.call(null),out_chan);

return cljs.core.reset_BANG_.call(null,using_keyboard,true);
});})(temp__5718__auto__,midi_ctx,using_keyboard))
], null),"computer keyboard"], null)], null);
}
}
});
;})(midi_ctx,using_keyboard))
});

//# sourceMappingURL=midi_input.js.map?rel=1610386478964
