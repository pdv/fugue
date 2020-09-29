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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35089){
return cljs.core.map_QMARK_.call(null,G__35089);
}),(function (G__35089){
return cljs.core.contains_QMARK_.call(null,G__35089,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__35089){
return ((cljs.core.map_QMARK_.call(null,G__35089)) && (cljs.core.contains_QMARK_.call(null,G__35089,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_35090 = actx;
var _STAR_runtime_state_STAR__orig_val__35092 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35093 = oops.state.prepare_state.call(null,target_obj_35090,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35093;

try{var next_obj_35091 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35090,(0),"currentTime",true,true,false))?(target_obj_35090["currentTime"]):null);
return next_obj_35091;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35092;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__35094,p__35095){
var map__35096 = p__35094;
var map__35096__$1 = (((((!((map__35096 == null))))?(((((map__35096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35096):map__35096);
var actx = cljs.core.get.call(null,map__35096__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__35097 = p__35095;
var map__35097__$1 = (((((!((map__35097 == null))))?(((((map__35097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35097):map__35097);
var period_ms = cljs.core.get.call(null,map__35097__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32644__auto___35141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto___35141,out_chan,map__35096,map__35096__$1,actx,map__35097,map__35097__$1,period_ms){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto___35141,out_chan,map__35096,map__35096__$1,actx,map__35097,map__35097__$1,period_ms){
return (function (state_35125){
var state_val_35126 = (state_35125[(1)]);
if((state_val_35126 === (1))){
var inst_35100 = null;
var inst_35101 = (0);
var state_35125__$1 = (function (){var statearr_35127 = state_35125;
(statearr_35127[(7)] = inst_35101);

(statearr_35127[(8)] = inst_35100);

return statearr_35127;
})();
var statearr_35128_35142 = state_35125__$1;
(statearr_35128_35142[(2)] = null);

(statearr_35128_35142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (2))){
var inst_35100 = (state_35125[(8)]);
var inst_35103 = fugue.metronome.now_ms.call(null,actx);
var state_35125__$1 = (function (){var statearr_35129 = state_35125;
(statearr_35129[(9)] = inst_35103);

return statearr_35129;
})();
if(cljs.core.truth_(inst_35100)){
var statearr_35130_35143 = state_35125__$1;
(statearr_35130_35143[(1)] = (4));

} else {
var statearr_35131_35144 = state_35125__$1;
(statearr_35131_35144[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (3))){
var inst_35123 = (state_35125[(2)]);
var state_35125__$1 = state_35125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35125__$1,inst_35123);
} else {
if((state_val_35126 === (4))){
var inst_35100 = (state_35125[(8)]);
var state_35125__$1 = state_35125;
var statearr_35132_35145 = state_35125__$1;
(statearr_35132_35145[(2)] = inst_35100);

(statearr_35132_35145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (5))){
var inst_35103 = (state_35125[(9)]);
var state_35125__$1 = state_35125;
var statearr_35133_35146 = state_35125__$1;
(statearr_35133_35146[(2)] = inst_35103);

(statearr_35133_35146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35126 === (6))){
var inst_35103 = (state_35125[(9)]);
var inst_35101 = (state_35125[(7)]);
var inst_35107 = (state_35125[(2)]);
var inst_35108 = (inst_35107 + period_ms);
var inst_35109 = (inst_35108 - inst_35103);
var inst_35110 = (inst_35109 / (1000));
var inst_35111 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_35112 = cljs.core.mod.call(null,inst_35101,(2));
var inst_35113 = [inst_35112,inst_35110];
var inst_35114 = cljs.core.PersistentHashMap.fromArrays(inst_35111,inst_35113);
var inst_35115 = cljs.core.async.put_BANG_.call(null,out_chan,inst_35114);
var inst_35116 = (0.7 * period_ms);
var inst_35117 = cljs.core.async.timeout.call(null,inst_35116);
var state_35125__$1 = (function (){var statearr_35134 = state_35125;
(statearr_35134[(10)] = inst_35115);

return statearr_35134;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35125__$1,(7),inst_35117);
} else {
if((state_val_35126 === (7))){
var inst_35103 = (state_35125[(9)]);
var inst_35101 = (state_35125[(7)]);
var inst_35119 = (state_35125[(2)]);
var inst_35120 = (inst_35101 + (1));
var inst_35100 = inst_35103;
var inst_35101__$1 = inst_35120;
var state_35125__$1 = (function (){var statearr_35135 = state_35125;
(statearr_35135[(11)] = inst_35119);

(statearr_35135[(7)] = inst_35101__$1);

(statearr_35135[(8)] = inst_35100);

return statearr_35135;
})();
var statearr_35136_35147 = state_35125__$1;
(statearr_35136_35147[(2)] = null);

(statearr_35136_35147[(1)] = (2));


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
});})(c__32644__auto___35141,out_chan,map__35096,map__35096__$1,actx,map__35097,map__35097__$1,period_ms))
;
return ((function (switch__32549__auto__,c__32644__auto___35141,out_chan,map__35096,map__35096__$1,actx,map__35097,map__35097__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__32550__auto__ = null;
var fugue$metronome$state_machine__32550__auto____0 = (function (){
var statearr_35137 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35137[(0)] = fugue$metronome$state_machine__32550__auto__);

(statearr_35137[(1)] = (1));

return statearr_35137;
});
var fugue$metronome$state_machine__32550__auto____1 = (function (state_35125){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_35125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e35138){if((e35138 instanceof Object)){
var ex__32553__auto__ = e35138;
var statearr_35139_35148 = state_35125;
(statearr_35139_35148[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35149 = state_35125;
state_35125 = G__35149;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
fugue$metronome$state_machine__32550__auto__ = function(state_35125){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__32550__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__32550__auto____1.call(this,state_35125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__32550__auto____0;
fugue$metronome$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__32550__auto____1;
return fugue$metronome$state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto___35141,out_chan,map__35096,map__35096__$1,actx,map__35097,map__35097__$1,period_ms))
})();
var state__32646__auto__ = (function (){var statearr_35140 = f__32645__auto__.call(null);
(statearr_35140[(6)] = c__32644__auto___35141);

return statearr_35140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto___35141,out_chan,map__35096,map__35096__$1,actx,map__35097,map__35097__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1601408407156
