// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ramp');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('oops.core');
goog.require('fugue.synthdef');
goog.require('fugue.audio');
goog.require('fugue.chan');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fugue.ramp","linear","fugue.ramp/linear",142792545),"null",new cljs.core.Keyword("fugue.ramp","exponential","fugue.ramp/exponential",1652981676),"null",new cljs.core.Keyword("fugue.ramp","instant","fugue.ramp/instant",1719488590),"null",new cljs.core.Keyword("fugue.ramp","cancel-and-hold","fugue.ramp/cancel-and-hold",1218085274),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fugue.ramp","linear","fugue.ramp/linear",142792545),null,new cljs.core.Keyword("fugue.ramp","exponential","fugue.ramp/exponential",1652981676),null,new cljs.core.Keyword("fugue.ramp","instant","fugue.ramp/instant",1719488590),null,new cljs.core.Keyword("fugue.ramp","cancel-and-hold","fugue.ramp/cancel-and-hold",1218085274),null], null), null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
if((typeof fugue !== 'undefined') && (typeof fugue.ramp !== 'undefined') && (typeof fugue.ramp.ramp_spec !== 'undefined')){
} else {
fugue.ramp.ramp_spec = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fugue.ramp","ramp-spec"),new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,fugue.ramp.ramp_spec,new cljs.core.Keyword("fugue.ramp","cancel-and-hold","fugue.ramp/cancel-and-hold",1218085274),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35124){
return cljs.core.map_QMARK_.call(null,G__35124);
})], null),(function (G__35124){
return cljs.core.map_QMARK_.call(null,G__35124);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.ramp.ramp_spec,new cljs.core.Keyword("fugue.ramp","instant","fugue.ramp/instant",1719488590),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35125){
return cljs.core.map_QMARK_.call(null,G__35125);
}),(function (G__35125){
return cljs.core.contains_QMARK_.call(null,G__35125,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719));
})], null),(function (G__35125){
return ((cljs.core.map_QMARK_.call(null,G__35125)) && (cljs.core.contains_QMARK_.call(null,G__35125,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.ramp.ramp_spec,new cljs.core.Keyword("fugue.ramp","linear","fugue.ramp/linear",142792545),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35126){
return cljs.core.map_QMARK_.call(null,G__35126);
}),(function (G__35126){
return cljs.core.contains_QMARK_.call(null,G__35126,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719));
}),(function (G__35126){
return cljs.core.contains_QMARK_.call(null,G__35126,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494));
})], null),(function (G__35126){
return ((cljs.core.map_QMARK_.call(null,G__35126)) && (cljs.core.contains_QMARK_.call(null,G__35126,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))) && (cljs.core.contains_QMARK_.call(null,G__35126,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.ramp.ramp_spec,new cljs.core.Keyword("fugue.ramp","exponential","fugue.ramp/exponential",1652981676),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35127){
return cljs.core.map_QMARK_.call(null,G__35127);
}),(function (G__35127){
return cljs.core.contains_QMARK_.call(null,G__35127,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719));
}),(function (G__35127){
return cljs.core.contains_QMARK_.call(null,G__35127,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494));
})], null),(function (G__35127){
return ((cljs.core.map_QMARK_.call(null,G__35127)) && (cljs.core.contains_QMARK_.call(null,G__35127,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))) && (cljs.core.contains_QMARK_.call(null,G__35127,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)))], null),null]));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.ramp","ramp","fugue.ramp/ramp",-826246567),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),new cljs.core.Symbol("fugue.ramp","ramp-spec","fugue.ramp/ramp-spec",358899266,null),new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230)),cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("fugue.ramp","ramp-spec","fugue.ramp/ramp-spec",358899266,null),new cljs.core.Var(function(){return fugue.ramp.ramp_spec;},new cljs.core.Symbol("fugue.ramp","ramp-spec","fugue.ramp/ramp-spec",358899266,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"fugue.ramp","fugue.ramp",1406793066,null),new cljs.core.Symbol(null,"ramp-spec","ramp-spec",1441884826,null),"/home/runner/work/fugue/fugue/src/fugue/ramp.cljs",20,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(fugue.ramp.ramp_spec)?fugue.ramp.ramp_spec.cljs$lang$test:null)])),new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230)));
fugue.ramp.schedule_BANG_ = (function fugue$ramp$schedule_BANG_(audio_param,p__35128){
var map__35129 = p__35128;
var map__35129__$1 = (((((!((map__35129 == null))))?(((((map__35129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35129):map__35129);
var value = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719));
var time = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494));
var shape = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230));
var value__$1 = (function (){var x__4219__auto__ = 1.0E-4;
var y__4220__auto__ = value;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var G__35131 = shape;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.ramp","cancel-and-hold","fugue.ramp/cancel-and-hold",1218085274),G__35131)){
return audio_param.cancelAndHoldAtTime(time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.ramp","linear","fugue.ramp/linear",142792545),G__35131)){
return audio_param.linearRampToValueAtTime(value__$1,time);
} else {
if(cljs.core._EQ_.call(null,null,G__35131)){
return audio_param.linearRampToValueAtTime(value__$1,time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.ramp","exponential","fugue.ramp/exponential",1652981676),G__35131)){
return audio_param.exponentialRampToValueAtTime((function (){var x__4219__auto__ = 1.0E-4;
var y__4220__auto__ = value__$1;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.ramp","instant","fugue.ramp/instant",1719488590),G__35131)){
return audio_param.setValueAtTime(value__$1,time);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35131)].join('')));

}
}
}
}
}
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__35132){
var map__35133 = p__35132;
var map__35133__$1 = (((((!((map__35133 == null))))?(((((map__35133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35133):map__35133);
var param_name = cljs.core.get.call(null,map__35133__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var c = cljs.core.async.chan.call(null,(1));
var audio_param = (function (){var target_obj_35135 = dest;
var _STAR_runtime_state_STAR__orig_val__35136 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35137 = oops.state.prepare_state.call(null,target_obj_35135,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35137;

try{return oops.core.get_selector_dynamically.call(null,target_obj_35135,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35136;
}})();
var c__32685__auto___35195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___35195,c,audio_param,map__35133,map__35133__$1,param_name){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___35195,c,audio_param,map__35133,map__35133__$1,param_name){
return (function (state_35172){
var state_val_35173 = (state_35172[(1)]);
if((state_val_35173 === (7))){
var inst_35167 = (state_35172[(2)]);
var state_35172__$1 = (function (){var statearr_35174 = state_35172;
(statearr_35174[(7)] = inst_35167);

return statearr_35174;
})();
var statearr_35175_35196 = state_35172__$1;
(statearr_35175_35196[(2)] = null);

(statearr_35175_35196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (1))){
var state_35172__$1 = state_35172;
var statearr_35176_35197 = state_35172__$1;
(statearr_35176_35197[(2)] = null);

(statearr_35176_35197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (4))){
var inst_35140 = (state_35172[(8)]);
var inst_35140__$1 = (state_35172[(2)]);
var inst_35141 = typeof inst_35140__$1 === 'number';
var state_35172__$1 = (function (){var statearr_35177 = state_35172;
(statearr_35177[(8)] = inst_35140__$1);

return statearr_35177;
})();
if(cljs.core.truth_(inst_35141)){
var statearr_35178_35198 = state_35172__$1;
(statearr_35178_35198[(1)] = (5));

} else {
var statearr_35179_35199 = state_35172__$1;
(statearr_35179_35199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (13))){
var inst_35161 = (state_35172[(2)]);
var state_35172__$1 = (function (){var statearr_35180 = state_35172;
(statearr_35180[(9)] = inst_35161);

return statearr_35180;
})();
var statearr_35181_35200 = state_35172__$1;
(statearr_35181_35200[(2)] = audio_param);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (6))){
var inst_35140 = (state_35172[(8)]);
var inst_35165 = fugue.ramp.schedule_BANG_.call(null,audio_param,inst_35140);
var state_35172__$1 = state_35172;
var statearr_35182_35201 = state_35172__$1;
(statearr_35182_35201[(2)] = inst_35165);

(statearr_35182_35201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (3))){
var inst_35170 = (state_35172[(2)]);
var state_35172__$1 = state_35172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35172__$1,inst_35170);
} else {
if((state_val_35173 === (12))){
var state_35172__$1 = state_35172;
var statearr_35183_35202 = state_35172__$1;
(statearr_35183_35202[(2)] = null);

(statearr_35183_35202[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (2))){
var state_35172__$1 = state_35172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35172__$1,(4),c);
} else {
if((state_val_35173 === (11))){
var inst_35140 = (state_35172[(8)]);
var inst_35158 = (audio_param["value"] = inst_35140);
var state_35172__$1 = state_35172;
var statearr_35184_35203 = state_35172__$1;
(statearr_35184_35203[(2)] = inst_35158);

(statearr_35184_35203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (9))){
var inst_35151 = (state_35172[(2)]);
var inst_35152 = oops.state._STAR_runtime_state_STAR_ = oops.state._STAR_runtime_state_STAR_;
var state_35172__$1 = (function (){var statearr_35185 = state_35172;
(statearr_35185[(10)] = inst_35151);

(statearr_35185[(11)] = inst_35152);

return statearr_35185;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (5))){
var inst_35147 = (new Error());
var inst_35148 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_35149 = oops.state.prepare_state.call(null,audio_param,inst_35147,inst_35148);
var inst_35150 = oops.state._STAR_runtime_state_STAR_ = inst_35149;
var state_35172__$1 = (function (){var statearr_35186 = state_35172;
(statearr_35186[(12)] = inst_35150);

return statearr_35186;
})();
var statearr_35187_35204 = state_35172__$1;
(statearr_35187_35204[(2)] = null);

(statearr_35187_35204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (10))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35172,null,null,(9),(8));
var inst_35156 = oops.core.validate_object_access_dynamically.call(null,audio_param,(0),"value",true,true,true);
var state_35172__$1 = state_35172;
if(inst_35156){
var statearr_35188_35205 = state_35172__$1;
(statearr_35188_35205[(1)] = (11));

} else {
var statearr_35189_35206 = state_35172__$1;
(statearr_35189_35206[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35173 === (8))){
var inst_35163 = (state_35172[(2)]);
var state_35172__$1 = state_35172;
var statearr_35190_35207 = state_35172__$1;
(statearr_35190_35207[(2)] = inst_35163);

(statearr_35190_35207[(1)] = (7));


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
});})(c__32685__auto___35195,c,audio_param,map__35133,map__35133__$1,param_name))
;
return ((function (switch__32590__auto__,c__32685__auto___35195,c,audio_param,map__35133,map__35133__$1,param_name){
return (function() {
var fugue$ramp$state_machine__32591__auto__ = null;
var fugue$ramp$state_machine__32591__auto____0 = (function (){
var statearr_35191 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35191[(0)] = fugue$ramp$state_machine__32591__auto__);

(statearr_35191[(1)] = (1));

return statearr_35191;
});
var fugue$ramp$state_machine__32591__auto____1 = (function (state_35172){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_35172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e35192){if((e35192 instanceof Object)){
var ex__32594__auto__ = e35192;
var statearr_35193_35208 = state_35172;
(statearr_35193_35208[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35209 = state_35172;
state_35172 = G__35209;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ramp$state_machine__32591__auto__ = function(state_35172){
switch(arguments.length){
case 0:
return fugue$ramp$state_machine__32591__auto____0.call(this);
case 1:
return fugue$ramp$state_machine__32591__auto____1.call(this,state_35172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ramp$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ramp$state_machine__32591__auto____0;
fugue$ramp$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ramp$state_machine__32591__auto____1;
return fugue$ramp$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___35195,c,audio_param,map__35133,map__35133__$1,param_name))
})();
var state__32687__auto__ = (function (){var statearr_35194 = f__32686__auto__.call(null);
(statearr_35194[(6)] = c__32685__auto___35195);

return statearr_35194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___35195,c,audio_param,map__35133,map__35133__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),c);
}));

//# sourceMappingURL=ramp.js.map?rel=1610319352562
