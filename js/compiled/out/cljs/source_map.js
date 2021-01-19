// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__9117){
var vec__9118 = p__9117;
var i = cljs.core.nth.call(null,vec__9118,(0),null);
var v = cljs.core.nth.call(null,vec__9118,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__9121 = seg;
var gcol = cljs.core.nth.call(null,vec__9121,(0),null);
var source = cljs.core.nth.call(null,vec__9121,(1),null);
var line = cljs.core.nth.call(null,vec__9121,(2),null);
var col = cljs.core.nth.call(null,vec__9121,(3),null);
var name = cljs.core.nth.call(null,vec__9121,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5720__auto__)){
var name__$1 = temp__5720__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__9124 = seg;
var gcol = cljs.core.nth.call(null,vec__9124,(0),null);
var source = cljs.core.nth.call(null,vec__9124,(1),null);
var line = cljs.core.nth.call(null,vec__9124,(2),null);
var col = cljs.core.nth.call(null,vec__9124,(3),null);
var name = cljs.core.nth.call(null,vec__9124,(4),null);
var vec__9127 = relseg;
var rgcol = cljs.core.nth.call(null,vec__9127,(0),null);
var rsource = cljs.core.nth.call(null,vec__9127,(1),null);
var rline = cljs.core.nth.call(null,vec__9127,(2),null);
var rcol = cljs.core.nth.call(null,vec__9127,(3),null);
var rname = cljs.core.nth.call(null,vec__9127,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4131__auto__ = col;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__9130 = segmap;
var map__9130__$1 = (((((!((map__9130 == null))))?(((((map__9130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9130):map__9130);
var gcol = cljs.core.get.call(null,map__9130__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__9130__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__9130__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__9130__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__9130__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__9130,map__9130__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__9130,map__9130__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__9130,map__9130__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__9130,map__9130__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__9130,map__9130__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__9130,map__9130__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__9133 = arguments.length;
switch (G__9133) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__9137 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__9141 = cljs.core.next.call(null,segs__$1);
var G__9142 = nrelseg;
var G__9143 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__9141;
relseg__$1 = G__9142;
result__$1 = G__9143;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__9137,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__9137,(1),null);
var G__9144 = (gline + (1));
var G__9145 = cljs.core.next.call(null,lines__$1);
var G__9146 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__9147 = result__$1;
gline = G__9144;
lines__$1 = G__9145;
relseg = G__9146;
result = G__9147;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__9149 = segmap;
var map__9149__$1 = (((((!((map__9149 == null))))?(((((map__9149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9149):map__9149);
var gcol = cljs.core.get.call(null,map__9149__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__9149__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__9149__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__9149__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__9149__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__9149,map__9149__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__9149,map__9149__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__9148_SHARP_){
return cljs.core.conj.call(null,p1__9148_SHARP_,d__$1);
});})(map__9149,map__9149__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__9149,map__9149__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__9152 = arguments.length;
switch (G__9152) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__9156 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__9160 = cljs.core.next.call(null,segs__$1);
var G__9161 = nrelseg;
var G__9162 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__9160;
relseg__$1 = G__9161;
result__$1 = G__9162;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__9156,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__9156,(1),null);
var G__9163 = (gline + (1));
var G__9164 = cljs.core.next.call(null,lines__$1);
var G__9165 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__9166 = result__$1;
gline = G__9163;
lines__$1 = G__9164;
relseg = G__9165;
result = G__9166;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__9167){
var vec__9168 = p__9167;
var _ = cljs.core.nth.call(null,vec__9168,(0),null);
var source = cljs.core.nth.call(null,vec__9168,(1),null);
var line = cljs.core.nth.call(null,vec__9168,(2),null);
var col = cljs.core.nth.call(null,vec__9168,(3),null);
var name = cljs.core.nth.call(null,vec__9168,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__9171){
var vec__9172 = p__9171;
var gcol = cljs.core.nth.call(null,vec__9172,(0),null);
var sidx = cljs.core.nth.call(null,vec__9172,(1),null);
var line = cljs.core.nth.call(null,vec__9172,(2),null);
var col = cljs.core.nth.call(null,vec__9172,(3),null);
var name = cljs.core.nth.call(null,vec__9172,(4),null);
var seg = vec__9172;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__9172,gcol,sidx,line,col,name,seg,relseg){
return (function (p__9175){
var vec__9176 = p__9175;
var _ = cljs.core.nth.call(null,vec__9176,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__9176,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__9176,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__9176,(3),null);
var lname = cljs.core.nth.call(null,vec__9176,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__9172,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5718__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5718__auto__)){
var name = temp__5718__auto__;
var idx = (function (){var temp__5718__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5718__auto____$1)){
var idx = temp__5718__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__9182 = cljs.core.seq.call(null,infos);
var chunk__9183 = null;
var count__9184 = (0);
var i__9185 = (0);
while(true){
if((i__9185 < count__9184)){
var info = cljs.core._nth.call(null,chunk__9183,i__9185);
var segv_9536 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_9537 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_9538 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_9537 > (lc_9538 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__9182,chunk__9183,count__9184,i__9185,segv_9536,gline_9537,lc_9538,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_9537 - (lc_9538 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9536], null));
});})(seq__9182,chunk__9183,count__9184,i__9185,segv_9536,gline_9537,lc_9538,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__9182,chunk__9183,count__9184,i__9185,segv_9536,gline_9537,lc_9538,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9537], null),cljs.core.conj,segv_9536);
});})(seq__9182,chunk__9183,count__9184,i__9185,segv_9536,gline_9537,lc_9538,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__9539 = seq__9182;
var G__9540 = chunk__9183;
var G__9541 = count__9184;
var G__9542 = (i__9185 + (1));
seq__9182 = G__9539;
chunk__9183 = G__9540;
count__9184 = G__9541;
i__9185 = G__9542;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__9182);
if(temp__5720__auto__){
var seq__9182__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9182__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__9182__$1);
var G__9543 = cljs.core.chunk_rest.call(null,seq__9182__$1);
var G__9544 = c__4550__auto__;
var G__9545 = cljs.core.count.call(null,c__4550__auto__);
var G__9546 = (0);
seq__9182 = G__9543;
chunk__9183 = G__9544;
count__9184 = G__9545;
i__9185 = G__9546;
continue;
} else {
var info = cljs.core.first.call(null,seq__9182__$1);
var segv_9547 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_9548 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_9549 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_9548 > (lc_9549 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__9182,chunk__9183,count__9184,i__9185,segv_9547,gline_9548,lc_9549,info,seq__9182__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_9548 - (lc_9549 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9547], null));
});})(seq__9182,chunk__9183,count__9184,i__9185,segv_9547,gline_9548,lc_9549,info,seq__9182__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__9182,chunk__9183,count__9184,i__9185,segv_9547,gline_9548,lc_9549,info,seq__9182__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9548], null),cljs.core.conj,segv_9547);
});})(seq__9182,chunk__9183,count__9184,i__9185,segv_9547,gline_9548,lc_9549,info,seq__9182__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__9550 = cljs.core.next.call(null,seq__9182__$1);
var G__9551 = null;
var G__9552 = (0);
var G__9553 = (0);
seq__9182 = G__9550;
chunk__9183 = G__9551;
count__9184 = G__9552;
i__9185 = G__9553;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__9186_9554 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__9187_9555 = null;
var count__9188_9556 = (0);
var i__9189_9557 = (0);
while(true){
if((i__9189_9557 < count__9188_9556)){
var vec__9362_9558 = cljs.core._nth.call(null,chunk__9187_9555,i__9189_9557);
var source_idx_9559 = cljs.core.nth.call(null,vec__9362_9558,(0),null);
var vec__9365_9560 = cljs.core.nth.call(null,vec__9362_9558,(1),null);
var __9561 = cljs.core.nth.call(null,vec__9365_9560,(0),null);
var lines_9562__$1 = cljs.core.nth.call(null,vec__9365_9560,(1),null);
var seq__9368_9563 = cljs.core.seq.call(null,lines_9562__$1);
var chunk__9369_9564 = null;
var count__9370_9565 = (0);
var i__9371_9566 = (0);
while(true){
if((i__9371_9566 < count__9370_9565)){
var vec__9410_9567 = cljs.core._nth.call(null,chunk__9369_9564,i__9371_9566);
var line_9568 = cljs.core.nth.call(null,vec__9410_9567,(0),null);
var cols_9569 = cljs.core.nth.call(null,vec__9410_9567,(1),null);
var seq__9413_9570 = cljs.core.seq.call(null,cols_9569);
var chunk__9414_9571 = null;
var count__9415_9572 = (0);
var i__9416_9573 = (0);
while(true){
if((i__9416_9573 < count__9415_9572)){
var vec__9423_9574 = cljs.core._nth.call(null,chunk__9414_9571,i__9416_9573);
var col_9575 = cljs.core.nth.call(null,vec__9423_9574,(0),null);
var infos_9576 = cljs.core.nth.call(null,vec__9423_9574,(1),null);
encode_cols.call(null,infos_9576,source_idx_9559,line_9568,col_9575);


var G__9577 = seq__9413_9570;
var G__9578 = chunk__9414_9571;
var G__9579 = count__9415_9572;
var G__9580 = (i__9416_9573 + (1));
seq__9413_9570 = G__9577;
chunk__9414_9571 = G__9578;
count__9415_9572 = G__9579;
i__9416_9573 = G__9580;
continue;
} else {
var temp__5720__auto___9581 = cljs.core.seq.call(null,seq__9413_9570);
if(temp__5720__auto___9581){
var seq__9413_9582__$1 = temp__5720__auto___9581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9413_9582__$1)){
var c__4550__auto___9583 = cljs.core.chunk_first.call(null,seq__9413_9582__$1);
var G__9584 = cljs.core.chunk_rest.call(null,seq__9413_9582__$1);
var G__9585 = c__4550__auto___9583;
var G__9586 = cljs.core.count.call(null,c__4550__auto___9583);
var G__9587 = (0);
seq__9413_9570 = G__9584;
chunk__9414_9571 = G__9585;
count__9415_9572 = G__9586;
i__9416_9573 = G__9587;
continue;
} else {
var vec__9426_9588 = cljs.core.first.call(null,seq__9413_9582__$1);
var col_9589 = cljs.core.nth.call(null,vec__9426_9588,(0),null);
var infos_9590 = cljs.core.nth.call(null,vec__9426_9588,(1),null);
encode_cols.call(null,infos_9590,source_idx_9559,line_9568,col_9589);


var G__9591 = cljs.core.next.call(null,seq__9413_9582__$1);
var G__9592 = null;
var G__9593 = (0);
var G__9594 = (0);
seq__9413_9570 = G__9591;
chunk__9414_9571 = G__9592;
count__9415_9572 = G__9593;
i__9416_9573 = G__9594;
continue;
}
} else {
}
}
break;
}


var G__9595 = seq__9368_9563;
var G__9596 = chunk__9369_9564;
var G__9597 = count__9370_9565;
var G__9598 = (i__9371_9566 + (1));
seq__9368_9563 = G__9595;
chunk__9369_9564 = G__9596;
count__9370_9565 = G__9597;
i__9371_9566 = G__9598;
continue;
} else {
var temp__5720__auto___9599 = cljs.core.seq.call(null,seq__9368_9563);
if(temp__5720__auto___9599){
var seq__9368_9600__$1 = temp__5720__auto___9599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9368_9600__$1)){
var c__4550__auto___9601 = cljs.core.chunk_first.call(null,seq__9368_9600__$1);
var G__9602 = cljs.core.chunk_rest.call(null,seq__9368_9600__$1);
var G__9603 = c__4550__auto___9601;
var G__9604 = cljs.core.count.call(null,c__4550__auto___9601);
var G__9605 = (0);
seq__9368_9563 = G__9602;
chunk__9369_9564 = G__9603;
count__9370_9565 = G__9604;
i__9371_9566 = G__9605;
continue;
} else {
var vec__9429_9606 = cljs.core.first.call(null,seq__9368_9600__$1);
var line_9607 = cljs.core.nth.call(null,vec__9429_9606,(0),null);
var cols_9608 = cljs.core.nth.call(null,vec__9429_9606,(1),null);
var seq__9432_9609 = cljs.core.seq.call(null,cols_9608);
var chunk__9433_9610 = null;
var count__9434_9611 = (0);
var i__9435_9612 = (0);
while(true){
if((i__9435_9612 < count__9434_9611)){
var vec__9442_9613 = cljs.core._nth.call(null,chunk__9433_9610,i__9435_9612);
var col_9614 = cljs.core.nth.call(null,vec__9442_9613,(0),null);
var infos_9615 = cljs.core.nth.call(null,vec__9442_9613,(1),null);
encode_cols.call(null,infos_9615,source_idx_9559,line_9607,col_9614);


var G__9616 = seq__9432_9609;
var G__9617 = chunk__9433_9610;
var G__9618 = count__9434_9611;
var G__9619 = (i__9435_9612 + (1));
seq__9432_9609 = G__9616;
chunk__9433_9610 = G__9617;
count__9434_9611 = G__9618;
i__9435_9612 = G__9619;
continue;
} else {
var temp__5720__auto___9620__$1 = cljs.core.seq.call(null,seq__9432_9609);
if(temp__5720__auto___9620__$1){
var seq__9432_9621__$1 = temp__5720__auto___9620__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9432_9621__$1)){
var c__4550__auto___9622 = cljs.core.chunk_first.call(null,seq__9432_9621__$1);
var G__9623 = cljs.core.chunk_rest.call(null,seq__9432_9621__$1);
var G__9624 = c__4550__auto___9622;
var G__9625 = cljs.core.count.call(null,c__4550__auto___9622);
var G__9626 = (0);
seq__9432_9609 = G__9623;
chunk__9433_9610 = G__9624;
count__9434_9611 = G__9625;
i__9435_9612 = G__9626;
continue;
} else {
var vec__9445_9627 = cljs.core.first.call(null,seq__9432_9621__$1);
var col_9628 = cljs.core.nth.call(null,vec__9445_9627,(0),null);
var infos_9629 = cljs.core.nth.call(null,vec__9445_9627,(1),null);
encode_cols.call(null,infos_9629,source_idx_9559,line_9607,col_9628);


var G__9630 = cljs.core.next.call(null,seq__9432_9621__$1);
var G__9631 = null;
var G__9632 = (0);
var G__9633 = (0);
seq__9432_9609 = G__9630;
chunk__9433_9610 = G__9631;
count__9434_9611 = G__9632;
i__9435_9612 = G__9633;
continue;
}
} else {
}
}
break;
}


var G__9634 = cljs.core.next.call(null,seq__9368_9600__$1);
var G__9635 = null;
var G__9636 = (0);
var G__9637 = (0);
seq__9368_9563 = G__9634;
chunk__9369_9564 = G__9635;
count__9370_9565 = G__9636;
i__9371_9566 = G__9637;
continue;
}
} else {
}
}
break;
}


var G__9638 = seq__9186_9554;
var G__9639 = chunk__9187_9555;
var G__9640 = count__9188_9556;
var G__9641 = (i__9189_9557 + (1));
seq__9186_9554 = G__9638;
chunk__9187_9555 = G__9639;
count__9188_9556 = G__9640;
i__9189_9557 = G__9641;
continue;
} else {
var temp__5720__auto___9642 = cljs.core.seq.call(null,seq__9186_9554);
if(temp__5720__auto___9642){
var seq__9186_9643__$1 = temp__5720__auto___9642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9186_9643__$1)){
var c__4550__auto___9644 = cljs.core.chunk_first.call(null,seq__9186_9643__$1);
var G__9645 = cljs.core.chunk_rest.call(null,seq__9186_9643__$1);
var G__9646 = c__4550__auto___9644;
var G__9647 = cljs.core.count.call(null,c__4550__auto___9644);
var G__9648 = (0);
seq__9186_9554 = G__9645;
chunk__9187_9555 = G__9646;
count__9188_9556 = G__9647;
i__9189_9557 = G__9648;
continue;
} else {
var vec__9448_9649 = cljs.core.first.call(null,seq__9186_9643__$1);
var source_idx_9650 = cljs.core.nth.call(null,vec__9448_9649,(0),null);
var vec__9451_9651 = cljs.core.nth.call(null,vec__9448_9649,(1),null);
var __9652 = cljs.core.nth.call(null,vec__9451_9651,(0),null);
var lines_9653__$1 = cljs.core.nth.call(null,vec__9451_9651,(1),null);
var seq__9454_9654 = cljs.core.seq.call(null,lines_9653__$1);
var chunk__9455_9655 = null;
var count__9456_9656 = (0);
var i__9457_9657 = (0);
while(true){
if((i__9457_9657 < count__9456_9656)){
var vec__9496_9658 = cljs.core._nth.call(null,chunk__9455_9655,i__9457_9657);
var line_9659 = cljs.core.nth.call(null,vec__9496_9658,(0),null);
var cols_9660 = cljs.core.nth.call(null,vec__9496_9658,(1),null);
var seq__9499_9661 = cljs.core.seq.call(null,cols_9660);
var chunk__9500_9662 = null;
var count__9501_9663 = (0);
var i__9502_9664 = (0);
while(true){
if((i__9502_9664 < count__9501_9663)){
var vec__9509_9665 = cljs.core._nth.call(null,chunk__9500_9662,i__9502_9664);
var col_9666 = cljs.core.nth.call(null,vec__9509_9665,(0),null);
var infos_9667 = cljs.core.nth.call(null,vec__9509_9665,(1),null);
encode_cols.call(null,infos_9667,source_idx_9650,line_9659,col_9666);


var G__9668 = seq__9499_9661;
var G__9669 = chunk__9500_9662;
var G__9670 = count__9501_9663;
var G__9671 = (i__9502_9664 + (1));
seq__9499_9661 = G__9668;
chunk__9500_9662 = G__9669;
count__9501_9663 = G__9670;
i__9502_9664 = G__9671;
continue;
} else {
var temp__5720__auto___9672__$1 = cljs.core.seq.call(null,seq__9499_9661);
if(temp__5720__auto___9672__$1){
var seq__9499_9673__$1 = temp__5720__auto___9672__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9499_9673__$1)){
var c__4550__auto___9674 = cljs.core.chunk_first.call(null,seq__9499_9673__$1);
var G__9675 = cljs.core.chunk_rest.call(null,seq__9499_9673__$1);
var G__9676 = c__4550__auto___9674;
var G__9677 = cljs.core.count.call(null,c__4550__auto___9674);
var G__9678 = (0);
seq__9499_9661 = G__9675;
chunk__9500_9662 = G__9676;
count__9501_9663 = G__9677;
i__9502_9664 = G__9678;
continue;
} else {
var vec__9512_9679 = cljs.core.first.call(null,seq__9499_9673__$1);
var col_9680 = cljs.core.nth.call(null,vec__9512_9679,(0),null);
var infos_9681 = cljs.core.nth.call(null,vec__9512_9679,(1),null);
encode_cols.call(null,infos_9681,source_idx_9650,line_9659,col_9680);


var G__9682 = cljs.core.next.call(null,seq__9499_9673__$1);
var G__9683 = null;
var G__9684 = (0);
var G__9685 = (0);
seq__9499_9661 = G__9682;
chunk__9500_9662 = G__9683;
count__9501_9663 = G__9684;
i__9502_9664 = G__9685;
continue;
}
} else {
}
}
break;
}


var G__9686 = seq__9454_9654;
var G__9687 = chunk__9455_9655;
var G__9688 = count__9456_9656;
var G__9689 = (i__9457_9657 + (1));
seq__9454_9654 = G__9686;
chunk__9455_9655 = G__9687;
count__9456_9656 = G__9688;
i__9457_9657 = G__9689;
continue;
} else {
var temp__5720__auto___9690__$1 = cljs.core.seq.call(null,seq__9454_9654);
if(temp__5720__auto___9690__$1){
var seq__9454_9691__$1 = temp__5720__auto___9690__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9454_9691__$1)){
var c__4550__auto___9692 = cljs.core.chunk_first.call(null,seq__9454_9691__$1);
var G__9693 = cljs.core.chunk_rest.call(null,seq__9454_9691__$1);
var G__9694 = c__4550__auto___9692;
var G__9695 = cljs.core.count.call(null,c__4550__auto___9692);
var G__9696 = (0);
seq__9454_9654 = G__9693;
chunk__9455_9655 = G__9694;
count__9456_9656 = G__9695;
i__9457_9657 = G__9696;
continue;
} else {
var vec__9515_9697 = cljs.core.first.call(null,seq__9454_9691__$1);
var line_9698 = cljs.core.nth.call(null,vec__9515_9697,(0),null);
var cols_9699 = cljs.core.nth.call(null,vec__9515_9697,(1),null);
var seq__9518_9700 = cljs.core.seq.call(null,cols_9699);
var chunk__9519_9701 = null;
var count__9520_9702 = (0);
var i__9521_9703 = (0);
while(true){
if((i__9521_9703 < count__9520_9702)){
var vec__9528_9704 = cljs.core._nth.call(null,chunk__9519_9701,i__9521_9703);
var col_9705 = cljs.core.nth.call(null,vec__9528_9704,(0),null);
var infos_9706 = cljs.core.nth.call(null,vec__9528_9704,(1),null);
encode_cols.call(null,infos_9706,source_idx_9650,line_9698,col_9705);


var G__9707 = seq__9518_9700;
var G__9708 = chunk__9519_9701;
var G__9709 = count__9520_9702;
var G__9710 = (i__9521_9703 + (1));
seq__9518_9700 = G__9707;
chunk__9519_9701 = G__9708;
count__9520_9702 = G__9709;
i__9521_9703 = G__9710;
continue;
} else {
var temp__5720__auto___9711__$2 = cljs.core.seq.call(null,seq__9518_9700);
if(temp__5720__auto___9711__$2){
var seq__9518_9712__$1 = temp__5720__auto___9711__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9518_9712__$1)){
var c__4550__auto___9713 = cljs.core.chunk_first.call(null,seq__9518_9712__$1);
var G__9714 = cljs.core.chunk_rest.call(null,seq__9518_9712__$1);
var G__9715 = c__4550__auto___9713;
var G__9716 = cljs.core.count.call(null,c__4550__auto___9713);
var G__9717 = (0);
seq__9518_9700 = G__9714;
chunk__9519_9701 = G__9715;
count__9520_9702 = G__9716;
i__9521_9703 = G__9717;
continue;
} else {
var vec__9531_9718 = cljs.core.first.call(null,seq__9518_9712__$1);
var col_9719 = cljs.core.nth.call(null,vec__9531_9718,(0),null);
var infos_9720 = cljs.core.nth.call(null,vec__9531_9718,(1),null);
encode_cols.call(null,infos_9720,source_idx_9650,line_9698,col_9719);


var G__9721 = cljs.core.next.call(null,seq__9518_9712__$1);
var G__9722 = null;
var G__9723 = (0);
var G__9724 = (0);
seq__9518_9700 = G__9721;
chunk__9519_9701 = G__9722;
count__9520_9702 = G__9723;
i__9521_9703 = G__9724;
continue;
}
} else {
}
}
break;
}


var G__9725 = cljs.core.next.call(null,seq__9454_9691__$1);
var G__9726 = null;
var G__9727 = (0);
var G__9728 = (0);
seq__9454_9654 = G__9725;
chunk__9455_9655 = G__9726;
count__9456_9656 = G__9727;
i__9457_9657 = G__9728;
continue;
}
} else {
}
}
break;
}


var G__9729 = cljs.core.next.call(null,seq__9186_9643__$1);
var G__9730 = null;
var G__9731 = (0);
var G__9732 = (0);
seq__9186_9554 = G__9729;
chunk__9187_9555 = G__9730;
count__9188_9556 = G__9731;
i__9189_9557 = G__9732;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__9534 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__9179_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9179_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__9180_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__9180_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__9181_SHARP_){
return clojure.string.join.call(null,",",p1__9181_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__9535 = G__9534;
goog.object.set(G__9535,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__9535;
} else {
return G__9534;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__9733 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__9733,(0),null);
var col_map = cljs.core.nth.call(null,vec__9733,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__9736 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__9736,(0),null);
var infos = cljs.core.nth.call(null,vec__9736,(1),null);
var G__9742 = cljs.core.next.call(null,col_map_seq);
var G__9743 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__9736,col,infos,vec__9733,line,col_map){
return (function (v,p__9739){
var map__9740 = p__9739;
var map__9740__$1 = (((((!((map__9740 == null))))?(((((map__9740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9740):map__9740);
var gline = cljs.core.get.call(null,map__9740__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__9740__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__9736,col,infos,vec__9733,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__9742;
new_cols = G__9743;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__9744 = cljs.core.next.call(null,line_map_seq);
var G__9745 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__9744;
new_lines = G__9745;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__9746_10018 = cljs.core.seq.call(null,reverse_map);
var chunk__9747_10019 = null;
var count__9748_10020 = (0);
var i__9749_10021 = (0);
while(true){
if((i__9749_10021 < count__9748_10020)){
var vec__9884_10022 = cljs.core._nth.call(null,chunk__9747_10019,i__9749_10021);
var line_10023 = cljs.core.nth.call(null,vec__9884_10022,(0),null);
var columns_10024 = cljs.core.nth.call(null,vec__9884_10022,(1),null);
var seq__9887_10025 = cljs.core.seq.call(null,columns_10024);
var chunk__9888_10026 = null;
var count__9889_10027 = (0);
var i__9890_10028 = (0);
while(true){
if((i__9890_10028 < count__9889_10027)){
var vec__9921_10029 = cljs.core._nth.call(null,chunk__9888_10026,i__9890_10028);
var column_10030 = cljs.core.nth.call(null,vec__9921_10029,(0),null);
var column_info_10031 = cljs.core.nth.call(null,vec__9921_10029,(1),null);
var seq__9924_10032 = cljs.core.seq.call(null,column_info_10031);
var chunk__9925_10033 = null;
var count__9926_10034 = (0);
var i__9927_10035 = (0);
while(true){
if((i__9927_10035 < count__9926_10034)){
var map__9932_10036 = cljs.core._nth.call(null,chunk__9925_10033,i__9927_10035);
var map__9932_10037__$1 = (((((!((map__9932_10036 == null))))?(((((map__9932_10036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9932_10036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9932_10036):map__9932_10036);
var gline_10038 = cljs.core.get.call(null,map__9932_10037__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10039 = cljs.core.get.call(null,map__9932_10037__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10040 = cljs.core.get.call(null,map__9932_10037__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10038], null),cljs.core.fnil.call(null,((function (seq__9924_10032,chunk__9925_10033,count__9926_10034,i__9927_10035,seq__9887_10025,chunk__9888_10026,count__9889_10027,i__9890_10028,seq__9746_10018,chunk__9747_10019,count__9748_10020,i__9749_10021,map__9932_10036,map__9932_10037__$1,gline_10038,gcol_10039,name_10040,vec__9921_10029,column_10030,column_info_10031,vec__9884_10022,line_10023,columns_10024,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10039], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10023,new cljs.core.Keyword(null,"col","col",-1959363084),column_10030,new cljs.core.Keyword(null,"name","name",1843675177),name_10040], null));
});})(seq__9924_10032,chunk__9925_10033,count__9926_10034,i__9927_10035,seq__9887_10025,chunk__9888_10026,count__9889_10027,i__9890_10028,seq__9746_10018,chunk__9747_10019,count__9748_10020,i__9749_10021,map__9932_10036,map__9932_10037__$1,gline_10038,gcol_10039,name_10040,vec__9921_10029,column_10030,column_info_10031,vec__9884_10022,line_10023,columns_10024,inverted))
,cljs.core.sorted_map.call(null)));


var G__10041 = seq__9924_10032;
var G__10042 = chunk__9925_10033;
var G__10043 = count__9926_10034;
var G__10044 = (i__9927_10035 + (1));
seq__9924_10032 = G__10041;
chunk__9925_10033 = G__10042;
count__9926_10034 = G__10043;
i__9927_10035 = G__10044;
continue;
} else {
var temp__5720__auto___10045 = cljs.core.seq.call(null,seq__9924_10032);
if(temp__5720__auto___10045){
var seq__9924_10046__$1 = temp__5720__auto___10045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9924_10046__$1)){
var c__4550__auto___10047 = cljs.core.chunk_first.call(null,seq__9924_10046__$1);
var G__10048 = cljs.core.chunk_rest.call(null,seq__9924_10046__$1);
var G__10049 = c__4550__auto___10047;
var G__10050 = cljs.core.count.call(null,c__4550__auto___10047);
var G__10051 = (0);
seq__9924_10032 = G__10048;
chunk__9925_10033 = G__10049;
count__9926_10034 = G__10050;
i__9927_10035 = G__10051;
continue;
} else {
var map__9934_10052 = cljs.core.first.call(null,seq__9924_10046__$1);
var map__9934_10053__$1 = (((((!((map__9934_10052 == null))))?(((((map__9934_10052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9934_10052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9934_10052):map__9934_10052);
var gline_10054 = cljs.core.get.call(null,map__9934_10053__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10055 = cljs.core.get.call(null,map__9934_10053__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10056 = cljs.core.get.call(null,map__9934_10053__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10054], null),cljs.core.fnil.call(null,((function (seq__9924_10032,chunk__9925_10033,count__9926_10034,i__9927_10035,seq__9887_10025,chunk__9888_10026,count__9889_10027,i__9890_10028,seq__9746_10018,chunk__9747_10019,count__9748_10020,i__9749_10021,map__9934_10052,map__9934_10053__$1,gline_10054,gcol_10055,name_10056,seq__9924_10046__$1,temp__5720__auto___10045,vec__9921_10029,column_10030,column_info_10031,vec__9884_10022,line_10023,columns_10024,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10055], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10023,new cljs.core.Keyword(null,"col","col",-1959363084),column_10030,new cljs.core.Keyword(null,"name","name",1843675177),name_10056], null));
});})(seq__9924_10032,chunk__9925_10033,count__9926_10034,i__9927_10035,seq__9887_10025,chunk__9888_10026,count__9889_10027,i__9890_10028,seq__9746_10018,chunk__9747_10019,count__9748_10020,i__9749_10021,map__9934_10052,map__9934_10053__$1,gline_10054,gcol_10055,name_10056,seq__9924_10046__$1,temp__5720__auto___10045,vec__9921_10029,column_10030,column_info_10031,vec__9884_10022,line_10023,columns_10024,inverted))
,cljs.core.sorted_map.call(null)));


var G__10057 = cljs.core.next.call(null,seq__9924_10046__$1);
var G__10058 = null;
var G__10059 = (0);
var G__10060 = (0);
seq__9924_10032 = G__10057;
chunk__9925_10033 = G__10058;
count__9926_10034 = G__10059;
i__9927_10035 = G__10060;
continue;
}
} else {
}
}
break;
}


var G__10061 = seq__9887_10025;
var G__10062 = chunk__9888_10026;
var G__10063 = count__9889_10027;
var G__10064 = (i__9890_10028 + (1));
seq__9887_10025 = G__10061;
chunk__9888_10026 = G__10062;
count__9889_10027 = G__10063;
i__9890_10028 = G__10064;
continue;
} else {
var temp__5720__auto___10065 = cljs.core.seq.call(null,seq__9887_10025);
if(temp__5720__auto___10065){
var seq__9887_10066__$1 = temp__5720__auto___10065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9887_10066__$1)){
var c__4550__auto___10067 = cljs.core.chunk_first.call(null,seq__9887_10066__$1);
var G__10068 = cljs.core.chunk_rest.call(null,seq__9887_10066__$1);
var G__10069 = c__4550__auto___10067;
var G__10070 = cljs.core.count.call(null,c__4550__auto___10067);
var G__10071 = (0);
seq__9887_10025 = G__10068;
chunk__9888_10026 = G__10069;
count__9889_10027 = G__10070;
i__9890_10028 = G__10071;
continue;
} else {
var vec__9936_10072 = cljs.core.first.call(null,seq__9887_10066__$1);
var column_10073 = cljs.core.nth.call(null,vec__9936_10072,(0),null);
var column_info_10074 = cljs.core.nth.call(null,vec__9936_10072,(1),null);
var seq__9939_10075 = cljs.core.seq.call(null,column_info_10074);
var chunk__9940_10076 = null;
var count__9941_10077 = (0);
var i__9942_10078 = (0);
while(true){
if((i__9942_10078 < count__9941_10077)){
var map__9947_10079 = cljs.core._nth.call(null,chunk__9940_10076,i__9942_10078);
var map__9947_10080__$1 = (((((!((map__9947_10079 == null))))?(((((map__9947_10079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9947_10079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9947_10079):map__9947_10079);
var gline_10081 = cljs.core.get.call(null,map__9947_10080__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10082 = cljs.core.get.call(null,map__9947_10080__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10083 = cljs.core.get.call(null,map__9947_10080__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10081], null),cljs.core.fnil.call(null,((function (seq__9939_10075,chunk__9940_10076,count__9941_10077,i__9942_10078,seq__9887_10025,chunk__9888_10026,count__9889_10027,i__9890_10028,seq__9746_10018,chunk__9747_10019,count__9748_10020,i__9749_10021,map__9947_10079,map__9947_10080__$1,gline_10081,gcol_10082,name_10083,vec__9936_10072,column_10073,column_info_10074,seq__9887_10066__$1,temp__5720__auto___10065,vec__9884_10022,line_10023,columns_10024,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10082], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10023,new cljs.core.Keyword(null,"col","col",-1959363084),column_10073,new cljs.core.Keyword(null,"name","name",1843675177),name_10083], null));
});})(seq__9939_10075,chunk__9940_10076,count__9941_10077,i__9942_10078,seq__9887_10025,chunk__9888_10026,count__9889_10027,i__9890_10028,seq__9746_10018,chunk__9747_10019,count__9748_10020,i__9749_10021,map__9947_10079,map__9947_10080__$1,gline_10081,gcol_10082,name_10083,vec__9936_10072,column_10073,column_info_10074,seq__9887_10066__$1,temp__5720__auto___10065,vec__9884_10022,line_10023,columns_10024,inverted))
,cljs.core.sorted_map.call(null)));


var G__10084 = seq__9939_10075;
var G__10085 = chunk__9940_10076;
var G__10086 = count__9941_10077;
var G__10087 = (i__9942_10078 + (1));
seq__9939_10075 = G__10084;
chunk__9940_10076 = G__10085;
count__9941_10077 = G__10086;
i__9942_10078 = G__10087;
continue;
} else {
var temp__5720__auto___10088__$1 = cljs.core.seq.call(null,seq__9939_10075);
if(temp__5720__auto___10088__$1){
var seq__9939_10089__$1 = temp__5720__auto___10088__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9939_10089__$1)){
var c__4550__auto___10090 = cljs.core.chunk_first.call(null,seq__9939_10089__$1);
var G__10091 = cljs.core.chunk_rest.call(null,seq__9939_10089__$1);
var G__10092 = c__4550__auto___10090;
var G__10093 = cljs.core.count.call(null,c__4550__auto___10090);
var G__10094 = (0);
seq__9939_10075 = G__10091;
chunk__9940_10076 = G__10092;
count__9941_10077 = G__10093;
i__9942_10078 = G__10094;
continue;
} else {
var map__9949_10095 = cljs.core.first.call(null,seq__9939_10089__$1);
var map__9949_10096__$1 = (((((!((map__9949_10095 == null))))?(((((map__9949_10095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9949_10095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9949_10095):map__9949_10095);
var gline_10097 = cljs.core.get.call(null,map__9949_10096__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10098 = cljs.core.get.call(null,map__9949_10096__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10099 = cljs.core.get.call(null,map__9949_10096__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10097], null),cljs.core.fnil.call(null,((function (seq__9939_10075,chunk__9940_10076,count__9941_10077,i__9942_10078,seq__9887_10025,chunk__9888_10026,count__9889_10027,i__9890_10028,seq__9746_10018,chunk__9747_10019,count__9748_10020,i__9749_10021,map__9949_10095,map__9949_10096__$1,gline_10097,gcol_10098,name_10099,seq__9939_10089__$1,temp__5720__auto___10088__$1,vec__9936_10072,column_10073,column_info_10074,seq__9887_10066__$1,temp__5720__auto___10065,vec__9884_10022,line_10023,columns_10024,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10098], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10023,new cljs.core.Keyword(null,"col","col",-1959363084),column_10073,new cljs.core.Keyword(null,"name","name",1843675177),name_10099], null));
});})(seq__9939_10075,chunk__9940_10076,count__9941_10077,i__9942_10078,seq__9887_10025,chunk__9888_10026,count__9889_10027,i__9890_10028,seq__9746_10018,chunk__9747_10019,count__9748_10020,i__9749_10021,map__9949_10095,map__9949_10096__$1,gline_10097,gcol_10098,name_10099,seq__9939_10089__$1,temp__5720__auto___10088__$1,vec__9936_10072,column_10073,column_info_10074,seq__9887_10066__$1,temp__5720__auto___10065,vec__9884_10022,line_10023,columns_10024,inverted))
,cljs.core.sorted_map.call(null)));


var G__10100 = cljs.core.next.call(null,seq__9939_10089__$1);
var G__10101 = null;
var G__10102 = (0);
var G__10103 = (0);
seq__9939_10075 = G__10100;
chunk__9940_10076 = G__10101;
count__9941_10077 = G__10102;
i__9942_10078 = G__10103;
continue;
}
} else {
}
}
break;
}


var G__10104 = cljs.core.next.call(null,seq__9887_10066__$1);
var G__10105 = null;
var G__10106 = (0);
var G__10107 = (0);
seq__9887_10025 = G__10104;
chunk__9888_10026 = G__10105;
count__9889_10027 = G__10106;
i__9890_10028 = G__10107;
continue;
}
} else {
}
}
break;
}


var G__10108 = seq__9746_10018;
var G__10109 = chunk__9747_10019;
var G__10110 = count__9748_10020;
var G__10111 = (i__9749_10021 + (1));
seq__9746_10018 = G__10108;
chunk__9747_10019 = G__10109;
count__9748_10020 = G__10110;
i__9749_10021 = G__10111;
continue;
} else {
var temp__5720__auto___10112 = cljs.core.seq.call(null,seq__9746_10018);
if(temp__5720__auto___10112){
var seq__9746_10113__$1 = temp__5720__auto___10112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9746_10113__$1)){
var c__4550__auto___10114 = cljs.core.chunk_first.call(null,seq__9746_10113__$1);
var G__10115 = cljs.core.chunk_rest.call(null,seq__9746_10113__$1);
var G__10116 = c__4550__auto___10114;
var G__10117 = cljs.core.count.call(null,c__4550__auto___10114);
var G__10118 = (0);
seq__9746_10018 = G__10115;
chunk__9747_10019 = G__10116;
count__9748_10020 = G__10117;
i__9749_10021 = G__10118;
continue;
} else {
var vec__9951_10119 = cljs.core.first.call(null,seq__9746_10113__$1);
var line_10120 = cljs.core.nth.call(null,vec__9951_10119,(0),null);
var columns_10121 = cljs.core.nth.call(null,vec__9951_10119,(1),null);
var seq__9954_10122 = cljs.core.seq.call(null,columns_10121);
var chunk__9955_10123 = null;
var count__9956_10124 = (0);
var i__9957_10125 = (0);
while(true){
if((i__9957_10125 < count__9956_10124)){
var vec__9988_10126 = cljs.core._nth.call(null,chunk__9955_10123,i__9957_10125);
var column_10127 = cljs.core.nth.call(null,vec__9988_10126,(0),null);
var column_info_10128 = cljs.core.nth.call(null,vec__9988_10126,(1),null);
var seq__9991_10129 = cljs.core.seq.call(null,column_info_10128);
var chunk__9992_10130 = null;
var count__9993_10131 = (0);
var i__9994_10132 = (0);
while(true){
if((i__9994_10132 < count__9993_10131)){
var map__9999_10133 = cljs.core._nth.call(null,chunk__9992_10130,i__9994_10132);
var map__9999_10134__$1 = (((((!((map__9999_10133 == null))))?(((((map__9999_10133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9999_10133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9999_10133):map__9999_10133);
var gline_10135 = cljs.core.get.call(null,map__9999_10134__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10136 = cljs.core.get.call(null,map__9999_10134__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10137 = cljs.core.get.call(null,map__9999_10134__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10135], null),cljs.core.fnil.call(null,((function (seq__9991_10129,chunk__9992_10130,count__9993_10131,i__9994_10132,seq__9954_10122,chunk__9955_10123,count__9956_10124,i__9957_10125,seq__9746_10018,chunk__9747_10019,count__9748_10020,i__9749_10021,map__9999_10133,map__9999_10134__$1,gline_10135,gcol_10136,name_10137,vec__9988_10126,column_10127,column_info_10128,vec__9951_10119,line_10120,columns_10121,seq__9746_10113__$1,temp__5720__auto___10112,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10136], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10120,new cljs.core.Keyword(null,"col","col",-1959363084),column_10127,new cljs.core.Keyword(null,"name","name",1843675177),name_10137], null));
});})(seq__9991_10129,chunk__9992_10130,count__9993_10131,i__9994_10132,seq__9954_10122,chunk__9955_10123,count__9956_10124,i__9957_10125,seq__9746_10018,chunk__9747_10019,count__9748_10020,i__9749_10021,map__9999_10133,map__9999_10134__$1,gline_10135,gcol_10136,name_10137,vec__9988_10126,column_10127,column_info_10128,vec__9951_10119,line_10120,columns_10121,seq__9746_10113__$1,temp__5720__auto___10112,inverted))
,cljs.core.sorted_map.call(null)));


var G__10138 = seq__9991_10129;
var G__10139 = chunk__9992_10130;
var G__10140 = count__9993_10131;
var G__10141 = (i__9994_10132 + (1));
seq__9991_10129 = G__10138;
chunk__9992_10130 = G__10139;
count__9993_10131 = G__10140;
i__9994_10132 = G__10141;
continue;
} else {
var temp__5720__auto___10142__$1 = cljs.core.seq.call(null,seq__9991_10129);
if(temp__5720__auto___10142__$1){
var seq__9991_10143__$1 = temp__5720__auto___10142__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9991_10143__$1)){
var c__4550__auto___10144 = cljs.core.chunk_first.call(null,seq__9991_10143__$1);
var G__10145 = cljs.core.chunk_rest.call(null,seq__9991_10143__$1);
var G__10146 = c__4550__auto___10144;
var G__10147 = cljs.core.count.call(null,c__4550__auto___10144);
var G__10148 = (0);
seq__9991_10129 = G__10145;
chunk__9992_10130 = G__10146;
count__9993_10131 = G__10147;
i__9994_10132 = G__10148;
continue;
} else {
var map__10001_10149 = cljs.core.first.call(null,seq__9991_10143__$1);
var map__10001_10150__$1 = (((((!((map__10001_10149 == null))))?(((((map__10001_10149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10001_10149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10001_10149):map__10001_10149);
var gline_10151 = cljs.core.get.call(null,map__10001_10150__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10152 = cljs.core.get.call(null,map__10001_10150__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10153 = cljs.core.get.call(null,map__10001_10150__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10151], null),cljs.core.fnil.call(null,((function (seq__9991_10129,chunk__9992_10130,count__9993_10131,i__9994_10132,seq__9954_10122,chunk__9955_10123,count__9956_10124,i__9957_10125,seq__9746_10018,chunk__9747_10019,count__9748_10020,i__9749_10021,map__10001_10149,map__10001_10150__$1,gline_10151,gcol_10152,name_10153,seq__9991_10143__$1,temp__5720__auto___10142__$1,vec__9988_10126,column_10127,column_info_10128,vec__9951_10119,line_10120,columns_10121,seq__9746_10113__$1,temp__5720__auto___10112,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10152], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10120,new cljs.core.Keyword(null,"col","col",-1959363084),column_10127,new cljs.core.Keyword(null,"name","name",1843675177),name_10153], null));
});})(seq__9991_10129,chunk__9992_10130,count__9993_10131,i__9994_10132,seq__9954_10122,chunk__9955_10123,count__9956_10124,i__9957_10125,seq__9746_10018,chunk__9747_10019,count__9748_10020,i__9749_10021,map__10001_10149,map__10001_10150__$1,gline_10151,gcol_10152,name_10153,seq__9991_10143__$1,temp__5720__auto___10142__$1,vec__9988_10126,column_10127,column_info_10128,vec__9951_10119,line_10120,columns_10121,seq__9746_10113__$1,temp__5720__auto___10112,inverted))
,cljs.core.sorted_map.call(null)));


var G__10154 = cljs.core.next.call(null,seq__9991_10143__$1);
var G__10155 = null;
var G__10156 = (0);
var G__10157 = (0);
seq__9991_10129 = G__10154;
chunk__9992_10130 = G__10155;
count__9993_10131 = G__10156;
i__9994_10132 = G__10157;
continue;
}
} else {
}
}
break;
}


var G__10158 = seq__9954_10122;
var G__10159 = chunk__9955_10123;
var G__10160 = count__9956_10124;
var G__10161 = (i__9957_10125 + (1));
seq__9954_10122 = G__10158;
chunk__9955_10123 = G__10159;
count__9956_10124 = G__10160;
i__9957_10125 = G__10161;
continue;
} else {
var temp__5720__auto___10162__$1 = cljs.core.seq.call(null,seq__9954_10122);
if(temp__5720__auto___10162__$1){
var seq__9954_10163__$1 = temp__5720__auto___10162__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9954_10163__$1)){
var c__4550__auto___10164 = cljs.core.chunk_first.call(null,seq__9954_10163__$1);
var G__10165 = cljs.core.chunk_rest.call(null,seq__9954_10163__$1);
var G__10166 = c__4550__auto___10164;
var G__10167 = cljs.core.count.call(null,c__4550__auto___10164);
var G__10168 = (0);
seq__9954_10122 = G__10165;
chunk__9955_10123 = G__10166;
count__9956_10124 = G__10167;
i__9957_10125 = G__10168;
continue;
} else {
var vec__10003_10169 = cljs.core.first.call(null,seq__9954_10163__$1);
var column_10170 = cljs.core.nth.call(null,vec__10003_10169,(0),null);
var column_info_10171 = cljs.core.nth.call(null,vec__10003_10169,(1),null);
var seq__10006_10172 = cljs.core.seq.call(null,column_info_10171);
var chunk__10007_10173 = null;
var count__10008_10174 = (0);
var i__10009_10175 = (0);
while(true){
if((i__10009_10175 < count__10008_10174)){
var map__10014_10176 = cljs.core._nth.call(null,chunk__10007_10173,i__10009_10175);
var map__10014_10177__$1 = (((((!((map__10014_10176 == null))))?(((((map__10014_10176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10014_10176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10014_10176):map__10014_10176);
var gline_10178 = cljs.core.get.call(null,map__10014_10177__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10179 = cljs.core.get.call(null,map__10014_10177__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10180 = cljs.core.get.call(null,map__10014_10177__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10178], null),cljs.core.fnil.call(null,((function (seq__10006_10172,chunk__10007_10173,count__10008_10174,i__10009_10175,seq__9954_10122,chunk__9955_10123,count__9956_10124,i__9957_10125,seq__9746_10018,chunk__9747_10019,count__9748_10020,i__9749_10021,map__10014_10176,map__10014_10177__$1,gline_10178,gcol_10179,name_10180,vec__10003_10169,column_10170,column_info_10171,seq__9954_10163__$1,temp__5720__auto___10162__$1,vec__9951_10119,line_10120,columns_10121,seq__9746_10113__$1,temp__5720__auto___10112,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10179], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10120,new cljs.core.Keyword(null,"col","col",-1959363084),column_10170,new cljs.core.Keyword(null,"name","name",1843675177),name_10180], null));
});})(seq__10006_10172,chunk__10007_10173,count__10008_10174,i__10009_10175,seq__9954_10122,chunk__9955_10123,count__9956_10124,i__9957_10125,seq__9746_10018,chunk__9747_10019,count__9748_10020,i__9749_10021,map__10014_10176,map__10014_10177__$1,gline_10178,gcol_10179,name_10180,vec__10003_10169,column_10170,column_info_10171,seq__9954_10163__$1,temp__5720__auto___10162__$1,vec__9951_10119,line_10120,columns_10121,seq__9746_10113__$1,temp__5720__auto___10112,inverted))
,cljs.core.sorted_map.call(null)));


var G__10181 = seq__10006_10172;
var G__10182 = chunk__10007_10173;
var G__10183 = count__10008_10174;
var G__10184 = (i__10009_10175 + (1));
seq__10006_10172 = G__10181;
chunk__10007_10173 = G__10182;
count__10008_10174 = G__10183;
i__10009_10175 = G__10184;
continue;
} else {
var temp__5720__auto___10185__$2 = cljs.core.seq.call(null,seq__10006_10172);
if(temp__5720__auto___10185__$2){
var seq__10006_10186__$1 = temp__5720__auto___10185__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10006_10186__$1)){
var c__4550__auto___10187 = cljs.core.chunk_first.call(null,seq__10006_10186__$1);
var G__10188 = cljs.core.chunk_rest.call(null,seq__10006_10186__$1);
var G__10189 = c__4550__auto___10187;
var G__10190 = cljs.core.count.call(null,c__4550__auto___10187);
var G__10191 = (0);
seq__10006_10172 = G__10188;
chunk__10007_10173 = G__10189;
count__10008_10174 = G__10190;
i__10009_10175 = G__10191;
continue;
} else {
var map__10016_10192 = cljs.core.first.call(null,seq__10006_10186__$1);
var map__10016_10193__$1 = (((((!((map__10016_10192 == null))))?(((((map__10016_10192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10016_10192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10016_10192):map__10016_10192);
var gline_10194 = cljs.core.get.call(null,map__10016_10193__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10195 = cljs.core.get.call(null,map__10016_10193__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10196 = cljs.core.get.call(null,map__10016_10193__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10194], null),cljs.core.fnil.call(null,((function (seq__10006_10172,chunk__10007_10173,count__10008_10174,i__10009_10175,seq__9954_10122,chunk__9955_10123,count__9956_10124,i__9957_10125,seq__9746_10018,chunk__9747_10019,count__9748_10020,i__9749_10021,map__10016_10192,map__10016_10193__$1,gline_10194,gcol_10195,name_10196,seq__10006_10186__$1,temp__5720__auto___10185__$2,vec__10003_10169,column_10170,column_info_10171,seq__9954_10163__$1,temp__5720__auto___10162__$1,vec__9951_10119,line_10120,columns_10121,seq__9746_10113__$1,temp__5720__auto___10112,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10195], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10120,new cljs.core.Keyword(null,"col","col",-1959363084),column_10170,new cljs.core.Keyword(null,"name","name",1843675177),name_10196], null));
});})(seq__10006_10172,chunk__10007_10173,count__10008_10174,i__10009_10175,seq__9954_10122,chunk__9955_10123,count__9956_10124,i__9957_10125,seq__9746_10018,chunk__9747_10019,count__9748_10020,i__9749_10021,map__10016_10192,map__10016_10193__$1,gline_10194,gcol_10195,name_10196,seq__10006_10186__$1,temp__5720__auto___10185__$2,vec__10003_10169,column_10170,column_info_10171,seq__9954_10163__$1,temp__5720__auto___10162__$1,vec__9951_10119,line_10120,columns_10121,seq__9746_10113__$1,temp__5720__auto___10112,inverted))
,cljs.core.sorted_map.call(null)));


var G__10197 = cljs.core.next.call(null,seq__10006_10186__$1);
var G__10198 = null;
var G__10199 = (0);
var G__10200 = (0);
seq__10006_10172 = G__10197;
chunk__10007_10173 = G__10198;
count__10008_10174 = G__10199;
i__10009_10175 = G__10200;
continue;
}
} else {
}
}
break;
}


var G__10201 = cljs.core.next.call(null,seq__9954_10163__$1);
var G__10202 = null;
var G__10203 = (0);
var G__10204 = (0);
seq__9954_10122 = G__10201;
chunk__9955_10123 = G__10202;
count__9956_10124 = G__10203;
i__9957_10125 = G__10204;
continue;
}
} else {
}
}
break;
}


var G__10205 = cljs.core.next.call(null,seq__9746_10113__$1);
var G__10206 = null;
var G__10207 = (0);
var G__10208 = (0);
seq__9746_10018 = G__10205;
chunk__9747_10019 = G__10206;
count__9748_10020 = G__10207;
i__9749_10021 = G__10208;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1611075061976
