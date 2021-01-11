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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35183){
return cljs.core.map_QMARK_.call(null,G__35183);
}),(function (G__35183){
return cljs.core.contains_QMARK_.call(null,G__35183,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
})], null),(function (G__35183){
return ((cljs.core.map_QMARK_.call(null,G__35183)) && (cljs.core.contains_QMARK_.call(null,G__35183,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.synthdef.make_node,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (p__35184,p__35185){
var map__35186 = p__35184;
var map__35186__$1 = (((((!((map__35186 == null))))?(((((map__35186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35186):map__35186);
var actx = cljs.core.get.call(null,map__35186__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var buffer_cache = cljs.core.get.call(null,map__35186__$1,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648));
var map__35187 = p__35185;
var map__35187__$1 = (((((!((map__35187 == null))))?(((((map__35187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35187):map__35187);
var buffer_name = cljs.core.get.call(null,map__35187__$1,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174),(function (){var G__35190 = actx.createConstantSource();
G__35190.start();

return G__35190;
})(),new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162),cljs.core.get.call(null,buffer_cache,buffer_name),new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269),actx.createGain()], null);
}));
fugue.sampler.trigger_sample_BANG_ = (function fugue$sampler$trigger_sample_BANG_(sampler_node,actx){
var node = actx.createBufferSource();
var target_obj_35191_35199 = node;
var _STAR_runtime_state_STAR__orig_val__35193_35200 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35194_35201 = oops.state.prepare_state.call(null,target_obj_35191_35199,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35194_35201;

try{var parent_obj_35192_35202 = target_obj_35191_35199;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_35192_35202,(0),"buffer",true,true,true)){
(parent_obj_35192_35202["buffer"] = new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162).cljs$core$IFn$_invoke$arity$1(sampler_node));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35193_35200;
}
new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(sampler_node).connect((function (){var target_obj_35195 = node;
var _STAR_runtime_state_STAR__orig_val__35197 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35198 = oops.state.prepare_state.call(null,target_obj_35195,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35198;

try{var next_obj_35196 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35195,(0),"detune",true,true,false))?(target_obj_35195["detune"]):null);
return next_obj_35196;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35197;
}})());

node.connect(new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(sampler_node));

return node.start();
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,p__35203){
var map__35204 = p__35203;
var map__35204__$1 = (((((!((map__35204 == null))))?(((((map__35204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35204):map__35204);
var param_name = cljs.core.get.call(null,map__35204__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var ch = cljs.core.async.chan.call(null,(1));
var actx = (function (){var target_obj_35206 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35208 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35209 = oops.state.prepare_state.call(null,target_obj_35206,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35209;

try{var next_obj_35207 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35206,(0),"context",true,true,false))?(target_obj_35206["context"]):null);
return next_obj_35207;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35208;
}})();
var detune_param = (function (){var target_obj_35210 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35212 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35213 = oops.state.prepare_state.call(null,target_obj_35210,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35213;

try{var next_obj_35211 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35210,(0),"offset",true,true,false))?(target_obj_35210["offset"]):null);
return next_obj_35211;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35212;
}})();
var c__32691__auto___35242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32691__auto___35242,ch,actx,detune_param,map__35204,map__35204__$1,param_name){
return (function (){
var f__32692__auto__ = (function (){var switch__32596__auto__ = ((function (c__32691__auto___35242,ch,actx,detune_param,map__35204,map__35204__$1,param_name){
return (function (state_35227){
var state_val_35228 = (state_35227[(1)]);
if((state_val_35228 === (1))){
var state_35227__$1 = state_35227;
var statearr_35229_35243 = state_35227__$1;
(statearr_35229_35243[(2)] = null);

(statearr_35229_35243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (2))){
var state_35227__$1 = state_35227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35227__$1,(4),ch);
} else {
if((state_val_35228 === (3))){
var inst_35225 = (state_35227[(2)]);
var state_35227__$1 = state_35227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35227__$1,inst_35225);
} else {
if((state_val_35228 === (4))){
var inst_35216 = (state_35227[(2)]);
var state_35227__$1 = (function (){var statearr_35230 = state_35227;
(statearr_35230[(7)] = inst_35216);

return statearr_35230;
})();
var G__35231_35244 = param_name;
var G__35231_35245__$1 = (((G__35231_35244 instanceof cljs.core.Keyword))?G__35231_35244.fqn:null);
switch (G__35231_35245__$1) {
case "fugue.sampler/trigger":
var statearr_35232_35247 = state_35227__$1;
(statearr_35232_35247[(1)] = (6));


break;
case "fugue.sampler/detune":
var statearr_35233_35248 = state_35227__$1;
(statearr_35233_35248[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35231_35245__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (5))){
var inst_35222 = (state_35227[(2)]);
var state_35227__$1 = (function (){var statearr_35234 = state_35227;
(statearr_35234[(8)] = inst_35222);

return statearr_35234;
})();
var statearr_35235_35249 = state_35227__$1;
(statearr_35235_35249[(2)] = null);

(statearr_35235_35249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (6))){
var inst_35217 = fugue.sampler.trigger_sample_BANG_.call(null,dest,actx);
var state_35227__$1 = state_35227;
var statearr_35236_35250 = state_35227__$1;
(statearr_35236_35250[(2)] = inst_35217);

(statearr_35236_35250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35228 === (7))){
var inst_35216 = (state_35227[(7)]);
var inst_35219 = fugue.ramp.schedule_BANG_.call(null,detune_param,inst_35216);
var state_35227__$1 = state_35227;
var statearr_35237_35251 = state_35227__$1;
(statearr_35237_35251[(2)] = inst_35219);

(statearr_35237_35251[(1)] = (5));


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
});})(c__32691__auto___35242,ch,actx,detune_param,map__35204,map__35204__$1,param_name))
;
return ((function (switch__32596__auto__,c__32691__auto___35242,ch,actx,detune_param,map__35204,map__35204__$1,param_name){
return (function() {
var fugue$sampler$state_machine__32597__auto__ = null;
var fugue$sampler$state_machine__32597__auto____0 = (function (){
var statearr_35238 = [null,null,null,null,null,null,null,null,null];
(statearr_35238[(0)] = fugue$sampler$state_machine__32597__auto__);

(statearr_35238[(1)] = (1));

return statearr_35238;
});
var fugue$sampler$state_machine__32597__auto____1 = (function (state_35227){
while(true){
var ret_value__32598__auto__ = (function (){try{while(true){
var result__32599__auto__ = switch__32596__auto__.call(null,state_35227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32599__auto__;
}
break;
}
}catch (e35239){if((e35239 instanceof Object)){
var ex__32600__auto__ = e35239;
var statearr_35240_35252 = state_35227;
(statearr_35240_35252[(5)] = ex__32600__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32598__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35253 = state_35227;
state_35227 = G__35253;
continue;
} else {
return ret_value__32598__auto__;
}
break;
}
});
fugue$sampler$state_machine__32597__auto__ = function(state_35227){
switch(arguments.length){
case 0:
return fugue$sampler$state_machine__32597__auto____0.call(this);
case 1:
return fugue$sampler$state_machine__32597__auto____1.call(this,state_35227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$sampler$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$sampler$state_machine__32597__auto____0;
fugue$sampler$state_machine__32597__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$sampler$state_machine__32597__auto____1;
return fugue$sampler$state_machine__32597__auto__;
})()
;})(switch__32596__auto__,c__32691__auto___35242,ch,actx,detune_param,map__35204,map__35204__$1,param_name))
})();
var state__32693__auto__ = (function (){var statearr_35241 = f__32692__auto__.call(null);
(statearr_35241[(6)] = c__32691__auto___35242);

return statearr_35241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32693__auto__);
});})(c__32691__auto___35242,ch,actx,detune_param,map__35204,map__35204__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),ch);
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,___$1){
return src.connect((function (){var target_obj_35254 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35256 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35257 = oops.state.prepare_state.call(null,target_obj_35254,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35257;

try{var next_obj_35255 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35254,(0),"offset",true,true,false))?(target_obj_35254["offset"]):null);
return next_obj_35255;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35256;
}})());
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__35258){
var map__35259 = p__35258;
var map__35259__$1 = (((((!((map__35259 == null))))?(((((map__35259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35259):map__35259);
var param_name = cljs.core.get.call(null,map__35259__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
return new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(src).connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),param_name))?(function (){var target_obj_35261 = dest;
var _STAR_runtime_state_STAR__orig_val__35262 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35263 = oops.state.prepare_state.call(null,target_obj_35261,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35263;

try{return oops.core.get_selector_dynamically.call(null,target_obj_35261,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35262;
}})():dest));
}));
fugue.sampler.note__GT_detune = (function fugue$sampler$note__GT_detune(note){
return ((100) * (note - (60)));
});
fugue.sampler.sampler = (function fugue$sampler$sampler(buffer_name,trigger,detune){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486),buffer_name], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.sampler","trigger","fugue.sampler/trigger",1938922045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger], null),"detune",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [detune], null)], null));
});

//# sourceMappingURL=sampler.js.map?rel=1610334750607
