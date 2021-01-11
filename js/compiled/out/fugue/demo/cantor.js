// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.demo.cantor');
goog.require('cljs.core');
goog.require('fugue.colors');
fugue.demo.cantor.note__GT_hz = (function fugue$demo$cantor$note__GT_hz(note){
var v = note;
var v__$1 = (v - 69.0);
var v__$2 = (v__$1 / (12));
var v__$3 = Math.pow(2.0,v__$2);
return (v__$3 * 440.0);
});
fugue.demo.cantor.hz__GT_note = (function fugue$demo$cantor$hz__GT_note(freq){
var v = freq;
var v__$1 = (v / (440));
var v__$2 = Math.log2(v__$1);
var v__$3 = (v__$2 * (12));
return (v__$3 + (69));
});
fugue.demo.cantor.note_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","Db","D","Eb","E","F","F#","G","Ab","A","Bb","B"], null);
fugue.demo.cantor.cantor = (function fugue$demo$cantor$cantor(root,harmonics,color_fn){
var root_hz = fugue.demo.cantor.note__GT_hz.call(null,root);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),(function (){var iter__4523__auto__ = ((function (root_hz){
return (function fugue$demo$cantor$cantor_$_iter__38390(s__38391){
return (new cljs.core.LazySeq(null,((function (root_hz){
return (function (){
var s__38391__$1 = s__38391;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38391__$1);
if(temp__5720__auto__){
var s__38391__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38391__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__38391__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__38393 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__38392 = (0);
while(true){
if((i__38392 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__38392);
cljs.core.chunk_append.call(null,b__38393,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),((cljs.core.not_EQ_.call(null,(0),i))?i:null)], null));

var G__38406 = (i__38392 + (1));
i__38392 = G__38406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38393),fugue$demo$cantor$cantor_$_iter__38390.call(null,cljs.core.chunk_rest.call(null,s__38391__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38393),null);
}
} else {
var i = cljs.core.first.call(null,s__38391__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),((cljs.core.not_EQ_.call(null,(0),i))?i:null)], null),fugue$demo$cantor$cantor_$_iter__38390.call(null,cljs.core.rest.call(null,s__38391__$2)));
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
return (function fugue$demo$cantor$cantor_$_iter__38394(s__38395){
return (new cljs.core.LazySeq(null,((function (root_hz){
return (function (){
var s__38395__$1 = s__38395;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38395__$1);
if(temp__5720__auto__){
var s__38395__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38395__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__38395__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__38397 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__38396 = (0);
while(true){
if((i__38396 < size__4522__auto__)){
var denominator = cljs.core._nth.call(null,c__4521__auto__,i__38396);
cljs.core.chunk_append.call(null,b__38397,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),denominator], null),(function (){var iter__4523__auto__ = ((function (i__38396,denominator,c__4521__auto__,size__4522__auto__,b__38397,s__38395__$2,temp__5720__auto__,root_hz){
return (function fugue$demo$cantor$cantor_$_iter__38394_$_iter__38398(s__38399){
return (new cljs.core.LazySeq(null,((function (i__38396,denominator,c__4521__auto__,size__4522__auto__,b__38397,s__38395__$2,temp__5720__auto__,root_hz){
return (function (){
var s__38399__$1 = s__38399;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__38399__$1);
if(temp__5720__auto____$1){
var s__38399__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38399__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__38399__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__38401 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__38400 = (0);
while(true){
if((i__38400 < size__4522__auto____$1)){
var numerator = cljs.core._nth.call(null,c__4521__auto____$1,i__38400);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.demo.cantor.hz__GT_note.call(null,freq);
var closest = Math.round(note);
cljs.core.chunk_append.call(null,b__38401,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),color_fn.call(null,note),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,fugue.demo.cantor.note_names,cljs.core.mod.call(null,closest,(12)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((closest / (12)) | (0)))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),fugue.demo.cantor.format.call(null,"%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),fugue.demo.cantor.format.call(null,"%.2f",freq)], null));

var G__38407 = (i__38400 + (1));
i__38400 = G__38407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38401),fugue$demo$cantor$cantor_$_iter__38394_$_iter__38398.call(null,cljs.core.chunk_rest.call(null,s__38399__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38401),null);
}
} else {
var numerator = cljs.core.first.call(null,s__38399__$2);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.demo.cantor.hz__GT_note.call(null,freq);
var closest = Math.round(note);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),color_fn.call(null,note),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,fugue.demo.cantor.note_names,cljs.core.mod.call(null,closest,(12)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((closest / (12)) | (0)))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),fugue.demo.cantor.format.call(null,"%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),fugue.demo.cantor.format.call(null,"%.2f",freq)], null),fugue$demo$cantor$cantor_$_iter__38394_$_iter__38398.call(null,cljs.core.rest.call(null,s__38399__$2)));
}
} else {
return null;
}
break;
}
});})(i__38396,denominator,c__4521__auto__,size__4522__auto__,b__38397,s__38395__$2,temp__5720__auto__,root_hz))
,null,null));
});})(i__38396,denominator,c__4521__auto__,size__4522__auto__,b__38397,s__38395__$2,temp__5720__auto__,root_hz))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),harmonics));
})()], null));

var G__38408 = (i__38396 + (1));
i__38396 = G__38408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38397),fugue$demo$cantor$cantor_$_iter__38394.call(null,cljs.core.chunk_rest.call(null,s__38395__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38397),null);
}
} else {
var denominator = cljs.core.first.call(null,s__38395__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),denominator], null),(function (){var iter__4523__auto__ = ((function (denominator,s__38395__$2,temp__5720__auto__,root_hz){
return (function fugue$demo$cantor$cantor_$_iter__38394_$_iter__38402(s__38403){
return (new cljs.core.LazySeq(null,((function (denominator,s__38395__$2,temp__5720__auto__,root_hz){
return (function (){
var s__38403__$1 = s__38403;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__38403__$1);
if(temp__5720__auto____$1){
var s__38403__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38403__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__38403__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__38405 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__38404 = (0);
while(true){
if((i__38404 < size__4522__auto__)){
var numerator = cljs.core._nth.call(null,c__4521__auto__,i__38404);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.demo.cantor.hz__GT_note.call(null,freq);
var closest = Math.round(note);
cljs.core.chunk_append.call(null,b__38405,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),color_fn.call(null,note),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,fugue.demo.cantor.note_names,cljs.core.mod.call(null,closest,(12)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((closest / (12)) | (0)))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),fugue.demo.cantor.format.call(null,"%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),fugue.demo.cantor.format.call(null,"%.2f",freq)], null));

var G__38409 = (i__38404 + (1));
i__38404 = G__38409;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38405),fugue$demo$cantor$cantor_$_iter__38394_$_iter__38402.call(null,cljs.core.chunk_rest.call(null,s__38403__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38405),null);
}
} else {
var numerator = cljs.core.first.call(null,s__38403__$2);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.demo.cantor.hz__GT_note.call(null,freq);
var closest = Math.round(note);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),color_fn.call(null,note),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,fugue.demo.cantor.note_names,cljs.core.mod.call(null,closest,(12)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((closest / (12)) | (0)))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),fugue.demo.cantor.format.call(null,"%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),fugue.demo.cantor.format.call(null,"%.2f",freq)], null),fugue$demo$cantor$cantor_$_iter__38394_$_iter__38402.call(null,cljs.core.rest.call(null,s__38403__$2)));
}
} else {
return null;
}
break;
}
});})(denominator,s__38395__$2,temp__5720__auto__,root_hz))
,null,null));
});})(denominator,s__38395__$2,temp__5720__auto__,root_hz))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),harmonics));
})()], null),fugue$demo$cantor$cantor_$_iter__38394.call(null,cljs.core.rest.call(null,s__38395__$2)));
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
fugue.demo.cantor.color_fns = new cljs.core.PersistentArrayMap(null, 3, ["none",cljs.core.constantly.call(null,"#fff"),"cents",fugue.colors.color_by_cents,"note",fugue.colors.color_by_note], null);
fugue.demo.cantor.component = (function fugue$demo$cantor$component(){
var root = fugue.demo.cantor.ratom.call(null,(60));
var harmonics = fugue.demo.cantor.ratom.call(null,(8));
var colors = fugue.demo.cantor.ratom.call(null,"none");
return ((function (root,harmonics,colors){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Root",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.demo.cantor.slider,root,(0),(120)], null),"Harmonics",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.demo.cantor.slider,harmonics,(1),(30)], null),"Colors",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.demo.cantor.picker,colors,cljs.core.keys.call(null,fugue.demo.cantor.color_fns)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.demo.cantor.cantor,cljs.core.deref.call(null,root),cljs.core.deref.call(null,harmonics),cljs.core.get.call(null,fugue.demo.cantor.color_fns,cljs.core.deref.call(null,colors))], null)], null);
});
;})(root,harmonics,colors))
});
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.demo.cantor.component], null);

//# sourceMappingURL=cantor.js.map?rel=1610381659494
