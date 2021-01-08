// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.synthdef');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('loom.graph');
goog.require('loom.attr');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.synthdef","node-id","fugue.synthdef/node-id",236882213),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
var next_id_26793 = cljs.core.atom.call(null,(0));
fugue.synthdef.make_id = ((function (next_id_26793){
return (function fugue$synthdef$make_id(){
return cljs.core.swap_BANG_.call(null,next_id_26793,cljs.core.inc);
});})(next_id_26793))
;
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
if((typeof fugue !== 'undefined') && (typeof fugue.synthdef !== 'undefined') && (typeof fugue.synthdef.node_spec !== 'undefined')){
} else {
fugue.synthdef.node_spec = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fugue.synthdef","node-spec"),new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.synthdef","nodedef","fugue.synthdef/nodedef",-67860791),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),new cljs.core.Symbol("fugue.synthdef","node-spec","fugue.synthdef/node-spec",-1663925682,null),new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205)),cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("fugue.synthdef","node-spec","fugue.synthdef/node-spec",-1663925682,null),new cljs.core.Var(function(){return fugue.synthdef.node_spec;},new cljs.core.Symbol("fugue.synthdef","node-spec","fugue.synthdef/node-spec",-1663925682,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"fugue.synthdef","fugue.synthdef",830808629,null),new cljs.core.Symbol(null,"node-spec","node-spec",84696793,null),"/home/runner/work/fugue/fugue/src/fugue/synthdef.cljc",20,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(fugue.synthdef.node_spec)?fugue.synthdef.node_spec.cljs$lang$test:null)])),new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205)));
if((typeof fugue !== 'undefined') && (typeof fugue.synthdef !== 'undefined') && (typeof fugue.synthdef.make_node !== 'undefined')){
} else {
fugue.synthdef.make_node = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fugue.synthdef","make-node"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (_,nodedef){
return new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205).cljs$core$IFn$_invoke$arity$1(nodedef);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.synthdef","edge-type","fugue.synthdef/edge-type",-1405902250),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
if((typeof fugue !== 'undefined') && (typeof fugue.synthdef !== 'undefined') && (typeof fugue.synthdef.edge_spec !== 'undefined')){
} else {
fugue.synthdef.edge_spec = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fugue.synthdef","edge-spec"),new cljs.core.Keyword("fugue.synthdef","edge-type","fugue.synthdef/edge-type",-1405902250),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.synthdef","edgedef","fugue.synthdef/edgedef",-1949469533),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),new cljs.core.Symbol("fugue.synthdef","edge-spec","fugue.synthdef/edge-spec",-498853794,null),new cljs.core.Keyword("fugue.synthdef","edge-type","fugue.synthdef/edge-type",-1405902250)),cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("fugue.synthdef","edge-spec","fugue.synthdef/edge-spec",-498853794,null),new cljs.core.Var(function(){return fugue.synthdef.edge_spec;},new cljs.core.Symbol("fugue.synthdef","edge-spec","fugue.synthdef/edge-spec",-498853794,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"fugue.synthdef","fugue.synthdef",830808629,null),new cljs.core.Symbol(null,"edge-spec","edge-spec",175850537,null),"/home/runner/work/fugue/fugue/src/fugue/synthdef.cljc",20,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(fugue.synthdef.edge_spec)?fugue.synthdef.edge_spec.cljs$lang$test:null)])),new cljs.core.Keyword("fugue.synthdef","edge-type","fugue.synthdef/edge-type",-1405902250)));
if((typeof fugue !== 'undefined') && (typeof fugue.synthdef !== 'undefined') && (typeof fugue.synthdef.make_edge !== 'undefined')){
} else {
fugue.synthdef.make_edge = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fugue.synthdef","make-edge"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (edge_type,_,___$1,___$2){
return edge_type;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.synthdef","synthdef","fugue.synthdef/synthdef",291677976),new cljs.core.Symbol("loom.graph","graph?","loom.graph/graph?",-702337780,null),loom.graph.graph_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.synthdef","param-key","fugue.synthdef/param-key",-600069601),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),cljs.core.constantly.call(null,true));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.synthdef","param-val","fugue.synthdef/param-val",-1900246294),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword("fugue.synthdef","synthdef","fugue.synthdef/synthdef",291677976),new cljs.core.Keyword("fugue.synthdef","synthdef","fugue.synthdef/synthdef",291677976),new cljs.core.Keyword("fugue.synthdef","value","fugue.synthdef/value",-1961482790),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.synthdef","synthdef","fugue.synthdef/synthdef",291677976),new cljs.core.Keyword("fugue.synthdef","value","fugue.synthdef/value",-1961482790)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.synthdef","synthdef","fugue.synthdef/synthdef",291677976),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.synthdef","synthdef","fugue.synthdef/synthdef",291677976),cljs.core.constantly.call(null,true)], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.synthdef","param-vals","fugue.synthdef/param-vals",-343009540),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Keyword("fugue.synthdef","param-val","fugue.synthdef/param-val",-1900246294)),cljs.spec.alpha.rep_impl.call(null,new cljs.core.Keyword("fugue.synthdef","param-val","fugue.synthdef/param-val",-1900246294),new cljs.core.Keyword("fugue.synthdef","param-val","fugue.synthdef/param-val",-1900246294)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.synthdef","param-map","fugue.synthdef/param-map",1501018328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("fugue.synthdef","param-key","fugue.synthdef/param-key",-600069601),new cljs.core.Keyword("fugue.synthdef","param-vals","fugue.synthdef/param-vals",-343009540)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("fugue.synthdef","param-key","fugue.synthdef/param-key",-600069601),new cljs.core.Keyword("fugue.synthdef","param-vals","fugue.synthdef/param-vals",-343009540)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.synthdef","param-key","fugue.synthdef/param-key",-600069601),new cljs.core.Keyword("fugue.synthdef","param-vals","fugue.synthdef/param-vals",-343009540)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.synthdef","param-key","fugue.synthdef/param-key",-600069601),new cljs.core.Keyword("fugue.synthdef","param-vals","fugue.synthdef/param-vals",-343009540)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__26794){
return cljs.core.map_QMARK_.call(null,G__26794);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__23107__auto__,v__23108__auto__){
return cljs.core.nth.call(null,v__23108__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("fugue.synthdef","param-key","fugue.synthdef/param-key",-600069601),new cljs.core.Keyword("fugue.synthdef","param-vals","fugue.synthdef/param-vals",-343009540))], null),null));
fugue.synthdef.add_attrs_kv = (function fugue$synthdef$add_attrs_kv(graph,node_or_edge,attrs_map){
return cljs.core.reduce_kv.call(null,(function (g,k,v){
return loom.attr.add_attr.call(null,g,node_or_edge,k,v);
}),graph,attrs_map);
});
fugue.synthdef.outputs = (function fugue$synthdef$outputs(synthdef){
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fugue.synthdef","synthdef","fugue.synthdef/synthdef",291677976),synthdef)){
} else {
throw (new Error("Assert failed: (s/valid? :fugue.synthdef/synthdef synthdef)"));
}

var _PERCENT_ = cljs.core.filter.call(null,(function (node){
return ((cljs.core.empty_QMARK_.call(null,loom.graph.successors.call(null,synthdef,node))) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword("fugue.synthdef","output","fugue.synthdef/output",366914176),new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205).cljs$core$IFn$_invoke$arity$1(loom.attr.attr.call(null,synthdef,node,new cljs.core.Keyword("fugue.synthdef","nodedef","fugue.synthdef/nodedef",-67860791))))));
}),loom.graph.nodes.call(null,synthdef));
if(cljs.spec.alpha.valid_QMARK_.call(null,cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("fugue.synthdef","node-id","fugue.synthdef/node-id",236882213),new cljs.core.Keyword("fugue.synthdef","node-id","fugue.synthdef/node-id",236882213),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),((function (_PERCENT_){
return (function (G__26795){
return cljs.core.coll_QMARK_.call(null,G__26795);
});})(_PERCENT_))
,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("fugue.synthdef","node-id","fugue.synthdef/node-id",236882213))], null),null),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? (s/coll-of :fugue.synthdef/node-id) %)"));
}

return _PERCENT_;
});
/**
 * The default digraph constructor overrides edge attrs
 */
fugue.synthdef.merge_graphs = (function fugue$synthdef$merge_graphs(g1,g2){
return cljs.core.reduce.call(null,(function (g,edge){
return fugue.synthdef.add_attrs_kv.call(null,g,edge,cljs.core.merge.call(null,loom.attr.attrs.call(null,g1,edge),loom.attr.attrs.call(null,g2,edge)));
}),loom.graph.digraph.call(null,g1,g2),cljs.core.concat.call(null,loom.graph.edges.call(null,g1),loom.graph.edges.call(null,g2)));
});
if((typeof fugue !== 'undefined') && (typeof fugue.synthdef !== 'undefined') && (typeof fugue.synthdef.add_param !== 'undefined')){
} else {
fugue.synthdef.add_param = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fugue.synthdef","add-param"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (_,___$1,___$2,param_val){
return cljs.core.first.call(null,cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("fugue.synthdef","param-val","fugue.synthdef/param-val",-1900246294),param_val));
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,fugue.synthdef.add_param,new cljs.core.Keyword("fugue.synthdef","value","fugue.synthdef/value",-1961482790),(function (graph,node,param_name,param_val){
var old_sparams = loom.attr.attr.call(null,graph,node,new cljs.core.Keyword("fugue.synthdef","static-params","fugue.synthdef/static-params",-2134943037));
var new_sparams = cljs.core.assoc.call(null,old_sparams,param_name,param_val);
return loom.attr.add_attr.call(null,graph,node,new cljs.core.Keyword("fugue.synthdef","static-params","fugue.synthdef/static-params",-2134943037),new_sparams);
}));
cljs.core._add_method.call(null,fugue.synthdef.add_param,new cljs.core.Keyword("fugue.synthdef","synthdef","fugue.synthdef/synthdef",291677976),(function (graph,node,param_key,param_val){
var new_edges = cljs.core.map.call(null,(function (p1__26796_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__26796_SHARP_,node],null));
}),fugue.synthdef.outputs.call(null,param_val));
return loom.attr.add_attr_to_edges.call(null,cljs.core.apply.call(null,loom.graph.add_edges,fugue.synthdef.merge_graphs.call(null,graph,param_val),new_edges),new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252),param_key,new_edges);
}));
fugue.synthdef.add_params = (function fugue$synthdef$add_params(graph,node,params){
return cljs.core.reduce_kv.call(null,(function (g,param_name,param_vals){
return cljs.core.reduce.call(null,(function (g__$1,param_val){
return fugue.synthdef.add_param.call(null,g__$1,node,param_name,param_val);
}),g,param_vals);
}),graph,params);
});
/**
 * Produces a synthdef from a single nodedef and a map of params, whose values
 *   may be synthdefs themselves
 */
fugue.synthdef.synthdef = (function fugue$synthdef$synthdef(nodedef,params){
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fugue.synthdef","nodedef","fugue.synthdef/nodedef",-67860791),nodedef)){
} else {
throw (new Error("Assert failed: (s/valid? :fugue.synthdef/nodedef nodedef)"));
}

if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fugue.synthdef","param-map","fugue.synthdef/param-map",1501018328),params)){
} else {
throw (new Error("Assert failed: (s/valid? :fugue.synthdef/param-map params)"));
}

var _PERCENT_ = (function (){var id = fugue.synthdef.make_id.call(null);
return fugue.synthdef.add_params.call(null,fugue.synthdef.add_attrs_kv.call(null,loom.graph.digraph.call(null,id),id,nodedef),id,params);
})();
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fugue.synthdef","synthdef","fugue.synthdef/synthdef",291677976),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :fugue.synthdef/synthdef %)"));
}

return _PERCENT_;
});
fugue.synthdef.node_builder = (function fugue$synthdef$node_builder(ctx,synthdef){
return (function (id){
return fugue.synthdef.make_node.call(null,ctx,loom.attr.attrs.call(null,synthdef,id));
});
});
fugue.synthdef.mapped_to = (function fugue$synthdef$mapped_to(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,f)),coll);
});
/**
 * Builds the synth defined by synthdef in ctx, calling make-node and make-edge
 */
fugue.synthdef.make_synth = (function fugue$synthdef$make_synth(ctx,synthdef){
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fugue.synthdef","synthdef","fugue.synthdef/synthdef",291677976),synthdef)){
} else {
throw (new Error("Assert failed: (s/valid? :fugue.synthdef/synthdef synthdef)"));
}

var nodes_by_id = fugue.synthdef.mapped_to.call(null,fugue.synthdef.node_builder.call(null,ctx,synthdef),loom.graph.nodes.call(null,synthdef));
var seq__26798_26816 = cljs.core.seq.call(null,loom.graph.edges.call(null,synthdef));
var chunk__26800_26817 = null;
var count__26801_26818 = (0);
var i__26802_26819 = (0);
while(true){
if((i__26802_26819 < count__26801_26818)){
var edge_26820 = cljs.core._nth.call(null,chunk__26800_26817,i__26802_26819);
var edge_type_26821 = cljs.core.map.call(null,((function (seq__26798_26816,chunk__26800_26817,count__26801_26818,i__26802_26819,edge_26820,nodes_by_id){
return (function (p1__26797_SHARP_){
return loom.attr.attr.call(null,synthdef,p1__26797_SHARP_,new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205));
});})(seq__26798_26816,chunk__26800_26817,count__26801_26818,i__26802_26819,edge_26820,nodes_by_id))
,edge_26820);
var vec__26810_26822 = cljs.core.map.call(null,nodes_by_id,edge_26820);
var src_26823 = cljs.core.nth.call(null,vec__26810_26822,(0),null);
var dest_26824 = cljs.core.nth.call(null,vec__26810_26822,(1),null);
var edge_attrs_26825 = loom.attr.attrs.call(null,synthdef,edge_26820);
fugue.synthdef.make_edge.call(null,edge_type_26821,src_26823,dest_26824,edge_attrs_26825);


var G__26826 = seq__26798_26816;
var G__26827 = chunk__26800_26817;
var G__26828 = count__26801_26818;
var G__26829 = (i__26802_26819 + (1));
seq__26798_26816 = G__26826;
chunk__26800_26817 = G__26827;
count__26801_26818 = G__26828;
i__26802_26819 = G__26829;
continue;
} else {
var temp__5720__auto___26830 = cljs.core.seq.call(null,seq__26798_26816);
if(temp__5720__auto___26830){
var seq__26798_26831__$1 = temp__5720__auto___26830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26798_26831__$1)){
var c__4550__auto___26832 = cljs.core.chunk_first.call(null,seq__26798_26831__$1);
var G__26833 = cljs.core.chunk_rest.call(null,seq__26798_26831__$1);
var G__26834 = c__4550__auto___26832;
var G__26835 = cljs.core.count.call(null,c__4550__auto___26832);
var G__26836 = (0);
seq__26798_26816 = G__26833;
chunk__26800_26817 = G__26834;
count__26801_26818 = G__26835;
i__26802_26819 = G__26836;
continue;
} else {
var edge_26837 = cljs.core.first.call(null,seq__26798_26831__$1);
var edge_type_26838 = cljs.core.map.call(null,((function (seq__26798_26816,chunk__26800_26817,count__26801_26818,i__26802_26819,edge_26837,seq__26798_26831__$1,temp__5720__auto___26830,nodes_by_id){
return (function (p1__26797_SHARP_){
return loom.attr.attr.call(null,synthdef,p1__26797_SHARP_,new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205));
});})(seq__26798_26816,chunk__26800_26817,count__26801_26818,i__26802_26819,edge_26837,seq__26798_26831__$1,temp__5720__auto___26830,nodes_by_id))
,edge_26837);
var vec__26813_26839 = cljs.core.map.call(null,nodes_by_id,edge_26837);
var src_26840 = cljs.core.nth.call(null,vec__26813_26839,(0),null);
var dest_26841 = cljs.core.nth.call(null,vec__26813_26839,(1),null);
var edge_attrs_26842 = loom.attr.attrs.call(null,synthdef,edge_26837);
fugue.synthdef.make_edge.call(null,edge_type_26838,src_26840,dest_26841,edge_attrs_26842);


var G__26843 = cljs.core.next.call(null,seq__26798_26831__$1);
var G__26844 = null;
var G__26845 = (0);
var G__26846 = (0);
seq__26798_26816 = G__26843;
chunk__26800_26817 = G__26844;
count__26801_26818 = G__26845;
i__26802_26819 = G__26846;
continue;
}
} else {
}
}
break;
}

return nodes_by_id;
});

//# sourceMappingURL=synthdef.js.map?rel=1610145017443
