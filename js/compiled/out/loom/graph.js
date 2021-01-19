// Compiled by ClojureScript 1.10.520 {}
goog.provide('loom.graph');
goog.require('cljs.core');
goog.require('loom.alg_generic');

/**
 * @interface
 */
loom.graph.Graph = function(){};

/**
 * Returns a collection of the nodes in graph g
 */
loom.graph.nodes = (function loom$graph$nodes(g){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$nodes$arity$1 == null)))))){
return g.loom$graph$Graph$nodes$arity$1(g);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.nodes[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g);
} else {
var m__4431__auto__ = (loom.graph.nodes["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.nodes",g);
}
}
}
});

/**
 * Edges in g. May return each edge twice in an undirected graph
 */
loom.graph.edges = (function loom$graph$edges(g){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$edges$arity$1 == null)))))){
return g.loom$graph$Graph$edges$arity$1(g);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.edges[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g);
} else {
var m__4431__auto__ = (loom.graph.edges["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.edges",g);
}
}
}
});

/**
 * Returns true when node is in g
 */
loom.graph.has_node_QMARK_ = (function loom$graph$has_node_QMARK_(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$has_node_QMARK_$arity$2 == null)))))){
return g.loom$graph$Graph$has_node_QMARK_$arity$2(g,node);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.has_node_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node);
} else {
var m__4431__auto__ = (loom.graph.has_node_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.has-node?",g);
}
}
}
});

/**
 * Returns true when edge [n1 n2] is in g
 */
loom.graph.has_edge_QMARK_ = (function loom$graph$has_edge_QMARK_(g,n1,n2){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$has_edge_QMARK_$arity$3 == null)))))){
return g.loom$graph$Graph$has_edge_QMARK_$arity$3(g,n1,n2);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.has_edge_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,n1,n2);
} else {
var m__4431__auto__ = (loom.graph.has_edge_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,n1,n2);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.has-edge?",g);
}
}
}
});

/**
 * Returns direct successors of node
 */
loom.graph.successors_STAR_ = (function loom$graph$successors_STAR_(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$successors_STAR_$arity$2 == null)))))){
return g.loom$graph$Graph$successors_STAR_$arity$2(g,node);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.successors_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node);
} else {
var m__4431__auto__ = (loom.graph.successors_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.successors*",g);
}
}
}
});

/**
 * Returns the number of outgoing edges of node
 */
loom.graph.out_degree = (function loom$graph$out_degree(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$out_degree$arity$2 == null)))))){
return g.loom$graph$Graph$out_degree$arity$2(g,node);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.out_degree[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node);
} else {
var m__4431__auto__ = (loom.graph.out_degree["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.out-degree",g);
}
}
}
});

/**
 * Returns all the outgoing edges of node
 */
loom.graph.out_edges = (function loom$graph$out_edges(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$out_edges$arity$2 == null)))))){
return g.loom$graph$Graph$out_edges$arity$2(g,node);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.out_edges[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node);
} else {
var m__4431__auto__ = (loom.graph.out_edges["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.out-edges",g);
}
}
}
});


/**
 * @interface
 */
loom.graph.Digraph = function(){};

/**
 * Returns direct predecessors of node
 */
loom.graph.predecessors_STAR_ = (function loom$graph$predecessors_STAR_(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$predecessors_STAR_$arity$2 == null)))))){
return g.loom$graph$Digraph$predecessors_STAR_$arity$2(g,node);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.predecessors_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node);
} else {
var m__4431__auto__ = (loom.graph.predecessors_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.predecessors*",g);
}
}
}
});

/**
 * Returns the number of direct predecessors to node
 */
loom.graph.in_degree = (function loom$graph$in_degree(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$in_degree$arity$2 == null)))))){
return g.loom$graph$Digraph$in_degree$arity$2(g,node);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.in_degree[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node);
} else {
var m__4431__auto__ = (loom.graph.in_degree["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.in-degree",g);
}
}
}
});

/**
 * Returns all the incoming edges of node
 */
loom.graph.in_edges = (function loom$graph$in_edges(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$in_edges$arity$2 == null)))))){
return g.loom$graph$Digraph$in_edges$arity$2(g,node);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.in_edges[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node);
} else {
var m__4431__auto__ = (loom.graph.in_edges["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.in-edges",g);
}
}
}
});

/**
 * Returns a graph with all edges reversed
 */
loom.graph.transpose = (function loom$graph$transpose(g){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$transpose$arity$1 == null)))))){
return g.loom$graph$Digraph$transpose$arity$1(g);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.transpose[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g);
} else {
var m__4431__auto__ = (loom.graph.transpose["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.transpose",g);
}
}
}
});


/**
 * @interface
 */
loom.graph.WeightedGraph = function(){};

/**
 * Returns the weight of edge e or edge [n1 n2]
 */
loom.graph.weight_STAR_ = (function loom$graph$weight_STAR_(var_args){
var G__12410 = arguments.length;
switch (G__12410) {
case 2:
return loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (g,e){
if((((!((g == null)))) && ((!((g.loom$graph$WeightedGraph$weight_STAR_$arity$2 == null)))))){
return g.loom$graph$WeightedGraph$weight_STAR_$arity$2(g,e);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.weight_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,e);
} else {
var m__4431__auto__ = (loom.graph.weight_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,e);
} else {
throw cljs.core.missing_protocol.call(null,"WeightedGraph.weight*",g);
}
}
}
});

loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
if((((!((g == null)))) && ((!((g.loom$graph$WeightedGraph$weight_STAR_$arity$3 == null)))))){
return g.loom$graph$WeightedGraph$weight_STAR_$arity$3(g,n1,n2);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.weight_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,n1,n2);
} else {
var m__4431__auto__ = (loom.graph.weight_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,n1,n2);
} else {
throw cljs.core.missing_protocol.call(null,"WeightedGraph.weight*",g);
}
}
}
});

loom.graph.weight_STAR_.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
loom.graph.EditableGraph = function(){};

/**
 * Add nodes to graph g. See add-nodes
 */
loom.graph.add_nodes_STAR_ = (function loom$graph$add_nodes_STAR_(g,nodes){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$add_nodes_STAR_$arity$2(g,nodes);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.add_nodes_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,nodes);
} else {
var m__4431__auto__ = (loom.graph.add_nodes_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,nodes);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.add-nodes*",g);
}
}
}
});

/**
 * Add edges to graph g. See add-edges
 */
loom.graph.add_edges_STAR_ = (function loom$graph$add_edges_STAR_(g,edges){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$add_edges_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$add_edges_STAR_$arity$2(g,edges);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.add_edges_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,edges);
} else {
var m__4431__auto__ = (loom.graph.add_edges_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,edges);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.add-edges*",g);
}
}
}
});

/**
 * Remove nodes from graph g. See remove-nodes
 */
loom.graph.remove_nodes_STAR_ = (function loom$graph$remove_nodes_STAR_(g,nodes){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2(g,nodes);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.remove_nodes_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,nodes);
} else {
var m__4431__auto__ = (loom.graph.remove_nodes_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,nodes);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.remove-nodes*",g);
}
}
}
});

/**
 * Removes edges from graph g. See remove-edges
 */
loom.graph.remove_edges_STAR_ = (function loom$graph$remove_edges_STAR_(g,edges){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$remove_edges_STAR_$arity$2(g,edges);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.remove_edges_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,edges);
} else {
var m__4431__auto__ = (loom.graph.remove_edges_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,edges);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.remove-edges*",g);
}
}
}
});

/**
 * Removes all nodes and edges from graph g
 */
loom.graph.remove_all = (function loom$graph$remove_all(g){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$remove_all$arity$1 == null)))))){
return g.loom$graph$EditableGraph$remove_all$arity$1(g);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.remove_all[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g);
} else {
var m__4431__auto__ = (loom.graph.remove_all["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.remove-all",g);
}
}
}
});


/**
 * @interface
 */
loom.graph.Edge = function(){};

/**
 * Returns the source node of the edge
 */
loom.graph.src = (function loom$graph$src(edge){
if((((!((edge == null)))) && ((!((edge.loom$graph$Edge$src$arity$1 == null)))))){
return edge.loom$graph$Edge$src$arity$1(edge);
} else {
var x__4433__auto__ = (((edge == null))?null:edge);
var m__4434__auto__ = (loom.graph.src[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,edge);
} else {
var m__4431__auto__ = (loom.graph.src["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,edge);
} else {
throw cljs.core.missing_protocol.call(null,"Edge.src",edge);
}
}
}
});

/**
 * Returns the dest node of the edge
 */
loom.graph.dest = (function loom$graph$dest(edge){
if((((!((edge == null)))) && ((!((edge.loom$graph$Edge$dest$arity$1 == null)))))){
return edge.loom$graph$Edge$dest$arity$1(edge);
} else {
var x__4433__auto__ = (((edge == null))?null:edge);
var m__4434__auto__ = (loom.graph.dest[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,edge);
} else {
var m__4431__auto__ = (loom.graph.dest["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,edge);
} else {
throw cljs.core.missing_protocol.call(null,"Edge.dest",edge);
}
}
}
});

cljs.core.PersistentVector.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.get.call(null,edge__$1,(0));
});

cljs.core.PersistentVector.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.get.call(null,edge__$1,(1));
});
cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentHashMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentHashMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
});
/**
 * Returns direct successors of node
 */
loom.graph.successors = (function loom$graph$successors(var_args){
var G__12414 = arguments.length;
switch (G__12414) {
case 1:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.graph.successors.cljs$core$IFn$_invoke$arity$1 = (function (g){
return (function (p1__12412_SHARP_){
return loom.graph.successors.call(null,g,p1__12412_SHARP_);
});
});

loom.graph.successors.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
return loom.graph.successors_STAR_.call(null,g,node);
});

loom.graph.successors.cljs$lang$maxFixedArity = 2;

/**
 * Returns direct predecessors of node
 */
loom.graph.predecessors = (function loom$graph$predecessors(var_args){
var G__12418 = arguments.length;
switch (G__12418) {
case 1:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1 = (function (g){
return (function (p1__12416_SHARP_){
return loom.graph.predecessors.call(null,g,p1__12416_SHARP_);
});
});

loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
return loom.graph.predecessors_STAR_.call(null,g,node);
});

loom.graph.predecessors.cljs$lang$maxFixedArity = 2;

/**
 * Returns the weight of edge e or edge [n1 n2]
 */
loom.graph.weight = (function loom$graph$weight(var_args){
var G__12421 = arguments.length;
switch (G__12421) {
case 1:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$1 = (function (g){
return cljs.core.partial.call(null,loom.graph.weight,g);
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$2 = (function (g,e){
return loom.graph.weight_STAR_.call(null,g,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
return loom.graph.weight_STAR_.call(null,g,n1,n2);
});

loom.graph.weight.cljs$lang$maxFixedArity = 3;

/**
 * Adds nodes to graph g. Nodes can be any type of object
 */
loom.graph.add_nodes = (function loom$graph$add_nodes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12425 = arguments.length;
var i__4731__auto___12426 = (0);
while(true){
if((i__4731__auto___12426 < len__4730__auto___12425)){
args__4736__auto__.push((arguments[i__4731__auto___12426]));

var G__12427 = (i__4731__auto___12426 + (1));
i__4731__auto___12426 = G__12427;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_nodes_STAR_.call(null,g,nodes);
});

loom.graph.add_nodes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.add_nodes.cljs$lang$applyTo = (function (seq12423){
var G__12424 = cljs.core.first.call(null,seq12423);
var seq12423__$1 = cljs.core.next.call(null,seq12423);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12424,seq12423__$1);
});

/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12430 = arguments.length;
var i__4731__auto___12431 = (0);
while(true){
if((i__4731__auto___12431 < len__4730__auto___12430)){
args__4736__auto__.push((arguments[i__4731__auto___12431]));

var G__12432 = (i__4731__auto___12431 + (1));
i__4731__auto___12431 = G__12432;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.add_edges_STAR_.call(null,g,edges);
});

loom.graph.add_edges.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.add_edges.cljs$lang$applyTo = (function (seq12428){
var G__12429 = cljs.core.first.call(null,seq12428);
var seq12428__$1 = cljs.core.next.call(null,seq12428);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12429,seq12428__$1);
});

/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12435 = arguments.length;
var i__4731__auto___12436 = (0);
while(true){
if((i__4731__auto___12436 < len__4730__auto___12435)){
args__4736__auto__.push((arguments[i__4731__auto___12436]));

var G__12437 = (i__4731__auto___12436 + (1));
i__4731__auto___12436 = G__12437;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.remove_nodes_STAR_.call(null,g,nodes);
});

loom.graph.remove_nodes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq12433){
var G__12434 = cljs.core.first.call(null,seq12433);
var seq12433__$1 = cljs.core.next.call(null,seq12433);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12434,seq12433__$1);
});

/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12440 = arguments.length;
var i__4731__auto___12441 = (0);
while(true){
if((i__4731__auto___12441 < len__4730__auto___12440)){
args__4736__auto__.push((arguments[i__4731__auto___12441]));

var G__12442 = (i__4731__auto___12441 + (1));
i__4731__auto___12441 = G__12442;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.remove_edges_STAR_.call(null,g,edges);
});

loom.graph.remove_edges.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.remove_edges.cljs$lang$applyTo = (function (seq12438){
var G__12439 = cljs.core.first.call(null,seq12438);
var seq12438__$1 = cljs.core.next.call(null,seq12438);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12439,seq12438__$1);
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
loom.graph.BasicEditableGraph = (function (nodeset,adj,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k12444,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__12448 = k12444;
var G__12448__$1 = (((G__12448 instanceof cljs.core.Keyword))?G__12448.fqn:null);
switch (G__12448__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12444,else__4388__auto__);

}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__12449){
var vec__12450 = p__12449;
var k__4408__auto__ = cljs.core.nth.call(null,vec__12450,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__12450,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12443){
var self__ = this;
var G__12443__$1 = this;
return (new cljs.core.RecordIter((0),G__12443__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (446662859 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12445,other12446){
var self__ = this;
var this12445__$1 = this;
return (((!((other12446 == null)))) && ((this12445__$1.constructor === other12446.constructor)) && (cljs.core._EQ_.call(null,this12445__$1.nodeset,other12446.nodeset)) && (cljs.core._EQ_.call(null,this12445__$1.adj,other12446.adj)) && (cljs.core._EQ_.call(null,this12445__$1.__extmap,other12446.__extmap)));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__12443){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__12453 = cljs.core.keyword_identical_QMARK_;
var expr__12454 = k__4393__auto__;
if(cljs.core.truth_(pred__12453.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__12454))){
return (new loom.graph.BasicEditableGraph(G__12443,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12453.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__12454))){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__12443,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__12443),null));
}
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__12443){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__12443,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.BasicEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableGraph.cljs$lang$type = true;

loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableGraph",null,(1),null));
});

loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.graph/BasicEditableGraph");
});

/**
 * Positional factory function for loom.graph/BasicEditableGraph.
 */
loom.graph.__GT_BasicEditableGraph = (function loom$graph$__GT_BasicEditableGraph(nodeset,adj){
return (new loom.graph.BasicEditableGraph(nodeset,adj,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__12447){
var extmap__4424__auto__ = (function (){var G__12456 = cljs.core.dissoc.call(null,G__12447,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196));
if(cljs.core.record_QMARK_.call(null,G__12447)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12456);
} else {
return G__12456;
}
})();
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__12447),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__12447),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
loom.graph.BasicEditableDigraph = (function (nodeset,adj,in$,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.in$ = in$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k12459,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__12463 = k12459;
var G__12463__$1 = (((G__12463 instanceof cljs.core.Keyword))?G__12463.fqn:null);
switch (G__12463__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
case "in":
return self__.in$;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12459,else__4388__auto__);

}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__12464){
var vec__12465 = p__12464;
var k__4408__auto__ = cljs.core.nth.call(null,vec__12465,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__12465,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12458){
var self__ = this;
var G__12458__$1 = this;
return (new cljs.core.RecordIter((0),G__12458__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (324724442 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12460,other12461){
var self__ = this;
var this12460__$1 = this;
return (((!((other12461 == null)))) && ((this12460__$1.constructor === other12461.constructor)) && (cljs.core._EQ_.call(null,this12460__$1.nodeset,other12461.nodeset)) && (cljs.core._EQ_.call(null,this12460__$1.adj,other12461.adj)) && (cljs.core._EQ_.call(null,this12460__$1.in,other12461.in)) && (cljs.core._EQ_.call(null,this12460__$1.__extmap,other12461.__extmap)));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__12458){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__12468 = cljs.core.keyword_identical_QMARK_;
var expr__12469 = k__4393__auto__;
if(cljs.core.truth_(pred__12468.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__12469))){
return (new loom.graph.BasicEditableDigraph(G__12458,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12468.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__12469))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__12458,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12468.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__12469))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__12458,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__12458),null));
}
}
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__12458){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__12458,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.BasicEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableDigraph.cljs$lang$type = true;

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableDigraph",null,(1),null));
});

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.graph/BasicEditableDigraph");
});

/**
 * Positional factory function for loom.graph/BasicEditableDigraph.
 */
loom.graph.__GT_BasicEditableDigraph = (function loom$graph$__GT_BasicEditableDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableDigraph(nodeset,adj,in$,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__12462){
var extmap__4424__auto__ = (function (){var G__12471 = cljs.core.dissoc.call(null,G__12462,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.record_QMARK_.call(null,G__12462)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12471);
} else {
return G__12471;
}
})();
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__12462),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__12462),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__12462),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
loom.graph.BasicEditableWeightedGraph = (function (nodeset,adj,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k12474,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__12478 = k12474;
var G__12478__$1 = (((G__12478 instanceof cljs.core.Keyword))?G__12478.fqn:null);
switch (G__12478__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12474,else__4388__auto__);

}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__12479){
var vec__12480 = p__12479;
var k__4408__auto__ = cljs.core.nth.call(null,vec__12480,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__12480,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12473){
var self__ = this;
var G__12473__$1 = this;
return (new cljs.core.RecordIter((0),G__12473__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-212297308 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12475,other12476){
var self__ = this;
var this12475__$1 = this;
return (((!((other12476 == null)))) && ((this12475__$1.constructor === other12476.constructor)) && (cljs.core._EQ_.call(null,this12475__$1.nodeset,other12476.nodeset)) && (cljs.core._EQ_.call(null,this12475__$1.adj,other12476.adj)) && (cljs.core._EQ_.call(null,this12475__$1.__extmap,other12476.__extmap)));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__12473){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__12483 = cljs.core.keyword_identical_QMARK_;
var expr__12484 = k__4393__auto__;
if(cljs.core.truth_(pred__12483.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__12484))){
return (new loom.graph.BasicEditableWeightedGraph(G__12473,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12483.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__12484))){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__12473,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__12473),null));
}
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__12473){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__12473,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.BasicEditableWeightedGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableWeightedGraph",null,(1),null));
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.graph/BasicEditableWeightedGraph");
});

/**
 * Positional factory function for loom.graph/BasicEditableWeightedGraph.
 */
loom.graph.__GT_BasicEditableWeightedGraph = (function loom$graph$__GT_BasicEditableWeightedGraph(nodeset,adj){
return (new loom.graph.BasicEditableWeightedGraph(nodeset,adj,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableWeightedGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__12477){
var extmap__4424__auto__ = (function (){var G__12486 = cljs.core.dissoc.call(null,G__12477,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196));
if(cljs.core.record_QMARK_.call(null,G__12477)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12486);
} else {
return G__12486;
}
})();
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__12477),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__12477),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
loom.graph.BasicEditableWeightedDigraph = (function (nodeset,adj,in$,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.in$ = in$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k12489,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__12493 = k12489;
var G__12493__$1 = (((G__12493 instanceof cljs.core.Keyword))?G__12493.fqn:null);
switch (G__12493__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
case "in":
return self__.in$;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12489,else__4388__auto__);

}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__12494){
var vec__12495 = p__12494;
var k__4408__auto__ = cljs.core.nth.call(null,vec__12495,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__12495,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12488){
var self__ = this;
var G__12488__$1 = this;
return (new cljs.core.RecordIter((0),G__12488__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1110931322 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12490,other12491){
var self__ = this;
var this12490__$1 = this;
return (((!((other12491 == null)))) && ((this12490__$1.constructor === other12491.constructor)) && (cljs.core._EQ_.call(null,this12490__$1.nodeset,other12491.nodeset)) && (cljs.core._EQ_.call(null,this12490__$1.adj,other12491.adj)) && (cljs.core._EQ_.call(null,this12490__$1.in,other12491.in)) && (cljs.core._EQ_.call(null,this12490__$1.__extmap,other12491.__extmap)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__12488){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__12498 = cljs.core.keyword_identical_QMARK_;
var expr__12499 = k__4393__auto__;
if(cljs.core.truth_(pred__12498.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__12499))){
return (new loom.graph.BasicEditableWeightedDigraph(G__12488,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12498.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__12499))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__12488,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12498.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__12499))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__12488,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__12488),null));
}
}
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__12488){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__12488,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.BasicEditableWeightedDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableWeightedDigraph",null,(1),null));
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.graph/BasicEditableWeightedDigraph");
});

/**
 * Positional factory function for loom.graph/BasicEditableWeightedDigraph.
 */
loom.graph.__GT_BasicEditableWeightedDigraph = (function loom$graph$__GT_BasicEditableWeightedDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableWeightedDigraph(nodeset,adj,in$,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableWeightedDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__12492){
var extmap__4424__auto__ = (function (){var G__12501 = cljs.core.dissoc.call(null,G__12492,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.record_QMARK_.call(null,G__12492)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12501);
} else {
return G__12501;
}
})();
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__12492),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__12492),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__12492),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

/**
 * Weight used when none is given for edges in weighted graphs
 */
loom.graph._STAR_default_weight_STAR_ = (1);
loom.graph.remove_adj_nodes = (function loom$graph$remove_adj_nodes(m,nodes,adjacents,remove_fn){
return cljs.core.reduce.call(null,(function (m__$1,n){
if(cljs.core.truth_(m__$1.call(null,n))){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__12503_SHARP_){
return cljs.core.apply.call(null,remove_fn,p1__12503_SHARP_,nodes);
}));
} else {
return m__$1;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,m,nodes),adjacents);
});
loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12506(s__12507){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12507__$1 = s__12507;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12507__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n1 = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__12507__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__12506_$_iter__12508(s__12509){
return (new cljs.core.LazySeq(null,((function (s__12507__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__12509__$1 = s__12509;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12509__$1);
if(temp__5720__auto____$1){
var s__12509__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12509__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12509__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12511 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12510 = (0);
while(true){
if((i__12510 < size__4522__auto__)){
var e = cljs.core._nth.call(null,c__4521__auto__,i__12510);
cljs.core.chunk_append.call(null,b__12511,e);

var G__12524 = (i__12510 + (1));
i__12510 = G__12524;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12511),loom$graph$iter__12506_$_iter__12508.call(null,cljs.core.chunk_rest.call(null,s__12509__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12511),null);
}
} else {
var e = cljs.core.first.call(null,s__12509__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__12506_$_iter__12508.call(null,cljs.core.rest.call(null,s__12509__$2)));
}
} else {
return null;
}
break;
}
});})(s__12507__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__12507__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$iter__12506.call(null,cljs.core.rest.call(null,s__12507__$1)));
} else {
var G__12525 = cljs.core.rest.call(null,s__12507__$1);
s__12507__$1 = G__12525;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,g__$1));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12512(s__12513){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12513__$1 = s__12513;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12513__$1);
if(temp__5720__auto__){
var s__12513__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12513__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12513__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12515 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12514 = (0);
while(true){
if((i__12514 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__12514);
cljs.core.chunk_append.call(null,b__12515,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__12526 = (i__12514 + (1));
i__12514 = G__12526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12515),loom$graph$iter__12512.call(null,cljs.core.chunk_rest.call(null,s__12513__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12515),null);
}
} else {
var n2 = cljs.core.first.call(null,s__12513__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__12512.call(null,cljs.core.rest.call(null,s__12513__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__12516){
var vec__12517 = p__12516;
var n1 = cljs.core.nth.call(null,vec__12517,(0),null);
var n2 = cljs.core.nth.call(null,vec__12517,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var nbrs = cljs.core.mapcat.call(null,((function (g__$1){
return (function (p1__12504_SHARP_){
return loom.graph.successors.call(null,g__$1,p1__12504_SHARP_);
});})(g__$1))
,nodes);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),((function (nbrs,g__$1){
return (function (p1__12505_SHARP_){
return cljs.core.apply.call(null,cljs.core.disj,p1__12505_SHARP_,nodes);
});})(nbrs,g__$1))
),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,nbrs,cljs.core.disj));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__12520){
var vec__12521 = p__12520;
var n1 = cljs.core.nth.call(null,vec__12521,(0),null);
var n2 = cljs.core.nth.call(null,vec__12521,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});
loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12530(s__12531){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12531__$1 = s__12531;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12531__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n1 = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__12531__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__12530_$_iter__12532(s__12533){
return (new cljs.core.LazySeq(null,((function (s__12531__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__12533__$1 = s__12533;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12533__$1);
if(temp__5720__auto____$1){
var s__12533__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12533__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12533__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12535 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12534 = (0);
while(true){
if((i__12534 < size__4522__auto__)){
var e = cljs.core._nth.call(null,c__4521__auto__,i__12534);
cljs.core.chunk_append.call(null,b__12535,e);

var G__12552 = (i__12534 + (1));
i__12534 = G__12552;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12535),loom$graph$iter__12530_$_iter__12532.call(null,cljs.core.chunk_rest.call(null,s__12533__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12535),null);
}
} else {
var e = cljs.core.first.call(null,s__12533__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__12530_$_iter__12532.call(null,cljs.core.rest.call(null,s__12533__$2)));
}
} else {
return null;
}
break;
}
});})(s__12531__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__12531__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$iter__12530.call(null,cljs.core.rest.call(null,s__12531__$1)));
} else {
var G__12553 = cljs.core.rest.call(null,s__12531__$1);
s__12531__$1 = G__12553;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,g__$1));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12536(s__12537){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12537__$1 = s__12537;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12537__$1);
if(temp__5720__auto__){
var s__12537__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12537__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12537__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12539 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12538 = (0);
while(true){
if((i__12538 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__12538);
cljs.core.chunk_append.call(null,b__12539,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__12554 = (i__12538 + (1));
i__12538 = G__12554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12539),loom$graph$iter__12536.call(null,cljs.core.chunk_rest.call(null,s__12537__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12539),null);
}
} else {
var n2 = cljs.core.first.call(null,s__12537__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__12536.call(null,cljs.core.rest.call(null,s__12537__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__12540){
var vec__12541 = p__12540;
var n1 = cljs.core.nth.call(null,vec__12541,(0),null);
var n2 = cljs.core.nth.call(null,vec__12541,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.call(null,((function (g__$1){
return (function (p1__12527_SHARP_){
return loom.graph.predecessors.call(null,g__$1,p1__12527_SHARP_);
});})(g__$1))
,nodes);
var outs = cljs.core.mapcat.call(null,((function (ins,g__$1){
return (function (p1__12528_SHARP_){
return loom.graph.successors.call(null,g__$1,p1__12528_SHARP_);
});})(ins,g__$1))
,nodes);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),((function (ins,outs,g__$1){
return (function (p1__12529_SHARP_){
return cljs.core.apply.call(null,cljs.core.disj,p1__12529_SHARP_,nodes);
});})(ins,outs,g__$1))
),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,ins,cljs.core.disj)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,outs,cljs.core.disj));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__12544){
var vec__12545 = p__12544;
var n1 = cljs.core.nth.call(null,vec__12545,(0),null);
var n2 = cljs.core.nth.call(null,vec__12545,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null)));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12548(s__12549){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12549__$1 = s__12549;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12549__$1);
if(temp__5720__auto__){
var s__12549__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12549__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12549__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12551 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12550 = (0);
while(true){
if((i__12550 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__12550);
cljs.core.chunk_append.call(null,b__12551,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__12555 = (i__12550 + (1));
i__12550 = G__12555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12551),loom$graph$iter__12548.call(null,cljs.core.chunk_rest.call(null,s__12549__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12551),null);
}
} else {
var n2 = cljs.core.first.call(null,s__12549__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__12548.call(null,cljs.core.rest.call(null,s__12549__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1));
});
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12558(s__12559){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12559__$1 = s__12559;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12559__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n1 = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__12559__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__12558_$_iter__12560(s__12561){
return (new cljs.core.LazySeq(null,((function (s__12559__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__12561__$1 = s__12561;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12561__$1);
if(temp__5720__auto____$1){
var s__12561__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12561__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12561__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12563 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12562 = (0);
while(true){
if((i__12562 < size__4522__auto__)){
var e = cljs.core._nth.call(null,c__4521__auto__,i__12562);
cljs.core.chunk_append.call(null,b__12563,e);

var G__12579 = (i__12562 + (1));
i__12562 = G__12579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12563),loom$graph$iter__12558_$_iter__12560.call(null,cljs.core.chunk_rest.call(null,s__12561__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12563),null);
}
} else {
var e = cljs.core.first.call(null,s__12561__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__12558_$_iter__12560.call(null,cljs.core.rest.call(null,s__12561__$2)));
}
} else {
return null;
}
break;
}
});})(s__12559__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__12559__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$iter__12558.call(null,cljs.core.rest.call(null,s__12559__$1)));
} else {
var G__12580 = cljs.core.rest.call(null,s__12559__$1);
s__12559__$1 = G__12580;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,g__$1));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12564(s__12565){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12565__$1 = s__12565;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12565__$1);
if(temp__5720__auto__){
var s__12565__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12565__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12565__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12567 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12566 = (0);
while(true){
if((i__12566 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__12566);
cljs.core.chunk_append.call(null,b__12567,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__12581 = (i__12566 + (1));
i__12566 = G__12581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12567),loom$graph$iter__12564.call(null,cljs.core.chunk_rest.call(null,s__12565__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12567),null);
}
} else {
var n2 = cljs.core.first.call(null,s__12565__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__12564.call(null,cljs.core.rest.call(null,s__12565__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__12568){
var vec__12569 = p__12568;
var seq__12570 = cljs.core.seq.call(null,vec__12569);
var first__12571 = cljs.core.first.call(null,seq__12570);
var seq__12570__$1 = cljs.core.next.call(null,seq__12570);
var n1 = first__12571;
var first__12571__$1 = cljs.core.first.call(null,seq__12570__$1);
var seq__12570__$2 = cljs.core.next.call(null,seq__12570__$1);
var n2 = first__12571__$1;
var vec__12572 = seq__12570__$2;
var w = cljs.core.nth.call(null,vec__12572,(0),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__4131__auto__ = w;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2,n1], null),(function (){var or__4131__auto__ = w;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})());
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var nbrs = cljs.core.mapcat.call(null,((function (g__$1){
return (function (p1__12556_SHARP_){
return loom.graph.successors.call(null,g__$1,p1__12556_SHARP_);
});})(g__$1))
,nodes);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),((function (nbrs,g__$1){
return (function (p1__12557_SHARP_){
return cljs.core.apply.call(null,cljs.core.disj,p1__12557_SHARP_,nodes);
});})(nbrs,g__$1))
),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,nbrs,cljs.core.dissoc));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__12575){
var vec__12576 = p__12575;
var n1 = cljs.core.nth.call(null,vec__12576,(0),null);
var n2 = cljs.core.nth.call(null,vec__12576,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.dissoc,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.call(null,g__$1,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null));
});
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12585(s__12586){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12586__$1 = s__12586;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12586__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n1 = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__12586__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__12585_$_iter__12587(s__12588){
return (new cljs.core.LazySeq(null,((function (s__12586__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__12588__$1 = s__12588;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12588__$1);
if(temp__5720__auto____$1){
var s__12588__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12588__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12588__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12590 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12589 = (0);
while(true){
if((i__12589 < size__4522__auto__)){
var e = cljs.core._nth.call(null,c__4521__auto__,i__12589);
cljs.core.chunk_append.call(null,b__12590,e);

var G__12614 = (i__12589 + (1));
i__12589 = G__12614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12590),loom$graph$iter__12585_$_iter__12587.call(null,cljs.core.chunk_rest.call(null,s__12588__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12590),null);
}
} else {
var e = cljs.core.first.call(null,s__12588__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__12585_$_iter__12587.call(null,cljs.core.rest.call(null,s__12588__$2)));
}
} else {
return null;
}
break;
}
});})(s__12586__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__12586__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$iter__12585.call(null,cljs.core.rest.call(null,s__12586__$1)));
} else {
var G__12615 = cljs.core.rest.call(null,s__12586__$1);
s__12586__$1 = G__12615;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12591(s__12592){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12592__$1 = s__12592;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12592__$1);
if(temp__5720__auto__){
var s__12592__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12592__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12592__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12594 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12593 = (0);
while(true){
if((i__12593 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__12593);
cljs.core.chunk_append.call(null,b__12594,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__12616 = (i__12593 + (1));
i__12593 = G__12616;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12594),loom$graph$iter__12591.call(null,cljs.core.chunk_rest.call(null,s__12592__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12594),null);
}
} else {
var n2 = cljs.core.first.call(null,s__12592__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__12591.call(null,cljs.core.rest.call(null,s__12592__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__12595){
var vec__12596 = p__12595;
var seq__12597 = cljs.core.seq.call(null,vec__12596);
var first__12598 = cljs.core.first.call(null,seq__12597);
var seq__12597__$1 = cljs.core.next.call(null,seq__12597);
var n1 = first__12598;
var first__12598__$1 = cljs.core.first.call(null,seq__12597__$1);
var seq__12597__$2 = cljs.core.next.call(null,seq__12597__$1);
var n2 = first__12598__$1;
var vec__12599 = seq__12597__$2;
var w = cljs.core.nth.call(null,vec__12599,(0),null);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__4131__auto__ = w;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.call(null,((function (g__$1){
return (function (p1__12582_SHARP_){
return loom.graph.predecessors.call(null,g__$1,p1__12582_SHARP_);
});})(g__$1))
,nodes);
var outs = cljs.core.mapcat.call(null,((function (ins,g__$1){
return (function (p1__12583_SHARP_){
return loom.graph.successors.call(null,g__$1,p1__12583_SHARP_);
});})(ins,g__$1))
,nodes);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),((function (ins,outs,g__$1){
return (function (p1__12584_SHARP_){
return cljs.core.apply.call(null,cljs.core.disj,p1__12584_SHARP_,nodes);
});})(ins,outs,g__$1))
),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,ins,cljs.core.dissoc)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,outs,cljs.core.disj));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__12602){
var vec__12603 = p__12602;
var n1 = cljs.core.nth.call(null,vec__12603,(0),null);
var n2 = cljs.core.nth.call(null,vec__12603,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12606(s__12607){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12607__$1 = s__12607;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12607__$1);
if(temp__5720__auto__){
var s__12607__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12607__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12607__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12609 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12608 = (0);
while(true){
if((i__12608 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__12608);
cljs.core.chunk_append.call(null,b__12609,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__12617 = (i__12608 + (1));
i__12608 = G__12617;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12609),loom$graph$iter__12606.call(null,cljs.core.chunk_rest.call(null,s__12607__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12609),null);
}
} else {
var n2 = cljs.core.first.call(null,s__12607__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__12606.call(null,cljs.core.rest.call(null,s__12607__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (tg,p__12610){
var vec__12611 = p__12610;
var n1 = cljs.core.nth.call(null,vec__12611,(0),null);
var n2 = cljs.core.nth.call(null,vec__12611,(1),null);
return loom.graph.add_edges_STAR_.call(null,tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.call(null,g__$1,n1,n2)], null)], null));
});})(g__$1))
,cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY),loom.graph.edges.call(null,g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.call(null,g__$1,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null));
});
loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12620 = arguments.length;
var i__4731__auto___12621 = (0);
while(true){
if((i__4731__auto___12621 < len__4730__auto___12620)){
args__4736__auto__.push((arguments[i__4731__auto___12621]));

var G__12622 = (i__4731__auto___12621 + (1));
i__4731__auto___12621 = G__12622;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.fn_QMARK_.call(null,f)){
return cljs.core.apply.call(null,f,args);
} else {
return f;
}
});

loom.graph.call_or_return.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.call_or_return.cljs$lang$applyTo = (function (seq12618){
var G__12619 = cljs.core.first.call(null,seq12618);
var seq12618__$1 = cljs.core.next.call(null,seq12618);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12619,seq12618__$1);
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
loom.graph.FlyGraph = (function (fnodes,fedges,fsuccessors,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k12624,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__12628 = k12624;
var G__12628__$1 = (((G__12628 instanceof cljs.core.Keyword))?G__12628.fqn:null);
switch (G__12628__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12624,else__4388__auto__);

}
});

loom.graph.FlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__12629){
var vec__12630 = p__12629;
var k__4408__auto__ = cljs.core.nth.call(null,vec__12630,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__12630,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.FlyGraph{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12623){
var self__ = this;
var G__12623__$1 = this;
return (new cljs.core.RecordIter((0),G__12623__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.graph.FlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1546683162 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12625,other12626){
var self__ = this;
var this12625__$1 = this;
return (((!((other12626 == null)))) && ((this12625__$1.constructor === other12626.constructor)) && (cljs.core._EQ_.call(null,this12625__$1.fnodes,other12626.fnodes)) && (cljs.core._EQ_.call(null,this12625__$1.fedges,other12626.fedges)) && (cljs.core._EQ_.call(null,this12625__$1.fsuccessors,other12626.fsuccessors)) && (cljs.core._EQ_.call(null,this12625__$1.start,other12626.start)) && (cljs.core._EQ_.call(null,this12625__$1.__extmap,other12626.__extmap)));
});

loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__12623){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__12633 = cljs.core.keyword_identical_QMARK_;
var expr__12634 = k__4393__auto__;
if(cljs.core.truth_(pred__12633.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__12634))){
return (new loom.graph.FlyGraph(G__12623,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12633.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__12634))){
return (new loom.graph.FlyGraph(self__.fnodes,G__12623,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12633.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__12634))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__12623,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12633.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__12634))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__12623,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__12623),null));
}
}
}
}
});

loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__12623){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__12623,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.FlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyGraph.cljs$lang$type = true;

loom.graph.FlyGraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/FlyGraph",null,(1),null));
});

loom.graph.FlyGraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.graph/FlyGraph");
});

/**
 * Positional factory function for loom.graph/FlyGraph.
 */
loom.graph.__GT_FlyGraph = (function loom$graph$__GT_FlyGraph(fnodes,fedges,fsuccessors,start){
return (new loom.graph.FlyGraph(fnodes,fedges,fsuccessors,start,null,null,null));
});

/**
 * Factory function for loom.graph/FlyGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__12627){
var extmap__4424__auto__ = (function (){var G__12636 = cljs.core.dissoc.call(null,G__12627,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.record_QMARK_.call(null,G__12627)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12636);
} else {
return G__12636;
}
})();
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__12627),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__12627),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__12627),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__12627),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
loom.graph.FlyDigraph = (function (fnodes,fedges,fsuccessors,fpredecessors,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fpredecessors = fpredecessors;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k12639,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__12643 = k12639;
var G__12643__$1 = (((G__12643 instanceof cljs.core.Keyword))?G__12643.fqn:null);
switch (G__12643__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fpredecessors":
return self__.fpredecessors;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12639,else__4388__auto__);

}
});

loom.graph.FlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__12644){
var vec__12645 = p__12644;
var k__4408__auto__ = cljs.core.nth.call(null,vec__12645,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__12645,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12638){
var self__ = this;
var G__12638__$1 = this;
return (new cljs.core.RecordIter((0),G__12638__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.graph.FlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1981361804 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12640,other12641){
var self__ = this;
var this12640__$1 = this;
return (((!((other12641 == null)))) && ((this12640__$1.constructor === other12641.constructor)) && (cljs.core._EQ_.call(null,this12640__$1.fnodes,other12641.fnodes)) && (cljs.core._EQ_.call(null,this12640__$1.fedges,other12641.fedges)) && (cljs.core._EQ_.call(null,this12640__$1.fsuccessors,other12641.fsuccessors)) && (cljs.core._EQ_.call(null,this12640__$1.fpredecessors,other12641.fpredecessors)) && (cljs.core._EQ_.call(null,this12640__$1.start,other12641.start)) && (cljs.core._EQ_.call(null,this12640__$1.__extmap,other12641.__extmap)));
});

loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__12638){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__12648 = cljs.core.keyword_identical_QMARK_;
var expr__12649 = k__4393__auto__;
if(cljs.core.truth_(pred__12648.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__12649))){
return (new loom.graph.FlyDigraph(G__12638,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12648.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__12649))){
return (new loom.graph.FlyDigraph(self__.fnodes,G__12638,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12648.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__12649))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__12638,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12648.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__12649))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__12638,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12648.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__12649))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__12638,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__12638),null));
}
}
}
}
}
});

loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__12638){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__12638,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.FlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyDigraph.cljs$lang$type = true;

loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/FlyDigraph",null,(1),null));
});

loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.graph/FlyDigraph");
});

/**
 * Positional factory function for loom.graph/FlyDigraph.
 */
loom.graph.__GT_FlyDigraph = (function loom$graph$__GT_FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start){
return (new loom.graph.FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start,null,null,null));
});

/**
 * Factory function for loom.graph/FlyDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__12642){
var extmap__4424__auto__ = (function (){var G__12651 = cljs.core.dissoc.call(null,G__12642,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.record_QMARK_.call(null,G__12642)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12651);
} else {
return G__12651;
}
})();
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__12642),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__12642),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__12642),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__12642),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__12642),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
loom.graph.WeightedFlyGraph = (function (fnodes,fedges,fsuccessors,fweight,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fweight = fweight;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k12654,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__12658 = k12654;
var G__12658__$1 = (((G__12658 instanceof cljs.core.Keyword))?G__12658.fqn:null);
switch (G__12658__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fweight":
return self__.fweight;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12654,else__4388__auto__);

}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__12659){
var vec__12660 = p__12659;
var k__4408__auto__ = cljs.core.nth.call(null,vec__12660,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__12660,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12653){
var self__ = this;
var G__12653__$1 = this;
return (new cljs.core.RecordIter((0),G__12653__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1357917791 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12655,other12656){
var self__ = this;
var this12655__$1 = this;
return (((!((other12656 == null)))) && ((this12655__$1.constructor === other12656.constructor)) && (cljs.core._EQ_.call(null,this12655__$1.fnodes,other12656.fnodes)) && (cljs.core._EQ_.call(null,this12655__$1.fedges,other12656.fedges)) && (cljs.core._EQ_.call(null,this12655__$1.fsuccessors,other12656.fsuccessors)) && (cljs.core._EQ_.call(null,this12655__$1.fweight,other12656.fweight)) && (cljs.core._EQ_.call(null,this12655__$1.start,other12656.start)) && (cljs.core._EQ_.call(null,this12655__$1.__extmap,other12656.__extmap)));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__12653){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__12663 = cljs.core.keyword_identical_QMARK_;
var expr__12664 = k__4393__auto__;
if(cljs.core.truth_(pred__12663.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__12664))){
return (new loom.graph.WeightedFlyGraph(G__12653,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12663.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__12664))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__12653,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12663.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__12664))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__12653,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12663.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__12664))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__12653,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12663.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__12664))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__12653,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__12653),null));
}
}
}
}
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__12653){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__12653,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.WeightedFlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyGraph.cljs$lang$type = true;

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/WeightedFlyGraph",null,(1),null));
});

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.graph/WeightedFlyGraph");
});

/**
 * Positional factory function for loom.graph/WeightedFlyGraph.
 */
loom.graph.__GT_WeightedFlyGraph = (function loom$graph$__GT_WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start){
return (new loom.graph.WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start,null,null,null));
});

/**
 * Factory function for loom.graph/WeightedFlyGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__12657){
var extmap__4424__auto__ = (function (){var G__12666 = cljs.core.dissoc.call(null,G__12657,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.record_QMARK_.call(null,G__12657)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12666);
} else {
return G__12666;
}
})();
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__12657),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__12657),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__12657),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__12657),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__12657),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
loom.graph.WeightedFlyDigraph = (function (fnodes,fedges,fsuccessors,fpredecessors,fweight,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fpredecessors = fpredecessors;
this.fweight = fweight;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k12669,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__12673 = k12669;
var G__12673__$1 = (((G__12673 instanceof cljs.core.Keyword))?G__12673.fqn:null);
switch (G__12673__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fpredecessors":
return self__.fpredecessors;

break;
case "fweight":
return self__.fweight;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12669,else__4388__auto__);

}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__12674){
var vec__12675 = p__12674;
var k__4408__auto__ = cljs.core.nth.call(null,vec__12675,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__12675,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12668){
var self__ = this;
var G__12668__$1 = this;
return (new cljs.core.RecordIter((0),G__12668__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (788097524 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12670,other12671){
var self__ = this;
var this12670__$1 = this;
return (((!((other12671 == null)))) && ((this12670__$1.constructor === other12671.constructor)) && (cljs.core._EQ_.call(null,this12670__$1.fnodes,other12671.fnodes)) && (cljs.core._EQ_.call(null,this12670__$1.fedges,other12671.fedges)) && (cljs.core._EQ_.call(null,this12670__$1.fsuccessors,other12671.fsuccessors)) && (cljs.core._EQ_.call(null,this12670__$1.fpredecessors,other12671.fpredecessors)) && (cljs.core._EQ_.call(null,this12670__$1.fweight,other12671.fweight)) && (cljs.core._EQ_.call(null,this12670__$1.start,other12671.start)) && (cljs.core._EQ_.call(null,this12670__$1.__extmap,other12671.__extmap)));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__12668){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__12678 = cljs.core.keyword_identical_QMARK_;
var expr__12679 = k__4393__auto__;
if(cljs.core.truth_(pred__12678.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__12679))){
return (new loom.graph.WeightedFlyDigraph(G__12668,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12678.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__12679))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__12668,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12678.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__12679))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__12668,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12678.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__12679))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__12668,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12678.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__12679))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__12668,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12678.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__12679))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__12668,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__12668),null));
}
}
}
}
}
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__12668){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__12668,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.WeightedFlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyDigraph.cljs$lang$type = true;

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/WeightedFlyDigraph",null,(1),null));
});

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.graph/WeightedFlyDigraph");
});

/**
 * Positional factory function for loom.graph/WeightedFlyDigraph.
 */
loom.graph.__GT_WeightedFlyDigraph = (function loom$graph$__GT_WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start){
return (new loom.graph.WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start,null,null,null));
});

/**
 * Factory function for loom.graph/WeightedFlyDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__12672){
var extmap__4424__auto__ = (function (){var G__12681 = cljs.core.dissoc.call(null,G__12672,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.record_QMARK_.call(null,G__12672)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__12681);
} else {
return G__12681;
}
})();
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__12672),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__12672),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__12672),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__12672),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__12672),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__12672),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.FlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g__$1),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12683(s__12684){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12684__$1 = s__12684;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12684__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__12684__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__12683_$_iter__12685(s__12686){
return (new cljs.core.LazySeq(null,((function (s__12684__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__12686__$1 = s__12686;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12686__$1);
if(temp__5720__auto____$1){
var s__12686__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12686__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12686__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12688 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12687 = (0);
while(true){
if((i__12687 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__12687);
cljs.core.chunk_append.call(null,b__12688,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__12693 = (i__12687 + (1));
i__12687 = G__12693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12688),loom$graph$iter__12683_$_iter__12685.call(null,cljs.core.chunk_rest.call(null,s__12686__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12688),null);
}
} else {
var nbr = cljs.core.first.call(null,s__12686__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__12683_$_iter__12685.call(null,cljs.core.rest.call(null,s__12686__$2)));
}
} else {
return null;
}
break;
}
});})(s__12684__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__12684__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$iter__12683.call(null,cljs.core.rest.call(null,s__12684__$1)));
} else {
var G__12694 = cljs.core.rest.call(null,s__12684__$1);
s__12684__$1 = G__12694;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12689(s__12690){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12690__$1 = s__12690;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12690__$1);
if(temp__5720__auto__){
var s__12690__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12690__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12690__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12692 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12691 = (0);
while(true){
if((i__12691 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__12691);
cljs.core.chunk_append.call(null,b__12692,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__12695 = (i__12691 + (1));
i__12691 = G__12695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12692),loom$graph$iter__12689.call(null,cljs.core.chunk_rest.call(null,s__12690__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12692),null);
}
} else {
var n2 = cljs.core.first.call(null,s__12690__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__12689.call(null,cljs.core.rest.call(null,s__12690__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges.call(null,g__$1));
});
loom.graph.FlyDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.FlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g__$1),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12696(s__12697){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12697__$1 = s__12697;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12697__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__12697__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__12696_$_iter__12698(s__12699){
return (new cljs.core.LazySeq(null,((function (s__12697__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__12699__$1 = s__12699;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12699__$1);
if(temp__5720__auto____$1){
var s__12699__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12699__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12699__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12701 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12700 = (0);
while(true){
if((i__12700 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__12700);
cljs.core.chunk_append.call(null,b__12701,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__12710 = (i__12700 + (1));
i__12700 = G__12710;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12701),loom$graph$iter__12696_$_iter__12698.call(null,cljs.core.chunk_rest.call(null,s__12699__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12701),null);
}
} else {
var nbr = cljs.core.first.call(null,s__12699__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__12696_$_iter__12698.call(null,cljs.core.rest.call(null,s__12699__$2)));
}
} else {
return null;
}
break;
}
});})(s__12697__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__12697__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$iter__12696.call(null,cljs.core.rest.call(null,s__12697__$1)));
} else {
var G__12711 = cljs.core.rest.call(null,s__12697__$1);
s__12697__$1 = G__12711;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12702(s__12703){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12703__$1 = s__12703;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12703__$1);
if(temp__5720__auto__){
var s__12703__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12703__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12703__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12705 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12704 = (0);
while(true){
if((i__12704 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__12704);
cljs.core.chunk_append.call(null,b__12705,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__12712 = (i__12704 + (1));
i__12704 = G__12712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12705),loom$graph$iter__12702.call(null,cljs.core.chunk_rest.call(null,s__12703__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12705),null);
}
} else {
var n2 = cljs.core.first.call(null,s__12703__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__12702.call(null,cljs.core.rest.call(null,s__12703__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges.call(null,g__$1));
});

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12706(s__12707){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12707__$1 = s__12707;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12707__$1);
if(temp__5720__auto__){
var s__12707__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12707__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12707__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12709 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12708 = (0);
while(true){
if((i__12708 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__12708);
cljs.core.chunk_append.call(null,b__12709,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__12713 = (i__12708 + (1));
i__12708 = G__12713;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12709),loom$graph$iter__12706.call(null,cljs.core.chunk_rest.call(null,s__12707__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12709),null);
}
} else {
var n2 = cljs.core.first.call(null,s__12707__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__12706.call(null,cljs.core.rest.call(null,s__12707__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});
loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g__$1),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12714(s__12715){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12715__$1 = s__12715;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12715__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__12715__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__12714_$_iter__12716(s__12717){
return (new cljs.core.LazySeq(null,((function (s__12715__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__12717__$1 = s__12717;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12717__$1);
if(temp__5720__auto____$1){
var s__12717__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12717__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12717__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12719 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12718 = (0);
while(true){
if((i__12718 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__12718);
cljs.core.chunk_append.call(null,b__12719,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__12724 = (i__12718 + (1));
i__12718 = G__12724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12719),loom$graph$iter__12714_$_iter__12716.call(null,cljs.core.chunk_rest.call(null,s__12717__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12719),null);
}
} else {
var nbr = cljs.core.first.call(null,s__12717__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__12714_$_iter__12716.call(null,cljs.core.rest.call(null,s__12717__$2)));
}
} else {
return null;
}
break;
}
});})(s__12715__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__12715__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$iter__12714.call(null,cljs.core.rest.call(null,s__12715__$1)));
} else {
var G__12725 = cljs.core.rest.call(null,s__12715__$1);
s__12715__$1 = G__12725;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12720(s__12721){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12721__$1 = s__12721;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12721__$1);
if(temp__5720__auto__){
var s__12721__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12721__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12721__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12723 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12722 = (0);
while(true){
if((i__12722 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__12722);
cljs.core.chunk_append.call(null,b__12723,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__12726 = (i__12722 + (1));
i__12722 = G__12726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12723),loom$graph$iter__12720.call(null,cljs.core.chunk_rest.call(null,s__12721__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12723),null);
}
} else {
var n2 = cljs.core.first.call(null,s__12721__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__12720.call(null,cljs.core.rest.call(null,s__12721__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges.call(null,g__$1));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.call(null,g__$1,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(g__$1),n1,n2);
});
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g__$1),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12727(s__12728){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12728__$1 = s__12728;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12728__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__12728__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__12727_$_iter__12729(s__12730){
return (new cljs.core.LazySeq(null,((function (s__12728__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__12730__$1 = s__12730;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12730__$1);
if(temp__5720__auto____$1){
var s__12730__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12730__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12730__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12732 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12731 = (0);
while(true){
if((i__12731 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__12731);
cljs.core.chunk_append.call(null,b__12732,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__12741 = (i__12731 + (1));
i__12731 = G__12741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12732),loom$graph$iter__12727_$_iter__12729.call(null,cljs.core.chunk_rest.call(null,s__12730__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12732),null);
}
} else {
var nbr = cljs.core.first.call(null,s__12730__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__12727_$_iter__12729.call(null,cljs.core.rest.call(null,s__12730__$2)));
}
} else {
return null;
}
break;
}
});})(s__12728__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__12728__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$iter__12727.call(null,cljs.core.rest.call(null,s__12728__$1)));
} else {
var G__12742 = cljs.core.rest.call(null,s__12728__$1);
s__12728__$1 = G__12742;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12733(s__12734){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12734__$1 = s__12734;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12734__$1);
if(temp__5720__auto__){
var s__12734__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12734__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12734__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12736 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12735 = (0);
while(true){
if((i__12735 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__12735);
cljs.core.chunk_append.call(null,b__12736,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__12743 = (i__12735 + (1));
i__12735 = G__12743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12736),loom$graph$iter__12733.call(null,cljs.core.chunk_rest.call(null,s__12734__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12736),null);
}
} else {
var n2 = cljs.core.first.call(null,s__12734__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__12733.call(null,cljs.core.rest.call(null,s__12734__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges.call(null,g__$1));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__12737(s__12738){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__12738__$1 = s__12738;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12738__$1);
if(temp__5720__auto__){
var s__12738__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12738__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12738__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12740 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12739 = (0);
while(true){
if((i__12739 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__12739);
cljs.core.chunk_append.call(null,b__12740,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__12744 = (i__12739 + (1));
i__12739 = G__12744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12740),loom$graph$iter__12737.call(null,cljs.core.chunk_rest.call(null,s__12738__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12740),null);
}
} else {
var n2 = cljs.core.first.call(null,s__12738__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__12737.call(null,cljs.core.rest.call(null,s__12738__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.call(null,g__$1,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(g__$1),n1,n2);
});
/**
 * Returns a graph with only the given nodes
 */
loom.graph.subgraph = (function loom$graph$subgraph(g,ns){
return loom.graph.remove_nodes_STAR_.call(null,g,cljs.core.remove.call(null,cljs.core.set.call(null,ns),loom.graph.nodes.call(null,g)));
});
/**
 * Adds a path of edges connecting the given nodes in order
 */
loom.graph.add_path = (function loom$graph$add_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12747 = arguments.length;
var i__4731__auto___12748 = (0);
while(true){
if((i__4731__auto___12748 < len__4730__auto___12747)){
args__4736__auto__.push((arguments[i__4731__auto___12748]));

var G__12749 = (i__4731__auto___12748 + (1));
i__4731__auto___12748 = G__12749;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),nodes));
});

loom.graph.add_path.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.add_path.cljs$lang$applyTo = (function (seq12745){
var G__12746 = cljs.core.first.call(null,seq12745);
var seq12745__$1 = cljs.core.next.call(null,seq12745);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12746,seq12745__$1);
});

/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12752 = arguments.length;
var i__4731__auto___12753 = (0);
while(true){
if((i__4731__auto___12753 < len__4730__auto___12752)){
args__4736__auto__.push((arguments[i__4731__auto___12753]));

var G__12754 = (i__4731__auto___12753 + (1));
i__4731__auto___12753 = G__12754;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),cljs.core.concat.call(null,nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nodes)], null))));
});

loom.graph.add_cycle.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.add_cycle.cljs$lang$applyTo = (function (seq12750){
var G__12751 = cljs.core.first.call(null,seq12750);
var seq12750__$1 = cljs.core.next.call(null,seq12750);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12751,seq12750__$1);
});

/**
 * Returns true if g satisfies the Graph protocol
 */
loom.graph.graph_QMARK_ = (function loom$graph$graph_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$Graph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.Graph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.Graph,g);
}
});
/**
 * Returns true if g satisfies the Digraph protocol
 */
loom.graph.directed_QMARK_ = (function loom$graph$directed_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$Digraph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.Digraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.Digraph,g);
}
});
/**
 * Returns true if g satisfies the WeightedGraph protocol
 */
loom.graph.weighted_QMARK_ = (function loom$graph$weighted_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$WeightedGraph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.WeightedGraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.WeightedGraph,g);
}
});
/**
 * Returns true if g satisfies the EditableGraph protocol
 */
loom.graph.editable_QMARK_ = (function loom$graph$editable_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$EditableGraph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.EditableGraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.EditableGraph,g);
}
});
/**
 * Builds up a graph (i.e. adds edges and nodes) from any combination of
 *   other graphs, adjacency maps, edges, or nodes.
 */
loom.graph.build_graph = (function loom$graph$build_graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12829 = arguments.length;
var i__4731__auto___12830 = (0);
while(true){
if((i__4731__auto___12830 < len__4730__auto___12829)){
args__4736__auto__.push((arguments[i__4731__auto___12830]));

var G__12831 = (i__4731__auto___12830 + (1));
i__4731__auto___12830 = G__12831;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,inits){
var build = (function loom$graph$build(g__$1,init){
if(loom.graph.graph_QMARK_.call(null,init)){
if(((loom.graph.weighted_QMARK_.call(null,g__$1)) && (loom.graph.weighted_QMARK_.call(null,init)))){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,loom.graph.add_edges,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),(function (){var iter__4523__auto__ = (function loom$graph$build_$_iter__12795(s__12796){
return (new cljs.core.LazySeq(null,(function (){
var s__12796__$1 = s__12796;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12796__$1);
if(temp__5720__auto__){
var s__12796__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12796__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12796__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12798 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12797 = (0);
while(true){
if((i__12797 < size__4522__auto__)){
var vec__12799 = cljs.core._nth.call(null,c__4521__auto__,i__12797);
var n1 = cljs.core.nth.call(null,vec__12799,(0),null);
var n2 = cljs.core.nth.call(null,vec__12799,(1),null);
cljs.core.chunk_append.call(null,b__12798,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null));

var G__12832 = (i__12797 + (1));
i__12797 = G__12832;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12798),loom$graph$build_$_iter__12795.call(null,cljs.core.chunk_rest.call(null,s__12796__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12798),null);
}
} else {
var vec__12802 = cljs.core.first.call(null,s__12796__$2);
var n1 = cljs.core.nth.call(null,vec__12802,(0),null);
var n2 = cljs.core.nth.call(null,vec__12802,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null),loom$graph$build_$_iter__12795.call(null,cljs.core.rest.call(null,s__12796__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,loom.graph.edges.call(null,init));
})()),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
} else {
return cljs.core.assoc.call(null,loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),loom.graph.edges.call(null,init)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
}
} else {
if(cljs.core.map_QMARK_.call(null,init)){
var es = ((cljs.core.map_QMARK_.call(null,cljs.core.val.call(null,cljs.core.first.call(null,init))))?(function (){var iter__4523__auto__ = (function loom$graph$build_$_iter__12805(s__12806){
return (new cljs.core.LazySeq(null,(function (){
var s__12806__$1 = s__12806;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12806__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__12811 = cljs.core.first.call(null,xs__6277__auto__);
var n = cljs.core.nth.call(null,vec__12811,(0),null);
var nbrs = cljs.core.nth.call(null,vec__12811,(1),null);
var iterys__4519__auto__ = ((function (s__12806__$1,vec__12811,n,nbrs,xs__6277__auto__,temp__5720__auto__){
return (function loom$graph$build_$_iter__12805_$_iter__12807(s__12808){
return (new cljs.core.LazySeq(null,((function (s__12806__$1,vec__12811,n,nbrs,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__12808__$1 = s__12808;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12808__$1);
if(temp__5720__auto____$1){
var s__12808__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12808__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12808__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12810 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12809 = (0);
while(true){
if((i__12809 < size__4522__auto__)){
var vec__12814 = cljs.core._nth.call(null,c__4521__auto__,i__12809);
var nbr = cljs.core.nth.call(null,vec__12814,(0),null);
var wt = cljs.core.nth.call(null,vec__12814,(1),null);
cljs.core.chunk_append.call(null,b__12810,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__12833 = (i__12809 + (1));
i__12809 = G__12833;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12810),loom$graph$build_$_iter__12805_$_iter__12807.call(null,cljs.core.chunk_rest.call(null,s__12808__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12810),null);
}
} else {
var vec__12817 = cljs.core.first.call(null,s__12808__$2);
var nbr = cljs.core.nth.call(null,vec__12817,(0),null);
var wt = cljs.core.nth.call(null,vec__12817,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__12805_$_iter__12807.call(null,cljs.core.rest.call(null,s__12808__$2)));
}
} else {
return null;
}
break;
}
});})(s__12806__$1,vec__12811,n,nbrs,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__12806__$1,vec__12811,n,nbrs,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,nbrs));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$build_$_iter__12805.call(null,cljs.core.rest.call(null,s__12806__$1)));
} else {
var G__12834 = cljs.core.rest.call(null,s__12806__$1);
s__12806__$1 = G__12834;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,init);
})():(function (){var iter__4523__auto__ = (function loom$graph$build_$_iter__12820(s__12821){
return (new cljs.core.LazySeq(null,(function (){
var s__12821__$1 = s__12821;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12821__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__12826 = cljs.core.first.call(null,xs__6277__auto__);
var n = cljs.core.nth.call(null,vec__12826,(0),null);
var nbrs = cljs.core.nth.call(null,vec__12826,(1),null);
var iterys__4519__auto__ = ((function (s__12821__$1,vec__12826,n,nbrs,xs__6277__auto__,temp__5720__auto__){
return (function loom$graph$build_$_iter__12820_$_iter__12822(s__12823){
return (new cljs.core.LazySeq(null,((function (s__12821__$1,vec__12826,n,nbrs,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__12823__$1 = s__12823;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12823__$1);
if(temp__5720__auto____$1){
var s__12823__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12823__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__12823__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__12825 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__12824 = (0);
while(true){
if((i__12824 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__12824);
cljs.core.chunk_append.call(null,b__12825,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__12835 = (i__12824 + (1));
i__12824 = G__12835;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12825),loom$graph$build_$_iter__12820_$_iter__12822.call(null,cljs.core.chunk_rest.call(null,s__12823__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12825),null);
}
} else {
var nbr = cljs.core.first.call(null,s__12823__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__12820_$_iter__12822.call(null,cljs.core.rest.call(null,s__12823__$2)));
}
} else {
return null;
}
break;
}
});})(s__12821__$1,vec__12826,n,nbrs,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__12821__$1,vec__12826,n,nbrs,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,nbrs));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$build_$_iter__12820.call(null,cljs.core.rest.call(null,s__12821__$1)));
} else {
var G__12836 = cljs.core.rest.call(null,s__12821__$1);
s__12821__$1 = G__12836;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,init);
})());
return loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,g__$1,cljs.core.keys.call(null,init)),es);
} else {
if(cljs.core.sequential_QMARK_.call(null,init)){
return loom.graph.add_edges.call(null,g__$1,init);
} else {
return loom.graph.add_nodes.call(null,g__$1,init);

}
}
}
});
return cljs.core.reduce.call(null,build,g,inits);
});

loom.graph.build_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.build_graph.cljs$lang$applyTo = (function (seq12759){
var G__12760 = cljs.core.first.call(null,seq12759);
var seq12759__$1 = cljs.core.next.call(null,seq12759);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12760,seq12759__$1);
});

/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12838 = arguments.length;
var i__4731__auto___12839 = (0);
while(true){
if((i__4731__auto___12839 < len__4730__auto___12838)){
args__4736__auto__.push((arguments[i__4731__auto___12839]));

var G__12840 = (i__4731__auto___12839 + (1));
i__4731__auto___12839 = G__12840;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.graph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.graph.graph.cljs$lang$applyTo = (function (seq12837){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12837));
});

/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12842 = arguments.length;
var i__4731__auto___12843 = (0);
while(true){
if((i__4731__auto___12843 < len__4730__auto___12842)){
args__4736__auto__.push((arguments[i__4731__auto___12843]));

var G__12844 = (i__4731__auto___12843 + (1));
i__4731__auto___12843 = G__12844;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.digraph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.graph.digraph.cljs$lang$applyTo = (function (seq12841){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12841));
});

/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12846 = arguments.length;
var i__4731__auto___12847 = (0);
while(true){
if((i__4731__auto___12847 < len__4730__auto___12846)){
args__4736__auto__.push((arguments[i__4731__auto___12847]));

var G__12848 = (i__4731__auto___12847 + (1));
i__4731__auto___12847 = G__12848;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_graph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq12845){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12845));
});

/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12850 = arguments.length;
var i__4731__auto___12851 = (0);
while(true){
if((i__4731__auto___12851 < len__4730__auto___12850)){
args__4736__auto__.push((arguments[i__4731__auto___12851]));

var G__12852 = (i__4731__auto___12851 + (1));
i__4731__auto___12851 = G__12852;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq12849){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12849));
});

/**
 * Creates a read-only, ad-hoc graph which uses the provided functions
 *   to return values for nodes, edges, etc. If any members are not functions,
 *   they will be returned as-is. Edges can be inferred if nodes and
 *   successors are provided. Nodes and edges can be inferred if successors and
 *   start are provided.
 */
loom.graph.fly_graph = (function loom$graph$fly_graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12857 = arguments.length;
var i__4731__auto___12858 = (0);
while(true){
if((i__4731__auto___12858 < len__4730__auto___12857)){
args__4736__auto__.push((arguments[i__4731__auto___12858]));

var G__12859 = (i__4731__auto___12858 + (1));
i__4731__auto___12858 = G__12859;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__12854){
var map__12855 = p__12854;
var map__12855__$1 = (((((!((map__12855 == null))))?(((((map__12855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12855):map__12855);
var nodes = cljs.core.get.call(null,map__12855__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__12855__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.call(null,map__12855__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.call(null,map__12855__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.call(null,map__12855__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.call(null,map__12855__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__4120__auto__ = predecessors;
if(cljs.core.truth_(and__4120__auto__)){
return weight;
} else {
return and__4120__auto__;
}
})())){
return (new loom.graph.WeightedFlyDigraph(nodes,edges,successors,predecessors,weight,start,null,null,null));
} else {
if(cljs.core.truth_(predecessors)){
return (new loom.graph.FlyDigraph(nodes,edges,successors,predecessors,start,null,null,null));
} else {
if(cljs.core.truth_(weight)){
return (new loom.graph.WeightedFlyGraph(nodes,edges,successors,weight,start,null,null,null));
} else {
return (new loom.graph.FlyGraph(nodes,edges,successors,start,null,null,null));

}
}
}
});

loom.graph.fly_graph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.graph.fly_graph.cljs$lang$applyTo = (function (seq12853){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12853));
});


//# sourceMappingURL=graph.js.map?rel=1611075305284
