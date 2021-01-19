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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__15205){
return cljs.core.map_QMARK_.call(null,G__15205);
}),(function (G__15205){
return cljs.core.contains_QMARK_.call(null,G__15205,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
})], null),(function (G__15205){
return ((cljs.core.map_QMARK_.call(null,G__15205)) && (cljs.core.contains_QMARK_.call(null,G__15205,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.synthdef.make_node,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (p__15206,p__15207){
var map__15208 = p__15206;
var map__15208__$1 = (((((!((map__15208 == null))))?(((((map__15208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15208):map__15208);
var actx = cljs.core.get.call(null,map__15208__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var buffer_cache = cljs.core.get.call(null,map__15208__$1,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648));
var map__15209 = p__15207;
var map__15209__$1 = (((((!((map__15209 == null))))?(((((map__15209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15209):map__15209);
var buffer_name = cljs.core.get.call(null,map__15209__$1,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174),(function (){var G__15212 = actx.createConstantSource();
G__15212.start();

return G__15212;
})(),new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162),cljs.core.get.call(null,buffer_cache,buffer_name),new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269),actx.createGain()], null);
}));
fugue.sampler.trigger_sample_BANG_ = (function fugue$sampler$trigger_sample_BANG_(sampler_node,actx){
var node = actx.createBufferSource();
var target_obj_15213_15221 = node;
var _STAR_runtime_state_STAR__orig_val__15215_15222 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__15216_15223 = oops.state.prepare_state.call(null,target_obj_15213_15221,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__15216_15223;

try{var parent_obj_15214_15224 = target_obj_15213_15221;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_15214_15224,(0),"buffer",true,true,true)){
(parent_obj_15214_15224["buffer"] = new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162).cljs$core$IFn$_invoke$arity$1(sampler_node));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__15215_15222;
}
new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(sampler_node).connect((function (){var target_obj_15217 = node;
var _STAR_runtime_state_STAR__orig_val__15219 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__15220 = oops.state.prepare_state.call(null,target_obj_15217,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__15220;

try{var next_obj_15218 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_15217,(0),"detune",true,true,false))?(target_obj_15217["detune"]):null);
return next_obj_15218;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__15219;
}})());

node.connect(new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(sampler_node));

return node.start();
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,p__15225){
var map__15226 = p__15225;
var map__15226__$1 = (((((!((map__15226 == null))))?(((((map__15226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15226):map__15226);
var param_name = cljs.core.get.call(null,map__15226__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var ch = cljs.core.async.chan.call(null,(1));
var actx = (function (){var target_obj_15228 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__15230 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__15231 = oops.state.prepare_state.call(null,target_obj_15228,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__15231;

try{var next_obj_15229 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_15228,(0),"context",true,true,false))?(target_obj_15228["context"]):null);
return next_obj_15229;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__15230;
}})();
var detune_param = (function (){var target_obj_15232 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__15234 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__15235 = oops.state.prepare_state.call(null,target_obj_15232,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__15235;

try{var next_obj_15233 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_15232,(0),"offset",true,true,false))?(target_obj_15232["offset"]):null);
return next_obj_15233;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__15234;
}})();
var c__12822__auto___15264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12822__auto___15264,ch,actx,detune_param,map__15226,map__15226__$1,param_name){
return (function (){
var f__12823__auto__ = (function (){var switch__12727__auto__ = ((function (c__12822__auto___15264,ch,actx,detune_param,map__15226,map__15226__$1,param_name){
return (function (state_15249){
var state_val_15250 = (state_15249[(1)]);
if((state_val_15250 === (1))){
var state_15249__$1 = state_15249;
var statearr_15251_15265 = state_15249__$1;
(statearr_15251_15265[(2)] = null);

(statearr_15251_15265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (2))){
var state_15249__$1 = state_15249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15249__$1,(4),ch);
} else {
if((state_val_15250 === (3))){
var inst_15247 = (state_15249[(2)]);
var state_15249__$1 = state_15249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15249__$1,inst_15247);
} else {
if((state_val_15250 === (4))){
var inst_15238 = (state_15249[(2)]);
var state_15249__$1 = (function (){var statearr_15252 = state_15249;
(statearr_15252[(7)] = inst_15238);

return statearr_15252;
})();
var G__15253_15266 = param_name;
var G__15253_15267__$1 = (((G__15253_15266 instanceof cljs.core.Keyword))?G__15253_15266.fqn:null);
switch (G__15253_15267__$1) {
case "fugue.sampler/trigger":
var statearr_15254_15269 = state_15249__$1;
(statearr_15254_15269[(1)] = (6));


break;
case "fugue.sampler/detune":
var statearr_15255_15270 = state_15249__$1;
(statearr_15255_15270[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15253_15267__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (5))){
var inst_15244 = (state_15249[(2)]);
var state_15249__$1 = (function (){var statearr_15256 = state_15249;
(statearr_15256[(8)] = inst_15244);

return statearr_15256;
})();
var statearr_15257_15271 = state_15249__$1;
(statearr_15257_15271[(2)] = null);

(statearr_15257_15271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (6))){
var inst_15239 = fugue.sampler.trigger_sample_BANG_.call(null,dest,actx);
var state_15249__$1 = state_15249;
var statearr_15258_15272 = state_15249__$1;
(statearr_15258_15272[(2)] = inst_15239);

(statearr_15258_15272[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15250 === (7))){
var inst_15238 = (state_15249[(7)]);
var inst_15241 = fugue.ramp.schedule_BANG_.call(null,detune_param,inst_15238);
var state_15249__$1 = state_15249;
var statearr_15259_15273 = state_15249__$1;
(statearr_15259_15273[(2)] = inst_15241);

(statearr_15259_15273[(1)] = (5));


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
});})(c__12822__auto___15264,ch,actx,detune_param,map__15226,map__15226__$1,param_name))
;
return ((function (switch__12727__auto__,c__12822__auto___15264,ch,actx,detune_param,map__15226,map__15226__$1,param_name){
return (function() {
var fugue$sampler$state_machine__12728__auto__ = null;
var fugue$sampler$state_machine__12728__auto____0 = (function (){
var statearr_15260 = [null,null,null,null,null,null,null,null,null];
(statearr_15260[(0)] = fugue$sampler$state_machine__12728__auto__);

(statearr_15260[(1)] = (1));

return statearr_15260;
});
var fugue$sampler$state_machine__12728__auto____1 = (function (state_15249){
while(true){
var ret_value__12729__auto__ = (function (){try{while(true){
var result__12730__auto__ = switch__12727__auto__.call(null,state_15249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12730__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12730__auto__;
}
break;
}
}catch (e15261){if((e15261 instanceof Object)){
var ex__12731__auto__ = e15261;
var statearr_15262_15274 = state_15249;
(statearr_15262_15274[(5)] = ex__12731__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12729__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15275 = state_15249;
state_15249 = G__15275;
continue;
} else {
return ret_value__12729__auto__;
}
break;
}
});
fugue$sampler$state_machine__12728__auto__ = function(state_15249){
switch(arguments.length){
case 0:
return fugue$sampler$state_machine__12728__auto____0.call(this);
case 1:
return fugue$sampler$state_machine__12728__auto____1.call(this,state_15249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$sampler$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$sampler$state_machine__12728__auto____0;
fugue$sampler$state_machine__12728__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$sampler$state_machine__12728__auto____1;
return fugue$sampler$state_machine__12728__auto__;
})()
;})(switch__12727__auto__,c__12822__auto___15264,ch,actx,detune_param,map__15226,map__15226__$1,param_name))
})();
var state__12824__auto__ = (function (){var statearr_15263 = f__12823__auto__.call(null);
(statearr_15263[(6)] = c__12822__auto___15264);

return statearr_15263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12824__auto__);
});})(c__12822__auto___15264,ch,actx,detune_param,map__15226,map__15226__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),ch);
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,___$1){
return src.connect((function (){var target_obj_15276 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__15278 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__15279 = oops.state.prepare_state.call(null,target_obj_15276,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__15279;

try{var next_obj_15277 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_15276,(0),"offset",true,true,false))?(target_obj_15276["offset"]):null);
return next_obj_15277;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__15278;
}})());
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__15280){
var map__15281 = p__15280;
var map__15281__$1 = (((((!((map__15281 == null))))?(((((map__15281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15281):map__15281);
var param_name = cljs.core.get.call(null,map__15281__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
return new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(src).connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),param_name))?(function (){var target_obj_15283 = dest;
var _STAR_runtime_state_STAR__orig_val__15284 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__15285 = oops.state.prepare_state.call(null,target_obj_15283,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__15285;

try{return oops.core.get_selector_dynamically.call(null,target_obj_15283,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__15284;
}})():dest));
}));
fugue.sampler.note__GT_detune = (function fugue$sampler$note__GT_detune(note){
return ((100) * (note - (60)));
});
fugue.sampler.sampler = (function fugue$sampler$sampler(buffer_name,trigger,detune){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486),buffer_name], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.sampler","trigger","fugue.sampler/trigger",1938922045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger], null),"detune",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [detune], null)], null));
});

//# sourceMappingURL=sampler.js.map?rel=1611069718517
