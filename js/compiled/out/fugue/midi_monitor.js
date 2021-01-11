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
fugue.midi_monitor.midi_selector = (function fugue$midi_monitor$midi_selector(midi_ctx,on_change){
var temp__5718__auto__ = cljs.core.deref.call(null,midi_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var mctx = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (mctx,temp__5718__auto__){
return (function (p1__34780_SHARP_){
return on_change.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(mctx).call(null,p1__34780_SHARP_.target.value));
});})(mctx,temp__5718__auto__))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),"Select an input"], null),(function (){var iter__4523__auto__ = ((function (mctx,temp__5718__auto__){
return (function fugue$midi_monitor$midi_selector_$_iter__34781(s__34782){
return (new cljs.core.LazySeq(null,((function (mctx,temp__5718__auto__){
return (function (){
var s__34782__$1 = s__34782;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34782__$1);
if(temp__5720__auto__){
var s__34782__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34782__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34782__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34784 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34783 = (0);
while(true){
if((i__34783 < size__4522__auto__)){
var vec__34785 = cljs.core._nth.call(null,c__4521__auto__,i__34783);
var in_name = cljs.core.nth.call(null,vec__34785,(0),null);
cljs.core.chunk_append.call(null,b__34784,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),in_name], null),in_name], null));

var G__34791 = (i__34783 + (1));
i__34783 = G__34791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34784),fugue$midi_monitor$midi_selector_$_iter__34781.call(null,cljs.core.chunk_rest.call(null,s__34782__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34784),null);
}
} else {
var vec__34788 = cljs.core.first.call(null,s__34782__$2);
var in_name = cljs.core.nth.call(null,vec__34788,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),in_name], null),in_name], null),fugue$midi_monitor$midi_selector_$_iter__34781.call(null,cljs.core.rest.call(null,s__34782__$2)));
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
var G__34792 = new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827).cljs$core$IFn$_invoke$arity$1(midi_msg);
var G__34792__$1 = (((G__34792 instanceof cljs.core.Keyword))?G__34792.fqn:null);
switch (G__34792__$1) {
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
return (function fugue$midi_monitor$ratios_$_iter__34794(s__34795){
return (new cljs.core.LazySeq(null,((function (freqs){
return (function (){
var s__34795__$1 = s__34795;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34795__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34795__$1,x,xs__6277__auto__,temp__5720__auto__,freqs){
return (function fugue$midi_monitor$ratios_$_iter__34794_$_iter__34796(s__34797){
return (new cljs.core.LazySeq(null,((function (s__34795__$1,x,xs__6277__auto__,temp__5720__auto__,freqs){
return (function (){
var s__34797__$1 = s__34797;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34797__$1);
if(temp__5720__auto____$1){
var s__34797__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34797__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34797__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34799 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34798 = (0);
while(true){
if((i__34798 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__34798);
cljs.core.chunk_append.call(null,b__34799,(x / y));

var G__34800 = (i__34798 + (1));
i__34798 = G__34800;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34799),fugue$midi_monitor$ratios_$_iter__34794_$_iter__34796.call(null,cljs.core.chunk_rest.call(null,s__34797__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34799),null);
}
} else {
var y = cljs.core.first.call(null,s__34797__$2);
return cljs.core.cons.call(null,(x / y),fugue$midi_monitor$ratios_$_iter__34794_$_iter__34796.call(null,cljs.core.rest.call(null,s__34797__$2)));
}
} else {
return null;
}
break;
}
});})(s__34795__$1,x,xs__6277__auto__,temp__5720__auto__,freqs))
,null,null));
});})(s__34795__$1,x,xs__6277__auto__,temp__5720__auto__,freqs))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,freqs));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fugue$midi_monitor$ratios_$_iter__34794.call(null,cljs.core.rest.call(null,s__34795__$1)));
} else {
var G__34801 = cljs.core.rest.call(null,s__34795__$1);
s__34795__$1 = G__34801;
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
return (function fugue$midi_monitor$other_thing_$_iter__34802(s__34803){
return (new cljs.core.LazySeq(null,((function (freqs){
return (function (){
var s__34803__$1 = s__34803;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34803__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34803__$1,x,xs__6277__auto__,temp__5720__auto__,freqs){
return (function fugue$midi_monitor$other_thing_$_iter__34802_$_iter__34804(s__34805){
return (new cljs.core.LazySeq(null,((function (s__34803__$1,x,xs__6277__auto__,temp__5720__auto__,freqs){
return (function (){
var s__34805__$1 = s__34805;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34805__$1);
if(temp__5720__auto____$1){
var s__34805__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34805__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34805__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34807 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34806 = (0);
while(true){
if((i__34806 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__34806);
cljs.core.chunk_append.call(null,b__34807,(y - x));

var G__34808 = (i__34806 + (1));
i__34806 = G__34808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34807),fugue$midi_monitor$other_thing_$_iter__34802_$_iter__34804.call(null,cljs.core.chunk_rest.call(null,s__34805__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34807),null);
}
} else {
var y = cljs.core.first.call(null,s__34805__$2);
return cljs.core.cons.call(null,(y - x),fugue$midi_monitor$other_thing_$_iter__34802_$_iter__34804.call(null,cljs.core.rest.call(null,s__34805__$2)));
}
} else {
return null;
}
break;
}
});})(s__34803__$1,x,xs__6277__auto__,temp__5720__auto__,freqs))
,null,null));
});})(s__34803__$1,x,xs__6277__auto__,temp__5720__auto__,freqs))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,freqs));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fugue$midi_monitor$other_thing_$_iter__34802.call(null,cljs.core.rest.call(null,s__34803__$1)));
} else {
var G__34809 = cljs.core.rest.call(null,s__34803__$1);
s__34803__$1 = G__34809;
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
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.cof.cof,notes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.cantor.cantor_table,(function (){var or__4131__auto__ = cljs.core.first.call(null,notes);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (69);
}
})(),(14)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sort.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,notes)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sort.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__34810_SHARP_){
return cljs.core.mod.call(null,p1__34810_SHARP_,(12));
}),notes))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.int$,fugue.midi.note__GT_hz),notes)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$note_monitor_view_$_iter__34811(s__34812){
return (new cljs.core.LazySeq(null,(function (){
var s__34812__$1 = s__34812;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34812__$1);
if(temp__5720__auto__){
var s__34812__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34812__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34812__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34814 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34813 = (0);
while(true){
if((i__34813 < size__4522__auto__)){
var ratio = cljs.core._nth.call(null,c__4521__auto__,i__34813);
cljs.core.chunk_append.call(null,b__34814,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),goog.string.format("%.2f",ratio)], null));

var G__34827 = (i__34813 + (1));
i__34813 = G__34827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34814),fugue$midi_monitor$note_monitor_view_$_iter__34811.call(null,cljs.core.chunk_rest.call(null,s__34812__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34814),null);
}
} else {
var ratio = cljs.core.first.call(null,s__34812__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),goog.string.format("%.2f",ratio)], null),fugue$midi_monitor$note_monitor_view_$_iter__34811.call(null,cljs.core.rest.call(null,s__34812__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,fugue.midi_monitor.ratios.call(null,notes)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$note_monitor_view_$_iter__34815(s__34816){
return (new cljs.core.LazySeq(null,(function (){
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
var ratio = cljs.core._nth.call(null,c__4521__auto__,i__34817);
cljs.core.chunk_append.call(null,b__34818,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),goog.string.format("%.2f",ratio)], null));

var G__34828 = (i__34817 + (1));
i__34817 = G__34828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34818),fugue$midi_monitor$note_monitor_view_$_iter__34815.call(null,cljs.core.chunk_rest.call(null,s__34816__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34818),null);
}
} else {
var ratio = cljs.core.first.call(null,s__34816__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),goog.string.format("%.2f",ratio)], null),fugue$midi_monitor$note_monitor_view_$_iter__34815.call(null,cljs.core.rest.call(null,s__34816__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,fugue.midi_monitor.other_thing.call(null,notes)));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$note_monitor_view_$_iter__34819(s__34820){
return (new cljs.core.LazySeq(null,(function (){
var s__34820__$1 = s__34820;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34820__$1);
if(temp__5720__auto__){
var s__34820__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34820__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34820__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34822 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34821 = (0);
while(true){
if((i__34821 < size__4522__auto__)){
var chord = cljs.core._nth.call(null,c__4521__auto__,i__34821);
cljs.core.chunk_append.call(null,b__34822,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null));

var G__34829 = (i__34821 + (1));
i__34821 = G__34829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34822),fugue$midi_monitor$note_monitor_view_$_iter__34819.call(null,cljs.core.chunk_rest.call(null,s__34820__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34822),null);
}
} else {
var chord = cljs.core.first.call(null,s__34820__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null),fugue$midi_monitor$note_monitor_view_$_iter__34819.call(null,cljs.core.rest.call(null,s__34820__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,fugue.chords.possible_chords.call(null,notes));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$note_monitor_view_$_iter__34823(s__34824){
return (new cljs.core.LazySeq(null,(function (){
var s__34824__$1 = s__34824;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34824__$1);
if(temp__5720__auto__){
var s__34824__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34824__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34824__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34826 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34825 = (0);
while(true){
if((i__34825 < size__4522__auto__)){
var chord = cljs.core._nth.call(null,c__4521__auto__,i__34825);
cljs.core.chunk_append.call(null,b__34826,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null));

var G__34830 = (i__34825 + (1));
i__34825 = G__34830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34826),fugue$midi_monitor$note_monitor_view_$_iter__34823.call(null,cljs.core.chunk_rest.call(null,s__34824__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34826),null);
}
} else {
var chord = cljs.core.first.call(null,s__34824__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null),fugue$midi_monitor$note_monitor_view_$_iter__34823.call(null,cljs.core.rest.call(null,s__34824__$2)));
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
var c__32691__auto___34871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___34871,msgs,in_mult,in_chan){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___34871,msgs,in_mult,in_chan){
return (function (state_34853){
var state_val_34854 = (state_34853[(1)]);
if((state_val_34854 === (7))){
var inst_34848 = (state_34853[(2)]);
var state_34853__$1 = (function (){var statearr_34855 = state_34853;
(statearr_34855[(7)] = inst_34848);

return statearr_34855;
})();
var statearr_34856_34872 = state_34853__$1;
(statearr_34856_34872[(2)] = null);

(statearr_34856_34872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (1))){
var state_34853__$1 = state_34853;
var statearr_34857_34873 = state_34853__$1;
(statearr_34857_34873[(2)] = null);

(statearr_34857_34873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (4))){
var inst_34833 = (state_34853[(8)]);
var inst_34833__$1 = (state_34853[(2)]);
var inst_34834 = cljs.core.print.call(null,inst_34833__$1);
var inst_34835 = fugue.midi_monitor.note_on_QMARK_.call(null,inst_34833__$1);
var state_34853__$1 = (function (){var statearr_34858 = state_34853;
(statearr_34858[(8)] = inst_34833__$1);

(statearr_34858[(9)] = inst_34834);

return statearr_34858;
})();
if(inst_34835){
var statearr_34859_34874 = state_34853__$1;
(statearr_34859_34874[(1)] = (5));

} else {
var statearr_34860_34875 = state_34853__$1;
(statearr_34860_34875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (6))){
var inst_34833 = (state_34853[(8)]);
var inst_34840 = fugue.midi_monitor.note_off_QMARK_.call(null,inst_34833);
var state_34853__$1 = state_34853;
if(cljs.core.truth_(inst_34840)){
var statearr_34861_34876 = state_34853__$1;
(statearr_34861_34876[(1)] = (8));

} else {
var statearr_34862_34877 = state_34853__$1;
(statearr_34862_34877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (3))){
var inst_34851 = (state_34853[(2)]);
var state_34853__$1 = state_34853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34853__$1,inst_34851);
} else {
if((state_val_34854 === (2))){
var state_34853__$1 = state_34853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34853__$1,(4),in_chan);
} else {
if((state_val_34854 === (9))){
var state_34853__$1 = state_34853;
var statearr_34863_34878 = state_34853__$1;
(statearr_34863_34878[(2)] = null);

(statearr_34863_34878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (5))){
var inst_34833 = (state_34853[(8)]);
var inst_34837 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34833);
var inst_34838 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.assoc,inst_34837,inst_34833);
var state_34853__$1 = state_34853;
var statearr_34864_34879 = state_34853__$1;
(statearr_34864_34879[(2)] = inst_34838);

(statearr_34864_34879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (10))){
var inst_34846 = (state_34853[(2)]);
var state_34853__$1 = state_34853;
var statearr_34865_34880 = state_34853__$1;
(statearr_34865_34880[(2)] = inst_34846);

(statearr_34865_34880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34854 === (8))){
var inst_34833 = (state_34853[(8)]);
var inst_34842 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34833);
var inst_34843 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.dissoc,inst_34842);
var state_34853__$1 = state_34853;
var statearr_34866_34881 = state_34853__$1;
(statearr_34866_34881[(2)] = inst_34843);

(statearr_34866_34881[(1)] = (10));


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
});})(c__32691__auto___34871,msgs,in_mult,in_chan))
;
return ((function (switch__32596__auto__,c__32691__auto___34871,msgs,in_mult,in_chan){
return (function() {
var fugue$midi_monitor$monitor_$_state_machine__32597__auto__ = null;
var fugue$midi_monitor$monitor_$_state_machine__32597__auto____0 = (function (){
var statearr_34867 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34867[(0)] = fugue$midi_monitor$monitor_$_state_machine__32597__auto__);

(statearr_34867[(1)] = (1));

return statearr_34867;
});
var fugue$midi_monitor$monitor_$_state_machine__32597__auto____1 = (function (state_34853){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_34853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e34868){if((e34868 instanceof Object)){
var ex__32600__auto__ = e34868;
var statearr_34869_34882 = state_34853;
(statearr_34869_34882[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34883 = state_34853;
state_34853 = G__34883;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
fugue$midi_monitor$monitor_$_state_machine__32597__auto__ = function(state_34853){
switch(arguments.length){
case 0:
return fugue$midi_monitor$monitor_$_state_machine__32597__auto____0.call(this);
case 1:
return fugue$midi_monitor$monitor_$_state_machine__32597__auto____1.call(this,state_34853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$midi_monitor$monitor_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$midi_monitor$monitor_$_state_machine__32597__auto____0;
fugue$midi_monitor$monitor_$_state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$midi_monitor$monitor_$_state_machine__32597__auto____1;
return fugue$midi_monitor$monitor_$_state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___34871,msgs,in_mult,in_chan))
})();
var state__32693__auto__ = (function (){var statearr_34870 = f__32692__auto__.call(null);
(statearr_34870[(6)] = c__32691__auto___34871);

return statearr_34870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___34871,msgs,in_mult,in_chan))
);


return ((function (msgs,in_mult,in_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.midi_monitor.midi_selector,midi_ctx,((function (msgs,in_mult,in_chan){
return (function (in$){
var temp__5720__auto___34884 = cljs.core.deref.call(null,in_mult);
if(cljs.core.truth_(temp__5720__auto___34884)){
var old_mult_34885 = temp__5720__auto___34884;
cljs.core.async.untap.call(null,old_mult_34885,in_chan);
} else {
}

cljs.core.reset_BANG_.call(null,msgs,cljs.core.PersistentArrayMap.EMPTY);

var temp__5720__auto___34886 = in$;
if(cljs.core.truth_(temp__5720__auto___34886)){
var new_mult_34887 = temp__5720__auto___34886;
cljs.core.async.tap.call(null,new_mult_34887,in_chan);
} else {
}

return cljs.core.reset_BANG_.call(null,in_mult,in$);
});})(msgs,in_mult,in_chan))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.midi_monitor.note_monitor_view,cljs.core.keys.call(null,cljs.core.deref.call(null,msgs))], null)], null);
});
;})(msgs,in_mult,in_chan))
});

//# sourceMappingURL=midi_monitor.js.map?rel=1610329047353
