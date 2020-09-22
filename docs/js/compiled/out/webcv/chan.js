// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.chan');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('webcv.synthdef');
if((typeof webcv !== 'undefined') && (typeof webcv.chan !== 'undefined') && (typeof webcv.chan.chan_node_spec !== 'undefined')){
} else {
webcv.chan.chan_node_spec = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"webcv.chan","chan-node-spec"),new cljs.core.Keyword("webcv.chan","chan-node-type","webcv.chan/chan-node-type",-1398165608),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,webcv.synthdef.node_spec,new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),(function (_){
return cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("webcv.chan","chan-node-spec","webcv.chan/chan-node-spec",-851471243,null),new cljs.core.Var(function(){return webcv.chan.chan_node_spec;},new cljs.core.Symbol("webcv.chan","chan-node-spec","webcv.chan/chan-node-spec",-851471243,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webcv.chan","webcv.chan",-1244707259,null),new cljs.core.Symbol(null,"chan-node-spec","chan-node-spec",866775646,null),"src/webcv/chan.cljs",25,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(webcv.chan.chan_node_spec)?webcv.chan.chan_node_spec.cljs$lang$test:null)])),new cljs.core.Keyword("webcv.chan","chan-node-type","webcv.chan/chan-node-type",-1398165608));
}));
cljs.core._add_method.call(null,webcv.chan.chan_node_spec,new cljs.core.Keyword("webcv.chan","transducer","webcv.chan/transducer",311721516),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__27392){
return cljs.core.map_QMARK_.call(null,G__27392);
}),(function (G__27392){
return cljs.core.contains_QMARK_.call(null,G__27392,new cljs.core.Keyword("webcv.chan","xforms","webcv.chan/xforms",-340023812));
})], null),(function (G__27392){
return ((cljs.core.map_QMARK_.call(null,G__27392)) && (cljs.core.contains_QMARK_.call(null,G__27392,new cljs.core.Keyword("webcv.chan","xforms","webcv.chan/xforms",-340023812))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.chan","xforms","webcv.chan/xforms",-340023812)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.chan","xforms","webcv.chan/xforms",-340023812)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.chan","xforms","webcv.chan/xforms",-340023812)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.chan","xforms","webcv.chan/xforms",-340023812)))], null),null]));
}));
if((typeof webcv !== 'undefined') && (typeof webcv.chan !== 'undefined') && (typeof webcv.chan.make_chan_node !== 'undefined')){
} else {
webcv.chan.make_chan_node = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"webcv.chan","make-chan-node"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (_,nodedef){
return new cljs.core.Keyword("webcv.chan","chan-node-type","webcv.chan/chan-node-type",-1398165608).cljs$core$IFn$_invoke$arity$1(nodedef);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,webcv.synthdef.make_node,new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),(function (ctx,nodedef){
return webcv.chan.make_chan_node.call(null,ctx,nodedef);
}));
if((typeof webcv !== 'undefined') && (typeof webcv.chan !== 'undefined') && (typeof webcv.chan.make_transducer !== 'undefined')){
} else {
webcv.chan.make_transducer = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"webcv.chan","make-transducer"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (_,xform_def){
return new cljs.core.Keyword("webcv.chan","xform-name","webcv.chan/xform-name",419918655).cljs$core$IFn$_invoke$arity$1(xform_def);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,webcv.chan.make_chan_node,new cljs.core.Keyword("webcv.chan","transducer","webcv.chan/transducer",311721516),(function (ctx,p__27393){
var map__27394 = p__27393;
var map__27394__$1 = (((((!((map__27394 == null))))?(((((map__27394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27394):map__27394);
var xforms = cljs.core.get.call(null,map__27394__$1,new cljs.core.Keyword("webcv.chan","xforms","webcv.chan/xforms",-340023812));
var xform = cljs.core.apply.call(null,cljs.core.comp,cljs.core.map.call(null,cljs.core.partial.call(null,webcv.chan.make_transducer,ctx),xforms));
var in_chan = cljs.core.async.chan.call(null,(1),xform);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.chan","in-chan","webcv.chan/in-chan",2082472692),in_chan,new cljs.core.Keyword("webcv.chan","out-mult","webcv.chan/out-mult",-545169799),cljs.core.async.mult.call(null,in_chan)], null);
}));
cljs.core._add_method.call(null,webcv.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494)], null),(function (_,src,dest,___$1){
return cljs.core.async.tap.call(null,new cljs.core.Keyword("webcv.chan","out-mult","webcv.chan/out-mult",-545169799).cljs$core$IFn$_invoke$arity$1(src),new cljs.core.Keyword("webcv.chan","in-chan","webcv.chan/in-chan",2082472692).cljs$core$IFn$_invoke$arity$1(dest));
}));

//# sourceMappingURL=chan.js.map?rel=1600808340620
