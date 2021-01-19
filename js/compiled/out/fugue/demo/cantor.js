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
var vec__18554 = (((diff < (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),abs], null):((cljs.core._EQ_.call(null,(0),diff))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null):(((diff > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abs,(255),(0)], null):null)));
var r = cljs.core.nth.call(null,vec__18554,(0),null);
var g = cljs.core.nth.call(null,vec__18554,(1),null);
var b = cljs.core.nth.call(null,vec__18554,(2),null);
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
return (function fugue$demo$cantor$cantor_$_iter__18557(s__18558){
return (new cljs.core.LazySeq(null,((function (root_hz){
return (function (){
var s__18558__$1 = s__18558;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__18558__$1);
if(temp__5720__auto__){
var s__18558__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18558__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18558__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18560 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18559 = (0);
while(true){
if((i__18559 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__18559);
cljs.core.chunk_append.call(null,b__18560,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),((cljs.core.not_EQ_.call(null,(0),i))?i:null)], null));

var G__18573 = (i__18559 + (1));
i__18559 = G__18573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18560),fugue$demo$cantor$cantor_$_iter__18557.call(null,cljs.core.chunk_rest.call(null,s__18558__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18560),null);
}
} else {
var i = cljs.core.first.call(null,s__18558__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),((cljs.core.not_EQ_.call(null,(0),i))?i:null)], null),fugue$demo$cantor$cantor_$_iter__18557.call(null,cljs.core.rest.call(null,s__18558__$2)));
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
return (function fugue$demo$cantor$cantor_$_iter__18561(s__18562){
return (new cljs.core.LazySeq(null,((function (root_hz){
return (function (){
var s__18562__$1 = s__18562;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__18562__$1);
if(temp__5720__auto__){
var s__18562__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18562__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18562__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18564 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18563 = (0);
while(true){
if((i__18563 < size__4522__auto__)){
var denominator = cljs.core._nth.call(null,c__4521__auto__,i__18563);
cljs.core.chunk_append.call(null,b__18564,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),denominator], null),(function (){var iter__4523__auto__ = ((function (i__18563,denominator,c__4521__auto__,size__4522__auto__,b__18564,s__18562__$2,temp__5720__auto__,root_hz){
return (function fugue$demo$cantor$cantor_$_iter__18561_$_iter__18565(s__18566){
return (new cljs.core.LazySeq(null,((function (i__18563,denominator,c__4521__auto__,size__4522__auto__,b__18564,s__18562__$2,temp__5720__auto__,root_hz){
return (function (){
var s__18566__$1 = s__18566;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__18566__$1);
if(temp__5720__auto____$1){
var s__18566__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18566__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__18566__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__18568 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__18567 = (0);
while(true){
if((i__18567 < size__4522__auto____$1)){
var numerator = cljs.core._nth.call(null,c__4521__auto____$1,i__18567);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.demo.cantor.hz__GT_note.call(null,freq);
var closest = Math.round(note);
cljs.core.chunk_append.call(null,b__18568,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),color_fn.call(null,(note - root)),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,fugue.demo.cantor.note_names,cljs.core.mod.call(null,closest,(12)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((closest / (12)) | (0)))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),live.api.format.call(null,"%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),live.api.format.call(null,"%.2f",freq)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(numerator),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(denominator)].join('')], null)));

var G__18574 = (i__18567 + (1));
i__18567 = G__18574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18568),fugue$demo$cantor$cantor_$_iter__18561_$_iter__18565.call(null,cljs.core.chunk_rest.call(null,s__18566__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18568),null);
}
} else {
var numerator = cljs.core.first.call(null,s__18566__$2);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.demo.cantor.hz__GT_note.call(null,freq);
var closest = Math.round(note);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),color_fn.call(null,(note - root)),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,fugue.demo.cantor.note_names,cljs.core.mod.call(null,closest,(12)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((closest / (12)) | (0)))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),live.api.format.call(null,"%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),live.api.format.call(null,"%.2f",freq)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(numerator),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(denominator)].join('')], null)),fugue$demo$cantor$cantor_$_iter__18561_$_iter__18565.call(null,cljs.core.rest.call(null,s__18566__$2)));
}
} else {
return null;
}
break;
}
});})(i__18563,denominator,c__4521__auto__,size__4522__auto__,b__18564,s__18562__$2,temp__5720__auto__,root_hz))
,null,null));
});})(i__18563,denominator,c__4521__auto__,size__4522__auto__,b__18564,s__18562__$2,temp__5720__auto__,root_hz))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),harmonics));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),denominator], null)));

var G__18575 = (i__18563 + (1));
i__18563 = G__18575;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18564),fugue$demo$cantor$cantor_$_iter__18561.call(null,cljs.core.chunk_rest.call(null,s__18562__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18564),null);
}
} else {
var denominator = cljs.core.first.call(null,s__18562__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),denominator], null),(function (){var iter__4523__auto__ = ((function (denominator,s__18562__$2,temp__5720__auto__,root_hz){
return (function fugue$demo$cantor$cantor_$_iter__18561_$_iter__18569(s__18570){
return (new cljs.core.LazySeq(null,((function (denominator,s__18562__$2,temp__5720__auto__,root_hz){
return (function (){
var s__18570__$1 = s__18570;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__18570__$1);
if(temp__5720__auto____$1){
var s__18570__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18570__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18570__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18572 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18571 = (0);
while(true){
if((i__18571 < size__4522__auto__)){
var numerator = cljs.core._nth.call(null,c__4521__auto__,i__18571);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.demo.cantor.hz__GT_note.call(null,freq);
var closest = Math.round(note);
cljs.core.chunk_append.call(null,b__18572,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),color_fn.call(null,(note - root)),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,fugue.demo.cantor.note_names,cljs.core.mod.call(null,closest,(12)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((closest / (12)) | (0)))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),live.api.format.call(null,"%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),live.api.format.call(null,"%.2f",freq)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(numerator),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(denominator)].join('')], null)));

var G__18576 = (i__18571 + (1));
i__18571 = G__18576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18572),fugue$demo$cantor$cantor_$_iter__18561_$_iter__18569.call(null,cljs.core.chunk_rest.call(null,s__18570__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18572),null);
}
} else {
var numerator = cljs.core.first.call(null,s__18570__$2);
var freq = ((root_hz * numerator) / denominator);
var note = fugue.demo.cantor.hz__GT_note.call(null,freq);
var closest = Math.round(note);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),color_fn.call(null,(note - root)),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,fugue.demo.cantor.note_names,cljs.core.mod.call(null,closest,(12)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((closest / (12)) | (0)))].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),live.api.format.call(null,"%.2f",(note - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),live.api.format.call(null,"%.2f",freq)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(numerator),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(denominator)].join('')], null)),fugue$demo$cantor$cantor_$_iter__18561_$_iter__18569.call(null,cljs.core.rest.call(null,s__18570__$2)));
}
} else {
return null;
}
break;
}
});})(denominator,s__18562__$2,temp__5720__auto__,root_hz))
,null,null));
});})(denominator,s__18562__$2,temp__5720__auto__,root_hz))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),harmonics));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),denominator], null)),fugue$demo$cantor$cantor_$_iter__18561.call(null,cljs.core.rest.call(null,s__18562__$2)));
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

//# sourceMappingURL=cantor.js.map?rel=1611084583013
