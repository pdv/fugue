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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36772){
return cljs.core.map_QMARK_.call(null,G__36772);
}),(function (G__36772){
return cljs.core.contains_QMARK_.call(null,G__36772,new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315));
})], null),(function (G__36772){
return ((cljs.core.map_QMARK_.call(null,G__36772)) && (cljs.core.contains_QMARK_.call(null,G__36772,new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315)))], null),null]));
}));
webcv.metronome.now_ms = (function webcv$metronome$now_ms(actx){
return ((1000) * (function (){var target_obj_36773 = actx;
var _STAR_runtime_state_STAR__orig_val__36775 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36776 = oops.state.prepare_state.call(null,target_obj_36773,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36776;

try{var next_obj_36774 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_36773,(0),"currentTime",true,true,false))?(target_obj_36773["currentTime"]):null);
return next_obj_36774;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36775;
}})());
});
cljs.core._add_method.call(null,webcv.chan.make_chan_node,new cljs.core.Keyword("webcv.metronome","metronome","webcv.metronome/metronome",1387895218),(function (p__36777,p__36778){
var map__36779 = p__36777;
var map__36779__$1 = (((((!((map__36779 == null))))?(((((map__36779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36779):map__36779);
var actx = cljs.core.get.call(null,map__36779__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
var map__36780 = p__36778;
var map__36780__$1 = (((((!((map__36780 == null))))?(((((map__36780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36780):map__36780);
var period_ms = cljs.core.get.call(null,map__36780__$1,new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315));
var out_chan = cljs.core.async.chan.call(null,(1));
var c__32649__auto___36824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___36824,out_chan,map__36779,map__36779__$1,actx,map__36780,map__36780__$1,period_ms){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___36824,out_chan,map__36779,map__36779__$1,actx,map__36780,map__36780__$1,period_ms){
return (function (state_36808){
var state_val_36809 = (state_36808[(1)]);
if((state_val_36809 === (1))){
var inst_36783 = null;
var inst_36784 = (0);
var state_36808__$1 = (function (){var statearr_36810 = state_36808;
(statearr_36810[(7)] = inst_36784);

(statearr_36810[(8)] = inst_36783);

return statearr_36810;
})();
var statearr_36811_36825 = state_36808__$1;
(statearr_36811_36825[(2)] = null);

(statearr_36811_36825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36809 === (2))){
var inst_36783 = (state_36808[(8)]);
var inst_36786 = webcv.metronome.now_ms.call(null,actx);
var state_36808__$1 = (function (){var statearr_36812 = state_36808;
(statearr_36812[(9)] = inst_36786);

return statearr_36812;
})();
if(cljs.core.truth_(inst_36783)){
var statearr_36813_36826 = state_36808__$1;
(statearr_36813_36826[(1)] = (4));

} else {
var statearr_36814_36827 = state_36808__$1;
(statearr_36814_36827[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36809 === (3))){
var inst_36806 = (state_36808[(2)]);
var state_36808__$1 = state_36808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36808__$1,inst_36806);
} else {
if((state_val_36809 === (4))){
var inst_36783 = (state_36808[(8)]);
var state_36808__$1 = state_36808;
var statearr_36815_36828 = state_36808__$1;
(statearr_36815_36828[(2)] = inst_36783);

(statearr_36815_36828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36809 === (5))){
var inst_36786 = (state_36808[(9)]);
var state_36808__$1 = state_36808;
var statearr_36816_36829 = state_36808__$1;
(statearr_36816_36829[(2)] = inst_36786);

(statearr_36816_36829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36809 === (6))){
var inst_36786 = (state_36808[(9)]);
var inst_36784 = (state_36808[(7)]);
var inst_36790 = (state_36808[(2)]);
var inst_36791 = (inst_36790 + period_ms);
var inst_36792 = (inst_36791 - inst_36786);
var inst_36793 = (inst_36792 / (1000));
var inst_36794 = [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"delay","delay",-574225219)];
var inst_36795 = cljs.core.mod.call(null,inst_36784,(2));
var inst_36796 = [inst_36795,inst_36793];
var inst_36797 = cljs.core.PersistentHashMap.fromArrays(inst_36794,inst_36796);
var inst_36798 = cljs.core.async.put_BANG_.call(null,out_chan,inst_36797);
var inst_36799 = (0.7 * period_ms);
var inst_36800 = cljs.core.async.timeout.call(null,inst_36799);
var state_36808__$1 = (function (){var statearr_36817 = state_36808;
(statearr_36817[(10)] = inst_36798);

return statearr_36817;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36808__$1,(7),inst_36800);
} else {
if((state_val_36809 === (7))){
var inst_36786 = (state_36808[(9)]);
var inst_36784 = (state_36808[(7)]);
var inst_36802 = (state_36808[(2)]);
var inst_36803 = (inst_36784 + (1));
var inst_36783 = inst_36786;
var inst_36784__$1 = inst_36803;
var state_36808__$1 = (function (){var statearr_36818 = state_36808;
(statearr_36818[(11)] = inst_36802);

(statearr_36818[(7)] = inst_36784__$1);

(statearr_36818[(8)] = inst_36783);

return statearr_36818;
})();
var statearr_36819_36830 = state_36808__$1;
(statearr_36819_36830[(2)] = null);

(statearr_36819_36830[(1)] = (2));


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
});})(c__32649__auto___36824,out_chan,map__36779,map__36779__$1,actx,map__36780,map__36780__$1,period_ms))
;
return ((function (switch__32554__auto__,c__32649__auto___36824,out_chan,map__36779,map__36779__$1,actx,map__36780,map__36780__$1,period_ms){
return (function() {
var webcv$metronome$state_machine__32555__auto__ = null;
var webcv$metronome$state_machine__32555__auto____0 = (function (){
var statearr_36820 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36820[(0)] = webcv$metronome$state_machine__32555__auto__);

(statearr_36820[(1)] = (1));

return statearr_36820;
});
var webcv$metronome$state_machine__32555__auto____1 = (function (state_36808){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_36808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e36821){if((e36821 instanceof Object)){
var ex__32558__auto__ = e36821;
var statearr_36822_36831 = state_36808;
(statearr_36822_36831[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36832 = state_36808;
state_36808 = G__36832;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
webcv$metronome$state_machine__32555__auto__ = function(state_36808){
switch(arguments.length){
case 0:
return webcv$metronome$state_machine__32555__auto____0.call(this);
case 1:
return webcv$metronome$state_machine__32555__auto____1.call(this,state_36808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$metronome$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$metronome$state_machine__32555__auto____0;
webcv$metronome$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$metronome$state_machine__32555__auto____1;
return webcv$metronome$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___36824,out_chan,map__36779,map__36779__$1,actx,map__36780,map__36780__$1,period_ms))
})();
var state__32651__auto__ = (function (){var statearr_36823 = f__32650__auto__.call(null);
(statearr_36823[(6)] = c__32649__auto___36824);

return statearr_36823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___36824,out_chan,map__36779,map__36779__$1,actx,map__36780,map__36780__$1,period_ms))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("webcv.chan","mult-out","webcv.chan/mult-out",1070529409),cljs.core.async.mult.call(null,out_chan)], null);
}));
webcv.metronome.metro = (function webcv$metronome$metro(period_ms){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.chan","chan-node-type","webcv.chan/chan-node-type",-1398165608),new cljs.core.Keyword("webcv.metronome","metronome","webcv.metronome/metronome",1387895218),new cljs.core.Keyword("webcv.metronome","period-ms","webcv.metronome/period-ms",1942360315),period_ms], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=metronome.js.map?rel=1601406065792
