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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34889){
return cljs.core.map_QMARK_.call(null,G__34889);
})], null),(function (G__34889){
return cljs.core.map_QMARK_.call(null,G__34889);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.ramp.ramp_spec,new cljs.core.Keyword("webcv.ramp","instant","webcv.ramp/instant",75187949),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34890){
return cljs.core.map_QMARK_.call(null,G__34890);
}),(function (G__34890){
return cljs.core.contains_QMARK_.call(null,G__34890,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368));
})], null),(function (G__34890){
return ((cljs.core.map_QMARK_.call(null,G__34890)) && (cljs.core.contains_QMARK_.call(null,G__34890,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.ramp.ramp_spec,new cljs.core.Keyword("webcv.ramp","linear","webcv.ramp/linear",1451536514),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34891){
return cljs.core.map_QMARK_.call(null,G__34891);
}),(function (G__34891){
return cljs.core.contains_QMARK_.call(null,G__34891,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368));
}),(function (G__34891){
return cljs.core.contains_QMARK_.call(null,G__34891,new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955));
})], null),(function (G__34891){
return ((cljs.core.map_QMARK_.call(null,G__34891)) && (cljs.core.contains_QMARK_.call(null,G__34891,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368))) && (cljs.core.contains_QMARK_.call(null,G__34891,new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.ramp.ramp_spec,new cljs.core.Keyword("webcv.ramp","exponential","webcv.ramp/exponential",-1267929909),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34892){
return cljs.core.map_QMARK_.call(null,G__34892);
}),(function (G__34892){
return cljs.core.contains_QMARK_.call(null,G__34892,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368));
}),(function (G__34892){
return cljs.core.contains_QMARK_.call(null,G__34892,new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955));
})], null),(function (G__34892){
return ((cljs.core.map_QMARK_.call(null,G__34892)) && (cljs.core.contains_QMARK_.call(null,G__34892,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368))) && (cljs.core.contains_QMARK_.call(null,G__34892,new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955)))], null),null]));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.ramp","ramp","webcv.ramp/ramp",1824437946),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),new cljs.core.Symbol("webcv.ramp","ramp-spec","webcv.ramp/ramp-spec",-1485917275,null),new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061)),cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("webcv.ramp","ramp-spec","webcv.ramp/ramp-spec",-1485917275,null),new cljs.core.Var(function(){return webcv.ramp.ramp_spec;},new cljs.core.Symbol("webcv.ramp","ramp-spec","webcv.ramp/ramp-spec",-1485917275,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webcv.ramp","webcv.ramp",1984441146,null),new cljs.core.Symbol(null,"ramp-spec","ramp-spec",1441884826,null),"src/webcv/ramp.cljs",20,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(webcv.ramp.ramp_spec)?webcv.ramp.ramp_spec.cljs$lang$test:null)])),new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061)));
webcv.ramp.schedule_BANG_ = (function webcv$ramp$schedule_BANG_(audio_param,p__34893){
var map__34894 = p__34893;
var map__34894__$1 = (((((!((map__34894 == null))))?(((((map__34894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34894):map__34894);
var value = cljs.core.get.call(null,map__34894__$1,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368));
var time = cljs.core.get.call(null,map__34894__$1,new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955));
var shape = cljs.core.get.call(null,map__34894__$1,new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061));
var value__$1 = (function (){var x__4219__auto__ = 1.0E-4;
var y__4220__auto__ = value;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var G__34896 = shape;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("webcv.ramp","cancel-and-hold","webcv.ramp/cancel-and-hold",-1231248709),G__34896)){
return audio_param.cancelAndHoldAtTime(time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("webcv.ramp","linear","webcv.ramp/linear",1451536514),G__34896)){
return audio_param.linearRampToValueAtTime(value__$1,time);
} else {
if(cljs.core._EQ_.call(null,null,G__34896)){
return audio_param.linearRampToValueAtTime(value__$1,time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("webcv.ramp","exponential","webcv.ramp/exponential",-1267929909),G__34896)){
return audio_param.exponentialRampToValueAtTime((function (){var x__4219__auto__ = 1.0E-4;
var y__4220__auto__ = value__$1;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("webcv.ramp","instant","webcv.ramp/instant",75187949),G__34896)){
return audio_param.setValueAtTime(value__$1,time);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34896)].join('')));

}
}
}
}
}
});
cljs.core._add_method.call(null,webcv.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852)], null),(function (_,src,dest,p__34897){
var map__34898 = p__34897;
var map__34898__$1 = (((((!((map__34898 == null))))?(((((map__34898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34898):map__34898);
var param_name = cljs.core.get.call(null,map__34898__$1,new cljs.core.Keyword("webcv.synthdef","param-name","webcv.synthdef/param-name",-328756077));
var c = cljs.core.async.chan.call(null,(1));
var audio_param = (function (){var target_obj_34900 = dest;
var _STAR_runtime_state_STAR__orig_val__34901 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34902 = oops.state.prepare_state.call(null,target_obj_34900,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34902;

try{return oops.core.get_selector_dynamically.call(null,target_obj_34900,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34901;
}})();
var c__32720__auto___34960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32720__auto___34960,c,audio_param,map__34898,map__34898__$1,param_name){
return (function (){
var f__32721__auto__ = (function (){var switch__32625__auto__ = ((function (c__32720__auto___34960,c,audio_param,map__34898,map__34898__$1,param_name){
return (function (state_34937){
var state_val_34938 = (state_34937[(1)]);
if((state_val_34938 === (7))){
var inst_34932 = (state_34937[(2)]);
var state_34937__$1 = (function (){var statearr_34939 = state_34937;
(statearr_34939[(7)] = inst_34932);

return statearr_34939;
})();
var statearr_34940_34961 = state_34937__$1;
(statearr_34940_34961[(2)] = null);

(statearr_34940_34961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (1))){
var state_34937__$1 = state_34937;
var statearr_34941_34962 = state_34937__$1;
(statearr_34941_34962[(2)] = null);

(statearr_34941_34962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (4))){
var inst_34905 = (state_34937[(8)]);
var inst_34905__$1 = (state_34937[(2)]);
var inst_34906 = typeof inst_34905__$1 === 'number';
var state_34937__$1 = (function (){var statearr_34942 = state_34937;
(statearr_34942[(8)] = inst_34905__$1);

return statearr_34942;
})();
if(cljs.core.truth_(inst_34906)){
var statearr_34943_34963 = state_34937__$1;
(statearr_34943_34963[(1)] = (5));

} else {
var statearr_34944_34964 = state_34937__$1;
(statearr_34944_34964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (13))){
var inst_34926 = (state_34937[(2)]);
var state_34937__$1 = (function (){var statearr_34945 = state_34937;
(statearr_34945[(9)] = inst_34926);

return statearr_34945;
})();
var statearr_34946_34965 = state_34937__$1;
(statearr_34946_34965[(2)] = audio_param);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34937__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (6))){
var inst_34905 = (state_34937[(8)]);
var inst_34930 = webcv.ramp.schedule_BANG_.call(null,audio_param,inst_34905);
var state_34937__$1 = state_34937;
var statearr_34947_34966 = state_34937__$1;
(statearr_34947_34966[(2)] = inst_34930);

(statearr_34947_34966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (3))){
var inst_34935 = (state_34937[(2)]);
var state_34937__$1 = state_34937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34937__$1,inst_34935);
} else {
if((state_val_34938 === (12))){
var state_34937__$1 = state_34937;
var statearr_34948_34967 = state_34937__$1;
(statearr_34948_34967[(2)] = null);

(statearr_34948_34967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (2))){
var state_34937__$1 = state_34937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34937__$1,(4),c);
} else {
if((state_val_34938 === (11))){
var inst_34905 = (state_34937[(8)]);
var inst_34923 = (audio_param["value"] = inst_34905);
var state_34937__$1 = state_34937;
var statearr_34949_34968 = state_34937__$1;
(statearr_34949_34968[(2)] = inst_34923);

(statearr_34949_34968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (9))){
var inst_34916 = (state_34937[(2)]);
var inst_34917 = oops.state._STAR_runtime_state_STAR_ = oops.state._STAR_runtime_state_STAR_;
var state_34937__$1 = (function (){var statearr_34950 = state_34937;
(statearr_34950[(10)] = inst_34916);

(statearr_34950[(11)] = inst_34917);

return statearr_34950;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34937__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (5))){
var inst_34912 = (new Error());
var inst_34913 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_34914 = oops.state.prepare_state.call(null,audio_param,inst_34912,inst_34913);
var inst_34915 = oops.state._STAR_runtime_state_STAR_ = inst_34914;
var state_34937__$1 = (function (){var statearr_34951 = state_34937;
(statearr_34951[(12)] = inst_34915);

return statearr_34951;
})();
var statearr_34952_34969 = state_34937__$1;
(statearr_34952_34969[(2)] = null);

(statearr_34952_34969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (10))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34937,null,null,(9),(8));
var inst_34921 = oops.core.validate_object_access_dynamically.call(null,audio_param,(0),"value",true,true,true);
var state_34937__$1 = state_34937;
if(inst_34921){
var statearr_34953_34970 = state_34937__$1;
(statearr_34953_34970[(1)] = (11));

} else {
var statearr_34954_34971 = state_34937__$1;
(statearr_34954_34971[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34938 === (8))){
var inst_34928 = (state_34937[(2)]);
var state_34937__$1 = state_34937;
var statearr_34955_34972 = state_34937__$1;
(statearr_34955_34972[(2)] = inst_34928);

(statearr_34955_34972[(1)] = (7));


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
});})(c__32720__auto___34960,c,audio_param,map__34898,map__34898__$1,param_name))
;
return ((function (switch__32625__auto__,c__32720__auto___34960,c,audio_param,map__34898,map__34898__$1,param_name){
return (function() {
var webcv$ramp$state_machine__32626__auto__ = null;
var webcv$ramp$state_machine__32626__auto____0 = (function (){
var statearr_34956 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34956[(0)] = webcv$ramp$state_machine__32626__auto__);

(statearr_34956[(1)] = (1));

return statearr_34956;
});
var webcv$ramp$state_machine__32626__auto____1 = (function (state_34937){
while(true){
var ret_value__32627__auto__ = (function (){try{while(true){
var result__32628__auto__ = switch__32625__auto__.call(null,state_34937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32628__auto__;
}
break;
}
}catch (e34957){if((e34957 instanceof Object)){
var ex__32629__auto__ = e34957;
var statearr_34958_34973 = state_34937;
(statearr_34958_34973[(5)] = ex__32629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34974 = state_34937;
state_34937 = G__34974;
continue;
} else {
return ret_value__32627__auto__;
}
break;
}
});
webcv$ramp$state_machine__32626__auto__ = function(state_34937){
switch(arguments.length){
case 0:
return webcv$ramp$state_machine__32626__auto____0.call(this);
case 1:
return webcv$ramp$state_machine__32626__auto____1.call(this,state_34937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ramp$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ramp$state_machine__32626__auto____0;
webcv$ramp$state_machine__32626__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ramp$state_machine__32626__auto____1;
return webcv$ramp$state_machine__32626__auto__;
})()
;})(switch__32625__auto__,c__32720__auto___34960,c,audio_param,map__34898,map__34898__$1,param_name))
})();
var state__32722__auto__ = (function (){var statearr_34959 = f__32721__auto__.call(null);
(statearr_34959[(6)] = c__32720__auto___34960);

return statearr_34959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32722__auto__);
});})(c__32720__auto___34960,c,audio_param,map__34898,map__34898__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("webcv.chan","mult-out","webcv.chan/mult-out",1070529409).cljs$core$IFn$_invoke$arity$1(src),c);
}));

//# sourceMappingURL=ramp.js.map?rel=1601274369523
