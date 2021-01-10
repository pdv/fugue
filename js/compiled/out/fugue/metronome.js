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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35309){
return cljs.core.map_QMARK_.call(null,G__35309);
}),(function (G__35309){
return cljs.core.contains_QMARK_.call(null,G__35309,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__35309){
return ((cljs.core.map_QMARK_.call(null,G__35309)) && (cljs.core.contains_QMARK_.call(null,G__35309,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_35310 = actx;
var _STAR_runtime_state_STAR__orig_val__35312 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35313 = oops.state.prepare_state.call(null,target_obj_35310,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35313;

try{var next_obj_35311 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35310,(0),"currentTime",true,true,false))?(target_obj_35310["currentTime"]):null);
return next_obj_35311;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35312;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__35314,p__35315){
var map__35316 = p__35314;
var map__35316__$1 = (((((!((map__35316 == null))))?(((((map__35316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35316):map__35316);
var actx = cljs.core.get.call(null,map__35316__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__35317 = p__35315;
var map__35317__$1 = (((((!((map__35317 == null))))?(((((map__35317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35317):map__35317);
var period_ms = cljs.core.get.call(null,map__35317__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32685__auto___35395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___35395,out_chan,map__35316,map__35316__$1,actx,map__35317,map__35317__$1,period_ms){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___35395,out_chan,map__35316,map__35316__$1,actx,map__35317,map__35317__$1,period_ms){
return (function (state_35366){
var state_val_35367 = (state_35366[(1)]);
if((state_val_35367 === (7))){
var state_35366__$1 = state_35366;
var statearr_35368_35396 = state_35366__$1;
(statearr_35368_35396[(2)] = true);

(statearr_35368_35396[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (1))){
var inst_35320 = null;
var inst_35321 = (0);
var state_35366__$1 = (function (){var statearr_35369 = state_35366;
(statearr_35369[(7)] = inst_35320);

(statearr_35369[(8)] = inst_35321);

return statearr_35369;
})();
var statearr_35370_35397 = state_35366__$1;
(statearr_35370_35397[(2)] = null);

(statearr_35370_35397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (4))){
var inst_35328 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_35329 = (inst_35328 & (32768));
var inst_35330 = period_ms.cljs$core$IDeref$;
var inst_35331 = (cljs.core.PROTOCOL_SENTINEL === inst_35330);
var inst_35332 = ((inst_35329) || (inst_35331));
var state_35366__$1 = state_35366;
if(cljs.core.truth_(inst_35332)){
var statearr_35371_35398 = state_35366__$1;
(statearr_35371_35398[(1)] = (7));

} else {
var statearr_35372_35399 = state_35366__$1;
(statearr_35372_35399[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (15))){
var inst_35344 = (state_35366[(9)]);
var inst_35321 = (state_35366[(8)]);
var inst_35323 = (state_35366[(10)]);
var inst_35348 = (state_35366[(2)]);
var inst_35349 = (inst_35348 + inst_35344);
var inst_35350 = (inst_35349 - inst_35323);
var inst_35351 = (inst_35350 / (1000));
var inst_35352 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_35353 = cljs.core.mod.call(null,inst_35321,(2));
var inst_35354 = [inst_35353,inst_35351];
var inst_35355 = cljs.core.PersistentHashMap.fromArrays(inst_35352,inst_35354);
var inst_35356 = cljs.core.async.put_BANG_.call(null,out_chan,inst_35355);
var inst_35357 = (0.7 * inst_35344);
var inst_35358 = cljs.core.async.timeout.call(null,inst_35357);
var state_35366__$1 = (function (){var statearr_35373 = state_35366;
(statearr_35373[(11)] = inst_35356);

return statearr_35373;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35366__$1,(16),inst_35358);
} else {
if((state_val_35367 === (13))){
var inst_35320 = (state_35366[(7)]);
var state_35366__$1 = state_35366;
var statearr_35374_35400 = state_35366__$1;
(statearr_35374_35400[(2)] = inst_35320);

(statearr_35374_35400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (6))){
var inst_35339 = (state_35366[(2)]);
var state_35366__$1 = state_35366;
if(cljs.core.truth_(inst_35339)){
var statearr_35375_35401 = state_35366__$1;
(statearr_35375_35401[(1)] = (10));

} else {
var statearr_35376_35402 = state_35366__$1;
(statearr_35376_35402[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (3))){
var inst_35364 = (state_35366[(2)]);
var state_35366__$1 = state_35366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35366__$1,inst_35364);
} else {
if((state_val_35367 === (12))){
var inst_35320 = (state_35366[(7)]);
var inst_35344 = (state_35366[(2)]);
var state_35366__$1 = (function (){var statearr_35377 = state_35366;
(statearr_35377[(9)] = inst_35344);

return statearr_35377;
})();
if(cljs.core.truth_(inst_35320)){
var statearr_35378_35403 = state_35366__$1;
(statearr_35378_35403[(1)] = (13));

} else {
var statearr_35379_35404 = state_35366__$1;
(statearr_35379_35404[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (2))){
var inst_35323 = fugue.metronome.now_ms.call(null,actx);
var inst_35325 = (period_ms == null);
var inst_35326 = cljs.core.not.call(null,inst_35325);
var state_35366__$1 = (function (){var statearr_35380 = state_35366;
(statearr_35380[(10)] = inst_35323);

return statearr_35380;
})();
if(inst_35326){
var statearr_35381_35405 = state_35366__$1;
(statearr_35381_35405[(1)] = (4));

} else {
var statearr_35382_35406 = state_35366__$1;
(statearr_35382_35406[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (11))){
var state_35366__$1 = state_35366;
var statearr_35383_35407 = state_35366__$1;
(statearr_35383_35407[(2)] = period_ms);

(statearr_35383_35407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (9))){
var inst_35336 = (state_35366[(2)]);
var state_35366__$1 = state_35366;
var statearr_35384_35408 = state_35366__$1;
(statearr_35384_35408[(2)] = inst_35336);

(statearr_35384_35408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (5))){
var state_35366__$1 = state_35366;
var statearr_35385_35409 = state_35366__$1;
(statearr_35385_35409[(2)] = false);

(statearr_35385_35409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (14))){
var inst_35323 = (state_35366[(10)]);
var state_35366__$1 = state_35366;
var statearr_35386_35410 = state_35366__$1;
(statearr_35386_35410[(2)] = inst_35323);

(statearr_35386_35410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (16))){
var inst_35321 = (state_35366[(8)]);
var inst_35323 = (state_35366[(10)]);
var inst_35360 = (state_35366[(2)]);
var inst_35361 = (inst_35321 + (1));
var inst_35320 = inst_35323;
var inst_35321__$1 = inst_35361;
var state_35366__$1 = (function (){var statearr_35387 = state_35366;
(statearr_35387[(7)] = inst_35320);

(statearr_35387[(8)] = inst_35321__$1);

(statearr_35387[(12)] = inst_35360);

return statearr_35387;
})();
var statearr_35388_35411 = state_35366__$1;
(statearr_35388_35411[(2)] = null);

(statearr_35388_35411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (10))){
var inst_35341 = cljs.core.deref.call(null,period_ms);
var state_35366__$1 = state_35366;
var statearr_35389_35412 = state_35366__$1;
(statearr_35389_35412[(2)] = inst_35341);

(statearr_35389_35412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35367 === (8))){
var state_35366__$1 = state_35366;
var statearr_35390_35413 = state_35366__$1;
(statearr_35390_35413[(2)] = false);

(statearr_35390_35413[(1)] = (9));


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
});})(c__32685__auto___35395,out_chan,map__35316,map__35316__$1,actx,map__35317,map__35317__$1,period_ms))
;
return ((function (switch__32590__auto__,c__32685__auto___35395,out_chan,map__35316,map__35316__$1,actx,map__35317,map__35317__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__32591__auto__ = null;
var fugue$metronome$state_machine__32591__auto____0 = (function (){
var statearr_35391 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35391[(0)] = fugue$metronome$state_machine__32591__auto__);

(statearr_35391[(1)] = (1));

return statearr_35391;
});
var fugue$metronome$state_machine__32591__auto____1 = (function (state_35366){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_35366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e35392){if((e35392 instanceof Object)){
var ex__32594__auto__ = e35392;
var statearr_35393_35414 = state_35366;
(statearr_35393_35414[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35415 = state_35366;
state_35366 = G__35415;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$metronome$state_machine__32591__auto__ = function(state_35366){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__32591__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__32591__auto____1.call(this,state_35366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__32591__auto____0;
fugue$metronome$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__32591__auto____1;
return fugue$metronome$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___35395,out_chan,map__35316,map__35316__$1,actx,map__35317,map__35317__$1,period_ms))
})();
var state__32687__auto__ = (function (){var statearr_35394 = f__32686__auto__.call(null);
(statearr_35394[(6)] = c__32685__auto___35395);

return statearr_35394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___35395,out_chan,map__35316,map__35316__$1,actx,map__35317,map__35317__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1610304477037
