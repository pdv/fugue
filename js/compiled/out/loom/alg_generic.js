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
return (function (p1__5677_SHARP_){
return loom.alg_generic.paths.call(null,preds,cljs.core.conj.call(null,path,p1__5677_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__5676_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__5676_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__5678_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__5678_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__5679){
var vec__5680 = p__5679;
var n = cljs.core.nth.call(null,vec__5680,(0),null);
var p = cljs.core.nth.call(null,vec__5680,(1),null);
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
var len__4730__auto___5689 = arguments.length;
var i__4731__auto___5690 = (0);
while(true){
if((i__4731__auto___5690 < len__4730__auto___5689)){
args__4736__auto__.push((arguments[i__4731__auto___5690]));

var G__5691 = (i__4731__auto___5690 + (1));
i__4731__auto___5690 = G__5691;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__5686){
var map__5687 = p__5686;
var map__5687__$1 = (((((!((map__5687 == null))))?(((((map__5687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5687):map__5687);
var seen = cljs.core.get.call(null,map__5687__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__5687,map__5687__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__5687,map__5687__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__5687,map__5687__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__5687,map__5687__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq5683){
var G__5684 = cljs.core.first.call(null,seq5683);
var seq5683__$1 = cljs.core.next.call(null,seq5683);
var G__5685 = cljs.core.first.call(null,seq5683__$1);
var seq5683__$2 = cljs.core.next.call(null,seq5683__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5684,G__5685,seq5683__$2);
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
var len__4730__auto___5698 = arguments.length;
var i__4731__auto___5699 = (0);
while(true){
if((i__4731__auto___5699 < len__4730__auto___5698)){
args__4736__auto__.push((arguments[i__4731__auto___5699]));

var G__5700 = (i__4731__auto___5699 + (1));
i__4731__auto___5699 = G__5700;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__5695){
var map__5696 = p__5695;
var map__5696__$1 = (((((!((map__5696 == null))))?(((((map__5696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5696):map__5696);
var seen = cljs.core.get.call(null,map__5696__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__5696,map__5696__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__5696,map__5696__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__5696,map__5696__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__5701 = successors__$1;
var G__5702 = parent;
var G__5703 = cljs.core.peek.call(null,nbrstack);
var G__5704 = cljs.core.pop.call(null,stack);
var G__5705 = cljs.core.pop.call(null,nbrstack);
var G__5706 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__5701;
start__$1 = G__5702;
nbrs = G__5703;
stack = G__5704;
nbrstack = G__5705;
seen__$1 = G__5706;
continue;
} else {
return null;
}
}
break;
}
});})(map__5696,map__5696__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq5692){
var G__5693 = cljs.core.first.call(null,seq5692);
var seq5692__$1 = cljs.core.next.call(null,seq5692);
var G__5694 = cljs.core.first.call(null,seq5692__$1);
var seq5692__$2 = cljs.core.next.call(null,seq5692__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5693,G__5694,seq5692__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5713 = arguments.length;
var i__4731__auto___5714 = (0);
while(true){
if((i__4731__auto___5714 < len__4730__auto___5713)){
args__4736__auto__.push((arguments[i__4731__auto___5714]));

var G__5715 = (i__4731__auto___5714 + (1));
i__4731__auto___5714 = G__5715;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__5710){
var map__5711 = p__5710;
var map__5711__$1 = (((((!((map__5711 == null))))?(((((map__5711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5711):map__5711);
var seen = cljs.core.get.call(null,map__5711__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__5711__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__5716 = seen__$2;
var G__5717 = cljs.core.assoc.call(null,preds,u,v);
var G__5718 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__5716;
preds = G__5717;
stack = G__5718;
continue;
} else {
var G__5719 = seen__$2;
var G__5720 = preds;
var G__5721 = cljs.core.pop.call(null,stack);
seen__$1 = G__5719;
preds = G__5720;
stack = G__5721;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq5707){
var G__5708 = cljs.core.first.call(null,seq5707);
var seq5707__$1 = cljs.core.next.call(null,seq5707);
var G__5709 = cljs.core.first.call(null,seq5707__$1);
var seq5707__$2 = cljs.core.next.call(null,seq5707__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5708,G__5709,seq5707__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5728 = arguments.length;
var i__4731__auto___5729 = (0);
while(true){
if((i__4731__auto___5729 < len__4730__auto___5728)){
args__4736__auto__.push((arguments[i__4731__auto___5729]));

var G__5730 = (i__4731__auto___5729 + (1));
i__4731__auto___5729 = G__5730;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__5725){
var map__5726 = p__5725;
var map__5726__$1 = (((((!((map__5726 == null))))?(((((map__5726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5726):map__5726);
var seen = cljs.core.get.call(null,map__5726__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__5726__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__5731 = seen__$2;
var G__5732 = cljs.core.conj.call(null,result,v);
var G__5733 = cljs.core.pop.call(null,stack);
seen__$1 = G__5731;
result = G__5732;
stack = G__5733;
continue;
} else {
var G__5734 = seen__$2;
var G__5735 = result;
var G__5736 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__5734;
result = G__5735;
stack = G__5736;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq5722){
var G__5723 = cljs.core.first.call(null,seq5722);
var seq5722__$1 = cljs.core.next.call(null,seq5722);
var G__5724 = cljs.core.first.call(null,seq5722__$1);
var seq5722__$2 = cljs.core.next.call(null,seq5722__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5723,G__5724,seq5722__$2);
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
var len__4730__auto___5743 = arguments.length;
var i__4731__auto___5744 = (0);
while(true){
if((i__4731__auto___5744 < len__4730__auto___5743)){
args__4736__auto__.push((arguments[i__4731__auto___5744]));

var G__5745 = (i__4731__auto___5744 + (1));
i__4731__auto___5744 = G__5745;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__5740){
var map__5741 = p__5740;
var map__5741__$1 = (((((!((map__5741 == null))))?(((((map__5741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5741):map__5741);
var seen = cljs.core.get.call(null,map__5741__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__5741__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__5746 = start__$1;
var G__5747 = cljs.core.next.call(null,nbrs);
var G__5748 = stack;
var G__5749 = nbrstack;
var G__5750 = seen__$2;
var G__5751 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__5746;
nbrs = G__5747;
stack = G__5748;
nbrstack = G__5749;
seen__$1 = G__5750;
edges = G__5751;
continue;
} else {
var G__5752 = nbr;
var G__5753 = successors.call(null,nbr);
var G__5754 = cljs.core.conj.call(null,stack,start__$1);
var G__5755 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__5756 = seen__$2;
var G__5757 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__5752;
nbrs = G__5753;
stack = G__5754;
nbrstack = G__5755;
seen__$1 = G__5756;
edges = G__5757;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__5758 = parent;
var G__5759 = cljs.core.peek.call(null,nbrstack);
var G__5760 = cljs.core.pop.call(null,stack);
var G__5761 = cljs.core.pop.call(null,nbrstack);
var G__5762 = seen__$2;
var G__5763 = edges;
start__$1 = G__5758;
nbrs = G__5759;
stack = G__5760;
nbrstack = G__5761;
seen__$1 = G__5762;
edges = G__5763;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq5737){
var G__5738 = cljs.core.first.call(null,seq5737);
var seq5737__$1 = cljs.core.next.call(null,seq5737);
var G__5739 = cljs.core.first.call(null,seq5737__$1);
var seq5737__$2 = cljs.core.next.call(null,seq5737__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5738,G__5739,seq5737__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__5765 = arguments.length;
switch (G__5765) {
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
var G__5767 = seen__$2;
var G__5768 = explored__$1;
var G__5769 = result;
var G__5770 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__5767;
explored__$1 = G__5768;
result = G__5769;
stack = G__5770;
continue;
}
} else {
var G__5771 = seen__$2;
var G__5772 = cljs.core.conj.call(null,explored__$1,v);
var G__5773 = cljs.core.conj.call(null,result,v);
var G__5774 = cljs.core.pop.call(null,stack);
seen__$1 = G__5771;
explored__$1 = G__5772;
result = G__5773;
stack = G__5774;
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
var len__4730__auto___5803 = arguments.length;
var i__4731__auto___5804 = (0);
while(true){
if((i__4731__auto___5804 < len__4730__auto___5803)){
args__4736__auto__.push((arguments[i__4731__auto___5804]));

var G__5805 = (i__4731__auto___5804 + (1));
i__4731__auto___5804 = G__5805;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__5782){
var map__5783 = p__5782;
var map__5783__$1 = (((((!((map__5783 == null))))?(((((map__5783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5783):map__5783);
var f = cljs.core.get.call(null,map__5783__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__5783__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__5783__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__5783,map__5783__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__5783,map__5783__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__5792 = temp__5720__auto__;
var node = cljs.core.nth.call(null,vec__5792,(0),null);
var depth = cljs.core.nth.call(null,vec__5792,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__5792,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__5792,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen){
return (function (p1__5776_SHARP_){
return nbr_pred.call(null,p1__5776_SHARP_,node,(depth + (1)));
});})(vec__5792,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__5792,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen){
return (function (p1__5775_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__5775_SHARP_);
});})(vec__5792,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__5792,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__5795(s__5796){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__5792,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen){
return (function (){
var s__5796__$1 = s__5796;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__5796__$1);
if(temp__5720__auto____$1){
var s__5796__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5796__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__5796__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__5798 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__5797 = (0);
while(true){
if((i__5797 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__5797);
cljs.core.chunk_append.call(null,b__5798,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__5806 = (i__5797 + (1));
i__5797 = G__5806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5798),loom$alg_generic$step_$_iter__5795.call(null,cljs.core.chunk_rest.call(null,s__5796__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5798),null);
}
} else {
var nbr = cljs.core.first.call(null,s__5796__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__5795.call(null,cljs.core.rest.call(null,s__5796__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__5792,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen))
,null,null));
});})(nbrs,vec__5792,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen))
;
return iter__4523__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__5792,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen){
return (function (p1__5777_SHARP_,p2__5778_SHARP_){
return cljs.core.assoc.call(null,p1__5777_SHARP_,p2__5778_SHARP_,node);
});})(nbrs,vec__5792,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen))
,preds,nbrs));
});})(vec__5792,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen){
return (function loom$alg_generic$iter__5799(s__5800){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen){
return (function (){
var s__5800__$1 = s__5800;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__5800__$1);
if(temp__5720__auto__){
var s__5800__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5800__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__5800__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__5802 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__5801 = (0);
while(true){
if((i__5801 < size__4522__auto__)){
var s = cljs.core._nth.call(null,c__4521__auto__,i__5801);
cljs.core.chunk_append.call(null,b__5802,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__5807 = (i__5801 + (1));
i__5801 = G__5807;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5802),loom$alg_generic$iter__5799.call(null,cljs.core.chunk_rest.call(null,s__5800__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5802),null);
}
} else {
var s = cljs.core.first.call(null,s__5800__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__5799.call(null,cljs.core.rest.call(null,s__5800__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__5783,map__5783__$1,f,when,seen))
;
return iter__4523__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq5779){
var G__5780 = cljs.core.first.call(null,seq5779);
var seq5779__$1 = cljs.core.next.call(null,seq5779);
var G__5781 = cljs.core.first.call(null,seq5779__$1);
var seq5779__$2 = cljs.core.next.call(null,seq5779__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5780,G__5781,seq5779__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5814 = arguments.length;
var i__4731__auto___5815 = (0);
while(true){
if((i__4731__auto___5815 < len__4730__auto___5814)){
args__4736__auto__.push((arguments[i__4731__auto___5815]));

var G__5816 = (i__4731__auto___5815 + (1));
i__4731__auto___5815 = G__5816;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__5811){
var map__5812 = p__5811;
var map__5812__$1 = (((((!((map__5812 == null))))?(((((map__5812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5812):map__5812);
var seen = cljs.core.get.call(null,map__5812__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__5812,map__5812__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__5812,map__5812__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq5808){
var G__5809 = cljs.core.first.call(null,seq5808);
var seq5808__$1 = cljs.core.next.call(null,seq5808);
var G__5810 = cljs.core.first.call(null,seq5808__$1);
var seq5808__$2 = cljs.core.next.call(null,seq5808__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5809,G__5810,seq5808__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5828 = arguments.length;
var i__4731__auto___5829 = (0);
while(true){
if((i__4731__auto___5829 < len__4730__auto___5828)){
args__4736__auto__.push((arguments[i__4731__auto___5829]));

var G__5830 = (i__4731__auto___5829 + (1));
i__4731__auto___5829 = G__5830;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__5821){
var map__5822 = p__5821;
var map__5822__$1 = (((((!((map__5822 == null))))?(((((map__5822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5822):map__5822);
var opts = map__5822__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__5720__auto__ = cljs.core.some.call(null,((function (opts__$1,map__5822,map__5822__$1,opts){
return (function (p__5824){
var vec__5825 = p__5824;
var _ = cljs.core.nth.call(null,vec__5825,(0),null);
var pm = cljs.core.nth.call(null,vec__5825,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__5825,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__5822,map__5822__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq5817){
var G__5818 = cljs.core.first.call(null,seq5817);
var seq5817__$1 = cljs.core.next.call(null,seq5817);
var G__5819 = cljs.core.first.call(null,seq5817__$1);
var seq5817__$2 = cljs.core.next.call(null,seq5817__$1);
var G__5820 = cljs.core.first.call(null,seq5817__$2);
var seq5817__$3 = cljs.core.next.call(null,seq5817__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5818,G__5819,G__5820,seq5817__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__5831 = m2;
var G__5832 = m1;
m1 = G__5831;
m2 = G__5832;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__5834(s__5835){
return (new cljs.core.LazySeq(null,(function (){
var s__5835__$1 = s__5835;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__5835__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__5835__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__5834_$_iter__5836(s__5837){
return (new cljs.core.LazySeq(null,((function (s__5835__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__5837__$1 = s__5837;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__5837__$1);
if(temp__5720__auto____$1){
var s__5837__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5837__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__5837__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__5839 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__5838 = (0);
while(true){
if((i__5838 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__5838);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
cljs.core.chunk_append.call(null,b__5839,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__5840 = (i__5838 + (1));
i__5838 = G__5840;
continue;
} else {
var G__5841 = (i__5838 + (1));
i__5838 = G__5841;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5839),loom$alg_generic$reverse_edges_$_iter__5834_$_iter__5836.call(null,cljs.core.chunk_rest.call(null,s__5837__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5839),null);
}
} else {
var nbr = cljs.core.first.call(null,s__5837__$2);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__5834_$_iter__5836.call(null,cljs.core.rest.call(null,s__5837__$2)));
} else {
var G__5842 = cljs.core.rest.call(null,s__5837__$2);
s__5837__$1 = G__5842;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__5835__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__5835__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,successor_fn.call(null,node)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__5834.call(null,cljs.core.rest.call(null,s__5835__$1)));
} else {
var G__5843 = cljs.core.rest.call(null,s__5835__$1);
s__5835__$1 = G__5843;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__5844(s__5845){
return (new cljs.core.LazySeq(null,(function (){
var s__5845__$1 = s__5845;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__5845__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__5845__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__5844_$_iter__5846(s__5847){
return (new cljs.core.LazySeq(null,((function (s__5845__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__5847__$1 = s__5847;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__5847__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__5847__$1,s__5845__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__5844_$_iter__5846_$_iter__5848(s__5849){
return (new cljs.core.LazySeq(null,((function (s__5847__$1,s__5845__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__5849__$1 = s__5849;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__5849__$1);
if(temp__5720__auto____$2){
var s__5849__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5849__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__5849__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__5851 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__5850 = (0);
while(true){
if((i__5850 < size__4522__auto__)){
var to = cljs.core._nth.call(null,c__4521__auto__,i__5850);
cljs.core.chunk_append.call(null,b__5851,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__5852 = (i__5850 + (1));
i__5850 = G__5852;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5851),loom$alg_generic$conj_paths_$_iter__5844_$_iter__5846_$_iter__5848.call(null,cljs.core.chunk_rest.call(null,s__5849__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5851),null);
}
} else {
var to = cljs.core.first.call(null,s__5849__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__5844_$_iter__5846_$_iter__5848.call(null,cljs.core.rest.call(null,s__5849__$2)));
}
} else {
return null;
}
break;
}
});})(s__5847__$1,s__5845__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__5847__$1,s__5845__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__5844_$_iter__5846.call(null,cljs.core.rest.call(null,s__5847__$1)));
} else {
var G__5853 = cljs.core.rest.call(null,s__5847__$1);
s__5847__$1 = G__5853;
continue;
}
} else {
return null;
}
break;
}
});})(s__5845__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__5845__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__5844.call(null,cljs.core.rest.call(null,s__5845__$1)));
} else {
var G__5854 = cljs.core.rest.call(null,s__5845__$1);
s__5845__$1 = G__5854;
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
return (function (p1__5855_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__5855_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__5856){
var vec__5857 = p__5856;
var key = cljs.core.nth.call(null,vec__5857,(0),null);
var val = cljs.core.nth.call(null,vec__5857,(1),null);
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
var G__5860 = outgoing__$1;
var G__5861 = incoming;
var G__5862 = q1__$1;
var G__5863 = q2;
outgoing = G__5860;
incoming = G__5861;
q1 = G__5862;
q2 = G__5863;
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
var G__5864 = outgoing;
var G__5865 = incoming__$1;
var G__5866 = q1;
var G__5867 = q2__$1;
outgoing = G__5864;
incoming = G__5865;
q1 = G__5866;
q2 = G__5867;
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
var G__5871 = arguments.length;
switch (G__5871) {
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
var step = (function loom$alg_generic$step(p__5883){
var vec__5884 = p__5883;
var state = cljs.core.nth.call(null,vec__5884,(0),null);
var pq = cljs.core.nth.call(null,vec__5884,(1),null);
var temp__5720__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__5887 = temp__5720__auto__;
var dist_su = cljs.core.nth.call(null,vec__5887,(0),null);
var _ = cljs.core.nth.call(null,vec__5887,(1),null);
var u = cljs.core.nth.call(null,vec__5887,(2),null);
var fpq = vec__5887;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__5887,dist_su,_,u,fpq,temp__5720__auto__,vec__5884,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__5887,dist_su,_,u,fpq,temp__5720__auto__,vec__5884,state,pq){
return (function (p__5890,v){
var vec__5891 = p__5890;
var state__$1 = cljs.core.nth.call(null,vec__5891,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__5891,(1),null);
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
});})(vec__5887,dist_su,_,u,fpq,temp__5720__auto__,vec__5884,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__5887,dist_su,_,u,fpq,temp__5720__auto__,vec__5884,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__5895){
var vec__5896 = p__5895;
var n = cljs.core.nth.call(null,vec__5896,(0),null);
var vec__5899 = cljs.core.nth.call(null,vec__5896,(1),null);
var d = cljs.core.nth.call(null,vec__5899,(0),null);
var p = cljs.core.nth.call(null,vec__5899,(1),null);
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
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__5902){
var vec__5903 = p__5902;
var node = cljs.core.nth.call(null,vec__5903,(0),null);
var _ = cljs.core.nth.call(null,vec__5903,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__5906 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__5906,(0),null);
var end_state = cljs.core.nth.call(null,vec__5906,(1),null);
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
var len__4730__auto___5977 = arguments.length;
var i__4731__auto___5978 = (0);
while(true){
if((i__4731__auto___5978 < len__4730__auto___5977)){
args__4736__auto__.push((arguments[i__4731__auto___5978]));

var G__5979 = (i__4731__auto___5978 + (1));
i__4731__auto___5978 = G__5979;
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
var seq__5913_5980 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__5920_5981 = null;
var count__5921_5982 = (0);
var i__5922_5983 = (0);
while(true){
if((i__5922_5983 < count__5921_5982)){
var bitmap_5984 = cljs.core._nth.call(null,chunk__5920_5981,i__5922_5983);
var seq__5923_5985 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_5984));
var chunk__5925_5986 = null;
var count__5926_5987 = (0);
var i__5927_5988 = (0);
while(true){
if((i__5927_5988 < count__5926_5987)){
var vec__5959_5989 = cljs.core._nth.call(null,chunk__5925_5986,i__5927_5988);
var idx_5990 = cljs.core.nth.call(null,vec__5959_5989,(0),null);
var value_5991 = cljs.core.nth.call(null,vec__5959_5989,(1),null);
var masked_value_5992 = (value_5991 | (new_bitmap[idx_5990]));
(new_bitmap[idx_5990] = masked_value_5992);


var G__5993 = seq__5923_5985;
var G__5994 = chunk__5925_5986;
var G__5995 = count__5926_5987;
var G__5996 = (i__5927_5988 + (1));
seq__5923_5985 = G__5993;
chunk__5925_5986 = G__5994;
count__5926_5987 = G__5995;
i__5927_5988 = G__5996;
continue;
} else {
var temp__5720__auto___5997 = cljs.core.seq.call(null,seq__5923_5985);
if(temp__5720__auto___5997){
var seq__5923_5998__$1 = temp__5720__auto___5997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5923_5998__$1)){
var c__4550__auto___5999 = cljs.core.chunk_first.call(null,seq__5923_5998__$1);
var G__6000 = cljs.core.chunk_rest.call(null,seq__5923_5998__$1);
var G__6001 = c__4550__auto___5999;
var G__6002 = cljs.core.count.call(null,c__4550__auto___5999);
var G__6003 = (0);
seq__5923_5985 = G__6000;
chunk__5925_5986 = G__6001;
count__5926_5987 = G__6002;
i__5927_5988 = G__6003;
continue;
} else {
var vec__5962_6004 = cljs.core.first.call(null,seq__5923_5998__$1);
var idx_6005 = cljs.core.nth.call(null,vec__5962_6004,(0),null);
var value_6006 = cljs.core.nth.call(null,vec__5962_6004,(1),null);
var masked_value_6007 = (value_6006 | (new_bitmap[idx_6005]));
(new_bitmap[idx_6005] = masked_value_6007);


var G__6008 = cljs.core.next.call(null,seq__5923_5998__$1);
var G__6009 = null;
var G__6010 = (0);
var G__6011 = (0);
seq__5923_5985 = G__6008;
chunk__5925_5986 = G__6009;
count__5926_5987 = G__6010;
i__5927_5988 = G__6011;
continue;
}
} else {
}
}
break;
}

var G__6012 = seq__5913_5980;
var G__6013 = chunk__5920_5981;
var G__6014 = count__5921_5982;
var G__6015 = (i__5922_5983 + (1));
seq__5913_5980 = G__6012;
chunk__5920_5981 = G__6013;
count__5921_5982 = G__6014;
i__5922_5983 = G__6015;
continue;
} else {
var temp__5720__auto___6016 = cljs.core.seq.call(null,seq__5913_5980);
if(temp__5720__auto___6016){
var seq__5913_6017__$1 = temp__5720__auto___6016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5913_6017__$1)){
var c__4550__auto___6018 = cljs.core.chunk_first.call(null,seq__5913_6017__$1);
var G__6019 = cljs.core.chunk_rest.call(null,seq__5913_6017__$1);
var G__6020 = c__4550__auto___6018;
var G__6021 = cljs.core.count.call(null,c__4550__auto___6018);
var G__6022 = (0);
seq__5913_5980 = G__6019;
chunk__5920_5981 = G__6020;
count__5921_5982 = G__6021;
i__5922_5983 = G__6022;
continue;
} else {
var bitmap_6023 = cljs.core.first.call(null,seq__5913_6017__$1);
var seq__5914_6024 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_6023));
var chunk__5916_6025 = null;
var count__5917_6026 = (0);
var i__5918_6027 = (0);
while(true){
if((i__5918_6027 < count__5917_6026)){
var vec__5971_6028 = cljs.core._nth.call(null,chunk__5916_6025,i__5918_6027);
var idx_6029 = cljs.core.nth.call(null,vec__5971_6028,(0),null);
var value_6030 = cljs.core.nth.call(null,vec__5971_6028,(1),null);
var masked_value_6031 = (value_6030 | (new_bitmap[idx_6029]));
(new_bitmap[idx_6029] = masked_value_6031);


var G__6032 = seq__5914_6024;
var G__6033 = chunk__5916_6025;
var G__6034 = count__5917_6026;
var G__6035 = (i__5918_6027 + (1));
seq__5914_6024 = G__6032;
chunk__5916_6025 = G__6033;
count__5917_6026 = G__6034;
i__5918_6027 = G__6035;
continue;
} else {
var temp__5720__auto___6036__$1 = cljs.core.seq.call(null,seq__5914_6024);
if(temp__5720__auto___6036__$1){
var seq__5914_6037__$1 = temp__5720__auto___6036__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5914_6037__$1)){
var c__4550__auto___6038 = cljs.core.chunk_first.call(null,seq__5914_6037__$1);
var G__6039 = cljs.core.chunk_rest.call(null,seq__5914_6037__$1);
var G__6040 = c__4550__auto___6038;
var G__6041 = cljs.core.count.call(null,c__4550__auto___6038);
var G__6042 = (0);
seq__5914_6024 = G__6039;
chunk__5916_6025 = G__6040;
count__5917_6026 = G__6041;
i__5918_6027 = G__6042;
continue;
} else {
var vec__5974_6043 = cljs.core.first.call(null,seq__5914_6037__$1);
var idx_6044 = cljs.core.nth.call(null,vec__5974_6043,(0),null);
var value_6045 = cljs.core.nth.call(null,vec__5974_6043,(1),null);
var masked_value_6046 = (value_6045 | (new_bitmap[idx_6044]));
(new_bitmap[idx_6044] = masked_value_6046);


var G__6047 = cljs.core.next.call(null,seq__5914_6037__$1);
var G__6048 = null;
var G__6049 = (0);
var G__6050 = (0);
seq__5914_6024 = G__6047;
chunk__5916_6025 = G__6048;
count__5917_6026 = G__6049;
i__5918_6027 = G__6050;
continue;
}
} else {
}
}
break;
}

var G__6051 = cljs.core.next.call(null,seq__5913_6017__$1);
var G__6052 = null;
var G__6053 = (0);
var G__6054 = (0);
seq__5913_5980 = G__6051;
chunk__5920_5981 = G__6052;
count__5921_5982 = G__6053;
i__5922_5983 = G__6054;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq5912){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5912));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__6055(s__6056){
return (new cljs.core.LazySeq(null,(function (){
var s__6056__$1 = s__6056;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__6056__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__6056__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__6055_$_iter__6057(s__6058){
return (new cljs.core.LazySeq(null,((function (s__6056__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__6058__$1 = s__6058;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__6058__$1);
if(temp__5720__auto____$1){
var s__6058__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6058__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__6058__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__6060 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__6059 = (0);
while(true){
if((i__6059 < size__4522__auto__)){
var offset = cljs.core._nth.call(null,c__4521__auto__,i__6059);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__6060,idx);

var G__6061 = (i__6059 + (1));
i__6059 = G__6061;
continue;
} else {
var G__6062 = (i__6059 + (1));
i__6059 = G__6062;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6060),loom$alg_generic$bm_get_indicies_$_iter__6055_$_iter__6057.call(null,cljs.core.chunk_rest.call(null,s__6058__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6060),null);
}
} else {
var offset = cljs.core.first.call(null,s__6058__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__6055_$_iter__6057.call(null,cljs.core.rest.call(null,s__6058__$2)));
} else {
var G__6063 = cljs.core.rest.call(null,s__6058__$2);
s__6058__$1 = G__6063;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__6056__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__6056__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__6055.call(null,cljs.core.rest.call(null,s__6056__$1)));
} else {
var G__6064 = cljs.core.rest.call(null,s__6056__$1);
s__6056__$1 = G__6064;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k6066,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__6070 = k6066;
var G__6070__$1 = (((G__6070 instanceof cljs.core.Keyword))?G__6070.fqn:null);
switch (G__6070__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k6066,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__6071){
var vec__6072 = p__6071;
var k__4408__auto__ = cljs.core.nth.call(null,vec__6072,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__6072,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6065){
var self__ = this;
var G__6065__$1 = this;
return (new cljs.core.RecordIter((0),G__6065__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6067,other6068){
var self__ = this;
var this6067__$1 = this;
return (((!((other6068 == null)))) && ((this6067__$1.constructor === other6068.constructor)) && (cljs.core._EQ_.call(null,this6067__$1.node__GT_idx,other6068.node__GT_idx)) && (cljs.core._EQ_.call(null,this6067__$1.idx__GT_node,other6068.idx__GT_node)) && (cljs.core._EQ_.call(null,this6067__$1.bitmaps,other6068.bitmaps)) && (cljs.core._EQ_.call(null,this6067__$1.__extmap,other6068.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__6065){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__6075 = cljs.core.keyword_identical_QMARK_;
var expr__6076 = k__4393__auto__;
if(cljs.core.truth_(pred__6075.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__6076))){
return (new loom.alg_generic.Ancestry(G__6065,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6075.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__6076))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__6065,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__6075.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__6076))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__6065,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__6065),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__6065){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__6065,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__6069){
var extmap__4424__auto__ = (function (){var G__6078 = cljs.core.dissoc.call(null,G__6069,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
if(cljs.core.record_QMARK_.call(null,G__6069)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__6078);
} else {
return G__6078;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__6069),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__6069),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__6069),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
var len__4730__auto___6085 = arguments.length;
var i__4731__auto___6086 = (0);
while(true){
if((i__4731__auto___6086 < len__4730__auto___6085)){
args__4736__auto__.push((arguments[i__4731__auto___6086]));

var G__6087 = (i__4731__auto___6086 + (1));
i__4731__auto___6086 = G__6087;
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
var map__6083 = ancestry;
var map__6083__$1 = (((((!((map__6083 == null))))?(((((map__6083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6083):map__6083);
var node__GT_idx = cljs.core.get.call(null,map__6083__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__6083__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__6083__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq6080){
var G__6081 = cljs.core.first.call(null,seq6080);
var seq6080__$1 = cljs.core.next.call(null,seq6080);
var G__6082 = cljs.core.first.call(null,seq6080__$1);
var seq6080__$2 = cljs.core.next.call(null,seq6080__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6081,G__6082,seq6080__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__6088 = ancestry;
var map__6088__$1 = (((((!((map__6088 == null))))?(((((map__6088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6088):map__6088);
var node__GT_idx = cljs.core.get.call(null,map__6088__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__6088__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__6090 = ancestry;
var map__6090__$1 = (((((!((map__6090 == null))))?(((((map__6090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6090):map__6090);
var node__GT_idx = cljs.core.get.call(null,map__6090__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__6090__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__6090__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=alg_generic.js.map?rel=1611088181650
