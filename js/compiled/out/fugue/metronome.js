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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35173){
return cljs.core.map_QMARK_.call(null,G__35173);
}),(function (G__35173){
return cljs.core.contains_QMARK_.call(null,G__35173,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
})], null),(function (G__35173){
return ((cljs.core.map_QMARK_.call(null,G__35173)) && (cljs.core.contains_QMARK_.call(null,G__35173,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788)))], null),null]));
}));
fugue.metronome.now_ms = (function fugue$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_35174 = actx;
var _STAR_runtime_state_STAR__orig_val__35176 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35177 = oops.state.prepare_state.call(null,target_obj_35174,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35177;

try{var next_obj_35175 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35174,(0),"currentTime",true,true,false))?(target_obj_35174["currentTime"]):null);
return next_obj_35175;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35176;
}})());
});
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),(function (p__35178,p__35179){
var map__35180 = p__35178;
var map__35180__$1 = (((((!((map__35180 == null))))?(((((map__35180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35180):map__35180);
var actx = cljs.core.get.call(null,map__35180__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__35181 = p__35179;
var map__35181__$1 = (((((!((map__35181 == null))))?(((((map__35181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35181):map__35181);
var period_ms = cljs.core.get.call(null,map__35181__$1,new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32707__auto___35259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___35259,out_chan,map__35180,map__35180__$1,actx,map__35181,map__35181__$1,period_ms){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___35259,out_chan,map__35180,map__35180__$1,actx,map__35181,map__35181__$1,period_ms){
return (function (state_35230){
var state_val_35231 = (state_35230[(1)]);
if((state_val_35231 === (7))){
var state_35230__$1 = state_35230;
var statearr_35232_35260 = state_35230__$1;
(statearr_35232_35260[(2)] = true);

(statearr_35232_35260[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (1))){
var inst_35184 = null;
var inst_35185 = (0);
var state_35230__$1 = (function (){var statearr_35233 = state_35230;
(statearr_35233[(7)] = inst_35185);

(statearr_35233[(8)] = inst_35184);

return statearr_35233;
})();
var statearr_35234_35261 = state_35230__$1;
(statearr_35234_35261[(2)] = null);

(statearr_35234_35261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (4))){
var inst_35192 = period_ms.cljs$lang$protocol_mask$partition0$;
var inst_35193 = (inst_35192 & (32768));
var inst_35194 = period_ms.cljs$core$IDeref$;
var inst_35195 = (cljs.core.PROTOCOL_SENTINEL === inst_35194);
var inst_35196 = ((inst_35193) || (inst_35195));
var state_35230__$1 = state_35230;
if(cljs.core.truth_(inst_35196)){
var statearr_35235_35262 = state_35230__$1;
(statearr_35235_35262[(1)] = (7));

} else {
var statearr_35236_35263 = state_35230__$1;
(statearr_35236_35263[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (15))){
var inst_35208 = (state_35230[(9)]);
var inst_35187 = (state_35230[(10)]);
var inst_35185 = (state_35230[(7)]);
var inst_35212 = (state_35230[(2)]);
var inst_35213 = (inst_35212 + inst_35208);
var inst_35214 = (inst_35213 - inst_35187);
var inst_35215 = (inst_35214 / (1000));
var inst_35216 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_35217 = cljs.core.mod.call(null,inst_35185,(2));
var inst_35218 = [inst_35217,inst_35215];
var inst_35219 = cljs.core.PersistentHashMap.fromArrays(inst_35216,inst_35218);
var inst_35220 = cljs.core.async.put_BANG_.call(null,out_chan,inst_35219);
var inst_35221 = (0.7 * inst_35208);
var inst_35222 = cljs.core.async.timeout.call(null,inst_35221);
var state_35230__$1 = (function (){var statearr_35237 = state_35230;
(statearr_35237[(11)] = inst_35220);

return statearr_35237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35230__$1,(16),inst_35222);
} else {
if((state_val_35231 === (13))){
var inst_35184 = (state_35230[(8)]);
var state_35230__$1 = state_35230;
var statearr_35238_35264 = state_35230__$1;
(statearr_35238_35264[(2)] = inst_35184);

(statearr_35238_35264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (6))){
var inst_35203 = (state_35230[(2)]);
var state_35230__$1 = state_35230;
if(cljs.core.truth_(inst_35203)){
var statearr_35239_35265 = state_35230__$1;
(statearr_35239_35265[(1)] = (10));

} else {
var statearr_35240_35266 = state_35230__$1;
(statearr_35240_35266[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (3))){
var inst_35228 = (state_35230[(2)]);
var state_35230__$1 = state_35230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35230__$1,inst_35228);
} else {
if((state_val_35231 === (12))){
var inst_35184 = (state_35230[(8)]);
var inst_35208 = (state_35230[(2)]);
var state_35230__$1 = (function (){var statearr_35241 = state_35230;
(statearr_35241[(9)] = inst_35208);

return statearr_35241;
})();
if(cljs.core.truth_(inst_35184)){
var statearr_35242_35267 = state_35230__$1;
(statearr_35242_35267[(1)] = (13));

} else {
var statearr_35243_35268 = state_35230__$1;
(statearr_35243_35268[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (2))){
var inst_35187 = fugue.metronome.now_ms.call(null,actx);
var inst_35189 = (period_ms == null);
var inst_35190 = cljs.core.not.call(null,inst_35189);
var state_35230__$1 = (function (){var statearr_35244 = state_35230;
(statearr_35244[(10)] = inst_35187);

return statearr_35244;
})();
if(inst_35190){
var statearr_35245_35269 = state_35230__$1;
(statearr_35245_35269[(1)] = (4));

} else {
var statearr_35246_35270 = state_35230__$1;
(statearr_35246_35270[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (11))){
var state_35230__$1 = state_35230;
var statearr_35247_35271 = state_35230__$1;
(statearr_35247_35271[(2)] = period_ms);

(statearr_35247_35271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (9))){
var inst_35200 = (state_35230[(2)]);
var state_35230__$1 = state_35230;
var statearr_35248_35272 = state_35230__$1;
(statearr_35248_35272[(2)] = inst_35200);

(statearr_35248_35272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (5))){
var state_35230__$1 = state_35230;
var statearr_35249_35273 = state_35230__$1;
(statearr_35249_35273[(2)] = false);

(statearr_35249_35273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (14))){
var inst_35187 = (state_35230[(10)]);
var state_35230__$1 = state_35230;
var statearr_35250_35274 = state_35230__$1;
(statearr_35250_35274[(2)] = inst_35187);

(statearr_35250_35274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (16))){
var inst_35187 = (state_35230[(10)]);
var inst_35185 = (state_35230[(7)]);
var inst_35224 = (state_35230[(2)]);
var inst_35225 = (inst_35185 + (1));
var inst_35184 = inst_35187;
var inst_35185__$1 = inst_35225;
var state_35230__$1 = (function (){var statearr_35251 = state_35230;
(statearr_35251[(12)] = inst_35224);

(statearr_35251[(7)] = inst_35185__$1);

(statearr_35251[(8)] = inst_35184);

return statearr_35251;
})();
var statearr_35252_35275 = state_35230__$1;
(statearr_35252_35275[(2)] = null);

(statearr_35252_35275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (10))){
var inst_35205 = cljs.core.deref.call(null,period_ms);
var state_35230__$1 = state_35230;
var statearr_35253_35276 = state_35230__$1;
(statearr_35253_35276[(2)] = inst_35205);

(statearr_35253_35276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (8))){
var state_35230__$1 = state_35230;
var statearr_35254_35277 = state_35230__$1;
(statearr_35254_35277[(2)] = false);

(statearr_35254_35277[(1)] = (9));


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
});})(c__32707__auto___35259,out_chan,map__35180,map__35180__$1,actx,map__35181,map__35181__$1,period_ms))
;
return ((function (switch__32612__auto__,c__32707__auto___35259,out_chan,map__35180,map__35180__$1,actx,map__35181,map__35181__$1,period_ms){
return (function() {
var fugue$metronome$state_machine__32613__auto__ = null;
var fugue$metronome$state_machine__32613__auto____0 = (function (){
var statearr_35255 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35255[(0)] = fugue$metronome$state_machine__32613__auto__);

(statearr_35255[(1)] = (1));

return statearr_35255;
});
var fugue$metronome$state_machine__32613__auto____1 = (function (state_35230){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_35230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e35256){if((e35256 instanceof Object)){
var ex__32616__auto__ = e35256;
var statearr_35257_35278 = state_35230;
(statearr_35257_35278[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35279 = state_35230;
state_35230 = G__35279;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
fugue$metronome$state_machine__32613__auto__ = function(state_35230){
switch(arguments.length){
case 0:
return fugue$metronome$state_machine__32613__auto____0.call(this);
case 1:
return fugue$metronome$state_machine__32613__auto____1.call(this,state_35230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$metronome$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$metronome$state_machine__32613__auto____0;
fugue$metronome$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$metronome$state_machine__32613__auto____1;
return fugue$metronome$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___35259,out_chan,map__35180,map__35180__$1,actx,map__35181,map__35181__$1,period_ms))
})();
var state__32709__auto__ = (function (){var statearr_35258 = f__32708__auto__.call(null);
(statearr_35258[(6)] = c__32707__auto___35259);

return statearr_35258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___35259,out_chan,map__35180,map__35180__$1,actx,map__35181,map__35181__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.metronome.metro = (function fugue$metronome$metro(period_ms){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.metronome","metronome","fugue.metronome/metronome",-921565263),new cljs.core.Keyword("fugue.metronome","period-ms","fugue.metronome/period-ms",-526614788),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1610405468859
