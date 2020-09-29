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
return cljs.core.reduce.call(null,(function (m,p__28344){
var vec__28345 = p__28344;
var i = cljs.core.nth.call(null,vec__28345,(0),null);
var v = cljs.core.nth.call(null,vec__28345,(1),null);
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
var vec__28348 = seg;
var gcol = cljs.core.nth.call(null,vec__28348,(0),null);
var source = cljs.core.nth.call(null,vec__28348,(1),null);
var line = cljs.core.nth.call(null,vec__28348,(2),null);
var col = cljs.core.nth.call(null,vec__28348,(3),null);
var name = cljs.core.nth.call(null,vec__28348,(4),null);
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
var vec__28351 = seg;
var gcol = cljs.core.nth.call(null,vec__28351,(0),null);
var source = cljs.core.nth.call(null,vec__28351,(1),null);
var line = cljs.core.nth.call(null,vec__28351,(2),null);
var col = cljs.core.nth.call(null,vec__28351,(3),null);
var name = cljs.core.nth.call(null,vec__28351,(4),null);
var vec__28354 = relseg;
var rgcol = cljs.core.nth.call(null,vec__28354,(0),null);
var rsource = cljs.core.nth.call(null,vec__28354,(1),null);
var rline = cljs.core.nth.call(null,vec__28354,(2),null);
var rcol = cljs.core.nth.call(null,vec__28354,(3),null);
var rname = cljs.core.nth.call(null,vec__28354,(4),null);
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
var map__28357 = segmap;
var map__28357__$1 = (((((!((map__28357 == null))))?(((((map__28357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28357):map__28357);
var gcol = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__28357,map__28357__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__28357,map__28357__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__28357,map__28357__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__28357,map__28357__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__28357,map__28357__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__28357,map__28357__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__28360 = arguments.length;
switch (G__28360) {
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
var vec__28364 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__28368 = cljs.core.next.call(null,segs__$1);
var G__28369 = nrelseg;
var G__28370 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__28368;
relseg__$1 = G__28369;
result__$1 = G__28370;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__28364,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__28364,(1),null);
var G__28371 = (gline + (1));
var G__28372 = cljs.core.next.call(null,lines__$1);
var G__28373 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__28374 = result__$1;
gline = G__28371;
lines__$1 = G__28372;
relseg = G__28373;
result = G__28374;
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
var map__28376 = segmap;
var map__28376__$1 = (((((!((map__28376 == null))))?(((((map__28376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28376):map__28376);
var gcol = cljs.core.get.call(null,map__28376__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__28376__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__28376__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__28376__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__28376__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__28376,map__28376__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__28376,map__28376__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__28375_SHARP_){
return cljs.core.conj.call(null,p1__28375_SHARP_,d__$1);
});})(map__28376,map__28376__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__28376,map__28376__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__28379 = arguments.length;
switch (G__28379) {
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
var vec__28383 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__28387 = cljs.core.next.call(null,segs__$1);
var G__28388 = nrelseg;
var G__28389 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__28387;
relseg__$1 = G__28388;
result__$1 = G__28389;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__28383,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__28383,(1),null);
var G__28390 = (gline + (1));
var G__28391 = cljs.core.next.call(null,lines__$1);
var G__28392 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__28393 = result__$1;
gline = G__28390;
lines__$1 = G__28391;
relseg = G__28392;
result = G__28393;
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
return (function (p__28394){
var vec__28395 = p__28394;
var _ = cljs.core.nth.call(null,vec__28395,(0),null);
var source = cljs.core.nth.call(null,vec__28395,(1),null);
var line = cljs.core.nth.call(null,vec__28395,(2),null);
var col = cljs.core.nth.call(null,vec__28395,(3),null);
var name = cljs.core.nth.call(null,vec__28395,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__28398){
var vec__28399 = p__28398;
var gcol = cljs.core.nth.call(null,vec__28399,(0),null);
var sidx = cljs.core.nth.call(null,vec__28399,(1),null);
var line = cljs.core.nth.call(null,vec__28399,(2),null);
var col = cljs.core.nth.call(null,vec__28399,(3),null);
var name = cljs.core.nth.call(null,vec__28399,(4),null);
var seg = vec__28399;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__28399,gcol,sidx,line,col,name,seg,relseg){
return (function (p__28402){
var vec__28403 = p__28402;
var _ = cljs.core.nth.call(null,vec__28403,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28403,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__28403,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__28403,(3),null);
var lname = cljs.core.nth.call(null,vec__28403,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__28399,gcol,sidx,line,col,name,seg,relseg))
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
var seq__28409 = cljs.core.seq.call(null,infos);
var chunk__28410 = null;
var count__28411 = (0);
var i__28412 = (0);
while(true){
if((i__28412 < count__28411)){
var info = cljs.core._nth.call(null,chunk__28410,i__28412);
var segv_28763 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_28764 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28765 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_28764 > (lc_28765 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__28409,chunk__28410,count__28411,i__28412,segv_28763,gline_28764,lc_28765,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_28764 - (lc_28765 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28763], null));
});})(seq__28409,chunk__28410,count__28411,i__28412,segv_28763,gline_28764,lc_28765,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__28409,chunk__28410,count__28411,i__28412,segv_28763,gline_28764,lc_28765,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28764], null),cljs.core.conj,segv_28763);
});})(seq__28409,chunk__28410,count__28411,i__28412,segv_28763,gline_28764,lc_28765,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__28766 = seq__28409;
var G__28767 = chunk__28410;
var G__28768 = count__28411;
var G__28769 = (i__28412 + (1));
seq__28409 = G__28766;
chunk__28410 = G__28767;
count__28411 = G__28768;
i__28412 = G__28769;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28409);
if(temp__5720__auto__){
var seq__28409__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28409__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28409__$1);
var G__28770 = cljs.core.chunk_rest.call(null,seq__28409__$1);
var G__28771 = c__4550__auto__;
var G__28772 = cljs.core.count.call(null,c__4550__auto__);
var G__28773 = (0);
seq__28409 = G__28770;
chunk__28410 = G__28771;
count__28411 = G__28772;
i__28412 = G__28773;
continue;
} else {
var info = cljs.core.first.call(null,seq__28409__$1);
var segv_28774 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_28775 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28776 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_28775 > (lc_28776 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__28409,chunk__28410,count__28411,i__28412,segv_28774,gline_28775,lc_28776,info,seq__28409__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_28775 - (lc_28776 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28774], null));
});})(seq__28409,chunk__28410,count__28411,i__28412,segv_28774,gline_28775,lc_28776,info,seq__28409__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__28409,chunk__28410,count__28411,i__28412,segv_28774,gline_28775,lc_28776,info,seq__28409__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28775], null),cljs.core.conj,segv_28774);
});})(seq__28409,chunk__28410,count__28411,i__28412,segv_28774,gline_28775,lc_28776,info,seq__28409__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__28777 = cljs.core.next.call(null,seq__28409__$1);
var G__28778 = null;
var G__28779 = (0);
var G__28780 = (0);
seq__28409 = G__28777;
chunk__28410 = G__28778;
count__28411 = G__28779;
i__28412 = G__28780;
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
var seq__28413_28781 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__28414_28782 = null;
var count__28415_28783 = (0);
var i__28416_28784 = (0);
while(true){
if((i__28416_28784 < count__28415_28783)){
var vec__28589_28785 = cljs.core._nth.call(null,chunk__28414_28782,i__28416_28784);
var source_idx_28786 = cljs.core.nth.call(null,vec__28589_28785,(0),null);
var vec__28592_28787 = cljs.core.nth.call(null,vec__28589_28785,(1),null);
var __28788 = cljs.core.nth.call(null,vec__28592_28787,(0),null);
var lines_28789__$1 = cljs.core.nth.call(null,vec__28592_28787,(1),null);
var seq__28595_28790 = cljs.core.seq.call(null,lines_28789__$1);
var chunk__28596_28791 = null;
var count__28597_28792 = (0);
var i__28598_28793 = (0);
while(true){
if((i__28598_28793 < count__28597_28792)){
var vec__28637_28794 = cljs.core._nth.call(null,chunk__28596_28791,i__28598_28793);
var line_28795 = cljs.core.nth.call(null,vec__28637_28794,(0),null);
var cols_28796 = cljs.core.nth.call(null,vec__28637_28794,(1),null);
var seq__28640_28797 = cljs.core.seq.call(null,cols_28796);
var chunk__28641_28798 = null;
var count__28642_28799 = (0);
var i__28643_28800 = (0);
while(true){
if((i__28643_28800 < count__28642_28799)){
var vec__28650_28801 = cljs.core._nth.call(null,chunk__28641_28798,i__28643_28800);
var col_28802 = cljs.core.nth.call(null,vec__28650_28801,(0),null);
var infos_28803 = cljs.core.nth.call(null,vec__28650_28801,(1),null);
encode_cols.call(null,infos_28803,source_idx_28786,line_28795,col_28802);


var G__28804 = seq__28640_28797;
var G__28805 = chunk__28641_28798;
var G__28806 = count__28642_28799;
var G__28807 = (i__28643_28800 + (1));
seq__28640_28797 = G__28804;
chunk__28641_28798 = G__28805;
count__28642_28799 = G__28806;
i__28643_28800 = G__28807;
continue;
} else {
var temp__5720__auto___28808 = cljs.core.seq.call(null,seq__28640_28797);
if(temp__5720__auto___28808){
var seq__28640_28809__$1 = temp__5720__auto___28808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28640_28809__$1)){
var c__4550__auto___28810 = cljs.core.chunk_first.call(null,seq__28640_28809__$1);
var G__28811 = cljs.core.chunk_rest.call(null,seq__28640_28809__$1);
var G__28812 = c__4550__auto___28810;
var G__28813 = cljs.core.count.call(null,c__4550__auto___28810);
var G__28814 = (0);
seq__28640_28797 = G__28811;
chunk__28641_28798 = G__28812;
count__28642_28799 = G__28813;
i__28643_28800 = G__28814;
continue;
} else {
var vec__28653_28815 = cljs.core.first.call(null,seq__28640_28809__$1);
var col_28816 = cljs.core.nth.call(null,vec__28653_28815,(0),null);
var infos_28817 = cljs.core.nth.call(null,vec__28653_28815,(1),null);
encode_cols.call(null,infos_28817,source_idx_28786,line_28795,col_28816);


var G__28818 = cljs.core.next.call(null,seq__28640_28809__$1);
var G__28819 = null;
var G__28820 = (0);
var G__28821 = (0);
seq__28640_28797 = G__28818;
chunk__28641_28798 = G__28819;
count__28642_28799 = G__28820;
i__28643_28800 = G__28821;
continue;
}
} else {
}
}
break;
}


var G__28822 = seq__28595_28790;
var G__28823 = chunk__28596_28791;
var G__28824 = count__28597_28792;
var G__28825 = (i__28598_28793 + (1));
seq__28595_28790 = G__28822;
chunk__28596_28791 = G__28823;
count__28597_28792 = G__28824;
i__28598_28793 = G__28825;
continue;
} else {
var temp__5720__auto___28826 = cljs.core.seq.call(null,seq__28595_28790);
if(temp__5720__auto___28826){
var seq__28595_28827__$1 = temp__5720__auto___28826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28595_28827__$1)){
var c__4550__auto___28828 = cljs.core.chunk_first.call(null,seq__28595_28827__$1);
var G__28829 = cljs.core.chunk_rest.call(null,seq__28595_28827__$1);
var G__28830 = c__4550__auto___28828;
var G__28831 = cljs.core.count.call(null,c__4550__auto___28828);
var G__28832 = (0);
seq__28595_28790 = G__28829;
chunk__28596_28791 = G__28830;
count__28597_28792 = G__28831;
i__28598_28793 = G__28832;
continue;
} else {
var vec__28656_28833 = cljs.core.first.call(null,seq__28595_28827__$1);
var line_28834 = cljs.core.nth.call(null,vec__28656_28833,(0),null);
var cols_28835 = cljs.core.nth.call(null,vec__28656_28833,(1),null);
var seq__28659_28836 = cljs.core.seq.call(null,cols_28835);
var chunk__28660_28837 = null;
var count__28661_28838 = (0);
var i__28662_28839 = (0);
while(true){
if((i__28662_28839 < count__28661_28838)){
var vec__28669_28840 = cljs.core._nth.call(null,chunk__28660_28837,i__28662_28839);
var col_28841 = cljs.core.nth.call(null,vec__28669_28840,(0),null);
var infos_28842 = cljs.core.nth.call(null,vec__28669_28840,(1),null);
encode_cols.call(null,infos_28842,source_idx_28786,line_28834,col_28841);


var G__28843 = seq__28659_28836;
var G__28844 = chunk__28660_28837;
var G__28845 = count__28661_28838;
var G__28846 = (i__28662_28839 + (1));
seq__28659_28836 = G__28843;
chunk__28660_28837 = G__28844;
count__28661_28838 = G__28845;
i__28662_28839 = G__28846;
continue;
} else {
var temp__5720__auto___28847__$1 = cljs.core.seq.call(null,seq__28659_28836);
if(temp__5720__auto___28847__$1){
var seq__28659_28848__$1 = temp__5720__auto___28847__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28659_28848__$1)){
var c__4550__auto___28849 = cljs.core.chunk_first.call(null,seq__28659_28848__$1);
var G__28850 = cljs.core.chunk_rest.call(null,seq__28659_28848__$1);
var G__28851 = c__4550__auto___28849;
var G__28852 = cljs.core.count.call(null,c__4550__auto___28849);
var G__28853 = (0);
seq__28659_28836 = G__28850;
chunk__28660_28837 = G__28851;
count__28661_28838 = G__28852;
i__28662_28839 = G__28853;
continue;
} else {
var vec__28672_28854 = cljs.core.first.call(null,seq__28659_28848__$1);
var col_28855 = cljs.core.nth.call(null,vec__28672_28854,(0),null);
var infos_28856 = cljs.core.nth.call(null,vec__28672_28854,(1),null);
encode_cols.call(null,infos_28856,source_idx_28786,line_28834,col_28855);


var G__28857 = cljs.core.next.call(null,seq__28659_28848__$1);
var G__28858 = null;
var G__28859 = (0);
var G__28860 = (0);
seq__28659_28836 = G__28857;
chunk__28660_28837 = G__28858;
count__28661_28838 = G__28859;
i__28662_28839 = G__28860;
continue;
}
} else {
}
}
break;
}


var G__28861 = cljs.core.next.call(null,seq__28595_28827__$1);
var G__28862 = null;
var G__28863 = (0);
var G__28864 = (0);
seq__28595_28790 = G__28861;
chunk__28596_28791 = G__28862;
count__28597_28792 = G__28863;
i__28598_28793 = G__28864;
continue;
}
} else {
}
}
break;
}


var G__28865 = seq__28413_28781;
var G__28866 = chunk__28414_28782;
var G__28867 = count__28415_28783;
var G__28868 = (i__28416_28784 + (1));
seq__28413_28781 = G__28865;
chunk__28414_28782 = G__28866;
count__28415_28783 = G__28867;
i__28416_28784 = G__28868;
continue;
} else {
var temp__5720__auto___28869 = cljs.core.seq.call(null,seq__28413_28781);
if(temp__5720__auto___28869){
var seq__28413_28870__$1 = temp__5720__auto___28869;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28413_28870__$1)){
var c__4550__auto___28871 = cljs.core.chunk_first.call(null,seq__28413_28870__$1);
var G__28872 = cljs.core.chunk_rest.call(null,seq__28413_28870__$1);
var G__28873 = c__4550__auto___28871;
var G__28874 = cljs.core.count.call(null,c__4550__auto___28871);
var G__28875 = (0);
seq__28413_28781 = G__28872;
chunk__28414_28782 = G__28873;
count__28415_28783 = G__28874;
i__28416_28784 = G__28875;
continue;
} else {
var vec__28675_28876 = cljs.core.first.call(null,seq__28413_28870__$1);
var source_idx_28877 = cljs.core.nth.call(null,vec__28675_28876,(0),null);
var vec__28678_28878 = cljs.core.nth.call(null,vec__28675_28876,(1),null);
var __28879 = cljs.core.nth.call(null,vec__28678_28878,(0),null);
var lines_28880__$1 = cljs.core.nth.call(null,vec__28678_28878,(1),null);
var seq__28681_28881 = cljs.core.seq.call(null,lines_28880__$1);
var chunk__28682_28882 = null;
var count__28683_28883 = (0);
var i__28684_28884 = (0);
while(true){
if((i__28684_28884 < count__28683_28883)){
var vec__28723_28885 = cljs.core._nth.call(null,chunk__28682_28882,i__28684_28884);
var line_28886 = cljs.core.nth.call(null,vec__28723_28885,(0),null);
var cols_28887 = cljs.core.nth.call(null,vec__28723_28885,(1),null);
var seq__28726_28888 = cljs.core.seq.call(null,cols_28887);
var chunk__28727_28889 = null;
var count__28728_28890 = (0);
var i__28729_28891 = (0);
while(true){
if((i__28729_28891 < count__28728_28890)){
var vec__28736_28892 = cljs.core._nth.call(null,chunk__28727_28889,i__28729_28891);
var col_28893 = cljs.core.nth.call(null,vec__28736_28892,(0),null);
var infos_28894 = cljs.core.nth.call(null,vec__28736_28892,(1),null);
encode_cols.call(null,infos_28894,source_idx_28877,line_28886,col_28893);


var G__28895 = seq__28726_28888;
var G__28896 = chunk__28727_28889;
var G__28897 = count__28728_28890;
var G__28898 = (i__28729_28891 + (1));
seq__28726_28888 = G__28895;
chunk__28727_28889 = G__28896;
count__28728_28890 = G__28897;
i__28729_28891 = G__28898;
continue;
} else {
var temp__5720__auto___28899__$1 = cljs.core.seq.call(null,seq__28726_28888);
if(temp__5720__auto___28899__$1){
var seq__28726_28900__$1 = temp__5720__auto___28899__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28726_28900__$1)){
var c__4550__auto___28901 = cljs.core.chunk_first.call(null,seq__28726_28900__$1);
var G__28902 = cljs.core.chunk_rest.call(null,seq__28726_28900__$1);
var G__28903 = c__4550__auto___28901;
var G__28904 = cljs.core.count.call(null,c__4550__auto___28901);
var G__28905 = (0);
seq__28726_28888 = G__28902;
chunk__28727_28889 = G__28903;
count__28728_28890 = G__28904;
i__28729_28891 = G__28905;
continue;
} else {
var vec__28739_28906 = cljs.core.first.call(null,seq__28726_28900__$1);
var col_28907 = cljs.core.nth.call(null,vec__28739_28906,(0),null);
var infos_28908 = cljs.core.nth.call(null,vec__28739_28906,(1),null);
encode_cols.call(null,infos_28908,source_idx_28877,line_28886,col_28907);


var G__28909 = cljs.core.next.call(null,seq__28726_28900__$1);
var G__28910 = null;
var G__28911 = (0);
var G__28912 = (0);
seq__28726_28888 = G__28909;
chunk__28727_28889 = G__28910;
count__28728_28890 = G__28911;
i__28729_28891 = G__28912;
continue;
}
} else {
}
}
break;
}


var G__28913 = seq__28681_28881;
var G__28914 = chunk__28682_28882;
var G__28915 = count__28683_28883;
var G__28916 = (i__28684_28884 + (1));
seq__28681_28881 = G__28913;
chunk__28682_28882 = G__28914;
count__28683_28883 = G__28915;
i__28684_28884 = G__28916;
continue;
} else {
var temp__5720__auto___28917__$1 = cljs.core.seq.call(null,seq__28681_28881);
if(temp__5720__auto___28917__$1){
var seq__28681_28918__$1 = temp__5720__auto___28917__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28681_28918__$1)){
var c__4550__auto___28919 = cljs.core.chunk_first.call(null,seq__28681_28918__$1);
var G__28920 = cljs.core.chunk_rest.call(null,seq__28681_28918__$1);
var G__28921 = c__4550__auto___28919;
var G__28922 = cljs.core.count.call(null,c__4550__auto___28919);
var G__28923 = (0);
seq__28681_28881 = G__28920;
chunk__28682_28882 = G__28921;
count__28683_28883 = G__28922;
i__28684_28884 = G__28923;
continue;
} else {
var vec__28742_28924 = cljs.core.first.call(null,seq__28681_28918__$1);
var line_28925 = cljs.core.nth.call(null,vec__28742_28924,(0),null);
var cols_28926 = cljs.core.nth.call(null,vec__28742_28924,(1),null);
var seq__28745_28927 = cljs.core.seq.call(null,cols_28926);
var chunk__28746_28928 = null;
var count__28747_28929 = (0);
var i__28748_28930 = (0);
while(true){
if((i__28748_28930 < count__28747_28929)){
var vec__28755_28931 = cljs.core._nth.call(null,chunk__28746_28928,i__28748_28930);
var col_28932 = cljs.core.nth.call(null,vec__28755_28931,(0),null);
var infos_28933 = cljs.core.nth.call(null,vec__28755_28931,(1),null);
encode_cols.call(null,infos_28933,source_idx_28877,line_28925,col_28932);


var G__28934 = seq__28745_28927;
var G__28935 = chunk__28746_28928;
var G__28936 = count__28747_28929;
var G__28937 = (i__28748_28930 + (1));
seq__28745_28927 = G__28934;
chunk__28746_28928 = G__28935;
count__28747_28929 = G__28936;
i__28748_28930 = G__28937;
continue;
} else {
var temp__5720__auto___28938__$2 = cljs.core.seq.call(null,seq__28745_28927);
if(temp__5720__auto___28938__$2){
var seq__28745_28939__$1 = temp__5720__auto___28938__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28745_28939__$1)){
var c__4550__auto___28940 = cljs.core.chunk_first.call(null,seq__28745_28939__$1);
var G__28941 = cljs.core.chunk_rest.call(null,seq__28745_28939__$1);
var G__28942 = c__4550__auto___28940;
var G__28943 = cljs.core.count.call(null,c__4550__auto___28940);
var G__28944 = (0);
seq__28745_28927 = G__28941;
chunk__28746_28928 = G__28942;
count__28747_28929 = G__28943;
i__28748_28930 = G__28944;
continue;
} else {
var vec__28758_28945 = cljs.core.first.call(null,seq__28745_28939__$1);
var col_28946 = cljs.core.nth.call(null,vec__28758_28945,(0),null);
var infos_28947 = cljs.core.nth.call(null,vec__28758_28945,(1),null);
encode_cols.call(null,infos_28947,source_idx_28877,line_28925,col_28946);


var G__28948 = cljs.core.next.call(null,seq__28745_28939__$1);
var G__28949 = null;
var G__28950 = (0);
var G__28951 = (0);
seq__28745_28927 = G__28948;
chunk__28746_28928 = G__28949;
count__28747_28929 = G__28950;
i__28748_28930 = G__28951;
continue;
}
} else {
}
}
break;
}


var G__28952 = cljs.core.next.call(null,seq__28681_28918__$1);
var G__28953 = null;
var G__28954 = (0);
var G__28955 = (0);
seq__28681_28881 = G__28952;
chunk__28682_28882 = G__28953;
count__28683_28883 = G__28954;
i__28684_28884 = G__28955;
continue;
}
} else {
}
}
break;
}


var G__28956 = cljs.core.next.call(null,seq__28413_28870__$1);
var G__28957 = null;
var G__28958 = (0);
var G__28959 = (0);
seq__28413_28781 = G__28956;
chunk__28414_28782 = G__28957;
count__28415_28783 = G__28958;
i__28416_28784 = G__28959;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__28761 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28406_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28406_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28407_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__28407_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28408_SHARP_){
return clojure.string.join.call(null,",",p1__28408_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__28762 = G__28761;
goog.object.set(G__28762,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__28762;
} else {
return G__28761;
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
var vec__28960 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__28960,(0),null);
var col_map = cljs.core.nth.call(null,vec__28960,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__28963 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__28963,(0),null);
var infos = cljs.core.nth.call(null,vec__28963,(1),null);
var G__28969 = cljs.core.next.call(null,col_map_seq);
var G__28970 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__28963,col,infos,vec__28960,line,col_map){
return (function (v,p__28966){
var map__28967 = p__28966;
var map__28967__$1 = (((((!((map__28967 == null))))?(((((map__28967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28967):map__28967);
var gline = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__28963,col,infos,vec__28960,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__28969;
new_cols = G__28970;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__28971 = cljs.core.next.call(null,line_map_seq);
var G__28972 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__28971;
new_lines = G__28972;
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
var seq__28973_29245 = cljs.core.seq.call(null,reverse_map);
var chunk__28974_29246 = null;
var count__28975_29247 = (0);
var i__28976_29248 = (0);
while(true){
if((i__28976_29248 < count__28975_29247)){
var vec__29111_29249 = cljs.core._nth.call(null,chunk__28974_29246,i__28976_29248);
var line_29250 = cljs.core.nth.call(null,vec__29111_29249,(0),null);
var columns_29251 = cljs.core.nth.call(null,vec__29111_29249,(1),null);
var seq__29114_29252 = cljs.core.seq.call(null,columns_29251);
var chunk__29115_29253 = null;
var count__29116_29254 = (0);
var i__29117_29255 = (0);
while(true){
if((i__29117_29255 < count__29116_29254)){
var vec__29148_29256 = cljs.core._nth.call(null,chunk__29115_29253,i__29117_29255);
var column_29257 = cljs.core.nth.call(null,vec__29148_29256,(0),null);
var column_info_29258 = cljs.core.nth.call(null,vec__29148_29256,(1),null);
var seq__29151_29259 = cljs.core.seq.call(null,column_info_29258);
var chunk__29152_29260 = null;
var count__29153_29261 = (0);
var i__29154_29262 = (0);
while(true){
if((i__29154_29262 < count__29153_29261)){
var map__29159_29263 = cljs.core._nth.call(null,chunk__29152_29260,i__29154_29262);
var map__29159_29264__$1 = (((((!((map__29159_29263 == null))))?(((((map__29159_29263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29159_29263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29159_29263):map__29159_29263);
var gline_29265 = cljs.core.get.call(null,map__29159_29264__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29266 = cljs.core.get.call(null,map__29159_29264__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29267 = cljs.core.get.call(null,map__29159_29264__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29265], null),cljs.core.fnil.call(null,((function (seq__29151_29259,chunk__29152_29260,count__29153_29261,i__29154_29262,seq__29114_29252,chunk__29115_29253,count__29116_29254,i__29117_29255,seq__28973_29245,chunk__28974_29246,count__28975_29247,i__28976_29248,map__29159_29263,map__29159_29264__$1,gline_29265,gcol_29266,name_29267,vec__29148_29256,column_29257,column_info_29258,vec__29111_29249,line_29250,columns_29251,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29266], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29250,new cljs.core.Keyword(null,"col","col",-1959363084),column_29257,new cljs.core.Keyword(null,"name","name",1843675177),name_29267], null));
});})(seq__29151_29259,chunk__29152_29260,count__29153_29261,i__29154_29262,seq__29114_29252,chunk__29115_29253,count__29116_29254,i__29117_29255,seq__28973_29245,chunk__28974_29246,count__28975_29247,i__28976_29248,map__29159_29263,map__29159_29264__$1,gline_29265,gcol_29266,name_29267,vec__29148_29256,column_29257,column_info_29258,vec__29111_29249,line_29250,columns_29251,inverted))
,cljs.core.sorted_map.call(null)));


var G__29268 = seq__29151_29259;
var G__29269 = chunk__29152_29260;
var G__29270 = count__29153_29261;
var G__29271 = (i__29154_29262 + (1));
seq__29151_29259 = G__29268;
chunk__29152_29260 = G__29269;
count__29153_29261 = G__29270;
i__29154_29262 = G__29271;
continue;
} else {
var temp__5720__auto___29272 = cljs.core.seq.call(null,seq__29151_29259);
if(temp__5720__auto___29272){
var seq__29151_29273__$1 = temp__5720__auto___29272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29151_29273__$1)){
var c__4550__auto___29274 = cljs.core.chunk_first.call(null,seq__29151_29273__$1);
var G__29275 = cljs.core.chunk_rest.call(null,seq__29151_29273__$1);
var G__29276 = c__4550__auto___29274;
var G__29277 = cljs.core.count.call(null,c__4550__auto___29274);
var G__29278 = (0);
seq__29151_29259 = G__29275;
chunk__29152_29260 = G__29276;
count__29153_29261 = G__29277;
i__29154_29262 = G__29278;
continue;
} else {
var map__29161_29279 = cljs.core.first.call(null,seq__29151_29273__$1);
var map__29161_29280__$1 = (((((!((map__29161_29279 == null))))?(((((map__29161_29279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29161_29279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29161_29279):map__29161_29279);
var gline_29281 = cljs.core.get.call(null,map__29161_29280__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29282 = cljs.core.get.call(null,map__29161_29280__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29283 = cljs.core.get.call(null,map__29161_29280__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29281], null),cljs.core.fnil.call(null,((function (seq__29151_29259,chunk__29152_29260,count__29153_29261,i__29154_29262,seq__29114_29252,chunk__29115_29253,count__29116_29254,i__29117_29255,seq__28973_29245,chunk__28974_29246,count__28975_29247,i__28976_29248,map__29161_29279,map__29161_29280__$1,gline_29281,gcol_29282,name_29283,seq__29151_29273__$1,temp__5720__auto___29272,vec__29148_29256,column_29257,column_info_29258,vec__29111_29249,line_29250,columns_29251,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29282], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29250,new cljs.core.Keyword(null,"col","col",-1959363084),column_29257,new cljs.core.Keyword(null,"name","name",1843675177),name_29283], null));
});})(seq__29151_29259,chunk__29152_29260,count__29153_29261,i__29154_29262,seq__29114_29252,chunk__29115_29253,count__29116_29254,i__29117_29255,seq__28973_29245,chunk__28974_29246,count__28975_29247,i__28976_29248,map__29161_29279,map__29161_29280__$1,gline_29281,gcol_29282,name_29283,seq__29151_29273__$1,temp__5720__auto___29272,vec__29148_29256,column_29257,column_info_29258,vec__29111_29249,line_29250,columns_29251,inverted))
,cljs.core.sorted_map.call(null)));


var G__29284 = cljs.core.next.call(null,seq__29151_29273__$1);
var G__29285 = null;
var G__29286 = (0);
var G__29287 = (0);
seq__29151_29259 = G__29284;
chunk__29152_29260 = G__29285;
count__29153_29261 = G__29286;
i__29154_29262 = G__29287;
continue;
}
} else {
}
}
break;
}


var G__29288 = seq__29114_29252;
var G__29289 = chunk__29115_29253;
var G__29290 = count__29116_29254;
var G__29291 = (i__29117_29255 + (1));
seq__29114_29252 = G__29288;
chunk__29115_29253 = G__29289;
count__29116_29254 = G__29290;
i__29117_29255 = G__29291;
continue;
} else {
var temp__5720__auto___29292 = cljs.core.seq.call(null,seq__29114_29252);
if(temp__5720__auto___29292){
var seq__29114_29293__$1 = temp__5720__auto___29292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29114_29293__$1)){
var c__4550__auto___29294 = cljs.core.chunk_first.call(null,seq__29114_29293__$1);
var G__29295 = cljs.core.chunk_rest.call(null,seq__29114_29293__$1);
var G__29296 = c__4550__auto___29294;
var G__29297 = cljs.core.count.call(null,c__4550__auto___29294);
var G__29298 = (0);
seq__29114_29252 = G__29295;
chunk__29115_29253 = G__29296;
count__29116_29254 = G__29297;
i__29117_29255 = G__29298;
continue;
} else {
var vec__29163_29299 = cljs.core.first.call(null,seq__29114_29293__$1);
var column_29300 = cljs.core.nth.call(null,vec__29163_29299,(0),null);
var column_info_29301 = cljs.core.nth.call(null,vec__29163_29299,(1),null);
var seq__29166_29302 = cljs.core.seq.call(null,column_info_29301);
var chunk__29167_29303 = null;
var count__29168_29304 = (0);
var i__29169_29305 = (0);
while(true){
if((i__29169_29305 < count__29168_29304)){
var map__29174_29306 = cljs.core._nth.call(null,chunk__29167_29303,i__29169_29305);
var map__29174_29307__$1 = (((((!((map__29174_29306 == null))))?(((((map__29174_29306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29174_29306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29174_29306):map__29174_29306);
var gline_29308 = cljs.core.get.call(null,map__29174_29307__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29309 = cljs.core.get.call(null,map__29174_29307__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29310 = cljs.core.get.call(null,map__29174_29307__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29308], null),cljs.core.fnil.call(null,((function (seq__29166_29302,chunk__29167_29303,count__29168_29304,i__29169_29305,seq__29114_29252,chunk__29115_29253,count__29116_29254,i__29117_29255,seq__28973_29245,chunk__28974_29246,count__28975_29247,i__28976_29248,map__29174_29306,map__29174_29307__$1,gline_29308,gcol_29309,name_29310,vec__29163_29299,column_29300,column_info_29301,seq__29114_29293__$1,temp__5720__auto___29292,vec__29111_29249,line_29250,columns_29251,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29309], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29250,new cljs.core.Keyword(null,"col","col",-1959363084),column_29300,new cljs.core.Keyword(null,"name","name",1843675177),name_29310], null));
});})(seq__29166_29302,chunk__29167_29303,count__29168_29304,i__29169_29305,seq__29114_29252,chunk__29115_29253,count__29116_29254,i__29117_29255,seq__28973_29245,chunk__28974_29246,count__28975_29247,i__28976_29248,map__29174_29306,map__29174_29307__$1,gline_29308,gcol_29309,name_29310,vec__29163_29299,column_29300,column_info_29301,seq__29114_29293__$1,temp__5720__auto___29292,vec__29111_29249,line_29250,columns_29251,inverted))
,cljs.core.sorted_map.call(null)));


var G__29311 = seq__29166_29302;
var G__29312 = chunk__29167_29303;
var G__29313 = count__29168_29304;
var G__29314 = (i__29169_29305 + (1));
seq__29166_29302 = G__29311;
chunk__29167_29303 = G__29312;
count__29168_29304 = G__29313;
i__29169_29305 = G__29314;
continue;
} else {
var temp__5720__auto___29315__$1 = cljs.core.seq.call(null,seq__29166_29302);
if(temp__5720__auto___29315__$1){
var seq__29166_29316__$1 = temp__5720__auto___29315__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29166_29316__$1)){
var c__4550__auto___29317 = cljs.core.chunk_first.call(null,seq__29166_29316__$1);
var G__29318 = cljs.core.chunk_rest.call(null,seq__29166_29316__$1);
var G__29319 = c__4550__auto___29317;
var G__29320 = cljs.core.count.call(null,c__4550__auto___29317);
var G__29321 = (0);
seq__29166_29302 = G__29318;
chunk__29167_29303 = G__29319;
count__29168_29304 = G__29320;
i__29169_29305 = G__29321;
continue;
} else {
var map__29176_29322 = cljs.core.first.call(null,seq__29166_29316__$1);
var map__29176_29323__$1 = (((((!((map__29176_29322 == null))))?(((((map__29176_29322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29176_29322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29176_29322):map__29176_29322);
var gline_29324 = cljs.core.get.call(null,map__29176_29323__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29325 = cljs.core.get.call(null,map__29176_29323__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29326 = cljs.core.get.call(null,map__29176_29323__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29324], null),cljs.core.fnil.call(null,((function (seq__29166_29302,chunk__29167_29303,count__29168_29304,i__29169_29305,seq__29114_29252,chunk__29115_29253,count__29116_29254,i__29117_29255,seq__28973_29245,chunk__28974_29246,count__28975_29247,i__28976_29248,map__29176_29322,map__29176_29323__$1,gline_29324,gcol_29325,name_29326,seq__29166_29316__$1,temp__5720__auto___29315__$1,vec__29163_29299,column_29300,column_info_29301,seq__29114_29293__$1,temp__5720__auto___29292,vec__29111_29249,line_29250,columns_29251,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29325], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29250,new cljs.core.Keyword(null,"col","col",-1959363084),column_29300,new cljs.core.Keyword(null,"name","name",1843675177),name_29326], null));
});})(seq__29166_29302,chunk__29167_29303,count__29168_29304,i__29169_29305,seq__29114_29252,chunk__29115_29253,count__29116_29254,i__29117_29255,seq__28973_29245,chunk__28974_29246,count__28975_29247,i__28976_29248,map__29176_29322,map__29176_29323__$1,gline_29324,gcol_29325,name_29326,seq__29166_29316__$1,temp__5720__auto___29315__$1,vec__29163_29299,column_29300,column_info_29301,seq__29114_29293__$1,temp__5720__auto___29292,vec__29111_29249,line_29250,columns_29251,inverted))
,cljs.core.sorted_map.call(null)));


var G__29327 = cljs.core.next.call(null,seq__29166_29316__$1);
var G__29328 = null;
var G__29329 = (0);
var G__29330 = (0);
seq__29166_29302 = G__29327;
chunk__29167_29303 = G__29328;
count__29168_29304 = G__29329;
i__29169_29305 = G__29330;
continue;
}
} else {
}
}
break;
}


var G__29331 = cljs.core.next.call(null,seq__29114_29293__$1);
var G__29332 = null;
var G__29333 = (0);
var G__29334 = (0);
seq__29114_29252 = G__29331;
chunk__29115_29253 = G__29332;
count__29116_29254 = G__29333;
i__29117_29255 = G__29334;
continue;
}
} else {
}
}
break;
}


var G__29335 = seq__28973_29245;
var G__29336 = chunk__28974_29246;
var G__29337 = count__28975_29247;
var G__29338 = (i__28976_29248 + (1));
seq__28973_29245 = G__29335;
chunk__28974_29246 = G__29336;
count__28975_29247 = G__29337;
i__28976_29248 = G__29338;
continue;
} else {
var temp__5720__auto___29339 = cljs.core.seq.call(null,seq__28973_29245);
if(temp__5720__auto___29339){
var seq__28973_29340__$1 = temp__5720__auto___29339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28973_29340__$1)){
var c__4550__auto___29341 = cljs.core.chunk_first.call(null,seq__28973_29340__$1);
var G__29342 = cljs.core.chunk_rest.call(null,seq__28973_29340__$1);
var G__29343 = c__4550__auto___29341;
var G__29344 = cljs.core.count.call(null,c__4550__auto___29341);
var G__29345 = (0);
seq__28973_29245 = G__29342;
chunk__28974_29246 = G__29343;
count__28975_29247 = G__29344;
i__28976_29248 = G__29345;
continue;
} else {
var vec__29178_29346 = cljs.core.first.call(null,seq__28973_29340__$1);
var line_29347 = cljs.core.nth.call(null,vec__29178_29346,(0),null);
var columns_29348 = cljs.core.nth.call(null,vec__29178_29346,(1),null);
var seq__29181_29349 = cljs.core.seq.call(null,columns_29348);
var chunk__29182_29350 = null;
var count__29183_29351 = (0);
var i__29184_29352 = (0);
while(true){
if((i__29184_29352 < count__29183_29351)){
var vec__29215_29353 = cljs.core._nth.call(null,chunk__29182_29350,i__29184_29352);
var column_29354 = cljs.core.nth.call(null,vec__29215_29353,(0),null);
var column_info_29355 = cljs.core.nth.call(null,vec__29215_29353,(1),null);
var seq__29218_29356 = cljs.core.seq.call(null,column_info_29355);
var chunk__29219_29357 = null;
var count__29220_29358 = (0);
var i__29221_29359 = (0);
while(true){
if((i__29221_29359 < count__29220_29358)){
var map__29226_29360 = cljs.core._nth.call(null,chunk__29219_29357,i__29221_29359);
var map__29226_29361__$1 = (((((!((map__29226_29360 == null))))?(((((map__29226_29360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29226_29360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29226_29360):map__29226_29360);
var gline_29362 = cljs.core.get.call(null,map__29226_29361__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29363 = cljs.core.get.call(null,map__29226_29361__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29364 = cljs.core.get.call(null,map__29226_29361__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29362], null),cljs.core.fnil.call(null,((function (seq__29218_29356,chunk__29219_29357,count__29220_29358,i__29221_29359,seq__29181_29349,chunk__29182_29350,count__29183_29351,i__29184_29352,seq__28973_29245,chunk__28974_29246,count__28975_29247,i__28976_29248,map__29226_29360,map__29226_29361__$1,gline_29362,gcol_29363,name_29364,vec__29215_29353,column_29354,column_info_29355,vec__29178_29346,line_29347,columns_29348,seq__28973_29340__$1,temp__5720__auto___29339,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29363], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29347,new cljs.core.Keyword(null,"col","col",-1959363084),column_29354,new cljs.core.Keyword(null,"name","name",1843675177),name_29364], null));
});})(seq__29218_29356,chunk__29219_29357,count__29220_29358,i__29221_29359,seq__29181_29349,chunk__29182_29350,count__29183_29351,i__29184_29352,seq__28973_29245,chunk__28974_29246,count__28975_29247,i__28976_29248,map__29226_29360,map__29226_29361__$1,gline_29362,gcol_29363,name_29364,vec__29215_29353,column_29354,column_info_29355,vec__29178_29346,line_29347,columns_29348,seq__28973_29340__$1,temp__5720__auto___29339,inverted))
,cljs.core.sorted_map.call(null)));


var G__29365 = seq__29218_29356;
var G__29366 = chunk__29219_29357;
var G__29367 = count__29220_29358;
var G__29368 = (i__29221_29359 + (1));
seq__29218_29356 = G__29365;
chunk__29219_29357 = G__29366;
count__29220_29358 = G__29367;
i__29221_29359 = G__29368;
continue;
} else {
var temp__5720__auto___29369__$1 = cljs.core.seq.call(null,seq__29218_29356);
if(temp__5720__auto___29369__$1){
var seq__29218_29370__$1 = temp__5720__auto___29369__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29218_29370__$1)){
var c__4550__auto___29371 = cljs.core.chunk_first.call(null,seq__29218_29370__$1);
var G__29372 = cljs.core.chunk_rest.call(null,seq__29218_29370__$1);
var G__29373 = c__4550__auto___29371;
var G__29374 = cljs.core.count.call(null,c__4550__auto___29371);
var G__29375 = (0);
seq__29218_29356 = G__29372;
chunk__29219_29357 = G__29373;
count__29220_29358 = G__29374;
i__29221_29359 = G__29375;
continue;
} else {
var map__29228_29376 = cljs.core.first.call(null,seq__29218_29370__$1);
var map__29228_29377__$1 = (((((!((map__29228_29376 == null))))?(((((map__29228_29376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29228_29376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29228_29376):map__29228_29376);
var gline_29378 = cljs.core.get.call(null,map__29228_29377__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29379 = cljs.core.get.call(null,map__29228_29377__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29380 = cljs.core.get.call(null,map__29228_29377__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29378], null),cljs.core.fnil.call(null,((function (seq__29218_29356,chunk__29219_29357,count__29220_29358,i__29221_29359,seq__29181_29349,chunk__29182_29350,count__29183_29351,i__29184_29352,seq__28973_29245,chunk__28974_29246,count__28975_29247,i__28976_29248,map__29228_29376,map__29228_29377__$1,gline_29378,gcol_29379,name_29380,seq__29218_29370__$1,temp__5720__auto___29369__$1,vec__29215_29353,column_29354,column_info_29355,vec__29178_29346,line_29347,columns_29348,seq__28973_29340__$1,temp__5720__auto___29339,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29379], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29347,new cljs.core.Keyword(null,"col","col",-1959363084),column_29354,new cljs.core.Keyword(null,"name","name",1843675177),name_29380], null));
});})(seq__29218_29356,chunk__29219_29357,count__29220_29358,i__29221_29359,seq__29181_29349,chunk__29182_29350,count__29183_29351,i__29184_29352,seq__28973_29245,chunk__28974_29246,count__28975_29247,i__28976_29248,map__29228_29376,map__29228_29377__$1,gline_29378,gcol_29379,name_29380,seq__29218_29370__$1,temp__5720__auto___29369__$1,vec__29215_29353,column_29354,column_info_29355,vec__29178_29346,line_29347,columns_29348,seq__28973_29340__$1,temp__5720__auto___29339,inverted))
,cljs.core.sorted_map.call(null)));


var G__29381 = cljs.core.next.call(null,seq__29218_29370__$1);
var G__29382 = null;
var G__29383 = (0);
var G__29384 = (0);
seq__29218_29356 = G__29381;
chunk__29219_29357 = G__29382;
count__29220_29358 = G__29383;
i__29221_29359 = G__29384;
continue;
}
} else {
}
}
break;
}


var G__29385 = seq__29181_29349;
var G__29386 = chunk__29182_29350;
var G__29387 = count__29183_29351;
var G__29388 = (i__29184_29352 + (1));
seq__29181_29349 = G__29385;
chunk__29182_29350 = G__29386;
count__29183_29351 = G__29387;
i__29184_29352 = G__29388;
continue;
} else {
var temp__5720__auto___29389__$1 = cljs.core.seq.call(null,seq__29181_29349);
if(temp__5720__auto___29389__$1){
var seq__29181_29390__$1 = temp__5720__auto___29389__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29181_29390__$1)){
var c__4550__auto___29391 = cljs.core.chunk_first.call(null,seq__29181_29390__$1);
var G__29392 = cljs.core.chunk_rest.call(null,seq__29181_29390__$1);
var G__29393 = c__4550__auto___29391;
var G__29394 = cljs.core.count.call(null,c__4550__auto___29391);
var G__29395 = (0);
seq__29181_29349 = G__29392;
chunk__29182_29350 = G__29393;
count__29183_29351 = G__29394;
i__29184_29352 = G__29395;
continue;
} else {
var vec__29230_29396 = cljs.core.first.call(null,seq__29181_29390__$1);
var column_29397 = cljs.core.nth.call(null,vec__29230_29396,(0),null);
var column_info_29398 = cljs.core.nth.call(null,vec__29230_29396,(1),null);
var seq__29233_29399 = cljs.core.seq.call(null,column_info_29398);
var chunk__29234_29400 = null;
var count__29235_29401 = (0);
var i__29236_29402 = (0);
while(true){
if((i__29236_29402 < count__29235_29401)){
var map__29241_29403 = cljs.core._nth.call(null,chunk__29234_29400,i__29236_29402);
var map__29241_29404__$1 = (((((!((map__29241_29403 == null))))?(((((map__29241_29403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29241_29403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29241_29403):map__29241_29403);
var gline_29405 = cljs.core.get.call(null,map__29241_29404__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29406 = cljs.core.get.call(null,map__29241_29404__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29407 = cljs.core.get.call(null,map__29241_29404__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29405], null),cljs.core.fnil.call(null,((function (seq__29233_29399,chunk__29234_29400,count__29235_29401,i__29236_29402,seq__29181_29349,chunk__29182_29350,count__29183_29351,i__29184_29352,seq__28973_29245,chunk__28974_29246,count__28975_29247,i__28976_29248,map__29241_29403,map__29241_29404__$1,gline_29405,gcol_29406,name_29407,vec__29230_29396,column_29397,column_info_29398,seq__29181_29390__$1,temp__5720__auto___29389__$1,vec__29178_29346,line_29347,columns_29348,seq__28973_29340__$1,temp__5720__auto___29339,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29406], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29347,new cljs.core.Keyword(null,"col","col",-1959363084),column_29397,new cljs.core.Keyword(null,"name","name",1843675177),name_29407], null));
});})(seq__29233_29399,chunk__29234_29400,count__29235_29401,i__29236_29402,seq__29181_29349,chunk__29182_29350,count__29183_29351,i__29184_29352,seq__28973_29245,chunk__28974_29246,count__28975_29247,i__28976_29248,map__29241_29403,map__29241_29404__$1,gline_29405,gcol_29406,name_29407,vec__29230_29396,column_29397,column_info_29398,seq__29181_29390__$1,temp__5720__auto___29389__$1,vec__29178_29346,line_29347,columns_29348,seq__28973_29340__$1,temp__5720__auto___29339,inverted))
,cljs.core.sorted_map.call(null)));


var G__29408 = seq__29233_29399;
var G__29409 = chunk__29234_29400;
var G__29410 = count__29235_29401;
var G__29411 = (i__29236_29402 + (1));
seq__29233_29399 = G__29408;
chunk__29234_29400 = G__29409;
count__29235_29401 = G__29410;
i__29236_29402 = G__29411;
continue;
} else {
var temp__5720__auto___29412__$2 = cljs.core.seq.call(null,seq__29233_29399);
if(temp__5720__auto___29412__$2){
var seq__29233_29413__$1 = temp__5720__auto___29412__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29233_29413__$1)){
var c__4550__auto___29414 = cljs.core.chunk_first.call(null,seq__29233_29413__$1);
var G__29415 = cljs.core.chunk_rest.call(null,seq__29233_29413__$1);
var G__29416 = c__4550__auto___29414;
var G__29417 = cljs.core.count.call(null,c__4550__auto___29414);
var G__29418 = (0);
seq__29233_29399 = G__29415;
chunk__29234_29400 = G__29416;
count__29235_29401 = G__29417;
i__29236_29402 = G__29418;
continue;
} else {
var map__29243_29419 = cljs.core.first.call(null,seq__29233_29413__$1);
var map__29243_29420__$1 = (((((!((map__29243_29419 == null))))?(((((map__29243_29419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29243_29419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29243_29419):map__29243_29419);
var gline_29421 = cljs.core.get.call(null,map__29243_29420__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29422 = cljs.core.get.call(null,map__29243_29420__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29423 = cljs.core.get.call(null,map__29243_29420__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29421], null),cljs.core.fnil.call(null,((function (seq__29233_29399,chunk__29234_29400,count__29235_29401,i__29236_29402,seq__29181_29349,chunk__29182_29350,count__29183_29351,i__29184_29352,seq__28973_29245,chunk__28974_29246,count__28975_29247,i__28976_29248,map__29243_29419,map__29243_29420__$1,gline_29421,gcol_29422,name_29423,seq__29233_29413__$1,temp__5720__auto___29412__$2,vec__29230_29396,column_29397,column_info_29398,seq__29181_29390__$1,temp__5720__auto___29389__$1,vec__29178_29346,line_29347,columns_29348,seq__28973_29340__$1,temp__5720__auto___29339,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29422], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29347,new cljs.core.Keyword(null,"col","col",-1959363084),column_29397,new cljs.core.Keyword(null,"name","name",1843675177),name_29423], null));
});})(seq__29233_29399,chunk__29234_29400,count__29235_29401,i__29236_29402,seq__29181_29349,chunk__29182_29350,count__29183_29351,i__29184_29352,seq__28973_29245,chunk__28974_29246,count__28975_29247,i__28976_29248,map__29243_29419,map__29243_29420__$1,gline_29421,gcol_29422,name_29423,seq__29233_29413__$1,temp__5720__auto___29412__$2,vec__29230_29396,column_29397,column_info_29398,seq__29181_29390__$1,temp__5720__auto___29389__$1,vec__29178_29346,line_29347,columns_29348,seq__28973_29340__$1,temp__5720__auto___29339,inverted))
,cljs.core.sorted_map.call(null)));


var G__29424 = cljs.core.next.call(null,seq__29233_29413__$1);
var G__29425 = null;
var G__29426 = (0);
var G__29427 = (0);
seq__29233_29399 = G__29424;
chunk__29234_29400 = G__29425;
count__29235_29401 = G__29426;
i__29236_29402 = G__29427;
continue;
}
} else {
}
}
break;
}


var G__29428 = cljs.core.next.call(null,seq__29181_29390__$1);
var G__29429 = null;
var G__29430 = (0);
var G__29431 = (0);
seq__29181_29349 = G__29428;
chunk__29182_29350 = G__29429;
count__29183_29351 = G__29430;
i__29184_29352 = G__29431;
continue;
}
} else {
}
}
break;
}


var G__29432 = cljs.core.next.call(null,seq__28973_29340__$1);
var G__29433 = null;
var G__29434 = (0);
var G__29435 = (0);
seq__28973_29245 = G__29432;
chunk__28974_29246 = G__29433;
count__28975_29247 = G__29434;
i__28976_29248 = G__29435;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1601415260206
