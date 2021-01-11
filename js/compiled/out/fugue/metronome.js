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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35186){
return cljs.core.map_QMARK_.call(null,G__35186);
}),(function (G__35186){
return cljs.core.contains_QMARK_.call(null,G__35186,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__35186){
return ((cljs.core.map_QMARK_.call(null,G__35186)) && (cljs.core.contains_QMARK_.call(null,G__35186,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_35187 = actx;
var _STAR_runtime_state_STAR__orig_val__35189 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35190 = oops.state.prepare_state.call(null,target_obj_35187,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35190;

try{var next_obj_35188 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35187,(0),"currentTime",true,true,false))?(target_obj_35187["currentTime"]):null);
return next_obj_35188;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35189;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__35191,p__35192){
var map__35193 = p__35191;
var map__35193__$1 = (((((!((map__35193 == null))))?(((((map__35193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35193):map__35193);
var actx = cljs.core.get.call(null,map__35193__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__35194 = p__35192;
var map__35194__$1 = (((((!((map__35194 == null))))?(((((map__35194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35194):map__35194);
var period_ms = cljs.core.get.call(null,map__35194__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32707__auto___35272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___35272,out_chan,map__35193,map__35193__$1,actx,map__35194,map__35194__$1,period_ms){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___35272,out_chan,map__35193,map__35193__$1,actx,map__35194,map__35194__$1,period_ms){
return (function (state_35243){
var state_val_35244 = (state_35243[(1)]);
if((state_val_35244 === (7))){
var state_35243__$1 = state_35243;
var statearr_35245_35273 = state_35243__$1;
(statearr_35245_35273[(2)] = true);

(statearr_35245_35273[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (1))){
var inst_35197 = null;
var inst_35198 = (0);
var state_35243__$1 = (function (){var statearr_35246 = state_35243;
(statearr_35246[(7)] = inst_35198);

(statearr_35246[(8)] = inst_35197);

return statearr_35246;
})();
var statearr_35247_35274 = state_35243__$1;
(statearr_35247_35274[(2)] = null);

(statearr_35247_35274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (4))){
var inst_35205 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_35206 = (inst_35205 & (32768));
var inst_35207 = period_ms.cljs$core$IDeref$;
var inst_35208 = (cljs.core.PROTOCOL_SENTINEL === inst_35207);
var inst_35209 = ((inst_35206) || (inst_35208));
var state_35243__$1 = state_35243;
if(cljs.core.truth_(inst_35209)){
var statearr_35248_35275 = state_35243__$1;
(statearr_35248_35275[(1)] = (7));

} else {
var statearr_35249_35276 = state_35243__$1;
(statearr_35249_35276[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (15))){
var inst_35221 = (state_35243[(9)]);
var inst_35198 = (state_35243[(7)]);
var inst_35200 = (state_35243[(10)]);
var inst_35225 = (state_35243[(2)]);
var inst_35226 = (inst_35225 + inst_35221);
var inst_35227 = (inst_35226 - inst_35200);
var inst_35228 = (inst_35227 / (1000));
var inst_35229 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_35230 = cljs.core.mod.call(null,inst_35198,(2));
var inst_35231 = [inst_35230,inst_35228];
var inst_35232 = cljs.core.PersistentHashMap.fromArrays(inst_35229,inst_35231);
var inst_35233 = cljs.core.async.put_BANG_.call(null,out_chan,inst_35232);
var inst_35234 = (0.7 * inst_35221);
var inst_35235 = cljs.core.async.timeout.call(null,inst_35234);
var state_35243__$1 = (function (){var statearr_35250 = state_35243;
(statearr_35250[(11)] = inst_35233);

return statearr_35250;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35243__$1,(16),inst_35235);
} else {
if((state_val_35244 === (13))){
var inst_35197 = (state_35243[(8)]);
var state_35243__$1 = state_35243;
var statearr_35251_35277 = state_35243__$1;
(statearr_35251_35277[(2)] = inst_35197);

(statearr_35251_35277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (6))){
var inst_35216 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
if(cljs.core.truth_(inst_35216)){
var statearr_35252_35278 = state_35243__$1;
(statearr_35252_35278[(1)] = (10));

} else {
var statearr_35253_35279 = state_35243__$1;
(statearr_35253_35279[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (3))){
var inst_35241 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35243__$1,inst_35241);
} else {
if((state_val_35244 === (12))){
var inst_35197 = (state_35243[(8)]);
var inst_35221 = (state_35243[(2)]);
var state_35243__$1 = (function (){var statearr_35254 = state_35243;
(statearr_35254[(9)] = inst_35221);

return statearr_35254;
})();
if(cljs.core.truth_(inst_35197)){
var statearr_35255_35280 = state_35243__$1;
(statearr_35255_35280[(1)] = (13));

} else {
var statearr_35256_35281 = state_35243__$1;
(statearr_35256_35281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (2))){
var inst_35200 = fugue.metronome.now_ms.call(null,actx);
var inst_35202 = (period_ms == null);
var inst_35203 = cljs.core.not.call(null,inst_35202);
var state_35243__$1 = (function (){var statearr_35257 = state_35243;
(statearr_35257[(10)] = inst_35200);

return statearr_35257;
})();
if(inst_35203){
var statearr_35258_35282 = state_35243__$1;
(statearr_35258_35282[(1)] = (4));

} else {
var statearr_35259_35283 = state_35243__$1;
(statearr_35259_35283[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (11))){
var state_35243__$1 = state_35243;
var statearr_35260_35284 = state_35243__$1;
(statearr_35260_35284[(2)] = period_ms);

(statearr_35260_35284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (9))){
var inst_35213 = (state_35243[(2)]);
var state_35243__$1 = state_35243;
var statearr_35261_35285 = state_35243__$1;
(statearr_35261_35285[(2)] = inst_35213);

(statearr_35261_35285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (5))){
var state_35243__$1 = state_35243;
var statearr_35262_35286 = state_35243__$1;
(statearr_35262_35286[(2)] = false);

(statearr_35262_35286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (14))){
var inst_35200 = (state_35243[(10)]);
var state_35243__$1 = state_35243;
var statearr_35263_35287 = state_35243__$1;
(statearr_35263_35287[(2)] = inst_35200);

(statearr_35263_35287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (16))){
var inst_35198 = (state_35243[(7)]);
var inst_35200 = (state_35243[(10)]);
var inst_35237 = (state_35243[(2)]);
var inst_35238 = (inst_35198 + (1));
var inst_35197 = inst_35200;
var inst_35198__$1 = inst_35238;
var state_35243__$1 = (function (){var statearr_35264 = state_35243;
(statearr_35264[(7)] = inst_35198__$1);

(statearr_35264[(12)] = inst_35237);

(statearr_35264[(8)] = inst_35197);

return statearr_35264;
})();
var statearr_35265_35288 = state_35243__$1;
(statearr_35265_35288[(2)] = null);

(statearr_35265_35288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (10))){
var inst_35218 = cljs.core.deref.call(null,period_ms);
var state_35243__$1 = state_35243;
var statearr_35266_35289 = state_35243__$1;
(statearr_35266_35289[(2)] = inst_35218);

(statearr_35266_35289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35244 === (8))){
var state_35243__$1 = state_35243;
var statearr_35267_35290 = state_35243__$1;
(statearr_35267_35290[(2)] = false);

(statearr_35267_35290[(1)] = (9));


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
});})(c__32707__auto___35272,out_chan,map__35193,map__35193__$1,actx,map__35194,map__35194__$1,period_ms))
;
return ((function (switch__32612__auto__,c__32707__auto___35272,out_chan,map__35193,map__35193__$1,actx,map__35194,map__35194__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__32613__auto__ = null;
var fugue$metronome$state_machine__32613__auto____0 = (function (){
var statearr_35268 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35268[(0)] = fugue$metronome$state_machine__32613__auto__);

(statearr_35268[(1)] = (1));

return statearr_35268;
});
var fugue$metronome$state_machine__32613__auto____1 = (function (state_35243){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_35243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e35269){if((e35269 instanceof Object)){
var ex__32616__auto__ = e35269;
var statearr_35270_35291 = state_35243;
(statearr_35270_35291[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35292 = state_35243;
state_35243 = G__35292;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
fugue$metronome$state_machine__32613__auto__ = function(state_35243){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__32613__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__32613__auto____1.call(this,state_35243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__32613__auto____0;
fugue$metronome$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__32613__auto____1;
return fugue$metronome$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___35272,out_chan,map__35193,map__35193__$1,actx,map__35194,map__35194__$1,period_ms))
})();
var state__32709__auto__ = (function (){var statearr_35271 = f__32708__auto__.call(null);
(statearr_35271[(6)] = c__32707__auto___35272);

return statearr_35271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___35272,out_chan,map__35193,map__35193__$1,actx,map__35194,map__35194__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1610383903164
