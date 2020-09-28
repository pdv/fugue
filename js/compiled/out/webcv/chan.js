// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.chan');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('webcv.synthdef');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.chan","chan","webcv.chan/chan",-1472967270),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs.core.async.impl.channels","ManyToManyChannel","cljs.core.async.impl.channels/ManyToManyChannel",75017664,null)),cljs.core.partial.call(null,cljs.core.instance_QMARK_,cljs.core.async.impl.channels.ManyToManyChannel));
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
return cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("webcv.chan","chan-node-spec","webcv.chan/chan-node-spec",-851471243,null),new cljs.core.Var(function(){return webcv.chan.chan_node_spec;},new cljs.core.Symbol("webcv.chan","chan-node-spec","webcv.chan/chan-node-spec",-851471243,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webcv.chan","webcv.chan",-1244707259,null),new cljs.core.Symbol(null,"chan-node-spec","chan-node-spec",866775646,null),"/home/runner/work/webcv/webcv/src/webcv/chan.cljs",25,1,8,8,cljs.core.List.EMPTY,null,(cljs.core.truth_(webcv.chan.chan_node_spec)?webcv.chan.chan_node_spec.cljs$lang$test:null)])),new cljs.core.Keyword("webcv.chan","chan-node-type","webcv.chan/chan-node-type",-1398165608));
}));
cljs.core._add_method.call(null,webcv.chan.chan_node_spec,new cljs.core.Keyword("webcv.chan","transducer","webcv.chan/transducer",311721516),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34474){
return cljs.core.map_QMARK_.call(null,G__34474);
}),(function (G__34474){
return cljs.core.contains_QMARK_.call(null,G__34474,new cljs.core.Keyword("webcv.chan","xform","webcv.chan/xform",-2034901163));
})], null),(function (G__34474){
return ((cljs.core.map_QMARK_.call(null,G__34474)) && (cljs.core.contains_QMARK_.call(null,G__34474,new cljs.core.Keyword("webcv.chan","xform","webcv.chan/xform",-2034901163))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.chan","xform","webcv.chan/xform",-2034901163)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.chan","xform","webcv.chan/xform",-2034901163)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.chan","xform","webcv.chan/xform",-2034901163)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.chan","xform","webcv.chan/xform",-2034901163)))], null),null]));
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
return (function (_,xform_name){
return xform_name;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
webcv.chan.val_x_map = (function webcv$chan$val_x_map(name){
return cljs.core.map.call(null,(function (p1__34475_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,name,p1__34475_SHARP_);
}));
});
webcv.chan.merge_xform = (function webcv$chan$merge_xform(init){
return (function (rf){
var prev = cljs.core.volatile_BANG_.call(null,init);
return ((function (prev){
return (function() {
var G__34476 = null;
var G__34476__0 = (function (){
return rf.call(null);
});
var G__34476__1 = (function (result){
return rf.call(null,result);
});
var G__34476__2 = (function (result,input){
var next = cljs.core.merge.call(null,cljs.core.deref.call(null,prev),input);
cljs.core.vreset_BANG_.call(null,prev,next);

return rf.call(null,result,next);
});
G__34476 = function(result,input){
switch(arguments.length){
case 0:
return G__34476__0.call(this);
case 1:
return G__34476__1.call(this,result);
case 2:
return G__34476__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34476.cljs$core$IFn$_invoke$arity$0 = G__34476__0;
G__34476.cljs$core$IFn$_invoke$arity$1 = G__34476__1;
G__34476.cljs$core$IFn$_invoke$arity$2 = G__34476__2;
return G__34476;
})()
;})(prev))
});
});
cljs.core._add_method.call(null,webcv.chan.make_chan_node,new cljs.core.Keyword("webcv.chan","transducer","webcv.chan/transducer",311721516),(function (ctx,p__34477){
var map__34478 = p__34477;
var map__34478__$1 = (((((!((map__34478 == null))))?(((((map__34478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34478):map__34478);
var xform = cljs.core.get.call(null,map__34478__$1,new cljs.core.Keyword("webcv.chan","xform","webcv.chan/xform",-2034901163));
var static_params = cljs.core.get.call(null,map__34478__$1,new cljs.core.Keyword("webcv.synthdef","static-params","webcv.synthdef/static-params",-622811484));
var out = cljs.core.async.chan.call(null,(1),cljs.core.comp.call(null,webcv.chan.merge_xform.call(null,static_params),webcv.chan.make_transducer.call(null,ctx,xform)));
if(cljs.core.truth_(static_params)){
cljs.core.async.put_BANG_.call(null,out,static_params);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.chan","mult-out","webcv.chan/mult-out",1070529409),cljs.core.async.mult.call(null,out),new cljs.core.Keyword("webcv.chan","mix-out","webcv.chan/mix-out",-1114633003),cljs.core.async.mix.call(null,out)], null);
}));
cljs.core._add_method.call(null,webcv.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494)], null),(function (_,src,dest,p__34480){
var map__34481 = p__34480;
var map__34481__$1 = (((((!((map__34481 == null))))?(((((map__34481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34481):map__34481);
var param_name = cljs.core.get.call(null,map__34481__$1,new cljs.core.Keyword("webcv.synthdef","param-name","webcv.synthdef/param-name",-328756077));
var in_chan = cljs.core.async.chan.call(null,(1),webcv.chan.val_x_map.call(null,param_name));
cljs.core.async.admix.call(null,new cljs.core.Keyword("webcv.chan","mix-out","webcv.chan/mix-out",-1114633003).cljs$core$IFn$_invoke$arity$1(dest),in_chan);

return cljs.core.async.tap.call(null,new cljs.core.Keyword("webcv.chan","mult-out","webcv.chan/mult-out",1070529409).cljs$core$IFn$_invoke$arity$1(src),in_chan);
}));

//# sourceMappingURL=chan.js.map?rel=1601321438369
