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
return cljs.core.reduce.call(null,(function (m,p__28371){
var vec__28372 = p__28371;
var i = cljs.core.nth.call(null,vec__28372,(0),null);
var v = cljs.core.nth.call(null,vec__28372,(1),null);
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
var vec__28375 = seg;
var gcol = cljs.core.nth.call(null,vec__28375,(0),null);
var source = cljs.core.nth.call(null,vec__28375,(1),null);
var line = cljs.core.nth.call(null,vec__28375,(2),null);
var col = cljs.core.nth.call(null,vec__28375,(3),null);
var name = cljs.core.nth.call(null,vec__28375,(4),null);
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
var vec__28378 = seg;
var gcol = cljs.core.nth.call(null,vec__28378,(0),null);
var source = cljs.core.nth.call(null,vec__28378,(1),null);
var line = cljs.core.nth.call(null,vec__28378,(2),null);
var col = cljs.core.nth.call(null,vec__28378,(3),null);
var name = cljs.core.nth.call(null,vec__28378,(4),null);
var vec__28381 = relseg;
var rgcol = cljs.core.nth.call(null,vec__28381,(0),null);
var rsource = cljs.core.nth.call(null,vec__28381,(1),null);
var rline = cljs.core.nth.call(null,vec__28381,(2),null);
var rcol = cljs.core.nth.call(null,vec__28381,(3),null);
var rname = cljs.core.nth.call(null,vec__28381,(4),null);
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
var map__28384 = segmap;
var map__28384__$1 = (((((!((map__28384 == null))))?(((((map__28384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28384):map__28384);
var gcol = cljs.core.get.call(null,map__28384__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__28384__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__28384__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__28384__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__28384__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__28384,map__28384__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__28384,map__28384__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__28384,map__28384__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__28384,map__28384__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__28384,map__28384__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__28384,map__28384__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__28387 = arguments.length;
switch (G__28387) {
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
var vec__28391 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__28395 = cljs.core.next.call(null,segs__$1);
var G__28396 = nrelseg;
var G__28397 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__28395;
relseg__$1 = G__28396;
result__$1 = G__28397;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__28391,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__28391,(1),null);
var G__28398 = (gline + (1));
var G__28399 = cljs.core.next.call(null,lines__$1);
var G__28400 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__28401 = result__$1;
gline = G__28398;
lines__$1 = G__28399;
relseg = G__28400;
result = G__28401;
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
var map__28403 = segmap;
var map__28403__$1 = (((((!((map__28403 == null))))?(((((map__28403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28403):map__28403);
var gcol = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__28403__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__28403,map__28403__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__28403,map__28403__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__28402_SHARP_){
return cljs.core.conj.call(null,p1__28402_SHARP_,d__$1);
});})(map__28403,map__28403__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__28403,map__28403__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__28406 = arguments.length;
switch (G__28406) {
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
var G__28416 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
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
return (function (p__28421){
var vec__28422 = p__28421;
var _ = cljs.core.nth.call(null,vec__28422,(0),null);
var source = cljs.core.nth.call(null,vec__28422,(1),null);
var line = cljs.core.nth.call(null,vec__28422,(2),null);
var col = cljs.core.nth.call(null,vec__28422,(3),null);
var name = cljs.core.nth.call(null,vec__28422,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__28425){
var vec__28426 = p__28425;
var gcol = cljs.core.nth.call(null,vec__28426,(0),null);
var sidx = cljs.core.nth.call(null,vec__28426,(1),null);
var line = cljs.core.nth.call(null,vec__28426,(2),null);
var col = cljs.core.nth.call(null,vec__28426,(3),null);
var name = cljs.core.nth.call(null,vec__28426,(4),null);
var seg = vec__28426;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__28426,gcol,sidx,line,col,name,seg,relseg){
return (function (p__28429){
var vec__28430 = p__28429;
var _ = cljs.core.nth.call(null,vec__28430,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28430,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__28430,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__28430,(3),null);
var lname = cljs.core.nth.call(null,vec__28430,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__28426,gcol,sidx,line,col,name,seg,relseg))
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
var seq__28436 = cljs.core.seq.call(null,infos);
var chunk__28437 = null;
var count__28438 = (0);
var i__28439 = (0);
while(true){
if((i__28439 < count__28438)){
var info = cljs.core._nth.call(null,chunk__28437,i__28439);
var segv_28790 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_28791 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28792 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_28791 > (lc_28792 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__28436,chunk__28437,count__28438,i__28439,segv_28790,gline_28791,lc_28792,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_28791 - (lc_28792 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28790], null));
});})(seq__28436,chunk__28437,count__28438,i__28439,segv_28790,gline_28791,lc_28792,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__28436,chunk__28437,count__28438,i__28439,segv_28790,gline_28791,lc_28792,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28791], null),cljs.core.conj,segv_28790);
});})(seq__28436,chunk__28437,count__28438,i__28439,segv_28790,gline_28791,lc_28792,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__28793 = seq__28436;
var G__28794 = chunk__28437;
var G__28795 = count__28438;
var G__28796 = (i__28439 + (1));
seq__28436 = G__28793;
chunk__28437 = G__28794;
count__28438 = G__28795;
i__28439 = G__28796;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28436);
if(temp__5720__auto__){
var seq__28436__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28436__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28436__$1);
var G__28797 = cljs.core.chunk_rest.call(null,seq__28436__$1);
var G__28798 = c__4550__auto__;
var G__28799 = cljs.core.count.call(null,c__4550__auto__);
var G__28800 = (0);
seq__28436 = G__28797;
chunk__28437 = G__28798;
count__28438 = G__28799;
i__28439 = G__28800;
continue;
} else {
var info = cljs.core.first.call(null,seq__28436__$1);
var segv_28801 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_28802 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28803 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_28802 > (lc_28803 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__28436,chunk__28437,count__28438,i__28439,segv_28801,gline_28802,lc_28803,info,seq__28436__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_28802 - (lc_28803 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28801], null));
});})(seq__28436,chunk__28437,count__28438,i__28439,segv_28801,gline_28802,lc_28803,info,seq__28436__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__28436,chunk__28437,count__28438,i__28439,segv_28801,gline_28802,lc_28803,info,seq__28436__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28802], null),cljs.core.conj,segv_28801);
});})(seq__28436,chunk__28437,count__28438,i__28439,segv_28801,gline_28802,lc_28803,info,seq__28436__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__28804 = cljs.core.next.call(null,seq__28436__$1);
var G__28805 = null;
var G__28806 = (0);
var G__28807 = (0);
seq__28436 = G__28804;
chunk__28437 = G__28805;
count__28438 = G__28806;
i__28439 = G__28807;
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
var seq__28440_28808 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__28441_28809 = null;
var count__28442_28810 = (0);
var i__28443_28811 = (0);
while(true){
if((i__28443_28811 < count__28442_28810)){
var vec__28616_28812 = cljs.core._nth.call(null,chunk__28441_28809,i__28443_28811);
var source_idx_28813 = cljs.core.nth.call(null,vec__28616_28812,(0),null);
var vec__28619_28814 = cljs.core.nth.call(null,vec__28616_28812,(1),null);
var __28815 = cljs.core.nth.call(null,vec__28619_28814,(0),null);
var lines_28816__$1 = cljs.core.nth.call(null,vec__28619_28814,(1),null);
var seq__28622_28817 = cljs.core.seq.call(null,lines_28816__$1);
var chunk__28623_28818 = null;
var count__28624_28819 = (0);
var i__28625_28820 = (0);
while(true){
if((i__28625_28820 < count__28624_28819)){
var vec__28664_28821 = cljs.core._nth.call(null,chunk__28623_28818,i__28625_28820);
var line_28822 = cljs.core.nth.call(null,vec__28664_28821,(0),null);
var cols_28823 = cljs.core.nth.call(null,vec__28664_28821,(1),null);
var seq__28667_28824 = cljs.core.seq.call(null,cols_28823);
var chunk__28668_28825 = null;
var count__28669_28826 = (0);
var i__28670_28827 = (0);
while(true){
if((i__28670_28827 < count__28669_28826)){
var vec__28677_28828 = cljs.core._nth.call(null,chunk__28668_28825,i__28670_28827);
var col_28829 = cljs.core.nth.call(null,vec__28677_28828,(0),null);
var infos_28830 = cljs.core.nth.call(null,vec__28677_28828,(1),null);
encode_cols.call(null,infos_28830,source_idx_28813,line_28822,col_28829);


var G__28831 = seq__28667_28824;
var G__28832 = chunk__28668_28825;
var G__28833 = count__28669_28826;
var G__28834 = (i__28670_28827 + (1));
seq__28667_28824 = G__28831;
chunk__28668_28825 = G__28832;
count__28669_28826 = G__28833;
i__28670_28827 = G__28834;
continue;
} else {
var temp__5720__auto___28835 = cljs.core.seq.call(null,seq__28667_28824);
if(temp__5720__auto___28835){
var seq__28667_28836__$1 = temp__5720__auto___28835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28667_28836__$1)){
var c__4550__auto___28837 = cljs.core.chunk_first.call(null,seq__28667_28836__$1);
var G__28838 = cljs.core.chunk_rest.call(null,seq__28667_28836__$1);
var G__28839 = c__4550__auto___28837;
var G__28840 = cljs.core.count.call(null,c__4550__auto___28837);
var G__28841 = (0);
seq__28667_28824 = G__28838;
chunk__28668_28825 = G__28839;
count__28669_28826 = G__28840;
i__28670_28827 = G__28841;
continue;
} else {
var vec__28680_28842 = cljs.core.first.call(null,seq__28667_28836__$1);
var col_28843 = cljs.core.nth.call(null,vec__28680_28842,(0),null);
var infos_28844 = cljs.core.nth.call(null,vec__28680_28842,(1),null);
encode_cols.call(null,infos_28844,source_idx_28813,line_28822,col_28843);


var G__28845 = cljs.core.next.call(null,seq__28667_28836__$1);
var G__28846 = null;
var G__28847 = (0);
var G__28848 = (0);
seq__28667_28824 = G__28845;
chunk__28668_28825 = G__28846;
count__28669_28826 = G__28847;
i__28670_28827 = G__28848;
continue;
}
} else {
}
}
break;
}


var G__28849 = seq__28622_28817;
var G__28850 = chunk__28623_28818;
var G__28851 = count__28624_28819;
var G__28852 = (i__28625_28820 + (1));
seq__28622_28817 = G__28849;
chunk__28623_28818 = G__28850;
count__28624_28819 = G__28851;
i__28625_28820 = G__28852;
continue;
} else {
var temp__5720__auto___28853 = cljs.core.seq.call(null,seq__28622_28817);
if(temp__5720__auto___28853){
var seq__28622_28854__$1 = temp__5720__auto___28853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28622_28854__$1)){
var c__4550__auto___28855 = cljs.core.chunk_first.call(null,seq__28622_28854__$1);
var G__28856 = cljs.core.chunk_rest.call(null,seq__28622_28854__$1);
var G__28857 = c__4550__auto___28855;
var G__28858 = cljs.core.count.call(null,c__4550__auto___28855);
var G__28859 = (0);
seq__28622_28817 = G__28856;
chunk__28623_28818 = G__28857;
count__28624_28819 = G__28858;
i__28625_28820 = G__28859;
continue;
} else {
var vec__28683_28860 = cljs.core.first.call(null,seq__28622_28854__$1);
var line_28861 = cljs.core.nth.call(null,vec__28683_28860,(0),null);
var cols_28862 = cljs.core.nth.call(null,vec__28683_28860,(1),null);
var seq__28686_28863 = cljs.core.seq.call(null,cols_28862);
var chunk__28687_28864 = null;
var count__28688_28865 = (0);
var i__28689_28866 = (0);
while(true){
if((i__28689_28866 < count__28688_28865)){
var vec__28696_28867 = cljs.core._nth.call(null,chunk__28687_28864,i__28689_28866);
var col_28868 = cljs.core.nth.call(null,vec__28696_28867,(0),null);
var infos_28869 = cljs.core.nth.call(null,vec__28696_28867,(1),null);
encode_cols.call(null,infos_28869,source_idx_28813,line_28861,col_28868);


var G__28870 = seq__28686_28863;
var G__28871 = chunk__28687_28864;
var G__28872 = count__28688_28865;
var G__28873 = (i__28689_28866 + (1));
seq__28686_28863 = G__28870;
chunk__28687_28864 = G__28871;
count__28688_28865 = G__28872;
i__28689_28866 = G__28873;
continue;
} else {
var temp__5720__auto___28874__$1 = cljs.core.seq.call(null,seq__28686_28863);
if(temp__5720__auto___28874__$1){
var seq__28686_28875__$1 = temp__5720__auto___28874__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28686_28875__$1)){
var c__4550__auto___28876 = cljs.core.chunk_first.call(null,seq__28686_28875__$1);
var G__28877 = cljs.core.chunk_rest.call(null,seq__28686_28875__$1);
var G__28878 = c__4550__auto___28876;
var G__28879 = cljs.core.count.call(null,c__4550__auto___28876);
var G__28880 = (0);
seq__28686_28863 = G__28877;
chunk__28687_28864 = G__28878;
count__28688_28865 = G__28879;
i__28689_28866 = G__28880;
continue;
} else {
var vec__28699_28881 = cljs.core.first.call(null,seq__28686_28875__$1);
var col_28882 = cljs.core.nth.call(null,vec__28699_28881,(0),null);
var infos_28883 = cljs.core.nth.call(null,vec__28699_28881,(1),null);
encode_cols.call(null,infos_28883,source_idx_28813,line_28861,col_28882);


var G__28884 = cljs.core.next.call(null,seq__28686_28875__$1);
var G__28885 = null;
var G__28886 = (0);
var G__28887 = (0);
seq__28686_28863 = G__28884;
chunk__28687_28864 = G__28885;
count__28688_28865 = G__28886;
i__28689_28866 = G__28887;
continue;
}
} else {
}
}
break;
}


var G__28888 = cljs.core.next.call(null,seq__28622_28854__$1);
var G__28889 = null;
var G__28890 = (0);
var G__28891 = (0);
seq__28622_28817 = G__28888;
chunk__28623_28818 = G__28889;
count__28624_28819 = G__28890;
i__28625_28820 = G__28891;
continue;
}
} else {
}
}
break;
}


var G__28892 = seq__28440_28808;
var G__28893 = chunk__28441_28809;
var G__28894 = count__28442_28810;
var G__28895 = (i__28443_28811 + (1));
seq__28440_28808 = G__28892;
chunk__28441_28809 = G__28893;
count__28442_28810 = G__28894;
i__28443_28811 = G__28895;
continue;
} else {
var temp__5720__auto___28896 = cljs.core.seq.call(null,seq__28440_28808);
if(temp__5720__auto___28896){
var seq__28440_28897__$1 = temp__5720__auto___28896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28440_28897__$1)){
var c__4550__auto___28898 = cljs.core.chunk_first.call(null,seq__28440_28897__$1);
var G__28899 = cljs.core.chunk_rest.call(null,seq__28440_28897__$1);
var G__28900 = c__4550__auto___28898;
var G__28901 = cljs.core.count.call(null,c__4550__auto___28898);
var G__28902 = (0);
seq__28440_28808 = G__28899;
chunk__28441_28809 = G__28900;
count__28442_28810 = G__28901;
i__28443_28811 = G__28902;
continue;
} else {
var vec__28702_28903 = cljs.core.first.call(null,seq__28440_28897__$1);
var source_idx_28904 = cljs.core.nth.call(null,vec__28702_28903,(0),null);
var vec__28705_28905 = cljs.core.nth.call(null,vec__28702_28903,(1),null);
var __28906 = cljs.core.nth.call(null,vec__28705_28905,(0),null);
var lines_28907__$1 = cljs.core.nth.call(null,vec__28705_28905,(1),null);
var seq__28708_28908 = cljs.core.seq.call(null,lines_28907__$1);
var chunk__28709_28909 = null;
var count__28710_28910 = (0);
var i__28711_28911 = (0);
while(true){
if((i__28711_28911 < count__28710_28910)){
var vec__28750_28912 = cljs.core._nth.call(null,chunk__28709_28909,i__28711_28911);
var line_28913 = cljs.core.nth.call(null,vec__28750_28912,(0),null);
var cols_28914 = cljs.core.nth.call(null,vec__28750_28912,(1),null);
var seq__28753_28915 = cljs.core.seq.call(null,cols_28914);
var chunk__28754_28916 = null;
var count__28755_28917 = (0);
var i__28756_28918 = (0);
while(true){
if((i__28756_28918 < count__28755_28917)){
var vec__28763_28919 = cljs.core._nth.call(null,chunk__28754_28916,i__28756_28918);
var col_28920 = cljs.core.nth.call(null,vec__28763_28919,(0),null);
var infos_28921 = cljs.core.nth.call(null,vec__28763_28919,(1),null);
encode_cols.call(null,infos_28921,source_idx_28904,line_28913,col_28920);


var G__28922 = seq__28753_28915;
var G__28923 = chunk__28754_28916;
var G__28924 = count__28755_28917;
var G__28925 = (i__28756_28918 + (1));
seq__28753_28915 = G__28922;
chunk__28754_28916 = G__28923;
count__28755_28917 = G__28924;
i__28756_28918 = G__28925;
continue;
} else {
var temp__5720__auto___28926__$1 = cljs.core.seq.call(null,seq__28753_28915);
if(temp__5720__auto___28926__$1){
var seq__28753_28927__$1 = temp__5720__auto___28926__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28753_28927__$1)){
var c__4550__auto___28928 = cljs.core.chunk_first.call(null,seq__28753_28927__$1);
var G__28929 = cljs.core.chunk_rest.call(null,seq__28753_28927__$1);
var G__28930 = c__4550__auto___28928;
var G__28931 = cljs.core.count.call(null,c__4550__auto___28928);
var G__28932 = (0);
seq__28753_28915 = G__28929;
chunk__28754_28916 = G__28930;
count__28755_28917 = G__28931;
i__28756_28918 = G__28932;
continue;
} else {
var vec__28766_28933 = cljs.core.first.call(null,seq__28753_28927__$1);
var col_28934 = cljs.core.nth.call(null,vec__28766_28933,(0),null);
var infos_28935 = cljs.core.nth.call(null,vec__28766_28933,(1),null);
encode_cols.call(null,infos_28935,source_idx_28904,line_28913,col_28934);


var G__28936 = cljs.core.next.call(null,seq__28753_28927__$1);
var G__28937 = null;
var G__28938 = (0);
var G__28939 = (0);
seq__28753_28915 = G__28936;
chunk__28754_28916 = G__28937;
count__28755_28917 = G__28938;
i__28756_28918 = G__28939;
continue;
}
} else {
}
}
break;
}


var G__28940 = seq__28708_28908;
var G__28941 = chunk__28709_28909;
var G__28942 = count__28710_28910;
var G__28943 = (i__28711_28911 + (1));
seq__28708_28908 = G__28940;
chunk__28709_28909 = G__28941;
count__28710_28910 = G__28942;
i__28711_28911 = G__28943;
continue;
} else {
var temp__5720__auto___28944__$1 = cljs.core.seq.call(null,seq__28708_28908);
if(temp__5720__auto___28944__$1){
var seq__28708_28945__$1 = temp__5720__auto___28944__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28708_28945__$1)){
var c__4550__auto___28946 = cljs.core.chunk_first.call(null,seq__28708_28945__$1);
var G__28947 = cljs.core.chunk_rest.call(null,seq__28708_28945__$1);
var G__28948 = c__4550__auto___28946;
var G__28949 = cljs.core.count.call(null,c__4550__auto___28946);
var G__28950 = (0);
seq__28708_28908 = G__28947;
chunk__28709_28909 = G__28948;
count__28710_28910 = G__28949;
i__28711_28911 = G__28950;
continue;
} else {
var vec__28769_28951 = cljs.core.first.call(null,seq__28708_28945__$1);
var line_28952 = cljs.core.nth.call(null,vec__28769_28951,(0),null);
var cols_28953 = cljs.core.nth.call(null,vec__28769_28951,(1),null);
var seq__28772_28954 = cljs.core.seq.call(null,cols_28953);
var chunk__28773_28955 = null;
var count__28774_28956 = (0);
var i__28775_28957 = (0);
while(true){
if((i__28775_28957 < count__28774_28956)){
var vec__28782_28958 = cljs.core._nth.call(null,chunk__28773_28955,i__28775_28957);
var col_28959 = cljs.core.nth.call(null,vec__28782_28958,(0),null);
var infos_28960 = cljs.core.nth.call(null,vec__28782_28958,(1),null);
encode_cols.call(null,infos_28960,source_idx_28904,line_28952,col_28959);


var G__28961 = seq__28772_28954;
var G__28962 = chunk__28773_28955;
var G__28963 = count__28774_28956;
var G__28964 = (i__28775_28957 + (1));
seq__28772_28954 = G__28961;
chunk__28773_28955 = G__28962;
count__28774_28956 = G__28963;
i__28775_28957 = G__28964;
continue;
} else {
var temp__5720__auto___28965__$2 = cljs.core.seq.call(null,seq__28772_28954);
if(temp__5720__auto___28965__$2){
var seq__28772_28966__$1 = temp__5720__auto___28965__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28772_28966__$1)){
var c__4550__auto___28967 = cljs.core.chunk_first.call(null,seq__28772_28966__$1);
var G__28968 = cljs.core.chunk_rest.call(null,seq__28772_28966__$1);
var G__28969 = c__4550__auto___28967;
var G__28970 = cljs.core.count.call(null,c__4550__auto___28967);
var G__28971 = (0);
seq__28772_28954 = G__28968;
chunk__28773_28955 = G__28969;
count__28774_28956 = G__28970;
i__28775_28957 = G__28971;
continue;
} else {
var vec__28785_28972 = cljs.core.first.call(null,seq__28772_28966__$1);
var col_28973 = cljs.core.nth.call(null,vec__28785_28972,(0),null);
var infos_28974 = cljs.core.nth.call(null,vec__28785_28972,(1),null);
encode_cols.call(null,infos_28974,source_idx_28904,line_28952,col_28973);


var G__28975 = cljs.core.next.call(null,seq__28772_28966__$1);
var G__28976 = null;
var G__28977 = (0);
var G__28978 = (0);
seq__28772_28954 = G__28975;
chunk__28773_28955 = G__28976;
count__28774_28956 = G__28977;
i__28775_28957 = G__28978;
continue;
}
} else {
}
}
break;
}


var G__28979 = cljs.core.next.call(null,seq__28708_28945__$1);
var G__28980 = null;
var G__28981 = (0);
var G__28982 = (0);
seq__28708_28908 = G__28979;
chunk__28709_28909 = G__28980;
count__28710_28910 = G__28981;
i__28711_28911 = G__28982;
continue;
}
} else {
}
}
break;
}


var G__28983 = cljs.core.next.call(null,seq__28440_28897__$1);
var G__28984 = null;
var G__28985 = (0);
var G__28986 = (0);
seq__28440_28808 = G__28983;
chunk__28441_28809 = G__28984;
count__28442_28810 = G__28985;
i__28443_28811 = G__28986;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__28788 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28433_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28433_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28434_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__28434_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28435_SHARP_){
return clojure.string.join.call(null,",",p1__28435_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__28789 = G__28788;
goog.object.set(G__28789,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__28789;
} else {
return G__28788;
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
var vec__28987 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__28987,(0),null);
var col_map = cljs.core.nth.call(null,vec__28987,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__28990 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__28990,(0),null);
var infos = cljs.core.nth.call(null,vec__28990,(1),null);
var G__28996 = cljs.core.next.call(null,col_map_seq);
var G__28997 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__28990,col,infos,vec__28987,line,col_map){
return (function (v,p__28993){
var map__28994 = p__28993;
var map__28994__$1 = (((((!((map__28994 == null))))?(((((map__28994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28994):map__28994);
var gline = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__28994__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__28990,col,infos,vec__28987,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__28996;
new_cols = G__28997;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__28998 = cljs.core.next.call(null,line_map_seq);
var G__28999 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__28998;
new_lines = G__28999;
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
var seq__29000_29272 = cljs.core.seq.call(null,reverse_map);
var chunk__29001_29273 = null;
var count__29002_29274 = (0);
var i__29003_29275 = (0);
while(true){
if((i__29003_29275 < count__29002_29274)){
var vec__29138_29276 = cljs.core._nth.call(null,chunk__29001_29273,i__29003_29275);
var line_29277 = cljs.core.nth.call(null,vec__29138_29276,(0),null);
var columns_29278 = cljs.core.nth.call(null,vec__29138_29276,(1),null);
var seq__29141_29279 = cljs.core.seq.call(null,columns_29278);
var chunk__29142_29280 = null;
var count__29143_29281 = (0);
var i__29144_29282 = (0);
while(true){
if((i__29144_29282 < count__29143_29281)){
var vec__29175_29283 = cljs.core._nth.call(null,chunk__29142_29280,i__29144_29282);
var column_29284 = cljs.core.nth.call(null,vec__29175_29283,(0),null);
var column_info_29285 = cljs.core.nth.call(null,vec__29175_29283,(1),null);
var seq__29178_29286 = cljs.core.seq.call(null,column_info_29285);
var chunk__29179_29287 = null;
var count__29180_29288 = (0);
var i__29181_29289 = (0);
while(true){
if((i__29181_29289 < count__29180_29288)){
var map__29186_29290 = cljs.core._nth.call(null,chunk__29179_29287,i__29181_29289);
var map__29186_29291__$1 = (((((!((map__29186_29290 == null))))?(((((map__29186_29290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29186_29290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29186_29290):map__29186_29290);
var gline_29292 = cljs.core.get.call(null,map__29186_29291__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29293 = cljs.core.get.call(null,map__29186_29291__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29294 = cljs.core.get.call(null,map__29186_29291__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29292], null),cljs.core.fnil.call(null,((function (seq__29178_29286,chunk__29179_29287,count__29180_29288,i__29181_29289,seq__29141_29279,chunk__29142_29280,count__29143_29281,i__29144_29282,seq__29000_29272,chunk__29001_29273,count__29002_29274,i__29003_29275,map__29186_29290,map__29186_29291__$1,gline_29292,gcol_29293,name_29294,vec__29175_29283,column_29284,column_info_29285,vec__29138_29276,line_29277,columns_29278,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29293], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29277,new cljs.core.Keyword(null,"col","col",-1959363084),column_29284,new cljs.core.Keyword(null,"name","name",1843675177),name_29294], null));
});})(seq__29178_29286,chunk__29179_29287,count__29180_29288,i__29181_29289,seq__29141_29279,chunk__29142_29280,count__29143_29281,i__29144_29282,seq__29000_29272,chunk__29001_29273,count__29002_29274,i__29003_29275,map__29186_29290,map__29186_29291__$1,gline_29292,gcol_29293,name_29294,vec__29175_29283,column_29284,column_info_29285,vec__29138_29276,line_29277,columns_29278,inverted))
,cljs.core.sorted_map.call(null)));


var G__29295 = seq__29178_29286;
var G__29296 = chunk__29179_29287;
var G__29297 = count__29180_29288;
var G__29298 = (i__29181_29289 + (1));
seq__29178_29286 = G__29295;
chunk__29179_29287 = G__29296;
count__29180_29288 = G__29297;
i__29181_29289 = G__29298;
continue;
} else {
var temp__5720__auto___29299 = cljs.core.seq.call(null,seq__29178_29286);
if(temp__5720__auto___29299){
var seq__29178_29300__$1 = temp__5720__auto___29299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29178_29300__$1)){
var c__4550__auto___29301 = cljs.core.chunk_first.call(null,seq__29178_29300__$1);
var G__29302 = cljs.core.chunk_rest.call(null,seq__29178_29300__$1);
var G__29303 = c__4550__auto___29301;
var G__29304 = cljs.core.count.call(null,c__4550__auto___29301);
var G__29305 = (0);
seq__29178_29286 = G__29302;
chunk__29179_29287 = G__29303;
count__29180_29288 = G__29304;
i__29181_29289 = G__29305;
continue;
} else {
var map__29188_29306 = cljs.core.first.call(null,seq__29178_29300__$1);
var map__29188_29307__$1 = (((((!((map__29188_29306 == null))))?(((((map__29188_29306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29188_29306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29188_29306):map__29188_29306);
var gline_29308 = cljs.core.get.call(null,map__29188_29307__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29309 = cljs.core.get.call(null,map__29188_29307__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29310 = cljs.core.get.call(null,map__29188_29307__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29308], null),cljs.core.fnil.call(null,((function (seq__29178_29286,chunk__29179_29287,count__29180_29288,i__29181_29289,seq__29141_29279,chunk__29142_29280,count__29143_29281,i__29144_29282,seq__29000_29272,chunk__29001_29273,count__29002_29274,i__29003_29275,map__29188_29306,map__29188_29307__$1,gline_29308,gcol_29309,name_29310,seq__29178_29300__$1,temp__5720__auto___29299,vec__29175_29283,column_29284,column_info_29285,vec__29138_29276,line_29277,columns_29278,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29309], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29277,new cljs.core.Keyword(null,"col","col",-1959363084),column_29284,new cljs.core.Keyword(null,"name","name",1843675177),name_29310], null));
});})(seq__29178_29286,chunk__29179_29287,count__29180_29288,i__29181_29289,seq__29141_29279,chunk__29142_29280,count__29143_29281,i__29144_29282,seq__29000_29272,chunk__29001_29273,count__29002_29274,i__29003_29275,map__29188_29306,map__29188_29307__$1,gline_29308,gcol_29309,name_29310,seq__29178_29300__$1,temp__5720__auto___29299,vec__29175_29283,column_29284,column_info_29285,vec__29138_29276,line_29277,columns_29278,inverted))
,cljs.core.sorted_map.call(null)));


var G__29311 = cljs.core.next.call(null,seq__29178_29300__$1);
var G__29312 = null;
var G__29313 = (0);
var G__29314 = (0);
seq__29178_29286 = G__29311;
chunk__29179_29287 = G__29312;
count__29180_29288 = G__29313;
i__29181_29289 = G__29314;
continue;
}
} else {
}
}
break;
}


var G__29315 = seq__29141_29279;
var G__29316 = chunk__29142_29280;
var G__29317 = count__29143_29281;
var G__29318 = (i__29144_29282 + (1));
seq__29141_29279 = G__29315;
chunk__29142_29280 = G__29316;
count__29143_29281 = G__29317;
i__29144_29282 = G__29318;
continue;
} else {
var temp__5720__auto___29319 = cljs.core.seq.call(null,seq__29141_29279);
if(temp__5720__auto___29319){
var seq__29141_29320__$1 = temp__5720__auto___29319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29141_29320__$1)){
var c__4550__auto___29321 = cljs.core.chunk_first.call(null,seq__29141_29320__$1);
var G__29322 = cljs.core.chunk_rest.call(null,seq__29141_29320__$1);
var G__29323 = c__4550__auto___29321;
var G__29324 = cljs.core.count.call(null,c__4550__auto___29321);
var G__29325 = (0);
seq__29141_29279 = G__29322;
chunk__29142_29280 = G__29323;
count__29143_29281 = G__29324;
i__29144_29282 = G__29325;
continue;
} else {
var vec__29190_29326 = cljs.core.first.call(null,seq__29141_29320__$1);
var column_29327 = cljs.core.nth.call(null,vec__29190_29326,(0),null);
var column_info_29328 = cljs.core.nth.call(null,vec__29190_29326,(1),null);
var seq__29193_29329 = cljs.core.seq.call(null,column_info_29328);
var chunk__29194_29330 = null;
var count__29195_29331 = (0);
var i__29196_29332 = (0);
while(true){
if((i__29196_29332 < count__29195_29331)){
var map__29201_29333 = cljs.core._nth.call(null,chunk__29194_29330,i__29196_29332);
var map__29201_29334__$1 = (((((!((map__29201_29333 == null))))?(((((map__29201_29333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29201_29333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29201_29333):map__29201_29333);
var gline_29335 = cljs.core.get.call(null,map__29201_29334__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29336 = cljs.core.get.call(null,map__29201_29334__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29337 = cljs.core.get.call(null,map__29201_29334__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29335], null),cljs.core.fnil.call(null,((function (seq__29193_29329,chunk__29194_29330,count__29195_29331,i__29196_29332,seq__29141_29279,chunk__29142_29280,count__29143_29281,i__29144_29282,seq__29000_29272,chunk__29001_29273,count__29002_29274,i__29003_29275,map__29201_29333,map__29201_29334__$1,gline_29335,gcol_29336,name_29337,vec__29190_29326,column_29327,column_info_29328,seq__29141_29320__$1,temp__5720__auto___29319,vec__29138_29276,line_29277,columns_29278,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29336], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29277,new cljs.core.Keyword(null,"col","col",-1959363084),column_29327,new cljs.core.Keyword(null,"name","name",1843675177),name_29337], null));
});})(seq__29193_29329,chunk__29194_29330,count__29195_29331,i__29196_29332,seq__29141_29279,chunk__29142_29280,count__29143_29281,i__29144_29282,seq__29000_29272,chunk__29001_29273,count__29002_29274,i__29003_29275,map__29201_29333,map__29201_29334__$1,gline_29335,gcol_29336,name_29337,vec__29190_29326,column_29327,column_info_29328,seq__29141_29320__$1,temp__5720__auto___29319,vec__29138_29276,line_29277,columns_29278,inverted))
,cljs.core.sorted_map.call(null)));


var G__29338 = seq__29193_29329;
var G__29339 = chunk__29194_29330;
var G__29340 = count__29195_29331;
var G__29341 = (i__29196_29332 + (1));
seq__29193_29329 = G__29338;
chunk__29194_29330 = G__29339;
count__29195_29331 = G__29340;
i__29196_29332 = G__29341;
continue;
} else {
var temp__5720__auto___29342__$1 = cljs.core.seq.call(null,seq__29193_29329);
if(temp__5720__auto___29342__$1){
var seq__29193_29343__$1 = temp__5720__auto___29342__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29193_29343__$1)){
var c__4550__auto___29344 = cljs.core.chunk_first.call(null,seq__29193_29343__$1);
var G__29345 = cljs.core.chunk_rest.call(null,seq__29193_29343__$1);
var G__29346 = c__4550__auto___29344;
var G__29347 = cljs.core.count.call(null,c__4550__auto___29344);
var G__29348 = (0);
seq__29193_29329 = G__29345;
chunk__29194_29330 = G__29346;
count__29195_29331 = G__29347;
i__29196_29332 = G__29348;
continue;
} else {
var map__29203_29349 = cljs.core.first.call(null,seq__29193_29343__$1);
var map__29203_29350__$1 = (((((!((map__29203_29349 == null))))?(((((map__29203_29349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29203_29349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29203_29349):map__29203_29349);
var gline_29351 = cljs.core.get.call(null,map__29203_29350__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29352 = cljs.core.get.call(null,map__29203_29350__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29353 = cljs.core.get.call(null,map__29203_29350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29351], null),cljs.core.fnil.call(null,((function (seq__29193_29329,chunk__29194_29330,count__29195_29331,i__29196_29332,seq__29141_29279,chunk__29142_29280,count__29143_29281,i__29144_29282,seq__29000_29272,chunk__29001_29273,count__29002_29274,i__29003_29275,map__29203_29349,map__29203_29350__$1,gline_29351,gcol_29352,name_29353,seq__29193_29343__$1,temp__5720__auto___29342__$1,vec__29190_29326,column_29327,column_info_29328,seq__29141_29320__$1,temp__5720__auto___29319,vec__29138_29276,line_29277,columns_29278,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29352], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29277,new cljs.core.Keyword(null,"col","col",-1959363084),column_29327,new cljs.core.Keyword(null,"name","name",1843675177),name_29353], null));
});})(seq__29193_29329,chunk__29194_29330,count__29195_29331,i__29196_29332,seq__29141_29279,chunk__29142_29280,count__29143_29281,i__29144_29282,seq__29000_29272,chunk__29001_29273,count__29002_29274,i__29003_29275,map__29203_29349,map__29203_29350__$1,gline_29351,gcol_29352,name_29353,seq__29193_29343__$1,temp__5720__auto___29342__$1,vec__29190_29326,column_29327,column_info_29328,seq__29141_29320__$1,temp__5720__auto___29319,vec__29138_29276,line_29277,columns_29278,inverted))
,cljs.core.sorted_map.call(null)));


var G__29354 = cljs.core.next.call(null,seq__29193_29343__$1);
var G__29355 = null;
var G__29356 = (0);
var G__29357 = (0);
seq__29193_29329 = G__29354;
chunk__29194_29330 = G__29355;
count__29195_29331 = G__29356;
i__29196_29332 = G__29357;
continue;
}
} else {
}
}
break;
}


var G__29358 = cljs.core.next.call(null,seq__29141_29320__$1);
var G__29359 = null;
var G__29360 = (0);
var G__29361 = (0);
seq__29141_29279 = G__29358;
chunk__29142_29280 = G__29359;
count__29143_29281 = G__29360;
i__29144_29282 = G__29361;
continue;
}
} else {
}
}
break;
}


var G__29362 = seq__29000_29272;
var G__29363 = chunk__29001_29273;
var G__29364 = count__29002_29274;
var G__29365 = (i__29003_29275 + (1));
seq__29000_29272 = G__29362;
chunk__29001_29273 = G__29363;
count__29002_29274 = G__29364;
i__29003_29275 = G__29365;
continue;
} else {
var temp__5720__auto___29366 = cljs.core.seq.call(null,seq__29000_29272);
if(temp__5720__auto___29366){
var seq__29000_29367__$1 = temp__5720__auto___29366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29000_29367__$1)){
var c__4550__auto___29368 = cljs.core.chunk_first.call(null,seq__29000_29367__$1);
var G__29369 = cljs.core.chunk_rest.call(null,seq__29000_29367__$1);
var G__29370 = c__4550__auto___29368;
var G__29371 = cljs.core.count.call(null,c__4550__auto___29368);
var G__29372 = (0);
seq__29000_29272 = G__29369;
chunk__29001_29273 = G__29370;
count__29002_29274 = G__29371;
i__29003_29275 = G__29372;
continue;
} else {
var vec__29205_29373 = cljs.core.first.call(null,seq__29000_29367__$1);
var line_29374 = cljs.core.nth.call(null,vec__29205_29373,(0),null);
var columns_29375 = cljs.core.nth.call(null,vec__29205_29373,(1),null);
var seq__29208_29376 = cljs.core.seq.call(null,columns_29375);
var chunk__29209_29377 = null;
var count__29210_29378 = (0);
var i__29211_29379 = (0);
while(true){
if((i__29211_29379 < count__29210_29378)){
var vec__29242_29380 = cljs.core._nth.call(null,chunk__29209_29377,i__29211_29379);
var column_29381 = cljs.core.nth.call(null,vec__29242_29380,(0),null);
var column_info_29382 = cljs.core.nth.call(null,vec__29242_29380,(1),null);
var seq__29245_29383 = cljs.core.seq.call(null,column_info_29382);
var chunk__29246_29384 = null;
var count__29247_29385 = (0);
var i__29248_29386 = (0);
while(true){
if((i__29248_29386 < count__29247_29385)){
var map__29253_29387 = cljs.core._nth.call(null,chunk__29246_29384,i__29248_29386);
var map__29253_29388__$1 = (((((!((map__29253_29387 == null))))?(((((map__29253_29387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29253_29387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29253_29387):map__29253_29387);
var gline_29389 = cljs.core.get.call(null,map__29253_29388__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29390 = cljs.core.get.call(null,map__29253_29388__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29391 = cljs.core.get.call(null,map__29253_29388__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29389], null),cljs.core.fnil.call(null,((function (seq__29245_29383,chunk__29246_29384,count__29247_29385,i__29248_29386,seq__29208_29376,chunk__29209_29377,count__29210_29378,i__29211_29379,seq__29000_29272,chunk__29001_29273,count__29002_29274,i__29003_29275,map__29253_29387,map__29253_29388__$1,gline_29389,gcol_29390,name_29391,vec__29242_29380,column_29381,column_info_29382,vec__29205_29373,line_29374,columns_29375,seq__29000_29367__$1,temp__5720__auto___29366,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29390], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29374,new cljs.core.Keyword(null,"col","col",-1959363084),column_29381,new cljs.core.Keyword(null,"name","name",1843675177),name_29391], null));
});})(seq__29245_29383,chunk__29246_29384,count__29247_29385,i__29248_29386,seq__29208_29376,chunk__29209_29377,count__29210_29378,i__29211_29379,seq__29000_29272,chunk__29001_29273,count__29002_29274,i__29003_29275,map__29253_29387,map__29253_29388__$1,gline_29389,gcol_29390,name_29391,vec__29242_29380,column_29381,column_info_29382,vec__29205_29373,line_29374,columns_29375,seq__29000_29367__$1,temp__5720__auto___29366,inverted))
,cljs.core.sorted_map.call(null)));


var G__29392 = seq__29245_29383;
var G__29393 = chunk__29246_29384;
var G__29394 = count__29247_29385;
var G__29395 = (i__29248_29386 + (1));
seq__29245_29383 = G__29392;
chunk__29246_29384 = G__29393;
count__29247_29385 = G__29394;
i__29248_29386 = G__29395;
continue;
} else {
var temp__5720__auto___29396__$1 = cljs.core.seq.call(null,seq__29245_29383);
if(temp__5720__auto___29396__$1){
var seq__29245_29397__$1 = temp__5720__auto___29396__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29245_29397__$1)){
var c__4550__auto___29398 = cljs.core.chunk_first.call(null,seq__29245_29397__$1);
var G__29399 = cljs.core.chunk_rest.call(null,seq__29245_29397__$1);
var G__29400 = c__4550__auto___29398;
var G__29401 = cljs.core.count.call(null,c__4550__auto___29398);
var G__29402 = (0);
seq__29245_29383 = G__29399;
chunk__29246_29384 = G__29400;
count__29247_29385 = G__29401;
i__29248_29386 = G__29402;
continue;
} else {
var map__29255_29403 = cljs.core.first.call(null,seq__29245_29397__$1);
var map__29255_29404__$1 = (((((!((map__29255_29403 == null))))?(((((map__29255_29403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29255_29403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29255_29403):map__29255_29403);
var gline_29405 = cljs.core.get.call(null,map__29255_29404__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29406 = cljs.core.get.call(null,map__29255_29404__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29407 = cljs.core.get.call(null,map__29255_29404__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29405], null),cljs.core.fnil.call(null,((function (seq__29245_29383,chunk__29246_29384,count__29247_29385,i__29248_29386,seq__29208_29376,chunk__29209_29377,count__29210_29378,i__29211_29379,seq__29000_29272,chunk__29001_29273,count__29002_29274,i__29003_29275,map__29255_29403,map__29255_29404__$1,gline_29405,gcol_29406,name_29407,seq__29245_29397__$1,temp__5720__auto___29396__$1,vec__29242_29380,column_29381,column_info_29382,vec__29205_29373,line_29374,columns_29375,seq__29000_29367__$1,temp__5720__auto___29366,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29406], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29374,new cljs.core.Keyword(null,"col","col",-1959363084),column_29381,new cljs.core.Keyword(null,"name","name",1843675177),name_29407], null));
});})(seq__29245_29383,chunk__29246_29384,count__29247_29385,i__29248_29386,seq__29208_29376,chunk__29209_29377,count__29210_29378,i__29211_29379,seq__29000_29272,chunk__29001_29273,count__29002_29274,i__29003_29275,map__29255_29403,map__29255_29404__$1,gline_29405,gcol_29406,name_29407,seq__29245_29397__$1,temp__5720__auto___29396__$1,vec__29242_29380,column_29381,column_info_29382,vec__29205_29373,line_29374,columns_29375,seq__29000_29367__$1,temp__5720__auto___29366,inverted))
,cljs.core.sorted_map.call(null)));


var G__29408 = cljs.core.next.call(null,seq__29245_29397__$1);
var G__29409 = null;
var G__29410 = (0);
var G__29411 = (0);
seq__29245_29383 = G__29408;
chunk__29246_29384 = G__29409;
count__29247_29385 = G__29410;
i__29248_29386 = G__29411;
continue;
}
} else {
}
}
break;
}


var G__29412 = seq__29208_29376;
var G__29413 = chunk__29209_29377;
var G__29414 = count__29210_29378;
var G__29415 = (i__29211_29379 + (1));
seq__29208_29376 = G__29412;
chunk__29209_29377 = G__29413;
count__29210_29378 = G__29414;
i__29211_29379 = G__29415;
continue;
} else {
var temp__5720__auto___29416__$1 = cljs.core.seq.call(null,seq__29208_29376);
if(temp__5720__auto___29416__$1){
var seq__29208_29417__$1 = temp__5720__auto___29416__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29208_29417__$1)){
var c__4550__auto___29418 = cljs.core.chunk_first.call(null,seq__29208_29417__$1);
var G__29419 = cljs.core.chunk_rest.call(null,seq__29208_29417__$1);
var G__29420 = c__4550__auto___29418;
var G__29421 = cljs.core.count.call(null,c__4550__auto___29418);
var G__29422 = (0);
seq__29208_29376 = G__29419;
chunk__29209_29377 = G__29420;
count__29210_29378 = G__29421;
i__29211_29379 = G__29422;
continue;
} else {
var vec__29257_29423 = cljs.core.first.call(null,seq__29208_29417__$1);
var column_29424 = cljs.core.nth.call(null,vec__29257_29423,(0),null);
var column_info_29425 = cljs.core.nth.call(null,vec__29257_29423,(1),null);
var seq__29260_29426 = cljs.core.seq.call(null,column_info_29425);
var chunk__29261_29427 = null;
var count__29262_29428 = (0);
var i__29263_29429 = (0);
while(true){
if((i__29263_29429 < count__29262_29428)){
var map__29268_29430 = cljs.core._nth.call(null,chunk__29261_29427,i__29263_29429);
var map__29268_29431__$1 = (((((!((map__29268_29430 == null))))?(((((map__29268_29430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29268_29430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29268_29430):map__29268_29430);
var gline_29432 = cljs.core.get.call(null,map__29268_29431__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29433 = cljs.core.get.call(null,map__29268_29431__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29434 = cljs.core.get.call(null,map__29268_29431__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29432], null),cljs.core.fnil.call(null,((function (seq__29260_29426,chunk__29261_29427,count__29262_29428,i__29263_29429,seq__29208_29376,chunk__29209_29377,count__29210_29378,i__29211_29379,seq__29000_29272,chunk__29001_29273,count__29002_29274,i__29003_29275,map__29268_29430,map__29268_29431__$1,gline_29432,gcol_29433,name_29434,vec__29257_29423,column_29424,column_info_29425,seq__29208_29417__$1,temp__5720__auto___29416__$1,vec__29205_29373,line_29374,columns_29375,seq__29000_29367__$1,temp__5720__auto___29366,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29433], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29374,new cljs.core.Keyword(null,"col","col",-1959363084),column_29424,new cljs.core.Keyword(null,"name","name",1843675177),name_29434], null));
});})(seq__29260_29426,chunk__29261_29427,count__29262_29428,i__29263_29429,seq__29208_29376,chunk__29209_29377,count__29210_29378,i__29211_29379,seq__29000_29272,chunk__29001_29273,count__29002_29274,i__29003_29275,map__29268_29430,map__29268_29431__$1,gline_29432,gcol_29433,name_29434,vec__29257_29423,column_29424,column_info_29425,seq__29208_29417__$1,temp__5720__auto___29416__$1,vec__29205_29373,line_29374,columns_29375,seq__29000_29367__$1,temp__5720__auto___29366,inverted))
,cljs.core.sorted_map.call(null)));


var G__29435 = seq__29260_29426;
var G__29436 = chunk__29261_29427;
var G__29437 = count__29262_29428;
var G__29438 = (i__29263_29429 + (1));
seq__29260_29426 = G__29435;
chunk__29261_29427 = G__29436;
count__29262_29428 = G__29437;
i__29263_29429 = G__29438;
continue;
} else {
var temp__5720__auto___29439__$2 = cljs.core.seq.call(null,seq__29260_29426);
if(temp__5720__auto___29439__$2){
var seq__29260_29440__$1 = temp__5720__auto___29439__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29260_29440__$1)){
var c__4550__auto___29441 = cljs.core.chunk_first.call(null,seq__29260_29440__$1);
var G__29442 = cljs.core.chunk_rest.call(null,seq__29260_29440__$1);
var G__29443 = c__4550__auto___29441;
var G__29444 = cljs.core.count.call(null,c__4550__auto___29441);
var G__29445 = (0);
seq__29260_29426 = G__29442;
chunk__29261_29427 = G__29443;
count__29262_29428 = G__29444;
i__29263_29429 = G__29445;
continue;
} else {
var map__29270_29446 = cljs.core.first.call(null,seq__29260_29440__$1);
var map__29270_29447__$1 = (((((!((map__29270_29446 == null))))?(((((map__29270_29446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29270_29446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29270_29446):map__29270_29446);
var gline_29448 = cljs.core.get.call(null,map__29270_29447__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29449 = cljs.core.get.call(null,map__29270_29447__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29450 = cljs.core.get.call(null,map__29270_29447__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29448], null),cljs.core.fnil.call(null,((function (seq__29260_29426,chunk__29261_29427,count__29262_29428,i__29263_29429,seq__29208_29376,chunk__29209_29377,count__29210_29378,i__29211_29379,seq__29000_29272,chunk__29001_29273,count__29002_29274,i__29003_29275,map__29270_29446,map__29270_29447__$1,gline_29448,gcol_29449,name_29450,seq__29260_29440__$1,temp__5720__auto___29439__$2,vec__29257_29423,column_29424,column_info_29425,seq__29208_29417__$1,temp__5720__auto___29416__$1,vec__29205_29373,line_29374,columns_29375,seq__29000_29367__$1,temp__5720__auto___29366,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29449], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29374,new cljs.core.Keyword(null,"col","col",-1959363084),column_29424,new cljs.core.Keyword(null,"name","name",1843675177),name_29450], null));
});})(seq__29260_29426,chunk__29261_29427,count__29262_29428,i__29263_29429,seq__29208_29376,chunk__29209_29377,count__29210_29378,i__29211_29379,seq__29000_29272,chunk__29001_29273,count__29002_29274,i__29003_29275,map__29270_29446,map__29270_29447__$1,gline_29448,gcol_29449,name_29450,seq__29260_29440__$1,temp__5720__auto___29439__$2,vec__29257_29423,column_29424,column_info_29425,seq__29208_29417__$1,temp__5720__auto___29416__$1,vec__29205_29373,line_29374,columns_29375,seq__29000_29367__$1,temp__5720__auto___29366,inverted))
,cljs.core.sorted_map.call(null)));


var G__29451 = cljs.core.next.call(null,seq__29260_29440__$1);
var G__29452 = null;
var G__29453 = (0);
var G__29454 = (0);
seq__29260_29426 = G__29451;
chunk__29261_29427 = G__29452;
count__29262_29428 = G__29453;
i__29263_29429 = G__29454;
continue;
}
} else {
}
}
break;
}


var G__29455 = cljs.core.next.call(null,seq__29208_29417__$1);
var G__29456 = null;
var G__29457 = (0);
var G__29458 = (0);
seq__29208_29376 = G__29455;
chunk__29209_29377 = G__29456;
count__29210_29378 = G__29457;
i__29211_29379 = G__29458;
continue;
}
} else {
}
}
break;
}


var G__29459 = cljs.core.next.call(null,seq__29000_29367__$1);
var G__29460 = null;
var G__29461 = (0);
var G__29462 = (0);
seq__29000_29272 = G__29459;
chunk__29001_29273 = G__29460;
count__29002_29274 = G__29461;
i__29003_29275 = G__29462;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1610383899882
