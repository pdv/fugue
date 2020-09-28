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
return cljs.core.reduce.call(null,(function (m,p__26030){
var vec__26031 = p__26030;
var i = cljs.core.nth.call(null,vec__26031,(0),null);
var v = cljs.core.nth.call(null,vec__26031,(1),null);
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
var vec__26034 = seg;
var gcol = cljs.core.nth.call(null,vec__26034,(0),null);
var source = cljs.core.nth.call(null,vec__26034,(1),null);
var line = cljs.core.nth.call(null,vec__26034,(2),null);
var col = cljs.core.nth.call(null,vec__26034,(3),null);
var name = cljs.core.nth.call(null,vec__26034,(4),null);
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
var vec__26037 = seg;
var gcol = cljs.core.nth.call(null,vec__26037,(0),null);
var source = cljs.core.nth.call(null,vec__26037,(1),null);
var line = cljs.core.nth.call(null,vec__26037,(2),null);
var col = cljs.core.nth.call(null,vec__26037,(3),null);
var name = cljs.core.nth.call(null,vec__26037,(4),null);
var vec__26040 = relseg;
var rgcol = cljs.core.nth.call(null,vec__26040,(0),null);
var rsource = cljs.core.nth.call(null,vec__26040,(1),null);
var rline = cljs.core.nth.call(null,vec__26040,(2),null);
var rcol = cljs.core.nth.call(null,vec__26040,(3),null);
var rname = cljs.core.nth.call(null,vec__26040,(4),null);
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
var map__26043 = segmap;
var map__26043__$1 = (((((!((map__26043 == null))))?(((((map__26043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26043):map__26043);
var gcol = cljs.core.get.call(null,map__26043__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__26043__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__26043__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__26043__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__26043__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__26043,map__26043__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__26043,map__26043__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__26043,map__26043__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__26043,map__26043__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__26043,map__26043__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__26043,map__26043__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__26046 = arguments.length;
switch (G__26046) {
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
var G__26056 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
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

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__26062 = segmap;
var map__26062__$1 = (((((!((map__26062 == null))))?(((((map__26062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26062):map__26062);
var gcol = cljs.core.get.call(null,map__26062__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__26062__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__26062__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__26062__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__26062__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__26062,map__26062__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__26062,map__26062__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__26061_SHARP_){
return cljs.core.conj.call(null,p1__26061_SHARP_,d__$1);
});})(map__26062,map__26062__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__26062,map__26062__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__26065 = arguments.length;
switch (G__26065) {
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
var vec__26069 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__26073 = cljs.core.next.call(null,segs__$1);
var G__26074 = nrelseg;
var G__26075 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__26073;
relseg__$1 = G__26074;
result__$1 = G__26075;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__26069,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__26069,(1),null);
var G__26076 = (gline + (1));
var G__26077 = cljs.core.next.call(null,lines__$1);
var G__26078 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__26079 = result__$1;
gline = G__26076;
lines__$1 = G__26077;
relseg = G__26078;
result = G__26079;
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
return (function (p__26080){
var vec__26081 = p__26080;
var _ = cljs.core.nth.call(null,vec__26081,(0),null);
var source = cljs.core.nth.call(null,vec__26081,(1),null);
var line = cljs.core.nth.call(null,vec__26081,(2),null);
var col = cljs.core.nth.call(null,vec__26081,(3),null);
var name = cljs.core.nth.call(null,vec__26081,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__26084){
var vec__26085 = p__26084;
var gcol = cljs.core.nth.call(null,vec__26085,(0),null);
var sidx = cljs.core.nth.call(null,vec__26085,(1),null);
var line = cljs.core.nth.call(null,vec__26085,(2),null);
var col = cljs.core.nth.call(null,vec__26085,(3),null);
var name = cljs.core.nth.call(null,vec__26085,(4),null);
var seg = vec__26085;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__26085,gcol,sidx,line,col,name,seg,relseg){
return (function (p__26088){
var vec__26089 = p__26088;
var _ = cljs.core.nth.call(null,vec__26089,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__26089,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__26089,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__26089,(3),null);
var lname = cljs.core.nth.call(null,vec__26089,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__26085,gcol,sidx,line,col,name,seg,relseg))
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
var seq__26095 = cljs.core.seq.call(null,infos);
var chunk__26096 = null;
var count__26097 = (0);
var i__26098 = (0);
while(true){
if((i__26098 < count__26097)){
var info = cljs.core._nth.call(null,chunk__26096,i__26098);
var segv_26449 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_26450 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_26451 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_26450 > (lc_26451 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__26095,chunk__26096,count__26097,i__26098,segv_26449,gline_26450,lc_26451,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_26450 - (lc_26451 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_26449], null));
});})(seq__26095,chunk__26096,count__26097,i__26098,segv_26449,gline_26450,lc_26451,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__26095,chunk__26096,count__26097,i__26098,segv_26449,gline_26450,lc_26451,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26450], null),cljs.core.conj,segv_26449);
});})(seq__26095,chunk__26096,count__26097,i__26098,segv_26449,gline_26450,lc_26451,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__26452 = seq__26095;
var G__26453 = chunk__26096;
var G__26454 = count__26097;
var G__26455 = (i__26098 + (1));
seq__26095 = G__26452;
chunk__26096 = G__26453;
count__26097 = G__26454;
i__26098 = G__26455;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26095);
if(temp__5720__auto__){
var seq__26095__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26095__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26095__$1);
var G__26456 = cljs.core.chunk_rest.call(null,seq__26095__$1);
var G__26457 = c__4550__auto__;
var G__26458 = cljs.core.count.call(null,c__4550__auto__);
var G__26459 = (0);
seq__26095 = G__26456;
chunk__26096 = G__26457;
count__26097 = G__26458;
i__26098 = G__26459;
continue;
} else {
var info = cljs.core.first.call(null,seq__26095__$1);
var segv_26460 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_26461 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_26462 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_26461 > (lc_26462 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__26095,chunk__26096,count__26097,i__26098,segv_26460,gline_26461,lc_26462,info,seq__26095__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_26461 - (lc_26462 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_26460], null));
});})(seq__26095,chunk__26096,count__26097,i__26098,segv_26460,gline_26461,lc_26462,info,seq__26095__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__26095,chunk__26096,count__26097,i__26098,segv_26460,gline_26461,lc_26462,info,seq__26095__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26461], null),cljs.core.conj,segv_26460);
});})(seq__26095,chunk__26096,count__26097,i__26098,segv_26460,gline_26461,lc_26462,info,seq__26095__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__26463 = cljs.core.next.call(null,seq__26095__$1);
var G__26464 = null;
var G__26465 = (0);
var G__26466 = (0);
seq__26095 = G__26463;
chunk__26096 = G__26464;
count__26097 = G__26465;
i__26098 = G__26466;
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
var seq__26099_26467 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__26100_26468 = null;
var count__26101_26469 = (0);
var i__26102_26470 = (0);
while(true){
if((i__26102_26470 < count__26101_26469)){
var vec__26275_26471 = cljs.core._nth.call(null,chunk__26100_26468,i__26102_26470);
var source_idx_26472 = cljs.core.nth.call(null,vec__26275_26471,(0),null);
var vec__26278_26473 = cljs.core.nth.call(null,vec__26275_26471,(1),null);
var __26474 = cljs.core.nth.call(null,vec__26278_26473,(0),null);
var lines_26475__$1 = cljs.core.nth.call(null,vec__26278_26473,(1),null);
var seq__26281_26476 = cljs.core.seq.call(null,lines_26475__$1);
var chunk__26282_26477 = null;
var count__26283_26478 = (0);
var i__26284_26479 = (0);
while(true){
if((i__26284_26479 < count__26283_26478)){
var vec__26323_26480 = cljs.core._nth.call(null,chunk__26282_26477,i__26284_26479);
var line_26481 = cljs.core.nth.call(null,vec__26323_26480,(0),null);
var cols_26482 = cljs.core.nth.call(null,vec__26323_26480,(1),null);
var seq__26326_26483 = cljs.core.seq.call(null,cols_26482);
var chunk__26327_26484 = null;
var count__26328_26485 = (0);
var i__26329_26486 = (0);
while(true){
if((i__26329_26486 < count__26328_26485)){
var vec__26336_26487 = cljs.core._nth.call(null,chunk__26327_26484,i__26329_26486);
var col_26488 = cljs.core.nth.call(null,vec__26336_26487,(0),null);
var infos_26489 = cljs.core.nth.call(null,vec__26336_26487,(1),null);
encode_cols.call(null,infos_26489,source_idx_26472,line_26481,col_26488);


var G__26490 = seq__26326_26483;
var G__26491 = chunk__26327_26484;
var G__26492 = count__26328_26485;
var G__26493 = (i__26329_26486 + (1));
seq__26326_26483 = G__26490;
chunk__26327_26484 = G__26491;
count__26328_26485 = G__26492;
i__26329_26486 = G__26493;
continue;
} else {
var temp__5720__auto___26494 = cljs.core.seq.call(null,seq__26326_26483);
if(temp__5720__auto___26494){
var seq__26326_26495__$1 = temp__5720__auto___26494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26326_26495__$1)){
var c__4550__auto___26496 = cljs.core.chunk_first.call(null,seq__26326_26495__$1);
var G__26497 = cljs.core.chunk_rest.call(null,seq__26326_26495__$1);
var G__26498 = c__4550__auto___26496;
var G__26499 = cljs.core.count.call(null,c__4550__auto___26496);
var G__26500 = (0);
seq__26326_26483 = G__26497;
chunk__26327_26484 = G__26498;
count__26328_26485 = G__26499;
i__26329_26486 = G__26500;
continue;
} else {
var vec__26339_26501 = cljs.core.first.call(null,seq__26326_26495__$1);
var col_26502 = cljs.core.nth.call(null,vec__26339_26501,(0),null);
var infos_26503 = cljs.core.nth.call(null,vec__26339_26501,(1),null);
encode_cols.call(null,infos_26503,source_idx_26472,line_26481,col_26502);


var G__26504 = cljs.core.next.call(null,seq__26326_26495__$1);
var G__26505 = null;
var G__26506 = (0);
var G__26507 = (0);
seq__26326_26483 = G__26504;
chunk__26327_26484 = G__26505;
count__26328_26485 = G__26506;
i__26329_26486 = G__26507;
continue;
}
} else {
}
}
break;
}


var G__26508 = seq__26281_26476;
var G__26509 = chunk__26282_26477;
var G__26510 = count__26283_26478;
var G__26511 = (i__26284_26479 + (1));
seq__26281_26476 = G__26508;
chunk__26282_26477 = G__26509;
count__26283_26478 = G__26510;
i__26284_26479 = G__26511;
continue;
} else {
var temp__5720__auto___26512 = cljs.core.seq.call(null,seq__26281_26476);
if(temp__5720__auto___26512){
var seq__26281_26513__$1 = temp__5720__auto___26512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26281_26513__$1)){
var c__4550__auto___26514 = cljs.core.chunk_first.call(null,seq__26281_26513__$1);
var G__26515 = cljs.core.chunk_rest.call(null,seq__26281_26513__$1);
var G__26516 = c__4550__auto___26514;
var G__26517 = cljs.core.count.call(null,c__4550__auto___26514);
var G__26518 = (0);
seq__26281_26476 = G__26515;
chunk__26282_26477 = G__26516;
count__26283_26478 = G__26517;
i__26284_26479 = G__26518;
continue;
} else {
var vec__26342_26519 = cljs.core.first.call(null,seq__26281_26513__$1);
var line_26520 = cljs.core.nth.call(null,vec__26342_26519,(0),null);
var cols_26521 = cljs.core.nth.call(null,vec__26342_26519,(1),null);
var seq__26345_26522 = cljs.core.seq.call(null,cols_26521);
var chunk__26346_26523 = null;
var count__26347_26524 = (0);
var i__26348_26525 = (0);
while(true){
if((i__26348_26525 < count__26347_26524)){
var vec__26355_26526 = cljs.core._nth.call(null,chunk__26346_26523,i__26348_26525);
var col_26527 = cljs.core.nth.call(null,vec__26355_26526,(0),null);
var infos_26528 = cljs.core.nth.call(null,vec__26355_26526,(1),null);
encode_cols.call(null,infos_26528,source_idx_26472,line_26520,col_26527);


var G__26529 = seq__26345_26522;
var G__26530 = chunk__26346_26523;
var G__26531 = count__26347_26524;
var G__26532 = (i__26348_26525 + (1));
seq__26345_26522 = G__26529;
chunk__26346_26523 = G__26530;
count__26347_26524 = G__26531;
i__26348_26525 = G__26532;
continue;
} else {
var temp__5720__auto___26533__$1 = cljs.core.seq.call(null,seq__26345_26522);
if(temp__5720__auto___26533__$1){
var seq__26345_26534__$1 = temp__5720__auto___26533__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26345_26534__$1)){
var c__4550__auto___26535 = cljs.core.chunk_first.call(null,seq__26345_26534__$1);
var G__26536 = cljs.core.chunk_rest.call(null,seq__26345_26534__$1);
var G__26537 = c__4550__auto___26535;
var G__26538 = cljs.core.count.call(null,c__4550__auto___26535);
var G__26539 = (0);
seq__26345_26522 = G__26536;
chunk__26346_26523 = G__26537;
count__26347_26524 = G__26538;
i__26348_26525 = G__26539;
continue;
} else {
var vec__26358_26540 = cljs.core.first.call(null,seq__26345_26534__$1);
var col_26541 = cljs.core.nth.call(null,vec__26358_26540,(0),null);
var infos_26542 = cljs.core.nth.call(null,vec__26358_26540,(1),null);
encode_cols.call(null,infos_26542,source_idx_26472,line_26520,col_26541);


var G__26543 = cljs.core.next.call(null,seq__26345_26534__$1);
var G__26544 = null;
var G__26545 = (0);
var G__26546 = (0);
seq__26345_26522 = G__26543;
chunk__26346_26523 = G__26544;
count__26347_26524 = G__26545;
i__26348_26525 = G__26546;
continue;
}
} else {
}
}
break;
}


var G__26547 = cljs.core.next.call(null,seq__26281_26513__$1);
var G__26548 = null;
var G__26549 = (0);
var G__26550 = (0);
seq__26281_26476 = G__26547;
chunk__26282_26477 = G__26548;
count__26283_26478 = G__26549;
i__26284_26479 = G__26550;
continue;
}
} else {
}
}
break;
}


var G__26551 = seq__26099_26467;
var G__26552 = chunk__26100_26468;
var G__26553 = count__26101_26469;
var G__26554 = (i__26102_26470 + (1));
seq__26099_26467 = G__26551;
chunk__26100_26468 = G__26552;
count__26101_26469 = G__26553;
i__26102_26470 = G__26554;
continue;
} else {
var temp__5720__auto___26555 = cljs.core.seq.call(null,seq__26099_26467);
if(temp__5720__auto___26555){
var seq__26099_26556__$1 = temp__5720__auto___26555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26099_26556__$1)){
var c__4550__auto___26557 = cljs.core.chunk_first.call(null,seq__26099_26556__$1);
var G__26558 = cljs.core.chunk_rest.call(null,seq__26099_26556__$1);
var G__26559 = c__4550__auto___26557;
var G__26560 = cljs.core.count.call(null,c__4550__auto___26557);
var G__26561 = (0);
seq__26099_26467 = G__26558;
chunk__26100_26468 = G__26559;
count__26101_26469 = G__26560;
i__26102_26470 = G__26561;
continue;
} else {
var vec__26361_26562 = cljs.core.first.call(null,seq__26099_26556__$1);
var source_idx_26563 = cljs.core.nth.call(null,vec__26361_26562,(0),null);
var vec__26364_26564 = cljs.core.nth.call(null,vec__26361_26562,(1),null);
var __26565 = cljs.core.nth.call(null,vec__26364_26564,(0),null);
var lines_26566__$1 = cljs.core.nth.call(null,vec__26364_26564,(1),null);
var seq__26367_26567 = cljs.core.seq.call(null,lines_26566__$1);
var chunk__26368_26568 = null;
var count__26369_26569 = (0);
var i__26370_26570 = (0);
while(true){
if((i__26370_26570 < count__26369_26569)){
var vec__26409_26571 = cljs.core._nth.call(null,chunk__26368_26568,i__26370_26570);
var line_26572 = cljs.core.nth.call(null,vec__26409_26571,(0),null);
var cols_26573 = cljs.core.nth.call(null,vec__26409_26571,(1),null);
var seq__26412_26574 = cljs.core.seq.call(null,cols_26573);
var chunk__26413_26575 = null;
var count__26414_26576 = (0);
var i__26415_26577 = (0);
while(true){
if((i__26415_26577 < count__26414_26576)){
var vec__26422_26578 = cljs.core._nth.call(null,chunk__26413_26575,i__26415_26577);
var col_26579 = cljs.core.nth.call(null,vec__26422_26578,(0),null);
var infos_26580 = cljs.core.nth.call(null,vec__26422_26578,(1),null);
encode_cols.call(null,infos_26580,source_idx_26563,line_26572,col_26579);


var G__26581 = seq__26412_26574;
var G__26582 = chunk__26413_26575;
var G__26583 = count__26414_26576;
var G__26584 = (i__26415_26577 + (1));
seq__26412_26574 = G__26581;
chunk__26413_26575 = G__26582;
count__26414_26576 = G__26583;
i__26415_26577 = G__26584;
continue;
} else {
var temp__5720__auto___26585__$1 = cljs.core.seq.call(null,seq__26412_26574);
if(temp__5720__auto___26585__$1){
var seq__26412_26586__$1 = temp__5720__auto___26585__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26412_26586__$1)){
var c__4550__auto___26587 = cljs.core.chunk_first.call(null,seq__26412_26586__$1);
var G__26588 = cljs.core.chunk_rest.call(null,seq__26412_26586__$1);
var G__26589 = c__4550__auto___26587;
var G__26590 = cljs.core.count.call(null,c__4550__auto___26587);
var G__26591 = (0);
seq__26412_26574 = G__26588;
chunk__26413_26575 = G__26589;
count__26414_26576 = G__26590;
i__26415_26577 = G__26591;
continue;
} else {
var vec__26425_26592 = cljs.core.first.call(null,seq__26412_26586__$1);
var col_26593 = cljs.core.nth.call(null,vec__26425_26592,(0),null);
var infos_26594 = cljs.core.nth.call(null,vec__26425_26592,(1),null);
encode_cols.call(null,infos_26594,source_idx_26563,line_26572,col_26593);


var G__26595 = cljs.core.next.call(null,seq__26412_26586__$1);
var G__26596 = null;
var G__26597 = (0);
var G__26598 = (0);
seq__26412_26574 = G__26595;
chunk__26413_26575 = G__26596;
count__26414_26576 = G__26597;
i__26415_26577 = G__26598;
continue;
}
} else {
}
}
break;
}


var G__26599 = seq__26367_26567;
var G__26600 = chunk__26368_26568;
var G__26601 = count__26369_26569;
var G__26602 = (i__26370_26570 + (1));
seq__26367_26567 = G__26599;
chunk__26368_26568 = G__26600;
count__26369_26569 = G__26601;
i__26370_26570 = G__26602;
continue;
} else {
var temp__5720__auto___26603__$1 = cljs.core.seq.call(null,seq__26367_26567);
if(temp__5720__auto___26603__$1){
var seq__26367_26604__$1 = temp__5720__auto___26603__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26367_26604__$1)){
var c__4550__auto___26605 = cljs.core.chunk_first.call(null,seq__26367_26604__$1);
var G__26606 = cljs.core.chunk_rest.call(null,seq__26367_26604__$1);
var G__26607 = c__4550__auto___26605;
var G__26608 = cljs.core.count.call(null,c__4550__auto___26605);
var G__26609 = (0);
seq__26367_26567 = G__26606;
chunk__26368_26568 = G__26607;
count__26369_26569 = G__26608;
i__26370_26570 = G__26609;
continue;
} else {
var vec__26428_26610 = cljs.core.first.call(null,seq__26367_26604__$1);
var line_26611 = cljs.core.nth.call(null,vec__26428_26610,(0),null);
var cols_26612 = cljs.core.nth.call(null,vec__26428_26610,(1),null);
var seq__26431_26613 = cljs.core.seq.call(null,cols_26612);
var chunk__26432_26614 = null;
var count__26433_26615 = (0);
var i__26434_26616 = (0);
while(true){
if((i__26434_26616 < count__26433_26615)){
var vec__26441_26617 = cljs.core._nth.call(null,chunk__26432_26614,i__26434_26616);
var col_26618 = cljs.core.nth.call(null,vec__26441_26617,(0),null);
var infos_26619 = cljs.core.nth.call(null,vec__26441_26617,(1),null);
encode_cols.call(null,infos_26619,source_idx_26563,line_26611,col_26618);


var G__26620 = seq__26431_26613;
var G__26621 = chunk__26432_26614;
var G__26622 = count__26433_26615;
var G__26623 = (i__26434_26616 + (1));
seq__26431_26613 = G__26620;
chunk__26432_26614 = G__26621;
count__26433_26615 = G__26622;
i__26434_26616 = G__26623;
continue;
} else {
var temp__5720__auto___26624__$2 = cljs.core.seq.call(null,seq__26431_26613);
if(temp__5720__auto___26624__$2){
var seq__26431_26625__$1 = temp__5720__auto___26624__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26431_26625__$1)){
var c__4550__auto___26626 = cljs.core.chunk_first.call(null,seq__26431_26625__$1);
var G__26627 = cljs.core.chunk_rest.call(null,seq__26431_26625__$1);
var G__26628 = c__4550__auto___26626;
var G__26629 = cljs.core.count.call(null,c__4550__auto___26626);
var G__26630 = (0);
seq__26431_26613 = G__26627;
chunk__26432_26614 = G__26628;
count__26433_26615 = G__26629;
i__26434_26616 = G__26630;
continue;
} else {
var vec__26444_26631 = cljs.core.first.call(null,seq__26431_26625__$1);
var col_26632 = cljs.core.nth.call(null,vec__26444_26631,(0),null);
var infos_26633 = cljs.core.nth.call(null,vec__26444_26631,(1),null);
encode_cols.call(null,infos_26633,source_idx_26563,line_26611,col_26632);


var G__26634 = cljs.core.next.call(null,seq__26431_26625__$1);
var G__26635 = null;
var G__26636 = (0);
var G__26637 = (0);
seq__26431_26613 = G__26634;
chunk__26432_26614 = G__26635;
count__26433_26615 = G__26636;
i__26434_26616 = G__26637;
continue;
}
} else {
}
}
break;
}


var G__26638 = cljs.core.next.call(null,seq__26367_26604__$1);
var G__26639 = null;
var G__26640 = (0);
var G__26641 = (0);
seq__26367_26567 = G__26638;
chunk__26368_26568 = G__26639;
count__26369_26569 = G__26640;
i__26370_26570 = G__26641;
continue;
}
} else {
}
}
break;
}


var G__26642 = cljs.core.next.call(null,seq__26099_26556__$1);
var G__26643 = null;
var G__26644 = (0);
var G__26645 = (0);
seq__26099_26467 = G__26642;
chunk__26100_26468 = G__26643;
count__26101_26469 = G__26644;
i__26102_26470 = G__26645;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__26447 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26092_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26092_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26093_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__26093_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26094_SHARP_){
return clojure.string.join.call(null,",",p1__26094_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__26448 = G__26447;
goog.object.set(G__26448,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__26448;
} else {
return G__26447;
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
var vec__26646 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__26646,(0),null);
var col_map = cljs.core.nth.call(null,vec__26646,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__26649 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__26649,(0),null);
var infos = cljs.core.nth.call(null,vec__26649,(1),null);
var G__26655 = cljs.core.next.call(null,col_map_seq);
var G__26656 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__26649,col,infos,vec__26646,line,col_map){
return (function (v,p__26652){
var map__26653 = p__26652;
var map__26653__$1 = (((((!((map__26653 == null))))?(((((map__26653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26653):map__26653);
var gline = cljs.core.get.call(null,map__26653__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__26653__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__26649,col,infos,vec__26646,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__26655;
new_cols = G__26656;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__26657 = cljs.core.next.call(null,line_map_seq);
var G__26658 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__26657;
new_lines = G__26658;
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
var seq__26659_26931 = cljs.core.seq.call(null,reverse_map);
var chunk__26660_26932 = null;
var count__26661_26933 = (0);
var i__26662_26934 = (0);
while(true){
if((i__26662_26934 < count__26661_26933)){
var vec__26797_26935 = cljs.core._nth.call(null,chunk__26660_26932,i__26662_26934);
var line_26936 = cljs.core.nth.call(null,vec__26797_26935,(0),null);
var columns_26937 = cljs.core.nth.call(null,vec__26797_26935,(1),null);
var seq__26800_26938 = cljs.core.seq.call(null,columns_26937);
var chunk__26801_26939 = null;
var count__26802_26940 = (0);
var i__26803_26941 = (0);
while(true){
if((i__26803_26941 < count__26802_26940)){
var vec__26834_26942 = cljs.core._nth.call(null,chunk__26801_26939,i__26803_26941);
var column_26943 = cljs.core.nth.call(null,vec__26834_26942,(0),null);
var column_info_26944 = cljs.core.nth.call(null,vec__26834_26942,(1),null);
var seq__26837_26945 = cljs.core.seq.call(null,column_info_26944);
var chunk__26838_26946 = null;
var count__26839_26947 = (0);
var i__26840_26948 = (0);
while(true){
if((i__26840_26948 < count__26839_26947)){
var map__26845_26949 = cljs.core._nth.call(null,chunk__26838_26946,i__26840_26948);
var map__26845_26950__$1 = (((((!((map__26845_26949 == null))))?(((((map__26845_26949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26845_26949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26845_26949):map__26845_26949);
var gline_26951 = cljs.core.get.call(null,map__26845_26950__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26952 = cljs.core.get.call(null,map__26845_26950__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26953 = cljs.core.get.call(null,map__26845_26950__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26951], null),cljs.core.fnil.call(null,((function (seq__26837_26945,chunk__26838_26946,count__26839_26947,i__26840_26948,seq__26800_26938,chunk__26801_26939,count__26802_26940,i__26803_26941,seq__26659_26931,chunk__26660_26932,count__26661_26933,i__26662_26934,map__26845_26949,map__26845_26950__$1,gline_26951,gcol_26952,name_26953,vec__26834_26942,column_26943,column_info_26944,vec__26797_26935,line_26936,columns_26937,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26952], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26936,new cljs.core.Keyword(null,"col","col",-1959363084),column_26943,new cljs.core.Keyword(null,"name","name",1843675177),name_26953], null));
});})(seq__26837_26945,chunk__26838_26946,count__26839_26947,i__26840_26948,seq__26800_26938,chunk__26801_26939,count__26802_26940,i__26803_26941,seq__26659_26931,chunk__26660_26932,count__26661_26933,i__26662_26934,map__26845_26949,map__26845_26950__$1,gline_26951,gcol_26952,name_26953,vec__26834_26942,column_26943,column_info_26944,vec__26797_26935,line_26936,columns_26937,inverted))
,cljs.core.sorted_map.call(null)));


var G__26954 = seq__26837_26945;
var G__26955 = chunk__26838_26946;
var G__26956 = count__26839_26947;
var G__26957 = (i__26840_26948 + (1));
seq__26837_26945 = G__26954;
chunk__26838_26946 = G__26955;
count__26839_26947 = G__26956;
i__26840_26948 = G__26957;
continue;
} else {
var temp__5720__auto___26958 = cljs.core.seq.call(null,seq__26837_26945);
if(temp__5720__auto___26958){
var seq__26837_26959__$1 = temp__5720__auto___26958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26837_26959__$1)){
var c__4550__auto___26960 = cljs.core.chunk_first.call(null,seq__26837_26959__$1);
var G__26961 = cljs.core.chunk_rest.call(null,seq__26837_26959__$1);
var G__26962 = c__4550__auto___26960;
var G__26963 = cljs.core.count.call(null,c__4550__auto___26960);
var G__26964 = (0);
seq__26837_26945 = G__26961;
chunk__26838_26946 = G__26962;
count__26839_26947 = G__26963;
i__26840_26948 = G__26964;
continue;
} else {
var map__26847_26965 = cljs.core.first.call(null,seq__26837_26959__$1);
var map__26847_26966__$1 = (((((!((map__26847_26965 == null))))?(((((map__26847_26965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26847_26965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26847_26965):map__26847_26965);
var gline_26967 = cljs.core.get.call(null,map__26847_26966__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26968 = cljs.core.get.call(null,map__26847_26966__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26969 = cljs.core.get.call(null,map__26847_26966__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26967], null),cljs.core.fnil.call(null,((function (seq__26837_26945,chunk__26838_26946,count__26839_26947,i__26840_26948,seq__26800_26938,chunk__26801_26939,count__26802_26940,i__26803_26941,seq__26659_26931,chunk__26660_26932,count__26661_26933,i__26662_26934,map__26847_26965,map__26847_26966__$1,gline_26967,gcol_26968,name_26969,seq__26837_26959__$1,temp__5720__auto___26958,vec__26834_26942,column_26943,column_info_26944,vec__26797_26935,line_26936,columns_26937,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26968], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26936,new cljs.core.Keyword(null,"col","col",-1959363084),column_26943,new cljs.core.Keyword(null,"name","name",1843675177),name_26969], null));
});})(seq__26837_26945,chunk__26838_26946,count__26839_26947,i__26840_26948,seq__26800_26938,chunk__26801_26939,count__26802_26940,i__26803_26941,seq__26659_26931,chunk__26660_26932,count__26661_26933,i__26662_26934,map__26847_26965,map__26847_26966__$1,gline_26967,gcol_26968,name_26969,seq__26837_26959__$1,temp__5720__auto___26958,vec__26834_26942,column_26943,column_info_26944,vec__26797_26935,line_26936,columns_26937,inverted))
,cljs.core.sorted_map.call(null)));


var G__26970 = cljs.core.next.call(null,seq__26837_26959__$1);
var G__26971 = null;
var G__26972 = (0);
var G__26973 = (0);
seq__26837_26945 = G__26970;
chunk__26838_26946 = G__26971;
count__26839_26947 = G__26972;
i__26840_26948 = G__26973;
continue;
}
} else {
}
}
break;
}


var G__26974 = seq__26800_26938;
var G__26975 = chunk__26801_26939;
var G__26976 = count__26802_26940;
var G__26977 = (i__26803_26941 + (1));
seq__26800_26938 = G__26974;
chunk__26801_26939 = G__26975;
count__26802_26940 = G__26976;
i__26803_26941 = G__26977;
continue;
} else {
var temp__5720__auto___26978 = cljs.core.seq.call(null,seq__26800_26938);
if(temp__5720__auto___26978){
var seq__26800_26979__$1 = temp__5720__auto___26978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26800_26979__$1)){
var c__4550__auto___26980 = cljs.core.chunk_first.call(null,seq__26800_26979__$1);
var G__26981 = cljs.core.chunk_rest.call(null,seq__26800_26979__$1);
var G__26982 = c__4550__auto___26980;
var G__26983 = cljs.core.count.call(null,c__4550__auto___26980);
var G__26984 = (0);
seq__26800_26938 = G__26981;
chunk__26801_26939 = G__26982;
count__26802_26940 = G__26983;
i__26803_26941 = G__26984;
continue;
} else {
var vec__26849_26985 = cljs.core.first.call(null,seq__26800_26979__$1);
var column_26986 = cljs.core.nth.call(null,vec__26849_26985,(0),null);
var column_info_26987 = cljs.core.nth.call(null,vec__26849_26985,(1),null);
var seq__26852_26988 = cljs.core.seq.call(null,column_info_26987);
var chunk__26853_26989 = null;
var count__26854_26990 = (0);
var i__26855_26991 = (0);
while(true){
if((i__26855_26991 < count__26854_26990)){
var map__26860_26992 = cljs.core._nth.call(null,chunk__26853_26989,i__26855_26991);
var map__26860_26993__$1 = (((((!((map__26860_26992 == null))))?(((((map__26860_26992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26860_26992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26860_26992):map__26860_26992);
var gline_26994 = cljs.core.get.call(null,map__26860_26993__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26995 = cljs.core.get.call(null,map__26860_26993__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26996 = cljs.core.get.call(null,map__26860_26993__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26994], null),cljs.core.fnil.call(null,((function (seq__26852_26988,chunk__26853_26989,count__26854_26990,i__26855_26991,seq__26800_26938,chunk__26801_26939,count__26802_26940,i__26803_26941,seq__26659_26931,chunk__26660_26932,count__26661_26933,i__26662_26934,map__26860_26992,map__26860_26993__$1,gline_26994,gcol_26995,name_26996,vec__26849_26985,column_26986,column_info_26987,seq__26800_26979__$1,temp__5720__auto___26978,vec__26797_26935,line_26936,columns_26937,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26995], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26936,new cljs.core.Keyword(null,"col","col",-1959363084),column_26986,new cljs.core.Keyword(null,"name","name",1843675177),name_26996], null));
});})(seq__26852_26988,chunk__26853_26989,count__26854_26990,i__26855_26991,seq__26800_26938,chunk__26801_26939,count__26802_26940,i__26803_26941,seq__26659_26931,chunk__26660_26932,count__26661_26933,i__26662_26934,map__26860_26992,map__26860_26993__$1,gline_26994,gcol_26995,name_26996,vec__26849_26985,column_26986,column_info_26987,seq__26800_26979__$1,temp__5720__auto___26978,vec__26797_26935,line_26936,columns_26937,inverted))
,cljs.core.sorted_map.call(null)));


var G__26997 = seq__26852_26988;
var G__26998 = chunk__26853_26989;
var G__26999 = count__26854_26990;
var G__27000 = (i__26855_26991 + (1));
seq__26852_26988 = G__26997;
chunk__26853_26989 = G__26998;
count__26854_26990 = G__26999;
i__26855_26991 = G__27000;
continue;
} else {
var temp__5720__auto___27001__$1 = cljs.core.seq.call(null,seq__26852_26988);
if(temp__5720__auto___27001__$1){
var seq__26852_27002__$1 = temp__5720__auto___27001__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26852_27002__$1)){
var c__4550__auto___27003 = cljs.core.chunk_first.call(null,seq__26852_27002__$1);
var G__27004 = cljs.core.chunk_rest.call(null,seq__26852_27002__$1);
var G__27005 = c__4550__auto___27003;
var G__27006 = cljs.core.count.call(null,c__4550__auto___27003);
var G__27007 = (0);
seq__26852_26988 = G__27004;
chunk__26853_26989 = G__27005;
count__26854_26990 = G__27006;
i__26855_26991 = G__27007;
continue;
} else {
var map__26862_27008 = cljs.core.first.call(null,seq__26852_27002__$1);
var map__26862_27009__$1 = (((((!((map__26862_27008 == null))))?(((((map__26862_27008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26862_27008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26862_27008):map__26862_27008);
var gline_27010 = cljs.core.get.call(null,map__26862_27009__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27011 = cljs.core.get.call(null,map__26862_27009__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27012 = cljs.core.get.call(null,map__26862_27009__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27010], null),cljs.core.fnil.call(null,((function (seq__26852_26988,chunk__26853_26989,count__26854_26990,i__26855_26991,seq__26800_26938,chunk__26801_26939,count__26802_26940,i__26803_26941,seq__26659_26931,chunk__26660_26932,count__26661_26933,i__26662_26934,map__26862_27008,map__26862_27009__$1,gline_27010,gcol_27011,name_27012,seq__26852_27002__$1,temp__5720__auto___27001__$1,vec__26849_26985,column_26986,column_info_26987,seq__26800_26979__$1,temp__5720__auto___26978,vec__26797_26935,line_26936,columns_26937,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27011], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26936,new cljs.core.Keyword(null,"col","col",-1959363084),column_26986,new cljs.core.Keyword(null,"name","name",1843675177),name_27012], null));
});})(seq__26852_26988,chunk__26853_26989,count__26854_26990,i__26855_26991,seq__26800_26938,chunk__26801_26939,count__26802_26940,i__26803_26941,seq__26659_26931,chunk__26660_26932,count__26661_26933,i__26662_26934,map__26862_27008,map__26862_27009__$1,gline_27010,gcol_27011,name_27012,seq__26852_27002__$1,temp__5720__auto___27001__$1,vec__26849_26985,column_26986,column_info_26987,seq__26800_26979__$1,temp__5720__auto___26978,vec__26797_26935,line_26936,columns_26937,inverted))
,cljs.core.sorted_map.call(null)));


var G__27013 = cljs.core.next.call(null,seq__26852_27002__$1);
var G__27014 = null;
var G__27015 = (0);
var G__27016 = (0);
seq__26852_26988 = G__27013;
chunk__26853_26989 = G__27014;
count__26854_26990 = G__27015;
i__26855_26991 = G__27016;
continue;
}
} else {
}
}
break;
}


var G__27017 = cljs.core.next.call(null,seq__26800_26979__$1);
var G__27018 = null;
var G__27019 = (0);
var G__27020 = (0);
seq__26800_26938 = G__27017;
chunk__26801_26939 = G__27018;
count__26802_26940 = G__27019;
i__26803_26941 = G__27020;
continue;
}
} else {
}
}
break;
}


var G__27021 = seq__26659_26931;
var G__27022 = chunk__26660_26932;
var G__27023 = count__26661_26933;
var G__27024 = (i__26662_26934 + (1));
seq__26659_26931 = G__27021;
chunk__26660_26932 = G__27022;
count__26661_26933 = G__27023;
i__26662_26934 = G__27024;
continue;
} else {
var temp__5720__auto___27025 = cljs.core.seq.call(null,seq__26659_26931);
if(temp__5720__auto___27025){
var seq__26659_27026__$1 = temp__5720__auto___27025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26659_27026__$1)){
var c__4550__auto___27027 = cljs.core.chunk_first.call(null,seq__26659_27026__$1);
var G__27028 = cljs.core.chunk_rest.call(null,seq__26659_27026__$1);
var G__27029 = c__4550__auto___27027;
var G__27030 = cljs.core.count.call(null,c__4550__auto___27027);
var G__27031 = (0);
seq__26659_26931 = G__27028;
chunk__26660_26932 = G__27029;
count__26661_26933 = G__27030;
i__26662_26934 = G__27031;
continue;
} else {
var vec__26864_27032 = cljs.core.first.call(null,seq__26659_27026__$1);
var line_27033 = cljs.core.nth.call(null,vec__26864_27032,(0),null);
var columns_27034 = cljs.core.nth.call(null,vec__26864_27032,(1),null);
var seq__26867_27035 = cljs.core.seq.call(null,columns_27034);
var chunk__26868_27036 = null;
var count__26869_27037 = (0);
var i__26870_27038 = (0);
while(true){
if((i__26870_27038 < count__26869_27037)){
var vec__26901_27039 = cljs.core._nth.call(null,chunk__26868_27036,i__26870_27038);
var column_27040 = cljs.core.nth.call(null,vec__26901_27039,(0),null);
var column_info_27041 = cljs.core.nth.call(null,vec__26901_27039,(1),null);
var seq__26904_27042 = cljs.core.seq.call(null,column_info_27041);
var chunk__26905_27043 = null;
var count__26906_27044 = (0);
var i__26907_27045 = (0);
while(true){
if((i__26907_27045 < count__26906_27044)){
var map__26912_27046 = cljs.core._nth.call(null,chunk__26905_27043,i__26907_27045);
var map__26912_27047__$1 = (((((!((map__26912_27046 == null))))?(((((map__26912_27046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26912_27046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26912_27046):map__26912_27046);
var gline_27048 = cljs.core.get.call(null,map__26912_27047__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27049 = cljs.core.get.call(null,map__26912_27047__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27050 = cljs.core.get.call(null,map__26912_27047__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27048], null),cljs.core.fnil.call(null,((function (seq__26904_27042,chunk__26905_27043,count__26906_27044,i__26907_27045,seq__26867_27035,chunk__26868_27036,count__26869_27037,i__26870_27038,seq__26659_26931,chunk__26660_26932,count__26661_26933,i__26662_26934,map__26912_27046,map__26912_27047__$1,gline_27048,gcol_27049,name_27050,vec__26901_27039,column_27040,column_info_27041,vec__26864_27032,line_27033,columns_27034,seq__26659_27026__$1,temp__5720__auto___27025,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27049], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27033,new cljs.core.Keyword(null,"col","col",-1959363084),column_27040,new cljs.core.Keyword(null,"name","name",1843675177),name_27050], null));
});})(seq__26904_27042,chunk__26905_27043,count__26906_27044,i__26907_27045,seq__26867_27035,chunk__26868_27036,count__26869_27037,i__26870_27038,seq__26659_26931,chunk__26660_26932,count__26661_26933,i__26662_26934,map__26912_27046,map__26912_27047__$1,gline_27048,gcol_27049,name_27050,vec__26901_27039,column_27040,column_info_27041,vec__26864_27032,line_27033,columns_27034,seq__26659_27026__$1,temp__5720__auto___27025,inverted))
,cljs.core.sorted_map.call(null)));


var G__27051 = seq__26904_27042;
var G__27052 = chunk__26905_27043;
var G__27053 = count__26906_27044;
var G__27054 = (i__26907_27045 + (1));
seq__26904_27042 = G__27051;
chunk__26905_27043 = G__27052;
count__26906_27044 = G__27053;
i__26907_27045 = G__27054;
continue;
} else {
var temp__5720__auto___27055__$1 = cljs.core.seq.call(null,seq__26904_27042);
if(temp__5720__auto___27055__$1){
var seq__26904_27056__$1 = temp__5720__auto___27055__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26904_27056__$1)){
var c__4550__auto___27057 = cljs.core.chunk_first.call(null,seq__26904_27056__$1);
var G__27058 = cljs.core.chunk_rest.call(null,seq__26904_27056__$1);
var G__27059 = c__4550__auto___27057;
var G__27060 = cljs.core.count.call(null,c__4550__auto___27057);
var G__27061 = (0);
seq__26904_27042 = G__27058;
chunk__26905_27043 = G__27059;
count__26906_27044 = G__27060;
i__26907_27045 = G__27061;
continue;
} else {
var map__26914_27062 = cljs.core.first.call(null,seq__26904_27056__$1);
var map__26914_27063__$1 = (((((!((map__26914_27062 == null))))?(((((map__26914_27062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26914_27062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26914_27062):map__26914_27062);
var gline_27064 = cljs.core.get.call(null,map__26914_27063__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27065 = cljs.core.get.call(null,map__26914_27063__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27066 = cljs.core.get.call(null,map__26914_27063__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27064], null),cljs.core.fnil.call(null,((function (seq__26904_27042,chunk__26905_27043,count__26906_27044,i__26907_27045,seq__26867_27035,chunk__26868_27036,count__26869_27037,i__26870_27038,seq__26659_26931,chunk__26660_26932,count__26661_26933,i__26662_26934,map__26914_27062,map__26914_27063__$1,gline_27064,gcol_27065,name_27066,seq__26904_27056__$1,temp__5720__auto___27055__$1,vec__26901_27039,column_27040,column_info_27041,vec__26864_27032,line_27033,columns_27034,seq__26659_27026__$1,temp__5720__auto___27025,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27065], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27033,new cljs.core.Keyword(null,"col","col",-1959363084),column_27040,new cljs.core.Keyword(null,"name","name",1843675177),name_27066], null));
});})(seq__26904_27042,chunk__26905_27043,count__26906_27044,i__26907_27045,seq__26867_27035,chunk__26868_27036,count__26869_27037,i__26870_27038,seq__26659_26931,chunk__26660_26932,count__26661_26933,i__26662_26934,map__26914_27062,map__26914_27063__$1,gline_27064,gcol_27065,name_27066,seq__26904_27056__$1,temp__5720__auto___27055__$1,vec__26901_27039,column_27040,column_info_27041,vec__26864_27032,line_27033,columns_27034,seq__26659_27026__$1,temp__5720__auto___27025,inverted))
,cljs.core.sorted_map.call(null)));


var G__27067 = cljs.core.next.call(null,seq__26904_27056__$1);
var G__27068 = null;
var G__27069 = (0);
var G__27070 = (0);
seq__26904_27042 = G__27067;
chunk__26905_27043 = G__27068;
count__26906_27044 = G__27069;
i__26907_27045 = G__27070;
continue;
}
} else {
}
}
break;
}


var G__27071 = seq__26867_27035;
var G__27072 = chunk__26868_27036;
var G__27073 = count__26869_27037;
var G__27074 = (i__26870_27038 + (1));
seq__26867_27035 = G__27071;
chunk__26868_27036 = G__27072;
count__26869_27037 = G__27073;
i__26870_27038 = G__27074;
continue;
} else {
var temp__5720__auto___27075__$1 = cljs.core.seq.call(null,seq__26867_27035);
if(temp__5720__auto___27075__$1){
var seq__26867_27076__$1 = temp__5720__auto___27075__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26867_27076__$1)){
var c__4550__auto___27077 = cljs.core.chunk_first.call(null,seq__26867_27076__$1);
var G__27078 = cljs.core.chunk_rest.call(null,seq__26867_27076__$1);
var G__27079 = c__4550__auto___27077;
var G__27080 = cljs.core.count.call(null,c__4550__auto___27077);
var G__27081 = (0);
seq__26867_27035 = G__27078;
chunk__26868_27036 = G__27079;
count__26869_27037 = G__27080;
i__26870_27038 = G__27081;
continue;
} else {
var vec__26916_27082 = cljs.core.first.call(null,seq__26867_27076__$1);
var column_27083 = cljs.core.nth.call(null,vec__26916_27082,(0),null);
var column_info_27084 = cljs.core.nth.call(null,vec__26916_27082,(1),null);
var seq__26919_27085 = cljs.core.seq.call(null,column_info_27084);
var chunk__26920_27086 = null;
var count__26921_27087 = (0);
var i__26922_27088 = (0);
while(true){
if((i__26922_27088 < count__26921_27087)){
var map__26927_27089 = cljs.core._nth.call(null,chunk__26920_27086,i__26922_27088);
var map__26927_27090__$1 = (((((!((map__26927_27089 == null))))?(((((map__26927_27089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26927_27089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26927_27089):map__26927_27089);
var gline_27091 = cljs.core.get.call(null,map__26927_27090__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27092 = cljs.core.get.call(null,map__26927_27090__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27093 = cljs.core.get.call(null,map__26927_27090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27091], null),cljs.core.fnil.call(null,((function (seq__26919_27085,chunk__26920_27086,count__26921_27087,i__26922_27088,seq__26867_27035,chunk__26868_27036,count__26869_27037,i__26870_27038,seq__26659_26931,chunk__26660_26932,count__26661_26933,i__26662_26934,map__26927_27089,map__26927_27090__$1,gline_27091,gcol_27092,name_27093,vec__26916_27082,column_27083,column_info_27084,seq__26867_27076__$1,temp__5720__auto___27075__$1,vec__26864_27032,line_27033,columns_27034,seq__26659_27026__$1,temp__5720__auto___27025,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27092], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27033,new cljs.core.Keyword(null,"col","col",-1959363084),column_27083,new cljs.core.Keyword(null,"name","name",1843675177),name_27093], null));
});})(seq__26919_27085,chunk__26920_27086,count__26921_27087,i__26922_27088,seq__26867_27035,chunk__26868_27036,count__26869_27037,i__26870_27038,seq__26659_26931,chunk__26660_26932,count__26661_26933,i__26662_26934,map__26927_27089,map__26927_27090__$1,gline_27091,gcol_27092,name_27093,vec__26916_27082,column_27083,column_info_27084,seq__26867_27076__$1,temp__5720__auto___27075__$1,vec__26864_27032,line_27033,columns_27034,seq__26659_27026__$1,temp__5720__auto___27025,inverted))
,cljs.core.sorted_map.call(null)));


var G__27094 = seq__26919_27085;
var G__27095 = chunk__26920_27086;
var G__27096 = count__26921_27087;
var G__27097 = (i__26922_27088 + (1));
seq__26919_27085 = G__27094;
chunk__26920_27086 = G__27095;
count__26921_27087 = G__27096;
i__26922_27088 = G__27097;
continue;
} else {
var temp__5720__auto___27098__$2 = cljs.core.seq.call(null,seq__26919_27085);
if(temp__5720__auto___27098__$2){
var seq__26919_27099__$1 = temp__5720__auto___27098__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26919_27099__$1)){
var c__4550__auto___27100 = cljs.core.chunk_first.call(null,seq__26919_27099__$1);
var G__27101 = cljs.core.chunk_rest.call(null,seq__26919_27099__$1);
var G__27102 = c__4550__auto___27100;
var G__27103 = cljs.core.count.call(null,c__4550__auto___27100);
var G__27104 = (0);
seq__26919_27085 = G__27101;
chunk__26920_27086 = G__27102;
count__26921_27087 = G__27103;
i__26922_27088 = G__27104;
continue;
} else {
var map__26929_27105 = cljs.core.first.call(null,seq__26919_27099__$1);
var map__26929_27106__$1 = (((((!((map__26929_27105 == null))))?(((((map__26929_27105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26929_27105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26929_27105):map__26929_27105);
var gline_27107 = cljs.core.get.call(null,map__26929_27106__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27108 = cljs.core.get.call(null,map__26929_27106__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27109 = cljs.core.get.call(null,map__26929_27106__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27107], null),cljs.core.fnil.call(null,((function (seq__26919_27085,chunk__26920_27086,count__26921_27087,i__26922_27088,seq__26867_27035,chunk__26868_27036,count__26869_27037,i__26870_27038,seq__26659_26931,chunk__26660_26932,count__26661_26933,i__26662_26934,map__26929_27105,map__26929_27106__$1,gline_27107,gcol_27108,name_27109,seq__26919_27099__$1,temp__5720__auto___27098__$2,vec__26916_27082,column_27083,column_info_27084,seq__26867_27076__$1,temp__5720__auto___27075__$1,vec__26864_27032,line_27033,columns_27034,seq__26659_27026__$1,temp__5720__auto___27025,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27108], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27033,new cljs.core.Keyword(null,"col","col",-1959363084),column_27083,new cljs.core.Keyword(null,"name","name",1843675177),name_27109], null));
});})(seq__26919_27085,chunk__26920_27086,count__26921_27087,i__26922_27088,seq__26867_27035,chunk__26868_27036,count__26869_27037,i__26870_27038,seq__26659_26931,chunk__26660_26932,count__26661_26933,i__26662_26934,map__26929_27105,map__26929_27106__$1,gline_27107,gcol_27108,name_27109,seq__26919_27099__$1,temp__5720__auto___27098__$2,vec__26916_27082,column_27083,column_info_27084,seq__26867_27076__$1,temp__5720__auto___27075__$1,vec__26864_27032,line_27033,columns_27034,seq__26659_27026__$1,temp__5720__auto___27025,inverted))
,cljs.core.sorted_map.call(null)));


var G__27110 = cljs.core.next.call(null,seq__26919_27099__$1);
var G__27111 = null;
var G__27112 = (0);
var G__27113 = (0);
seq__26919_27085 = G__27110;
chunk__26920_27086 = G__27111;
count__26921_27087 = G__27112;
i__26922_27088 = G__27113;
continue;
}
} else {
}
}
break;
}


var G__27114 = cljs.core.next.call(null,seq__26867_27076__$1);
var G__27115 = null;
var G__27116 = (0);
var G__27117 = (0);
seq__26867_27035 = G__27114;
chunk__26868_27036 = G__27115;
count__26869_27037 = G__27116;
i__26870_27038 = G__27117;
continue;
}
} else {
}
}
break;
}


var G__27118 = cljs.core.next.call(null,seq__26659_27026__$1);
var G__27119 = null;
var G__27120 = (0);
var G__27121 = (0);
seq__26659_26931 = G__27118;
chunk__26660_26932 = G__27119;
count__26661_26933 = G__27120;
i__26662_26934 = G__27121;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1601307455786
