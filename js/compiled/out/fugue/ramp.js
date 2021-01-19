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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__17215){
return cljs.core.map_QMARK_.call(null,G__17215);
})], null),(function (G__17215){
return cljs.core.map_QMARK_.call(null,G__17215);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.ramp.ramp_spec,new cljs.core.Keyword("fugue.ramp","instant","fugue.ramp/instant",1719488590),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__17216){
return cljs.core.map_QMARK_.call(null,G__17216);
}),(function (G__17216){
return cljs.core.contains_QMARK_.call(null,G__17216,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719));
})], null),(function (G__17216){
return ((cljs.core.map_QMARK_.call(null,G__17216)) && (cljs.core.contains_QMARK_.call(null,G__17216,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.ramp.ramp_spec,new cljs.core.Keyword("fugue.ramp","linear","fugue.ramp/linear",142792545),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__17217){
return cljs.core.map_QMARK_.call(null,G__17217);
}),(function (G__17217){
return cljs.core.contains_QMARK_.call(null,G__17217,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719));
}),(function (G__17217){
return cljs.core.contains_QMARK_.call(null,G__17217,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494));
})], null),(function (G__17217){
return ((cljs.core.map_QMARK_.call(null,G__17217)) && (cljs.core.contains_QMARK_.call(null,G__17217,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))) && (cljs.core.contains_QMARK_.call(null,G__17217,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.ramp.ramp_spec,new cljs.core.Keyword("fugue.ramp","exponential","fugue.ramp/exponential",1652981676),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__17218){
return cljs.core.map_QMARK_.call(null,G__17218);
}),(function (G__17218){
return cljs.core.contains_QMARK_.call(null,G__17218,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719));
}),(function (G__17218){
return cljs.core.contains_QMARK_.call(null,G__17218,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494));
})], null),(function (G__17218){
return ((cljs.core.map_QMARK_.call(null,G__17218)) && (cljs.core.contains_QMARK_.call(null,G__17218,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))) && (cljs.core.contains_QMARK_.call(null,G__17218,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)))], null),null]));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.ramp","ramp","fugue.ramp/ramp",-826246567),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),new cljs.core.Symbol("fugue.ramp","ramp-spec","fugue.ramp/ramp-spec",358899266,null),new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230)),cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("fugue.ramp","ramp-spec","fugue.ramp/ramp-spec",358899266,null),new cljs.core.Var(function(){return fugue.ramp.ramp_spec;},new cljs.core.Symbol("fugue.ramp","ramp-spec","fugue.ramp/ramp-spec",358899266,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"fugue.ramp","fugue.ramp",1406793066,null),new cljs.core.Symbol(null,"ramp-spec","ramp-spec",1441884826,null),"/home/runner/work/fugue/fugue/src/fugue/ramp.cljs",20,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(fugue.ramp.ramp_spec)?fugue.ramp.ramp_spec.cljs$lang$test:null)])),new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230)));
fugue.ramp.schedule_BANG_ = (function fugue$ramp$schedule_BANG_(audio_param,p__17219){
var map__17220 = p__17219;
var map__17220__$1 = (((((!((map__17220 == null))))?(((((map__17220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17220):map__17220);
var value = cljs.core.get.call(null,map__17220__$1,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719));
var time = cljs.core.get.call(null,map__17220__$1,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494));
var shape = cljs.core.get.call(null,map__17220__$1,new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230));
var value__$1 = (function (){var x__4219__auto__ = 1.0E-4;
var y__4220__auto__ = value;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var G__17222 = shape;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.ramp","cancel-and-hold","fugue.ramp/cancel-and-hold",1218085274),G__17222)){
return audio_param.cancelAndHoldAtTime(time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.ramp","linear","fugue.ramp/linear",142792545),G__17222)){
return audio_param.linearRampToValueAtTime(value__$1,time);
} else {
if(cljs.core._EQ_.call(null,null,G__17222)){
return audio_param.linearRampToValueAtTime(value__$1,time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.ramp","exponential","fugue.ramp/exponential",1652981676),G__17222)){
return audio_param.exponentialRampToValueAtTime((function (){var x__4219__auto__ = 1.0E-4;
var y__4220__auto__ = value__$1;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.ramp","instant","fugue.ramp/instant",1719488590),G__17222)){
return audio_param.setValueAtTime(value__$1,time);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17222)].join('')));

}
}
}
}
}
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__17223){
var map__17224 = p__17223;
var map__17224__$1 = (((((!((map__17224 == null))))?(((((map__17224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17224):map__17224);
var param_name = cljs.core.get.call(null,map__17224__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var c = cljs.core.async.chan.call(null,(1));
var audio_param = (function (){var target_obj_17226 = dest;
var _STAR_runtime_state_STAR__orig_val__17227 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17228 = oops.state.prepare_state.call(null,target_obj_17226,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17228;

try{return oops.core.get_selector_dynamically.call(null,target_obj_17226,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17227;
}})();
var c__14920__auto___17286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___17286,c,audio_param,map__17224,map__17224__$1,param_name){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___17286,c,audio_param,map__17224,map__17224__$1,param_name){
return (function (state_17263){
var state_val_17264 = (state_17263[(1)]);
if((state_val_17264 === (7))){
var inst_17258 = (state_17263[(2)]);
var state_17263__$1 = (function (){var statearr_17265 = state_17263;
(statearr_17265[(7)] = inst_17258);

return statearr_17265;
})();
var statearr_17266_17287 = state_17263__$1;
(statearr_17266_17287[(2)] = null);

(statearr_17266_17287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (1))){
var state_17263__$1 = state_17263;
var statearr_17267_17288 = state_17263__$1;
(statearr_17267_17288[(2)] = null);

(statearr_17267_17288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (4))){
var inst_17231 = (state_17263[(8)]);
var inst_17231__$1 = (state_17263[(2)]);
var inst_17232 = typeof inst_17231__$1 === 'number';
var state_17263__$1 = (function (){var statearr_17268 = state_17263;
(statearr_17268[(8)] = inst_17231__$1);

return statearr_17268;
})();
if(cljs.core.truth_(inst_17232)){
var statearr_17269_17289 = state_17263__$1;
(statearr_17269_17289[(1)] = (5));

} else {
var statearr_17270_17290 = state_17263__$1;
(statearr_17270_17290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (13))){
var inst_17252 = (state_17263[(2)]);
var state_17263__$1 = (function (){var statearr_17271 = state_17263;
(statearr_17271[(9)] = inst_17252);

return statearr_17271;
})();
var statearr_17272_17291 = state_17263__$1;
(statearr_17272_17291[(2)] = audio_param);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17263__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (6))){
var inst_17231 = (state_17263[(8)]);
var inst_17256 = fugue.ramp.schedule_BANG_.call(null,audio_param,inst_17231);
var state_17263__$1 = state_17263;
var statearr_17273_17292 = state_17263__$1;
(statearr_17273_17292[(2)] = inst_17256);

(statearr_17273_17292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (3))){
var inst_17261 = (state_17263[(2)]);
var state_17263__$1 = state_17263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17263__$1,inst_17261);
} else {
if((state_val_17264 === (12))){
var state_17263__$1 = state_17263;
var statearr_17274_17293 = state_17263__$1;
(statearr_17274_17293[(2)] = null);

(statearr_17274_17293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (2))){
var state_17263__$1 = state_17263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17263__$1,(4),c);
} else {
if((state_val_17264 === (11))){
var inst_17231 = (state_17263[(8)]);
var inst_17249 = (audio_param["value"] = inst_17231);
var state_17263__$1 = state_17263;
var statearr_17275_17294 = state_17263__$1;
(statearr_17275_17294[(2)] = inst_17249);

(statearr_17275_17294[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (9))){
var inst_17242 = (state_17263[(2)]);
var inst_17243 = oops.state._STAR_runtime_state_STAR_ = oops.state._STAR_runtime_state_STAR_;
var state_17263__$1 = (function (){var statearr_17276 = state_17263;
(statearr_17276[(10)] = inst_17243);

(statearr_17276[(11)] = inst_17242);

return statearr_17276;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17263__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (5))){
var inst_17238 = (new Error());
var inst_17239 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_17240 = oops.state.prepare_state.call(null,audio_param,inst_17238,inst_17239);
var inst_17241 = oops.state._STAR_runtime_state_STAR_ = inst_17240;
var state_17263__$1 = (function (){var statearr_17277 = state_17263;
(statearr_17277[(12)] = inst_17241);

return statearr_17277;
})();
var statearr_17278_17295 = state_17263__$1;
(statearr_17278_17295[(2)] = null);

(statearr_17278_17295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (10))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17263,null,null,(9),(8));
var inst_17247 = oops.core.validate_object_access_dynamically.call(null,audio_param,(0),"value",true,true,true);
var state_17263__$1 = state_17263;
if(inst_17247){
var statearr_17279_17296 = state_17263__$1;
(statearr_17279_17296[(1)] = (11));

} else {
var statearr_17280_17297 = state_17263__$1;
(statearr_17280_17297[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (8))){
var inst_17254 = (state_17263[(2)]);
var state_17263__$1 = state_17263;
var statearr_17281_17298 = state_17263__$1;
(statearr_17281_17298[(2)] = inst_17254);

(statearr_17281_17298[(1)] = (7));


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
});})(c__14920__auto___17286,c,audio_param,map__17224,map__17224__$1,param_name))
;
return ((function (switch__14825__auto__,c__14920__auto___17286,c,audio_param,map__17224,map__17224__$1,param_name){
return (function() {
var fugue$ramp$state_machine__14826__auto__ = null;
var fugue$ramp$state_machine__14826__auto____0 = (function (){
var statearr_17282 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17282[(0)] = fugue$ramp$state_machine__14826__auto__);

(statearr_17282[(1)] = (1));

return statearr_17282;
});
var fugue$ramp$state_machine__14826__auto____1 = (function (state_17263){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_17263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e17283){if((e17283 instanceof Object)){
var ex__14829__auto__ = e17283;
var statearr_17284_17299 = state_17263;
(statearr_17284_17299[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17300 = state_17263;
state_17263 = G__17300;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
fugue$ramp$state_machine__14826__auto__ = function(state_17263){
switch(arguments.length){
case 0:
return fugue$ramp$state_machine__14826__auto____0.call(this);
case 1:
return fugue$ramp$state_machine__14826__auto____1.call(this,state_17263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ramp$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ramp$state_machine__14826__auto____0;
fugue$ramp$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ramp$state_machine__14826__auto____1;
return fugue$ramp$state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___17286,c,audio_param,map__17224,map__17224__$1,param_name))
})();
var state__14922__auto__ = (function (){var statearr_17285 = f__14921__auto__.call(null);
(statearr_17285[(6)] = c__14920__auto___17286);

return statearr_17285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___17286,c,audio_param,map__17224,map__17224__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),c);
}));

//# sourceMappingURL=ramp.js.map?rel=1611075880881
