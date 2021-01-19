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
return (function (p1__11992_SHARP_){
return loom.alg_generic.paths.call(null,preds,cljs.core.conj.call(null,path,p1__11992_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__11991_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__11991_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__11993_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__11993_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__11994){
var vec__11995 = p__11994;
var n = cljs.core.nth.call(null,vec__11995,(0),null);
var p = cljs.core.nth.call(null,vec__11995,(1),null);
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
var len__4730__auto___12004 = arguments.length;
var i__4731__auto___12005 = (0);
while(true){
if((i__4731__auto___12005 < len__4730__auto___12004)){
args__4736__auto__.push((arguments[i__4731__auto___12005]));

var G__12006 = (i__4731__auto___12005 + (1));
i__4731__auto___12005 = G__12006;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__12001){
var map__12002 = p__12001;
var map__12002__$1 = (((((!((map__12002 == null))))?(((((map__12002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12002):map__12002);
var seen = cljs.core.get.call(null,map__12002__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__12002,map__12002__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__12002,map__12002__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__12002,map__12002__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__12002,map__12002__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq11998){
var G__11999 = cljs.core.first.call(null,seq11998);
var seq11998__$1 = cljs.core.next.call(null,seq11998);
var G__12000 = cljs.core.first.call(null,seq11998__$1);
var seq11998__$2 = cljs.core.next.call(null,seq11998__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11999,G__12000,seq11998__$2);
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
var len__4730__auto___12013 = arguments.length;
var i__4731__auto___12014 = (0);
while(true){
if((i__4731__auto___12014 < len__4730__auto___12013)){
args__4736__auto__.push((arguments[i__4731__auto___12014]));

var G__12015 = (i__4731__auto___12014 + (1));
i__4731__auto___12014 = G__12015;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__12010){
var map__12011 = p__12010;
var map__12011__$1 = (((((!((map__12011 == null))))?(((((map__12011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12011):map__12011);
var seen = cljs.core.get.call(null,map__12011__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__12011,map__12011__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__12011,map__12011__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__12011,map__12011__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__12016 = successors__$1;
var G__12017 = parent;
var G__12018 = cljs.core.peek.call(null,nbrstack);
var G__12019 = cljs.core.pop.call(null,stack);
var G__12020 = cljs.core.pop.call(null,nbrstack);
var G__12021 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__12016;
start__$1 = G__12017;
nbrs = G__12018;
stack = G__12019;
nbrstack = G__12020;
seen__$1 = G__12021;
continue;
} else {
return null;
}
}
break;
}
});})(map__12011,map__12011__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq12007){
var G__12008 = cljs.core.first.call(null,seq12007);
var seq12007__$1 = cljs.core.next.call(null,seq12007);
var G__12009 = cljs.core.first.call(null,seq12007__$1);
var seq12007__$2 = cljs.core.next.call(null,seq12007__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12008,G__12009,seq12007__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12028 = arguments.length;
var i__4731__auto___12029 = (0);
while(true){
if((i__4731__auto___12029 < len__4730__auto___12028)){
args__4736__auto__.push((arguments[i__4731__auto___12029]));

var G__12030 = (i__4731__auto___12029 + (1));
i__4731__auto___12029 = G__12030;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__12025){
var map__12026 = p__12025;
var map__12026__$1 = (((((!((map__12026 == null))))?(((((map__12026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12026):map__12026);
var seen = cljs.core.get.call(null,map__12026__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__12026__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__12031 = seen__$2;
var G__12032 = cljs.core.assoc.call(null,preds,u,v);
var G__12033 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__12031;
preds = G__12032;
stack = G__12033;
continue;
} else {
var G__12034 = seen__$2;
var G__12035 = preds;
var G__12036 = cljs.core.pop.call(null,stack);
seen__$1 = G__12034;
preds = G__12035;
stack = G__12036;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq12022){
var G__12023 = cljs.core.first.call(null,seq12022);
var seq12022__$1 = cljs.core.next.call(null,seq12022);
var G__12024 = cljs.core.first.call(null,seq12022__$1);
var seq12022__$2 = cljs.core.next.call(null,seq12022__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12023,G__12024,seq12022__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12043 = arguments.length;
var i__4731__auto___12044 = (0);
while(true){
if((i__4731__auto___12044 < len__4730__auto___12043)){
args__4736__auto__.push((arguments[i__4731__auto___12044]));

var G__12045 = (i__4731__auto___12044 + (1));
i__4731__auto___12044 = G__12045;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__12040){
var map__12041 = p__12040;
var map__12041__$1 = (((((!((map__12041 == null))))?(((((map__12041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12041):map__12041);
var seen = cljs.core.get.call(null,map__12041__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__12041__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__12046 = seen__$2;
var G__12047 = cljs.core.conj.call(null,result,v);
var G__12048 = cljs.core.pop.call(null,stack);
seen__$1 = G__12046;
result = G__12047;
stack = G__12048;
continue;
} else {
var G__12049 = seen__$2;
var G__12050 = result;
var G__12051 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__12049;
result = G__12050;
stack = G__12051;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq12037){
var G__12038 = cljs.core.first.call(null,seq12037);
var seq12037__$1 = cljs.core.next.call(null,seq12037);
var G__12039 = cljs.core.first.call(null,seq12037__$1);
var seq12037__$2 = cljs.core.next.call(null,seq12037__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12038,G__12039,seq12037__$2);
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
var len__4730__auto___12058 = arguments.length;
var i__4731__auto___12059 = (0);
while(true){
if((i__4731__auto___12059 < len__4730__auto___12058)){
args__4736__auto__.push((arguments[i__4731__auto___12059]));

var G__12060 = (i__4731__auto___12059 + (1));
i__4731__auto___12059 = G__12060;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__12055){
var map__12056 = p__12055;
var map__12056__$1 = (((((!((map__12056 == null))))?(((((map__12056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12056):map__12056);
var seen = cljs.core.get.call(null,map__12056__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__12056__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__12061 = start__$1;
var G__12062 = cljs.core.next.call(null,nbrs);
var G__12063 = stack;
var G__12064 = nbrstack;
var G__12065 = seen__$2;
var G__12066 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__12061;
nbrs = G__12062;
stack = G__12063;
nbrstack = G__12064;
seen__$1 = G__12065;
edges = G__12066;
continue;
} else {
var G__12067 = nbr;
var G__12068 = successors.call(null,nbr);
var G__12069 = cljs.core.conj.call(null,stack,start__$1);
var G__12070 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__12071 = seen__$2;
var G__12072 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__12067;
nbrs = G__12068;
stack = G__12069;
nbrstack = G__12070;
seen__$1 = G__12071;
edges = G__12072;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__12073 = parent;
var G__12074 = cljs.core.peek.call(null,nbrstack);
var G__12075 = cljs.core.pop.call(null,stack);
var G__12076 = cljs.core.pop.call(null,nbrstack);
var G__12077 = seen__$2;
var G__12078 = edges;
start__$1 = G__12073;
nbrs = G__12074;
stack = G__12075;
nbrstack = G__12076;
seen__$1 = G__12077;
edges = G__12078;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq12052){
var G__12053 = cljs.core.first.call(null,seq12052);
var seq12052__$1 = cljs.core.next.call(null,seq12052);
var G__12054 = cljs.core.first.call(null,seq12052__$1);
var seq12052__$2 = cljs.core.next.call(null,seq12052__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12053,G__12054,seq12052__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__12080 = arguments.length;
switch (G__12080) {
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
var G__12082 = seen__$2;
var G__12083 = explored__$1;
var G__12084 = result;
var G__12085 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__12082;
explored__$1 = G__12083;
result = G__12084;
stack = G__12085;
continue;
}
} else {
var G__12086 = seen__$2;
var G__12087 = cljs.core.conj.call(null,explored__$1,v);
var G__12088 = cljs.core.conj.call(null,result,v);
var G__12089 = cljs.core.pop.call(null,stack);
seen__$1 = G__12086;
explored__$1 = G__12087;
result = G__12088;
stack = G__12089;
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
var len__4730__auto___12118 = arguments.length;
var i__4731__auto___12119 = (0);
while(true){
if((i__4731__auto___12119 < len__4730__auto___12118)){
args__4736__auto__.push((arguments[i__4731__auto___12119]));

var G__12120 = (i__4731__auto___12119 + (1));
i__4731__auto___12119 = G__12120;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__12097){
var map__12098 = p__12097;
var map__12098__$1 = (((((!((map__12098 == null))))?(((((map__12098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12098):map__12098);
var f = cljs.core.get.call(null,map__12098__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__12098__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__12098__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__12098,map__12098__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__12098,map__12098__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__12107 = temp__5720__auto__;
var node = cljs.core.nth.call(null,vec__12107,(0),null);
var depth = cljs.core.nth.call(null,vec__12107,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__12107,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__12107,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen){
return (function (p1__12091_SHARP_){
return nbr_pred.call(null,p1__12091_SHARP_,node,(depth + (1)));
});})(vec__12107,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__12107,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen){
return (function (p1__12090_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__12090_SHARP_);
});})(vec__12107,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__12107,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__12110(s__12111){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__12107,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen){
return (function (){
var s__12111__$1 = s__12111;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12111__$1);
if(temp__5720__auto____$1){
var s__12111__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12111__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12111__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12113 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12112 = (0);
while(true){
if((i__12112 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__12112);
cljs.core.chunk_append.call(null,b__12113,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__12121 = (i__12112 + (1));
i__12112 = G__12121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12113),loom$alg_generic$step_$_iter__12110.call(null,cljs.core.chunk_rest.call(null,s__12111__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12113),null);
}
} else {
var nbr = cljs.core.first.call(null,s__12111__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__12110.call(null,cljs.core.rest.call(null,s__12111__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__12107,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen))
,null,null));
});})(nbrs,vec__12107,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen))
;
return iter__4523__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__12107,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen){
return (function (p1__12092_SHARP_,p2__12093_SHARP_){
return cljs.core.assoc.call(null,p1__12092_SHARP_,p2__12093_SHARP_,node);
});})(nbrs,vec__12107,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen))
,preds,nbrs));
});})(vec__12107,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen){
return (function loom$alg_generic$iter__12114(s__12115){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen){
return (function (){
var s__12115__$1 = s__12115;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12115__$1);
if(temp__5720__auto__){
var s__12115__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12115__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12115__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12117 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12116 = (0);
while(true){
if((i__12116 < size__4522__auto__)){
var s = cljs.core._nth.call(null,c__4521__auto__,i__12116);
cljs.core.chunk_append.call(null,b__12117,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__12122 = (i__12116 + (1));
i__12116 = G__12122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12117),loom$alg_generic$iter__12114.call(null,cljs.core.chunk_rest.call(null,s__12115__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12117),null);
}
} else {
var s = cljs.core.first.call(null,s__12115__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__12114.call(null,cljs.core.rest.call(null,s__12115__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__12098,map__12098__$1,f,when,seen))
;
return iter__4523__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq12094){
var G__12095 = cljs.core.first.call(null,seq12094);
var seq12094__$1 = cljs.core.next.call(null,seq12094);
var G__12096 = cljs.core.first.call(null,seq12094__$1);
var seq12094__$2 = cljs.core.next.call(null,seq12094__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12095,G__12096,seq12094__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12129 = arguments.length;
var i__4731__auto___12130 = (0);
while(true){
if((i__4731__auto___12130 < len__4730__auto___12129)){
args__4736__auto__.push((arguments[i__4731__auto___12130]));

var G__12131 = (i__4731__auto___12130 + (1));
i__4731__auto___12130 = G__12131;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__12126){
var map__12127 = p__12126;
var map__12127__$1 = (((((!((map__12127 == null))))?(((((map__12127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12127):map__12127);
var seen = cljs.core.get.call(null,map__12127__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__12127,map__12127__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__12127,map__12127__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq12123){
var G__12124 = cljs.core.first.call(null,seq12123);
var seq12123__$1 = cljs.core.next.call(null,seq12123);
var G__12125 = cljs.core.first.call(null,seq12123__$1);
var seq12123__$2 = cljs.core.next.call(null,seq12123__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12124,G__12125,seq12123__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12143 = arguments.length;
var i__4731__auto___12144 = (0);
while(true){
if((i__4731__auto___12144 < len__4730__auto___12143)){
args__4736__auto__.push((arguments[i__4731__auto___12144]));

var G__12145 = (i__4731__auto___12144 + (1));
i__4731__auto___12144 = G__12145;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__12136){
var map__12137 = p__12136;
var map__12137__$1 = (((((!((map__12137 == null))))?(((((map__12137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12137):map__12137);
var opts = map__12137__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__5720__auto__ = cljs.core.some.call(null,((function (opts__$1,map__12137,map__12137__$1,opts){
return (function (p__12139){
var vec__12140 = p__12139;
var _ = cljs.core.nth.call(null,vec__12140,(0),null);
var pm = cljs.core.nth.call(null,vec__12140,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__12140,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__12137,map__12137__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq12132){
var G__12133 = cljs.core.first.call(null,seq12132);
var seq12132__$1 = cljs.core.next.call(null,seq12132);
var G__12134 = cljs.core.first.call(null,seq12132__$1);
var seq12132__$2 = cljs.core.next.call(null,seq12132__$1);
var G__12135 = cljs.core.first.call(null,seq12132__$2);
var seq12132__$3 = cljs.core.next.call(null,seq12132__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12133,G__12134,G__12135,seq12132__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__12146 = m2;
var G__12147 = m1;
m1 = G__12146;
m2 = G__12147;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__12149(s__12150){
return (new cljs.core.LazySeq(null,(function (){
var s__12150__$1 = s__12150;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12150__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__12150__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__12149_$_iter__12151(s__12152){
return (new cljs.core.LazySeq(null,((function (s__12150__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__12152__$1 = s__12152;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12152__$1);
if(temp__5720__auto____$1){
var s__12152__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12152__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12152__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12154 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12153 = (0);
while(true){
if((i__12153 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__12153);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
cljs.core.chunk_append.call(null,b__12154,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__12155 = (i__12153 + (1));
i__12153 = G__12155;
continue;
} else {
var G__12156 = (i__12153 + (1));
i__12153 = G__12156;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12154),loom$alg_generic$reverse_edges_$_iter__12149_$_iter__12151.call(null,cljs.core.chunk_rest.call(null,s__12152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12154),null);
}
} else {
var nbr = cljs.core.first.call(null,s__12152__$2);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__12149_$_iter__12151.call(null,cljs.core.rest.call(null,s__12152__$2)));
} else {
var G__12157 = cljs.core.rest.call(null,s__12152__$2);
s__12152__$1 = G__12157;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__12150__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__12150__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,successor_fn.call(null,node)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__12149.call(null,cljs.core.rest.call(null,s__12150__$1)));
} else {
var G__12158 = cljs.core.rest.call(null,s__12150__$1);
s__12150__$1 = G__12158;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__12159(s__12160){
return (new cljs.core.LazySeq(null,(function (){
var s__12160__$1 = s__12160;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12160__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__12160__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__12159_$_iter__12161(s__12162){
return (new cljs.core.LazySeq(null,((function (s__12160__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__12162__$1 = s__12162;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12162__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__12162__$1,s__12160__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__12159_$_iter__12161_$_iter__12163(s__12164){
return (new cljs.core.LazySeq(null,((function (s__12162__$1,s__12160__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__12164__$1 = s__12164;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__12164__$1);
if(temp__5720__auto____$2){
var s__12164__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12164__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12164__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12166 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12165 = (0);
while(true){
if((i__12165 < size__4522__auto__)){
var to = cljs.core._nth.call(null,c__4521__auto__,i__12165);
cljs.core.chunk_append.call(null,b__12166,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__12167 = (i__12165 + (1));
i__12165 = G__12167;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12166),loom$alg_generic$conj_paths_$_iter__12159_$_iter__12161_$_iter__12163.call(null,cljs.core.chunk_rest.call(null,s__12164__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12166),null);
}
} else {
var to = cljs.core.first.call(null,s__12164__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__12159_$_iter__12161_$_iter__12163.call(null,cljs.core.rest.call(null,s__12164__$2)));
}
} else {
return null;
}
break;
}
});})(s__12162__$1,s__12160__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__12162__$1,s__12160__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__12159_$_iter__12161.call(null,cljs.core.rest.call(null,s__12162__$1)));
} else {
var G__12168 = cljs.core.rest.call(null,s__12162__$1);
s__12162__$1 = G__12168;
continue;
}
} else {
return null;
}
break;
}
});})(s__12160__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__12160__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__12159.call(null,cljs.core.rest.call(null,s__12160__$1)));
} else {
var G__12169 = cljs.core.rest.call(null,s__12160__$1);
s__12160__$1 = G__12169;
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
return (function (p1__12170_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__12170_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__12171){
var vec__12172 = p__12171;
var key = cljs.core.nth.call(null,vec__12172,(0),null);
var val = cljs.core.nth.call(null,vec__12172,(1),null);
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
var G__12175 = outgoing__$1;
var G__12176 = incoming;
var G__12177 = q1__$1;
var G__12178 = q2;
outgoing = G__12175;
incoming = G__12176;
q1 = G__12177;
q2 = G__12178;
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
var G__12179 = outgoing;
var G__12180 = incoming__$1;
var G__12181 = q1;
var G__12182 = q2__$1;
outgoing = G__12179;
incoming = G__12180;
q1 = G__12181;
q2 = G__12182;
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
var G__12186 = arguments.length;
switch (G__12186) {
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
var step = (function loom$alg_generic$step(p__12198){
var vec__12199 = p__12198;
var state = cljs.core.nth.call(null,vec__12199,(0),null);
var pq = cljs.core.nth.call(null,vec__12199,(1),null);
var temp__5720__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__12202 = temp__5720__auto__;
var dist_su = cljs.core.nth.call(null,vec__12202,(0),null);
var _ = cljs.core.nth.call(null,vec__12202,(1),null);
var u = cljs.core.nth.call(null,vec__12202,(2),null);
var fpq = vec__12202;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__12202,dist_su,_,u,fpq,temp__5720__auto__,vec__12199,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__12202,dist_su,_,u,fpq,temp__5720__auto__,vec__12199,state,pq){
return (function (p__12205,v){
var vec__12206 = p__12205;
var state__$1 = cljs.core.nth.call(null,vec__12206,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__12206,(1),null);
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
});})(vec__12202,dist_su,_,u,fpq,temp__5720__auto__,vec__12199,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__12202,dist_su,_,u,fpq,temp__5720__auto__,vec__12199,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__12210){
var vec__12211 = p__12210;
var n = cljs.core.nth.call(null,vec__12211,(0),null);
var vec__12214 = cljs.core.nth.call(null,vec__12211,(1),null);
var d = cljs.core.nth.call(null,vec__12214,(0),null);
var p = cljs.core.nth.call(null,vec__12214,(1),null);
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
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__12217){
var vec__12218 = p__12217;
var node = cljs.core.nth.call(null,vec__12218,(0),null);
var _ = cljs.core.nth.call(null,vec__12218,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__12221 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__12221,(0),null);
var end_state = cljs.core.nth.call(null,vec__12221,(1),null);
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
var len__4730__auto___12292 = arguments.length;
var i__4731__auto___12293 = (0);
while(true){
if((i__4731__auto___12293 < len__4730__auto___12292)){
args__4736__auto__.push((arguments[i__4731__auto___12293]));

var G__12294 = (i__4731__auto___12293 + (1));
i__4731__auto___12293 = G__12294;
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
var seq__12228_12295 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__12235_12296 = null;
var count__12236_12297 = (0);
var i__12237_12298 = (0);
while(true){
if((i__12237_12298 < count__12236_12297)){
var bitmap_12299 = cljs.core._nth.call(null,chunk__12235_12296,i__12237_12298);
var seq__12238_12300 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_12299));
var chunk__12240_12301 = null;
var count__12241_12302 = (0);
var i__12242_12303 = (0);
while(true){
if((i__12242_12303 < count__12241_12302)){
var vec__12274_12304 = cljs.core._nth.call(null,chunk__12240_12301,i__12242_12303);
var idx_12305 = cljs.core.nth.call(null,vec__12274_12304,(0),null);
var value_12306 = cljs.core.nth.call(null,vec__12274_12304,(1),null);
var masked_value_12307 = (value_12306 | (new_bitmap[idx_12305]));
(new_bitmap[idx_12305] = masked_value_12307);


var G__12308 = seq__12238_12300;
var G__12309 = chunk__12240_12301;
var G__12310 = count__12241_12302;
var G__12311 = (i__12242_12303 + (1));
seq__12238_12300 = G__12308;
chunk__12240_12301 = G__12309;
count__12241_12302 = G__12310;
i__12242_12303 = G__12311;
continue;
} else {
var temp__5720__auto___12312 = cljs.core.seq.call(null,seq__12238_12300);
if(temp__5720__auto___12312){
var seq__12238_12313__$1 = temp__5720__auto___12312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12238_12313__$1)){
var c__4550__auto___12314 = cljs.core.chunk_first.call(null,seq__12238_12313__$1);
var G__12315 = cljs.core.chunk_rest.call(null,seq__12238_12313__$1);
var G__12316 = c__4550__auto___12314;
var G__12317 = cljs.core.count.call(null,c__4550__auto___12314);
var G__12318 = (0);
seq__12238_12300 = G__12315;
chunk__12240_12301 = G__12316;
count__12241_12302 = G__12317;
i__12242_12303 = G__12318;
continue;
} else {
var vec__12277_12319 = cljs.core.first.call(null,seq__12238_12313__$1);
var idx_12320 = cljs.core.nth.call(null,vec__12277_12319,(0),null);
var value_12321 = cljs.core.nth.call(null,vec__12277_12319,(1),null);
var masked_value_12322 = (value_12321 | (new_bitmap[idx_12320]));
(new_bitmap[idx_12320] = masked_value_12322);


var G__12323 = cljs.core.next.call(null,seq__12238_12313__$1);
var G__12324 = null;
var G__12325 = (0);
var G__12326 = (0);
seq__12238_12300 = G__12323;
chunk__12240_12301 = G__12324;
count__12241_12302 = G__12325;
i__12242_12303 = G__12326;
continue;
}
} else {
}
}
break;
}

var G__12327 = seq__12228_12295;
var G__12328 = chunk__12235_12296;
var G__12329 = count__12236_12297;
var G__12330 = (i__12237_12298 + (1));
seq__12228_12295 = G__12327;
chunk__12235_12296 = G__12328;
count__12236_12297 = G__12329;
i__12237_12298 = G__12330;
continue;
} else {
var temp__5720__auto___12331 = cljs.core.seq.call(null,seq__12228_12295);
if(temp__5720__auto___12331){
var seq__12228_12332__$1 = temp__5720__auto___12331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12228_12332__$1)){
var c__4550__auto___12333 = cljs.core.chunk_first.call(null,seq__12228_12332__$1);
var G__12334 = cljs.core.chunk_rest.call(null,seq__12228_12332__$1);
var G__12335 = c__4550__auto___12333;
var G__12336 = cljs.core.count.call(null,c__4550__auto___12333);
var G__12337 = (0);
seq__12228_12295 = G__12334;
chunk__12235_12296 = G__12335;
count__12236_12297 = G__12336;
i__12237_12298 = G__12337;
continue;
} else {
var bitmap_12338 = cljs.core.first.call(null,seq__12228_12332__$1);
var seq__12229_12339 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_12338));
var chunk__12231_12340 = null;
var count__12232_12341 = (0);
var i__12233_12342 = (0);
while(true){
if((i__12233_12342 < count__12232_12341)){
var vec__12286_12343 = cljs.core._nth.call(null,chunk__12231_12340,i__12233_12342);
var idx_12344 = cljs.core.nth.call(null,vec__12286_12343,(0),null);
var value_12345 = cljs.core.nth.call(null,vec__12286_12343,(1),null);
var masked_value_12346 = (value_12345 | (new_bitmap[idx_12344]));
(new_bitmap[idx_12344] = masked_value_12346);


var G__12347 = seq__12229_12339;
var G__12348 = chunk__12231_12340;
var G__12349 = count__12232_12341;
var G__12350 = (i__12233_12342 + (1));
seq__12229_12339 = G__12347;
chunk__12231_12340 = G__12348;
count__12232_12341 = G__12349;
i__12233_12342 = G__12350;
continue;
} else {
var temp__5720__auto___12351__$1 = cljs.core.seq.call(null,seq__12229_12339);
if(temp__5720__auto___12351__$1){
var seq__12229_12352__$1 = temp__5720__auto___12351__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12229_12352__$1)){
var c__4550__auto___12353 = cljs.core.chunk_first.call(null,seq__12229_12352__$1);
var G__12354 = cljs.core.chunk_rest.call(null,seq__12229_12352__$1);
var G__12355 = c__4550__auto___12353;
var G__12356 = cljs.core.count.call(null,c__4550__auto___12353);
var G__12357 = (0);
seq__12229_12339 = G__12354;
chunk__12231_12340 = G__12355;
count__12232_12341 = G__12356;
i__12233_12342 = G__12357;
continue;
} else {
var vec__12289_12358 = cljs.core.first.call(null,seq__12229_12352__$1);
var idx_12359 = cljs.core.nth.call(null,vec__12289_12358,(0),null);
var value_12360 = cljs.core.nth.call(null,vec__12289_12358,(1),null);
var masked_value_12361 = (value_12360 | (new_bitmap[idx_12359]));
(new_bitmap[idx_12359] = masked_value_12361);


var G__12362 = cljs.core.next.call(null,seq__12229_12352__$1);
var G__12363 = null;
var G__12364 = (0);
var G__12365 = (0);
seq__12229_12339 = G__12362;
chunk__12231_12340 = G__12363;
count__12232_12341 = G__12364;
i__12233_12342 = G__12365;
continue;
}
} else {
}
}
break;
}

var G__12366 = cljs.core.next.call(null,seq__12228_12332__$1);
var G__12367 = null;
var G__12368 = (0);
var G__12369 = (0);
seq__12228_12295 = G__12366;
chunk__12235_12296 = G__12367;
count__12236_12297 = G__12368;
i__12237_12298 = G__12369;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq12227){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12227));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__12370(s__12371){
return (new cljs.core.LazySeq(null,(function (){
var s__12371__$1 = s__12371;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12371__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__12371__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__12370_$_iter__12372(s__12373){
return (new cljs.core.LazySeq(null,((function (s__12371__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__12373__$1 = s__12373;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12373__$1);
if(temp__5720__auto____$1){
var s__12373__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12373__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12373__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12375 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12374 = (0);
while(true){
if((i__12374 < size__4522__auto__)){
var offset = cljs.core._nth.call(null,c__4521__auto__,i__12374);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__12375,idx);

var G__12376 = (i__12374 + (1));
i__12374 = G__12376;
continue;
} else {
var G__12377 = (i__12374 + (1));
i__12374 = G__12377;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12375),loom$alg_generic$bm_get_indicies_$_iter__12370_$_iter__12372.call(null,cljs.core.chunk_rest.call(null,s__12373__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12375),null);
}
} else {
var offset = cljs.core.first.call(null,s__12373__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__12370_$_iter__12372.call(null,cljs.core.rest.call(null,s__12373__$2)));
} else {
var G__12378 = cljs.core.rest.call(null,s__12373__$2);
s__12373__$1 = G__12378;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__12371__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__12371__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__12370.call(null,cljs.core.rest.call(null,s__12371__$1)));
} else {
var G__12379 = cljs.core.rest.call(null,s__12371__$1);
s__12371__$1 = G__12379;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k12381,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__12385 = k12381;
var G__12385__$1 = (((G__12385 instanceof cljs.core.Keyword))?G__12385.fqn:null);
switch (G__12385__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k12381,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__12386){
var vec__12387 = p__12386;
var k__4408__auto__ = cljs.core.nth.call(null,vec__12387,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__12387,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12380){
var self__ = this;
var G__12380__$1 = this;
return (new cljs.core.RecordIter((0),G__12380__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12382,other12383){
var self__ = this;
var this12382__$1 = this;
return (((!((other12383 == null)))) && ((this12382__$1.constructor === other12383.constructor)) && (cljs.core._EQ_.call(null,this12382__$1.node__GT_idx,other12383.node__GT_idx)) && (cljs.core._EQ_.call(null,this12382__$1.idx__GT_node,other12383.idx__GT_node)) && (cljs.core._EQ_.call(null,this12382__$1.bitmaps,other12383.bitmaps)) && (cljs.core._EQ_.call(null,this12382__$1.__extmap,other12383.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__12380){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__12390 = cljs.core.keyword_identical_QMARK_;
var expr__12391 = k__4393__auto__;
if(cljs.core.truth_(pred__12390.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__12391))){
return (new loom.alg_generic.Ancestry(G__12380,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12390.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__12391))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__12380,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12390.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__12391))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__12380,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__12380),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__12380){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__12380,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__12384){
var extmap__4424__auto__ = (function (){var G__12393 = cljs.core.dissoc.call(null,G__12384,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
if(cljs.core.record_QMARK_.call(null,G__12384)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12393);
} else {
return G__12393;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__12384),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__12384),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__12384),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
var len__4730__auto___12400 = arguments.length;
var i__4731__auto___12401 = (0);
while(true){
if((i__4731__auto___12401 < len__4730__auto___12400)){
args__4736__auto__.push((arguments[i__4731__auto___12401]));

var G__12402 = (i__4731__auto___12401 + (1));
i__4731__auto___12401 = G__12402;
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
var map__12398 = ancestry;
var map__12398__$1 = (((((!((map__12398 == null))))?(((((map__12398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12398):map__12398);
var node__GT_idx = cljs.core.get.call(null,map__12398__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__12398__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__12398__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq12395){
var G__12396 = cljs.core.first.call(null,seq12395);
var seq12395__$1 = cljs.core.next.call(null,seq12395);
var G__12397 = cljs.core.first.call(null,seq12395__$1);
var seq12395__$2 = cljs.core.next.call(null,seq12395__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12396,G__12397,seq12395__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__12403 = ancestry;
var map__12403__$1 = (((((!((map__12403 == null))))?(((((map__12403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12403):map__12403);
var node__GT_idx = cljs.core.get.call(null,map__12403__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__12403__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__12405 = ancestry;
var map__12405__$1 = (((((!((map__12405 == null))))?(((((map__12405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12405):map__12405);
var node__GT_idx = cljs.core.get.call(null,map__12405__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__12405__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__12405__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=alg_generic.js.map?rel=1611075064879
