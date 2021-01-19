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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__17303){
return cljs.core.map_QMARK_.call(null,G__17303);
}),(function (G__17303){
return cljs.core.contains_QMARK_.call(null,G__17303,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
})], null),(function (G__17303){
return ((cljs.core.map_QMARK_.call(null,G__17303)) && (cljs.core.contains_QMARK_.call(null,G__17303,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.synthdef.make_node,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (p__17304,p__17305){
var map__17306 = p__17304;
var map__17306__$1 = (((((!((map__17306 == null))))?(((((map__17306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17306):map__17306);
var actx = cljs.core.get.call(null,map__17306__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var buffer_cache = cljs.core.get.call(null,map__17306__$1,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648));
var map__17307 = p__17305;
var map__17307__$1 = (((((!((map__17307 == null))))?(((((map__17307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17307):map__17307);
var buffer_name = cljs.core.get.call(null,map__17307__$1,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174),(function (){var G__17310 = actx.createConstantSource();
G__17310.start();

return G__17310;
})(),new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162),cljs.core.get.call(null,buffer_cache,buffer_name),new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269),actx.createGain()], null);
}));
fugue.sampler.trigger_sample_BANG_ = (function fugue$sampler$trigger_sample_BANG_(sampler_node,actx){
var node = actx.createBufferSource();
var target_obj_17311_17319 = node;
var _STAR_runtime_state_STAR__orig_val__17313_17320 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17314_17321 = oops.state.prepare_state.call(null,target_obj_17311_17319,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17314_17321;

try{var parent_obj_17312_17322 = target_obj_17311_17319;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_17312_17322,(0),"buffer",true,true,true)){
(parent_obj_17312_17322["buffer"] = new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162).cljs$core$IFn$_invoke$arity$1(sampler_node));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17313_17320;
}
new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(sampler_node).connect((function (){var target_obj_17315 = node;
var _STAR_runtime_state_STAR__orig_val__17317 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17318 = oops.state.prepare_state.call(null,target_obj_17315,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17318;

try{var next_obj_17316 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17315,(0),"detune",true,true,false))?(target_obj_17315["detune"]):null);
return next_obj_17316;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17317;
}})());

node.connect(new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(sampler_node));

return node.start();
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,p__17323){
var map__17324 = p__17323;
var map__17324__$1 = (((((!((map__17324 == null))))?(((((map__17324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17324):map__17324);
var param_name = cljs.core.get.call(null,map__17324__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var ch = cljs.core.async.chan.call(null,(1));
var actx = (function (){var target_obj_17326 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__17328 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17329 = oops.state.prepare_state.call(null,target_obj_17326,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17329;

try{var next_obj_17327 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17326,(0),"context",true,true,false))?(target_obj_17326["context"]):null);
return next_obj_17327;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17328;
}})();
var detune_param = (function (){var target_obj_17330 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__17332 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17333 = oops.state.prepare_state.call(null,target_obj_17330,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17333;

try{var next_obj_17331 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17330,(0),"offset",true,true,false))?(target_obj_17330["offset"]):null);
return next_obj_17331;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17332;
}})();
var c__14920__auto___17362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14920__auto___17362,ch,actx,detune_param,map__17324,map__17324__$1,param_name){
return (function (){
var f__14921__auto__ = (function (){var switch__14825__auto__ = ((function (c__14920__auto___17362,ch,actx,detune_param,map__17324,map__17324__$1,param_name){
return (function (state_17347){
var state_val_17348 = (state_17347[(1)]);
if((state_val_17348 === (1))){
var state_17347__$1 = state_17347;
var statearr_17349_17363 = state_17347__$1;
(statearr_17349_17363[(2)] = null);

(statearr_17349_17363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (2))){
var state_17347__$1 = state_17347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17347__$1,(4),ch);
} else {
if((state_val_17348 === (3))){
var inst_17345 = (state_17347[(2)]);
var state_17347__$1 = state_17347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17347__$1,inst_17345);
} else {
if((state_val_17348 === (4))){
var inst_17336 = (state_17347[(2)]);
var state_17347__$1 = (function (){var statearr_17350 = state_17347;
(statearr_17350[(7)] = inst_17336);

return statearr_17350;
})();
var G__17351_17364 = param_name;
var G__17351_17365__$1 = (((G__17351_17364 instanceof cljs.core.Keyword))?G__17351_17364.fqn:null);
switch (G__17351_17365__$1) {
case "fugue.sampler/trigger":
var statearr_17352_17367 = state_17347__$1;
(statearr_17352_17367[(1)] = (6));


break;
case "fugue.sampler/detune":
var statearr_17353_17368 = state_17347__$1;
(statearr_17353_17368[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17351_17365__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (5))){
var inst_17342 = (state_17347[(2)]);
var state_17347__$1 = (function (){var statearr_17354 = state_17347;
(statearr_17354[(8)] = inst_17342);

return statearr_17354;
})();
var statearr_17355_17369 = state_17347__$1;
(statearr_17355_17369[(2)] = null);

(statearr_17355_17369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (6))){
var inst_17337 = fugue.sampler.trigger_sample_BANG_.call(null,dest,actx);
var state_17347__$1 = state_17347;
var statearr_17356_17370 = state_17347__$1;
(statearr_17356_17370[(2)] = inst_17337);

(statearr_17356_17370[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17348 === (7))){
var inst_17336 = (state_17347[(7)]);
var inst_17339 = fugue.ramp.schedule_BANG_.call(null,detune_param,inst_17336);
var state_17347__$1 = state_17347;
var statearr_17357_17371 = state_17347__$1;
(statearr_17357_17371[(2)] = inst_17339);

(statearr_17357_17371[(1)] = (5));


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
});})(c__14920__auto___17362,ch,actx,detune_param,map__17324,map__17324__$1,param_name))
;
return ((function (switch__14825__auto__,c__14920__auto___17362,ch,actx,detune_param,map__17324,map__17324__$1,param_name){
return (function() {
var fugue$sampler$state_machine__14826__auto__ = null;
var fugue$sampler$state_machine__14826__auto____0 = (function (){
var statearr_17358 = [null,null,null,null,null,null,null,null,null];
(statearr_17358[(0)] = fugue$sampler$state_machine__14826__auto__);

(statearr_17358[(1)] = (1));

return statearr_17358;
});
var fugue$sampler$state_machine__14826__auto____1 = (function (state_17347){
while(true){
var ret_value__14827__auto__ = (function (){try{while(true){
var result__14828__auto__ = switch__14825__auto__.call(null,state_17347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14828__auto__;
}
break;
}
}catch (e17359){if((e17359 instanceof Object)){
var ex__14829__auto__ = e17359;
var statearr_17360_17372 = state_17347;
(statearr_17360_17372[(5)] = ex__14829__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14827__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17373 = state_17347;
state_17347 = G__17373;
continue;
} else {
return ret_value__14827__auto__;
}
break;
}
});
fugue$sampler$state_machine__14826__auto__ = function(state_17347){
switch(arguments.length){
case 0:
return fugue$sampler$state_machine__14826__auto____0.call(this);
case 1:
return fugue$sampler$state_machine__14826__auto____1.call(this,state_17347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$sampler$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$sampler$state_machine__14826__auto____0;
fugue$sampler$state_machine__14826__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$sampler$state_machine__14826__auto____1;
return fugue$sampler$state_machine__14826__auto__;
})()
;})(switch__14825__auto__,c__14920__auto___17362,ch,actx,detune_param,map__17324,map__17324__$1,param_name))
})();
var state__14922__auto__ = (function (){var statearr_17361 = f__14921__auto__.call(null);
(statearr_17361[(6)] = c__14920__auto___17362);

return statearr_17361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14922__auto__);
});})(c__14920__auto___17362,ch,actx,detune_param,map__17324,map__17324__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),ch);
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,___$1){
return src.connect((function (){var target_obj_17374 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__17376 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17377 = oops.state.prepare_state.call(null,target_obj_17374,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17377;

try{var next_obj_17375 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_17374,(0),"offset",true,true,false))?(target_obj_17374["offset"]):null);
return next_obj_17375;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17376;
}})());
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__17378){
var map__17379 = p__17378;
var map__17379__$1 = (((((!((map__17379 == null))))?(((((map__17379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17379):map__17379);
var param_name = cljs.core.get.call(null,map__17379__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
return new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(src).connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),param_name))?(function (){var target_obj_17381 = dest;
var _STAR_runtime_state_STAR__orig_val__17382 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__17383 = oops.state.prepare_state.call(null,target_obj_17381,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__17383;

try{return oops.core.get_selector_dynamically.call(null,target_obj_17381,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__17382;
}})():dest));
}));
fugue.sampler.note__GT_detune = (function fugue$sampler$note__GT_detune(note){
return ((100) * (note - (60)));
});
fugue.sampler.sampler = (function fugue$sampler$sampler(buffer_name,trigger,detune){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486),buffer_name], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.sampler","trigger","fugue.sampler/trigger",1938922045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger], null),"detune",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [detune], null)], null));
});

//# sourceMappingURL=sampler.js.map?rel=1611075068030
