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
return cljs.core.reduce.call(null,(function (m,p__28356){
var vec__28357 = p__28356;
var i = cljs.core.nth.call(null,vec__28357,(0),null);
var v = cljs.core.nth.call(null,vec__28357,(1),null);
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
var vec__28360 = seg;
var gcol = cljs.core.nth.call(null,vec__28360,(0),null);
var source = cljs.core.nth.call(null,vec__28360,(1),null);
var line = cljs.core.nth.call(null,vec__28360,(2),null);
var col = cljs.core.nth.call(null,vec__28360,(3),null);
var name = cljs.core.nth.call(null,vec__28360,(4),null);
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
var vec__28363 = seg;
var gcol = cljs.core.nth.call(null,vec__28363,(0),null);
var source = cljs.core.nth.call(null,vec__28363,(1),null);
var line = cljs.core.nth.call(null,vec__28363,(2),null);
var col = cljs.core.nth.call(null,vec__28363,(3),null);
var name = cljs.core.nth.call(null,vec__28363,(4),null);
var vec__28366 = relseg;
var rgcol = cljs.core.nth.call(null,vec__28366,(0),null);
var rsource = cljs.core.nth.call(null,vec__28366,(1),null);
var rline = cljs.core.nth.call(null,vec__28366,(2),null);
var rcol = cljs.core.nth.call(null,vec__28366,(3),null);
var rname = cljs.core.nth.call(null,vec__28366,(4),null);
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
var map__28369 = segmap;
var map__28369__$1 = (((((!((map__28369 == null))))?(((((map__28369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28369):map__28369);
var gcol = cljs.core.get.call(null,map__28369__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__28369__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__28369__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__28369__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__28369__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__28369,map__28369__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__28369,map__28369__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__28369,map__28369__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__28369,map__28369__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__28369,map__28369__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__28369,map__28369__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__28372 = arguments.length;
switch (G__28372) {
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
var vec__28376 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__28380 = cljs.core.next.call(null,segs__$1);
var G__28381 = nrelseg;
var G__28382 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__28380;
relseg__$1 = G__28381;
result__$1 = G__28382;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__28376,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__28376,(1),null);
var G__28383 = (gline + (1));
var G__28384 = cljs.core.next.call(null,lines__$1);
var G__28385 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__28386 = result__$1;
gline = G__28383;
lines__$1 = G__28384;
relseg = G__28385;
result = G__28386;
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
var map__28388 = segmap;
var map__28388__$1 = (((((!((map__28388 == null))))?(((((map__28388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28388):map__28388);
var gcol = cljs.core.get.call(null,map__28388__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__28388__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__28388__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__28388__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__28388__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__28388,map__28388__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__28388,map__28388__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__28387_SHARP_){
return cljs.core.conj.call(null,p1__28387_SHARP_,d__$1);
});})(map__28388,map__28388__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__28388,map__28388__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__28391 = arguments.length;
switch (G__28391) {
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
var vec__28395 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__28399 = cljs.core.next.call(null,segs__$1);
var G__28400 = nrelseg;
var G__28401 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__28399;
relseg__$1 = G__28400;
result__$1 = G__28401;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__28395,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__28395,(1),null);
var G__28402 = (gline + (1));
var G__28403 = cljs.core.next.call(null,lines__$1);
var G__28404 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__28405 = result__$1;
gline = G__28402;
lines__$1 = G__28403;
relseg = G__28404;
result = G__28405;
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
return (function (p__28406){
var vec__28407 = p__28406;
var _ = cljs.core.nth.call(null,vec__28407,(0),null);
var source = cljs.core.nth.call(null,vec__28407,(1),null);
var line = cljs.core.nth.call(null,vec__28407,(2),null);
var col = cljs.core.nth.call(null,vec__28407,(3),null);
var name = cljs.core.nth.call(null,vec__28407,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__28410){
var vec__28411 = p__28410;
var gcol = cljs.core.nth.call(null,vec__28411,(0),null);
var sidx = cljs.core.nth.call(null,vec__28411,(1),null);
var line = cljs.core.nth.call(null,vec__28411,(2),null);
var col = cljs.core.nth.call(null,vec__28411,(3),null);
var name = cljs.core.nth.call(null,vec__28411,(4),null);
var seg = vec__28411;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__28411,gcol,sidx,line,col,name,seg,relseg){
return (function (p__28414){
var vec__28415 = p__28414;
var _ = cljs.core.nth.call(null,vec__28415,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28415,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__28415,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__28415,(3),null);
var lname = cljs.core.nth.call(null,vec__28415,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__28411,gcol,sidx,line,col,name,seg,relseg))
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
var seq__28421 = cljs.core.seq.call(null,infos);
var chunk__28422 = null;
var count__28423 = (0);
var i__28424 = (0);
while(true){
if((i__28424 < count__28423)){
var info = cljs.core._nth.call(null,chunk__28422,i__28424);
var segv_28775 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_28776 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28777 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_28776 > (lc_28777 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__28421,chunk__28422,count__28423,i__28424,segv_28775,gline_28776,lc_28777,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_28776 - (lc_28777 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28775], null));
});})(seq__28421,chunk__28422,count__28423,i__28424,segv_28775,gline_28776,lc_28777,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__28421,chunk__28422,count__28423,i__28424,segv_28775,gline_28776,lc_28777,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28776], null),cljs.core.conj,segv_28775);
});})(seq__28421,chunk__28422,count__28423,i__28424,segv_28775,gline_28776,lc_28777,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__28778 = seq__28421;
var G__28779 = chunk__28422;
var G__28780 = count__28423;
var G__28781 = (i__28424 + (1));
seq__28421 = G__28778;
chunk__28422 = G__28779;
count__28423 = G__28780;
i__28424 = G__28781;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28421);
if(temp__5720__auto__){
var seq__28421__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28421__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28421__$1);
var G__28782 = cljs.core.chunk_rest.call(null,seq__28421__$1);
var G__28783 = c__4550__auto__;
var G__28784 = cljs.core.count.call(null,c__4550__auto__);
var G__28785 = (0);
seq__28421 = G__28782;
chunk__28422 = G__28783;
count__28423 = G__28784;
i__28424 = G__28785;
continue;
} else {
var info = cljs.core.first.call(null,seq__28421__$1);
var segv_28786 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_28787 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28788 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_28787 > (lc_28788 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__28421,chunk__28422,count__28423,i__28424,segv_28786,gline_28787,lc_28788,info,seq__28421__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_28787 - (lc_28788 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28786], null));
});})(seq__28421,chunk__28422,count__28423,i__28424,segv_28786,gline_28787,lc_28788,info,seq__28421__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__28421,chunk__28422,count__28423,i__28424,segv_28786,gline_28787,lc_28788,info,seq__28421__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28787], null),cljs.core.conj,segv_28786);
});})(seq__28421,chunk__28422,count__28423,i__28424,segv_28786,gline_28787,lc_28788,info,seq__28421__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__28789 = cljs.core.next.call(null,seq__28421__$1);
var G__28790 = null;
var G__28791 = (0);
var G__28792 = (0);
seq__28421 = G__28789;
chunk__28422 = G__28790;
count__28423 = G__28791;
i__28424 = G__28792;
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
var seq__28425_28793 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__28426_28794 = null;
var count__28427_28795 = (0);
var i__28428_28796 = (0);
while(true){
if((i__28428_28796 < count__28427_28795)){
var vec__28601_28797 = cljs.core._nth.call(null,chunk__28426_28794,i__28428_28796);
var source_idx_28798 = cljs.core.nth.call(null,vec__28601_28797,(0),null);
var vec__28604_28799 = cljs.core.nth.call(null,vec__28601_28797,(1),null);
var __28800 = cljs.core.nth.call(null,vec__28604_28799,(0),null);
var lines_28801__$1 = cljs.core.nth.call(null,vec__28604_28799,(1),null);
var seq__28607_28802 = cljs.core.seq.call(null,lines_28801__$1);
var chunk__28608_28803 = null;
var count__28609_28804 = (0);
var i__28610_28805 = (0);
while(true){
if((i__28610_28805 < count__28609_28804)){
var vec__28649_28806 = cljs.core._nth.call(null,chunk__28608_28803,i__28610_28805);
var line_28807 = cljs.core.nth.call(null,vec__28649_28806,(0),null);
var cols_28808 = cljs.core.nth.call(null,vec__28649_28806,(1),null);
var seq__28652_28809 = cljs.core.seq.call(null,cols_28808);
var chunk__28653_28810 = null;
var count__28654_28811 = (0);
var i__28655_28812 = (0);
while(true){
if((i__28655_28812 < count__28654_28811)){
var vec__28662_28813 = cljs.core._nth.call(null,chunk__28653_28810,i__28655_28812);
var col_28814 = cljs.core.nth.call(null,vec__28662_28813,(0),null);
var infos_28815 = cljs.core.nth.call(null,vec__28662_28813,(1),null);
encode_cols.call(null,infos_28815,source_idx_28798,line_28807,col_28814);


var G__28816 = seq__28652_28809;
var G__28817 = chunk__28653_28810;
var G__28818 = count__28654_28811;
var G__28819 = (i__28655_28812 + (1));
seq__28652_28809 = G__28816;
chunk__28653_28810 = G__28817;
count__28654_28811 = G__28818;
i__28655_28812 = G__28819;
continue;
} else {
var temp__5720__auto___28820 = cljs.core.seq.call(null,seq__28652_28809);
if(temp__5720__auto___28820){
var seq__28652_28821__$1 = temp__5720__auto___28820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28652_28821__$1)){
var c__4550__auto___28822 = cljs.core.chunk_first.call(null,seq__28652_28821__$1);
var G__28823 = cljs.core.chunk_rest.call(null,seq__28652_28821__$1);
var G__28824 = c__4550__auto___28822;
var G__28825 = cljs.core.count.call(null,c__4550__auto___28822);
var G__28826 = (0);
seq__28652_28809 = G__28823;
chunk__28653_28810 = G__28824;
count__28654_28811 = G__28825;
i__28655_28812 = G__28826;
continue;
} else {
var vec__28665_28827 = cljs.core.first.call(null,seq__28652_28821__$1);
var col_28828 = cljs.core.nth.call(null,vec__28665_28827,(0),null);
var infos_28829 = cljs.core.nth.call(null,vec__28665_28827,(1),null);
encode_cols.call(null,infos_28829,source_idx_28798,line_28807,col_28828);


var G__28830 = cljs.core.next.call(null,seq__28652_28821__$1);
var G__28831 = null;
var G__28832 = (0);
var G__28833 = (0);
seq__28652_28809 = G__28830;
chunk__28653_28810 = G__28831;
count__28654_28811 = G__28832;
i__28655_28812 = G__28833;
continue;
}
} else {
}
}
break;
}


var G__28834 = seq__28607_28802;
var G__28835 = chunk__28608_28803;
var G__28836 = count__28609_28804;
var G__28837 = (i__28610_28805 + (1));
seq__28607_28802 = G__28834;
chunk__28608_28803 = G__28835;
count__28609_28804 = G__28836;
i__28610_28805 = G__28837;
continue;
} else {
var temp__5720__auto___28838 = cljs.core.seq.call(null,seq__28607_28802);
if(temp__5720__auto___28838){
var seq__28607_28839__$1 = temp__5720__auto___28838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28607_28839__$1)){
var c__4550__auto___28840 = cljs.core.chunk_first.call(null,seq__28607_28839__$1);
var G__28841 = cljs.core.chunk_rest.call(null,seq__28607_28839__$1);
var G__28842 = c__4550__auto___28840;
var G__28843 = cljs.core.count.call(null,c__4550__auto___28840);
var G__28844 = (0);
seq__28607_28802 = G__28841;
chunk__28608_28803 = G__28842;
count__28609_28804 = G__28843;
i__28610_28805 = G__28844;
continue;
} else {
var vec__28668_28845 = cljs.core.first.call(null,seq__28607_28839__$1);
var line_28846 = cljs.core.nth.call(null,vec__28668_28845,(0),null);
var cols_28847 = cljs.core.nth.call(null,vec__28668_28845,(1),null);
var seq__28671_28848 = cljs.core.seq.call(null,cols_28847);
var chunk__28672_28849 = null;
var count__28673_28850 = (0);
var i__28674_28851 = (0);
while(true){
if((i__28674_28851 < count__28673_28850)){
var vec__28681_28852 = cljs.core._nth.call(null,chunk__28672_28849,i__28674_28851);
var col_28853 = cljs.core.nth.call(null,vec__28681_28852,(0),null);
var infos_28854 = cljs.core.nth.call(null,vec__28681_28852,(1),null);
encode_cols.call(null,infos_28854,source_idx_28798,line_28846,col_28853);


var G__28855 = seq__28671_28848;
var G__28856 = chunk__28672_28849;
var G__28857 = count__28673_28850;
var G__28858 = (i__28674_28851 + (1));
seq__28671_28848 = G__28855;
chunk__28672_28849 = G__28856;
count__28673_28850 = G__28857;
i__28674_28851 = G__28858;
continue;
} else {
var temp__5720__auto___28859__$1 = cljs.core.seq.call(null,seq__28671_28848);
if(temp__5720__auto___28859__$1){
var seq__28671_28860__$1 = temp__5720__auto___28859__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28671_28860__$1)){
var c__4550__auto___28861 = cljs.core.chunk_first.call(null,seq__28671_28860__$1);
var G__28862 = cljs.core.chunk_rest.call(null,seq__28671_28860__$1);
var G__28863 = c__4550__auto___28861;
var G__28864 = cljs.core.count.call(null,c__4550__auto___28861);
var G__28865 = (0);
seq__28671_28848 = G__28862;
chunk__28672_28849 = G__28863;
count__28673_28850 = G__28864;
i__28674_28851 = G__28865;
continue;
} else {
var vec__28684_28866 = cljs.core.first.call(null,seq__28671_28860__$1);
var col_28867 = cljs.core.nth.call(null,vec__28684_28866,(0),null);
var infos_28868 = cljs.core.nth.call(null,vec__28684_28866,(1),null);
encode_cols.call(null,infos_28868,source_idx_28798,line_28846,col_28867);


var G__28869 = cljs.core.next.call(null,seq__28671_28860__$1);
var G__28870 = null;
var G__28871 = (0);
var G__28872 = (0);
seq__28671_28848 = G__28869;
chunk__28672_28849 = G__28870;
count__28673_28850 = G__28871;
i__28674_28851 = G__28872;
continue;
}
} else {
}
}
break;
}


var G__28873 = cljs.core.next.call(null,seq__28607_28839__$1);
var G__28874 = null;
var G__28875 = (0);
var G__28876 = (0);
seq__28607_28802 = G__28873;
chunk__28608_28803 = G__28874;
count__28609_28804 = G__28875;
i__28610_28805 = G__28876;
continue;
}
} else {
}
}
break;
}


var G__28877 = seq__28425_28793;
var G__28878 = chunk__28426_28794;
var G__28879 = count__28427_28795;
var G__28880 = (i__28428_28796 + (1));
seq__28425_28793 = G__28877;
chunk__28426_28794 = G__28878;
count__28427_28795 = G__28879;
i__28428_28796 = G__28880;
continue;
} else {
var temp__5720__auto___28881 = cljs.core.seq.call(null,seq__28425_28793);
if(temp__5720__auto___28881){
var seq__28425_28882__$1 = temp__5720__auto___28881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28425_28882__$1)){
var c__4550__auto___28883 = cljs.core.chunk_first.call(null,seq__28425_28882__$1);
var G__28884 = cljs.core.chunk_rest.call(null,seq__28425_28882__$1);
var G__28885 = c__4550__auto___28883;
var G__28886 = cljs.core.count.call(null,c__4550__auto___28883);
var G__28887 = (0);
seq__28425_28793 = G__28884;
chunk__28426_28794 = G__28885;
count__28427_28795 = G__28886;
i__28428_28796 = G__28887;
continue;
} else {
var vec__28687_28888 = cljs.core.first.call(null,seq__28425_28882__$1);
var source_idx_28889 = cljs.core.nth.call(null,vec__28687_28888,(0),null);
var vec__28690_28890 = cljs.core.nth.call(null,vec__28687_28888,(1),null);
var __28891 = cljs.core.nth.call(null,vec__28690_28890,(0),null);
var lines_28892__$1 = cljs.core.nth.call(null,vec__28690_28890,(1),null);
var seq__28693_28893 = cljs.core.seq.call(null,lines_28892__$1);
var chunk__28694_28894 = null;
var count__28695_28895 = (0);
var i__28696_28896 = (0);
while(true){
if((i__28696_28896 < count__28695_28895)){
var vec__28735_28897 = cljs.core._nth.call(null,chunk__28694_28894,i__28696_28896);
var line_28898 = cljs.core.nth.call(null,vec__28735_28897,(0),null);
var cols_28899 = cljs.core.nth.call(null,vec__28735_28897,(1),null);
var seq__28738_28900 = cljs.core.seq.call(null,cols_28899);
var chunk__28739_28901 = null;
var count__28740_28902 = (0);
var i__28741_28903 = (0);
while(true){
if((i__28741_28903 < count__28740_28902)){
var vec__28748_28904 = cljs.core._nth.call(null,chunk__28739_28901,i__28741_28903);
var col_28905 = cljs.core.nth.call(null,vec__28748_28904,(0),null);
var infos_28906 = cljs.core.nth.call(null,vec__28748_28904,(1),null);
encode_cols.call(null,infos_28906,source_idx_28889,line_28898,col_28905);


var G__28907 = seq__28738_28900;
var G__28908 = chunk__28739_28901;
var G__28909 = count__28740_28902;
var G__28910 = (i__28741_28903 + (1));
seq__28738_28900 = G__28907;
chunk__28739_28901 = G__28908;
count__28740_28902 = G__28909;
i__28741_28903 = G__28910;
continue;
} else {
var temp__5720__auto___28911__$1 = cljs.core.seq.call(null,seq__28738_28900);
if(temp__5720__auto___28911__$1){
var seq__28738_28912__$1 = temp__5720__auto___28911__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28738_28912__$1)){
var c__4550__auto___28913 = cljs.core.chunk_first.call(null,seq__28738_28912__$1);
var G__28914 = cljs.core.chunk_rest.call(null,seq__28738_28912__$1);
var G__28915 = c__4550__auto___28913;
var G__28916 = cljs.core.count.call(null,c__4550__auto___28913);
var G__28917 = (0);
seq__28738_28900 = G__28914;
chunk__28739_28901 = G__28915;
count__28740_28902 = G__28916;
i__28741_28903 = G__28917;
continue;
} else {
var vec__28751_28918 = cljs.core.first.call(null,seq__28738_28912__$1);
var col_28919 = cljs.core.nth.call(null,vec__28751_28918,(0),null);
var infos_28920 = cljs.core.nth.call(null,vec__28751_28918,(1),null);
encode_cols.call(null,infos_28920,source_idx_28889,line_28898,col_28919);


var G__28921 = cljs.core.next.call(null,seq__28738_28912__$1);
var G__28922 = null;
var G__28923 = (0);
var G__28924 = (0);
seq__28738_28900 = G__28921;
chunk__28739_28901 = G__28922;
count__28740_28902 = G__28923;
i__28741_28903 = G__28924;
continue;
}
} else {
}
}
break;
}


var G__28925 = seq__28693_28893;
var G__28926 = chunk__28694_28894;
var G__28927 = count__28695_28895;
var G__28928 = (i__28696_28896 + (1));
seq__28693_28893 = G__28925;
chunk__28694_28894 = G__28926;
count__28695_28895 = G__28927;
i__28696_28896 = G__28928;
continue;
} else {
var temp__5720__auto___28929__$1 = cljs.core.seq.call(null,seq__28693_28893);
if(temp__5720__auto___28929__$1){
var seq__28693_28930__$1 = temp__5720__auto___28929__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28693_28930__$1)){
var c__4550__auto___28931 = cljs.core.chunk_first.call(null,seq__28693_28930__$1);
var G__28932 = cljs.core.chunk_rest.call(null,seq__28693_28930__$1);
var G__28933 = c__4550__auto___28931;
var G__28934 = cljs.core.count.call(null,c__4550__auto___28931);
var G__28935 = (0);
seq__28693_28893 = G__28932;
chunk__28694_28894 = G__28933;
count__28695_28895 = G__28934;
i__28696_28896 = G__28935;
continue;
} else {
var vec__28754_28936 = cljs.core.first.call(null,seq__28693_28930__$1);
var line_28937 = cljs.core.nth.call(null,vec__28754_28936,(0),null);
var cols_28938 = cljs.core.nth.call(null,vec__28754_28936,(1),null);
var seq__28757_28939 = cljs.core.seq.call(null,cols_28938);
var chunk__28758_28940 = null;
var count__28759_28941 = (0);
var i__28760_28942 = (0);
while(true){
if((i__28760_28942 < count__28759_28941)){
var vec__28767_28943 = cljs.core._nth.call(null,chunk__28758_28940,i__28760_28942);
var col_28944 = cljs.core.nth.call(null,vec__28767_28943,(0),null);
var infos_28945 = cljs.core.nth.call(null,vec__28767_28943,(1),null);
encode_cols.call(null,infos_28945,source_idx_28889,line_28937,col_28944);


var G__28946 = seq__28757_28939;
var G__28947 = chunk__28758_28940;
var G__28948 = count__28759_28941;
var G__28949 = (i__28760_28942 + (1));
seq__28757_28939 = G__28946;
chunk__28758_28940 = G__28947;
count__28759_28941 = G__28948;
i__28760_28942 = G__28949;
continue;
} else {
var temp__5720__auto___28950__$2 = cljs.core.seq.call(null,seq__28757_28939);
if(temp__5720__auto___28950__$2){
var seq__28757_28951__$1 = temp__5720__auto___28950__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28757_28951__$1)){
var c__4550__auto___28952 = cljs.core.chunk_first.call(null,seq__28757_28951__$1);
var G__28953 = cljs.core.chunk_rest.call(null,seq__28757_28951__$1);
var G__28954 = c__4550__auto___28952;
var G__28955 = cljs.core.count.call(null,c__4550__auto___28952);
var G__28956 = (0);
seq__28757_28939 = G__28953;
chunk__28758_28940 = G__28954;
count__28759_28941 = G__28955;
i__28760_28942 = G__28956;
continue;
} else {
var vec__28770_28957 = cljs.core.first.call(null,seq__28757_28951__$1);
var col_28958 = cljs.core.nth.call(null,vec__28770_28957,(0),null);
var infos_28959 = cljs.core.nth.call(null,vec__28770_28957,(1),null);
encode_cols.call(null,infos_28959,source_idx_28889,line_28937,col_28958);


var G__28960 = cljs.core.next.call(null,seq__28757_28951__$1);
var G__28961 = null;
var G__28962 = (0);
var G__28963 = (0);
seq__28757_28939 = G__28960;
chunk__28758_28940 = G__28961;
count__28759_28941 = G__28962;
i__28760_28942 = G__28963;
continue;
}
} else {
}
}
break;
}


var G__28964 = cljs.core.next.call(null,seq__28693_28930__$1);
var G__28965 = null;
var G__28966 = (0);
var G__28967 = (0);
seq__28693_28893 = G__28964;
chunk__28694_28894 = G__28965;
count__28695_28895 = G__28966;
i__28696_28896 = G__28967;
continue;
}
} else {
}
}
break;
}


var G__28968 = cljs.core.next.call(null,seq__28425_28882__$1);
var G__28969 = null;
var G__28970 = (0);
var G__28971 = (0);
seq__28425_28793 = G__28968;
chunk__28426_28794 = G__28969;
count__28427_28795 = G__28970;
i__28428_28796 = G__28971;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__28773 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28418_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28418_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28419_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__28419_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28420_SHARP_){
return clojure.string.join.call(null,",",p1__28420_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__28774 = G__28773;
goog.object.set(G__28774,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__28774;
} else {
return G__28773;
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
var vec__28972 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__28972,(0),null);
var col_map = cljs.core.nth.call(null,vec__28972,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__28975 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__28975,(0),null);
var infos = cljs.core.nth.call(null,vec__28975,(1),null);
var G__28981 = cljs.core.next.call(null,col_map_seq);
var G__28982 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__28975,col,infos,vec__28972,line,col_map){
return (function (v,p__28978){
var map__28979 = p__28978;
var map__28979__$1 = (((((!((map__28979 == null))))?(((((map__28979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28979):map__28979);
var gline = cljs.core.get.call(null,map__28979__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__28979__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__28975,col,infos,vec__28972,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__28981;
new_cols = G__28982;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__28983 = cljs.core.next.call(null,line_map_seq);
var G__28984 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__28983;
new_lines = G__28984;
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
var seq__28985_29257 = cljs.core.seq.call(null,reverse_map);
var chunk__28986_29258 = null;
var count__28987_29259 = (0);
var i__28988_29260 = (0);
while(true){
if((i__28988_29260 < count__28987_29259)){
var vec__29123_29261 = cljs.core._nth.call(null,chunk__28986_29258,i__28988_29260);
var line_29262 = cljs.core.nth.call(null,vec__29123_29261,(0),null);
var columns_29263 = cljs.core.nth.call(null,vec__29123_29261,(1),null);
var seq__29126_29264 = cljs.core.seq.call(null,columns_29263);
var chunk__29127_29265 = null;
var count__29128_29266 = (0);
var i__29129_29267 = (0);
while(true){
if((i__29129_29267 < count__29128_29266)){
var vec__29160_29268 = cljs.core._nth.call(null,chunk__29127_29265,i__29129_29267);
var column_29269 = cljs.core.nth.call(null,vec__29160_29268,(0),null);
var column_info_29270 = cljs.core.nth.call(null,vec__29160_29268,(1),null);
var seq__29163_29271 = cljs.core.seq.call(null,column_info_29270);
var chunk__29164_29272 = null;
var count__29165_29273 = (0);
var i__29166_29274 = (0);
while(true){
if((i__29166_29274 < count__29165_29273)){
var map__29171_29275 = cljs.core._nth.call(null,chunk__29164_29272,i__29166_29274);
var map__29171_29276__$1 = (((((!((map__29171_29275 == null))))?(((((map__29171_29275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29171_29275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29171_29275):map__29171_29275);
var gline_29277 = cljs.core.get.call(null,map__29171_29276__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29278 = cljs.core.get.call(null,map__29171_29276__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29279 = cljs.core.get.call(null,map__29171_29276__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29277], null),cljs.core.fnil.call(null,((function (seq__29163_29271,chunk__29164_29272,count__29165_29273,i__29166_29274,seq__29126_29264,chunk__29127_29265,count__29128_29266,i__29129_29267,seq__28985_29257,chunk__28986_29258,count__28987_29259,i__28988_29260,map__29171_29275,map__29171_29276__$1,gline_29277,gcol_29278,name_29279,vec__29160_29268,column_29269,column_info_29270,vec__29123_29261,line_29262,columns_29263,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29278], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29262,new cljs.core.Keyword(null,"col","col",-1959363084),column_29269,new cljs.core.Keyword(null,"name","name",1843675177),name_29279], null));
});})(seq__29163_29271,chunk__29164_29272,count__29165_29273,i__29166_29274,seq__29126_29264,chunk__29127_29265,count__29128_29266,i__29129_29267,seq__28985_29257,chunk__28986_29258,count__28987_29259,i__28988_29260,map__29171_29275,map__29171_29276__$1,gline_29277,gcol_29278,name_29279,vec__29160_29268,column_29269,column_info_29270,vec__29123_29261,line_29262,columns_29263,inverted))
,cljs.core.sorted_map.call(null)));


var G__29280 = seq__29163_29271;
var G__29281 = chunk__29164_29272;
var G__29282 = count__29165_29273;
var G__29283 = (i__29166_29274 + (1));
seq__29163_29271 = G__29280;
chunk__29164_29272 = G__29281;
count__29165_29273 = G__29282;
i__29166_29274 = G__29283;
continue;
} else {
var temp__5720__auto___29284 = cljs.core.seq.call(null,seq__29163_29271);
if(temp__5720__auto___29284){
var seq__29163_29285__$1 = temp__5720__auto___29284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29163_29285__$1)){
var c__4550__auto___29286 = cljs.core.chunk_first.call(null,seq__29163_29285__$1);
var G__29287 = cljs.core.chunk_rest.call(null,seq__29163_29285__$1);
var G__29288 = c__4550__auto___29286;
var G__29289 = cljs.core.count.call(null,c__4550__auto___29286);
var G__29290 = (0);
seq__29163_29271 = G__29287;
chunk__29164_29272 = G__29288;
count__29165_29273 = G__29289;
i__29166_29274 = G__29290;
continue;
} else {
var map__29173_29291 = cljs.core.first.call(null,seq__29163_29285__$1);
var map__29173_29292__$1 = (((((!((map__29173_29291 == null))))?(((((map__29173_29291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29173_29291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29173_29291):map__29173_29291);
var gline_29293 = cljs.core.get.call(null,map__29173_29292__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29294 = cljs.core.get.call(null,map__29173_29292__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29295 = cljs.core.get.call(null,map__29173_29292__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29293], null),cljs.core.fnil.call(null,((function (seq__29163_29271,chunk__29164_29272,count__29165_29273,i__29166_29274,seq__29126_29264,chunk__29127_29265,count__29128_29266,i__29129_29267,seq__28985_29257,chunk__28986_29258,count__28987_29259,i__28988_29260,map__29173_29291,map__29173_29292__$1,gline_29293,gcol_29294,name_29295,seq__29163_29285__$1,temp__5720__auto___29284,vec__29160_29268,column_29269,column_info_29270,vec__29123_29261,line_29262,columns_29263,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29294], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29262,new cljs.core.Keyword(null,"col","col",-1959363084),column_29269,new cljs.core.Keyword(null,"name","name",1843675177),name_29295], null));
});})(seq__29163_29271,chunk__29164_29272,count__29165_29273,i__29166_29274,seq__29126_29264,chunk__29127_29265,count__29128_29266,i__29129_29267,seq__28985_29257,chunk__28986_29258,count__28987_29259,i__28988_29260,map__29173_29291,map__29173_29292__$1,gline_29293,gcol_29294,name_29295,seq__29163_29285__$1,temp__5720__auto___29284,vec__29160_29268,column_29269,column_info_29270,vec__29123_29261,line_29262,columns_29263,inverted))
,cljs.core.sorted_map.call(null)));


var G__29296 = cljs.core.next.call(null,seq__29163_29285__$1);
var G__29297 = null;
var G__29298 = (0);
var G__29299 = (0);
seq__29163_29271 = G__29296;
chunk__29164_29272 = G__29297;
count__29165_29273 = G__29298;
i__29166_29274 = G__29299;
continue;
}
} else {
}
}
break;
}


var G__29300 = seq__29126_29264;
var G__29301 = chunk__29127_29265;
var G__29302 = count__29128_29266;
var G__29303 = (i__29129_29267 + (1));
seq__29126_29264 = G__29300;
chunk__29127_29265 = G__29301;
count__29128_29266 = G__29302;
i__29129_29267 = G__29303;
continue;
} else {
var temp__5720__auto___29304 = cljs.core.seq.call(null,seq__29126_29264);
if(temp__5720__auto___29304){
var seq__29126_29305__$1 = temp__5720__auto___29304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29126_29305__$1)){
var c__4550__auto___29306 = cljs.core.chunk_first.call(null,seq__29126_29305__$1);
var G__29307 = cljs.core.chunk_rest.call(null,seq__29126_29305__$1);
var G__29308 = c__4550__auto___29306;
var G__29309 = cljs.core.count.call(null,c__4550__auto___29306);
var G__29310 = (0);
seq__29126_29264 = G__29307;
chunk__29127_29265 = G__29308;
count__29128_29266 = G__29309;
i__29129_29267 = G__29310;
continue;
} else {
var vec__29175_29311 = cljs.core.first.call(null,seq__29126_29305__$1);
var column_29312 = cljs.core.nth.call(null,vec__29175_29311,(0),null);
var column_info_29313 = cljs.core.nth.call(null,vec__29175_29311,(1),null);
var seq__29178_29314 = cljs.core.seq.call(null,column_info_29313);
var chunk__29179_29315 = null;
var count__29180_29316 = (0);
var i__29181_29317 = (0);
while(true){
if((i__29181_29317 < count__29180_29316)){
var map__29186_29318 = cljs.core._nth.call(null,chunk__29179_29315,i__29181_29317);
var map__29186_29319__$1 = (((((!((map__29186_29318 == null))))?(((((map__29186_29318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29186_29318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29186_29318):map__29186_29318);
var gline_29320 = cljs.core.get.call(null,map__29186_29319__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29321 = cljs.core.get.call(null,map__29186_29319__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29322 = cljs.core.get.call(null,map__29186_29319__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29320], null),cljs.core.fnil.call(null,((function (seq__29178_29314,chunk__29179_29315,count__29180_29316,i__29181_29317,seq__29126_29264,chunk__29127_29265,count__29128_29266,i__29129_29267,seq__28985_29257,chunk__28986_29258,count__28987_29259,i__28988_29260,map__29186_29318,map__29186_29319__$1,gline_29320,gcol_29321,name_29322,vec__29175_29311,column_29312,column_info_29313,seq__29126_29305__$1,temp__5720__auto___29304,vec__29123_29261,line_29262,columns_29263,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29321], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29262,new cljs.core.Keyword(null,"col","col",-1959363084),column_29312,new cljs.core.Keyword(null,"name","name",1843675177),name_29322], null));
});})(seq__29178_29314,chunk__29179_29315,count__29180_29316,i__29181_29317,seq__29126_29264,chunk__29127_29265,count__29128_29266,i__29129_29267,seq__28985_29257,chunk__28986_29258,count__28987_29259,i__28988_29260,map__29186_29318,map__29186_29319__$1,gline_29320,gcol_29321,name_29322,vec__29175_29311,column_29312,column_info_29313,seq__29126_29305__$1,temp__5720__auto___29304,vec__29123_29261,line_29262,columns_29263,inverted))
,cljs.core.sorted_map.call(null)));


var G__29323 = seq__29178_29314;
var G__29324 = chunk__29179_29315;
var G__29325 = count__29180_29316;
var G__29326 = (i__29181_29317 + (1));
seq__29178_29314 = G__29323;
chunk__29179_29315 = G__29324;
count__29180_29316 = G__29325;
i__29181_29317 = G__29326;
continue;
} else {
var temp__5720__auto___29327__$1 = cljs.core.seq.call(null,seq__29178_29314);
if(temp__5720__auto___29327__$1){
var seq__29178_29328__$1 = temp__5720__auto___29327__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29178_29328__$1)){
var c__4550__auto___29329 = cljs.core.chunk_first.call(null,seq__29178_29328__$1);
var G__29330 = cljs.core.chunk_rest.call(null,seq__29178_29328__$1);
var G__29331 = c__4550__auto___29329;
var G__29332 = cljs.core.count.call(null,c__4550__auto___29329);
var G__29333 = (0);
seq__29178_29314 = G__29330;
chunk__29179_29315 = G__29331;
count__29180_29316 = G__29332;
i__29181_29317 = G__29333;
continue;
} else {
var map__29188_29334 = cljs.core.first.call(null,seq__29178_29328__$1);
var map__29188_29335__$1 = (((((!((map__29188_29334 == null))))?(((((map__29188_29334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29188_29334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29188_29334):map__29188_29334);
var gline_29336 = cljs.core.get.call(null,map__29188_29335__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29337 = cljs.core.get.call(null,map__29188_29335__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29338 = cljs.core.get.call(null,map__29188_29335__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29336], null),cljs.core.fnil.call(null,((function (seq__29178_29314,chunk__29179_29315,count__29180_29316,i__29181_29317,seq__29126_29264,chunk__29127_29265,count__29128_29266,i__29129_29267,seq__28985_29257,chunk__28986_29258,count__28987_29259,i__28988_29260,map__29188_29334,map__29188_29335__$1,gline_29336,gcol_29337,name_29338,seq__29178_29328__$1,temp__5720__auto___29327__$1,vec__29175_29311,column_29312,column_info_29313,seq__29126_29305__$1,temp__5720__auto___29304,vec__29123_29261,line_29262,columns_29263,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29337], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29262,new cljs.core.Keyword(null,"col","col",-1959363084),column_29312,new cljs.core.Keyword(null,"name","name",1843675177),name_29338], null));
});})(seq__29178_29314,chunk__29179_29315,count__29180_29316,i__29181_29317,seq__29126_29264,chunk__29127_29265,count__29128_29266,i__29129_29267,seq__28985_29257,chunk__28986_29258,count__28987_29259,i__28988_29260,map__29188_29334,map__29188_29335__$1,gline_29336,gcol_29337,name_29338,seq__29178_29328__$1,temp__5720__auto___29327__$1,vec__29175_29311,column_29312,column_info_29313,seq__29126_29305__$1,temp__5720__auto___29304,vec__29123_29261,line_29262,columns_29263,inverted))
,cljs.core.sorted_map.call(null)));


var G__29339 = cljs.core.next.call(null,seq__29178_29328__$1);
var G__29340 = null;
var G__29341 = (0);
var G__29342 = (0);
seq__29178_29314 = G__29339;
chunk__29179_29315 = G__29340;
count__29180_29316 = G__29341;
i__29181_29317 = G__29342;
continue;
}
} else {
}
}
break;
}


var G__29343 = cljs.core.next.call(null,seq__29126_29305__$1);
var G__29344 = null;
var G__29345 = (0);
var G__29346 = (0);
seq__29126_29264 = G__29343;
chunk__29127_29265 = G__29344;
count__29128_29266 = G__29345;
i__29129_29267 = G__29346;
continue;
}
} else {
}
}
break;
}


var G__29347 = seq__28985_29257;
var G__29348 = chunk__28986_29258;
var G__29349 = count__28987_29259;
var G__29350 = (i__28988_29260 + (1));
seq__28985_29257 = G__29347;
chunk__28986_29258 = G__29348;
count__28987_29259 = G__29349;
i__28988_29260 = G__29350;
continue;
} else {
var temp__5720__auto___29351 = cljs.core.seq.call(null,seq__28985_29257);
if(temp__5720__auto___29351){
var seq__28985_29352__$1 = temp__5720__auto___29351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28985_29352__$1)){
var c__4550__auto___29353 = cljs.core.chunk_first.call(null,seq__28985_29352__$1);
var G__29354 = cljs.core.chunk_rest.call(null,seq__28985_29352__$1);
var G__29355 = c__4550__auto___29353;
var G__29356 = cljs.core.count.call(null,c__4550__auto___29353);
var G__29357 = (0);
seq__28985_29257 = G__29354;
chunk__28986_29258 = G__29355;
count__28987_29259 = G__29356;
i__28988_29260 = G__29357;
continue;
} else {
var vec__29190_29358 = cljs.core.first.call(null,seq__28985_29352__$1);
var line_29359 = cljs.core.nth.call(null,vec__29190_29358,(0),null);
var columns_29360 = cljs.core.nth.call(null,vec__29190_29358,(1),null);
var seq__29193_29361 = cljs.core.seq.call(null,columns_29360);
var chunk__29194_29362 = null;
var count__29195_29363 = (0);
var i__29196_29364 = (0);
while(true){
if((i__29196_29364 < count__29195_29363)){
var vec__29227_29365 = cljs.core._nth.call(null,chunk__29194_29362,i__29196_29364);
var column_29366 = cljs.core.nth.call(null,vec__29227_29365,(0),null);
var column_info_29367 = cljs.core.nth.call(null,vec__29227_29365,(1),null);
var seq__29230_29368 = cljs.core.seq.call(null,column_info_29367);
var chunk__29231_29369 = null;
var count__29232_29370 = (0);
var i__29233_29371 = (0);
while(true){
if((i__29233_29371 < count__29232_29370)){
var map__29238_29372 = cljs.core._nth.call(null,chunk__29231_29369,i__29233_29371);
var map__29238_29373__$1 = (((((!((map__29238_29372 == null))))?(((((map__29238_29372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29238_29372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29238_29372):map__29238_29372);
var gline_29374 = cljs.core.get.call(null,map__29238_29373__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29375 = cljs.core.get.call(null,map__29238_29373__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29376 = cljs.core.get.call(null,map__29238_29373__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29374], null),cljs.core.fnil.call(null,((function (seq__29230_29368,chunk__29231_29369,count__29232_29370,i__29233_29371,seq__29193_29361,chunk__29194_29362,count__29195_29363,i__29196_29364,seq__28985_29257,chunk__28986_29258,count__28987_29259,i__28988_29260,map__29238_29372,map__29238_29373__$1,gline_29374,gcol_29375,name_29376,vec__29227_29365,column_29366,column_info_29367,vec__29190_29358,line_29359,columns_29360,seq__28985_29352__$1,temp__5720__auto___29351,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29375], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29359,new cljs.core.Keyword(null,"col","col",-1959363084),column_29366,new cljs.core.Keyword(null,"name","name",1843675177),name_29376], null));
});})(seq__29230_29368,chunk__29231_29369,count__29232_29370,i__29233_29371,seq__29193_29361,chunk__29194_29362,count__29195_29363,i__29196_29364,seq__28985_29257,chunk__28986_29258,count__28987_29259,i__28988_29260,map__29238_29372,map__29238_29373__$1,gline_29374,gcol_29375,name_29376,vec__29227_29365,column_29366,column_info_29367,vec__29190_29358,line_29359,columns_29360,seq__28985_29352__$1,temp__5720__auto___29351,inverted))
,cljs.core.sorted_map.call(null)));


var G__29377 = seq__29230_29368;
var G__29378 = chunk__29231_29369;
var G__29379 = count__29232_29370;
var G__29380 = (i__29233_29371 + (1));
seq__29230_29368 = G__29377;
chunk__29231_29369 = G__29378;
count__29232_29370 = G__29379;
i__29233_29371 = G__29380;
continue;
} else {
var temp__5720__auto___29381__$1 = cljs.core.seq.call(null,seq__29230_29368);
if(temp__5720__auto___29381__$1){
var seq__29230_29382__$1 = temp__5720__auto___29381__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29230_29382__$1)){
var c__4550__auto___29383 = cljs.core.chunk_first.call(null,seq__29230_29382__$1);
var G__29384 = cljs.core.chunk_rest.call(null,seq__29230_29382__$1);
var G__29385 = c__4550__auto___29383;
var G__29386 = cljs.core.count.call(null,c__4550__auto___29383);
var G__29387 = (0);
seq__29230_29368 = G__29384;
chunk__29231_29369 = G__29385;
count__29232_29370 = G__29386;
i__29233_29371 = G__29387;
continue;
} else {
var map__29240_29388 = cljs.core.first.call(null,seq__29230_29382__$1);
var map__29240_29389__$1 = (((((!((map__29240_29388 == null))))?(((((map__29240_29388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29240_29388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29240_29388):map__29240_29388);
var gline_29390 = cljs.core.get.call(null,map__29240_29389__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29391 = cljs.core.get.call(null,map__29240_29389__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29392 = cljs.core.get.call(null,map__29240_29389__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29390], null),cljs.core.fnil.call(null,((function (seq__29230_29368,chunk__29231_29369,count__29232_29370,i__29233_29371,seq__29193_29361,chunk__29194_29362,count__29195_29363,i__29196_29364,seq__28985_29257,chunk__28986_29258,count__28987_29259,i__28988_29260,map__29240_29388,map__29240_29389__$1,gline_29390,gcol_29391,name_29392,seq__29230_29382__$1,temp__5720__auto___29381__$1,vec__29227_29365,column_29366,column_info_29367,vec__29190_29358,line_29359,columns_29360,seq__28985_29352__$1,temp__5720__auto___29351,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29391], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29359,new cljs.core.Keyword(null,"col","col",-1959363084),column_29366,new cljs.core.Keyword(null,"name","name",1843675177),name_29392], null));
});})(seq__29230_29368,chunk__29231_29369,count__29232_29370,i__29233_29371,seq__29193_29361,chunk__29194_29362,count__29195_29363,i__29196_29364,seq__28985_29257,chunk__28986_29258,count__28987_29259,i__28988_29260,map__29240_29388,map__29240_29389__$1,gline_29390,gcol_29391,name_29392,seq__29230_29382__$1,temp__5720__auto___29381__$1,vec__29227_29365,column_29366,column_info_29367,vec__29190_29358,line_29359,columns_29360,seq__28985_29352__$1,temp__5720__auto___29351,inverted))
,cljs.core.sorted_map.call(null)));


var G__29393 = cljs.core.next.call(null,seq__29230_29382__$1);
var G__29394 = null;
var G__29395 = (0);
var G__29396 = (0);
seq__29230_29368 = G__29393;
chunk__29231_29369 = G__29394;
count__29232_29370 = G__29395;
i__29233_29371 = G__29396;
continue;
}
} else {
}
}
break;
}


var G__29397 = seq__29193_29361;
var G__29398 = chunk__29194_29362;
var G__29399 = count__29195_29363;
var G__29400 = (i__29196_29364 + (1));
seq__29193_29361 = G__29397;
chunk__29194_29362 = G__29398;
count__29195_29363 = G__29399;
i__29196_29364 = G__29400;
continue;
} else {
var temp__5720__auto___29401__$1 = cljs.core.seq.call(null,seq__29193_29361);
if(temp__5720__auto___29401__$1){
var seq__29193_29402__$1 = temp__5720__auto___29401__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29193_29402__$1)){
var c__4550__auto___29403 = cljs.core.chunk_first.call(null,seq__29193_29402__$1);
var G__29404 = cljs.core.chunk_rest.call(null,seq__29193_29402__$1);
var G__29405 = c__4550__auto___29403;
var G__29406 = cljs.core.count.call(null,c__4550__auto___29403);
var G__29407 = (0);
seq__29193_29361 = G__29404;
chunk__29194_29362 = G__29405;
count__29195_29363 = G__29406;
i__29196_29364 = G__29407;
continue;
} else {
var vec__29242_29408 = cljs.core.first.call(null,seq__29193_29402__$1);
var column_29409 = cljs.core.nth.call(null,vec__29242_29408,(0),null);
var column_info_29410 = cljs.core.nth.call(null,vec__29242_29408,(1),null);
var seq__29245_29411 = cljs.core.seq.call(null,column_info_29410);
var chunk__29246_29412 = null;
var count__29247_29413 = (0);
var i__29248_29414 = (0);
while(true){
if((i__29248_29414 < count__29247_29413)){
var map__29253_29415 = cljs.core._nth.call(null,chunk__29246_29412,i__29248_29414);
var map__29253_29416__$1 = (((((!((map__29253_29415 == null))))?(((((map__29253_29415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29253_29415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29253_29415):map__29253_29415);
var gline_29417 = cljs.core.get.call(null,map__29253_29416__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29418 = cljs.core.get.call(null,map__29253_29416__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29419 = cljs.core.get.call(null,map__29253_29416__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29417], null),cljs.core.fnil.call(null,((function (seq__29245_29411,chunk__29246_29412,count__29247_29413,i__29248_29414,seq__29193_29361,chunk__29194_29362,count__29195_29363,i__29196_29364,seq__28985_29257,chunk__28986_29258,count__28987_29259,i__28988_29260,map__29253_29415,map__29253_29416__$1,gline_29417,gcol_29418,name_29419,vec__29242_29408,column_29409,column_info_29410,seq__29193_29402__$1,temp__5720__auto___29401__$1,vec__29190_29358,line_29359,columns_29360,seq__28985_29352__$1,temp__5720__auto___29351,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29418], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29359,new cljs.core.Keyword(null,"col","col",-1959363084),column_29409,new cljs.core.Keyword(null,"name","name",1843675177),name_29419], null));
});})(seq__29245_29411,chunk__29246_29412,count__29247_29413,i__29248_29414,seq__29193_29361,chunk__29194_29362,count__29195_29363,i__29196_29364,seq__28985_29257,chunk__28986_29258,count__28987_29259,i__28988_29260,map__29253_29415,map__29253_29416__$1,gline_29417,gcol_29418,name_29419,vec__29242_29408,column_29409,column_info_29410,seq__29193_29402__$1,temp__5720__auto___29401__$1,vec__29190_29358,line_29359,columns_29360,seq__28985_29352__$1,temp__5720__auto___29351,inverted))
,cljs.core.sorted_map.call(null)));


var G__29420 = seq__29245_29411;
var G__29421 = chunk__29246_29412;
var G__29422 = count__29247_29413;
var G__29423 = (i__29248_29414 + (1));
seq__29245_29411 = G__29420;
chunk__29246_29412 = G__29421;
count__29247_29413 = G__29422;
i__29248_29414 = G__29423;
continue;
} else {
var temp__5720__auto___29424__$2 = cljs.core.seq.call(null,seq__29245_29411);
if(temp__5720__auto___29424__$2){
var seq__29245_29425__$1 = temp__5720__auto___29424__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29245_29425__$1)){
var c__4550__auto___29426 = cljs.core.chunk_first.call(null,seq__29245_29425__$1);
var G__29427 = cljs.core.chunk_rest.call(null,seq__29245_29425__$1);
var G__29428 = c__4550__auto___29426;
var G__29429 = cljs.core.count.call(null,c__4550__auto___29426);
var G__29430 = (0);
seq__29245_29411 = G__29427;
chunk__29246_29412 = G__29428;
count__29247_29413 = G__29429;
i__29248_29414 = G__29430;
continue;
} else {
var map__29255_29431 = cljs.core.first.call(null,seq__29245_29425__$1);
var map__29255_29432__$1 = (((((!((map__29255_29431 == null))))?(((((map__29255_29431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29255_29431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29255_29431):map__29255_29431);
var gline_29433 = cljs.core.get.call(null,map__29255_29432__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29434 = cljs.core.get.call(null,map__29255_29432__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29435 = cljs.core.get.call(null,map__29255_29432__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29433], null),cljs.core.fnil.call(null,((function (seq__29245_29411,chunk__29246_29412,count__29247_29413,i__29248_29414,seq__29193_29361,chunk__29194_29362,count__29195_29363,i__29196_29364,seq__28985_29257,chunk__28986_29258,count__28987_29259,i__28988_29260,map__29255_29431,map__29255_29432__$1,gline_29433,gcol_29434,name_29435,seq__29245_29425__$1,temp__5720__auto___29424__$2,vec__29242_29408,column_29409,column_info_29410,seq__29193_29402__$1,temp__5720__auto___29401__$1,vec__29190_29358,line_29359,columns_29360,seq__28985_29352__$1,temp__5720__auto___29351,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29434], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29359,new cljs.core.Keyword(null,"col","col",-1959363084),column_29409,new cljs.core.Keyword(null,"name","name",1843675177),name_29435], null));
});})(seq__29245_29411,chunk__29246_29412,count__29247_29413,i__29248_29414,seq__29193_29361,chunk__29194_29362,count__29195_29363,i__29196_29364,seq__28985_29257,chunk__28986_29258,count__28987_29259,i__28988_29260,map__29255_29431,map__29255_29432__$1,gline_29433,gcol_29434,name_29435,seq__29245_29425__$1,temp__5720__auto___29424__$2,vec__29242_29408,column_29409,column_info_29410,seq__29193_29402__$1,temp__5720__auto___29401__$1,vec__29190_29358,line_29359,columns_29360,seq__28985_29352__$1,temp__5720__auto___29351,inverted))
,cljs.core.sorted_map.call(null)));


var G__29436 = cljs.core.next.call(null,seq__29245_29425__$1);
var G__29437 = null;
var G__29438 = (0);
var G__29439 = (0);
seq__29245_29411 = G__29436;
chunk__29246_29412 = G__29437;
count__29247_29413 = G__29438;
i__29248_29414 = G__29439;
continue;
}
} else {
}
}
break;
}


var G__29440 = cljs.core.next.call(null,seq__29193_29402__$1);
var G__29441 = null;
var G__29442 = (0);
var G__29443 = (0);
seq__29193_29361 = G__29440;
chunk__29194_29362 = G__29441;
count__29195_29363 = G__29442;
i__29196_29364 = G__29443;
continue;
}
} else {
}
}
break;
}


var G__29444 = cljs.core.next.call(null,seq__28985_29352__$1);
var G__29445 = null;
var G__29446 = (0);
var G__29447 = (0);
seq__28985_29257 = G__29444;
chunk__28986_29258 = G__29445;
count__28987_29259 = G__29446;
i__28988_29260 = G__29447;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1610146509101
