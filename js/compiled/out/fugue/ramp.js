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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35095){
return cljs.core.map_QMARK_.call(null,G__35095);
})], null),(function (G__35095){
return cljs.core.map_QMARK_.call(null,G__35095);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.ramp.ramp_spec,new cljs.core.Keyword("fugue.ramp","instant","fugue.ramp/instant",1719488590),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35096){
return cljs.core.map_QMARK_.call(null,G__35096);
}),(function (G__35096){
return cljs.core.contains_QMARK_.call(null,G__35096,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719));
})], null),(function (G__35096){
return ((cljs.core.map_QMARK_.call(null,G__35096)) && (cljs.core.contains_QMARK_.call(null,G__35096,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.ramp.ramp_spec,new cljs.core.Keyword("fugue.ramp","linear","fugue.ramp/linear",142792545),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35097){
return cljs.core.map_QMARK_.call(null,G__35097);
}),(function (G__35097){
return cljs.core.contains_QMARK_.call(null,G__35097,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719));
}),(function (G__35097){
return cljs.core.contains_QMARK_.call(null,G__35097,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494));
})], null),(function (G__35097){
return ((cljs.core.map_QMARK_.call(null,G__35097)) && (cljs.core.contains_QMARK_.call(null,G__35097,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))) && (cljs.core.contains_QMARK_.call(null,G__35097,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.ramp.ramp_spec,new cljs.core.Keyword("fugue.ramp","exponential","fugue.ramp/exponential",1652981676),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35098){
return cljs.core.map_QMARK_.call(null,G__35098);
}),(function (G__35098){
return cljs.core.contains_QMARK_.call(null,G__35098,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719));
}),(function (G__35098){
return cljs.core.contains_QMARK_.call(null,G__35098,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494));
})], null),(function (G__35098){
return ((cljs.core.map_QMARK_.call(null,G__35098)) && (cljs.core.contains_QMARK_.call(null,G__35098,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))) && (cljs.core.contains_QMARK_.call(null,G__35098,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494)))], null),null]));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.ramp","ramp","fugue.ramp/ramp",-826246567),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),new cljs.core.Symbol("fugue.ramp","ramp-spec","fugue.ramp/ramp-spec",358899266,null),new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230)),cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("fugue.ramp","ramp-spec","fugue.ramp/ramp-spec",358899266,null),new cljs.core.Var(function(){return fugue.ramp.ramp_spec;},new cljs.core.Symbol("fugue.ramp","ramp-spec","fugue.ramp/ramp-spec",358899266,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"fugue.ramp","fugue.ramp",1406793066,null),new cljs.core.Symbol(null,"ramp-spec","ramp-spec",1441884826,null),"/home/runner/work/fugue/fugue/src/fugue/ramp.cljs",20,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(fugue.ramp.ramp_spec)?fugue.ramp.ramp_spec.cljs$lang$test:null)])),new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230)));
fugue.ramp.schedule_BANG_ = (function fugue$ramp$schedule_BANG_(audio_param,p__35099){
var map__35100 = p__35099;
var map__35100__$1 = (((((!((map__35100 == null))))?(((((map__35100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35100):map__35100);
var value = cljs.core.get.call(null,map__35100__$1,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719));
var time = cljs.core.get.call(null,map__35100__$1,new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494));
var shape = cljs.core.get.call(null,map__35100__$1,new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230));
var value__$1 = (function (){var x__4219__auto__ = 1.0E-4;
var y__4220__auto__ = value;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var G__35102 = shape;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.ramp","cancel-and-hold","fugue.ramp/cancel-and-hold",1218085274),G__35102)){
return audio_param.cancelAndHoldAtTime(time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.ramp","linear","fugue.ramp/linear",142792545),G__35102)){
return audio_param.linearRampToValueAtTime(value__$1,time);
} else {
if(cljs.core._EQ_.call(null,null,G__35102)){
return audio_param.linearRampToValueAtTime(value__$1,time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.ramp","exponential","fugue.ramp/exponential",1652981676),G__35102)){
return audio_param.exponentialRampToValueAtTime((function (){var x__4219__auto__ = 1.0E-4;
var y__4220__auto__ = value__$1;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})(),time);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.ramp","instant","fugue.ramp/instant",1719488590),G__35102)){
return audio_param.setValueAtTime(value__$1,time);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35102)].join('')));

}
}
}
}
}
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__35103){
var map__35104 = p__35103;
var map__35104__$1 = (((((!((map__35104 == null))))?(((((map__35104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35104):map__35104);
var param_name = cljs.core.get.call(null,map__35104__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var c = cljs.core.async.chan.call(null,(1));
var audio_param = (function (){var target_obj_35106 = dest;
var _STAR_runtime_state_STAR__orig_val__35107 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35108 = oops.state.prepare_state.call(null,target_obj_35106,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35108;

try{return oops.core.get_selector_dynamically.call(null,target_obj_35106,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35107;
}})();
var c__32691__auto___35166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___35166,c,audio_param,map__35104,map__35104__$1,param_name){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___35166,c,audio_param,map__35104,map__35104__$1,param_name){
return (function (state_35143){
var state_val_35144 = (state_35143[(1)]);
if((state_val_35144 === (7))){
var inst_35138 = (state_35143[(2)]);
var state_35143__$1 = (function (){var statearr_35145 = state_35143;
(statearr_35145[(7)] = inst_35138);

return statearr_35145;
})();
var statearr_35146_35167 = state_35143__$1;
(statearr_35146_35167[(2)] = null);

(statearr_35146_35167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (1))){
var state_35143__$1 = state_35143;
var statearr_35147_35168 = state_35143__$1;
(statearr_35147_35168[(2)] = null);

(statearr_35147_35168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (4))){
var inst_35111 = (state_35143[(8)]);
var inst_35111__$1 = (state_35143[(2)]);
var inst_35112 = typeof inst_35111__$1 === 'number';
var state_35143__$1 = (function (){var statearr_35148 = state_35143;
(statearr_35148[(8)] = inst_35111__$1);

return statearr_35148;
})();
if(cljs.core.truth_(inst_35112)){
var statearr_35149_35169 = state_35143__$1;
(statearr_35149_35169[(1)] = (5));

} else {
var statearr_35150_35170 = state_35143__$1;
(statearr_35150_35170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (13))){
var inst_35132 = (state_35143[(2)]);
var state_35143__$1 = (function (){var statearr_35151 = state_35143;
(statearr_35151[(9)] = inst_35132);

return statearr_35151;
})();
var statearr_35152_35171 = state_35143__$1;
(statearr_35152_35171[(2)] = audio_param);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35143__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (6))){
var inst_35111 = (state_35143[(8)]);
var inst_35136 = fugue.ramp.schedule_BANG_.call(null,audio_param,inst_35111);
var state_35143__$1 = state_35143;
var statearr_35153_35172 = state_35143__$1;
(statearr_35153_35172[(2)] = inst_35136);

(statearr_35153_35172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (3))){
var inst_35141 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35143__$1,inst_35141);
} else {
if((state_val_35144 === (12))){
var state_35143__$1 = state_35143;
var statearr_35154_35173 = state_35143__$1;
(statearr_35154_35173[(2)] = null);

(statearr_35154_35173[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (2))){
var state_35143__$1 = state_35143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35143__$1,(4),c);
} else {
if((state_val_35144 === (11))){
var inst_35111 = (state_35143[(8)]);
var inst_35129 = (audio_param["value"] = inst_35111);
var state_35143__$1 = state_35143;
var statearr_35155_35174 = state_35143__$1;
(statearr_35155_35174[(2)] = inst_35129);

(statearr_35155_35174[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (9))){
var inst_35122 = (state_35143[(2)]);
var inst_35123 = oops.state._STAR_runtime_state_STAR_ = oops.state._STAR_runtime_state_STAR_;
var state_35143__$1 = (function (){var statearr_35156 = state_35143;
(statearr_35156[(10)] = inst_35122);

(statearr_35156[(11)] = inst_35123);

return statearr_35156;
})();
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35143__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (5))){
var inst_35118 = (new Error());
var inst_35119 = function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))};
var inst_35120 = oops.state.prepare_state.call(null,audio_param,inst_35118,inst_35119);
var inst_35121 = oops.state._STAR_runtime_state_STAR_ = inst_35120;
var state_35143__$1 = (function (){var statearr_35157 = state_35143;
(statearr_35157[(12)] = inst_35121);

return statearr_35157;
})();
var statearr_35158_35175 = state_35143__$1;
(statearr_35158_35175[(2)] = null);

(statearr_35158_35175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (10))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35143,null,null,(9),(8));
var inst_35127 = oops.core.validate_object_access_dynamically.call(null,audio_param,(0),"value",true,true,true);
var state_35143__$1 = state_35143;
if(inst_35127){
var statearr_35159_35176 = state_35143__$1;
(statearr_35159_35176[(1)] = (11));

} else {
var statearr_35160_35177 = state_35143__$1;
(statearr_35160_35177[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35144 === (8))){
var inst_35134 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
var statearr_35161_35178 = state_35143__$1;
(statearr_35161_35178[(2)] = inst_35134);

(statearr_35161_35178[(1)] = (7));


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
});})(c__32691__auto___35166,c,audio_param,map__35104,map__35104__$1,param_name))
;
return ((function (switch__32596__auto__,c__32691__auto___35166,c,audio_param,map__35104,map__35104__$1,param_name){
return (function() {
var fugue$ramp$state_machine__32597__auto__ = null;
var fugue$ramp$state_machine__32597__auto____0 = (function (){
var statearr_35162 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35162[(0)] = fugue$ramp$state_machine__32597__auto__);

(statearr_35162[(1)] = (1));

return statearr_35162;
});
var fugue$ramp$state_machine__32597__auto____1 = (function (state_35143){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_35143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e35163){if((e35163 instanceof Object)){
var ex__32600__auto__ = e35163;
var statearr_35164_35179 = state_35143;
(statearr_35164_35179[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35180 = state_35143;
state_35143 = G__35180;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
fugue$ramp$state_machine__32597__auto__ = function(state_35143){
switch(arguments.length){
case 0:
return fugue$ramp$state_machine__32597__auto____0.call(this);
case 1:
return fugue$ramp$state_machine__32597__auto____1.call(this,state_35143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ramp$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ramp$state_machine__32597__auto____0;
fugue$ramp$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ramp$state_machine__32597__auto____1;
return fugue$ramp$state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___35166,c,audio_param,map__35104,map__35104__$1,param_name))
})();
var state__32693__auto__ = (function (){var statearr_35165 = f__32692__auto__.call(null);
(statearr_35165[(6)] = c__32691__auto___35166);

return statearr_35165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___35166,c,audio_param,map__35104,map__35104__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),c);
}));

//# sourceMappingURL=ramp.js.map?rel=1610334750532
