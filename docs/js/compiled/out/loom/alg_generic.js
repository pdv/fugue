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
return (function (p1__33625_SHARP_){
return loom.alg_generic.paths.call(null,preds,cljs.core.conj.call(null,path,p1__33625_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__33624_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__33624_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__33626_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__33626_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__33627){
var vec__33628 = p__33627;
var n = cljs.core.nth.call(null,vec__33628,(0),null);
var p = cljs.core.nth.call(null,vec__33628,(1),null);
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
var len__4730__auto___33637 = arguments.length;
var i__4731__auto___33638 = (0);
while(true){
if((i__4731__auto___33638 < len__4730__auto___33637)){
args__4736__auto__.push((arguments[i__4731__auto___33638]));

var G__33639 = (i__4731__auto___33638 + (1));
i__4731__auto___33638 = G__33639;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__33634){
var map__33635 = p__33634;
var map__33635__$1 = (((((!((map__33635 == null))))?(((((map__33635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33635):map__33635);
var seen = cljs.core.get.call(null,map__33635__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__33635,map__33635__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__33635,map__33635__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__33635,map__33635__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__33635,map__33635__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq33631){
var G__33632 = cljs.core.first.call(null,seq33631);
var seq33631__$1 = cljs.core.next.call(null,seq33631);
var G__33633 = cljs.core.first.call(null,seq33631__$1);
var seq33631__$2 = cljs.core.next.call(null,seq33631__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33632,G__33633,seq33631__$2);
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
var len__4730__auto___33646 = arguments.length;
var i__4731__auto___33647 = (0);
while(true){
if((i__4731__auto___33647 < len__4730__auto___33646)){
args__4736__auto__.push((arguments[i__4731__auto___33647]));

var G__33648 = (i__4731__auto___33647 + (1));
i__4731__auto___33647 = G__33648;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__33643){
var map__33644 = p__33643;
var map__33644__$1 = (((((!((map__33644 == null))))?(((((map__33644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33644):map__33644);
var seen = cljs.core.get.call(null,map__33644__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__33644,map__33644__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__33644,map__33644__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__33644,map__33644__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__33649 = successors__$1;
var G__33650 = parent;
var G__33651 = cljs.core.peek.call(null,nbrstack);
var G__33652 = cljs.core.pop.call(null,stack);
var G__33653 = cljs.core.pop.call(null,nbrstack);
var G__33654 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__33649;
start__$1 = G__33650;
nbrs = G__33651;
stack = G__33652;
nbrstack = G__33653;
seen__$1 = G__33654;
continue;
} else {
return null;
}
}
break;
}
});})(map__33644,map__33644__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq33640){
var G__33641 = cljs.core.first.call(null,seq33640);
var seq33640__$1 = cljs.core.next.call(null,seq33640);
var G__33642 = cljs.core.first.call(null,seq33640__$1);
var seq33640__$2 = cljs.core.next.call(null,seq33640__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33641,G__33642,seq33640__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33661 = arguments.length;
var i__4731__auto___33662 = (0);
while(true){
if((i__4731__auto___33662 < len__4730__auto___33661)){
args__4736__auto__.push((arguments[i__4731__auto___33662]));

var G__33663 = (i__4731__auto___33662 + (1));
i__4731__auto___33662 = G__33663;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__33658){
var map__33659 = p__33658;
var map__33659__$1 = (((((!((map__33659 == null))))?(((((map__33659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33659):map__33659);
var seen = cljs.core.get.call(null,map__33659__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__33659__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__33664 = seen__$2;
var G__33665 = cljs.core.assoc.call(null,preds,u,v);
var G__33666 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__33664;
preds = G__33665;
stack = G__33666;
continue;
} else {
var G__33667 = seen__$2;
var G__33668 = preds;
var G__33669 = cljs.core.pop.call(null,stack);
seen__$1 = G__33667;
preds = G__33668;
stack = G__33669;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq33655){
var G__33656 = cljs.core.first.call(null,seq33655);
var seq33655__$1 = cljs.core.next.call(null,seq33655);
var G__33657 = cljs.core.first.call(null,seq33655__$1);
var seq33655__$2 = cljs.core.next.call(null,seq33655__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33656,G__33657,seq33655__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33676 = arguments.length;
var i__4731__auto___33677 = (0);
while(true){
if((i__4731__auto___33677 < len__4730__auto___33676)){
args__4736__auto__.push((arguments[i__4731__auto___33677]));

var G__33678 = (i__4731__auto___33677 + (1));
i__4731__auto___33677 = G__33678;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__33673){
var map__33674 = p__33673;
var map__33674__$1 = (((((!((map__33674 == null))))?(((((map__33674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33674):map__33674);
var seen = cljs.core.get.call(null,map__33674__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__33674__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__33679 = seen__$2;
var G__33680 = cljs.core.conj.call(null,result,v);
var G__33681 = cljs.core.pop.call(null,stack);
seen__$1 = G__33679;
result = G__33680;
stack = G__33681;
continue;
} else {
var G__33682 = seen__$2;
var G__33683 = result;
var G__33684 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__33682;
result = G__33683;
stack = G__33684;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq33670){
var G__33671 = cljs.core.first.call(null,seq33670);
var seq33670__$1 = cljs.core.next.call(null,seq33670);
var G__33672 = cljs.core.first.call(null,seq33670__$1);
var seq33670__$2 = cljs.core.next.call(null,seq33670__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33671,G__33672,seq33670__$2);
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
var len__4730__auto___33691 = arguments.length;
var i__4731__auto___33692 = (0);
while(true){
if((i__4731__auto___33692 < len__4730__auto___33691)){
args__4736__auto__.push((arguments[i__4731__auto___33692]));

var G__33693 = (i__4731__auto___33692 + (1));
i__4731__auto___33692 = G__33693;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__33688){
var map__33689 = p__33688;
var map__33689__$1 = (((((!((map__33689 == null))))?(((((map__33689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33689):map__33689);
var seen = cljs.core.get.call(null,map__33689__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__33689__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__33694 = start__$1;
var G__33695 = cljs.core.next.call(null,nbrs);
var G__33696 = stack;
var G__33697 = nbrstack;
var G__33698 = seen__$2;
var G__33699 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__33694;
nbrs = G__33695;
stack = G__33696;
nbrstack = G__33697;
seen__$1 = G__33698;
edges = G__33699;
continue;
} else {
var G__33700 = nbr;
var G__33701 = successors.call(null,nbr);
var G__33702 = cljs.core.conj.call(null,stack,start__$1);
var G__33703 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__33704 = seen__$2;
var G__33705 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__33700;
nbrs = G__33701;
stack = G__33702;
nbrstack = G__33703;
seen__$1 = G__33704;
edges = G__33705;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__33706 = parent;
var G__33707 = cljs.core.peek.call(null,nbrstack);
var G__33708 = cljs.core.pop.call(null,stack);
var G__33709 = cljs.core.pop.call(null,nbrstack);
var G__33710 = seen__$2;
var G__33711 = edges;
start__$1 = G__33706;
nbrs = G__33707;
stack = G__33708;
nbrstack = G__33709;
seen__$1 = G__33710;
edges = G__33711;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq33685){
var G__33686 = cljs.core.first.call(null,seq33685);
var seq33685__$1 = cljs.core.next.call(null,seq33685);
var G__33687 = cljs.core.first.call(null,seq33685__$1);
var seq33685__$2 = cljs.core.next.call(null,seq33685__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33686,G__33687,seq33685__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__33713 = arguments.length;
switch (G__33713) {
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
var G__33715 = seen__$2;
var G__33716 = explored__$1;
var G__33717 = result;
var G__33718 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__33715;
explored__$1 = G__33716;
result = G__33717;
stack = G__33718;
continue;
}
} else {
var G__33719 = seen__$2;
var G__33720 = cljs.core.conj.call(null,explored__$1,v);
var G__33721 = cljs.core.conj.call(null,result,v);
var G__33722 = cljs.core.pop.call(null,stack);
seen__$1 = G__33719;
explored__$1 = G__33720;
result = G__33721;
stack = G__33722;
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
var len__4730__auto___33751 = arguments.length;
var i__4731__auto___33752 = (0);
while(true){
if((i__4731__auto___33752 < len__4730__auto___33751)){
args__4736__auto__.push((arguments[i__4731__auto___33752]));

var G__33753 = (i__4731__auto___33752 + (1));
i__4731__auto___33752 = G__33753;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__33730){
var map__33731 = p__33730;
var map__33731__$1 = (((((!((map__33731 == null))))?(((((map__33731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33731):map__33731);
var f = cljs.core.get.call(null,map__33731__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__33731__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__33731__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__33731,map__33731__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__33731,map__33731__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__33740 = temp__5720__auto__;
var node = cljs.core.nth.call(null,vec__33740,(0),null);
var depth = cljs.core.nth.call(null,vec__33740,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__33740,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__33740,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen){
return (function (p1__33724_SHARP_){
return nbr_pred.call(null,p1__33724_SHARP_,node,(depth + (1)));
});})(vec__33740,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__33740,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen){
return (function (p1__33723_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__33723_SHARP_);
});})(vec__33740,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__33740,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__33743(s__33744){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__33740,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen){
return (function (){
var s__33744__$1 = s__33744;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__33744__$1);
if(temp__5720__auto____$1){
var s__33744__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33744__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__33744__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__33746 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__33745 = (0);
while(true){
if((i__33745 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__33745);
cljs.core.chunk_append.call(null,b__33746,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__33754 = (i__33745 + (1));
i__33745 = G__33754;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33746),loom$alg_generic$step_$_iter__33743.call(null,cljs.core.chunk_rest.call(null,s__33744__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33746),null);
}
} else {
var nbr = cljs.core.first.call(null,s__33744__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__33743.call(null,cljs.core.rest.call(null,s__33744__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__33740,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen))
,null,null));
});})(nbrs,vec__33740,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen))
;
return iter__4523__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__33740,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen){
return (function (p1__33725_SHARP_,p2__33726_SHARP_){
return cljs.core.assoc.call(null,p1__33725_SHARP_,p2__33726_SHARP_,node);
});})(nbrs,vec__33740,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen))
,preds,nbrs));
});})(vec__33740,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen){
return (function loom$alg_generic$iter__33747(s__33748){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen){
return (function (){
var s__33748__$1 = s__33748;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__33748__$1);
if(temp__5720__auto__){
var s__33748__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33748__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__33748__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__33750 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__33749 = (0);
while(true){
if((i__33749 < size__4522__auto__)){
var s = cljs.core._nth.call(null,c__4521__auto__,i__33749);
cljs.core.chunk_append.call(null,b__33750,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__33755 = (i__33749 + (1));
i__33749 = G__33755;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33750),loom$alg_generic$iter__33747.call(null,cljs.core.chunk_rest.call(null,s__33748__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33750),null);
}
} else {
var s = cljs.core.first.call(null,s__33748__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__33747.call(null,cljs.core.rest.call(null,s__33748__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__33731,map__33731__$1,f,when,seen))
;
return iter__4523__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq33727){
var G__33728 = cljs.core.first.call(null,seq33727);
var seq33727__$1 = cljs.core.next.call(null,seq33727);
var G__33729 = cljs.core.first.call(null,seq33727__$1);
var seq33727__$2 = cljs.core.next.call(null,seq33727__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33728,G__33729,seq33727__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33762 = arguments.length;
var i__4731__auto___33763 = (0);
while(true){
if((i__4731__auto___33763 < len__4730__auto___33762)){
args__4736__auto__.push((arguments[i__4731__auto___33763]));

var G__33764 = (i__4731__auto___33763 + (1));
i__4731__auto___33763 = G__33764;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__33759){
var map__33760 = p__33759;
var map__33760__$1 = (((((!((map__33760 == null))))?(((((map__33760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33760):map__33760);
var seen = cljs.core.get.call(null,map__33760__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__33760,map__33760__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__33760,map__33760__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq33756){
var G__33757 = cljs.core.first.call(null,seq33756);
var seq33756__$1 = cljs.core.next.call(null,seq33756);
var G__33758 = cljs.core.first.call(null,seq33756__$1);
var seq33756__$2 = cljs.core.next.call(null,seq33756__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33757,G__33758,seq33756__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33776 = arguments.length;
var i__4731__auto___33777 = (0);
while(true){
if((i__4731__auto___33777 < len__4730__auto___33776)){
args__4736__auto__.push((arguments[i__4731__auto___33777]));

var G__33778 = (i__4731__auto___33777 + (1));
i__4731__auto___33777 = G__33778;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__33769){
var map__33770 = p__33769;
var map__33770__$1 = (((((!((map__33770 == null))))?(((((map__33770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33770):map__33770);
var opts = map__33770__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__5720__auto__ = cljs.core.some.call(null,((function (opts__$1,map__33770,map__33770__$1,opts){
return (function (p__33772){
var vec__33773 = p__33772;
var _ = cljs.core.nth.call(null,vec__33773,(0),null);
var pm = cljs.core.nth.call(null,vec__33773,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__33773,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__33770,map__33770__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq33765){
var G__33766 = cljs.core.first.call(null,seq33765);
var seq33765__$1 = cljs.core.next.call(null,seq33765);
var G__33767 = cljs.core.first.call(null,seq33765__$1);
var seq33765__$2 = cljs.core.next.call(null,seq33765__$1);
var G__33768 = cljs.core.first.call(null,seq33765__$2);
var seq33765__$3 = cljs.core.next.call(null,seq33765__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33766,G__33767,G__33768,seq33765__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__33779 = m2;
var G__33780 = m1;
m1 = G__33779;
m2 = G__33780;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__33782(s__33783){
return (new cljs.core.LazySeq(null,(function (){
var s__33783__$1 = s__33783;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__33783__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__33783__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__33782_$_iter__33784(s__33785){
return (new cljs.core.LazySeq(null,((function (s__33783__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__33785__$1 = s__33785;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__33785__$1);
if(temp__5720__auto____$1){
var s__33785__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33785__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__33785__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__33787 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__33786 = (0);
while(true){
if((i__33786 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__33786);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
cljs.core.chunk_append.call(null,b__33787,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__33788 = (i__33786 + (1));
i__33786 = G__33788;
continue;
} else {
var G__33789 = (i__33786 + (1));
i__33786 = G__33789;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33787),loom$alg_generic$reverse_edges_$_iter__33782_$_iter__33784.call(null,cljs.core.chunk_rest.call(null,s__33785__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33787),null);
}
} else {
var nbr = cljs.core.first.call(null,s__33785__$2);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__33782_$_iter__33784.call(null,cljs.core.rest.call(null,s__33785__$2)));
} else {
var G__33790 = cljs.core.rest.call(null,s__33785__$2);
s__33785__$1 = G__33790;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__33783__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__33783__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,successor_fn.call(null,node)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__33782.call(null,cljs.core.rest.call(null,s__33783__$1)));
} else {
var G__33791 = cljs.core.rest.call(null,s__33783__$1);
s__33783__$1 = G__33791;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__33792(s__33793){
return (new cljs.core.LazySeq(null,(function (){
var s__33793__$1 = s__33793;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__33793__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__33793__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__33792_$_iter__33794(s__33795){
return (new cljs.core.LazySeq(null,((function (s__33793__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__33795__$1 = s__33795;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__33795__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__33795__$1,s__33793__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__33792_$_iter__33794_$_iter__33796(s__33797){
return (new cljs.core.LazySeq(null,((function (s__33795__$1,s__33793__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__33797__$1 = s__33797;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__33797__$1);
if(temp__5720__auto____$2){
var s__33797__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33797__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__33797__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__33799 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__33798 = (0);
while(true){
if((i__33798 < size__4522__auto__)){
var to = cljs.core._nth.call(null,c__4521__auto__,i__33798);
cljs.core.chunk_append.call(null,b__33799,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__33800 = (i__33798 + (1));
i__33798 = G__33800;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33799),loom$alg_generic$conj_paths_$_iter__33792_$_iter__33794_$_iter__33796.call(null,cljs.core.chunk_rest.call(null,s__33797__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33799),null);
}
} else {
var to = cljs.core.first.call(null,s__33797__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__33792_$_iter__33794_$_iter__33796.call(null,cljs.core.rest.call(null,s__33797__$2)));
}
} else {
return null;
}
break;
}
});})(s__33795__$1,s__33793__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__33795__$1,s__33793__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__33792_$_iter__33794.call(null,cljs.core.rest.call(null,s__33795__$1)));
} else {
var G__33801 = cljs.core.rest.call(null,s__33795__$1);
s__33795__$1 = G__33801;
continue;
}
} else {
return null;
}
break;
}
});})(s__33793__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__33793__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__33792.call(null,cljs.core.rest.call(null,s__33793__$1)));
} else {
var G__33802 = cljs.core.rest.call(null,s__33793__$1);
s__33793__$1 = G__33802;
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
return (function (p1__33803_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__33803_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__33804){
var vec__33805 = p__33804;
var key = cljs.core.nth.call(null,vec__33805,(0),null);
var val = cljs.core.nth.call(null,vec__33805,(1),null);
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
var G__33808 = outgoing__$1;
var G__33809 = incoming;
var G__33810 = q1__$1;
var G__33811 = q2;
outgoing = G__33808;
incoming = G__33809;
q1 = G__33810;
q2 = G__33811;
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
var G__33812 = outgoing;
var G__33813 = incoming__$1;
var G__33814 = q1;
var G__33815 = q2__$1;
outgoing = G__33812;
incoming = G__33813;
q1 = G__33814;
q2 = G__33815;
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
var G__33819 = arguments.length;
switch (G__33819) {
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
var step = (function loom$alg_generic$step(p__33831){
var vec__33832 = p__33831;
var state = cljs.core.nth.call(null,vec__33832,(0),null);
var pq = cljs.core.nth.call(null,vec__33832,(1),null);
var temp__5720__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__33835 = temp__5720__auto__;
var dist_su = cljs.core.nth.call(null,vec__33835,(0),null);
var _ = cljs.core.nth.call(null,vec__33835,(1),null);
var u = cljs.core.nth.call(null,vec__33835,(2),null);
var fpq = vec__33835;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__33835,dist_su,_,u,fpq,temp__5720__auto__,vec__33832,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__33835,dist_su,_,u,fpq,temp__5720__auto__,vec__33832,state,pq){
return (function (p__33838,v){
var vec__33839 = p__33838;
var state__$1 = cljs.core.nth.call(null,vec__33839,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__33839,(1),null);
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
});})(vec__33835,dist_su,_,u,fpq,temp__5720__auto__,vec__33832,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__33835,dist_su,_,u,fpq,temp__5720__auto__,vec__33832,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__33843){
var vec__33844 = p__33843;
var n = cljs.core.nth.call(null,vec__33844,(0),null);
var vec__33847 = cljs.core.nth.call(null,vec__33844,(1),null);
var d = cljs.core.nth.call(null,vec__33847,(0),null);
var p = cljs.core.nth.call(null,vec__33847,(1),null);
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
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__33850){
var vec__33851 = p__33850;
var node = cljs.core.nth.call(null,vec__33851,(0),null);
var _ = cljs.core.nth.call(null,vec__33851,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__33854 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__33854,(0),null);
var end_state = cljs.core.nth.call(null,vec__33854,(1),null);
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
var len__4730__auto___33925 = arguments.length;
var i__4731__auto___33926 = (0);
while(true){
if((i__4731__auto___33926 < len__4730__auto___33925)){
args__4736__auto__.push((arguments[i__4731__auto___33926]));

var G__33927 = (i__4731__auto___33926 + (1));
i__4731__auto___33926 = G__33927;
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
var seq__33861_33928 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__33868_33929 = null;
var count__33869_33930 = (0);
var i__33870_33931 = (0);
while(true){
if((i__33870_33931 < count__33869_33930)){
var bitmap_33932 = cljs.core._nth.call(null,chunk__33868_33929,i__33870_33931);
var seq__33871_33933 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_33932));
var chunk__33873_33934 = null;
var count__33874_33935 = (0);
var i__33875_33936 = (0);
while(true){
if((i__33875_33936 < count__33874_33935)){
var vec__33907_33937 = cljs.core._nth.call(null,chunk__33873_33934,i__33875_33936);
var idx_33938 = cljs.core.nth.call(null,vec__33907_33937,(0),null);
var value_33939 = cljs.core.nth.call(null,vec__33907_33937,(1),null);
var masked_value_33940 = (value_33939 | (new_bitmap[idx_33938]));
(new_bitmap[idx_33938] = masked_value_33940);


var G__33941 = seq__33871_33933;
var G__33942 = chunk__33873_33934;
var G__33943 = count__33874_33935;
var G__33944 = (i__33875_33936 + (1));
seq__33871_33933 = G__33941;
chunk__33873_33934 = G__33942;
count__33874_33935 = G__33943;
i__33875_33936 = G__33944;
continue;
} else {
var temp__5720__auto___33945 = cljs.core.seq.call(null,seq__33871_33933);
if(temp__5720__auto___33945){
var seq__33871_33946__$1 = temp__5720__auto___33945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33871_33946__$1)){
var c__4550__auto___33947 = cljs.core.chunk_first.call(null,seq__33871_33946__$1);
var G__33948 = cljs.core.chunk_rest.call(null,seq__33871_33946__$1);
var G__33949 = c__4550__auto___33947;
var G__33950 = cljs.core.count.call(null,c__4550__auto___33947);
var G__33951 = (0);
seq__33871_33933 = G__33948;
chunk__33873_33934 = G__33949;
count__33874_33935 = G__33950;
i__33875_33936 = G__33951;
continue;
} else {
var vec__33910_33952 = cljs.core.first.call(null,seq__33871_33946__$1);
var idx_33953 = cljs.core.nth.call(null,vec__33910_33952,(0),null);
var value_33954 = cljs.core.nth.call(null,vec__33910_33952,(1),null);
var masked_value_33955 = (value_33954 | (new_bitmap[idx_33953]));
(new_bitmap[idx_33953] = masked_value_33955);


var G__33956 = cljs.core.next.call(null,seq__33871_33946__$1);
var G__33957 = null;
var G__33958 = (0);
var G__33959 = (0);
seq__33871_33933 = G__33956;
chunk__33873_33934 = G__33957;
count__33874_33935 = G__33958;
i__33875_33936 = G__33959;
continue;
}
} else {
}
}
break;
}

var G__33960 = seq__33861_33928;
var G__33961 = chunk__33868_33929;
var G__33962 = count__33869_33930;
var G__33963 = (i__33870_33931 + (1));
seq__33861_33928 = G__33960;
chunk__33868_33929 = G__33961;
count__33869_33930 = G__33962;
i__33870_33931 = G__33963;
continue;
} else {
var temp__5720__auto___33964 = cljs.core.seq.call(null,seq__33861_33928);
if(temp__5720__auto___33964){
var seq__33861_33965__$1 = temp__5720__auto___33964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33861_33965__$1)){
var c__4550__auto___33966 = cljs.core.chunk_first.call(null,seq__33861_33965__$1);
var G__33967 = cljs.core.chunk_rest.call(null,seq__33861_33965__$1);
var G__33968 = c__4550__auto___33966;
var G__33969 = cljs.core.count.call(null,c__4550__auto___33966);
var G__33970 = (0);
seq__33861_33928 = G__33967;
chunk__33868_33929 = G__33968;
count__33869_33930 = G__33969;
i__33870_33931 = G__33970;
continue;
} else {
var bitmap_33971 = cljs.core.first.call(null,seq__33861_33965__$1);
var seq__33862_33972 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_33971));
var chunk__33864_33973 = null;
var count__33865_33974 = (0);
var i__33866_33975 = (0);
while(true){
if((i__33866_33975 < count__33865_33974)){
var vec__33919_33976 = cljs.core._nth.call(null,chunk__33864_33973,i__33866_33975);
var idx_33977 = cljs.core.nth.call(null,vec__33919_33976,(0),null);
var value_33978 = cljs.core.nth.call(null,vec__33919_33976,(1),null);
var masked_value_33979 = (value_33978 | (new_bitmap[idx_33977]));
(new_bitmap[idx_33977] = masked_value_33979);


var G__33980 = seq__33862_33972;
var G__33981 = chunk__33864_33973;
var G__33982 = count__33865_33974;
var G__33983 = (i__33866_33975 + (1));
seq__33862_33972 = G__33980;
chunk__33864_33973 = G__33981;
count__33865_33974 = G__33982;
i__33866_33975 = G__33983;
continue;
} else {
var temp__5720__auto___33984__$1 = cljs.core.seq.call(null,seq__33862_33972);
if(temp__5720__auto___33984__$1){
var seq__33862_33985__$1 = temp__5720__auto___33984__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33862_33985__$1)){
var c__4550__auto___33986 = cljs.core.chunk_first.call(null,seq__33862_33985__$1);
var G__33987 = cljs.core.chunk_rest.call(null,seq__33862_33985__$1);
var G__33988 = c__4550__auto___33986;
var G__33989 = cljs.core.count.call(null,c__4550__auto___33986);
var G__33990 = (0);
seq__33862_33972 = G__33987;
chunk__33864_33973 = G__33988;
count__33865_33974 = G__33989;
i__33866_33975 = G__33990;
continue;
} else {
var vec__33922_33991 = cljs.core.first.call(null,seq__33862_33985__$1);
var idx_33992 = cljs.core.nth.call(null,vec__33922_33991,(0),null);
var value_33993 = cljs.core.nth.call(null,vec__33922_33991,(1),null);
var masked_value_33994 = (value_33993 | (new_bitmap[idx_33992]));
(new_bitmap[idx_33992] = masked_value_33994);


var G__33995 = cljs.core.next.call(null,seq__33862_33985__$1);
var G__33996 = null;
var G__33997 = (0);
var G__33998 = (0);
seq__33862_33972 = G__33995;
chunk__33864_33973 = G__33996;
count__33865_33974 = G__33997;
i__33866_33975 = G__33998;
continue;
}
} else {
}
}
break;
}

var G__33999 = cljs.core.next.call(null,seq__33861_33965__$1);
var G__34000 = null;
var G__34001 = (0);
var G__34002 = (0);
seq__33861_33928 = G__33999;
chunk__33868_33929 = G__34000;
count__33869_33930 = G__34001;
i__33870_33931 = G__34002;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq33860){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33860));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__34003(s__34004){
return (new cljs.core.LazySeq(null,(function (){
var s__34004__$1 = s__34004;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34004__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34004__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__34003_$_iter__34005(s__34006){
return (new cljs.core.LazySeq(null,((function (s__34004__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34006__$1 = s__34006;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__34006__$1);
if(temp__5720__auto____$1){
var s__34006__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34006__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34006__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34008 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34007 = (0);
while(true){
if((i__34007 < size__4522__auto__)){
var offset = cljs.core._nth.call(null,c__4521__auto__,i__34007);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__34008,idx);

var G__34009 = (i__34007 + (1));
i__34007 = G__34009;
continue;
} else {
var G__34010 = (i__34007 + (1));
i__34007 = G__34010;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34008),loom$alg_generic$bm_get_indicies_$_iter__34003_$_iter__34005.call(null,cljs.core.chunk_rest.call(null,s__34006__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34008),null);
}
} else {
var offset = cljs.core.first.call(null,s__34006__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__34003_$_iter__34005.call(null,cljs.core.rest.call(null,s__34006__$2)));
} else {
var G__34011 = cljs.core.rest.call(null,s__34006__$2);
s__34006__$1 = G__34011;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34004__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34004__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__34003.call(null,cljs.core.rest.call(null,s__34004__$1)));
} else {
var G__34012 = cljs.core.rest.call(null,s__34004__$1);
s__34004__$1 = G__34012;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34014,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__34018 = k34014;
var G__34018__$1 = (((G__34018 instanceof cljs.core.Keyword))?G__34018.fqn:null);
switch (G__34018__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k34014,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__34019){
var vec__34020 = p__34019;
var k__4408__auto__ = cljs.core.nth.call(null,vec__34020,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__34020,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34013){
var self__ = this;
var G__34013__$1 = this;
return (new cljs.core.RecordIter((0),G__34013__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34015,other34016){
var self__ = this;
var this34015__$1 = this;
return (((!((other34016 == null)))) && ((this34015__$1.constructor === other34016.constructor)) && (cljs.core._EQ_.call(null,this34015__$1.node__GT_idx,other34016.node__GT_idx)) && (cljs.core._EQ_.call(null,this34015__$1.idx__GT_node,other34016.idx__GT_node)) && (cljs.core._EQ_.call(null,this34015__$1.bitmaps,other34016.bitmaps)) && (cljs.core._EQ_.call(null,this34015__$1.__extmap,other34016.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34013){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__34023 = cljs.core.keyword_identical_QMARK_;
var expr__34024 = k__4393__auto__;
if(cljs.core.truth_(pred__34023.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__34024))){
return (new loom.alg_generic.Ancestry(G__34013,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34023.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__34024))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__34013,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34023.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__34024))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__34013,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__34013),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34013){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__34013,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__34017){
var extmap__4424__auto__ = (function (){var G__34026 = cljs.core.dissoc.call(null,G__34017,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
if(cljs.core.record_QMARK_.call(null,G__34017)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__34026);
} else {
return G__34026;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__34017),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__34017),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__34017),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
var len__4730__auto___34033 = arguments.length;
var i__4731__auto___34034 = (0);
while(true){
if((i__4731__auto___34034 < len__4730__auto___34033)){
args__4736__auto__.push((arguments[i__4731__auto___34034]));

var G__34035 = (i__4731__auto___34034 + (1));
i__4731__auto___34034 = G__34035;
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
var map__34031 = ancestry;
var map__34031__$1 = (((((!((map__34031 == null))))?(((((map__34031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34031):map__34031);
var node__GT_idx = cljs.core.get.call(null,map__34031__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__34031__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__34031__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq34028){
var G__34029 = cljs.core.first.call(null,seq34028);
var seq34028__$1 = cljs.core.next.call(null,seq34028);
var G__34030 = cljs.core.first.call(null,seq34028__$1);
var seq34028__$2 = cljs.core.next.call(null,seq34028__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34029,G__34030,seq34028__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__34036 = ancestry;
var map__34036__$1 = (((((!((map__34036 == null))))?(((((map__34036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34036):map__34036);
var node__GT_idx = cljs.core.get.call(null,map__34036__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__34036__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__34038 = ancestry;
var map__34038__$1 = (((((!((map__34038 == null))))?(((((map__34038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34038):map__34038);
var node__GT_idx = cljs.core.get.call(null,map__34038__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__34038__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__34038__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=alg_generic.js.map?rel=1601267805544
