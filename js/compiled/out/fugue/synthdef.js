// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.synthdef');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('loom.graph');
goog.require('loom.attr');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.synthdef","node-id","fugue.synthdef/node-id",236882213),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
var next_id_6582 = cljs.core.atom.call(null,(0));
fugue.synthdef.make_id = ((function (next_id_6582){
return (function fugue$synthdef$make_id(){
return cljs.core.swap_BANG_.call(null,next_id_6582,cljs.core.inc);
});})(next_id_6582))
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
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.synthdef","param-map","fugue.synthdef/param-map",1501018328),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("fugue.synthdef","param-key","fugue.synthdef/param-key",-600069601),new cljs.core.Keyword("fugue.synthdef","param-vals","fugue.synthdef/param-vals",-343009540)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("fugue.synthdef","param-key","fugue.synthdef/param-key",-600069601),new cljs.core.Keyword("fugue.synthdef","param-vals","fugue.synthdef/param-vals",-343009540)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.synthdef","param-key","fugue.synthdef/param-key",-600069601),new cljs.core.Keyword("fugue.synthdef","param-vals","fugue.synthdef/param-vals",-343009540)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.synthdef","param-key","fugue.synthdef/param-key",-600069601),new cljs.core.Keyword("fugue.synthdef","param-vals","fugue.synthdef/param-vals",-343009540)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__6583){
return cljs.core.map_QMARK_.call(null,G__6583);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__2896__auto__,v__2897__auto__){
return cljs.core.nth.call(null,v__2897__auto__,(0));
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
return (function (G__6584){
return cljs.core.coll_QMARK_.call(null,G__6584);
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
var new_edges = cljs.core.map.call(null,(function (p1__6585_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__6585_SHARP_,node],null));
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
var seq__6587_6605 = cljs.core.seq.call(null,loom.graph.edges.call(null,synthdef));
var chunk__6589_6606 = null;
var count__6590_6607 = (0);
var i__6591_6608 = (0);
while(true){
if((i__6591_6608 < count__6590_6607)){
var edge_6609 = cljs.core._nth.call(null,chunk__6589_6606,i__6591_6608);
var edge_type_6610 = cljs.core.map.call(null,((function (seq__6587_6605,chunk__6589_6606,count__6590_6607,i__6591_6608,edge_6609,nodes_by_id){
return (function (p1__6586_SHARP_){
return loom.attr.attr.call(null,synthdef,p1__6586_SHARP_,new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205));
});})(seq__6587_6605,chunk__6589_6606,count__6590_6607,i__6591_6608,edge_6609,nodes_by_id))
,edge_6609);
var vec__6599_6611 = cljs.core.map.call(null,nodes_by_id,edge_6609);
var src_6612 = cljs.core.nth.call(null,vec__6599_6611,(0),null);
var dest_6613 = cljs.core.nth.call(null,vec__6599_6611,(1),null);
var edge_attrs_6614 = loom.attr.attrs.call(null,synthdef,edge_6609);
fugue.synthdef.make_edge.call(null,edge_type_6610,src_6612,dest_6613,edge_attrs_6614);


var G__6615 = seq__6587_6605;
var G__6616 = chunk__6589_6606;
var G__6617 = count__6590_6607;
var G__6618 = (i__6591_6608 + (1));
seq__6587_6605 = G__6615;
chunk__6589_6606 = G__6616;
count__6590_6607 = G__6617;
i__6591_6608 = G__6618;
continue;
} else {
var temp__5720__auto___6619 = cljs.core.seq.call(null,seq__6587_6605);
if(temp__5720__auto___6619){
var seq__6587_6620__$1 = temp__5720__auto___6619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6587_6620__$1)){
var c__4550__auto___6621 = cljs.core.chunk_first.call(null,seq__6587_6620__$1);
var G__6622 = cljs.core.chunk_rest.call(null,seq__6587_6620__$1);
var G__6623 = c__4550__auto___6621;
var G__6624 = cljs.core.count.call(null,c__4550__auto___6621);
var G__6625 = (0);
seq__6587_6605 = G__6622;
chunk__6589_6606 = G__6623;
count__6590_6607 = G__6624;
i__6591_6608 = G__6625;
continue;
} else {
var edge_6626 = cljs.core.first.call(null,seq__6587_6620__$1);
var edge_type_6627 = cljs.core.map.call(null,((function (seq__6587_6605,chunk__6589_6606,count__6590_6607,i__6591_6608,edge_6626,seq__6587_6620__$1,temp__5720__auto___6619,nodes_by_id){
return (function (p1__6586_SHARP_){
return loom.attr.attr.call(null,synthdef,p1__6586_SHARP_,new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205));
});})(seq__6587_6605,chunk__6589_6606,count__6590_6607,i__6591_6608,edge_6626,seq__6587_6620__$1,temp__5720__auto___6619,nodes_by_id))
,edge_6626);
var vec__6602_6628 = cljs.core.map.call(null,nodes_by_id,edge_6626);
var src_6629 = cljs.core.nth.call(null,vec__6602_6628,(0),null);
var dest_6630 = cljs.core.nth.call(null,vec__6602_6628,(1),null);
var edge_attrs_6631 = loom.attr.attrs.call(null,synthdef,edge_6626);
fugue.synthdef.make_edge.call(null,edge_type_6627,src_6629,dest_6630,edge_attrs_6631);


var G__6632 = cljs.core.next.call(null,seq__6587_6620__$1);
var G__6633 = null;
var G__6634 = (0);
var G__6635 = (0);
seq__6587_6605 = G__6632;
chunk__6589_6606 = G__6633;
count__6590_6607 = G__6634;
i__6591_6608 = G__6635;
continue;
}
} else {
}
}
break;
}

return nodes_by_id;
});

//# sourceMappingURL=synthdef.js.map?rel=1610838674060
