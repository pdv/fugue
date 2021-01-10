// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.midi_monitor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.core.async');
goog.require('fugue.cof');
goog.require('fugue.cantor');
goog.require('fugue.midi');
goog.require('fugue.chords');
fugue.midi_monitor.midi_selector = (function fugue$midi_monitor$midi_selector(midi_ctx,on_change){
var temp__5718__auto__ = cljs.core.deref.call(null,midi_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var mctx = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (mctx,temp__5718__auto__){
return (function (p1__34793_SHARP_){
return on_change.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(mctx).call(null,p1__34793_SHARP_.target.value));
});})(mctx,temp__5718__auto__))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),"Select an input"], null),(function (){var iter__4523__auto__ = ((function (mctx,temp__5718__auto__){
return (function fugue$midi_monitor$midi_selector_$_iter__34794(s__34795){
return (new cljs.core.LazySeq(null,((function (mctx,temp__5718__auto__){
return (function (){
var s__34795__$1 = s__34795;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34795__$1);
if(temp__5720__auto__){
var s__34795__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34795__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34795__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34797 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34796 = (0);
while(true){
if((i__34796 < size__4522__auto__)){
var vec__34798 = cljs.core._nth.call(null,c__4521__auto__,i__34796);
var in_name = cljs.core.nth.call(null,vec__34798,(0),null);
cljs.core.chunk_append.call(null,b__34797,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),in_name], null),in_name], null));

var G__34804 = (i__34796 + (1));
i__34796 = G__34804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34797),fugue$midi_monitor$midi_selector_$_iter__34794.call(null,cljs.core.chunk_rest.call(null,s__34795__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34797),null);
}
} else {
var vec__34801 = cljs.core.first.call(null,s__34795__$2);
var in_name = cljs.core.nth.call(null,vec__34801,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),in_name], null),in_name], null),fugue$midi_monitor$midi_selector_$_iter__34794.call(null,cljs.core.rest.call(null,s__34795__$2)));
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
var G__34805 = new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827).cljs$core$IFn$_invoke$arity$1(midi_msg);
var G__34805__$1 = (((G__34805 instanceof cljs.core.Keyword))?G__34805.fqn:null);
switch (G__34805__$1) {
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
fugue.midi_monitor.ratios = (function fugue$midi_monitor$ratios(notes){
var freqs = cljs.core.map.call(null,fugue.midi.note__GT_hz,cljs.core.sort.call(null,notes));
var iter__4523__auto__ = ((function (freqs){
return (function fugue$midi_monitor$ratios_$_iter__34807(s__34808){
return (new cljs.core.LazySeq(null,((function (freqs){
return (function (){
var s__34808__$1 = s__34808;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34808__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34808__$1,x,xs__6277__auto__,temp__5720__auto__,freqs){
return (function fugue$midi_monitor$ratios_$_iter__34807_$_iter__34809(s__34810){
return (new cljs.core.LazySeq(null,((function (s__34808__$1,x,xs__6277__auto__,temp__5720__auto__,freqs){
return (function (){
var s__34810__$1 = s__34810;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34810__$1);
if(temp__5720__auto____$1){
var s__34810__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34810__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34810__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34812 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34811 = (0);
while(true){
if((i__34811 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__34811);
cljs.core.chunk_append.call(null,b__34812,(x / y));

var G__34813 = (i__34811 + (1));
i__34811 = G__34813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34812),fugue$midi_monitor$ratios_$_iter__34807_$_iter__34809.call(null,cljs.core.chunk_rest.call(null,s__34810__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34812),null);
}
} else {
var y = cljs.core.first.call(null,s__34810__$2);
return cljs.core.cons.call(null,(x / y),fugue$midi_monitor$ratios_$_iter__34807_$_iter__34809.call(null,cljs.core.rest.call(null,s__34810__$2)));
}
} else {
return null;
}
break;
}
});})(s__34808__$1,x,xs__6277__auto__,temp__5720__auto__,freqs))
,null,null));
});})(s__34808__$1,x,xs__6277__auto__,temp__5720__auto__,freqs))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,freqs));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fugue$midi_monitor$ratios_$_iter__34807.call(null,cljs.core.rest.call(null,s__34808__$1)));
} else {
var G__34814 = cljs.core.rest.call(null,s__34808__$1);
s__34808__$1 = G__34814;
continue;
}
} else {
return null;
}
break;
}
});})(freqs))
,null,null));
});})(freqs))
;
return iter__4523__auto__.call(null,freqs);
});
fugue.midi_monitor.other_thing = (function fugue$midi_monitor$other_thing(notes){
var freqs = cljs.core.map.call(null,fugue.midi.note__GT_hz,cljs.core.sort.call(null,notes));
var iter__4523__auto__ = ((function (freqs){
return (function fugue$midi_monitor$other_thing_$_iter__34815(s__34816){
return (new cljs.core.LazySeq(null,((function (freqs){
return (function (){
var s__34816__$1 = s__34816;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34816__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34816__$1,x,xs__6277__auto__,temp__5720__auto__,freqs){
return (function fugue$midi_monitor$other_thing_$_iter__34815_$_iter__34817(s__34818){
return (new cljs.core.LazySeq(null,((function (s__34816__$1,x,xs__6277__auto__,temp__5720__auto__,freqs){
return (function (){
var s__34818__$1 = s__34818;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34818__$1);
if(temp__5720__auto____$1){
var s__34818__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34818__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34818__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34820 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34819 = (0);
while(true){
if((i__34819 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__34819);
cljs.core.chunk_append.call(null,b__34820,(y - x));

var G__34821 = (i__34819 + (1));
i__34819 = G__34821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34820),fugue$midi_monitor$other_thing_$_iter__34815_$_iter__34817.call(null,cljs.core.chunk_rest.call(null,s__34818__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34820),null);
}
} else {
var y = cljs.core.first.call(null,s__34818__$2);
return cljs.core.cons.call(null,(y - x),fugue$midi_monitor$other_thing_$_iter__34815_$_iter__34817.call(null,cljs.core.rest.call(null,s__34818__$2)));
}
} else {
return null;
}
break;
}
});})(s__34816__$1,x,xs__6277__auto__,temp__5720__auto__,freqs))
,null,null));
});})(s__34816__$1,x,xs__6277__auto__,temp__5720__auto__,freqs))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,freqs));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fugue$midi_monitor$other_thing_$_iter__34815.call(null,cljs.core.rest.call(null,s__34816__$1)));
} else {
var G__34822 = cljs.core.rest.call(null,s__34816__$1);
s__34816__$1 = G__34822;
continue;
}
} else {
return null;
}
break;
}
});})(freqs))
,null,null));
});})(freqs))
;
return iter__4523__auto__.call(null,freqs);
});
fugue.midi_monitor.note_monitor_view = (function fugue$midi_monitor$note_monitor_view(notes){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.cof.cof,notes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.cantor.cantor_table,(function (){var or__4131__auto__ = cljs.core.first.call(null,notes);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (69);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sort.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,notes)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sort.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__34823_SHARP_){
return cljs.core.mod.call(null,p1__34823_SHARP_,(12));
}),notes))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.int$,fugue.midi.note__GT_hz),notes)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$note_monitor_view_$_iter__34824(s__34825){
return (new cljs.core.LazySeq(null,(function (){
var s__34825__$1 = s__34825;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34825__$1);
if(temp__5720__auto__){
var s__34825__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34825__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34825__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34827 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34826 = (0);
while(true){
if((i__34826 < size__4522__auto__)){
var ratio = cljs.core._nth.call(null,c__4521__auto__,i__34826);
cljs.core.chunk_append.call(null,b__34827,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),goog.string.format("%.2f",ratio)], null));

var G__34840 = (i__34826 + (1));
i__34826 = G__34840;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34827),fugue$midi_monitor$note_monitor_view_$_iter__34824.call(null,cljs.core.chunk_rest.call(null,s__34825__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34827),null);
}
} else {
var ratio = cljs.core.first.call(null,s__34825__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),goog.string.format("%.2f",ratio)], null),fugue$midi_monitor$note_monitor_view_$_iter__34824.call(null,cljs.core.rest.call(null,s__34825__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,fugue.midi_monitor.ratios.call(null,notes)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$note_monitor_view_$_iter__34828(s__34829){
return (new cljs.core.LazySeq(null,(function (){
var s__34829__$1 = s__34829;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34829__$1);
if(temp__5720__auto__){
var s__34829__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34829__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34829__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34831 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34830 = (0);
while(true){
if((i__34830 < size__4522__auto__)){
var ratio = cljs.core._nth.call(null,c__4521__auto__,i__34830);
cljs.core.chunk_append.call(null,b__34831,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),goog.string.format("%.2f",ratio)], null));

var G__34841 = (i__34830 + (1));
i__34830 = G__34841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34831),fugue$midi_monitor$note_monitor_view_$_iter__34828.call(null,cljs.core.chunk_rest.call(null,s__34829__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34831),null);
}
} else {
var ratio = cljs.core.first.call(null,s__34829__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),goog.string.format("%.2f",ratio)], null),fugue$midi_monitor$note_monitor_view_$_iter__34828.call(null,cljs.core.rest.call(null,s__34829__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,fugue.midi_monitor.other_thing.call(null,notes)));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$note_monitor_view_$_iter__34832(s__34833){
return (new cljs.core.LazySeq(null,(function (){
var s__34833__$1 = s__34833;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34833__$1);
if(temp__5720__auto__){
var s__34833__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34833__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34833__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34835 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34834 = (0);
while(true){
if((i__34834 < size__4522__auto__)){
var chord = cljs.core._nth.call(null,c__4521__auto__,i__34834);
cljs.core.chunk_append.call(null,b__34835,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null));

var G__34842 = (i__34834 + (1));
i__34834 = G__34842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34835),fugue$midi_monitor$note_monitor_view_$_iter__34832.call(null,cljs.core.chunk_rest.call(null,s__34833__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34835),null);
}
} else {
var chord = cljs.core.first.call(null,s__34833__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null),fugue$midi_monitor$note_monitor_view_$_iter__34832.call(null,cljs.core.rest.call(null,s__34833__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,fugue.chords.possible_chords.call(null,notes));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$note_monitor_view_$_iter__34836(s__34837){
return (new cljs.core.LazySeq(null,(function (){
var s__34837__$1 = s__34837;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34837__$1);
if(temp__5720__auto__){
var s__34837__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34837__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34837__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34839 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34838 = (0);
while(true){
if((i__34838 < size__4522__auto__)){
var chord = cljs.core._nth.call(null,c__4521__auto__,i__34838);
cljs.core.chunk_append.call(null,b__34839,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null));

var G__34843 = (i__34838 + (1));
i__34838 = G__34843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34839),fugue$midi_monitor$note_monitor_view_$_iter__34836.call(null,cljs.core.chunk_rest.call(null,s__34837__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34839),null);
}
} else {
var chord = cljs.core.first.call(null,s__34837__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null),fugue$midi_monitor$note_monitor_view_$_iter__34836.call(null,cljs.core.rest.call(null,s__34837__$2)));
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
var c__32685__auto___34884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___34884,msgs,in_mult,in_chan){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___34884,msgs,in_mult,in_chan){
return (function (state_34866){
var state_val_34867 = (state_34866[(1)]);
if((state_val_34867 === (7))){
var inst_34861 = (state_34866[(2)]);
var state_34866__$1 = (function (){var statearr_34868 = state_34866;
(statearr_34868[(7)] = inst_34861);

return statearr_34868;
})();
var statearr_34869_34885 = state_34866__$1;
(statearr_34869_34885[(2)] = null);

(statearr_34869_34885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (1))){
var state_34866__$1 = state_34866;
var statearr_34870_34886 = state_34866__$1;
(statearr_34870_34886[(2)] = null);

(statearr_34870_34886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (4))){
var inst_34846 = (state_34866[(8)]);
var inst_34846__$1 = (state_34866[(2)]);
var inst_34847 = cljs.core.print.call(null,inst_34846__$1);
var inst_34848 = fugue.midi_monitor.note_on_QMARK_.call(null,inst_34846__$1);
var state_34866__$1 = (function (){var statearr_34871 = state_34866;
(statearr_34871[(8)] = inst_34846__$1);

(statearr_34871[(9)] = inst_34847);

return statearr_34871;
})();
if(inst_34848){
var statearr_34872_34887 = state_34866__$1;
(statearr_34872_34887[(1)] = (5));

} else {
var statearr_34873_34888 = state_34866__$1;
(statearr_34873_34888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (6))){
var inst_34846 = (state_34866[(8)]);
var inst_34853 = fugue.midi_monitor.note_off_QMARK_.call(null,inst_34846);
var state_34866__$1 = state_34866;
if(cljs.core.truth_(inst_34853)){
var statearr_34874_34889 = state_34866__$1;
(statearr_34874_34889[(1)] = (8));

} else {
var statearr_34875_34890 = state_34866__$1;
(statearr_34875_34890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (3))){
var inst_34864 = (state_34866[(2)]);
var state_34866__$1 = state_34866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34866__$1,inst_34864);
} else {
if((state_val_34867 === (2))){
var state_34866__$1 = state_34866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34866__$1,(4),in_chan);
} else {
if((state_val_34867 === (9))){
var state_34866__$1 = state_34866;
var statearr_34876_34891 = state_34866__$1;
(statearr_34876_34891[(2)] = null);

(statearr_34876_34891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (5))){
var inst_34846 = (state_34866[(8)]);
var inst_34850 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34846);
var inst_34851 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.assoc,inst_34850,inst_34846);
var state_34866__$1 = state_34866;
var statearr_34877_34892 = state_34866__$1;
(statearr_34877_34892[(2)] = inst_34851);

(statearr_34877_34892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (10))){
var inst_34859 = (state_34866[(2)]);
var state_34866__$1 = state_34866;
var statearr_34878_34893 = state_34866__$1;
(statearr_34878_34893[(2)] = inst_34859);

(statearr_34878_34893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (8))){
var inst_34846 = (state_34866[(8)]);
var inst_34855 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34846);
var inst_34856 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.dissoc,inst_34855);
var state_34866__$1 = state_34866;
var statearr_34879_34894 = state_34866__$1;
(statearr_34879_34894[(2)] = inst_34856);

(statearr_34879_34894[(1)] = (10));


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
});})(c__32685__auto___34884,msgs,in_mult,in_chan))
;
return ((function (switch__32590__auto__,c__32685__auto___34884,msgs,in_mult,in_chan){
return (function() {
var fugue$midi_monitor$monitor_$_state_machine__32591__auto__ = null;
var fugue$midi_monitor$monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34880 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34880[(0)] = fugue$midi_monitor$monitor_$_state_machine__32591__auto__);

(statearr_34880[(1)] = (1));

return statearr_34880;
});
var fugue$midi_monitor$monitor_$_state_machine__32591__auto____1 = (function (state_34866){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34881){if((e34881 instanceof Object)){
var ex__32594__auto__ = e34881;
var statearr_34882_34895 = state_34866;
(statearr_34882_34895[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34896 = state_34866;
state_34866 = G__34896;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$midi_monitor$monitor_$_state_machine__32591__auto__ = function(state_34866){
switch(arguments.length){
case 0:
return fugue$midi_monitor$monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$midi_monitor$monitor_$_state_machine__32591__auto____1.call(this,state_34866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$midi_monitor$monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$midi_monitor$monitor_$_state_machine__32591__auto____0;
fugue$midi_monitor$monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$midi_monitor$monitor_$_state_machine__32591__auto____1;
return fugue$midi_monitor$monitor_$_state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___34884,msgs,in_mult,in_chan))
})();
var state__32687__auto__ = (function (){var statearr_34883 = f__32686__auto__.call(null);
(statearr_34883[(6)] = c__32685__auto___34884);

return statearr_34883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___34884,msgs,in_mult,in_chan))
);


return ((function (msgs,in_mult,in_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.midi_monitor.midi_selector,midi_ctx,((function (msgs,in_mult,in_chan){
return (function (in$){
var temp__5720__auto___34897 = cljs.core.deref.call(null,in_mult);
if(cljs.core.truth_(temp__5720__auto___34897)){
var old_mult_34898 = temp__5720__auto___34897;
cljs.core.async.untap.call(null,old_mult_34898,in_chan);
} else {
}

cljs.core.reset_BANG_.call(null,msgs,cljs.core.PersistentArrayMap.EMPTY);

var temp__5720__auto___34899 = in$;
if(cljs.core.truth_(temp__5720__auto___34899)){
var new_mult_34900 = temp__5720__auto___34899;
cljs.core.async.tap.call(null,new_mult_34900,in_chan);
} else {
}

return cljs.core.reset_BANG_.call(null,in_mult,in$);
});})(msgs,in_mult,in_chan))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.midi_monitor.note_monitor_view,cljs.core.keys.call(null,cljs.core.deref.call(null,msgs))], null)], null);
});
;})(msgs,in_mult,in_chan))
});

//# sourceMappingURL=midi_monitor.js.map?rel=1610309312493
