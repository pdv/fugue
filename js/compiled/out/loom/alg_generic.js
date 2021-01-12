// Compiled by ClojureScript 1.10.520 {}
goog.provide('loom.alg_generic');
goog.require('cljs.core');
/**
 * Using a map of nodes-to-preds, traces a node's family tree back to the
 *   source. Cycles are not accounted for.
 */
loom.alg_generic.trace_path = (function loom$alg_generic$trace_path(preds,node){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,preds,node));
});
/**
 * Returns a lazy seq of all non-looping path vectors starting with
 *   [<start-node>]
 */
loom.alg_generic.paths = (function loom$alg_generic$paths(preds,path){
var this_node = cljs.core.peek.call(null,path);
return cljs.core.cons.call(null,path,cljs.core.mapcat.call(null,((function (this_node){
return (function (p1__25903_SHARP_){
return loom.alg_generic.paths.call(null,preds,cljs.core.conj.call(null,path,p1__25903_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__25902_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__25902_SHARP_], null));
});})(this_node))
,cljs.core.partition.call(null,(2),(1),path));
});})(this_node))
,preds.call(null,this_node))));
});
/**
 * Given a function and a starting node, returns all possible paths
 *   back to source. Cycles are not accounted for.
 */
loom.alg_generic.trace_paths = (function loom$alg_generic$trace_paths(preds,start){
return cljs.core.remove.call(null,(function (p1__25904_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__25904_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__25905){
var vec__25906 = p__25905;
var n = cljs.core.nth.call(null,vec__25906,(0),null);
var p = cljs.core.nth.call(null,vec__25906,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.call(null,span,p,cljs.core.conj.call(null,span.call(null,p,cljs.core.PersistentVector.EMPTY),n));
} else {
return span;
}
}),cljs.core.PersistentArrayMap.EMPTY,preds);
});
/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of nodes.
 */
loom.alg_generic.pre_traverse = (function loom$alg_generic$pre_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25915 = arguments.length;
var i__4731__auto___25916 = (0);
while(true){
if((i__4731__auto___25916 < len__4730__auto___25915)){
args__4736__auto__.push((arguments[i__4731__auto___25916]));

var G__25917 = (i__4731__auto___25916 + (1));
i__4731__auto___25916 = G__25917;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25912){
var map__25913 = p__25912;
var map__25913__$1 = (((((!((map__25913 == null))))?(((((map__25913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25913):map__25913);
var seen = cljs.core.get.call(null,map__25913__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__25913,map__25913__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__25913,map__25913__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__25913,map__25913__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__25913,map__25913__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq25909){
var G__25910 = cljs.core.first.call(null,seq25909);
var seq25909__$1 = cljs.core.next.call(null,seq25909);
var G__25911 = cljs.core.first.call(null,seq25909__$1);
var seq25909__$2 = cljs.core.next.call(null,seq25909__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25910,G__25911,seq25909__$2);
});

/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.pre_edge_traverse = (function loom$alg_generic$pre_edge_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25924 = arguments.length;
var i__4731__auto___25925 = (0);
while(true){
if((i__4731__auto___25925 < len__4730__auto___25924)){
args__4736__auto__.push((arguments[i__4731__auto___25925]));

var G__25926 = (i__4731__auto___25925 + (1));
i__4731__auto___25925 = G__25926;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25921){
var map__25922 = p__25921;
var map__25922__$1 = (((((!((map__25922 == null))))?(((((map__25922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25922):map__25922);
var seen = cljs.core.get.call(null,map__25922__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__25922,map__25922__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__25922,map__25922__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__25922,map__25922__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__25927 = successors__$1;
var G__25928 = parent;
var G__25929 = cljs.core.peek.call(null,nbrstack);
var G__25930 = cljs.core.pop.call(null,stack);
var G__25931 = cljs.core.pop.call(null,nbrstack);
var G__25932 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__25927;
start__$1 = G__25928;
nbrs = G__25929;
stack = G__25930;
nbrstack = G__25931;
seen__$1 = G__25932;
continue;
} else {
return null;
}
}
break;
}
});})(map__25922,map__25922__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq25918){
var G__25919 = cljs.core.first.call(null,seq25918);
var seq25918__$1 = cljs.core.next.call(null,seq25918);
var G__25920 = cljs.core.first.call(null,seq25918__$1);
var seq25918__$2 = cljs.core.next.call(null,seq25918__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25919,G__25920,seq25918__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25939 = arguments.length;
var i__4731__auto___25940 = (0);
while(true){
if((i__4731__auto___25940 < len__4730__auto___25939)){
args__4736__auto__.push((arguments[i__4731__auto___25940]));

var G__25941 = (i__4731__auto___25940 + (1));
i__4731__auto___25940 = G__25941;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25936){
var map__25937 = p__25936;
var map__25937__$1 = (((((!((map__25937 == null))))?(((((map__25937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25937):map__25937);
var seen = cljs.core.get.call(null,map__25937__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__25937__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
var seen__$1 = seen;
var preds = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_.call(null,stack)){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loom.alg_generic.preds__GT_span.call(null,preds),seen__$1], null);
} else {
return loom.alg_generic.preds__GT_span.call(null,preds);
}
} else {
var v = cljs.core.peek.call(null,stack);
var seen__$2 = cljs.core.conj.call(null,seen__$1,v);
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.remove.call(null,seen__$2,successors.call(null,v)));
if(cljs.core.truth_(temp__5718__auto__)){
var u = temp__5718__auto__;
var G__25942 = seen__$2;
var G__25943 = cljs.core.assoc.call(null,preds,u,v);
var G__25944 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__25942;
preds = G__25943;
stack = G__25944;
continue;
} else {
var G__25945 = seen__$2;
var G__25946 = preds;
var G__25947 = cljs.core.pop.call(null,stack);
seen__$1 = G__25945;
preds = G__25946;
stack = G__25947;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq25933){
var G__25934 = cljs.core.first.call(null,seq25933);
var seq25933__$1 = cljs.core.next.call(null,seq25933);
var G__25935 = cljs.core.first.call(null,seq25933__$1);
var seq25933__$2 = cljs.core.next.call(null,seq25933__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25934,G__25935,seq25933__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25954 = arguments.length;
var i__4731__auto___25955 = (0);
while(true){
if((i__4731__auto___25955 < len__4730__auto___25954)){
args__4736__auto__.push((arguments[i__4731__auto___25955]));

var G__25956 = (i__4731__auto___25955 + (1));
i__4731__auto___25955 = G__25956;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25951){
var map__25952 = p__25951;
var map__25952__$1 = (((((!((map__25952 == null))))?(((((map__25952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25952):map__25952);
var seen = cljs.core.get.call(null,map__25952__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__25952__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
var seen__$1 = seen;
var result = cljs.core.PersistentVector.EMPTY;
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_.call(null,stack)){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,seen__$1], null);
} else {
return result;
}
} else {
var v = cljs.core.peek.call(null,stack);
var seen__$2 = cljs.core.conj.call(null,seen__$1,v);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,v));
if(cljs.core.empty_QMARK_.call(null,nbrs)){
var G__25957 = seen__$2;
var G__25958 = cljs.core.conj.call(null,result,v);
var G__25959 = cljs.core.pop.call(null,stack);
seen__$1 = G__25957;
result = G__25958;
stack = G__25959;
continue;
} else {
var G__25960 = seen__$2;
var G__25961 = result;
var G__25962 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__25960;
result = G__25961;
stack = G__25962;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq25948){
var G__25949 = cljs.core.first.call(null,seq25948);
var seq25948__$1 = cljs.core.next.call(null,seq25948);
var G__25950 = cljs.core.first.call(null,seq25948__$1);
var seq25948__$2 = cljs.core.next.call(null,seq25948__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25949,G__25950,seq25948__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.post_edge_traverse = (function loom$alg_generic$post_edge_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25969 = arguments.length;
var i__4731__auto___25970 = (0);
while(true){
if((i__4731__auto___25970 < len__4730__auto___25969)){
args__4736__auto__.push((arguments[i__4731__auto___25970]));

var G__25971 = (i__4731__auto___25970 + (1));
i__4731__auto___25970 = G__25971;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25966){
var map__25967 = p__25966;
var map__25967__$1 = (((((!((map__25967 == null))))?(((((map__25967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25967):map__25967);
var seen = cljs.core.get.call(null,map__25967__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__25967__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
if(cljs.core.truth_(seen.call(null,start))){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,seen], null);
} else {
return null;
}
} else {
var start__$1 = start;
var nbrs = successors.call(null,start__$1);
var stack = cljs.core.PersistentVector.EMPTY;
var nbrstack = cljs.core.PersistentVector.EMPTY;
var seen__$1 = seen;
var edges = cljs.core.List.EMPTY;
while(true){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
var temp__5718__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
if(cljs.core.truth_(seen__$2.call(null,nbr))){
var G__25972 = start__$1;
var G__25973 = cljs.core.next.call(null,nbrs);
var G__25974 = stack;
var G__25975 = nbrstack;
var G__25976 = seen__$2;
var G__25977 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__25972;
nbrs = G__25973;
stack = G__25974;
nbrstack = G__25975;
seen__$1 = G__25976;
edges = G__25977;
continue;
} else {
var G__25978 = nbr;
var G__25979 = successors.call(null,nbr);
var G__25980 = cljs.core.conj.call(null,stack,start__$1);
var G__25981 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__25982 = seen__$2;
var G__25983 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__25978;
nbrs = G__25979;
stack = G__25980;
nbrstack = G__25981;
seen__$1 = G__25982;
edges = G__25983;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__25984 = parent;
var G__25985 = cljs.core.peek.call(null,nbrstack);
var G__25986 = cljs.core.pop.call(null,stack);
var G__25987 = cljs.core.pop.call(null,nbrstack);
var G__25988 = seen__$2;
var G__25989 = edges;
start__$1 = G__25984;
nbrs = G__25985;
stack = G__25986;
nbrstack = G__25987;
seen__$1 = G__25988;
edges = G__25989;
continue;
} else {
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,seen__$2], null);
} else {
return edges;
}
}
}
break;
}
}
});

loom.alg_generic.post_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq25963){
var G__25964 = cljs.core.first.call(null,seq25963);
var seq25963__$1 = cljs.core.next.call(null,seq25963);
var G__25965 = cljs.core.first.call(null,seq25963__$1);
var seq25963__$2 = cljs.core.next.call(null,seq25963__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25964,G__25965,seq25963__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__25991 = arguments.length;
switch (G__25991) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2 = (function (successors,start){
return loom.alg_generic.topsort_component.call(null,successors,start,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY);
});

loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4 = (function (successors,start,seen,explored){
var seen__$1 = seen;
var explored__$1 = explored;
var result = cljs.core.List.EMPTY;
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_.call(null,stack)){
return result;
} else {
var v = cljs.core.peek.call(null,stack);
var seen__$2 = cljs.core.conj.call(null,seen__$1,v);
var us = cljs.core.remove.call(null,explored__$1,successors.call(null,v));
if(cljs.core.seq.call(null,us)){
if(cljs.core.truth_(cljs.core.some.call(null,seen__$2,us))){
return null;
} else {
var G__25993 = seen__$2;
var G__25994 = explored__$1;
var G__25995 = result;
var G__25996 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__25993;
explored__$1 = G__25994;
result = G__25995;
stack = G__25996;
continue;
}
} else {
var G__25997 = seen__$2;
var G__25998 = cljs.core.conj.call(null,explored__$1,v);
var G__25999 = cljs.core.conj.call(null,result,v);
var G__26000 = cljs.core.pop.call(null,stack);
seen__$1 = G__25997;
explored__$1 = G__25998;
result = G__25999;
stack = G__26000;
continue;
}
}
break;
}
});

loom.alg_generic.topsort_component.cljs$lang$maxFixedArity = 4;

/**
 * Traverses a graph breadth-first from start, successors being a
 *   function that returns adjacent nodes. When :f is provided, returns a
 *   lazy seq of (f node predecessor-map depth) for each node traversed.
 *   Otherwise, returns a lazy seq of the nodes. When :when is provided,
 *   filters successors with (f neighbor predecessor depth).
 */
loom.alg_generic.bf_traverse = (function loom$alg_generic$bf_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26029 = arguments.length;
var i__4731__auto___26030 = (0);
while(true){
if((i__4731__auto___26030 < len__4730__auto___26029)){
args__4736__auto__.push((arguments[i__4731__auto___26030]));

var G__26031 = (i__4731__auto___26030 + (1));
i__4731__auto___26030 = G__26031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__26008){
var map__26009 = p__26008;
var map__26009__$1 = (((((!((map__26009 == null))))?(((((map__26009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26009):map__26009);
var f = cljs.core.get.call(null,map__26009__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__26009__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__26009__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__26009,map__26009__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__26009,map__26009__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__26018 = temp__5720__auto__;
var node = cljs.core.nth.call(null,vec__26018,(0),null);
var depth = cljs.core.nth.call(null,vec__26018,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__26018,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__26018,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen){
return (function (p1__26002_SHARP_){
return nbr_pred.call(null,p1__26002_SHARP_,node,(depth + (1)));
});})(vec__26018,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__26018,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen){
return (function (p1__26001_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__26001_SHARP_);
});})(vec__26018,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__26018,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__26021(s__26022){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__26018,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen){
return (function (){
var s__26022__$1 = s__26022;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__26022__$1);
if(temp__5720__auto____$1){
var s__26022__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26022__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__26022__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__26024 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__26023 = (0);
while(true){
if((i__26023 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__26023);
cljs.core.chunk_append.call(null,b__26024,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__26032 = (i__26023 + (1));
i__26023 = G__26032;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26024),loom$alg_generic$step_$_iter__26021.call(null,cljs.core.chunk_rest.call(null,s__26022__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26024),null);
}
} else {
var nbr = cljs.core.first.call(null,s__26022__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__26021.call(null,cljs.core.rest.call(null,s__26022__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__26018,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen))
,null,null));
});})(nbrs,vec__26018,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen))
;
return iter__4523__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__26018,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen){
return (function (p1__26003_SHARP_,p2__26004_SHARP_){
return cljs.core.assoc.call(null,p1__26003_SHARP_,p2__26004_SHARP_,node);
});})(nbrs,vec__26018,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen))
,preds,nbrs));
});})(vec__26018,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen){
return (function loom$alg_generic$iter__26025(s__26026){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen){
return (function (){
var s__26026__$1 = s__26026;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__26026__$1);
if(temp__5720__auto__){
var s__26026__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26026__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__26026__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__26028 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__26027 = (0);
while(true){
if((i__26027 < size__4522__auto__)){
var s = cljs.core._nth.call(null,c__4521__auto__,i__26027);
cljs.core.chunk_append.call(null,b__26028,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__26033 = (i__26027 + (1));
i__26027 = G__26033;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26028),loom$alg_generic$iter__26025.call(null,cljs.core.chunk_rest.call(null,s__26026__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26028),null);
}
} else {
var s = cljs.core.first.call(null,s__26026__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__26025.call(null,cljs.core.rest.call(null,s__26026__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__26009,map__26009__$1,f,when,seen))
;
return iter__4523__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq26005){
var G__26006 = cljs.core.first.call(null,seq26005);
var seq26005__$1 = cljs.core.next.call(null,seq26005);
var G__26007 = cljs.core.first.call(null,seq26005__$1);
var seq26005__$2 = cljs.core.next.call(null,seq26005__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26006,G__26007,seq26005__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26040 = arguments.length;
var i__4731__auto___26041 = (0);
while(true){
if((i__4731__auto___26041 < len__4730__auto___26040)){
args__4736__auto__.push((arguments[i__4731__auto___26041]));

var G__26042 = (i__4731__auto___26041 + (1));
i__4731__auto___26041 = G__26042;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__26037){
var map__26038 = p__26037;
var map__26038__$1 = (((((!((map__26038 == null))))?(((((map__26038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26038):map__26038);
var seen = cljs.core.get.call(null,map__26038__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__26038,map__26038__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__26038,map__26038__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq26034){
var G__26035 = cljs.core.first.call(null,seq26034);
var seq26034__$1 = cljs.core.next.call(null,seq26034);
var G__26036 = cljs.core.first.call(null,seq26034__$1);
var seq26034__$2 = cljs.core.next.call(null,seq26034__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26035,G__26036,seq26034__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26054 = arguments.length;
var i__4731__auto___26055 = (0);
while(true){
if((i__4731__auto___26055 < len__4730__auto___26054)){
args__4736__auto__.push((arguments[i__4731__auto___26055]));

var G__26056 = (i__4731__auto___26055 + (1));
i__4731__auto___26055 = G__26056;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__26047){
var map__26048 = p__26047;
var map__26048__$1 = (((((!((map__26048 == null))))?(((((map__26048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26048):map__26048);
var opts = map__26048__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__5720__auto__ = cljs.core.some.call(null,((function (opts__$1,map__26048,map__26048__$1,opts){
return (function (p__26050){
var vec__26051 = p__26050;
var _ = cljs.core.nth.call(null,vec__26051,(0),null);
var pm = cljs.core.nth.call(null,vec__26051,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__26051,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__26048,map__26048__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__5720__auto__)){
var preds = temp__5720__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq26043){
var G__26044 = cljs.core.first.call(null,seq26043);
var seq26043__$1 = cljs.core.next.call(null,seq26043);
var G__26045 = cljs.core.first.call(null,seq26043__$1);
var seq26043__$2 = cljs.core.next.call(null,seq26043__$1);
var G__26046 = cljs.core.first.call(null,seq26043__$2);
var seq26043__$3 = cljs.core.next.call(null,seq26043__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26044,G__26045,G__26046,seq26043__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__26057 = m2;
var G__26058 = m1;
m1 = G__26057;
m2 = G__26058;
continue;
} else {
return cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,m2),cljs.core.keys.call(null,m1));
}
break;
}
});
loom.alg_generic.bf_path_bi = (function loom$alg_generic$bf_path_bi(outgoing,predecessors,start,end){
throw (new Error("Unsupported operation `bf-path-bi`"));
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__26060(s__26061){
return (new cljs.core.LazySeq(null,(function (){
var s__26061__$1 = s__26061;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__26061__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__26061__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__26060_$_iter__26062(s__26063){
return (new cljs.core.LazySeq(null,((function (s__26061__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__26063__$1 = s__26063;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__26063__$1);
if(temp__5720__auto____$1){
var s__26063__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26063__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__26063__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__26065 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__26064 = (0);
while(true){
if((i__26064 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__26064);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
cljs.core.chunk_append.call(null,b__26065,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__26066 = (i__26064 + (1));
i__26064 = G__26066;
continue;
} else {
var G__26067 = (i__26064 + (1));
i__26064 = G__26067;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26065),loom$alg_generic$reverse_edges_$_iter__26060_$_iter__26062.call(null,cljs.core.chunk_rest.call(null,s__26063__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26065),null);
}
} else {
var nbr = cljs.core.first.call(null,s__26063__$2);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__26060_$_iter__26062.call(null,cljs.core.rest.call(null,s__26063__$2)));
} else {
var G__26068 = cljs.core.rest.call(null,s__26063__$2);
s__26063__$1 = G__26068;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__26061__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__26061__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,successor_fn.call(null,node)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__26060.call(null,cljs.core.rest.call(null,s__26061__$1)));
} else {
var G__26069 = cljs.core.rest.call(null,s__26061__$1);
s__26061__$1 = G__26069;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__26070(s__26071){
return (new cljs.core.LazySeq(null,(function (){
var s__26071__$1 = s__26071;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__26071__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__26071__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__26070_$_iter__26072(s__26073){
return (new cljs.core.LazySeq(null,((function (s__26071__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__26073__$1 = s__26073;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__26073__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__26073__$1,s__26071__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__26070_$_iter__26072_$_iter__26074(s__26075){
return (new cljs.core.LazySeq(null,((function (s__26073__$1,s__26071__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__26075__$1 = s__26075;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__26075__$1);
if(temp__5720__auto____$2){
var s__26075__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26075__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__26075__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__26077 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__26076 = (0);
while(true){
if((i__26076 < size__4522__auto__)){
var to = cljs.core._nth.call(null,c__4521__auto__,i__26076);
cljs.core.chunk_append.call(null,b__26077,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__26078 = (i__26076 + (1));
i__26076 = G__26078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26077),loom$alg_generic$conj_paths_$_iter__26070_$_iter__26072_$_iter__26074.call(null,cljs.core.chunk_rest.call(null,s__26075__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26077),null);
}
} else {
var to = cljs.core.first.call(null,s__26075__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__26070_$_iter__26072_$_iter__26074.call(null,cljs.core.rest.call(null,s__26075__$2)));
}
} else {
return null;
}
break;
}
});})(s__26073__$1,s__26071__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__26073__$1,s__26071__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__26070_$_iter__26072.call(null,cljs.core.rest.call(null,s__26073__$1)));
} else {
var G__26079 = cljs.core.rest.call(null,s__26073__$1);
s__26073__$1 = G__26079;
continue;
}
} else {
return null;
}
break;
}
});})(s__26071__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__26071__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__26070.call(null,cljs.core.rest.call(null,s__26071__$1)));
} else {
var G__26080 = cljs.core.rest.call(null,s__26071__$1);
s__26071__$1 = G__26080;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,matches);
});
/**
 * Using a bidirectional breadth-first search, returns all shortest
 *   paths from start to end; predecessors is called on end and each
 *   preceding node, successors is called on start, etc.
 */
loom.alg_generic.bf_paths_bi = (function loom$alg_generic$bf_paths_bi(successors,predecessors,start,end){
var find_succs = cljs.core.partial.call(null,loom.alg_generic.reverse_edges,successors);
var find_preds = cljs.core.partial.call(null,loom.alg_generic.reverse_edges,predecessors);
var overlaps = ((function (find_succs,find_preds){
return (function (coll,q){
return cljs.core.seq.call(null,cljs.core.filter.call(null,((function (find_succs,find_preds){
return (function (p1__26081_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__26081_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__26082){
var vec__26083 = p__26082;
var key = cljs.core.nth.call(null,vec__26083,(0),null);
var val = cljs.core.nth.call(null,vec__26083,(1),null);
return cljs.core.assoc_BANG_.call(null,map__$1,key,cljs.core.conj.call(null,cljs.core.get.call(null,map__$1,key,cljs.core.PersistentHashSet.EMPTY),val));
});})(find_succs,find_preds,overlaps))
,cljs.core.transient$.call(null,map),pairs));
});})(find_succs,find_preds,overlaps))
;
var outgoing = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var incoming = cljs.core.PersistentArrayMap.createAsIfByAssoc([end,null]);
var q1 = (new cljs.core.List(null,start,null,(1),null));
var q2 = (new cljs.core.List(null,end,null,(1),null));
while(true){
if(((cljs.core.seq.call(null,q1)) && (cljs.core.seq.call(null,q2)))){
if((cljs.core.count.call(null,q1) <= cljs.core.count.call(null,q2))){
var pairs = find_succs.call(null,q1,outgoing);
var outgoing__$1 = map_set_pairs.call(null,outgoing,pairs);
var q1__$1 = cljs.core.map.call(null,cljs.core.first,pairs);
var temp__5718__auto__ = overlaps.call(null,incoming,q1__$1);
if(temp__5718__auto__){
var all = temp__5718__auto__;
return loom.alg_generic.conj_paths.call(null,outgoing__$1,incoming,cljs.core.set.call(null,all));
} else {
var G__26086 = outgoing__$1;
var G__26087 = incoming;
var G__26088 = q1__$1;
var G__26089 = q2;
outgoing = G__26086;
incoming = G__26087;
q1 = G__26088;
q2 = G__26089;
continue;
}
} else {
var pairs = find_preds.call(null,q2,incoming);
var incoming__$1 = map_set_pairs.call(null,incoming,pairs);
var q2__$1 = cljs.core.map.call(null,cljs.core.first,pairs);
var temp__5718__auto__ = overlaps.call(null,outgoing,q2__$1);
if(temp__5718__auto__){
var all = temp__5718__auto__;
return loom.alg_generic.conj_paths.call(null,outgoing,incoming__$1,cljs.core.set.call(null,all));
} else {
var G__26090 = outgoing;
var G__26091 = incoming__$1;
var G__26092 = q1;
var G__26093 = q2__$1;
outgoing = G__26090;
incoming = G__26091;
q1 = G__26092;
q2 = G__26093;
continue;
}
}
} else {
return null;
}
break;
}
});
/**
 * Returns a lazy-seq of [current-node state] where state is a map in the
 *   format {node [distance predecessor]}. When f is provided, returns
 *   a lazy-seq of (f node state) for each node
 */
loom.alg_generic.dijkstra_traverse = (function loom$alg_generic$dijkstra_traverse(var_args){
var G__26097 = arguments.length;
switch (G__26097) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__26109){
var vec__26110 = p__26109;
var state = cljs.core.nth.call(null,vec__26110,(0),null);
var pq = cljs.core.nth.call(null,vec__26110,(1),null);
var temp__5720__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__26113 = temp__5720__auto__;
var dist_su = cljs.core.nth.call(null,vec__26113,(0),null);
var _ = cljs.core.nth.call(null,vec__26113,(1),null);
var u = cljs.core.nth.call(null,vec__26113,(2),null);
var fpq = vec__26113;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__26113,dist_su,_,u,fpq,temp__5720__auto__,vec__26110,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__26113,dist_su,_,u,fpq,temp__5720__auto__,vec__26110,state,pq){
return (function (p__26116,v){
var vec__26117 = p__26116;
var state__$1 = cljs.core.nth.call(null,vec__26117,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__26117,(1),null);
var dist_suv = (dist_su + dist.call(null,u,v));
var dist_sv = cljs.core.first.call(null,state__$1.call(null,v));
if(cljs.core.truth_((function (){var and__4120__auto__ = dist_sv;
if(cljs.core.truth_(and__4120__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.call(null,pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash.call(null,v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.call(null,pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash.call(null,v),v], null))], null);
}
});})(vec__26113,dist_su,_,u,fpq,temp__5720__auto__,vec__26110,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__26113,dist_su,_,u,fpq,temp__5720__auto__,vec__26110,state,pq))
,null,null)));
} else {
return null;
}
});
return step.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([start,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null)]),cljs.core.sorted_set.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.hash.call(null,start),start], null))], null));
});

loom.alg_generic.dijkstra_traverse.cljs$lang$maxFixedArity = 4;

/**
 * Finds all shortest distances from start, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a map in the format {node {successor distance}}
 */
loom.alg_generic.dijkstra_span = (function loom$alg_generic$dijkstra_span(successors,dist,start){
return cljs.core.reduce.call(null,(function (span,p__26121){
var vec__26122 = p__26121;
var n = cljs.core.nth.call(null,vec__26122,(0),null);
var vec__26125 = cljs.core.nth.call(null,vec__26122,(1),null);
var d = cljs.core.nth.call(null,vec__26125,(0),null);
var p = cljs.core.nth.call(null,vec__26125,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc_in.call(null,span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,n], null),d);
} else {
return span;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.second.call(null,cljs.core.last.call(null,loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start))));
});
/**
 * Finds the shortest path from start to end, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a vector: [path distance]
 */
loom.alg_generic.dijkstra_path_dist = (function loom$alg_generic$dijkstra_path_dist(successors,dist,start,end){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__26128){
var vec__26129 = p__26128;
var node = cljs.core.nth.call(null,vec__26129,(0),null);
var _ = cljs.core.nth.call(null,vec__26129,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__26132 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__26132,(0),null);
var end_state = cljs.core.nth.call(null,vec__26132,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,cljs.core.comp.call(null,cljs.core.second,end_state),end)),cljs.core.first.call(null,end_state.call(null,end))], null);
} else {
return null;
}
});
/**
 * Finds the shortest path from start to end, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2)
 */
loom.alg_generic.dijkstra_path = (function loom$alg_generic$dijkstra_path(successors,dist,start,end){
return cljs.core.first.call(null,loom.alg_generic.dijkstra_path_dist.call(null,successors,dist,start,end));
});
loom.alg_generic.bits_per_long = cljs.core.long$.call(null,(32));
/**
 * Returns the number of longs required to store bits count bits in a bitmap.
 */
loom.alg_generic.bm_longs = (function loom$alg_generic$bm_longs(bits){
return cljs.core.long$.call(null,Math.ceil((bits / loom.alg_generic.bits_per_long)));
});
/**
 * Create new empty bitmap.
 */
loom.alg_generic.bm_new = (function loom$alg_generic$bm_new(){
return cljs.core.long_array.call(null,(1));
});
loom.alg_generic.bm_copy = (function loom$alg_generic$bm_copy(bm,size){
return bm.slice((0),size);
});
/**
 * Set boolean state of bit in 'bitmap at 'idx to true.
 */
loom.alg_generic.bm_set = (function loom$alg_generic$bm_set(bitmap,idx){
var size = (function (){var x__4219__auto__ = cljs.core.count.call(null,bitmap);
var y__4220__auto__ = loom.alg_generic.bm_longs.call(null,(idx + (1)));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var new_bitmap = loom.alg_generic.bm_copy.call(null,bitmap,size);
var chunk = cljs.core.quot.call(null,idx,loom.alg_generic.bits_per_long);
var offset = cljs.core.mod.call(null,idx,loom.alg_generic.bits_per_long);
var mask = ((0) | (1 << offset));
var value = (new_bitmap[chunk]);
var new_value = (value | mask);
(new_bitmap[chunk] = new_value);

return new_bitmap;
});
/**
 * Get boolean state of bit in 'bitmap at 'idx.
 */
loom.alg_generic.bm_get = (function loom$alg_generic$bm_get(bitmap,idx){
if((loom.alg_generic.bm_longs.call(null,(idx + (1))) <= cljs.core.count.call(null,bitmap))){
var chunk = cljs.core.quot.call(null,idx,loom.alg_generic.bits_per_long);
var offset = cljs.core.mod.call(null,idx,loom.alg_generic.bits_per_long);
var mask = ((0) | (1 << offset));
var value = (bitmap[chunk]);
var masked_value = (value & mask);
return (!((masked_value === (0))));
} else {
return null;
}
});
/**
 * Logically OR 'bitmaps together.
 */
loom.alg_generic.bm_or = (function loom$alg_generic$bm_or(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26203 = arguments.length;
var i__4731__auto___26204 = (0);
while(true){
if((i__4731__auto___26204 < len__4730__auto___26203)){
args__4736__auto__.push((arguments[i__4731__auto___26204]));

var G__26205 = (i__4731__auto___26204 + (1));
i__4731__auto___26204 = G__26205;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_.call(null,bitmaps)){
return loom.alg_generic.bm_new.call(null);
} else {
var size = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,bitmaps));
var new_bitmap = loom.alg_generic.bm_copy.call(null,cljs.core.first.call(null,bitmaps),size);
var seq__26139_26206 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__26146_26207 = null;
var count__26147_26208 = (0);
var i__26148_26209 = (0);
while(true){
if((i__26148_26209 < count__26147_26208)){
var bitmap_26210 = cljs.core._nth.call(null,chunk__26146_26207,i__26148_26209);
var seq__26149_26211 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_26210));
var chunk__26151_26212 = null;
var count__26152_26213 = (0);
var i__26153_26214 = (0);
while(true){
if((i__26153_26214 < count__26152_26213)){
var vec__26185_26215 = cljs.core._nth.call(null,chunk__26151_26212,i__26153_26214);
var idx_26216 = cljs.core.nth.call(null,vec__26185_26215,(0),null);
var value_26217 = cljs.core.nth.call(null,vec__26185_26215,(1),null);
var masked_value_26218 = (value_26217 | (new_bitmap[idx_26216]));
(new_bitmap[idx_26216] = masked_value_26218);


var G__26219 = seq__26149_26211;
var G__26220 = chunk__26151_26212;
var G__26221 = count__26152_26213;
var G__26222 = (i__26153_26214 + (1));
seq__26149_26211 = G__26219;
chunk__26151_26212 = G__26220;
count__26152_26213 = G__26221;
i__26153_26214 = G__26222;
continue;
} else {
var temp__5720__auto___26223 = cljs.core.seq.call(null,seq__26149_26211);
if(temp__5720__auto___26223){
var seq__26149_26224__$1 = temp__5720__auto___26223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26149_26224__$1)){
var c__4550__auto___26225 = cljs.core.chunk_first.call(null,seq__26149_26224__$1);
var G__26226 = cljs.core.chunk_rest.call(null,seq__26149_26224__$1);
var G__26227 = c__4550__auto___26225;
var G__26228 = cljs.core.count.call(null,c__4550__auto___26225);
var G__26229 = (0);
seq__26149_26211 = G__26226;
chunk__26151_26212 = G__26227;
count__26152_26213 = G__26228;
i__26153_26214 = G__26229;
continue;
} else {
var vec__26188_26230 = cljs.core.first.call(null,seq__26149_26224__$1);
var idx_26231 = cljs.core.nth.call(null,vec__26188_26230,(0),null);
var value_26232 = cljs.core.nth.call(null,vec__26188_26230,(1),null);
var masked_value_26233 = (value_26232 | (new_bitmap[idx_26231]));
(new_bitmap[idx_26231] = masked_value_26233);


var G__26234 = cljs.core.next.call(null,seq__26149_26224__$1);
var G__26235 = null;
var G__26236 = (0);
var G__26237 = (0);
seq__26149_26211 = G__26234;
chunk__26151_26212 = G__26235;
count__26152_26213 = G__26236;
i__26153_26214 = G__26237;
continue;
}
} else {
}
}
break;
}

var G__26238 = seq__26139_26206;
var G__26239 = chunk__26146_26207;
var G__26240 = count__26147_26208;
var G__26241 = (i__26148_26209 + (1));
seq__26139_26206 = G__26238;
chunk__26146_26207 = G__26239;
count__26147_26208 = G__26240;
i__26148_26209 = G__26241;
continue;
} else {
var temp__5720__auto___26242 = cljs.core.seq.call(null,seq__26139_26206);
if(temp__5720__auto___26242){
var seq__26139_26243__$1 = temp__5720__auto___26242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26139_26243__$1)){
var c__4550__auto___26244 = cljs.core.chunk_first.call(null,seq__26139_26243__$1);
var G__26245 = cljs.core.chunk_rest.call(null,seq__26139_26243__$1);
var G__26246 = c__4550__auto___26244;
var G__26247 = cljs.core.count.call(null,c__4550__auto___26244);
var G__26248 = (0);
seq__26139_26206 = G__26245;
chunk__26146_26207 = G__26246;
count__26147_26208 = G__26247;
i__26148_26209 = G__26248;
continue;
} else {
var bitmap_26249 = cljs.core.first.call(null,seq__26139_26243__$1);
var seq__26140_26250 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_26249));
var chunk__26142_26251 = null;
var count__26143_26252 = (0);
var i__26144_26253 = (0);
while(true){
if((i__26144_26253 < count__26143_26252)){
var vec__26197_26254 = cljs.core._nth.call(null,chunk__26142_26251,i__26144_26253);
var idx_26255 = cljs.core.nth.call(null,vec__26197_26254,(0),null);
var value_26256 = cljs.core.nth.call(null,vec__26197_26254,(1),null);
var masked_value_26257 = (value_26256 | (new_bitmap[idx_26255]));
(new_bitmap[idx_26255] = masked_value_26257);


var G__26258 = seq__26140_26250;
var G__26259 = chunk__26142_26251;
var G__26260 = count__26143_26252;
var G__26261 = (i__26144_26253 + (1));
seq__26140_26250 = G__26258;
chunk__26142_26251 = G__26259;
count__26143_26252 = G__26260;
i__26144_26253 = G__26261;
continue;
} else {
var temp__5720__auto___26262__$1 = cljs.core.seq.call(null,seq__26140_26250);
if(temp__5720__auto___26262__$1){
var seq__26140_26263__$1 = temp__5720__auto___26262__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26140_26263__$1)){
var c__4550__auto___26264 = cljs.core.chunk_first.call(null,seq__26140_26263__$1);
var G__26265 = cljs.core.chunk_rest.call(null,seq__26140_26263__$1);
var G__26266 = c__4550__auto___26264;
var G__26267 = cljs.core.count.call(null,c__4550__auto___26264);
var G__26268 = (0);
seq__26140_26250 = G__26265;
chunk__26142_26251 = G__26266;
count__26143_26252 = G__26267;
i__26144_26253 = G__26268;
continue;
} else {
var vec__26200_26269 = cljs.core.first.call(null,seq__26140_26263__$1);
var idx_26270 = cljs.core.nth.call(null,vec__26200_26269,(0),null);
var value_26271 = cljs.core.nth.call(null,vec__26200_26269,(1),null);
var masked_value_26272 = (value_26271 | (new_bitmap[idx_26270]));
(new_bitmap[idx_26270] = masked_value_26272);


var G__26273 = cljs.core.next.call(null,seq__26140_26263__$1);
var G__26274 = null;
var G__26275 = (0);
var G__26276 = (0);
seq__26140_26250 = G__26273;
chunk__26142_26251 = G__26274;
count__26143_26252 = G__26275;
i__26144_26253 = G__26276;
continue;
}
} else {
}
}
break;
}

var G__26277 = cljs.core.next.call(null,seq__26139_26243__$1);
var G__26278 = null;
var G__26279 = (0);
var G__26280 = (0);
seq__26139_26206 = G__26277;
chunk__26146_26207 = G__26278;
count__26147_26208 = G__26279;
i__26148_26209 = G__26280;
continue;
}
} else {
}
}
break;
}

return new_bitmap;
}
});

loom.alg_generic.bm_or.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq26138){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26138));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__26281(s__26282){
return (new cljs.core.LazySeq(null,(function (){
var s__26282__$1 = s__26282;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__26282__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__26282__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__26281_$_iter__26283(s__26284){
return (new cljs.core.LazySeq(null,((function (s__26282__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__26284__$1 = s__26284;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__26284__$1);
if(temp__5720__auto____$1){
var s__26284__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26284__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__26284__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__26286 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__26285 = (0);
while(true){
if((i__26285 < size__4522__auto__)){
var offset = cljs.core._nth.call(null,c__4521__auto__,i__26285);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__26286,idx);

var G__26287 = (i__26285 + (1));
i__26285 = G__26287;
continue;
} else {
var G__26288 = (i__26285 + (1));
i__26285 = G__26288;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26286),loom$alg_generic$bm_get_indicies_$_iter__26281_$_iter__26283.call(null,cljs.core.chunk_rest.call(null,s__26284__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26286),null);
}
} else {
var offset = cljs.core.first.call(null,s__26284__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__26281_$_iter__26283.call(null,cljs.core.rest.call(null,s__26284__$2)));
} else {
var G__26289 = cljs.core.rest.call(null,s__26284__$2);
s__26284__$1 = G__26289;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__26282__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__26282__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__26281.call(null,cljs.core.rest.call(null,s__26282__$1)));
} else {
var G__26290 = cljs.core.rest.call(null,s__26282__$1);
s__26282__$1 = G__26290;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,bitmap)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
loom.alg_generic.Ancestry = (function (node__GT_idx,idx__GT_node,bitmaps,__meta,__extmap,__hash){
this.node__GT_idx = node__GT_idx;
this.idx__GT_node = idx__GT_node;
this.bitmaps = bitmaps;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k26292,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__26296 = k26292;
var G__26296__$1 = (((G__26296 instanceof cljs.core.Keyword))?G__26296.fqn:null);
switch (G__26296__$1) {
case "node->idx":
return self__.node__GT_idx;

break;
case "idx->node":
return self__.idx__GT_node;

break;
case "bitmaps":
return self__.bitmaps;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26292,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__26297){
var vec__26298 = p__26297;
var k__4408__auto__ = cljs.core.nth.call(null,vec__26298,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__26298,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26291){
var self__ = this;
var G__26291__$1 = this;
return (new cljs.core.RecordIter((0),G__26291__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26293,other26294){
var self__ = this;
var this26293__$1 = this;
return (((!((other26294 == null)))) && ((this26293__$1.constructor === other26294.constructor)) && (cljs.core._EQ_.call(null,this26293__$1.node__GT_idx,other26294.node__GT_idx)) && (cljs.core._EQ_.call(null,this26293__$1.idx__GT_node,other26294.idx__GT_node)) && (cljs.core._EQ_.call(null,this26293__$1.bitmaps,other26294.bitmaps)) && (cljs.core._EQ_.call(null,this26293__$1.__extmap,other26294.__extmap)));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__26291){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__26301 = cljs.core.keyword_identical_QMARK_;
var expr__26302 = k__4393__auto__;
if(cljs.core.truth_(pred__26301.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__26302))){
return (new loom.alg_generic.Ancestry(G__26291,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26301.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__26302))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__26291,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26301.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__26302))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__26291,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__26291),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__26291){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__26291,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.alg_generic.Ancestry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node->idx","node->idx",1793236754,null),new cljs.core.Symbol(null,"idx->node","idx->node",-842528594,null),new cljs.core.Symbol(null,"bitmaps","bitmaps",-1506736927,null)], null);
});

loom.alg_generic.Ancestry.cljs$lang$type = true;

loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.alg-generic/Ancestry",null,(1),null));
});

loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.alg-generic/Ancestry");
});

/**
 * Positional factory function for loom.alg-generic/Ancestry.
 */
loom.alg_generic.__GT_Ancestry = (function loom$alg_generic$__GT_Ancestry(node__GT_idx,idx__GT_node,bitmaps){
return (new loom.alg_generic.Ancestry(node__GT_idx,idx__GT_node,bitmaps,null,null,null));
});

/**
 * Factory function for loom.alg-generic/Ancestry, taking a map of keywords to field values.
 */
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__26295){
var extmap__4424__auto__ = (function (){var G__26304 = cljs.core.dissoc.call(null,G__26295,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
if(cljs.core.record_QMARK_.call(null,G__26295)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__26304);
} else {
return G__26304;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__26295),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__26295),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__26295),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

/**
 * Create a new, empty Ancestry cache.
 */
loom.alg_generic.ancestry_new = (function loom$alg_generic$ancestry_new(){
return loom.alg_generic.__GT_Ancestry.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
});
/**
 * Finds if a 'node is contained in the 'ancestry cache.
 */
loom.alg_generic.ancestry_contains_QMARK_ = (function loom$alg_generic$ancestry_contains_QMARK_(ancestry,node){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry),node);
});
/**
 * Adds a 'node and its 'parents associations to the 'ancestry cache.
 */
loom.alg_generic.ancestry_add = (function loom$alg_generic$ancestry_add(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26311 = arguments.length;
var i__4731__auto___26312 = (0);
while(true){
if((i__4731__auto___26312 < len__4730__auto___26311)){
args__4736__auto__.push((arguments[i__4731__auto___26312]));

var G__26313 = (i__4731__auto___26312 + (1));
i__4731__auto___26312 = G__26313;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(loom.alg_generic.ancestry_contains_QMARK_.call(null,ancestry,node)){
return ancestry;
} else {
var map__26309 = ancestry;
var map__26309__$1 = (((((!((map__26309 == null))))?(((((map__26309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26309):map__26309);
var node__GT_idx = cljs.core.get.call(null,map__26309__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__26309__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__26309__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var nid = cljs.core.count.call(null,node__GT_idx);
var node__GT_idx__$1 = cljs.core.assoc.call(null,node__GT_idx,node,nid);
var idx__GT_node__$1 = cljs.core.assoc.call(null,idx__GT_node,nid,node);
var pidxs = cljs.core.map.call(null,node__GT_idx__$1,parents);
var new_bitmap = ((cljs.core.empty_QMARK_.call(null,pidxs))?loom.alg_generic.bm_new.call(null):cljs.core.apply.call(null,loom.alg_generic.bm_or,cljs.core.map.call(null,bitmaps,pidxs)));
var new_bitmap__$1 = cljs.core.reduce.call(null,loom.alg_generic.bm_set,new_bitmap,pidxs);
var bitmaps__$1 = cljs.core.conj.call(null,bitmaps,new_bitmap__$1);
return loom.alg_generic.__GT_Ancestry.call(null,node__GT_idx__$1,idx__GT_node__$1,bitmaps__$1);
}
});

loom.alg_generic.ancestry_add.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq26306){
var G__26307 = cljs.core.first.call(null,seq26306);
var seq26306__$1 = cljs.core.next.call(null,seq26306);
var G__26308 = cljs.core.first.call(null,seq26306__$1);
var seq26306__$2 = cljs.core.next.call(null,seq26306__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26307,G__26308,seq26306__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__26314 = ancestry;
var map__26314__$1 = (((((!((map__26314 == null))))?(((((map__26314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26314):map__26314);
var node__GT_idx = cljs.core.get.call(null,map__26314__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__26314__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,childer);
var pidx = node__GT_idx.call(null,parenter);
return cljs.core.boolean$.call(null,(cljs.core.truth_((function (){var and__4120__auto__ = cidx;
if(cljs.core.truth_(and__4120__auto__)){
return pidx;
} else {
return and__4120__auto__;
}
})())?loom.alg_generic.bm_get.call(null,cljs.core.get.call(null,bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__26316 = ancestry;
var map__26316__$1 = (((((!((map__26316 == null))))?(((((map__26316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26316):map__26316);
var node__GT_idx = cljs.core.get.call(null,map__26316__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__26316__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__26316__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=alg_generic.js.map?rel=1610481563689
