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
return cljs.core.reduce.call(null,(function (m,p__26011){
var vec__26012 = p__26011;
var i = cljs.core.nth.call(null,vec__26012,(0),null);
var v = cljs.core.nth.call(null,vec__26012,(1),null);
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
var vec__26015 = seg;
var gcol = cljs.core.nth.call(null,vec__26015,(0),null);
var source = cljs.core.nth.call(null,vec__26015,(1),null);
var line = cljs.core.nth.call(null,vec__26015,(2),null);
var col = cljs.core.nth.call(null,vec__26015,(3),null);
var name = cljs.core.nth.call(null,vec__26015,(4),null);
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
var vec__26018 = seg;
var gcol = cljs.core.nth.call(null,vec__26018,(0),null);
var source = cljs.core.nth.call(null,vec__26018,(1),null);
var line = cljs.core.nth.call(null,vec__26018,(2),null);
var col = cljs.core.nth.call(null,vec__26018,(3),null);
var name = cljs.core.nth.call(null,vec__26018,(4),null);
var vec__26021 = relseg;
var rgcol = cljs.core.nth.call(null,vec__26021,(0),null);
var rsource = cljs.core.nth.call(null,vec__26021,(1),null);
var rline = cljs.core.nth.call(null,vec__26021,(2),null);
var rcol = cljs.core.nth.call(null,vec__26021,(3),null);
var rname = cljs.core.nth.call(null,vec__26021,(4),null);
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
var map__26024 = segmap;
var map__26024__$1 = (((((!((map__26024 == null))))?(((((map__26024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26024):map__26024);
var gcol = cljs.core.get.call(null,map__26024__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__26024__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__26024__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__26024__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__26024__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__26024,map__26024__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__26024,map__26024__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__26024,map__26024__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__26024,map__26024__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__26024,map__26024__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__26024,map__26024__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__26027 = arguments.length;
switch (G__26027) {
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
var vec__26031 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__26035 = cljs.core.next.call(null,segs__$1);
var G__26036 = nrelseg;
var G__26037 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__26035;
relseg__$1 = G__26036;
result__$1 = G__26037;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__26031,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__26031,(1),null);
var G__26038 = (gline + (1));
var G__26039 = cljs.core.next.call(null,lines__$1);
var G__26040 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__26041 = result__$1;
gline = G__26038;
lines__$1 = G__26039;
relseg = G__26040;
result = G__26041;
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
var map__26043 = segmap;
var map__26043__$1 = (((((!((map__26043 == null))))?(((((map__26043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26043):map__26043);
var gcol = cljs.core.get.call(null,map__26043__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__26043__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__26043__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__26043__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__26043__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__26043,map__26043__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__26043,map__26043__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__26042_SHARP_){
return cljs.core.conj.call(null,p1__26042_SHARP_,d__$1);
});})(map__26043,map__26043__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__26043,map__26043__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__26046 = arguments.length;
switch (G__26046) {
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
var vec__26050 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__26054 = cljs.core.next.call(null,segs__$1);
var G__26055 = nrelseg;
var G__26056 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__26054;
relseg__$1 = G__26055;
result__$1 = G__26056;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__26050,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__26050,(1),null);
var G__26057 = (gline + (1));
var G__26058 = cljs.core.next.call(null,lines__$1);
var G__26059 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__26060 = result__$1;
gline = G__26057;
lines__$1 = G__26058;
relseg = G__26059;
result = G__26060;
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
return (function (p__26061){
var vec__26062 = p__26061;
var _ = cljs.core.nth.call(null,vec__26062,(0),null);
var source = cljs.core.nth.call(null,vec__26062,(1),null);
var line = cljs.core.nth.call(null,vec__26062,(2),null);
var col = cljs.core.nth.call(null,vec__26062,(3),null);
var name = cljs.core.nth.call(null,vec__26062,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__26065){
var vec__26066 = p__26065;
var gcol = cljs.core.nth.call(null,vec__26066,(0),null);
var sidx = cljs.core.nth.call(null,vec__26066,(1),null);
var line = cljs.core.nth.call(null,vec__26066,(2),null);
var col = cljs.core.nth.call(null,vec__26066,(3),null);
var name = cljs.core.nth.call(null,vec__26066,(4),null);
var seg = vec__26066;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__26066,gcol,sidx,line,col,name,seg,relseg){
return (function (p__26069){
var vec__26070 = p__26069;
var _ = cljs.core.nth.call(null,vec__26070,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__26070,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__26070,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__26070,(3),null);
var lname = cljs.core.nth.call(null,vec__26070,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__26066,gcol,sidx,line,col,name,seg,relseg))
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
var seq__26076 = cljs.core.seq.call(null,infos);
var chunk__26077 = null;
var count__26078 = (0);
var i__26079 = (0);
while(true){
if((i__26079 < count__26078)){
var info = cljs.core._nth.call(null,chunk__26077,i__26079);
var segv_26430 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_26431 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_26432 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_26431 > (lc_26432 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__26076,chunk__26077,count__26078,i__26079,segv_26430,gline_26431,lc_26432,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_26431 - (lc_26432 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_26430], null));
});})(seq__26076,chunk__26077,count__26078,i__26079,segv_26430,gline_26431,lc_26432,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__26076,chunk__26077,count__26078,i__26079,segv_26430,gline_26431,lc_26432,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26431], null),cljs.core.conj,segv_26430);
});})(seq__26076,chunk__26077,count__26078,i__26079,segv_26430,gline_26431,lc_26432,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__26433 = seq__26076;
var G__26434 = chunk__26077;
var G__26435 = count__26078;
var G__26436 = (i__26079 + (1));
seq__26076 = G__26433;
chunk__26077 = G__26434;
count__26078 = G__26435;
i__26079 = G__26436;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26076);
if(temp__5720__auto__){
var seq__26076__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26076__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26076__$1);
var G__26437 = cljs.core.chunk_rest.call(null,seq__26076__$1);
var G__26438 = c__4550__auto__;
var G__26439 = cljs.core.count.call(null,c__4550__auto__);
var G__26440 = (0);
seq__26076 = G__26437;
chunk__26077 = G__26438;
count__26078 = G__26439;
i__26079 = G__26440;
continue;
} else {
var info = cljs.core.first.call(null,seq__26076__$1);
var segv_26441 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_26442 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_26443 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_26442 > (lc_26443 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__26076,chunk__26077,count__26078,i__26079,segv_26441,gline_26442,lc_26443,info,seq__26076__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_26442 - (lc_26443 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_26441], null));
});})(seq__26076,chunk__26077,count__26078,i__26079,segv_26441,gline_26442,lc_26443,info,seq__26076__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__26076,chunk__26077,count__26078,i__26079,segv_26441,gline_26442,lc_26443,info,seq__26076__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26442], null),cljs.core.conj,segv_26441);
});})(seq__26076,chunk__26077,count__26078,i__26079,segv_26441,gline_26442,lc_26443,info,seq__26076__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__26444 = cljs.core.next.call(null,seq__26076__$1);
var G__26445 = null;
var G__26446 = (0);
var G__26447 = (0);
seq__26076 = G__26444;
chunk__26077 = G__26445;
count__26078 = G__26446;
i__26079 = G__26447;
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
var seq__26080_26448 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__26081_26449 = null;
var count__26082_26450 = (0);
var i__26083_26451 = (0);
while(true){
if((i__26083_26451 < count__26082_26450)){
var vec__26256_26452 = cljs.core._nth.call(null,chunk__26081_26449,i__26083_26451);
var source_idx_26453 = cljs.core.nth.call(null,vec__26256_26452,(0),null);
var vec__26259_26454 = cljs.core.nth.call(null,vec__26256_26452,(1),null);
var __26455 = cljs.core.nth.call(null,vec__26259_26454,(0),null);
var lines_26456__$1 = cljs.core.nth.call(null,vec__26259_26454,(1),null);
var seq__26262_26457 = cljs.core.seq.call(null,lines_26456__$1);
var chunk__26263_26458 = null;
var count__26264_26459 = (0);
var i__26265_26460 = (0);
while(true){
if((i__26265_26460 < count__26264_26459)){
var vec__26304_26461 = cljs.core._nth.call(null,chunk__26263_26458,i__26265_26460);
var line_26462 = cljs.core.nth.call(null,vec__26304_26461,(0),null);
var cols_26463 = cljs.core.nth.call(null,vec__26304_26461,(1),null);
var seq__26307_26464 = cljs.core.seq.call(null,cols_26463);
var chunk__26308_26465 = null;
var count__26309_26466 = (0);
var i__26310_26467 = (0);
while(true){
if((i__26310_26467 < count__26309_26466)){
var vec__26317_26468 = cljs.core._nth.call(null,chunk__26308_26465,i__26310_26467);
var col_26469 = cljs.core.nth.call(null,vec__26317_26468,(0),null);
var infos_26470 = cljs.core.nth.call(null,vec__26317_26468,(1),null);
encode_cols.call(null,infos_26470,source_idx_26453,line_26462,col_26469);


var G__26471 = seq__26307_26464;
var G__26472 = chunk__26308_26465;
var G__26473 = count__26309_26466;
var G__26474 = (i__26310_26467 + (1));
seq__26307_26464 = G__26471;
chunk__26308_26465 = G__26472;
count__26309_26466 = G__26473;
i__26310_26467 = G__26474;
continue;
} else {
var temp__5720__auto___26475 = cljs.core.seq.call(null,seq__26307_26464);
if(temp__5720__auto___26475){
var seq__26307_26476__$1 = temp__5720__auto___26475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26307_26476__$1)){
var c__4550__auto___26477 = cljs.core.chunk_first.call(null,seq__26307_26476__$1);
var G__26478 = cljs.core.chunk_rest.call(null,seq__26307_26476__$1);
var G__26479 = c__4550__auto___26477;
var G__26480 = cljs.core.count.call(null,c__4550__auto___26477);
var G__26481 = (0);
seq__26307_26464 = G__26478;
chunk__26308_26465 = G__26479;
count__26309_26466 = G__26480;
i__26310_26467 = G__26481;
continue;
} else {
var vec__26320_26482 = cljs.core.first.call(null,seq__26307_26476__$1);
var col_26483 = cljs.core.nth.call(null,vec__26320_26482,(0),null);
var infos_26484 = cljs.core.nth.call(null,vec__26320_26482,(1),null);
encode_cols.call(null,infos_26484,source_idx_26453,line_26462,col_26483);


var G__26485 = cljs.core.next.call(null,seq__26307_26476__$1);
var G__26486 = null;
var G__26487 = (0);
var G__26488 = (0);
seq__26307_26464 = G__26485;
chunk__26308_26465 = G__26486;
count__26309_26466 = G__26487;
i__26310_26467 = G__26488;
continue;
}
} else {
}
}
break;
}


var G__26489 = seq__26262_26457;
var G__26490 = chunk__26263_26458;
var G__26491 = count__26264_26459;
var G__26492 = (i__26265_26460 + (1));
seq__26262_26457 = G__26489;
chunk__26263_26458 = G__26490;
count__26264_26459 = G__26491;
i__26265_26460 = G__26492;
continue;
} else {
var temp__5720__auto___26493 = cljs.core.seq.call(null,seq__26262_26457);
if(temp__5720__auto___26493){
var seq__26262_26494__$1 = temp__5720__auto___26493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26262_26494__$1)){
var c__4550__auto___26495 = cljs.core.chunk_first.call(null,seq__26262_26494__$1);
var G__26496 = cljs.core.chunk_rest.call(null,seq__26262_26494__$1);
var G__26497 = c__4550__auto___26495;
var G__26498 = cljs.core.count.call(null,c__4550__auto___26495);
var G__26499 = (0);
seq__26262_26457 = G__26496;
chunk__26263_26458 = G__26497;
count__26264_26459 = G__26498;
i__26265_26460 = G__26499;
continue;
} else {
var vec__26323_26500 = cljs.core.first.call(null,seq__26262_26494__$1);
var line_26501 = cljs.core.nth.call(null,vec__26323_26500,(0),null);
var cols_26502 = cljs.core.nth.call(null,vec__26323_26500,(1),null);
var seq__26326_26503 = cljs.core.seq.call(null,cols_26502);
var chunk__26327_26504 = null;
var count__26328_26505 = (0);
var i__26329_26506 = (0);
while(true){
if((i__26329_26506 < count__26328_26505)){
var vec__26336_26507 = cljs.core._nth.call(null,chunk__26327_26504,i__26329_26506);
var col_26508 = cljs.core.nth.call(null,vec__26336_26507,(0),null);
var infos_26509 = cljs.core.nth.call(null,vec__26336_26507,(1),null);
encode_cols.call(null,infos_26509,source_idx_26453,line_26501,col_26508);


var G__26510 = seq__26326_26503;
var G__26511 = chunk__26327_26504;
var G__26512 = count__26328_26505;
var G__26513 = (i__26329_26506 + (1));
seq__26326_26503 = G__26510;
chunk__26327_26504 = G__26511;
count__26328_26505 = G__26512;
i__26329_26506 = G__26513;
continue;
} else {
var temp__5720__auto___26514__$1 = cljs.core.seq.call(null,seq__26326_26503);
if(temp__5720__auto___26514__$1){
var seq__26326_26515__$1 = temp__5720__auto___26514__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26326_26515__$1)){
var c__4550__auto___26516 = cljs.core.chunk_first.call(null,seq__26326_26515__$1);
var G__26517 = cljs.core.chunk_rest.call(null,seq__26326_26515__$1);
var G__26518 = c__4550__auto___26516;
var G__26519 = cljs.core.count.call(null,c__4550__auto___26516);
var G__26520 = (0);
seq__26326_26503 = G__26517;
chunk__26327_26504 = G__26518;
count__26328_26505 = G__26519;
i__26329_26506 = G__26520;
continue;
} else {
var vec__26339_26521 = cljs.core.first.call(null,seq__26326_26515__$1);
var col_26522 = cljs.core.nth.call(null,vec__26339_26521,(0),null);
var infos_26523 = cljs.core.nth.call(null,vec__26339_26521,(1),null);
encode_cols.call(null,infos_26523,source_idx_26453,line_26501,col_26522);


var G__26524 = cljs.core.next.call(null,seq__26326_26515__$1);
var G__26525 = null;
var G__26526 = (0);
var G__26527 = (0);
seq__26326_26503 = G__26524;
chunk__26327_26504 = G__26525;
count__26328_26505 = G__26526;
i__26329_26506 = G__26527;
continue;
}
} else {
}
}
break;
}


var G__26528 = cljs.core.next.call(null,seq__26262_26494__$1);
var G__26529 = null;
var G__26530 = (0);
var G__26531 = (0);
seq__26262_26457 = G__26528;
chunk__26263_26458 = G__26529;
count__26264_26459 = G__26530;
i__26265_26460 = G__26531;
continue;
}
} else {
}
}
break;
}


var G__26532 = seq__26080_26448;
var G__26533 = chunk__26081_26449;
var G__26534 = count__26082_26450;
var G__26535 = (i__26083_26451 + (1));
seq__26080_26448 = G__26532;
chunk__26081_26449 = G__26533;
count__26082_26450 = G__26534;
i__26083_26451 = G__26535;
continue;
} else {
var temp__5720__auto___26536 = cljs.core.seq.call(null,seq__26080_26448);
if(temp__5720__auto___26536){
var seq__26080_26537__$1 = temp__5720__auto___26536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26080_26537__$1)){
var c__4550__auto___26538 = cljs.core.chunk_first.call(null,seq__26080_26537__$1);
var G__26539 = cljs.core.chunk_rest.call(null,seq__26080_26537__$1);
var G__26540 = c__4550__auto___26538;
var G__26541 = cljs.core.count.call(null,c__4550__auto___26538);
var G__26542 = (0);
seq__26080_26448 = G__26539;
chunk__26081_26449 = G__26540;
count__26082_26450 = G__26541;
i__26083_26451 = G__26542;
continue;
} else {
var vec__26342_26543 = cljs.core.first.call(null,seq__26080_26537__$1);
var source_idx_26544 = cljs.core.nth.call(null,vec__26342_26543,(0),null);
var vec__26345_26545 = cljs.core.nth.call(null,vec__26342_26543,(1),null);
var __26546 = cljs.core.nth.call(null,vec__26345_26545,(0),null);
var lines_26547__$1 = cljs.core.nth.call(null,vec__26345_26545,(1),null);
var seq__26348_26548 = cljs.core.seq.call(null,lines_26547__$1);
var chunk__26349_26549 = null;
var count__26350_26550 = (0);
var i__26351_26551 = (0);
while(true){
if((i__26351_26551 < count__26350_26550)){
var vec__26390_26552 = cljs.core._nth.call(null,chunk__26349_26549,i__26351_26551);
var line_26553 = cljs.core.nth.call(null,vec__26390_26552,(0),null);
var cols_26554 = cljs.core.nth.call(null,vec__26390_26552,(1),null);
var seq__26393_26555 = cljs.core.seq.call(null,cols_26554);
var chunk__26394_26556 = null;
var count__26395_26557 = (0);
var i__26396_26558 = (0);
while(true){
if((i__26396_26558 < count__26395_26557)){
var vec__26403_26559 = cljs.core._nth.call(null,chunk__26394_26556,i__26396_26558);
var col_26560 = cljs.core.nth.call(null,vec__26403_26559,(0),null);
var infos_26561 = cljs.core.nth.call(null,vec__26403_26559,(1),null);
encode_cols.call(null,infos_26561,source_idx_26544,line_26553,col_26560);


var G__26562 = seq__26393_26555;
var G__26563 = chunk__26394_26556;
var G__26564 = count__26395_26557;
var G__26565 = (i__26396_26558 + (1));
seq__26393_26555 = G__26562;
chunk__26394_26556 = G__26563;
count__26395_26557 = G__26564;
i__26396_26558 = G__26565;
continue;
} else {
var temp__5720__auto___26566__$1 = cljs.core.seq.call(null,seq__26393_26555);
if(temp__5720__auto___26566__$1){
var seq__26393_26567__$1 = temp__5720__auto___26566__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26393_26567__$1)){
var c__4550__auto___26568 = cljs.core.chunk_first.call(null,seq__26393_26567__$1);
var G__26569 = cljs.core.chunk_rest.call(null,seq__26393_26567__$1);
var G__26570 = c__4550__auto___26568;
var G__26571 = cljs.core.count.call(null,c__4550__auto___26568);
var G__26572 = (0);
seq__26393_26555 = G__26569;
chunk__26394_26556 = G__26570;
count__26395_26557 = G__26571;
i__26396_26558 = G__26572;
continue;
} else {
var vec__26406_26573 = cljs.core.first.call(null,seq__26393_26567__$1);
var col_26574 = cljs.core.nth.call(null,vec__26406_26573,(0),null);
var infos_26575 = cljs.core.nth.call(null,vec__26406_26573,(1),null);
encode_cols.call(null,infos_26575,source_idx_26544,line_26553,col_26574);


var G__26576 = cljs.core.next.call(null,seq__26393_26567__$1);
var G__26577 = null;
var G__26578 = (0);
var G__26579 = (0);
seq__26393_26555 = G__26576;
chunk__26394_26556 = G__26577;
count__26395_26557 = G__26578;
i__26396_26558 = G__26579;
continue;
}
} else {
}
}
break;
}


var G__26580 = seq__26348_26548;
var G__26581 = chunk__26349_26549;
var G__26582 = count__26350_26550;
var G__26583 = (i__26351_26551 + (1));
seq__26348_26548 = G__26580;
chunk__26349_26549 = G__26581;
count__26350_26550 = G__26582;
i__26351_26551 = G__26583;
continue;
} else {
var temp__5720__auto___26584__$1 = cljs.core.seq.call(null,seq__26348_26548);
if(temp__5720__auto___26584__$1){
var seq__26348_26585__$1 = temp__5720__auto___26584__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26348_26585__$1)){
var c__4550__auto___26586 = cljs.core.chunk_first.call(null,seq__26348_26585__$1);
var G__26587 = cljs.core.chunk_rest.call(null,seq__26348_26585__$1);
var G__26588 = c__4550__auto___26586;
var G__26589 = cljs.core.count.call(null,c__4550__auto___26586);
var G__26590 = (0);
seq__26348_26548 = G__26587;
chunk__26349_26549 = G__26588;
count__26350_26550 = G__26589;
i__26351_26551 = G__26590;
continue;
} else {
var vec__26409_26591 = cljs.core.first.call(null,seq__26348_26585__$1);
var line_26592 = cljs.core.nth.call(null,vec__26409_26591,(0),null);
var cols_26593 = cljs.core.nth.call(null,vec__26409_26591,(1),null);
var seq__26412_26594 = cljs.core.seq.call(null,cols_26593);
var chunk__26413_26595 = null;
var count__26414_26596 = (0);
var i__26415_26597 = (0);
while(true){
if((i__26415_26597 < count__26414_26596)){
var vec__26422_26598 = cljs.core._nth.call(null,chunk__26413_26595,i__26415_26597);
var col_26599 = cljs.core.nth.call(null,vec__26422_26598,(0),null);
var infos_26600 = cljs.core.nth.call(null,vec__26422_26598,(1),null);
encode_cols.call(null,infos_26600,source_idx_26544,line_26592,col_26599);


var G__26601 = seq__26412_26594;
var G__26602 = chunk__26413_26595;
var G__26603 = count__26414_26596;
var G__26604 = (i__26415_26597 + (1));
seq__26412_26594 = G__26601;
chunk__26413_26595 = G__26602;
count__26414_26596 = G__26603;
i__26415_26597 = G__26604;
continue;
} else {
var temp__5720__auto___26605__$2 = cljs.core.seq.call(null,seq__26412_26594);
if(temp__5720__auto___26605__$2){
var seq__26412_26606__$1 = temp__5720__auto___26605__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26412_26606__$1)){
var c__4550__auto___26607 = cljs.core.chunk_first.call(null,seq__26412_26606__$1);
var G__26608 = cljs.core.chunk_rest.call(null,seq__26412_26606__$1);
var G__26609 = c__4550__auto___26607;
var G__26610 = cljs.core.count.call(null,c__4550__auto___26607);
var G__26611 = (0);
seq__26412_26594 = G__26608;
chunk__26413_26595 = G__26609;
count__26414_26596 = G__26610;
i__26415_26597 = G__26611;
continue;
} else {
var vec__26425_26612 = cljs.core.first.call(null,seq__26412_26606__$1);
var col_26613 = cljs.core.nth.call(null,vec__26425_26612,(0),null);
var infos_26614 = cljs.core.nth.call(null,vec__26425_26612,(1),null);
encode_cols.call(null,infos_26614,source_idx_26544,line_26592,col_26613);


var G__26615 = cljs.core.next.call(null,seq__26412_26606__$1);
var G__26616 = null;
var G__26617 = (0);
var G__26618 = (0);
seq__26412_26594 = G__26615;
chunk__26413_26595 = G__26616;
count__26414_26596 = G__26617;
i__26415_26597 = G__26618;
continue;
}
} else {
}
}
break;
}


var G__26619 = cljs.core.next.call(null,seq__26348_26585__$1);
var G__26620 = null;
var G__26621 = (0);
var G__26622 = (0);
seq__26348_26548 = G__26619;
chunk__26349_26549 = G__26620;
count__26350_26550 = G__26621;
i__26351_26551 = G__26622;
continue;
}
} else {
}
}
break;
}


var G__26623 = cljs.core.next.call(null,seq__26080_26537__$1);
var G__26624 = null;
var G__26625 = (0);
var G__26626 = (0);
seq__26080_26448 = G__26623;
chunk__26081_26449 = G__26624;
count__26082_26450 = G__26625;
i__26083_26451 = G__26626;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__26428 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26073_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26073_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26074_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__26074_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26075_SHARP_){
return clojure.string.join.call(null,",",p1__26075_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__26429 = G__26428;
goog.object.set(G__26429,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__26429;
} else {
return G__26428;
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
var vec__26627 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__26627,(0),null);
var col_map = cljs.core.nth.call(null,vec__26627,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__26630 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__26630,(0),null);
var infos = cljs.core.nth.call(null,vec__26630,(1),null);
var G__26636 = cljs.core.next.call(null,col_map_seq);
var G__26637 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__26630,col,infos,vec__26627,line,col_map){
return (function (v,p__26633){
var map__26634 = p__26633;
var map__26634__$1 = (((((!((map__26634 == null))))?(((((map__26634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26634):map__26634);
var gline = cljs.core.get.call(null,map__26634__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__26634__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__26630,col,infos,vec__26627,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__26636;
new_cols = G__26637;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__26638 = cljs.core.next.call(null,line_map_seq);
var G__26639 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__26638;
new_lines = G__26639;
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
var seq__26640_26912 = cljs.core.seq.call(null,reverse_map);
var chunk__26641_26913 = null;
var count__26642_26914 = (0);
var i__26643_26915 = (0);
while(true){
if((i__26643_26915 < count__26642_26914)){
var vec__26778_26916 = cljs.core._nth.call(null,chunk__26641_26913,i__26643_26915);
var line_26917 = cljs.core.nth.call(null,vec__26778_26916,(0),null);
var columns_26918 = cljs.core.nth.call(null,vec__26778_26916,(1),null);
var seq__26781_26919 = cljs.core.seq.call(null,columns_26918);
var chunk__26782_26920 = null;
var count__26783_26921 = (0);
var i__26784_26922 = (0);
while(true){
if((i__26784_26922 < count__26783_26921)){
var vec__26815_26923 = cljs.core._nth.call(null,chunk__26782_26920,i__26784_26922);
var column_26924 = cljs.core.nth.call(null,vec__26815_26923,(0),null);
var column_info_26925 = cljs.core.nth.call(null,vec__26815_26923,(1),null);
var seq__26818_26926 = cljs.core.seq.call(null,column_info_26925);
var chunk__26819_26927 = null;
var count__26820_26928 = (0);
var i__26821_26929 = (0);
while(true){
if((i__26821_26929 < count__26820_26928)){
var map__26826_26930 = cljs.core._nth.call(null,chunk__26819_26927,i__26821_26929);
var map__26826_26931__$1 = (((((!((map__26826_26930 == null))))?(((((map__26826_26930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26826_26930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26826_26930):map__26826_26930);
var gline_26932 = cljs.core.get.call(null,map__26826_26931__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26933 = cljs.core.get.call(null,map__26826_26931__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26934 = cljs.core.get.call(null,map__26826_26931__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26932], null),cljs.core.fnil.call(null,((function (seq__26818_26926,chunk__26819_26927,count__26820_26928,i__26821_26929,seq__26781_26919,chunk__26782_26920,count__26783_26921,i__26784_26922,seq__26640_26912,chunk__26641_26913,count__26642_26914,i__26643_26915,map__26826_26930,map__26826_26931__$1,gline_26932,gcol_26933,name_26934,vec__26815_26923,column_26924,column_info_26925,vec__26778_26916,line_26917,columns_26918,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26933], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26917,new cljs.core.Keyword(null,"col","col",-1959363084),column_26924,new cljs.core.Keyword(null,"name","name",1843675177),name_26934], null));
});})(seq__26818_26926,chunk__26819_26927,count__26820_26928,i__26821_26929,seq__26781_26919,chunk__26782_26920,count__26783_26921,i__26784_26922,seq__26640_26912,chunk__26641_26913,count__26642_26914,i__26643_26915,map__26826_26930,map__26826_26931__$1,gline_26932,gcol_26933,name_26934,vec__26815_26923,column_26924,column_info_26925,vec__26778_26916,line_26917,columns_26918,inverted))
,cljs.core.sorted_map.call(null)));


var G__26935 = seq__26818_26926;
var G__26936 = chunk__26819_26927;
var G__26937 = count__26820_26928;
var G__26938 = (i__26821_26929 + (1));
seq__26818_26926 = G__26935;
chunk__26819_26927 = G__26936;
count__26820_26928 = G__26937;
i__26821_26929 = G__26938;
continue;
} else {
var temp__5720__auto___26939 = cljs.core.seq.call(null,seq__26818_26926);
if(temp__5720__auto___26939){
var seq__26818_26940__$1 = temp__5720__auto___26939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26818_26940__$1)){
var c__4550__auto___26941 = cljs.core.chunk_first.call(null,seq__26818_26940__$1);
var G__26942 = cljs.core.chunk_rest.call(null,seq__26818_26940__$1);
var G__26943 = c__4550__auto___26941;
var G__26944 = cljs.core.count.call(null,c__4550__auto___26941);
var G__26945 = (0);
seq__26818_26926 = G__26942;
chunk__26819_26927 = G__26943;
count__26820_26928 = G__26944;
i__26821_26929 = G__26945;
continue;
} else {
var map__26828_26946 = cljs.core.first.call(null,seq__26818_26940__$1);
var map__26828_26947__$1 = (((((!((map__26828_26946 == null))))?(((((map__26828_26946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26828_26946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26828_26946):map__26828_26946);
var gline_26948 = cljs.core.get.call(null,map__26828_26947__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26949 = cljs.core.get.call(null,map__26828_26947__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26950 = cljs.core.get.call(null,map__26828_26947__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26948], null),cljs.core.fnil.call(null,((function (seq__26818_26926,chunk__26819_26927,count__26820_26928,i__26821_26929,seq__26781_26919,chunk__26782_26920,count__26783_26921,i__26784_26922,seq__26640_26912,chunk__26641_26913,count__26642_26914,i__26643_26915,map__26828_26946,map__26828_26947__$1,gline_26948,gcol_26949,name_26950,seq__26818_26940__$1,temp__5720__auto___26939,vec__26815_26923,column_26924,column_info_26925,vec__26778_26916,line_26917,columns_26918,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26949], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26917,new cljs.core.Keyword(null,"col","col",-1959363084),column_26924,new cljs.core.Keyword(null,"name","name",1843675177),name_26950], null));
});})(seq__26818_26926,chunk__26819_26927,count__26820_26928,i__26821_26929,seq__26781_26919,chunk__26782_26920,count__26783_26921,i__26784_26922,seq__26640_26912,chunk__26641_26913,count__26642_26914,i__26643_26915,map__26828_26946,map__26828_26947__$1,gline_26948,gcol_26949,name_26950,seq__26818_26940__$1,temp__5720__auto___26939,vec__26815_26923,column_26924,column_info_26925,vec__26778_26916,line_26917,columns_26918,inverted))
,cljs.core.sorted_map.call(null)));


var G__26951 = cljs.core.next.call(null,seq__26818_26940__$1);
var G__26952 = null;
var G__26953 = (0);
var G__26954 = (0);
seq__26818_26926 = G__26951;
chunk__26819_26927 = G__26952;
count__26820_26928 = G__26953;
i__26821_26929 = G__26954;
continue;
}
} else {
}
}
break;
}


var G__26955 = seq__26781_26919;
var G__26956 = chunk__26782_26920;
var G__26957 = count__26783_26921;
var G__26958 = (i__26784_26922 + (1));
seq__26781_26919 = G__26955;
chunk__26782_26920 = G__26956;
count__26783_26921 = G__26957;
i__26784_26922 = G__26958;
continue;
} else {
var temp__5720__auto___26959 = cljs.core.seq.call(null,seq__26781_26919);
if(temp__5720__auto___26959){
var seq__26781_26960__$1 = temp__5720__auto___26959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26781_26960__$1)){
var c__4550__auto___26961 = cljs.core.chunk_first.call(null,seq__26781_26960__$1);
var G__26962 = cljs.core.chunk_rest.call(null,seq__26781_26960__$1);
var G__26963 = c__4550__auto___26961;
var G__26964 = cljs.core.count.call(null,c__4550__auto___26961);
var G__26965 = (0);
seq__26781_26919 = G__26962;
chunk__26782_26920 = G__26963;
count__26783_26921 = G__26964;
i__26784_26922 = G__26965;
continue;
} else {
var vec__26830_26966 = cljs.core.first.call(null,seq__26781_26960__$1);
var column_26967 = cljs.core.nth.call(null,vec__26830_26966,(0),null);
var column_info_26968 = cljs.core.nth.call(null,vec__26830_26966,(1),null);
var seq__26833_26969 = cljs.core.seq.call(null,column_info_26968);
var chunk__26834_26970 = null;
var count__26835_26971 = (0);
var i__26836_26972 = (0);
while(true){
if((i__26836_26972 < count__26835_26971)){
var map__26841_26973 = cljs.core._nth.call(null,chunk__26834_26970,i__26836_26972);
var map__26841_26974__$1 = (((((!((map__26841_26973 == null))))?(((((map__26841_26973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26841_26973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26841_26973):map__26841_26973);
var gline_26975 = cljs.core.get.call(null,map__26841_26974__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26976 = cljs.core.get.call(null,map__26841_26974__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26977 = cljs.core.get.call(null,map__26841_26974__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26975], null),cljs.core.fnil.call(null,((function (seq__26833_26969,chunk__26834_26970,count__26835_26971,i__26836_26972,seq__26781_26919,chunk__26782_26920,count__26783_26921,i__26784_26922,seq__26640_26912,chunk__26641_26913,count__26642_26914,i__26643_26915,map__26841_26973,map__26841_26974__$1,gline_26975,gcol_26976,name_26977,vec__26830_26966,column_26967,column_info_26968,seq__26781_26960__$1,temp__5720__auto___26959,vec__26778_26916,line_26917,columns_26918,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26976], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26917,new cljs.core.Keyword(null,"col","col",-1959363084),column_26967,new cljs.core.Keyword(null,"name","name",1843675177),name_26977], null));
});})(seq__26833_26969,chunk__26834_26970,count__26835_26971,i__26836_26972,seq__26781_26919,chunk__26782_26920,count__26783_26921,i__26784_26922,seq__26640_26912,chunk__26641_26913,count__26642_26914,i__26643_26915,map__26841_26973,map__26841_26974__$1,gline_26975,gcol_26976,name_26977,vec__26830_26966,column_26967,column_info_26968,seq__26781_26960__$1,temp__5720__auto___26959,vec__26778_26916,line_26917,columns_26918,inverted))
,cljs.core.sorted_map.call(null)));


var G__26978 = seq__26833_26969;
var G__26979 = chunk__26834_26970;
var G__26980 = count__26835_26971;
var G__26981 = (i__26836_26972 + (1));
seq__26833_26969 = G__26978;
chunk__26834_26970 = G__26979;
count__26835_26971 = G__26980;
i__26836_26972 = G__26981;
continue;
} else {
var temp__5720__auto___26982__$1 = cljs.core.seq.call(null,seq__26833_26969);
if(temp__5720__auto___26982__$1){
var seq__26833_26983__$1 = temp__5720__auto___26982__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26833_26983__$1)){
var c__4550__auto___26984 = cljs.core.chunk_first.call(null,seq__26833_26983__$1);
var G__26985 = cljs.core.chunk_rest.call(null,seq__26833_26983__$1);
var G__26986 = c__4550__auto___26984;
var G__26987 = cljs.core.count.call(null,c__4550__auto___26984);
var G__26988 = (0);
seq__26833_26969 = G__26985;
chunk__26834_26970 = G__26986;
count__26835_26971 = G__26987;
i__26836_26972 = G__26988;
continue;
} else {
var map__26843_26989 = cljs.core.first.call(null,seq__26833_26983__$1);
var map__26843_26990__$1 = (((((!((map__26843_26989 == null))))?(((((map__26843_26989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26843_26989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26843_26989):map__26843_26989);
var gline_26991 = cljs.core.get.call(null,map__26843_26990__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26992 = cljs.core.get.call(null,map__26843_26990__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26993 = cljs.core.get.call(null,map__26843_26990__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26991], null),cljs.core.fnil.call(null,((function (seq__26833_26969,chunk__26834_26970,count__26835_26971,i__26836_26972,seq__26781_26919,chunk__26782_26920,count__26783_26921,i__26784_26922,seq__26640_26912,chunk__26641_26913,count__26642_26914,i__26643_26915,map__26843_26989,map__26843_26990__$1,gline_26991,gcol_26992,name_26993,seq__26833_26983__$1,temp__5720__auto___26982__$1,vec__26830_26966,column_26967,column_info_26968,seq__26781_26960__$1,temp__5720__auto___26959,vec__26778_26916,line_26917,columns_26918,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26992], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26917,new cljs.core.Keyword(null,"col","col",-1959363084),column_26967,new cljs.core.Keyword(null,"name","name",1843675177),name_26993], null));
});})(seq__26833_26969,chunk__26834_26970,count__26835_26971,i__26836_26972,seq__26781_26919,chunk__26782_26920,count__26783_26921,i__26784_26922,seq__26640_26912,chunk__26641_26913,count__26642_26914,i__26643_26915,map__26843_26989,map__26843_26990__$1,gline_26991,gcol_26992,name_26993,seq__26833_26983__$1,temp__5720__auto___26982__$1,vec__26830_26966,column_26967,column_info_26968,seq__26781_26960__$1,temp__5720__auto___26959,vec__26778_26916,line_26917,columns_26918,inverted))
,cljs.core.sorted_map.call(null)));


var G__26994 = cljs.core.next.call(null,seq__26833_26983__$1);
var G__26995 = null;
var G__26996 = (0);
var G__26997 = (0);
seq__26833_26969 = G__26994;
chunk__26834_26970 = G__26995;
count__26835_26971 = G__26996;
i__26836_26972 = G__26997;
continue;
}
} else {
}
}
break;
}


var G__26998 = cljs.core.next.call(null,seq__26781_26960__$1);
var G__26999 = null;
var G__27000 = (0);
var G__27001 = (0);
seq__26781_26919 = G__26998;
chunk__26782_26920 = G__26999;
count__26783_26921 = G__27000;
i__26784_26922 = G__27001;
continue;
}
} else {
}
}
break;
}


var G__27002 = seq__26640_26912;
var G__27003 = chunk__26641_26913;
var G__27004 = count__26642_26914;
var G__27005 = (i__26643_26915 + (1));
seq__26640_26912 = G__27002;
chunk__26641_26913 = G__27003;
count__26642_26914 = G__27004;
i__26643_26915 = G__27005;
continue;
} else {
var temp__5720__auto___27006 = cljs.core.seq.call(null,seq__26640_26912);
if(temp__5720__auto___27006){
var seq__26640_27007__$1 = temp__5720__auto___27006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26640_27007__$1)){
var c__4550__auto___27008 = cljs.core.chunk_first.call(null,seq__26640_27007__$1);
var G__27009 = cljs.core.chunk_rest.call(null,seq__26640_27007__$1);
var G__27010 = c__4550__auto___27008;
var G__27011 = cljs.core.count.call(null,c__4550__auto___27008);
var G__27012 = (0);
seq__26640_26912 = G__27009;
chunk__26641_26913 = G__27010;
count__26642_26914 = G__27011;
i__26643_26915 = G__27012;
continue;
} else {
var vec__26845_27013 = cljs.core.first.call(null,seq__26640_27007__$1);
var line_27014 = cljs.core.nth.call(null,vec__26845_27013,(0),null);
var columns_27015 = cljs.core.nth.call(null,vec__26845_27013,(1),null);
var seq__26848_27016 = cljs.core.seq.call(null,columns_27015);
var chunk__26849_27017 = null;
var count__26850_27018 = (0);
var i__26851_27019 = (0);
while(true){
if((i__26851_27019 < count__26850_27018)){
var vec__26882_27020 = cljs.core._nth.call(null,chunk__26849_27017,i__26851_27019);
var column_27021 = cljs.core.nth.call(null,vec__26882_27020,(0),null);
var column_info_27022 = cljs.core.nth.call(null,vec__26882_27020,(1),null);
var seq__26885_27023 = cljs.core.seq.call(null,column_info_27022);
var chunk__26886_27024 = null;
var count__26887_27025 = (0);
var i__26888_27026 = (0);
while(true){
if((i__26888_27026 < count__26887_27025)){
var map__26893_27027 = cljs.core._nth.call(null,chunk__26886_27024,i__26888_27026);
var map__26893_27028__$1 = (((((!((map__26893_27027 == null))))?(((((map__26893_27027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26893_27027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26893_27027):map__26893_27027);
var gline_27029 = cljs.core.get.call(null,map__26893_27028__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27030 = cljs.core.get.call(null,map__26893_27028__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27031 = cljs.core.get.call(null,map__26893_27028__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27029], null),cljs.core.fnil.call(null,((function (seq__26885_27023,chunk__26886_27024,count__26887_27025,i__26888_27026,seq__26848_27016,chunk__26849_27017,count__26850_27018,i__26851_27019,seq__26640_26912,chunk__26641_26913,count__26642_26914,i__26643_26915,map__26893_27027,map__26893_27028__$1,gline_27029,gcol_27030,name_27031,vec__26882_27020,column_27021,column_info_27022,vec__26845_27013,line_27014,columns_27015,seq__26640_27007__$1,temp__5720__auto___27006,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27030], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27014,new cljs.core.Keyword(null,"col","col",-1959363084),column_27021,new cljs.core.Keyword(null,"name","name",1843675177),name_27031], null));
});})(seq__26885_27023,chunk__26886_27024,count__26887_27025,i__26888_27026,seq__26848_27016,chunk__26849_27017,count__26850_27018,i__26851_27019,seq__26640_26912,chunk__26641_26913,count__26642_26914,i__26643_26915,map__26893_27027,map__26893_27028__$1,gline_27029,gcol_27030,name_27031,vec__26882_27020,column_27021,column_info_27022,vec__26845_27013,line_27014,columns_27015,seq__26640_27007__$1,temp__5720__auto___27006,inverted))
,cljs.core.sorted_map.call(null)));


var G__27032 = seq__26885_27023;
var G__27033 = chunk__26886_27024;
var G__27034 = count__26887_27025;
var G__27035 = (i__26888_27026 + (1));
seq__26885_27023 = G__27032;
chunk__26886_27024 = G__27033;
count__26887_27025 = G__27034;
i__26888_27026 = G__27035;
continue;
} else {
var temp__5720__auto___27036__$1 = cljs.core.seq.call(null,seq__26885_27023);
if(temp__5720__auto___27036__$1){
var seq__26885_27037__$1 = temp__5720__auto___27036__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26885_27037__$1)){
var c__4550__auto___27038 = cljs.core.chunk_first.call(null,seq__26885_27037__$1);
var G__27039 = cljs.core.chunk_rest.call(null,seq__26885_27037__$1);
var G__27040 = c__4550__auto___27038;
var G__27041 = cljs.core.count.call(null,c__4550__auto___27038);
var G__27042 = (0);
seq__26885_27023 = G__27039;
chunk__26886_27024 = G__27040;
count__26887_27025 = G__27041;
i__26888_27026 = G__27042;
continue;
} else {
var map__26895_27043 = cljs.core.first.call(null,seq__26885_27037__$1);
var map__26895_27044__$1 = (((((!((map__26895_27043 == null))))?(((((map__26895_27043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26895_27043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26895_27043):map__26895_27043);
var gline_27045 = cljs.core.get.call(null,map__26895_27044__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27046 = cljs.core.get.call(null,map__26895_27044__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27047 = cljs.core.get.call(null,map__26895_27044__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27045], null),cljs.core.fnil.call(null,((function (seq__26885_27023,chunk__26886_27024,count__26887_27025,i__26888_27026,seq__26848_27016,chunk__26849_27017,count__26850_27018,i__26851_27019,seq__26640_26912,chunk__26641_26913,count__26642_26914,i__26643_26915,map__26895_27043,map__26895_27044__$1,gline_27045,gcol_27046,name_27047,seq__26885_27037__$1,temp__5720__auto___27036__$1,vec__26882_27020,column_27021,column_info_27022,vec__26845_27013,line_27014,columns_27015,seq__26640_27007__$1,temp__5720__auto___27006,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27046], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27014,new cljs.core.Keyword(null,"col","col",-1959363084),column_27021,new cljs.core.Keyword(null,"name","name",1843675177),name_27047], null));
});})(seq__26885_27023,chunk__26886_27024,count__26887_27025,i__26888_27026,seq__26848_27016,chunk__26849_27017,count__26850_27018,i__26851_27019,seq__26640_26912,chunk__26641_26913,count__26642_26914,i__26643_26915,map__26895_27043,map__26895_27044__$1,gline_27045,gcol_27046,name_27047,seq__26885_27037__$1,temp__5720__auto___27036__$1,vec__26882_27020,column_27021,column_info_27022,vec__26845_27013,line_27014,columns_27015,seq__26640_27007__$1,temp__5720__auto___27006,inverted))
,cljs.core.sorted_map.call(null)));


var G__27048 = cljs.core.next.call(null,seq__26885_27037__$1);
var G__27049 = null;
var G__27050 = (0);
var G__27051 = (0);
seq__26885_27023 = G__27048;
chunk__26886_27024 = G__27049;
count__26887_27025 = G__27050;
i__26888_27026 = G__27051;
continue;
}
} else {
}
}
break;
}


var G__27052 = seq__26848_27016;
var G__27053 = chunk__26849_27017;
var G__27054 = count__26850_27018;
var G__27055 = (i__26851_27019 + (1));
seq__26848_27016 = G__27052;
chunk__26849_27017 = G__27053;
count__26850_27018 = G__27054;
i__26851_27019 = G__27055;
continue;
} else {
var temp__5720__auto___27056__$1 = cljs.core.seq.call(null,seq__26848_27016);
if(temp__5720__auto___27056__$1){
var seq__26848_27057__$1 = temp__5720__auto___27056__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26848_27057__$1)){
var c__4550__auto___27058 = cljs.core.chunk_first.call(null,seq__26848_27057__$1);
var G__27059 = cljs.core.chunk_rest.call(null,seq__26848_27057__$1);
var G__27060 = c__4550__auto___27058;
var G__27061 = cljs.core.count.call(null,c__4550__auto___27058);
var G__27062 = (0);
seq__26848_27016 = G__27059;
chunk__26849_27017 = G__27060;
count__26850_27018 = G__27061;
i__26851_27019 = G__27062;
continue;
} else {
var vec__26897_27063 = cljs.core.first.call(null,seq__26848_27057__$1);
var column_27064 = cljs.core.nth.call(null,vec__26897_27063,(0),null);
var column_info_27065 = cljs.core.nth.call(null,vec__26897_27063,(1),null);
var seq__26900_27066 = cljs.core.seq.call(null,column_info_27065);
var chunk__26901_27067 = null;
var count__26902_27068 = (0);
var i__26903_27069 = (0);
while(true){
if((i__26903_27069 < count__26902_27068)){
var map__26908_27070 = cljs.core._nth.call(null,chunk__26901_27067,i__26903_27069);
var map__26908_27071__$1 = (((((!((map__26908_27070 == null))))?(((((map__26908_27070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26908_27070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26908_27070):map__26908_27070);
var gline_27072 = cljs.core.get.call(null,map__26908_27071__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27073 = cljs.core.get.call(null,map__26908_27071__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27074 = cljs.core.get.call(null,map__26908_27071__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27072], null),cljs.core.fnil.call(null,((function (seq__26900_27066,chunk__26901_27067,count__26902_27068,i__26903_27069,seq__26848_27016,chunk__26849_27017,count__26850_27018,i__26851_27019,seq__26640_26912,chunk__26641_26913,count__26642_26914,i__26643_26915,map__26908_27070,map__26908_27071__$1,gline_27072,gcol_27073,name_27074,vec__26897_27063,column_27064,column_info_27065,seq__26848_27057__$1,temp__5720__auto___27056__$1,vec__26845_27013,line_27014,columns_27015,seq__26640_27007__$1,temp__5720__auto___27006,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27073], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27014,new cljs.core.Keyword(null,"col","col",-1959363084),column_27064,new cljs.core.Keyword(null,"name","name",1843675177),name_27074], null));
});})(seq__26900_27066,chunk__26901_27067,count__26902_27068,i__26903_27069,seq__26848_27016,chunk__26849_27017,count__26850_27018,i__26851_27019,seq__26640_26912,chunk__26641_26913,count__26642_26914,i__26643_26915,map__26908_27070,map__26908_27071__$1,gline_27072,gcol_27073,name_27074,vec__26897_27063,column_27064,column_info_27065,seq__26848_27057__$1,temp__5720__auto___27056__$1,vec__26845_27013,line_27014,columns_27015,seq__26640_27007__$1,temp__5720__auto___27006,inverted))
,cljs.core.sorted_map.call(null)));


var G__27075 = seq__26900_27066;
var G__27076 = chunk__26901_27067;
var G__27077 = count__26902_27068;
var G__27078 = (i__26903_27069 + (1));
seq__26900_27066 = G__27075;
chunk__26901_27067 = G__27076;
count__26902_27068 = G__27077;
i__26903_27069 = G__27078;
continue;
} else {
var temp__5720__auto___27079__$2 = cljs.core.seq.call(null,seq__26900_27066);
if(temp__5720__auto___27079__$2){
var seq__26900_27080__$1 = temp__5720__auto___27079__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26900_27080__$1)){
var c__4550__auto___27081 = cljs.core.chunk_first.call(null,seq__26900_27080__$1);
var G__27082 = cljs.core.chunk_rest.call(null,seq__26900_27080__$1);
var G__27083 = c__4550__auto___27081;
var G__27084 = cljs.core.count.call(null,c__4550__auto___27081);
var G__27085 = (0);
seq__26900_27066 = G__27082;
chunk__26901_27067 = G__27083;
count__26902_27068 = G__27084;
i__26903_27069 = G__27085;
continue;
} else {
var map__26910_27086 = cljs.core.first.call(null,seq__26900_27080__$1);
var map__26910_27087__$1 = (((((!((map__26910_27086 == null))))?(((((map__26910_27086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26910_27086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26910_27086):map__26910_27086);
var gline_27088 = cljs.core.get.call(null,map__26910_27087__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27089 = cljs.core.get.call(null,map__26910_27087__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27090 = cljs.core.get.call(null,map__26910_27087__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27088], null),cljs.core.fnil.call(null,((function (seq__26900_27066,chunk__26901_27067,count__26902_27068,i__26903_27069,seq__26848_27016,chunk__26849_27017,count__26850_27018,i__26851_27019,seq__26640_26912,chunk__26641_26913,count__26642_26914,i__26643_26915,map__26910_27086,map__26910_27087__$1,gline_27088,gcol_27089,name_27090,seq__26900_27080__$1,temp__5720__auto___27079__$2,vec__26897_27063,column_27064,column_info_27065,seq__26848_27057__$1,temp__5720__auto___27056__$1,vec__26845_27013,line_27014,columns_27015,seq__26640_27007__$1,temp__5720__auto___27006,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27089], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27014,new cljs.core.Keyword(null,"col","col",-1959363084),column_27064,new cljs.core.Keyword(null,"name","name",1843675177),name_27090], null));
});})(seq__26900_27066,chunk__26901_27067,count__26902_27068,i__26903_27069,seq__26848_27016,chunk__26849_27017,count__26850_27018,i__26851_27019,seq__26640_26912,chunk__26641_26913,count__26642_26914,i__26643_26915,map__26910_27086,map__26910_27087__$1,gline_27088,gcol_27089,name_27090,seq__26900_27080__$1,temp__5720__auto___27079__$2,vec__26897_27063,column_27064,column_info_27065,seq__26848_27057__$1,temp__5720__auto___27056__$1,vec__26845_27013,line_27014,columns_27015,seq__26640_27007__$1,temp__5720__auto___27006,inverted))
,cljs.core.sorted_map.call(null)));


var G__27091 = cljs.core.next.call(null,seq__26900_27080__$1);
var G__27092 = null;
var G__27093 = (0);
var G__27094 = (0);
seq__26900_27066 = G__27091;
chunk__26901_27067 = G__27092;
count__26902_27068 = G__27093;
i__26903_27069 = G__27094;
continue;
}
} else {
}
}
break;
}


var G__27095 = cljs.core.next.call(null,seq__26848_27057__$1);
var G__27096 = null;
var G__27097 = (0);
var G__27098 = (0);
seq__26848_27016 = G__27095;
chunk__26849_27017 = G__27096;
count__26850_27018 = G__27097;
i__26851_27019 = G__27098;
continue;
}
} else {
}
}
break;
}


var G__27099 = cljs.core.next.call(null,seq__26640_27007__$1);
var G__27100 = null;
var G__27101 = (0);
var G__27102 = (0);
seq__26640_26912 = G__27099;
chunk__26641_26913 = G__27100;
count__26642_26914 = G__27101;
i__26643_26915 = G__27102;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1601267799432
