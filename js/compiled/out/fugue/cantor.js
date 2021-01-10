// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.cantor');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('fugue.colors');
fugue.cantor.midi__GT_hz = (function fugue$cantor$midi__GT_hz(note){
var v = note;
var v__$1 = (v - 69.0);
var v__$2 = (v__$1 / (12));
var v__$3 = Math.pow(2.0,v__$2);
return (v__$3 * 440.0);
});
fugue.cantor.hz__GT_midi = (function fugue$cantor$hz__GT_midi(freq){
var v = freq;
var v__$1 = (v / (440));
var v__$2 = Math.log2(v__$1);
var v__$3 = (v__$2 * (12));
return (v__$3 + (69));
});
fugue.cantor.note_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","Db","D","Eb","E","F","F#","G","Ab","A","Bb","B"], null);
fugue.cantor.cantor_table = (function fugue$cantor$cantor_table(root,harmonics){
var root_hz = fugue.cantor.midi__GT_hz.call(null,root);
cljs.core.print.call(null,root_hz);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table:cantor","table:cantor",-1095612506),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),(function (){var iter__4523__auto__ = ((function (root_hz){
return (function fugue$cantor$cantor_table_$_iter__34612(s__34613){
return (new cljs.core.LazySeq(null,((function (root_hz){
return (function (){
var s__34613__$1 = s__34613;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34613__$1);
if(temp__5720__auto__){
var s__34613__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34613__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34613__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34615 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34614 = (0);
while(true){
if((i__34614 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__34614);
cljs.core.chunk_append.call(null,b__34615,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),((cljs.core.not_EQ_.call(null,(0),i))?i:null)], null));

var G__34628 = (i__34614 + (1));
i__34614 = G__34628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34615),fugue$cantor$cantor_table_$_iter__34612.call(null,cljs.core.chunk_rest.call(null,s__34613__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34615),null);
}
} else {
var i = cljs.core.first.call(null,s__34613__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),((cljs.core.not_EQ_.call(null,(0),i))?i:null)], null),fugue$cantor$cantor_table_$_iter__34612.call(null,cljs.core.rest.call(null,s__34613__$2)));
}
} else {
return null;
}
break;
}
});})(root_hz))
,null,null));
});})(root_hz))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,harmonics));
})(),(function (){var iter__4523__auto__ = ((function (root_hz){
return (function fugue$cantor$cantor_table_$_iter__34616(s__34617){
return (new cljs.core.LazySeq(null,((function (root_hz){
return (function (){
var s__34617__$1 = s__34617;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34617__$1);
if(temp__5720__auto__){
var s__34617__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34617__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34617__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34619 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34618 = (0);
while(true){
if((i__34618 < size__4522__auto__)){
var denominator = cljs.core._nth.call(null,c__4521__auto__,i__34618);
cljs.core.chunk_append.call(null,b__34619,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),denominator], null),(function (){var iter__4523__auto__ = ((function (i__34618,denominator,c__4521__auto__,size__4522__auto__,b__34619,s__34617__$2,temp__5720__auto__,root_hz){
return (function fugue$cantor$cantor_table_$_iter__34616_$_iter__34620(s__34621){
return (new cljs.core.LazySeq(null,((function (i__34618,denominator,c__4521__auto__,size__4522__auto__,b__34619,s__34617__$2,temp__5720__auto__,root_hz){
return (function (){
var s__34621__$1 = s__34621;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34621__$1);
if(temp__5720__auto____$1){
var s__34621__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34621__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__34621__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__34623 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__34622 = (0);
while(true){
if((i__34622 < size__4522__auto____$1)){
var numerator = cljs.core._nth.call(null,c__4521__auto____$1,i__34622);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.cantor.hz__GT_midi.call(null,freq);
var closest = Math.round(note);
var name = cljs.core.nth.call(null,fugue.cantor.note_names,cljs.core.mod.call(null,closest,(12)));
var octave = ((closest / (12)) | (0));
cljs.core.chunk_append.call(null,b__34623,(function (){
cljs.core.print.call(null,closest);

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cantor","td.cantor",1134354134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),fugue.colors.color_by_note.call(null,note)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",freq)], null);
})()
);

var G__34629 = (i__34622 + (1));
i__34622 = G__34629;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34623),fugue$cantor$cantor_table_$_iter__34616_$_iter__34620.call(null,cljs.core.chunk_rest.call(null,s__34621__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34623),null);
}
} else {
var numerator = cljs.core.first.call(null,s__34621__$2);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.cantor.hz__GT_midi.call(null,freq);
var closest = Math.round(note);
var name = cljs.core.nth.call(null,fugue.cantor.note_names,cljs.core.mod.call(null,closest,(12)));
var octave = ((closest / (12)) | (0));
return cljs.core.cons.call(null,(function (){
cljs.core.print.call(null,closest);

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cantor","td.cantor",1134354134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),fugue.colors.color_by_note.call(null,note)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",freq)], null);
})()
,fugue$cantor$cantor_table_$_iter__34616_$_iter__34620.call(null,cljs.core.rest.call(null,s__34621__$2)));
}
} else {
return null;
}
break;
}
});})(i__34618,denominator,c__4521__auto__,size__4522__auto__,b__34619,s__34617__$2,temp__5720__auto__,root_hz))
,null,null));
});})(i__34618,denominator,c__4521__auto__,size__4522__auto__,b__34619,s__34617__$2,temp__5720__auto__,root_hz))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),harmonics));
})()], null));

var G__34630 = (i__34618 + (1));
i__34618 = G__34630;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34619),fugue$cantor$cantor_table_$_iter__34616.call(null,cljs.core.chunk_rest.call(null,s__34617__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34619),null);
}
} else {
var denominator = cljs.core.first.call(null,s__34617__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),denominator], null),(function (){var iter__4523__auto__ = ((function (denominator,s__34617__$2,temp__5720__auto__,root_hz){
return (function fugue$cantor$cantor_table_$_iter__34616_$_iter__34624(s__34625){
return (new cljs.core.LazySeq(null,((function (denominator,s__34617__$2,temp__5720__auto__,root_hz){
return (function (){
var s__34625__$1 = s__34625;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34625__$1);
if(temp__5720__auto____$1){
var s__34625__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34625__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34625__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34627 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34626 = (0);
while(true){
if((i__34626 < size__4522__auto__)){
var numerator = cljs.core._nth.call(null,c__4521__auto__,i__34626);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.cantor.hz__GT_midi.call(null,freq);
var closest = Math.round(note);
var name = cljs.core.nth.call(null,fugue.cantor.note_names,cljs.core.mod.call(null,closest,(12)));
var octave = ((closest / (12)) | (0));
cljs.core.chunk_append.call(null,b__34627,(function (){
cljs.core.print.call(null,closest);

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cantor","td.cantor",1134354134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),fugue.colors.color_by_note.call(null,note)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",freq)], null);
})()
);

var G__34631 = (i__34626 + (1));
i__34626 = G__34631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34627),fugue$cantor$cantor_table_$_iter__34616_$_iter__34624.call(null,cljs.core.chunk_rest.call(null,s__34625__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34627),null);
}
} else {
var numerator = cljs.core.first.call(null,s__34625__$2);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.cantor.hz__GT_midi.call(null,freq);
var closest = Math.round(note);
var name = cljs.core.nth.call(null,fugue.cantor.note_names,cljs.core.mod.call(null,closest,(12)));
var octave = ((closest / (12)) | (0));
return cljs.core.cons.call(null,(function (){
cljs.core.print.call(null,closest);

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cantor","td.cantor",1134354134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),fugue.colors.color_by_note.call(null,note)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",freq)], null);
})()
,fugue$cantor$cantor_table_$_iter__34616_$_iter__34624.call(null,cljs.core.rest.call(null,s__34625__$2)));
}
} else {
return null;
}
break;
}
});})(denominator,s__34617__$2,temp__5720__auto__,root_hz))
,null,null));
});})(denominator,s__34617__$2,temp__5720__auto__,root_hz))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),harmonics));
})()], null),fugue$cantor$cantor_table_$_iter__34616.call(null,cljs.core.rest.call(null,s__34617__$2)));
}
} else {
return null;
}
break;
}
});})(root_hz))
,null,null));
});})(root_hz))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),harmonics));
})()], null)], null);
});

//# sourceMappingURL=cantor.js.map?rel=1610319293711
