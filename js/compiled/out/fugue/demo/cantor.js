// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.demo.cantor');
goog.require('cljs.core');
goog.require('live.api');
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
fugue.demo.cantor.rgb_string = (function fugue$demo$cantor$rgb_string(r,g,b){
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),")"].join('');
});
fugue.demo.cantor.range_to_rgb = (function fugue$demo$cantor$range_to_rgb(min,max,value){
var ratio = (((2) * (value - min)) / (max - min));
var b = (Math.max((0),((255) * ((1) - ratio))) | (0));
var r = (Math.max((0),((255) * (ratio - (1)))) | (0));
var g = (((255) - b) - r);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
});
fugue.demo.cantor.color_by_cents = (function fugue$demo$cantor$color_by_cents(value){
var diff = (value - Math.round(value));
var abs = (((255) * (5)) * Math.abs(diff));
var vec__18571 = (((diff < (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),abs], null):((cljs.core._EQ_.call(null,(0),diff))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(((diff > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abs,(255),(0)], null):null)));
var r = cljs.core.nth.call(null,vec__18571,(0),null);
var g = cljs.core.nth.call(null,vec__18571,(1),null);
var b = cljs.core.nth.call(null,vec__18571,(2),null);
return fugue.demo.cantor.rgb_string.call(null,r,g,b);
});
fugue.demo.cantor.note_colors = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2","#6a3d9a"], null);
fugue.demo.cantor.color_by_note = (function fugue$demo$cantor$color_by_note(value){
var tone = cljs.core.mod.call(null,Math.round(value),(12));
return cljs.core.first.call(null,cljs.core.drop.call(null,tone,fugue.demo.cantor.note_colors));
});
fugue.demo.cantor.color_fns = new cljs.core.PersistentArrayMap(null, 3, ["none",cljs.core.constantly.call(null,"#fff"),"cents",fugue.demo.cantor.color_by_cents,"note",fugue.demo.cantor.color_by_note], null);
fugue.demo.cantor.cantor = (function fugue$demo$cantor$cantor(root,harmonics,color_fn){
var root_hz = fugue.demo.cantor.note__GT_hz.call(null,root);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"collapse"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),(function (){var iter__4523__auto__ = ((function (root_hz){
return (function fugue$demo$cantor$cantor_$_iter__18574(s__18575){
return (new cljs.core.LazySeq(null,((function (root_hz){
return (function (){
var s__18575__$1 = s__18575;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__18575__$1);
if(temp__5720__auto__){
var s__18575__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18575__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18575__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18577 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18576 = (0);
while(true){
if((i__18576 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__18576);
cljs.core.chunk_append.call(null,b__18577,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),((cljs.core.not_EQ_.call(null,(0),i))?i:null)], null));

var G__18590 = (i__18576 + (1));
i__18576 = G__18590;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18577),fugue$demo$cantor$cantor_$_iter__18574.call(null,cljs.core.chunk_rest.call(null,s__18575__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18577),null);
}
} else {
var i = cljs.core.first.call(null,s__18575__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),((cljs.core.not_EQ_.call(null,(0),i))?i:null)], null),fugue$demo$cantor$cantor_$_iter__18574.call(null,cljs.core.rest.call(null,s__18575__$2)));
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
return (function fugue$demo$cantor$cantor_$_iter__18578(s__18579){
return (new cljs.core.LazySeq(null,((function (root_hz){
return (function (){
var s__18579__$1 = s__18579;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__18579__$1);
if(temp__5720__auto__){
var s__18579__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18579__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18579__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18581 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18580 = (0);
while(true){
if((i__18580 < size__4522__auto__)){
var denominator = cljs.core._nth.call(null,c__4521__auto__,i__18580);
cljs.core.chunk_append.call(null,b__18581,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),denominator], null),(function (){var iter__4523__auto__ = ((function (i__18580,denominator,c__4521__auto__,size__4522__auto__,b__18581,s__18579__$2,temp__5720__auto__,root_hz){
return (function fugue$demo$cantor$cantor_$_iter__18578_$_iter__18582(s__18583){
return (new cljs.core.LazySeq(null,((function (i__18580,denominator,c__4521__auto__,size__4522__auto__,b__18581,s__18579__$2,temp__5720__auto__,root_hz){
return (function (){
var s__18583__$1 = s__18583;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__18583__$1);
if(temp__5720__auto____$1){
var s__18583__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18583__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__18583__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__18585 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__18584 = (0);
while(true){
if((i__18584 < size__4522__auto____$1)){
var numerator = cljs.core._nth.call(null,c__4521__auto____$1,i__18584);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.demo.cantor.hz__GT_note.call(null,freq);
var closest = Math.round(note);
cljs.core.chunk_append.call(null,b__18585,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),color_fn.call(null,(note - root)),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,fugue.demo.cantor.note_names,cljs.core.mod.call(null,closest,(12)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((closest / (12)) | (0)))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),live.api.format.call(null,"%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),live.api.format.call(null,"%.2f",freq)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(numerator),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(denominator)].join('')], null)));

var G__18591 = (i__18584 + (1));
i__18584 = G__18591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18585),fugue$demo$cantor$cantor_$_iter__18578_$_iter__18582.call(null,cljs.core.chunk_rest.call(null,s__18583__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18585),null);
}
} else {
var numerator = cljs.core.first.call(null,s__18583__$2);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.demo.cantor.hz__GT_note.call(null,freq);
var closest = Math.round(note);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),color_fn.call(null,(note - root)),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,fugue.demo.cantor.note_names,cljs.core.mod.call(null,closest,(12)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((closest / (12)) | (0)))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),live.api.format.call(null,"%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),live.api.format.call(null,"%.2f",freq)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(numerator),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(denominator)].join('')], null)),fugue$demo$cantor$cantor_$_iter__18578_$_iter__18582.call(null,cljs.core.rest.call(null,s__18583__$2)));
}
} else {
return null;
}
break;
}
});})(i__18580,denominator,c__4521__auto__,size__4522__auto__,b__18581,s__18579__$2,temp__5720__auto__,root_hz))
,null,null));
});})(i__18580,denominator,c__4521__auto__,size__4522__auto__,b__18581,s__18579__$2,temp__5720__auto__,root_hz))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),harmonics));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),denominator], null)));

var G__18592 = (i__18580 + (1));
i__18580 = G__18592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18581),fugue$demo$cantor$cantor_$_iter__18578.call(null,cljs.core.chunk_rest.call(null,s__18579__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18581),null);
}
} else {
var denominator = cljs.core.first.call(null,s__18579__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),denominator], null),(function (){var iter__4523__auto__ = ((function (denominator,s__18579__$2,temp__5720__auto__,root_hz){
return (function fugue$demo$cantor$cantor_$_iter__18578_$_iter__18586(s__18587){
return (new cljs.core.LazySeq(null,((function (denominator,s__18579__$2,temp__5720__auto__,root_hz){
return (function (){
var s__18587__$1 = s__18587;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__18587__$1);
if(temp__5720__auto____$1){
var s__18587__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18587__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18587__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18589 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18588 = (0);
while(true){
if((i__18588 < size__4522__auto__)){
var numerator = cljs.core._nth.call(null,c__4521__auto__,i__18588);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.demo.cantor.hz__GT_note.call(null,freq);
var closest = Math.round(note);
cljs.core.chunk_append.call(null,b__18589,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),color_fn.call(null,(note - root)),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,fugue.demo.cantor.note_names,cljs.core.mod.call(null,closest,(12)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((closest / (12)) | (0)))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),live.api.format.call(null,"%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),live.api.format.call(null,"%.2f",freq)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(numerator),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(denominator)].join('')], null)));

var G__18593 = (i__18588 + (1));
i__18588 = G__18593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18589),fugue$demo$cantor$cantor_$_iter__18578_$_iter__18586.call(null,cljs.core.chunk_rest.call(null,s__18587__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18589),null);
}
} else {
var numerator = cljs.core.first.call(null,s__18587__$2);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.demo.cantor.hz__GT_note.call(null,freq);
var closest = Math.round(note);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),color_fn.call(null,(note - root)),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,fugue.demo.cantor.note_names,cljs.core.mod.call(null,closest,(12)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((closest / (12)) | (0)))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),live.api.format.call(null,"%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),live.api.format.call(null,"%.2f",freq)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(numerator),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(denominator)].join('')], null)),fugue$demo$cantor$cantor_$_iter__18578_$_iter__18586.call(null,cljs.core.rest.call(null,s__18587__$2)));
}
} else {
return null;
}
break;
}
});})(denominator,s__18579__$2,temp__5720__auto__,root_hz))
,null,null));
});})(denominator,s__18579__$2,temp__5720__auto__,root_hz))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),harmonics));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),denominator], null)),fugue$demo$cantor$cantor_$_iter__18578.call(null,cljs.core.rest.call(null,s__18579__$2)));
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
fugue.demo.cantor.component = (function fugue$demo$cantor$component(){
var root = live.api.ratom.call(null,(60));
var harmonics = live.api.ratom.call(null,(8));
var colors = live.api.ratom.call(null,"none");
return ((function (root,harmonics,colors){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Root",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [live.api.slider,root,(0),(120)], null),"Harmonics",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [live.api.slider,harmonics,(1),(30)], null),"Colors",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [live.api.picker,colors,cljs.core.keys.call(null,fugue.demo.cantor.color_fns)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.demo.cantor.cantor,cljs.core.deref.call(null,root),cljs.core.deref.call(null,harmonics),cljs.core.get.call(null,fugue.demo.cantor.color_fns,cljs.core.deref.call(null,colors))], null)], null);
});
;})(root,harmonics,colors))
});
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.demo.cantor.component], null);

//# sourceMappingURL=cantor.js.map?rel=1611088197065
