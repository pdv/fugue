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
return cljs.core.reduce.call(null,(function (m,p__31996){
var vec__31997 = p__31996;
var i = cljs.core.nth.call(null,vec__31997,(0),null);
var v = cljs.core.nth.call(null,vec__31997,(1),null);
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
var vec__32000 = seg;
var gcol = cljs.core.nth.call(null,vec__32000,(0),null);
var source = cljs.core.nth.call(null,vec__32000,(1),null);
var line = cljs.core.nth.call(null,vec__32000,(2),null);
var col = cljs.core.nth.call(null,vec__32000,(3),null);
var name = cljs.core.nth.call(null,vec__32000,(4),null);
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
var vec__32003 = seg;
var gcol = cljs.core.nth.call(null,vec__32003,(0),null);
var source = cljs.core.nth.call(null,vec__32003,(1),null);
var line = cljs.core.nth.call(null,vec__32003,(2),null);
var col = cljs.core.nth.call(null,vec__32003,(3),null);
var name = cljs.core.nth.call(null,vec__32003,(4),null);
var vec__32006 = relseg;
var rgcol = cljs.core.nth.call(null,vec__32006,(0),null);
var rsource = cljs.core.nth.call(null,vec__32006,(1),null);
var rline = cljs.core.nth.call(null,vec__32006,(2),null);
var rcol = cljs.core.nth.call(null,vec__32006,(3),null);
var rname = cljs.core.nth.call(null,vec__32006,(4),null);
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
var map__32009 = segmap;
var map__32009__$1 = (((((!((map__32009 == null))))?(((((map__32009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32009):map__32009);
var gcol = cljs.core.get.call(null,map__32009__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__32009__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__32009__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__32009__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__32009__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__32009,map__32009__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__32009,map__32009__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__32009,map__32009__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__32009,map__32009__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__32009,map__32009__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__32009,map__32009__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__32012 = arguments.length;
switch (G__32012) {
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
var vec__32016 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__32020 = cljs.core.next.call(null,segs__$1);
var G__32021 = nrelseg;
var G__32022 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__32020;
relseg__$1 = G__32021;
result__$1 = G__32022;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__32016,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__32016,(1),null);
var G__32023 = (gline + (1));
var G__32024 = cljs.core.next.call(null,lines__$1);
var G__32025 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__32026 = result__$1;
gline = G__32023;
lines__$1 = G__32024;
relseg = G__32025;
result = G__32026;
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
var map__32028 = segmap;
var map__32028__$1 = (((((!((map__32028 == null))))?(((((map__32028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32028):map__32028);
var gcol = cljs.core.get.call(null,map__32028__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__32028__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__32028__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__32028__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__32028__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__32028,map__32028__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__32028,map__32028__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__32027_SHARP_){
return cljs.core.conj.call(null,p1__32027_SHARP_,d__$1);
});})(map__32028,map__32028__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__32028,map__32028__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__32031 = arguments.length;
switch (G__32031) {
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
var vec__32035 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__32039 = cljs.core.next.call(null,segs__$1);
var G__32040 = nrelseg;
var G__32041 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__32039;
relseg__$1 = G__32040;
result__$1 = G__32041;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__32035,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__32035,(1),null);
var G__32042 = (gline + (1));
var G__32043 = cljs.core.next.call(null,lines__$1);
var G__32044 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__32045 = result__$1;
gline = G__32042;
lines__$1 = G__32043;
relseg = G__32044;
result = G__32045;
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
return (function (p__32046){
var vec__32047 = p__32046;
var _ = cljs.core.nth.call(null,vec__32047,(0),null);
var source = cljs.core.nth.call(null,vec__32047,(1),null);
var line = cljs.core.nth.call(null,vec__32047,(2),null);
var col = cljs.core.nth.call(null,vec__32047,(3),null);
var name = cljs.core.nth.call(null,vec__32047,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__32050){
var vec__32051 = p__32050;
var gcol = cljs.core.nth.call(null,vec__32051,(0),null);
var sidx = cljs.core.nth.call(null,vec__32051,(1),null);
var line = cljs.core.nth.call(null,vec__32051,(2),null);
var col = cljs.core.nth.call(null,vec__32051,(3),null);
var name = cljs.core.nth.call(null,vec__32051,(4),null);
var seg = vec__32051;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__32051,gcol,sidx,line,col,name,seg,relseg){
return (function (p__32054){
var vec__32055 = p__32054;
var _ = cljs.core.nth.call(null,vec__32055,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__32055,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__32055,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__32055,(3),null);
var lname = cljs.core.nth.call(null,vec__32055,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__32051,gcol,sidx,line,col,name,seg,relseg))
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
var seq__32061 = cljs.core.seq.call(null,infos);
var chunk__32062 = null;
var count__32063 = (0);
var i__32064 = (0);
while(true){
if((i__32064 < count__32063)){
var info = cljs.core._nth.call(null,chunk__32062,i__32064);
var segv_32415 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_32416 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_32417 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_32416 > (lc_32417 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__32061,chunk__32062,count__32063,i__32064,segv_32415,gline_32416,lc_32417,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_32416 - (lc_32417 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_32415], null));
});})(seq__32061,chunk__32062,count__32063,i__32064,segv_32415,gline_32416,lc_32417,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__32061,chunk__32062,count__32063,i__32064,segv_32415,gline_32416,lc_32417,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32416], null),cljs.core.conj,segv_32415);
});})(seq__32061,chunk__32062,count__32063,i__32064,segv_32415,gline_32416,lc_32417,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__32418 = seq__32061;
var G__32419 = chunk__32062;
var G__32420 = count__32063;
var G__32421 = (i__32064 + (1));
seq__32061 = G__32418;
chunk__32062 = G__32419;
count__32063 = G__32420;
i__32064 = G__32421;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__32061);
if(temp__5720__auto__){
var seq__32061__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32061__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32061__$1);
var G__32422 = cljs.core.chunk_rest.call(null,seq__32061__$1);
var G__32423 = c__4550__auto__;
var G__32424 = cljs.core.count.call(null,c__4550__auto__);
var G__32425 = (0);
seq__32061 = G__32422;
chunk__32062 = G__32423;
count__32063 = G__32424;
i__32064 = G__32425;
continue;
} else {
var info = cljs.core.first.call(null,seq__32061__$1);
var segv_32426 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_32427 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_32428 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_32427 > (lc_32428 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__32061,chunk__32062,count__32063,i__32064,segv_32426,gline_32427,lc_32428,info,seq__32061__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_32427 - (lc_32428 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_32426], null));
});})(seq__32061,chunk__32062,count__32063,i__32064,segv_32426,gline_32427,lc_32428,info,seq__32061__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__32061,chunk__32062,count__32063,i__32064,segv_32426,gline_32427,lc_32428,info,seq__32061__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32427], null),cljs.core.conj,segv_32426);
});})(seq__32061,chunk__32062,count__32063,i__32064,segv_32426,gline_32427,lc_32428,info,seq__32061__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__32429 = cljs.core.next.call(null,seq__32061__$1);
var G__32430 = null;
var G__32431 = (0);
var G__32432 = (0);
seq__32061 = G__32429;
chunk__32062 = G__32430;
count__32063 = G__32431;
i__32064 = G__32432;
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
var seq__32065_32433 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__32066_32434 = null;
var count__32067_32435 = (0);
var i__32068_32436 = (0);
while(true){
if((i__32068_32436 < count__32067_32435)){
var vec__32241_32437 = cljs.core._nth.call(null,chunk__32066_32434,i__32068_32436);
var source_idx_32438 = cljs.core.nth.call(null,vec__32241_32437,(0),null);
var vec__32244_32439 = cljs.core.nth.call(null,vec__32241_32437,(1),null);
var __32440 = cljs.core.nth.call(null,vec__32244_32439,(0),null);
var lines_32441__$1 = cljs.core.nth.call(null,vec__32244_32439,(1),null);
var seq__32247_32442 = cljs.core.seq.call(null,lines_32441__$1);
var chunk__32248_32443 = null;
var count__32249_32444 = (0);
var i__32250_32445 = (0);
while(true){
if((i__32250_32445 < count__32249_32444)){
var vec__32289_32446 = cljs.core._nth.call(null,chunk__32248_32443,i__32250_32445);
var line_32447 = cljs.core.nth.call(null,vec__32289_32446,(0),null);
var cols_32448 = cljs.core.nth.call(null,vec__32289_32446,(1),null);
var seq__32292_32449 = cljs.core.seq.call(null,cols_32448);
var chunk__32293_32450 = null;
var count__32294_32451 = (0);
var i__32295_32452 = (0);
while(true){
if((i__32295_32452 < count__32294_32451)){
var vec__32302_32453 = cljs.core._nth.call(null,chunk__32293_32450,i__32295_32452);
var col_32454 = cljs.core.nth.call(null,vec__32302_32453,(0),null);
var infos_32455 = cljs.core.nth.call(null,vec__32302_32453,(1),null);
encode_cols.call(null,infos_32455,source_idx_32438,line_32447,col_32454);


var G__32456 = seq__32292_32449;
var G__32457 = chunk__32293_32450;
var G__32458 = count__32294_32451;
var G__32459 = (i__32295_32452 + (1));
seq__32292_32449 = G__32456;
chunk__32293_32450 = G__32457;
count__32294_32451 = G__32458;
i__32295_32452 = G__32459;
continue;
} else {
var temp__5720__auto___32460 = cljs.core.seq.call(null,seq__32292_32449);
if(temp__5720__auto___32460){
var seq__32292_32461__$1 = temp__5720__auto___32460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32292_32461__$1)){
var c__4550__auto___32462 = cljs.core.chunk_first.call(null,seq__32292_32461__$1);
var G__32463 = cljs.core.chunk_rest.call(null,seq__32292_32461__$1);
var G__32464 = c__4550__auto___32462;
var G__32465 = cljs.core.count.call(null,c__4550__auto___32462);
var G__32466 = (0);
seq__32292_32449 = G__32463;
chunk__32293_32450 = G__32464;
count__32294_32451 = G__32465;
i__32295_32452 = G__32466;
continue;
} else {
var vec__32305_32467 = cljs.core.first.call(null,seq__32292_32461__$1);
var col_32468 = cljs.core.nth.call(null,vec__32305_32467,(0),null);
var infos_32469 = cljs.core.nth.call(null,vec__32305_32467,(1),null);
encode_cols.call(null,infos_32469,source_idx_32438,line_32447,col_32468);


var G__32470 = cljs.core.next.call(null,seq__32292_32461__$1);
var G__32471 = null;
var G__32472 = (0);
var G__32473 = (0);
seq__32292_32449 = G__32470;
chunk__32293_32450 = G__32471;
count__32294_32451 = G__32472;
i__32295_32452 = G__32473;
continue;
}
} else {
}
}
break;
}


var G__32474 = seq__32247_32442;
var G__32475 = chunk__32248_32443;
var G__32476 = count__32249_32444;
var G__32477 = (i__32250_32445 + (1));
seq__32247_32442 = G__32474;
chunk__32248_32443 = G__32475;
count__32249_32444 = G__32476;
i__32250_32445 = G__32477;
continue;
} else {
var temp__5720__auto___32478 = cljs.core.seq.call(null,seq__32247_32442);
if(temp__5720__auto___32478){
var seq__32247_32479__$1 = temp__5720__auto___32478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32247_32479__$1)){
var c__4550__auto___32480 = cljs.core.chunk_first.call(null,seq__32247_32479__$1);
var G__32481 = cljs.core.chunk_rest.call(null,seq__32247_32479__$1);
var G__32482 = c__4550__auto___32480;
var G__32483 = cljs.core.count.call(null,c__4550__auto___32480);
var G__32484 = (0);
seq__32247_32442 = G__32481;
chunk__32248_32443 = G__32482;
count__32249_32444 = G__32483;
i__32250_32445 = G__32484;
continue;
} else {
var vec__32308_32485 = cljs.core.first.call(null,seq__32247_32479__$1);
var line_32486 = cljs.core.nth.call(null,vec__32308_32485,(0),null);
var cols_32487 = cljs.core.nth.call(null,vec__32308_32485,(1),null);
var seq__32311_32488 = cljs.core.seq.call(null,cols_32487);
var chunk__32312_32489 = null;
var count__32313_32490 = (0);
var i__32314_32491 = (0);
while(true){
if((i__32314_32491 < count__32313_32490)){
var vec__32321_32492 = cljs.core._nth.call(null,chunk__32312_32489,i__32314_32491);
var col_32493 = cljs.core.nth.call(null,vec__32321_32492,(0),null);
var infos_32494 = cljs.core.nth.call(null,vec__32321_32492,(1),null);
encode_cols.call(null,infos_32494,source_idx_32438,line_32486,col_32493);


var G__32495 = seq__32311_32488;
var G__32496 = chunk__32312_32489;
var G__32497 = count__32313_32490;
var G__32498 = (i__32314_32491 + (1));
seq__32311_32488 = G__32495;
chunk__32312_32489 = G__32496;
count__32313_32490 = G__32497;
i__32314_32491 = G__32498;
continue;
} else {
var temp__5720__auto___32499__$1 = cljs.core.seq.call(null,seq__32311_32488);
if(temp__5720__auto___32499__$1){
var seq__32311_32500__$1 = temp__5720__auto___32499__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32311_32500__$1)){
var c__4550__auto___32501 = cljs.core.chunk_first.call(null,seq__32311_32500__$1);
var G__32502 = cljs.core.chunk_rest.call(null,seq__32311_32500__$1);
var G__32503 = c__4550__auto___32501;
var G__32504 = cljs.core.count.call(null,c__4550__auto___32501);
var G__32505 = (0);
seq__32311_32488 = G__32502;
chunk__32312_32489 = G__32503;
count__32313_32490 = G__32504;
i__32314_32491 = G__32505;
continue;
} else {
var vec__32324_32506 = cljs.core.first.call(null,seq__32311_32500__$1);
var col_32507 = cljs.core.nth.call(null,vec__32324_32506,(0),null);
var infos_32508 = cljs.core.nth.call(null,vec__32324_32506,(1),null);
encode_cols.call(null,infos_32508,source_idx_32438,line_32486,col_32507);


var G__32509 = cljs.core.next.call(null,seq__32311_32500__$1);
var G__32510 = null;
var G__32511 = (0);
var G__32512 = (0);
seq__32311_32488 = G__32509;
chunk__32312_32489 = G__32510;
count__32313_32490 = G__32511;
i__32314_32491 = G__32512;
continue;
}
} else {
}
}
break;
}


var G__32513 = cljs.core.next.call(null,seq__32247_32479__$1);
var G__32514 = null;
var G__32515 = (0);
var G__32516 = (0);
seq__32247_32442 = G__32513;
chunk__32248_32443 = G__32514;
count__32249_32444 = G__32515;
i__32250_32445 = G__32516;
continue;
}
} else {
}
}
break;
}


var G__32517 = seq__32065_32433;
var G__32518 = chunk__32066_32434;
var G__32519 = count__32067_32435;
var G__32520 = (i__32068_32436 + (1));
seq__32065_32433 = G__32517;
chunk__32066_32434 = G__32518;
count__32067_32435 = G__32519;
i__32068_32436 = G__32520;
continue;
} else {
var temp__5720__auto___32521 = cljs.core.seq.call(null,seq__32065_32433);
if(temp__5720__auto___32521){
var seq__32065_32522__$1 = temp__5720__auto___32521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32065_32522__$1)){
var c__4550__auto___32523 = cljs.core.chunk_first.call(null,seq__32065_32522__$1);
var G__32524 = cljs.core.chunk_rest.call(null,seq__32065_32522__$1);
var G__32525 = c__4550__auto___32523;
var G__32526 = cljs.core.count.call(null,c__4550__auto___32523);
var G__32527 = (0);
seq__32065_32433 = G__32524;
chunk__32066_32434 = G__32525;
count__32067_32435 = G__32526;
i__32068_32436 = G__32527;
continue;
} else {
var vec__32327_32528 = cljs.core.first.call(null,seq__32065_32522__$1);
var source_idx_32529 = cljs.core.nth.call(null,vec__32327_32528,(0),null);
var vec__32330_32530 = cljs.core.nth.call(null,vec__32327_32528,(1),null);
var __32531 = cljs.core.nth.call(null,vec__32330_32530,(0),null);
var lines_32532__$1 = cljs.core.nth.call(null,vec__32330_32530,(1),null);
var seq__32333_32533 = cljs.core.seq.call(null,lines_32532__$1);
var chunk__32334_32534 = null;
var count__32335_32535 = (0);
var i__32336_32536 = (0);
while(true){
if((i__32336_32536 < count__32335_32535)){
var vec__32375_32537 = cljs.core._nth.call(null,chunk__32334_32534,i__32336_32536);
var line_32538 = cljs.core.nth.call(null,vec__32375_32537,(0),null);
var cols_32539 = cljs.core.nth.call(null,vec__32375_32537,(1),null);
var seq__32378_32540 = cljs.core.seq.call(null,cols_32539);
var chunk__32379_32541 = null;
var count__32380_32542 = (0);
var i__32381_32543 = (0);
while(true){
if((i__32381_32543 < count__32380_32542)){
var vec__32388_32544 = cljs.core._nth.call(null,chunk__32379_32541,i__32381_32543);
var col_32545 = cljs.core.nth.call(null,vec__32388_32544,(0),null);
var infos_32546 = cljs.core.nth.call(null,vec__32388_32544,(1),null);
encode_cols.call(null,infos_32546,source_idx_32529,line_32538,col_32545);


var G__32547 = seq__32378_32540;
var G__32548 = chunk__32379_32541;
var G__32549 = count__32380_32542;
var G__32550 = (i__32381_32543 + (1));
seq__32378_32540 = G__32547;
chunk__32379_32541 = G__32548;
count__32380_32542 = G__32549;
i__32381_32543 = G__32550;
continue;
} else {
var temp__5720__auto___32551__$1 = cljs.core.seq.call(null,seq__32378_32540);
if(temp__5720__auto___32551__$1){
var seq__32378_32552__$1 = temp__5720__auto___32551__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32378_32552__$1)){
var c__4550__auto___32553 = cljs.core.chunk_first.call(null,seq__32378_32552__$1);
var G__32554 = cljs.core.chunk_rest.call(null,seq__32378_32552__$1);
var G__32555 = c__4550__auto___32553;
var G__32556 = cljs.core.count.call(null,c__4550__auto___32553);
var G__32557 = (0);
seq__32378_32540 = G__32554;
chunk__32379_32541 = G__32555;
count__32380_32542 = G__32556;
i__32381_32543 = G__32557;
continue;
} else {
var vec__32391_32558 = cljs.core.first.call(null,seq__32378_32552__$1);
var col_32559 = cljs.core.nth.call(null,vec__32391_32558,(0),null);
var infos_32560 = cljs.core.nth.call(null,vec__32391_32558,(1),null);
encode_cols.call(null,infos_32560,source_idx_32529,line_32538,col_32559);


var G__32561 = cljs.core.next.call(null,seq__32378_32552__$1);
var G__32562 = null;
var G__32563 = (0);
var G__32564 = (0);
seq__32378_32540 = G__32561;
chunk__32379_32541 = G__32562;
count__32380_32542 = G__32563;
i__32381_32543 = G__32564;
continue;
}
} else {
}
}
break;
}


var G__32565 = seq__32333_32533;
var G__32566 = chunk__32334_32534;
var G__32567 = count__32335_32535;
var G__32568 = (i__32336_32536 + (1));
seq__32333_32533 = G__32565;
chunk__32334_32534 = G__32566;
count__32335_32535 = G__32567;
i__32336_32536 = G__32568;
continue;
} else {
var temp__5720__auto___32569__$1 = cljs.core.seq.call(null,seq__32333_32533);
if(temp__5720__auto___32569__$1){
var seq__32333_32570__$1 = temp__5720__auto___32569__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32333_32570__$1)){
var c__4550__auto___32571 = cljs.core.chunk_first.call(null,seq__32333_32570__$1);
var G__32572 = cljs.core.chunk_rest.call(null,seq__32333_32570__$1);
var G__32573 = c__4550__auto___32571;
var G__32574 = cljs.core.count.call(null,c__4550__auto___32571);
var G__32575 = (0);
seq__32333_32533 = G__32572;
chunk__32334_32534 = G__32573;
count__32335_32535 = G__32574;
i__32336_32536 = G__32575;
continue;
} else {
var vec__32394_32576 = cljs.core.first.call(null,seq__32333_32570__$1);
var line_32577 = cljs.core.nth.call(null,vec__32394_32576,(0),null);
var cols_32578 = cljs.core.nth.call(null,vec__32394_32576,(1),null);
var seq__32397_32579 = cljs.core.seq.call(null,cols_32578);
var chunk__32398_32580 = null;
var count__32399_32581 = (0);
var i__32400_32582 = (0);
while(true){
if((i__32400_32582 < count__32399_32581)){
var vec__32407_32583 = cljs.core._nth.call(null,chunk__32398_32580,i__32400_32582);
var col_32584 = cljs.core.nth.call(null,vec__32407_32583,(0),null);
var infos_32585 = cljs.core.nth.call(null,vec__32407_32583,(1),null);
encode_cols.call(null,infos_32585,source_idx_32529,line_32577,col_32584);


var G__32586 = seq__32397_32579;
var G__32587 = chunk__32398_32580;
var G__32588 = count__32399_32581;
var G__32589 = (i__32400_32582 + (1));
seq__32397_32579 = G__32586;
chunk__32398_32580 = G__32587;
count__32399_32581 = G__32588;
i__32400_32582 = G__32589;
continue;
} else {
var temp__5720__auto___32590__$2 = cljs.core.seq.call(null,seq__32397_32579);
if(temp__5720__auto___32590__$2){
var seq__32397_32591__$1 = temp__5720__auto___32590__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32397_32591__$1)){
var c__4550__auto___32592 = cljs.core.chunk_first.call(null,seq__32397_32591__$1);
var G__32593 = cljs.core.chunk_rest.call(null,seq__32397_32591__$1);
var G__32594 = c__4550__auto___32592;
var G__32595 = cljs.core.count.call(null,c__4550__auto___32592);
var G__32596 = (0);
seq__32397_32579 = G__32593;
chunk__32398_32580 = G__32594;
count__32399_32581 = G__32595;
i__32400_32582 = G__32596;
continue;
} else {
var vec__32410_32597 = cljs.core.first.call(null,seq__32397_32591__$1);
var col_32598 = cljs.core.nth.call(null,vec__32410_32597,(0),null);
var infos_32599 = cljs.core.nth.call(null,vec__32410_32597,(1),null);
encode_cols.call(null,infos_32599,source_idx_32529,line_32577,col_32598);


var G__32600 = cljs.core.next.call(null,seq__32397_32591__$1);
var G__32601 = null;
var G__32602 = (0);
var G__32603 = (0);
seq__32397_32579 = G__32600;
chunk__32398_32580 = G__32601;
count__32399_32581 = G__32602;
i__32400_32582 = G__32603;
continue;
}
} else {
}
}
break;
}


var G__32604 = cljs.core.next.call(null,seq__32333_32570__$1);
var G__32605 = null;
var G__32606 = (0);
var G__32607 = (0);
seq__32333_32533 = G__32604;
chunk__32334_32534 = G__32605;
count__32335_32535 = G__32606;
i__32336_32536 = G__32607;
continue;
}
} else {
}
}
break;
}


var G__32608 = cljs.core.next.call(null,seq__32065_32522__$1);
var G__32609 = null;
var G__32610 = (0);
var G__32611 = (0);
seq__32065_32433 = G__32608;
chunk__32066_32434 = G__32609;
count__32067_32435 = G__32610;
i__32068_32436 = G__32611;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__32413 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__32058_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32058_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__32059_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__32059_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__32060_SHARP_){
return clojure.string.join.call(null,",",p1__32060_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__32414 = G__32413;
goog.object.set(G__32414,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__32414;
} else {
return G__32413;
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
var vec__32612 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__32612,(0),null);
var col_map = cljs.core.nth.call(null,vec__32612,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__32615 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__32615,(0),null);
var infos = cljs.core.nth.call(null,vec__32615,(1),null);
var G__32621 = cljs.core.next.call(null,col_map_seq);
var G__32622 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__32615,col,infos,vec__32612,line,col_map){
return (function (v,p__32618){
var map__32619 = p__32618;
var map__32619__$1 = (((((!((map__32619 == null))))?(((((map__32619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32619):map__32619);
var gline = cljs.core.get.call(null,map__32619__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__32619__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__32615,col,infos,vec__32612,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__32621;
new_cols = G__32622;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__32623 = cljs.core.next.call(null,line_map_seq);
var G__32624 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__32623;
new_lines = G__32624;
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
var seq__32625_32897 = cljs.core.seq.call(null,reverse_map);
var chunk__32626_32898 = null;
var count__32627_32899 = (0);
var i__32628_32900 = (0);
while(true){
if((i__32628_32900 < count__32627_32899)){
var vec__32763_32901 = cljs.core._nth.call(null,chunk__32626_32898,i__32628_32900);
var line_32902 = cljs.core.nth.call(null,vec__32763_32901,(0),null);
var columns_32903 = cljs.core.nth.call(null,vec__32763_32901,(1),null);
var seq__32766_32904 = cljs.core.seq.call(null,columns_32903);
var chunk__32767_32905 = null;
var count__32768_32906 = (0);
var i__32769_32907 = (0);
while(true){
if((i__32769_32907 < count__32768_32906)){
var vec__32800_32908 = cljs.core._nth.call(null,chunk__32767_32905,i__32769_32907);
var column_32909 = cljs.core.nth.call(null,vec__32800_32908,(0),null);
var column_info_32910 = cljs.core.nth.call(null,vec__32800_32908,(1),null);
var seq__32803_32911 = cljs.core.seq.call(null,column_info_32910);
var chunk__32804_32912 = null;
var count__32805_32913 = (0);
var i__32806_32914 = (0);
while(true){
if((i__32806_32914 < count__32805_32913)){
var map__32811_32915 = cljs.core._nth.call(null,chunk__32804_32912,i__32806_32914);
var map__32811_32916__$1 = (((((!((map__32811_32915 == null))))?(((((map__32811_32915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32811_32915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32811_32915):map__32811_32915);
var gline_32917 = cljs.core.get.call(null,map__32811_32916__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32918 = cljs.core.get.call(null,map__32811_32916__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32919 = cljs.core.get.call(null,map__32811_32916__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32917], null),cljs.core.fnil.call(null,((function (seq__32803_32911,chunk__32804_32912,count__32805_32913,i__32806_32914,seq__32766_32904,chunk__32767_32905,count__32768_32906,i__32769_32907,seq__32625_32897,chunk__32626_32898,count__32627_32899,i__32628_32900,map__32811_32915,map__32811_32916__$1,gline_32917,gcol_32918,name_32919,vec__32800_32908,column_32909,column_info_32910,vec__32763_32901,line_32902,columns_32903,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32918], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32902,new cljs.core.Keyword(null,"col","col",-1959363084),column_32909,new cljs.core.Keyword(null,"name","name",1843675177),name_32919], null));
});})(seq__32803_32911,chunk__32804_32912,count__32805_32913,i__32806_32914,seq__32766_32904,chunk__32767_32905,count__32768_32906,i__32769_32907,seq__32625_32897,chunk__32626_32898,count__32627_32899,i__32628_32900,map__32811_32915,map__32811_32916__$1,gline_32917,gcol_32918,name_32919,vec__32800_32908,column_32909,column_info_32910,vec__32763_32901,line_32902,columns_32903,inverted))
,cljs.core.sorted_map.call(null)));


var G__32920 = seq__32803_32911;
var G__32921 = chunk__32804_32912;
var G__32922 = count__32805_32913;
var G__32923 = (i__32806_32914 + (1));
seq__32803_32911 = G__32920;
chunk__32804_32912 = G__32921;
count__32805_32913 = G__32922;
i__32806_32914 = G__32923;
continue;
} else {
var temp__5720__auto___32924 = cljs.core.seq.call(null,seq__32803_32911);
if(temp__5720__auto___32924){
var seq__32803_32925__$1 = temp__5720__auto___32924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32803_32925__$1)){
var c__4550__auto___32926 = cljs.core.chunk_first.call(null,seq__32803_32925__$1);
var G__32927 = cljs.core.chunk_rest.call(null,seq__32803_32925__$1);
var G__32928 = c__4550__auto___32926;
var G__32929 = cljs.core.count.call(null,c__4550__auto___32926);
var G__32930 = (0);
seq__32803_32911 = G__32927;
chunk__32804_32912 = G__32928;
count__32805_32913 = G__32929;
i__32806_32914 = G__32930;
continue;
} else {
var map__32813_32931 = cljs.core.first.call(null,seq__32803_32925__$1);
var map__32813_32932__$1 = (((((!((map__32813_32931 == null))))?(((((map__32813_32931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32813_32931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32813_32931):map__32813_32931);
var gline_32933 = cljs.core.get.call(null,map__32813_32932__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32934 = cljs.core.get.call(null,map__32813_32932__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32935 = cljs.core.get.call(null,map__32813_32932__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32933], null),cljs.core.fnil.call(null,((function (seq__32803_32911,chunk__32804_32912,count__32805_32913,i__32806_32914,seq__32766_32904,chunk__32767_32905,count__32768_32906,i__32769_32907,seq__32625_32897,chunk__32626_32898,count__32627_32899,i__32628_32900,map__32813_32931,map__32813_32932__$1,gline_32933,gcol_32934,name_32935,seq__32803_32925__$1,temp__5720__auto___32924,vec__32800_32908,column_32909,column_info_32910,vec__32763_32901,line_32902,columns_32903,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32934], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32902,new cljs.core.Keyword(null,"col","col",-1959363084),column_32909,new cljs.core.Keyword(null,"name","name",1843675177),name_32935], null));
});})(seq__32803_32911,chunk__32804_32912,count__32805_32913,i__32806_32914,seq__32766_32904,chunk__32767_32905,count__32768_32906,i__32769_32907,seq__32625_32897,chunk__32626_32898,count__32627_32899,i__32628_32900,map__32813_32931,map__32813_32932__$1,gline_32933,gcol_32934,name_32935,seq__32803_32925__$1,temp__5720__auto___32924,vec__32800_32908,column_32909,column_info_32910,vec__32763_32901,line_32902,columns_32903,inverted))
,cljs.core.sorted_map.call(null)));


var G__32936 = cljs.core.next.call(null,seq__32803_32925__$1);
var G__32937 = null;
var G__32938 = (0);
var G__32939 = (0);
seq__32803_32911 = G__32936;
chunk__32804_32912 = G__32937;
count__32805_32913 = G__32938;
i__32806_32914 = G__32939;
continue;
}
} else {
}
}
break;
}


var G__32940 = seq__32766_32904;
var G__32941 = chunk__32767_32905;
var G__32942 = count__32768_32906;
var G__32943 = (i__32769_32907 + (1));
seq__32766_32904 = G__32940;
chunk__32767_32905 = G__32941;
count__32768_32906 = G__32942;
i__32769_32907 = G__32943;
continue;
} else {
var temp__5720__auto___32944 = cljs.core.seq.call(null,seq__32766_32904);
if(temp__5720__auto___32944){
var seq__32766_32945__$1 = temp__5720__auto___32944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32766_32945__$1)){
var c__4550__auto___32946 = cljs.core.chunk_first.call(null,seq__32766_32945__$1);
var G__32947 = cljs.core.chunk_rest.call(null,seq__32766_32945__$1);
var G__32948 = c__4550__auto___32946;
var G__32949 = cljs.core.count.call(null,c__4550__auto___32946);
var G__32950 = (0);
seq__32766_32904 = G__32947;
chunk__32767_32905 = G__32948;
count__32768_32906 = G__32949;
i__32769_32907 = G__32950;
continue;
} else {
var vec__32815_32951 = cljs.core.first.call(null,seq__32766_32945__$1);
var column_32952 = cljs.core.nth.call(null,vec__32815_32951,(0),null);
var column_info_32953 = cljs.core.nth.call(null,vec__32815_32951,(1),null);
var seq__32818_32954 = cljs.core.seq.call(null,column_info_32953);
var chunk__32819_32955 = null;
var count__32820_32956 = (0);
var i__32821_32957 = (0);
while(true){
if((i__32821_32957 < count__32820_32956)){
var map__32826_32958 = cljs.core._nth.call(null,chunk__32819_32955,i__32821_32957);
var map__32826_32959__$1 = (((((!((map__32826_32958 == null))))?(((((map__32826_32958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32826_32958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32826_32958):map__32826_32958);
var gline_32960 = cljs.core.get.call(null,map__32826_32959__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32961 = cljs.core.get.call(null,map__32826_32959__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32962 = cljs.core.get.call(null,map__32826_32959__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32960], null),cljs.core.fnil.call(null,((function (seq__32818_32954,chunk__32819_32955,count__32820_32956,i__32821_32957,seq__32766_32904,chunk__32767_32905,count__32768_32906,i__32769_32907,seq__32625_32897,chunk__32626_32898,count__32627_32899,i__32628_32900,map__32826_32958,map__32826_32959__$1,gline_32960,gcol_32961,name_32962,vec__32815_32951,column_32952,column_info_32953,seq__32766_32945__$1,temp__5720__auto___32944,vec__32763_32901,line_32902,columns_32903,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32961], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32902,new cljs.core.Keyword(null,"col","col",-1959363084),column_32952,new cljs.core.Keyword(null,"name","name",1843675177),name_32962], null));
});})(seq__32818_32954,chunk__32819_32955,count__32820_32956,i__32821_32957,seq__32766_32904,chunk__32767_32905,count__32768_32906,i__32769_32907,seq__32625_32897,chunk__32626_32898,count__32627_32899,i__32628_32900,map__32826_32958,map__32826_32959__$1,gline_32960,gcol_32961,name_32962,vec__32815_32951,column_32952,column_info_32953,seq__32766_32945__$1,temp__5720__auto___32944,vec__32763_32901,line_32902,columns_32903,inverted))
,cljs.core.sorted_map.call(null)));


var G__32963 = seq__32818_32954;
var G__32964 = chunk__32819_32955;
var G__32965 = count__32820_32956;
var G__32966 = (i__32821_32957 + (1));
seq__32818_32954 = G__32963;
chunk__32819_32955 = G__32964;
count__32820_32956 = G__32965;
i__32821_32957 = G__32966;
continue;
} else {
var temp__5720__auto___32967__$1 = cljs.core.seq.call(null,seq__32818_32954);
if(temp__5720__auto___32967__$1){
var seq__32818_32968__$1 = temp__5720__auto___32967__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32818_32968__$1)){
var c__4550__auto___32969 = cljs.core.chunk_first.call(null,seq__32818_32968__$1);
var G__32970 = cljs.core.chunk_rest.call(null,seq__32818_32968__$1);
var G__32971 = c__4550__auto___32969;
var G__32972 = cljs.core.count.call(null,c__4550__auto___32969);
var G__32973 = (0);
seq__32818_32954 = G__32970;
chunk__32819_32955 = G__32971;
count__32820_32956 = G__32972;
i__32821_32957 = G__32973;
continue;
} else {
var map__32828_32974 = cljs.core.first.call(null,seq__32818_32968__$1);
var map__32828_32975__$1 = (((((!((map__32828_32974 == null))))?(((((map__32828_32974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32828_32974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32828_32974):map__32828_32974);
var gline_32976 = cljs.core.get.call(null,map__32828_32975__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32977 = cljs.core.get.call(null,map__32828_32975__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32978 = cljs.core.get.call(null,map__32828_32975__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32976], null),cljs.core.fnil.call(null,((function (seq__32818_32954,chunk__32819_32955,count__32820_32956,i__32821_32957,seq__32766_32904,chunk__32767_32905,count__32768_32906,i__32769_32907,seq__32625_32897,chunk__32626_32898,count__32627_32899,i__32628_32900,map__32828_32974,map__32828_32975__$1,gline_32976,gcol_32977,name_32978,seq__32818_32968__$1,temp__5720__auto___32967__$1,vec__32815_32951,column_32952,column_info_32953,seq__32766_32945__$1,temp__5720__auto___32944,vec__32763_32901,line_32902,columns_32903,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32977], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32902,new cljs.core.Keyword(null,"col","col",-1959363084),column_32952,new cljs.core.Keyword(null,"name","name",1843675177),name_32978], null));
});})(seq__32818_32954,chunk__32819_32955,count__32820_32956,i__32821_32957,seq__32766_32904,chunk__32767_32905,count__32768_32906,i__32769_32907,seq__32625_32897,chunk__32626_32898,count__32627_32899,i__32628_32900,map__32828_32974,map__32828_32975__$1,gline_32976,gcol_32977,name_32978,seq__32818_32968__$1,temp__5720__auto___32967__$1,vec__32815_32951,column_32952,column_info_32953,seq__32766_32945__$1,temp__5720__auto___32944,vec__32763_32901,line_32902,columns_32903,inverted))
,cljs.core.sorted_map.call(null)));


var G__32979 = cljs.core.next.call(null,seq__32818_32968__$1);
var G__32980 = null;
var G__32981 = (0);
var G__32982 = (0);
seq__32818_32954 = G__32979;
chunk__32819_32955 = G__32980;
count__32820_32956 = G__32981;
i__32821_32957 = G__32982;
continue;
}
} else {
}
}
break;
}


var G__32983 = cljs.core.next.call(null,seq__32766_32945__$1);
var G__32984 = null;
var G__32985 = (0);
var G__32986 = (0);
seq__32766_32904 = G__32983;
chunk__32767_32905 = G__32984;
count__32768_32906 = G__32985;
i__32769_32907 = G__32986;
continue;
}
} else {
}
}
break;
}


var G__32987 = seq__32625_32897;
var G__32988 = chunk__32626_32898;
var G__32989 = count__32627_32899;
var G__32990 = (i__32628_32900 + (1));
seq__32625_32897 = G__32987;
chunk__32626_32898 = G__32988;
count__32627_32899 = G__32989;
i__32628_32900 = G__32990;
continue;
} else {
var temp__5720__auto___32991 = cljs.core.seq.call(null,seq__32625_32897);
if(temp__5720__auto___32991){
var seq__32625_32992__$1 = temp__5720__auto___32991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32625_32992__$1)){
var c__4550__auto___32993 = cljs.core.chunk_first.call(null,seq__32625_32992__$1);
var G__32994 = cljs.core.chunk_rest.call(null,seq__32625_32992__$1);
var G__32995 = c__4550__auto___32993;
var G__32996 = cljs.core.count.call(null,c__4550__auto___32993);
var G__32997 = (0);
seq__32625_32897 = G__32994;
chunk__32626_32898 = G__32995;
count__32627_32899 = G__32996;
i__32628_32900 = G__32997;
continue;
} else {
var vec__32830_32998 = cljs.core.first.call(null,seq__32625_32992__$1);
var line_32999 = cljs.core.nth.call(null,vec__32830_32998,(0),null);
var columns_33000 = cljs.core.nth.call(null,vec__32830_32998,(1),null);
var seq__32833_33001 = cljs.core.seq.call(null,columns_33000);
var chunk__32834_33002 = null;
var count__32835_33003 = (0);
var i__32836_33004 = (0);
while(true){
if((i__32836_33004 < count__32835_33003)){
var vec__32867_33005 = cljs.core._nth.call(null,chunk__32834_33002,i__32836_33004);
var column_33006 = cljs.core.nth.call(null,vec__32867_33005,(0),null);
var column_info_33007 = cljs.core.nth.call(null,vec__32867_33005,(1),null);
var seq__32870_33008 = cljs.core.seq.call(null,column_info_33007);
var chunk__32871_33009 = null;
var count__32872_33010 = (0);
var i__32873_33011 = (0);
while(true){
if((i__32873_33011 < count__32872_33010)){
var map__32878_33012 = cljs.core._nth.call(null,chunk__32871_33009,i__32873_33011);
var map__32878_33013__$1 = (((((!((map__32878_33012 == null))))?(((((map__32878_33012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32878_33012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32878_33012):map__32878_33012);
var gline_33014 = cljs.core.get.call(null,map__32878_33013__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33015 = cljs.core.get.call(null,map__32878_33013__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33016 = cljs.core.get.call(null,map__32878_33013__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33014], null),cljs.core.fnil.call(null,((function (seq__32870_33008,chunk__32871_33009,count__32872_33010,i__32873_33011,seq__32833_33001,chunk__32834_33002,count__32835_33003,i__32836_33004,seq__32625_32897,chunk__32626_32898,count__32627_32899,i__32628_32900,map__32878_33012,map__32878_33013__$1,gline_33014,gcol_33015,name_33016,vec__32867_33005,column_33006,column_info_33007,vec__32830_32998,line_32999,columns_33000,seq__32625_32992__$1,temp__5720__auto___32991,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33015], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32999,new cljs.core.Keyword(null,"col","col",-1959363084),column_33006,new cljs.core.Keyword(null,"name","name",1843675177),name_33016], null));
});})(seq__32870_33008,chunk__32871_33009,count__32872_33010,i__32873_33011,seq__32833_33001,chunk__32834_33002,count__32835_33003,i__32836_33004,seq__32625_32897,chunk__32626_32898,count__32627_32899,i__32628_32900,map__32878_33012,map__32878_33013__$1,gline_33014,gcol_33015,name_33016,vec__32867_33005,column_33006,column_info_33007,vec__32830_32998,line_32999,columns_33000,seq__32625_32992__$1,temp__5720__auto___32991,inverted))
,cljs.core.sorted_map.call(null)));


var G__33017 = seq__32870_33008;
var G__33018 = chunk__32871_33009;
var G__33019 = count__32872_33010;
var G__33020 = (i__32873_33011 + (1));
seq__32870_33008 = G__33017;
chunk__32871_33009 = G__33018;
count__32872_33010 = G__33019;
i__32873_33011 = G__33020;
continue;
} else {
var temp__5720__auto___33021__$1 = cljs.core.seq.call(null,seq__32870_33008);
if(temp__5720__auto___33021__$1){
var seq__32870_33022__$1 = temp__5720__auto___33021__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32870_33022__$1)){
var c__4550__auto___33023 = cljs.core.chunk_first.call(null,seq__32870_33022__$1);
var G__33024 = cljs.core.chunk_rest.call(null,seq__32870_33022__$1);
var G__33025 = c__4550__auto___33023;
var G__33026 = cljs.core.count.call(null,c__4550__auto___33023);
var G__33027 = (0);
seq__32870_33008 = G__33024;
chunk__32871_33009 = G__33025;
count__32872_33010 = G__33026;
i__32873_33011 = G__33027;
continue;
} else {
var map__32880_33028 = cljs.core.first.call(null,seq__32870_33022__$1);
var map__32880_33029__$1 = (((((!((map__32880_33028 == null))))?(((((map__32880_33028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32880_33028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32880_33028):map__32880_33028);
var gline_33030 = cljs.core.get.call(null,map__32880_33029__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33031 = cljs.core.get.call(null,map__32880_33029__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33032 = cljs.core.get.call(null,map__32880_33029__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33030], null),cljs.core.fnil.call(null,((function (seq__32870_33008,chunk__32871_33009,count__32872_33010,i__32873_33011,seq__32833_33001,chunk__32834_33002,count__32835_33003,i__32836_33004,seq__32625_32897,chunk__32626_32898,count__32627_32899,i__32628_32900,map__32880_33028,map__32880_33029__$1,gline_33030,gcol_33031,name_33032,seq__32870_33022__$1,temp__5720__auto___33021__$1,vec__32867_33005,column_33006,column_info_33007,vec__32830_32998,line_32999,columns_33000,seq__32625_32992__$1,temp__5720__auto___32991,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33031], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32999,new cljs.core.Keyword(null,"col","col",-1959363084),column_33006,new cljs.core.Keyword(null,"name","name",1843675177),name_33032], null));
});})(seq__32870_33008,chunk__32871_33009,count__32872_33010,i__32873_33011,seq__32833_33001,chunk__32834_33002,count__32835_33003,i__32836_33004,seq__32625_32897,chunk__32626_32898,count__32627_32899,i__32628_32900,map__32880_33028,map__32880_33029__$1,gline_33030,gcol_33031,name_33032,seq__32870_33022__$1,temp__5720__auto___33021__$1,vec__32867_33005,column_33006,column_info_33007,vec__32830_32998,line_32999,columns_33000,seq__32625_32992__$1,temp__5720__auto___32991,inverted))
,cljs.core.sorted_map.call(null)));


var G__33033 = cljs.core.next.call(null,seq__32870_33022__$1);
var G__33034 = null;
var G__33035 = (0);
var G__33036 = (0);
seq__32870_33008 = G__33033;
chunk__32871_33009 = G__33034;
count__32872_33010 = G__33035;
i__32873_33011 = G__33036;
continue;
}
} else {
}
}
break;
}


var G__33037 = seq__32833_33001;
var G__33038 = chunk__32834_33002;
var G__33039 = count__32835_33003;
var G__33040 = (i__32836_33004 + (1));
seq__32833_33001 = G__33037;
chunk__32834_33002 = G__33038;
count__32835_33003 = G__33039;
i__32836_33004 = G__33040;
continue;
} else {
var temp__5720__auto___33041__$1 = cljs.core.seq.call(null,seq__32833_33001);
if(temp__5720__auto___33041__$1){
var seq__32833_33042__$1 = temp__5720__auto___33041__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32833_33042__$1)){
var c__4550__auto___33043 = cljs.core.chunk_first.call(null,seq__32833_33042__$1);
var G__33044 = cljs.core.chunk_rest.call(null,seq__32833_33042__$1);
var G__33045 = c__4550__auto___33043;
var G__33046 = cljs.core.count.call(null,c__4550__auto___33043);
var G__33047 = (0);
seq__32833_33001 = G__33044;
chunk__32834_33002 = G__33045;
count__32835_33003 = G__33046;
i__32836_33004 = G__33047;
continue;
} else {
var vec__32882_33048 = cljs.core.first.call(null,seq__32833_33042__$1);
var column_33049 = cljs.core.nth.call(null,vec__32882_33048,(0),null);
var column_info_33050 = cljs.core.nth.call(null,vec__32882_33048,(1),null);
var seq__32885_33051 = cljs.core.seq.call(null,column_info_33050);
var chunk__32886_33052 = null;
var count__32887_33053 = (0);
var i__32888_33054 = (0);
while(true){
if((i__32888_33054 < count__32887_33053)){
var map__32893_33055 = cljs.core._nth.call(null,chunk__32886_33052,i__32888_33054);
var map__32893_33056__$1 = (((((!((map__32893_33055 == null))))?(((((map__32893_33055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32893_33055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32893_33055):map__32893_33055);
var gline_33057 = cljs.core.get.call(null,map__32893_33056__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33058 = cljs.core.get.call(null,map__32893_33056__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33059 = cljs.core.get.call(null,map__32893_33056__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33057], null),cljs.core.fnil.call(null,((function (seq__32885_33051,chunk__32886_33052,count__32887_33053,i__32888_33054,seq__32833_33001,chunk__32834_33002,count__32835_33003,i__32836_33004,seq__32625_32897,chunk__32626_32898,count__32627_32899,i__32628_32900,map__32893_33055,map__32893_33056__$1,gline_33057,gcol_33058,name_33059,vec__32882_33048,column_33049,column_info_33050,seq__32833_33042__$1,temp__5720__auto___33041__$1,vec__32830_32998,line_32999,columns_33000,seq__32625_32992__$1,temp__5720__auto___32991,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33058], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32999,new cljs.core.Keyword(null,"col","col",-1959363084),column_33049,new cljs.core.Keyword(null,"name","name",1843675177),name_33059], null));
});})(seq__32885_33051,chunk__32886_33052,count__32887_33053,i__32888_33054,seq__32833_33001,chunk__32834_33002,count__32835_33003,i__32836_33004,seq__32625_32897,chunk__32626_32898,count__32627_32899,i__32628_32900,map__32893_33055,map__32893_33056__$1,gline_33057,gcol_33058,name_33059,vec__32882_33048,column_33049,column_info_33050,seq__32833_33042__$1,temp__5720__auto___33041__$1,vec__32830_32998,line_32999,columns_33000,seq__32625_32992__$1,temp__5720__auto___32991,inverted))
,cljs.core.sorted_map.call(null)));


var G__33060 = seq__32885_33051;
var G__33061 = chunk__32886_33052;
var G__33062 = count__32887_33053;
var G__33063 = (i__32888_33054 + (1));
seq__32885_33051 = G__33060;
chunk__32886_33052 = G__33061;
count__32887_33053 = G__33062;
i__32888_33054 = G__33063;
continue;
} else {
var temp__5720__auto___33064__$2 = cljs.core.seq.call(null,seq__32885_33051);
if(temp__5720__auto___33064__$2){
var seq__32885_33065__$1 = temp__5720__auto___33064__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32885_33065__$1)){
var c__4550__auto___33066 = cljs.core.chunk_first.call(null,seq__32885_33065__$1);
var G__33067 = cljs.core.chunk_rest.call(null,seq__32885_33065__$1);
var G__33068 = c__4550__auto___33066;
var G__33069 = cljs.core.count.call(null,c__4550__auto___33066);
var G__33070 = (0);
seq__32885_33051 = G__33067;
chunk__32886_33052 = G__33068;
count__32887_33053 = G__33069;
i__32888_33054 = G__33070;
continue;
} else {
var map__32895_33071 = cljs.core.first.call(null,seq__32885_33065__$1);
var map__32895_33072__$1 = (((((!((map__32895_33071 == null))))?(((((map__32895_33071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32895_33071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32895_33071):map__32895_33071);
var gline_33073 = cljs.core.get.call(null,map__32895_33072__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33074 = cljs.core.get.call(null,map__32895_33072__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33075 = cljs.core.get.call(null,map__32895_33072__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33073], null),cljs.core.fnil.call(null,((function (seq__32885_33051,chunk__32886_33052,count__32887_33053,i__32888_33054,seq__32833_33001,chunk__32834_33002,count__32835_33003,i__32836_33004,seq__32625_32897,chunk__32626_32898,count__32627_32899,i__32628_32900,map__32895_33071,map__32895_33072__$1,gline_33073,gcol_33074,name_33075,seq__32885_33065__$1,temp__5720__auto___33064__$2,vec__32882_33048,column_33049,column_info_33050,seq__32833_33042__$1,temp__5720__auto___33041__$1,vec__32830_32998,line_32999,columns_33000,seq__32625_32992__$1,temp__5720__auto___32991,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33074], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32999,new cljs.core.Keyword(null,"col","col",-1959363084),column_33049,new cljs.core.Keyword(null,"name","name",1843675177),name_33075], null));
});})(seq__32885_33051,chunk__32886_33052,count__32887_33053,i__32888_33054,seq__32833_33001,chunk__32834_33002,count__32835_33003,i__32836_33004,seq__32625_32897,chunk__32626_32898,count__32627_32899,i__32628_32900,map__32895_33071,map__32895_33072__$1,gline_33073,gcol_33074,name_33075,seq__32885_33065__$1,temp__5720__auto___33064__$2,vec__32882_33048,column_33049,column_info_33050,seq__32833_33042__$1,temp__5720__auto___33041__$1,vec__32830_32998,line_32999,columns_33000,seq__32625_32992__$1,temp__5720__auto___32991,inverted))
,cljs.core.sorted_map.call(null)));


var G__33076 = cljs.core.next.call(null,seq__32885_33065__$1);
var G__33077 = null;
var G__33078 = (0);
var G__33079 = (0);
seq__32885_33051 = G__33076;
chunk__32886_33052 = G__33077;
count__32887_33053 = G__33078;
i__32888_33054 = G__33079;
continue;
}
} else {
}
}
break;
}


var G__33080 = cljs.core.next.call(null,seq__32833_33042__$1);
var G__33081 = null;
var G__33082 = (0);
var G__33083 = (0);
seq__32833_33001 = G__33080;
chunk__32834_33002 = G__33081;
count__32835_33003 = G__33082;
i__32836_33004 = G__33083;
continue;
}
} else {
}
}
break;
}


var G__33084 = cljs.core.next.call(null,seq__32625_32992__$1);
var G__33085 = null;
var G__33086 = (0);
var G__33087 = (0);
seq__32625_32897 = G__33084;
chunk__32626_32898 = G__33085;
count__32627_32899 = G__33086;
i__32628_32900 = G__33087;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1601259679613
