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
return (function (p1__30134_SHARP_){
return loom.alg_generic.paths.call(null,preds,cljs.core.conj.call(null,path,p1__30134_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__30133_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__30133_SHARP_], null));
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
return cljs.core.remove.call(null,(function (p1__30135_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__30135_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__30136){
var vec__30137 = p__30136;
var n = cljs.core.nth.call(null,vec__30137,(0),null);
var p = cljs.core.nth.call(null,vec__30137,(1),null);
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
var len__4730__auto___30146 = arguments.length;
var i__4731__auto___30147 = (0);
while(true){
if((i__4731__auto___30147 < len__4730__auto___30146)){
args__4736__auto__.push((arguments[i__4731__auto___30147]));

var G__30148 = (i__4731__auto___30147 + (1));
i__4731__auto___30147 = G__30148;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__30143){
var map__30144 = p__30143;
var map__30144__$1 = (((((!((map__30144 == null))))?(((((map__30144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30144):map__30144);
var seen = cljs.core.get.call(null,map__30144__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__30144,map__30144__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__30144,map__30144__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__30144,map__30144__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__30144,map__30144__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq30140){
var G__30141 = cljs.core.first.call(null,seq30140);
var seq30140__$1 = cljs.core.next.call(null,seq30140);
var G__30142 = cljs.core.first.call(null,seq30140__$1);
var seq30140__$2 = cljs.core.next.call(null,seq30140__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30141,G__30142,seq30140__$2);
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
var len__4730__auto___30155 = arguments.length;
var i__4731__auto___30156 = (0);
while(true){
if((i__4731__auto___30156 < len__4730__auto___30155)){
args__4736__auto__.push((arguments[i__4731__auto___30156]));

var G__30157 = (i__4731__auto___30156 + (1));
i__4731__auto___30156 = G__30157;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__30152){
var map__30153 = p__30152;
var map__30153__$1 = (((((!((map__30153 == null))))?(((((map__30153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30153):map__30153);
var seen = cljs.core.get.call(null,map__30153__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__30153,map__30153__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__30153,map__30153__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__30153,map__30153__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__30158 = successors__$1;
var G__30159 = parent;
var G__30160 = cljs.core.peek.call(null,nbrstack);
var G__30161 = cljs.core.pop.call(null,stack);
var G__30162 = cljs.core.pop.call(null,nbrstack);
var G__30163 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__30158;
start__$1 = G__30159;
nbrs = G__30160;
stack = G__30161;
nbrstack = G__30162;
seen__$1 = G__30163;
continue;
} else {
return null;
}
}
break;
}
});})(map__30153,map__30153__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq30149){
var G__30150 = cljs.core.first.call(null,seq30149);
var seq30149__$1 = cljs.core.next.call(null,seq30149);
var G__30151 = cljs.core.first.call(null,seq30149__$1);
var seq30149__$2 = cljs.core.next.call(null,seq30149__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30150,G__30151,seq30149__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30170 = arguments.length;
var i__4731__auto___30171 = (0);
while(true){
if((i__4731__auto___30171 < len__4730__auto___30170)){
args__4736__auto__.push((arguments[i__4731__auto___30171]));

var G__30172 = (i__4731__auto___30171 + (1));
i__4731__auto___30171 = G__30172;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__30167){
var map__30168 = p__30167;
var map__30168__$1 = (((((!((map__30168 == null))))?(((((map__30168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30168):map__30168);
var seen = cljs.core.get.call(null,map__30168__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__30168__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__30173 = seen__$2;
var G__30174 = cljs.core.assoc.call(null,preds,u,v);
var G__30175 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__30173;
preds = G__30174;
stack = G__30175;
continue;
} else {
var G__30176 = seen__$2;
var G__30177 = preds;
var G__30178 = cljs.core.pop.call(null,stack);
seen__$1 = G__30176;
preds = G__30177;
stack = G__30178;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq30164){
var G__30165 = cljs.core.first.call(null,seq30164);
var seq30164__$1 = cljs.core.next.call(null,seq30164);
var G__30166 = cljs.core.first.call(null,seq30164__$1);
var seq30164__$2 = cljs.core.next.call(null,seq30164__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30165,G__30166,seq30164__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30185 = arguments.length;
var i__4731__auto___30186 = (0);
while(true){
if((i__4731__auto___30186 < len__4730__auto___30185)){
args__4736__auto__.push((arguments[i__4731__auto___30186]));

var G__30187 = (i__4731__auto___30186 + (1));
i__4731__auto___30186 = G__30187;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__30182){
var map__30183 = p__30182;
var map__30183__$1 = (((((!((map__30183 == null))))?(((((map__30183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30183):map__30183);
var seen = cljs.core.get.call(null,map__30183__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__30183__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__30188 = seen__$2;
var G__30189 = cljs.core.conj.call(null,result,v);
var G__30190 = cljs.core.pop.call(null,stack);
seen__$1 = G__30188;
result = G__30189;
stack = G__30190;
continue;
} else {
var G__30191 = seen__$2;
var G__30192 = result;
var G__30193 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__30191;
result = G__30192;
stack = G__30193;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq30179){
var G__30180 = cljs.core.first.call(null,seq30179);
var seq30179__$1 = cljs.core.next.call(null,seq30179);
var G__30181 = cljs.core.first.call(null,seq30179__$1);
var seq30179__$2 = cljs.core.next.call(null,seq30179__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30180,G__30181,seq30179__$2);
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
var len__4730__auto___30200 = arguments.length;
var i__4731__auto___30201 = (0);
while(true){
if((i__4731__auto___30201 < len__4730__auto___30200)){
args__4736__auto__.push((arguments[i__4731__auto___30201]));

var G__30202 = (i__4731__auto___30201 + (1));
i__4731__auto___30201 = G__30202;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__30197){
var map__30198 = p__30197;
var map__30198__$1 = (((((!((map__30198 == null))))?(((((map__30198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30198):map__30198);
var seen = cljs.core.get.call(null,map__30198__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__30198__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__30203 = start__$1;
var G__30204 = cljs.core.next.call(null,nbrs);
var G__30205 = stack;
var G__30206 = nbrstack;
var G__30207 = seen__$2;
var G__30208 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__30203;
nbrs = G__30204;
stack = G__30205;
nbrstack = G__30206;
seen__$1 = G__30207;
edges = G__30208;
continue;
} else {
var G__30209 = nbr;
var G__30210 = successors.call(null,nbr);
var G__30211 = cljs.core.conj.call(null,stack,start__$1);
var G__30212 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__30213 = seen__$2;
var G__30214 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__30209;
nbrs = G__30210;
stack = G__30211;
nbrstack = G__30212;
seen__$1 = G__30213;
edges = G__30214;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__30215 = parent;
var G__30216 = cljs.core.peek.call(null,nbrstack);
var G__30217 = cljs.core.pop.call(null,stack);
var G__30218 = cljs.core.pop.call(null,nbrstack);
var G__30219 = seen__$2;
var G__30220 = edges;
start__$1 = G__30215;
nbrs = G__30216;
stack = G__30217;
nbrstack = G__30218;
seen__$1 = G__30219;
edges = G__30220;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq30194){
var G__30195 = cljs.core.first.call(null,seq30194);
var seq30194__$1 = cljs.core.next.call(null,seq30194);
var G__30196 = cljs.core.first.call(null,seq30194__$1);
var seq30194__$2 = cljs.core.next.call(null,seq30194__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30195,G__30196,seq30194__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__30222 = arguments.length;
switch (G__30222) {
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
var G__30224 = seen__$2;
var G__30225 = explored__$1;
var G__30226 = result;
var G__30227 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__30224;
explored__$1 = G__30225;
result = G__30226;
stack = G__30227;
continue;
}
} else {
var G__30228 = seen__$2;
var G__30229 = cljs.core.conj.call(null,explored__$1,v);
var G__30230 = cljs.core.conj.call(null,result,v);
var G__30231 = cljs.core.pop.call(null,stack);
seen__$1 = G__30228;
explored__$1 = G__30229;
result = G__30230;
stack = G__30231;
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
var len__4730__auto___30260 = arguments.length;
var i__4731__auto___30261 = (0);
while(true){
if((i__4731__auto___30261 < len__4730__auto___30260)){
args__4736__auto__.push((arguments[i__4731__auto___30261]));

var G__30262 = (i__4731__auto___30261 + (1));
i__4731__auto___30261 = G__30262;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__30239){
var map__30240 = p__30239;
var map__30240__$1 = (((((!((map__30240 == null))))?(((((map__30240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30240):map__30240);
var f = cljs.core.get.call(null,map__30240__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__30240__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__30240__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__30240,map__30240__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__30240,map__30240__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__30249 = temp__5720__auto__;
var node = cljs.core.nth.call(null,vec__30249,(0),null);
var depth = cljs.core.nth.call(null,vec__30249,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__30249,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__30249,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen){
return (function (p1__30233_SHARP_){
return nbr_pred.call(null,p1__30233_SHARP_,node,(depth + (1)));
});})(vec__30249,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__30249,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen){
return (function (p1__30232_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__30232_SHARP_);
});})(vec__30249,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__30249,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__30252(s__30253){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__30249,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen){
return (function (){
var s__30253__$1 = s__30253;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__30253__$1);
if(temp__5720__auto____$1){
var s__30253__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30253__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__30253__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__30255 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__30254 = (0);
while(true){
if((i__30254 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__30254);
cljs.core.chunk_append.call(null,b__30255,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__30263 = (i__30254 + (1));
i__30254 = G__30263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30255),loom$alg_generic$step_$_iter__30252.call(null,cljs.core.chunk_rest.call(null,s__30253__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30255),null);
}
} else {
var nbr = cljs.core.first.call(null,s__30253__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__30252.call(null,cljs.core.rest.call(null,s__30253__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__30249,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen))
,null,null));
});})(nbrs,vec__30249,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen))
;
return iter__4523__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__30249,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen){
return (function (p1__30234_SHARP_,p2__30235_SHARP_){
return cljs.core.assoc.call(null,p1__30234_SHARP_,p2__30235_SHARP_,node);
});})(nbrs,vec__30249,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen))
,preds,nbrs));
});})(vec__30249,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen){
return (function loom$alg_generic$iter__30256(s__30257){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen){
return (function (){
var s__30257__$1 = s__30257;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30257__$1);
if(temp__5720__auto__){
var s__30257__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30257__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__30257__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__30259 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__30258 = (0);
while(true){
if((i__30258 < size__4522__auto__)){
var s = cljs.core._nth.call(null,c__4521__auto__,i__30258);
cljs.core.chunk_append.call(null,b__30259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__30264 = (i__30258 + (1));
i__30258 = G__30264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30259),loom$alg_generic$iter__30256.call(null,cljs.core.chunk_rest.call(null,s__30257__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30259),null);
}
} else {
var s = cljs.core.first.call(null,s__30257__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__30256.call(null,cljs.core.rest.call(null,s__30257__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__30240,map__30240__$1,f,when,seen))
;
return iter__4523__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq30236){
var G__30237 = cljs.core.first.call(null,seq30236);
var seq30236__$1 = cljs.core.next.call(null,seq30236);
var G__30238 = cljs.core.first.call(null,seq30236__$1);
var seq30236__$2 = cljs.core.next.call(null,seq30236__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30237,G__30238,seq30236__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30271 = arguments.length;
var i__4731__auto___30272 = (0);
while(true){
if((i__4731__auto___30272 < len__4730__auto___30271)){
args__4736__auto__.push((arguments[i__4731__auto___30272]));

var G__30273 = (i__4731__auto___30272 + (1));
i__4731__auto___30272 = G__30273;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__30268){
var map__30269 = p__30268;
var map__30269__$1 = (((((!((map__30269 == null))))?(((((map__30269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30269):map__30269);
var seen = cljs.core.get.call(null,map__30269__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__30269,map__30269__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__30269,map__30269__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq30265){
var G__30266 = cljs.core.first.call(null,seq30265);
var seq30265__$1 = cljs.core.next.call(null,seq30265);
var G__30267 = cljs.core.first.call(null,seq30265__$1);
var seq30265__$2 = cljs.core.next.call(null,seq30265__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30266,G__30267,seq30265__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30285 = arguments.length;
var i__4731__auto___30286 = (0);
while(true){
if((i__4731__auto___30286 < len__4730__auto___30285)){
args__4736__auto__.push((arguments[i__4731__auto___30286]));

var G__30287 = (i__4731__auto___30286 + (1));
i__4731__auto___30286 = G__30287;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__30278){
var map__30279 = p__30278;
var map__30279__$1 = (((((!((map__30279 == null))))?(((((map__30279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30279):map__30279);
var opts = map__30279__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__5720__auto__ = cljs.core.some.call(null,((function (opts__$1,map__30279,map__30279__$1,opts){
return (function (p__30281){
var vec__30282 = p__30281;
var _ = cljs.core.nth.call(null,vec__30282,(0),null);
var pm = cljs.core.nth.call(null,vec__30282,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__30282,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__30279,map__30279__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq30274){
var G__30275 = cljs.core.first.call(null,seq30274);
var seq30274__$1 = cljs.core.next.call(null,seq30274);
var G__30276 = cljs.core.first.call(null,seq30274__$1);
var seq30274__$2 = cljs.core.next.call(null,seq30274__$1);
var G__30277 = cljs.core.first.call(null,seq30274__$2);
var seq30274__$3 = cljs.core.next.call(null,seq30274__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30275,G__30276,G__30277,seq30274__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__30288 = m2;
var G__30289 = m1;
m1 = G__30288;
m2 = G__30289;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__30291(s__30292){
return (new cljs.core.LazySeq(null,(function (){
var s__30292__$1 = s__30292;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30292__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__30292__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__30291_$_iter__30293(s__30294){
return (new cljs.core.LazySeq(null,((function (s__30292__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__30294__$1 = s__30294;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__30294__$1);
if(temp__5720__auto____$1){
var s__30294__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30294__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__30294__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__30296 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__30295 = (0);
while(true){
if((i__30295 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__30295);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
cljs.core.chunk_append.call(null,b__30296,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__30297 = (i__30295 + (1));
i__30295 = G__30297;
continue;
} else {
var G__30298 = (i__30295 + (1));
i__30295 = G__30298;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30296),loom$alg_generic$reverse_edges_$_iter__30291_$_iter__30293.call(null,cljs.core.chunk_rest.call(null,s__30294__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30296),null);
}
} else {
var nbr = cljs.core.first.call(null,s__30294__$2);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__30291_$_iter__30293.call(null,cljs.core.rest.call(null,s__30294__$2)));
} else {
var G__30299 = cljs.core.rest.call(null,s__30294__$2);
s__30294__$1 = G__30299;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__30292__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__30292__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,successor_fn.call(null,node)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__30291.call(null,cljs.core.rest.call(null,s__30292__$1)));
} else {
var G__30300 = cljs.core.rest.call(null,s__30292__$1);
s__30292__$1 = G__30300;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__30301(s__30302){
return (new cljs.core.LazySeq(null,(function (){
var s__30302__$1 = s__30302;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30302__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__30302__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__30301_$_iter__30303(s__30304){
return (new cljs.core.LazySeq(null,((function (s__30302__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__30304__$1 = s__30304;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__30304__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__30304__$1,s__30302__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__30301_$_iter__30303_$_iter__30305(s__30306){
return (new cljs.core.LazySeq(null,((function (s__30304__$1,s__30302__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__30306__$1 = s__30306;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__30306__$1);
if(temp__5720__auto____$2){
var s__30306__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30306__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__30306__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__30308 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__30307 = (0);
while(true){
if((i__30307 < size__4522__auto__)){
var to = cljs.core._nth.call(null,c__4521__auto__,i__30307);
cljs.core.chunk_append.call(null,b__30308,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__30309 = (i__30307 + (1));
i__30307 = G__30309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30308),loom$alg_generic$conj_paths_$_iter__30301_$_iter__30303_$_iter__30305.call(null,cljs.core.chunk_rest.call(null,s__30306__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30308),null);
}
} else {
var to = cljs.core.first.call(null,s__30306__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__30301_$_iter__30303_$_iter__30305.call(null,cljs.core.rest.call(null,s__30306__$2)));
}
} else {
return null;
}
break;
}
});})(s__30304__$1,s__30302__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__30304__$1,s__30302__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__30301_$_iter__30303.call(null,cljs.core.rest.call(null,s__30304__$1)));
} else {
var G__30310 = cljs.core.rest.call(null,s__30304__$1);
s__30304__$1 = G__30310;
continue;
}
} else {
return null;
}
break;
}
});})(s__30302__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__30302__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__30301.call(null,cljs.core.rest.call(null,s__30302__$1)));
} else {
var G__30311 = cljs.core.rest.call(null,s__30302__$1);
s__30302__$1 = G__30311;
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
return (function (p1__30312_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__30312_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__30313){
var vec__30314 = p__30313;
var key = cljs.core.nth.call(null,vec__30314,(0),null);
var val = cljs.core.nth.call(null,vec__30314,(1),null);
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
var G__30317 = outgoing__$1;
var G__30318 = incoming;
var G__30319 = q1__$1;
var G__30320 = q2;
outgoing = G__30317;
incoming = G__30318;
q1 = G__30319;
q2 = G__30320;
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
var G__30321 = outgoing;
var G__30322 = incoming__$1;
var G__30323 = q1;
var G__30324 = q2__$1;
outgoing = G__30321;
incoming = G__30322;
q1 = G__30323;
q2 = G__30324;
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
var G__30328 = arguments.length;
switch (G__30328) {
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
var step = (function loom$alg_generic$step(p__30340){
var vec__30341 = p__30340;
var state = cljs.core.nth.call(null,vec__30341,(0),null);
var pq = cljs.core.nth.call(null,vec__30341,(1),null);
var temp__5720__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__30344 = temp__5720__auto__;
var dist_su = cljs.core.nth.call(null,vec__30344,(0),null);
var _ = cljs.core.nth.call(null,vec__30344,(1),null);
var u = cljs.core.nth.call(null,vec__30344,(2),null);
var fpq = vec__30344;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__30344,dist_su,_,u,fpq,temp__5720__auto__,vec__30341,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__30344,dist_su,_,u,fpq,temp__5720__auto__,vec__30341,state,pq){
return (function (p__30347,v){
var vec__30348 = p__30347;
var state__$1 = cljs.core.nth.call(null,vec__30348,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__30348,(1),null);
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
});})(vec__30344,dist_su,_,u,fpq,temp__5720__auto__,vec__30341,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__30344,dist_su,_,u,fpq,temp__5720__auto__,vec__30341,state,pq))
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
return cljs.core.reduce.call(null,(function (span,p__30352){
var vec__30353 = p__30352;
var n = cljs.core.nth.call(null,vec__30353,(0),null);
var vec__30356 = cljs.core.nth.call(null,vec__30353,(1),null);
var d = cljs.core.nth.call(null,vec__30356,(0),null);
var p = cljs.core.nth.call(null,vec__30356,(1),null);
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
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__30359){
var vec__30360 = p__30359;
var node = cljs.core.nth.call(null,vec__30360,(0),null);
var _ = cljs.core.nth.call(null,vec__30360,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__30363 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__30363,(0),null);
var end_state = cljs.core.nth.call(null,vec__30363,(1),null);
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
var len__4730__auto___30434 = arguments.length;
var i__4731__auto___30435 = (0);
while(true){
if((i__4731__auto___30435 < len__4730__auto___30434)){
args__4736__auto__.push((arguments[i__4731__auto___30435]));

var G__30436 = (i__4731__auto___30435 + (1));
i__4731__auto___30435 = G__30436;
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
var seq__30370_30437 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__30377_30438 = null;
var count__30378_30439 = (0);
var i__30379_30440 = (0);
while(true){
if((i__30379_30440 < count__30378_30439)){
var bitmap_30441 = cljs.core._nth.call(null,chunk__30377_30438,i__30379_30440);
var seq__30380_30442 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_30441));
var chunk__30382_30443 = null;
var count__30383_30444 = (0);
var i__30384_30445 = (0);
while(true){
if((i__30384_30445 < count__30383_30444)){
var vec__30416_30446 = cljs.core._nth.call(null,chunk__30382_30443,i__30384_30445);
var idx_30447 = cljs.core.nth.call(null,vec__30416_30446,(0),null);
var value_30448 = cljs.core.nth.call(null,vec__30416_30446,(1),null);
var masked_value_30449 = (value_30448 | (new_bitmap[idx_30447]));
(new_bitmap[idx_30447] = masked_value_30449);


var G__30450 = seq__30380_30442;
var G__30451 = chunk__30382_30443;
var G__30452 = count__30383_30444;
var G__30453 = (i__30384_30445 + (1));
seq__30380_30442 = G__30450;
chunk__30382_30443 = G__30451;
count__30383_30444 = G__30452;
i__30384_30445 = G__30453;
continue;
} else {
var temp__5720__auto___30454 = cljs.core.seq.call(null,seq__30380_30442);
if(temp__5720__auto___30454){
var seq__30380_30455__$1 = temp__5720__auto___30454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30380_30455__$1)){
var c__4550__auto___30456 = cljs.core.chunk_first.call(null,seq__30380_30455__$1);
var G__30457 = cljs.core.chunk_rest.call(null,seq__30380_30455__$1);
var G__30458 = c__4550__auto___30456;
var G__30459 = cljs.core.count.call(null,c__4550__auto___30456);
var G__30460 = (0);
seq__30380_30442 = G__30457;
chunk__30382_30443 = G__30458;
count__30383_30444 = G__30459;
i__30384_30445 = G__30460;
continue;
} else {
var vec__30419_30461 = cljs.core.first.call(null,seq__30380_30455__$1);
var idx_30462 = cljs.core.nth.call(null,vec__30419_30461,(0),null);
var value_30463 = cljs.core.nth.call(null,vec__30419_30461,(1),null);
var masked_value_30464 = (value_30463 | (new_bitmap[idx_30462]));
(new_bitmap[idx_30462] = masked_value_30464);


var G__30465 = cljs.core.next.call(null,seq__30380_30455__$1);
var G__30466 = null;
var G__30467 = (0);
var G__30468 = (0);
seq__30380_30442 = G__30465;
chunk__30382_30443 = G__30466;
count__30383_30444 = G__30467;
i__30384_30445 = G__30468;
continue;
}
} else {
}
}
break;
}

var G__30469 = seq__30370_30437;
var G__30470 = chunk__30377_30438;
var G__30471 = count__30378_30439;
var G__30472 = (i__30379_30440 + (1));
seq__30370_30437 = G__30469;
chunk__30377_30438 = G__30470;
count__30378_30439 = G__30471;
i__30379_30440 = G__30472;
continue;
} else {
var temp__5720__auto___30473 = cljs.core.seq.call(null,seq__30370_30437);
if(temp__5720__auto___30473){
var seq__30370_30474__$1 = temp__5720__auto___30473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30370_30474__$1)){
var c__4550__auto___30475 = cljs.core.chunk_first.call(null,seq__30370_30474__$1);
var G__30476 = cljs.core.chunk_rest.call(null,seq__30370_30474__$1);
var G__30477 = c__4550__auto___30475;
var G__30478 = cljs.core.count.call(null,c__4550__auto___30475);
var G__30479 = (0);
seq__30370_30437 = G__30476;
chunk__30377_30438 = G__30477;
count__30378_30439 = G__30478;
i__30379_30440 = G__30479;
continue;
} else {
var bitmap_30480 = cljs.core.first.call(null,seq__30370_30474__$1);
var seq__30371_30481 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_30480));
var chunk__30373_30482 = null;
var count__30374_30483 = (0);
var i__30375_30484 = (0);
while(true){
if((i__30375_30484 < count__30374_30483)){
var vec__30428_30485 = cljs.core._nth.call(null,chunk__30373_30482,i__30375_30484);
var idx_30486 = cljs.core.nth.call(null,vec__30428_30485,(0),null);
var value_30487 = cljs.core.nth.call(null,vec__30428_30485,(1),null);
var masked_value_30488 = (value_30487 | (new_bitmap[idx_30486]));
(new_bitmap[idx_30486] = masked_value_30488);


var G__30489 = seq__30371_30481;
var G__30490 = chunk__30373_30482;
var G__30491 = count__30374_30483;
var G__30492 = (i__30375_30484 + (1));
seq__30371_30481 = G__30489;
chunk__30373_30482 = G__30490;
count__30374_30483 = G__30491;
i__30375_30484 = G__30492;
continue;
} else {
var temp__5720__auto___30493__$1 = cljs.core.seq.call(null,seq__30371_30481);
if(temp__5720__auto___30493__$1){
var seq__30371_30494__$1 = temp__5720__auto___30493__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30371_30494__$1)){
var c__4550__auto___30495 = cljs.core.chunk_first.call(null,seq__30371_30494__$1);
var G__30496 = cljs.core.chunk_rest.call(null,seq__30371_30494__$1);
var G__30497 = c__4550__auto___30495;
var G__30498 = cljs.core.count.call(null,c__4550__auto___30495);
var G__30499 = (0);
seq__30371_30481 = G__30496;
chunk__30373_30482 = G__30497;
count__30374_30483 = G__30498;
i__30375_30484 = G__30499;
continue;
} else {
var vec__30431_30500 = cljs.core.first.call(null,seq__30371_30494__$1);
var idx_30501 = cljs.core.nth.call(null,vec__30431_30500,(0),null);
var value_30502 = cljs.core.nth.call(null,vec__30431_30500,(1),null);
var masked_value_30503 = (value_30502 | (new_bitmap[idx_30501]));
(new_bitmap[idx_30501] = masked_value_30503);


var G__30504 = cljs.core.next.call(null,seq__30371_30494__$1);
var G__30505 = null;
var G__30506 = (0);
var G__30507 = (0);
seq__30371_30481 = G__30504;
chunk__30373_30482 = G__30505;
count__30374_30483 = G__30506;
i__30375_30484 = G__30507;
continue;
}
} else {
}
}
break;
}

var G__30508 = cljs.core.next.call(null,seq__30370_30474__$1);
var G__30509 = null;
var G__30510 = (0);
var G__30511 = (0);
seq__30370_30437 = G__30508;
chunk__30377_30438 = G__30509;
count__30378_30439 = G__30510;
i__30379_30440 = G__30511;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq30369){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30369));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__30512(s__30513){
return (new cljs.core.LazySeq(null,(function (){
var s__30513__$1 = s__30513;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30513__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__30513__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__30512_$_iter__30514(s__30515){
return (new cljs.core.LazySeq(null,((function (s__30513__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__30515__$1 = s__30515;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__30515__$1);
if(temp__5720__auto____$1){
var s__30515__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30515__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__30515__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__30517 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__30516 = (0);
while(true){
if((i__30516 < size__4522__auto__)){
var offset = cljs.core._nth.call(null,c__4521__auto__,i__30516);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__30517,idx);

var G__30518 = (i__30516 + (1));
i__30516 = G__30518;
continue;
} else {
var G__30519 = (i__30516 + (1));
i__30516 = G__30519;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30517),loom$alg_generic$bm_get_indicies_$_iter__30512_$_iter__30514.call(null,cljs.core.chunk_rest.call(null,s__30515__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30517),null);
}
} else {
var offset = cljs.core.first.call(null,s__30515__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__30512_$_iter__30514.call(null,cljs.core.rest.call(null,s__30515__$2)));
} else {
var G__30520 = cljs.core.rest.call(null,s__30515__$2);
s__30515__$1 = G__30520;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__30513__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__30513__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__30512.call(null,cljs.core.rest.call(null,s__30513__$1)));
} else {
var G__30521 = cljs.core.rest.call(null,s__30513__$1);
s__30513__$1 = G__30521;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k30523,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__30527 = k30523;
var G__30527__$1 = (((G__30527 instanceof cljs.core.Keyword))?G__30527.fqn:null);
switch (G__30527__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k30523,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__30528){
var vec__30529 = p__30528;
var k__4408__auto__ = cljs.core.nth.call(null,vec__30529,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__30529,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30522){
var self__ = this;
var G__30522__$1 = this;
return (new cljs.core.RecordIter((0),G__30522__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30524,other30525){
var self__ = this;
var this30524__$1 = this;
return (((!((other30525 == null)))) && ((this30524__$1.constructor === other30525.constructor)) && (cljs.core._EQ_.call(null,this30524__$1.node__GT_idx,other30525.node__GT_idx)) && (cljs.core._EQ_.call(null,this30524__$1.idx__GT_node,other30525.idx__GT_node)) && (cljs.core._EQ_.call(null,this30524__$1.bitmaps,other30525.bitmaps)) && (cljs.core._EQ_.call(null,this30524__$1.__extmap,other30525.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__30522){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__30532 = cljs.core.keyword_identical_QMARK_;
var expr__30533 = k__4393__auto__;
if(cljs.core.truth_(pred__30532.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__30533))){
return (new loom.alg_generic.Ancestry(G__30522,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30532.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__30533))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__30522,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30532.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__30533))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__30522,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__30522),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__30522){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__30522,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__30526){
var extmap__4424__auto__ = (function (){var G__30535 = cljs.core.dissoc.call(null,G__30526,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
if(cljs.core.record_QMARK_.call(null,G__30526)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__30535);
} else {
return G__30535;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__30526),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__30526),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__30526),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
var len__4730__auto___30542 = arguments.length;
var i__4731__auto___30543 = (0);
while(true){
if((i__4731__auto___30543 < len__4730__auto___30542)){
args__4736__auto__.push((arguments[i__4731__auto___30543]));

var G__30544 = (i__4731__auto___30543 + (1));
i__4731__auto___30543 = G__30544;
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
var map__30540 = ancestry;
var map__30540__$1 = (((((!((map__30540 == null))))?(((((map__30540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30540):map__30540);
var node__GT_idx = cljs.core.get.call(null,map__30540__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__30540__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__30540__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq30537){
var G__30538 = cljs.core.first.call(null,seq30537);
var seq30537__$1 = cljs.core.next.call(null,seq30537);
var G__30539 = cljs.core.first.call(null,seq30537__$1);
var seq30537__$2 = cljs.core.next.call(null,seq30537__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30538,G__30539,seq30537__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__30545 = ancestry;
var map__30545__$1 = (((((!((map__30545 == null))))?(((((map__30545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30545):map__30545);
var node__GT_idx = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__30545__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__30547 = ancestry;
var map__30547__$1 = (((((!((map__30547 == null))))?(((((map__30547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30547):map__30547);
var node__GT_idx = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__30547__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=alg_generic.js.map?rel=1601274366164
