// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.metronome');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('oops.core');
goog.require('fugue.synthdef');
goog.require('fugue.audio');
goog.require('fugue.chan');
fugue.metronome.bpm = cljs.core.partial.call(null,cljs.core._SLASH_,(60000));
cljs.core._add_method.call(null,fugue.chan.chan_node_spec,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35295){
return cljs.core.map_QMARK_.call(null,G__35295);
}),(function (G__35295){
return cljs.core.contains_QMARK_.call(null,G__35295,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__35295){
return ((cljs.core.map_QMARK_.call(null,G__35295)) && (cljs.core.contains_QMARK_.call(null,G__35295,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_35296 = actx;
var _STAR_runtime_state_STAR__orig_val__35298 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35299 = oops.state.prepare_state.call(null,target_obj_35296,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35299;

try{var next_obj_35297 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35296,(0),"currentTime",true,true,false))?(target_obj_35296["currentTime"]):null);
return next_obj_35297;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35298;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__35300,p__35301){
var map__35302 = p__35300;
var map__35302__$1 = (((((!((map__35302 == null))))?(((((map__35302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35302):map__35302);
var actx = cljs.core.get.call(null,map__35302__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__35303 = p__35301;
var map__35303__$1 = (((((!((map__35303 == null))))?(((((map__35303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35303):map__35303);
var period_ms = cljs.core.get.call(null,map__35303__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32685__auto___35381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___35381,out_chan,map__35302,map__35302__$1,actx,map__35303,map__35303__$1,period_ms){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___35381,out_chan,map__35302,map__35302__$1,actx,map__35303,map__35303__$1,period_ms){
return (function (state_35352){
var state_val_35353 = (state_35352[(1)]);
if((state_val_35353 === (7))){
var state_35352__$1 = state_35352;
var statearr_35354_35382 = state_35352__$1;
(statearr_35354_35382[(2)] = true);

(statearr_35354_35382[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35353 === (1))){
var inst_35306 = null;
var inst_35307 = (0);
var state_35352__$1 = (function (){var statearr_35355 = state_35352;
(statearr_35355[(7)] = inst_35306);

(statearr_35355[(8)] = inst_35307);

return statearr_35355;
})();
var statearr_35356_35383 = state_35352__$1;
(statearr_35356_35383[(2)] = null);

(statearr_35356_35383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35353 === (4))){
var inst_35314 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_35315 = (inst_35314 & (32768));
var inst_35316 = period_ms.cljs$core$IDeref$;
var inst_35317 = (cljs.core.PROTOCOL_SENTINEL === inst_35316);
var inst_35318 = ((inst_35315) || (inst_35317));
var state_35352__$1 = state_35352;
if(cljs.core.truth_(inst_35318)){
var statearr_35357_35384 = state_35352__$1;
(statearr_35357_35384[(1)] = (7));

} else {
var statearr_35358_35385 = state_35352__$1;
(statearr_35358_35385[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35353 === (15))){
var inst_35307 = (state_35352[(8)]);
var inst_35309 = (state_35352[(9)]);
var inst_35330 = (state_35352[(10)]);
var inst_35334 = (state_35352[(2)]);
var inst_35335 = (inst_35334 + inst_35330);
var inst_35336 = (inst_35335 - inst_35309);
var inst_35337 = (inst_35336 / (1000));
var inst_35338 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_35339 = cljs.core.mod.call(null,inst_35307,(2));
var inst_35340 = [inst_35339,inst_35337];
var inst_35341 = cljs.core.PersistentHashMap.fromArrays(inst_35338,inst_35340);
var inst_35342 = cljs.core.async.put_BANG_.call(null,out_chan,inst_35341);
var inst_35343 = (0.7 * inst_35330);
var inst_35344 = cljs.core.async.timeout.call(null,inst_35343);
var state_35352__$1 = (function (){var statearr_35359 = state_35352;
(statearr_35359[(11)] = inst_35342);

return statearr_35359;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35352__$1,(16),inst_35344);
} else {
if((state_val_35353 === (13))){
var inst_35306 = (state_35352[(7)]);
var state_35352__$1 = state_35352;
var statearr_35360_35386 = state_35352__$1;
(statearr_35360_35386[(2)] = inst_35306);

(statearr_35360_35386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35353 === (6))){
var inst_35325 = (state_35352[(2)]);
var state_35352__$1 = state_35352;
if(cljs.core.truth_(inst_35325)){
var statearr_35361_35387 = state_35352__$1;
(statearr_35361_35387[(1)] = (10));

} else {
var statearr_35362_35388 = state_35352__$1;
(statearr_35362_35388[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35353 === (3))){
var inst_35350 = (state_35352[(2)]);
var state_35352__$1 = state_35352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35352__$1,inst_35350);
} else {
if((state_val_35353 === (12))){
var inst_35306 = (state_35352[(7)]);
var inst_35330 = (state_35352[(2)]);
var state_35352__$1 = (function (){var statearr_35363 = state_35352;
(statearr_35363[(10)] = inst_35330);

return statearr_35363;
})();
if(cljs.core.truth_(inst_35306)){
var statearr_35364_35389 = state_35352__$1;
(statearr_35364_35389[(1)] = (13));

} else {
var statearr_35365_35390 = state_35352__$1;
(statearr_35365_35390[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35353 === (2))){
var inst_35309 = fugue.metronome.now_ms.call(null,actx);
var inst_35311 = (period_ms == null);
var inst_35312 = cljs.core.not.call(null,inst_35311);
var state_35352__$1 = (function (){var statearr_35366 = state_35352;
(statearr_35366[(9)] = inst_35309);

return statearr_35366;
})();
if(inst_35312){
var statearr_35367_35391 = state_35352__$1;
(statearr_35367_35391[(1)] = (4));

} else {
var statearr_35368_35392 = state_35352__$1;
(statearr_35368_35392[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35353 === (11))){
var state_35352__$1 = state_35352;
var statearr_35369_35393 = state_35352__$1;
(statearr_35369_35393[(2)] = period_ms);

(statearr_35369_35393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35353 === (9))){
var inst_35322 = (state_35352[(2)]);
var state_35352__$1 = state_35352;
var statearr_35370_35394 = state_35352__$1;
(statearr_35370_35394[(2)] = inst_35322);

(statearr_35370_35394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35353 === (5))){
var state_35352__$1 = state_35352;
var statearr_35371_35395 = state_35352__$1;
(statearr_35371_35395[(2)] = false);

(statearr_35371_35395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35353 === (14))){
var inst_35309 = (state_35352[(9)]);
var state_35352__$1 = state_35352;
var statearr_35372_35396 = state_35352__$1;
(statearr_35372_35396[(2)] = inst_35309);

(statearr_35372_35396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35353 === (16))){
var inst_35307 = (state_35352[(8)]);
var inst_35309 = (state_35352[(9)]);
var inst_35346 = (state_35352[(2)]);
var inst_35347 = (inst_35307 + (1));
var inst_35306 = inst_35309;
var inst_35307__$1 = inst_35347;
var state_35352__$1 = (function (){var statearr_35373 = state_35352;
(statearr_35373[(7)] = inst_35306);

(statearr_35373[(12)] = inst_35346);

(statearr_35373[(8)] = inst_35307__$1);

return statearr_35373;
})();
var statearr_35374_35397 = state_35352__$1;
(statearr_35374_35397[(2)] = null);

(statearr_35374_35397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35353 === (10))){
var inst_35327 = cljs.core.deref.call(null,period_ms);
var state_35352__$1 = state_35352;
var statearr_35375_35398 = state_35352__$1;
(statearr_35375_35398[(2)] = inst_35327);

(statearr_35375_35398[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35353 === (8))){
var state_35352__$1 = state_35352;
var statearr_35376_35399 = state_35352__$1;
(statearr_35376_35399[(2)] = false);

(statearr_35376_35399[(1)] = (9));


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
}
}
}
});})(c__32685__auto___35381,out_chan,map__35302,map__35302__$1,actx,map__35303,map__35303__$1,period_ms))
;
return ((function (switch__32590__auto__,c__32685__auto___35381,out_chan,map__35302,map__35302__$1,actx,map__35303,map__35303__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__32591__auto__ = null;
var fugue$metronome$state_machine__32591__auto____0 = (function (){
var statearr_35377 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35377[(0)] = fugue$metronome$state_machine__32591__auto__);

(statearr_35377[(1)] = (1));

return statearr_35377;
});
var fugue$metronome$state_machine__32591__auto____1 = (function (state_35352){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_35352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e35378){if((e35378 instanceof Object)){
var ex__32594__auto__ = e35378;
var statearr_35379_35400 = state_35352;
(statearr_35379_35400[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35401 = state_35352;
state_35352 = G__35401;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$metronome$state_machine__32591__auto__ = function(state_35352){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__32591__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__32591__auto____1.call(this,state_35352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__32591__auto____0;
fugue$metronome$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__32591__auto____1;
return fugue$metronome$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___35381,out_chan,map__35302,map__35302__$1,actx,map__35303,map__35303__$1,period_ms))
})();
var state__32687__auto__ = (function (){var statearr_35380 = f__32686__auto__.call(null);
(statearr_35380[(6)] = c__32685__auto___35381);

return statearr_35380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___35381,out_chan,map__35302,map__35302__$1,actx,map__35303,map__35303__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1610319352684
