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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35266){
return cljs.core.map_QMARK_.call(null,G__35266);
}),(function (G__35266){
return cljs.core.contains_QMARK_.call(null,G__35266,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__35266){
return ((cljs.core.map_QMARK_.call(null,G__35266)) && (cljs.core.contains_QMARK_.call(null,G__35266,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_35267 = actx;
var _STAR_runtime_state_STAR__orig_val__35269 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35270 = oops.state.prepare_state.call(null,target_obj_35267,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35270;

try{var next_obj_35268 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35267,(0),"currentTime",true,true,false))?(target_obj_35267["currentTime"]):null);
return next_obj_35268;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35269;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__35271,p__35272){
var map__35273 = p__35271;
var map__35273__$1 = (((((!((map__35273 == null))))?(((((map__35273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35273):map__35273);
var actx = cljs.core.get.call(null,map__35273__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__35274 = p__35272;
var map__35274__$1 = (((((!((map__35274 == null))))?(((((map__35274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35274):map__35274);
var period_ms = cljs.core.get.call(null,map__35274__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32691__auto___35352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___35352,out_chan,map__35273,map__35273__$1,actx,map__35274,map__35274__$1,period_ms){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___35352,out_chan,map__35273,map__35273__$1,actx,map__35274,map__35274__$1,period_ms){
return (function (state_35323){
var state_val_35324 = (state_35323[(1)]);
if((state_val_35324 === (7))){
var state_35323__$1 = state_35323;
var statearr_35325_35353 = state_35323__$1;
(statearr_35325_35353[(2)] = true);

(statearr_35325_35353[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (1))){
var inst_35277 = null;
var inst_35278 = (0);
var state_35323__$1 = (function (){var statearr_35326 = state_35323;
(statearr_35326[(7)] = inst_35278);

(statearr_35326[(8)] = inst_35277);

return statearr_35326;
})();
var statearr_35327_35354 = state_35323__$1;
(statearr_35327_35354[(2)] = null);

(statearr_35327_35354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (4))){
var inst_35285 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_35286 = (inst_35285 & (32768));
var inst_35287 = period_ms.cljs$core$IDeref$;
var inst_35288 = (cljs.core.PROTOCOL_SENTINEL === inst_35287);
var inst_35289 = ((inst_35286) || (inst_35288));
var state_35323__$1 = state_35323;
if(cljs.core.truth_(inst_35289)){
var statearr_35328_35355 = state_35323__$1;
(statearr_35328_35355[(1)] = (7));

} else {
var statearr_35329_35356 = state_35323__$1;
(statearr_35329_35356[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (15))){
var inst_35278 = (state_35323[(7)]);
var inst_35301 = (state_35323[(9)]);
var inst_35280 = (state_35323[(10)]);
var inst_35305 = (state_35323[(2)]);
var inst_35306 = (inst_35305 + inst_35301);
var inst_35307 = (inst_35306 - inst_35280);
var inst_35308 = (inst_35307 / (1000));
var inst_35309 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_35310 = cljs.core.mod.call(null,inst_35278,(2));
var inst_35311 = [inst_35310,inst_35308];
var inst_35312 = cljs.core.PersistentHashMap.fromArrays(inst_35309,inst_35311);
var inst_35313 = cljs.core.async.put_BANG_.call(null,out_chan,inst_35312);
var inst_35314 = (0.7 * inst_35301);
var inst_35315 = cljs.core.async.timeout.call(null,inst_35314);
var state_35323__$1 = (function (){var statearr_35330 = state_35323;
(statearr_35330[(11)] = inst_35313);

return statearr_35330;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35323__$1,(16),inst_35315);
} else {
if((state_val_35324 === (13))){
var inst_35277 = (state_35323[(8)]);
var state_35323__$1 = state_35323;
var statearr_35331_35357 = state_35323__$1;
(statearr_35331_35357[(2)] = inst_35277);

(statearr_35331_35357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (6))){
var inst_35296 = (state_35323[(2)]);
var state_35323__$1 = state_35323;
if(cljs.core.truth_(inst_35296)){
var statearr_35332_35358 = state_35323__$1;
(statearr_35332_35358[(1)] = (10));

} else {
var statearr_35333_35359 = state_35323__$1;
(statearr_35333_35359[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (3))){
var inst_35321 = (state_35323[(2)]);
var state_35323__$1 = state_35323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35323__$1,inst_35321);
} else {
if((state_val_35324 === (12))){
var inst_35277 = (state_35323[(8)]);
var inst_35301 = (state_35323[(2)]);
var state_35323__$1 = (function (){var statearr_35334 = state_35323;
(statearr_35334[(9)] = inst_35301);

return statearr_35334;
})();
if(cljs.core.truth_(inst_35277)){
var statearr_35335_35360 = state_35323__$1;
(statearr_35335_35360[(1)] = (13));

} else {
var statearr_35336_35361 = state_35323__$1;
(statearr_35336_35361[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (2))){
var inst_35280 = fugue.metronome.now_ms.call(null,actx);
var inst_35282 = (period_ms == null);
var inst_35283 = cljs.core.not.call(null,inst_35282);
var state_35323__$1 = (function (){var statearr_35337 = state_35323;
(statearr_35337[(10)] = inst_35280);

return statearr_35337;
})();
if(inst_35283){
var statearr_35338_35362 = state_35323__$1;
(statearr_35338_35362[(1)] = (4));

} else {
var statearr_35339_35363 = state_35323__$1;
(statearr_35339_35363[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (11))){
var state_35323__$1 = state_35323;
var statearr_35340_35364 = state_35323__$1;
(statearr_35340_35364[(2)] = period_ms);

(statearr_35340_35364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (9))){
var inst_35293 = (state_35323[(2)]);
var state_35323__$1 = state_35323;
var statearr_35341_35365 = state_35323__$1;
(statearr_35341_35365[(2)] = inst_35293);

(statearr_35341_35365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (5))){
var state_35323__$1 = state_35323;
var statearr_35342_35366 = state_35323__$1;
(statearr_35342_35366[(2)] = false);

(statearr_35342_35366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (14))){
var inst_35280 = (state_35323[(10)]);
var state_35323__$1 = state_35323;
var statearr_35343_35367 = state_35323__$1;
(statearr_35343_35367[(2)] = inst_35280);

(statearr_35343_35367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (16))){
var inst_35278 = (state_35323[(7)]);
var inst_35280 = (state_35323[(10)]);
var inst_35317 = (state_35323[(2)]);
var inst_35318 = (inst_35278 + (1));
var inst_35277 = inst_35280;
var inst_35278__$1 = inst_35318;
var state_35323__$1 = (function (){var statearr_35344 = state_35323;
(statearr_35344[(7)] = inst_35278__$1);

(statearr_35344[(12)] = inst_35317);

(statearr_35344[(8)] = inst_35277);

return statearr_35344;
})();
var statearr_35345_35368 = state_35323__$1;
(statearr_35345_35368[(2)] = null);

(statearr_35345_35368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (10))){
var inst_35298 = cljs.core.deref.call(null,period_ms);
var state_35323__$1 = state_35323;
var statearr_35346_35369 = state_35323__$1;
(statearr_35346_35369[(2)] = inst_35298);

(statearr_35346_35369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35324 === (8))){
var state_35323__$1 = state_35323;
var statearr_35347_35370 = state_35323__$1;
(statearr_35347_35370[(2)] = false);

(statearr_35347_35370[(1)] = (9));


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
});})(c__32691__auto___35352,out_chan,map__35273,map__35273__$1,actx,map__35274,map__35274__$1,period_ms))
;
return ((function (switch__32596__auto__,c__32691__auto___35352,out_chan,map__35273,map__35273__$1,actx,map__35274,map__35274__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__32597__auto__ = null;
var fugue$metronome$state_machine__32597__auto____0 = (function (){
var statearr_35348 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35348[(0)] = fugue$metronome$state_machine__32597__auto__);

(statearr_35348[(1)] = (1));

return statearr_35348;
});
var fugue$metronome$state_machine__32597__auto____1 = (function (state_35323){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_35323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e35349){if((e35349 instanceof Object)){
var ex__32600__auto__ = e35349;
var statearr_35350_35371 = state_35323;
(statearr_35350_35371[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35372 = state_35323;
state_35323 = G__35372;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
fugue$metronome$state_machine__32597__auto__ = function(state_35323){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__32597__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__32597__auto____1.call(this,state_35323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__32597__auto____0;
fugue$metronome$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__32597__auto____1;
return fugue$metronome$state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___35352,out_chan,map__35273,map__35273__$1,actx,map__35274,map__35274__$1,period_ms))
})();
var state__32693__auto__ = (function (){var statearr_35351 = f__32692__auto__.call(null);
(statearr_35351[(6)] = c__32691__auto___35352);

return statearr_35351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___35352,out_chan,map__35273,map__35273__$1,actx,map__35274,map__35274__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1610334750671
