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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35196){
return cljs.core.map_QMARK_.call(null,G__35196);
}),(function (G__35196){
return cljs.core.contains_QMARK_.call(null,G__35196,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__35196){
return ((cljs.core.map_QMARK_.call(null,G__35196)) && (cljs.core.contains_QMARK_.call(null,G__35196,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_35197 = actx;
var _STAR_runtime_state_STAR__orig_val__35199 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35200 = oops.state.prepare_state.call(null,target_obj_35197,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35200;

try{var next_obj_35198 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35197,(0),"currentTime",true,true,false))?(target_obj_35197["currentTime"]):null);
return next_obj_35198;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35199;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__35201,p__35202){
var map__35203 = p__35201;
var map__35203__$1 = (((((!((map__35203 == null))))?(((((map__35203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35203):map__35203);
var actx = cljs.core.get.call(null,map__35203__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__35204 = p__35202;
var map__35204__$1 = (((((!((map__35204 == null))))?(((((map__35204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35204):map__35204);
var period_ms = cljs.core.get.call(null,map__35204__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32685__auto___35282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___35282,out_chan,map__35203,map__35203__$1,actx,map__35204,map__35204__$1,period_ms){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___35282,out_chan,map__35203,map__35203__$1,actx,map__35204,map__35204__$1,period_ms){
return (function (state_35253){
var state_val_35254 = (state_35253[(1)]);
if((state_val_35254 === (7))){
var state_35253__$1 = state_35253;
var statearr_35255_35283 = state_35253__$1;
(statearr_35255_35283[(2)] = true);

(statearr_35255_35283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (1))){
var inst_35207 = null;
var inst_35208 = (0);
var state_35253__$1 = (function (){var statearr_35256 = state_35253;
(statearr_35256[(7)] = inst_35208);

(statearr_35256[(8)] = inst_35207);

return statearr_35256;
})();
var statearr_35257_35284 = state_35253__$1;
(statearr_35257_35284[(2)] = null);

(statearr_35257_35284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (4))){
var inst_35215 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_35216 = (inst_35215 & (32768));
var inst_35217 = period_ms.cljs$core$IDeref$;
var inst_35218 = (cljs.core.PROTOCOL_SENTINEL === inst_35217);
var inst_35219 = ((inst_35216) || (inst_35218));
var state_35253__$1 = state_35253;
if(cljs.core.truth_(inst_35219)){
var statearr_35258_35285 = state_35253__$1;
(statearr_35258_35285[(1)] = (7));

} else {
var statearr_35259_35286 = state_35253__$1;
(statearr_35259_35286[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (15))){
var inst_35208 = (state_35253[(7)]);
var inst_35210 = (state_35253[(9)]);
var inst_35231 = (state_35253[(10)]);
var inst_35235 = (state_35253[(2)]);
var inst_35236 = (inst_35235 + inst_35231);
var inst_35237 = (inst_35236 - inst_35210);
var inst_35238 = (inst_35237 / (1000));
var inst_35239 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_35240 = cljs.core.mod.call(null,inst_35208,(2));
var inst_35241 = [inst_35240,inst_35238];
var inst_35242 = cljs.core.PersistentHashMap.fromArrays(inst_35239,inst_35241);
var inst_35243 = cljs.core.async.put_BANG_.call(null,out_chan,inst_35242);
var inst_35244 = (0.7 * inst_35231);
var inst_35245 = cljs.core.async.timeout.call(null,inst_35244);
var state_35253__$1 = (function (){var statearr_35260 = state_35253;
(statearr_35260[(11)] = inst_35243);

return statearr_35260;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35253__$1,(16),inst_35245);
} else {
if((state_val_35254 === (13))){
var inst_35207 = (state_35253[(8)]);
var state_35253__$1 = state_35253;
var statearr_35261_35287 = state_35253__$1;
(statearr_35261_35287[(2)] = inst_35207);

(statearr_35261_35287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (6))){
var inst_35226 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
if(cljs.core.truth_(inst_35226)){
var statearr_35262_35288 = state_35253__$1;
(statearr_35262_35288[(1)] = (10));

} else {
var statearr_35263_35289 = state_35253__$1;
(statearr_35263_35289[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (3))){
var inst_35251 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35253__$1,inst_35251);
} else {
if((state_val_35254 === (12))){
var inst_35207 = (state_35253[(8)]);
var inst_35231 = (state_35253[(2)]);
var state_35253__$1 = (function (){var statearr_35264 = state_35253;
(statearr_35264[(10)] = inst_35231);

return statearr_35264;
})();
if(cljs.core.truth_(inst_35207)){
var statearr_35265_35290 = state_35253__$1;
(statearr_35265_35290[(1)] = (13));

} else {
var statearr_35266_35291 = state_35253__$1;
(statearr_35266_35291[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (2))){
var inst_35210 = fugue.metronome.now_ms.call(null,actx);
var inst_35212 = (period_ms == null);
var inst_35213 = cljs.core.not.call(null,inst_35212);
var state_35253__$1 = (function (){var statearr_35267 = state_35253;
(statearr_35267[(9)] = inst_35210);

return statearr_35267;
})();
if(inst_35213){
var statearr_35268_35292 = state_35253__$1;
(statearr_35268_35292[(1)] = (4));

} else {
var statearr_35269_35293 = state_35253__$1;
(statearr_35269_35293[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (11))){
var state_35253__$1 = state_35253;
var statearr_35270_35294 = state_35253__$1;
(statearr_35270_35294[(2)] = period_ms);

(statearr_35270_35294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (9))){
var inst_35223 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
var statearr_35271_35295 = state_35253__$1;
(statearr_35271_35295[(2)] = inst_35223);

(statearr_35271_35295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (5))){
var state_35253__$1 = state_35253;
var statearr_35272_35296 = state_35253__$1;
(statearr_35272_35296[(2)] = false);

(statearr_35272_35296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (14))){
var inst_35210 = (state_35253[(9)]);
var state_35253__$1 = state_35253;
var statearr_35273_35297 = state_35253__$1;
(statearr_35273_35297[(2)] = inst_35210);

(statearr_35273_35297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (16))){
var inst_35208 = (state_35253[(7)]);
var inst_35210 = (state_35253[(9)]);
var inst_35247 = (state_35253[(2)]);
var inst_35248 = (inst_35208 + (1));
var inst_35207 = inst_35210;
var inst_35208__$1 = inst_35248;
var state_35253__$1 = (function (){var statearr_35274 = state_35253;
(statearr_35274[(7)] = inst_35208__$1);

(statearr_35274[(8)] = inst_35207);

(statearr_35274[(12)] = inst_35247);

return statearr_35274;
})();
var statearr_35275_35298 = state_35253__$1;
(statearr_35275_35298[(2)] = null);

(statearr_35275_35298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (10))){
var inst_35228 = cljs.core.deref.call(null,period_ms);
var state_35253__$1 = state_35253;
var statearr_35276_35299 = state_35253__$1;
(statearr_35276_35299[(2)] = inst_35228);

(statearr_35276_35299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (8))){
var state_35253__$1 = state_35253;
var statearr_35277_35300 = state_35253__$1;
(statearr_35277_35300[(2)] = false);

(statearr_35277_35300[(1)] = (9));


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
});})(c__32685__auto___35282,out_chan,map__35203,map__35203__$1,actx,map__35204,map__35204__$1,period_ms))
;
return ((function (switch__32590__auto__,c__32685__auto___35282,out_chan,map__35203,map__35203__$1,actx,map__35204,map__35204__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__32591__auto__ = null;
var fugue$metronome$state_machine__32591__auto____0 = (function (){
var statearr_35278 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35278[(0)] = fugue$metronome$state_machine__32591__auto__);

(statearr_35278[(1)] = (1));

return statearr_35278;
});
var fugue$metronome$state_machine__32591__auto____1 = (function (state_35253){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_35253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e35279){if((e35279 instanceof Object)){
var ex__32594__auto__ = e35279;
var statearr_35280_35301 = state_35253;
(statearr_35280_35301[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35302 = state_35253;
state_35253 = G__35302;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$metronome$state_machine__32591__auto__ = function(state_35253){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__32591__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__32591__auto____1.call(this,state_35253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__32591__auto____0;
fugue$metronome$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__32591__auto____1;
return fugue$metronome$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___35282,out_chan,map__35203,map__35203__$1,actx,map__35204,map__35204__$1,period_ms))
})();
var state__32687__auto__ = (function (){var statearr_35281 = f__32686__auto__.call(null);
(statearr_35281[(6)] = c__32685__auto___35282);

return statearr_35281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___35282,out_chan,map__35203,map__35203__$1,actx,map__35204,map__35204__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1610058838938
