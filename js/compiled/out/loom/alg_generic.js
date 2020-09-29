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
return (function (p1__34572_SHARP_){
return loom.alg_generic.paths.call(null,preds,cljs.core.conj.call(null,path,p1__34572_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__34571_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__34571_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__34573_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__34573_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__34574){
var vec__34575 = p__34574;
var n = cljs.core.nth.call(null,vec__34575,(0),null);
var p = cljs.core.nth.call(null,vec__34575,(1),null);
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
var len__4730__auto___34584 = arguments.length;
var i__4731__auto___34585 = (0);
while(true){
if((i__4731__auto___34585 < len__4730__auto___34584)){
args__4736__auto__.push((arguments[i__4731__auto___34585]));

var G__34586 = (i__4731__auto___34585 + (1));
i__4731__auto___34585 = G__34586;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34581){
var map__34582 = p__34581;
var map__34582__$1 = (((((!((map__34582 == null))))?(((((map__34582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34582):map__34582);
var seen = cljs.core.get.call(null,map__34582__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34582,map__34582__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__34582,map__34582__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__34582,map__34582__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__34582,map__34582__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq34578){
var G__34579 = cljs.core.first.call(null,seq34578);
var seq34578__$1 = cljs.core.next.call(null,seq34578);
var G__34580 = cljs.core.first.call(null,seq34578__$1);
var seq34578__$2 = cljs.core.next.call(null,seq34578__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34579,G__34580,seq34578__$2);
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
var len__4730__auto___34593 = arguments.length;
var i__4731__auto___34594 = (0);
while(true){
if((i__4731__auto___34594 < len__4730__auto___34593)){
args__4736__auto__.push((arguments[i__4731__auto___34594]));

var G__34595 = (i__4731__auto___34594 + (1));
i__4731__auto___34594 = G__34595;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34590){
var map__34591 = p__34590;
var map__34591__$1 = (((((!((map__34591 == null))))?(((((map__34591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34591):map__34591);
var seen = cljs.core.get.call(null,map__34591__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34591,map__34591__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34591,map__34591__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34591,map__34591__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__34596 = successors__$1;
var G__34597 = parent;
var G__34598 = cljs.core.peek.call(null,nbrstack);
var G__34599 = cljs.core.pop.call(null,stack);
var G__34600 = cljs.core.pop.call(null,nbrstack);
var G__34601 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__34596;
start__$1 = G__34597;
nbrs = G__34598;
stack = G__34599;
nbrstack = G__34600;
seen__$1 = G__34601;
continue;
} else {
return null;
}
}
break;
}
});})(map__34591,map__34591__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq34587){
var G__34588 = cljs.core.first.call(null,seq34587);
var seq34587__$1 = cljs.core.next.call(null,seq34587);
var G__34589 = cljs.core.first.call(null,seq34587__$1);
var seq34587__$2 = cljs.core.next.call(null,seq34587__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34588,G__34589,seq34587__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34608 = arguments.length;
var i__4731__auto___34609 = (0);
while(true){
if((i__4731__auto___34609 < len__4730__auto___34608)){
args__4736__auto__.push((arguments[i__4731__auto___34609]));

var G__34610 = (i__4731__auto___34609 + (1));
i__4731__auto___34609 = G__34610;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34605){
var map__34606 = p__34605;
var map__34606__$1 = (((((!((map__34606 == null))))?(((((map__34606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34606):map__34606);
var seen = cljs.core.get.call(null,map__34606__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__34606__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__34611 = seen__$2;
var G__34612 = cljs.core.assoc.call(null,preds,u,v);
var G__34613 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__34611;
preds = G__34612;
stack = G__34613;
continue;
} else {
var G__34614 = seen__$2;
var G__34615 = preds;
var G__34616 = cljs.core.pop.call(null,stack);
seen__$1 = G__34614;
preds = G__34615;
stack = G__34616;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq34602){
var G__34603 = cljs.core.first.call(null,seq34602);
var seq34602__$1 = cljs.core.next.call(null,seq34602);
var G__34604 = cljs.core.first.call(null,seq34602__$1);
var seq34602__$2 = cljs.core.next.call(null,seq34602__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34603,G__34604,seq34602__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34623 = arguments.length;
var i__4731__auto___34624 = (0);
while(true){
if((i__4731__auto___34624 < len__4730__auto___34623)){
args__4736__auto__.push((arguments[i__4731__auto___34624]));

var G__34625 = (i__4731__auto___34624 + (1));
i__4731__auto___34624 = G__34625;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34620){
var map__34621 = p__34620;
var map__34621__$1 = (((((!((map__34621 == null))))?(((((map__34621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34621):map__34621);
var seen = cljs.core.get.call(null,map__34621__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__34621__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__34626 = seen__$2;
var G__34627 = cljs.core.conj.call(null,result,v);
var G__34628 = cljs.core.pop.call(null,stack);
seen__$1 = G__34626;
result = G__34627;
stack = G__34628;
continue;
} else {
var G__34629 = seen__$2;
var G__34630 = result;
var G__34631 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__34629;
result = G__34630;
stack = G__34631;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq34617){
var G__34618 = cljs.core.first.call(null,seq34617);
var seq34617__$1 = cljs.core.next.call(null,seq34617);
var G__34619 = cljs.core.first.call(null,seq34617__$1);
var seq34617__$2 = cljs.core.next.call(null,seq34617__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34618,G__34619,seq34617__$2);
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
var len__4730__auto___34638 = arguments.length;
var i__4731__auto___34639 = (0);
while(true){
if((i__4731__auto___34639 < len__4730__auto___34638)){
args__4736__auto__.push((arguments[i__4731__auto___34639]));

var G__34640 = (i__4731__auto___34639 + (1));
i__4731__auto___34639 = G__34640;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34635){
var map__34636 = p__34635;
var map__34636__$1 = (((((!((map__34636 == null))))?(((((map__34636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34636):map__34636);
var seen = cljs.core.get.call(null,map__34636__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__34636__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__34641 = start__$1;
var G__34642 = cljs.core.next.call(null,nbrs);
var G__34643 = stack;
var G__34644 = nbrstack;
var G__34645 = seen__$2;
var G__34646 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__34641;
nbrs = G__34642;
stack = G__34643;
nbrstack = G__34644;
seen__$1 = G__34645;
edges = G__34646;
continue;
} else {
var G__34647 = nbr;
var G__34648 = successors.call(null,nbr);
var G__34649 = cljs.core.conj.call(null,stack,start__$1);
var G__34650 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__34651 = seen__$2;
var G__34652 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__34647;
nbrs = G__34648;
stack = G__34649;
nbrstack = G__34650;
seen__$1 = G__34651;
edges = G__34652;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__34653 = parent;
var G__34654 = cljs.core.peek.call(null,nbrstack);
var G__34655 = cljs.core.pop.call(null,stack);
var G__34656 = cljs.core.pop.call(null,nbrstack);
var G__34657 = seen__$2;
var G__34658 = edges;
start__$1 = G__34653;
nbrs = G__34654;
stack = G__34655;
nbrstack = G__34656;
seen__$1 = G__34657;
edges = G__34658;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq34632){
var G__34633 = cljs.core.first.call(null,seq34632);
var seq34632__$1 = cljs.core.next.call(null,seq34632);
var G__34634 = cljs.core.first.call(null,seq34632__$1);
var seq34632__$2 = cljs.core.next.call(null,seq34632__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34633,G__34634,seq34632__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__34660 = arguments.length;
switch (G__34660) {
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
var G__34662 = seen__$2;
var G__34663 = explored__$1;
var G__34664 = result;
var G__34665 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__34662;
explored__$1 = G__34663;
result = G__34664;
stack = G__34665;
continue;
}
} else {
var G__34666 = seen__$2;
var G__34667 = cljs.core.conj.call(null,explored__$1,v);
var G__34668 = cljs.core.conj.call(null,result,v);
var G__34669 = cljs.core.pop.call(null,stack);
seen__$1 = G__34666;
explored__$1 = G__34667;
result = G__34668;
stack = G__34669;
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
var len__4730__auto___34698 = arguments.length;
var i__4731__auto___34699 = (0);
while(true){
if((i__4731__auto___34699 < len__4730__auto___34698)){
args__4736__auto__.push((arguments[i__4731__auto___34699]));

var G__34700 = (i__4731__auto___34699 + (1));
i__4731__auto___34699 = G__34700;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34677){
var map__34678 = p__34677;
var map__34678__$1 = (((((!((map__34678 == null))))?(((((map__34678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34678):map__34678);
var f = cljs.core.get.call(null,map__34678__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__34678__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__34678__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__34678,map__34678__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__34678,map__34678__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34687 = temp__5720__auto__;
var node = cljs.core.nth.call(null,vec__34687,(0),null);
var depth = cljs.core.nth.call(null,vec__34687,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__34687,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__34687,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen){
return (function (p1__34671_SHARP_){
return nbr_pred.call(null,p1__34671_SHARP_,node,(depth + (1)));
});})(vec__34687,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__34687,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen){
return (function (p1__34670_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__34670_SHARP_);
});})(vec__34687,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__34687,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__34690(s__34691){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__34687,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen){
return (function (){
var s__34691__$1 = s__34691;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34691__$1);
if(temp__5720__auto____$1){
var s__34691__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34691__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34691__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34693 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34692 = (0);
while(true){
if((i__34692 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__34692);
cljs.core.chunk_append.call(null,b__34693,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__34701 = (i__34692 + (1));
i__34692 = G__34701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34693),loom$alg_generic$step_$_iter__34690.call(null,cljs.core.chunk_rest.call(null,s__34691__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34693),null);
}
} else {
var nbr = cljs.core.first.call(null,s__34691__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__34690.call(null,cljs.core.rest.call(null,s__34691__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__34687,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen))
,null,null));
});})(nbrs,vec__34687,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen))
;
return iter__4523__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__34687,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen){
return (function (p1__34672_SHARP_,p2__34673_SHARP_){
return cljs.core.assoc.call(null,p1__34672_SHARP_,p2__34673_SHARP_,node);
});})(nbrs,vec__34687,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen))
,preds,nbrs));
});})(vec__34687,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen){
return (function loom$alg_generic$iter__34694(s__34695){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen){
return (function (){
var s__34695__$1 = s__34695;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34695__$1);
if(temp__5720__auto__){
var s__34695__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34695__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34695__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34697 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34696 = (0);
while(true){
if((i__34696 < size__4522__auto__)){
var s = cljs.core._nth.call(null,c__4521__auto__,i__34696);
cljs.core.chunk_append.call(null,b__34697,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__34702 = (i__34696 + (1));
i__34696 = G__34702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34697),loom$alg_generic$iter__34694.call(null,cljs.core.chunk_rest.call(null,s__34695__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34697),null);
}
} else {
var s = cljs.core.first.call(null,s__34695__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__34694.call(null,cljs.core.rest.call(null,s__34695__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__34678,map__34678__$1,f,when,seen))
;
return iter__4523__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq34674){
var G__34675 = cljs.core.first.call(null,seq34674);
var seq34674__$1 = cljs.core.next.call(null,seq34674);
var G__34676 = cljs.core.first.call(null,seq34674__$1);
var seq34674__$2 = cljs.core.next.call(null,seq34674__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34675,G__34676,seq34674__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34709 = arguments.length;
var i__4731__auto___34710 = (0);
while(true){
if((i__4731__auto___34710 < len__4730__auto___34709)){
args__4736__auto__.push((arguments[i__4731__auto___34710]));

var G__34711 = (i__4731__auto___34710 + (1));
i__4731__auto___34710 = G__34711;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34706){
var map__34707 = p__34706;
var map__34707__$1 = (((((!((map__34707 == null))))?(((((map__34707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34707):map__34707);
var seen = cljs.core.get.call(null,map__34707__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__34707,map__34707__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__34707,map__34707__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq34703){
var G__34704 = cljs.core.first.call(null,seq34703);
var seq34703__$1 = cljs.core.next.call(null,seq34703);
var G__34705 = cljs.core.first.call(null,seq34703__$1);
var seq34703__$2 = cljs.core.next.call(null,seq34703__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34704,G__34705,seq34703__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34723 = arguments.length;
var i__4731__auto___34724 = (0);
while(true){
if((i__4731__auto___34724 < len__4730__auto___34723)){
args__4736__auto__.push((arguments[i__4731__auto___34724]));

var G__34725 = (i__4731__auto___34724 + (1));
i__4731__auto___34724 = G__34725;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__34716){
var map__34717 = p__34716;
var map__34717__$1 = (((((!((map__34717 == null))))?(((((map__34717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34717):map__34717);
var opts = map__34717__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__5720__auto__ = cljs.core.some.call(null,((function (opts__$1,map__34717,map__34717__$1,opts){
return (function (p__34719){
var vec__34720 = p__34719;
var _ = cljs.core.nth.call(null,vec__34720,(0),null);
var pm = cljs.core.nth.call(null,vec__34720,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__34720,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__34717,map__34717__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq34712){
var G__34713 = cljs.core.first.call(null,seq34712);
var seq34712__$1 = cljs.core.next.call(null,seq34712);
var G__34714 = cljs.core.first.call(null,seq34712__$1);
var seq34712__$2 = cljs.core.next.call(null,seq34712__$1);
var G__34715 = cljs.core.first.call(null,seq34712__$2);
var seq34712__$3 = cljs.core.next.call(null,seq34712__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34713,G__34714,G__34715,seq34712__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__34726 = m2;
var G__34727 = m1;
m1 = G__34726;
m2 = G__34727;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__34729(s__34730){
return (new cljs.core.LazySeq(null,(function (){
var s__34730__$1 = s__34730;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34730__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34730__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__34729_$_iter__34731(s__34732){
return (new cljs.core.LazySeq(null,((function (s__34730__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34732__$1 = s__34732;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34732__$1);
if(temp__5720__auto____$1){
var s__34732__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34732__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34732__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34734 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34733 = (0);
while(true){
if((i__34733 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__34733);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
cljs.core.chunk_append.call(null,b__34734,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__34735 = (i__34733 + (1));
i__34733 = G__34735;
continue;
} else {
var G__34736 = (i__34733 + (1));
i__34733 = G__34736;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34734),loom$alg_generic$reverse_edges_$_iter__34729_$_iter__34731.call(null,cljs.core.chunk_rest.call(null,s__34732__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34734),null);
}
} else {
var nbr = cljs.core.first.call(null,s__34732__$2);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__34729_$_iter__34731.call(null,cljs.core.rest.call(null,s__34732__$2)));
} else {
var G__34737 = cljs.core.rest.call(null,s__34732__$2);
s__34732__$1 = G__34737;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34730__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34730__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,successor_fn.call(null,node)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__34729.call(null,cljs.core.rest.call(null,s__34730__$1)));
} else {
var G__34738 = cljs.core.rest.call(null,s__34730__$1);
s__34730__$1 = G__34738;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__34739(s__34740){
return (new cljs.core.LazySeq(null,(function (){
var s__34740__$1 = s__34740;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34740__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34740__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34739_$_iter__34741(s__34742){
return (new cljs.core.LazySeq(null,((function (s__34740__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34742__$1 = s__34742;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34742__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__34742__$1,s__34740__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34739_$_iter__34741_$_iter__34743(s__34744){
return (new cljs.core.LazySeq(null,((function (s__34742__$1,s__34740__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34744__$1 = s__34744;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__34744__$1);
if(temp__5720__auto____$2){
var s__34744__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34744__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34744__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34746 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34745 = (0);
while(true){
if((i__34745 < size__4522__auto__)){
var to = cljs.core._nth.call(null,c__4521__auto__,i__34745);
cljs.core.chunk_append.call(null,b__34746,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__34747 = (i__34745 + (1));
i__34745 = G__34747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34746),loom$alg_generic$conj_paths_$_iter__34739_$_iter__34741_$_iter__34743.call(null,cljs.core.chunk_rest.call(null,s__34744__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34746),null);
}
} else {
var to = cljs.core.first.call(null,s__34744__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__34739_$_iter__34741_$_iter__34743.call(null,cljs.core.rest.call(null,s__34744__$2)));
}
} else {
return null;
}
break;
}
});})(s__34742__$1,s__34740__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34742__$1,s__34740__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34739_$_iter__34741.call(null,cljs.core.rest.call(null,s__34742__$1)));
} else {
var G__34748 = cljs.core.rest.call(null,s__34742__$1);
s__34742__$1 = G__34748;
continue;
}
} else {
return null;
}
break;
}
});})(s__34740__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34740__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34739.call(null,cljs.core.rest.call(null,s__34740__$1)));
} else {
var G__34749 = cljs.core.rest.call(null,s__34740__$1);
s__34740__$1 = G__34749;
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
return (function (p1__34750_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__34750_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__34751){
var vec__34752 = p__34751;
var key = cljs.core.nth.call(null,vec__34752,(0),null);
var val = cljs.core.nth.call(null,vec__34752,(1),null);
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
var G__34755 = outgoing__$1;
var G__34756 = incoming;
var G__34757 = q1__$1;
var G__34758 = q2;
outgoing = G__34755;
incoming = G__34756;
q1 = G__34757;
q2 = G__34758;
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
var G__34759 = outgoing;
var G__34760 = incoming__$1;
var G__34761 = q1;
var G__34762 = q2__$1;
outgoing = G__34759;
incoming = G__34760;
q1 = G__34761;
q2 = G__34762;
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
var G__34766 = arguments.length;
switch (G__34766) {
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
var step = (function loom$alg_generic$step(p__34778){
var vec__34779 = p__34778;
var state = cljs.core.nth.call(null,vec__34779,(0),null);
var pq = cljs.core.nth.call(null,vec__34779,(1),null);
var temp__5720__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34782 = temp__5720__auto__;
var dist_su = cljs.core.nth.call(null,vec__34782,(0),null);
var _ = cljs.core.nth.call(null,vec__34782,(1),null);
var u = cljs.core.nth.call(null,vec__34782,(2),null);
var fpq = vec__34782;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__34782,dist_su,_,u,fpq,temp__5720__auto__,vec__34779,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__34782,dist_su,_,u,fpq,temp__5720__auto__,vec__34779,state,pq){
return (function (p__34785,v){
var vec__34786 = p__34785;
var state__$1 = cljs.core.nth.call(null,vec__34786,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__34786,(1),null);
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
});})(vec__34782,dist_su,_,u,fpq,temp__5720__auto__,vec__34779,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__34782,dist_su,_,u,fpq,temp__5720__auto__,vec__34779,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__34790){
var vec__34791 = p__34790;
var n = cljs.core.nth.call(null,vec__34791,(0),null);
var vec__34794 = cljs.core.nth.call(null,vec__34791,(1),null);
var d = cljs.core.nth.call(null,vec__34794,(0),null);
var p = cljs.core.nth.call(null,vec__34794,(1),null);
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
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__34797){
var vec__34798 = p__34797;
var node = cljs.core.nth.call(null,vec__34798,(0),null);
var _ = cljs.core.nth.call(null,vec__34798,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__34801 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__34801,(0),null);
var end_state = cljs.core.nth.call(null,vec__34801,(1),null);
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
var len__4730__auto___34872 = arguments.length;
var i__4731__auto___34873 = (0);
while(true){
if((i__4731__auto___34873 < len__4730__auto___34872)){
args__4736__auto__.push((arguments[i__4731__auto___34873]));

var G__34874 = (i__4731__auto___34873 + (1));
i__4731__auto___34873 = G__34874;
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
var seq__34808_34875 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__34815_34876 = null;
var count__34816_34877 = (0);
var i__34817_34878 = (0);
while(true){
if((i__34817_34878 < count__34816_34877)){
var bitmap_34879 = cljs.core._nth.call(null,chunk__34815_34876,i__34817_34878);
var seq__34818_34880 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_34879));
var chunk__34820_34881 = null;
var count__34821_34882 = (0);
var i__34822_34883 = (0);
while(true){
if((i__34822_34883 < count__34821_34882)){
var vec__34854_34884 = cljs.core._nth.call(null,chunk__34820_34881,i__34822_34883);
var idx_34885 = cljs.core.nth.call(null,vec__34854_34884,(0),null);
var value_34886 = cljs.core.nth.call(null,vec__34854_34884,(1),null);
var masked_value_34887 = (value_34886 | (new_bitmap[idx_34885]));
(new_bitmap[idx_34885] = masked_value_34887);


var G__34888 = seq__34818_34880;
var G__34889 = chunk__34820_34881;
var G__34890 = count__34821_34882;
var G__34891 = (i__34822_34883 + (1));
seq__34818_34880 = G__34888;
chunk__34820_34881 = G__34889;
count__34821_34882 = G__34890;
i__34822_34883 = G__34891;
continue;
} else {
var temp__5720__auto___34892 = cljs.core.seq.call(null,seq__34818_34880);
if(temp__5720__auto___34892){
var seq__34818_34893__$1 = temp__5720__auto___34892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34818_34893__$1)){
var c__4550__auto___34894 = cljs.core.chunk_first.call(null,seq__34818_34893__$1);
var G__34895 = cljs.core.chunk_rest.call(null,seq__34818_34893__$1);
var G__34896 = c__4550__auto___34894;
var G__34897 = cljs.core.count.call(null,c__4550__auto___34894);
var G__34898 = (0);
seq__34818_34880 = G__34895;
chunk__34820_34881 = G__34896;
count__34821_34882 = G__34897;
i__34822_34883 = G__34898;
continue;
} else {
var vec__34857_34899 = cljs.core.first.call(null,seq__34818_34893__$1);
var idx_34900 = cljs.core.nth.call(null,vec__34857_34899,(0),null);
var value_34901 = cljs.core.nth.call(null,vec__34857_34899,(1),null);
var masked_value_34902 = (value_34901 | (new_bitmap[idx_34900]));
(new_bitmap[idx_34900] = masked_value_34902);


var G__34903 = cljs.core.next.call(null,seq__34818_34893__$1);
var G__34904 = null;
var G__34905 = (0);
var G__34906 = (0);
seq__34818_34880 = G__34903;
chunk__34820_34881 = G__34904;
count__34821_34882 = G__34905;
i__34822_34883 = G__34906;
continue;
}
} else {
}
}
break;
}

var G__34907 = seq__34808_34875;
var G__34908 = chunk__34815_34876;
var G__34909 = count__34816_34877;
var G__34910 = (i__34817_34878 + (1));
seq__34808_34875 = G__34907;
chunk__34815_34876 = G__34908;
count__34816_34877 = G__34909;
i__34817_34878 = G__34910;
continue;
} else {
var temp__5720__auto___34911 = cljs.core.seq.call(null,seq__34808_34875);
if(temp__5720__auto___34911){
var seq__34808_34912__$1 = temp__5720__auto___34911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34808_34912__$1)){
var c__4550__auto___34913 = cljs.core.chunk_first.call(null,seq__34808_34912__$1);
var G__34914 = cljs.core.chunk_rest.call(null,seq__34808_34912__$1);
var G__34915 = c__4550__auto___34913;
var G__34916 = cljs.core.count.call(null,c__4550__auto___34913);
var G__34917 = (0);
seq__34808_34875 = G__34914;
chunk__34815_34876 = G__34915;
count__34816_34877 = G__34916;
i__34817_34878 = G__34917;
continue;
} else {
var bitmap_34918 = cljs.core.first.call(null,seq__34808_34912__$1);
var seq__34809_34919 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_34918));
var chunk__34811_34920 = null;
var count__34812_34921 = (0);
var i__34813_34922 = (0);
while(true){
if((i__34813_34922 < count__34812_34921)){
var vec__34866_34923 = cljs.core._nth.call(null,chunk__34811_34920,i__34813_34922);
var idx_34924 = cljs.core.nth.call(null,vec__34866_34923,(0),null);
var value_34925 = cljs.core.nth.call(null,vec__34866_34923,(1),null);
var masked_value_34926 = (value_34925 | (new_bitmap[idx_34924]));
(new_bitmap[idx_34924] = masked_value_34926);


var G__34927 = seq__34809_34919;
var G__34928 = chunk__34811_34920;
var G__34929 = count__34812_34921;
var G__34930 = (i__34813_34922 + (1));
seq__34809_34919 = G__34927;
chunk__34811_34920 = G__34928;
count__34812_34921 = G__34929;
i__34813_34922 = G__34930;
continue;
} else {
var temp__5720__auto___34931__$1 = cljs.core.seq.call(null,seq__34809_34919);
if(temp__5720__auto___34931__$1){
var seq__34809_34932__$1 = temp__5720__auto___34931__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34809_34932__$1)){
var c__4550__auto___34933 = cljs.core.chunk_first.call(null,seq__34809_34932__$1);
var G__34934 = cljs.core.chunk_rest.call(null,seq__34809_34932__$1);
var G__34935 = c__4550__auto___34933;
var G__34936 = cljs.core.count.call(null,c__4550__auto___34933);
var G__34937 = (0);
seq__34809_34919 = G__34934;
chunk__34811_34920 = G__34935;
count__34812_34921 = G__34936;
i__34813_34922 = G__34937;
continue;
} else {
var vec__34869_34938 = cljs.core.first.call(null,seq__34809_34932__$1);
var idx_34939 = cljs.core.nth.call(null,vec__34869_34938,(0),null);
var value_34940 = cljs.core.nth.call(null,vec__34869_34938,(1),null);
var masked_value_34941 = (value_34940 | (new_bitmap[idx_34939]));
(new_bitmap[idx_34939] = masked_value_34941);


var G__34942 = cljs.core.next.call(null,seq__34809_34932__$1);
var G__34943 = null;
var G__34944 = (0);
var G__34945 = (0);
seq__34809_34919 = G__34942;
chunk__34811_34920 = G__34943;
count__34812_34921 = G__34944;
i__34813_34922 = G__34945;
continue;
}
} else {
}
}
break;
}

var G__34946 = cljs.core.next.call(null,seq__34808_34912__$1);
var G__34947 = null;
var G__34948 = (0);
var G__34949 = (0);
seq__34808_34875 = G__34946;
chunk__34815_34876 = G__34947;
count__34816_34877 = G__34948;
i__34817_34878 = G__34949;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq34807){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34807));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__34950(s__34951){
return (new cljs.core.LazySeq(null,(function (){
var s__34951__$1 = s__34951;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34951__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34951__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__34950_$_iter__34952(s__34953){
return (new cljs.core.LazySeq(null,((function (s__34951__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34953__$1 = s__34953;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34953__$1);
if(temp__5720__auto____$1){
var s__34953__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34953__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34953__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34955 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34954 = (0);
while(true){
if((i__34954 < size__4522__auto__)){
var offset = cljs.core._nth.call(null,c__4521__auto__,i__34954);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__34955,idx);

var G__34956 = (i__34954 + (1));
i__34954 = G__34956;
continue;
} else {
var G__34957 = (i__34954 + (1));
i__34954 = G__34957;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34955),loom$alg_generic$bm_get_indicies_$_iter__34950_$_iter__34952.call(null,cljs.core.chunk_rest.call(null,s__34953__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34955),null);
}
} else {
var offset = cljs.core.first.call(null,s__34953__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__34950_$_iter__34952.call(null,cljs.core.rest.call(null,s__34953__$2)));
} else {
var G__34958 = cljs.core.rest.call(null,s__34953__$2);
s__34953__$1 = G__34958;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34951__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34951__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__34950.call(null,cljs.core.rest.call(null,s__34951__$1)));
} else {
var G__34959 = cljs.core.rest.call(null,s__34951__$1);
s__34951__$1 = G__34959;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34961,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__34965 = k34961;
var G__34965__$1 = (((G__34965 instanceof cljs.core.Keyword))?G__34965.fqn:null);
switch (G__34965__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k34961,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__34966){
var vec__34967 = p__34966;
var k__4408__auto__ = cljs.core.nth.call(null,vec__34967,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__34967,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34960){
var self__ = this;
var G__34960__$1 = this;
return (new cljs.core.RecordIter((0),G__34960__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34962,other34963){
var self__ = this;
var this34962__$1 = this;
return (((!((other34963 == null)))) && ((this34962__$1.constructor === other34963.constructor)) && (cljs.core._EQ_.call(null,this34962__$1.node__GT_idx,other34963.node__GT_idx)) && (cljs.core._EQ_.call(null,this34962__$1.idx__GT_node,other34963.idx__GT_node)) && (cljs.core._EQ_.call(null,this34962__$1.bitmaps,other34963.bitmaps)) && (cljs.core._EQ_.call(null,this34962__$1.__extmap,other34963.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34960){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__34970 = cljs.core.keyword_identical_QMARK_;
var expr__34971 = k__4393__auto__;
if(cljs.core.truth_(pred__34970.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__34971))){
return (new loom.alg_generic.Ancestry(G__34960,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34970.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__34971))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__34960,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34970.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__34971))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__34960,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__34960),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34960){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__34960,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__34964){
var extmap__4424__auto__ = (function (){var G__34973 = cljs.core.dissoc.call(null,G__34964,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
if(cljs.core.record_QMARK_.call(null,G__34964)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__34973);
} else {
return G__34973;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__34964),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__34964),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__34964),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
var len__4730__auto___34980 = arguments.length;
var i__4731__auto___34981 = (0);
while(true){
if((i__4731__auto___34981 < len__4730__auto___34980)){
args__4736__auto__.push((arguments[i__4731__auto___34981]));

var G__34982 = (i__4731__auto___34981 + (1));
i__4731__auto___34981 = G__34982;
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
var map__34978 = ancestry;
var map__34978__$1 = (((((!((map__34978 == null))))?(((((map__34978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34978):map__34978);
var node__GT_idx = cljs.core.get.call(null,map__34978__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__34978__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__34978__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq34975){
var G__34976 = cljs.core.first.call(null,seq34975);
var seq34975__$1 = cljs.core.next.call(null,seq34975);
var G__34977 = cljs.core.first.call(null,seq34975__$1);
var seq34975__$2 = cljs.core.next.call(null,seq34975__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34976,G__34977,seq34975__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__34983 = ancestry;
var map__34983__$1 = (((((!((map__34983 == null))))?(((((map__34983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34983):map__34983);
var node__GT_idx = cljs.core.get.call(null,map__34983__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__34983__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__34985 = ancestry;
var map__34985__$1 = (((((!((map__34985 == null))))?(((((map__34985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34985):map__34985);
var node__GT_idx = cljs.core.get.call(null,map__34985__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__34985__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__34985__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=alg_generic.js.map?rel=1601347615353
