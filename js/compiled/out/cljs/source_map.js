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
return cljs.core.reduce.call(null,(function (m,p__8145){
var vec__8146 = p__8145;
var i = cljs.core.nth.call(null,vec__8146,(0),null);
var v = cljs.core.nth.call(null,vec__8146,(1),null);
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
var vec__8149 = seg;
var gcol = cljs.core.nth.call(null,vec__8149,(0),null);
var source = cljs.core.nth.call(null,vec__8149,(1),null);
var line = cljs.core.nth.call(null,vec__8149,(2),null);
var col = cljs.core.nth.call(null,vec__8149,(3),null);
var name = cljs.core.nth.call(null,vec__8149,(4),null);
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
var vec__8152 = seg;
var gcol = cljs.core.nth.call(null,vec__8152,(0),null);
var source = cljs.core.nth.call(null,vec__8152,(1),null);
var line = cljs.core.nth.call(null,vec__8152,(2),null);
var col = cljs.core.nth.call(null,vec__8152,(3),null);
var name = cljs.core.nth.call(null,vec__8152,(4),null);
var vec__8155 = relseg;
var rgcol = cljs.core.nth.call(null,vec__8155,(0),null);
var rsource = cljs.core.nth.call(null,vec__8155,(1),null);
var rline = cljs.core.nth.call(null,vec__8155,(2),null);
var rcol = cljs.core.nth.call(null,vec__8155,(3),null);
var rname = cljs.core.nth.call(null,vec__8155,(4),null);
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
var map__8158 = segmap;
var map__8158__$1 = (((((!((map__8158 == null))))?(((((map__8158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8158):map__8158);
var gcol = cljs.core.get.call(null,map__8158__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__8158__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__8158__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__8158__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__8158__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__8158,map__8158__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__8158,map__8158__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__8158,map__8158__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__8158,map__8158__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__8158,map__8158__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__8158,map__8158__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__8161 = arguments.length;
switch (G__8161) {
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
var vec__8165 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__8169 = cljs.core.next.call(null,segs__$1);
var G__8170 = nrelseg;
var G__8171 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__8169;
relseg__$1 = G__8170;
result__$1 = G__8171;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__8165,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__8165,(1),null);
var G__8172 = (gline + (1));
var G__8173 = cljs.core.next.call(null,lines__$1);
var G__8174 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__8175 = result__$1;
gline = G__8172;
lines__$1 = G__8173;
relseg = G__8174;
result = G__8175;
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
var map__8177 = segmap;
var map__8177__$1 = (((((!((map__8177 == null))))?(((((map__8177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8177):map__8177);
var gcol = cljs.core.get.call(null,map__8177__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__8177__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__8177__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__8177__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__8177__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__8177,map__8177__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__8177,map__8177__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__8176_SHARP_){
return cljs.core.conj.call(null,p1__8176_SHARP_,d__$1);
});})(map__8177,map__8177__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__8177,map__8177__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__8180 = arguments.length;
switch (G__8180) {
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
var vec__8184 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__8188 = cljs.core.next.call(null,segs__$1);
var G__8189 = nrelseg;
var G__8190 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__8188;
relseg__$1 = G__8189;
result__$1 = G__8190;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__8184,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__8184,(1),null);
var G__8191 = (gline + (1));
var G__8192 = cljs.core.next.call(null,lines__$1);
var G__8193 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__8194 = result__$1;
gline = G__8191;
lines__$1 = G__8192;
relseg = G__8193;
result = G__8194;
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
return (function (p__8195){
var vec__8196 = p__8195;
var _ = cljs.core.nth.call(null,vec__8196,(0),null);
var source = cljs.core.nth.call(null,vec__8196,(1),null);
var line = cljs.core.nth.call(null,vec__8196,(2),null);
var col = cljs.core.nth.call(null,vec__8196,(3),null);
var name = cljs.core.nth.call(null,vec__8196,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__8199){
var vec__8200 = p__8199;
var gcol = cljs.core.nth.call(null,vec__8200,(0),null);
var sidx = cljs.core.nth.call(null,vec__8200,(1),null);
var line = cljs.core.nth.call(null,vec__8200,(2),null);
var col = cljs.core.nth.call(null,vec__8200,(3),null);
var name = cljs.core.nth.call(null,vec__8200,(4),null);
var seg = vec__8200;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__8200,gcol,sidx,line,col,name,seg,relseg){
return (function (p__8203){
var vec__8204 = p__8203;
var _ = cljs.core.nth.call(null,vec__8204,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__8204,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__8204,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__8204,(3),null);
var lname = cljs.core.nth.call(null,vec__8204,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4131__auto__ = name;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__8200,gcol,sidx,line,col,name,seg,relseg))
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
var seq__8210 = cljs.core.seq.call(null,infos);
var chunk__8211 = null;
var count__8212 = (0);
var i__8213 = (0);
while(true){
if((i__8213 < count__8212)){
var info = cljs.core._nth.call(null,chunk__8211,i__8213);
var segv_8564 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_8565 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_8566 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_8565 > (lc_8566 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__8210,chunk__8211,count__8212,i__8213,segv_8564,gline_8565,lc_8566,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_8565 - (lc_8566 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_8564], null));
});})(seq__8210,chunk__8211,count__8212,i__8213,segv_8564,gline_8565,lc_8566,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__8210,chunk__8211,count__8212,i__8213,segv_8564,gline_8565,lc_8566,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8565], null),cljs.core.conj,segv_8564);
});})(seq__8210,chunk__8211,count__8212,i__8213,segv_8564,gline_8565,lc_8566,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__8567 = seq__8210;
var G__8568 = chunk__8211;
var G__8569 = count__8212;
var G__8570 = (i__8213 + (1));
seq__8210 = G__8567;
chunk__8211 = G__8568;
count__8212 = G__8569;
i__8213 = G__8570;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__8210);
if(temp__5720__auto__){
var seq__8210__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8210__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__8210__$1);
var G__8571 = cljs.core.chunk_rest.call(null,seq__8210__$1);
var G__8572 = c__4550__auto__;
var G__8573 = cljs.core.count.call(null,c__4550__auto__);
var G__8574 = (0);
seq__8210 = G__8571;
chunk__8211 = G__8572;
count__8212 = G__8573;
i__8213 = G__8574;
continue;
} else {
var info = cljs.core.first.call(null,seq__8210__$1);
var segv_8575 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_8576 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_8577 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_8576 > (lc_8577 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__8210,chunk__8211,count__8212,i__8213,segv_8575,gline_8576,lc_8577,info,seq__8210__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_8576 - (lc_8577 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_8575], null));
});})(seq__8210,chunk__8211,count__8212,i__8213,segv_8575,gline_8576,lc_8577,info,seq__8210__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__8210,chunk__8211,count__8212,i__8213,segv_8575,gline_8576,lc_8577,info,seq__8210__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_8576], null),cljs.core.conj,segv_8575);
});})(seq__8210,chunk__8211,count__8212,i__8213,segv_8575,gline_8576,lc_8577,info,seq__8210__$1,temp__5720__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__8578 = cljs.core.next.call(null,seq__8210__$1);
var G__8579 = null;
var G__8580 = (0);
var G__8581 = (0);
seq__8210 = G__8578;
chunk__8211 = G__8579;
count__8212 = G__8580;
i__8213 = G__8581;
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
var seq__8214_8582 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__8215_8583 = null;
var count__8216_8584 = (0);
var i__8217_8585 = (0);
while(true){
if((i__8217_8585 < count__8216_8584)){
var vec__8390_8586 = cljs.core._nth.call(null,chunk__8215_8583,i__8217_8585);
var source_idx_8587 = cljs.core.nth.call(null,vec__8390_8586,(0),null);
var vec__8393_8588 = cljs.core.nth.call(null,vec__8390_8586,(1),null);
var __8589 = cljs.core.nth.call(null,vec__8393_8588,(0),null);
var lines_8590__$1 = cljs.core.nth.call(null,vec__8393_8588,(1),null);
var seq__8396_8591 = cljs.core.seq.call(null,lines_8590__$1);
var chunk__8397_8592 = null;
var count__8398_8593 = (0);
var i__8399_8594 = (0);
while(true){
if((i__8399_8594 < count__8398_8593)){
var vec__8438_8595 = cljs.core._nth.call(null,chunk__8397_8592,i__8399_8594);
var line_8596 = cljs.core.nth.call(null,vec__8438_8595,(0),null);
var cols_8597 = cljs.core.nth.call(null,vec__8438_8595,(1),null);
var seq__8441_8598 = cljs.core.seq.call(null,cols_8597);
var chunk__8442_8599 = null;
var count__8443_8600 = (0);
var i__8444_8601 = (0);
while(true){
if((i__8444_8601 < count__8443_8600)){
var vec__8451_8602 = cljs.core._nth.call(null,chunk__8442_8599,i__8444_8601);
var col_8603 = cljs.core.nth.call(null,vec__8451_8602,(0),null);
var infos_8604 = cljs.core.nth.call(null,vec__8451_8602,(1),null);
encode_cols.call(null,infos_8604,source_idx_8587,line_8596,col_8603);


var G__8605 = seq__8441_8598;
var G__8606 = chunk__8442_8599;
var G__8607 = count__8443_8600;
var G__8608 = (i__8444_8601 + (1));
seq__8441_8598 = G__8605;
chunk__8442_8599 = G__8606;
count__8443_8600 = G__8607;
i__8444_8601 = G__8608;
continue;
} else {
var temp__5720__auto___8609 = cljs.core.seq.call(null,seq__8441_8598);
if(temp__5720__auto___8609){
var seq__8441_8610__$1 = temp__5720__auto___8609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8441_8610__$1)){
var c__4550__auto___8611 = cljs.core.chunk_first.call(null,seq__8441_8610__$1);
var G__8612 = cljs.core.chunk_rest.call(null,seq__8441_8610__$1);
var G__8613 = c__4550__auto___8611;
var G__8614 = cljs.core.count.call(null,c__4550__auto___8611);
var G__8615 = (0);
seq__8441_8598 = G__8612;
chunk__8442_8599 = G__8613;
count__8443_8600 = G__8614;
i__8444_8601 = G__8615;
continue;
} else {
var vec__8454_8616 = cljs.core.first.call(null,seq__8441_8610__$1);
var col_8617 = cljs.core.nth.call(null,vec__8454_8616,(0),null);
var infos_8618 = cljs.core.nth.call(null,vec__8454_8616,(1),null);
encode_cols.call(null,infos_8618,source_idx_8587,line_8596,col_8617);


var G__8619 = cljs.core.next.call(null,seq__8441_8610__$1);
var G__8620 = null;
var G__8621 = (0);
var G__8622 = (0);
seq__8441_8598 = G__8619;
chunk__8442_8599 = G__8620;
count__8443_8600 = G__8621;
i__8444_8601 = G__8622;
continue;
}
} else {
}
}
break;
}


var G__8623 = seq__8396_8591;
var G__8624 = chunk__8397_8592;
var G__8625 = count__8398_8593;
var G__8626 = (i__8399_8594 + (1));
seq__8396_8591 = G__8623;
chunk__8397_8592 = G__8624;
count__8398_8593 = G__8625;
i__8399_8594 = G__8626;
continue;
} else {
var temp__5720__auto___8627 = cljs.core.seq.call(null,seq__8396_8591);
if(temp__5720__auto___8627){
var seq__8396_8628__$1 = temp__5720__auto___8627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8396_8628__$1)){
var c__4550__auto___8629 = cljs.core.chunk_first.call(null,seq__8396_8628__$1);
var G__8630 = cljs.core.chunk_rest.call(null,seq__8396_8628__$1);
var G__8631 = c__4550__auto___8629;
var G__8632 = cljs.core.count.call(null,c__4550__auto___8629);
var G__8633 = (0);
seq__8396_8591 = G__8630;
chunk__8397_8592 = G__8631;
count__8398_8593 = G__8632;
i__8399_8594 = G__8633;
continue;
} else {
var vec__8457_8634 = cljs.core.first.call(null,seq__8396_8628__$1);
var line_8635 = cljs.core.nth.call(null,vec__8457_8634,(0),null);
var cols_8636 = cljs.core.nth.call(null,vec__8457_8634,(1),null);
var seq__8460_8637 = cljs.core.seq.call(null,cols_8636);
var chunk__8461_8638 = null;
var count__8462_8639 = (0);
var i__8463_8640 = (0);
while(true){
if((i__8463_8640 < count__8462_8639)){
var vec__8470_8641 = cljs.core._nth.call(null,chunk__8461_8638,i__8463_8640);
var col_8642 = cljs.core.nth.call(null,vec__8470_8641,(0),null);
var infos_8643 = cljs.core.nth.call(null,vec__8470_8641,(1),null);
encode_cols.call(null,infos_8643,source_idx_8587,line_8635,col_8642);


var G__8644 = seq__8460_8637;
var G__8645 = chunk__8461_8638;
var G__8646 = count__8462_8639;
var G__8647 = (i__8463_8640 + (1));
seq__8460_8637 = G__8644;
chunk__8461_8638 = G__8645;
count__8462_8639 = G__8646;
i__8463_8640 = G__8647;
continue;
} else {
var temp__5720__auto___8648__$1 = cljs.core.seq.call(null,seq__8460_8637);
if(temp__5720__auto___8648__$1){
var seq__8460_8649__$1 = temp__5720__auto___8648__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8460_8649__$1)){
var c__4550__auto___8650 = cljs.core.chunk_first.call(null,seq__8460_8649__$1);
var G__8651 = cljs.core.chunk_rest.call(null,seq__8460_8649__$1);
var G__8652 = c__4550__auto___8650;
var G__8653 = cljs.core.count.call(null,c__4550__auto___8650);
var G__8654 = (0);
seq__8460_8637 = G__8651;
chunk__8461_8638 = G__8652;
count__8462_8639 = G__8653;
i__8463_8640 = G__8654;
continue;
} else {
var vec__8473_8655 = cljs.core.first.call(null,seq__8460_8649__$1);
var col_8656 = cljs.core.nth.call(null,vec__8473_8655,(0),null);
var infos_8657 = cljs.core.nth.call(null,vec__8473_8655,(1),null);
encode_cols.call(null,infos_8657,source_idx_8587,line_8635,col_8656);


var G__8658 = cljs.core.next.call(null,seq__8460_8649__$1);
var G__8659 = null;
var G__8660 = (0);
var G__8661 = (0);
seq__8460_8637 = G__8658;
chunk__8461_8638 = G__8659;
count__8462_8639 = G__8660;
i__8463_8640 = G__8661;
continue;
}
} else {
}
}
break;
}


var G__8662 = cljs.core.next.call(null,seq__8396_8628__$1);
var G__8663 = null;
var G__8664 = (0);
var G__8665 = (0);
seq__8396_8591 = G__8662;
chunk__8397_8592 = G__8663;
count__8398_8593 = G__8664;
i__8399_8594 = G__8665;
continue;
}
} else {
}
}
break;
}


var G__8666 = seq__8214_8582;
var G__8667 = chunk__8215_8583;
var G__8668 = count__8216_8584;
var G__8669 = (i__8217_8585 + (1));
seq__8214_8582 = G__8666;
chunk__8215_8583 = G__8667;
count__8216_8584 = G__8668;
i__8217_8585 = G__8669;
continue;
} else {
var temp__5720__auto___8670 = cljs.core.seq.call(null,seq__8214_8582);
if(temp__5720__auto___8670){
var seq__8214_8671__$1 = temp__5720__auto___8670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8214_8671__$1)){
var c__4550__auto___8672 = cljs.core.chunk_first.call(null,seq__8214_8671__$1);
var G__8673 = cljs.core.chunk_rest.call(null,seq__8214_8671__$1);
var G__8674 = c__4550__auto___8672;
var G__8675 = cljs.core.count.call(null,c__4550__auto___8672);
var G__8676 = (0);
seq__8214_8582 = G__8673;
chunk__8215_8583 = G__8674;
count__8216_8584 = G__8675;
i__8217_8585 = G__8676;
continue;
} else {
var vec__8476_8677 = cljs.core.first.call(null,seq__8214_8671__$1);
var source_idx_8678 = cljs.core.nth.call(null,vec__8476_8677,(0),null);
var vec__8479_8679 = cljs.core.nth.call(null,vec__8476_8677,(1),null);
var __8680 = cljs.core.nth.call(null,vec__8479_8679,(0),null);
var lines_8681__$1 = cljs.core.nth.call(null,vec__8479_8679,(1),null);
var seq__8482_8682 = cljs.core.seq.call(null,lines_8681__$1);
var chunk__8483_8683 = null;
var count__8484_8684 = (0);
var i__8485_8685 = (0);
while(true){
if((i__8485_8685 < count__8484_8684)){
var vec__8524_8686 = cljs.core._nth.call(null,chunk__8483_8683,i__8485_8685);
var line_8687 = cljs.core.nth.call(null,vec__8524_8686,(0),null);
var cols_8688 = cljs.core.nth.call(null,vec__8524_8686,(1),null);
var seq__8527_8689 = cljs.core.seq.call(null,cols_8688);
var chunk__8528_8690 = null;
var count__8529_8691 = (0);
var i__8530_8692 = (0);
while(true){
if((i__8530_8692 < count__8529_8691)){
var vec__8537_8693 = cljs.core._nth.call(null,chunk__8528_8690,i__8530_8692);
var col_8694 = cljs.core.nth.call(null,vec__8537_8693,(0),null);
var infos_8695 = cljs.core.nth.call(null,vec__8537_8693,(1),null);
encode_cols.call(null,infos_8695,source_idx_8678,line_8687,col_8694);


var G__8696 = seq__8527_8689;
var G__8697 = chunk__8528_8690;
var G__8698 = count__8529_8691;
var G__8699 = (i__8530_8692 + (1));
seq__8527_8689 = G__8696;
chunk__8528_8690 = G__8697;
count__8529_8691 = G__8698;
i__8530_8692 = G__8699;
continue;
} else {
var temp__5720__auto___8700__$1 = cljs.core.seq.call(null,seq__8527_8689);
if(temp__5720__auto___8700__$1){
var seq__8527_8701__$1 = temp__5720__auto___8700__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8527_8701__$1)){
var c__4550__auto___8702 = cljs.core.chunk_first.call(null,seq__8527_8701__$1);
var G__8703 = cljs.core.chunk_rest.call(null,seq__8527_8701__$1);
var G__8704 = c__4550__auto___8702;
var G__8705 = cljs.core.count.call(null,c__4550__auto___8702);
var G__8706 = (0);
seq__8527_8689 = G__8703;
chunk__8528_8690 = G__8704;
count__8529_8691 = G__8705;
i__8530_8692 = G__8706;
continue;
} else {
var vec__8540_8707 = cljs.core.first.call(null,seq__8527_8701__$1);
var col_8708 = cljs.core.nth.call(null,vec__8540_8707,(0),null);
var infos_8709 = cljs.core.nth.call(null,vec__8540_8707,(1),null);
encode_cols.call(null,infos_8709,source_idx_8678,line_8687,col_8708);


var G__8710 = cljs.core.next.call(null,seq__8527_8701__$1);
var G__8711 = null;
var G__8712 = (0);
var G__8713 = (0);
seq__8527_8689 = G__8710;
chunk__8528_8690 = G__8711;
count__8529_8691 = G__8712;
i__8530_8692 = G__8713;
continue;
}
} else {
}
}
break;
}


var G__8714 = seq__8482_8682;
var G__8715 = chunk__8483_8683;
var G__8716 = count__8484_8684;
var G__8717 = (i__8485_8685 + (1));
seq__8482_8682 = G__8714;
chunk__8483_8683 = G__8715;
count__8484_8684 = G__8716;
i__8485_8685 = G__8717;
continue;
} else {
var temp__5720__auto___8718__$1 = cljs.core.seq.call(null,seq__8482_8682);
if(temp__5720__auto___8718__$1){
var seq__8482_8719__$1 = temp__5720__auto___8718__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8482_8719__$1)){
var c__4550__auto___8720 = cljs.core.chunk_first.call(null,seq__8482_8719__$1);
var G__8721 = cljs.core.chunk_rest.call(null,seq__8482_8719__$1);
var G__8722 = c__4550__auto___8720;
var G__8723 = cljs.core.count.call(null,c__4550__auto___8720);
var G__8724 = (0);
seq__8482_8682 = G__8721;
chunk__8483_8683 = G__8722;
count__8484_8684 = G__8723;
i__8485_8685 = G__8724;
continue;
} else {
var vec__8543_8725 = cljs.core.first.call(null,seq__8482_8719__$1);
var line_8726 = cljs.core.nth.call(null,vec__8543_8725,(0),null);
var cols_8727 = cljs.core.nth.call(null,vec__8543_8725,(1),null);
var seq__8546_8728 = cljs.core.seq.call(null,cols_8727);
var chunk__8547_8729 = null;
var count__8548_8730 = (0);
var i__8549_8731 = (0);
while(true){
if((i__8549_8731 < count__8548_8730)){
var vec__8556_8732 = cljs.core._nth.call(null,chunk__8547_8729,i__8549_8731);
var col_8733 = cljs.core.nth.call(null,vec__8556_8732,(0),null);
var infos_8734 = cljs.core.nth.call(null,vec__8556_8732,(1),null);
encode_cols.call(null,infos_8734,source_idx_8678,line_8726,col_8733);


var G__8735 = seq__8546_8728;
var G__8736 = chunk__8547_8729;
var G__8737 = count__8548_8730;
var G__8738 = (i__8549_8731 + (1));
seq__8546_8728 = G__8735;
chunk__8547_8729 = G__8736;
count__8548_8730 = G__8737;
i__8549_8731 = G__8738;
continue;
} else {
var temp__5720__auto___8739__$2 = cljs.core.seq.call(null,seq__8546_8728);
if(temp__5720__auto___8739__$2){
var seq__8546_8740__$1 = temp__5720__auto___8739__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8546_8740__$1)){
var c__4550__auto___8741 = cljs.core.chunk_first.call(null,seq__8546_8740__$1);
var G__8742 = cljs.core.chunk_rest.call(null,seq__8546_8740__$1);
var G__8743 = c__4550__auto___8741;
var G__8744 = cljs.core.count.call(null,c__4550__auto___8741);
var G__8745 = (0);
seq__8546_8728 = G__8742;
chunk__8547_8729 = G__8743;
count__8548_8730 = G__8744;
i__8549_8731 = G__8745;
continue;
} else {
var vec__8559_8746 = cljs.core.first.call(null,seq__8546_8740__$1);
var col_8747 = cljs.core.nth.call(null,vec__8559_8746,(0),null);
var infos_8748 = cljs.core.nth.call(null,vec__8559_8746,(1),null);
encode_cols.call(null,infos_8748,source_idx_8678,line_8726,col_8747);


var G__8749 = cljs.core.next.call(null,seq__8546_8740__$1);
var G__8750 = null;
var G__8751 = (0);
var G__8752 = (0);
seq__8546_8728 = G__8749;
chunk__8547_8729 = G__8750;
count__8548_8730 = G__8751;
i__8549_8731 = G__8752;
continue;
}
} else {
}
}
break;
}


var G__8753 = cljs.core.next.call(null,seq__8482_8719__$1);
var G__8754 = null;
var G__8755 = (0);
var G__8756 = (0);
seq__8482_8682 = G__8753;
chunk__8483_8683 = G__8754;
count__8484_8684 = G__8755;
i__8485_8685 = G__8756;
continue;
}
} else {
}
}
break;
}


var G__8757 = cljs.core.next.call(null,seq__8214_8671__$1);
var G__8758 = null;
var G__8759 = (0);
var G__8760 = (0);
seq__8214_8582 = G__8757;
chunk__8215_8583 = G__8758;
count__8216_8584 = G__8759;
i__8217_8585 = G__8760;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__8562 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__8207_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8207_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__8208_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__8208_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__8209_SHARP_){
return clojure.string.join.call(null,",",p1__8209_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__8563 = G__8562;
goog.object.set(G__8563,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__8563;
} else {
return G__8562;
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
var vec__8761 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__8761,(0),null);
var col_map = cljs.core.nth.call(null,vec__8761,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__8764 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__8764,(0),null);
var infos = cljs.core.nth.call(null,vec__8764,(1),null);
var G__8770 = cljs.core.next.call(null,col_map_seq);
var G__8771 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__8764,col,infos,vec__8761,line,col_map){
return (function (v,p__8767){
var map__8768 = p__8767;
var map__8768__$1 = (((((!((map__8768 == null))))?(((((map__8768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8768):map__8768);
var gline = cljs.core.get.call(null,map__8768__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__8768__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__8764,col,infos,vec__8761,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__8770;
new_cols = G__8771;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__8772 = cljs.core.next.call(null,line_map_seq);
var G__8773 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__8772;
new_lines = G__8773;
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
var seq__8774_9046 = cljs.core.seq.call(null,reverse_map);
var chunk__8775_9047 = null;
var count__8776_9048 = (0);
var i__8777_9049 = (0);
while(true){
if((i__8777_9049 < count__8776_9048)){
var vec__8912_9050 = cljs.core._nth.call(null,chunk__8775_9047,i__8777_9049);
var line_9051 = cljs.core.nth.call(null,vec__8912_9050,(0),null);
var columns_9052 = cljs.core.nth.call(null,vec__8912_9050,(1),null);
var seq__8915_9053 = cljs.core.seq.call(null,columns_9052);
var chunk__8916_9054 = null;
var count__8917_9055 = (0);
var i__8918_9056 = (0);
while(true){
if((i__8918_9056 < count__8917_9055)){
var vec__8949_9057 = cljs.core._nth.call(null,chunk__8916_9054,i__8918_9056);
var column_9058 = cljs.core.nth.call(null,vec__8949_9057,(0),null);
var column_info_9059 = cljs.core.nth.call(null,vec__8949_9057,(1),null);
var seq__8952_9060 = cljs.core.seq.call(null,column_info_9059);
var chunk__8953_9061 = null;
var count__8954_9062 = (0);
var i__8955_9063 = (0);
while(true){
if((i__8955_9063 < count__8954_9062)){
var map__8960_9064 = cljs.core._nth.call(null,chunk__8953_9061,i__8955_9063);
var map__8960_9065__$1 = (((((!((map__8960_9064 == null))))?(((((map__8960_9064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8960_9064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8960_9064):map__8960_9064);
var gline_9066 = cljs.core.get.call(null,map__8960_9065__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9067 = cljs.core.get.call(null,map__8960_9065__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9068 = cljs.core.get.call(null,map__8960_9065__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9066], null),cljs.core.fnil.call(null,((function (seq__8952_9060,chunk__8953_9061,count__8954_9062,i__8955_9063,seq__8915_9053,chunk__8916_9054,count__8917_9055,i__8918_9056,seq__8774_9046,chunk__8775_9047,count__8776_9048,i__8777_9049,map__8960_9064,map__8960_9065__$1,gline_9066,gcol_9067,name_9068,vec__8949_9057,column_9058,column_info_9059,vec__8912_9050,line_9051,columns_9052,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9067], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9051,new cljs.core.Keyword(null,"col","col",-1959363084),column_9058,new cljs.core.Keyword(null,"name","name",1843675177),name_9068], null));
});})(seq__8952_9060,chunk__8953_9061,count__8954_9062,i__8955_9063,seq__8915_9053,chunk__8916_9054,count__8917_9055,i__8918_9056,seq__8774_9046,chunk__8775_9047,count__8776_9048,i__8777_9049,map__8960_9064,map__8960_9065__$1,gline_9066,gcol_9067,name_9068,vec__8949_9057,column_9058,column_info_9059,vec__8912_9050,line_9051,columns_9052,inverted))
,cljs.core.sorted_map.call(null)));


var G__9069 = seq__8952_9060;
var G__9070 = chunk__8953_9061;
var G__9071 = count__8954_9062;
var G__9072 = (i__8955_9063 + (1));
seq__8952_9060 = G__9069;
chunk__8953_9061 = G__9070;
count__8954_9062 = G__9071;
i__8955_9063 = G__9072;
continue;
} else {
var temp__5720__auto___9073 = cljs.core.seq.call(null,seq__8952_9060);
if(temp__5720__auto___9073){
var seq__8952_9074__$1 = temp__5720__auto___9073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8952_9074__$1)){
var c__4550__auto___9075 = cljs.core.chunk_first.call(null,seq__8952_9074__$1);
var G__9076 = cljs.core.chunk_rest.call(null,seq__8952_9074__$1);
var G__9077 = c__4550__auto___9075;
var G__9078 = cljs.core.count.call(null,c__4550__auto___9075);
var G__9079 = (0);
seq__8952_9060 = G__9076;
chunk__8953_9061 = G__9077;
count__8954_9062 = G__9078;
i__8955_9063 = G__9079;
continue;
} else {
var map__8962_9080 = cljs.core.first.call(null,seq__8952_9074__$1);
var map__8962_9081__$1 = (((((!((map__8962_9080 == null))))?(((((map__8962_9080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8962_9080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8962_9080):map__8962_9080);
var gline_9082 = cljs.core.get.call(null,map__8962_9081__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9083 = cljs.core.get.call(null,map__8962_9081__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9084 = cljs.core.get.call(null,map__8962_9081__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9082], null),cljs.core.fnil.call(null,((function (seq__8952_9060,chunk__8953_9061,count__8954_9062,i__8955_9063,seq__8915_9053,chunk__8916_9054,count__8917_9055,i__8918_9056,seq__8774_9046,chunk__8775_9047,count__8776_9048,i__8777_9049,map__8962_9080,map__8962_9081__$1,gline_9082,gcol_9083,name_9084,seq__8952_9074__$1,temp__5720__auto___9073,vec__8949_9057,column_9058,column_info_9059,vec__8912_9050,line_9051,columns_9052,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9083], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9051,new cljs.core.Keyword(null,"col","col",-1959363084),column_9058,new cljs.core.Keyword(null,"name","name",1843675177),name_9084], null));
});})(seq__8952_9060,chunk__8953_9061,count__8954_9062,i__8955_9063,seq__8915_9053,chunk__8916_9054,count__8917_9055,i__8918_9056,seq__8774_9046,chunk__8775_9047,count__8776_9048,i__8777_9049,map__8962_9080,map__8962_9081__$1,gline_9082,gcol_9083,name_9084,seq__8952_9074__$1,temp__5720__auto___9073,vec__8949_9057,column_9058,column_info_9059,vec__8912_9050,line_9051,columns_9052,inverted))
,cljs.core.sorted_map.call(null)));


var G__9085 = cljs.core.next.call(null,seq__8952_9074__$1);
var G__9086 = null;
var G__9087 = (0);
var G__9088 = (0);
seq__8952_9060 = G__9085;
chunk__8953_9061 = G__9086;
count__8954_9062 = G__9087;
i__8955_9063 = G__9088;
continue;
}
} else {
}
}
break;
}


var G__9089 = seq__8915_9053;
var G__9090 = chunk__8916_9054;
var G__9091 = count__8917_9055;
var G__9092 = (i__8918_9056 + (1));
seq__8915_9053 = G__9089;
chunk__8916_9054 = G__9090;
count__8917_9055 = G__9091;
i__8918_9056 = G__9092;
continue;
} else {
var temp__5720__auto___9093 = cljs.core.seq.call(null,seq__8915_9053);
if(temp__5720__auto___9093){
var seq__8915_9094__$1 = temp__5720__auto___9093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8915_9094__$1)){
var c__4550__auto___9095 = cljs.core.chunk_first.call(null,seq__8915_9094__$1);
var G__9096 = cljs.core.chunk_rest.call(null,seq__8915_9094__$1);
var G__9097 = c__4550__auto___9095;
var G__9098 = cljs.core.count.call(null,c__4550__auto___9095);
var G__9099 = (0);
seq__8915_9053 = G__9096;
chunk__8916_9054 = G__9097;
count__8917_9055 = G__9098;
i__8918_9056 = G__9099;
continue;
} else {
var vec__8964_9100 = cljs.core.first.call(null,seq__8915_9094__$1);
var column_9101 = cljs.core.nth.call(null,vec__8964_9100,(0),null);
var column_info_9102 = cljs.core.nth.call(null,vec__8964_9100,(1),null);
var seq__8967_9103 = cljs.core.seq.call(null,column_info_9102);
var chunk__8968_9104 = null;
var count__8969_9105 = (0);
var i__8970_9106 = (0);
while(true){
if((i__8970_9106 < count__8969_9105)){
var map__8975_9107 = cljs.core._nth.call(null,chunk__8968_9104,i__8970_9106);
var map__8975_9108__$1 = (((((!((map__8975_9107 == null))))?(((((map__8975_9107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8975_9107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8975_9107):map__8975_9107);
var gline_9109 = cljs.core.get.call(null,map__8975_9108__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9110 = cljs.core.get.call(null,map__8975_9108__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9111 = cljs.core.get.call(null,map__8975_9108__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9109], null),cljs.core.fnil.call(null,((function (seq__8967_9103,chunk__8968_9104,count__8969_9105,i__8970_9106,seq__8915_9053,chunk__8916_9054,count__8917_9055,i__8918_9056,seq__8774_9046,chunk__8775_9047,count__8776_9048,i__8777_9049,map__8975_9107,map__8975_9108__$1,gline_9109,gcol_9110,name_9111,vec__8964_9100,column_9101,column_info_9102,seq__8915_9094__$1,temp__5720__auto___9093,vec__8912_9050,line_9051,columns_9052,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9110], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9051,new cljs.core.Keyword(null,"col","col",-1959363084),column_9101,new cljs.core.Keyword(null,"name","name",1843675177),name_9111], null));
});})(seq__8967_9103,chunk__8968_9104,count__8969_9105,i__8970_9106,seq__8915_9053,chunk__8916_9054,count__8917_9055,i__8918_9056,seq__8774_9046,chunk__8775_9047,count__8776_9048,i__8777_9049,map__8975_9107,map__8975_9108__$1,gline_9109,gcol_9110,name_9111,vec__8964_9100,column_9101,column_info_9102,seq__8915_9094__$1,temp__5720__auto___9093,vec__8912_9050,line_9051,columns_9052,inverted))
,cljs.core.sorted_map.call(null)));


var G__9112 = seq__8967_9103;
var G__9113 = chunk__8968_9104;
var G__9114 = count__8969_9105;
var G__9115 = (i__8970_9106 + (1));
seq__8967_9103 = G__9112;
chunk__8968_9104 = G__9113;
count__8969_9105 = G__9114;
i__8970_9106 = G__9115;
continue;
} else {
var temp__5720__auto___9116__$1 = cljs.core.seq.call(null,seq__8967_9103);
if(temp__5720__auto___9116__$1){
var seq__8967_9117__$1 = temp__5720__auto___9116__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8967_9117__$1)){
var c__4550__auto___9118 = cljs.core.chunk_first.call(null,seq__8967_9117__$1);
var G__9119 = cljs.core.chunk_rest.call(null,seq__8967_9117__$1);
var G__9120 = c__4550__auto___9118;
var G__9121 = cljs.core.count.call(null,c__4550__auto___9118);
var G__9122 = (0);
seq__8967_9103 = G__9119;
chunk__8968_9104 = G__9120;
count__8969_9105 = G__9121;
i__8970_9106 = G__9122;
continue;
} else {
var map__8977_9123 = cljs.core.first.call(null,seq__8967_9117__$1);
var map__8977_9124__$1 = (((((!((map__8977_9123 == null))))?(((((map__8977_9123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8977_9123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8977_9123):map__8977_9123);
var gline_9125 = cljs.core.get.call(null,map__8977_9124__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9126 = cljs.core.get.call(null,map__8977_9124__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9127 = cljs.core.get.call(null,map__8977_9124__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9125], null),cljs.core.fnil.call(null,((function (seq__8967_9103,chunk__8968_9104,count__8969_9105,i__8970_9106,seq__8915_9053,chunk__8916_9054,count__8917_9055,i__8918_9056,seq__8774_9046,chunk__8775_9047,count__8776_9048,i__8777_9049,map__8977_9123,map__8977_9124__$1,gline_9125,gcol_9126,name_9127,seq__8967_9117__$1,temp__5720__auto___9116__$1,vec__8964_9100,column_9101,column_info_9102,seq__8915_9094__$1,temp__5720__auto___9093,vec__8912_9050,line_9051,columns_9052,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9126], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9051,new cljs.core.Keyword(null,"col","col",-1959363084),column_9101,new cljs.core.Keyword(null,"name","name",1843675177),name_9127], null));
});})(seq__8967_9103,chunk__8968_9104,count__8969_9105,i__8970_9106,seq__8915_9053,chunk__8916_9054,count__8917_9055,i__8918_9056,seq__8774_9046,chunk__8775_9047,count__8776_9048,i__8777_9049,map__8977_9123,map__8977_9124__$1,gline_9125,gcol_9126,name_9127,seq__8967_9117__$1,temp__5720__auto___9116__$1,vec__8964_9100,column_9101,column_info_9102,seq__8915_9094__$1,temp__5720__auto___9093,vec__8912_9050,line_9051,columns_9052,inverted))
,cljs.core.sorted_map.call(null)));


var G__9128 = cljs.core.next.call(null,seq__8967_9117__$1);
var G__9129 = null;
var G__9130 = (0);
var G__9131 = (0);
seq__8967_9103 = G__9128;
chunk__8968_9104 = G__9129;
count__8969_9105 = G__9130;
i__8970_9106 = G__9131;
continue;
}
} else {
}
}
break;
}


var G__9132 = cljs.core.next.call(null,seq__8915_9094__$1);
var G__9133 = null;
var G__9134 = (0);
var G__9135 = (0);
seq__8915_9053 = G__9132;
chunk__8916_9054 = G__9133;
count__8917_9055 = G__9134;
i__8918_9056 = G__9135;
continue;
}
} else {
}
}
break;
}


var G__9136 = seq__8774_9046;
var G__9137 = chunk__8775_9047;
var G__9138 = count__8776_9048;
var G__9139 = (i__8777_9049 + (1));
seq__8774_9046 = G__9136;
chunk__8775_9047 = G__9137;
count__8776_9048 = G__9138;
i__8777_9049 = G__9139;
continue;
} else {
var temp__5720__auto___9140 = cljs.core.seq.call(null,seq__8774_9046);
if(temp__5720__auto___9140){
var seq__8774_9141__$1 = temp__5720__auto___9140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8774_9141__$1)){
var c__4550__auto___9142 = cljs.core.chunk_first.call(null,seq__8774_9141__$1);
var G__9143 = cljs.core.chunk_rest.call(null,seq__8774_9141__$1);
var G__9144 = c__4550__auto___9142;
var G__9145 = cljs.core.count.call(null,c__4550__auto___9142);
var G__9146 = (0);
seq__8774_9046 = G__9143;
chunk__8775_9047 = G__9144;
count__8776_9048 = G__9145;
i__8777_9049 = G__9146;
continue;
} else {
var vec__8979_9147 = cljs.core.first.call(null,seq__8774_9141__$1);
var line_9148 = cljs.core.nth.call(null,vec__8979_9147,(0),null);
var columns_9149 = cljs.core.nth.call(null,vec__8979_9147,(1),null);
var seq__8982_9150 = cljs.core.seq.call(null,columns_9149);
var chunk__8983_9151 = null;
var count__8984_9152 = (0);
var i__8985_9153 = (0);
while(true){
if((i__8985_9153 < count__8984_9152)){
var vec__9016_9154 = cljs.core._nth.call(null,chunk__8983_9151,i__8985_9153);
var column_9155 = cljs.core.nth.call(null,vec__9016_9154,(0),null);
var column_info_9156 = cljs.core.nth.call(null,vec__9016_9154,(1),null);
var seq__9019_9157 = cljs.core.seq.call(null,column_info_9156);
var chunk__9020_9158 = null;
var count__9021_9159 = (0);
var i__9022_9160 = (0);
while(true){
if((i__9022_9160 < count__9021_9159)){
var map__9027_9161 = cljs.core._nth.call(null,chunk__9020_9158,i__9022_9160);
var map__9027_9162__$1 = (((((!((map__9027_9161 == null))))?(((((map__9027_9161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9027_9161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9027_9161):map__9027_9161);
var gline_9163 = cljs.core.get.call(null,map__9027_9162__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9164 = cljs.core.get.call(null,map__9027_9162__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9165 = cljs.core.get.call(null,map__9027_9162__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9163], null),cljs.core.fnil.call(null,((function (seq__9019_9157,chunk__9020_9158,count__9021_9159,i__9022_9160,seq__8982_9150,chunk__8983_9151,count__8984_9152,i__8985_9153,seq__8774_9046,chunk__8775_9047,count__8776_9048,i__8777_9049,map__9027_9161,map__9027_9162__$1,gline_9163,gcol_9164,name_9165,vec__9016_9154,column_9155,column_info_9156,vec__8979_9147,line_9148,columns_9149,seq__8774_9141__$1,temp__5720__auto___9140,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9164], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9148,new cljs.core.Keyword(null,"col","col",-1959363084),column_9155,new cljs.core.Keyword(null,"name","name",1843675177),name_9165], null));
});})(seq__9019_9157,chunk__9020_9158,count__9021_9159,i__9022_9160,seq__8982_9150,chunk__8983_9151,count__8984_9152,i__8985_9153,seq__8774_9046,chunk__8775_9047,count__8776_9048,i__8777_9049,map__9027_9161,map__9027_9162__$1,gline_9163,gcol_9164,name_9165,vec__9016_9154,column_9155,column_info_9156,vec__8979_9147,line_9148,columns_9149,seq__8774_9141__$1,temp__5720__auto___9140,inverted))
,cljs.core.sorted_map.call(null)));


var G__9166 = seq__9019_9157;
var G__9167 = chunk__9020_9158;
var G__9168 = count__9021_9159;
var G__9169 = (i__9022_9160 + (1));
seq__9019_9157 = G__9166;
chunk__9020_9158 = G__9167;
count__9021_9159 = G__9168;
i__9022_9160 = G__9169;
continue;
} else {
var temp__5720__auto___9170__$1 = cljs.core.seq.call(null,seq__9019_9157);
if(temp__5720__auto___9170__$1){
var seq__9019_9171__$1 = temp__5720__auto___9170__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9019_9171__$1)){
var c__4550__auto___9172 = cljs.core.chunk_first.call(null,seq__9019_9171__$1);
var G__9173 = cljs.core.chunk_rest.call(null,seq__9019_9171__$1);
var G__9174 = c__4550__auto___9172;
var G__9175 = cljs.core.count.call(null,c__4550__auto___9172);
var G__9176 = (0);
seq__9019_9157 = G__9173;
chunk__9020_9158 = G__9174;
count__9021_9159 = G__9175;
i__9022_9160 = G__9176;
continue;
} else {
var map__9029_9177 = cljs.core.first.call(null,seq__9019_9171__$1);
var map__9029_9178__$1 = (((((!((map__9029_9177 == null))))?(((((map__9029_9177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9029_9177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9029_9177):map__9029_9177);
var gline_9179 = cljs.core.get.call(null,map__9029_9178__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9180 = cljs.core.get.call(null,map__9029_9178__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9181 = cljs.core.get.call(null,map__9029_9178__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9179], null),cljs.core.fnil.call(null,((function (seq__9019_9157,chunk__9020_9158,count__9021_9159,i__9022_9160,seq__8982_9150,chunk__8983_9151,count__8984_9152,i__8985_9153,seq__8774_9046,chunk__8775_9047,count__8776_9048,i__8777_9049,map__9029_9177,map__9029_9178__$1,gline_9179,gcol_9180,name_9181,seq__9019_9171__$1,temp__5720__auto___9170__$1,vec__9016_9154,column_9155,column_info_9156,vec__8979_9147,line_9148,columns_9149,seq__8774_9141__$1,temp__5720__auto___9140,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9180], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9148,new cljs.core.Keyword(null,"col","col",-1959363084),column_9155,new cljs.core.Keyword(null,"name","name",1843675177),name_9181], null));
});})(seq__9019_9157,chunk__9020_9158,count__9021_9159,i__9022_9160,seq__8982_9150,chunk__8983_9151,count__8984_9152,i__8985_9153,seq__8774_9046,chunk__8775_9047,count__8776_9048,i__8777_9049,map__9029_9177,map__9029_9178__$1,gline_9179,gcol_9180,name_9181,seq__9019_9171__$1,temp__5720__auto___9170__$1,vec__9016_9154,column_9155,column_info_9156,vec__8979_9147,line_9148,columns_9149,seq__8774_9141__$1,temp__5720__auto___9140,inverted))
,cljs.core.sorted_map.call(null)));


var G__9182 = cljs.core.next.call(null,seq__9019_9171__$1);
var G__9183 = null;
var G__9184 = (0);
var G__9185 = (0);
seq__9019_9157 = G__9182;
chunk__9020_9158 = G__9183;
count__9021_9159 = G__9184;
i__9022_9160 = G__9185;
continue;
}
} else {
}
}
break;
}


var G__9186 = seq__8982_9150;
var G__9187 = chunk__8983_9151;
var G__9188 = count__8984_9152;
var G__9189 = (i__8985_9153 + (1));
seq__8982_9150 = G__9186;
chunk__8983_9151 = G__9187;
count__8984_9152 = G__9188;
i__8985_9153 = G__9189;
continue;
} else {
var temp__5720__auto___9190__$1 = cljs.core.seq.call(null,seq__8982_9150);
if(temp__5720__auto___9190__$1){
var seq__8982_9191__$1 = temp__5720__auto___9190__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8982_9191__$1)){
var c__4550__auto___9192 = cljs.core.chunk_first.call(null,seq__8982_9191__$1);
var G__9193 = cljs.core.chunk_rest.call(null,seq__8982_9191__$1);
var G__9194 = c__4550__auto___9192;
var G__9195 = cljs.core.count.call(null,c__4550__auto___9192);
var G__9196 = (0);
seq__8982_9150 = G__9193;
chunk__8983_9151 = G__9194;
count__8984_9152 = G__9195;
i__8985_9153 = G__9196;
continue;
} else {
var vec__9031_9197 = cljs.core.first.call(null,seq__8982_9191__$1);
var column_9198 = cljs.core.nth.call(null,vec__9031_9197,(0),null);
var column_info_9199 = cljs.core.nth.call(null,vec__9031_9197,(1),null);
var seq__9034_9200 = cljs.core.seq.call(null,column_info_9199);
var chunk__9035_9201 = null;
var count__9036_9202 = (0);
var i__9037_9203 = (0);
while(true){
if((i__9037_9203 < count__9036_9202)){
var map__9042_9204 = cljs.core._nth.call(null,chunk__9035_9201,i__9037_9203);
var map__9042_9205__$1 = (((((!((map__9042_9204 == null))))?(((((map__9042_9204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9042_9204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9042_9204):map__9042_9204);
var gline_9206 = cljs.core.get.call(null,map__9042_9205__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9207 = cljs.core.get.call(null,map__9042_9205__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9208 = cljs.core.get.call(null,map__9042_9205__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9206], null),cljs.core.fnil.call(null,((function (seq__9034_9200,chunk__9035_9201,count__9036_9202,i__9037_9203,seq__8982_9150,chunk__8983_9151,count__8984_9152,i__8985_9153,seq__8774_9046,chunk__8775_9047,count__8776_9048,i__8777_9049,map__9042_9204,map__9042_9205__$1,gline_9206,gcol_9207,name_9208,vec__9031_9197,column_9198,column_info_9199,seq__8982_9191__$1,temp__5720__auto___9190__$1,vec__8979_9147,line_9148,columns_9149,seq__8774_9141__$1,temp__5720__auto___9140,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9207], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9148,new cljs.core.Keyword(null,"col","col",-1959363084),column_9198,new cljs.core.Keyword(null,"name","name",1843675177),name_9208], null));
});})(seq__9034_9200,chunk__9035_9201,count__9036_9202,i__9037_9203,seq__8982_9150,chunk__8983_9151,count__8984_9152,i__8985_9153,seq__8774_9046,chunk__8775_9047,count__8776_9048,i__8777_9049,map__9042_9204,map__9042_9205__$1,gline_9206,gcol_9207,name_9208,vec__9031_9197,column_9198,column_info_9199,seq__8982_9191__$1,temp__5720__auto___9190__$1,vec__8979_9147,line_9148,columns_9149,seq__8774_9141__$1,temp__5720__auto___9140,inverted))
,cljs.core.sorted_map.call(null)));


var G__9209 = seq__9034_9200;
var G__9210 = chunk__9035_9201;
var G__9211 = count__9036_9202;
var G__9212 = (i__9037_9203 + (1));
seq__9034_9200 = G__9209;
chunk__9035_9201 = G__9210;
count__9036_9202 = G__9211;
i__9037_9203 = G__9212;
continue;
} else {
var temp__5720__auto___9213__$2 = cljs.core.seq.call(null,seq__9034_9200);
if(temp__5720__auto___9213__$2){
var seq__9034_9214__$1 = temp__5720__auto___9213__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9034_9214__$1)){
var c__4550__auto___9215 = cljs.core.chunk_first.call(null,seq__9034_9214__$1);
var G__9216 = cljs.core.chunk_rest.call(null,seq__9034_9214__$1);
var G__9217 = c__4550__auto___9215;
var G__9218 = cljs.core.count.call(null,c__4550__auto___9215);
var G__9219 = (0);
seq__9034_9200 = G__9216;
chunk__9035_9201 = G__9217;
count__9036_9202 = G__9218;
i__9037_9203 = G__9219;
continue;
} else {
var map__9044_9220 = cljs.core.first.call(null,seq__9034_9214__$1);
var map__9044_9221__$1 = (((((!((map__9044_9220 == null))))?(((((map__9044_9220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9044_9220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9044_9220):map__9044_9220);
var gline_9222 = cljs.core.get.call(null,map__9044_9221__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9223 = cljs.core.get.call(null,map__9044_9221__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9224 = cljs.core.get.call(null,map__9044_9221__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9222], null),cljs.core.fnil.call(null,((function (seq__9034_9200,chunk__9035_9201,count__9036_9202,i__9037_9203,seq__8982_9150,chunk__8983_9151,count__8984_9152,i__8985_9153,seq__8774_9046,chunk__8775_9047,count__8776_9048,i__8777_9049,map__9044_9220,map__9044_9221__$1,gline_9222,gcol_9223,name_9224,seq__9034_9214__$1,temp__5720__auto___9213__$2,vec__9031_9197,column_9198,column_info_9199,seq__8982_9191__$1,temp__5720__auto___9190__$1,vec__8979_9147,line_9148,columns_9149,seq__8774_9141__$1,temp__5720__auto___9140,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9223], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9148,new cljs.core.Keyword(null,"col","col",-1959363084),column_9198,new cljs.core.Keyword(null,"name","name",1843675177),name_9224], null));
});})(seq__9034_9200,chunk__9035_9201,count__9036_9202,i__9037_9203,seq__8982_9150,chunk__8983_9151,count__8984_9152,i__8985_9153,seq__8774_9046,chunk__8775_9047,count__8776_9048,i__8777_9049,map__9044_9220,map__9044_9221__$1,gline_9222,gcol_9223,name_9224,seq__9034_9214__$1,temp__5720__auto___9213__$2,vec__9031_9197,column_9198,column_info_9199,seq__8982_9191__$1,temp__5720__auto___9190__$1,vec__8979_9147,line_9148,columns_9149,seq__8774_9141__$1,temp__5720__auto___9140,inverted))
,cljs.core.sorted_map.call(null)));


var G__9225 = cljs.core.next.call(null,seq__9034_9214__$1);
var G__9226 = null;
var G__9227 = (0);
var G__9228 = (0);
seq__9034_9200 = G__9225;
chunk__9035_9201 = G__9226;
count__9036_9202 = G__9227;
i__9037_9203 = G__9228;
continue;
}
} else {
}
}
break;
}


var G__9229 = cljs.core.next.call(null,seq__8982_9191__$1);
var G__9230 = null;
var G__9231 = (0);
var G__9232 = (0);
seq__8982_9150 = G__9229;
chunk__8983_9151 = G__9230;
count__8984_9152 = G__9231;
i__8985_9153 = G__9232;
continue;
}
} else {
}
}
break;
}


var G__9233 = cljs.core.next.call(null,seq__8774_9141__$1);
var G__9234 = null;
var G__9235 = (0);
var G__9236 = (0);
seq__8774_9046 = G__9233;
chunk__8775_9047 = G__9234;
count__8776_9048 = G__9235;
i__8777_9049 = G__9236;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1610846304742
