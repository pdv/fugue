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
return cljs.core.reduce.call(null,(function (m,p__31842){
var vec__31843 = p__31842;
var i = cljs.core.nth.call(null,vec__31843,(0),null);
var v = cljs.core.nth.call(null,vec__31843,(1),null);
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
var vec__31846 = seg;
var gcol = cljs.core.nth.call(null,vec__31846,(0),null);
var source = cljs.core.nth.call(null,vec__31846,(1),null);
var line = cljs.core.nth.call(null,vec__31846,(2),null);
var col = cljs.core.nth.call(null,vec__31846,(3),null);
var name = cljs.core.nth.call(null,vec__31846,(4),null);
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
var vec__31849 = seg;
var gcol = cljs.core.nth.call(null,vec__31849,(0),null);
var source = cljs.core.nth.call(null,vec__31849,(1),null);
var line = cljs.core.nth.call(null,vec__31849,(2),null);
var col = cljs.core.nth.call(null,vec__31849,(3),null);
var name = cljs.core.nth.call(null,vec__31849,(4),null);
var vec__31852 = relseg;
var rgcol = cljs.core.nth.call(null,vec__31852,(0),null);
var rsource = cljs.core.nth.call(null,vec__31852,(1),null);
var rline = cljs.core.nth.call(null,vec__31852,(2),null);
var rcol = cljs.core.nth.call(null,vec__31852,(3),null);
var rname = cljs.core.nth.call(null,vec__31852,(4),null);
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
var map__31855 = segmap;
var map__31855__$1 = (((((!((map__31855 == null))))?(((((map__31855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31855):map__31855);
var gcol = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__31855__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__31855,map__31855__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__31855,map__31855__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__31855,map__31855__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__31855,map__31855__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__31855,map__31855__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__31855,map__31855__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__31858 = arguments.length;
switch (G__31858) {
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
var vec__31862 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__31866 = cljs.core.next.call(null,segs__$1);
var G__31867 = nrelseg;
var G__31868 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__31866;
relseg__$1 = G__31867;
result__$1 = G__31868;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__31862,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__31862,(1),null);
var G__31869 = (gline + (1));
var G__31870 = cljs.core.next.call(null,lines__$1);
var G__31871 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__31872 = result__$1;
gline = G__31869;
lines__$1 = G__31870;
relseg = G__31871;
result = G__31872;
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
var map__31874 = segmap;
var map__31874__$1 = (((((!((map__31874 == null))))?(((((map__31874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31874):map__31874);
var gcol = cljs.core.get.call(null,map__31874__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__31874__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__31874__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__31874__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__31874__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__31874,map__31874__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__31874,map__31874__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__31873_SHARP_){
return cljs.core.conj.call(null,p1__31873_SHARP_,d__$1);
});})(map__31874,map__31874__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__31874,map__31874__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__31877 = arguments.length;
switch (G__31877) {
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
var vec__31881 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__31885 = cljs.core.next.call(null,segs__$1);
var G__31886 = nrelseg;
var G__31887 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__31885;
relseg__$1 = G__31886;
result__$1 = G__31887;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__31881,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__31881,(1),null);
var G__31888 = (gline + (1));
var G__31889 = cljs.core.next.call(null,lines__$1);
var G__31890 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__31891 = result__$1;
gline = G__31888;
lines__$1 = G__31889;
relseg = G__31890;
result = G__31891;
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
return (function (p__31892){
var vec__31893 = p__31892;
var _ = cljs.core.nth.call(null,vec__31893,(0),null);
var source = cljs.core.nth.call(null,vec__31893,(1),null);
var line = cljs.core.nth.call(null,vec__31893,(2),null);
var col = cljs.core.nth.call(null,vec__31893,(3),null);
var name = cljs.core.nth.call(null,vec__31893,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__31896){
var vec__31897 = p__31896;
var gcol = cljs.core.nth.call(null,vec__31897,(0),null);
var sidx = cljs.core.nth.call(null,vec__31897,(1),null);
var line = cljs.core.nth.call(null,vec__31897,(2),null);
var col = cljs.core.nth.call(null,vec__31897,(3),null);
var name = cljs.core.nth.call(null,vec__31897,(4),null);
var seg = vec__31897;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__31897,gcol,sidx,line,col,name,seg,relseg){
return (function (p__31900){
var vec__31901 = p__31900;
var _ = cljs.core.nth.call(null,vec__31901,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__31901,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__31901,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__31901,(3),null);
var lname = cljs.core.nth.call(null,vec__31901,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__31897,gcol,sidx,line,col,name,seg,relseg))
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
var seq__31907 = cljs.core.seq.call(null,infos);
var chunk__31908 = null;
var count__31909 = (0);
var i__31910 = (0);
while(true){
if((i__31910 < count__31909)){
var info = cljs.core._nth.call(null,chunk__31908,i__31910);
var segv_32261 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_32262 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_32263 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_32262 > (lc_32263 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__31907,chunk__31908,count__31909,i__31910,segv_32261,gline_32262,lc_32263,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_32262 - (lc_32263 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_32261], null));
});})(seq__31907,chunk__31908,count__31909,i__31910,segv_32261,gline_32262,lc_32263,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__31907,chunk__31908,count__31909,i__31910,segv_32261,gline_32262,lc_32263,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32262], null),cljs.core.conj,segv_32261);
});})(seq__31907,chunk__31908,count__31909,i__31910,segv_32261,gline_32262,lc_32263,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__32264 = seq__31907;
var G__32265 = chunk__31908;
var G__32266 = count__31909;
var G__32267 = (i__31910 + (1));
seq__31907 = G__32264;
chunk__31908 = G__32265;
count__31909 = G__32266;
i__31910 = G__32267;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31907);
if(temp__5720__auto__){
var seq__31907__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31907__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31907__$1);
var G__32268 = cljs.core.chunk_rest.call(null,seq__31907__$1);
var G__32269 = c__4550__auto__;
var G__32270 = cljs.core.count.call(null,c__4550__auto__);
var G__32271 = (0);
seq__31907 = G__32268;
chunk__31908 = G__32269;
count__31909 = G__32270;
i__31910 = G__32271;
continue;
} else {
var info = cljs.core.first.call(null,seq__31907__$1);
var segv_32272 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_32273 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_32274 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_32273 > (lc_32274 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__31907,chunk__31908,count__31909,i__31910,segv_32272,gline_32273,lc_32274,info,seq__31907__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_32273 - (lc_32274 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_32272], null));
});})(seq__31907,chunk__31908,count__31909,i__31910,segv_32272,gline_32273,lc_32274,info,seq__31907__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__31907,chunk__31908,count__31909,i__31910,segv_32272,gline_32273,lc_32274,info,seq__31907__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32273], null),cljs.core.conj,segv_32272);
});})(seq__31907,chunk__31908,count__31909,i__31910,segv_32272,gline_32273,lc_32274,info,seq__31907__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__32275 = cljs.core.next.call(null,seq__31907__$1);
var G__32276 = null;
var G__32277 = (0);
var G__32278 = (0);
seq__31907 = G__32275;
chunk__31908 = G__32276;
count__31909 = G__32277;
i__31910 = G__32278;
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
var seq__31911_32279 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__31912_32280 = null;
var count__31913_32281 = (0);
var i__31914_32282 = (0);
while(true){
if((i__31914_32282 < count__31913_32281)){
var vec__32087_32283 = cljs.core._nth.call(null,chunk__31912_32280,i__31914_32282);
var source_idx_32284 = cljs.core.nth.call(null,vec__32087_32283,(0),null);
var vec__32090_32285 = cljs.core.nth.call(null,vec__32087_32283,(1),null);
var __32286 = cljs.core.nth.call(null,vec__32090_32285,(0),null);
var lines_32287__$1 = cljs.core.nth.call(null,vec__32090_32285,(1),null);
var seq__32093_32288 = cljs.core.seq.call(null,lines_32287__$1);
var chunk__32094_32289 = null;
var count__32095_32290 = (0);
var i__32096_32291 = (0);
while(true){
if((i__32096_32291 < count__32095_32290)){
var vec__32135_32292 = cljs.core._nth.call(null,chunk__32094_32289,i__32096_32291);
var line_32293 = cljs.core.nth.call(null,vec__32135_32292,(0),null);
var cols_32294 = cljs.core.nth.call(null,vec__32135_32292,(1),null);
var seq__32138_32295 = cljs.core.seq.call(null,cols_32294);
var chunk__32139_32296 = null;
var count__32140_32297 = (0);
var i__32141_32298 = (0);
while(true){
if((i__32141_32298 < count__32140_32297)){
var vec__32148_32299 = cljs.core._nth.call(null,chunk__32139_32296,i__32141_32298);
var col_32300 = cljs.core.nth.call(null,vec__32148_32299,(0),null);
var infos_32301 = cljs.core.nth.call(null,vec__32148_32299,(1),null);
encode_cols.call(null,infos_32301,source_idx_32284,line_32293,col_32300);


var G__32302 = seq__32138_32295;
var G__32303 = chunk__32139_32296;
var G__32304 = count__32140_32297;
var G__32305 = (i__32141_32298 + (1));
seq__32138_32295 = G__32302;
chunk__32139_32296 = G__32303;
count__32140_32297 = G__32304;
i__32141_32298 = G__32305;
continue;
} else {
var temp__5720__auto___32306 = cljs.core.seq.call(null,seq__32138_32295);
if(temp__5720__auto___32306){
var seq__32138_32307__$1 = temp__5720__auto___32306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32138_32307__$1)){
var c__4550__auto___32308 = cljs.core.chunk_first.call(null,seq__32138_32307__$1);
var G__32309 = cljs.core.chunk_rest.call(null,seq__32138_32307__$1);
var G__32310 = c__4550__auto___32308;
var G__32311 = cljs.core.count.call(null,c__4550__auto___32308);
var G__32312 = (0);
seq__32138_32295 = G__32309;
chunk__32139_32296 = G__32310;
count__32140_32297 = G__32311;
i__32141_32298 = G__32312;
continue;
} else {
var vec__32151_32313 = cljs.core.first.call(null,seq__32138_32307__$1);
var col_32314 = cljs.core.nth.call(null,vec__32151_32313,(0),null);
var infos_32315 = cljs.core.nth.call(null,vec__32151_32313,(1),null);
encode_cols.call(null,infos_32315,source_idx_32284,line_32293,col_32314);


var G__32316 = cljs.core.next.call(null,seq__32138_32307__$1);
var G__32317 = null;
var G__32318 = (0);
var G__32319 = (0);
seq__32138_32295 = G__32316;
chunk__32139_32296 = G__32317;
count__32140_32297 = G__32318;
i__32141_32298 = G__32319;
continue;
}
} else {
}
}
break;
}


var G__32320 = seq__32093_32288;
var G__32321 = chunk__32094_32289;
var G__32322 = count__32095_32290;
var G__32323 = (i__32096_32291 + (1));
seq__32093_32288 = G__32320;
chunk__32094_32289 = G__32321;
count__32095_32290 = G__32322;
i__32096_32291 = G__32323;
continue;
} else {
var temp__5720__auto___32324 = cljs.core.seq.call(null,seq__32093_32288);
if(temp__5720__auto___32324){
var seq__32093_32325__$1 = temp__5720__auto___32324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32093_32325__$1)){
var c__4550__auto___32326 = cljs.core.chunk_first.call(null,seq__32093_32325__$1);
var G__32327 = cljs.core.chunk_rest.call(null,seq__32093_32325__$1);
var G__32328 = c__4550__auto___32326;
var G__32329 = cljs.core.count.call(null,c__4550__auto___32326);
var G__32330 = (0);
seq__32093_32288 = G__32327;
chunk__32094_32289 = G__32328;
count__32095_32290 = G__32329;
i__32096_32291 = G__32330;
continue;
} else {
var vec__32154_32331 = cljs.core.first.call(null,seq__32093_32325__$1);
var line_32332 = cljs.core.nth.call(null,vec__32154_32331,(0),null);
var cols_32333 = cljs.core.nth.call(null,vec__32154_32331,(1),null);
var seq__32157_32334 = cljs.core.seq.call(null,cols_32333);
var chunk__32158_32335 = null;
var count__32159_32336 = (0);
var i__32160_32337 = (0);
while(true){
if((i__32160_32337 < count__32159_32336)){
var vec__32167_32338 = cljs.core._nth.call(null,chunk__32158_32335,i__32160_32337);
var col_32339 = cljs.core.nth.call(null,vec__32167_32338,(0),null);
var infos_32340 = cljs.core.nth.call(null,vec__32167_32338,(1),null);
encode_cols.call(null,infos_32340,source_idx_32284,line_32332,col_32339);


var G__32341 = seq__32157_32334;
var G__32342 = chunk__32158_32335;
var G__32343 = count__32159_32336;
var G__32344 = (i__32160_32337 + (1));
seq__32157_32334 = G__32341;
chunk__32158_32335 = G__32342;
count__32159_32336 = G__32343;
i__32160_32337 = G__32344;
continue;
} else {
var temp__5720__auto___32345__$1 = cljs.core.seq.call(null,seq__32157_32334);
if(temp__5720__auto___32345__$1){
var seq__32157_32346__$1 = temp__5720__auto___32345__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32157_32346__$1)){
var c__4550__auto___32347 = cljs.core.chunk_first.call(null,seq__32157_32346__$1);
var G__32348 = cljs.core.chunk_rest.call(null,seq__32157_32346__$1);
var G__32349 = c__4550__auto___32347;
var G__32350 = cljs.core.count.call(null,c__4550__auto___32347);
var G__32351 = (0);
seq__32157_32334 = G__32348;
chunk__32158_32335 = G__32349;
count__32159_32336 = G__32350;
i__32160_32337 = G__32351;
continue;
} else {
var vec__32170_32352 = cljs.core.first.call(null,seq__32157_32346__$1);
var col_32353 = cljs.core.nth.call(null,vec__32170_32352,(0),null);
var infos_32354 = cljs.core.nth.call(null,vec__32170_32352,(1),null);
encode_cols.call(null,infos_32354,source_idx_32284,line_32332,col_32353);


var G__32355 = cljs.core.next.call(null,seq__32157_32346__$1);
var G__32356 = null;
var G__32357 = (0);
var G__32358 = (0);
seq__32157_32334 = G__32355;
chunk__32158_32335 = G__32356;
count__32159_32336 = G__32357;
i__32160_32337 = G__32358;
continue;
}
} else {
}
}
break;
}


var G__32359 = cljs.core.next.call(null,seq__32093_32325__$1);
var G__32360 = null;
var G__32361 = (0);
var G__32362 = (0);
seq__32093_32288 = G__32359;
chunk__32094_32289 = G__32360;
count__32095_32290 = G__32361;
i__32096_32291 = G__32362;
continue;
}
} else {
}
}
break;
}


var G__32363 = seq__31911_32279;
var G__32364 = chunk__31912_32280;
var G__32365 = count__31913_32281;
var G__32366 = (i__31914_32282 + (1));
seq__31911_32279 = G__32363;
chunk__31912_32280 = G__32364;
count__31913_32281 = G__32365;
i__31914_32282 = G__32366;
continue;
} else {
var temp__5720__auto___32367 = cljs.core.seq.call(null,seq__31911_32279);
if(temp__5720__auto___32367){
var seq__31911_32368__$1 = temp__5720__auto___32367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31911_32368__$1)){
var c__4550__auto___32369 = cljs.core.chunk_first.call(null,seq__31911_32368__$1);
var G__32370 = cljs.core.chunk_rest.call(null,seq__31911_32368__$1);
var G__32371 = c__4550__auto___32369;
var G__32372 = cljs.core.count.call(null,c__4550__auto___32369);
var G__32373 = (0);
seq__31911_32279 = G__32370;
chunk__31912_32280 = G__32371;
count__31913_32281 = G__32372;
i__31914_32282 = G__32373;
continue;
} else {
var vec__32173_32374 = cljs.core.first.call(null,seq__31911_32368__$1);
var source_idx_32375 = cljs.core.nth.call(null,vec__32173_32374,(0),null);
var vec__32176_32376 = cljs.core.nth.call(null,vec__32173_32374,(1),null);
var __32377 = cljs.core.nth.call(null,vec__32176_32376,(0),null);
var lines_32378__$1 = cljs.core.nth.call(null,vec__32176_32376,(1),null);
var seq__32179_32379 = cljs.core.seq.call(null,lines_32378__$1);
var chunk__32180_32380 = null;
var count__32181_32381 = (0);
var i__32182_32382 = (0);
while(true){
if((i__32182_32382 < count__32181_32381)){
var vec__32221_32383 = cljs.core._nth.call(null,chunk__32180_32380,i__32182_32382);
var line_32384 = cljs.core.nth.call(null,vec__32221_32383,(0),null);
var cols_32385 = cljs.core.nth.call(null,vec__32221_32383,(1),null);
var seq__32224_32386 = cljs.core.seq.call(null,cols_32385);
var chunk__32225_32387 = null;
var count__32226_32388 = (0);
var i__32227_32389 = (0);
while(true){
if((i__32227_32389 < count__32226_32388)){
var vec__32234_32390 = cljs.core._nth.call(null,chunk__32225_32387,i__32227_32389);
var col_32391 = cljs.core.nth.call(null,vec__32234_32390,(0),null);
var infos_32392 = cljs.core.nth.call(null,vec__32234_32390,(1),null);
encode_cols.call(null,infos_32392,source_idx_32375,line_32384,col_32391);


var G__32393 = seq__32224_32386;
var G__32394 = chunk__32225_32387;
var G__32395 = count__32226_32388;
var G__32396 = (i__32227_32389 + (1));
seq__32224_32386 = G__32393;
chunk__32225_32387 = G__32394;
count__32226_32388 = G__32395;
i__32227_32389 = G__32396;
continue;
} else {
var temp__5720__auto___32397__$1 = cljs.core.seq.call(null,seq__32224_32386);
if(temp__5720__auto___32397__$1){
var seq__32224_32398__$1 = temp__5720__auto___32397__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32224_32398__$1)){
var c__4550__auto___32399 = cljs.core.chunk_first.call(null,seq__32224_32398__$1);
var G__32400 = cljs.core.chunk_rest.call(null,seq__32224_32398__$1);
var G__32401 = c__4550__auto___32399;
var G__32402 = cljs.core.count.call(null,c__4550__auto___32399);
var G__32403 = (0);
seq__32224_32386 = G__32400;
chunk__32225_32387 = G__32401;
count__32226_32388 = G__32402;
i__32227_32389 = G__32403;
continue;
} else {
var vec__32237_32404 = cljs.core.first.call(null,seq__32224_32398__$1);
var col_32405 = cljs.core.nth.call(null,vec__32237_32404,(0),null);
var infos_32406 = cljs.core.nth.call(null,vec__32237_32404,(1),null);
encode_cols.call(null,infos_32406,source_idx_32375,line_32384,col_32405);


var G__32407 = cljs.core.next.call(null,seq__32224_32398__$1);
var G__32408 = null;
var G__32409 = (0);
var G__32410 = (0);
seq__32224_32386 = G__32407;
chunk__32225_32387 = G__32408;
count__32226_32388 = G__32409;
i__32227_32389 = G__32410;
continue;
}
} else {
}
}
break;
}


var G__32411 = seq__32179_32379;
var G__32412 = chunk__32180_32380;
var G__32413 = count__32181_32381;
var G__32414 = (i__32182_32382 + (1));
seq__32179_32379 = G__32411;
chunk__32180_32380 = G__32412;
count__32181_32381 = G__32413;
i__32182_32382 = G__32414;
continue;
} else {
var temp__5720__auto___32415__$1 = cljs.core.seq.call(null,seq__32179_32379);
if(temp__5720__auto___32415__$1){
var seq__32179_32416__$1 = temp__5720__auto___32415__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32179_32416__$1)){
var c__4550__auto___32417 = cljs.core.chunk_first.call(null,seq__32179_32416__$1);
var G__32418 = cljs.core.chunk_rest.call(null,seq__32179_32416__$1);
var G__32419 = c__4550__auto___32417;
var G__32420 = cljs.core.count.call(null,c__4550__auto___32417);
var G__32421 = (0);
seq__32179_32379 = G__32418;
chunk__32180_32380 = G__32419;
count__32181_32381 = G__32420;
i__32182_32382 = G__32421;
continue;
} else {
var vec__32240_32422 = cljs.core.first.call(null,seq__32179_32416__$1);
var line_32423 = cljs.core.nth.call(null,vec__32240_32422,(0),null);
var cols_32424 = cljs.core.nth.call(null,vec__32240_32422,(1),null);
var seq__32243_32425 = cljs.core.seq.call(null,cols_32424);
var chunk__32244_32426 = null;
var count__32245_32427 = (0);
var i__32246_32428 = (0);
while(true){
if((i__32246_32428 < count__32245_32427)){
var vec__32253_32429 = cljs.core._nth.call(null,chunk__32244_32426,i__32246_32428);
var col_32430 = cljs.core.nth.call(null,vec__32253_32429,(0),null);
var infos_32431 = cljs.core.nth.call(null,vec__32253_32429,(1),null);
encode_cols.call(null,infos_32431,source_idx_32375,line_32423,col_32430);


var G__32432 = seq__32243_32425;
var G__32433 = chunk__32244_32426;
var G__32434 = count__32245_32427;
var G__32435 = (i__32246_32428 + (1));
seq__32243_32425 = G__32432;
chunk__32244_32426 = G__32433;
count__32245_32427 = G__32434;
i__32246_32428 = G__32435;
continue;
} else {
var temp__5720__auto___32436__$2 = cljs.core.seq.call(null,seq__32243_32425);
if(temp__5720__auto___32436__$2){
var seq__32243_32437__$1 = temp__5720__auto___32436__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32243_32437__$1)){
var c__4550__auto___32438 = cljs.core.chunk_first.call(null,seq__32243_32437__$1);
var G__32439 = cljs.core.chunk_rest.call(null,seq__32243_32437__$1);
var G__32440 = c__4550__auto___32438;
var G__32441 = cljs.core.count.call(null,c__4550__auto___32438);
var G__32442 = (0);
seq__32243_32425 = G__32439;
chunk__32244_32426 = G__32440;
count__32245_32427 = G__32441;
i__32246_32428 = G__32442;
continue;
} else {
var vec__32256_32443 = cljs.core.first.call(null,seq__32243_32437__$1);
var col_32444 = cljs.core.nth.call(null,vec__32256_32443,(0),null);
var infos_32445 = cljs.core.nth.call(null,vec__32256_32443,(1),null);
encode_cols.call(null,infos_32445,source_idx_32375,line_32423,col_32444);


var G__32446 = cljs.core.next.call(null,seq__32243_32437__$1);
var G__32447 = null;
var G__32448 = (0);
var G__32449 = (0);
seq__32243_32425 = G__32446;
chunk__32244_32426 = G__32447;
count__32245_32427 = G__32448;
i__32246_32428 = G__32449;
continue;
}
} else {
}
}
break;
}


var G__32450 = cljs.core.next.call(null,seq__32179_32416__$1);
var G__32451 = null;
var G__32452 = (0);
var G__32453 = (0);
seq__32179_32379 = G__32450;
chunk__32180_32380 = G__32451;
count__32181_32381 = G__32452;
i__32182_32382 = G__32453;
continue;
}
} else {
}
}
break;
}


var G__32454 = cljs.core.next.call(null,seq__31911_32368__$1);
var G__32455 = null;
var G__32456 = (0);
var G__32457 = (0);
seq__31911_32279 = G__32454;
chunk__31912_32280 = G__32455;
count__31913_32281 = G__32456;
i__31914_32282 = G__32457;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__32259 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__31904_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31904_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__31905_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__31905_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__31906_SHARP_){
return clojure.string.join.call(null,",",p1__31906_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__32260 = G__32259;
goog.object.set(G__32260,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__32260;
} else {
return G__32259;
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
var vec__32458 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__32458,(0),null);
var col_map = cljs.core.nth.call(null,vec__32458,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__32461 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__32461,(0),null);
var infos = cljs.core.nth.call(null,vec__32461,(1),null);
var G__32467 = cljs.core.next.call(null,col_map_seq);
var G__32468 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__32461,col,infos,vec__32458,line,col_map){
return (function (v,p__32464){
var map__32465 = p__32464;
var map__32465__$1 = (((((!((map__32465 == null))))?(((((map__32465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32465):map__32465);
var gline = cljs.core.get.call(null,map__32465__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__32465__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__32461,col,infos,vec__32458,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__32467;
new_cols = G__32468;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__32469 = cljs.core.next.call(null,line_map_seq);
var G__32470 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__32469;
new_lines = G__32470;
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
var seq__32471_32743 = cljs.core.seq.call(null,reverse_map);
var chunk__32472_32744 = null;
var count__32473_32745 = (0);
var i__32474_32746 = (0);
while(true){
if((i__32474_32746 < count__32473_32745)){
var vec__32609_32747 = cljs.core._nth.call(null,chunk__32472_32744,i__32474_32746);
var line_32748 = cljs.core.nth.call(null,vec__32609_32747,(0),null);
var columns_32749 = cljs.core.nth.call(null,vec__32609_32747,(1),null);
var seq__32612_32750 = cljs.core.seq.call(null,columns_32749);
var chunk__32613_32751 = null;
var count__32614_32752 = (0);
var i__32615_32753 = (0);
while(true){
if((i__32615_32753 < count__32614_32752)){
var vec__32646_32754 = cljs.core._nth.call(null,chunk__32613_32751,i__32615_32753);
var column_32755 = cljs.core.nth.call(null,vec__32646_32754,(0),null);
var column_info_32756 = cljs.core.nth.call(null,vec__32646_32754,(1),null);
var seq__32649_32757 = cljs.core.seq.call(null,column_info_32756);
var chunk__32650_32758 = null;
var count__32651_32759 = (0);
var i__32652_32760 = (0);
while(true){
if((i__32652_32760 < count__32651_32759)){
var map__32657_32761 = cljs.core._nth.call(null,chunk__32650_32758,i__32652_32760);
var map__32657_32762__$1 = (((((!((map__32657_32761 == null))))?(((((map__32657_32761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32657_32761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32657_32761):map__32657_32761);
var gline_32763 = cljs.core.get.call(null,map__32657_32762__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32764 = cljs.core.get.call(null,map__32657_32762__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32765 = cljs.core.get.call(null,map__32657_32762__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32763], null),cljs.core.fnil.call(null,((function (seq__32649_32757,chunk__32650_32758,count__32651_32759,i__32652_32760,seq__32612_32750,chunk__32613_32751,count__32614_32752,i__32615_32753,seq__32471_32743,chunk__32472_32744,count__32473_32745,i__32474_32746,map__32657_32761,map__32657_32762__$1,gline_32763,gcol_32764,name_32765,vec__32646_32754,column_32755,column_info_32756,vec__32609_32747,line_32748,columns_32749,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32764], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32748,new cljs.core.Keyword(null,"col","col",-1959363084),column_32755,new cljs.core.Keyword(null,"name","name",1843675177),name_32765], null));
});})(seq__32649_32757,chunk__32650_32758,count__32651_32759,i__32652_32760,seq__32612_32750,chunk__32613_32751,count__32614_32752,i__32615_32753,seq__32471_32743,chunk__32472_32744,count__32473_32745,i__32474_32746,map__32657_32761,map__32657_32762__$1,gline_32763,gcol_32764,name_32765,vec__32646_32754,column_32755,column_info_32756,vec__32609_32747,line_32748,columns_32749,inverted))
,cljs.core.sorted_map.call(null)));


var G__32766 = seq__32649_32757;
var G__32767 = chunk__32650_32758;
var G__32768 = count__32651_32759;
var G__32769 = (i__32652_32760 + (1));
seq__32649_32757 = G__32766;
chunk__32650_32758 = G__32767;
count__32651_32759 = G__32768;
i__32652_32760 = G__32769;
continue;
} else {
var temp__5720__auto___32770 = cljs.core.seq.call(null,seq__32649_32757);
if(temp__5720__auto___32770){
var seq__32649_32771__$1 = temp__5720__auto___32770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32649_32771__$1)){
var c__4550__auto___32772 = cljs.core.chunk_first.call(null,seq__32649_32771__$1);
var G__32773 = cljs.core.chunk_rest.call(null,seq__32649_32771__$1);
var G__32774 = c__4550__auto___32772;
var G__32775 = cljs.core.count.call(null,c__4550__auto___32772);
var G__32776 = (0);
seq__32649_32757 = G__32773;
chunk__32650_32758 = G__32774;
count__32651_32759 = G__32775;
i__32652_32760 = G__32776;
continue;
} else {
var map__32659_32777 = cljs.core.first.call(null,seq__32649_32771__$1);
var map__32659_32778__$1 = (((((!((map__32659_32777 == null))))?(((((map__32659_32777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32659_32777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32659_32777):map__32659_32777);
var gline_32779 = cljs.core.get.call(null,map__32659_32778__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32780 = cljs.core.get.call(null,map__32659_32778__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32781 = cljs.core.get.call(null,map__32659_32778__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32779], null),cljs.core.fnil.call(null,((function (seq__32649_32757,chunk__32650_32758,count__32651_32759,i__32652_32760,seq__32612_32750,chunk__32613_32751,count__32614_32752,i__32615_32753,seq__32471_32743,chunk__32472_32744,count__32473_32745,i__32474_32746,map__32659_32777,map__32659_32778__$1,gline_32779,gcol_32780,name_32781,seq__32649_32771__$1,temp__5720__auto___32770,vec__32646_32754,column_32755,column_info_32756,vec__32609_32747,line_32748,columns_32749,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32780], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32748,new cljs.core.Keyword(null,"col","col",-1959363084),column_32755,new cljs.core.Keyword(null,"name","name",1843675177),name_32781], null));
});})(seq__32649_32757,chunk__32650_32758,count__32651_32759,i__32652_32760,seq__32612_32750,chunk__32613_32751,count__32614_32752,i__32615_32753,seq__32471_32743,chunk__32472_32744,count__32473_32745,i__32474_32746,map__32659_32777,map__32659_32778__$1,gline_32779,gcol_32780,name_32781,seq__32649_32771__$1,temp__5720__auto___32770,vec__32646_32754,column_32755,column_info_32756,vec__32609_32747,line_32748,columns_32749,inverted))
,cljs.core.sorted_map.call(null)));


var G__32782 = cljs.core.next.call(null,seq__32649_32771__$1);
var G__32783 = null;
var G__32784 = (0);
var G__32785 = (0);
seq__32649_32757 = G__32782;
chunk__32650_32758 = G__32783;
count__32651_32759 = G__32784;
i__32652_32760 = G__32785;
continue;
}
} else {
}
}
break;
}


var G__32786 = seq__32612_32750;
var G__32787 = chunk__32613_32751;
var G__32788 = count__32614_32752;
var G__32789 = (i__32615_32753 + (1));
seq__32612_32750 = G__32786;
chunk__32613_32751 = G__32787;
count__32614_32752 = G__32788;
i__32615_32753 = G__32789;
continue;
} else {
var temp__5720__auto___32790 = cljs.core.seq.call(null,seq__32612_32750);
if(temp__5720__auto___32790){
var seq__32612_32791__$1 = temp__5720__auto___32790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32612_32791__$1)){
var c__4550__auto___32792 = cljs.core.chunk_first.call(null,seq__32612_32791__$1);
var G__32793 = cljs.core.chunk_rest.call(null,seq__32612_32791__$1);
var G__32794 = c__4550__auto___32792;
var G__32795 = cljs.core.count.call(null,c__4550__auto___32792);
var G__32796 = (0);
seq__32612_32750 = G__32793;
chunk__32613_32751 = G__32794;
count__32614_32752 = G__32795;
i__32615_32753 = G__32796;
continue;
} else {
var vec__32661_32797 = cljs.core.first.call(null,seq__32612_32791__$1);
var column_32798 = cljs.core.nth.call(null,vec__32661_32797,(0),null);
var column_info_32799 = cljs.core.nth.call(null,vec__32661_32797,(1),null);
var seq__32664_32800 = cljs.core.seq.call(null,column_info_32799);
var chunk__32665_32801 = null;
var count__32666_32802 = (0);
var i__32667_32803 = (0);
while(true){
if((i__32667_32803 < count__32666_32802)){
var map__32672_32804 = cljs.core._nth.call(null,chunk__32665_32801,i__32667_32803);
var map__32672_32805__$1 = (((((!((map__32672_32804 == null))))?(((((map__32672_32804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32672_32804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32672_32804):map__32672_32804);
var gline_32806 = cljs.core.get.call(null,map__32672_32805__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32807 = cljs.core.get.call(null,map__32672_32805__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32808 = cljs.core.get.call(null,map__32672_32805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32806], null),cljs.core.fnil.call(null,((function (seq__32664_32800,chunk__32665_32801,count__32666_32802,i__32667_32803,seq__32612_32750,chunk__32613_32751,count__32614_32752,i__32615_32753,seq__32471_32743,chunk__32472_32744,count__32473_32745,i__32474_32746,map__32672_32804,map__32672_32805__$1,gline_32806,gcol_32807,name_32808,vec__32661_32797,column_32798,column_info_32799,seq__32612_32791__$1,temp__5720__auto___32790,vec__32609_32747,line_32748,columns_32749,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32807], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32748,new cljs.core.Keyword(null,"col","col",-1959363084),column_32798,new cljs.core.Keyword(null,"name","name",1843675177),name_32808], null));
});})(seq__32664_32800,chunk__32665_32801,count__32666_32802,i__32667_32803,seq__32612_32750,chunk__32613_32751,count__32614_32752,i__32615_32753,seq__32471_32743,chunk__32472_32744,count__32473_32745,i__32474_32746,map__32672_32804,map__32672_32805__$1,gline_32806,gcol_32807,name_32808,vec__32661_32797,column_32798,column_info_32799,seq__32612_32791__$1,temp__5720__auto___32790,vec__32609_32747,line_32748,columns_32749,inverted))
,cljs.core.sorted_map.call(null)));


var G__32809 = seq__32664_32800;
var G__32810 = chunk__32665_32801;
var G__32811 = count__32666_32802;
var G__32812 = (i__32667_32803 + (1));
seq__32664_32800 = G__32809;
chunk__32665_32801 = G__32810;
count__32666_32802 = G__32811;
i__32667_32803 = G__32812;
continue;
} else {
var temp__5720__auto___32813__$1 = cljs.core.seq.call(null,seq__32664_32800);
if(temp__5720__auto___32813__$1){
var seq__32664_32814__$1 = temp__5720__auto___32813__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32664_32814__$1)){
var c__4550__auto___32815 = cljs.core.chunk_first.call(null,seq__32664_32814__$1);
var G__32816 = cljs.core.chunk_rest.call(null,seq__32664_32814__$1);
var G__32817 = c__4550__auto___32815;
var G__32818 = cljs.core.count.call(null,c__4550__auto___32815);
var G__32819 = (0);
seq__32664_32800 = G__32816;
chunk__32665_32801 = G__32817;
count__32666_32802 = G__32818;
i__32667_32803 = G__32819;
continue;
} else {
var map__32674_32820 = cljs.core.first.call(null,seq__32664_32814__$1);
var map__32674_32821__$1 = (((((!((map__32674_32820 == null))))?(((((map__32674_32820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32674_32820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32674_32820):map__32674_32820);
var gline_32822 = cljs.core.get.call(null,map__32674_32821__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32823 = cljs.core.get.call(null,map__32674_32821__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32824 = cljs.core.get.call(null,map__32674_32821__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32822], null),cljs.core.fnil.call(null,((function (seq__32664_32800,chunk__32665_32801,count__32666_32802,i__32667_32803,seq__32612_32750,chunk__32613_32751,count__32614_32752,i__32615_32753,seq__32471_32743,chunk__32472_32744,count__32473_32745,i__32474_32746,map__32674_32820,map__32674_32821__$1,gline_32822,gcol_32823,name_32824,seq__32664_32814__$1,temp__5720__auto___32813__$1,vec__32661_32797,column_32798,column_info_32799,seq__32612_32791__$1,temp__5720__auto___32790,vec__32609_32747,line_32748,columns_32749,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32823], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32748,new cljs.core.Keyword(null,"col","col",-1959363084),column_32798,new cljs.core.Keyword(null,"name","name",1843675177),name_32824], null));
});})(seq__32664_32800,chunk__32665_32801,count__32666_32802,i__32667_32803,seq__32612_32750,chunk__32613_32751,count__32614_32752,i__32615_32753,seq__32471_32743,chunk__32472_32744,count__32473_32745,i__32474_32746,map__32674_32820,map__32674_32821__$1,gline_32822,gcol_32823,name_32824,seq__32664_32814__$1,temp__5720__auto___32813__$1,vec__32661_32797,column_32798,column_info_32799,seq__32612_32791__$1,temp__5720__auto___32790,vec__32609_32747,line_32748,columns_32749,inverted))
,cljs.core.sorted_map.call(null)));


var G__32825 = cljs.core.next.call(null,seq__32664_32814__$1);
var G__32826 = null;
var G__32827 = (0);
var G__32828 = (0);
seq__32664_32800 = G__32825;
chunk__32665_32801 = G__32826;
count__32666_32802 = G__32827;
i__32667_32803 = G__32828;
continue;
}
} else {
}
}
break;
}


var G__32829 = cljs.core.next.call(null,seq__32612_32791__$1);
var G__32830 = null;
var G__32831 = (0);
var G__32832 = (0);
seq__32612_32750 = G__32829;
chunk__32613_32751 = G__32830;
count__32614_32752 = G__32831;
i__32615_32753 = G__32832;
continue;
}
} else {
}
}
break;
}


var G__32833 = seq__32471_32743;
var G__32834 = chunk__32472_32744;
var G__32835 = count__32473_32745;
var G__32836 = (i__32474_32746 + (1));
seq__32471_32743 = G__32833;
chunk__32472_32744 = G__32834;
count__32473_32745 = G__32835;
i__32474_32746 = G__32836;
continue;
} else {
var temp__5720__auto___32837 = cljs.core.seq.call(null,seq__32471_32743);
if(temp__5720__auto___32837){
var seq__32471_32838__$1 = temp__5720__auto___32837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32471_32838__$1)){
var c__4550__auto___32839 = cljs.core.chunk_first.call(null,seq__32471_32838__$1);
var G__32840 = cljs.core.chunk_rest.call(null,seq__32471_32838__$1);
var G__32841 = c__4550__auto___32839;
var G__32842 = cljs.core.count.call(null,c__4550__auto___32839);
var G__32843 = (0);
seq__32471_32743 = G__32840;
chunk__32472_32744 = G__32841;
count__32473_32745 = G__32842;
i__32474_32746 = G__32843;
continue;
} else {
var vec__32676_32844 = cljs.core.first.call(null,seq__32471_32838__$1);
var line_32845 = cljs.core.nth.call(null,vec__32676_32844,(0),null);
var columns_32846 = cljs.core.nth.call(null,vec__32676_32844,(1),null);
var seq__32679_32847 = cljs.core.seq.call(null,columns_32846);
var chunk__32680_32848 = null;
var count__32681_32849 = (0);
var i__32682_32850 = (0);
while(true){
if((i__32682_32850 < count__32681_32849)){
var vec__32713_32851 = cljs.core._nth.call(null,chunk__32680_32848,i__32682_32850);
var column_32852 = cljs.core.nth.call(null,vec__32713_32851,(0),null);
var column_info_32853 = cljs.core.nth.call(null,vec__32713_32851,(1),null);
var seq__32716_32854 = cljs.core.seq.call(null,column_info_32853);
var chunk__32717_32855 = null;
var count__32718_32856 = (0);
var i__32719_32857 = (0);
while(true){
if((i__32719_32857 < count__32718_32856)){
var map__32724_32858 = cljs.core._nth.call(null,chunk__32717_32855,i__32719_32857);
var map__32724_32859__$1 = (((((!((map__32724_32858 == null))))?(((((map__32724_32858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32724_32858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32724_32858):map__32724_32858);
var gline_32860 = cljs.core.get.call(null,map__32724_32859__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32861 = cljs.core.get.call(null,map__32724_32859__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32862 = cljs.core.get.call(null,map__32724_32859__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32860], null),cljs.core.fnil.call(null,((function (seq__32716_32854,chunk__32717_32855,count__32718_32856,i__32719_32857,seq__32679_32847,chunk__32680_32848,count__32681_32849,i__32682_32850,seq__32471_32743,chunk__32472_32744,count__32473_32745,i__32474_32746,map__32724_32858,map__32724_32859__$1,gline_32860,gcol_32861,name_32862,vec__32713_32851,column_32852,column_info_32853,vec__32676_32844,line_32845,columns_32846,seq__32471_32838__$1,temp__5720__auto___32837,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32861], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32845,new cljs.core.Keyword(null,"col","col",-1959363084),column_32852,new cljs.core.Keyword(null,"name","name",1843675177),name_32862], null));
});})(seq__32716_32854,chunk__32717_32855,count__32718_32856,i__32719_32857,seq__32679_32847,chunk__32680_32848,count__32681_32849,i__32682_32850,seq__32471_32743,chunk__32472_32744,count__32473_32745,i__32474_32746,map__32724_32858,map__32724_32859__$1,gline_32860,gcol_32861,name_32862,vec__32713_32851,column_32852,column_info_32853,vec__32676_32844,line_32845,columns_32846,seq__32471_32838__$1,temp__5720__auto___32837,inverted))
,cljs.core.sorted_map.call(null)));


var G__32863 = seq__32716_32854;
var G__32864 = chunk__32717_32855;
var G__32865 = count__32718_32856;
var G__32866 = (i__32719_32857 + (1));
seq__32716_32854 = G__32863;
chunk__32717_32855 = G__32864;
count__32718_32856 = G__32865;
i__32719_32857 = G__32866;
continue;
} else {
var temp__5720__auto___32867__$1 = cljs.core.seq.call(null,seq__32716_32854);
if(temp__5720__auto___32867__$1){
var seq__32716_32868__$1 = temp__5720__auto___32867__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32716_32868__$1)){
var c__4550__auto___32869 = cljs.core.chunk_first.call(null,seq__32716_32868__$1);
var G__32870 = cljs.core.chunk_rest.call(null,seq__32716_32868__$1);
var G__32871 = c__4550__auto___32869;
var G__32872 = cljs.core.count.call(null,c__4550__auto___32869);
var G__32873 = (0);
seq__32716_32854 = G__32870;
chunk__32717_32855 = G__32871;
count__32718_32856 = G__32872;
i__32719_32857 = G__32873;
continue;
} else {
var map__32726_32874 = cljs.core.first.call(null,seq__32716_32868__$1);
var map__32726_32875__$1 = (((((!((map__32726_32874 == null))))?(((((map__32726_32874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32726_32874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32726_32874):map__32726_32874);
var gline_32876 = cljs.core.get.call(null,map__32726_32875__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32877 = cljs.core.get.call(null,map__32726_32875__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32878 = cljs.core.get.call(null,map__32726_32875__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32876], null),cljs.core.fnil.call(null,((function (seq__32716_32854,chunk__32717_32855,count__32718_32856,i__32719_32857,seq__32679_32847,chunk__32680_32848,count__32681_32849,i__32682_32850,seq__32471_32743,chunk__32472_32744,count__32473_32745,i__32474_32746,map__32726_32874,map__32726_32875__$1,gline_32876,gcol_32877,name_32878,seq__32716_32868__$1,temp__5720__auto___32867__$1,vec__32713_32851,column_32852,column_info_32853,vec__32676_32844,line_32845,columns_32846,seq__32471_32838__$1,temp__5720__auto___32837,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32877], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32845,new cljs.core.Keyword(null,"col","col",-1959363084),column_32852,new cljs.core.Keyword(null,"name","name",1843675177),name_32878], null));
});})(seq__32716_32854,chunk__32717_32855,count__32718_32856,i__32719_32857,seq__32679_32847,chunk__32680_32848,count__32681_32849,i__32682_32850,seq__32471_32743,chunk__32472_32744,count__32473_32745,i__32474_32746,map__32726_32874,map__32726_32875__$1,gline_32876,gcol_32877,name_32878,seq__32716_32868__$1,temp__5720__auto___32867__$1,vec__32713_32851,column_32852,column_info_32853,vec__32676_32844,line_32845,columns_32846,seq__32471_32838__$1,temp__5720__auto___32837,inverted))
,cljs.core.sorted_map.call(null)));


var G__32879 = cljs.core.next.call(null,seq__32716_32868__$1);
var G__32880 = null;
var G__32881 = (0);
var G__32882 = (0);
seq__32716_32854 = G__32879;
chunk__32717_32855 = G__32880;
count__32718_32856 = G__32881;
i__32719_32857 = G__32882;
continue;
}
} else {
}
}
break;
}


var G__32883 = seq__32679_32847;
var G__32884 = chunk__32680_32848;
var G__32885 = count__32681_32849;
var G__32886 = (i__32682_32850 + (1));
seq__32679_32847 = G__32883;
chunk__32680_32848 = G__32884;
count__32681_32849 = G__32885;
i__32682_32850 = G__32886;
continue;
} else {
var temp__5720__auto___32887__$1 = cljs.core.seq.call(null,seq__32679_32847);
if(temp__5720__auto___32887__$1){
var seq__32679_32888__$1 = temp__5720__auto___32887__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32679_32888__$1)){
var c__4550__auto___32889 = cljs.core.chunk_first.call(null,seq__32679_32888__$1);
var G__32890 = cljs.core.chunk_rest.call(null,seq__32679_32888__$1);
var G__32891 = c__4550__auto___32889;
var G__32892 = cljs.core.count.call(null,c__4550__auto___32889);
var G__32893 = (0);
seq__32679_32847 = G__32890;
chunk__32680_32848 = G__32891;
count__32681_32849 = G__32892;
i__32682_32850 = G__32893;
continue;
} else {
var vec__32728_32894 = cljs.core.first.call(null,seq__32679_32888__$1);
var column_32895 = cljs.core.nth.call(null,vec__32728_32894,(0),null);
var column_info_32896 = cljs.core.nth.call(null,vec__32728_32894,(1),null);
var seq__32731_32897 = cljs.core.seq.call(null,column_info_32896);
var chunk__32732_32898 = null;
var count__32733_32899 = (0);
var i__32734_32900 = (0);
while(true){
if((i__32734_32900 < count__32733_32899)){
var map__32739_32901 = cljs.core._nth.call(null,chunk__32732_32898,i__32734_32900);
var map__32739_32902__$1 = (((((!((map__32739_32901 == null))))?(((((map__32739_32901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32739_32901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32739_32901):map__32739_32901);
var gline_32903 = cljs.core.get.call(null,map__32739_32902__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32904 = cljs.core.get.call(null,map__32739_32902__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32905 = cljs.core.get.call(null,map__32739_32902__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32903], null),cljs.core.fnil.call(null,((function (seq__32731_32897,chunk__32732_32898,count__32733_32899,i__32734_32900,seq__32679_32847,chunk__32680_32848,count__32681_32849,i__32682_32850,seq__32471_32743,chunk__32472_32744,count__32473_32745,i__32474_32746,map__32739_32901,map__32739_32902__$1,gline_32903,gcol_32904,name_32905,vec__32728_32894,column_32895,column_info_32896,seq__32679_32888__$1,temp__5720__auto___32887__$1,vec__32676_32844,line_32845,columns_32846,seq__32471_32838__$1,temp__5720__auto___32837,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32904], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32845,new cljs.core.Keyword(null,"col","col",-1959363084),column_32895,new cljs.core.Keyword(null,"name","name",1843675177),name_32905], null));
});})(seq__32731_32897,chunk__32732_32898,count__32733_32899,i__32734_32900,seq__32679_32847,chunk__32680_32848,count__32681_32849,i__32682_32850,seq__32471_32743,chunk__32472_32744,count__32473_32745,i__32474_32746,map__32739_32901,map__32739_32902__$1,gline_32903,gcol_32904,name_32905,vec__32728_32894,column_32895,column_info_32896,seq__32679_32888__$1,temp__5720__auto___32887__$1,vec__32676_32844,line_32845,columns_32846,seq__32471_32838__$1,temp__5720__auto___32837,inverted))
,cljs.core.sorted_map.call(null)));


var G__32906 = seq__32731_32897;
var G__32907 = chunk__32732_32898;
var G__32908 = count__32733_32899;
var G__32909 = (i__32734_32900 + (1));
seq__32731_32897 = G__32906;
chunk__32732_32898 = G__32907;
count__32733_32899 = G__32908;
i__32734_32900 = G__32909;
continue;
} else {
var temp__5720__auto___32910__$2 = cljs.core.seq.call(null,seq__32731_32897);
if(temp__5720__auto___32910__$2){
var seq__32731_32911__$1 = temp__5720__auto___32910__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32731_32911__$1)){
var c__4550__auto___32912 = cljs.core.chunk_first.call(null,seq__32731_32911__$1);
var G__32913 = cljs.core.chunk_rest.call(null,seq__32731_32911__$1);
var G__32914 = c__4550__auto___32912;
var G__32915 = cljs.core.count.call(null,c__4550__auto___32912);
var G__32916 = (0);
seq__32731_32897 = G__32913;
chunk__32732_32898 = G__32914;
count__32733_32899 = G__32915;
i__32734_32900 = G__32916;
continue;
} else {
var map__32741_32917 = cljs.core.first.call(null,seq__32731_32911__$1);
var map__32741_32918__$1 = (((((!((map__32741_32917 == null))))?(((((map__32741_32917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32741_32917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32741_32917):map__32741_32917);
var gline_32919 = cljs.core.get.call(null,map__32741_32918__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32920 = cljs.core.get.call(null,map__32741_32918__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32921 = cljs.core.get.call(null,map__32741_32918__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32919], null),cljs.core.fnil.call(null,((function (seq__32731_32897,chunk__32732_32898,count__32733_32899,i__32734_32900,seq__32679_32847,chunk__32680_32848,count__32681_32849,i__32682_32850,seq__32471_32743,chunk__32472_32744,count__32473_32745,i__32474_32746,map__32741_32917,map__32741_32918__$1,gline_32919,gcol_32920,name_32921,seq__32731_32911__$1,temp__5720__auto___32910__$2,vec__32728_32894,column_32895,column_info_32896,seq__32679_32888__$1,temp__5720__auto___32887__$1,vec__32676_32844,line_32845,columns_32846,seq__32471_32838__$1,temp__5720__auto___32837,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32920], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_32845,new cljs.core.Keyword(null,"col","col",-1959363084),column_32895,new cljs.core.Keyword(null,"name","name",1843675177),name_32921], null));
});})(seq__32731_32897,chunk__32732_32898,count__32733_32899,i__32734_32900,seq__32679_32847,chunk__32680_32848,count__32681_32849,i__32682_32850,seq__32471_32743,chunk__32472_32744,count__32473_32745,i__32474_32746,map__32741_32917,map__32741_32918__$1,gline_32919,gcol_32920,name_32921,seq__32731_32911__$1,temp__5720__auto___32910__$2,vec__32728_32894,column_32895,column_info_32896,seq__32679_32888__$1,temp__5720__auto___32887__$1,vec__32676_32844,line_32845,columns_32846,seq__32471_32838__$1,temp__5720__auto___32837,inverted))
,cljs.core.sorted_map.call(null)));


var G__32922 = cljs.core.next.call(null,seq__32731_32911__$1);
var G__32923 = null;
var G__32924 = (0);
var G__32925 = (0);
seq__32731_32897 = G__32922;
chunk__32732_32898 = G__32923;
count__32733_32899 = G__32924;
i__32734_32900 = G__32925;
continue;
}
} else {
}
}
break;
}


var G__32926 = cljs.core.next.call(null,seq__32679_32888__$1);
var G__32927 = null;
var G__32928 = (0);
var G__32929 = (0);
seq__32679_32847 = G__32926;
chunk__32680_32848 = G__32927;
count__32681_32849 = G__32928;
i__32682_32850 = G__32929;
continue;
}
} else {
}
}
break;
}


var G__32930 = cljs.core.next.call(null,seq__32471_32838__$1);
var G__32931 = null;
var G__32932 = (0);
var G__32933 = (0);
seq__32471_32743 = G__32930;
chunk__32472_32744 = G__32931;
count__32473_32745 = G__32932;
i__32474_32746 = G__32933;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1600808346472
