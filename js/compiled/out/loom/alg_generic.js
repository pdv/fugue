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
return (function (p1__25876_SHARP_){
return loom.alg_generic.paths.call(null,preds,cljs.core.conj.call(null,path,p1__25876_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__25875_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__25875_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__25877_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__25877_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__25878){
var vec__25879 = p__25878;
var n = cljs.core.nth.call(null,vec__25879,(0),null);
var p = cljs.core.nth.call(null,vec__25879,(1),null);
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
var len__4730__auto___25888 = arguments.length;
var i__4731__auto___25889 = (0);
while(true){
if((i__4731__auto___25889 < len__4730__auto___25888)){
args__4736__auto__.push((arguments[i__4731__auto___25889]));

var G__25890 = (i__4731__auto___25889 + (1));
i__4731__auto___25889 = G__25890;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25885){
var map__25886 = p__25885;
var map__25886__$1 = (((((!((map__25886 == null))))?(((((map__25886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25886):map__25886);
var seen = cljs.core.get.call(null,map__25886__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__25886,map__25886__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__25886,map__25886__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__25886,map__25886__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__25886,map__25886__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq25882){
var G__25883 = cljs.core.first.call(null,seq25882);
var seq25882__$1 = cljs.core.next.call(null,seq25882);
var G__25884 = cljs.core.first.call(null,seq25882__$1);
var seq25882__$2 = cljs.core.next.call(null,seq25882__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25883,G__25884,seq25882__$2);
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
var len__4730__auto___25897 = arguments.length;
var i__4731__auto___25898 = (0);
while(true){
if((i__4731__auto___25898 < len__4730__auto___25897)){
args__4736__auto__.push((arguments[i__4731__auto___25898]));

var G__25899 = (i__4731__auto___25898 + (1));
i__4731__auto___25898 = G__25899;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25894){
var map__25895 = p__25894;
var map__25895__$1 = (((((!((map__25895 == null))))?(((((map__25895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25895):map__25895);
var seen = cljs.core.get.call(null,map__25895__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__25895,map__25895__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__25895,map__25895__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__25895,map__25895__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__25900 = successors__$1;
var G__25901 = parent;
var G__25902 = cljs.core.peek.call(null,nbrstack);
var G__25903 = cljs.core.pop.call(null,stack);
var G__25904 = cljs.core.pop.call(null,nbrstack);
var G__25905 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__25900;
start__$1 = G__25901;
nbrs = G__25902;
stack = G__25903;
nbrstack = G__25904;
seen__$1 = G__25905;
continue;
} else {
return null;
}
}
break;
}
});})(map__25895,map__25895__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq25891){
var G__25892 = cljs.core.first.call(null,seq25891);
var seq25891__$1 = cljs.core.next.call(null,seq25891);
var G__25893 = cljs.core.first.call(null,seq25891__$1);
var seq25891__$2 = cljs.core.next.call(null,seq25891__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25892,G__25893,seq25891__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25912 = arguments.length;
var i__4731__auto___25913 = (0);
while(true){
if((i__4731__auto___25913 < len__4730__auto___25912)){
args__4736__auto__.push((arguments[i__4731__auto___25913]));

var G__25914 = (i__4731__auto___25913 + (1));
i__4731__auto___25913 = G__25914;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25909){
var map__25910 = p__25909;
var map__25910__$1 = (((((!((map__25910 == null))))?(((((map__25910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25910):map__25910);
var seen = cljs.core.get.call(null,map__25910__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__25910__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__25915 = seen__$2;
var G__25916 = cljs.core.assoc.call(null,preds,u,v);
var G__25917 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__25915;
preds = G__25916;
stack = G__25917;
continue;
} else {
var G__25918 = seen__$2;
var G__25919 = preds;
var G__25920 = cljs.core.pop.call(null,stack);
seen__$1 = G__25918;
preds = G__25919;
stack = G__25920;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq25906){
var G__25907 = cljs.core.first.call(null,seq25906);
var seq25906__$1 = cljs.core.next.call(null,seq25906);
var G__25908 = cljs.core.first.call(null,seq25906__$1);
var seq25906__$2 = cljs.core.next.call(null,seq25906__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25907,G__25908,seq25906__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25927 = arguments.length;
var i__4731__auto___25928 = (0);
while(true){
if((i__4731__auto___25928 < len__4730__auto___25927)){
args__4736__auto__.push((arguments[i__4731__auto___25928]));

var G__25929 = (i__4731__auto___25928 + (1));
i__4731__auto___25928 = G__25929;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25924){
var map__25925 = p__25924;
var map__25925__$1 = (((((!((map__25925 == null))))?(((((map__25925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25925):map__25925);
var seen = cljs.core.get.call(null,map__25925__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__25925__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__25930 = seen__$2;
var G__25931 = cljs.core.conj.call(null,result,v);
var G__25932 = cljs.core.pop.call(null,stack);
seen__$1 = G__25930;
result = G__25931;
stack = G__25932;
continue;
} else {
var G__25933 = seen__$2;
var G__25934 = result;
var G__25935 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__25933;
result = G__25934;
stack = G__25935;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq25921){
var G__25922 = cljs.core.first.call(null,seq25921);
var seq25921__$1 = cljs.core.next.call(null,seq25921);
var G__25923 = cljs.core.first.call(null,seq25921__$1);
var seq25921__$2 = cljs.core.next.call(null,seq25921__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25922,G__25923,seq25921__$2);
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
var len__4730__auto___25942 = arguments.length;
var i__4731__auto___25943 = (0);
while(true){
if((i__4731__auto___25943 < len__4730__auto___25942)){
args__4736__auto__.push((arguments[i__4731__auto___25943]));

var G__25944 = (i__4731__auto___25943 + (1));
i__4731__auto___25943 = G__25944;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25939){
var map__25940 = p__25939;
var map__25940__$1 = (((((!((map__25940 == null))))?(((((map__25940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25940):map__25940);
var seen = cljs.core.get.call(null,map__25940__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__25940__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__25945 = start__$1;
var G__25946 = cljs.core.next.call(null,nbrs);
var G__25947 = stack;
var G__25948 = nbrstack;
var G__25949 = seen__$2;
var G__25950 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__25945;
nbrs = G__25946;
stack = G__25947;
nbrstack = G__25948;
seen__$1 = G__25949;
edges = G__25950;
continue;
} else {
var G__25951 = nbr;
var G__25952 = successors.call(null,nbr);
var G__25953 = cljs.core.conj.call(null,stack,start__$1);
var G__25954 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__25955 = seen__$2;
var G__25956 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__25951;
nbrs = G__25952;
stack = G__25953;
nbrstack = G__25954;
seen__$1 = G__25955;
edges = G__25956;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__25957 = parent;
var G__25958 = cljs.core.peek.call(null,nbrstack);
var G__25959 = cljs.core.pop.call(null,stack);
var G__25960 = cljs.core.pop.call(null,nbrstack);
var G__25961 = seen__$2;
var G__25962 = edges;
start__$1 = G__25957;
nbrs = G__25958;
stack = G__25959;
nbrstack = G__25960;
seen__$1 = G__25961;
edges = G__25962;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq25936){
var G__25937 = cljs.core.first.call(null,seq25936);
var seq25936__$1 = cljs.core.next.call(null,seq25936);
var G__25938 = cljs.core.first.call(null,seq25936__$1);
var seq25936__$2 = cljs.core.next.call(null,seq25936__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25937,G__25938,seq25936__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__25964 = arguments.length;
switch (G__25964) {
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
var G__25966 = seen__$2;
var G__25967 = explored__$1;
var G__25968 = result;
var G__25969 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__25966;
explored__$1 = G__25967;
result = G__25968;
stack = G__25969;
continue;
}
} else {
var G__25970 = seen__$2;
var G__25971 = cljs.core.conj.call(null,explored__$1,v);
var G__25972 = cljs.core.conj.call(null,result,v);
var G__25973 = cljs.core.pop.call(null,stack);
seen__$1 = G__25970;
explored__$1 = G__25971;
result = G__25972;
stack = G__25973;
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
var len__4730__auto___26002 = arguments.length;
var i__4731__auto___26003 = (0);
while(true){
if((i__4731__auto___26003 < len__4730__auto___26002)){
args__4736__auto__.push((arguments[i__4731__auto___26003]));

var G__26004 = (i__4731__auto___26003 + (1));
i__4731__auto___26003 = G__26004;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25981){
var map__25982 = p__25981;
var map__25982__$1 = (((((!((map__25982 == null))))?(((((map__25982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25982):map__25982);
var f = cljs.core.get.call(null,map__25982__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__25982__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__25982__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__25982,map__25982__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__25982,map__25982__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__25991 = temp__5720__auto__;
var node = cljs.core.nth.call(null,vec__25991,(0),null);
var depth = cljs.core.nth.call(null,vec__25991,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__25991,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__25991,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen){
return (function (p1__25975_SHARP_){
return nbr_pred.call(null,p1__25975_SHARP_,node,(depth + (1)));
});})(vec__25991,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__25991,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen){
return (function (p1__25974_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__25974_SHARP_);
});})(vec__25991,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__25991,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__25994(s__25995){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__25991,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen){
return (function (){
var s__25995__$1 = s__25995;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__25995__$1);
if(temp__5720__auto____$1){
var s__25995__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25995__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25995__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25997 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25996 = (0);
while(true){
if((i__25996 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__25996);
cljs.core.chunk_append.call(null,b__25997,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__26005 = (i__25996 + (1));
i__25996 = G__26005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25997),loom$alg_generic$step_$_iter__25994.call(null,cljs.core.chunk_rest.call(null,s__25995__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25997),null);
}
} else {
var nbr = cljs.core.first.call(null,s__25995__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__25994.call(null,cljs.core.rest.call(null,s__25995__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__25991,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen))
,null,null));
});})(nbrs,vec__25991,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen))
;
return iter__4523__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__25991,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen){
return (function (p1__25976_SHARP_,p2__25977_SHARP_){
return cljs.core.assoc.call(null,p1__25976_SHARP_,p2__25977_SHARP_,node);
});})(nbrs,vec__25991,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen))
,preds,nbrs));
});})(vec__25991,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen){
return (function loom$alg_generic$iter__25998(s__25999){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen){
return (function (){
var s__25999__$1 = s__25999;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25999__$1);
if(temp__5720__auto__){
var s__25999__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25999__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25999__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__26001 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__26000 = (0);
while(true){
if((i__26000 < size__4522__auto__)){
var s = cljs.core._nth.call(null,c__4521__auto__,i__26000);
cljs.core.chunk_append.call(null,b__26001,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__26006 = (i__26000 + (1));
i__26000 = G__26006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26001),loom$alg_generic$iter__25998.call(null,cljs.core.chunk_rest.call(null,s__25999__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26001),null);
}
} else {
var s = cljs.core.first.call(null,s__25999__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__25998.call(null,cljs.core.rest.call(null,s__25999__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__25982,map__25982__$1,f,when,seen))
;
return iter__4523__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq25978){
var G__25979 = cljs.core.first.call(null,seq25978);
var seq25978__$1 = cljs.core.next.call(null,seq25978);
var G__25980 = cljs.core.first.call(null,seq25978__$1);
var seq25978__$2 = cljs.core.next.call(null,seq25978__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25979,G__25980,seq25978__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26013 = arguments.length;
var i__4731__auto___26014 = (0);
while(true){
if((i__4731__auto___26014 < len__4730__auto___26013)){
args__4736__auto__.push((arguments[i__4731__auto___26014]));

var G__26015 = (i__4731__auto___26014 + (1));
i__4731__auto___26014 = G__26015;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__26010){
var map__26011 = p__26010;
var map__26011__$1 = (((((!((map__26011 == null))))?(((((map__26011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26011):map__26011);
var seen = cljs.core.get.call(null,map__26011__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__26011,map__26011__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__26011,map__26011__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq26007){
var G__26008 = cljs.core.first.call(null,seq26007);
var seq26007__$1 = cljs.core.next.call(null,seq26007);
var G__26009 = cljs.core.first.call(null,seq26007__$1);
var seq26007__$2 = cljs.core.next.call(null,seq26007__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26008,G__26009,seq26007__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26027 = arguments.length;
var i__4731__auto___26028 = (0);
while(true){
if((i__4731__auto___26028 < len__4730__auto___26027)){
args__4736__auto__.push((arguments[i__4731__auto___26028]));

var G__26029 = (i__4731__auto___26028 + (1));
i__4731__auto___26028 = G__26029;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__26020){
var map__26021 = p__26020;
var map__26021__$1 = (((((!((map__26021 == null))))?(((((map__26021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26021):map__26021);
var opts = map__26021__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__5720__auto__ = cljs.core.some.call(null,((function (opts__$1,map__26021,map__26021__$1,opts){
return (function (p__26023){
var vec__26024 = p__26023;
var _ = cljs.core.nth.call(null,vec__26024,(0),null);
var pm = cljs.core.nth.call(null,vec__26024,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__26024,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__26021,map__26021__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq26016){
var G__26017 = cljs.core.first.call(null,seq26016);
var seq26016__$1 = cljs.core.next.call(null,seq26016);
var G__26018 = cljs.core.first.call(null,seq26016__$1);
var seq26016__$2 = cljs.core.next.call(null,seq26016__$1);
var G__26019 = cljs.core.first.call(null,seq26016__$2);
var seq26016__$3 = cljs.core.next.call(null,seq26016__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26017,G__26018,G__26019,seq26016__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__26030 = m2;
var G__26031 = m1;
m1 = G__26030;
m2 = G__26031;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__26033(s__26034){
return (new cljs.core.LazySeq(null,(function (){
var s__26034__$1 = s__26034;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__26034__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__26034__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__26033_$_iter__26035(s__26036){
return (new cljs.core.LazySeq(null,((function (s__26034__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__26036__$1 = s__26036;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__26036__$1);
if(temp__5720__auto____$1){
var s__26036__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26036__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__26036__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__26038 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__26037 = (0);
while(true){
if((i__26037 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__26037);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
cljs.core.chunk_append.call(null,b__26038,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__26039 = (i__26037 + (1));
i__26037 = G__26039;
continue;
} else {
var G__26040 = (i__26037 + (1));
i__26037 = G__26040;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26038),loom$alg_generic$reverse_edges_$_iter__26033_$_iter__26035.call(null,cljs.core.chunk_rest.call(null,s__26036__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26038),null);
}
} else {
var nbr = cljs.core.first.call(null,s__26036__$2);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__26033_$_iter__26035.call(null,cljs.core.rest.call(null,s__26036__$2)));
} else {
var G__26041 = cljs.core.rest.call(null,s__26036__$2);
s__26036__$1 = G__26041;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__26034__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__26034__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,successor_fn.call(null,node)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__26033.call(null,cljs.core.rest.call(null,s__26034__$1)));
} else {
var G__26042 = cljs.core.rest.call(null,s__26034__$1);
s__26034__$1 = G__26042;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__26043(s__26044){
return (new cljs.core.LazySeq(null,(function (){
var s__26044__$1 = s__26044;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__26044__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__26044__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__26043_$_iter__26045(s__26046){
return (new cljs.core.LazySeq(null,((function (s__26044__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__26046__$1 = s__26046;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__26046__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__26046__$1,s__26044__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__26043_$_iter__26045_$_iter__26047(s__26048){
return (new cljs.core.LazySeq(null,((function (s__26046__$1,s__26044__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__26048__$1 = s__26048;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__26048__$1);
if(temp__5720__auto____$2){
var s__26048__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26048__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__26048__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__26050 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__26049 = (0);
while(true){
if((i__26049 < size__4522__auto__)){
var to = cljs.core._nth.call(null,c__4521__auto__,i__26049);
cljs.core.chunk_append.call(null,b__26050,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__26051 = (i__26049 + (1));
i__26049 = G__26051;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26050),loom$alg_generic$conj_paths_$_iter__26043_$_iter__26045_$_iter__26047.call(null,cljs.core.chunk_rest.call(null,s__26048__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26050),null);
}
} else {
var to = cljs.core.first.call(null,s__26048__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__26043_$_iter__26045_$_iter__26047.call(null,cljs.core.rest.call(null,s__26048__$2)));
}
} else {
return null;
}
break;
}
});})(s__26046__$1,s__26044__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__26046__$1,s__26044__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__26043_$_iter__26045.call(null,cljs.core.rest.call(null,s__26046__$1)));
} else {
var G__26052 = cljs.core.rest.call(null,s__26046__$1);
s__26046__$1 = G__26052;
continue;
}
} else {
return null;
}
break;
}
});})(s__26044__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__26044__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__26043.call(null,cljs.core.rest.call(null,s__26044__$1)));
} else {
var G__26053 = cljs.core.rest.call(null,s__26044__$1);
s__26044__$1 = G__26053;
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
return (function (p1__26054_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__26054_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__26055){
var vec__26056 = p__26055;
var key = cljs.core.nth.call(null,vec__26056,(0),null);
var val = cljs.core.nth.call(null,vec__26056,(1),null);
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
var G__26059 = outgoing__$1;
var G__26060 = incoming;
var G__26061 = q1__$1;
var G__26062 = q2;
outgoing = G__26059;
incoming = G__26060;
q1 = G__26061;
q2 = G__26062;
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
var G__26063 = outgoing;
var G__26064 = incoming__$1;
var G__26065 = q1;
var G__26066 = q2__$1;
outgoing = G__26063;
incoming = G__26064;
q1 = G__26065;
q2 = G__26066;
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
var G__26070 = arguments.length;
switch (G__26070) {
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
var step = (function loom$alg_generic$step(p__26082){
var vec__26083 = p__26082;
var state = cljs.core.nth.call(null,vec__26083,(0),null);
var pq = cljs.core.nth.call(null,vec__26083,(1),null);
var temp__5720__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__26086 = temp__5720__auto__;
var dist_su = cljs.core.nth.call(null,vec__26086,(0),null);
var _ = cljs.core.nth.call(null,vec__26086,(1),null);
var u = cljs.core.nth.call(null,vec__26086,(2),null);
var fpq = vec__26086;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__26086,dist_su,_,u,fpq,temp__5720__auto__,vec__26083,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__26086,dist_su,_,u,fpq,temp__5720__auto__,vec__26083,state,pq){
return (function (p__26089,v){
var vec__26090 = p__26089;
var state__$1 = cljs.core.nth.call(null,vec__26090,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__26090,(1),null);
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
});})(vec__26086,dist_su,_,u,fpq,temp__5720__auto__,vec__26083,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__26086,dist_su,_,u,fpq,temp__5720__auto__,vec__26083,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__26094){
var vec__26095 = p__26094;
var n = cljs.core.nth.call(null,vec__26095,(0),null);
var vec__26098 = cljs.core.nth.call(null,vec__26095,(1),null);
var d = cljs.core.nth.call(null,vec__26098,(0),null);
var p = cljs.core.nth.call(null,vec__26098,(1),null);
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
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__26101){
var vec__26102 = p__26101;
var node = cljs.core.nth.call(null,vec__26102,(0),null);
var _ = cljs.core.nth.call(null,vec__26102,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__26105 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__26105,(0),null);
var end_state = cljs.core.nth.call(null,vec__26105,(1),null);
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
var len__4730__auto___26176 = arguments.length;
var i__4731__auto___26177 = (0);
while(true){
if((i__4731__auto___26177 < len__4730__auto___26176)){
args__4736__auto__.push((arguments[i__4731__auto___26177]));

var G__26178 = (i__4731__auto___26177 + (1));
i__4731__auto___26177 = G__26178;
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
var seq__26112_26179 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__26119_26180 = null;
var count__26120_26181 = (0);
var i__26121_26182 = (0);
while(true){
if((i__26121_26182 < count__26120_26181)){
var bitmap_26183 = cljs.core._nth.call(null,chunk__26119_26180,i__26121_26182);
var seq__26122_26184 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_26183));
var chunk__26124_26185 = null;
var count__26125_26186 = (0);
var i__26126_26187 = (0);
while(true){
if((i__26126_26187 < count__26125_26186)){
var vec__26158_26188 = cljs.core._nth.call(null,chunk__26124_26185,i__26126_26187);
var idx_26189 = cljs.core.nth.call(null,vec__26158_26188,(0),null);
var value_26190 = cljs.core.nth.call(null,vec__26158_26188,(1),null);
var masked_value_26191 = (value_26190 | (new_bitmap[idx_26189]));
(new_bitmap[idx_26189] = masked_value_26191);


var G__26192 = seq__26122_26184;
var G__26193 = chunk__26124_26185;
var G__26194 = count__26125_26186;
var G__26195 = (i__26126_26187 + (1));
seq__26122_26184 = G__26192;
chunk__26124_26185 = G__26193;
count__26125_26186 = G__26194;
i__26126_26187 = G__26195;
continue;
} else {
var temp__5720__auto___26196 = cljs.core.seq.call(null,seq__26122_26184);
if(temp__5720__auto___26196){
var seq__26122_26197__$1 = temp__5720__auto___26196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26122_26197__$1)){
var c__4550__auto___26198 = cljs.core.chunk_first.call(null,seq__26122_26197__$1);
var G__26199 = cljs.core.chunk_rest.call(null,seq__26122_26197__$1);
var G__26200 = c__4550__auto___26198;
var G__26201 = cljs.core.count.call(null,c__4550__auto___26198);
var G__26202 = (0);
seq__26122_26184 = G__26199;
chunk__26124_26185 = G__26200;
count__26125_26186 = G__26201;
i__26126_26187 = G__26202;
continue;
} else {
var vec__26161_26203 = cljs.core.first.call(null,seq__26122_26197__$1);
var idx_26204 = cljs.core.nth.call(null,vec__26161_26203,(0),null);
var value_26205 = cljs.core.nth.call(null,vec__26161_26203,(1),null);
var masked_value_26206 = (value_26205 | (new_bitmap[idx_26204]));
(new_bitmap[idx_26204] = masked_value_26206);


var G__26207 = cljs.core.next.call(null,seq__26122_26197__$1);
var G__26208 = null;
var G__26209 = (0);
var G__26210 = (0);
seq__26122_26184 = G__26207;
chunk__26124_26185 = G__26208;
count__26125_26186 = G__26209;
i__26126_26187 = G__26210;
continue;
}
} else {
}
}
break;
}

var G__26211 = seq__26112_26179;
var G__26212 = chunk__26119_26180;
var G__26213 = count__26120_26181;
var G__26214 = (i__26121_26182 + (1));
seq__26112_26179 = G__26211;
chunk__26119_26180 = G__26212;
count__26120_26181 = G__26213;
i__26121_26182 = G__26214;
continue;
} else {
var temp__5720__auto___26215 = cljs.core.seq.call(null,seq__26112_26179);
if(temp__5720__auto___26215){
var seq__26112_26216__$1 = temp__5720__auto___26215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26112_26216__$1)){
var c__4550__auto___26217 = cljs.core.chunk_first.call(null,seq__26112_26216__$1);
var G__26218 = cljs.core.chunk_rest.call(null,seq__26112_26216__$1);
var G__26219 = c__4550__auto___26217;
var G__26220 = cljs.core.count.call(null,c__4550__auto___26217);
var G__26221 = (0);
seq__26112_26179 = G__26218;
chunk__26119_26180 = G__26219;
count__26120_26181 = G__26220;
i__26121_26182 = G__26221;
continue;
} else {
var bitmap_26222 = cljs.core.first.call(null,seq__26112_26216__$1);
var seq__26113_26223 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_26222));
var chunk__26115_26224 = null;
var count__26116_26225 = (0);
var i__26117_26226 = (0);
while(true){
if((i__26117_26226 < count__26116_26225)){
var vec__26170_26227 = cljs.core._nth.call(null,chunk__26115_26224,i__26117_26226);
var idx_26228 = cljs.core.nth.call(null,vec__26170_26227,(0),null);
var value_26229 = cljs.core.nth.call(null,vec__26170_26227,(1),null);
var masked_value_26230 = (value_26229 | (new_bitmap[idx_26228]));
(new_bitmap[idx_26228] = masked_value_26230);


var G__26231 = seq__26113_26223;
var G__26232 = chunk__26115_26224;
var G__26233 = count__26116_26225;
var G__26234 = (i__26117_26226 + (1));
seq__26113_26223 = G__26231;
chunk__26115_26224 = G__26232;
count__26116_26225 = G__26233;
i__26117_26226 = G__26234;
continue;
} else {
var temp__5720__auto___26235__$1 = cljs.core.seq.call(null,seq__26113_26223);
if(temp__5720__auto___26235__$1){
var seq__26113_26236__$1 = temp__5720__auto___26235__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26113_26236__$1)){
var c__4550__auto___26237 = cljs.core.chunk_first.call(null,seq__26113_26236__$1);
var G__26238 = cljs.core.chunk_rest.call(null,seq__26113_26236__$1);
var G__26239 = c__4550__auto___26237;
var G__26240 = cljs.core.count.call(null,c__4550__auto___26237);
var G__26241 = (0);
seq__26113_26223 = G__26238;
chunk__26115_26224 = G__26239;
count__26116_26225 = G__26240;
i__26117_26226 = G__26241;
continue;
} else {
var vec__26173_26242 = cljs.core.first.call(null,seq__26113_26236__$1);
var idx_26243 = cljs.core.nth.call(null,vec__26173_26242,(0),null);
var value_26244 = cljs.core.nth.call(null,vec__26173_26242,(1),null);
var masked_value_26245 = (value_26244 | (new_bitmap[idx_26243]));
(new_bitmap[idx_26243] = masked_value_26245);


var G__26246 = cljs.core.next.call(null,seq__26113_26236__$1);
var G__26247 = null;
var G__26248 = (0);
var G__26249 = (0);
seq__26113_26223 = G__26246;
chunk__26115_26224 = G__26247;
count__26116_26225 = G__26248;
i__26117_26226 = G__26249;
continue;
}
} else {
}
}
break;
}

var G__26250 = cljs.core.next.call(null,seq__26112_26216__$1);
var G__26251 = null;
var G__26252 = (0);
var G__26253 = (0);
seq__26112_26179 = G__26250;
chunk__26119_26180 = G__26251;
count__26120_26181 = G__26252;
i__26121_26182 = G__26253;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq26111){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26111));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__26254(s__26255){
return (new cljs.core.LazySeq(null,(function (){
var s__26255__$1 = s__26255;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__26255__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__26255__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__26254_$_iter__26256(s__26257){
return (new cljs.core.LazySeq(null,((function (s__26255__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__26257__$1 = s__26257;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__26257__$1);
if(temp__5720__auto____$1){
var s__26257__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26257__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__26257__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__26259 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__26258 = (0);
while(true){
if((i__26258 < size__4522__auto__)){
var offset = cljs.core._nth.call(null,c__4521__auto__,i__26258);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__26259,idx);

var G__26260 = (i__26258 + (1));
i__26258 = G__26260;
continue;
} else {
var G__26261 = (i__26258 + (1));
i__26258 = G__26261;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26259),loom$alg_generic$bm_get_indicies_$_iter__26254_$_iter__26256.call(null,cljs.core.chunk_rest.call(null,s__26257__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26259),null);
}
} else {
var offset = cljs.core.first.call(null,s__26257__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__26254_$_iter__26256.call(null,cljs.core.rest.call(null,s__26257__$2)));
} else {
var G__26262 = cljs.core.rest.call(null,s__26257__$2);
s__26257__$1 = G__26262;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__26255__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__26255__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__26254.call(null,cljs.core.rest.call(null,s__26255__$1)));
} else {
var G__26263 = cljs.core.rest.call(null,s__26255__$1);
s__26255__$1 = G__26263;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k26265,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__26269 = k26265;
var G__26269__$1 = (((G__26269 instanceof cljs.core.Keyword))?G__26269.fqn:null);
switch (G__26269__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k26265,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__26270){
var vec__26271 = p__26270;
var k__4408__auto__ = cljs.core.nth.call(null,vec__26271,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__26271,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26264){
var self__ = this;
var G__26264__$1 = this;
return (new cljs.core.RecordIter((0),G__26264__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26266,other26267){
var self__ = this;
var this26266__$1 = this;
return (((!((other26267 == null)))) && ((this26266__$1.constructor === other26267.constructor)) && (cljs.core._EQ_.call(null,this26266__$1.node__GT_idx,other26267.node__GT_idx)) && (cljs.core._EQ_.call(null,this26266__$1.idx__GT_node,other26267.idx__GT_node)) && (cljs.core._EQ_.call(null,this26266__$1.bitmaps,other26267.bitmaps)) && (cljs.core._EQ_.call(null,this26266__$1.__extmap,other26267.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__26264){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__26274 = cljs.core.keyword_identical_QMARK_;
var expr__26275 = k__4393__auto__;
if(cljs.core.truth_(pred__26274.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__26275))){
return (new loom.alg_generic.Ancestry(G__26264,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26274.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__26275))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__26264,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26274.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__26275))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__26264,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__26264),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__26264){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__26264,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__26268){
var extmap__4424__auto__ = (function (){var G__26277 = cljs.core.dissoc.call(null,G__26268,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
if(cljs.core.record_QMARK_.call(null,G__26268)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__26277);
} else {
return G__26277;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__26268),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__26268),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__26268),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
var len__4730__auto___26284 = arguments.length;
var i__4731__auto___26285 = (0);
while(true){
if((i__4731__auto___26285 < len__4730__auto___26284)){
args__4736__auto__.push((arguments[i__4731__auto___26285]));

var G__26286 = (i__4731__auto___26285 + (1));
i__4731__auto___26285 = G__26286;
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
var map__26282 = ancestry;
var map__26282__$1 = (((((!((map__26282 == null))))?(((((map__26282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26282):map__26282);
var node__GT_idx = cljs.core.get.call(null,map__26282__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__26282__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__26282__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq26279){
var G__26280 = cljs.core.first.call(null,seq26279);
var seq26279__$1 = cljs.core.next.call(null,seq26279);
var G__26281 = cljs.core.first.call(null,seq26279__$1);
var seq26279__$2 = cljs.core.next.call(null,seq26279__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26280,G__26281,seq26279__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__26287 = ancestry;
var map__26287__$1 = (((((!((map__26287 == null))))?(((((map__26287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26287):map__26287);
var node__GT_idx = cljs.core.get.call(null,map__26287__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__26287__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__26289 = ancestry;
var map__26289__$1 = (((((!((map__26289 == null))))?(((((map__26289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26289):map__26289);
var node__GT_idx = cljs.core.get.call(null,map__26289__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__26289__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__26289__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=alg_generic.js.map?rel=1608403385047
