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
return cljs.core.reduce.call(null,(function (m,p__28336){
var vec__28337 = p__28336;
var i = cljs.core.nth.call(null,vec__28337,(0),null);
var v = cljs.core.nth.call(null,vec__28337,(1),null);
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
var vec__28340 = seg;
var gcol = cljs.core.nth.call(null,vec__28340,(0),null);
var source = cljs.core.nth.call(null,vec__28340,(1),null);
var line = cljs.core.nth.call(null,vec__28340,(2),null);
var col = cljs.core.nth.call(null,vec__28340,(3),null);
var name = cljs.core.nth.call(null,vec__28340,(4),null);
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
var vec__28343 = seg;
var gcol = cljs.core.nth.call(null,vec__28343,(0),null);
var source = cljs.core.nth.call(null,vec__28343,(1),null);
var line = cljs.core.nth.call(null,vec__28343,(2),null);
var col = cljs.core.nth.call(null,vec__28343,(3),null);
var name = cljs.core.nth.call(null,vec__28343,(4),null);
var vec__28346 = relseg;
var rgcol = cljs.core.nth.call(null,vec__28346,(0),null);
var rsource = cljs.core.nth.call(null,vec__28346,(1),null);
var rline = cljs.core.nth.call(null,vec__28346,(2),null);
var rcol = cljs.core.nth.call(null,vec__28346,(3),null);
var rname = cljs.core.nth.call(null,vec__28346,(4),null);
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
var map__28349 = segmap;
var map__28349__$1 = (((((!((map__28349 == null))))?(((((map__28349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28349):map__28349);
var gcol = cljs.core.get.call(null,map__28349__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__28349__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__28349__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__28349__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__28349__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__28349,map__28349__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__28349,map__28349__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__28349,map__28349__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__28349,map__28349__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__28349,map__28349__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__28349,map__28349__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__28352 = arguments.length;
switch (G__28352) {
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
var vec__28356 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__28360 = cljs.core.next.call(null,segs__$1);
var G__28361 = nrelseg;
var G__28362 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__28360;
relseg__$1 = G__28361;
result__$1 = G__28362;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__28356,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__28356,(1),null);
var G__28363 = (gline + (1));
var G__28364 = cljs.core.next.call(null,lines__$1);
var G__28365 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__28366 = result__$1;
gline = G__28363;
lines__$1 = G__28364;
relseg = G__28365;
result = G__28366;
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
var map__28368 = segmap;
var map__28368__$1 = (((((!((map__28368 == null))))?(((((map__28368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28368):map__28368);
var gcol = cljs.core.get.call(null,map__28368__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__28368__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__28368__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__28368__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__28368__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__28368,map__28368__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__28368,map__28368__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__28367_SHARP_){
return cljs.core.conj.call(null,p1__28367_SHARP_,d__$1);
});})(map__28368,map__28368__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__28368,map__28368__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__28371 = arguments.length;
switch (G__28371) {
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
var vec__28375 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__28379 = cljs.core.next.call(null,segs__$1);
var G__28380 = nrelseg;
var G__28381 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__28379;
relseg__$1 = G__28380;
result__$1 = G__28381;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__28375,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__28375,(1),null);
var G__28382 = (gline + (1));
var G__28383 = cljs.core.next.call(null,lines__$1);
var G__28384 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__28385 = result__$1;
gline = G__28382;
lines__$1 = G__28383;
relseg = G__28384;
result = G__28385;
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
return (function (p__28386){
var vec__28387 = p__28386;
var _ = cljs.core.nth.call(null,vec__28387,(0),null);
var source = cljs.core.nth.call(null,vec__28387,(1),null);
var line = cljs.core.nth.call(null,vec__28387,(2),null);
var col = cljs.core.nth.call(null,vec__28387,(3),null);
var name = cljs.core.nth.call(null,vec__28387,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__28390){
var vec__28391 = p__28390;
var gcol = cljs.core.nth.call(null,vec__28391,(0),null);
var sidx = cljs.core.nth.call(null,vec__28391,(1),null);
var line = cljs.core.nth.call(null,vec__28391,(2),null);
var col = cljs.core.nth.call(null,vec__28391,(3),null);
var name = cljs.core.nth.call(null,vec__28391,(4),null);
var seg = vec__28391;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__28391,gcol,sidx,line,col,name,seg,relseg){
return (function (p__28394){
var vec__28395 = p__28394;
var _ = cljs.core.nth.call(null,vec__28395,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28395,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__28395,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__28395,(3),null);
var lname = cljs.core.nth.call(null,vec__28395,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__28391,gcol,sidx,line,col,name,seg,relseg))
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
var seq__28401 = cljs.core.seq.call(null,infos);
var chunk__28402 = null;
var count__28403 = (0);
var i__28404 = (0);
while(true){
if((i__28404 < count__28403)){
var info = cljs.core._nth.call(null,chunk__28402,i__28404);
var segv_28755 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_28756 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28757 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_28756 > (lc_28757 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__28401,chunk__28402,count__28403,i__28404,segv_28755,gline_28756,lc_28757,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_28756 - (lc_28757 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28755], null));
});})(seq__28401,chunk__28402,count__28403,i__28404,segv_28755,gline_28756,lc_28757,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__28401,chunk__28402,count__28403,i__28404,segv_28755,gline_28756,lc_28757,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28756], null),cljs.core.conj,segv_28755);
});})(seq__28401,chunk__28402,count__28403,i__28404,segv_28755,gline_28756,lc_28757,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__28758 = seq__28401;
var G__28759 = chunk__28402;
var G__28760 = count__28403;
var G__28761 = (i__28404 + (1));
seq__28401 = G__28758;
chunk__28402 = G__28759;
count__28403 = G__28760;
i__28404 = G__28761;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28401);
if(temp__5720__auto__){
var seq__28401__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28401__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28401__$1);
var G__28762 = cljs.core.chunk_rest.call(null,seq__28401__$1);
var G__28763 = c__4550__auto__;
var G__28764 = cljs.core.count.call(null,c__4550__auto__);
var G__28765 = (0);
seq__28401 = G__28762;
chunk__28402 = G__28763;
count__28403 = G__28764;
i__28404 = G__28765;
continue;
} else {
var info = cljs.core.first.call(null,seq__28401__$1);
var segv_28766 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_28767 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28768 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_28767 > (lc_28768 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__28401,chunk__28402,count__28403,i__28404,segv_28766,gline_28767,lc_28768,info,seq__28401__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_28767 - (lc_28768 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28766], null));
});})(seq__28401,chunk__28402,count__28403,i__28404,segv_28766,gline_28767,lc_28768,info,seq__28401__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__28401,chunk__28402,count__28403,i__28404,segv_28766,gline_28767,lc_28768,info,seq__28401__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28767], null),cljs.core.conj,segv_28766);
});})(seq__28401,chunk__28402,count__28403,i__28404,segv_28766,gline_28767,lc_28768,info,seq__28401__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__28769 = cljs.core.next.call(null,seq__28401__$1);
var G__28770 = null;
var G__28771 = (0);
var G__28772 = (0);
seq__28401 = G__28769;
chunk__28402 = G__28770;
count__28403 = G__28771;
i__28404 = G__28772;
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
var seq__28405_28773 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__28406_28774 = null;
var count__28407_28775 = (0);
var i__28408_28776 = (0);
while(true){
if((i__28408_28776 < count__28407_28775)){
var vec__28581_28777 = cljs.core._nth.call(null,chunk__28406_28774,i__28408_28776);
var source_idx_28778 = cljs.core.nth.call(null,vec__28581_28777,(0),null);
var vec__28584_28779 = cljs.core.nth.call(null,vec__28581_28777,(1),null);
var __28780 = cljs.core.nth.call(null,vec__28584_28779,(0),null);
var lines_28781__$1 = cljs.core.nth.call(null,vec__28584_28779,(1),null);
var seq__28587_28782 = cljs.core.seq.call(null,lines_28781__$1);
var chunk__28588_28783 = null;
var count__28589_28784 = (0);
var i__28590_28785 = (0);
while(true){
if((i__28590_28785 < count__28589_28784)){
var vec__28629_28786 = cljs.core._nth.call(null,chunk__28588_28783,i__28590_28785);
var line_28787 = cljs.core.nth.call(null,vec__28629_28786,(0),null);
var cols_28788 = cljs.core.nth.call(null,vec__28629_28786,(1),null);
var seq__28632_28789 = cljs.core.seq.call(null,cols_28788);
var chunk__28633_28790 = null;
var count__28634_28791 = (0);
var i__28635_28792 = (0);
while(true){
if((i__28635_28792 < count__28634_28791)){
var vec__28642_28793 = cljs.core._nth.call(null,chunk__28633_28790,i__28635_28792);
var col_28794 = cljs.core.nth.call(null,vec__28642_28793,(0),null);
var infos_28795 = cljs.core.nth.call(null,vec__28642_28793,(1),null);
encode_cols.call(null,infos_28795,source_idx_28778,line_28787,col_28794);


var G__28796 = seq__28632_28789;
var G__28797 = chunk__28633_28790;
var G__28798 = count__28634_28791;
var G__28799 = (i__28635_28792 + (1));
seq__28632_28789 = G__28796;
chunk__28633_28790 = G__28797;
count__28634_28791 = G__28798;
i__28635_28792 = G__28799;
continue;
} else {
var temp__5720__auto___28800 = cljs.core.seq.call(null,seq__28632_28789);
if(temp__5720__auto___28800){
var seq__28632_28801__$1 = temp__5720__auto___28800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28632_28801__$1)){
var c__4550__auto___28802 = cljs.core.chunk_first.call(null,seq__28632_28801__$1);
var G__28803 = cljs.core.chunk_rest.call(null,seq__28632_28801__$1);
var G__28804 = c__4550__auto___28802;
var G__28805 = cljs.core.count.call(null,c__4550__auto___28802);
var G__28806 = (0);
seq__28632_28789 = G__28803;
chunk__28633_28790 = G__28804;
count__28634_28791 = G__28805;
i__28635_28792 = G__28806;
continue;
} else {
var vec__28645_28807 = cljs.core.first.call(null,seq__28632_28801__$1);
var col_28808 = cljs.core.nth.call(null,vec__28645_28807,(0),null);
var infos_28809 = cljs.core.nth.call(null,vec__28645_28807,(1),null);
encode_cols.call(null,infos_28809,source_idx_28778,line_28787,col_28808);


var G__28810 = cljs.core.next.call(null,seq__28632_28801__$1);
var G__28811 = null;
var G__28812 = (0);
var G__28813 = (0);
seq__28632_28789 = G__28810;
chunk__28633_28790 = G__28811;
count__28634_28791 = G__28812;
i__28635_28792 = G__28813;
continue;
}
} else {
}
}
break;
}


var G__28814 = seq__28587_28782;
var G__28815 = chunk__28588_28783;
var G__28816 = count__28589_28784;
var G__28817 = (i__28590_28785 + (1));
seq__28587_28782 = G__28814;
chunk__28588_28783 = G__28815;
count__28589_28784 = G__28816;
i__28590_28785 = G__28817;
continue;
} else {
var temp__5720__auto___28818 = cljs.core.seq.call(null,seq__28587_28782);
if(temp__5720__auto___28818){
var seq__28587_28819__$1 = temp__5720__auto___28818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28587_28819__$1)){
var c__4550__auto___28820 = cljs.core.chunk_first.call(null,seq__28587_28819__$1);
var G__28821 = cljs.core.chunk_rest.call(null,seq__28587_28819__$1);
var G__28822 = c__4550__auto___28820;
var G__28823 = cljs.core.count.call(null,c__4550__auto___28820);
var G__28824 = (0);
seq__28587_28782 = G__28821;
chunk__28588_28783 = G__28822;
count__28589_28784 = G__28823;
i__28590_28785 = G__28824;
continue;
} else {
var vec__28648_28825 = cljs.core.first.call(null,seq__28587_28819__$1);
var line_28826 = cljs.core.nth.call(null,vec__28648_28825,(0),null);
var cols_28827 = cljs.core.nth.call(null,vec__28648_28825,(1),null);
var seq__28651_28828 = cljs.core.seq.call(null,cols_28827);
var chunk__28652_28829 = null;
var count__28653_28830 = (0);
var i__28654_28831 = (0);
while(true){
if((i__28654_28831 < count__28653_28830)){
var vec__28661_28832 = cljs.core._nth.call(null,chunk__28652_28829,i__28654_28831);
var col_28833 = cljs.core.nth.call(null,vec__28661_28832,(0),null);
var infos_28834 = cljs.core.nth.call(null,vec__28661_28832,(1),null);
encode_cols.call(null,infos_28834,source_idx_28778,line_28826,col_28833);


var G__28835 = seq__28651_28828;
var G__28836 = chunk__28652_28829;
var G__28837 = count__28653_28830;
var G__28838 = (i__28654_28831 + (1));
seq__28651_28828 = G__28835;
chunk__28652_28829 = G__28836;
count__28653_28830 = G__28837;
i__28654_28831 = G__28838;
continue;
} else {
var temp__5720__auto___28839__$1 = cljs.core.seq.call(null,seq__28651_28828);
if(temp__5720__auto___28839__$1){
var seq__28651_28840__$1 = temp__5720__auto___28839__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28651_28840__$1)){
var c__4550__auto___28841 = cljs.core.chunk_first.call(null,seq__28651_28840__$1);
var G__28842 = cljs.core.chunk_rest.call(null,seq__28651_28840__$1);
var G__28843 = c__4550__auto___28841;
var G__28844 = cljs.core.count.call(null,c__4550__auto___28841);
var G__28845 = (0);
seq__28651_28828 = G__28842;
chunk__28652_28829 = G__28843;
count__28653_28830 = G__28844;
i__28654_28831 = G__28845;
continue;
} else {
var vec__28664_28846 = cljs.core.first.call(null,seq__28651_28840__$1);
var col_28847 = cljs.core.nth.call(null,vec__28664_28846,(0),null);
var infos_28848 = cljs.core.nth.call(null,vec__28664_28846,(1),null);
encode_cols.call(null,infos_28848,source_idx_28778,line_28826,col_28847);


var G__28849 = cljs.core.next.call(null,seq__28651_28840__$1);
var G__28850 = null;
var G__28851 = (0);
var G__28852 = (0);
seq__28651_28828 = G__28849;
chunk__28652_28829 = G__28850;
count__28653_28830 = G__28851;
i__28654_28831 = G__28852;
continue;
}
} else {
}
}
break;
}


var G__28853 = cljs.core.next.call(null,seq__28587_28819__$1);
var G__28854 = null;
var G__28855 = (0);
var G__28856 = (0);
seq__28587_28782 = G__28853;
chunk__28588_28783 = G__28854;
count__28589_28784 = G__28855;
i__28590_28785 = G__28856;
continue;
}
} else {
}
}
break;
}


var G__28857 = seq__28405_28773;
var G__28858 = chunk__28406_28774;
var G__28859 = count__28407_28775;
var G__28860 = (i__28408_28776 + (1));
seq__28405_28773 = G__28857;
chunk__28406_28774 = G__28858;
count__28407_28775 = G__28859;
i__28408_28776 = G__28860;
continue;
} else {
var temp__5720__auto___28861 = cljs.core.seq.call(null,seq__28405_28773);
if(temp__5720__auto___28861){
var seq__28405_28862__$1 = temp__5720__auto___28861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28405_28862__$1)){
var c__4550__auto___28863 = cljs.core.chunk_first.call(null,seq__28405_28862__$1);
var G__28864 = cljs.core.chunk_rest.call(null,seq__28405_28862__$1);
var G__28865 = c__4550__auto___28863;
var G__28866 = cljs.core.count.call(null,c__4550__auto___28863);
var G__28867 = (0);
seq__28405_28773 = G__28864;
chunk__28406_28774 = G__28865;
count__28407_28775 = G__28866;
i__28408_28776 = G__28867;
continue;
} else {
var vec__28667_28868 = cljs.core.first.call(null,seq__28405_28862__$1);
var source_idx_28869 = cljs.core.nth.call(null,vec__28667_28868,(0),null);
var vec__28670_28870 = cljs.core.nth.call(null,vec__28667_28868,(1),null);
var __28871 = cljs.core.nth.call(null,vec__28670_28870,(0),null);
var lines_28872__$1 = cljs.core.nth.call(null,vec__28670_28870,(1),null);
var seq__28673_28873 = cljs.core.seq.call(null,lines_28872__$1);
var chunk__28674_28874 = null;
var count__28675_28875 = (0);
var i__28676_28876 = (0);
while(true){
if((i__28676_28876 < count__28675_28875)){
var vec__28715_28877 = cljs.core._nth.call(null,chunk__28674_28874,i__28676_28876);
var line_28878 = cljs.core.nth.call(null,vec__28715_28877,(0),null);
var cols_28879 = cljs.core.nth.call(null,vec__28715_28877,(1),null);
var seq__28718_28880 = cljs.core.seq.call(null,cols_28879);
var chunk__28719_28881 = null;
var count__28720_28882 = (0);
var i__28721_28883 = (0);
while(true){
if((i__28721_28883 < count__28720_28882)){
var vec__28728_28884 = cljs.core._nth.call(null,chunk__28719_28881,i__28721_28883);
var col_28885 = cljs.core.nth.call(null,vec__28728_28884,(0),null);
var infos_28886 = cljs.core.nth.call(null,vec__28728_28884,(1),null);
encode_cols.call(null,infos_28886,source_idx_28869,line_28878,col_28885);


var G__28887 = seq__28718_28880;
var G__28888 = chunk__28719_28881;
var G__28889 = count__28720_28882;
var G__28890 = (i__28721_28883 + (1));
seq__28718_28880 = G__28887;
chunk__28719_28881 = G__28888;
count__28720_28882 = G__28889;
i__28721_28883 = G__28890;
continue;
} else {
var temp__5720__auto___28891__$1 = cljs.core.seq.call(null,seq__28718_28880);
if(temp__5720__auto___28891__$1){
var seq__28718_28892__$1 = temp__5720__auto___28891__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28718_28892__$1)){
var c__4550__auto___28893 = cljs.core.chunk_first.call(null,seq__28718_28892__$1);
var G__28894 = cljs.core.chunk_rest.call(null,seq__28718_28892__$1);
var G__28895 = c__4550__auto___28893;
var G__28896 = cljs.core.count.call(null,c__4550__auto___28893);
var G__28897 = (0);
seq__28718_28880 = G__28894;
chunk__28719_28881 = G__28895;
count__28720_28882 = G__28896;
i__28721_28883 = G__28897;
continue;
} else {
var vec__28731_28898 = cljs.core.first.call(null,seq__28718_28892__$1);
var col_28899 = cljs.core.nth.call(null,vec__28731_28898,(0),null);
var infos_28900 = cljs.core.nth.call(null,vec__28731_28898,(1),null);
encode_cols.call(null,infos_28900,source_idx_28869,line_28878,col_28899);


var G__28901 = cljs.core.next.call(null,seq__28718_28892__$1);
var G__28902 = null;
var G__28903 = (0);
var G__28904 = (0);
seq__28718_28880 = G__28901;
chunk__28719_28881 = G__28902;
count__28720_28882 = G__28903;
i__28721_28883 = G__28904;
continue;
}
} else {
}
}
break;
}


var G__28905 = seq__28673_28873;
var G__28906 = chunk__28674_28874;
var G__28907 = count__28675_28875;
var G__28908 = (i__28676_28876 + (1));
seq__28673_28873 = G__28905;
chunk__28674_28874 = G__28906;
count__28675_28875 = G__28907;
i__28676_28876 = G__28908;
continue;
} else {
var temp__5720__auto___28909__$1 = cljs.core.seq.call(null,seq__28673_28873);
if(temp__5720__auto___28909__$1){
var seq__28673_28910__$1 = temp__5720__auto___28909__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28673_28910__$1)){
var c__4550__auto___28911 = cljs.core.chunk_first.call(null,seq__28673_28910__$1);
var G__28912 = cljs.core.chunk_rest.call(null,seq__28673_28910__$1);
var G__28913 = c__4550__auto___28911;
var G__28914 = cljs.core.count.call(null,c__4550__auto___28911);
var G__28915 = (0);
seq__28673_28873 = G__28912;
chunk__28674_28874 = G__28913;
count__28675_28875 = G__28914;
i__28676_28876 = G__28915;
continue;
} else {
var vec__28734_28916 = cljs.core.first.call(null,seq__28673_28910__$1);
var line_28917 = cljs.core.nth.call(null,vec__28734_28916,(0),null);
var cols_28918 = cljs.core.nth.call(null,vec__28734_28916,(1),null);
var seq__28737_28919 = cljs.core.seq.call(null,cols_28918);
var chunk__28738_28920 = null;
var count__28739_28921 = (0);
var i__28740_28922 = (0);
while(true){
if((i__28740_28922 < count__28739_28921)){
var vec__28747_28923 = cljs.core._nth.call(null,chunk__28738_28920,i__28740_28922);
var col_28924 = cljs.core.nth.call(null,vec__28747_28923,(0),null);
var infos_28925 = cljs.core.nth.call(null,vec__28747_28923,(1),null);
encode_cols.call(null,infos_28925,source_idx_28869,line_28917,col_28924);


var G__28926 = seq__28737_28919;
var G__28927 = chunk__28738_28920;
var G__28928 = count__28739_28921;
var G__28929 = (i__28740_28922 + (1));
seq__28737_28919 = G__28926;
chunk__28738_28920 = G__28927;
count__28739_28921 = G__28928;
i__28740_28922 = G__28929;
continue;
} else {
var temp__5720__auto___28930__$2 = cljs.core.seq.call(null,seq__28737_28919);
if(temp__5720__auto___28930__$2){
var seq__28737_28931__$1 = temp__5720__auto___28930__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28737_28931__$1)){
var c__4550__auto___28932 = cljs.core.chunk_first.call(null,seq__28737_28931__$1);
var G__28933 = cljs.core.chunk_rest.call(null,seq__28737_28931__$1);
var G__28934 = c__4550__auto___28932;
var G__28935 = cljs.core.count.call(null,c__4550__auto___28932);
var G__28936 = (0);
seq__28737_28919 = G__28933;
chunk__28738_28920 = G__28934;
count__28739_28921 = G__28935;
i__28740_28922 = G__28936;
continue;
} else {
var vec__28750_28937 = cljs.core.first.call(null,seq__28737_28931__$1);
var col_28938 = cljs.core.nth.call(null,vec__28750_28937,(0),null);
var infos_28939 = cljs.core.nth.call(null,vec__28750_28937,(1),null);
encode_cols.call(null,infos_28939,source_idx_28869,line_28917,col_28938);


var G__28940 = cljs.core.next.call(null,seq__28737_28931__$1);
var G__28941 = null;
var G__28942 = (0);
var G__28943 = (0);
seq__28737_28919 = G__28940;
chunk__28738_28920 = G__28941;
count__28739_28921 = G__28942;
i__28740_28922 = G__28943;
continue;
}
} else {
}
}
break;
}


var G__28944 = cljs.core.next.call(null,seq__28673_28910__$1);
var G__28945 = null;
var G__28946 = (0);
var G__28947 = (0);
seq__28673_28873 = G__28944;
chunk__28674_28874 = G__28945;
count__28675_28875 = G__28946;
i__28676_28876 = G__28947;
continue;
}
} else {
}
}
break;
}


var G__28948 = cljs.core.next.call(null,seq__28405_28862__$1);
var G__28949 = null;
var G__28950 = (0);
var G__28951 = (0);
seq__28405_28773 = G__28948;
chunk__28406_28774 = G__28949;
count__28407_28775 = G__28950;
i__28408_28776 = G__28951;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__28753 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28398_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28398_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28399_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__28399_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28400_SHARP_){
return clojure.string.join.call(null,",",p1__28400_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__28754 = G__28753;
goog.object.set(G__28754,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__28754;
} else {
return G__28753;
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
var vec__28952 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__28952,(0),null);
var col_map = cljs.core.nth.call(null,vec__28952,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__28955 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__28955,(0),null);
var infos = cljs.core.nth.call(null,vec__28955,(1),null);
var G__28961 = cljs.core.next.call(null,col_map_seq);
var G__28962 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__28955,col,infos,vec__28952,line,col_map){
return (function (v,p__28958){
var map__28959 = p__28958;
var map__28959__$1 = (((((!((map__28959 == null))))?(((((map__28959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28959):map__28959);
var gline = cljs.core.get.call(null,map__28959__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__28959__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__28955,col,infos,vec__28952,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__28961;
new_cols = G__28962;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__28963 = cljs.core.next.call(null,line_map_seq);
var G__28964 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__28963;
new_lines = G__28964;
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
var seq__28965_29237 = cljs.core.seq.call(null,reverse_map);
var chunk__28966_29238 = null;
var count__28967_29239 = (0);
var i__28968_29240 = (0);
while(true){
if((i__28968_29240 < count__28967_29239)){
var vec__29103_29241 = cljs.core._nth.call(null,chunk__28966_29238,i__28968_29240);
var line_29242 = cljs.core.nth.call(null,vec__29103_29241,(0),null);
var columns_29243 = cljs.core.nth.call(null,vec__29103_29241,(1),null);
var seq__29106_29244 = cljs.core.seq.call(null,columns_29243);
var chunk__29107_29245 = null;
var count__29108_29246 = (0);
var i__29109_29247 = (0);
while(true){
if((i__29109_29247 < count__29108_29246)){
var vec__29140_29248 = cljs.core._nth.call(null,chunk__29107_29245,i__29109_29247);
var column_29249 = cljs.core.nth.call(null,vec__29140_29248,(0),null);
var column_info_29250 = cljs.core.nth.call(null,vec__29140_29248,(1),null);
var seq__29143_29251 = cljs.core.seq.call(null,column_info_29250);
var chunk__29144_29252 = null;
var count__29145_29253 = (0);
var i__29146_29254 = (0);
while(true){
if((i__29146_29254 < count__29145_29253)){
var map__29151_29255 = cljs.core._nth.call(null,chunk__29144_29252,i__29146_29254);
var map__29151_29256__$1 = (((((!((map__29151_29255 == null))))?(((((map__29151_29255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29151_29255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29151_29255):map__29151_29255);
var gline_29257 = cljs.core.get.call(null,map__29151_29256__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29258 = cljs.core.get.call(null,map__29151_29256__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29259 = cljs.core.get.call(null,map__29151_29256__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29257], null),cljs.core.fnil.call(null,((function (seq__29143_29251,chunk__29144_29252,count__29145_29253,i__29146_29254,seq__29106_29244,chunk__29107_29245,count__29108_29246,i__29109_29247,seq__28965_29237,chunk__28966_29238,count__28967_29239,i__28968_29240,map__29151_29255,map__29151_29256__$1,gline_29257,gcol_29258,name_29259,vec__29140_29248,column_29249,column_info_29250,vec__29103_29241,line_29242,columns_29243,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29258], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29242,new cljs.core.Keyword(null,"col","col",-1959363084),column_29249,new cljs.core.Keyword(null,"name","name",1843675177),name_29259], null));
});})(seq__29143_29251,chunk__29144_29252,count__29145_29253,i__29146_29254,seq__29106_29244,chunk__29107_29245,count__29108_29246,i__29109_29247,seq__28965_29237,chunk__28966_29238,count__28967_29239,i__28968_29240,map__29151_29255,map__29151_29256__$1,gline_29257,gcol_29258,name_29259,vec__29140_29248,column_29249,column_info_29250,vec__29103_29241,line_29242,columns_29243,inverted))
,cljs.core.sorted_map.call(null)));


var G__29260 = seq__29143_29251;
var G__29261 = chunk__29144_29252;
var G__29262 = count__29145_29253;
var G__29263 = (i__29146_29254 + (1));
seq__29143_29251 = G__29260;
chunk__29144_29252 = G__29261;
count__29145_29253 = G__29262;
i__29146_29254 = G__29263;
continue;
} else {
var temp__5720__auto___29264 = cljs.core.seq.call(null,seq__29143_29251);
if(temp__5720__auto___29264){
var seq__29143_29265__$1 = temp__5720__auto___29264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29143_29265__$1)){
var c__4550__auto___29266 = cljs.core.chunk_first.call(null,seq__29143_29265__$1);
var G__29267 = cljs.core.chunk_rest.call(null,seq__29143_29265__$1);
var G__29268 = c__4550__auto___29266;
var G__29269 = cljs.core.count.call(null,c__4550__auto___29266);
var G__29270 = (0);
seq__29143_29251 = G__29267;
chunk__29144_29252 = G__29268;
count__29145_29253 = G__29269;
i__29146_29254 = G__29270;
continue;
} else {
var map__29153_29271 = cljs.core.first.call(null,seq__29143_29265__$1);
var map__29153_29272__$1 = (((((!((map__29153_29271 == null))))?(((((map__29153_29271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29153_29271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29153_29271):map__29153_29271);
var gline_29273 = cljs.core.get.call(null,map__29153_29272__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29274 = cljs.core.get.call(null,map__29153_29272__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29275 = cljs.core.get.call(null,map__29153_29272__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29273], null),cljs.core.fnil.call(null,((function (seq__29143_29251,chunk__29144_29252,count__29145_29253,i__29146_29254,seq__29106_29244,chunk__29107_29245,count__29108_29246,i__29109_29247,seq__28965_29237,chunk__28966_29238,count__28967_29239,i__28968_29240,map__29153_29271,map__29153_29272__$1,gline_29273,gcol_29274,name_29275,seq__29143_29265__$1,temp__5720__auto___29264,vec__29140_29248,column_29249,column_info_29250,vec__29103_29241,line_29242,columns_29243,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29274], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29242,new cljs.core.Keyword(null,"col","col",-1959363084),column_29249,new cljs.core.Keyword(null,"name","name",1843675177),name_29275], null));
});})(seq__29143_29251,chunk__29144_29252,count__29145_29253,i__29146_29254,seq__29106_29244,chunk__29107_29245,count__29108_29246,i__29109_29247,seq__28965_29237,chunk__28966_29238,count__28967_29239,i__28968_29240,map__29153_29271,map__29153_29272__$1,gline_29273,gcol_29274,name_29275,seq__29143_29265__$1,temp__5720__auto___29264,vec__29140_29248,column_29249,column_info_29250,vec__29103_29241,line_29242,columns_29243,inverted))
,cljs.core.sorted_map.call(null)));


var G__29276 = cljs.core.next.call(null,seq__29143_29265__$1);
var G__29277 = null;
var G__29278 = (0);
var G__29279 = (0);
seq__29143_29251 = G__29276;
chunk__29144_29252 = G__29277;
count__29145_29253 = G__29278;
i__29146_29254 = G__29279;
continue;
}
} else {
}
}
break;
}


var G__29280 = seq__29106_29244;
var G__29281 = chunk__29107_29245;
var G__29282 = count__29108_29246;
var G__29283 = (i__29109_29247 + (1));
seq__29106_29244 = G__29280;
chunk__29107_29245 = G__29281;
count__29108_29246 = G__29282;
i__29109_29247 = G__29283;
continue;
} else {
var temp__5720__auto___29284 = cljs.core.seq.call(null,seq__29106_29244);
if(temp__5720__auto___29284){
var seq__29106_29285__$1 = temp__5720__auto___29284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29106_29285__$1)){
var c__4550__auto___29286 = cljs.core.chunk_first.call(null,seq__29106_29285__$1);
var G__29287 = cljs.core.chunk_rest.call(null,seq__29106_29285__$1);
var G__29288 = c__4550__auto___29286;
var G__29289 = cljs.core.count.call(null,c__4550__auto___29286);
var G__29290 = (0);
seq__29106_29244 = G__29287;
chunk__29107_29245 = G__29288;
count__29108_29246 = G__29289;
i__29109_29247 = G__29290;
continue;
} else {
var vec__29155_29291 = cljs.core.first.call(null,seq__29106_29285__$1);
var column_29292 = cljs.core.nth.call(null,vec__29155_29291,(0),null);
var column_info_29293 = cljs.core.nth.call(null,vec__29155_29291,(1),null);
var seq__29158_29294 = cljs.core.seq.call(null,column_info_29293);
var chunk__29159_29295 = null;
var count__29160_29296 = (0);
var i__29161_29297 = (0);
while(true){
if((i__29161_29297 < count__29160_29296)){
var map__29166_29298 = cljs.core._nth.call(null,chunk__29159_29295,i__29161_29297);
var map__29166_29299__$1 = (((((!((map__29166_29298 == null))))?(((((map__29166_29298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29166_29298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29166_29298):map__29166_29298);
var gline_29300 = cljs.core.get.call(null,map__29166_29299__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29301 = cljs.core.get.call(null,map__29166_29299__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29302 = cljs.core.get.call(null,map__29166_29299__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29300], null),cljs.core.fnil.call(null,((function (seq__29158_29294,chunk__29159_29295,count__29160_29296,i__29161_29297,seq__29106_29244,chunk__29107_29245,count__29108_29246,i__29109_29247,seq__28965_29237,chunk__28966_29238,count__28967_29239,i__28968_29240,map__29166_29298,map__29166_29299__$1,gline_29300,gcol_29301,name_29302,vec__29155_29291,column_29292,column_info_29293,seq__29106_29285__$1,temp__5720__auto___29284,vec__29103_29241,line_29242,columns_29243,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29301], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29242,new cljs.core.Keyword(null,"col","col",-1959363084),column_29292,new cljs.core.Keyword(null,"name","name",1843675177),name_29302], null));
});})(seq__29158_29294,chunk__29159_29295,count__29160_29296,i__29161_29297,seq__29106_29244,chunk__29107_29245,count__29108_29246,i__29109_29247,seq__28965_29237,chunk__28966_29238,count__28967_29239,i__28968_29240,map__29166_29298,map__29166_29299__$1,gline_29300,gcol_29301,name_29302,vec__29155_29291,column_29292,column_info_29293,seq__29106_29285__$1,temp__5720__auto___29284,vec__29103_29241,line_29242,columns_29243,inverted))
,cljs.core.sorted_map.call(null)));


var G__29303 = seq__29158_29294;
var G__29304 = chunk__29159_29295;
var G__29305 = count__29160_29296;
var G__29306 = (i__29161_29297 + (1));
seq__29158_29294 = G__29303;
chunk__29159_29295 = G__29304;
count__29160_29296 = G__29305;
i__29161_29297 = G__29306;
continue;
} else {
var temp__5720__auto___29307__$1 = cljs.core.seq.call(null,seq__29158_29294);
if(temp__5720__auto___29307__$1){
var seq__29158_29308__$1 = temp__5720__auto___29307__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29158_29308__$1)){
var c__4550__auto___29309 = cljs.core.chunk_first.call(null,seq__29158_29308__$1);
var G__29310 = cljs.core.chunk_rest.call(null,seq__29158_29308__$1);
var G__29311 = c__4550__auto___29309;
var G__29312 = cljs.core.count.call(null,c__4550__auto___29309);
var G__29313 = (0);
seq__29158_29294 = G__29310;
chunk__29159_29295 = G__29311;
count__29160_29296 = G__29312;
i__29161_29297 = G__29313;
continue;
} else {
var map__29168_29314 = cljs.core.first.call(null,seq__29158_29308__$1);
var map__29168_29315__$1 = (((((!((map__29168_29314 == null))))?(((((map__29168_29314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29168_29314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29168_29314):map__29168_29314);
var gline_29316 = cljs.core.get.call(null,map__29168_29315__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29317 = cljs.core.get.call(null,map__29168_29315__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29318 = cljs.core.get.call(null,map__29168_29315__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29316], null),cljs.core.fnil.call(null,((function (seq__29158_29294,chunk__29159_29295,count__29160_29296,i__29161_29297,seq__29106_29244,chunk__29107_29245,count__29108_29246,i__29109_29247,seq__28965_29237,chunk__28966_29238,count__28967_29239,i__28968_29240,map__29168_29314,map__29168_29315__$1,gline_29316,gcol_29317,name_29318,seq__29158_29308__$1,temp__5720__auto___29307__$1,vec__29155_29291,column_29292,column_info_29293,seq__29106_29285__$1,temp__5720__auto___29284,vec__29103_29241,line_29242,columns_29243,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29317], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29242,new cljs.core.Keyword(null,"col","col",-1959363084),column_29292,new cljs.core.Keyword(null,"name","name",1843675177),name_29318], null));
});})(seq__29158_29294,chunk__29159_29295,count__29160_29296,i__29161_29297,seq__29106_29244,chunk__29107_29245,count__29108_29246,i__29109_29247,seq__28965_29237,chunk__28966_29238,count__28967_29239,i__28968_29240,map__29168_29314,map__29168_29315__$1,gline_29316,gcol_29317,name_29318,seq__29158_29308__$1,temp__5720__auto___29307__$1,vec__29155_29291,column_29292,column_info_29293,seq__29106_29285__$1,temp__5720__auto___29284,vec__29103_29241,line_29242,columns_29243,inverted))
,cljs.core.sorted_map.call(null)));


var G__29319 = cljs.core.next.call(null,seq__29158_29308__$1);
var G__29320 = null;
var G__29321 = (0);
var G__29322 = (0);
seq__29158_29294 = G__29319;
chunk__29159_29295 = G__29320;
count__29160_29296 = G__29321;
i__29161_29297 = G__29322;
continue;
}
} else {
}
}
break;
}


var G__29323 = cljs.core.next.call(null,seq__29106_29285__$1);
var G__29324 = null;
var G__29325 = (0);
var G__29326 = (0);
seq__29106_29244 = G__29323;
chunk__29107_29245 = G__29324;
count__29108_29246 = G__29325;
i__29109_29247 = G__29326;
continue;
}
} else {
}
}
break;
}


var G__29327 = seq__28965_29237;
var G__29328 = chunk__28966_29238;
var G__29329 = count__28967_29239;
var G__29330 = (i__28968_29240 + (1));
seq__28965_29237 = G__29327;
chunk__28966_29238 = G__29328;
count__28967_29239 = G__29329;
i__28968_29240 = G__29330;
continue;
} else {
var temp__5720__auto___29331 = cljs.core.seq.call(null,seq__28965_29237);
if(temp__5720__auto___29331){
var seq__28965_29332__$1 = temp__5720__auto___29331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28965_29332__$1)){
var c__4550__auto___29333 = cljs.core.chunk_first.call(null,seq__28965_29332__$1);
var G__29334 = cljs.core.chunk_rest.call(null,seq__28965_29332__$1);
var G__29335 = c__4550__auto___29333;
var G__29336 = cljs.core.count.call(null,c__4550__auto___29333);
var G__29337 = (0);
seq__28965_29237 = G__29334;
chunk__28966_29238 = G__29335;
count__28967_29239 = G__29336;
i__28968_29240 = G__29337;
continue;
} else {
var vec__29170_29338 = cljs.core.first.call(null,seq__28965_29332__$1);
var line_29339 = cljs.core.nth.call(null,vec__29170_29338,(0),null);
var columns_29340 = cljs.core.nth.call(null,vec__29170_29338,(1),null);
var seq__29173_29341 = cljs.core.seq.call(null,columns_29340);
var chunk__29174_29342 = null;
var count__29175_29343 = (0);
var i__29176_29344 = (0);
while(true){
if((i__29176_29344 < count__29175_29343)){
var vec__29207_29345 = cljs.core._nth.call(null,chunk__29174_29342,i__29176_29344);
var column_29346 = cljs.core.nth.call(null,vec__29207_29345,(0),null);
var column_info_29347 = cljs.core.nth.call(null,vec__29207_29345,(1),null);
var seq__29210_29348 = cljs.core.seq.call(null,column_info_29347);
var chunk__29211_29349 = null;
var count__29212_29350 = (0);
var i__29213_29351 = (0);
while(true){
if((i__29213_29351 < count__29212_29350)){
var map__29218_29352 = cljs.core._nth.call(null,chunk__29211_29349,i__29213_29351);
var map__29218_29353__$1 = (((((!((map__29218_29352 == null))))?(((((map__29218_29352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29218_29352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29218_29352):map__29218_29352);
var gline_29354 = cljs.core.get.call(null,map__29218_29353__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29355 = cljs.core.get.call(null,map__29218_29353__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29356 = cljs.core.get.call(null,map__29218_29353__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29354], null),cljs.core.fnil.call(null,((function (seq__29210_29348,chunk__29211_29349,count__29212_29350,i__29213_29351,seq__29173_29341,chunk__29174_29342,count__29175_29343,i__29176_29344,seq__28965_29237,chunk__28966_29238,count__28967_29239,i__28968_29240,map__29218_29352,map__29218_29353__$1,gline_29354,gcol_29355,name_29356,vec__29207_29345,column_29346,column_info_29347,vec__29170_29338,line_29339,columns_29340,seq__28965_29332__$1,temp__5720__auto___29331,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29355], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29339,new cljs.core.Keyword(null,"col","col",-1959363084),column_29346,new cljs.core.Keyword(null,"name","name",1843675177),name_29356], null));
});})(seq__29210_29348,chunk__29211_29349,count__29212_29350,i__29213_29351,seq__29173_29341,chunk__29174_29342,count__29175_29343,i__29176_29344,seq__28965_29237,chunk__28966_29238,count__28967_29239,i__28968_29240,map__29218_29352,map__29218_29353__$1,gline_29354,gcol_29355,name_29356,vec__29207_29345,column_29346,column_info_29347,vec__29170_29338,line_29339,columns_29340,seq__28965_29332__$1,temp__5720__auto___29331,inverted))
,cljs.core.sorted_map.call(null)));


var G__29357 = seq__29210_29348;
var G__29358 = chunk__29211_29349;
var G__29359 = count__29212_29350;
var G__29360 = (i__29213_29351 + (1));
seq__29210_29348 = G__29357;
chunk__29211_29349 = G__29358;
count__29212_29350 = G__29359;
i__29213_29351 = G__29360;
continue;
} else {
var temp__5720__auto___29361__$1 = cljs.core.seq.call(null,seq__29210_29348);
if(temp__5720__auto___29361__$1){
var seq__29210_29362__$1 = temp__5720__auto___29361__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29210_29362__$1)){
var c__4550__auto___29363 = cljs.core.chunk_first.call(null,seq__29210_29362__$1);
var G__29364 = cljs.core.chunk_rest.call(null,seq__29210_29362__$1);
var G__29365 = c__4550__auto___29363;
var G__29366 = cljs.core.count.call(null,c__4550__auto___29363);
var G__29367 = (0);
seq__29210_29348 = G__29364;
chunk__29211_29349 = G__29365;
count__29212_29350 = G__29366;
i__29213_29351 = G__29367;
continue;
} else {
var map__29220_29368 = cljs.core.first.call(null,seq__29210_29362__$1);
var map__29220_29369__$1 = (((((!((map__29220_29368 == null))))?(((((map__29220_29368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29220_29368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29220_29368):map__29220_29368);
var gline_29370 = cljs.core.get.call(null,map__29220_29369__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29371 = cljs.core.get.call(null,map__29220_29369__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29372 = cljs.core.get.call(null,map__29220_29369__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29370], null),cljs.core.fnil.call(null,((function (seq__29210_29348,chunk__29211_29349,count__29212_29350,i__29213_29351,seq__29173_29341,chunk__29174_29342,count__29175_29343,i__29176_29344,seq__28965_29237,chunk__28966_29238,count__28967_29239,i__28968_29240,map__29220_29368,map__29220_29369__$1,gline_29370,gcol_29371,name_29372,seq__29210_29362__$1,temp__5720__auto___29361__$1,vec__29207_29345,column_29346,column_info_29347,vec__29170_29338,line_29339,columns_29340,seq__28965_29332__$1,temp__5720__auto___29331,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29371], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29339,new cljs.core.Keyword(null,"col","col",-1959363084),column_29346,new cljs.core.Keyword(null,"name","name",1843675177),name_29372], null));
});})(seq__29210_29348,chunk__29211_29349,count__29212_29350,i__29213_29351,seq__29173_29341,chunk__29174_29342,count__29175_29343,i__29176_29344,seq__28965_29237,chunk__28966_29238,count__28967_29239,i__28968_29240,map__29220_29368,map__29220_29369__$1,gline_29370,gcol_29371,name_29372,seq__29210_29362__$1,temp__5720__auto___29361__$1,vec__29207_29345,column_29346,column_info_29347,vec__29170_29338,line_29339,columns_29340,seq__28965_29332__$1,temp__5720__auto___29331,inverted))
,cljs.core.sorted_map.call(null)));


var G__29373 = cljs.core.next.call(null,seq__29210_29362__$1);
var G__29374 = null;
var G__29375 = (0);
var G__29376 = (0);
seq__29210_29348 = G__29373;
chunk__29211_29349 = G__29374;
count__29212_29350 = G__29375;
i__29213_29351 = G__29376;
continue;
}
} else {
}
}
break;
}


var G__29377 = seq__29173_29341;
var G__29378 = chunk__29174_29342;
var G__29379 = count__29175_29343;
var G__29380 = (i__29176_29344 + (1));
seq__29173_29341 = G__29377;
chunk__29174_29342 = G__29378;
count__29175_29343 = G__29379;
i__29176_29344 = G__29380;
continue;
} else {
var temp__5720__auto___29381__$1 = cljs.core.seq.call(null,seq__29173_29341);
if(temp__5720__auto___29381__$1){
var seq__29173_29382__$1 = temp__5720__auto___29381__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29173_29382__$1)){
var c__4550__auto___29383 = cljs.core.chunk_first.call(null,seq__29173_29382__$1);
var G__29384 = cljs.core.chunk_rest.call(null,seq__29173_29382__$1);
var G__29385 = c__4550__auto___29383;
var G__29386 = cljs.core.count.call(null,c__4550__auto___29383);
var G__29387 = (0);
seq__29173_29341 = G__29384;
chunk__29174_29342 = G__29385;
count__29175_29343 = G__29386;
i__29176_29344 = G__29387;
continue;
} else {
var vec__29222_29388 = cljs.core.first.call(null,seq__29173_29382__$1);
var column_29389 = cljs.core.nth.call(null,vec__29222_29388,(0),null);
var column_info_29390 = cljs.core.nth.call(null,vec__29222_29388,(1),null);
var seq__29225_29391 = cljs.core.seq.call(null,column_info_29390);
var chunk__29226_29392 = null;
var count__29227_29393 = (0);
var i__29228_29394 = (0);
while(true){
if((i__29228_29394 < count__29227_29393)){
var map__29233_29395 = cljs.core._nth.call(null,chunk__29226_29392,i__29228_29394);
var map__29233_29396__$1 = (((((!((map__29233_29395 == null))))?(((((map__29233_29395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29233_29395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29233_29395):map__29233_29395);
var gline_29397 = cljs.core.get.call(null,map__29233_29396__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29398 = cljs.core.get.call(null,map__29233_29396__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29399 = cljs.core.get.call(null,map__29233_29396__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29397], null),cljs.core.fnil.call(null,((function (seq__29225_29391,chunk__29226_29392,count__29227_29393,i__29228_29394,seq__29173_29341,chunk__29174_29342,count__29175_29343,i__29176_29344,seq__28965_29237,chunk__28966_29238,count__28967_29239,i__28968_29240,map__29233_29395,map__29233_29396__$1,gline_29397,gcol_29398,name_29399,vec__29222_29388,column_29389,column_info_29390,seq__29173_29382__$1,temp__5720__auto___29381__$1,vec__29170_29338,line_29339,columns_29340,seq__28965_29332__$1,temp__5720__auto___29331,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29398], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29339,new cljs.core.Keyword(null,"col","col",-1959363084),column_29389,new cljs.core.Keyword(null,"name","name",1843675177),name_29399], null));
});})(seq__29225_29391,chunk__29226_29392,count__29227_29393,i__29228_29394,seq__29173_29341,chunk__29174_29342,count__29175_29343,i__29176_29344,seq__28965_29237,chunk__28966_29238,count__28967_29239,i__28968_29240,map__29233_29395,map__29233_29396__$1,gline_29397,gcol_29398,name_29399,vec__29222_29388,column_29389,column_info_29390,seq__29173_29382__$1,temp__5720__auto___29381__$1,vec__29170_29338,line_29339,columns_29340,seq__28965_29332__$1,temp__5720__auto___29331,inverted))
,cljs.core.sorted_map.call(null)));


var G__29400 = seq__29225_29391;
var G__29401 = chunk__29226_29392;
var G__29402 = count__29227_29393;
var G__29403 = (i__29228_29394 + (1));
seq__29225_29391 = G__29400;
chunk__29226_29392 = G__29401;
count__29227_29393 = G__29402;
i__29228_29394 = G__29403;
continue;
} else {
var temp__5720__auto___29404__$2 = cljs.core.seq.call(null,seq__29225_29391);
if(temp__5720__auto___29404__$2){
var seq__29225_29405__$1 = temp__5720__auto___29404__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29225_29405__$1)){
var c__4550__auto___29406 = cljs.core.chunk_first.call(null,seq__29225_29405__$1);
var G__29407 = cljs.core.chunk_rest.call(null,seq__29225_29405__$1);
var G__29408 = c__4550__auto___29406;
var G__29409 = cljs.core.count.call(null,c__4550__auto___29406);
var G__29410 = (0);
seq__29225_29391 = G__29407;
chunk__29226_29392 = G__29408;
count__29227_29393 = G__29409;
i__29228_29394 = G__29410;
continue;
} else {
var map__29235_29411 = cljs.core.first.call(null,seq__29225_29405__$1);
var map__29235_29412__$1 = (((((!((map__29235_29411 == null))))?(((((map__29235_29411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29235_29411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29235_29411):map__29235_29411);
var gline_29413 = cljs.core.get.call(null,map__29235_29412__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29414 = cljs.core.get.call(null,map__29235_29412__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29415 = cljs.core.get.call(null,map__29235_29412__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29413], null),cljs.core.fnil.call(null,((function (seq__29225_29391,chunk__29226_29392,count__29227_29393,i__29228_29394,seq__29173_29341,chunk__29174_29342,count__29175_29343,i__29176_29344,seq__28965_29237,chunk__28966_29238,count__28967_29239,i__28968_29240,map__29235_29411,map__29235_29412__$1,gline_29413,gcol_29414,name_29415,seq__29225_29405__$1,temp__5720__auto___29404__$2,vec__29222_29388,column_29389,column_info_29390,seq__29173_29382__$1,temp__5720__auto___29381__$1,vec__29170_29338,line_29339,columns_29340,seq__28965_29332__$1,temp__5720__auto___29331,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29414], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29339,new cljs.core.Keyword(null,"col","col",-1959363084),column_29389,new cljs.core.Keyword(null,"name","name",1843675177),name_29415], null));
});})(seq__29225_29391,chunk__29226_29392,count__29227_29393,i__29228_29394,seq__29173_29341,chunk__29174_29342,count__29175_29343,i__29176_29344,seq__28965_29237,chunk__28966_29238,count__28967_29239,i__28968_29240,map__29235_29411,map__29235_29412__$1,gline_29413,gcol_29414,name_29415,seq__29225_29405__$1,temp__5720__auto___29404__$2,vec__29222_29388,column_29389,column_info_29390,seq__29173_29382__$1,temp__5720__auto___29381__$1,vec__29170_29338,line_29339,columns_29340,seq__28965_29332__$1,temp__5720__auto___29331,inverted))
,cljs.core.sorted_map.call(null)));


var G__29416 = cljs.core.next.call(null,seq__29225_29405__$1);
var G__29417 = null;
var G__29418 = (0);
var G__29419 = (0);
seq__29225_29391 = G__29416;
chunk__29226_29392 = G__29417;
count__29227_29393 = G__29418;
i__29228_29394 = G__29419;
continue;
}
} else {
}
}
break;
}


var G__29420 = cljs.core.next.call(null,seq__29173_29382__$1);
var G__29421 = null;
var G__29422 = (0);
var G__29423 = (0);
seq__29173_29341 = G__29420;
chunk__29174_29342 = G__29421;
count__29175_29343 = G__29422;
i__29176_29344 = G__29423;
continue;
}
} else {
}
}
break;
}


var G__29424 = cljs.core.next.call(null,seq__28965_29332__$1);
var G__29425 = null;
var G__29426 = (0);
var G__29427 = (0);
seq__28965_29237 = G__29424;
chunk__28966_29238 = G__29425;
count__28967_29239 = G__29426;
i__28968_29240 = G__29427;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1601408402820
