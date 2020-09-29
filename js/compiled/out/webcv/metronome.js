// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.metronome');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('oops.core');
goog.require('webcv.synthdef');
goog.require('webcv.audio');
goog.require('webcv.chan');
webcv.metronome.bpm = cljs.core.partial.call(null,cljs.core._SLASH_,(60000));
cljs.core._add_method.call(null,webcv.chan.chan_node_spec,new cljs.core.Keyword("webcv.metronome","metronome","webcv.metronome/metronome",1387895218),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36676){
return cljs.core.map_QMARK_.call(null,G__36676);
}),(function (G__36676){
return cljs.core.contains_QMARK_.call(null,G__36676,new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315));
})], null),(function (G__36676){
return ((cljs.core.map_QMARK_.call(null,G__36676)) && (cljs.core.contains_QMARK_.call(null,G__36676,new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315)))], null),null]));
}));
webcv.metronome.now_ms = (function webcv$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_36677 = actx;
var _STAR_runtime_state_STAR__orig_val__36679 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36680 = oops.state.prepare_state.call(null,target_obj_36677,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36680;

try{var next_obj_36678 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_36677,(0),"currentTime",true,true,false))?(target_obj_36677["currentTime"]):null);
return next_obj_36678;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36679;
}})());
});
cljs.core._add_method.call(null,webcv.chan.make_chan_node,new cljs.core.Keyword("webcv.metronome","metronome","webcv.metronome/metronome",1387895218),(function (p__36681,p__36682){
var map__36683 = p__36681;
var map__36683__$1 = (((((!((map__36683 == null))))?(((((map__36683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36683):map__36683);
var actx = cljs.core.get.call(null,map__36683__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
var map__36684 = p__36682;
var map__36684__$1 = (((((!((map__36684 == null))))?(((((map__36684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36684):map__36684);
var period_ms = cljs.core.get.call(null,map__36684__$1,new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32649__auto___36728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___36728,out_chan,map__36683,map__36683__$1,actx,map__36684,map__36684__$1,period_ms){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___36728,out_chan,map__36683,map__36683__$1,actx,map__36684,map__36684__$1,period_ms){
return (function (state_36712){
var state_val_36713 = (state_36712[(1)]);
if((state_val_36713 === (1))){
var inst_36687 = null;
var inst_36688 = (0);
var state_36712__$1 = (function (){var statearr_36714 = state_36712;
(statearr_36714[(7)] = inst_36687);

(statearr_36714[(8)] = inst_36688);

return statearr_36714;
})();
var statearr_36715_36729 = state_36712__$1;
(statearr_36715_36729[(2)] = null);

(statearr_36715_36729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (2))){
var inst_36687 = (state_36712[(7)]);
var inst_36690 = webcv.metronome.now_ms.call(null,actx);
var state_36712__$1 = (function (){var statearr_36716 = state_36712;
(statearr_36716[(9)] = inst_36690);

return statearr_36716;
})();
if(cljs.core.truth_(inst_36687)){
var statearr_36717_36730 = state_36712__$1;
(statearr_36717_36730[(1)] = (4));

} else {
var statearr_36718_36731 = state_36712__$1;
(statearr_36718_36731[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (3))){
var inst_36710 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36712__$1,inst_36710);
} else {
if((state_val_36713 === (4))){
var inst_36687 = (state_36712[(7)]);
var state_36712__$1 = state_36712;
var statearr_36719_36732 = state_36712__$1;
(statearr_36719_36732[(2)] = inst_36687);

(statearr_36719_36732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (5))){
var inst_36690 = (state_36712[(9)]);
var state_36712__$1 = state_36712;
var statearr_36720_36733 = state_36712__$1;
(statearr_36720_36733[(2)] = inst_36690);

(statearr_36720_36733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (6))){
var inst_36688 = (state_36712[(8)]);
var inst_36690 = (state_36712[(9)]);
var inst_36694 = (state_36712[(2)]);
var inst_36695 = (inst_36694 + period_ms);
var inst_36696 = (inst_36695 - inst_36690);
var inst_36697 = (inst_36696 / (1000));
var inst_36698 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_36699 = cljs.core.mod.call(null,inst_36688,(2));
var inst_36700 = [inst_36699,inst_36697];
var inst_36701 = cljs.core.PersistentHashMap.fromArrays(inst_36698,inst_36700);
var inst_36702 = cljs.core.async.put_BANG_.call(null,out_chan,inst_36701);
var inst_36703 = (0.7 * period_ms);
var inst_36704 = cljs.core.async.timeout.call(null,inst_36703);
var state_36712__$1 = (function (){var statearr_36721 = state_36712;
(statearr_36721[(10)] = inst_36702);

return statearr_36721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36712__$1,(7),inst_36704);
} else {
if((state_val_36713 === (7))){
var inst_36688 = (state_36712[(8)]);
var inst_36690 = (state_36712[(9)]);
var inst_36706 = (state_36712[(2)]);
var inst_36707 = (inst_36688 + (1));
var inst_36687 = inst_36690;
var inst_36688__$1 = inst_36707;
var state_36712__$1 = (function (){var statearr_36722 = state_36712;
(statearr_36722[(7)] = inst_36687);

(statearr_36722[(8)] = inst_36688__$1);

(statearr_36722[(11)] = inst_36706);

return statearr_36722;
})();
var statearr_36723_36734 = state_36712__$1;
(statearr_36723_36734[(2)] = null);

(statearr_36723_36734[(1)] = (2));


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
});})(c__32649__auto___36728,out_chan,map__36683,map__36683__$1,actx,map__36684,map__36684__$1,period_ms))
;
return ((function (switch__32554__auto__,c__32649__auto___36728,out_chan,map__36683,map__36683__$1,actx,map__36684,map__36684__$1,period_ms){
return (function() {
var webcv$metronome$state_machine__32555__auto__ = null;
var webcv$metronome$state_machine__32555__auto____0 = (function (){
var statearr_36724 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36724[(0)] = webcv$metronome$state_machine__32555__auto__);

(statearr_36724[(1)] = (1));

return statearr_36724;
});
var webcv$metronome$state_machine__32555__auto____1 = (function (state_36712){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_36712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e36725){if((e36725 instanceof Object)){
var ex__32558__auto__ = e36725;
var statearr_36726_36735 = state_36712;
(statearr_36726_36735[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36736 = state_36712;
state_36712 = G__36736;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
webcv$metronome$state_machine__32555__auto__ = function(state_36712){
switch(arguments.length){
case 0:
return webcv$metronome$state_machine__32555__auto____0.call(this);
case 1:
return webcv$metronome$state_machine__32555__auto____1.call(this,state_36712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$metronome$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$metronome$state_machine__32555__auto____0;
webcv$metronome$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$metronome$state_machine__32555__auto____1;
return webcv$metronome$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___36728,out_chan,map__36683,map__36683__$1,actx,map__36684,map__36684__$1,period_ms))
})();
var state__32651__auto__ = (function (){var statearr_36727 = f__32650__auto__.call(null);
(statearr_36727[(6)] = c__32649__auto___36728);

return statearr_36727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___36728,out_chan,map__36683,map__36683__$1,actx,map__36684,map__36684__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("webcv.chan","mult-out","webcv.chan/mult-out",1070529409),cljs.core.async.mult.call(null,out_chan)], null);
}));
webcv.metronome.metro = (function webcv$metronome$metro(period_ms){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.chan","chan-node-type","webcv.chan/chan-node-type",-1398165608),new cljs.core.Keyword("webcv.metronome","metronome","webcv.metronome/metronome",1387895218),new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1601347617227
