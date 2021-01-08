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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35202){
return cljs.core.map_QMARK_.call(null,G__35202);
}),(function (G__35202){
return cljs.core.contains_QMARK_.call(null,G__35202,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__35202){
return ((cljs.core.map_QMARK_.call(null,G__35202)) && (cljs.core.contains_QMARK_.call(null,G__35202,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_35203 = actx;
var _STAR_runtime_state_STAR__orig_val__35205 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35206 = oops.state.prepare_state.call(null,target_obj_35203,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35206;

try{var next_obj_35204 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35203,(0),"currentTime",true,true,false))?(target_obj_35203["currentTime"]):null);
return next_obj_35204;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35205;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__35207,p__35208){
var map__35209 = p__35207;
var map__35209__$1 = (((((!((map__35209 == null))))?(((((map__35209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35209):map__35209);
var actx = cljs.core.get.call(null,map__35209__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__35210 = p__35208;
var map__35210__$1 = (((((!((map__35210 == null))))?(((((map__35210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35210):map__35210);
var period_ms = cljs.core.get.call(null,map__35210__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32685__auto___35288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___35288,out_chan,map__35209,map__35209__$1,actx,map__35210,map__35210__$1,period_ms){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___35288,out_chan,map__35209,map__35209__$1,actx,map__35210,map__35210__$1,period_ms){
return (function (state_35259){
var state_val_35260 = (state_35259[(1)]);
if((state_val_35260 === (7))){
var state_35259__$1 = state_35259;
var statearr_35261_35289 = state_35259__$1;
(statearr_35261_35289[(2)] = true);

(statearr_35261_35289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (1))){
var inst_35213 = null;
var inst_35214 = (0);
var state_35259__$1 = (function (){var statearr_35262 = state_35259;
(statearr_35262[(7)] = inst_35213);

(statearr_35262[(8)] = inst_35214);

return statearr_35262;
})();
var statearr_35263_35290 = state_35259__$1;
(statearr_35263_35290[(2)] = null);

(statearr_35263_35290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (4))){
var inst_35221 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_35222 = (inst_35221 & (32768));
var inst_35223 = period_ms.cljs$core$IDeref$;
var inst_35224 = (cljs.core.PROTOCOL_SENTINEL === inst_35223);
var inst_35225 = ((inst_35222) || (inst_35224));
var state_35259__$1 = state_35259;
if(cljs.core.truth_(inst_35225)){
var statearr_35264_35291 = state_35259__$1;
(statearr_35264_35291[(1)] = (7));

} else {
var statearr_35265_35292 = state_35259__$1;
(statearr_35265_35292[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (15))){
var inst_35237 = (state_35259[(9)]);
var inst_35214 = (state_35259[(8)]);
var inst_35216 = (state_35259[(10)]);
var inst_35241 = (state_35259[(2)]);
var inst_35242 = (inst_35241 + inst_35237);
var inst_35243 = (inst_35242 - inst_35216);
var inst_35244 = (inst_35243 / (1000));
var inst_35245 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_35246 = cljs.core.mod.call(null,inst_35214,(2));
var inst_35247 = [inst_35246,inst_35244];
var inst_35248 = cljs.core.PersistentHashMap.fromArrays(inst_35245,inst_35247);
var inst_35249 = cljs.core.async.put_BANG_.call(null,out_chan,inst_35248);
var inst_35250 = (0.7 * inst_35237);
var inst_35251 = cljs.core.async.timeout.call(null,inst_35250);
var state_35259__$1 = (function (){var statearr_35266 = state_35259;
(statearr_35266[(11)] = inst_35249);

return statearr_35266;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35259__$1,(16),inst_35251);
} else {
if((state_val_35260 === (13))){
var inst_35213 = (state_35259[(7)]);
var state_35259__$1 = state_35259;
var statearr_35267_35293 = state_35259__$1;
(statearr_35267_35293[(2)] = inst_35213);

(statearr_35267_35293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (6))){
var inst_35232 = (state_35259[(2)]);
var state_35259__$1 = state_35259;
if(cljs.core.truth_(inst_35232)){
var statearr_35268_35294 = state_35259__$1;
(statearr_35268_35294[(1)] = (10));

} else {
var statearr_35269_35295 = state_35259__$1;
(statearr_35269_35295[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (3))){
var inst_35257 = (state_35259[(2)]);
var state_35259__$1 = state_35259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35259__$1,inst_35257);
} else {
if((state_val_35260 === (12))){
var inst_35213 = (state_35259[(7)]);
var inst_35237 = (state_35259[(2)]);
var state_35259__$1 = (function (){var statearr_35270 = state_35259;
(statearr_35270[(9)] = inst_35237);

return statearr_35270;
})();
if(cljs.core.truth_(inst_35213)){
var statearr_35271_35296 = state_35259__$1;
(statearr_35271_35296[(1)] = (13));

} else {
var statearr_35272_35297 = state_35259__$1;
(statearr_35272_35297[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (2))){
var inst_35216 = fugue.metronome.now_ms.call(null,actx);
var inst_35218 = (period_ms == null);
var inst_35219 = cljs.core.not.call(null,inst_35218);
var state_35259__$1 = (function (){var statearr_35273 = state_35259;
(statearr_35273[(10)] = inst_35216);

return statearr_35273;
})();
if(inst_35219){
var statearr_35274_35298 = state_35259__$1;
(statearr_35274_35298[(1)] = (4));

} else {
var statearr_35275_35299 = state_35259__$1;
(statearr_35275_35299[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (11))){
var state_35259__$1 = state_35259;
var statearr_35276_35300 = state_35259__$1;
(statearr_35276_35300[(2)] = period_ms);

(statearr_35276_35300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (9))){
var inst_35229 = (state_35259[(2)]);
var state_35259__$1 = state_35259;
var statearr_35277_35301 = state_35259__$1;
(statearr_35277_35301[(2)] = inst_35229);

(statearr_35277_35301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (5))){
var state_35259__$1 = state_35259;
var statearr_35278_35302 = state_35259__$1;
(statearr_35278_35302[(2)] = false);

(statearr_35278_35302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (14))){
var inst_35216 = (state_35259[(10)]);
var state_35259__$1 = state_35259;
var statearr_35279_35303 = state_35259__$1;
(statearr_35279_35303[(2)] = inst_35216);

(statearr_35279_35303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (16))){
var inst_35214 = (state_35259[(8)]);
var inst_35216 = (state_35259[(10)]);
var inst_35253 = (state_35259[(2)]);
var inst_35254 = (inst_35214 + (1));
var inst_35213 = inst_35216;
var inst_35214__$1 = inst_35254;
var state_35259__$1 = (function (){var statearr_35280 = state_35259;
(statearr_35280[(12)] = inst_35253);

(statearr_35280[(7)] = inst_35213);

(statearr_35280[(8)] = inst_35214__$1);

return statearr_35280;
})();
var statearr_35281_35304 = state_35259__$1;
(statearr_35281_35304[(2)] = null);

(statearr_35281_35304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (10))){
var inst_35234 = cljs.core.deref.call(null,period_ms);
var state_35259__$1 = state_35259;
var statearr_35282_35305 = state_35259__$1;
(statearr_35282_35305[(2)] = inst_35234);

(statearr_35282_35305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35260 === (8))){
var state_35259__$1 = state_35259;
var statearr_35283_35306 = state_35259__$1;
(statearr_35283_35306[(2)] = false);

(statearr_35283_35306[(1)] = (9));


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
});})(c__32685__auto___35288,out_chan,map__35209,map__35209__$1,actx,map__35210,map__35210__$1,period_ms))
;
return ((function (switch__32590__auto__,c__32685__auto___35288,out_chan,map__35209,map__35209__$1,actx,map__35210,map__35210__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__32591__auto__ = null;
var fugue$metronome$state_machine__32591__auto____0 = (function (){
var statearr_35284 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35284[(0)] = fugue$metronome$state_machine__32591__auto__);

(statearr_35284[(1)] = (1));

return statearr_35284;
});
var fugue$metronome$state_machine__32591__auto____1 = (function (state_35259){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_35259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e35285){if((e35285 instanceof Object)){
var ex__32594__auto__ = e35285;
var statearr_35286_35307 = state_35259;
(statearr_35286_35307[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35308 = state_35259;
state_35259 = G__35308;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$metronome$state_machine__32591__auto__ = function(state_35259){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__32591__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__32591__auto____1.call(this,state_35259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__32591__auto____0;
fugue$metronome$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__32591__auto____1;
return fugue$metronome$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___35288,out_chan,map__35209,map__35209__$1,actx,map__35210,map__35210__$1,period_ms))
})();
var state__32687__auto__ = (function (){var statearr_35287 = f__32686__auto__.call(null);
(statearr_35287[(6)] = c__32685__auto___35288);

return statearr_35287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___35288,out_chan,map__35209,map__35209__$1,actx,map__35210,map__35210__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1610064396775
