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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36678){
return cljs.core.map_QMARK_.call(null,G__36678);
}),(function (G__36678){
return cljs.core.contains_QMARK_.call(null,G__36678,new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315));
})], null),(function (G__36678){
return ((cljs.core.map_QMARK_.call(null,G__36678)) && (cljs.core.contains_QMARK_.call(null,G__36678,new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315)))], null),null]));
}));
webcv.metronome.now_ms = (function webcv$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_36679 = actx;
var _STAR_runtime_state_STAR__orig_val__36681 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36682 = oops.state.prepare_state.call(null,target_obj_36679,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36682;

try{var next_obj_36680 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_36679,(0),"currentTime",true,true,false))?(target_obj_36679["currentTime"]):null);
return next_obj_36680;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36681;
}})());
});
cljs.core._add_method.call(null,webcv.chan.make_chan_node,new cljs.core.Keyword("webcv.metronome","metronome","webcv.metronome/metronome",1387895218),(function (p__36683,p__36684){
var map__36685 = p__36683;
var map__36685__$1 = (((((!((map__36685 == null))))?(((((map__36685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36685):map__36685);
var actx = cljs.core.get.call(null,map__36685__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
var map__36686 = p__36684;
var map__36686__$1 = (((((!((map__36686 == null))))?(((((map__36686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36686):map__36686);
var period_ms = cljs.core.get.call(null,map__36686__$1,new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32649__auto___36730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___36730,out_chan,map__36685,map__36685__$1,actx,map__36686,map__36686__$1,period_ms){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___36730,out_chan,map__36685,map__36685__$1,actx,map__36686,map__36686__$1,period_ms){
return (function (state_36714){
var state_val_36715 = (state_36714[(1)]);
if((state_val_36715 === (1))){
var inst_36689 = null;
var inst_36690 = (0);
var state_36714__$1 = (function (){var statearr_36716 = state_36714;
(statearr_36716[(7)] = inst_36690);

(statearr_36716[(8)] = inst_36689);

return statearr_36716;
})();
var statearr_36717_36731 = state_36714__$1;
(statearr_36717_36731[(2)] = null);

(statearr_36717_36731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (2))){
var inst_36689 = (state_36714[(8)]);
var inst_36692 = webcv.metronome.now_ms.call(null,actx);
var state_36714__$1 = (function (){var statearr_36718 = state_36714;
(statearr_36718[(9)] = inst_36692);

return statearr_36718;
})();
if(cljs.core.truth_(inst_36689)){
var statearr_36719_36732 = state_36714__$1;
(statearr_36719_36732[(1)] = (4));

} else {
var statearr_36720_36733 = state_36714__$1;
(statearr_36720_36733[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (3))){
var inst_36712 = (state_36714[(2)]);
var state_36714__$1 = state_36714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36714__$1,inst_36712);
} else {
if((state_val_36715 === (4))){
var inst_36689 = (state_36714[(8)]);
var state_36714__$1 = state_36714;
var statearr_36721_36734 = state_36714__$1;
(statearr_36721_36734[(2)] = inst_36689);

(statearr_36721_36734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (5))){
var inst_36692 = (state_36714[(9)]);
var state_36714__$1 = state_36714;
var statearr_36722_36735 = state_36714__$1;
(statearr_36722_36735[(2)] = inst_36692);

(statearr_36722_36735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36715 === (6))){
var inst_36692 = (state_36714[(9)]);
var inst_36690 = (state_36714[(7)]);
var inst_36696 = (state_36714[(2)]);
var inst_36697 = (inst_36696 + period_ms);
var inst_36698 = (inst_36697 - inst_36692);
var inst_36699 = (inst_36698 / (1000));
var inst_36700 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_36701 = cljs.core.mod.call(null,inst_36690,(2));
var inst_36702 = [inst_36701,inst_36699];
var inst_36703 = cljs.core.PersistentHashMap.fromArrays(inst_36700,inst_36702);
var inst_36704 = cljs.core.async.put_BANG_.call(null,out_chan,inst_36703);
var inst_36705 = (0.7 * period_ms);
var inst_36706 = cljs.core.async.timeout.call(null,inst_36705);
var state_36714__$1 = (function (){var statearr_36723 = state_36714;
(statearr_36723[(10)] = inst_36704);

return statearr_36723;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36714__$1,(7),inst_36706);
} else {
if((state_val_36715 === (7))){
var inst_36692 = (state_36714[(9)]);
var inst_36690 = (state_36714[(7)]);
var inst_36708 = (state_36714[(2)]);
var inst_36709 = (inst_36690 + (1));
var inst_36689 = inst_36692;
var inst_36690__$1 = inst_36709;
var state_36714__$1 = (function (){var statearr_36724 = state_36714;
(statearr_36724[(11)] = inst_36708);

(statearr_36724[(7)] = inst_36690__$1);

(statearr_36724[(8)] = inst_36689);

return statearr_36724;
})();
var statearr_36725_36736 = state_36714__$1;
(statearr_36725_36736[(2)] = null);

(statearr_36725_36736[(1)] = (2));


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
});})(c__32649__auto___36730,out_chan,map__36685,map__36685__$1,actx,map__36686,map__36686__$1,period_ms))
;
return ((function (switch__32554__auto__,c__32649__auto___36730,out_chan,map__36685,map__36685__$1,actx,map__36686,map__36686__$1,period_ms){
return (function() {
var webcv$metronome$state_machine__32555__auto__ = null;
var webcv$metronome$state_machine__32555__auto____0 = (function (){
var statearr_36726 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36726[(0)] = webcv$metronome$state_machine__32555__auto__);

(statearr_36726[(1)] = (1));

return statearr_36726;
});
var webcv$metronome$state_machine__32555__auto____1 = (function (state_36714){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_36714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e36727){if((e36727 instanceof Object)){
var ex__32558__auto__ = e36727;
var statearr_36728_36737 = state_36714;
(statearr_36728_36737[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36738 = state_36714;
state_36714 = G__36738;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
webcv$metronome$state_machine__32555__auto__ = function(state_36714){
switch(arguments.length){
case 0:
return webcv$metronome$state_machine__32555__auto____0.call(this);
case 1:
return webcv$metronome$state_machine__32555__auto____1.call(this,state_36714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$metronome$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$metronome$state_machine__32555__auto____0;
webcv$metronome$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$metronome$state_machine__32555__auto____1;
return webcv$metronome$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___36730,out_chan,map__36685,map__36685__$1,actx,map__36686,map__36686__$1,period_ms))
})();
var state__32651__auto__ = (function (){var statearr_36729 = f__32650__auto__.call(null);
(statearr_36729[(6)] = c__32649__auto___36730);

return statearr_36729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___36730,out_chan,map__36685,map__36685__$1,actx,map__36686,map__36686__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("webcv.chan","mult-out","webcv.chan/mult-out",1070529409),cljs.core.async.mult.call(null,out_chan)], null);
}));
webcv.metronome.metro = (function webcv$metronome$metro(period_ms){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.chan","chan-node-type","webcv.chan/chan-node-type",-1398165608),new cljs.core.Keyword("webcv.metronome","metronome","webcv.metronome/metronome",1387895218),new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1601344973769
