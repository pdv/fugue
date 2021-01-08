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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35227){
return cljs.core.map_QMARK_.call(null,G__35227);
}),(function (G__35227){
return cljs.core.contains_QMARK_.call(null,G__35227,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__35227){
return ((cljs.core.map_QMARK_.call(null,G__35227)) && (cljs.core.contains_QMARK_.call(null,G__35227,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_35228 = actx;
var _STAR_runtime_state_STAR__orig_val__35230 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35231 = oops.state.prepare_state.call(null,target_obj_35228,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35231;

try{var next_obj_35229 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35228,(0),"currentTime",true,true,false))?(target_obj_35228["currentTime"]):null);
return next_obj_35229;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35230;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__35232,p__35233){
var map__35234 = p__35232;
var map__35234__$1 = (((((!((map__35234 == null))))?(((((map__35234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35234):map__35234);
var actx = cljs.core.get.call(null,map__35234__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__35235 = p__35233;
var map__35235__$1 = (((((!((map__35235 == null))))?(((((map__35235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35235):map__35235);
var period_ms = cljs.core.get.call(null,map__35235__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32685__auto___35313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___35313,out_chan,map__35234,map__35234__$1,actx,map__35235,map__35235__$1,period_ms){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___35313,out_chan,map__35234,map__35234__$1,actx,map__35235,map__35235__$1,period_ms){
return (function (state_35284){
var state_val_35285 = (state_35284[(1)]);
if((state_val_35285 === (7))){
var state_35284__$1 = state_35284;
var statearr_35286_35314 = state_35284__$1;
(statearr_35286_35314[(2)] = true);

(statearr_35286_35314[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (1))){
var inst_35238 = null;
var inst_35239 = (0);
var state_35284__$1 = (function (){var statearr_35287 = state_35284;
(statearr_35287[(7)] = inst_35239);

(statearr_35287[(8)] = inst_35238);

return statearr_35287;
})();
var statearr_35288_35315 = state_35284__$1;
(statearr_35288_35315[(2)] = null);

(statearr_35288_35315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (4))){
var inst_35246 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_35247 = (inst_35246 & (32768));
var inst_35248 = period_ms.cljs$core$IDeref$;
var inst_35249 = (cljs.core.PROTOCOL_SENTINEL === inst_35248);
var inst_35250 = ((inst_35247) || (inst_35249));
var state_35284__$1 = state_35284;
if(cljs.core.truth_(inst_35250)){
var statearr_35289_35316 = state_35284__$1;
(statearr_35289_35316[(1)] = (7));

} else {
var statearr_35290_35317 = state_35284__$1;
(statearr_35290_35317[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (15))){
var inst_35239 = (state_35284[(7)]);
var inst_35241 = (state_35284[(9)]);
var inst_35262 = (state_35284[(10)]);
var inst_35266 = (state_35284[(2)]);
var inst_35267 = (inst_35266 + inst_35262);
var inst_35268 = (inst_35267 - inst_35241);
var inst_35269 = (inst_35268 / (1000));
var inst_35270 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_35271 = cljs.core.mod.call(null,inst_35239,(2));
var inst_35272 = [inst_35271,inst_35269];
var inst_35273 = cljs.core.PersistentHashMap.fromArrays(inst_35270,inst_35272);
var inst_35274 = cljs.core.async.put_BANG_.call(null,out_chan,inst_35273);
var inst_35275 = (0.7 * inst_35262);
var inst_35276 = cljs.core.async.timeout.call(null,inst_35275);
var state_35284__$1 = (function (){var statearr_35291 = state_35284;
(statearr_35291[(11)] = inst_35274);

return statearr_35291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35284__$1,(16),inst_35276);
} else {
if((state_val_35285 === (13))){
var inst_35238 = (state_35284[(8)]);
var state_35284__$1 = state_35284;
var statearr_35292_35318 = state_35284__$1;
(statearr_35292_35318[(2)] = inst_35238);

(statearr_35292_35318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (6))){
var inst_35257 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
if(cljs.core.truth_(inst_35257)){
var statearr_35293_35319 = state_35284__$1;
(statearr_35293_35319[(1)] = (10));

} else {
var statearr_35294_35320 = state_35284__$1;
(statearr_35294_35320[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (3))){
var inst_35282 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35284__$1,inst_35282);
} else {
if((state_val_35285 === (12))){
var inst_35238 = (state_35284[(8)]);
var inst_35262 = (state_35284[(2)]);
var state_35284__$1 = (function (){var statearr_35295 = state_35284;
(statearr_35295[(10)] = inst_35262);

return statearr_35295;
})();
if(cljs.core.truth_(inst_35238)){
var statearr_35296_35321 = state_35284__$1;
(statearr_35296_35321[(1)] = (13));

} else {
var statearr_35297_35322 = state_35284__$1;
(statearr_35297_35322[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (2))){
var inst_35241 = fugue.metronome.now_ms.call(null,actx);
var inst_35243 = (period_ms == null);
var inst_35244 = cljs.core.not.call(null,inst_35243);
var state_35284__$1 = (function (){var statearr_35298 = state_35284;
(statearr_35298[(9)] = inst_35241);

return statearr_35298;
})();
if(inst_35244){
var statearr_35299_35323 = state_35284__$1;
(statearr_35299_35323[(1)] = (4));

} else {
var statearr_35300_35324 = state_35284__$1;
(statearr_35300_35324[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (11))){
var state_35284__$1 = state_35284;
var statearr_35301_35325 = state_35284__$1;
(statearr_35301_35325[(2)] = period_ms);

(statearr_35301_35325[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (9))){
var inst_35254 = (state_35284[(2)]);
var state_35284__$1 = state_35284;
var statearr_35302_35326 = state_35284__$1;
(statearr_35302_35326[(2)] = inst_35254);

(statearr_35302_35326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (5))){
var state_35284__$1 = state_35284;
var statearr_35303_35327 = state_35284__$1;
(statearr_35303_35327[(2)] = false);

(statearr_35303_35327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (14))){
var inst_35241 = (state_35284[(9)]);
var state_35284__$1 = state_35284;
var statearr_35304_35328 = state_35284__$1;
(statearr_35304_35328[(2)] = inst_35241);

(statearr_35304_35328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (16))){
var inst_35239 = (state_35284[(7)]);
var inst_35241 = (state_35284[(9)]);
var inst_35278 = (state_35284[(2)]);
var inst_35279 = (inst_35239 + (1));
var inst_35238 = inst_35241;
var inst_35239__$1 = inst_35279;
var state_35284__$1 = (function (){var statearr_35305 = state_35284;
(statearr_35305[(7)] = inst_35239__$1);

(statearr_35305[(12)] = inst_35278);

(statearr_35305[(8)] = inst_35238);

return statearr_35305;
})();
var statearr_35306_35329 = state_35284__$1;
(statearr_35306_35329[(2)] = null);

(statearr_35306_35329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (10))){
var inst_35259 = cljs.core.deref.call(null,period_ms);
var state_35284__$1 = state_35284;
var statearr_35307_35330 = state_35284__$1;
(statearr_35307_35330[(2)] = inst_35259);

(statearr_35307_35330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35285 === (8))){
var state_35284__$1 = state_35284;
var statearr_35308_35331 = state_35284__$1;
(statearr_35308_35331[(2)] = false);

(statearr_35308_35331[(1)] = (9));


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
});})(c__32685__auto___35313,out_chan,map__35234,map__35234__$1,actx,map__35235,map__35235__$1,period_ms))
;
return ((function (switch__32590__auto__,c__32685__auto___35313,out_chan,map__35234,map__35234__$1,actx,map__35235,map__35235__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__32591__auto__ = null;
var fugue$metronome$state_machine__32591__auto____0 = (function (){
var statearr_35309 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35309[(0)] = fugue$metronome$state_machine__32591__auto__);

(statearr_35309[(1)] = (1));

return statearr_35309;
});
var fugue$metronome$state_machine__32591__auto____1 = (function (state_35284){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_35284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e35310){if((e35310 instanceof Object)){
var ex__32594__auto__ = e35310;
var statearr_35311_35332 = state_35284;
(statearr_35311_35332[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35333 = state_35284;
state_35284 = G__35333;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$metronome$state_machine__32591__auto__ = function(state_35284){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__32591__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__32591__auto____1.call(this,state_35284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__32591__auto____0;
fugue$metronome$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__32591__auto____1;
return fugue$metronome$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___35313,out_chan,map__35234,map__35234__$1,actx,map__35235,map__35235__$1,period_ms))
})();
var state__32687__auto__ = (function (){var statearr_35312 = f__32686__auto__.call(null);
(statearr_35312[(6)] = c__32685__auto___35313);

return statearr_35312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___35313,out_chan,map__35234,map__35234__$1,actx,map__35235,map__35235__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1610148154002
