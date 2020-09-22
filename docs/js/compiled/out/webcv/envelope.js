// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.envelope');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('oops.core');
goog.require('webcv.audio');
goog.require('webcv.synthdef');
goog.require('webcv.ramp');
goog.require('webcv.chan');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.envelope","stage","webcv.envelope/stage",1202152395),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.envelope","duration","webcv.envelope/duration",1750604963),new cljs.core.Keyword("webcv.envelope","target","webcv.envelope/target",1892655906)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34793){
return cljs.core.map_QMARK_.call(null,G__34793);
}),(function (G__34793){
return cljs.core.contains_QMARK_.call(null,G__34793,new cljs.core.Keyword("webcv.envelope","duration","webcv.envelope/duration",1750604963));
}),(function (G__34793){
return cljs.core.contains_QMARK_.call(null,G__34793,new cljs.core.Keyword("webcv.envelope","target","webcv.envelope/target",1892655906));
})], null),(function (G__34793){
return ((cljs.core.map_QMARK_.call(null,G__34793)) && (cljs.core.contains_QMARK_.call(null,G__34793,new cljs.core.Keyword("webcv.envelope","duration","webcv.envelope/duration",1750604963))) && (cljs.core.contains_QMARK_.call(null,G__34793,new cljs.core.Keyword("webcv.envelope","target","webcv.envelope/target",1892655906))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.envelope","duration","webcv.envelope/duration",1750604963),new cljs.core.Keyword("webcv.envelope","target","webcv.envelope/target",1892655906)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.envelope","duration","webcv.envelope/duration",1750604963),new cljs.core.Keyword("webcv.envelope","target","webcv.envelope/target",1892655906)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.envelope","duration","webcv.envelope/duration",1750604963),new cljs.core.Keyword("webcv.envelope","target","webcv.envelope/target",1892655906)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.envelope","duration","webcv.envelope/duration",1750604963))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.envelope","target","webcv.envelope/target",1892655906)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061)], null)])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.envelope","stages","webcv.envelope/stages",2128814651),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Keyword("webcv.envelope","stage","webcv.envelope/stage",1202152395)),cljs.spec.alpha.rep_impl.call(null,new cljs.core.Keyword("webcv.envelope","stage","webcv.envelope/stage",1202152395),new cljs.core.Keyword("webcv.envelope","stage","webcv.envelope/stage",1202152395)));
webcv.envelope.start_event = (function webcv$envelope$start_event(start_time,last_scheduled){
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("webcv.ramp","ramp","webcv.ramp/ramp",1824437946),last_scheduled)){
} else {
throw (new Error("Assert failed: (s/valid? :webcv.ramp/ramp last-scheduled)"));
}

var _PERCENT_ = (function (){var overlapping = (start_time < new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955).cljs$core$IFn$_invoke$arity$1(last_scheduled));
return cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955),start_time], null),((overlapping)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061),new cljs.core.Keyword("webcv.ramp","cancel-and-hold","webcv.ramp/cancel-and-hold",-1231248709)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061),new cljs.core.Keyword("webcv.ramp","instant","webcv.ramp/instant",75187949),new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368).cljs$core$IFn$_invoke$arity$1(last_scheduled)], null)));
})();
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("webcv.ramp","ramp","webcv.ramp/ramp",1824437946),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :webcv.ramp/ramp %)"));
}

return _PERCENT_;
});
webcv.envelope.ramps = (function webcv$envelope$ramps(start_time,stages,scale,bias){
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("webcv.envelope","stages","webcv.envelope/stages",2128814651),stages)){
} else {
throw (new Error("Assert failed: (s/valid? :webcv.envelope/stages stages)"));
}

var _PERCENT_ = (function (){var durations = cljs.core.map.call(null,new cljs.core.Keyword("webcv.envelope","duration","webcv.envelope/duration",1750604963),stages);
var times = cljs.core.reductions.call(null,cljs.core._PLUS_,start_time,durations);
var levels = cljs.core.map.call(null,((function (durations,times){
return (function (p1__34794_SHARP_){
return (bias + (scale * new cljs.core.Keyword("webcv.envelope","target","webcv.envelope/target",1892655906).cljs$core$IFn$_invoke$arity$1(p1__34794_SHARP_)));
});})(durations,times))
,stages);
var shapes = cljs.core.map.call(null,((function (durations,times,levels){
return (function (p1__34795_SHARP_){
return cljs.core.get.call(null,p1__34795_SHARP_,new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061),new cljs.core.Keyword("webcv.ramp","exponential","webcv.ramp/exponential",-1267929909));
});})(durations,times,levels))
,stages);
return cljs.core.map.call(null,((function (durations,times,levels,shapes){
return (function (time,level,shape){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955),time,new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),level,new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061),shape], null);
});})(durations,times,levels,shapes))
,cljs.core.rest.call(null,times),levels,shapes);
})();
if(cljs.spec.alpha.valid_QMARK_.call(null,cljs.spec.alpha.rep_impl.call(null,new cljs.core.Keyword("webcv.ramp","ramp","webcv.ramp/ramp",1824437946),new cljs.core.Keyword("webcv.ramp","ramp","webcv.ramp/ramp",1824437946)),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? (s/* :webcv.ramp/ramp) %)"));
}

return _PERCENT_;
});
/**
 * Returns a stateful transducer that maps envelope stage packets to ramps using now-fn
 */
webcv.envelope.stages_x_ramp = (function webcv$envelope$stages_x_ramp(now_fn,scale,bias){
return (function (rf){
var v_last_scheduled = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.ramp","shape","webcv.ramp/shape",1686218061),new cljs.core.Keyword("webcv.ramp","cancel-and-hold","webcv.ramp/cancel-and-hold",-1231248709),new cljs.core.Keyword("webcv.ramp","value","webcv.ramp/value",130273368),(0),new cljs.core.Keyword("webcv.ramp","time","webcv.ramp/time",1243713955),now_fn.call(null)], null));
return ((function (v_last_scheduled){
return (function() {
var G__34796 = null;
var G__34796__0 = (function (){
return rf.call(null);
});
var G__34796__1 = (function (result){
return rf.call(null,result);
});
var G__34796__2 = (function (result,stages){
var last_scheduled = cljs.core.deref.call(null,v_last_scheduled);
var start_time = now_fn.call(null);
var start_event = webcv.envelope.start_event.call(null,start_time,last_scheduled);
var ramp_events = webcv.envelope.ramps.call(null,start_time,stages,scale,bias);
if((!(cljs.core.empty_QMARK_.call(null,ramp_events)))){
var all_events = cljs.core.cons.call(null,start_event,ramp_events);
cljs.core.vreset_BANG_.call(null,v_last_scheduled,cljs.core.last.call(null,all_events));

return cljs.core.reduce.call(null,rf,result,all_events);
} else {
return result;
}
});
G__34796 = function(result,stages){
switch(arguments.length){
case 0:
return G__34796__0.call(this);
case 1:
return G__34796__1.call(this,result);
case 2:
return G__34796__2.call(this,result,stages);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34796.cljs$core$IFn$_invoke$arity$0 = G__34796__0;
G__34796.cljs$core$IFn$_invoke$arity$1 = G__34796__1;
G__34796.cljs$core$IFn$_invoke$arity$2 = G__34796__2;
return G__34796;
})()
;})(v_last_scheduled))
});
});
cljs.core._add_method.call(null,webcv.chan.make_transducer,new cljs.core.Keyword("webcv.envelope","envelope","webcv.envelope/envelope",1345267561),(function (p__34798,p__34799){
var map__34800 = p__34798;
var map__34800__$1 = (((((!((map__34800 == null))))?(((((map__34800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34800):map__34800);
var actx = cljs.core.get.call(null,map__34800__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
var map__34801 = p__34799;
var map__34801__$1 = (((((!((map__34801 == null))))?(((((map__34801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34801):map__34801);
var open = cljs.core.get.call(null,map__34801__$1,new cljs.core.Keyword("webcv.envelope","open","webcv.envelope/open",-1257337783));
var closed = cljs.core.get.call(null,map__34801__$1,new cljs.core.Keyword("webcv.envelope","closed","webcv.envelope/closed",1726447802));
var scale = cljs.core.get.call(null,map__34801__$1,new cljs.core.Keyword("webcv.envelope","scale","webcv.envelope/scale",-1870655022));
var bias = cljs.core.get.call(null,map__34801__$1,new cljs.core.Keyword("webcv.envelope","bias","webcv.envelope/bias",1851379345));
return cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__34800,map__34800__$1,actx,map__34801,map__34801__$1,open,closed,scale,bias){
return (function (p1__34797_SHARP_){
if((p1__34797_SHARP_ > (0))){
return open;
} else {
return closed;
}
});})(map__34800,map__34800__$1,actx,map__34801,map__34801__$1,open,closed,scale,bias))
),webcv.envelope.stages_x_ramp.call(null,((function (map__34800,map__34800__$1,actx,map__34801,map__34801__$1,open,closed,scale,bias){
return (function (){
var target_obj_34804 = actx;
var _STAR_runtime_state_STAR__orig_val__34806 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34807 = oops.state.prepare_state.call(null,target_obj_34804,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34807;

try{var next_obj_34805 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_34804,(0),"currentTime",true,true,false))?(target_obj_34804["currentTime"]):null);
return next_obj_34805;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34806;
}});})(map__34800,map__34800__$1,actx,map__34801,map__34801__$1,open,closed,scale,bias))
,scale,bias));
}));
webcv.envelope.adsr = (function webcv$envelope$adsr(a,d,s,r){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.envelope","open","webcv.envelope/open",-1257337783),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.envelope","duration","webcv.envelope/duration",1750604963),a,new cljs.core.Keyword("webcv.envelope","target","webcv.envelope/target",1892655906),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.envelope","duration","webcv.envelope/duration",1750604963),d,new cljs.core.Keyword("webcv.envelope","target","webcv.envelope/target",1892655906),s], null)], null),new cljs.core.Keyword("webcv.envelope","closed","webcv.envelope/closed",1726447802),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.envelope","duration","webcv.envelope/duration",1750604963),r,new cljs.core.Keyword("webcv.envelope","target","webcv.envelope/target",1892655906),(0)], null)], null)], null);
});
webcv.envelope.perc = (function webcv$envelope$perc(a,d){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.envelope","open","webcv.envelope/open",-1257337783),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.envelope","duration","webcv.envelope/duration",1750604963),a,new cljs.core.Keyword("webcv.envelope","target","webcv.envelope/target",1892655906),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.envelope","duration","webcv.envelope/duration",1750604963),d,new cljs.core.Keyword("webcv.envelope","target","webcv.envelope/target",1892655906),(0)], null)], null),new cljs.core.Keyword("webcv.envelope","closed","webcv.envelope/closed",1726447802),cljs.core.PersistentVector.EMPTY], null);
});
webcv.envelope.env_gen = (function webcv$envelope$env_gen(var_args){
var G__34809 = arguments.length;
switch (G__34809) {
case 2:
return webcv.envelope.env_gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return webcv.envelope.env_gen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return webcv.envelope.env_gen.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

webcv.envelope.env_gen.cljs$core$IFn$_invoke$arity$2 = (function (env,gate){
return webcv.envelope.env_gen.call(null,env,gate,(1));
});

webcv.envelope.env_gen.cljs$core$IFn$_invoke$arity$3 = (function (env,gate,scale){
return webcv.envelope.env_gen.call(null,env,gate,scale,(0));
});

webcv.envelope.env_gen.cljs$core$IFn$_invoke$arity$4 = (function (env,gate,scale,bias){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.chan","chan-node-type","webcv.chan/chan-node-type",-1398165608),new cljs.core.Keyword("webcv.chan","transducer","webcv.chan/transducer",311721516),new cljs.core.Keyword("webcv.chan","xforms","webcv.chan/xforms",-340023812),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("webcv.chan","xform-name","webcv.chan/xform-name",419918655),new cljs.core.Keyword("webcv.envelope","envelope","webcv.envelope/envelope",1345267561),new cljs.core.Keyword("webcv.envelope","scale","webcv.envelope/scale",-1870655022),scale,new cljs.core.Keyword("webcv.envelope","bias","webcv.envelope/bias",1851379345),bias,new cljs.core.Keyword("webcv.envelope","open","webcv.envelope/open",-1257337783),new cljs.core.Keyword("webcv.envelope","open","webcv.envelope/open",-1257337783).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword("webcv.envelope","closed","webcv.envelope/closed",1726447802),new cljs.core.Keyword("webcv.envelope","closed","webcv.envelope/closed",1726447802).cljs$core$IFn$_invoke$arity$1(env)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, ["fmwfwef",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gate], null)], null));
});

webcv.envelope.env_gen.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=envelope.js.map?rel=1600808349327
