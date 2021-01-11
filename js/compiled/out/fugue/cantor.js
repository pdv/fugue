// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.cantor');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('fugue.midi');
goog.require('fugue.colors');
fugue.cantor.note_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","Db","D","Eb","E","F","F#","G","Ab","A","Bb","B"], null);
fugue.cantor.cantor_table = (function fugue$cantor$cantor_table(root,harmonics){
var root_hz = fugue.midi.note__GT_hz.call(null,root);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table:cantor","table:cantor",-1095612506),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),(function (){var iter__4523__auto__ = ((function (root_hz){
return (function fugue$cantor$cantor_table_$_iter__34731(s__34732){
return (new cljs.core.LazySeq(null,((function (root_hz){
return (function (){
var s__34732__$1 = s__34732;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34732__$1);
if(temp__5720__auto__){
var s__34732__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34732__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34732__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34734 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34733 = (0);
while(true){
if((i__34733 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__34733);
cljs.core.chunk_append.call(null,b__34734,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),((cljs.core.not_EQ_.call(null,(0),i))?i:null)], null));

var G__34747 = (i__34733 + (1));
i__34733 = G__34747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34734),fugue$cantor$cantor_table_$_iter__34731.call(null,cljs.core.chunk_rest.call(null,s__34732__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34734),null);
}
} else {
var i = cljs.core.first.call(null,s__34732__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),((cljs.core.not_EQ_.call(null,(0),i))?i:null)], null),fugue$cantor$cantor_table_$_iter__34731.call(null,cljs.core.rest.call(null,s__34732__$2)));
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
return (function fugue$cantor$cantor_table_$_iter__34735(s__34736){
return (new cljs.core.LazySeq(null,((function (root_hz){
return (function (){
var s__34736__$1 = s__34736;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34736__$1);
if(temp__5720__auto__){
var s__34736__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34736__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34736__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34738 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34737 = (0);
while(true){
if((i__34737 < size__4522__auto__)){
var denominator = cljs.core._nth.call(null,c__4521__auto__,i__34737);
cljs.core.chunk_append.call(null,b__34738,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),denominator], null),(function (){var iter__4523__auto__ = ((function (i__34737,denominator,c__4521__auto__,size__4522__auto__,b__34738,s__34736__$2,temp__5720__auto__,root_hz){
return (function fugue$cantor$cantor_table_$_iter__34735_$_iter__34739(s__34740){
return (new cljs.core.LazySeq(null,((function (i__34737,denominator,c__4521__auto__,size__4522__auto__,b__34738,s__34736__$2,temp__5720__auto__,root_hz){
return (function (){
var s__34740__$1 = s__34740;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34740__$1);
if(temp__5720__auto____$1){
var s__34740__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34740__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__34740__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__34742 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__34741 = (0);
while(true){
if((i__34741 < size__4522__auto____$1)){
var numerator = cljs.core._nth.call(null,c__4521__auto____$1,i__34741);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.midi.hz__GT_note.call(null,freq);
var closest = Math.round(note);
var name = cljs.core.nth.call(null,fugue.cantor.note_names,cljs.core.mod.call(null,closest,(12)));
var octave = ((closest / (12)) | (0));
cljs.core.chunk_append.call(null,b__34742,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cantor","td.cantor",1134354134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),fugue.colors.color_by_note.call(null,note)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",freq)], null));

var G__34748 = (i__34741 + (1));
i__34741 = G__34748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34742),fugue$cantor$cantor_table_$_iter__34735_$_iter__34739.call(null,cljs.core.chunk_rest.call(null,s__34740__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34742),null);
}
} else {
var numerator = cljs.core.first.call(null,s__34740__$2);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.midi.hz__GT_note.call(null,freq);
var closest = Math.round(note);
var name = cljs.core.nth.call(null,fugue.cantor.note_names,cljs.core.mod.call(null,closest,(12)));
var octave = ((closest / (12)) | (0));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cantor","td.cantor",1134354134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),fugue.colors.color_by_note.call(null,note)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",freq)], null),fugue$cantor$cantor_table_$_iter__34735_$_iter__34739.call(null,cljs.core.rest.call(null,s__34740__$2)));
}
} else {
return null;
}
break;
}
});})(i__34737,denominator,c__4521__auto__,size__4522__auto__,b__34738,s__34736__$2,temp__5720__auto__,root_hz))
,null,null));
});})(i__34737,denominator,c__4521__auto__,size__4522__auto__,b__34738,s__34736__$2,temp__5720__auto__,root_hz))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),harmonics));
})()], null));

var G__34749 = (i__34737 + (1));
i__34737 = G__34749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34738),fugue$cantor$cantor_table_$_iter__34735.call(null,cljs.core.chunk_rest.call(null,s__34736__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34738),null);
}
} else {
var denominator = cljs.core.first.call(null,s__34736__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),denominator], null),(function (){var iter__4523__auto__ = ((function (denominator,s__34736__$2,temp__5720__auto__,root_hz){
return (function fugue$cantor$cantor_table_$_iter__34735_$_iter__34743(s__34744){
return (new cljs.core.LazySeq(null,((function (denominator,s__34736__$2,temp__5720__auto__,root_hz){
return (function (){
var s__34744__$1 = s__34744;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34744__$1);
if(temp__5720__auto____$1){
var s__34744__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34744__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34744__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34746 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34745 = (0);
while(true){
if((i__34745 < size__4522__auto__)){
var numerator = cljs.core._nth.call(null,c__4521__auto__,i__34745);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.midi.hz__GT_note.call(null,freq);
var closest = Math.round(note);
var name = cljs.core.nth.call(null,fugue.cantor.note_names,cljs.core.mod.call(null,closest,(12)));
var octave = ((closest / (12)) | (0));
cljs.core.chunk_append.call(null,b__34746,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cantor","td.cantor",1134354134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),fugue.colors.color_by_note.call(null,note)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",freq)], null));

var G__34750 = (i__34745 + (1));
i__34745 = G__34750;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34746),fugue$cantor$cantor_table_$_iter__34735_$_iter__34743.call(null,cljs.core.chunk_rest.call(null,s__34744__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34746),null);
}
} else {
var numerator = cljs.core.first.call(null,s__34744__$2);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.midi.hz__GT_note.call(null,freq);
var closest = Math.round(note);
var name = cljs.core.nth.call(null,fugue.cantor.note_names,cljs.core.mod.call(null,closest,(12)));
var octave = ((closest / (12)) | (0));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cantor","td.cantor",1134354134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),fugue.colors.color_by_note.call(null,note)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",freq)], null),fugue$cantor$cantor_table_$_iter__34735_$_iter__34743.call(null,cljs.core.rest.call(null,s__34744__$2)));
}
} else {
return null;
}
break;
}
});})(denominator,s__34736__$2,temp__5720__auto__,root_hz))
,null,null));
});})(denominator,s__34736__$2,temp__5720__auto__,root_hz))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),harmonics));
})()], null),fugue$cantor$cantor_table_$_iter__34735.call(null,cljs.core.rest.call(null,s__34736__$2)));
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

//# sourceMappingURL=cantor.js.map?rel=1610330675667
