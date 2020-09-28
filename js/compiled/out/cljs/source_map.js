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
return cljs.core.reduce.call(null,(function (m,p__26020){
var vec__26021 = p__26020;
var i = cljs.core.nth.call(null,vec__26021,(0),null);
var v = cljs.core.nth.call(null,vec__26021,(1),null);
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
var vec__26024 = seg;
var gcol = cljs.core.nth.call(null,vec__26024,(0),null);
var source = cljs.core.nth.call(null,vec__26024,(1),null);
var line = cljs.core.nth.call(null,vec__26024,(2),null);
var col = cljs.core.nth.call(null,vec__26024,(3),null);
var name = cljs.core.nth.call(null,vec__26024,(4),null);
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
var vec__26027 = seg;
var gcol = cljs.core.nth.call(null,vec__26027,(0),null);
var source = cljs.core.nth.call(null,vec__26027,(1),null);
var line = cljs.core.nth.call(null,vec__26027,(2),null);
var col = cljs.core.nth.call(null,vec__26027,(3),null);
var name = cljs.core.nth.call(null,vec__26027,(4),null);
var vec__26030 = relseg;
var rgcol = cljs.core.nth.call(null,vec__26030,(0),null);
var rsource = cljs.core.nth.call(null,vec__26030,(1),null);
var rline = cljs.core.nth.call(null,vec__26030,(2),null);
var rcol = cljs.core.nth.call(null,vec__26030,(3),null);
var rname = cljs.core.nth.call(null,vec__26030,(4),null);
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
var map__26033 = segmap;
var map__26033__$1 = (((((!((map__26033 == null))))?(((((map__26033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26033):map__26033);
var gcol = cljs.core.get.call(null,map__26033__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__26033__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__26033__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__26033__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__26033__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__26033,map__26033__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__26033,map__26033__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__26033,map__26033__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__26033,map__26033__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__26033,map__26033__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__26033,map__26033__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__26036 = arguments.length;
switch (G__26036) {
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
var vec__26040 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__26044 = cljs.core.next.call(null,segs__$1);
var G__26045 = nrelseg;
var G__26046 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__26044;
relseg__$1 = G__26045;
result__$1 = G__26046;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__26040,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__26040,(1),null);
var G__26047 = (gline + (1));
var G__26048 = cljs.core.next.call(null,lines__$1);
var G__26049 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__26050 = result__$1;
gline = G__26047;
lines__$1 = G__26048;
relseg = G__26049;
result = G__26050;
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
var map__26052 = segmap;
var map__26052__$1 = (((((!((map__26052 == null))))?(((((map__26052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26052):map__26052);
var gcol = cljs.core.get.call(null,map__26052__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__26052__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__26052__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__26052__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__26052__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__26052,map__26052__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__26052,map__26052__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__26051_SHARP_){
return cljs.core.conj.call(null,p1__26051_SHARP_,d__$1);
});})(map__26052,map__26052__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__26052,map__26052__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__26055 = arguments.length;
switch (G__26055) {
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
var vec__26059 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__26063 = cljs.core.next.call(null,segs__$1);
var G__26064 = nrelseg;
var G__26065 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__26063;
relseg__$1 = G__26064;
result__$1 = G__26065;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__26059,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__26059,(1),null);
var G__26066 = (gline + (1));
var G__26067 = cljs.core.next.call(null,lines__$1);
var G__26068 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__26069 = result__$1;
gline = G__26066;
lines__$1 = G__26067;
relseg = G__26068;
result = G__26069;
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
return (function (p__26070){
var vec__26071 = p__26070;
var _ = cljs.core.nth.call(null,vec__26071,(0),null);
var source = cljs.core.nth.call(null,vec__26071,(1),null);
var line = cljs.core.nth.call(null,vec__26071,(2),null);
var col = cljs.core.nth.call(null,vec__26071,(3),null);
var name = cljs.core.nth.call(null,vec__26071,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__26074){
var vec__26075 = p__26074;
var gcol = cljs.core.nth.call(null,vec__26075,(0),null);
var sidx = cljs.core.nth.call(null,vec__26075,(1),null);
var line = cljs.core.nth.call(null,vec__26075,(2),null);
var col = cljs.core.nth.call(null,vec__26075,(3),null);
var name = cljs.core.nth.call(null,vec__26075,(4),null);
var seg = vec__26075;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__26075,gcol,sidx,line,col,name,seg,relseg){
return (function (p__26078){
var vec__26079 = p__26078;
var _ = cljs.core.nth.call(null,vec__26079,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__26079,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__26079,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__26079,(3),null);
var lname = cljs.core.nth.call(null,vec__26079,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__26075,gcol,sidx,line,col,name,seg,relseg))
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
var seq__26085 = cljs.core.seq.call(null,infos);
var chunk__26086 = null;
var count__26087 = (0);
var i__26088 = (0);
while(true){
if((i__26088 < count__26087)){
var info = cljs.core._nth.call(null,chunk__26086,i__26088);
var segv_26439 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_26440 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_26441 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_26440 > (lc_26441 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__26085,chunk__26086,count__26087,i__26088,segv_26439,gline_26440,lc_26441,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_26440 - (lc_26441 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_26439], null));
});})(seq__26085,chunk__26086,count__26087,i__26088,segv_26439,gline_26440,lc_26441,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__26085,chunk__26086,count__26087,i__26088,segv_26439,gline_26440,lc_26441,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26440], null),cljs.core.conj,segv_26439);
});})(seq__26085,chunk__26086,count__26087,i__26088,segv_26439,gline_26440,lc_26441,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__26442 = seq__26085;
var G__26443 = chunk__26086;
var G__26444 = count__26087;
var G__26445 = (i__26088 + (1));
seq__26085 = G__26442;
chunk__26086 = G__26443;
count__26087 = G__26444;
i__26088 = G__26445;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__26085);
if(temp__5720__auto__){
var seq__26085__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26085__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26085__$1);
var G__26446 = cljs.core.chunk_rest.call(null,seq__26085__$1);
var G__26447 = c__4550__auto__;
var G__26448 = cljs.core.count.call(null,c__4550__auto__);
var G__26449 = (0);
seq__26085 = G__26446;
chunk__26086 = G__26447;
count__26087 = G__26448;
i__26088 = G__26449;
continue;
} else {
var info = cljs.core.first.call(null,seq__26085__$1);
var segv_26450 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_26451 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_26452 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_26451 > (lc_26452 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__26085,chunk__26086,count__26087,i__26088,segv_26450,gline_26451,lc_26452,info,seq__26085__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_26451 - (lc_26452 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_26450], null));
});})(seq__26085,chunk__26086,count__26087,i__26088,segv_26450,gline_26451,lc_26452,info,seq__26085__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__26085,chunk__26086,count__26087,i__26088,segv_26450,gline_26451,lc_26452,info,seq__26085__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26451], null),cljs.core.conj,segv_26450);
});})(seq__26085,chunk__26086,count__26087,i__26088,segv_26450,gline_26451,lc_26452,info,seq__26085__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__26453 = cljs.core.next.call(null,seq__26085__$1);
var G__26454 = null;
var G__26455 = (0);
var G__26456 = (0);
seq__26085 = G__26453;
chunk__26086 = G__26454;
count__26087 = G__26455;
i__26088 = G__26456;
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
var seq__26089_26457 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__26090_26458 = null;
var count__26091_26459 = (0);
var i__26092_26460 = (0);
while(true){
if((i__26092_26460 < count__26091_26459)){
var vec__26265_26461 = cljs.core._nth.call(null,chunk__26090_26458,i__26092_26460);
var source_idx_26462 = cljs.core.nth.call(null,vec__26265_26461,(0),null);
var vec__26268_26463 = cljs.core.nth.call(null,vec__26265_26461,(1),null);
var __26464 = cljs.core.nth.call(null,vec__26268_26463,(0),null);
var lines_26465__$1 = cljs.core.nth.call(null,vec__26268_26463,(1),null);
var seq__26271_26466 = cljs.core.seq.call(null,lines_26465__$1);
var chunk__26272_26467 = null;
var count__26273_26468 = (0);
var i__26274_26469 = (0);
while(true){
if((i__26274_26469 < count__26273_26468)){
var vec__26313_26470 = cljs.core._nth.call(null,chunk__26272_26467,i__26274_26469);
var line_26471 = cljs.core.nth.call(null,vec__26313_26470,(0),null);
var cols_26472 = cljs.core.nth.call(null,vec__26313_26470,(1),null);
var seq__26316_26473 = cljs.core.seq.call(null,cols_26472);
var chunk__26317_26474 = null;
var count__26318_26475 = (0);
var i__26319_26476 = (0);
while(true){
if((i__26319_26476 < count__26318_26475)){
var vec__26326_26477 = cljs.core._nth.call(null,chunk__26317_26474,i__26319_26476);
var col_26478 = cljs.core.nth.call(null,vec__26326_26477,(0),null);
var infos_26479 = cljs.core.nth.call(null,vec__26326_26477,(1),null);
encode_cols.call(null,infos_26479,source_idx_26462,line_26471,col_26478);


var G__26480 = seq__26316_26473;
var G__26481 = chunk__26317_26474;
var G__26482 = count__26318_26475;
var G__26483 = (i__26319_26476 + (1));
seq__26316_26473 = G__26480;
chunk__26317_26474 = G__26481;
count__26318_26475 = G__26482;
i__26319_26476 = G__26483;
continue;
} else {
var temp__5720__auto___26484 = cljs.core.seq.call(null,seq__26316_26473);
if(temp__5720__auto___26484){
var seq__26316_26485__$1 = temp__5720__auto___26484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26316_26485__$1)){
var c__4550__auto___26486 = cljs.core.chunk_first.call(null,seq__26316_26485__$1);
var G__26487 = cljs.core.chunk_rest.call(null,seq__26316_26485__$1);
var G__26488 = c__4550__auto___26486;
var G__26489 = cljs.core.count.call(null,c__4550__auto___26486);
var G__26490 = (0);
seq__26316_26473 = G__26487;
chunk__26317_26474 = G__26488;
count__26318_26475 = G__26489;
i__26319_26476 = G__26490;
continue;
} else {
var vec__26329_26491 = cljs.core.first.call(null,seq__26316_26485__$1);
var col_26492 = cljs.core.nth.call(null,vec__26329_26491,(0),null);
var infos_26493 = cljs.core.nth.call(null,vec__26329_26491,(1),null);
encode_cols.call(null,infos_26493,source_idx_26462,line_26471,col_26492);


var G__26494 = cljs.core.next.call(null,seq__26316_26485__$1);
var G__26495 = null;
var G__26496 = (0);
var G__26497 = (0);
seq__26316_26473 = G__26494;
chunk__26317_26474 = G__26495;
count__26318_26475 = G__26496;
i__26319_26476 = G__26497;
continue;
}
} else {
}
}
break;
}


var G__26498 = seq__26271_26466;
var G__26499 = chunk__26272_26467;
var G__26500 = count__26273_26468;
var G__26501 = (i__26274_26469 + (1));
seq__26271_26466 = G__26498;
chunk__26272_26467 = G__26499;
count__26273_26468 = G__26500;
i__26274_26469 = G__26501;
continue;
} else {
var temp__5720__auto___26502 = cljs.core.seq.call(null,seq__26271_26466);
if(temp__5720__auto___26502){
var seq__26271_26503__$1 = temp__5720__auto___26502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26271_26503__$1)){
var c__4550__auto___26504 = cljs.core.chunk_first.call(null,seq__26271_26503__$1);
var G__26505 = cljs.core.chunk_rest.call(null,seq__26271_26503__$1);
var G__26506 = c__4550__auto___26504;
var G__26507 = cljs.core.count.call(null,c__4550__auto___26504);
var G__26508 = (0);
seq__26271_26466 = G__26505;
chunk__26272_26467 = G__26506;
count__26273_26468 = G__26507;
i__26274_26469 = G__26508;
continue;
} else {
var vec__26332_26509 = cljs.core.first.call(null,seq__26271_26503__$1);
var line_26510 = cljs.core.nth.call(null,vec__26332_26509,(0),null);
var cols_26511 = cljs.core.nth.call(null,vec__26332_26509,(1),null);
var seq__26335_26512 = cljs.core.seq.call(null,cols_26511);
var chunk__26336_26513 = null;
var count__26337_26514 = (0);
var i__26338_26515 = (0);
while(true){
if((i__26338_26515 < count__26337_26514)){
var vec__26345_26516 = cljs.core._nth.call(null,chunk__26336_26513,i__26338_26515);
var col_26517 = cljs.core.nth.call(null,vec__26345_26516,(0),null);
var infos_26518 = cljs.core.nth.call(null,vec__26345_26516,(1),null);
encode_cols.call(null,infos_26518,source_idx_26462,line_26510,col_26517);


var G__26519 = seq__26335_26512;
var G__26520 = chunk__26336_26513;
var G__26521 = count__26337_26514;
var G__26522 = (i__26338_26515 + (1));
seq__26335_26512 = G__26519;
chunk__26336_26513 = G__26520;
count__26337_26514 = G__26521;
i__26338_26515 = G__26522;
continue;
} else {
var temp__5720__auto___26523__$1 = cljs.core.seq.call(null,seq__26335_26512);
if(temp__5720__auto___26523__$1){
var seq__26335_26524__$1 = temp__5720__auto___26523__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26335_26524__$1)){
var c__4550__auto___26525 = cljs.core.chunk_first.call(null,seq__26335_26524__$1);
var G__26526 = cljs.core.chunk_rest.call(null,seq__26335_26524__$1);
var G__26527 = c__4550__auto___26525;
var G__26528 = cljs.core.count.call(null,c__4550__auto___26525);
var G__26529 = (0);
seq__26335_26512 = G__26526;
chunk__26336_26513 = G__26527;
count__26337_26514 = G__26528;
i__26338_26515 = G__26529;
continue;
} else {
var vec__26348_26530 = cljs.core.first.call(null,seq__26335_26524__$1);
var col_26531 = cljs.core.nth.call(null,vec__26348_26530,(0),null);
var infos_26532 = cljs.core.nth.call(null,vec__26348_26530,(1),null);
encode_cols.call(null,infos_26532,source_idx_26462,line_26510,col_26531);


var G__26533 = cljs.core.next.call(null,seq__26335_26524__$1);
var G__26534 = null;
var G__26535 = (0);
var G__26536 = (0);
seq__26335_26512 = G__26533;
chunk__26336_26513 = G__26534;
count__26337_26514 = G__26535;
i__26338_26515 = G__26536;
continue;
}
} else {
}
}
break;
}


var G__26537 = cljs.core.next.call(null,seq__26271_26503__$1);
var G__26538 = null;
var G__26539 = (0);
var G__26540 = (0);
seq__26271_26466 = G__26537;
chunk__26272_26467 = G__26538;
count__26273_26468 = G__26539;
i__26274_26469 = G__26540;
continue;
}
} else {
}
}
break;
}


var G__26541 = seq__26089_26457;
var G__26542 = chunk__26090_26458;
var G__26543 = count__26091_26459;
var G__26544 = (i__26092_26460 + (1));
seq__26089_26457 = G__26541;
chunk__26090_26458 = G__26542;
count__26091_26459 = G__26543;
i__26092_26460 = G__26544;
continue;
} else {
var temp__5720__auto___26545 = cljs.core.seq.call(null,seq__26089_26457);
if(temp__5720__auto___26545){
var seq__26089_26546__$1 = temp__5720__auto___26545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26089_26546__$1)){
var c__4550__auto___26547 = cljs.core.chunk_first.call(null,seq__26089_26546__$1);
var G__26548 = cljs.core.chunk_rest.call(null,seq__26089_26546__$1);
var G__26549 = c__4550__auto___26547;
var G__26550 = cljs.core.count.call(null,c__4550__auto___26547);
var G__26551 = (0);
seq__26089_26457 = G__26548;
chunk__26090_26458 = G__26549;
count__26091_26459 = G__26550;
i__26092_26460 = G__26551;
continue;
} else {
var vec__26351_26552 = cljs.core.first.call(null,seq__26089_26546__$1);
var source_idx_26553 = cljs.core.nth.call(null,vec__26351_26552,(0),null);
var vec__26354_26554 = cljs.core.nth.call(null,vec__26351_26552,(1),null);
var __26555 = cljs.core.nth.call(null,vec__26354_26554,(0),null);
var lines_26556__$1 = cljs.core.nth.call(null,vec__26354_26554,(1),null);
var seq__26357_26557 = cljs.core.seq.call(null,lines_26556__$1);
var chunk__26358_26558 = null;
var count__26359_26559 = (0);
var i__26360_26560 = (0);
while(true){
if((i__26360_26560 < count__26359_26559)){
var vec__26399_26561 = cljs.core._nth.call(null,chunk__26358_26558,i__26360_26560);
var line_26562 = cljs.core.nth.call(null,vec__26399_26561,(0),null);
var cols_26563 = cljs.core.nth.call(null,vec__26399_26561,(1),null);
var seq__26402_26564 = cljs.core.seq.call(null,cols_26563);
var chunk__26403_26565 = null;
var count__26404_26566 = (0);
var i__26405_26567 = (0);
while(true){
if((i__26405_26567 < count__26404_26566)){
var vec__26412_26568 = cljs.core._nth.call(null,chunk__26403_26565,i__26405_26567);
var col_26569 = cljs.core.nth.call(null,vec__26412_26568,(0),null);
var infos_26570 = cljs.core.nth.call(null,vec__26412_26568,(1),null);
encode_cols.call(null,infos_26570,source_idx_26553,line_26562,col_26569);


var G__26571 = seq__26402_26564;
var G__26572 = chunk__26403_26565;
var G__26573 = count__26404_26566;
var G__26574 = (i__26405_26567 + (1));
seq__26402_26564 = G__26571;
chunk__26403_26565 = G__26572;
count__26404_26566 = G__26573;
i__26405_26567 = G__26574;
continue;
} else {
var temp__5720__auto___26575__$1 = cljs.core.seq.call(null,seq__26402_26564);
if(temp__5720__auto___26575__$1){
var seq__26402_26576__$1 = temp__5720__auto___26575__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26402_26576__$1)){
var c__4550__auto___26577 = cljs.core.chunk_first.call(null,seq__26402_26576__$1);
var G__26578 = cljs.core.chunk_rest.call(null,seq__26402_26576__$1);
var G__26579 = c__4550__auto___26577;
var G__26580 = cljs.core.count.call(null,c__4550__auto___26577);
var G__26581 = (0);
seq__26402_26564 = G__26578;
chunk__26403_26565 = G__26579;
count__26404_26566 = G__26580;
i__26405_26567 = G__26581;
continue;
} else {
var vec__26415_26582 = cljs.core.first.call(null,seq__26402_26576__$1);
var col_26583 = cljs.core.nth.call(null,vec__26415_26582,(0),null);
var infos_26584 = cljs.core.nth.call(null,vec__26415_26582,(1),null);
encode_cols.call(null,infos_26584,source_idx_26553,line_26562,col_26583);


var G__26585 = cljs.core.next.call(null,seq__26402_26576__$1);
var G__26586 = null;
var G__26587 = (0);
var G__26588 = (0);
seq__26402_26564 = G__26585;
chunk__26403_26565 = G__26586;
count__26404_26566 = G__26587;
i__26405_26567 = G__26588;
continue;
}
} else {
}
}
break;
}


var G__26589 = seq__26357_26557;
var G__26590 = chunk__26358_26558;
var G__26591 = count__26359_26559;
var G__26592 = (i__26360_26560 + (1));
seq__26357_26557 = G__26589;
chunk__26358_26558 = G__26590;
count__26359_26559 = G__26591;
i__26360_26560 = G__26592;
continue;
} else {
var temp__5720__auto___26593__$1 = cljs.core.seq.call(null,seq__26357_26557);
if(temp__5720__auto___26593__$1){
var seq__26357_26594__$1 = temp__5720__auto___26593__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26357_26594__$1)){
var c__4550__auto___26595 = cljs.core.chunk_first.call(null,seq__26357_26594__$1);
var G__26596 = cljs.core.chunk_rest.call(null,seq__26357_26594__$1);
var G__26597 = c__4550__auto___26595;
var G__26598 = cljs.core.count.call(null,c__4550__auto___26595);
var G__26599 = (0);
seq__26357_26557 = G__26596;
chunk__26358_26558 = G__26597;
count__26359_26559 = G__26598;
i__26360_26560 = G__26599;
continue;
} else {
var vec__26418_26600 = cljs.core.first.call(null,seq__26357_26594__$1);
var line_26601 = cljs.core.nth.call(null,vec__26418_26600,(0),null);
var cols_26602 = cljs.core.nth.call(null,vec__26418_26600,(1),null);
var seq__26421_26603 = cljs.core.seq.call(null,cols_26602);
var chunk__26422_26604 = null;
var count__26423_26605 = (0);
var i__26424_26606 = (0);
while(true){
if((i__26424_26606 < count__26423_26605)){
var vec__26431_26607 = cljs.core._nth.call(null,chunk__26422_26604,i__26424_26606);
var col_26608 = cljs.core.nth.call(null,vec__26431_26607,(0),null);
var infos_26609 = cljs.core.nth.call(null,vec__26431_26607,(1),null);
encode_cols.call(null,infos_26609,source_idx_26553,line_26601,col_26608);


var G__26610 = seq__26421_26603;
var G__26611 = chunk__26422_26604;
var G__26612 = count__26423_26605;
var G__26613 = (i__26424_26606 + (1));
seq__26421_26603 = G__26610;
chunk__26422_26604 = G__26611;
count__26423_26605 = G__26612;
i__26424_26606 = G__26613;
continue;
} else {
var temp__5720__auto___26614__$2 = cljs.core.seq.call(null,seq__26421_26603);
if(temp__5720__auto___26614__$2){
var seq__26421_26615__$1 = temp__5720__auto___26614__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26421_26615__$1)){
var c__4550__auto___26616 = cljs.core.chunk_first.call(null,seq__26421_26615__$1);
var G__26617 = cljs.core.chunk_rest.call(null,seq__26421_26615__$1);
var G__26618 = c__4550__auto___26616;
var G__26619 = cljs.core.count.call(null,c__4550__auto___26616);
var G__26620 = (0);
seq__26421_26603 = G__26617;
chunk__26422_26604 = G__26618;
count__26423_26605 = G__26619;
i__26424_26606 = G__26620;
continue;
} else {
var vec__26434_26621 = cljs.core.first.call(null,seq__26421_26615__$1);
var col_26622 = cljs.core.nth.call(null,vec__26434_26621,(0),null);
var infos_26623 = cljs.core.nth.call(null,vec__26434_26621,(1),null);
encode_cols.call(null,infos_26623,source_idx_26553,line_26601,col_26622);


var G__26624 = cljs.core.next.call(null,seq__26421_26615__$1);
var G__26625 = null;
var G__26626 = (0);
var G__26627 = (0);
seq__26421_26603 = G__26624;
chunk__26422_26604 = G__26625;
count__26423_26605 = G__26626;
i__26424_26606 = G__26627;
continue;
}
} else {
}
}
break;
}


var G__26628 = cljs.core.next.call(null,seq__26357_26594__$1);
var G__26629 = null;
var G__26630 = (0);
var G__26631 = (0);
seq__26357_26557 = G__26628;
chunk__26358_26558 = G__26629;
count__26359_26559 = G__26630;
i__26360_26560 = G__26631;
continue;
}
} else {
}
}
break;
}


var G__26632 = cljs.core.next.call(null,seq__26089_26546__$1);
var G__26633 = null;
var G__26634 = (0);
var G__26635 = (0);
seq__26089_26457 = G__26632;
chunk__26090_26458 = G__26633;
count__26091_26459 = G__26634;
i__26092_26460 = G__26635;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__26437 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26082_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26082_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26083_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__26083_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__26084_SHARP_){
return clojure.string.join.call(null,",",p1__26084_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__26438 = G__26437;
goog.object.set(G__26438,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__26438;
} else {
return G__26437;
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
var vec__26636 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__26636,(0),null);
var col_map = cljs.core.nth.call(null,vec__26636,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__26639 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__26639,(0),null);
var infos = cljs.core.nth.call(null,vec__26639,(1),null);
var G__26645 = cljs.core.next.call(null,col_map_seq);
var G__26646 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__26639,col,infos,vec__26636,line,col_map){
return (function (v,p__26642){
var map__26643 = p__26642;
var map__26643__$1 = (((((!((map__26643 == null))))?(((((map__26643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26643):map__26643);
var gline = cljs.core.get.call(null,map__26643__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__26643__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__26639,col,infos,vec__26636,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__26645;
new_cols = G__26646;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__26647 = cljs.core.next.call(null,line_map_seq);
var G__26648 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__26647;
new_lines = G__26648;
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
var seq__26649_26921 = cljs.core.seq.call(null,reverse_map);
var chunk__26650_26922 = null;
var count__26651_26923 = (0);
var i__26652_26924 = (0);
while(true){
if((i__26652_26924 < count__26651_26923)){
var vec__26787_26925 = cljs.core._nth.call(null,chunk__26650_26922,i__26652_26924);
var line_26926 = cljs.core.nth.call(null,vec__26787_26925,(0),null);
var columns_26927 = cljs.core.nth.call(null,vec__26787_26925,(1),null);
var seq__26790_26928 = cljs.core.seq.call(null,columns_26927);
var chunk__26791_26929 = null;
var count__26792_26930 = (0);
var i__26793_26931 = (0);
while(true){
if((i__26793_26931 < count__26792_26930)){
var vec__26824_26932 = cljs.core._nth.call(null,chunk__26791_26929,i__26793_26931);
var column_26933 = cljs.core.nth.call(null,vec__26824_26932,(0),null);
var column_info_26934 = cljs.core.nth.call(null,vec__26824_26932,(1),null);
var seq__26827_26935 = cljs.core.seq.call(null,column_info_26934);
var chunk__26828_26936 = null;
var count__26829_26937 = (0);
var i__26830_26938 = (0);
while(true){
if((i__26830_26938 < count__26829_26937)){
var map__26835_26939 = cljs.core._nth.call(null,chunk__26828_26936,i__26830_26938);
var map__26835_26940__$1 = (((((!((map__26835_26939 == null))))?(((((map__26835_26939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26835_26939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26835_26939):map__26835_26939);
var gline_26941 = cljs.core.get.call(null,map__26835_26940__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26942 = cljs.core.get.call(null,map__26835_26940__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26943 = cljs.core.get.call(null,map__26835_26940__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26941], null),cljs.core.fnil.call(null,((function (seq__26827_26935,chunk__26828_26936,count__26829_26937,i__26830_26938,seq__26790_26928,chunk__26791_26929,count__26792_26930,i__26793_26931,seq__26649_26921,chunk__26650_26922,count__26651_26923,i__26652_26924,map__26835_26939,map__26835_26940__$1,gline_26941,gcol_26942,name_26943,vec__26824_26932,column_26933,column_info_26934,vec__26787_26925,line_26926,columns_26927,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26942], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26926,new cljs.core.Keyword(null,"col","col",-1959363084),column_26933,new cljs.core.Keyword(null,"name","name",1843675177),name_26943], null));
});})(seq__26827_26935,chunk__26828_26936,count__26829_26937,i__26830_26938,seq__26790_26928,chunk__26791_26929,count__26792_26930,i__26793_26931,seq__26649_26921,chunk__26650_26922,count__26651_26923,i__26652_26924,map__26835_26939,map__26835_26940__$1,gline_26941,gcol_26942,name_26943,vec__26824_26932,column_26933,column_info_26934,vec__26787_26925,line_26926,columns_26927,inverted))
,cljs.core.sorted_map.call(null)));


var G__26944 = seq__26827_26935;
var G__26945 = chunk__26828_26936;
var G__26946 = count__26829_26937;
var G__26947 = (i__26830_26938 + (1));
seq__26827_26935 = G__26944;
chunk__26828_26936 = G__26945;
count__26829_26937 = G__26946;
i__26830_26938 = G__26947;
continue;
} else {
var temp__5720__auto___26948 = cljs.core.seq.call(null,seq__26827_26935);
if(temp__5720__auto___26948){
var seq__26827_26949__$1 = temp__5720__auto___26948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26827_26949__$1)){
var c__4550__auto___26950 = cljs.core.chunk_first.call(null,seq__26827_26949__$1);
var G__26951 = cljs.core.chunk_rest.call(null,seq__26827_26949__$1);
var G__26952 = c__4550__auto___26950;
var G__26953 = cljs.core.count.call(null,c__4550__auto___26950);
var G__26954 = (0);
seq__26827_26935 = G__26951;
chunk__26828_26936 = G__26952;
count__26829_26937 = G__26953;
i__26830_26938 = G__26954;
continue;
} else {
var map__26837_26955 = cljs.core.first.call(null,seq__26827_26949__$1);
var map__26837_26956__$1 = (((((!((map__26837_26955 == null))))?(((((map__26837_26955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26837_26955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26837_26955):map__26837_26955);
var gline_26957 = cljs.core.get.call(null,map__26837_26956__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26958 = cljs.core.get.call(null,map__26837_26956__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26959 = cljs.core.get.call(null,map__26837_26956__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26957], null),cljs.core.fnil.call(null,((function (seq__26827_26935,chunk__26828_26936,count__26829_26937,i__26830_26938,seq__26790_26928,chunk__26791_26929,count__26792_26930,i__26793_26931,seq__26649_26921,chunk__26650_26922,count__26651_26923,i__26652_26924,map__26837_26955,map__26837_26956__$1,gline_26957,gcol_26958,name_26959,seq__26827_26949__$1,temp__5720__auto___26948,vec__26824_26932,column_26933,column_info_26934,vec__26787_26925,line_26926,columns_26927,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26958], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26926,new cljs.core.Keyword(null,"col","col",-1959363084),column_26933,new cljs.core.Keyword(null,"name","name",1843675177),name_26959], null));
});})(seq__26827_26935,chunk__26828_26936,count__26829_26937,i__26830_26938,seq__26790_26928,chunk__26791_26929,count__26792_26930,i__26793_26931,seq__26649_26921,chunk__26650_26922,count__26651_26923,i__26652_26924,map__26837_26955,map__26837_26956__$1,gline_26957,gcol_26958,name_26959,seq__26827_26949__$1,temp__5720__auto___26948,vec__26824_26932,column_26933,column_info_26934,vec__26787_26925,line_26926,columns_26927,inverted))
,cljs.core.sorted_map.call(null)));


var G__26960 = cljs.core.next.call(null,seq__26827_26949__$1);
var G__26961 = null;
var G__26962 = (0);
var G__26963 = (0);
seq__26827_26935 = G__26960;
chunk__26828_26936 = G__26961;
count__26829_26937 = G__26962;
i__26830_26938 = G__26963;
continue;
}
} else {
}
}
break;
}


var G__26964 = seq__26790_26928;
var G__26965 = chunk__26791_26929;
var G__26966 = count__26792_26930;
var G__26967 = (i__26793_26931 + (1));
seq__26790_26928 = G__26964;
chunk__26791_26929 = G__26965;
count__26792_26930 = G__26966;
i__26793_26931 = G__26967;
continue;
} else {
var temp__5720__auto___26968 = cljs.core.seq.call(null,seq__26790_26928);
if(temp__5720__auto___26968){
var seq__26790_26969__$1 = temp__5720__auto___26968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26790_26969__$1)){
var c__4550__auto___26970 = cljs.core.chunk_first.call(null,seq__26790_26969__$1);
var G__26971 = cljs.core.chunk_rest.call(null,seq__26790_26969__$1);
var G__26972 = c__4550__auto___26970;
var G__26973 = cljs.core.count.call(null,c__4550__auto___26970);
var G__26974 = (0);
seq__26790_26928 = G__26971;
chunk__26791_26929 = G__26972;
count__26792_26930 = G__26973;
i__26793_26931 = G__26974;
continue;
} else {
var vec__26839_26975 = cljs.core.first.call(null,seq__26790_26969__$1);
var column_26976 = cljs.core.nth.call(null,vec__26839_26975,(0),null);
var column_info_26977 = cljs.core.nth.call(null,vec__26839_26975,(1),null);
var seq__26842_26978 = cljs.core.seq.call(null,column_info_26977);
var chunk__26843_26979 = null;
var count__26844_26980 = (0);
var i__26845_26981 = (0);
while(true){
if((i__26845_26981 < count__26844_26980)){
var map__26850_26982 = cljs.core._nth.call(null,chunk__26843_26979,i__26845_26981);
var map__26850_26983__$1 = (((((!((map__26850_26982 == null))))?(((((map__26850_26982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26850_26982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26850_26982):map__26850_26982);
var gline_26984 = cljs.core.get.call(null,map__26850_26983__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26985 = cljs.core.get.call(null,map__26850_26983__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26986 = cljs.core.get.call(null,map__26850_26983__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26984], null),cljs.core.fnil.call(null,((function (seq__26842_26978,chunk__26843_26979,count__26844_26980,i__26845_26981,seq__26790_26928,chunk__26791_26929,count__26792_26930,i__26793_26931,seq__26649_26921,chunk__26650_26922,count__26651_26923,i__26652_26924,map__26850_26982,map__26850_26983__$1,gline_26984,gcol_26985,name_26986,vec__26839_26975,column_26976,column_info_26977,seq__26790_26969__$1,temp__5720__auto___26968,vec__26787_26925,line_26926,columns_26927,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26985], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26926,new cljs.core.Keyword(null,"col","col",-1959363084),column_26976,new cljs.core.Keyword(null,"name","name",1843675177),name_26986], null));
});})(seq__26842_26978,chunk__26843_26979,count__26844_26980,i__26845_26981,seq__26790_26928,chunk__26791_26929,count__26792_26930,i__26793_26931,seq__26649_26921,chunk__26650_26922,count__26651_26923,i__26652_26924,map__26850_26982,map__26850_26983__$1,gline_26984,gcol_26985,name_26986,vec__26839_26975,column_26976,column_info_26977,seq__26790_26969__$1,temp__5720__auto___26968,vec__26787_26925,line_26926,columns_26927,inverted))
,cljs.core.sorted_map.call(null)));


var G__26987 = seq__26842_26978;
var G__26988 = chunk__26843_26979;
var G__26989 = count__26844_26980;
var G__26990 = (i__26845_26981 + (1));
seq__26842_26978 = G__26987;
chunk__26843_26979 = G__26988;
count__26844_26980 = G__26989;
i__26845_26981 = G__26990;
continue;
} else {
var temp__5720__auto___26991__$1 = cljs.core.seq.call(null,seq__26842_26978);
if(temp__5720__auto___26991__$1){
var seq__26842_26992__$1 = temp__5720__auto___26991__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26842_26992__$1)){
var c__4550__auto___26993 = cljs.core.chunk_first.call(null,seq__26842_26992__$1);
var G__26994 = cljs.core.chunk_rest.call(null,seq__26842_26992__$1);
var G__26995 = c__4550__auto___26993;
var G__26996 = cljs.core.count.call(null,c__4550__auto___26993);
var G__26997 = (0);
seq__26842_26978 = G__26994;
chunk__26843_26979 = G__26995;
count__26844_26980 = G__26996;
i__26845_26981 = G__26997;
continue;
} else {
var map__26852_26998 = cljs.core.first.call(null,seq__26842_26992__$1);
var map__26852_26999__$1 = (((((!((map__26852_26998 == null))))?(((((map__26852_26998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26852_26998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26852_26998):map__26852_26998);
var gline_27000 = cljs.core.get.call(null,map__26852_26999__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27001 = cljs.core.get.call(null,map__26852_26999__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27002 = cljs.core.get.call(null,map__26852_26999__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27000], null),cljs.core.fnil.call(null,((function (seq__26842_26978,chunk__26843_26979,count__26844_26980,i__26845_26981,seq__26790_26928,chunk__26791_26929,count__26792_26930,i__26793_26931,seq__26649_26921,chunk__26650_26922,count__26651_26923,i__26652_26924,map__26852_26998,map__26852_26999__$1,gline_27000,gcol_27001,name_27002,seq__26842_26992__$1,temp__5720__auto___26991__$1,vec__26839_26975,column_26976,column_info_26977,seq__26790_26969__$1,temp__5720__auto___26968,vec__26787_26925,line_26926,columns_26927,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27001], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26926,new cljs.core.Keyword(null,"col","col",-1959363084),column_26976,new cljs.core.Keyword(null,"name","name",1843675177),name_27002], null));
});})(seq__26842_26978,chunk__26843_26979,count__26844_26980,i__26845_26981,seq__26790_26928,chunk__26791_26929,count__26792_26930,i__26793_26931,seq__26649_26921,chunk__26650_26922,count__26651_26923,i__26652_26924,map__26852_26998,map__26852_26999__$1,gline_27000,gcol_27001,name_27002,seq__26842_26992__$1,temp__5720__auto___26991__$1,vec__26839_26975,column_26976,column_info_26977,seq__26790_26969__$1,temp__5720__auto___26968,vec__26787_26925,line_26926,columns_26927,inverted))
,cljs.core.sorted_map.call(null)));


var G__27003 = cljs.core.next.call(null,seq__26842_26992__$1);
var G__27004 = null;
var G__27005 = (0);
var G__27006 = (0);
seq__26842_26978 = G__27003;
chunk__26843_26979 = G__27004;
count__26844_26980 = G__27005;
i__26845_26981 = G__27006;
continue;
}
} else {
}
}
break;
}


var G__27007 = cljs.core.next.call(null,seq__26790_26969__$1);
var G__27008 = null;
var G__27009 = (0);
var G__27010 = (0);
seq__26790_26928 = G__27007;
chunk__26791_26929 = G__27008;
count__26792_26930 = G__27009;
i__26793_26931 = G__27010;
continue;
}
} else {
}
}
break;
}


var G__27011 = seq__26649_26921;
var G__27012 = chunk__26650_26922;
var G__27013 = count__26651_26923;
var G__27014 = (i__26652_26924 + (1));
seq__26649_26921 = G__27011;
chunk__26650_26922 = G__27012;
count__26651_26923 = G__27013;
i__26652_26924 = G__27014;
continue;
} else {
var temp__5720__auto___27015 = cljs.core.seq.call(null,seq__26649_26921);
if(temp__5720__auto___27015){
var seq__26649_27016__$1 = temp__5720__auto___27015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26649_27016__$1)){
var c__4550__auto___27017 = cljs.core.chunk_first.call(null,seq__26649_27016__$1);
var G__27018 = cljs.core.chunk_rest.call(null,seq__26649_27016__$1);
var G__27019 = c__4550__auto___27017;
var G__27020 = cljs.core.count.call(null,c__4550__auto___27017);
var G__27021 = (0);
seq__26649_26921 = G__27018;
chunk__26650_26922 = G__27019;
count__26651_26923 = G__27020;
i__26652_26924 = G__27021;
continue;
} else {
var vec__26854_27022 = cljs.core.first.call(null,seq__26649_27016__$1);
var line_27023 = cljs.core.nth.call(null,vec__26854_27022,(0),null);
var columns_27024 = cljs.core.nth.call(null,vec__26854_27022,(1),null);
var seq__26857_27025 = cljs.core.seq.call(null,columns_27024);
var chunk__26858_27026 = null;
var count__26859_27027 = (0);
var i__26860_27028 = (0);
while(true){
if((i__26860_27028 < count__26859_27027)){
var vec__26891_27029 = cljs.core._nth.call(null,chunk__26858_27026,i__26860_27028);
var column_27030 = cljs.core.nth.call(null,vec__26891_27029,(0),null);
var column_info_27031 = cljs.core.nth.call(null,vec__26891_27029,(1),null);
var seq__26894_27032 = cljs.core.seq.call(null,column_info_27031);
var chunk__26895_27033 = null;
var count__26896_27034 = (0);
var i__26897_27035 = (0);
while(true){
if((i__26897_27035 < count__26896_27034)){
var map__26902_27036 = cljs.core._nth.call(null,chunk__26895_27033,i__26897_27035);
var map__26902_27037__$1 = (((((!((map__26902_27036 == null))))?(((((map__26902_27036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26902_27036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26902_27036):map__26902_27036);
var gline_27038 = cljs.core.get.call(null,map__26902_27037__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27039 = cljs.core.get.call(null,map__26902_27037__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27040 = cljs.core.get.call(null,map__26902_27037__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27038], null),cljs.core.fnil.call(null,((function (seq__26894_27032,chunk__26895_27033,count__26896_27034,i__26897_27035,seq__26857_27025,chunk__26858_27026,count__26859_27027,i__26860_27028,seq__26649_26921,chunk__26650_26922,count__26651_26923,i__26652_26924,map__26902_27036,map__26902_27037__$1,gline_27038,gcol_27039,name_27040,vec__26891_27029,column_27030,column_info_27031,vec__26854_27022,line_27023,columns_27024,seq__26649_27016__$1,temp__5720__auto___27015,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27039], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27023,new cljs.core.Keyword(null,"col","col",-1959363084),column_27030,new cljs.core.Keyword(null,"name","name",1843675177),name_27040], null));
});})(seq__26894_27032,chunk__26895_27033,count__26896_27034,i__26897_27035,seq__26857_27025,chunk__26858_27026,count__26859_27027,i__26860_27028,seq__26649_26921,chunk__26650_26922,count__26651_26923,i__26652_26924,map__26902_27036,map__26902_27037__$1,gline_27038,gcol_27039,name_27040,vec__26891_27029,column_27030,column_info_27031,vec__26854_27022,line_27023,columns_27024,seq__26649_27016__$1,temp__5720__auto___27015,inverted))
,cljs.core.sorted_map.call(null)));


var G__27041 = seq__26894_27032;
var G__27042 = chunk__26895_27033;
var G__27043 = count__26896_27034;
var G__27044 = (i__26897_27035 + (1));
seq__26894_27032 = G__27041;
chunk__26895_27033 = G__27042;
count__26896_27034 = G__27043;
i__26897_27035 = G__27044;
continue;
} else {
var temp__5720__auto___27045__$1 = cljs.core.seq.call(null,seq__26894_27032);
if(temp__5720__auto___27045__$1){
var seq__26894_27046__$1 = temp__5720__auto___27045__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26894_27046__$1)){
var c__4550__auto___27047 = cljs.core.chunk_first.call(null,seq__26894_27046__$1);
var G__27048 = cljs.core.chunk_rest.call(null,seq__26894_27046__$1);
var G__27049 = c__4550__auto___27047;
var G__27050 = cljs.core.count.call(null,c__4550__auto___27047);
var G__27051 = (0);
seq__26894_27032 = G__27048;
chunk__26895_27033 = G__27049;
count__26896_27034 = G__27050;
i__26897_27035 = G__27051;
continue;
} else {
var map__26904_27052 = cljs.core.first.call(null,seq__26894_27046__$1);
var map__26904_27053__$1 = (((((!((map__26904_27052 == null))))?(((((map__26904_27052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26904_27052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26904_27052):map__26904_27052);
var gline_27054 = cljs.core.get.call(null,map__26904_27053__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27055 = cljs.core.get.call(null,map__26904_27053__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27056 = cljs.core.get.call(null,map__26904_27053__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27054], null),cljs.core.fnil.call(null,((function (seq__26894_27032,chunk__26895_27033,count__26896_27034,i__26897_27035,seq__26857_27025,chunk__26858_27026,count__26859_27027,i__26860_27028,seq__26649_26921,chunk__26650_26922,count__26651_26923,i__26652_26924,map__26904_27052,map__26904_27053__$1,gline_27054,gcol_27055,name_27056,seq__26894_27046__$1,temp__5720__auto___27045__$1,vec__26891_27029,column_27030,column_info_27031,vec__26854_27022,line_27023,columns_27024,seq__26649_27016__$1,temp__5720__auto___27015,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27055], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27023,new cljs.core.Keyword(null,"col","col",-1959363084),column_27030,new cljs.core.Keyword(null,"name","name",1843675177),name_27056], null));
});})(seq__26894_27032,chunk__26895_27033,count__26896_27034,i__26897_27035,seq__26857_27025,chunk__26858_27026,count__26859_27027,i__26860_27028,seq__26649_26921,chunk__26650_26922,count__26651_26923,i__26652_26924,map__26904_27052,map__26904_27053__$1,gline_27054,gcol_27055,name_27056,seq__26894_27046__$1,temp__5720__auto___27045__$1,vec__26891_27029,column_27030,column_info_27031,vec__26854_27022,line_27023,columns_27024,seq__26649_27016__$1,temp__5720__auto___27015,inverted))
,cljs.core.sorted_map.call(null)));


var G__27057 = cljs.core.next.call(null,seq__26894_27046__$1);
var G__27058 = null;
var G__27059 = (0);
var G__27060 = (0);
seq__26894_27032 = G__27057;
chunk__26895_27033 = G__27058;
count__26896_27034 = G__27059;
i__26897_27035 = G__27060;
continue;
}
} else {
}
}
break;
}


var G__27061 = seq__26857_27025;
var G__27062 = chunk__26858_27026;
var G__27063 = count__26859_27027;
var G__27064 = (i__26860_27028 + (1));
seq__26857_27025 = G__27061;
chunk__26858_27026 = G__27062;
count__26859_27027 = G__27063;
i__26860_27028 = G__27064;
continue;
} else {
var temp__5720__auto___27065__$1 = cljs.core.seq.call(null,seq__26857_27025);
if(temp__5720__auto___27065__$1){
var seq__26857_27066__$1 = temp__5720__auto___27065__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26857_27066__$1)){
var c__4550__auto___27067 = cljs.core.chunk_first.call(null,seq__26857_27066__$1);
var G__27068 = cljs.core.chunk_rest.call(null,seq__26857_27066__$1);
var G__27069 = c__4550__auto___27067;
var G__27070 = cljs.core.count.call(null,c__4550__auto___27067);
var G__27071 = (0);
seq__26857_27025 = G__27068;
chunk__26858_27026 = G__27069;
count__26859_27027 = G__27070;
i__26860_27028 = G__27071;
continue;
} else {
var vec__26906_27072 = cljs.core.first.call(null,seq__26857_27066__$1);
var column_27073 = cljs.core.nth.call(null,vec__26906_27072,(0),null);
var column_info_27074 = cljs.core.nth.call(null,vec__26906_27072,(1),null);
var seq__26909_27075 = cljs.core.seq.call(null,column_info_27074);
var chunk__26910_27076 = null;
var count__26911_27077 = (0);
var i__26912_27078 = (0);
while(true){
if((i__26912_27078 < count__26911_27077)){
var map__26917_27079 = cljs.core._nth.call(null,chunk__26910_27076,i__26912_27078);
var map__26917_27080__$1 = (((((!((map__26917_27079 == null))))?(((((map__26917_27079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26917_27079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26917_27079):map__26917_27079);
var gline_27081 = cljs.core.get.call(null,map__26917_27080__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27082 = cljs.core.get.call(null,map__26917_27080__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27083 = cljs.core.get.call(null,map__26917_27080__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27081], null),cljs.core.fnil.call(null,((function (seq__26909_27075,chunk__26910_27076,count__26911_27077,i__26912_27078,seq__26857_27025,chunk__26858_27026,count__26859_27027,i__26860_27028,seq__26649_26921,chunk__26650_26922,count__26651_26923,i__26652_26924,map__26917_27079,map__26917_27080__$1,gline_27081,gcol_27082,name_27083,vec__26906_27072,column_27073,column_info_27074,seq__26857_27066__$1,temp__5720__auto___27065__$1,vec__26854_27022,line_27023,columns_27024,seq__26649_27016__$1,temp__5720__auto___27015,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27082], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27023,new cljs.core.Keyword(null,"col","col",-1959363084),column_27073,new cljs.core.Keyword(null,"name","name",1843675177),name_27083], null));
});})(seq__26909_27075,chunk__26910_27076,count__26911_27077,i__26912_27078,seq__26857_27025,chunk__26858_27026,count__26859_27027,i__26860_27028,seq__26649_26921,chunk__26650_26922,count__26651_26923,i__26652_26924,map__26917_27079,map__26917_27080__$1,gline_27081,gcol_27082,name_27083,vec__26906_27072,column_27073,column_info_27074,seq__26857_27066__$1,temp__5720__auto___27065__$1,vec__26854_27022,line_27023,columns_27024,seq__26649_27016__$1,temp__5720__auto___27015,inverted))
,cljs.core.sorted_map.call(null)));


var G__27084 = seq__26909_27075;
var G__27085 = chunk__26910_27076;
var G__27086 = count__26911_27077;
var G__27087 = (i__26912_27078 + (1));
seq__26909_27075 = G__27084;
chunk__26910_27076 = G__27085;
count__26911_27077 = G__27086;
i__26912_27078 = G__27087;
continue;
} else {
var temp__5720__auto___27088__$2 = cljs.core.seq.call(null,seq__26909_27075);
if(temp__5720__auto___27088__$2){
var seq__26909_27089__$1 = temp__5720__auto___27088__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26909_27089__$1)){
var c__4550__auto___27090 = cljs.core.chunk_first.call(null,seq__26909_27089__$1);
var G__27091 = cljs.core.chunk_rest.call(null,seq__26909_27089__$1);
var G__27092 = c__4550__auto___27090;
var G__27093 = cljs.core.count.call(null,c__4550__auto___27090);
var G__27094 = (0);
seq__26909_27075 = G__27091;
chunk__26910_27076 = G__27092;
count__26911_27077 = G__27093;
i__26912_27078 = G__27094;
continue;
} else {
var map__26919_27095 = cljs.core.first.call(null,seq__26909_27089__$1);
var map__26919_27096__$1 = (((((!((map__26919_27095 == null))))?(((((map__26919_27095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26919_27095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26919_27095):map__26919_27095);
var gline_27097 = cljs.core.get.call(null,map__26919_27096__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_27098 = cljs.core.get.call(null,map__26919_27096__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_27099 = cljs.core.get.call(null,map__26919_27096__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_27097], null),cljs.core.fnil.call(null,((function (seq__26909_27075,chunk__26910_27076,count__26911_27077,i__26912_27078,seq__26857_27025,chunk__26858_27026,count__26859_27027,i__26860_27028,seq__26649_26921,chunk__26650_26922,count__26651_26923,i__26652_26924,map__26919_27095,map__26919_27096__$1,gline_27097,gcol_27098,name_27099,seq__26909_27089__$1,temp__5720__auto___27088__$2,vec__26906_27072,column_27073,column_info_27074,seq__26857_27066__$1,temp__5720__auto___27065__$1,vec__26854_27022,line_27023,columns_27024,seq__26649_27016__$1,temp__5720__auto___27015,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_27098], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_27023,new cljs.core.Keyword(null,"col","col",-1959363084),column_27073,new cljs.core.Keyword(null,"name","name",1843675177),name_27099], null));
});})(seq__26909_27075,chunk__26910_27076,count__26911_27077,i__26912_27078,seq__26857_27025,chunk__26858_27026,count__26859_27027,i__26860_27028,seq__26649_26921,chunk__26650_26922,count__26651_26923,i__26652_26924,map__26919_27095,map__26919_27096__$1,gline_27097,gcol_27098,name_27099,seq__26909_27089__$1,temp__5720__auto___27088__$2,vec__26906_27072,column_27073,column_info_27074,seq__26857_27066__$1,temp__5720__auto___27065__$1,vec__26854_27022,line_27023,columns_27024,seq__26649_27016__$1,temp__5720__auto___27015,inverted))
,cljs.core.sorted_map.call(null)));


var G__27100 = cljs.core.next.call(null,seq__26909_27089__$1);
var G__27101 = null;
var G__27102 = (0);
var G__27103 = (0);
seq__26909_27075 = G__27100;
chunk__26910_27076 = G__27101;
count__26911_27077 = G__27102;
i__26912_27078 = G__27103;
continue;
}
} else {
}
}
break;
}


var G__27104 = cljs.core.next.call(null,seq__26857_27066__$1);
var G__27105 = null;
var G__27106 = (0);
var G__27107 = (0);
seq__26857_27025 = G__27104;
chunk__26858_27026 = G__27105;
count__26859_27027 = G__27106;
i__26860_27028 = G__27107;
continue;
}
} else {
}
}
break;
}


var G__27108 = cljs.core.next.call(null,seq__26649_27016__$1);
var G__27109 = null;
var G__27110 = (0);
var G__27111 = (0);
seq__26649_26921 = G__27108;
chunk__26650_26922 = G__27109;
count__26651_26923 = G__27110;
i__26652_26924 = G__27111;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1601313647664
