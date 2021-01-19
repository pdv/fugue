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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__17386){
return cljs.core.map_QMARK_.call(null,G__17386);
}),(function (G__17386){
return cljs.core.contains_QMARK_.call(null,G__17386,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__17386){
return ((cljs.core.map_QMARK_.call(null,G__17386)) && (cljs.core.contains_QMARK_.call(null,G__17386,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_17387 = actx;
var _STAR_runtime_state_STAR__orig_val__17389 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17390 = oops.state.prepare_state.call(null,target_obj_17387,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17390;

try{var next_obj_17388 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17387,(0),"currentTime",true,true,false))?(target_obj_17387["currentTime"]):null);
return next_obj_17388;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17389;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__17391,p__17392){
var map__17393 = p__17391;
var map__17393__$1 = (((((!((map__17393 == null))))?(((((map__17393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17393):map__17393);
var actx = cljs.core.get.call(null,map__17393__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__17394 = p__17392;
var map__17394__$1 = (((((!((map__17394 == null))))?(((((map__17394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17394):map__17394);
var period_ms = cljs.core.get.call(null,map__17394__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__14920__auto___17472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___17472,out_chan,map__17393,map__17393__$1,actx,map__17394,map__17394__$1,period_ms){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___17472,out_chan,map__17393,map__17393__$1,actx,map__17394,map__17394__$1,period_ms){
return (function (state_17443){
var state_val_17444 = (state_17443[(1)]);
if((state_val_17444 === (7))){
var state_17443__$1 = state_17443;
var statearr_17445_17473 = state_17443__$1;
(statearr_17445_17473[(2)] = true);

(statearr_17445_17473[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (1))){
var inst_17397 = null;
var inst_17398 = (0);
var state_17443__$1 = (function (){var statearr_17446 = state_17443;
(statearr_17446[(7)] = inst_17397);

(statearr_17446[(8)] = inst_17398);

return statearr_17446;
})();
var statearr_17447_17474 = state_17443__$1;
(statearr_17447_17474[(2)] = null);

(statearr_17447_17474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (4))){
var inst_17405 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_17406 = (inst_17405 & (32768));
var inst_17407 = period_ms.cljs$core$IDeref$;
var inst_17408 = (cljs.core.PROTOCOL_SENTINEL === inst_17407);
var inst_17409 = ((inst_17406) || (inst_17408));
var state_17443__$1 = state_17443;
if(cljs.core.truth_(inst_17409)){
var statearr_17448_17475 = state_17443__$1;
(statearr_17448_17475[(1)] = (7));

} else {
var statearr_17449_17476 = state_17443__$1;
(statearr_17449_17476[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (15))){
var inst_17398 = (state_17443[(8)]);
var inst_17400 = (state_17443[(9)]);
var inst_17421 = (state_17443[(10)]);
var inst_17425 = (state_17443[(2)]);
var inst_17426 = (inst_17425 + inst_17421);
var inst_17427 = (inst_17426 - inst_17400);
var inst_17428 = (inst_17427 / (1000));
var inst_17429 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_17430 = cljs.core.mod.call(null,inst_17398,(2));
var inst_17431 = [inst_17430,inst_17428];
var inst_17432 = cljs.core.PersistentHashMap.fromArrays(inst_17429,inst_17431);
var inst_17433 = cljs.core.async.put_BANG_.call(null,out_chan,inst_17432);
var inst_17434 = (0.7 * inst_17421);
var inst_17435 = cljs.core.async.timeout.call(null,inst_17434);
var state_17443__$1 = (function (){var statearr_17450 = state_17443;
(statearr_17450[(11)] = inst_17433);

return statearr_17450;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17443__$1,(16),inst_17435);
} else {
if((state_val_17444 === (13))){
var inst_17397 = (state_17443[(7)]);
var state_17443__$1 = state_17443;
var statearr_17451_17477 = state_17443__$1;
(statearr_17451_17477[(2)] = inst_17397);

(statearr_17451_17477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (6))){
var inst_17416 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
if(cljs.core.truth_(inst_17416)){
var statearr_17452_17478 = state_17443__$1;
(statearr_17452_17478[(1)] = (10));

} else {
var statearr_17453_17479 = state_17443__$1;
(statearr_17453_17479[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (3))){
var inst_17441 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17443__$1,inst_17441);
} else {
if((state_val_17444 === (12))){
var inst_17397 = (state_17443[(7)]);
var inst_17421 = (state_17443[(2)]);
var state_17443__$1 = (function (){var statearr_17454 = state_17443;
(statearr_17454[(10)] = inst_17421);

return statearr_17454;
})();
if(cljs.core.truth_(inst_17397)){
var statearr_17455_17480 = state_17443__$1;
(statearr_17455_17480[(1)] = (13));

} else {
var statearr_17456_17481 = state_17443__$1;
(statearr_17456_17481[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (2))){
var inst_17400 = fugue.metronome.now_ms.call(null,actx);
var inst_17402 = (period_ms == null);
var inst_17403 = cljs.core.not.call(null,inst_17402);
var state_17443__$1 = (function (){var statearr_17457 = state_17443;
(statearr_17457[(9)] = inst_17400);

return statearr_17457;
})();
if(inst_17403){
var statearr_17458_17482 = state_17443__$1;
(statearr_17458_17482[(1)] = (4));

} else {
var statearr_17459_17483 = state_17443__$1;
(statearr_17459_17483[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (11))){
var state_17443__$1 = state_17443;
var statearr_17460_17484 = state_17443__$1;
(statearr_17460_17484[(2)] = period_ms);

(statearr_17460_17484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (9))){
var inst_17413 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
var statearr_17461_17485 = state_17443__$1;
(statearr_17461_17485[(2)] = inst_17413);

(statearr_17461_17485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (5))){
var state_17443__$1 = state_17443;
var statearr_17462_17486 = state_17443__$1;
(statearr_17462_17486[(2)] = false);

(statearr_17462_17486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (14))){
var inst_17400 = (state_17443[(9)]);
var state_17443__$1 = state_17443;
var statearr_17463_17487 = state_17443__$1;
(statearr_17463_17487[(2)] = inst_17400);

(statearr_17463_17487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (16))){
var inst_17398 = (state_17443[(8)]);
var inst_17400 = (state_17443[(9)]);
var inst_17437 = (state_17443[(2)]);
var inst_17438 = (inst_17398 + (1));
var inst_17397 = inst_17400;
var inst_17398__$1 = inst_17438;
var state_17443__$1 = (function (){var statearr_17464 = state_17443;
(statearr_17464[(7)] = inst_17397);

(statearr_17464[(8)] = inst_17398__$1);

(statearr_17464[(12)] = inst_17437);

return statearr_17464;
})();
var statearr_17465_17488 = state_17443__$1;
(statearr_17465_17488[(2)] = null);

(statearr_17465_17488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (10))){
var inst_17418 = cljs.core.deref.call(null,period_ms);
var state_17443__$1 = state_17443;
var statearr_17466_17489 = state_17443__$1;
(statearr_17466_17489[(2)] = inst_17418);

(statearr_17466_17489[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (8))){
var state_17443__$1 = state_17443;
var statearr_17467_17490 = state_17443__$1;
(statearr_17467_17490[(2)] = false);

(statearr_17467_17490[(1)] = (9));


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
});})(c__14920__auto___17472,out_chan,map__17393,map__17393__$1,actx,map__17394,map__17394__$1,period_ms))
;
return ((function (switch__14825__auto__,c__14920__auto___17472,out_chan,map__17393,map__17393__$1,actx,map__17394,map__17394__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__14826__auto__ = null;
var fugue$metronome$state_machine__14826__auto____0 = (function (){
var statearr_17468 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17468[(0)] = fugue$metronome$state_machine__14826__auto__);

(statearr_17468[(1)] = (1));

return statearr_17468;
});
var fugue$metronome$state_machine__14826__auto____1 = (function (state_17443){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_17443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e17469){if((e17469 instanceof Object)){
var ex__14829__auto__ = e17469;
var statearr_17470_17491 = state_17443;
(statearr_17470_17491[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17492 = state_17443;
state_17443 = G__17492;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
fugue$metronome$state_machine__14826__auto__ = function(state_17443){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__14826__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__14826__auto____1.call(this,state_17443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__14826__auto____0;
fugue$metronome$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__14826__auto____1;
return fugue$metronome$state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___17472,out_chan,map__17393,map__17393__$1,actx,map__17394,map__17394__$1,period_ms))
})();
var state__14922__auto__ = (function (){var statearr_17471 = f__14921__auto__.call(null);
(statearr_17471[(6)] = c__14920__auto___17472);

return statearr_17471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___17472,out_chan,map__17393,map__17393__$1,actx,map__17394,map__17394__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1611075308122
