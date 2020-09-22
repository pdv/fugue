// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.ramp');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('oops.core');
goog.require('webcv.synthdef');
goog.require('webcv.audio');
goog.require('webcv.chan');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("webcv.ramp","linear","webcv.ramp/linear",1451536514),"null",new cljs.core.Keyword("webcv.ramp","exponential","webcv.ramp/exponential",-1267929909),"null",new cljs.core.Keyword("webcv.ramp","instant","webcv.ramp/instant",75187949),"null",new cljs.core.Keyword("webcv.ramp","cancel-and-hold","webcv.ramp/cancel-and-hold",-1231248709),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("webcv.ramp","linear","webcv.ramp/linear",1451536514),null,new cljs.core.Keyword("webcv.ramp","exponential","webcv.ramp/exponential",-1267929909),null,new cljs.core.Keyword("webcv.ramp","instant","webcv.ramp/instant",75187949),null,new cljs.core.Keyword("webcv.ramp","cancel-and-hold","webcv.ramp/cancel-and-hold",-1231248709),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
if((typeof webcv !== 'undefined') && (typeof webcv.ramp !== 'undefined') && (typeof webcv.ramp.ramp_spec !== 'undefined')){
} else {
webcv.ramp.ramp_spec = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"webcv.ramp","ramp-spec"),new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,webcv.ramp.ramp_spec,new cljs.core.Keyword("webcv.ramp","cancel-and-hold","webcv.ramp/cancel-and-hold",-1231248709),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34705){
return cljs.core.map_QMARK_.call(null,G__34705);
})], null),(function (G__34705){
return cljs.core.map_QMARK_.call(null,G__34705);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.ramp.ramp_spec,new cljs.core.Keyword("webcv.ramp","instant","webcv.ramp/instant",75187949),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34706){
return cljs.core.map_QMARK_.call(null,G__34706);
}),(function (G__34706){
return cljs.core.contains_QMARK_.call(null,G__34706,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368));
})], null),(function (G__34706){
return ((cljs.core.map_QMARK_.call(null,G__34706)) && (cljs.core.contains_QMARK_.call(null,G__34706,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.ramp.ramp_spec,new cljs.core.Keyword("webcv.ramp","linear","webcv.ramp/linear",1451536514),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34707){
return cljs.core.map_QMARK_.call(null,G__34707);
}),(function (G__34707){
return cljs.core.contains_QMARK_.call(null,G__34707,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368));
}),(function (G__34707){
return cljs.core.contains_QMARK_.call(null,G__34707,new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955));
})], null),(function (G__34707){
return ((cljs.core.map_QMARK_.call(null,G__34707)) && (cljs.core.contains_QMARK_.call(null,G__34707,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368))) && (cljs.core.contains_QMARK_.call(null,G__34707,new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.ramp.ramp_spec,new cljs.core.Keyword("webcv.ramp","exponential","webcv.ramp/exponential",-1267929909),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34708){
return cljs.core.map_QMARK_.call(null,G__34708);
}),(function (G__34708){
return cljs.core.contains_QMARK_.call(null,G__34708,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368));
}),(function (G__34708){
return cljs.core.contains_QMARK_.call(null,G__34708,new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955));
})], null),(function (G__34708){
return ((cljs.core.map_QMARK_.call(null,G__34708)) && (cljs.core.contains_QMARK_.call(null,G__34708,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368))) && (cljs.core.contains_QMARK_.call(null,G__34708,new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)))], null),null]));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.ramp","ramp","webcv.ramp/ramp",1824437946),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),new cljs.core.Symbol("webcv.ramp","ramp-spec","webcv.ramp/ramp-spec",-1485917275,null),new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061)),cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("webcv.ramp","ramp-spec","webcv.ramp/ramp-spec",-1485917275,null),new cljs.core.Var(function(){return webcv.ramp.ramp_spec;},new cljs.core.Symbol("webcv.ramp","ramp-spec","webcv.ramp/ramp-spec",-1485917275,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webcv.ramp","webcv.ramp",1984441146,null),new cljs.core.Symbol(null,"ramp-spec","ramp-spec",1441884826,null),"src/webcv/ramp.cljs",20,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(webcv.ramp.ramp_spec)?webcv.ramp.ramp_spec.cljs$lang$test:null)])),new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061)));
webcv.ramp.schedule_BANG_ = (function webcv$ramp$schedule_BANG_(audio_param,p__34709){
var map__34710 = p__34709;
var map__34710__$1 = (((((!((map__34710 == null))))?(((((map__34710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34710):map__34710);
var value = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368));
var time = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955));
var shape = cljs.core.get.call(null,map__34710__$1,new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061));
var value__$1 = (function (){var x__4219__auto__ = 1.0E-4;
var y__4220__auto__ = value;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var G__34712 = shape;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("webcv.ramp","cancel-and-hold","webcv.ramp/cancel-and-hold",-1231248709),G__34712)){
return audio_param.cancelAndHoldAtTime(time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("webcv.ramp","linear","webcv.ramp/linear",1451536514),G__34712)){
return audio_param.linearRampToValueAtTime(value__$1,time);
} else {
if(cljs.core._EQ_.call(null,null,G__34712)){
return audio_param.linearRampToValueAtTime(value__$1,time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("webcv.ramp","exponential","webcv.ramp/exponential",-1267929909),G__34712)){
return audio_param.exponentialRampToValueAtTime((function (){var x__4219__auto__ = 1.0E-4;
var y__4220__auto__ = value__$1;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("webcv.ramp","instant","webcv.ramp/instant",75187949),G__34712)){
return audio_param.setValueAtTime(value__$1,time);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34712)].join('')));

}
}
}
}
}
});
cljs.core._add_method.call(null,webcv.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852)], null),(function (_,src,dest,p__34713){
var map__34714 = p__34713;
var map__34714__$1 = (((((!((map__34714 == null))))?(((((map__34714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34714):map__34714);
var param_name = cljs.core.get.call(null,map__34714__$1,new cljs.core.Keyword("webcv.synthdef","param-name","webcv.synthdef/param-name",-328756077));
var c = cljs.core.async.chan.call(null,(1));
var audio_param = (function (){var target_obj_34716 = dest;
var _STAR_runtime_state_STAR__orig_val__34717 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34718 = oops.state.prepare_state.call(null,target_obj_34716,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34718;

try{return oops.core.get_selector_dynamically.call(null,target_obj_34716,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34717;
}})();
var c__23570__auto___34776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23570__auto___34776,c,audio_param,map__34714,map__34714__$1,param_name){
return (function (){
var f__23571__auto__ = (function (){var switch__23475__auto__ = ((function (c__23570__auto___34776,c,audio_param,map__34714,map__34714__$1,param_name){
return (function (state_34753){
var state_val_34754 = (state_34753[(1)]);
if((state_val_34754 === (7))){
var inst_34748 = (state_34753[(2)]);
var state_34753__$1 = (function (){var statearr_34755 = state_34753;
(statearr_34755[(7)] = inst_34748);

return statearr_34755;
})();
var statearr_34756_34777 = state_34753__$1;
(statearr_34756_34777[(2)] = null);

(statearr_34756_34777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (1))){
var state_34753__$1 = state_34753;
var statearr_34757_34778 = state_34753__$1;
(statearr_34757_34778[(2)] = null);

(statearr_34757_34778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (4))){
var inst_34721 = (state_34753[(8)]);
var inst_34721__$1 = (state_34753[(2)]);
var inst_34722 = typeof inst_34721__$1 === 'number';
var state_34753__$1 = (function (){var statearr_34758 = state_34753;
(statearr_34758[(8)] = inst_34721__$1);

return statearr_34758;
})();
if(cljs.core.truth_(inst_34722)){
var statearr_34759_34779 = state_34753__$1;
(statearr_34759_34779[(1)] = (5));

} else {
var statearr_34760_34780 = state_34753__$1;
(statearr_34760_34780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (13))){
var inst_34742 = (state_34753[(2)]);
var state_34753__$1 = (function (){var statearr_34761 = state_34753;
(statearr_34761[(9)] = inst_34742);

return statearr_34761;
})();
var statearr_34762_34781 = state_34753__$1;
(statearr_34762_34781[(2)] = audio_param);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34753__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (6))){
var inst_34721 = (state_34753[(8)]);
var inst_34746 = webcv.ramp.schedule_BANG_.call(null,audio_param,inst_34721);
var state_34753__$1 = state_34753;
var statearr_34763_34782 = state_34753__$1;
(statearr_34763_34782[(2)] = inst_34746);

(statearr_34763_34782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (3))){
var inst_34751 = (state_34753[(2)]);
var state_34753__$1 = state_34753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34753__$1,inst_34751);
} else {
if((state_val_34754 === (12))){
var state_34753__$1 = state_34753;
var statearr_34764_34783 = state_34753__$1;
(statearr_34764_34783[(2)] = null);

(statearr_34764_34783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (2))){
var state_34753__$1 = state_34753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34753__$1,(4),c);
} else {
if((state_val_34754 === (11))){
var inst_34721 = (state_34753[(8)]);
var inst_34739 = (audio_param["value"] = inst_34721);
var state_34753__$1 = state_34753;
var statearr_34765_34784 = state_34753__$1;
(statearr_34765_34784[(2)] = inst_34739);

(statearr_34765_34784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (9))){
var inst_34732 = (state_34753[(2)]);
var inst_34733 = oops.state._STAR_runtime_state_STAR_ = oops.state._STAR_runtime_state_STAR_;
var state_34753__$1 = (function (){var statearr_34766 = state_34753;
(statearr_34766[(10)] = inst_34732);

(statearr_34766[(11)] = inst_34733);

return statearr_34766;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34753__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (5))){
var inst_34728 = (new Error());
var inst_34729 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_34730 = oops.state.prepare_state.call(null,audio_param,inst_34728,inst_34729);
var inst_34731 = oops.state._STAR_runtime_state_STAR_ = inst_34730;
var state_34753__$1 = (function (){var statearr_34767 = state_34753;
(statearr_34767[(12)] = inst_34731);

return statearr_34767;
})();
var statearr_34768_34785 = state_34753__$1;
(statearr_34768_34785[(2)] = null);

(statearr_34768_34785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (10))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34753,null,null,(9),(8));
var inst_34737 = oops.core.validate_object_access_dynamically.call(null,audio_param,(0),"value",true,true,true);
var state_34753__$1 = state_34753;
if(inst_34737){
var statearr_34769_34786 = state_34753__$1;
(statearr_34769_34786[(1)] = (11));

} else {
var statearr_34770_34787 = state_34753__$1;
(statearr_34770_34787[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34754 === (8))){
var inst_34744 = (state_34753[(2)]);
var state_34753__$1 = state_34753;
var statearr_34771_34788 = state_34753__$1;
(statearr_34771_34788[(2)] = inst_34744);

(statearr_34771_34788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23570__auto___34776,c,audio_param,map__34714,map__34714__$1,param_name))
;
return ((function (switch__23475__auto__,c__23570__auto___34776,c,audio_param,map__34714,map__34714__$1,param_name){
return (function() {
var webcv$ramp$state_machine__23476__auto__ = null;
var webcv$ramp$state_machine__23476__auto____0 = (function (){
var statearr_34772 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34772[(0)] = webcv$ramp$state_machine__23476__auto__);

(statearr_34772[(1)] = (1));

return statearr_34772;
});
var webcv$ramp$state_machine__23476__auto____1 = (function (state_34753){
while(true){
var ret_value__23477__auto__ = (function (){try{while(true){
var result__23478__auto__ = switch__23475__auto__.call(null,state_34753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23478__auto__;
}
break;
}
}catch (e34773){if((e34773 instanceof Object)){
var ex__23479__auto__ = e34773;
var statearr_34774_34789 = state_34753;
(statearr_34774_34789[(5)] = ex__23479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34790 = state_34753;
state_34753 = G__34790;
continue;
} else {
return ret_value__23477__auto__;
}
break;
}
});
webcv$ramp$state_machine__23476__auto__ = function(state_34753){
switch(arguments.length){
case 0:
return webcv$ramp$state_machine__23476__auto____0.call(this);
case 1:
return webcv$ramp$state_machine__23476__auto____1.call(this,state_34753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ramp$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ramp$state_machine__23476__auto____0;
webcv$ramp$state_machine__23476__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ramp$state_machine__23476__auto____1;
return webcv$ramp$state_machine__23476__auto__;
})()
;})(switch__23475__auto__,c__23570__auto___34776,c,audio_param,map__34714,map__34714__$1,param_name))
})();
var state__23572__auto__ = (function (){var statearr_34775 = f__23571__auto__.call(null);
(statearr_34775[(6)] = c__23570__auto___34776);

return statearr_34775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23572__auto__);
});})(c__23570__auto___34776,c,audio_param,map__34714,map__34714__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("webcv.chan","out-mult","webcv.chan/out-mult",-545169799).cljs$core$IFn$_invoke$arity$1(src),c);
}));

//# sourceMappingURL=ramp.js.map?rel=1600808349268
