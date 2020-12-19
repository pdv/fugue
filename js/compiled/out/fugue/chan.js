// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.chan');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('fugue.synthdef');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.chan","chan","fugue.chan/chan",1513206265),cljs.core.list(new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),new cljs.core.Symbol("cljs.core.async.impl.channels","ManyToManyChannel","cljs.core.async.impl.channels/ManyToManyChannel",75017664,null)),cljs.core.partial.call(null,cljs.core.instance_QMARK_,cljs.core.async.impl.channels.ManyToManyChannel));
if((typeof fugue !== 'undefined') && (typeof fugue.chan !== 'undefined') && (typeof fugue.chan.chan_node_spec !== 'undefined')){
} else {
fugue.chan.chan_node_spec = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fugue.chan","chan-node-spec"),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,fugue.synthdef.node_spec,new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),(function (_){
return cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("fugue.chan","chan-node-spec","fugue.chan/chan-node-spec",1929740758,null),new cljs.core.Var(function(){return fugue.chan.chan_node_spec;},new cljs.core.Symbol("fugue.chan","chan-node-spec","fugue.chan/chan-node-spec",1929740758,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"fugue.chan","fugue.chan",-169875698,null),new cljs.core.Symbol(null,"chan-node-spec","chan-node-spec",866775646,null),"src/fugue/chan.cljs",25,1,8,8,cljs.core.List.EMPTY,null,(cljs.core.truth_(fugue.chan.chan_node_spec)?fugue.chan.chan_node_spec.cljs$lang$test:null)])),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325));
}));
cljs.core._add_method.call(null,fugue.chan.chan_node_spec,new cljs.core.Keyword("fugue.chan","transducer","fugue.chan/transducer",546482313),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34595){
return cljs.core.map_QMARK_.call(null,G__34595);
}),(function (G__34595){
return cljs.core.contains_QMARK_.call(null,G__34595,new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640));
})], null),(function (G__34595){
return ((cljs.core.map_QMARK_.call(null,G__34595)) && (cljs.core.contains_QMARK_.call(null,G__34595,new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640)))], null),null]));
}));
if((typeof fugue !== 'undefined') && (typeof fugue.chan !== 'undefined') && (typeof fugue.chan.make_chan_node !== 'undefined')){
} else {
fugue.chan.make_chan_node = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fugue.chan","make-chan-node"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (_,nodedef){
return new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325).cljs$core$IFn$_invoke$arity$1(nodedef);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,fugue.synthdef.make_node,new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),(function (ctx,nodedef){
return fugue.chan.make_chan_node.call(null,ctx,nodedef);
}));
if((typeof fugue !== 'undefined') && (typeof fugue.chan !== 'undefined') && (typeof fugue.chan.make_transducer !== 'undefined')){
} else {
fugue.chan.make_transducer = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fugue.chan","make-transducer"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (_,xform_name){
return xform_name;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
fugue.chan.val_x_map = (function fugue$chan$val_x_map(name){
return cljs.core.map.call(null,(function (p1__34596_SHARP_){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,name,p1__34596_SHARP_);
}));
});
fugue.chan.merge_xform = (function fugue$chan$merge_xform(init){
return (function (rf){
var prev = cljs.core.volatile_BANG_.call(null,init);
return ((function (prev){
return (function() {
var G__34597 = null;
var G__34597__0 = (function (){
return rf.call(null);
});
var G__34597__1 = (function (result){
return rf.call(null,result);
});
var G__34597__2 = (function (result,input){
var next = cljs.core.merge.call(null,cljs.core.deref.call(null,prev),input);
cljs.core.vreset_BANG_.call(null,prev,next);

return rf.call(null,result,next);
});
G__34597 = function(result,input){
switch(arguments.length){
case 0:
return G__34597__0.call(this);
case 1:
return G__34597__1.call(this,result);
case 2:
return G__34597__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34597.cljs$core$IFn$_invoke$arity$0 = G__34597__0;
G__34597.cljs$core$IFn$_invoke$arity$1 = G__34597__1;
G__34597.cljs$core$IFn$_invoke$arity$2 = G__34597__2;
return G__34597;
})()
;})(prev))
});
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.chan","transducer","fugue.chan/transducer",546482313),(function (ctx,p__34602){
var map__34603 = p__34602;
var map__34603__$1 = (((((!((map__34603 == null))))?(((((map__34603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34603):map__34603);
var xform = cljs.core.get.call(null,map__34603__$1,new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640));
var static_params = cljs.core.get.call(null,map__34603__$1,new cljs.core.Keyword("fugue.synthdef","static-params","fugue.synthdef/static-params",-2134943037));
var out = cljs.core.async.chan.call(null,(1),cljs.core.comp.call(null,fugue.chan.merge_xform.call(null,cljs.core.PersistentArrayMap.EMPTY),fugue.chan.make_transducer.call(null,ctx,xform)));
var seq__34605_34625 = cljs.core.seq.call(null,static_params);
var chunk__34606_34626 = null;
var count__34607_34627 = (0);
var i__34608_34628 = (0);
while(true){
if((i__34608_34628 < count__34607_34627)){
var vec__34617_34629 = cljs.core._nth.call(null,chunk__34606_34626,i__34608_34628);
var k_34630 = cljs.core.nth.call(null,vec__34617_34629,(0),null);
var v_34631 = cljs.core.nth.call(null,vec__34617_34629,(1),null);
if((((!((v_34631 == null))))?(((((v_34631.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === v_34631.cljs$core$IWatchable$))))?true:(((!v_34631.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,v_34631):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,v_34631))){
cljs.core.add_watch.call(null,v_34631,k_34630,((function (seq__34605_34625,chunk__34606_34626,count__34607_34627,i__34608_34628,vec__34617_34629,k_34630,v_34631,out,map__34603,map__34603__$1,xform,static_params){
return (function (p1__34599_SHARP_,p2__34600_SHARP_,p3__34601_SHARP_,p4__34598_SHARP_){
return cljs.core.async.put_BANG_.call(null,out,cljs.core.PersistentArrayMap.createAsIfByAssoc([k_34630,p4__34598_SHARP_]));
});})(seq__34605_34625,chunk__34606_34626,count__34607_34627,i__34608_34628,vec__34617_34629,k_34630,v_34631,out,map__34603,map__34603__$1,xform,static_params))
);
} else {
cljs.core.async.put_BANG_.call(null,out,cljs.core.PersistentArrayMap.createAsIfByAssoc([k_34630,v_34631]));
}


var G__34632 = seq__34605_34625;
var G__34633 = chunk__34606_34626;
var G__34634 = count__34607_34627;
var G__34635 = (i__34608_34628 + (1));
seq__34605_34625 = G__34632;
chunk__34606_34626 = G__34633;
count__34607_34627 = G__34634;
i__34608_34628 = G__34635;
continue;
} else {
var temp__5720__auto___34636 = cljs.core.seq.call(null,seq__34605_34625);
if(temp__5720__auto___34636){
var seq__34605_34637__$1 = temp__5720__auto___34636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34605_34637__$1)){
var c__4550__auto___34638 = cljs.core.chunk_first.call(null,seq__34605_34637__$1);
var G__34639 = cljs.core.chunk_rest.call(null,seq__34605_34637__$1);
var G__34640 = c__4550__auto___34638;
var G__34641 = cljs.core.count.call(null,c__4550__auto___34638);
var G__34642 = (0);
seq__34605_34625 = G__34639;
chunk__34606_34626 = G__34640;
count__34607_34627 = G__34641;
i__34608_34628 = G__34642;
continue;
} else {
var vec__34621_34643 = cljs.core.first.call(null,seq__34605_34637__$1);
var k_34644 = cljs.core.nth.call(null,vec__34621_34643,(0),null);
var v_34645 = cljs.core.nth.call(null,vec__34621_34643,(1),null);
if((((!((v_34645 == null))))?(((((v_34645.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === v_34645.cljs$core$IWatchable$))))?true:(((!v_34645.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,v_34645):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,v_34645))){
cljs.core.add_watch.call(null,v_34645,k_34644,((function (seq__34605_34625,chunk__34606_34626,count__34607_34627,i__34608_34628,vec__34621_34643,k_34644,v_34645,seq__34605_34637__$1,temp__5720__auto___34636,out,map__34603,map__34603__$1,xform,static_params){
return (function (p1__34599_SHARP_,p2__34600_SHARP_,p3__34601_SHARP_,p4__34598_SHARP_){
return cljs.core.async.put_BANG_.call(null,out,cljs.core.PersistentArrayMap.createAsIfByAssoc([k_34644,p4__34598_SHARP_]));
});})(seq__34605_34625,chunk__34606_34626,count__34607_34627,i__34608_34628,vec__34621_34643,k_34644,v_34645,seq__34605_34637__$1,temp__5720__auto___34636,out,map__34603,map__34603__$1,xform,static_params))
);
} else {
cljs.core.async.put_BANG_.call(null,out,cljs.core.PersistentArrayMap.createAsIfByAssoc([k_34644,v_34645]));
}


var G__34646 = cljs.core.next.call(null,seq__34605_34637__$1);
var G__34647 = null;
var G__34648 = (0);
var G__34649 = (0);
seq__34605_34625 = G__34646;
chunk__34606_34626 = G__34647;
count__34607_34627 = G__34648;
i__34608_34628 = G__34649;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out),new cljs.core.Keyword("fugue.chan","mix-out","fugue.chan/mix-out",-341970058),cljs.core.async.mix.call(null,out)], null);
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001)], null),(function (_,src,dest,p__34650){
var map__34651 = p__34650;
var map__34651__$1 = (((((!((map__34651 == null))))?(((((map__34651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34651):map__34651);
var param_name = cljs.core.get.call(null,map__34651__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var in_chan = cljs.core.async.chan.call(null,(1),fugue.chan.val_x_map.call(null,param_name));
cljs.core.async.admix.call(null,new cljs.core.Keyword("fugue.chan","mix-out","fugue.chan/mix-out",-341970058).cljs$core$IFn$_invoke$arity$1(dest),in_chan);

return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),in_chan);
}));

//# sourceMappingURL=chan.js.map?rel=1608403392715
