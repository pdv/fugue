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
return (function fugue$cantor$cantor_table_$_iter__34733(s__34734){
return (new cljs.core.LazySeq(null,((function (root_hz){
return (function (){
var s__34734__$1 = s__34734;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34734__$1);
if(temp__5720__auto__){
var s__34734__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34734__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34734__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34736 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34735 = (0);
while(true){
if((i__34735 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__34735);
cljs.core.chunk_append.call(null,b__34736,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),((cljs.core.not_EQ_.call(null,(0),i))?i:null)], null));

var G__34749 = (i__34735 + (1));
i__34735 = G__34749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34736),fugue$cantor$cantor_table_$_iter__34733.call(null,cljs.core.chunk_rest.call(null,s__34734__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34736),null);
}
} else {
var i = cljs.core.first.call(null,s__34734__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),((cljs.core.not_EQ_.call(null,(0),i))?i:null)], null),fugue$cantor$cantor_table_$_iter__34733.call(null,cljs.core.rest.call(null,s__34734__$2)));
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
return (function fugue$cantor$cantor_table_$_iter__34737(s__34738){
return (new cljs.core.LazySeq(null,((function (root_hz){
return (function (){
var s__34738__$1 = s__34738;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34738__$1);
if(temp__5720__auto__){
var s__34738__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34738__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34738__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34740 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34739 = (0);
while(true){
if((i__34739 < size__4522__auto__)){
var denominator = cljs.core._nth.call(null,c__4521__auto__,i__34739);
cljs.core.chunk_append.call(null,b__34740,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),denominator], null),(function (){var iter__4523__auto__ = ((function (i__34739,denominator,c__4521__auto__,size__4522__auto__,b__34740,s__34738__$2,temp__5720__auto__,root_hz){
return (function fugue$cantor$cantor_table_$_iter__34737_$_iter__34741(s__34742){
return (new cljs.core.LazySeq(null,((function (i__34739,denominator,c__4521__auto__,size__4522__auto__,b__34740,s__34738__$2,temp__5720__auto__,root_hz){
return (function (){
var s__34742__$1 = s__34742;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34742__$1);
if(temp__5720__auto____$1){
var s__34742__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34742__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__34742__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__34744 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__34743 = (0);
while(true){
if((i__34743 < size__4522__auto____$1)){
var numerator = cljs.core._nth.call(null,c__4521__auto____$1,i__34743);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.midi.hz__GT_note.call(null,freq);
var closest = Math.round(note);
var name = cljs.core.nth.call(null,fugue.cantor.note_names,cljs.core.mod.call(null,closest,(12)));
var octave = ((closest / (12)) | (0));
cljs.core.chunk_append.call(null,b__34744,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cantor","td.cantor",1134354134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),fugue.colors.color_by_note.call(null,note)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",freq)], null));

var G__34750 = (i__34743 + (1));
i__34743 = G__34750;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34744),fugue$cantor$cantor_table_$_iter__34737_$_iter__34741.call(null,cljs.core.chunk_rest.call(null,s__34742__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34744),null);
}
} else {
var numerator = cljs.core.first.call(null,s__34742__$2);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.midi.hz__GT_note.call(null,freq);
var closest = Math.round(note);
var name = cljs.core.nth.call(null,fugue.cantor.note_names,cljs.core.mod.call(null,closest,(12)));
var octave = ((closest / (12)) | (0));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cantor","td.cantor",1134354134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),fugue.colors.color_by_note.call(null,note)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",freq)], null),fugue$cantor$cantor_table_$_iter__34737_$_iter__34741.call(null,cljs.core.rest.call(null,s__34742__$2)));
}
} else {
return null;
}
break;
}
});})(i__34739,denominator,c__4521__auto__,size__4522__auto__,b__34740,s__34738__$2,temp__5720__auto__,root_hz))
,null,null));
});})(i__34739,denominator,c__4521__auto__,size__4522__auto__,b__34740,s__34738__$2,temp__5720__auto__,root_hz))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),harmonics));
})()], null));

var G__34751 = (i__34739 + (1));
i__34739 = G__34751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34740),fugue$cantor$cantor_table_$_iter__34737.call(null,cljs.core.chunk_rest.call(null,s__34738__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34740),null);
}
} else {
var denominator = cljs.core.first.call(null,s__34738__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),denominator], null),(function (){var iter__4523__auto__ = ((function (denominator,s__34738__$2,temp__5720__auto__,root_hz){
return (function fugue$cantor$cantor_table_$_iter__34737_$_iter__34745(s__34746){
return (new cljs.core.LazySeq(null,((function (denominator,s__34738__$2,temp__5720__auto__,root_hz){
return (function (){
var s__34746__$1 = s__34746;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34746__$1);
if(temp__5720__auto____$1){
var s__34746__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34746__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34746__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34748 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34747 = (0);
while(true){
if((i__34747 < size__4522__auto__)){
var numerator = cljs.core._nth.call(null,c__4521__auto__,i__34747);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.midi.hz__GT_note.call(null,freq);
var closest = Math.round(note);
var name = cljs.core.nth.call(null,fugue.cantor.note_names,cljs.core.mod.call(null,closest,(12)));
var octave = ((closest / (12)) | (0));
cljs.core.chunk_append.call(null,b__34748,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cantor","td.cantor",1134354134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),fugue.colors.color_by_note.call(null,note)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",freq)], null));

var G__34752 = (i__34747 + (1));
i__34747 = G__34752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34748),fugue$cantor$cantor_table_$_iter__34737_$_iter__34745.call(null,cljs.core.chunk_rest.call(null,s__34746__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34748),null);
}
} else {
var numerator = cljs.core.first.call(null,s__34746__$2);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.midi.hz__GT_note.call(null,freq);
var closest = Math.round(note);
var name = cljs.core.nth.call(null,fugue.cantor.note_names,cljs.core.mod.call(null,closest,(12)));
var octave = ((closest / (12)) | (0));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cantor","td.cantor",1134354134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),fugue.colors.color_by_note.call(null,note)], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",freq)], null),fugue$cantor$cantor_table_$_iter__34737_$_iter__34745.call(null,cljs.core.rest.call(null,s__34746__$2)));
}
} else {
return null;
}
break;
}
});})(denominator,s__34738__$2,temp__5720__auto__,root_hz))
,null,null));
});})(denominator,s__34738__$2,temp__5720__auto__,root_hz))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),harmonics));
})()], null),fugue$cantor$cantor_table_$_iter__34737.call(null,cljs.core.rest.call(null,s__34738__$2)));
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

//# sourceMappingURL=cantor.js.map?rel=1610339734284
