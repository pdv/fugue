// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.sampler');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('oops.core');
goog.require('fugue.audio');
goog.require('fugue.chan');
goog.require('fugue.ramp');
goog.require('fugue.synthdef');
cljs.core._add_method.call(null,fugue.synthdef.node_spec,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35006){
return cljs.core.map_QMARK_.call(null,G__35006);
}),(function (G__35006){
return cljs.core.contains_QMARK_.call(null,G__35006,new cljs.core.Keyword("fugue.sampler","filename","fugue.sampler/filename",1571739795));
})], null),(function (G__35006){
return ((cljs.core.map_QMARK_.call(null,G__35006)) && (cljs.core.contains_QMARK_.call(null,G__35006,new cljs.core.Keyword("fugue.sampler","filename","fugue.sampler/filename",1571739795))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","filename","fugue.sampler/filename",1571739795)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","filename","fugue.sampler/filename",1571739795)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","filename","fugue.sampler/filename",1571739795)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.sampler","filename","fugue.sampler/filename",1571739795)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.synthdef.make_node,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (p__35007,p__35008){
var map__35009 = p__35007;
var map__35009__$1 = (((((!((map__35009 == null))))?(((((map__35009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35009):map__35009);
var actx = cljs.core.get.call(null,map__35009__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var buffer_cache = cljs.core.get.call(null,map__35009__$1,new cljs.core.Keyword("fugue.sampler","buffer-cache","fugue.sampler/buffer-cache",663779996));
var map__35010 = p__35008;
var map__35010__$1 = (((((!((map__35010 == null))))?(((((map__35010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35010):map__35010);
var filename = cljs.core.get.call(null,map__35010__$1,new cljs.core.Keyword("fugue.sampler","filename","fugue.sampler/filename",1571739795));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174),(function (){var G__35013 = actx.createConstantSource();
G__35013.start();

return G__35013;
})(),new cljs.core.Keyword("fugue.sampler","buffer","fugue.sampler/buffer",-224394432),cljs.core.get.call(null,buffer_cache,filename),new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269),actx.createGain()], null);
}));
fugue.sampler.trigger_sample_BANG_ = (function fugue$sampler$trigger_sample_BANG_(sampler_node,actx){
var node = actx.createBufferSource();
var target_obj_35014_35022 = node;
var _STAR_runtime_state_STAR__orig_val__35016_35023 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35017_35024 = oops.state.prepare_state.call(null,target_obj_35014_35022,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35017_35024;

try{var parent_obj_35015_35025 = target_obj_35014_35022;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_35015_35025,(0),"buffer",true,true,true)){
(parent_obj_35015_35025["buffer"] = new cljs.core.Keyword("fugue.sampler","buffer","fugue.sampler/buffer",-224394432).cljs$core$IFn$_invoke$arity$1(sampler_node));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35016_35023;
}
new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(sampler_node).connect((function (){var target_obj_35018 = node;
var _STAR_runtime_state_STAR__orig_val__35020 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35021 = oops.state.prepare_state.call(null,target_obj_35018,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35021;

try{var next_obj_35019 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35018,(0),"detune",true,true,false))?(target_obj_35018["detune"]):null);
return next_obj_35019;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35020;
}})());

node.connect(new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(sampler_node));

return node.start();
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,p__35026){
var map__35027 = p__35026;
var map__35027__$1 = (((((!((map__35027 == null))))?(((((map__35027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35027):map__35027);
var param_name = cljs.core.get.call(null,map__35027__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var ch = cljs.core.async.chan.call(null,(1));
var actx = (function (){var target_obj_35029 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35031 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35032 = oops.state.prepare_state.call(null,target_obj_35029,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35032;

try{var next_obj_35030 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35029,(0),"context",true,true,false))?(target_obj_35029["context"]):null);
return next_obj_35030;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35031;
}})();
var detune_param = (function (){var target_obj_35033 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35035 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35036 = oops.state.prepare_state.call(null,target_obj_35033,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35036;

try{var next_obj_35034 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35033,(0),"offset",true,true,false))?(target_obj_35033["offset"]):null);
return next_obj_35034;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35035;
}})();
var c__32644__auto___35065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32644__auto___35065,ch,actx,detune_param,map__35027,map__35027__$1,param_name){
return (function (){
var f__32645__auto__ = (function (){var switch__32549__auto__ = ((function (c__32644__auto___35065,ch,actx,detune_param,map__35027,map__35027__$1,param_name){
return (function (state_35050){
var state_val_35051 = (state_35050[(1)]);
if((state_val_35051 === (1))){
var state_35050__$1 = state_35050;
var statearr_35052_35066 = state_35050__$1;
(statearr_35052_35066[(2)] = null);

(statearr_35052_35066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35051 === (2))){
var state_35050__$1 = state_35050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35050__$1,(4),ch);
} else {
if((state_val_35051 === (3))){
var inst_35048 = (state_35050[(2)]);
var state_35050__$1 = state_35050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35050__$1,inst_35048);
} else {
if((state_val_35051 === (4))){
var inst_35039 = (state_35050[(2)]);
var state_35050__$1 = (function (){var statearr_35053 = state_35050;
(statearr_35053[(7)] = inst_35039);

return statearr_35053;
})();
var G__35054_35067 = param_name;
var G__35054_35068__$1 = (((G__35054_35067 instanceof cljs.core.Keyword))?G__35054_35067.fqn:null);
switch (G__35054_35068__$1) {
case "fugue.sampler/trigger":
var statearr_35055_35070 = state_35050__$1;
(statearr_35055_35070[(1)] = (6));


break;
case "fugue.sampler/detune":
var statearr_35056_35071 = state_35050__$1;
(statearr_35056_35071[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35054_35068__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35051 === (5))){
var inst_35045 = (state_35050[(2)]);
var state_35050__$1 = (function (){var statearr_35057 = state_35050;
(statearr_35057[(8)] = inst_35045);

return statearr_35057;
})();
var statearr_35058_35072 = state_35050__$1;
(statearr_35058_35072[(2)] = null);

(statearr_35058_35072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35051 === (6))){
var inst_35040 = fugue.sampler.trigger_sample_BANG_.call(null,dest,actx);
var state_35050__$1 = state_35050;
var statearr_35059_35073 = state_35050__$1;
(statearr_35059_35073[(2)] = inst_35040);

(statearr_35059_35073[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35051 === (7))){
var inst_35039 = (state_35050[(7)]);
var inst_35042 = fugue.ramp.schedule_BANG_.call(null,detune_param,inst_35039);
var state_35050__$1 = state_35050;
var statearr_35060_35074 = state_35050__$1;
(statearr_35060_35074[(2)] = inst_35042);

(statearr_35060_35074[(1)] = (5));


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
});})(c__32644__auto___35065,ch,actx,detune_param,map__35027,map__35027__$1,param_name))
;
return ((function (switch__32549__auto__,c__32644__auto___35065,ch,actx,detune_param,map__35027,map__35027__$1,param_name){
return (function() {
var fugue$sampler$state_machine__32550__auto__ = null;
var fugue$sampler$state_machine__32550__auto____0 = (function (){
var statearr_35061 = [null,null,null,null,null,null,null,null,null];
(statearr_35061[(0)] = fugue$sampler$state_machine__32550__auto__);

(statearr_35061[(1)] = (1));

return statearr_35061;
});
var fugue$sampler$state_machine__32550__auto____1 = (function (state_35050){
while(true){
var ret_value__32551__auto__ = (function (){try{while(true){
var result__32552__auto__ = switch__32549__auto__.call(null,state_35050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32552__auto__;
}
break;
}
}catch (e35062){if((e35062 instanceof Object)){
var ex__32553__auto__ = e35062;
var statearr_35063_35075 = state_35050;
(statearr_35063_35075[(5)] = ex__32553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35076 = state_35050;
state_35050 = G__35076;
continue;
} else {
return ret_value__32551__auto__;
}
break;
}
});
fugue$sampler$state_machine__32550__auto__ = function(state_35050){
switch(arguments.length){
case 0:
return fugue$sampler$state_machine__32550__auto____0.call(this);
case 1:
return fugue$sampler$state_machine__32550__auto____1.call(this,state_35050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$sampler$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$sampler$state_machine__32550__auto____0;
fugue$sampler$state_machine__32550__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$sampler$state_machine__32550__auto____1;
return fugue$sampler$state_machine__32550__auto__;
})()
;})(switch__32549__auto__,c__32644__auto___35065,ch,actx,detune_param,map__35027,map__35027__$1,param_name))
})();
var state__32646__auto__ = (function (){var statearr_35064 = f__32645__auto__.call(null);
(statearr_35064[(6)] = c__32644__auto___35065);

return statearr_35064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32646__auto__);
});})(c__32644__auto___35065,ch,actx,detune_param,map__35027,map__35027__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),ch);
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,___$1){
return src.connect((function (){var target_obj_35077 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35079 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35080 = oops.state.prepare_state.call(null,target_obj_35077,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35080;

try{var next_obj_35078 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35077,(0),"offset",true,true,false))?(target_obj_35077["offset"]):null);
return next_obj_35078;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35079;
}})());
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__35081){
var map__35082 = p__35081;
var map__35082__$1 = (((((!((map__35082 == null))))?(((((map__35082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35082):map__35082);
var param_name = cljs.core.get.call(null,map__35082__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
return new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(src).connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),param_name))?(function (){var target_obj_35084 = dest;
var _STAR_runtime_state_STAR__orig_val__35085 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35086 = oops.state.prepare_state.call(null,target_obj_35084,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35086;

try{return oops.core.get_selector_dynamically.call(null,target_obj_35084,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35085;
}})():dest));
}));
fugue.sampler.note__GT_detune = (function fugue$sampler$note__GT_detune(note){
return ((100) * (note - (60)));
});
fugue.sampler.sampler = (function fugue$sampler$sampler(filename,trigger,detune){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.sampler","filename","fugue.sampler/filename",1571739795),filename], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.sampler","trigger","fugue.sampler/trigger",1938922045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger], null),"detune",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [detune], null)], null));
});

//# sourceMappingURL=sampler.js.map?rel=1601408407109
