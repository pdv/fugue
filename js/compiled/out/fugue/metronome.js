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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35119){
return cljs.core.map_QMARK_.call(null,G__35119);
}),(function (G__35119){
return cljs.core.contains_QMARK_.call(null,G__35119,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__35119){
return ((cljs.core.map_QMARK_.call(null,G__35119)) && (cljs.core.contains_QMARK_.call(null,G__35119,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_35120 = actx;
var _STAR_runtime_state_STAR__orig_val__35122 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35123 = oops.state.prepare_state.call(null,target_obj_35120,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35123;

try{var next_obj_35121 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35120,(0),"currentTime",true,true,false))?(target_obj_35120["currentTime"]):null);
return next_obj_35121;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35122;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__35124,p__35125){
var map__35126 = p__35124;
var map__35126__$1 = (((((!((map__35126 == null))))?(((((map__35126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35126):map__35126);
var actx = cljs.core.get.call(null,map__35126__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__35127 = p__35125;
var map__35127__$1 = (((((!((map__35127 == null))))?(((((map__35127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35127):map__35127);
var period_ms = cljs.core.get.call(null,map__35127__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32673__auto___35205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32673__auto___35205,out_chan,map__35126,map__35126__$1,actx,map__35127,map__35127__$1,period_ms){
return (function (){
var f__32674__auto__ = (function (){var switch__32578__auto__ = ((function (c__32673__auto___35205,out_chan,map__35126,map__35126__$1,actx,map__35127,map__35127__$1,period_ms){
return (function (state_35176){
var state_val_35177 = (state_35176[(1)]);
if((state_val_35177 === (7))){
var state_35176__$1 = state_35176;
var statearr_35178_35206 = state_35176__$1;
(statearr_35178_35206[(2)] = true);

(statearr_35178_35206[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (1))){
var inst_35130 = null;
var inst_35131 = (0);
var state_35176__$1 = (function (){var statearr_35179 = state_35176;
(statearr_35179[(7)] = inst_35131);

(statearr_35179[(8)] = inst_35130);

return statearr_35179;
})();
var statearr_35180_35207 = state_35176__$1;
(statearr_35180_35207[(2)] = null);

(statearr_35180_35207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (4))){
var inst_35138 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_35139 = (inst_35138 & (32768));
var inst_35140 = period_ms.cljs$core$IDeref$;
var inst_35141 = (cljs.core.PROTOCOL_SENTINEL === inst_35140);
var inst_35142 = ((inst_35139) || (inst_35141));
var state_35176__$1 = state_35176;
if(cljs.core.truth_(inst_35142)){
var statearr_35181_35208 = state_35176__$1;
(statearr_35181_35208[(1)] = (7));

} else {
var statearr_35182_35209 = state_35176__$1;
(statearr_35182_35209[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (15))){
var inst_35131 = (state_35176[(7)]);
var inst_35133 = (state_35176[(9)]);
var inst_35154 = (state_35176[(10)]);
var inst_35158 = (state_35176[(2)]);
var inst_35159 = (inst_35158 + inst_35154);
var inst_35160 = (inst_35159 - inst_35133);
var inst_35161 = (inst_35160 / (1000));
var inst_35162 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_35163 = cljs.core.mod.call(null,inst_35131,(2));
var inst_35164 = [inst_35163,inst_35161];
var inst_35165 = cljs.core.PersistentHashMap.fromArrays(inst_35162,inst_35164);
var inst_35166 = cljs.core.async.put_BANG_.call(null,out_chan,inst_35165);
var inst_35167 = (0.7 * inst_35154);
var inst_35168 = cljs.core.async.timeout.call(null,inst_35167);
var state_35176__$1 = (function (){var statearr_35183 = state_35176;
(statearr_35183[(11)] = inst_35166);

return statearr_35183;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35176__$1,(16),inst_35168);
} else {
if((state_val_35177 === (13))){
var inst_35130 = (state_35176[(8)]);
var state_35176__$1 = state_35176;
var statearr_35184_35210 = state_35176__$1;
(statearr_35184_35210[(2)] = inst_35130);

(statearr_35184_35210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (6))){
var inst_35149 = (state_35176[(2)]);
var state_35176__$1 = state_35176;
if(cljs.core.truth_(inst_35149)){
var statearr_35185_35211 = state_35176__$1;
(statearr_35185_35211[(1)] = (10));

} else {
var statearr_35186_35212 = state_35176__$1;
(statearr_35186_35212[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (3))){
var inst_35174 = (state_35176[(2)]);
var state_35176__$1 = state_35176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35176__$1,inst_35174);
} else {
if((state_val_35177 === (12))){
var inst_35130 = (state_35176[(8)]);
var inst_35154 = (state_35176[(2)]);
var state_35176__$1 = (function (){var statearr_35187 = state_35176;
(statearr_35187[(10)] = inst_35154);

return statearr_35187;
})();
if(cljs.core.truth_(inst_35130)){
var statearr_35188_35213 = state_35176__$1;
(statearr_35188_35213[(1)] = (13));

} else {
var statearr_35189_35214 = state_35176__$1;
(statearr_35189_35214[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (2))){
var inst_35133 = fugue.metronome.now_ms.call(null,actx);
var inst_35135 = (period_ms == null);
var inst_35136 = cljs.core.not.call(null,inst_35135);
var state_35176__$1 = (function (){var statearr_35190 = state_35176;
(statearr_35190[(9)] = inst_35133);

return statearr_35190;
})();
if(inst_35136){
var statearr_35191_35215 = state_35176__$1;
(statearr_35191_35215[(1)] = (4));

} else {
var statearr_35192_35216 = state_35176__$1;
(statearr_35192_35216[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (11))){
var state_35176__$1 = state_35176;
var statearr_35193_35217 = state_35176__$1;
(statearr_35193_35217[(2)] = period_ms);

(statearr_35193_35217[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (9))){
var inst_35146 = (state_35176[(2)]);
var state_35176__$1 = state_35176;
var statearr_35194_35218 = state_35176__$1;
(statearr_35194_35218[(2)] = inst_35146);

(statearr_35194_35218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (5))){
var state_35176__$1 = state_35176;
var statearr_35195_35219 = state_35176__$1;
(statearr_35195_35219[(2)] = false);

(statearr_35195_35219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (14))){
var inst_35133 = (state_35176[(9)]);
var state_35176__$1 = state_35176;
var statearr_35196_35220 = state_35176__$1;
(statearr_35196_35220[(2)] = inst_35133);

(statearr_35196_35220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (16))){
var inst_35131 = (state_35176[(7)]);
var inst_35133 = (state_35176[(9)]);
var inst_35170 = (state_35176[(2)]);
var inst_35171 = (inst_35131 + (1));
var inst_35130 = inst_35133;
var inst_35131__$1 = inst_35171;
var state_35176__$1 = (function (){var statearr_35197 = state_35176;
(statearr_35197[(7)] = inst_35131__$1);

(statearr_35197[(8)] = inst_35130);

(statearr_35197[(12)] = inst_35170);

return statearr_35197;
})();
var statearr_35198_35221 = state_35176__$1;
(statearr_35198_35221[(2)] = null);

(statearr_35198_35221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (10))){
var inst_35151 = cljs.core.deref.call(null,period_ms);
var state_35176__$1 = state_35176;
var statearr_35199_35222 = state_35176__$1;
(statearr_35199_35222[(2)] = inst_35151);

(statearr_35199_35222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35177 === (8))){
var state_35176__$1 = state_35176;
var statearr_35200_35223 = state_35176__$1;
(statearr_35200_35223[(2)] = false);

(statearr_35200_35223[(1)] = (9));


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
});})(c__32673__auto___35205,out_chan,map__35126,map__35126__$1,actx,map__35127,map__35127__$1,period_ms))
;
return ((function (switch__32578__auto__,c__32673__auto___35205,out_chan,map__35126,map__35126__$1,actx,map__35127,map__35127__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__32579__auto__ = null;
var fugue$metronome$state_machine__32579__auto____0 = (function (){
var statearr_35201 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35201[(0)] = fugue$metronome$state_machine__32579__auto__);

(statearr_35201[(1)] = (1));

return statearr_35201;
});
var fugue$metronome$state_machine__32579__auto____1 = (function (state_35176){
while(true){
var ret_value__32580__auto__ = (function (){try{while(true){
var result__32581__auto__ = switch__32578__auto__.call(null,state_35176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32581__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32581__auto__;
}
break;
}
}catch (e35202){if((e35202 instanceof Object)){
var ex__32582__auto__ = e35202;
var statearr_35203_35224 = state_35176;
(statearr_35203_35224[(5)] = ex__32582__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35225 = state_35176;
state_35176 = G__35225;
continue;
} else {
return ret_value__32580__auto__;
}
break;
}
});
fugue$metronome$state_machine__32579__auto__ = function(state_35176){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__32579__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__32579__auto____1.call(this,state_35176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__32579__auto____0;
fugue$metronome$state_machine__32579__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__32579__auto____1;
return fugue$metronome$state_machine__32579__auto__;
})()
;})(switch__32578__auto__,c__32673__auto___35205,out_chan,map__35126,map__35126__$1,actx,map__35127,map__35127__$1,period_ms))
})();
var state__32675__auto__ = (function (){var statearr_35204 = f__32674__auto__.call(null);
(statearr_35204[(6)] = c__32673__auto___35205);

return statearr_35204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32675__auto__);
});})(c__32673__auto___35205,out_chan,map__35126,map__35126__$1,actx,map__35127,map__35127__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1608403393213
