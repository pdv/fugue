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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36723){
return cljs.core.map_QMARK_.call(null,G__36723);
}),(function (G__36723){
return cljs.core.contains_QMARK_.call(null,G__36723,new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315));
})], null),(function (G__36723){
return ((cljs.core.map_QMARK_.call(null,G__36723)) && (cljs.core.contains_QMARK_.call(null,G__36723,new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315)))], null),null]));
}));
webcv.metronome.now_ms = (function webcv$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_36724 = actx;
var _STAR_runtime_state_STAR__orig_val__36726 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36727 = oops.state.prepare_state.call(null,target_obj_36724,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36727;

try{var next_obj_36725 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_36724,(0),"currentTime",true,true,false))?(target_obj_36724["currentTime"]):null);
return next_obj_36725;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36726;
}})());
});
cljs.core._add_method.call(null,webcv.chan.make_chan_node,new cljs.core.Keyword("webcv.metronome","metronome","webcv.metronome/metronome",1387895218),(function (p__36728,p__36729){
var map__36730 = p__36728;
var map__36730__$1 = (((((!((map__36730 == null))))?(((((map__36730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36730):map__36730);
var actx = cljs.core.get.call(null,map__36730__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
var map__36731 = p__36729;
var map__36731__$1 = (((((!((map__36731 == null))))?(((((map__36731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36731):map__36731);
var period_ms = cljs.core.get.call(null,map__36731__$1,new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32649__auto___36775 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___36775,out_chan,map__36730,map__36730__$1,actx,map__36731,map__36731__$1,period_ms){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___36775,out_chan,map__36730,map__36730__$1,actx,map__36731,map__36731__$1,period_ms){
return (function (state_36759){
var state_val_36760 = (state_36759[(1)]);
if((state_val_36760 === (1))){
var inst_36734 = null;
var inst_36735 = (0);
var state_36759__$1 = (function (){var statearr_36761 = state_36759;
(statearr_36761[(7)] = inst_36734);

(statearr_36761[(8)] = inst_36735);

return statearr_36761;
})();
var statearr_36762_36776 = state_36759__$1;
(statearr_36762_36776[(2)] = null);

(statearr_36762_36776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (2))){
var inst_36734 = (state_36759[(7)]);
var inst_36737 = webcv.metronome.now_ms.call(null,actx);
var state_36759__$1 = (function (){var statearr_36763 = state_36759;
(statearr_36763[(9)] = inst_36737);

return statearr_36763;
})();
if(cljs.core.truth_(inst_36734)){
var statearr_36764_36777 = state_36759__$1;
(statearr_36764_36777[(1)] = (4));

} else {
var statearr_36765_36778 = state_36759__$1;
(statearr_36765_36778[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (3))){
var inst_36757 = (state_36759[(2)]);
var state_36759__$1 = state_36759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36759__$1,inst_36757);
} else {
if((state_val_36760 === (4))){
var inst_36734 = (state_36759[(7)]);
var state_36759__$1 = state_36759;
var statearr_36766_36779 = state_36759__$1;
(statearr_36766_36779[(2)] = inst_36734);

(statearr_36766_36779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (5))){
var inst_36737 = (state_36759[(9)]);
var state_36759__$1 = state_36759;
var statearr_36767_36780 = state_36759__$1;
(statearr_36767_36780[(2)] = inst_36737);

(statearr_36767_36780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36760 === (6))){
var inst_36737 = (state_36759[(9)]);
var inst_36735 = (state_36759[(8)]);
var inst_36741 = (state_36759[(2)]);
var inst_36742 = (inst_36741 + period_ms);
var inst_36743 = (inst_36742 - inst_36737);
var inst_36744 = (inst_36743 / (1000));
var inst_36745 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_36746 = cljs.core.mod.call(null,inst_36735,(2));
var inst_36747 = [inst_36746,inst_36744];
var inst_36748 = cljs.core.PersistentHashMap.fromArrays(inst_36745,inst_36747);
var inst_36749 = cljs.core.async.put_BANG_.call(null,out_chan,inst_36748);
var inst_36750 = (0.7 * period_ms);
var inst_36751 = cljs.core.async.timeout.call(null,inst_36750);
var state_36759__$1 = (function (){var statearr_36768 = state_36759;
(statearr_36768[(10)] = inst_36749);

return statearr_36768;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36759__$1,(7),inst_36751);
} else {
if((state_val_36760 === (7))){
var inst_36737 = (state_36759[(9)]);
var inst_36735 = (state_36759[(8)]);
var inst_36753 = (state_36759[(2)]);
var inst_36754 = (inst_36735 + (1));
var inst_36734 = inst_36737;
var inst_36735__$1 = inst_36754;
var state_36759__$1 = (function (){var statearr_36769 = state_36759;
(statearr_36769[(11)] = inst_36753);

(statearr_36769[(7)] = inst_36734);

(statearr_36769[(8)] = inst_36735__$1);

return statearr_36769;
})();
var statearr_36770_36781 = state_36759__$1;
(statearr_36770_36781[(2)] = null);

(statearr_36770_36781[(1)] = (2));


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
});})(c__32649__auto___36775,out_chan,map__36730,map__36730__$1,actx,map__36731,map__36731__$1,period_ms))
;
return ((function (switch__32554__auto__,c__32649__auto___36775,out_chan,map__36730,map__36730__$1,actx,map__36731,map__36731__$1,period_ms){
return (function() {
var webcv$metronome$state_machine__32555__auto__ = null;
var webcv$metronome$state_machine__32555__auto____0 = (function (){
var statearr_36771 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36771[(0)] = webcv$metronome$state_machine__32555__auto__);

(statearr_36771[(1)] = (1));

return statearr_36771;
});
var webcv$metronome$state_machine__32555__auto____1 = (function (state_36759){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_36759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e36772){if((e36772 instanceof Object)){
var ex__32558__auto__ = e36772;
var statearr_36773_36782 = state_36759;
(statearr_36773_36782[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36783 = state_36759;
state_36759 = G__36783;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
webcv$metronome$state_machine__32555__auto__ = function(state_36759){
switch(arguments.length){
case 0:
return webcv$metronome$state_machine__32555__auto____0.call(this);
case 1:
return webcv$metronome$state_machine__32555__auto____1.call(this,state_36759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$metronome$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$metronome$state_machine__32555__auto____0;
webcv$metronome$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$metronome$state_machine__32555__auto____1;
return webcv$metronome$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___36775,out_chan,map__36730,map__36730__$1,actx,map__36731,map__36731__$1,period_ms))
})();
var state__32651__auto__ = (function (){var statearr_36774 = f__32650__auto__.call(null);
(statearr_36774[(6)] = c__32649__auto___36775);

return statearr_36774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___36775,out_chan,map__36730,map__36730__$1,actx,map__36731,map__36731__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("webcv.chan","mult-out","webcv.chan/mult-out",1070529409),cljs.core.async.mult.call(null,out_chan)], null);
}));
webcv.metronome.metro = (function webcv$metronome$metro(period_ms){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.chan","chan-node-type","webcv.chan/chan-node-type",-1398165608),new cljs.core.Keyword("webcv.metronome","metronome","webcv.metronome/metronome",1387895218),new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1601399207919
