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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35208){
return cljs.core.map_QMARK_.call(null,G__35208);
}),(function (G__35208){
return cljs.core.contains_QMARK_.call(null,G__35208,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__35208){
return ((cljs.core.map_QMARK_.call(null,G__35208)) && (cljs.core.contains_QMARK_.call(null,G__35208,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_35209 = actx;
var _STAR_runtime_state_STAR__orig_val__35211 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35212 = oops.state.prepare_state.call(null,target_obj_35209,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35212;

try{var next_obj_35210 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35209,(0),"currentTime",true,true,false))?(target_obj_35209["currentTime"]):null);
return next_obj_35210;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35211;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__35213,p__35214){
var map__35215 = p__35213;
var map__35215__$1 = (((((!((map__35215 == null))))?(((((map__35215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35215):map__35215);
var actx = cljs.core.get.call(null,map__35215__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__35216 = p__35214;
var map__35216__$1 = (((((!((map__35216 == null))))?(((((map__35216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35216):map__35216);
var period_ms = cljs.core.get.call(null,map__35216__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32685__auto___35294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___35294,out_chan,map__35215,map__35215__$1,actx,map__35216,map__35216__$1,period_ms){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___35294,out_chan,map__35215,map__35215__$1,actx,map__35216,map__35216__$1,period_ms){
return (function (state_35265){
var state_val_35266 = (state_35265[(1)]);
if((state_val_35266 === (7))){
var state_35265__$1 = state_35265;
var statearr_35267_35295 = state_35265__$1;
(statearr_35267_35295[(2)] = true);

(statearr_35267_35295[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (1))){
var inst_35219 = null;
var inst_35220 = (0);
var state_35265__$1 = (function (){var statearr_35268 = state_35265;
(statearr_35268[(7)] = inst_35219);

(statearr_35268[(8)] = inst_35220);

return statearr_35268;
})();
var statearr_35269_35296 = state_35265__$1;
(statearr_35269_35296[(2)] = null);

(statearr_35269_35296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (4))){
var inst_35227 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_35228 = (inst_35227 & (32768));
var inst_35229 = period_ms.cljs$core$IDeref$;
var inst_35230 = (cljs.core.PROTOCOL_SENTINEL === inst_35229);
var inst_35231 = ((inst_35228) || (inst_35230));
var state_35265__$1 = state_35265;
if(cljs.core.truth_(inst_35231)){
var statearr_35270_35297 = state_35265__$1;
(statearr_35270_35297[(1)] = (7));

} else {
var statearr_35271_35298 = state_35265__$1;
(statearr_35271_35298[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (15))){
var inst_35243 = (state_35265[(9)]);
var inst_35220 = (state_35265[(8)]);
var inst_35222 = (state_35265[(10)]);
var inst_35247 = (state_35265[(2)]);
var inst_35248 = (inst_35247 + inst_35243);
var inst_35249 = (inst_35248 - inst_35222);
var inst_35250 = (inst_35249 / (1000));
var inst_35251 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_35252 = cljs.core.mod.call(null,inst_35220,(2));
var inst_35253 = [inst_35252,inst_35250];
var inst_35254 = cljs.core.PersistentHashMap.fromArrays(inst_35251,inst_35253);
var inst_35255 = cljs.core.async.put_BANG_.call(null,out_chan,inst_35254);
var inst_35256 = (0.7 * inst_35243);
var inst_35257 = cljs.core.async.timeout.call(null,inst_35256);
var state_35265__$1 = (function (){var statearr_35272 = state_35265;
(statearr_35272[(11)] = inst_35255);

return statearr_35272;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35265__$1,(16),inst_35257);
} else {
if((state_val_35266 === (13))){
var inst_35219 = (state_35265[(7)]);
var state_35265__$1 = state_35265;
var statearr_35273_35299 = state_35265__$1;
(statearr_35273_35299[(2)] = inst_35219);

(statearr_35273_35299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (6))){
var inst_35238 = (state_35265[(2)]);
var state_35265__$1 = state_35265;
if(cljs.core.truth_(inst_35238)){
var statearr_35274_35300 = state_35265__$1;
(statearr_35274_35300[(1)] = (10));

} else {
var statearr_35275_35301 = state_35265__$1;
(statearr_35275_35301[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (3))){
var inst_35263 = (state_35265[(2)]);
var state_35265__$1 = state_35265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35265__$1,inst_35263);
} else {
if((state_val_35266 === (12))){
var inst_35219 = (state_35265[(7)]);
var inst_35243 = (state_35265[(2)]);
var state_35265__$1 = (function (){var statearr_35276 = state_35265;
(statearr_35276[(9)] = inst_35243);

return statearr_35276;
})();
if(cljs.core.truth_(inst_35219)){
var statearr_35277_35302 = state_35265__$1;
(statearr_35277_35302[(1)] = (13));

} else {
var statearr_35278_35303 = state_35265__$1;
(statearr_35278_35303[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (2))){
var inst_35222 = fugue.metronome.now_ms.call(null,actx);
var inst_35224 = (period_ms == null);
var inst_35225 = cljs.core.not.call(null,inst_35224);
var state_35265__$1 = (function (){var statearr_35279 = state_35265;
(statearr_35279[(10)] = inst_35222);

return statearr_35279;
})();
if(inst_35225){
var statearr_35280_35304 = state_35265__$1;
(statearr_35280_35304[(1)] = (4));

} else {
var statearr_35281_35305 = state_35265__$1;
(statearr_35281_35305[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (11))){
var state_35265__$1 = state_35265;
var statearr_35282_35306 = state_35265__$1;
(statearr_35282_35306[(2)] = period_ms);

(statearr_35282_35306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (9))){
var inst_35235 = (state_35265[(2)]);
var state_35265__$1 = state_35265;
var statearr_35283_35307 = state_35265__$1;
(statearr_35283_35307[(2)] = inst_35235);

(statearr_35283_35307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (5))){
var state_35265__$1 = state_35265;
var statearr_35284_35308 = state_35265__$1;
(statearr_35284_35308[(2)] = false);

(statearr_35284_35308[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (14))){
var inst_35222 = (state_35265[(10)]);
var state_35265__$1 = state_35265;
var statearr_35285_35309 = state_35265__$1;
(statearr_35285_35309[(2)] = inst_35222);

(statearr_35285_35309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (16))){
var inst_35220 = (state_35265[(8)]);
var inst_35222 = (state_35265[(10)]);
var inst_35259 = (state_35265[(2)]);
var inst_35260 = (inst_35220 + (1));
var inst_35219 = inst_35222;
var inst_35220__$1 = inst_35260;
var state_35265__$1 = (function (){var statearr_35286 = state_35265;
(statearr_35286[(7)] = inst_35219);

(statearr_35286[(12)] = inst_35259);

(statearr_35286[(8)] = inst_35220__$1);

return statearr_35286;
})();
var statearr_35287_35310 = state_35265__$1;
(statearr_35287_35310[(2)] = null);

(statearr_35287_35310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (10))){
var inst_35240 = cljs.core.deref.call(null,period_ms);
var state_35265__$1 = state_35265;
var statearr_35288_35311 = state_35265__$1;
(statearr_35288_35311[(2)] = inst_35240);

(statearr_35288_35311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35266 === (8))){
var state_35265__$1 = state_35265;
var statearr_35289_35312 = state_35265__$1;
(statearr_35289_35312[(2)] = false);

(statearr_35289_35312[(1)] = (9));


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
});})(c__32685__auto___35294,out_chan,map__35215,map__35215__$1,actx,map__35216,map__35216__$1,period_ms))
;
return ((function (switch__32590__auto__,c__32685__auto___35294,out_chan,map__35215,map__35215__$1,actx,map__35216,map__35216__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__32591__auto__ = null;
var fugue$metronome$state_machine__32591__auto____0 = (function (){
var statearr_35290 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35290[(0)] = fugue$metronome$state_machine__32591__auto__);

(statearr_35290[(1)] = (1));

return statearr_35290;
});
var fugue$metronome$state_machine__32591__auto____1 = (function (state_35265){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_35265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e35291){if((e35291 instanceof Object)){
var ex__32594__auto__ = e35291;
var statearr_35292_35313 = state_35265;
(statearr_35292_35313[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35314 = state_35265;
state_35265 = G__35314;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$metronome$state_machine__32591__auto__ = function(state_35265){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__32591__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__32591__auto____1.call(this,state_35265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__32591__auto____0;
fugue$metronome$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__32591__auto____1;
return fugue$metronome$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___35294,out_chan,map__35215,map__35215__$1,actx,map__35216,map__35216__$1,period_ms))
})();
var state__32687__auto__ = (function (){var statearr_35293 = f__32686__auto__.call(null);
(statearr_35293[(6)] = c__32685__auto___35294);

return statearr_35293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___35294,out_chan,map__35215,map__35215__$1,actx,map__35216,map__35216__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1610066031988
