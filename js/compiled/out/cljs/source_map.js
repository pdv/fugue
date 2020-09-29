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
return cljs.core.reduce.call(null,(function (m,p__28390){
var vec__28391 = p__28390;
var i = cljs.core.nth.call(null,vec__28391,(0),null);
var v = cljs.core.nth.call(null,vec__28391,(1),null);
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
var vec__28394 = seg;
var gcol = cljs.core.nth.call(null,vec__28394,(0),null);
var source = cljs.core.nth.call(null,vec__28394,(1),null);
var line = cljs.core.nth.call(null,vec__28394,(2),null);
var col = cljs.core.nth.call(null,vec__28394,(3),null);
var name = cljs.core.nth.call(null,vec__28394,(4),null);
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
var vec__28397 = seg;
var gcol = cljs.core.nth.call(null,vec__28397,(0),null);
var source = cljs.core.nth.call(null,vec__28397,(1),null);
var line = cljs.core.nth.call(null,vec__28397,(2),null);
var col = cljs.core.nth.call(null,vec__28397,(3),null);
var name = cljs.core.nth.call(null,vec__28397,(4),null);
var vec__28400 = relseg;
var rgcol = cljs.core.nth.call(null,vec__28400,(0),null);
var rsource = cljs.core.nth.call(null,vec__28400,(1),null);
var rline = cljs.core.nth.call(null,vec__28400,(2),null);
var rcol = cljs.core.nth.call(null,vec__28400,(3),null);
var rname = cljs.core.nth.call(null,vec__28400,(4),null);
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
var map__28403 = segmap;
var map__28403__$1 = (((((!((map__28403 == null))))?(((((map__28403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28403):map__28403);
var gcol = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__28403,map__28403__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__28403,map__28403__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__28403,map__28403__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__28403,map__28403__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__28403,map__28403__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__28403,map__28403__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__28406 = arguments.length;
switch (G__28406) {
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
var vec__28410 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__28414 = cljs.core.next.call(null,segs__$1);
var G__28415 = nrelseg;
var G__28416 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__28414;
relseg__$1 = G__28415;
result__$1 = G__28416;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__28410,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__28410,(1),null);
var G__28417 = (gline + (1));
var G__28418 = cljs.core.next.call(null,lines__$1);
var G__28419 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__28420 = result__$1;
gline = G__28417;
lines__$1 = G__28418;
relseg = G__28419;
result = G__28420;
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
var map__28422 = segmap;
var map__28422__$1 = (((((!((map__28422 == null))))?(((((map__28422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28422):map__28422);
var gcol = cljs.core.get.call(null,map__28422__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__28422__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__28422__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__28422__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__28422__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__28422,map__28422__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__28422,map__28422__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__28421_SHARP_){
return cljs.core.conj.call(null,p1__28421_SHARP_,d__$1);
});})(map__28422,map__28422__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__28422,map__28422__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__28425 = arguments.length;
switch (G__28425) {
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
var vec__28429 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__28433 = cljs.core.next.call(null,segs__$1);
var G__28434 = nrelseg;
var G__28435 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__28433;
relseg__$1 = G__28434;
result__$1 = G__28435;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__28429,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__28429,(1),null);
var G__28436 = (gline + (1));
var G__28437 = cljs.core.next.call(null,lines__$1);
var G__28438 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__28439 = result__$1;
gline = G__28436;
lines__$1 = G__28437;
relseg = G__28438;
result = G__28439;
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
return (function (p__28440){
var vec__28441 = p__28440;
var _ = cljs.core.nth.call(null,vec__28441,(0),null);
var source = cljs.core.nth.call(null,vec__28441,(1),null);
var line = cljs.core.nth.call(null,vec__28441,(2),null);
var col = cljs.core.nth.call(null,vec__28441,(3),null);
var name = cljs.core.nth.call(null,vec__28441,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__28444){
var vec__28445 = p__28444;
var gcol = cljs.core.nth.call(null,vec__28445,(0),null);
var sidx = cljs.core.nth.call(null,vec__28445,(1),null);
var line = cljs.core.nth.call(null,vec__28445,(2),null);
var col = cljs.core.nth.call(null,vec__28445,(3),null);
var name = cljs.core.nth.call(null,vec__28445,(4),null);
var seg = vec__28445;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__28445,gcol,sidx,line,col,name,seg,relseg){
return (function (p__28448){
var vec__28449 = p__28448;
var _ = cljs.core.nth.call(null,vec__28449,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28449,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__28449,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__28449,(3),null);
var lname = cljs.core.nth.call(null,vec__28449,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__28445,gcol,sidx,line,col,name,seg,relseg))
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
var seq__28455 = cljs.core.seq.call(null,infos);
var chunk__28456 = null;
var count__28457 = (0);
var i__28458 = (0);
while(true){
if((i__28458 < count__28457)){
var info = cljs.core._nth.call(null,chunk__28456,i__28458);
var segv_28809 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_28810 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28811 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_28810 > (lc_28811 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__28455,chunk__28456,count__28457,i__28458,segv_28809,gline_28810,lc_28811,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_28810 - (lc_28811 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28809], null));
});})(seq__28455,chunk__28456,count__28457,i__28458,segv_28809,gline_28810,lc_28811,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__28455,chunk__28456,count__28457,i__28458,segv_28809,gline_28810,lc_28811,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28810], null),cljs.core.conj,segv_28809);
});})(seq__28455,chunk__28456,count__28457,i__28458,segv_28809,gline_28810,lc_28811,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__28812 = seq__28455;
var G__28813 = chunk__28456;
var G__28814 = count__28457;
var G__28815 = (i__28458 + (1));
seq__28455 = G__28812;
chunk__28456 = G__28813;
count__28457 = G__28814;
i__28458 = G__28815;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28455);
if(temp__5720__auto__){
var seq__28455__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28455__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28455__$1);
var G__28816 = cljs.core.chunk_rest.call(null,seq__28455__$1);
var G__28817 = c__4550__auto__;
var G__28818 = cljs.core.count.call(null,c__4550__auto__);
var G__28819 = (0);
seq__28455 = G__28816;
chunk__28456 = G__28817;
count__28457 = G__28818;
i__28458 = G__28819;
continue;
} else {
var info = cljs.core.first.call(null,seq__28455__$1);
var segv_28820 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_28821 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28822 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_28821 > (lc_28822 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__28455,chunk__28456,count__28457,i__28458,segv_28820,gline_28821,lc_28822,info,seq__28455__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_28821 - (lc_28822 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28820], null));
});})(seq__28455,chunk__28456,count__28457,i__28458,segv_28820,gline_28821,lc_28822,info,seq__28455__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__28455,chunk__28456,count__28457,i__28458,segv_28820,gline_28821,lc_28822,info,seq__28455__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28821], null),cljs.core.conj,segv_28820);
});})(seq__28455,chunk__28456,count__28457,i__28458,segv_28820,gline_28821,lc_28822,info,seq__28455__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__28823 = cljs.core.next.call(null,seq__28455__$1);
var G__28824 = null;
var G__28825 = (0);
var G__28826 = (0);
seq__28455 = G__28823;
chunk__28456 = G__28824;
count__28457 = G__28825;
i__28458 = G__28826;
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
var seq__28459_28827 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__28460_28828 = null;
var count__28461_28829 = (0);
var i__28462_28830 = (0);
while(true){
if((i__28462_28830 < count__28461_28829)){
var vec__28635_28831 = cljs.core._nth.call(null,chunk__28460_28828,i__28462_28830);
var source_idx_28832 = cljs.core.nth.call(null,vec__28635_28831,(0),null);
var vec__28638_28833 = cljs.core.nth.call(null,vec__28635_28831,(1),null);
var __28834 = cljs.core.nth.call(null,vec__28638_28833,(0),null);
var lines_28835__$1 = cljs.core.nth.call(null,vec__28638_28833,(1),null);
var seq__28641_28836 = cljs.core.seq.call(null,lines_28835__$1);
var chunk__28642_28837 = null;
var count__28643_28838 = (0);
var i__28644_28839 = (0);
while(true){
if((i__28644_28839 < count__28643_28838)){
var vec__28683_28840 = cljs.core._nth.call(null,chunk__28642_28837,i__28644_28839);
var line_28841 = cljs.core.nth.call(null,vec__28683_28840,(0),null);
var cols_28842 = cljs.core.nth.call(null,vec__28683_28840,(1),null);
var seq__28686_28843 = cljs.core.seq.call(null,cols_28842);
var chunk__28687_28844 = null;
var count__28688_28845 = (0);
var i__28689_28846 = (0);
while(true){
if((i__28689_28846 < count__28688_28845)){
var vec__28696_28847 = cljs.core._nth.call(null,chunk__28687_28844,i__28689_28846);
var col_28848 = cljs.core.nth.call(null,vec__28696_28847,(0),null);
var infos_28849 = cljs.core.nth.call(null,vec__28696_28847,(1),null);
encode_cols.call(null,infos_28849,source_idx_28832,line_28841,col_28848);


var G__28850 = seq__28686_28843;
var G__28851 = chunk__28687_28844;
var G__28852 = count__28688_28845;
var G__28853 = (i__28689_28846 + (1));
seq__28686_28843 = G__28850;
chunk__28687_28844 = G__28851;
count__28688_28845 = G__28852;
i__28689_28846 = G__28853;
continue;
} else {
var temp__5720__auto___28854 = cljs.core.seq.call(null,seq__28686_28843);
if(temp__5720__auto___28854){
var seq__28686_28855__$1 = temp__5720__auto___28854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28686_28855__$1)){
var c__4550__auto___28856 = cljs.core.chunk_first.call(null,seq__28686_28855__$1);
var G__28857 = cljs.core.chunk_rest.call(null,seq__28686_28855__$1);
var G__28858 = c__4550__auto___28856;
var G__28859 = cljs.core.count.call(null,c__4550__auto___28856);
var G__28860 = (0);
seq__28686_28843 = G__28857;
chunk__28687_28844 = G__28858;
count__28688_28845 = G__28859;
i__28689_28846 = G__28860;
continue;
} else {
var vec__28699_28861 = cljs.core.first.call(null,seq__28686_28855__$1);
var col_28862 = cljs.core.nth.call(null,vec__28699_28861,(0),null);
var infos_28863 = cljs.core.nth.call(null,vec__28699_28861,(1),null);
encode_cols.call(null,infos_28863,source_idx_28832,line_28841,col_28862);


var G__28864 = cljs.core.next.call(null,seq__28686_28855__$1);
var G__28865 = null;
var G__28866 = (0);
var G__28867 = (0);
seq__28686_28843 = G__28864;
chunk__28687_28844 = G__28865;
count__28688_28845 = G__28866;
i__28689_28846 = G__28867;
continue;
}
} else {
}
}
break;
}


var G__28868 = seq__28641_28836;
var G__28869 = chunk__28642_28837;
var G__28870 = count__28643_28838;
var G__28871 = (i__28644_28839 + (1));
seq__28641_28836 = G__28868;
chunk__28642_28837 = G__28869;
count__28643_28838 = G__28870;
i__28644_28839 = G__28871;
continue;
} else {
var temp__5720__auto___28872 = cljs.core.seq.call(null,seq__28641_28836);
if(temp__5720__auto___28872){
var seq__28641_28873__$1 = temp__5720__auto___28872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28641_28873__$1)){
var c__4550__auto___28874 = cljs.core.chunk_first.call(null,seq__28641_28873__$1);
var G__28875 = cljs.core.chunk_rest.call(null,seq__28641_28873__$1);
var G__28876 = c__4550__auto___28874;
var G__28877 = cljs.core.count.call(null,c__4550__auto___28874);
var G__28878 = (0);
seq__28641_28836 = G__28875;
chunk__28642_28837 = G__28876;
count__28643_28838 = G__28877;
i__28644_28839 = G__28878;
continue;
} else {
var vec__28702_28879 = cljs.core.first.call(null,seq__28641_28873__$1);
var line_28880 = cljs.core.nth.call(null,vec__28702_28879,(0),null);
var cols_28881 = cljs.core.nth.call(null,vec__28702_28879,(1),null);
var seq__28705_28882 = cljs.core.seq.call(null,cols_28881);
var chunk__28706_28883 = null;
var count__28707_28884 = (0);
var i__28708_28885 = (0);
while(true){
if((i__28708_28885 < count__28707_28884)){
var vec__28715_28886 = cljs.core._nth.call(null,chunk__28706_28883,i__28708_28885);
var col_28887 = cljs.core.nth.call(null,vec__28715_28886,(0),null);
var infos_28888 = cljs.core.nth.call(null,vec__28715_28886,(1),null);
encode_cols.call(null,infos_28888,source_idx_28832,line_28880,col_28887);


var G__28889 = seq__28705_28882;
var G__28890 = chunk__28706_28883;
var G__28891 = count__28707_28884;
var G__28892 = (i__28708_28885 + (1));
seq__28705_28882 = G__28889;
chunk__28706_28883 = G__28890;
count__28707_28884 = G__28891;
i__28708_28885 = G__28892;
continue;
} else {
var temp__5720__auto___28893__$1 = cljs.core.seq.call(null,seq__28705_28882);
if(temp__5720__auto___28893__$1){
var seq__28705_28894__$1 = temp__5720__auto___28893__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28705_28894__$1)){
var c__4550__auto___28895 = cljs.core.chunk_first.call(null,seq__28705_28894__$1);
var G__28896 = cljs.core.chunk_rest.call(null,seq__28705_28894__$1);
var G__28897 = c__4550__auto___28895;
var G__28898 = cljs.core.count.call(null,c__4550__auto___28895);
var G__28899 = (0);
seq__28705_28882 = G__28896;
chunk__28706_28883 = G__28897;
count__28707_28884 = G__28898;
i__28708_28885 = G__28899;
continue;
} else {
var vec__28718_28900 = cljs.core.first.call(null,seq__28705_28894__$1);
var col_28901 = cljs.core.nth.call(null,vec__28718_28900,(0),null);
var infos_28902 = cljs.core.nth.call(null,vec__28718_28900,(1),null);
encode_cols.call(null,infos_28902,source_idx_28832,line_28880,col_28901);


var G__28903 = cljs.core.next.call(null,seq__28705_28894__$1);
var G__28904 = null;
var G__28905 = (0);
var G__28906 = (0);
seq__28705_28882 = G__28903;
chunk__28706_28883 = G__28904;
count__28707_28884 = G__28905;
i__28708_28885 = G__28906;
continue;
}
} else {
}
}
break;
}


var G__28907 = cljs.core.next.call(null,seq__28641_28873__$1);
var G__28908 = null;
var G__28909 = (0);
var G__28910 = (0);
seq__28641_28836 = G__28907;
chunk__28642_28837 = G__28908;
count__28643_28838 = G__28909;
i__28644_28839 = G__28910;
continue;
}
} else {
}
}
break;
}


var G__28911 = seq__28459_28827;
var G__28912 = chunk__28460_28828;
var G__28913 = count__28461_28829;
var G__28914 = (i__28462_28830 + (1));
seq__28459_28827 = G__28911;
chunk__28460_28828 = G__28912;
count__28461_28829 = G__28913;
i__28462_28830 = G__28914;
continue;
} else {
var temp__5720__auto___28915 = cljs.core.seq.call(null,seq__28459_28827);
if(temp__5720__auto___28915){
var seq__28459_28916__$1 = temp__5720__auto___28915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28459_28916__$1)){
var c__4550__auto___28917 = cljs.core.chunk_first.call(null,seq__28459_28916__$1);
var G__28918 = cljs.core.chunk_rest.call(null,seq__28459_28916__$1);
var G__28919 = c__4550__auto___28917;
var G__28920 = cljs.core.count.call(null,c__4550__auto___28917);
var G__28921 = (0);
seq__28459_28827 = G__28918;
chunk__28460_28828 = G__28919;
count__28461_28829 = G__28920;
i__28462_28830 = G__28921;
continue;
} else {
var vec__28721_28922 = cljs.core.first.call(null,seq__28459_28916__$1);
var source_idx_28923 = cljs.core.nth.call(null,vec__28721_28922,(0),null);
var vec__28724_28924 = cljs.core.nth.call(null,vec__28721_28922,(1),null);
var __28925 = cljs.core.nth.call(null,vec__28724_28924,(0),null);
var lines_28926__$1 = cljs.core.nth.call(null,vec__28724_28924,(1),null);
var seq__28727_28927 = cljs.core.seq.call(null,lines_28926__$1);
var chunk__28728_28928 = null;
var count__28729_28929 = (0);
var i__28730_28930 = (0);
while(true){
if((i__28730_28930 < count__28729_28929)){
var vec__28769_28931 = cljs.core._nth.call(null,chunk__28728_28928,i__28730_28930);
var line_28932 = cljs.core.nth.call(null,vec__28769_28931,(0),null);
var cols_28933 = cljs.core.nth.call(null,vec__28769_28931,(1),null);
var seq__28772_28934 = cljs.core.seq.call(null,cols_28933);
var chunk__28773_28935 = null;
var count__28774_28936 = (0);
var i__28775_28937 = (0);
while(true){
if((i__28775_28937 < count__28774_28936)){
var vec__28782_28938 = cljs.core._nth.call(null,chunk__28773_28935,i__28775_28937);
var col_28939 = cljs.core.nth.call(null,vec__28782_28938,(0),null);
var infos_28940 = cljs.core.nth.call(null,vec__28782_28938,(1),null);
encode_cols.call(null,infos_28940,source_idx_28923,line_28932,col_28939);


var G__28941 = seq__28772_28934;
var G__28942 = chunk__28773_28935;
var G__28943 = count__28774_28936;
var G__28944 = (i__28775_28937 + (1));
seq__28772_28934 = G__28941;
chunk__28773_28935 = G__28942;
count__28774_28936 = G__28943;
i__28775_28937 = G__28944;
continue;
} else {
var temp__5720__auto___28945__$1 = cljs.core.seq.call(null,seq__28772_28934);
if(temp__5720__auto___28945__$1){
var seq__28772_28946__$1 = temp__5720__auto___28945__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28772_28946__$1)){
var c__4550__auto___28947 = cljs.core.chunk_first.call(null,seq__28772_28946__$1);
var G__28948 = cljs.core.chunk_rest.call(null,seq__28772_28946__$1);
var G__28949 = c__4550__auto___28947;
var G__28950 = cljs.core.count.call(null,c__4550__auto___28947);
var G__28951 = (0);
seq__28772_28934 = G__28948;
chunk__28773_28935 = G__28949;
count__28774_28936 = G__28950;
i__28775_28937 = G__28951;
continue;
} else {
var vec__28785_28952 = cljs.core.first.call(null,seq__28772_28946__$1);
var col_28953 = cljs.core.nth.call(null,vec__28785_28952,(0),null);
var infos_28954 = cljs.core.nth.call(null,vec__28785_28952,(1),null);
encode_cols.call(null,infos_28954,source_idx_28923,line_28932,col_28953);


var G__28955 = cljs.core.next.call(null,seq__28772_28946__$1);
var G__28956 = null;
var G__28957 = (0);
var G__28958 = (0);
seq__28772_28934 = G__28955;
chunk__28773_28935 = G__28956;
count__28774_28936 = G__28957;
i__28775_28937 = G__28958;
continue;
}
} else {
}
}
break;
}


var G__28959 = seq__28727_28927;
var G__28960 = chunk__28728_28928;
var G__28961 = count__28729_28929;
var G__28962 = (i__28730_28930 + (1));
seq__28727_28927 = G__28959;
chunk__28728_28928 = G__28960;
count__28729_28929 = G__28961;
i__28730_28930 = G__28962;
continue;
} else {
var temp__5720__auto___28963__$1 = cljs.core.seq.call(null,seq__28727_28927);
if(temp__5720__auto___28963__$1){
var seq__28727_28964__$1 = temp__5720__auto___28963__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28727_28964__$1)){
var c__4550__auto___28965 = cljs.core.chunk_first.call(null,seq__28727_28964__$1);
var G__28966 = cljs.core.chunk_rest.call(null,seq__28727_28964__$1);
var G__28967 = c__4550__auto___28965;
var G__28968 = cljs.core.count.call(null,c__4550__auto___28965);
var G__28969 = (0);
seq__28727_28927 = G__28966;
chunk__28728_28928 = G__28967;
count__28729_28929 = G__28968;
i__28730_28930 = G__28969;
continue;
} else {
var vec__28788_28970 = cljs.core.first.call(null,seq__28727_28964__$1);
var line_28971 = cljs.core.nth.call(null,vec__28788_28970,(0),null);
var cols_28972 = cljs.core.nth.call(null,vec__28788_28970,(1),null);
var seq__28791_28973 = cljs.core.seq.call(null,cols_28972);
var chunk__28792_28974 = null;
var count__28793_28975 = (0);
var i__28794_28976 = (0);
while(true){
if((i__28794_28976 < count__28793_28975)){
var vec__28801_28977 = cljs.core._nth.call(null,chunk__28792_28974,i__28794_28976);
var col_28978 = cljs.core.nth.call(null,vec__28801_28977,(0),null);
var infos_28979 = cljs.core.nth.call(null,vec__28801_28977,(1),null);
encode_cols.call(null,infos_28979,source_idx_28923,line_28971,col_28978);


var G__28980 = seq__28791_28973;
var G__28981 = chunk__28792_28974;
var G__28982 = count__28793_28975;
var G__28983 = (i__28794_28976 + (1));
seq__28791_28973 = G__28980;
chunk__28792_28974 = G__28981;
count__28793_28975 = G__28982;
i__28794_28976 = G__28983;
continue;
} else {
var temp__5720__auto___28984__$2 = cljs.core.seq.call(null,seq__28791_28973);
if(temp__5720__auto___28984__$2){
var seq__28791_28985__$1 = temp__5720__auto___28984__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28791_28985__$1)){
var c__4550__auto___28986 = cljs.core.chunk_first.call(null,seq__28791_28985__$1);
var G__28987 = cljs.core.chunk_rest.call(null,seq__28791_28985__$1);
var G__28988 = c__4550__auto___28986;
var G__28989 = cljs.core.count.call(null,c__4550__auto___28986);
var G__28990 = (0);
seq__28791_28973 = G__28987;
chunk__28792_28974 = G__28988;
count__28793_28975 = G__28989;
i__28794_28976 = G__28990;
continue;
} else {
var vec__28804_28991 = cljs.core.first.call(null,seq__28791_28985__$1);
var col_28992 = cljs.core.nth.call(null,vec__28804_28991,(0),null);
var infos_28993 = cljs.core.nth.call(null,vec__28804_28991,(1),null);
encode_cols.call(null,infos_28993,source_idx_28923,line_28971,col_28992);


var G__28994 = cljs.core.next.call(null,seq__28791_28985__$1);
var G__28995 = null;
var G__28996 = (0);
var G__28997 = (0);
seq__28791_28973 = G__28994;
chunk__28792_28974 = G__28995;
count__28793_28975 = G__28996;
i__28794_28976 = G__28997;
continue;
}
} else {
}
}
break;
}


var G__28998 = cljs.core.next.call(null,seq__28727_28964__$1);
var G__28999 = null;
var G__29000 = (0);
var G__29001 = (0);
seq__28727_28927 = G__28998;
chunk__28728_28928 = G__28999;
count__28729_28929 = G__29000;
i__28730_28930 = G__29001;
continue;
}
} else {
}
}
break;
}


var G__29002 = cljs.core.next.call(null,seq__28459_28916__$1);
var G__29003 = null;
var G__29004 = (0);
var G__29005 = (0);
seq__28459_28827 = G__29002;
chunk__28460_28828 = G__29003;
count__28461_28829 = G__29004;
i__28462_28830 = G__29005;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__28807 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28452_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28452_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28453_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__28453_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28454_SHARP_){
return clojure.string.join.call(null,",",p1__28454_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__28808 = G__28807;
goog.object.set(G__28808,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__28808;
} else {
return G__28807;
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
var vec__29006 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__29006,(0),null);
var col_map = cljs.core.nth.call(null,vec__29006,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__29009 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__29009,(0),null);
var infos = cljs.core.nth.call(null,vec__29009,(1),null);
var G__29015 = cljs.core.next.call(null,col_map_seq);
var G__29016 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__29009,col,infos,vec__29006,line,col_map){
return (function (v,p__29012){
var map__29013 = p__29012;
var map__29013__$1 = (((((!((map__29013 == null))))?(((((map__29013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29013):map__29013);
var gline = cljs.core.get.call(null,map__29013__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__29013__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__29009,col,infos,vec__29006,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__29015;
new_cols = G__29016;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__29017 = cljs.core.next.call(null,line_map_seq);
var G__29018 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__29017;
new_lines = G__29018;
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
var seq__29019_29291 = cljs.core.seq.call(null,reverse_map);
var chunk__29020_29292 = null;
var count__29021_29293 = (0);
var i__29022_29294 = (0);
while(true){
if((i__29022_29294 < count__29021_29293)){
var vec__29157_29295 = cljs.core._nth.call(null,chunk__29020_29292,i__29022_29294);
var line_29296 = cljs.core.nth.call(null,vec__29157_29295,(0),null);
var columns_29297 = cljs.core.nth.call(null,vec__29157_29295,(1),null);
var seq__29160_29298 = cljs.core.seq.call(null,columns_29297);
var chunk__29161_29299 = null;
var count__29162_29300 = (0);
var i__29163_29301 = (0);
while(true){
if((i__29163_29301 < count__29162_29300)){
var vec__29194_29302 = cljs.core._nth.call(null,chunk__29161_29299,i__29163_29301);
var column_29303 = cljs.core.nth.call(null,vec__29194_29302,(0),null);
var column_info_29304 = cljs.core.nth.call(null,vec__29194_29302,(1),null);
var seq__29197_29305 = cljs.core.seq.call(null,column_info_29304);
var chunk__29198_29306 = null;
var count__29199_29307 = (0);
var i__29200_29308 = (0);
while(true){
if((i__29200_29308 < count__29199_29307)){
var map__29205_29309 = cljs.core._nth.call(null,chunk__29198_29306,i__29200_29308);
var map__29205_29310__$1 = (((((!((map__29205_29309 == null))))?(((((map__29205_29309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29205_29309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29205_29309):map__29205_29309);
var gline_29311 = cljs.core.get.call(null,map__29205_29310__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29312 = cljs.core.get.call(null,map__29205_29310__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29313 = cljs.core.get.call(null,map__29205_29310__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29311], null),cljs.core.fnil.call(null,((function (seq__29197_29305,chunk__29198_29306,count__29199_29307,i__29200_29308,seq__29160_29298,chunk__29161_29299,count__29162_29300,i__29163_29301,seq__29019_29291,chunk__29020_29292,count__29021_29293,i__29022_29294,map__29205_29309,map__29205_29310__$1,gline_29311,gcol_29312,name_29313,vec__29194_29302,column_29303,column_info_29304,vec__29157_29295,line_29296,columns_29297,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29312], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29296,new cljs.core.Keyword(null,"col","col",-1959363084),column_29303,new cljs.core.Keyword(null,"name","name",1843675177),name_29313], null));
});})(seq__29197_29305,chunk__29198_29306,count__29199_29307,i__29200_29308,seq__29160_29298,chunk__29161_29299,count__29162_29300,i__29163_29301,seq__29019_29291,chunk__29020_29292,count__29021_29293,i__29022_29294,map__29205_29309,map__29205_29310__$1,gline_29311,gcol_29312,name_29313,vec__29194_29302,column_29303,column_info_29304,vec__29157_29295,line_29296,columns_29297,inverted))
,cljs.core.sorted_map.call(null)));


var G__29314 = seq__29197_29305;
var G__29315 = chunk__29198_29306;
var G__29316 = count__29199_29307;
var G__29317 = (i__29200_29308 + (1));
seq__29197_29305 = G__29314;
chunk__29198_29306 = G__29315;
count__29199_29307 = G__29316;
i__29200_29308 = G__29317;
continue;
} else {
var temp__5720__auto___29318 = cljs.core.seq.call(null,seq__29197_29305);
if(temp__5720__auto___29318){
var seq__29197_29319__$1 = temp__5720__auto___29318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29197_29319__$1)){
var c__4550__auto___29320 = cljs.core.chunk_first.call(null,seq__29197_29319__$1);
var G__29321 = cljs.core.chunk_rest.call(null,seq__29197_29319__$1);
var G__29322 = c__4550__auto___29320;
var G__29323 = cljs.core.count.call(null,c__4550__auto___29320);
var G__29324 = (0);
seq__29197_29305 = G__29321;
chunk__29198_29306 = G__29322;
count__29199_29307 = G__29323;
i__29200_29308 = G__29324;
continue;
} else {
var map__29207_29325 = cljs.core.first.call(null,seq__29197_29319__$1);
var map__29207_29326__$1 = (((((!((map__29207_29325 == null))))?(((((map__29207_29325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29207_29325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29207_29325):map__29207_29325);
var gline_29327 = cljs.core.get.call(null,map__29207_29326__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29328 = cljs.core.get.call(null,map__29207_29326__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29329 = cljs.core.get.call(null,map__29207_29326__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29327], null),cljs.core.fnil.call(null,((function (seq__29197_29305,chunk__29198_29306,count__29199_29307,i__29200_29308,seq__29160_29298,chunk__29161_29299,count__29162_29300,i__29163_29301,seq__29019_29291,chunk__29020_29292,count__29021_29293,i__29022_29294,map__29207_29325,map__29207_29326__$1,gline_29327,gcol_29328,name_29329,seq__29197_29319__$1,temp__5720__auto___29318,vec__29194_29302,column_29303,column_info_29304,vec__29157_29295,line_29296,columns_29297,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29328], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29296,new cljs.core.Keyword(null,"col","col",-1959363084),column_29303,new cljs.core.Keyword(null,"name","name",1843675177),name_29329], null));
});})(seq__29197_29305,chunk__29198_29306,count__29199_29307,i__29200_29308,seq__29160_29298,chunk__29161_29299,count__29162_29300,i__29163_29301,seq__29019_29291,chunk__29020_29292,count__29021_29293,i__29022_29294,map__29207_29325,map__29207_29326__$1,gline_29327,gcol_29328,name_29329,seq__29197_29319__$1,temp__5720__auto___29318,vec__29194_29302,column_29303,column_info_29304,vec__29157_29295,line_29296,columns_29297,inverted))
,cljs.core.sorted_map.call(null)));


var G__29330 = cljs.core.next.call(null,seq__29197_29319__$1);
var G__29331 = null;
var G__29332 = (0);
var G__29333 = (0);
seq__29197_29305 = G__29330;
chunk__29198_29306 = G__29331;
count__29199_29307 = G__29332;
i__29200_29308 = G__29333;
continue;
}
} else {
}
}
break;
}


var G__29334 = seq__29160_29298;
var G__29335 = chunk__29161_29299;
var G__29336 = count__29162_29300;
var G__29337 = (i__29163_29301 + (1));
seq__29160_29298 = G__29334;
chunk__29161_29299 = G__29335;
count__29162_29300 = G__29336;
i__29163_29301 = G__29337;
continue;
} else {
var temp__5720__auto___29338 = cljs.core.seq.call(null,seq__29160_29298);
if(temp__5720__auto___29338){
var seq__29160_29339__$1 = temp__5720__auto___29338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29160_29339__$1)){
var c__4550__auto___29340 = cljs.core.chunk_first.call(null,seq__29160_29339__$1);
var G__29341 = cljs.core.chunk_rest.call(null,seq__29160_29339__$1);
var G__29342 = c__4550__auto___29340;
var G__29343 = cljs.core.count.call(null,c__4550__auto___29340);
var G__29344 = (0);
seq__29160_29298 = G__29341;
chunk__29161_29299 = G__29342;
count__29162_29300 = G__29343;
i__29163_29301 = G__29344;
continue;
} else {
var vec__29209_29345 = cljs.core.first.call(null,seq__29160_29339__$1);
var column_29346 = cljs.core.nth.call(null,vec__29209_29345,(0),null);
var column_info_29347 = cljs.core.nth.call(null,vec__29209_29345,(1),null);
var seq__29212_29348 = cljs.core.seq.call(null,column_info_29347);
var chunk__29213_29349 = null;
var count__29214_29350 = (0);
var i__29215_29351 = (0);
while(true){
if((i__29215_29351 < count__29214_29350)){
var map__29220_29352 = cljs.core._nth.call(null,chunk__29213_29349,i__29215_29351);
var map__29220_29353__$1 = (((((!((map__29220_29352 == null))))?(((((map__29220_29352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29220_29352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29220_29352):map__29220_29352);
var gline_29354 = cljs.core.get.call(null,map__29220_29353__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29355 = cljs.core.get.call(null,map__29220_29353__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29356 = cljs.core.get.call(null,map__29220_29353__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29354], null),cljs.core.fnil.call(null,((function (seq__29212_29348,chunk__29213_29349,count__29214_29350,i__29215_29351,seq__29160_29298,chunk__29161_29299,count__29162_29300,i__29163_29301,seq__29019_29291,chunk__29020_29292,count__29021_29293,i__29022_29294,map__29220_29352,map__29220_29353__$1,gline_29354,gcol_29355,name_29356,vec__29209_29345,column_29346,column_info_29347,seq__29160_29339__$1,temp__5720__auto___29338,vec__29157_29295,line_29296,columns_29297,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29355], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29296,new cljs.core.Keyword(null,"col","col",-1959363084),column_29346,new cljs.core.Keyword(null,"name","name",1843675177),name_29356], null));
});})(seq__29212_29348,chunk__29213_29349,count__29214_29350,i__29215_29351,seq__29160_29298,chunk__29161_29299,count__29162_29300,i__29163_29301,seq__29019_29291,chunk__29020_29292,count__29021_29293,i__29022_29294,map__29220_29352,map__29220_29353__$1,gline_29354,gcol_29355,name_29356,vec__29209_29345,column_29346,column_info_29347,seq__29160_29339__$1,temp__5720__auto___29338,vec__29157_29295,line_29296,columns_29297,inverted))
,cljs.core.sorted_map.call(null)));


var G__29357 = seq__29212_29348;
var G__29358 = chunk__29213_29349;
var G__29359 = count__29214_29350;
var G__29360 = (i__29215_29351 + (1));
seq__29212_29348 = G__29357;
chunk__29213_29349 = G__29358;
count__29214_29350 = G__29359;
i__29215_29351 = G__29360;
continue;
} else {
var temp__5720__auto___29361__$1 = cljs.core.seq.call(null,seq__29212_29348);
if(temp__5720__auto___29361__$1){
var seq__29212_29362__$1 = temp__5720__auto___29361__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29212_29362__$1)){
var c__4550__auto___29363 = cljs.core.chunk_first.call(null,seq__29212_29362__$1);
var G__29364 = cljs.core.chunk_rest.call(null,seq__29212_29362__$1);
var G__29365 = c__4550__auto___29363;
var G__29366 = cljs.core.count.call(null,c__4550__auto___29363);
var G__29367 = (0);
seq__29212_29348 = G__29364;
chunk__29213_29349 = G__29365;
count__29214_29350 = G__29366;
i__29215_29351 = G__29367;
continue;
} else {
var map__29222_29368 = cljs.core.first.call(null,seq__29212_29362__$1);
var map__29222_29369__$1 = (((((!((map__29222_29368 == null))))?(((((map__29222_29368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29222_29368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29222_29368):map__29222_29368);
var gline_29370 = cljs.core.get.call(null,map__29222_29369__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29371 = cljs.core.get.call(null,map__29222_29369__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29372 = cljs.core.get.call(null,map__29222_29369__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29370], null),cljs.core.fnil.call(null,((function (seq__29212_29348,chunk__29213_29349,count__29214_29350,i__29215_29351,seq__29160_29298,chunk__29161_29299,count__29162_29300,i__29163_29301,seq__29019_29291,chunk__29020_29292,count__29021_29293,i__29022_29294,map__29222_29368,map__29222_29369__$1,gline_29370,gcol_29371,name_29372,seq__29212_29362__$1,temp__5720__auto___29361__$1,vec__29209_29345,column_29346,column_info_29347,seq__29160_29339__$1,temp__5720__auto___29338,vec__29157_29295,line_29296,columns_29297,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29371], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29296,new cljs.core.Keyword(null,"col","col",-1959363084),column_29346,new cljs.core.Keyword(null,"name","name",1843675177),name_29372], null));
});})(seq__29212_29348,chunk__29213_29349,count__29214_29350,i__29215_29351,seq__29160_29298,chunk__29161_29299,count__29162_29300,i__29163_29301,seq__29019_29291,chunk__29020_29292,count__29021_29293,i__29022_29294,map__29222_29368,map__29222_29369__$1,gline_29370,gcol_29371,name_29372,seq__29212_29362__$1,temp__5720__auto___29361__$1,vec__29209_29345,column_29346,column_info_29347,seq__29160_29339__$1,temp__5720__auto___29338,vec__29157_29295,line_29296,columns_29297,inverted))
,cljs.core.sorted_map.call(null)));


var G__29373 = cljs.core.next.call(null,seq__29212_29362__$1);
var G__29374 = null;
var G__29375 = (0);
var G__29376 = (0);
seq__29212_29348 = G__29373;
chunk__29213_29349 = G__29374;
count__29214_29350 = G__29375;
i__29215_29351 = G__29376;
continue;
}
} else {
}
}
break;
}


var G__29377 = cljs.core.next.call(null,seq__29160_29339__$1);
var G__29378 = null;
var G__29379 = (0);
var G__29380 = (0);
seq__29160_29298 = G__29377;
chunk__29161_29299 = G__29378;
count__29162_29300 = G__29379;
i__29163_29301 = G__29380;
continue;
}
} else {
}
}
break;
}


var G__29381 = seq__29019_29291;
var G__29382 = chunk__29020_29292;
var G__29383 = count__29021_29293;
var G__29384 = (i__29022_29294 + (1));
seq__29019_29291 = G__29381;
chunk__29020_29292 = G__29382;
count__29021_29293 = G__29383;
i__29022_29294 = G__29384;
continue;
} else {
var temp__5720__auto___29385 = cljs.core.seq.call(null,seq__29019_29291);
if(temp__5720__auto___29385){
var seq__29019_29386__$1 = temp__5720__auto___29385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29019_29386__$1)){
var c__4550__auto___29387 = cljs.core.chunk_first.call(null,seq__29019_29386__$1);
var G__29388 = cljs.core.chunk_rest.call(null,seq__29019_29386__$1);
var G__29389 = c__4550__auto___29387;
var G__29390 = cljs.core.count.call(null,c__4550__auto___29387);
var G__29391 = (0);
seq__29019_29291 = G__29388;
chunk__29020_29292 = G__29389;
count__29021_29293 = G__29390;
i__29022_29294 = G__29391;
continue;
} else {
var vec__29224_29392 = cljs.core.first.call(null,seq__29019_29386__$1);
var line_29393 = cljs.core.nth.call(null,vec__29224_29392,(0),null);
var columns_29394 = cljs.core.nth.call(null,vec__29224_29392,(1),null);
var seq__29227_29395 = cljs.core.seq.call(null,columns_29394);
var chunk__29228_29396 = null;
var count__29229_29397 = (0);
var i__29230_29398 = (0);
while(true){
if((i__29230_29398 < count__29229_29397)){
var vec__29261_29399 = cljs.core._nth.call(null,chunk__29228_29396,i__29230_29398);
var column_29400 = cljs.core.nth.call(null,vec__29261_29399,(0),null);
var column_info_29401 = cljs.core.nth.call(null,vec__29261_29399,(1),null);
var seq__29264_29402 = cljs.core.seq.call(null,column_info_29401);
var chunk__29265_29403 = null;
var count__29266_29404 = (0);
var i__29267_29405 = (0);
while(true){
if((i__29267_29405 < count__29266_29404)){
var map__29272_29406 = cljs.core._nth.call(null,chunk__29265_29403,i__29267_29405);
var map__29272_29407__$1 = (((((!((map__29272_29406 == null))))?(((((map__29272_29406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29272_29406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29272_29406):map__29272_29406);
var gline_29408 = cljs.core.get.call(null,map__29272_29407__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29409 = cljs.core.get.call(null,map__29272_29407__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29410 = cljs.core.get.call(null,map__29272_29407__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29408], null),cljs.core.fnil.call(null,((function (seq__29264_29402,chunk__29265_29403,count__29266_29404,i__29267_29405,seq__29227_29395,chunk__29228_29396,count__29229_29397,i__29230_29398,seq__29019_29291,chunk__29020_29292,count__29021_29293,i__29022_29294,map__29272_29406,map__29272_29407__$1,gline_29408,gcol_29409,name_29410,vec__29261_29399,column_29400,column_info_29401,vec__29224_29392,line_29393,columns_29394,seq__29019_29386__$1,temp__5720__auto___29385,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29409], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29393,new cljs.core.Keyword(null,"col","col",-1959363084),column_29400,new cljs.core.Keyword(null,"name","name",1843675177),name_29410], null));
});})(seq__29264_29402,chunk__29265_29403,count__29266_29404,i__29267_29405,seq__29227_29395,chunk__29228_29396,count__29229_29397,i__29230_29398,seq__29019_29291,chunk__29020_29292,count__29021_29293,i__29022_29294,map__29272_29406,map__29272_29407__$1,gline_29408,gcol_29409,name_29410,vec__29261_29399,column_29400,column_info_29401,vec__29224_29392,line_29393,columns_29394,seq__29019_29386__$1,temp__5720__auto___29385,inverted))
,cljs.core.sorted_map.call(null)));


var G__29411 = seq__29264_29402;
var G__29412 = chunk__29265_29403;
var G__29413 = count__29266_29404;
var G__29414 = (i__29267_29405 + (1));
seq__29264_29402 = G__29411;
chunk__29265_29403 = G__29412;
count__29266_29404 = G__29413;
i__29267_29405 = G__29414;
continue;
} else {
var temp__5720__auto___29415__$1 = cljs.core.seq.call(null,seq__29264_29402);
if(temp__5720__auto___29415__$1){
var seq__29264_29416__$1 = temp__5720__auto___29415__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29264_29416__$1)){
var c__4550__auto___29417 = cljs.core.chunk_first.call(null,seq__29264_29416__$1);
var G__29418 = cljs.core.chunk_rest.call(null,seq__29264_29416__$1);
var G__29419 = c__4550__auto___29417;
var G__29420 = cljs.core.count.call(null,c__4550__auto___29417);
var G__29421 = (0);
seq__29264_29402 = G__29418;
chunk__29265_29403 = G__29419;
count__29266_29404 = G__29420;
i__29267_29405 = G__29421;
continue;
} else {
var map__29274_29422 = cljs.core.first.call(null,seq__29264_29416__$1);
var map__29274_29423__$1 = (((((!((map__29274_29422 == null))))?(((((map__29274_29422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29274_29422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29274_29422):map__29274_29422);
var gline_29424 = cljs.core.get.call(null,map__29274_29423__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29425 = cljs.core.get.call(null,map__29274_29423__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29426 = cljs.core.get.call(null,map__29274_29423__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29424], null),cljs.core.fnil.call(null,((function (seq__29264_29402,chunk__29265_29403,count__29266_29404,i__29267_29405,seq__29227_29395,chunk__29228_29396,count__29229_29397,i__29230_29398,seq__29019_29291,chunk__29020_29292,count__29021_29293,i__29022_29294,map__29274_29422,map__29274_29423__$1,gline_29424,gcol_29425,name_29426,seq__29264_29416__$1,temp__5720__auto___29415__$1,vec__29261_29399,column_29400,column_info_29401,vec__29224_29392,line_29393,columns_29394,seq__29019_29386__$1,temp__5720__auto___29385,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29425], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29393,new cljs.core.Keyword(null,"col","col",-1959363084),column_29400,new cljs.core.Keyword(null,"name","name",1843675177),name_29426], null));
});})(seq__29264_29402,chunk__29265_29403,count__29266_29404,i__29267_29405,seq__29227_29395,chunk__29228_29396,count__29229_29397,i__29230_29398,seq__29019_29291,chunk__29020_29292,count__29021_29293,i__29022_29294,map__29274_29422,map__29274_29423__$1,gline_29424,gcol_29425,name_29426,seq__29264_29416__$1,temp__5720__auto___29415__$1,vec__29261_29399,column_29400,column_info_29401,vec__29224_29392,line_29393,columns_29394,seq__29019_29386__$1,temp__5720__auto___29385,inverted))
,cljs.core.sorted_map.call(null)));


var G__29427 = cljs.core.next.call(null,seq__29264_29416__$1);
var G__29428 = null;
var G__29429 = (0);
var G__29430 = (0);
seq__29264_29402 = G__29427;
chunk__29265_29403 = G__29428;
count__29266_29404 = G__29429;
i__29267_29405 = G__29430;
continue;
}
} else {
}
}
break;
}


var G__29431 = seq__29227_29395;
var G__29432 = chunk__29228_29396;
var G__29433 = count__29229_29397;
var G__29434 = (i__29230_29398 + (1));
seq__29227_29395 = G__29431;
chunk__29228_29396 = G__29432;
count__29229_29397 = G__29433;
i__29230_29398 = G__29434;
continue;
} else {
var temp__5720__auto___29435__$1 = cljs.core.seq.call(null,seq__29227_29395);
if(temp__5720__auto___29435__$1){
var seq__29227_29436__$1 = temp__5720__auto___29435__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29227_29436__$1)){
var c__4550__auto___29437 = cljs.core.chunk_first.call(null,seq__29227_29436__$1);
var G__29438 = cljs.core.chunk_rest.call(null,seq__29227_29436__$1);
var G__29439 = c__4550__auto___29437;
var G__29440 = cljs.core.count.call(null,c__4550__auto___29437);
var G__29441 = (0);
seq__29227_29395 = G__29438;
chunk__29228_29396 = G__29439;
count__29229_29397 = G__29440;
i__29230_29398 = G__29441;
continue;
} else {
var vec__29276_29442 = cljs.core.first.call(null,seq__29227_29436__$1);
var column_29443 = cljs.core.nth.call(null,vec__29276_29442,(0),null);
var column_info_29444 = cljs.core.nth.call(null,vec__29276_29442,(1),null);
var seq__29279_29445 = cljs.core.seq.call(null,column_info_29444);
var chunk__29280_29446 = null;
var count__29281_29447 = (0);
var i__29282_29448 = (0);
while(true){
if((i__29282_29448 < count__29281_29447)){
var map__29287_29449 = cljs.core._nth.call(null,chunk__29280_29446,i__29282_29448);
var map__29287_29450__$1 = (((((!((map__29287_29449 == null))))?(((((map__29287_29449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29287_29449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29287_29449):map__29287_29449);
var gline_29451 = cljs.core.get.call(null,map__29287_29450__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29452 = cljs.core.get.call(null,map__29287_29450__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29453 = cljs.core.get.call(null,map__29287_29450__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29451], null),cljs.core.fnil.call(null,((function (seq__29279_29445,chunk__29280_29446,count__29281_29447,i__29282_29448,seq__29227_29395,chunk__29228_29396,count__29229_29397,i__29230_29398,seq__29019_29291,chunk__29020_29292,count__29021_29293,i__29022_29294,map__29287_29449,map__29287_29450__$1,gline_29451,gcol_29452,name_29453,vec__29276_29442,column_29443,column_info_29444,seq__29227_29436__$1,temp__5720__auto___29435__$1,vec__29224_29392,line_29393,columns_29394,seq__29019_29386__$1,temp__5720__auto___29385,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29452], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29393,new cljs.core.Keyword(null,"col","col",-1959363084),column_29443,new cljs.core.Keyword(null,"name","name",1843675177),name_29453], null));
});})(seq__29279_29445,chunk__29280_29446,count__29281_29447,i__29282_29448,seq__29227_29395,chunk__29228_29396,count__29229_29397,i__29230_29398,seq__29019_29291,chunk__29020_29292,count__29021_29293,i__29022_29294,map__29287_29449,map__29287_29450__$1,gline_29451,gcol_29452,name_29453,vec__29276_29442,column_29443,column_info_29444,seq__29227_29436__$1,temp__5720__auto___29435__$1,vec__29224_29392,line_29393,columns_29394,seq__29019_29386__$1,temp__5720__auto___29385,inverted))
,cljs.core.sorted_map.call(null)));


var G__29454 = seq__29279_29445;
var G__29455 = chunk__29280_29446;
var G__29456 = count__29281_29447;
var G__29457 = (i__29282_29448 + (1));
seq__29279_29445 = G__29454;
chunk__29280_29446 = G__29455;
count__29281_29447 = G__29456;
i__29282_29448 = G__29457;
continue;
} else {
var temp__5720__auto___29458__$2 = cljs.core.seq.call(null,seq__29279_29445);
if(temp__5720__auto___29458__$2){
var seq__29279_29459__$1 = temp__5720__auto___29458__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29279_29459__$1)){
var c__4550__auto___29460 = cljs.core.chunk_first.call(null,seq__29279_29459__$1);
var G__29461 = cljs.core.chunk_rest.call(null,seq__29279_29459__$1);
var G__29462 = c__4550__auto___29460;
var G__29463 = cljs.core.count.call(null,c__4550__auto___29460);
var G__29464 = (0);
seq__29279_29445 = G__29461;
chunk__29280_29446 = G__29462;
count__29281_29447 = G__29463;
i__29282_29448 = G__29464;
continue;
} else {
var map__29289_29465 = cljs.core.first.call(null,seq__29279_29459__$1);
var map__29289_29466__$1 = (((((!((map__29289_29465 == null))))?(((((map__29289_29465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29289_29465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29289_29465):map__29289_29465);
var gline_29467 = cljs.core.get.call(null,map__29289_29466__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29468 = cljs.core.get.call(null,map__29289_29466__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29469 = cljs.core.get.call(null,map__29289_29466__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29467], null),cljs.core.fnil.call(null,((function (seq__29279_29445,chunk__29280_29446,count__29281_29447,i__29282_29448,seq__29227_29395,chunk__29228_29396,count__29229_29397,i__29230_29398,seq__29019_29291,chunk__29020_29292,count__29021_29293,i__29022_29294,map__29289_29465,map__29289_29466__$1,gline_29467,gcol_29468,name_29469,seq__29279_29459__$1,temp__5720__auto___29458__$2,vec__29276_29442,column_29443,column_info_29444,seq__29227_29436__$1,temp__5720__auto___29435__$1,vec__29224_29392,line_29393,columns_29394,seq__29019_29386__$1,temp__5720__auto___29385,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29468], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29393,new cljs.core.Keyword(null,"col","col",-1959363084),column_29443,new cljs.core.Keyword(null,"name","name",1843675177),name_29469], null));
});})(seq__29279_29445,chunk__29280_29446,count__29281_29447,i__29282_29448,seq__29227_29395,chunk__29228_29396,count__29229_29397,i__29230_29398,seq__29019_29291,chunk__29020_29292,count__29021_29293,i__29022_29294,map__29289_29465,map__29289_29466__$1,gline_29467,gcol_29468,name_29469,seq__29279_29459__$1,temp__5720__auto___29458__$2,vec__29276_29442,column_29443,column_info_29444,seq__29227_29436__$1,temp__5720__auto___29435__$1,vec__29224_29392,line_29393,columns_29394,seq__29019_29386__$1,temp__5720__auto___29385,inverted))
,cljs.core.sorted_map.call(null)));


var G__29470 = cljs.core.next.call(null,seq__29279_29459__$1);
var G__29471 = null;
var G__29472 = (0);
var G__29473 = (0);
seq__29279_29445 = G__29470;
chunk__29280_29446 = G__29471;
count__29281_29447 = G__29472;
i__29282_29448 = G__29473;
continue;
}
} else {
}
}
break;
}


var G__29474 = cljs.core.next.call(null,seq__29227_29436__$1);
var G__29475 = null;
var G__29476 = (0);
var G__29477 = (0);
seq__29227_29395 = G__29474;
chunk__29228_29396 = G__29475;
count__29229_29397 = G__29476;
i__29230_29398 = G__29477;
continue;
}
} else {
}
}
break;
}


var G__29478 = cljs.core.next.call(null,seq__29019_29386__$1);
var G__29479 = null;
var G__29480 = (0);
var G__29481 = (0);
seq__29019_29291 = G__29478;
chunk__29020_29292 = G__29479;
count__29021_29293 = G__29480;
i__29022_29294 = G__29481;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1601347610837
