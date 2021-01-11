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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35301){
return cljs.core.map_QMARK_.call(null,G__35301);
}),(function (G__35301){
return cljs.core.contains_QMARK_.call(null,G__35301,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__35301){
return ((cljs.core.map_QMARK_.call(null,G__35301)) && (cljs.core.contains_QMARK_.call(null,G__35301,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_35302 = actx;
var _STAR_runtime_state_STAR__orig_val__35304 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35305 = oops.state.prepare_state.call(null,target_obj_35302,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35305;

try{var next_obj_35303 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35302,(0),"currentTime",true,true,false))?(target_obj_35302["currentTime"]):null);
return next_obj_35303;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35304;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__35306,p__35307){
var map__35308 = p__35306;
var map__35308__$1 = (((((!((map__35308 == null))))?(((((map__35308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35308):map__35308);
var actx = cljs.core.get.call(null,map__35308__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__35309 = p__35307;
var map__35309__$1 = (((((!((map__35309 == null))))?(((((map__35309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35309):map__35309);
var period_ms = cljs.core.get.call(null,map__35309__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32691__auto___35387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___35387,out_chan,map__35308,map__35308__$1,actx,map__35309,map__35309__$1,period_ms){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___35387,out_chan,map__35308,map__35308__$1,actx,map__35309,map__35309__$1,period_ms){
return (function (state_35358){
var state_val_35359 = (state_35358[(1)]);
if((state_val_35359 === (7))){
var state_35358__$1 = state_35358;
var statearr_35360_35388 = state_35358__$1;
(statearr_35360_35388[(2)] = true);

(statearr_35360_35388[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (1))){
var inst_35312 = null;
var inst_35313 = (0);
var state_35358__$1 = (function (){var statearr_35361 = state_35358;
(statearr_35361[(7)] = inst_35313);

(statearr_35361[(8)] = inst_35312);

return statearr_35361;
})();
var statearr_35362_35389 = state_35358__$1;
(statearr_35362_35389[(2)] = null);

(statearr_35362_35389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (4))){
var inst_35320 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_35321 = (inst_35320 & (32768));
var inst_35322 = period_ms.cljs$core$IDeref$;
var inst_35323 = (cljs.core.PROTOCOL_SENTINEL === inst_35322);
var inst_35324 = ((inst_35321) || (inst_35323));
var state_35358__$1 = state_35358;
if(cljs.core.truth_(inst_35324)){
var statearr_35363_35390 = state_35358__$1;
(statearr_35363_35390[(1)] = (7));

} else {
var statearr_35364_35391 = state_35358__$1;
(statearr_35364_35391[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (15))){
var inst_35313 = (state_35358[(7)]);
var inst_35336 = (state_35358[(9)]);
var inst_35315 = (state_35358[(10)]);
var inst_35340 = (state_35358[(2)]);
var inst_35341 = (inst_35340 + inst_35336);
var inst_35342 = (inst_35341 - inst_35315);
var inst_35343 = (inst_35342 / (1000));
var inst_35344 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_35345 = cljs.core.mod.call(null,inst_35313,(2));
var inst_35346 = [inst_35345,inst_35343];
var inst_35347 = cljs.core.PersistentHashMap.fromArrays(inst_35344,inst_35346);
var inst_35348 = cljs.core.async.put_BANG_.call(null,out_chan,inst_35347);
var inst_35349 = (0.7 * inst_35336);
var inst_35350 = cljs.core.async.timeout.call(null,inst_35349);
var state_35358__$1 = (function (){var statearr_35365 = state_35358;
(statearr_35365[(11)] = inst_35348);

return statearr_35365;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35358__$1,(16),inst_35350);
} else {
if((state_val_35359 === (13))){
var inst_35312 = (state_35358[(8)]);
var state_35358__$1 = state_35358;
var statearr_35366_35392 = state_35358__$1;
(statearr_35366_35392[(2)] = inst_35312);

(statearr_35366_35392[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (6))){
var inst_35331 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
if(cljs.core.truth_(inst_35331)){
var statearr_35367_35393 = state_35358__$1;
(statearr_35367_35393[(1)] = (10));

} else {
var statearr_35368_35394 = state_35358__$1;
(statearr_35368_35394[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (3))){
var inst_35356 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35358__$1,inst_35356);
} else {
if((state_val_35359 === (12))){
var inst_35312 = (state_35358[(8)]);
var inst_35336 = (state_35358[(2)]);
var state_35358__$1 = (function (){var statearr_35369 = state_35358;
(statearr_35369[(9)] = inst_35336);

return statearr_35369;
})();
if(cljs.core.truth_(inst_35312)){
var statearr_35370_35395 = state_35358__$1;
(statearr_35370_35395[(1)] = (13));

} else {
var statearr_35371_35396 = state_35358__$1;
(statearr_35371_35396[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (2))){
var inst_35315 = fugue.metronome.now_ms.call(null,actx);
var inst_35317 = (period_ms == null);
var inst_35318 = cljs.core.not.call(null,inst_35317);
var state_35358__$1 = (function (){var statearr_35372 = state_35358;
(statearr_35372[(10)] = inst_35315);

return statearr_35372;
})();
if(inst_35318){
var statearr_35373_35397 = state_35358__$1;
(statearr_35373_35397[(1)] = (4));

} else {
var statearr_35374_35398 = state_35358__$1;
(statearr_35374_35398[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (11))){
var state_35358__$1 = state_35358;
var statearr_35375_35399 = state_35358__$1;
(statearr_35375_35399[(2)] = period_ms);

(statearr_35375_35399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (9))){
var inst_35328 = (state_35358[(2)]);
var state_35358__$1 = state_35358;
var statearr_35376_35400 = state_35358__$1;
(statearr_35376_35400[(2)] = inst_35328);

(statearr_35376_35400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (5))){
var state_35358__$1 = state_35358;
var statearr_35377_35401 = state_35358__$1;
(statearr_35377_35401[(2)] = false);

(statearr_35377_35401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (14))){
var inst_35315 = (state_35358[(10)]);
var state_35358__$1 = state_35358;
var statearr_35378_35402 = state_35358__$1;
(statearr_35378_35402[(2)] = inst_35315);

(statearr_35378_35402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (16))){
var inst_35313 = (state_35358[(7)]);
var inst_35315 = (state_35358[(10)]);
var inst_35352 = (state_35358[(2)]);
var inst_35353 = (inst_35313 + (1));
var inst_35312 = inst_35315;
var inst_35313__$1 = inst_35353;
var state_35358__$1 = (function (){var statearr_35379 = state_35358;
(statearr_35379[(7)] = inst_35313__$1);

(statearr_35379[(12)] = inst_35352);

(statearr_35379[(8)] = inst_35312);

return statearr_35379;
})();
var statearr_35380_35403 = state_35358__$1;
(statearr_35380_35403[(2)] = null);

(statearr_35380_35403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (10))){
var inst_35333 = cljs.core.deref.call(null,period_ms);
var state_35358__$1 = state_35358;
var statearr_35381_35404 = state_35358__$1;
(statearr_35381_35404[(2)] = inst_35333);

(statearr_35381_35404[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35359 === (8))){
var state_35358__$1 = state_35358;
var statearr_35382_35405 = state_35358__$1;
(statearr_35382_35405[(2)] = false);

(statearr_35382_35405[(1)] = (9));


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
});})(c__32691__auto___35387,out_chan,map__35308,map__35308__$1,actx,map__35309,map__35309__$1,period_ms))
;
return ((function (switch__32596__auto__,c__32691__auto___35387,out_chan,map__35308,map__35308__$1,actx,map__35309,map__35309__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__32597__auto__ = null;
var fugue$metronome$state_machine__32597__auto____0 = (function (){
var statearr_35383 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35383[(0)] = fugue$metronome$state_machine__32597__auto__);

(statearr_35383[(1)] = (1));

return statearr_35383;
});
var fugue$metronome$state_machine__32597__auto____1 = (function (state_35358){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_35358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e35384){if((e35384 instanceof Object)){
var ex__32600__auto__ = e35384;
var statearr_35385_35406 = state_35358;
(statearr_35385_35406[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35407 = state_35358;
state_35358 = G__35407;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
fugue$metronome$state_machine__32597__auto__ = function(state_35358){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__32597__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__32597__auto____1.call(this,state_35358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__32597__auto____0;
fugue$metronome$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__32597__auto____1;
return fugue$metronome$state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___35387,out_chan,map__35308,map__35308__$1,actx,map__35309,map__35309__$1,period_ms))
})();
var state__32693__auto__ = (function (){var statearr_35386 = f__32692__auto__.call(null);
(statearr_35386[(6)] = c__32691__auto___35387);

return statearr_35386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___35387,out_chan,map__35308,map__35308__$1,actx,map__35309,map__35309__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1610330676232
