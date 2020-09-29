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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35098){
return cljs.core.map_QMARK_.call(null,G__35098);
}),(function (G__35098){
return cljs.core.contains_QMARK_.call(null,G__35098,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__35098){
return ((cljs.core.map_QMARK_.call(null,G__35098)) && (cljs.core.contains_QMARK_.call(null,G__35098,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_35099 = actx;
var _STAR_runtime_state_STAR__orig_val__35101 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35102 = oops.state.prepare_state.call(null,target_obj_35099,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35102;

try{var next_obj_35100 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35099,(0),"currentTime",true,true,false))?(target_obj_35099["currentTime"]):null);
return next_obj_35100;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35101;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__35103,p__35104){
var map__35105 = p__35103;
var map__35105__$1 = (((((!((map__35105 == null))))?(((((map__35105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35105):map__35105);
var actx = cljs.core.get.call(null,map__35105__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__35106 = p__35104;
var map__35106__$1 = (((((!((map__35106 == null))))?(((((map__35106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35106):map__35106);
var period_ms = cljs.core.get.call(null,map__35106__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32652__auto___35184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto___35184,out_chan,map__35105,map__35105__$1,actx,map__35106,map__35106__$1,period_ms){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto___35184,out_chan,map__35105,map__35105__$1,actx,map__35106,map__35106__$1,period_ms){
return (function (state_35155){
var state_val_35156 = (state_35155[(1)]);
if((state_val_35156 === (7))){
var state_35155__$1 = state_35155;
var statearr_35157_35185 = state_35155__$1;
(statearr_35157_35185[(2)] = true);

(statearr_35157_35185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35156 === (1))){
var inst_35109 = null;
var inst_35110 = (0);
var state_35155__$1 = (function (){var statearr_35158 = state_35155;
(statearr_35158[(7)] = inst_35109);

(statearr_35158[(8)] = inst_35110);

return statearr_35158;
})();
var statearr_35159_35186 = state_35155__$1;
(statearr_35159_35186[(2)] = null);

(statearr_35159_35186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35156 === (4))){
var inst_35117 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_35118 = (inst_35117 & (32768));
var inst_35119 = period_ms.cljs$core$IDeref$;
var inst_35120 = (cljs.core.PROTOCOL_SENTINEL === inst_35119);
var inst_35121 = ((inst_35118) || (inst_35120));
var state_35155__$1 = state_35155;
if(cljs.core.truth_(inst_35121)){
var statearr_35160_35187 = state_35155__$1;
(statearr_35160_35187[(1)] = (7));

} else {
var statearr_35161_35188 = state_35155__$1;
(statearr_35161_35188[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35156 === (15))){
var inst_35110 = (state_35155[(8)]);
var inst_35133 = (state_35155[(9)]);
var inst_35112 = (state_35155[(10)]);
var inst_35137 = (state_35155[(2)]);
var inst_35138 = (inst_35137 + inst_35133);
var inst_35139 = (inst_35138 - inst_35112);
var inst_35140 = (inst_35139 / (1000));
var inst_35141 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_35142 = cljs.core.mod.call(null,inst_35110,(2));
var inst_35143 = [inst_35142,inst_35140];
var inst_35144 = cljs.core.PersistentHashMap.fromArrays(inst_35141,inst_35143);
var inst_35145 = cljs.core.async.put_BANG_.call(null,out_chan,inst_35144);
var inst_35146 = (0.7 * inst_35133);
var inst_35147 = cljs.core.async.timeout.call(null,inst_35146);
var state_35155__$1 = (function (){var statearr_35162 = state_35155;
(statearr_35162[(11)] = inst_35145);

return statearr_35162;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35155__$1,(16),inst_35147);
} else {
if((state_val_35156 === (13))){
var inst_35109 = (state_35155[(7)]);
var state_35155__$1 = state_35155;
var statearr_35163_35189 = state_35155__$1;
(statearr_35163_35189[(2)] = inst_35109);

(statearr_35163_35189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35156 === (6))){
var inst_35128 = (state_35155[(2)]);
var state_35155__$1 = state_35155;
if(cljs.core.truth_(inst_35128)){
var statearr_35164_35190 = state_35155__$1;
(statearr_35164_35190[(1)] = (10));

} else {
var statearr_35165_35191 = state_35155__$1;
(statearr_35165_35191[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35156 === (3))){
var inst_35153 = (state_35155[(2)]);
var state_35155__$1 = state_35155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35155__$1,inst_35153);
} else {
if((state_val_35156 === (12))){
var inst_35109 = (state_35155[(7)]);
var inst_35133 = (state_35155[(2)]);
var state_35155__$1 = (function (){var statearr_35166 = state_35155;
(statearr_35166[(9)] = inst_35133);

return statearr_35166;
})();
if(cljs.core.truth_(inst_35109)){
var statearr_35167_35192 = state_35155__$1;
(statearr_35167_35192[(1)] = (13));

} else {
var statearr_35168_35193 = state_35155__$1;
(statearr_35168_35193[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35156 === (2))){
var inst_35112 = fugue.metronome.now_ms.call(null,actx);
var inst_35114 = (period_ms == null);
var inst_35115 = cljs.core.not.call(null,inst_35114);
var state_35155__$1 = (function (){var statearr_35169 = state_35155;
(statearr_35169[(10)] = inst_35112);

return statearr_35169;
})();
if(inst_35115){
var statearr_35170_35194 = state_35155__$1;
(statearr_35170_35194[(1)] = (4));

} else {
var statearr_35171_35195 = state_35155__$1;
(statearr_35171_35195[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35156 === (11))){
var state_35155__$1 = state_35155;
var statearr_35172_35196 = state_35155__$1;
(statearr_35172_35196[(2)] = period_ms);

(statearr_35172_35196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35156 === (9))){
var inst_35125 = (state_35155[(2)]);
var state_35155__$1 = state_35155;
var statearr_35173_35197 = state_35155__$1;
(statearr_35173_35197[(2)] = inst_35125);

(statearr_35173_35197[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35156 === (5))){
var state_35155__$1 = state_35155;
var statearr_35174_35198 = state_35155__$1;
(statearr_35174_35198[(2)] = false);

(statearr_35174_35198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35156 === (14))){
var inst_35112 = (state_35155[(10)]);
var state_35155__$1 = state_35155;
var statearr_35175_35199 = state_35155__$1;
(statearr_35175_35199[(2)] = inst_35112);

(statearr_35175_35199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35156 === (16))){
var inst_35110 = (state_35155[(8)]);
var inst_35112 = (state_35155[(10)]);
var inst_35149 = (state_35155[(2)]);
var inst_35150 = (inst_35110 + (1));
var inst_35109 = inst_35112;
var inst_35110__$1 = inst_35150;
var state_35155__$1 = (function (){var statearr_35176 = state_35155;
(statearr_35176[(7)] = inst_35109);

(statearr_35176[(12)] = inst_35149);

(statearr_35176[(8)] = inst_35110__$1);

return statearr_35176;
})();
var statearr_35177_35200 = state_35155__$1;
(statearr_35177_35200[(2)] = null);

(statearr_35177_35200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35156 === (10))){
var inst_35130 = cljs.core.deref.call(null,period_ms);
var state_35155__$1 = state_35155;
var statearr_35178_35201 = state_35155__$1;
(statearr_35178_35201[(2)] = inst_35130);

(statearr_35178_35201[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35156 === (8))){
var state_35155__$1 = state_35155;
var statearr_35179_35202 = state_35155__$1;
(statearr_35179_35202[(2)] = false);

(statearr_35179_35202[(1)] = (9));


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
});})(c__32652__auto___35184,out_chan,map__35105,map__35105__$1,actx,map__35106,map__35106__$1,period_ms))
;
return ((function (switch__32557__auto__,c__32652__auto___35184,out_chan,map__35105,map__35105__$1,actx,map__35106,map__35106__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__32558__auto__ = null;
var fugue$metronome$state_machine__32558__auto____0 = (function (){
var statearr_35180 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35180[(0)] = fugue$metronome$state_machine__32558__auto__);

(statearr_35180[(1)] = (1));

return statearr_35180;
});
var fugue$metronome$state_machine__32558__auto____1 = (function (state_35155){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_35155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e35181){if((e35181 instanceof Object)){
var ex__32561__auto__ = e35181;
var statearr_35182_35203 = state_35155;
(statearr_35182_35203[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35204 = state_35155;
state_35155 = G__35204;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
fugue$metronome$state_machine__32558__auto__ = function(state_35155){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__32558__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__32558__auto____1.call(this,state_35155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__32558__auto____0;
fugue$metronome$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__32558__auto____1;
return fugue$metronome$state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto___35184,out_chan,map__35105,map__35105__$1,actx,map__35106,map__35106__$1,period_ms))
})();
var state__32654__auto__ = (function (){var statearr_35183 = f__32653__auto__.call(null);
(statearr_35183[(6)] = c__32652__auto___35184);

return statearr_35183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto___35184,out_chan,map__35105,map__35105__$1,actx,map__35106,map__35106__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1601415264780
