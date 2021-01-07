// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.sampler');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('oops.core');
goog.require('fugue.audio');
goog.require('fugue.buffer');
goog.require('fugue.chan');
goog.require('fugue.ramp');
goog.require('fugue.synthdef');
cljs.core._add_method.call(null,fugue.synthdef.node_spec,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35048){
return cljs.core.map_QMARK_.call(null,G__35048);
}),(function (G__35048){
return cljs.core.contains_QMARK_.call(null,G__35048,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
})], null),(function (G__35048){
return ((cljs.core.map_QMARK_.call(null,G__35048)) && (cljs.core.contains_QMARK_.call(null,G__35048,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.synthdef.make_node,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (p__35049,p__35050){
var map__35051 = p__35049;
var map__35051__$1 = (((((!((map__35051 == null))))?(((((map__35051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35051):map__35051);
var actx = cljs.core.get.call(null,map__35051__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var buffer_cache = cljs.core.get.call(null,map__35051__$1,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648));
var map__35052 = p__35050;
var map__35052__$1 = (((((!((map__35052 == null))))?(((((map__35052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35052):map__35052);
var buffer_name = cljs.core.get.call(null,map__35052__$1,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174),(function (){var G__35055 = actx.createConstantSource();
G__35055.start();

return G__35055;
})(),new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162),cljs.core.get.call(null,buffer_cache,buffer_name),new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269),actx.createGain()], null);
}));
fugue.sampler.trigger_sample_BANG_ = (function fugue$sampler$trigger_sample_BANG_(sampler_node,actx){
var node = actx.createBufferSource();
var target_obj_35056_35064 = node;
var _STAR_runtime_state_STAR__orig_val__35058_35065 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35059_35066 = oops.state.prepare_state.call(null,target_obj_35056_35064,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35059_35066;

try{var parent_obj_35057_35067 = target_obj_35056_35064;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_35057_35067,(0),"buffer",true,true,true)){
(parent_obj_35057_35067["buffer"] = new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162).cljs$core$IFn$_invoke$arity$1(sampler_node));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35058_35065;
}
new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(sampler_node).connect((function (){var target_obj_35060 = node;
var _STAR_runtime_state_STAR__orig_val__35062 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35063 = oops.state.prepare_state.call(null,target_obj_35060,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35063;

try{var next_obj_35061 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35060,(0),"detune",true,true,false))?(target_obj_35060["detune"]):null);
return next_obj_35061;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35062;
}})());

node.connect(new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(sampler_node));

return node.start();
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,p__35068){
var map__35069 = p__35068;
var map__35069__$1 = (((((!((map__35069 == null))))?(((((map__35069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35069):map__35069);
var param_name = cljs.core.get.call(null,map__35069__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var ch = cljs.core.async.chan.call(null,(1));
var actx = (function (){var target_obj_35071 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35073 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35074 = oops.state.prepare_state.call(null,target_obj_35071,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35074;

try{var next_obj_35072 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35071,(0),"context",true,true,false))?(target_obj_35071["context"]):null);
return next_obj_35072;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35073;
}})();
var detune_param = (function (){var target_obj_35075 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35077 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35078 = oops.state.prepare_state.call(null,target_obj_35075,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35078;

try{var next_obj_35076 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35075,(0),"offset",true,true,false))?(target_obj_35075["offset"]):null);
return next_obj_35076;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35077;
}})();
var c__32685__auto___35107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___35107,ch,actx,detune_param,map__35069,map__35069__$1,param_name){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___35107,ch,actx,detune_param,map__35069,map__35069__$1,param_name){
return (function (state_35092){
var state_val_35093 = (state_35092[(1)]);
if((state_val_35093 === (1))){
var state_35092__$1 = state_35092;
var statearr_35094_35108 = state_35092__$1;
(statearr_35094_35108[(2)] = null);

(statearr_35094_35108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (2))){
var state_35092__$1 = state_35092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35092__$1,(4),ch);
} else {
if((state_val_35093 === (3))){
var inst_35090 = (state_35092[(2)]);
var state_35092__$1 = state_35092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35092__$1,inst_35090);
} else {
if((state_val_35093 === (4))){
var inst_35081 = (state_35092[(2)]);
var state_35092__$1 = (function (){var statearr_35095 = state_35092;
(statearr_35095[(7)] = inst_35081);

return statearr_35095;
})();
var G__35096_35109 = param_name;
var G__35096_35110__$1 = (((G__35096_35109 instanceof cljs.core.Keyword))?G__35096_35109.fqn:null);
switch (G__35096_35110__$1) {
case "fugue.sampler/trigger":
var statearr_35097_35112 = state_35092__$1;
(statearr_35097_35112[(1)] = (6));


break;
case "fugue.sampler/detune":
var statearr_35098_35113 = state_35092__$1;
(statearr_35098_35113[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35096_35110__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (5))){
var inst_35087 = (state_35092[(2)]);
var state_35092__$1 = (function (){var statearr_35099 = state_35092;
(statearr_35099[(8)] = inst_35087);

return statearr_35099;
})();
var statearr_35100_35114 = state_35092__$1;
(statearr_35100_35114[(2)] = null);

(statearr_35100_35114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (6))){
var inst_35082 = fugue.sampler.trigger_sample_BANG_.call(null,dest,actx);
var state_35092__$1 = state_35092;
var statearr_35101_35115 = state_35092__$1;
(statearr_35101_35115[(2)] = inst_35082);

(statearr_35101_35115[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (7))){
var inst_35081 = (state_35092[(7)]);
var inst_35084 = fugue.ramp.schedule_BANG_.call(null,detune_param,inst_35081);
var state_35092__$1 = state_35092;
var statearr_35102_35116 = state_35092__$1;
(statearr_35102_35116[(2)] = inst_35084);

(statearr_35102_35116[(1)] = (5));


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
});})(c__32685__auto___35107,ch,actx,detune_param,map__35069,map__35069__$1,param_name))
;
return ((function (switch__32590__auto__,c__32685__auto___35107,ch,actx,detune_param,map__35069,map__35069__$1,param_name){
return (function() {
var fugue$sampler$state_machine__32591__auto__ = null;
var fugue$sampler$state_machine__32591__auto____0 = (function (){
var statearr_35103 = [null,null,null,null,null,null,null,null,null];
(statearr_35103[(0)] = fugue$sampler$state_machine__32591__auto__);

(statearr_35103[(1)] = (1));

return statearr_35103;
});
var fugue$sampler$state_machine__32591__auto____1 = (function (state_35092){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_35092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e35104){if((e35104 instanceof Object)){
var ex__32594__auto__ = e35104;
var statearr_35105_35117 = state_35092;
(statearr_35105_35117[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35118 = state_35092;
state_35092 = G__35118;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$sampler$state_machine__32591__auto__ = function(state_35092){
switch(arguments.length){
case 0:
return fugue$sampler$state_machine__32591__auto____0.call(this);
case 1:
return fugue$sampler$state_machine__32591__auto____1.call(this,state_35092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$sampler$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$sampler$state_machine__32591__auto____0;
fugue$sampler$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$sampler$state_machine__32591__auto____1;
return fugue$sampler$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___35107,ch,actx,detune_param,map__35069,map__35069__$1,param_name))
})();
var state__32687__auto__ = (function (){var statearr_35106 = f__32686__auto__.call(null);
(statearr_35106[(6)] = c__32685__auto___35107);

return statearr_35106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___35107,ch,actx,detune_param,map__35069,map__35069__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),ch);
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,___$1){
return src.connect((function (){var target_obj_35119 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35121 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35122 = oops.state.prepare_state.call(null,target_obj_35119,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35122;

try{var next_obj_35120 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35119,(0),"offset",true,true,false))?(target_obj_35119["offset"]):null);
return next_obj_35120;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35121;
}})());
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__35123){
var map__35124 = p__35123;
var map__35124__$1 = (((((!((map__35124 == null))))?(((((map__35124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35124):map__35124);
var param_name = cljs.core.get.call(null,map__35124__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
return new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(src).connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),param_name))?(function (){var target_obj_35126 = dest;
var _STAR_runtime_state_STAR__orig_val__35127 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35128 = oops.state.prepare_state.call(null,target_obj_35126,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35128;

try{return oops.core.get_selector_dynamically.call(null,target_obj_35126,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35127;
}})():dest));
}));
fugue.sampler.note__GT_detune = (function fugue$sampler$note__GT_detune(note){
return ((100) * (note - (60)));
});
fugue.sampler.sampler = (function fugue$sampler$sampler(buffer_name,trigger,detune){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486),buffer_name], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.sampler","trigger","fugue.sampler/trigger",1938922045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger], null),"detune",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [detune], null)], null));
});

//# sourceMappingURL=sampler.js.map?rel=1610051528966
