// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.envelope');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('oops.core');
goog.require('fugue.audio');
goog.require('fugue.synthdef');
goog.require('fugue.ramp');
goog.require('fugue.chan');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.envelope","stage","fugue.envelope/stage",494509546),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346),new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35437){
return cljs.core.map_QMARK_.call(null,G__35437);
}),(function (G__35437){
return cljs.core.contains_QMARK_.call(null,G__35437,new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346));
}),(function (G__35437){
return cljs.core.contains_QMARK_.call(null,G__35437,new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589));
})], null),(function (G__35437){
return ((cljs.core.map_QMARK_.call(null,G__35437)) && (cljs.core.contains_QMARK_.call(null,G__35437,new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346))) && (cljs.core.contains_QMARK_.call(null,G__35437,new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346),new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346),new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346),new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230)], null)])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.envelope","stages","fugue.envelope/stages",-1255369578),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Keyword("fugue.envelope","stage","fugue.envelope/stage",494509546)),cljs.spec.alpha.rep_impl.call(null,new cljs.core.Keyword("fugue.envelope","stage","fugue.envelope/stage",494509546),new cljs.core.Keyword("fugue.envelope","stage","fugue.envelope/stage",494509546)));
fugue.envelope.start_event = (function fugue$envelope$start_event(start_time,last_scheduled){
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fugue.ramp","ramp","fugue.ramp/ramp",-826246567),last_scheduled)){
} else {
throw (new Error("Assert failed: (s/valid? :fugue.ramp/ramp last-scheduled)"));
}

var _PERCENT_ = (function (){var overlapping = (start_time < new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494).cljs$core$IFn$_invoke$arity$1(last_scheduled));
return cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494),start_time], null),((overlapping)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230),new cljs.core.Keyword("fugue.ramp","cancel-and-hold","fugue.ramp/cancel-and-hold",1218085274)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230),new cljs.core.Keyword("fugue.ramp","instant","fugue.ramp/instant",1719488590),new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719).cljs$core$IFn$_invoke$arity$1(last_scheduled)], null)));
})();
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fugue.ramp","ramp","fugue.ramp/ramp",-826246567),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :fugue.ramp/ramp %)"));
}

return _PERCENT_;
});
fugue.envelope.ramps = (function fugue$envelope$ramps(start_time,stages,scale,bias){
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fugue.envelope","stages","fugue.envelope/stages",-1255369578),stages)){
} else {
throw (new Error("Assert failed: (s/valid? :fugue.envelope/stages stages)"));
}

var _PERCENT_ = (function (){var durations = cljs.core.map.call(null,new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346),stages);
var times = cljs.core.reductions.call(null,cljs.core._PLUS_,start_time,durations);
var levels = cljs.core.map.call(null,((function (durations,times){
return (function (p1__35438_SHARP_){
return (bias + (scale * new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589).cljs$core$IFn$_invoke$arity$1(p1__35438_SHARP_)));
});})(durations,times))
,stages);
var shapes = cljs.core.map.call(null,((function (durations,times,levels){
return (function (p1__35439_SHARP_){
return cljs.core.get.call(null,p1__35439_SHARP_,new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230),new cljs.core.Keyword("fugue.ramp","exponential","fugue.ramp/exponential",1652981676));
});})(durations,times,levels))
,stages);
return cljs.core.map.call(null,((function (durations,times,levels,shapes){
return (function (time,level,shape){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494),time,new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),level,new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230),shape], null);
});})(durations,times,levels,shapes))
,cljs.core.rest.call(null,times),levels,shapes);
})();
if(cljs.spec.alpha.valid_QMARK_.call(null,cljs.spec.alpha.rep_impl.call(null,new cljs.core.Keyword("fugue.ramp","ramp","fugue.ramp/ramp",-826246567),new cljs.core.Keyword("fugue.ramp","ramp","fugue.ramp/ramp",-826246567)),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? (s/* :fugue.ramp/ramp) %)"));
}

return _PERCENT_;
});
/**
 * Returns a stateful transducer that maps envelope stage packets to ramps using now-fn
 */
fugue.envelope.stages_x_ramp = (function fugue$envelope$stages_x_ramp(now_fn){
return (function (rf){
var v_prev_gate = cljs.core.volatile_BANG_.call(null,(0));
var v_last_scheduled = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.ramp","shape","fugue.ramp/shape",111917230),new cljs.core.Keyword("fugue.ramp","cancel-and-hold","fugue.ramp/cancel-and-hold",1218085274),new cljs.core.Keyword("fugue.ramp","value","fugue.ramp/value",-708720719),(0),new cljs.core.Keyword("fugue.ramp","time","fugue.ramp/time",-1815618494),now_fn.call(null)], null));
return ((function (v_prev_gate,v_last_scheduled){
return (function() {
var G__35443 = null;
var G__35443__0 = (function (){
return rf.call(null);
});
var G__35443__1 = (function (result){
return rf.call(null,result);
});
var G__35443__2 = (function (result,p__35440){
var map__35441 = p__35440;
var map__35441__$1 = (((((!((map__35441 == null))))?(((((map__35441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35441):map__35441);
var env = cljs.core.get.call(null,map__35441__$1,new cljs.core.Keyword("fugue.envelope","env","fugue.envelope/env",1112422551));
var gate = cljs.core.get.call(null,map__35441__$1,new cljs.core.Keyword("fugue.envelope","gate","fugue.envelope/gate",1600847179));
var scale = cljs.core.get.call(null,map__35441__$1,new cljs.core.Keyword("fugue.envelope","scale","fugue.envelope/scale",-1562195919));
var bias = cljs.core.get.call(null,map__35441__$1,new cljs.core.Keyword("fugue.envelope","bias","fugue.envelope/bias",1014735024));
var prev_gate = cljs.core.deref.call(null,v_prev_gate);
var last_scheduled = cljs.core.deref.call(null,v_last_scheduled);
var start_time = (now_fn.call(null) + (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(gate);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})());
var gate_val = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(gate);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return gate;
}
})();
var stages = (((gate_val > (0)))?new cljs.core.Keyword("fugue.envelope","open","fugue.envelope/open",1164786282):new cljs.core.Keyword("fugue.envelope","closed","fugue.envelope/closed",416754455)).cljs$core$IFn$_invoke$arity$1(env);
var start_event = fugue.envelope.start_event.call(null,start_time,last_scheduled);
var ramp_events = fugue.envelope.ramps.call(null,start_time,stages,(scale * gate_val),bias);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not_EQ_.call(null,prev_gate,gate);
if(and__4120__auto__){
return cljs.core.not_empty.call(null,ramp_events);
} else {
return and__4120__auto__;
}
})())){
var all_events = cljs.core.cons.call(null,start_event,ramp_events);
cljs.core.vreset_BANG_.call(null,v_prev_gate,gate);

cljs.core.vreset_BANG_.call(null,v_last_scheduled,cljs.core.last.call(null,all_events));

return cljs.core.reduce.call(null,rf,result,all_events);
} else {
return result;
}
});
G__35443 = function(result,p__35440){
switch(arguments.length){
case 0:
return G__35443__0.call(this);
case 1:
return G__35443__1.call(this,result);
case 2:
return G__35443__2.call(this,result,p__35440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35443.cljs$core$IFn$_invoke$arity$0 = G__35443__0;
G__35443.cljs$core$IFn$_invoke$arity$1 = G__35443__1;
G__35443.cljs$core$IFn$_invoke$arity$2 = G__35443__2;
return G__35443;
})()
;})(v_prev_gate,v_last_scheduled))
});
});
cljs.core._add_method.call(null,fugue.chan.make_transducer,new cljs.core.Keyword("fugue.envelope","adsr","fugue.envelope/adsr",1664722965),(function (_,___$1){
return cljs.core.map.call(null,(function (p__35444){
var map__35445 = p__35444;
var map__35445__$1 = (((((!((map__35445 == null))))?(((((map__35445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35445):map__35445);
var a = cljs.core.get.call(null,map__35445__$1,new cljs.core.Keyword("fugue.envelope","a","fugue.envelope/a",-236705240));
var d = cljs.core.get.call(null,map__35445__$1,new cljs.core.Keyword("fugue.envelope","d","fugue.envelope/d",-989442482));
var s = cljs.core.get.call(null,map__35445__$1,new cljs.core.Keyword("fugue.envelope","s","fugue.envelope/s",-708464424));
var r = cljs.core.get.call(null,map__35445__$1,new cljs.core.Keyword("fugue.envelope","r","fugue.envelope/r",-1841532240));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.envelope","open","fugue.envelope/open",1164786282),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346),a,new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346),d,new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589),s], null)], null),new cljs.core.Keyword("fugue.envelope","closed","fugue.envelope/closed",416754455),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346),r,new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589),(0)], null)], null)], null);
}));
}));
fugue.envelope.adsr = (function fugue$envelope$adsr(a,d,s,r){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.chan","transducer","fugue.chan/transducer",546482313),new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640),new cljs.core.Keyword("fugue.envelope","adsr","fugue.envelope/adsr",1664722965)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fugue.envelope","a","fugue.envelope/a",-236705240),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null),new cljs.core.Keyword("fugue.envelope","d","fugue.envelope/d",-989442482),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null),new cljs.core.Keyword("fugue.envelope","s","fugue.envelope/s",-708464424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),new cljs.core.Keyword("fugue.envelope","r","fugue.envelope/r",-1841532240),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null)], null));
});
cljs.core._add_method.call(null,fugue.chan.make_transducer,new cljs.core.Keyword("fugue.envelope","perc","fugue.envelope/perc",-790645078),(function (_,___$1){
return cljs.core.map.call(null,(function (p__35447){
var map__35448 = p__35447;
var map__35448__$1 = (((((!((map__35448 == null))))?(((((map__35448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35448):map__35448);
var a = cljs.core.get.call(null,map__35448__$1,new cljs.core.Keyword("fugue.envelope","a","fugue.envelope/a",-236705240));
var d = cljs.core.get.call(null,map__35448__$1,new cljs.core.Keyword("fugue.envelope","d","fugue.envelope/d",-989442482));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.envelope","open","fugue.envelope/open",1164786282),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346),a,new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346),d,new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589),(0)], null)], null),new cljs.core.Keyword("fugue.envelope","closed","fugue.envelope/closed",416754455),cljs.core.PersistentVector.EMPTY], null);
}));
}));
fugue.envelope.perc = (function fugue$envelope$perc(a,d){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.chan","transducer","fugue.chan/transducer",546482313),new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640),new cljs.core.Keyword("fugue.envelope","perc","fugue.envelope/perc",-790645078)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.envelope","a","fugue.envelope/a",-236705240),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),a], null),new cljs.core.Keyword("fugue.envelope","d","fugue.envelope/d",-989442482),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),d], null)], null));
});
cljs.core._add_method.call(null,fugue.chan.make_transducer,new cljs.core.Keyword("fugue.envelope","pulse","fugue.envelope/pulse",-1585151394),(function (_,___$1){
return cljs.core.map.call(null,(function (p__35450){
var map__35451 = p__35450;
var map__35451__$1 = (((((!((map__35451 == null))))?(((((map__35451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35451):map__35451);
var duration = cljs.core.get.call(null,map__35451__$1,new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.envelope","open","fugue.envelope/open",1164786282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346),(0),new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346),duration,new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346),(0),new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589),(0)], null)], null),new cljs.core.Keyword("fugue.envelope","closed","fugue.envelope/closed",416754455),cljs.core.PersistentVector.EMPTY], null);
}));
}));
fugue.envelope.pulse = (function fugue$envelope$pulse(duration){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.chan","transducer","fugue.chan/transducer",546482313),new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640),new cljs.core.Keyword("fugue.envelope","pulse","fugue.envelope/pulse",-1585151394)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),duration], null)], null));
});
cljs.core._add_method.call(null,fugue.chan.make_transducer,new cljs.core.Keyword("fugue.envelope","slide","fugue.envelope/slide",1477807070),(function (_,___$1){
return cljs.core.map.call(null,(function (p__35453){
var map__35454 = p__35453;
var map__35454__$1 = (((((!((map__35454 == null))))?(((((map__35454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35454):map__35454);
var duration = cljs.core.get.call(null,map__35454__$1,new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.envelope","open","fugue.envelope/open",1164786282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346),duration,new cljs.core.Keyword("fugue.envelope","target","fugue.envelope/target",-1091406589),(1)], null)], null),new cljs.core.Keyword("fugue.envelope","closed","fugue.envelope/closed",416754455),cljs.core.PersistentVector.EMPTY], null);
}));
}));
fugue.envelope.slide = (function fugue$envelope$slide(duration){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.chan","transducer","fugue.chan/transducer",546482313),new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640),new cljs.core.Keyword("fugue.envelope","slide","fugue.envelope/slide",1477807070)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.envelope","duration","fugue.envelope/duration",-1569089346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),duration], null)], null));
});
cljs.core._add_method.call(null,fugue.chan.make_transducer,new cljs.core.Keyword("fugue.envelope","env-gen","fugue.envelope/env-gen",-963204886),(function (p__35456,_){
var map__35457 = p__35456;
var map__35457__$1 = (((((!((map__35457 == null))))?(((((map__35457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35457):map__35457);
var actx = cljs.core.get.call(null,map__35457__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
return fugue.envelope.stages_x_ramp.call(null,((function (map__35457,map__35457__$1,actx){
return (function (){
var target_obj_35459 = actx;
var _STAR_runtime_state_STAR__orig_val__35461 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35462 = oops.state.prepare_state.call(null,target_obj_35459,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35462;

try{var next_obj_35460 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35459,(0),"currentTime",true,true,false))?(target_obj_35459["currentTime"]):null);
return next_obj_35460;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35461;
}});})(map__35457,map__35457__$1,actx))
);
}));
fugue.envelope.env_gen = (function fugue$envelope$env_gen(var_args){
var G__35464 = arguments.length;
switch (G__35464) {
case 2:
return fugue.envelope.env_gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fugue.envelope.env_gen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fugue.envelope.env_gen.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fugue.envelope.env_gen.cljs$core$IFn$_invoke$arity$2 = (function (env,gate){
return fugue.envelope.env_gen.call(null,env,gate,(1));
});

fugue.envelope.env_gen.cljs$core$IFn$_invoke$arity$3 = (function (env,gate,scale){
return fugue.envelope.env_gen.call(null,env,gate,scale,(0));
});

fugue.envelope.env_gen.cljs$core$IFn$_invoke$arity$4 = (function (env,gate,scale,bias){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.chan","transducer","fugue.chan/transducer",546482313),new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640),new cljs.core.Keyword("fugue.envelope","env-gen","fugue.envelope/env-gen",-963204886)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fugue.envelope","env","fugue.envelope/env",1112422551),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [env], null),new cljs.core.Keyword("fugue.envelope","gate","fugue.envelope/gate",1600847179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gate], null),new cljs.core.Keyword("fugue.envelope","scale","fugue.envelope/scale",-1562195919),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale], null),new cljs.core.Keyword("fugue.envelope","bias","fugue.envelope/bias",1014735024),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bias], null)], null));
});

fugue.envelope.env_gen.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=envelope.js.map?rel=1610405469028
