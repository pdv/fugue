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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35213){
return cljs.core.map_QMARK_.call(null,G__35213);
}),(function (G__35213){
return cljs.core.contains_QMARK_.call(null,G__35213,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__35213){
return ((cljs.core.map_QMARK_.call(null,G__35213)) && (cljs.core.contains_QMARK_.call(null,G__35213,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_35214 = actx;
var _STAR_runtime_state_STAR__orig_val__35216 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35217 = oops.state.prepare_state.call(null,target_obj_35214,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35217;

try{var next_obj_35215 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35214,(0),"currentTime",true,true,false))?(target_obj_35214["currentTime"]):null);
return next_obj_35215;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35216;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__35218,p__35219){
var map__35220 = p__35218;
var map__35220__$1 = (((((!((map__35220 == null))))?(((((map__35220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35220):map__35220);
var actx = cljs.core.get.call(null,map__35220__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__35221 = p__35219;
var map__35221__$1 = (((((!((map__35221 == null))))?(((((map__35221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35221):map__35221);
var period_ms = cljs.core.get.call(null,map__35221__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32707__auto___35299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___35299,out_chan,map__35220,map__35220__$1,actx,map__35221,map__35221__$1,period_ms){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___35299,out_chan,map__35220,map__35220__$1,actx,map__35221,map__35221__$1,period_ms){
return (function (state_35270){
var state_val_35271 = (state_35270[(1)]);
if((state_val_35271 === (7))){
var state_35270__$1 = state_35270;
var statearr_35272_35300 = state_35270__$1;
(statearr_35272_35300[(2)] = true);

(statearr_35272_35300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (1))){
var inst_35224 = null;
var inst_35225 = (0);
var state_35270__$1 = (function (){var statearr_35273 = state_35270;
(statearr_35273[(7)] = inst_35224);

(statearr_35273[(8)] = inst_35225);

return statearr_35273;
})();
var statearr_35274_35301 = state_35270__$1;
(statearr_35274_35301[(2)] = null);

(statearr_35274_35301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (4))){
var inst_35232 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_35233 = (inst_35232 & (32768));
var inst_35234 = period_ms.cljs$core$IDeref$;
var inst_35235 = (cljs.core.PROTOCOL_SENTINEL === inst_35234);
var inst_35236 = ((inst_35233) || (inst_35235));
var state_35270__$1 = state_35270;
if(cljs.core.truth_(inst_35236)){
var statearr_35275_35302 = state_35270__$1;
(statearr_35275_35302[(1)] = (7));

} else {
var statearr_35276_35303 = state_35270__$1;
(statearr_35276_35303[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (15))){
var inst_35227 = (state_35270[(9)]);
var inst_35225 = (state_35270[(8)]);
var inst_35248 = (state_35270[(10)]);
var inst_35252 = (state_35270[(2)]);
var inst_35253 = (inst_35252 + inst_35248);
var inst_35254 = (inst_35253 - inst_35227);
var inst_35255 = (inst_35254 / (1000));
var inst_35256 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_35257 = cljs.core.mod.call(null,inst_35225,(2));
var inst_35258 = [inst_35257,inst_35255];
var inst_35259 = cljs.core.PersistentHashMap.fromArrays(inst_35256,inst_35258);
var inst_35260 = cljs.core.async.put_BANG_.call(null,out_chan,inst_35259);
var inst_35261 = (0.7 * inst_35248);
var inst_35262 = cljs.core.async.timeout.call(null,inst_35261);
var state_35270__$1 = (function (){var statearr_35277 = state_35270;
(statearr_35277[(11)] = inst_35260);

return statearr_35277;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35270__$1,(16),inst_35262);
} else {
if((state_val_35271 === (13))){
var inst_35224 = (state_35270[(7)]);
var state_35270__$1 = state_35270;
var statearr_35278_35304 = state_35270__$1;
(statearr_35278_35304[(2)] = inst_35224);

(statearr_35278_35304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (6))){
var inst_35243 = (state_35270[(2)]);
var state_35270__$1 = state_35270;
if(cljs.core.truth_(inst_35243)){
var statearr_35279_35305 = state_35270__$1;
(statearr_35279_35305[(1)] = (10));

} else {
var statearr_35280_35306 = state_35270__$1;
(statearr_35280_35306[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (3))){
var inst_35268 = (state_35270[(2)]);
var state_35270__$1 = state_35270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35270__$1,inst_35268);
} else {
if((state_val_35271 === (12))){
var inst_35224 = (state_35270[(7)]);
var inst_35248 = (state_35270[(2)]);
var state_35270__$1 = (function (){var statearr_35281 = state_35270;
(statearr_35281[(10)] = inst_35248);

return statearr_35281;
})();
if(cljs.core.truth_(inst_35224)){
var statearr_35282_35307 = state_35270__$1;
(statearr_35282_35307[(1)] = (13));

} else {
var statearr_35283_35308 = state_35270__$1;
(statearr_35283_35308[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (2))){
var inst_35227 = fugue.metronome.now_ms.call(null,actx);
var inst_35229 = (period_ms == null);
var inst_35230 = cljs.core.not.call(null,inst_35229);
var state_35270__$1 = (function (){var statearr_35284 = state_35270;
(statearr_35284[(9)] = inst_35227);

return statearr_35284;
})();
if(inst_35230){
var statearr_35285_35309 = state_35270__$1;
(statearr_35285_35309[(1)] = (4));

} else {
var statearr_35286_35310 = state_35270__$1;
(statearr_35286_35310[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (11))){
var state_35270__$1 = state_35270;
var statearr_35287_35311 = state_35270__$1;
(statearr_35287_35311[(2)] = period_ms);

(statearr_35287_35311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (9))){
var inst_35240 = (state_35270[(2)]);
var state_35270__$1 = state_35270;
var statearr_35288_35312 = state_35270__$1;
(statearr_35288_35312[(2)] = inst_35240);

(statearr_35288_35312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (5))){
var state_35270__$1 = state_35270;
var statearr_35289_35313 = state_35270__$1;
(statearr_35289_35313[(2)] = false);

(statearr_35289_35313[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (14))){
var inst_35227 = (state_35270[(9)]);
var state_35270__$1 = state_35270;
var statearr_35290_35314 = state_35270__$1;
(statearr_35290_35314[(2)] = inst_35227);

(statearr_35290_35314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (16))){
var inst_35227 = (state_35270[(9)]);
var inst_35225 = (state_35270[(8)]);
var inst_35264 = (state_35270[(2)]);
var inst_35265 = (inst_35225 + (1));
var inst_35224 = inst_35227;
var inst_35225__$1 = inst_35265;
var state_35270__$1 = (function (){var statearr_35291 = state_35270;
(statearr_35291[(12)] = inst_35264);

(statearr_35291[(7)] = inst_35224);

(statearr_35291[(8)] = inst_35225__$1);

return statearr_35291;
})();
var statearr_35292_35315 = state_35270__$1;
(statearr_35292_35315[(2)] = null);

(statearr_35292_35315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (10))){
var inst_35245 = cljs.core.deref.call(null,period_ms);
var state_35270__$1 = state_35270;
var statearr_35293_35316 = state_35270__$1;
(statearr_35293_35316[(2)] = inst_35245);

(statearr_35293_35316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (8))){
var state_35270__$1 = state_35270;
var statearr_35294_35317 = state_35270__$1;
(statearr_35294_35317[(2)] = false);

(statearr_35294_35317[(1)] = (9));


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
});})(c__32707__auto___35299,out_chan,map__35220,map__35220__$1,actx,map__35221,map__35221__$1,period_ms))
;
return ((function (switch__32612__auto__,c__32707__auto___35299,out_chan,map__35220,map__35220__$1,actx,map__35221,map__35221__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__32613__auto__ = null;
var fugue$metronome$state_machine__32613__auto____0 = (function (){
var statearr_35295 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35295[(0)] = fugue$metronome$state_machine__32613__auto__);

(statearr_35295[(1)] = (1));

return statearr_35295;
});
var fugue$metronome$state_machine__32613__auto____1 = (function (state_35270){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_35270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e35296){if((e35296 instanceof Object)){
var ex__32616__auto__ = e35296;
var statearr_35297_35318 = state_35270;
(statearr_35297_35318[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35319 = state_35270;
state_35270 = G__35319;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
fugue$metronome$state_machine__32613__auto__ = function(state_35270){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__32613__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__32613__auto____1.call(this,state_35270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__32613__auto____0;
fugue$metronome$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__32613__auto____1;
return fugue$metronome$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___35299,out_chan,map__35220,map__35220__$1,actx,map__35221,map__35221__$1,period_ms))
})();
var state__32709__auto__ = (function (){var statearr_35298 = f__32708__auto__.call(null);
(statearr_35298[(6)] = c__32707__auto___35299);

return statearr_35298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___35299,out_chan,map__35220,map__35220__$1,actx,map__35221,map__35221__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1610381656340
