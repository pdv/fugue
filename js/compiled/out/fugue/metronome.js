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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__15288){
return cljs.core.map_QMARK_.call(null,G__15288);
}),(function (G__15288){
return cljs.core.contains_QMARK_.call(null,G__15288,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__15288){
return ((cljs.core.map_QMARK_.call(null,G__15288)) && (cljs.core.contains_QMARK_.call(null,G__15288,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_15289 = actx;
var _STAR_runtime_state_STAR__orig_val__15291 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__15292 = oops.state.prepare_state.call(null,target_obj_15289,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__15292;

try{var next_obj_15290 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_15289,(0),"currentTime",true,true,false))?(target_obj_15289["currentTime"]):null);
return next_obj_15290;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__15291;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__15293,p__15294){
var map__15295 = p__15293;
var map__15295__$1 = (((((!((map__15295 == null))))?(((((map__15295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15295):map__15295);
var actx = cljs.core.get.call(null,map__15295__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__15296 = p__15294;
var map__15296__$1 = (((((!((map__15296 == null))))?(((((map__15296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15296):map__15296);
var period_ms = cljs.core.get.call(null,map__15296__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__12822__auto___15374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___15374,out_chan,map__15295,map__15295__$1,actx,map__15296,map__15296__$1,period_ms){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___15374,out_chan,map__15295,map__15295__$1,actx,map__15296,map__15296__$1,period_ms){
return (function (state_15345){
var state_val_15346 = (state_15345[(1)]);
if((state_val_15346 === (7))){
var state_15345__$1 = state_15345;
var statearr_15347_15375 = state_15345__$1;
(statearr_15347_15375[(2)] = true);

(statearr_15347_15375[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15346 === (1))){
var inst_15299 = null;
var inst_15300 = (0);
var state_15345__$1 = (function (){var statearr_15348 = state_15345;
(statearr_15348[(7)] = inst_15299);

(statearr_15348[(8)] = inst_15300);

return statearr_15348;
})();
var statearr_15349_15376 = state_15345__$1;
(statearr_15349_15376[(2)] = null);

(statearr_15349_15376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15346 === (4))){
var inst_15307 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_15308 = (inst_15307 & (32768));
var inst_15309 = period_ms.cljs$core$IDeref$;
var inst_15310 = (cljs.core.PROTOCOL_SENTINEL === inst_15309);
var inst_15311 = ((inst_15308) || (inst_15310));
var state_15345__$1 = state_15345;
if(cljs.core.truth_(inst_15311)){
var statearr_15350_15377 = state_15345__$1;
(statearr_15350_15377[(1)] = (7));

} else {
var statearr_15351_15378 = state_15345__$1;
(statearr_15351_15378[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15346 === (15))){
var inst_15302 = (state_15345[(9)]);
var inst_15323 = (state_15345[(10)]);
var inst_15300 = (state_15345[(8)]);
var inst_15327 = (state_15345[(2)]);
var inst_15328 = (inst_15327 + inst_15323);
var inst_15329 = (inst_15328 - inst_15302);
var inst_15330 = (inst_15329 / (1000));
var inst_15331 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_15332 = cljs.core.mod.call(null,inst_15300,(2));
var inst_15333 = [inst_15332,inst_15330];
var inst_15334 = cljs.core.PersistentHashMap.fromArrays(inst_15331,inst_15333);
var inst_15335 = cljs.core.async.put_BANG_.call(null,out_chan,inst_15334);
var inst_15336 = (0.7 * inst_15323);
var inst_15337 = cljs.core.async.timeout.call(null,inst_15336);
var state_15345__$1 = (function (){var statearr_15352 = state_15345;
(statearr_15352[(11)] = inst_15335);

return statearr_15352;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15345__$1,(16),inst_15337);
} else {
if((state_val_15346 === (13))){
var inst_15299 = (state_15345[(7)]);
var state_15345__$1 = state_15345;
var statearr_15353_15379 = state_15345__$1;
(statearr_15353_15379[(2)] = inst_15299);

(statearr_15353_15379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15346 === (6))){
var inst_15318 = (state_15345[(2)]);
var state_15345__$1 = state_15345;
if(cljs.core.truth_(inst_15318)){
var statearr_15354_15380 = state_15345__$1;
(statearr_15354_15380[(1)] = (10));

} else {
var statearr_15355_15381 = state_15345__$1;
(statearr_15355_15381[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15346 === (3))){
var inst_15343 = (state_15345[(2)]);
var state_15345__$1 = state_15345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15345__$1,inst_15343);
} else {
if((state_val_15346 === (12))){
var inst_15299 = (state_15345[(7)]);
var inst_15323 = (state_15345[(2)]);
var state_15345__$1 = (function (){var statearr_15356 = state_15345;
(statearr_15356[(10)] = inst_15323);

return statearr_15356;
})();
if(cljs.core.truth_(inst_15299)){
var statearr_15357_15382 = state_15345__$1;
(statearr_15357_15382[(1)] = (13));

} else {
var statearr_15358_15383 = state_15345__$1;
(statearr_15358_15383[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15346 === (2))){
var inst_15302 = fugue.metronome.now_ms.call(null,actx);
var inst_15304 = (period_ms == null);
var inst_15305 = cljs.core.not.call(null,inst_15304);
var state_15345__$1 = (function (){var statearr_15359 = state_15345;
(statearr_15359[(9)] = inst_15302);

return statearr_15359;
})();
if(inst_15305){
var statearr_15360_15384 = state_15345__$1;
(statearr_15360_15384[(1)] = (4));

} else {
var statearr_15361_15385 = state_15345__$1;
(statearr_15361_15385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15346 === (11))){
var state_15345__$1 = state_15345;
var statearr_15362_15386 = state_15345__$1;
(statearr_15362_15386[(2)] = period_ms);

(statearr_15362_15386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15346 === (9))){
var inst_15315 = (state_15345[(2)]);
var state_15345__$1 = state_15345;
var statearr_15363_15387 = state_15345__$1;
(statearr_15363_15387[(2)] = inst_15315);

(statearr_15363_15387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15346 === (5))){
var state_15345__$1 = state_15345;
var statearr_15364_15388 = state_15345__$1;
(statearr_15364_15388[(2)] = false);

(statearr_15364_15388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15346 === (14))){
var inst_15302 = (state_15345[(9)]);
var state_15345__$1 = state_15345;
var statearr_15365_15389 = state_15345__$1;
(statearr_15365_15389[(2)] = inst_15302);

(statearr_15365_15389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15346 === (16))){
var inst_15302 = (state_15345[(9)]);
var inst_15300 = (state_15345[(8)]);
var inst_15339 = (state_15345[(2)]);
var inst_15340 = (inst_15300 + (1));
var inst_15299 = inst_15302;
var inst_15300__$1 = inst_15340;
var state_15345__$1 = (function (){var statearr_15366 = state_15345;
(statearr_15366[(7)] = inst_15299);

(statearr_15366[(12)] = inst_15339);

(statearr_15366[(8)] = inst_15300__$1);

return statearr_15366;
})();
var statearr_15367_15390 = state_15345__$1;
(statearr_15367_15390[(2)] = null);

(statearr_15367_15390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15346 === (10))){
var inst_15320 = cljs.core.deref.call(null,period_ms);
var state_15345__$1 = state_15345;
var statearr_15368_15391 = state_15345__$1;
(statearr_15368_15391[(2)] = inst_15320);

(statearr_15368_15391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15346 === (8))){
var state_15345__$1 = state_15345;
var statearr_15369_15392 = state_15345__$1;
(statearr_15369_15392[(2)] = false);

(statearr_15369_15392[(1)] = (9));


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
});})(c__12822__auto___15374,out_chan,map__15295,map__15295__$1,actx,map__15296,map__15296__$1,period_ms))
;
return ((function (switch__12727__auto__,c__12822__auto___15374,out_chan,map__15295,map__15295__$1,actx,map__15296,map__15296__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__12728__auto__ = null;
var fugue$metronome$state_machine__12728__auto____0 = (function (){
var statearr_15370 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15370[(0)] = fugue$metronome$state_machine__12728__auto__);

(statearr_15370[(1)] = (1));

return statearr_15370;
});
var fugue$metronome$state_machine__12728__auto____1 = (function (state_15345){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_15345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e15371){if((e15371 instanceof Object)){
var ex__12731__auto__ = e15371;
var statearr_15372_15393 = state_15345;
(statearr_15372_15393[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15394 = state_15345;
state_15345 = G__15394;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
fugue$metronome$state_machine__12728__auto__ = function(state_15345){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__12728__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__12728__auto____1.call(this,state_15345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__12728__auto____0;
fugue$metronome$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__12728__auto____1;
return fugue$metronome$state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___15374,out_chan,map__15295,map__15295__$1,actx,map__15296,map__15296__$1,period_ms))
})();
var state__12824__auto__ = (function (){var statearr_15373 = f__12823__auto__.call(null);
(statearr_15373[(6)] = c__12822__auto___15374);

return statearr_15373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___15374,out_chan,map__15295,map__15295__$1,actx,map__15296,map__15296__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1611099815415
