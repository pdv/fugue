// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.synthdef');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('loom.graph');
goog.require('loom.attr');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.synthdef","node-id","webcv.synthdef/node-id",2008707844),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
var next_id_35477 = cljs.core.atom.call(null,(0));
webcv.synthdef.make_id = ((function (next_id_35477){
return (function webcv$synthdef$make_id(){
return cljs.core.swap_BANG_.call(null,next_id_35477,cljs.core.inc);
});})(next_id_35477))
;
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
if((typeof webcv !== 'undefined') && (typeof webcv.synthdef !== 'undefined') && (typeof webcv.synthdef.node_spec !== 'undefined')){
} else {
webcv.synthdef.node_spec = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"webcv.synthdef","node-spec"),new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.synthdef","nodedef","webcv.synthdef/nodedef",1251399852),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),new cljs.core.Symbol("webcv.synthdef","node-spec","webcv.synthdef/node-spec",1387322409,null),new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122)),cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("webcv.synthdef","node-spec","webcv.synthdef/node-spec",1387322409,null),new cljs.core.Var(function(){return webcv.synthdef.node_spec;},new cljs.core.Symbol("webcv.synthdef","node-spec","webcv.synthdef/node-spec",1387322409,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webcv.synthdef","webcv.synthdef",539535764,null),new cljs.core.Symbol(null,"node-spec","node-spec",84696793,null),"/home/runner/work/webcv/webcv/src/webcv/synthdef.cljc",20,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(webcv.synthdef.node_spec)?webcv.synthdef.node_spec.cljs$lang$test:null)])),new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122)));
if((typeof webcv !== 'undefined') && (typeof webcv.synthdef !== 'undefined') && (typeof webcv.synthdef.make_node !== 'undefined')){
} else {
webcv.synthdef.make_node = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"webcv.synthdef","make-node"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (_,nodedef){
return new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122).cljs$core$IFn$_invoke$arity$1(nodedef);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.synthdef","edge-type","webcv.synthdef/edge-type",-233704395),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
if((typeof webcv !== 'undefined') && (typeof webcv.synthdef !== 'undefined') && (typeof webcv.synthdef.edge_spec !== 'undefined')){
} else {
webcv.synthdef.edge_spec = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"webcv.synthdef","edge-spec"),new cljs.core.Keyword("webcv.synthdef","edge-type","webcv.synthdef/edge-type",-233704395),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.synthdef","edgedef","webcv.synthdef/edgedef",1513013886),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),new cljs.core.Symbol("webcv.synthdef","edge-spec","webcv.synthdef/edge-spec",1344785081,null),new cljs.core.Keyword("webcv.synthdef","edge-type","webcv.synthdef/edge-type",-233704395)),cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("webcv.synthdef","edge-spec","webcv.synthdef/edge-spec",1344785081,null),new cljs.core.Var(function(){return webcv.synthdef.edge_spec;},new cljs.core.Symbol("webcv.synthdef","edge-spec","webcv.synthdef/edge-spec",1344785081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webcv.synthdef","webcv.synthdef",539535764,null),new cljs.core.Symbol(null,"edge-spec","edge-spec",175850537,null),"/home/runner/work/webcv/webcv/src/webcv/synthdef.cljc",20,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(webcv.synthdef.edge_spec)?webcv.synthdef.edge_spec.cljs$lang$test:null)])),new cljs.core.Keyword("webcv.synthdef","edge-type","webcv.synthdef/edge-type",-233704395)));
if((typeof webcv !== 'undefined') && (typeof webcv.synthdef !== 'undefined') && (typeof webcv.synthdef.make_edge !== 'undefined')){
} else {
webcv.synthdef.make_edge = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"webcv.synthdef","make-edge"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (edge_type,_,___$1,___$2){
return edge_type;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.synthdef","synthdef","webcv.synthdef/synthdef",1665199413),new cljs.core.Symbol("loom.graph","graph?","loom.graph/graph?",-702337780,null),loom.graph.graph_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.synthdef","param-key","webcv.synthdef/param-key",173661182),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),cljs.core.constantly.call(null,true));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.synthdef","param-val","webcv.synthdef/param-val",1293959561),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword("webcv.synthdef","synthdef","webcv.synthdef/synthdef",1665199413),new cljs.core.Keyword("webcv.synthdef","synthdef","webcv.synthdef/synthdef",1665199413),new cljs.core.Keyword("webcv.synthdef","value","webcv.synthdef/value",1559263225),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.synthdef","synthdef","webcv.synthdef/synthdef",1665199413),new cljs.core.Keyword("webcv.synthdef","value","webcv.synthdef/value",1559263225)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.synthdef","synthdef","webcv.synthdef/synthdef",1665199413),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.synthdef","synthdef","webcv.synthdef/synthdef",1665199413),cljs.core.constantly.call(null,true)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.synthdef","param-vals","webcv.synthdef/param-vals",560971097),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Keyword("webcv.synthdef","param-val","webcv.synthdef/param-val",1293959561)),cljs.spec.alpha.rep_impl.call(null,new cljs.core.Keyword("webcv.synthdef","param-val","webcv.synthdef/param-val",1293959561),new cljs.core.Keyword("webcv.synthdef","param-val","webcv.synthdef/param-val",1293959561)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.synthdef","param-map","webcv.synthdef/param-map",-1816806607),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("webcv.synthdef","param-key","webcv.synthdef/param-key",173661182),new cljs.core.Keyword("webcv.synthdef","param-vals","webcv.synthdef/param-vals",560971097)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("webcv.synthdef","param-key","webcv.synthdef/param-key",173661182),new cljs.core.Keyword("webcv.synthdef","param-vals","webcv.synthdef/param-vals",560971097)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.synthdef","param-key","webcv.synthdef/param-key",173661182),new cljs.core.Keyword("webcv.synthdef","param-vals","webcv.synthdef/param-vals",560971097)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.synthdef","param-key","webcv.synthdef/param-key",173661182),new cljs.core.Keyword("webcv.synthdef","param-vals","webcv.synthdef/param-vals",560971097)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__35478){
return cljs.core.map_QMARK_.call(null,G__35478);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__23095__auto__,v__23096__auto__){
return cljs.core.nth.call(null,v__23096__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("webcv.synthdef","param-key","webcv.synthdef/param-key",173661182),new cljs.core.Keyword("webcv.synthdef","param-vals","webcv.synthdef/param-vals",560971097))], null),null));
webcv.synthdef.add_attrs_kv = (function webcv$synthdef$add_attrs_kv(graph,node_or_edge,attrs_map){
return cljs.core.reduce_kv.call(null,(function (g,k,v){
return loom.attr.add_attr.call(null,g,node_or_edge,k,v);
}),graph,attrs_map);
});
webcv.synthdef.outputs = (function webcv$synthdef$outputs(synthdef){
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("webcv.synthdef","synthdef","webcv.synthdef/synthdef",1665199413),synthdef)){
} else {
throw (new Error("Assert failed: (s/valid? :webcv.synthdef/synthdef synthdef)"));
}

var _PERCENT_ = cljs.core.filter.call(null,(function (node){
return ((cljs.core.empty_QMARK_.call(null,loom.graph.successors.call(null,synthdef,node))) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword("webcv.synthdef","output","webcv.synthdef/output",1136213085),new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122).cljs$core$IFn$_invoke$arity$1(loom.attr.attr.call(null,synthdef,node,new cljs.core.Keyword("webcv.synthdef","nodedef","webcv.synthdef/nodedef",1251399852))))));
}),loom.graph.nodes.call(null,synthdef));
if(cljs.spec.alpha.valid_QMARK_.call(null,cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("webcv.synthdef","node-id","webcv.synthdef/node-id",2008707844),new cljs.core.Keyword("webcv.synthdef","node-id","webcv.synthdef/node-id",2008707844),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),((function (_PERCENT_){
return (function (G__35479){
return cljs.core.coll_QMARK_.call(null,G__35479);
});})(_PERCENT_))
,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("webcv.synthdef","node-id","webcv.synthdef/node-id",2008707844))], null),null),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? (s/coll-of :webcv.synthdef/node-id) %)"));
}

return _PERCENT_;
});
/**
 * The default digraph constructor overrides edge attrs
 */
webcv.synthdef.merge_graphs = (function webcv$synthdef$merge_graphs(g1,g2){
return cljs.core.reduce.call(null,(function (g,edge){
return webcv.synthdef.add_attrs_kv.call(null,g,edge,cljs.core.merge.call(null,loom.attr.attrs.call(null,g1,edge),loom.attr.attrs.call(null,g2,edge)));
}),loom.graph.digraph.call(null,g1,g2),cljs.core.concat.call(null,loom.graph.edges.call(null,g1),loom.graph.edges.call(null,g2)));
});
if((typeof webcv !== 'undefined') && (typeof webcv.synthdef !== 'undefined') && (typeof webcv.synthdef.add_param !== 'undefined')){
} else {
webcv.synthdef.add_param = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"webcv.synthdef","add-param"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (_,___$1,___$2,param_val){
return cljs.core.first.call(null,cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("webcv.synthdef","param-val","webcv.synthdef/param-val",1293959561),param_val));
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,webcv.synthdef.add_param,new cljs.core.Keyword("webcv.synthdef","value","webcv.synthdef/value",1559263225),(function (graph,node,param_name,param_val){
var old_sparams = loom.attr.attr.call(null,graph,node,new cljs.core.Keyword("webcv.synthdef","static-params","webcv.synthdef/static-params",-622811484));
var new_sparams = cljs.core.assoc.call(null,old_sparams,param_name,param_val);
return loom.attr.add_attr.call(null,graph,node,new cljs.core.Keyword("webcv.synthdef","static-params","webcv.synthdef/static-params",-622811484),new_sparams);
}));
cljs.core._add_method.call(null,webcv.synthdef.add_param,new cljs.core.Keyword("webcv.synthdef","synthdef","webcv.synthdef/synthdef",1665199413),(function (graph,node,param_key,param_val){
var new_edges = cljs.core.map.call(null,(function (p1__35480_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__35480_SHARP_,node],null));
}),webcv.synthdef.outputs.call(null,param_val));
return loom.attr.add_attr_to_edges.call(null,cljs.core.apply.call(null,loom.graph.add_edges,webcv.synthdef.merge_graphs.call(null,graph,param_val),new_edges),new cljs.core.Keyword("webcv.synthdef","param-name","webcv.synthdef/param-name",-328756077),param_key,new_edges);
}));
webcv.synthdef.add_params = (function webcv$synthdef$add_params(graph,node,params){
return cljs.core.reduce_kv.call(null,(function (g,param_name,param_vals){
return cljs.core.reduce.call(null,(function (g__$1,param_val){
return webcv.synthdef.add_param.call(null,g__$1,node,param_name,param_val);
}),g,param_vals);
}),graph,params);
});
/**
 * Produces a synthdef from a single nodedef and a map of params, whose values
 *   may be synthdefs themselves
 */
webcv.synthdef.synthdef = (function webcv$synthdef$synthdef(nodedef,params){
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("webcv.synthdef","nodedef","webcv.synthdef/nodedef",1251399852),nodedef)){
} else {
throw (new Error("Assert failed: (s/valid? :webcv.synthdef/nodedef nodedef)"));
}

if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("webcv.synthdef","param-map","webcv.synthdef/param-map",-1816806607),params)){
} else {
throw (new Error("Assert failed: (s/valid? :webcv.synthdef/param-map params)"));
}

var _PERCENT_ = (function (){var id = webcv.synthdef.make_id.call(null);
return webcv.synthdef.add_params.call(null,webcv.synthdef.add_attrs_kv.call(null,loom.graph.digraph.call(null,id),id,nodedef),id,params);
})();
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("webcv.synthdef","synthdef","webcv.synthdef/synthdef",1665199413),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :webcv.synthdef/synthdef %)"));
}

return _PERCENT_;
});
webcv.synthdef.node_builder = (function webcv$synthdef$node_builder(ctx,synthdef){
return (function (id){
return webcv.synthdef.make_node.call(null,ctx,loom.attr.attrs.call(null,synthdef,id));
});
});
webcv.synthdef.mapped_to = (function webcv$synthdef$mapped_to(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,f)),coll);
});
/**
 * Builds the synth defined by synthdef in ctx, calling make-node and make-edge
 */
webcv.synthdef.make_synth = (function webcv$synthdef$make_synth(ctx,synthdef){
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("webcv.synthdef","synthdef","webcv.synthdef/synthdef",1665199413),synthdef)){
} else {
throw (new Error("Assert failed: (s/valid? :webcv.synthdef/synthdef synthdef)"));
}

var nodes_by_id = webcv.synthdef.mapped_to.call(null,webcv.synthdef.node_builder.call(null,ctx,synthdef),loom.graph.nodes.call(null,synthdef));
var seq__35482_35500 = cljs.core.seq.call(null,loom.graph.edges.call(null,synthdef));
var chunk__35484_35501 = null;
var count__35485_35502 = (0);
var i__35486_35503 = (0);
while(true){
if((i__35486_35503 < count__35485_35502)){
var edge_35504 = cljs.core._nth.call(null,chunk__35484_35501,i__35486_35503);
var edge_type_35505 = cljs.core.map.call(null,((function (seq__35482_35500,chunk__35484_35501,count__35485_35502,i__35486_35503,edge_35504,nodes_by_id){
return (function (p1__35481_SHARP_){
return loom.attr.attr.call(null,synthdef,p1__35481_SHARP_,new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122));
});})(seq__35482_35500,chunk__35484_35501,count__35485_35502,i__35486_35503,edge_35504,nodes_by_id))
,edge_35504);
var vec__35494_35506 = cljs.core.map.call(null,nodes_by_id,edge_35504);
var src_35507 = cljs.core.nth.call(null,vec__35494_35506,(0),null);
var dest_35508 = cljs.core.nth.call(null,vec__35494_35506,(1),null);
var edge_attrs_35509 = loom.attr.attrs.call(null,synthdef,edge_35504);
webcv.synthdef.make_edge.call(null,edge_type_35505,src_35507,dest_35508,edge_attrs_35509);


var G__35510 = seq__35482_35500;
var G__35511 = chunk__35484_35501;
var G__35512 = count__35485_35502;
var G__35513 = (i__35486_35503 + (1));
seq__35482_35500 = G__35510;
chunk__35484_35501 = G__35511;
count__35485_35502 = G__35512;
i__35486_35503 = G__35513;
continue;
} else {
var temp__5720__auto___35514 = cljs.core.seq.call(null,seq__35482_35500);
if(temp__5720__auto___35514){
var seq__35482_35515__$1 = temp__5720__auto___35514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35482_35515__$1)){
var c__4550__auto___35516 = cljs.core.chunk_first.call(null,seq__35482_35515__$1);
var G__35517 = cljs.core.chunk_rest.call(null,seq__35482_35515__$1);
var G__35518 = c__4550__auto___35516;
var G__35519 = cljs.core.count.call(null,c__4550__auto___35516);
var G__35520 = (0);
seq__35482_35500 = G__35517;
chunk__35484_35501 = G__35518;
count__35485_35502 = G__35519;
i__35486_35503 = G__35520;
continue;
} else {
var edge_35521 = cljs.core.first.call(null,seq__35482_35515__$1);
var edge_type_35522 = cljs.core.map.call(null,((function (seq__35482_35500,chunk__35484_35501,count__35485_35502,i__35486_35503,edge_35521,seq__35482_35515__$1,temp__5720__auto___35514,nodes_by_id){
return (function (p1__35481_SHARP_){
return loom.attr.attr.call(null,synthdef,p1__35481_SHARP_,new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122));
});})(seq__35482_35500,chunk__35484_35501,count__35485_35502,i__35486_35503,edge_35521,seq__35482_35515__$1,temp__5720__auto___35514,nodes_by_id))
,edge_35521);
var vec__35497_35523 = cljs.core.map.call(null,nodes_by_id,edge_35521);
var src_35524 = cljs.core.nth.call(null,vec__35497_35523,(0),null);
var dest_35525 = cljs.core.nth.call(null,vec__35497_35523,(1),null);
var edge_attrs_35526 = loom.attr.attrs.call(null,synthdef,edge_35521);
webcv.synthdef.make_edge.call(null,edge_type_35522,src_35524,dest_35525,edge_attrs_35526);


var G__35527 = cljs.core.next.call(null,seq__35482_35515__$1);
var G__35528 = null;
var G__35529 = (0);
var G__35530 = (0);
seq__35482_35500 = G__35527;
chunk__35484_35501 = G__35528;
count__35485_35502 = G__35529;
i__35486_35503 = G__35530;
continue;
}
} else {
}
}
break;
}

return nodes_by_id;
});

//# sourceMappingURL=synthdef.js.map?rel=1601347616324
