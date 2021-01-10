// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.cantor');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('fugue.midi');
fugue.cantor.relatives = (function fugue$cantor$relatives(root,limit){
var iter__4523__auto__ = (function fugue$cantor$relatives_$_iter__34720(s__34721){
return (new cljs.core.LazySeq(null,(function (){
var s__34721__$1 = s__34721;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34721__$1);
if(temp__5720__auto__){
var s__34721__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34721__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34721__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34723 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34722 = (0);
while(true){
if((i__34722 < size__4522__auto__)){
var den = cljs.core._nth.call(null,c__4521__auto__,i__34722);
cljs.core.chunk_append.call(null,b__34723,(function (){var iter__4523__auto__ = ((function (i__34722,den,c__4521__auto__,size__4522__auto__,b__34723,s__34721__$2,temp__5720__auto__){
return (function fugue$cantor$relatives_$_iter__34720_$_iter__34724(s__34725){
return (new cljs.core.LazySeq(null,((function (i__34722,den,c__4521__auto__,size__4522__auto__,b__34723,s__34721__$2,temp__5720__auto__){
return (function (){
var s__34725__$1 = s__34725;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34725__$1);
if(temp__5720__auto____$1){
var s__34725__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34725__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__34725__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__34727 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__34726 = (0);
while(true){
if((i__34726 < size__4522__auto____$1)){
var num = cljs.core._nth.call(null,c__4521__auto____$1,i__34726);
cljs.core.chunk_append.call(null,b__34727,((69) + ((12) * Math.log2(((num * fugue.midi.note__GT_hz.call(null,root)) / (den * (440)))))));

var G__34732 = (i__34726 + (1));
i__34726 = G__34732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34727),fugue$cantor$relatives_$_iter__34720_$_iter__34724.call(null,cljs.core.chunk_rest.call(null,s__34725__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34727),null);
}
} else {
var num = cljs.core.first.call(null,s__34725__$2);
return cljs.core.cons.call(null,((69) + ((12) * Math.log2(((num * fugue.midi.note__GT_hz.call(null,root)) / (den * (440)))))),fugue$cantor$relatives_$_iter__34720_$_iter__34724.call(null,cljs.core.rest.call(null,s__34725__$2)));
}
} else {
return null;
}
break;
}
});})(i__34722,den,c__4521__auto__,size__4522__auto__,b__34723,s__34721__$2,temp__5720__auto__))
,null,null));
});})(i__34722,den,c__4521__auto__,size__4522__auto__,b__34723,s__34721__$2,temp__5720__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),limit));
})());

var G__34733 = (i__34722 + (1));
i__34722 = G__34733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34723),fugue$cantor$relatives_$_iter__34720.call(null,cljs.core.chunk_rest.call(null,s__34721__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34723),null);
}
} else {
var den = cljs.core.first.call(null,s__34721__$2);
return cljs.core.cons.call(null,(function (){var iter__4523__auto__ = ((function (den,s__34721__$2,temp__5720__auto__){
return (function fugue$cantor$relatives_$_iter__34720_$_iter__34728(s__34729){
return (new cljs.core.LazySeq(null,((function (den,s__34721__$2,temp__5720__auto__){
return (function (){
var s__34729__$1 = s__34729;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34729__$1);
if(temp__5720__auto____$1){
var s__34729__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34729__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34729__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34731 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34730 = (0);
while(true){
if((i__34730 < size__4522__auto__)){
var num = cljs.core._nth.call(null,c__4521__auto__,i__34730);
cljs.core.chunk_append.call(null,b__34731,((69) + ((12) * Math.log2(((num * fugue.midi.note__GT_hz.call(null,root)) / (den * (440)))))));

var G__34734 = (i__34730 + (1));
i__34730 = G__34734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34731),fugue$cantor$relatives_$_iter__34720_$_iter__34728.call(null,cljs.core.chunk_rest.call(null,s__34729__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34731),null);
}
} else {
var num = cljs.core.first.call(null,s__34729__$2);
return cljs.core.cons.call(null,((69) + ((12) * Math.log2(((num * fugue.midi.note__GT_hz.call(null,root)) / (den * (440)))))),fugue$cantor$relatives_$_iter__34720_$_iter__34728.call(null,cljs.core.rest.call(null,s__34729__$2)));
}
} else {
return null;
}
break;
}
});})(den,s__34721__$2,temp__5720__auto__))
,null,null));
});})(den,s__34721__$2,temp__5720__auto__))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),limit));
})(),fugue$cantor$relatives_$_iter__34720.call(null,cljs.core.rest.call(null,s__34721__$2)));
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
fugue.cantor.color = (function fugue$cantor$color(value){
var diff = (value - Math.round(value));
var abs = ((255) - (((255) * (4)) * Math.abs(diff)));
var vec__34735 = ((cljs.core.not_EQ_.call(null,diff,(0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abs,(255),(255)], null):((cljs.core._EQ_.call(null,(0),diff))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null):(((diff > (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),abs], null):null)));
var r = cljs.core.nth.call(null,vec__34735,(0),null);
var g = cljs.core.nth.call(null,vec__34735,(1),null);
var b = cljs.core.nth.call(null,vec__34735,(2),null);
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),")"].join('');
});
fugue.cantor.note_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","Db","D","Eb","E","F","F#","G","Ab","A","Bb","B"], null);
fugue.cantor.cantor_table = (function fugue$cantor$cantor_table(root){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table:cantor","table:cantor",-1095612506),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),(function (){var iter__4523__auto__ = (function fugue$cantor$cantor_table_$_iter__34738(s__34739){
return (new cljs.core.LazySeq(null,(function (){
var s__34739__$1 = s__34739;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34739__$1);
if(temp__5720__auto__){
var s__34739__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34739__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34739__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34741 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34740 = (0);
while(true){
if((i__34740 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__34740);
cljs.core.chunk_append.call(null,b__34741,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),i], null));

var G__34760 = (i__34740 + (1));
i__34740 = G__34760;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34741),fugue$cantor$cantor_table_$_iter__34738.call(null,cljs.core.chunk_rest.call(null,s__34739__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34741),null);
}
} else {
var i = cljs.core.first.call(null,s__34739__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),i], null),fugue$cantor$cantor_table_$_iter__34738.call(null,cljs.core.rest.call(null,s__34739__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,(12)));
})(),(function (){var iter__4523__auto__ = (function fugue$cantor$cantor_table_$_iter__34742(s__34743){
return (new cljs.core.LazySeq(null,(function (){
var s__34743__$1 = s__34743;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34743__$1);
if(temp__5720__auto__){
var s__34743__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34743__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34743__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34745 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34744 = (0);
while(true){
if((i__34744 < size__4522__auto__)){
var vec__34746 = cljs.core._nth.call(null,c__4521__auto__,i__34744);
var i = cljs.core.nth.call(null,vec__34746,(0),null);
var row = cljs.core.nth.call(null,vec__34746,(1),null);
cljs.core.chunk_append.call(null,b__34745,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),i], null),(function (){var iter__4523__auto__ = ((function (i__34744,vec__34746,i,row,c__4521__auto__,size__4522__auto__,b__34745,s__34743__$2,temp__5720__auto__){
return (function fugue$cantor$cantor_table_$_iter__34742_$_iter__34749(s__34750){
return (new cljs.core.LazySeq(null,((function (i__34744,vec__34746,i,row,c__4521__auto__,size__4522__auto__,b__34745,s__34743__$2,temp__5720__auto__){
return (function (){
var s__34750__$1 = s__34750;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34750__$1);
if(temp__5720__auto____$1){
var s__34750__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34750__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first.call(null,s__34750__$2);
var size__4522__auto____$1 = cljs.core.count.call(null,c__4521__auto____$1);
var b__34752 = cljs.core.chunk_buffer.call(null,size__4522__auto____$1);
if((function (){var i__34751 = (0);
while(true){
if((i__34751 < size__4522__auto____$1)){
var col = cljs.core._nth.call(null,c__4521__auto____$1,i__34751);
cljs.core.chunk_append.call(null,b__34752,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cantor","td.cantor",1134354134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),fugue.cantor.color.call(null,col)], null)], null),(function (){var closest = Math.round(col);
var name = cljs.core.first.call(null,cljs.core.drop.call(null,cljs.core.mod.call(null,closest,(12)),fugue.cantor.note_names));
var octave = ((closest / (12)) | (0));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join('');
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",(col - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",col)], null));

var G__34761 = (i__34751 + (1));
i__34751 = G__34761;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34752),fugue$cantor$cantor_table_$_iter__34742_$_iter__34749.call(null,cljs.core.chunk_rest.call(null,s__34750__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34752),null);
}
} else {
var col = cljs.core.first.call(null,s__34750__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cantor","td.cantor",1134354134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),fugue.cantor.color.call(null,col)], null)], null),(function (){var closest = Math.round(col);
var name = cljs.core.first.call(null,cljs.core.drop.call(null,cljs.core.mod.call(null,closest,(12)),fugue.cantor.note_names));
var octave = ((closest / (12)) | (0));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join('');
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",(col - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",col)], null),fugue$cantor$cantor_table_$_iter__34742_$_iter__34749.call(null,cljs.core.rest.call(null,s__34750__$2)));
}
} else {
return null;
}
break;
}
});})(i__34744,vec__34746,i,row,c__4521__auto__,size__4522__auto__,b__34745,s__34743__$2,temp__5720__auto__))
,null,null));
});})(i__34744,vec__34746,i,row,c__4521__auto__,size__4522__auto__,b__34745,s__34743__$2,temp__5720__auto__))
;
return iter__4523__auto__.call(null,row);
})()], null));

var G__34762 = (i__34744 + (1));
i__34744 = G__34762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34745),fugue$cantor$cantor_table_$_iter__34742.call(null,cljs.core.chunk_rest.call(null,s__34743__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34745),null);
}
} else {
var vec__34753 = cljs.core.first.call(null,s__34743__$2);
var i = cljs.core.nth.call(null,vec__34753,(0),null);
var row = cljs.core.nth.call(null,vec__34753,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.cell","th.cell",-114284465),i], null),(function (){var iter__4523__auto__ = ((function (vec__34753,i,row,s__34743__$2,temp__5720__auto__){
return (function fugue$cantor$cantor_table_$_iter__34742_$_iter__34756(s__34757){
return (new cljs.core.LazySeq(null,((function (vec__34753,i,row,s__34743__$2,temp__5720__auto__){
return (function (){
var s__34757__$1 = s__34757;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34757__$1);
if(temp__5720__auto____$1){
var s__34757__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34757__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34757__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34759 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34758 = (0);
while(true){
if((i__34758 < size__4522__auto__)){
var col = cljs.core._nth.call(null,c__4521__auto__,i__34758);
cljs.core.chunk_append.call(null,b__34759,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cantor","td.cantor",1134354134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),fugue.cantor.color.call(null,col)], null)], null),(function (){var closest = Math.round(col);
var name = cljs.core.first.call(null,cljs.core.drop.call(null,cljs.core.mod.call(null,closest,(12)),fugue.cantor.note_names));
var octave = ((closest / (12)) | (0));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join('');
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",(col - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",col)], null));

var G__34763 = (i__34758 + (1));
i__34758 = G__34763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34759),fugue$cantor$cantor_table_$_iter__34742_$_iter__34756.call(null,cljs.core.chunk_rest.call(null,s__34757__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34759),null);
}
} else {
var col = cljs.core.first.call(null,s__34757__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cantor","td.cantor",1134354134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),fugue.cantor.color.call(null,col)], null)], null),(function (){var closest = Math.round(col);
var name = cljs.core.first.call(null,cljs.core.drop.call(null,cljs.core.mod.call(null,closest,(12)),fugue.cantor.note_names));
var octave = ((closest / (12)) | (0));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(octave)].join('');
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",(col - root)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),goog.string.format("%.2f",col)], null),fugue$cantor$cantor_table_$_iter__34742_$_iter__34756.call(null,cljs.core.rest.call(null,s__34757__$2)));
}
} else {
return null;
}
break;
}
});})(vec__34753,i,row,s__34743__$2,temp__5720__auto__))
,null,null));
});})(vec__34753,i,row,s__34743__$2,temp__5720__auto__))
;
return iter__4523__auto__.call(null,row);
})()], null),fugue$cantor$cantor_table_$_iter__34742.call(null,cljs.core.rest.call(null,s__34743__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,fugue.cantor.relatives.call(null,root,(12))));
})()], null)], null);
});

//# sourceMappingURL=cantor.js.map?rel=1610309312407
