// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.midi_monitor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('goog.string.format');
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
fugue.midi_monitor.ratios = (function fugue$midi_monitor$ratios(notes){
var freqs = cljs.core.map.call(null,fugue.midi.note__GT_hz,cljs.core.sort.call(null,notes));
var iter__4523__auto__ = ((function (freqs){
return (function fugue$midi_monitor$ratios_$_iter__34761(s__34762){
return (new cljs.core.LazySeq(null,((function (freqs){
return (function (){
var s__34762__$1 = s__34762;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34762__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34762__$1,x,xs__6277__auto__,temp__5720__auto__,freqs){
return (function fugue$midi_monitor$ratios_$_iter__34761_$_iter__34763(s__34764){
return (new cljs.core.LazySeq(null,((function (s__34762__$1,x,xs__6277__auto__,temp__5720__auto__,freqs){
return (function (){
var s__34764__$1 = s__34764;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34764__$1);
if(temp__5720__auto____$1){
var s__34764__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34764__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34764__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34766 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34765 = (0);
while(true){
if((i__34765 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__34765);
cljs.core.chunk_append.call(null,b__34766,(x / y));

var G__34767 = (i__34765 + (1));
i__34765 = G__34767;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34766),fugue$midi_monitor$ratios_$_iter__34761_$_iter__34763.call(null,cljs.core.chunk_rest.call(null,s__34764__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34766),null);
}
} else {
var y = cljs.core.first.call(null,s__34764__$2);
return cljs.core.cons.call(null,(x / y),fugue$midi_monitor$ratios_$_iter__34761_$_iter__34763.call(null,cljs.core.rest.call(null,s__34764__$2)));
}
} else {
return null;
}
break;
}
});})(s__34762__$1,x,xs__6277__auto__,temp__5720__auto__,freqs))
,null,null));
});})(s__34762__$1,x,xs__6277__auto__,temp__5720__auto__,freqs))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,freqs));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fugue$midi_monitor$ratios_$_iter__34761.call(null,cljs.core.rest.call(null,s__34762__$1)));
} else {
var G__34768 = cljs.core.rest.call(null,s__34762__$1);
s__34762__$1 = G__34768;
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
return (function fugue$midi_monitor$other_thing_$_iter__34769(s__34770){
return (new cljs.core.LazySeq(null,((function (freqs){
return (function (){
var s__34770__$1 = s__34770;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34770__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34770__$1,x,xs__6277__auto__,temp__5720__auto__,freqs){
return (function fugue$midi_monitor$other_thing_$_iter__34769_$_iter__34771(s__34772){
return (new cljs.core.LazySeq(null,((function (s__34770__$1,x,xs__6277__auto__,temp__5720__auto__,freqs){
return (function (){
var s__34772__$1 = s__34772;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34772__$1);
if(temp__5720__auto____$1){
var s__34772__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34772__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34772__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34774 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34773 = (0);
while(true){
if((i__34773 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__34773);
cljs.core.chunk_append.call(null,b__34774,(y - x));

var G__34775 = (i__34773 + (1));
i__34773 = G__34775;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34774),fugue$midi_monitor$other_thing_$_iter__34769_$_iter__34771.call(null,cljs.core.chunk_rest.call(null,s__34772__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34774),null);
}
} else {
var y = cljs.core.first.call(null,s__34772__$2);
return cljs.core.cons.call(null,(y - x),fugue$midi_monitor$other_thing_$_iter__34769_$_iter__34771.call(null,cljs.core.rest.call(null,s__34772__$2)));
}
} else {
return null;
}
break;
}
});})(s__34770__$1,x,xs__6277__auto__,temp__5720__auto__,freqs))
,null,null));
});})(s__34770__$1,x,xs__6277__auto__,temp__5720__auto__,freqs))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,freqs));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,fugue$midi_monitor$other_thing_$_iter__34769.call(null,cljs.core.rest.call(null,s__34770__$1)));
} else {
var G__34776 = cljs.core.rest.call(null,s__34770__$1);
s__34770__$1 = G__34776;
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
fugue.midi_monitor.relatives = (function fugue$midi_monitor$relatives(root,limit){
var iter__4523__auto__ = (function fugue$midi_monitor$relatives_$_iter__34777(s__34778){
return (new cljs.core.LazySeq(null,(function (){
var s__34778__$1 = s__34778;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34778__$1);
if(temp__5720__auto__){
var s__34778__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34778__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34778__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34780 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34779 = (0);
while(true){
if((i__34779 < size__4522__auto__)){
var den = cljs.core._nth.call(null,c__4521__auto__,i__34779);
cljs.core.chunk_append.call(null,b__34780,(function (){var iter__4523__auto__ = ((function (i__34779,den,c__4521__auto__,size__4522__auto__,b__34780,s__34778__$2,temp__5720__auto__){
return (function fugue$midi_monitor$relatives_$_iter__34777_$_iter__34781(s__34782){
return (new cljs.core.LazySeq(null,((function (i__34779,den,c__4521__auto__,size__4522__auto__,b__34780,s__34778__$2,temp__5720__auto__){
return (function (){
var s__34782__$1 = s__34782;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34782__$1);
if(temp__5720__auto____$1){
var s__34782__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34782__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__34782__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__34784 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__34783 = (0);
while(true){
if((i__34783 < size__4522__auto____$1)){
var num = cljs.core._nth.call(null,c__4521__auto____$1,i__34783);
cljs.core.chunk_append.call(null,b__34784,((69) + ((12) * Math.log2(((num * fugue.midi.note__GT_hz.call(null,root)) / (den * (440)))))));

var G__34789 = (i__34783 + (1));
i__34783 = G__34789;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34784),fugue$midi_monitor$relatives_$_iter__34777_$_iter__34781.call(null,cljs.core.chunk_rest.call(null,s__34782__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34784),null);
}
} else {
var num = cljs.core.first.call(null,s__34782__$2);
return cljs.core.cons.call(null,((69) + ((12) * Math.log2(((num * fugue.midi.note__GT_hz.call(null,root)) / (den * (440)))))),fugue$midi_monitor$relatives_$_iter__34777_$_iter__34781.call(null,cljs.core.rest.call(null,s__34782__$2)));
}
} else {
return null;
}
break;
}
});})(i__34779,den,c__4521__auto__,size__4522__auto__,b__34780,s__34778__$2,temp__5720__auto__))
,null,null));
});})(i__34779,den,c__4521__auto__,size__4522__auto__,b__34780,s__34778__$2,temp__5720__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),limit));
})());

var G__34790 = (i__34779 + (1));
i__34779 = G__34790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34780),fugue$midi_monitor$relatives_$_iter__34777.call(null,cljs.core.chunk_rest.call(null,s__34778__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34780),null);
}
} else {
var den = cljs.core.first.call(null,s__34778__$2);
return cljs.core.cons.call(null,(function (){var iter__4523__auto__ = ((function (den,s__34778__$2,temp__5720__auto__){
return (function fugue$midi_monitor$relatives_$_iter__34777_$_iter__34785(s__34786){
return (new cljs.core.LazySeq(null,((function (den,s__34778__$2,temp__5720__auto__){
return (function (){
var s__34786__$1 = s__34786;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34786__$1);
if(temp__5720__auto____$1){
var s__34786__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34786__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34786__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34788 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34787 = (0);
while(true){
if((i__34787 < size__4522__auto__)){
var num = cljs.core._nth.call(null,c__4521__auto__,i__34787);
cljs.core.chunk_append.call(null,b__34788,((69) + ((12) * Math.log2(((num * fugue.midi.note__GT_hz.call(null,root)) / (den * (440)))))));

var G__34791 = (i__34787 + (1));
i__34787 = G__34791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34788),fugue$midi_monitor$relatives_$_iter__34777_$_iter__34785.call(null,cljs.core.chunk_rest.call(null,s__34786__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34788),null);
}
} else {
var num = cljs.core.first.call(null,s__34786__$2);
return cljs.core.cons.call(null,((69) + ((12) * Math.log2(((num * fugue.midi.note__GT_hz.call(null,root)) / (den * (440)))))),fugue$midi_monitor$relatives_$_iter__34777_$_iter__34785.call(null,cljs.core.rest.call(null,s__34786__$2)));
}
} else {
return null;
}
break;
}
});})(den,s__34778__$2,temp__5720__auto__))
,null,null));
});})(den,s__34778__$2,temp__5720__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),limit));
})(),fugue$midi_monitor$relatives_$_iter__34777.call(null,cljs.core.rest.call(null,s__34778__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),limit));
});
fugue.midi_monitor.relative_table = (function fugue$midi_monitor$relative_table(root){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$relative_table_$_iter__34792(s__34793){
return (new cljs.core.LazySeq(null,(function (){
var s__34793__$1 = s__34793;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34793__$1);
if(temp__5720__auto__){
var s__34793__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34793__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34793__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34795 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34794 = (0);
while(true){
if((i__34794 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__34794);
cljs.core.chunk_append.call(null,b__34795,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),i], null));

var G__34814 = (i__34794 + (1));
i__34794 = G__34814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34795),fugue$midi_monitor$relative_table_$_iter__34792.call(null,cljs.core.chunk_rest.call(null,s__34793__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34795),null);
}
} else {
var i = cljs.core.first.call(null,s__34793__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),i], null),fugue$midi_monitor$relative_table_$_iter__34792.call(null,cljs.core.rest.call(null,s__34793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(12)));
})(),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$relative_table_$_iter__34796(s__34797){
return (new cljs.core.LazySeq(null,(function (){
var s__34797__$1 = s__34797;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34797__$1);
if(temp__5720__auto__){
var s__34797__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34797__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34797__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34799 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34798 = (0);
while(true){
if((i__34798 < size__4522__auto__)){
var vec__34800 = cljs.core._nth.call(null,c__4521__auto__,i__34798);
var i = cljs.core.nth.call(null,vec__34800,(0),null);
var row = cljs.core.nth.call(null,vec__34800,(1),null);
cljs.core.chunk_append.call(null,b__34799,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),i], null),(function (){var iter__4523__auto__ = ((function (i__34798,vec__34800,i,row,c__4521__auto__,size__4522__auto__,b__34799,s__34797__$2,temp__5720__auto__){
return (function fugue$midi_monitor$relative_table_$_iter__34796_$_iter__34803(s__34804){
return (new cljs.core.LazySeq(null,((function (i__34798,vec__34800,i,row,c__4521__auto__,size__4522__auto__,b__34799,s__34797__$2,temp__5720__auto__){
return (function (){
var s__34804__$1 = s__34804;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34804__$1);
if(temp__5720__auto____$1){
var s__34804__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34804__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__34804__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__34806 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__34805 = (0);
while(true){
if((i__34805 < size__4522__auto____$1)){
var col = cljs.core._nth.call(null,c__4521__auto____$1,i__34805);
cljs.core.chunk_append.call(null,b__34806,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((col - root) | (0))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%.2f",col))].join('')], null));

var G__34815 = (i__34805 + (1));
i__34805 = G__34815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34806),fugue$midi_monitor$relative_table_$_iter__34796_$_iter__34803.call(null,cljs.core.chunk_rest.call(null,s__34804__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34806),null);
}
} else {
var col = cljs.core.first.call(null,s__34804__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((col - root) | (0))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%.2f",col))].join('')], null),fugue$midi_monitor$relative_table_$_iter__34796_$_iter__34803.call(null,cljs.core.rest.call(null,s__34804__$2)));
}
} else {
return null;
}
break;
}
});})(i__34798,vec__34800,i,row,c__4521__auto__,size__4522__auto__,b__34799,s__34797__$2,temp__5720__auto__))
,null,null));
});})(i__34798,vec__34800,i,row,c__4521__auto__,size__4522__auto__,b__34799,s__34797__$2,temp__5720__auto__))
;
return iter__4523__auto__.call(null,row);
})()], null));

var G__34816 = (i__34798 + (1));
i__34798 = G__34816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34799),fugue$midi_monitor$relative_table_$_iter__34796.call(null,cljs.core.chunk_rest.call(null,s__34797__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34799),null);
}
} else {
var vec__34807 = cljs.core.first.call(null,s__34797__$2);
var i = cljs.core.nth.call(null,vec__34807,(0),null);
var row = cljs.core.nth.call(null,vec__34807,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),i], null),(function (){var iter__4523__auto__ = ((function (vec__34807,i,row,s__34797__$2,temp__5720__auto__){
return (function fugue$midi_monitor$relative_table_$_iter__34796_$_iter__34810(s__34811){
return (new cljs.core.LazySeq(null,((function (vec__34807,i,row,s__34797__$2,temp__5720__auto__){
return (function (){
var s__34811__$1 = s__34811;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34811__$1);
if(temp__5720__auto____$1){
var s__34811__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34811__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34811__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34813 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34812 = (0);
while(true){
if((i__34812 < size__4522__auto__)){
var col = cljs.core._nth.call(null,c__4521__auto__,i__34812);
cljs.core.chunk_append.call(null,b__34813,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((col - root) | (0))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%.2f",col))].join('')], null));

var G__34817 = (i__34812 + (1));
i__34812 = G__34817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34813),fugue$midi_monitor$relative_table_$_iter__34796_$_iter__34810.call(null,cljs.core.chunk_rest.call(null,s__34811__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34813),null);
}
} else {
var col = cljs.core.first.call(null,s__34811__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((col - root) | (0))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.format("%.2f",col))].join('')], null),fugue$midi_monitor$relative_table_$_iter__34796_$_iter__34810.call(null,cljs.core.rest.call(null,s__34811__$2)));
}
} else {
return null;
}
break;
}
});})(vec__34807,i,row,s__34797__$2,temp__5720__auto__))
,null,null));
});})(vec__34807,i,row,s__34797__$2,temp__5720__auto__))
;
return iter__4523__auto__.call(null,row);
})()], null),fugue$midi_monitor$relative_table_$_iter__34796.call(null,cljs.core.rest.call(null,s__34797__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,fugue.midi_monitor.relatives.call(null,root,(12))));
})()], null)], null);
});
fugue.midi_monitor.note_monitor_view = (function fugue$midi_monitor$note_monitor_view(notes){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.cof.cof,notes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.midi_monitor.relative_table,(function (){var or__4131__auto__ = cljs.core.first.call(null,notes);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (69);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sort.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,notes)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sort.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__34818_SHARP_){
return cljs.core.mod.call(null,p1__34818_SHARP_,(12));
}),notes))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.sort.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.int$,fugue.midi.note__GT_hz),notes)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$note_monitor_view_$_iter__34819(s__34820){
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
var ratio = cljs.core._nth.call(null,c__4521__auto__,i__34821);
cljs.core.chunk_append.call(null,b__34822,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),goog.string.format("%.2f",ratio)], null));

var G__34835 = (i__34821 + (1));
i__34821 = G__34835;
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
var ratio = cljs.core.first.call(null,s__34820__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),goog.string.format("%.2f",ratio)], null),fugue$midi_monitor$note_monitor_view_$_iter__34819.call(null,cljs.core.rest.call(null,s__34820__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,fugue.midi_monitor.ratios.call(null,notes)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$note_monitor_view_$_iter__34823(s__34824){
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
var ratio = cljs.core._nth.call(null,c__4521__auto__,i__34825);
cljs.core.chunk_append.call(null,b__34826,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),goog.string.format("%.2f",ratio)], null));

var G__34836 = (i__34825 + (1));
i__34825 = G__34836;
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
var ratio = cljs.core.first.call(null,s__34824__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),goog.string.format("%.2f",ratio)], null),fugue$midi_monitor$note_monitor_view_$_iter__34823.call(null,cljs.core.rest.call(null,s__34824__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,fugue.midi_monitor.other_thing.call(null,notes)));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$note_monitor_view_$_iter__34827(s__34828){
return (new cljs.core.LazySeq(null,(function (){
var s__34828__$1 = s__34828;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34828__$1);
if(temp__5720__auto__){
var s__34828__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34828__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34828__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34830 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34829 = (0);
while(true){
if((i__34829 < size__4522__auto__)){
var chord = cljs.core._nth.call(null,c__4521__auto__,i__34829);
cljs.core.chunk_append.call(null,b__34830,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null));

var G__34837 = (i__34829 + (1));
i__34829 = G__34837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34830),fugue$midi_monitor$note_monitor_view_$_iter__34827.call(null,cljs.core.chunk_rest.call(null,s__34828__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34830),null);
}
} else {
var chord = cljs.core.first.call(null,s__34828__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null),fugue$midi_monitor$note_monitor_view_$_iter__34827.call(null,cljs.core.rest.call(null,s__34828__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,fugue.chords.possible_chords.call(null,notes));
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function fugue$midi_monitor$note_monitor_view_$_iter__34831(s__34832){
return (new cljs.core.LazySeq(null,(function (){
var s__34832__$1 = s__34832;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34832__$1);
if(temp__5720__auto__){
var s__34832__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34832__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34832__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34834 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34833 = (0);
while(true){
if((i__34833 < size__4522__auto__)){
var chord = cljs.core._nth.call(null,c__4521__auto__,i__34833);
cljs.core.chunk_append.call(null,b__34834,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null));

var G__34838 = (i__34833 + (1));
i__34833 = G__34838;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34834),fugue$midi_monitor$note_monitor_view_$_iter__34831.call(null,cljs.core.chunk_rest.call(null,s__34832__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34834),null);
}
} else {
var chord = cljs.core.first.call(null,s__34832__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null),fugue$midi_monitor$note_monitor_view_$_iter__34831.call(null,cljs.core.rest.call(null,s__34832__$2)));
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
var c__32685__auto___34879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___34879,msgs,in_mult,in_chan){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___34879,msgs,in_mult,in_chan){
return (function (state_34861){
var state_val_34862 = (state_34861[(1)]);
if((state_val_34862 === (7))){
var inst_34856 = (state_34861[(2)]);
var state_34861__$1 = (function (){var statearr_34863 = state_34861;
(statearr_34863[(7)] = inst_34856);

return statearr_34863;
})();
var statearr_34864_34880 = state_34861__$1;
(statearr_34864_34880[(2)] = null);

(statearr_34864_34880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34862 === (1))){
var state_34861__$1 = state_34861;
var statearr_34865_34881 = state_34861__$1;
(statearr_34865_34881[(2)] = null);

(statearr_34865_34881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34862 === (4))){
var inst_34841 = (state_34861[(8)]);
var inst_34841__$1 = (state_34861[(2)]);
var inst_34842 = cljs.core.print.call(null,inst_34841__$1);
var inst_34843 = fugue.midi_monitor.note_on_QMARK_.call(null,inst_34841__$1);
var state_34861__$1 = (function (){var statearr_34866 = state_34861;
(statearr_34866[(8)] = inst_34841__$1);

(statearr_34866[(9)] = inst_34842);

return statearr_34866;
})();
if(inst_34843){
var statearr_34867_34882 = state_34861__$1;
(statearr_34867_34882[(1)] = (5));

} else {
var statearr_34868_34883 = state_34861__$1;
(statearr_34868_34883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34862 === (6))){
var inst_34841 = (state_34861[(8)]);
var inst_34848 = fugue.midi_monitor.note_off_QMARK_.call(null,inst_34841);
var state_34861__$1 = state_34861;
if(cljs.core.truth_(inst_34848)){
var statearr_34869_34884 = state_34861__$1;
(statearr_34869_34884[(1)] = (8));

} else {
var statearr_34870_34885 = state_34861__$1;
(statearr_34870_34885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34862 === (3))){
var inst_34859 = (state_34861[(2)]);
var state_34861__$1 = state_34861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34861__$1,inst_34859);
} else {
if((state_val_34862 === (2))){
var state_34861__$1 = state_34861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34861__$1,(4),in_chan);
} else {
if((state_val_34862 === (9))){
var state_34861__$1 = state_34861;
var statearr_34871_34886 = state_34861__$1;
(statearr_34871_34886[(2)] = null);

(statearr_34871_34886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34862 === (5))){
var inst_34841 = (state_34861[(8)]);
var inst_34845 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34841);
var inst_34846 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.assoc,inst_34845,inst_34841);
var state_34861__$1 = state_34861;
var statearr_34872_34887 = state_34861__$1;
(statearr_34872_34887[(2)] = inst_34846);

(statearr_34872_34887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34862 === (10))){
var inst_34854 = (state_34861[(2)]);
var state_34861__$1 = state_34861;
var statearr_34873_34888 = state_34861__$1;
(statearr_34873_34888[(2)] = inst_34854);

(statearr_34873_34888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34862 === (8))){
var inst_34841 = (state_34861[(8)]);
var inst_34850 = new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(inst_34841);
var inst_34851 = cljs.core.swap_BANG_.call(null,msgs,cljs.core.dissoc,inst_34850);
var state_34861__$1 = state_34861;
var statearr_34874_34889 = state_34861__$1;
(statearr_34874_34889[(2)] = inst_34851);

(statearr_34874_34889[(1)] = (10));


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
});})(c__32685__auto___34879,msgs,in_mult,in_chan))
;
return ((function (switch__32590__auto__,c__32685__auto___34879,msgs,in_mult,in_chan){
return (function() {
var fugue$midi_monitor$monitor_$_state_machine__32591__auto__ = null;
var fugue$midi_monitor$monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34875 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34875[(0)] = fugue$midi_monitor$monitor_$_state_machine__32591__auto__);

(statearr_34875[(1)] = (1));

return statearr_34875;
});
var fugue$midi_monitor$monitor_$_state_machine__32591__auto____1 = (function (state_34861){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34876){if((e34876 instanceof Object)){
var ex__32594__auto__ = e34876;
var statearr_34877_34890 = state_34861;
(statearr_34877_34890[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34891 = state_34861;
state_34861 = G__34891;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$midi_monitor$monitor_$_state_machine__32591__auto__ = function(state_34861){
switch(arguments.length){
case 0:
return fugue$midi_monitor$monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$midi_monitor$monitor_$_state_machine__32591__auto____1.call(this,state_34861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$midi_monitor$monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$midi_monitor$monitor_$_state_machine__32591__auto____0;
fugue$midi_monitor$monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$midi_monitor$monitor_$_state_machine__32591__auto____1;
return fugue$midi_monitor$monitor_$_state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___34879,msgs,in_mult,in_chan))
})();
var state__32687__auto__ = (function (){var statearr_34878 = f__32686__auto__.call(null);
(statearr_34878[(6)] = c__32685__auto___34879);

return statearr_34878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___34879,msgs,in_mult,in_chan))
);


return ((function (msgs,in_mult,in_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.midi_monitor.midi_selector,midi_ctx,((function (msgs,in_mult,in_chan){
return (function (in$){
var temp__5720__auto___34892 = cljs.core.deref.call(null,in_mult);
if(cljs.core.truth_(temp__5720__auto___34892)){
var old_mult_34893 = temp__5720__auto___34892;
cljs.core.async.untap.call(null,old_mult_34893,in_chan);
} else {
}

cljs.core.reset_BANG_.call(null,msgs,cljs.core.PersistentArrayMap.EMPTY);

var temp__5720__auto___34894 = in$;
if(cljs.core.truth_(temp__5720__auto___34894)){
var new_mult_34895 = temp__5720__auto___34894;
cljs.core.async.tap.call(null,new_mult_34895,in_chan);
} else {
}

return cljs.core.reset_BANG_.call(null,in_mult,in$);
});})(msgs,in_mult,in_chan))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.midi_monitor.note_monitor_view,cljs.core.keys.call(null,cljs.core.deref.call(null,msgs))], null)], null);
});
;})(msgs,in_mult,in_chan))
});

//# sourceMappingURL=midi_monitor.js.map?rel=1610304476718
