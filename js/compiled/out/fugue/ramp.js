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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__15117){
return cljs.core.map_QMARK_.call(null,G__15117);
})], null),(function (G__15117){
return cljs.core.map_QMARK_.call(null,G__15117);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.ramp.ramp_spec,new cljs.core.Keyword("fugue.ramp","instant","fugue.ramp/instant",1719488590),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__15118){
return cljs.core.map_QMARK_.call(null,G__15118);
}),(function (G__15118){
return cljs.core.contains_QMARK_.call(null,G__15118,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719));
})], null),(function (G__15118){
return ((cljs.core.map_QMARK_.call(null,G__15118)) && (cljs.core.contains_QMARK_.call(null,G__15118,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.ramp.ramp_spec,new cljs.core.Keyword("fugue.ramp","linear","fugue.ramp/linear",142792545),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__15119){
return cljs.core.map_QMARK_.call(null,G__15119);
}),(function (G__15119){
return cljs.core.contains_QMARK_.call(null,G__15119,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719));
}),(function (G__15119){
return cljs.core.contains_QMARK_.call(null,G__15119,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494));
})], null),(function (G__15119){
return ((cljs.core.map_QMARK_.call(null,G__15119)) && (cljs.core.contains_QMARK_.call(null,G__15119,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))) && (cljs.core.contains_QMARK_.call(null,G__15119,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.ramp.ramp_spec,new cljs.core.Keyword("fugue.ramp","exponential","fugue.ramp/exponential",1652981676),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__15120){
return cljs.core.map_QMARK_.call(null,G__15120);
}),(function (G__15120){
return cljs.core.contains_QMARK_.call(null,G__15120,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719));
}),(function (G__15120){
return cljs.core.contains_QMARK_.call(null,G__15120,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494));
})], null),(function (G__15120){
return ((cljs.core.map_QMARK_.call(null,G__15120)) && (cljs.core.contains_QMARK_.call(null,G__15120,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))) && (cljs.core.contains_QMARK_.call(null,G__15120,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)))], null),null]));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.ramp","ramp","fugue.ramp/ramp",-826246567),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),new cljs.core.Symbol("fugue.ramp","ramp-spec","fugue.ramp/ramp-spec",358899266,null),new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230)),cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("fugue.ramp","ramp-spec","fugue.ramp/ramp-spec",358899266,null),new cljs.core.Var(function(){return fugue.ramp.ramp_spec;},new cljs.core.Symbol("fugue.ramp","ramp-spec","fugue.ramp/ramp-spec",358899266,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"fugue.ramp","fugue.ramp",1406793066,null),new cljs.core.Symbol(null,"ramp-spec","ramp-spec",1441884826,null),"/home/runner/work/fugue/fugue/src/fugue/ramp.cljs",20,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(fugue.ramp.ramp_spec)?fugue.ramp.ramp_spec.cljs$lang$test:null)])),new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230)));
fugue.ramp.schedule_BANG_ = (function fugue$ramp$schedule_BANG_(audio_param,p__15121){
var map__15122 = p__15121;
var map__15122__$1 = (((((!((map__15122 == null))))?(((((map__15122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15122):map__15122);
var value = cljs.core.get.call(null,map__15122__$1,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719));
var time = cljs.core.get.call(null,map__15122__$1,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494));
var shape = cljs.core.get.call(null,map__15122__$1,new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230));
var value__$1 = (function (){var x__4219__auto__ = 1.0E-4;
var y__4220__auto__ = value;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var G__15124 = shape;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.ramp","cancel-and-hold","fugue.ramp/cancel-and-hold",1218085274),G__15124)){
return audio_param.cancelAndHoldAtTime(time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.ramp","linear","fugue.ramp/linear",142792545),G__15124)){
return audio_param.linearRampToValueAtTime(value__$1,time);
} else {
if(cljs.core._EQ_.call(null,null,G__15124)){
return audio_param.linearRampToValueAtTime(value__$1,time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.ramp","exponential","fugue.ramp/exponential",1652981676),G__15124)){
return audio_param.exponentialRampToValueAtTime((function (){var x__4219__auto__ = 1.0E-4;
var y__4220__auto__ = value__$1;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.ramp","instant","fugue.ramp/instant",1719488590),G__15124)){
return audio_param.setValueAtTime(value__$1,time);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15124)].join('')));

}
}
}
}
}
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__15125){
var map__15126 = p__15125;
var map__15126__$1 = (((((!((map__15126 == null))))?(((((map__15126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15126):map__15126);
var param_name = cljs.core.get.call(null,map__15126__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var c = cljs.core.async.chan.call(null,(1));
var audio_param = (function (){var target_obj_15128 = dest;
var _STAR_runtime_state_STAR__orig_val__15129 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__15130 = oops.state.prepare_state.call(null,target_obj_15128,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__15130;

try{return oops.core.get_selector_dynamically.call(null,target_obj_15128,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__15129;
}})();
var c__12822__auto___15188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___15188,c,audio_param,map__15126,map__15126__$1,param_name){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___15188,c,audio_param,map__15126,map__15126__$1,param_name){
return (function (state_15165){
var state_val_15166 = (state_15165[(1)]);
if((state_val_15166 === (7))){
var inst_15160 = (state_15165[(2)]);
var state_15165__$1 = (function (){var statearr_15167 = state_15165;
(statearr_15167[(7)] = inst_15160);

return statearr_15167;
})();
var statearr_15168_15189 = state_15165__$1;
(statearr_15168_15189[(2)] = null);

(statearr_15168_15189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15166 === (1))){
var state_15165__$1 = state_15165;
var statearr_15169_15190 = state_15165__$1;
(statearr_15169_15190[(2)] = null);

(statearr_15169_15190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15166 === (4))){
var inst_15133 = (state_15165[(8)]);
var inst_15133__$1 = (state_15165[(2)]);
var inst_15134 = typeof inst_15133__$1 === 'number';
var state_15165__$1 = (function (){var statearr_15170 = state_15165;
(statearr_15170[(8)] = inst_15133__$1);

return statearr_15170;
})();
if(cljs.core.truth_(inst_15134)){
var statearr_15171_15191 = state_15165__$1;
(statearr_15171_15191[(1)] = (5));

} else {
var statearr_15172_15192 = state_15165__$1;
(statearr_15172_15192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15166 === (13))){
var inst_15154 = (state_15165[(2)]);
var state_15165__$1 = (function (){var statearr_15173 = state_15165;
(statearr_15173[(9)] = inst_15154);

return statearr_15173;
})();
var statearr_15174_15193 = state_15165__$1;
(statearr_15174_15193[(2)] = audio_param);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15165__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15166 === (6))){
var inst_15133 = (state_15165[(8)]);
var inst_15158 = fugue.ramp.schedule_BANG_.call(null,audio_param,inst_15133);
var state_15165__$1 = state_15165;
var statearr_15175_15194 = state_15165__$1;
(statearr_15175_15194[(2)] = inst_15158);

(statearr_15175_15194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15166 === (3))){
var inst_15163 = (state_15165[(2)]);
var state_15165__$1 = state_15165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15165__$1,inst_15163);
} else {
if((state_val_15166 === (12))){
var state_15165__$1 = state_15165;
var statearr_15176_15195 = state_15165__$1;
(statearr_15176_15195[(2)] = null);

(statearr_15176_15195[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15166 === (2))){
var state_15165__$1 = state_15165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15165__$1,(4),c);
} else {
if((state_val_15166 === (11))){
var inst_15133 = (state_15165[(8)]);
var inst_15151 = (audio_param["value"] = inst_15133);
var state_15165__$1 = state_15165;
var statearr_15177_15196 = state_15165__$1;
(statearr_15177_15196[(2)] = inst_15151);

(statearr_15177_15196[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15166 === (9))){
var inst_15144 = (state_15165[(2)]);
var inst_15145 = oops.state._STAR_runtime_state_STAR_ = oops.state._STAR_runtime_state_STAR_;
var state_15165__$1 = (function (){var statearr_15178 = state_15165;
(statearr_15178[(10)] = inst_15145);

(statearr_15178[(11)] = inst_15144);

return statearr_15178;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15165__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15166 === (5))){
var inst_15140 = (new Error());
var inst_15141 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_15142 = oops.state.prepare_state.call(null,audio_param,inst_15140,inst_15141);
var inst_15143 = oops.state._STAR_runtime_state_STAR_ = inst_15142;
var state_15165__$1 = (function (){var statearr_15179 = state_15165;
(statearr_15179[(12)] = inst_15143);

return statearr_15179;
})();
var statearr_15180_15197 = state_15165__$1;
(statearr_15180_15197[(2)] = null);

(statearr_15180_15197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15166 === (10))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15165,null,null,(9),(8));
var inst_15149 = oops.core.validate_object_access_dynamically.call(null,audio_param,(0),"value",true,true,true);
var state_15165__$1 = state_15165;
if(inst_15149){
var statearr_15181_15198 = state_15165__$1;
(statearr_15181_15198[(1)] = (11));

} else {
var statearr_15182_15199 = state_15165__$1;
(statearr_15182_15199[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15166 === (8))){
var inst_15156 = (state_15165[(2)]);
var state_15165__$1 = state_15165;
var statearr_15183_15200 = state_15165__$1;
(statearr_15183_15200[(2)] = inst_15156);

(statearr_15183_15200[(1)] = (7));


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
});})(c__12822__auto___15188,c,audio_param,map__15126,map__15126__$1,param_name))
;
return ((function (switch__12727__auto__,c__12822__auto___15188,c,audio_param,map__15126,map__15126__$1,param_name){
return (function() {
var fugue$ramp$state_machine__12728__auto__ = null;
var fugue$ramp$state_machine__12728__auto____0 = (function (){
var statearr_15184 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15184[(0)] = fugue$ramp$state_machine__12728__auto__);

(statearr_15184[(1)] = (1));

return statearr_15184;
});
var fugue$ramp$state_machine__12728__auto____1 = (function (state_15165){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_15165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e15185){if((e15185 instanceof Object)){
var ex__12731__auto__ = e15185;
var statearr_15186_15201 = state_15165;
(statearr_15186_15201[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15202 = state_15165;
state_15165 = G__15202;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
fugue$ramp$state_machine__12728__auto__ = function(state_15165){
switch(arguments.length){
case 0:
return fugue$ramp$state_machine__12728__auto____0.call(this);
case 1:
return fugue$ramp$state_machine__12728__auto____1.call(this,state_15165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ramp$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ramp$state_machine__12728__auto____0;
fugue$ramp$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ramp$state_machine__12728__auto____1;
return fugue$ramp$state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___15188,c,audio_param,map__15126,map__15126__$1,param_name))
})();
var state__12824__auto__ = (function (){var statearr_15187 = f__12823__auto__.call(null);
(statearr_15187[(6)] = c__12822__auto___15188);

return statearr_15187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___15188,c,audio_param,map__15126,map__15126__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),c);
}));

//# sourceMappingURL=ramp.js.map?rel=1611088190739
