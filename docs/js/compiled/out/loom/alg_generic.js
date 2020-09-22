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
return (function (p1__25493_SHARP_){
return loom.alg_generic.paths.call(null,preds,cljs.core.conj.call(null,path,p1__25493_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__25492_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__25492_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__25494_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__25494_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__25495){
var vec__25496 = p__25495;
var n = cljs.core.nth.call(null,vec__25496,(0),null);
var p = cljs.core.nth.call(null,vec__25496,(1),null);
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
var len__4730__auto___25505 = arguments.length;
var i__4731__auto___25506 = (0);
while(true){
if((i__4731__auto___25506 < len__4730__auto___25505)){
args__4736__auto__.push((arguments[i__4731__auto___25506]));

var G__25507 = (i__4731__auto___25506 + (1));
i__4731__auto___25506 = G__25507;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25502){
var map__25503 = p__25502;
var map__25503__$1 = (((((!((map__25503 == null))))?(((((map__25503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25503):map__25503);
var seen = cljs.core.get.call(null,map__25503__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__25503,map__25503__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__25503,map__25503__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__25503,map__25503__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__25503,map__25503__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq25499){
var G__25500 = cljs.core.first.call(null,seq25499);
var seq25499__$1 = cljs.core.next.call(null,seq25499);
var G__25501 = cljs.core.first.call(null,seq25499__$1);
var seq25499__$2 = cljs.core.next.call(null,seq25499__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25500,G__25501,seq25499__$2);
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
var len__4730__auto___25514 = arguments.length;
var i__4731__auto___25515 = (0);
while(true){
if((i__4731__auto___25515 < len__4730__auto___25514)){
args__4736__auto__.push((arguments[i__4731__auto___25515]));

var G__25516 = (i__4731__auto___25515 + (1));
i__4731__auto___25515 = G__25516;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25511){
var map__25512 = p__25511;
var map__25512__$1 = (((((!((map__25512 == null))))?(((((map__25512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25512):map__25512);
var seen = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__25512,map__25512__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__25512,map__25512__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__25512,map__25512__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__25517 = successors__$1;
var G__25518 = parent;
var G__25519 = cljs.core.peek.call(null,nbrstack);
var G__25520 = cljs.core.pop.call(null,stack);
var G__25521 = cljs.core.pop.call(null,nbrstack);
var G__25522 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__25517;
start__$1 = G__25518;
nbrs = G__25519;
stack = G__25520;
nbrstack = G__25521;
seen__$1 = G__25522;
continue;
} else {
return null;
}
}
break;
}
});})(map__25512,map__25512__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq25508){
var G__25509 = cljs.core.first.call(null,seq25508);
var seq25508__$1 = cljs.core.next.call(null,seq25508);
var G__25510 = cljs.core.first.call(null,seq25508__$1);
var seq25508__$2 = cljs.core.next.call(null,seq25508__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25509,G__25510,seq25508__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25529 = arguments.length;
var i__4731__auto___25530 = (0);
while(true){
if((i__4731__auto___25530 < len__4730__auto___25529)){
args__4736__auto__.push((arguments[i__4731__auto___25530]));

var G__25531 = (i__4731__auto___25530 + (1));
i__4731__auto___25530 = G__25531;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25526){
var map__25527 = p__25526;
var map__25527__$1 = (((((!((map__25527 == null))))?(((((map__25527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25527):map__25527);
var seen = cljs.core.get.call(null,map__25527__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__25527__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__25532 = seen__$2;
var G__25533 = cljs.core.assoc.call(null,preds,u,v);
var G__25534 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__25532;
preds = G__25533;
stack = G__25534;
continue;
} else {
var G__25535 = seen__$2;
var G__25536 = preds;
var G__25537 = cljs.core.pop.call(null,stack);
seen__$1 = G__25535;
preds = G__25536;
stack = G__25537;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq25523){
var G__25524 = cljs.core.first.call(null,seq25523);
var seq25523__$1 = cljs.core.next.call(null,seq25523);
var G__25525 = cljs.core.first.call(null,seq25523__$1);
var seq25523__$2 = cljs.core.next.call(null,seq25523__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25524,G__25525,seq25523__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25544 = arguments.length;
var i__4731__auto___25545 = (0);
while(true){
if((i__4731__auto___25545 < len__4730__auto___25544)){
args__4736__auto__.push((arguments[i__4731__auto___25545]));

var G__25546 = (i__4731__auto___25545 + (1));
i__4731__auto___25545 = G__25546;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25541){
var map__25542 = p__25541;
var map__25542__$1 = (((((!((map__25542 == null))))?(((((map__25542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25542):map__25542);
var seen = cljs.core.get.call(null,map__25542__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__25542__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__25547 = seen__$2;
var G__25548 = cljs.core.conj.call(null,result,v);
var G__25549 = cljs.core.pop.call(null,stack);
seen__$1 = G__25547;
result = G__25548;
stack = G__25549;
continue;
} else {
var G__25550 = seen__$2;
var G__25551 = result;
var G__25552 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__25550;
result = G__25551;
stack = G__25552;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq25538){
var G__25539 = cljs.core.first.call(null,seq25538);
var seq25538__$1 = cljs.core.next.call(null,seq25538);
var G__25540 = cljs.core.first.call(null,seq25538__$1);
var seq25538__$2 = cljs.core.next.call(null,seq25538__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25539,G__25540,seq25538__$2);
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
var len__4730__auto___25559 = arguments.length;
var i__4731__auto___25560 = (0);
while(true){
if((i__4731__auto___25560 < len__4730__auto___25559)){
args__4736__auto__.push((arguments[i__4731__auto___25560]));

var G__25561 = (i__4731__auto___25560 + (1));
i__4731__auto___25560 = G__25561;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25556){
var map__25557 = p__25556;
var map__25557__$1 = (((((!((map__25557 == null))))?(((((map__25557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25557):map__25557);
var seen = cljs.core.get.call(null,map__25557__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__25557__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__25562 = start__$1;
var G__25563 = cljs.core.next.call(null,nbrs);
var G__25564 = stack;
var G__25565 = nbrstack;
var G__25566 = seen__$2;
var G__25567 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__25562;
nbrs = G__25563;
stack = G__25564;
nbrstack = G__25565;
seen__$1 = G__25566;
edges = G__25567;
continue;
} else {
var G__25568 = nbr;
var G__25569 = successors.call(null,nbr);
var G__25570 = cljs.core.conj.call(null,stack,start__$1);
var G__25571 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__25572 = seen__$2;
var G__25573 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__25568;
nbrs = G__25569;
stack = G__25570;
nbrstack = G__25571;
seen__$1 = G__25572;
edges = G__25573;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__25574 = parent;
var G__25575 = cljs.core.peek.call(null,nbrstack);
var G__25576 = cljs.core.pop.call(null,stack);
var G__25577 = cljs.core.pop.call(null,nbrstack);
var G__25578 = seen__$2;
var G__25579 = edges;
start__$1 = G__25574;
nbrs = G__25575;
stack = G__25576;
nbrstack = G__25577;
seen__$1 = G__25578;
edges = G__25579;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq25553){
var G__25554 = cljs.core.first.call(null,seq25553);
var seq25553__$1 = cljs.core.next.call(null,seq25553);
var G__25555 = cljs.core.first.call(null,seq25553__$1);
var seq25553__$2 = cljs.core.next.call(null,seq25553__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25554,G__25555,seq25553__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__25581 = arguments.length;
switch (G__25581) {
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
var G__25583 = seen__$2;
var G__25584 = explored__$1;
var G__25585 = result;
var G__25586 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__25583;
explored__$1 = G__25584;
result = G__25585;
stack = G__25586;
continue;
}
} else {
var G__25587 = seen__$2;
var G__25588 = cljs.core.conj.call(null,explored__$1,v);
var G__25589 = cljs.core.conj.call(null,result,v);
var G__25590 = cljs.core.pop.call(null,stack);
seen__$1 = G__25587;
explored__$1 = G__25588;
result = G__25589;
stack = G__25590;
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
var len__4730__auto___25619 = arguments.length;
var i__4731__auto___25620 = (0);
while(true){
if((i__4731__auto___25620 < len__4730__auto___25619)){
args__4736__auto__.push((arguments[i__4731__auto___25620]));

var G__25621 = (i__4731__auto___25620 + (1));
i__4731__auto___25620 = G__25621;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25598){
var map__25599 = p__25598;
var map__25599__$1 = (((((!((map__25599 == null))))?(((((map__25599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25599):map__25599);
var f = cljs.core.get.call(null,map__25599__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__25599__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__25599__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__25599,map__25599__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__25599,map__25599__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__25608 = temp__5720__auto__;
var node = cljs.core.nth.call(null,vec__25608,(0),null);
var depth = cljs.core.nth.call(null,vec__25608,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__25608,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__25608,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen){
return (function (p1__25592_SHARP_){
return nbr_pred.call(null,p1__25592_SHARP_,node,(depth + (1)));
});})(vec__25608,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__25608,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen){
return (function (p1__25591_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__25591_SHARP_);
});})(vec__25608,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__25608,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__25611(s__25612){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__25608,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen){
return (function (){
var s__25612__$1 = s__25612;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__25612__$1);
if(temp__5720__auto____$1){
var s__25612__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25612__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25612__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25614 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25613 = (0);
while(true){
if((i__25613 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__25613);
cljs.core.chunk_append.call(null,b__25614,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__25622 = (i__25613 + (1));
i__25613 = G__25622;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25614),loom$alg_generic$step_$_iter__25611.call(null,cljs.core.chunk_rest.call(null,s__25612__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25614),null);
}
} else {
var nbr = cljs.core.first.call(null,s__25612__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__25611.call(null,cljs.core.rest.call(null,s__25612__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__25608,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen))
,null,null));
});})(nbrs,vec__25608,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen))
;
return iter__4523__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__25608,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen){
return (function (p1__25593_SHARP_,p2__25594_SHARP_){
return cljs.core.assoc.call(null,p1__25593_SHARP_,p2__25594_SHARP_,node);
});})(nbrs,vec__25608,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen))
,preds,nbrs));
});})(vec__25608,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen){
return (function loom$alg_generic$iter__25615(s__25616){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen){
return (function (){
var s__25616__$1 = s__25616;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25616__$1);
if(temp__5720__auto__){
var s__25616__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25616__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25616__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25618 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25617 = (0);
while(true){
if((i__25617 < size__4522__auto__)){
var s = cljs.core._nth.call(null,c__4521__auto__,i__25617);
cljs.core.chunk_append.call(null,b__25618,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__25623 = (i__25617 + (1));
i__25617 = G__25623;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25618),loom$alg_generic$iter__25615.call(null,cljs.core.chunk_rest.call(null,s__25616__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25618),null);
}
} else {
var s = cljs.core.first.call(null,s__25616__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__25615.call(null,cljs.core.rest.call(null,s__25616__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__25599,map__25599__$1,f,when,seen))
;
return iter__4523__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq25595){
var G__25596 = cljs.core.first.call(null,seq25595);
var seq25595__$1 = cljs.core.next.call(null,seq25595);
var G__25597 = cljs.core.first.call(null,seq25595__$1);
var seq25595__$2 = cljs.core.next.call(null,seq25595__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25596,G__25597,seq25595__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25630 = arguments.length;
var i__4731__auto___25631 = (0);
while(true){
if((i__4731__auto___25631 < len__4730__auto___25630)){
args__4736__auto__.push((arguments[i__4731__auto___25631]));

var G__25632 = (i__4731__auto___25631 + (1));
i__4731__auto___25631 = G__25632;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__25627){
var map__25628 = p__25627;
var map__25628__$1 = (((((!((map__25628 == null))))?(((((map__25628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25628):map__25628);
var seen = cljs.core.get.call(null,map__25628__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__25628,map__25628__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__25628,map__25628__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq25624){
var G__25625 = cljs.core.first.call(null,seq25624);
var seq25624__$1 = cljs.core.next.call(null,seq25624);
var G__25626 = cljs.core.first.call(null,seq25624__$1);
var seq25624__$2 = cljs.core.next.call(null,seq25624__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25625,G__25626,seq25624__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25644 = arguments.length;
var i__4731__auto___25645 = (0);
while(true){
if((i__4731__auto___25645 < len__4730__auto___25644)){
args__4736__auto__.push((arguments[i__4731__auto___25645]));

var G__25646 = (i__4731__auto___25645 + (1));
i__4731__auto___25645 = G__25646;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__25637){
var map__25638 = p__25637;
var map__25638__$1 = (((((!((map__25638 == null))))?(((((map__25638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25638):map__25638);
var opts = map__25638__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__5720__auto__ = cljs.core.some.call(null,((function (opts__$1,map__25638,map__25638__$1,opts){
return (function (p__25640){
var vec__25641 = p__25640;
var _ = cljs.core.nth.call(null,vec__25641,(0),null);
var pm = cljs.core.nth.call(null,vec__25641,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__25641,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__25638,map__25638__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq25633){
var G__25634 = cljs.core.first.call(null,seq25633);
var seq25633__$1 = cljs.core.next.call(null,seq25633);
var G__25635 = cljs.core.first.call(null,seq25633__$1);
var seq25633__$2 = cljs.core.next.call(null,seq25633__$1);
var G__25636 = cljs.core.first.call(null,seq25633__$2);
var seq25633__$3 = cljs.core.next.call(null,seq25633__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25634,G__25635,G__25636,seq25633__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__25647 = m2;
var G__25648 = m1;
m1 = G__25647;
m2 = G__25648;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__25650(s__25651){
return (new cljs.core.LazySeq(null,(function (){
var s__25651__$1 = s__25651;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25651__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__25651__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__25650_$_iter__25652(s__25653){
return (new cljs.core.LazySeq(null,((function (s__25651__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__25653__$1 = s__25653;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__25653__$1);
if(temp__5720__auto____$1){
var s__25653__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25653__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25653__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25655 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25654 = (0);
while(true){
if((i__25654 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__25654);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
cljs.core.chunk_append.call(null,b__25655,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__25656 = (i__25654 + (1));
i__25654 = G__25656;
continue;
} else {
var G__25657 = (i__25654 + (1));
i__25654 = G__25657;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25655),loom$alg_generic$reverse_edges_$_iter__25650_$_iter__25652.call(null,cljs.core.chunk_rest.call(null,s__25653__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25655),null);
}
} else {
var nbr = cljs.core.first.call(null,s__25653__$2);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__25650_$_iter__25652.call(null,cljs.core.rest.call(null,s__25653__$2)));
} else {
var G__25658 = cljs.core.rest.call(null,s__25653__$2);
s__25653__$1 = G__25658;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__25651__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__25651__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,successor_fn.call(null,node)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__25650.call(null,cljs.core.rest.call(null,s__25651__$1)));
} else {
var G__25659 = cljs.core.rest.call(null,s__25651__$1);
s__25651__$1 = G__25659;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__25660(s__25661){
return (new cljs.core.LazySeq(null,(function (){
var s__25661__$1 = s__25661;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25661__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__25661__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__25660_$_iter__25662(s__25663){
return (new cljs.core.LazySeq(null,((function (s__25661__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__25663__$1 = s__25663;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__25663__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__25663__$1,s__25661__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__25660_$_iter__25662_$_iter__25664(s__25665){
return (new cljs.core.LazySeq(null,((function (s__25663__$1,s__25661__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__25665__$1 = s__25665;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__25665__$1);
if(temp__5720__auto____$2){
var s__25665__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25665__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25665__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25667 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25666 = (0);
while(true){
if((i__25666 < size__4522__auto__)){
var to = cljs.core._nth.call(null,c__4521__auto__,i__25666);
cljs.core.chunk_append.call(null,b__25667,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__25668 = (i__25666 + (1));
i__25666 = G__25668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25667),loom$alg_generic$conj_paths_$_iter__25660_$_iter__25662_$_iter__25664.call(null,cljs.core.chunk_rest.call(null,s__25665__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25667),null);
}
} else {
var to = cljs.core.first.call(null,s__25665__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__25660_$_iter__25662_$_iter__25664.call(null,cljs.core.rest.call(null,s__25665__$2)));
}
} else {
return null;
}
break;
}
});})(s__25663__$1,s__25661__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__25663__$1,s__25661__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__25660_$_iter__25662.call(null,cljs.core.rest.call(null,s__25663__$1)));
} else {
var G__25669 = cljs.core.rest.call(null,s__25663__$1);
s__25663__$1 = G__25669;
continue;
}
} else {
return null;
}
break;
}
});})(s__25661__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__25661__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__25660.call(null,cljs.core.rest.call(null,s__25661__$1)));
} else {
var G__25670 = cljs.core.rest.call(null,s__25661__$1);
s__25661__$1 = G__25670;
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
return (function (p1__25671_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__25671_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__25672){
var vec__25673 = p__25672;
var key = cljs.core.nth.call(null,vec__25673,(0),null);
var val = cljs.core.nth.call(null,vec__25673,(1),null);
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
var G__25676 = outgoing__$1;
var G__25677 = incoming;
var G__25678 = q1__$1;
var G__25679 = q2;
outgoing = G__25676;
incoming = G__25677;
q1 = G__25678;
q2 = G__25679;
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
var G__25680 = outgoing;
var G__25681 = incoming__$1;
var G__25682 = q1;
var G__25683 = q2__$1;
outgoing = G__25680;
incoming = G__25681;
q1 = G__25682;
q2 = G__25683;
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
var G__25687 = arguments.length;
switch (G__25687) {
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
var step = (function loom$alg_generic$step(p__25699){
var vec__25700 = p__25699;
var state = cljs.core.nth.call(null,vec__25700,(0),null);
var pq = cljs.core.nth.call(null,vec__25700,(1),null);
var temp__5720__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__25703 = temp__5720__auto__;
var dist_su = cljs.core.nth.call(null,vec__25703,(0),null);
var _ = cljs.core.nth.call(null,vec__25703,(1),null);
var u = cljs.core.nth.call(null,vec__25703,(2),null);
var fpq = vec__25703;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__25703,dist_su,_,u,fpq,temp__5720__auto__,vec__25700,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__25703,dist_su,_,u,fpq,temp__5720__auto__,vec__25700,state,pq){
return (function (p__25706,v){
var vec__25707 = p__25706;
var state__$1 = cljs.core.nth.call(null,vec__25707,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__25707,(1),null);
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
});})(vec__25703,dist_su,_,u,fpq,temp__5720__auto__,vec__25700,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__25703,dist_su,_,u,fpq,temp__5720__auto__,vec__25700,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__25711){
var vec__25712 = p__25711;
var n = cljs.core.nth.call(null,vec__25712,(0),null);
var vec__25715 = cljs.core.nth.call(null,vec__25712,(1),null);
var d = cljs.core.nth.call(null,vec__25715,(0),null);
var p = cljs.core.nth.call(null,vec__25715,(1),null);
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
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__25718){
var vec__25719 = p__25718;
var node = cljs.core.nth.call(null,vec__25719,(0),null);
var _ = cljs.core.nth.call(null,vec__25719,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__25722 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__25722,(0),null);
var end_state = cljs.core.nth.call(null,vec__25722,(1),null);
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
var len__4730__auto___25793 = arguments.length;
var i__4731__auto___25794 = (0);
while(true){
if((i__4731__auto___25794 < len__4730__auto___25793)){
args__4736__auto__.push((arguments[i__4731__auto___25794]));

var G__25795 = (i__4731__auto___25794 + (1));
i__4731__auto___25794 = G__25795;
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
var seq__25729_25796 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__25736_25797 = null;
var count__25737_25798 = (0);
var i__25738_25799 = (0);
while(true){
if((i__25738_25799 < count__25737_25798)){
var bitmap_25800 = cljs.core._nth.call(null,chunk__25736_25797,i__25738_25799);
var seq__25739_25801 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_25800));
var chunk__25741_25802 = null;
var count__25742_25803 = (0);
var i__25743_25804 = (0);
while(true){
if((i__25743_25804 < count__25742_25803)){
var vec__25775_25805 = cljs.core._nth.call(null,chunk__25741_25802,i__25743_25804);
var idx_25806 = cljs.core.nth.call(null,vec__25775_25805,(0),null);
var value_25807 = cljs.core.nth.call(null,vec__25775_25805,(1),null);
var masked_value_25808 = (value_25807 | (new_bitmap[idx_25806]));
(new_bitmap[idx_25806] = masked_value_25808);


var G__25809 = seq__25739_25801;
var G__25810 = chunk__25741_25802;
var G__25811 = count__25742_25803;
var G__25812 = (i__25743_25804 + (1));
seq__25739_25801 = G__25809;
chunk__25741_25802 = G__25810;
count__25742_25803 = G__25811;
i__25743_25804 = G__25812;
continue;
} else {
var temp__5720__auto___25813 = cljs.core.seq.call(null,seq__25739_25801);
if(temp__5720__auto___25813){
var seq__25739_25814__$1 = temp__5720__auto___25813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25739_25814__$1)){
var c__4550__auto___25815 = cljs.core.chunk_first.call(null,seq__25739_25814__$1);
var G__25816 = cljs.core.chunk_rest.call(null,seq__25739_25814__$1);
var G__25817 = c__4550__auto___25815;
var G__25818 = cljs.core.count.call(null,c__4550__auto___25815);
var G__25819 = (0);
seq__25739_25801 = G__25816;
chunk__25741_25802 = G__25817;
count__25742_25803 = G__25818;
i__25743_25804 = G__25819;
continue;
} else {
var vec__25778_25820 = cljs.core.first.call(null,seq__25739_25814__$1);
var idx_25821 = cljs.core.nth.call(null,vec__25778_25820,(0),null);
var value_25822 = cljs.core.nth.call(null,vec__25778_25820,(1),null);
var masked_value_25823 = (value_25822 | (new_bitmap[idx_25821]));
(new_bitmap[idx_25821] = masked_value_25823);


var G__25824 = cljs.core.next.call(null,seq__25739_25814__$1);
var G__25825 = null;
var G__25826 = (0);
var G__25827 = (0);
seq__25739_25801 = G__25824;
chunk__25741_25802 = G__25825;
count__25742_25803 = G__25826;
i__25743_25804 = G__25827;
continue;
}
} else {
}
}
break;
}

var G__25828 = seq__25729_25796;
var G__25829 = chunk__25736_25797;
var G__25830 = count__25737_25798;
var G__25831 = (i__25738_25799 + (1));
seq__25729_25796 = G__25828;
chunk__25736_25797 = G__25829;
count__25737_25798 = G__25830;
i__25738_25799 = G__25831;
continue;
} else {
var temp__5720__auto___25832 = cljs.core.seq.call(null,seq__25729_25796);
if(temp__5720__auto___25832){
var seq__25729_25833__$1 = temp__5720__auto___25832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25729_25833__$1)){
var c__4550__auto___25834 = cljs.core.chunk_first.call(null,seq__25729_25833__$1);
var G__25835 = cljs.core.chunk_rest.call(null,seq__25729_25833__$1);
var G__25836 = c__4550__auto___25834;
var G__25837 = cljs.core.count.call(null,c__4550__auto___25834);
var G__25838 = (0);
seq__25729_25796 = G__25835;
chunk__25736_25797 = G__25836;
count__25737_25798 = G__25837;
i__25738_25799 = G__25838;
continue;
} else {
var bitmap_25839 = cljs.core.first.call(null,seq__25729_25833__$1);
var seq__25730_25840 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_25839));
var chunk__25732_25841 = null;
var count__25733_25842 = (0);
var i__25734_25843 = (0);
while(true){
if((i__25734_25843 < count__25733_25842)){
var vec__25787_25844 = cljs.core._nth.call(null,chunk__25732_25841,i__25734_25843);
var idx_25845 = cljs.core.nth.call(null,vec__25787_25844,(0),null);
var value_25846 = cljs.core.nth.call(null,vec__25787_25844,(1),null);
var masked_value_25847 = (value_25846 | (new_bitmap[idx_25845]));
(new_bitmap[idx_25845] = masked_value_25847);


var G__25848 = seq__25730_25840;
var G__25849 = chunk__25732_25841;
var G__25850 = count__25733_25842;
var G__25851 = (i__25734_25843 + (1));
seq__25730_25840 = G__25848;
chunk__25732_25841 = G__25849;
count__25733_25842 = G__25850;
i__25734_25843 = G__25851;
continue;
} else {
var temp__5720__auto___25852__$1 = cljs.core.seq.call(null,seq__25730_25840);
if(temp__5720__auto___25852__$1){
var seq__25730_25853__$1 = temp__5720__auto___25852__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25730_25853__$1)){
var c__4550__auto___25854 = cljs.core.chunk_first.call(null,seq__25730_25853__$1);
var G__25855 = cljs.core.chunk_rest.call(null,seq__25730_25853__$1);
var G__25856 = c__4550__auto___25854;
var G__25857 = cljs.core.count.call(null,c__4550__auto___25854);
var G__25858 = (0);
seq__25730_25840 = G__25855;
chunk__25732_25841 = G__25856;
count__25733_25842 = G__25857;
i__25734_25843 = G__25858;
continue;
} else {
var vec__25790_25859 = cljs.core.first.call(null,seq__25730_25853__$1);
var idx_25860 = cljs.core.nth.call(null,vec__25790_25859,(0),null);
var value_25861 = cljs.core.nth.call(null,vec__25790_25859,(1),null);
var masked_value_25862 = (value_25861 | (new_bitmap[idx_25860]));
(new_bitmap[idx_25860] = masked_value_25862);


var G__25863 = cljs.core.next.call(null,seq__25730_25853__$1);
var G__25864 = null;
var G__25865 = (0);
var G__25866 = (0);
seq__25730_25840 = G__25863;
chunk__25732_25841 = G__25864;
count__25733_25842 = G__25865;
i__25734_25843 = G__25866;
continue;
}
} else {
}
}
break;
}

var G__25867 = cljs.core.next.call(null,seq__25729_25833__$1);
var G__25868 = null;
var G__25869 = (0);
var G__25870 = (0);
seq__25729_25796 = G__25867;
chunk__25736_25797 = G__25868;
count__25737_25798 = G__25869;
i__25738_25799 = G__25870;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq25728){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25728));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__25871(s__25872){
return (new cljs.core.LazySeq(null,(function (){
var s__25872__$1 = s__25872;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25872__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__25872__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__25871_$_iter__25873(s__25874){
return (new cljs.core.LazySeq(null,((function (s__25872__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__25874__$1 = s__25874;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__25874__$1);
if(temp__5720__auto____$1){
var s__25874__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25874__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25874__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25876 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25875 = (0);
while(true){
if((i__25875 < size__4522__auto__)){
var offset = cljs.core._nth.call(null,c__4521__auto__,i__25875);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__25876,idx);

var G__25877 = (i__25875 + (1));
i__25875 = G__25877;
continue;
} else {
var G__25878 = (i__25875 + (1));
i__25875 = G__25878;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25876),loom$alg_generic$bm_get_indicies_$_iter__25871_$_iter__25873.call(null,cljs.core.chunk_rest.call(null,s__25874__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25876),null);
}
} else {
var offset = cljs.core.first.call(null,s__25874__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__25871_$_iter__25873.call(null,cljs.core.rest.call(null,s__25874__$2)));
} else {
var G__25879 = cljs.core.rest.call(null,s__25874__$2);
s__25874__$1 = G__25879;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__25872__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__25872__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__25871.call(null,cljs.core.rest.call(null,s__25872__$1)));
} else {
var G__25880 = cljs.core.rest.call(null,s__25872__$1);
s__25872__$1 = G__25880;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k25882,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__25886 = k25882;
var G__25886__$1 = (((G__25886 instanceof cljs.core.Keyword))?G__25886.fqn:null);
switch (G__25886__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k25882,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__25887){
var vec__25888 = p__25887;
var k__4408__auto__ = cljs.core.nth.call(null,vec__25888,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__25888,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25881){
var self__ = this;
var G__25881__$1 = this;
return (new cljs.core.RecordIter((0),G__25881__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25883,other25884){
var self__ = this;
var this25883__$1 = this;
return (((!((other25884 == null)))) && ((this25883__$1.constructor === other25884.constructor)) && (cljs.core._EQ_.call(null,this25883__$1.node__GT_idx,other25884.node__GT_idx)) && (cljs.core._EQ_.call(null,this25883__$1.idx__GT_node,other25884.idx__GT_node)) && (cljs.core._EQ_.call(null,this25883__$1.bitmaps,other25884.bitmaps)) && (cljs.core._EQ_.call(null,this25883__$1.__extmap,other25884.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__25881){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__25891 = cljs.core.keyword_identical_QMARK_;
var expr__25892 = k__4393__auto__;
if(cljs.core.truth_(pred__25891.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__25892))){
return (new loom.alg_generic.Ancestry(G__25881,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25891.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__25892))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__25881,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25891.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__25892))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__25881,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__25881),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__25881){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__25881,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__25885){
var extmap__4424__auto__ = (function (){var G__25894 = cljs.core.dissoc.call(null,G__25885,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
if(cljs.core.record_QMARK_.call(null,G__25885)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__25894);
} else {
return G__25894;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__25885),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__25885),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__25885),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
var len__4730__auto___25901 = arguments.length;
var i__4731__auto___25902 = (0);
while(true){
if((i__4731__auto___25902 < len__4730__auto___25901)){
args__4736__auto__.push((arguments[i__4731__auto___25902]));

var G__25903 = (i__4731__auto___25902 + (1));
i__4731__auto___25902 = G__25903;
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
var map__25899 = ancestry;
var map__25899__$1 = (((((!((map__25899 == null))))?(((((map__25899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25899):map__25899);
var node__GT_idx = cljs.core.get.call(null,map__25899__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__25899__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__25899__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq25896){
var G__25897 = cljs.core.first.call(null,seq25896);
var seq25896__$1 = cljs.core.next.call(null,seq25896);
var G__25898 = cljs.core.first.call(null,seq25896__$1);
var seq25896__$2 = cljs.core.next.call(null,seq25896__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25897,G__25898,seq25896__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__25904 = ancestry;
var map__25904__$1 = (((((!((map__25904 == null))))?(((((map__25904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25904):map__25904);
var node__GT_idx = cljs.core.get.call(null,map__25904__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__25904__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__25906 = ancestry;
var map__25906__$1 = (((((!((map__25906 == null))))?(((((map__25906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25906):map__25906);
var node__GT_idx = cljs.core.get.call(null,map__25906__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__25906__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__25906__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=alg_generic.js.map?rel=1600808338370
