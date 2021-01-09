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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35241){
return cljs.core.map_QMARK_.call(null,G__35241);
}),(function (G__35241){
return cljs.core.contains_QMARK_.call(null,G__35241,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__35241){
return ((cljs.core.map_QMARK_.call(null,G__35241)) && (cljs.core.contains_QMARK_.call(null,G__35241,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_35242 = actx;
var _STAR_runtime_state_STAR__orig_val__35244 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35245 = oops.state.prepare_state.call(null,target_obj_35242,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35245;

try{var next_obj_35243 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35242,(0),"currentTime",true,true,false))?(target_obj_35242["currentTime"]):null);
return next_obj_35243;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35244;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__35246,p__35247){
var map__35248 = p__35246;
var map__35248__$1 = (((((!((map__35248 == null))))?(((((map__35248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35248):map__35248);
var actx = cljs.core.get.call(null,map__35248__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__35249 = p__35247;
var map__35249__$1 = (((((!((map__35249 == null))))?(((((map__35249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35249):map__35249);
var period_ms = cljs.core.get.call(null,map__35249__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32685__auto___35327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___35327,out_chan,map__35248,map__35248__$1,actx,map__35249,map__35249__$1,period_ms){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___35327,out_chan,map__35248,map__35248__$1,actx,map__35249,map__35249__$1,period_ms){
return (function (state_35298){
var state_val_35299 = (state_35298[(1)]);
if((state_val_35299 === (7))){
var state_35298__$1 = state_35298;
var statearr_35300_35328 = state_35298__$1;
(statearr_35300_35328[(2)] = true);

(statearr_35300_35328[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35299 === (1))){
var inst_35252 = null;
var inst_35253 = (0);
var state_35298__$1 = (function (){var statearr_35301 = state_35298;
(statearr_35301[(7)] = inst_35252);

(statearr_35301[(8)] = inst_35253);

return statearr_35301;
})();
var statearr_35302_35329 = state_35298__$1;
(statearr_35302_35329[(2)] = null);

(statearr_35302_35329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35299 === (4))){
var inst_35260 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_35261 = (inst_35260 & (32768));
var inst_35262 = period_ms.cljs$core$IDeref$;
var inst_35263 = (cljs.core.PROTOCOL_SENTINEL === inst_35262);
var inst_35264 = ((inst_35261) || (inst_35263));
var state_35298__$1 = state_35298;
if(cljs.core.truth_(inst_35264)){
var statearr_35303_35330 = state_35298__$1;
(statearr_35303_35330[(1)] = (7));

} else {
var statearr_35304_35331 = state_35298__$1;
(statearr_35304_35331[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35299 === (15))){
var inst_35255 = (state_35298[(9)]);
var inst_35253 = (state_35298[(8)]);
var inst_35276 = (state_35298[(10)]);
var inst_35280 = (state_35298[(2)]);
var inst_35281 = (inst_35280 + inst_35276);
var inst_35282 = (inst_35281 - inst_35255);
var inst_35283 = (inst_35282 / (1000));
var inst_35284 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_35285 = cljs.core.mod.call(null,inst_35253,(2));
var inst_35286 = [inst_35285,inst_35283];
var inst_35287 = cljs.core.PersistentHashMap.fromArrays(inst_35284,inst_35286);
var inst_35288 = cljs.core.async.put_BANG_.call(null,out_chan,inst_35287);
var inst_35289 = (0.7 * inst_35276);
var inst_35290 = cljs.core.async.timeout.call(null,inst_35289);
var state_35298__$1 = (function (){var statearr_35305 = state_35298;
(statearr_35305[(11)] = inst_35288);

return statearr_35305;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35298__$1,(16),inst_35290);
} else {
if((state_val_35299 === (13))){
var inst_35252 = (state_35298[(7)]);
var state_35298__$1 = state_35298;
var statearr_35306_35332 = state_35298__$1;
(statearr_35306_35332[(2)] = inst_35252);

(statearr_35306_35332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35299 === (6))){
var inst_35271 = (state_35298[(2)]);
var state_35298__$1 = state_35298;
if(cljs.core.truth_(inst_35271)){
var statearr_35307_35333 = state_35298__$1;
(statearr_35307_35333[(1)] = (10));

} else {
var statearr_35308_35334 = state_35298__$1;
(statearr_35308_35334[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35299 === (3))){
var inst_35296 = (state_35298[(2)]);
var state_35298__$1 = state_35298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35298__$1,inst_35296);
} else {
if((state_val_35299 === (12))){
var inst_35252 = (state_35298[(7)]);
var inst_35276 = (state_35298[(2)]);
var state_35298__$1 = (function (){var statearr_35309 = state_35298;
(statearr_35309[(10)] = inst_35276);

return statearr_35309;
})();
if(cljs.core.truth_(inst_35252)){
var statearr_35310_35335 = state_35298__$1;
(statearr_35310_35335[(1)] = (13));

} else {
var statearr_35311_35336 = state_35298__$1;
(statearr_35311_35336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35299 === (2))){
var inst_35255 = fugue.metronome.now_ms.call(null,actx);
var inst_35257 = (period_ms == null);
var inst_35258 = cljs.core.not.call(null,inst_35257);
var state_35298__$1 = (function (){var statearr_35312 = state_35298;
(statearr_35312[(9)] = inst_35255);

return statearr_35312;
})();
if(inst_35258){
var statearr_35313_35337 = state_35298__$1;
(statearr_35313_35337[(1)] = (4));

} else {
var statearr_35314_35338 = state_35298__$1;
(statearr_35314_35338[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35299 === (11))){
var state_35298__$1 = state_35298;
var statearr_35315_35339 = state_35298__$1;
(statearr_35315_35339[(2)] = period_ms);

(statearr_35315_35339[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35299 === (9))){
var inst_35268 = (state_35298[(2)]);
var state_35298__$1 = state_35298;
var statearr_35316_35340 = state_35298__$1;
(statearr_35316_35340[(2)] = inst_35268);

(statearr_35316_35340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35299 === (5))){
var state_35298__$1 = state_35298;
var statearr_35317_35341 = state_35298__$1;
(statearr_35317_35341[(2)] = false);

(statearr_35317_35341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35299 === (14))){
var inst_35255 = (state_35298[(9)]);
var state_35298__$1 = state_35298;
var statearr_35318_35342 = state_35298__$1;
(statearr_35318_35342[(2)] = inst_35255);

(statearr_35318_35342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35299 === (16))){
var inst_35255 = (state_35298[(9)]);
var inst_35253 = (state_35298[(8)]);
var inst_35292 = (state_35298[(2)]);
var inst_35293 = (inst_35253 + (1));
var inst_35252 = inst_35255;
var inst_35253__$1 = inst_35293;
var state_35298__$1 = (function (){var statearr_35319 = state_35298;
(statearr_35319[(7)] = inst_35252);

(statearr_35319[(8)] = inst_35253__$1);

(statearr_35319[(12)] = inst_35292);

return statearr_35319;
})();
var statearr_35320_35343 = state_35298__$1;
(statearr_35320_35343[(2)] = null);

(statearr_35320_35343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35299 === (10))){
var inst_35273 = cljs.core.deref.call(null,period_ms);
var state_35298__$1 = state_35298;
var statearr_35321_35344 = state_35298__$1;
(statearr_35321_35344[(2)] = inst_35273);

(statearr_35321_35344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35299 === (8))){
var state_35298__$1 = state_35298;
var statearr_35322_35345 = state_35298__$1;
(statearr_35322_35345[(2)] = false);

(statearr_35322_35345[(1)] = (9));


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
});})(c__32685__auto___35327,out_chan,map__35248,map__35248__$1,actx,map__35249,map__35249__$1,period_ms))
;
return ((function (switch__32590__auto__,c__32685__auto___35327,out_chan,map__35248,map__35248__$1,actx,map__35249,map__35249__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__32591__auto__ = null;
var fugue$metronome$state_machine__32591__auto____0 = (function (){
var statearr_35323 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35323[(0)] = fugue$metronome$state_machine__32591__auto__);

(statearr_35323[(1)] = (1));

return statearr_35323;
});
var fugue$metronome$state_machine__32591__auto____1 = (function (state_35298){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_35298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e35324){if((e35324 instanceof Object)){
var ex__32594__auto__ = e35324;
var statearr_35325_35346 = state_35298;
(statearr_35325_35346[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35347 = state_35298;
state_35298 = G__35347;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$metronome$state_machine__32591__auto__ = function(state_35298){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__32591__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__32591__auto____1.call(this,state_35298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__32591__auto____0;
fugue$metronome$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__32591__auto____1;
return fugue$metronome$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___35327,out_chan,map__35248,map__35248__$1,actx,map__35249,map__35249__$1,period_ms))
})();
var state__32687__auto__ = (function (){var statearr_35326 = f__32686__auto__.call(null);
(statearr_35326[(6)] = c__32685__auto___35327);

return statearr_35326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___35327,out_chan,map__35248,map__35248__$1,actx,map__35249,map__35249__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1610221077670
