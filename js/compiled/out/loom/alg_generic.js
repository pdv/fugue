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
return (function (p1__33470_SHARP_){
return loom.alg_generic.paths.call(null,preds,cljs.core.conj.call(null,path,p1__33470_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__33469_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__33469_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__33471_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__33471_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__33472){
var vec__33473 = p__33472;
var n = cljs.core.nth.call(null,vec__33473,(0),null);
var p = cljs.core.nth.call(null,vec__33473,(1),null);
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
var len__4730__auto___33482 = arguments.length;
var i__4731__auto___33483 = (0);
while(true){
if((i__4731__auto___33483 < len__4730__auto___33482)){
args__4736__auto__.push((arguments[i__4731__auto___33483]));

var G__33484 = (i__4731__auto___33483 + (1));
i__4731__auto___33483 = G__33484;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__33479){
var map__33480 = p__33479;
var map__33480__$1 = (((((!((map__33480 == null))))?(((((map__33480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33480):map__33480);
var seen = cljs.core.get.call(null,map__33480__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__33480,map__33480__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__33480,map__33480__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__33480,map__33480__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__33480,map__33480__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq33476){
var G__33477 = cljs.core.first.call(null,seq33476);
var seq33476__$1 = cljs.core.next.call(null,seq33476);
var G__33478 = cljs.core.first.call(null,seq33476__$1);
var seq33476__$2 = cljs.core.next.call(null,seq33476__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33477,G__33478,seq33476__$2);
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
var len__4730__auto___33491 = arguments.length;
var i__4731__auto___33492 = (0);
while(true){
if((i__4731__auto___33492 < len__4730__auto___33491)){
args__4736__auto__.push((arguments[i__4731__auto___33492]));

var G__33493 = (i__4731__auto___33492 + (1));
i__4731__auto___33492 = G__33493;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__33488){
var map__33489 = p__33488;
var map__33489__$1 = (((((!((map__33489 == null))))?(((((map__33489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33489):map__33489);
var seen = cljs.core.get.call(null,map__33489__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__33489,map__33489__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__33489,map__33489__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__33489,map__33489__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__33494 = successors__$1;
var G__33495 = parent;
var G__33496 = cljs.core.peek.call(null,nbrstack);
var G__33497 = cljs.core.pop.call(null,stack);
var G__33498 = cljs.core.pop.call(null,nbrstack);
var G__33499 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__33494;
start__$1 = G__33495;
nbrs = G__33496;
stack = G__33497;
nbrstack = G__33498;
seen__$1 = G__33499;
continue;
} else {
return null;
}
}
break;
}
});})(map__33489,map__33489__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq33485){
var G__33486 = cljs.core.first.call(null,seq33485);
var seq33485__$1 = cljs.core.next.call(null,seq33485);
var G__33487 = cljs.core.first.call(null,seq33485__$1);
var seq33485__$2 = cljs.core.next.call(null,seq33485__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33486,G__33487,seq33485__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33506 = arguments.length;
var i__4731__auto___33507 = (0);
while(true){
if((i__4731__auto___33507 < len__4730__auto___33506)){
args__4736__auto__.push((arguments[i__4731__auto___33507]));

var G__33508 = (i__4731__auto___33507 + (1));
i__4731__auto___33507 = G__33508;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__33503){
var map__33504 = p__33503;
var map__33504__$1 = (((((!((map__33504 == null))))?(((((map__33504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33504):map__33504);
var seen = cljs.core.get.call(null,map__33504__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__33504__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__33509 = seen__$2;
var G__33510 = cljs.core.assoc.call(null,preds,u,v);
var G__33511 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__33509;
preds = G__33510;
stack = G__33511;
continue;
} else {
var G__33512 = seen__$2;
var G__33513 = preds;
var G__33514 = cljs.core.pop.call(null,stack);
seen__$1 = G__33512;
preds = G__33513;
stack = G__33514;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq33500){
var G__33501 = cljs.core.first.call(null,seq33500);
var seq33500__$1 = cljs.core.next.call(null,seq33500);
var G__33502 = cljs.core.first.call(null,seq33500__$1);
var seq33500__$2 = cljs.core.next.call(null,seq33500__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33501,G__33502,seq33500__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33521 = arguments.length;
var i__4731__auto___33522 = (0);
while(true){
if((i__4731__auto___33522 < len__4730__auto___33521)){
args__4736__auto__.push((arguments[i__4731__auto___33522]));

var G__33523 = (i__4731__auto___33522 + (1));
i__4731__auto___33522 = G__33523;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__33518){
var map__33519 = p__33518;
var map__33519__$1 = (((((!((map__33519 == null))))?(((((map__33519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33519):map__33519);
var seen = cljs.core.get.call(null,map__33519__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__33519__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__33524 = seen__$2;
var G__33525 = cljs.core.conj.call(null,result,v);
var G__33526 = cljs.core.pop.call(null,stack);
seen__$1 = G__33524;
result = G__33525;
stack = G__33526;
continue;
} else {
var G__33527 = seen__$2;
var G__33528 = result;
var G__33529 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__33527;
result = G__33528;
stack = G__33529;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq33515){
var G__33516 = cljs.core.first.call(null,seq33515);
var seq33515__$1 = cljs.core.next.call(null,seq33515);
var G__33517 = cljs.core.first.call(null,seq33515__$1);
var seq33515__$2 = cljs.core.next.call(null,seq33515__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33516,G__33517,seq33515__$2);
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
var len__4730__auto___33536 = arguments.length;
var i__4731__auto___33537 = (0);
while(true){
if((i__4731__auto___33537 < len__4730__auto___33536)){
args__4736__auto__.push((arguments[i__4731__auto___33537]));

var G__33538 = (i__4731__auto___33537 + (1));
i__4731__auto___33537 = G__33538;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__33533){
var map__33534 = p__33533;
var map__33534__$1 = (((((!((map__33534 == null))))?(((((map__33534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33534):map__33534);
var seen = cljs.core.get.call(null,map__33534__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__33534__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__33539 = start__$1;
var G__33540 = cljs.core.next.call(null,nbrs);
var G__33541 = stack;
var G__33542 = nbrstack;
var G__33543 = seen__$2;
var G__33544 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__33539;
nbrs = G__33540;
stack = G__33541;
nbrstack = G__33542;
seen__$1 = G__33543;
edges = G__33544;
continue;
} else {
var G__33545 = nbr;
var G__33546 = successors.call(null,nbr);
var G__33547 = cljs.core.conj.call(null,stack,start__$1);
var G__33548 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__33549 = seen__$2;
var G__33550 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__33545;
nbrs = G__33546;
stack = G__33547;
nbrstack = G__33548;
seen__$1 = G__33549;
edges = G__33550;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__33551 = parent;
var G__33552 = cljs.core.peek.call(null,nbrstack);
var G__33553 = cljs.core.pop.call(null,stack);
var G__33554 = cljs.core.pop.call(null,nbrstack);
var G__33555 = seen__$2;
var G__33556 = edges;
start__$1 = G__33551;
nbrs = G__33552;
stack = G__33553;
nbrstack = G__33554;
seen__$1 = G__33555;
edges = G__33556;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq33530){
var G__33531 = cljs.core.first.call(null,seq33530);
var seq33530__$1 = cljs.core.next.call(null,seq33530);
var G__33532 = cljs.core.first.call(null,seq33530__$1);
var seq33530__$2 = cljs.core.next.call(null,seq33530__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33531,G__33532,seq33530__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__33558 = arguments.length;
switch (G__33558) {
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
var G__33560 = seen__$2;
var G__33561 = explored__$1;
var G__33562 = result;
var G__33563 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__33560;
explored__$1 = G__33561;
result = G__33562;
stack = G__33563;
continue;
}
} else {
var G__33564 = seen__$2;
var G__33565 = cljs.core.conj.call(null,explored__$1,v);
var G__33566 = cljs.core.conj.call(null,result,v);
var G__33567 = cljs.core.pop.call(null,stack);
seen__$1 = G__33564;
explored__$1 = G__33565;
result = G__33566;
stack = G__33567;
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
var len__4730__auto___33596 = arguments.length;
var i__4731__auto___33597 = (0);
while(true){
if((i__4731__auto___33597 < len__4730__auto___33596)){
args__4736__auto__.push((arguments[i__4731__auto___33597]));

var G__33598 = (i__4731__auto___33597 + (1));
i__4731__auto___33597 = G__33598;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__33575){
var map__33576 = p__33575;
var map__33576__$1 = (((((!((map__33576 == null))))?(((((map__33576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33576):map__33576);
var f = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__33576__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__33576,map__33576__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__33576,map__33576__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__33585 = temp__5720__auto__;
var node = cljs.core.nth.call(null,vec__33585,(0),null);
var depth = cljs.core.nth.call(null,vec__33585,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__33585,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__33585,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen){
return (function (p1__33569_SHARP_){
return nbr_pred.call(null,p1__33569_SHARP_,node,(depth + (1)));
});})(vec__33585,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__33585,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen){
return (function (p1__33568_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__33568_SHARP_);
});})(vec__33585,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__33585,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__33588(s__33589){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__33585,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen){
return (function (){
var s__33589__$1 = s__33589;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__33589__$1);
if(temp__5720__auto____$1){
var s__33589__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33589__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__33589__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__33591 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__33590 = (0);
while(true){
if((i__33590 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__33590);
cljs.core.chunk_append.call(null,b__33591,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__33599 = (i__33590 + (1));
i__33590 = G__33599;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33591),loom$alg_generic$step_$_iter__33588.call(null,cljs.core.chunk_rest.call(null,s__33589__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33591),null);
}
} else {
var nbr = cljs.core.first.call(null,s__33589__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__33588.call(null,cljs.core.rest.call(null,s__33589__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__33585,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen))
,null,null));
});})(nbrs,vec__33585,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen))
;
return iter__4523__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__33585,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen){
return (function (p1__33570_SHARP_,p2__33571_SHARP_){
return cljs.core.assoc.call(null,p1__33570_SHARP_,p2__33571_SHARP_,node);
});})(nbrs,vec__33585,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen))
,preds,nbrs));
});})(vec__33585,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen){
return (function loom$alg_generic$iter__33592(s__33593){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen){
return (function (){
var s__33593__$1 = s__33593;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__33593__$1);
if(temp__5720__auto__){
var s__33593__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33593__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__33593__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__33595 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__33594 = (0);
while(true){
if((i__33594 < size__4522__auto__)){
var s = cljs.core._nth.call(null,c__4521__auto__,i__33594);
cljs.core.chunk_append.call(null,b__33595,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__33600 = (i__33594 + (1));
i__33594 = G__33600;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33595),loom$alg_generic$iter__33592.call(null,cljs.core.chunk_rest.call(null,s__33593__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33595),null);
}
} else {
var s = cljs.core.first.call(null,s__33593__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__33592.call(null,cljs.core.rest.call(null,s__33593__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__33576,map__33576__$1,f,when,seen))
;
return iter__4523__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq33572){
var G__33573 = cljs.core.first.call(null,seq33572);
var seq33572__$1 = cljs.core.next.call(null,seq33572);
var G__33574 = cljs.core.first.call(null,seq33572__$1);
var seq33572__$2 = cljs.core.next.call(null,seq33572__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33573,G__33574,seq33572__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33607 = arguments.length;
var i__4731__auto___33608 = (0);
while(true){
if((i__4731__auto___33608 < len__4730__auto___33607)){
args__4736__auto__.push((arguments[i__4731__auto___33608]));

var G__33609 = (i__4731__auto___33608 + (1));
i__4731__auto___33608 = G__33609;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__33604){
var map__33605 = p__33604;
var map__33605__$1 = (((((!((map__33605 == null))))?(((((map__33605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33605):map__33605);
var seen = cljs.core.get.call(null,map__33605__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__33605,map__33605__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__33605,map__33605__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq33601){
var G__33602 = cljs.core.first.call(null,seq33601);
var seq33601__$1 = cljs.core.next.call(null,seq33601);
var G__33603 = cljs.core.first.call(null,seq33601__$1);
var seq33601__$2 = cljs.core.next.call(null,seq33601__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33602,G__33603,seq33601__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33621 = arguments.length;
var i__4731__auto___33622 = (0);
while(true){
if((i__4731__auto___33622 < len__4730__auto___33621)){
args__4736__auto__.push((arguments[i__4731__auto___33622]));

var G__33623 = (i__4731__auto___33622 + (1));
i__4731__auto___33622 = G__33623;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__33614){
var map__33615 = p__33614;
var map__33615__$1 = (((((!((map__33615 == null))))?(((((map__33615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33615):map__33615);
var opts = map__33615__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__5720__auto__ = cljs.core.some.call(null,((function (opts__$1,map__33615,map__33615__$1,opts){
return (function (p__33617){
var vec__33618 = p__33617;
var _ = cljs.core.nth.call(null,vec__33618,(0),null);
var pm = cljs.core.nth.call(null,vec__33618,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__33618,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__33615,map__33615__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq33610){
var G__33611 = cljs.core.first.call(null,seq33610);
var seq33610__$1 = cljs.core.next.call(null,seq33610);
var G__33612 = cljs.core.first.call(null,seq33610__$1);
var seq33610__$2 = cljs.core.next.call(null,seq33610__$1);
var G__33613 = cljs.core.first.call(null,seq33610__$2);
var seq33610__$3 = cljs.core.next.call(null,seq33610__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33611,G__33612,G__33613,seq33610__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__33624 = m2;
var G__33625 = m1;
m1 = G__33624;
m2 = G__33625;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__33627(s__33628){
return (new cljs.core.LazySeq(null,(function (){
var s__33628__$1 = s__33628;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__33628__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__33628__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__33627_$_iter__33629(s__33630){
return (new cljs.core.LazySeq(null,((function (s__33628__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__33630__$1 = s__33630;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__33630__$1);
if(temp__5720__auto____$1){
var s__33630__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33630__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__33630__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__33632 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__33631 = (0);
while(true){
if((i__33631 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__33631);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
cljs.core.chunk_append.call(null,b__33632,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__33633 = (i__33631 + (1));
i__33631 = G__33633;
continue;
} else {
var G__33634 = (i__33631 + (1));
i__33631 = G__33634;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33632),loom$alg_generic$reverse_edges_$_iter__33627_$_iter__33629.call(null,cljs.core.chunk_rest.call(null,s__33630__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33632),null);
}
} else {
var nbr = cljs.core.first.call(null,s__33630__$2);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__33627_$_iter__33629.call(null,cljs.core.rest.call(null,s__33630__$2)));
} else {
var G__33635 = cljs.core.rest.call(null,s__33630__$2);
s__33630__$1 = G__33635;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__33628__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__33628__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,successor_fn.call(null,node)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__33627.call(null,cljs.core.rest.call(null,s__33628__$1)));
} else {
var G__33636 = cljs.core.rest.call(null,s__33628__$1);
s__33628__$1 = G__33636;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__33637(s__33638){
return (new cljs.core.LazySeq(null,(function (){
var s__33638__$1 = s__33638;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__33638__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__33638__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__33637_$_iter__33639(s__33640){
return (new cljs.core.LazySeq(null,((function (s__33638__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__33640__$1 = s__33640;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__33640__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__33640__$1,s__33638__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__33637_$_iter__33639_$_iter__33641(s__33642){
return (new cljs.core.LazySeq(null,((function (s__33640__$1,s__33638__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__33642__$1 = s__33642;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__33642__$1);
if(temp__5720__auto____$2){
var s__33642__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33642__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__33642__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__33644 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__33643 = (0);
while(true){
if((i__33643 < size__4522__auto__)){
var to = cljs.core._nth.call(null,c__4521__auto__,i__33643);
cljs.core.chunk_append.call(null,b__33644,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__33645 = (i__33643 + (1));
i__33643 = G__33645;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33644),loom$alg_generic$conj_paths_$_iter__33637_$_iter__33639_$_iter__33641.call(null,cljs.core.chunk_rest.call(null,s__33642__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33644),null);
}
} else {
var to = cljs.core.first.call(null,s__33642__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__33637_$_iter__33639_$_iter__33641.call(null,cljs.core.rest.call(null,s__33642__$2)));
}
} else {
return null;
}
break;
}
});})(s__33640__$1,s__33638__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__33640__$1,s__33638__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__33637_$_iter__33639.call(null,cljs.core.rest.call(null,s__33640__$1)));
} else {
var G__33646 = cljs.core.rest.call(null,s__33640__$1);
s__33640__$1 = G__33646;
continue;
}
} else {
return null;
}
break;
}
});})(s__33638__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__33638__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__33637.call(null,cljs.core.rest.call(null,s__33638__$1)));
} else {
var G__33647 = cljs.core.rest.call(null,s__33638__$1);
s__33638__$1 = G__33647;
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
return (function (p1__33648_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__33648_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__33649){
var vec__33650 = p__33649;
var key = cljs.core.nth.call(null,vec__33650,(0),null);
var val = cljs.core.nth.call(null,vec__33650,(1),null);
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
var G__33653 = outgoing__$1;
var G__33654 = incoming;
var G__33655 = q1__$1;
var G__33656 = q2;
outgoing = G__33653;
incoming = G__33654;
q1 = G__33655;
q2 = G__33656;
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
var G__33657 = outgoing;
var G__33658 = incoming__$1;
var G__33659 = q1;
var G__33660 = q2__$1;
outgoing = G__33657;
incoming = G__33658;
q1 = G__33659;
q2 = G__33660;
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
var G__33664 = arguments.length;
switch (G__33664) {
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
var step = (function loom$alg_generic$step(p__33676){
var vec__33677 = p__33676;
var state = cljs.core.nth.call(null,vec__33677,(0),null);
var pq = cljs.core.nth.call(null,vec__33677,(1),null);
var temp__5720__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__33680 = temp__5720__auto__;
var dist_su = cljs.core.nth.call(null,vec__33680,(0),null);
var _ = cljs.core.nth.call(null,vec__33680,(1),null);
var u = cljs.core.nth.call(null,vec__33680,(2),null);
var fpq = vec__33680;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__33680,dist_su,_,u,fpq,temp__5720__auto__,vec__33677,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__33680,dist_su,_,u,fpq,temp__5720__auto__,vec__33677,state,pq){
return (function (p__33683,v){
var vec__33684 = p__33683;
var state__$1 = cljs.core.nth.call(null,vec__33684,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__33684,(1),null);
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
});})(vec__33680,dist_su,_,u,fpq,temp__5720__auto__,vec__33677,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__33680,dist_su,_,u,fpq,temp__5720__auto__,vec__33677,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__33688){
var vec__33689 = p__33688;
var n = cljs.core.nth.call(null,vec__33689,(0),null);
var vec__33692 = cljs.core.nth.call(null,vec__33689,(1),null);
var d = cljs.core.nth.call(null,vec__33692,(0),null);
var p = cljs.core.nth.call(null,vec__33692,(1),null);
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
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__33695){
var vec__33696 = p__33695;
var node = cljs.core.nth.call(null,vec__33696,(0),null);
var _ = cljs.core.nth.call(null,vec__33696,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__33699 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__33699,(0),null);
var end_state = cljs.core.nth.call(null,vec__33699,(1),null);
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
var len__4730__auto___33770 = arguments.length;
var i__4731__auto___33771 = (0);
while(true){
if((i__4731__auto___33771 < len__4730__auto___33770)){
args__4736__auto__.push((arguments[i__4731__auto___33771]));

var G__33772 = (i__4731__auto___33771 + (1));
i__4731__auto___33771 = G__33772;
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
var seq__33706_33773 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__33713_33774 = null;
var count__33714_33775 = (0);
var i__33715_33776 = (0);
while(true){
if((i__33715_33776 < count__33714_33775)){
var bitmap_33777 = cljs.core._nth.call(null,chunk__33713_33774,i__33715_33776);
var seq__33716_33778 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_33777));
var chunk__33718_33779 = null;
var count__33719_33780 = (0);
var i__33720_33781 = (0);
while(true){
if((i__33720_33781 < count__33719_33780)){
var vec__33752_33782 = cljs.core._nth.call(null,chunk__33718_33779,i__33720_33781);
var idx_33783 = cljs.core.nth.call(null,vec__33752_33782,(0),null);
var value_33784 = cljs.core.nth.call(null,vec__33752_33782,(1),null);
var masked_value_33785 = (value_33784 | (new_bitmap[idx_33783]));
(new_bitmap[idx_33783] = masked_value_33785);


var G__33786 = seq__33716_33778;
var G__33787 = chunk__33718_33779;
var G__33788 = count__33719_33780;
var G__33789 = (i__33720_33781 + (1));
seq__33716_33778 = G__33786;
chunk__33718_33779 = G__33787;
count__33719_33780 = G__33788;
i__33720_33781 = G__33789;
continue;
} else {
var temp__5720__auto___33790 = cljs.core.seq.call(null,seq__33716_33778);
if(temp__5720__auto___33790){
var seq__33716_33791__$1 = temp__5720__auto___33790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33716_33791__$1)){
var c__4550__auto___33792 = cljs.core.chunk_first.call(null,seq__33716_33791__$1);
var G__33793 = cljs.core.chunk_rest.call(null,seq__33716_33791__$1);
var G__33794 = c__4550__auto___33792;
var G__33795 = cljs.core.count.call(null,c__4550__auto___33792);
var G__33796 = (0);
seq__33716_33778 = G__33793;
chunk__33718_33779 = G__33794;
count__33719_33780 = G__33795;
i__33720_33781 = G__33796;
continue;
} else {
var vec__33755_33797 = cljs.core.first.call(null,seq__33716_33791__$1);
var idx_33798 = cljs.core.nth.call(null,vec__33755_33797,(0),null);
var value_33799 = cljs.core.nth.call(null,vec__33755_33797,(1),null);
var masked_value_33800 = (value_33799 | (new_bitmap[idx_33798]));
(new_bitmap[idx_33798] = masked_value_33800);


var G__33801 = cljs.core.next.call(null,seq__33716_33791__$1);
var G__33802 = null;
var G__33803 = (0);
var G__33804 = (0);
seq__33716_33778 = G__33801;
chunk__33718_33779 = G__33802;
count__33719_33780 = G__33803;
i__33720_33781 = G__33804;
continue;
}
} else {
}
}
break;
}

var G__33805 = seq__33706_33773;
var G__33806 = chunk__33713_33774;
var G__33807 = count__33714_33775;
var G__33808 = (i__33715_33776 + (1));
seq__33706_33773 = G__33805;
chunk__33713_33774 = G__33806;
count__33714_33775 = G__33807;
i__33715_33776 = G__33808;
continue;
} else {
var temp__5720__auto___33809 = cljs.core.seq.call(null,seq__33706_33773);
if(temp__5720__auto___33809){
var seq__33706_33810__$1 = temp__5720__auto___33809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33706_33810__$1)){
var c__4550__auto___33811 = cljs.core.chunk_first.call(null,seq__33706_33810__$1);
var G__33812 = cljs.core.chunk_rest.call(null,seq__33706_33810__$1);
var G__33813 = c__4550__auto___33811;
var G__33814 = cljs.core.count.call(null,c__4550__auto___33811);
var G__33815 = (0);
seq__33706_33773 = G__33812;
chunk__33713_33774 = G__33813;
count__33714_33775 = G__33814;
i__33715_33776 = G__33815;
continue;
} else {
var bitmap_33816 = cljs.core.first.call(null,seq__33706_33810__$1);
var seq__33707_33817 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_33816));
var chunk__33709_33818 = null;
var count__33710_33819 = (0);
var i__33711_33820 = (0);
while(true){
if((i__33711_33820 < count__33710_33819)){
var vec__33764_33821 = cljs.core._nth.call(null,chunk__33709_33818,i__33711_33820);
var idx_33822 = cljs.core.nth.call(null,vec__33764_33821,(0),null);
var value_33823 = cljs.core.nth.call(null,vec__33764_33821,(1),null);
var masked_value_33824 = (value_33823 | (new_bitmap[idx_33822]));
(new_bitmap[idx_33822] = masked_value_33824);


var G__33825 = seq__33707_33817;
var G__33826 = chunk__33709_33818;
var G__33827 = count__33710_33819;
var G__33828 = (i__33711_33820 + (1));
seq__33707_33817 = G__33825;
chunk__33709_33818 = G__33826;
count__33710_33819 = G__33827;
i__33711_33820 = G__33828;
continue;
} else {
var temp__5720__auto___33829__$1 = cljs.core.seq.call(null,seq__33707_33817);
if(temp__5720__auto___33829__$1){
var seq__33707_33830__$1 = temp__5720__auto___33829__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33707_33830__$1)){
var c__4550__auto___33831 = cljs.core.chunk_first.call(null,seq__33707_33830__$1);
var G__33832 = cljs.core.chunk_rest.call(null,seq__33707_33830__$1);
var G__33833 = c__4550__auto___33831;
var G__33834 = cljs.core.count.call(null,c__4550__auto___33831);
var G__33835 = (0);
seq__33707_33817 = G__33832;
chunk__33709_33818 = G__33833;
count__33710_33819 = G__33834;
i__33711_33820 = G__33835;
continue;
} else {
var vec__33767_33836 = cljs.core.first.call(null,seq__33707_33830__$1);
var idx_33837 = cljs.core.nth.call(null,vec__33767_33836,(0),null);
var value_33838 = cljs.core.nth.call(null,vec__33767_33836,(1),null);
var masked_value_33839 = (value_33838 | (new_bitmap[idx_33837]));
(new_bitmap[idx_33837] = masked_value_33839);


var G__33840 = cljs.core.next.call(null,seq__33707_33830__$1);
var G__33841 = null;
var G__33842 = (0);
var G__33843 = (0);
seq__33707_33817 = G__33840;
chunk__33709_33818 = G__33841;
count__33710_33819 = G__33842;
i__33711_33820 = G__33843;
continue;
}
} else {
}
}
break;
}

var G__33844 = cljs.core.next.call(null,seq__33706_33810__$1);
var G__33845 = null;
var G__33846 = (0);
var G__33847 = (0);
seq__33706_33773 = G__33844;
chunk__33713_33774 = G__33845;
count__33714_33775 = G__33846;
i__33715_33776 = G__33847;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq33705){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33705));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__33848(s__33849){
return (new cljs.core.LazySeq(null,(function (){
var s__33849__$1 = s__33849;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__33849__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__33849__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__33848_$_iter__33850(s__33851){
return (new cljs.core.LazySeq(null,((function (s__33849__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__33851__$1 = s__33851;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__33851__$1);
if(temp__5720__auto____$1){
var s__33851__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33851__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__33851__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__33853 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__33852 = (0);
while(true){
if((i__33852 < size__4522__auto__)){
var offset = cljs.core._nth.call(null,c__4521__auto__,i__33852);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__33853,idx);

var G__33854 = (i__33852 + (1));
i__33852 = G__33854;
continue;
} else {
var G__33855 = (i__33852 + (1));
i__33852 = G__33855;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33853),loom$alg_generic$bm_get_indicies_$_iter__33848_$_iter__33850.call(null,cljs.core.chunk_rest.call(null,s__33851__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33853),null);
}
} else {
var offset = cljs.core.first.call(null,s__33851__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__33848_$_iter__33850.call(null,cljs.core.rest.call(null,s__33851__$2)));
} else {
var G__33856 = cljs.core.rest.call(null,s__33851__$2);
s__33851__$1 = G__33856;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__33849__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__33849__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__33848.call(null,cljs.core.rest.call(null,s__33849__$1)));
} else {
var G__33857 = cljs.core.rest.call(null,s__33849__$1);
s__33849__$1 = G__33857;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33859,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33863 = k33859;
var G__33863__$1 = (((G__33863 instanceof cljs.core.Keyword))?G__33863.fqn:null);
switch (G__33863__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k33859,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33864){
var vec__33865 = p__33864;
var k__4408__auto__ = cljs.core.nth.call(null,vec__33865,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__33865,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33858){
var self__ = this;
var G__33858__$1 = this;
return (new cljs.core.RecordIter((0),G__33858__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33860,other33861){
var self__ = this;
var this33860__$1 = this;
return (((!((other33861 == null)))) && ((this33860__$1.constructor === other33861.constructor)) && (cljs.core._EQ_.call(null,this33860__$1.node__GT_idx,other33861.node__GT_idx)) && (cljs.core._EQ_.call(null,this33860__$1.idx__GT_node,other33861.idx__GT_node)) && (cljs.core._EQ_.call(null,this33860__$1.bitmaps,other33861.bitmaps)) && (cljs.core._EQ_.call(null,this33860__$1.__extmap,other33861.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33858){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33868 = cljs.core.keyword_identical_QMARK_;
var expr__33869 = k__4393__auto__;
if(cljs.core.truth_(pred__33868.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__33869))){
return (new loom.alg_generic.Ancestry(G__33858,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33868.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__33869))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__33858,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33868.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__33869))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__33858,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__33858),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33858){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__33858,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__33862){
var extmap__4424__auto__ = (function (){var G__33871 = cljs.core.dissoc.call(null,G__33862,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
if(cljs.core.record_QMARK_.call(null,G__33862)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33871);
} else {
return G__33871;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__33862),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__33862),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__33862),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
var len__4730__auto___33878 = arguments.length;
var i__4731__auto___33879 = (0);
while(true){
if((i__4731__auto___33879 < len__4730__auto___33878)){
args__4736__auto__.push((arguments[i__4731__auto___33879]));

var G__33880 = (i__4731__auto___33879 + (1));
i__4731__auto___33879 = G__33880;
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
var map__33876 = ancestry;
var map__33876__$1 = (((((!((map__33876 == null))))?(((((map__33876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33876):map__33876);
var node__GT_idx = cljs.core.get.call(null,map__33876__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__33876__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__33876__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq33873){
var G__33874 = cljs.core.first.call(null,seq33873);
var seq33873__$1 = cljs.core.next.call(null,seq33873);
var G__33875 = cljs.core.first.call(null,seq33873__$1);
var seq33873__$2 = cljs.core.next.call(null,seq33873__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33874,G__33875,seq33873__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__33881 = ancestry;
var map__33881__$1 = (((((!((map__33881 == null))))?(((((map__33881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33881):map__33881);
var node__GT_idx = cljs.core.get.call(null,map__33881__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__33881__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__33883 = ancestry;
var map__33883__$1 = (((((!((map__33883 == null))))?(((((map__33883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33883):map__33883);
var node__GT_idx = cljs.core.get.call(null,map__33883__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__33883__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__33883__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=alg_generic.js.map?rel=1601320146297
