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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36825){
return cljs.core.map_QMARK_.call(null,G__36825);
})], null),(function (G__36825){
return cljs.core.map_QMARK_.call(null,G__36825);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.ramp.ramp_spec,new cljs.core.Keyword("webcv.ramp","instant","webcv.ramp/instant",75187949),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36826){
return cljs.core.map_QMARK_.call(null,G__36826);
}),(function (G__36826){
return cljs.core.contains_QMARK_.call(null,G__36826,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368));
})], null),(function (G__36826){
return ((cljs.core.map_QMARK_.call(null,G__36826)) && (cljs.core.contains_QMARK_.call(null,G__36826,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.ramp.ramp_spec,new cljs.core.Keyword("webcv.ramp","linear","webcv.ramp/linear",1451536514),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36827){
return cljs.core.map_QMARK_.call(null,G__36827);
}),(function (G__36827){
return cljs.core.contains_QMARK_.call(null,G__36827,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368));
}),(function (G__36827){
return cljs.core.contains_QMARK_.call(null,G__36827,new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955));
})], null),(function (G__36827){
return ((cljs.core.map_QMARK_.call(null,G__36827)) && (cljs.core.contains_QMARK_.call(null,G__36827,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368))) && (cljs.core.contains_QMARK_.call(null,G__36827,new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.ramp.ramp_spec,new cljs.core.Keyword("webcv.ramp","exponential","webcv.ramp/exponential",-1267929909),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36828){
return cljs.core.map_QMARK_.call(null,G__36828);
}),(function (G__36828){
return cljs.core.contains_QMARK_.call(null,G__36828,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368));
}),(function (G__36828){
return cljs.core.contains_QMARK_.call(null,G__36828,new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955));
})], null),(function (G__36828){
return ((cljs.core.map_QMARK_.call(null,G__36828)) && (cljs.core.contains_QMARK_.call(null,G__36828,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368))) && (cljs.core.contains_QMARK_.call(null,G__36828,new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)))], null),null]));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.ramp","ramp","webcv.ramp/ramp",1824437946),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),new cljs.core.Symbol("webcv.ramp","ramp-spec","webcv.ramp/ramp-spec",-1485917275,null),new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061)),cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("webcv.ramp","ramp-spec","webcv.ramp/ramp-spec",-1485917275,null),new cljs.core.Var(function(){return webcv.ramp.ramp_spec;},new cljs.core.Symbol("webcv.ramp","ramp-spec","webcv.ramp/ramp-spec",-1485917275,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webcv.ramp","webcv.ramp",1984441146,null),new cljs.core.Symbol(null,"ramp-spec","ramp-spec",1441884826,null),"/home/runner/work/webcv/webcv/src/webcv/ramp.cljs",20,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(webcv.ramp.ramp_spec)?webcv.ramp.ramp_spec.cljs$lang$test:null)])),new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061)));
webcv.ramp.schedule_BANG_ = (function webcv$ramp$schedule_BANG_(audio_param,p__36829){
var map__36830 = p__36829;
var map__36830__$1 = (((((!((map__36830 == null))))?(((((map__36830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36830):map__36830);
var value = cljs.core.get.call(null,map__36830__$1,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368));
var time = cljs.core.get.call(null,map__36830__$1,new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955));
var shape = cljs.core.get.call(null,map__36830__$1,new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061));
var value__$1 = (function (){var x__4219__auto__ = 1.0E-4;
var y__4220__auto__ = value;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var G__36832 = shape;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("webcv.ramp","cancel-and-hold","webcv.ramp/cancel-and-hold",-1231248709),G__36832)){
return audio_param.cancelAndHoldAtTime(time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("webcv.ramp","linear","webcv.ramp/linear",1451536514),G__36832)){
return audio_param.linearRampToValueAtTime(value__$1,time);
} else {
if(cljs.core._EQ_.call(null,null,G__36832)){
return audio_param.linearRampToValueAtTime(value__$1,time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("webcv.ramp","exponential","webcv.ramp/exponential",-1267929909),G__36832)){
return audio_param.exponentialRampToValueAtTime((function (){var x__4219__auto__ = 1.0E-4;
var y__4220__auto__ = value__$1;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("webcv.ramp","instant","webcv.ramp/instant",75187949),G__36832)){
return audio_param.setValueAtTime(value__$1,time);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36832)].join('')));

}
}
}
}
}
});
cljs.core._add_method.call(null,webcv.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852)], null),(function (_,src,dest,p__36833){
var map__36834 = p__36833;
var map__36834__$1 = (((((!((map__36834 == null))))?(((((map__36834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36834):map__36834);
var param_name = cljs.core.get.call(null,map__36834__$1,new cljs.core.Keyword("webcv.synthdef","param-name","webcv.synthdef/param-name",-328756077));
var c = cljs.core.async.chan.call(null,(1));
var audio_param = (function (){var target_obj_36836 = dest;
var _STAR_runtime_state_STAR__orig_val__36837 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36838 = oops.state.prepare_state.call(null,target_obj_36836,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36838;

try{return oops.core.get_selector_dynamically.call(null,target_obj_36836,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36837;
}})();
var c__32649__auto___36896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___36896,c,audio_param,map__36834,map__36834__$1,param_name){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___36896,c,audio_param,map__36834,map__36834__$1,param_name){
return (function (state_36873){
var state_val_36874 = (state_36873[(1)]);
if((state_val_36874 === (7))){
var inst_36868 = (state_36873[(2)]);
var state_36873__$1 = (function (){var statearr_36875 = state_36873;
(statearr_36875[(7)] = inst_36868);

return statearr_36875;
})();
var statearr_36876_36897 = state_36873__$1;
(statearr_36876_36897[(2)] = null);

(statearr_36876_36897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36874 === (1))){
var state_36873__$1 = state_36873;
var statearr_36877_36898 = state_36873__$1;
(statearr_36877_36898[(2)] = null);

(statearr_36877_36898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36874 === (4))){
var inst_36841 = (state_36873[(8)]);
var inst_36841__$1 = (state_36873[(2)]);
var inst_36842 = typeof inst_36841__$1 === 'number';
var state_36873__$1 = (function (){var statearr_36878 = state_36873;
(statearr_36878[(8)] = inst_36841__$1);

return statearr_36878;
})();
if(cljs.core.truth_(inst_36842)){
var statearr_36879_36899 = state_36873__$1;
(statearr_36879_36899[(1)] = (5));

} else {
var statearr_36880_36900 = state_36873__$1;
(statearr_36880_36900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36874 === (13))){
var inst_36862 = (state_36873[(2)]);
var state_36873__$1 = (function (){var statearr_36881 = state_36873;
(statearr_36881[(9)] = inst_36862);

return statearr_36881;
})();
var statearr_36882_36901 = state_36873__$1;
(statearr_36882_36901[(2)] = audio_param);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36873__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36874 === (6))){
var inst_36841 = (state_36873[(8)]);
var inst_36866 = webcv.ramp.schedule_BANG_.call(null,audio_param,inst_36841);
var state_36873__$1 = state_36873;
var statearr_36883_36902 = state_36873__$1;
(statearr_36883_36902[(2)] = inst_36866);

(statearr_36883_36902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36874 === (3))){
var inst_36871 = (state_36873[(2)]);
var state_36873__$1 = state_36873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36873__$1,inst_36871);
} else {
if((state_val_36874 === (12))){
var state_36873__$1 = state_36873;
var statearr_36884_36903 = state_36873__$1;
(statearr_36884_36903[(2)] = null);

(statearr_36884_36903[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36874 === (2))){
var state_36873__$1 = state_36873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36873__$1,(4),c);
} else {
if((state_val_36874 === (11))){
var inst_36841 = (state_36873[(8)]);
var inst_36859 = (audio_param["value"] = inst_36841);
var state_36873__$1 = state_36873;
var statearr_36885_36904 = state_36873__$1;
(statearr_36885_36904[(2)] = inst_36859);

(statearr_36885_36904[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36874 === (9))){
var inst_36852 = (state_36873[(2)]);
var inst_36853 = oops.state._STAR_runtime_state_STAR_ = oops.state._STAR_runtime_state_STAR_;
var state_36873__$1 = (function (){var statearr_36886 = state_36873;
(statearr_36886[(10)] = inst_36853);

(statearr_36886[(11)] = inst_36852);

return statearr_36886;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36873__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36874 === (5))){
var inst_36848 = (new Error());
var inst_36849 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_36850 = oops.state.prepare_state.call(null,audio_param,inst_36848,inst_36849);
var inst_36851 = oops.state._STAR_runtime_state_STAR_ = inst_36850;
var state_36873__$1 = (function (){var statearr_36887 = state_36873;
(statearr_36887[(12)] = inst_36851);

return statearr_36887;
})();
var statearr_36888_36905 = state_36873__$1;
(statearr_36888_36905[(2)] = null);

(statearr_36888_36905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36874 === (10))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36873,null,null,(9),(8));
var inst_36857 = oops.core.validate_object_access_dynamically.call(null,audio_param,(0),"value",true,true,true);
var state_36873__$1 = state_36873;
if(inst_36857){
var statearr_36889_36906 = state_36873__$1;
(statearr_36889_36906[(1)] = (11));

} else {
var statearr_36890_36907 = state_36873__$1;
(statearr_36890_36907[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36874 === (8))){
var inst_36864 = (state_36873[(2)]);
var state_36873__$1 = state_36873;
var statearr_36891_36908 = state_36873__$1;
(statearr_36891_36908[(2)] = inst_36864);

(statearr_36891_36908[(1)] = (7));


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
});})(c__32649__auto___36896,c,audio_param,map__36834,map__36834__$1,param_name))
;
return ((function (switch__32554__auto__,c__32649__auto___36896,c,audio_param,map__36834,map__36834__$1,param_name){
return (function() {
var webcv$ramp$state_machine__32555__auto__ = null;
var webcv$ramp$state_machine__32555__auto____0 = (function (){
var statearr_36892 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36892[(0)] = webcv$ramp$state_machine__32555__auto__);

(statearr_36892[(1)] = (1));

return statearr_36892;
});
var webcv$ramp$state_machine__32555__auto____1 = (function (state_36873){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_36873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e36893){if((e36893 instanceof Object)){
var ex__32558__auto__ = e36893;
var statearr_36894_36909 = state_36873;
(statearr_36894_36909[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36910 = state_36873;
state_36873 = G__36910;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
webcv$ramp$state_machine__32555__auto__ = function(state_36873){
switch(arguments.length){
case 0:
return webcv$ramp$state_machine__32555__auto____0.call(this);
case 1:
return webcv$ramp$state_machine__32555__auto____1.call(this,state_36873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ramp$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ramp$state_machine__32555__auto____0;
webcv$ramp$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ramp$state_machine__32555__auto____1;
return webcv$ramp$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___36896,c,audio_param,map__36834,map__36834__$1,param_name))
})();
var state__32651__auto__ = (function (){var statearr_36895 = f__32650__auto__.call(null);
(statearr_36895[(6)] = c__32649__auto___36896);

return statearr_36895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___36896,c,audio_param,map__36834,map__36834__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("webcv.chan","mult-out","webcv.chan/mult-out",1070529409).cljs$core$IFn$_invoke$arity$1(src),c);
}));

//# sourceMappingURL=ramp.js.map?rel=1601399208043
