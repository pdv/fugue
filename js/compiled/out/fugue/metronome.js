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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35131){
return cljs.core.map_QMARK_.call(null,G__35131);
}),(function (G__35131){
return cljs.core.contains_QMARK_.call(null,G__35131,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__35131){
return ((cljs.core.map_QMARK_.call(null,G__35131)) && (cljs.core.contains_QMARK_.call(null,G__35131,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_35132 = actx;
var _STAR_runtime_state_STAR__orig_val__35134 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35135 = oops.state.prepare_state.call(null,target_obj_35132,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35135;

try{var next_obj_35133 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35132,(0),"currentTime",true,true,false))?(target_obj_35132["currentTime"]):null);
return next_obj_35133;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35134;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__35136,p__35137){
var map__35138 = p__35136;
var map__35138__$1 = (((((!((map__35138 == null))))?(((((map__35138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35138):map__35138);
var actx = cljs.core.get.call(null,map__35138__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__35139 = p__35137;
var map__35139__$1 = (((((!((map__35139 == null))))?(((((map__35139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35139):map__35139);
var period_ms = cljs.core.get.call(null,map__35139__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32685__auto___35217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___35217,out_chan,map__35138,map__35138__$1,actx,map__35139,map__35139__$1,period_ms){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___35217,out_chan,map__35138,map__35138__$1,actx,map__35139,map__35139__$1,period_ms){
return (function (state_35188){
var state_val_35189 = (state_35188[(1)]);
if((state_val_35189 === (7))){
var state_35188__$1 = state_35188;
var statearr_35190_35218 = state_35188__$1;
(statearr_35190_35218[(2)] = true);

(statearr_35190_35218[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (1))){
var inst_35142 = null;
var inst_35143 = (0);
var state_35188__$1 = (function (){var statearr_35191 = state_35188;
(statearr_35191[(7)] = inst_35142);

(statearr_35191[(8)] = inst_35143);

return statearr_35191;
})();
var statearr_35192_35219 = state_35188__$1;
(statearr_35192_35219[(2)] = null);

(statearr_35192_35219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (4))){
var inst_35150 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_35151 = (inst_35150 & (32768));
var inst_35152 = period_ms.cljs$core$IDeref$;
var inst_35153 = (cljs.core.PROTOCOL_SENTINEL === inst_35152);
var inst_35154 = ((inst_35151) || (inst_35153));
var state_35188__$1 = state_35188;
if(cljs.core.truth_(inst_35154)){
var statearr_35193_35220 = state_35188__$1;
(statearr_35193_35220[(1)] = (7));

} else {
var statearr_35194_35221 = state_35188__$1;
(statearr_35194_35221[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (15))){
var inst_35145 = (state_35188[(9)]);
var inst_35166 = (state_35188[(10)]);
var inst_35143 = (state_35188[(8)]);
var inst_35170 = (state_35188[(2)]);
var inst_35171 = (inst_35170 + inst_35166);
var inst_35172 = (inst_35171 - inst_35145);
var inst_35173 = (inst_35172 / (1000));
var inst_35174 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_35175 = cljs.core.mod.call(null,inst_35143,(2));
var inst_35176 = [inst_35175,inst_35173];
var inst_35177 = cljs.core.PersistentHashMap.fromArrays(inst_35174,inst_35176);
var inst_35178 = cljs.core.async.put_BANG_.call(null,out_chan,inst_35177);
var inst_35179 = (0.7 * inst_35166);
var inst_35180 = cljs.core.async.timeout.call(null,inst_35179);
var state_35188__$1 = (function (){var statearr_35195 = state_35188;
(statearr_35195[(11)] = inst_35178);

return statearr_35195;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35188__$1,(16),inst_35180);
} else {
if((state_val_35189 === (13))){
var inst_35142 = (state_35188[(7)]);
var state_35188__$1 = state_35188;
var statearr_35196_35222 = state_35188__$1;
(statearr_35196_35222[(2)] = inst_35142);

(statearr_35196_35222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (6))){
var inst_35161 = (state_35188[(2)]);
var state_35188__$1 = state_35188;
if(cljs.core.truth_(inst_35161)){
var statearr_35197_35223 = state_35188__$1;
(statearr_35197_35223[(1)] = (10));

} else {
var statearr_35198_35224 = state_35188__$1;
(statearr_35198_35224[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (3))){
var inst_35186 = (state_35188[(2)]);
var state_35188__$1 = state_35188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35188__$1,inst_35186);
} else {
if((state_val_35189 === (12))){
var inst_35142 = (state_35188[(7)]);
var inst_35166 = (state_35188[(2)]);
var state_35188__$1 = (function (){var statearr_35199 = state_35188;
(statearr_35199[(10)] = inst_35166);

return statearr_35199;
})();
if(cljs.core.truth_(inst_35142)){
var statearr_35200_35225 = state_35188__$1;
(statearr_35200_35225[(1)] = (13));

} else {
var statearr_35201_35226 = state_35188__$1;
(statearr_35201_35226[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (2))){
var inst_35145 = fugue.metronome.now_ms.call(null,actx);
var inst_35147 = (period_ms == null);
var inst_35148 = cljs.core.not.call(null,inst_35147);
var state_35188__$1 = (function (){var statearr_35202 = state_35188;
(statearr_35202[(9)] = inst_35145);

return statearr_35202;
})();
if(inst_35148){
var statearr_35203_35227 = state_35188__$1;
(statearr_35203_35227[(1)] = (4));

} else {
var statearr_35204_35228 = state_35188__$1;
(statearr_35204_35228[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (11))){
var state_35188__$1 = state_35188;
var statearr_35205_35229 = state_35188__$1;
(statearr_35205_35229[(2)] = period_ms);

(statearr_35205_35229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (9))){
var inst_35158 = (state_35188[(2)]);
var state_35188__$1 = state_35188;
var statearr_35206_35230 = state_35188__$1;
(statearr_35206_35230[(2)] = inst_35158);

(statearr_35206_35230[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (5))){
var state_35188__$1 = state_35188;
var statearr_35207_35231 = state_35188__$1;
(statearr_35207_35231[(2)] = false);

(statearr_35207_35231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (14))){
var inst_35145 = (state_35188[(9)]);
var state_35188__$1 = state_35188;
var statearr_35208_35232 = state_35188__$1;
(statearr_35208_35232[(2)] = inst_35145);

(statearr_35208_35232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (16))){
var inst_35145 = (state_35188[(9)]);
var inst_35143 = (state_35188[(8)]);
var inst_35182 = (state_35188[(2)]);
var inst_35183 = (inst_35143 + (1));
var inst_35142 = inst_35145;
var inst_35143__$1 = inst_35183;
var state_35188__$1 = (function (){var statearr_35209 = state_35188;
(statearr_35209[(7)] = inst_35142);

(statearr_35209[(8)] = inst_35143__$1);

(statearr_35209[(12)] = inst_35182);

return statearr_35209;
})();
var statearr_35210_35233 = state_35188__$1;
(statearr_35210_35233[(2)] = null);

(statearr_35210_35233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (10))){
var inst_35163 = cljs.core.deref.call(null,period_ms);
var state_35188__$1 = state_35188;
var statearr_35211_35234 = state_35188__$1;
(statearr_35211_35234[(2)] = inst_35163);

(statearr_35211_35234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35189 === (8))){
var state_35188__$1 = state_35188;
var statearr_35212_35235 = state_35188__$1;
(statearr_35212_35235[(2)] = false);

(statearr_35212_35235[(1)] = (9));


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
});})(c__32685__auto___35217,out_chan,map__35138,map__35138__$1,actx,map__35139,map__35139__$1,period_ms))
;
return ((function (switch__32590__auto__,c__32685__auto___35217,out_chan,map__35138,map__35138__$1,actx,map__35139,map__35139__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__32591__auto__ = null;
var fugue$metronome$state_machine__32591__auto____0 = (function (){
var statearr_35213 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35213[(0)] = fugue$metronome$state_machine__32591__auto__);

(statearr_35213[(1)] = (1));

return statearr_35213;
});
var fugue$metronome$state_machine__32591__auto____1 = (function (state_35188){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_35188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e35214){if((e35214 instanceof Object)){
var ex__32594__auto__ = e35214;
var statearr_35215_35236 = state_35188;
(statearr_35215_35236[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35237 = state_35188;
state_35188 = G__35237;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$metronome$state_machine__32591__auto__ = function(state_35188){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__32591__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__32591__auto____1.call(this,state_35188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__32591__auto____0;
fugue$metronome$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__32591__auto____1;
return fugue$metronome$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___35217,out_chan,map__35138,map__35138__$1,actx,map__35139,map__35139__$1,period_ms))
})();
var state__32687__auto__ = (function (){var statearr_35216 = f__32686__auto__.call(null);
(statearr_35216[(6)] = c__32685__auto___35217);

return statearr_35216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___35217,out_chan,map__35138,map__35138__$1,actx,map__35139,map__35139__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1610051744762
