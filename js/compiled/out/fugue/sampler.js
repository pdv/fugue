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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35226){
return cljs.core.map_QMARK_.call(null,G__35226);
}),(function (G__35226){
return cljs.core.contains_QMARK_.call(null,G__35226,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
})], null),(function (G__35226){
return ((cljs.core.map_QMARK_.call(null,G__35226)) && (cljs.core.contains_QMARK_.call(null,G__35226,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.synthdef.make_node,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (p__35227,p__35228){
var map__35229 = p__35227;
var map__35229__$1 = (((((!((map__35229 == null))))?(((((map__35229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35229):map__35229);
var actx = cljs.core.get.call(null,map__35229__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var buffer_cache = cljs.core.get.call(null,map__35229__$1,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648));
var map__35230 = p__35228;
var map__35230__$1 = (((((!((map__35230 == null))))?(((((map__35230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35230):map__35230);
var buffer_name = cljs.core.get.call(null,map__35230__$1,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174),(function (){var G__35233 = actx.createConstantSource();
G__35233.start();

return G__35233;
})(),new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162),cljs.core.get.call(null,buffer_cache,buffer_name),new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269),actx.createGain()], null);
}));
fugue.sampler.trigger_sample_BANG_ = (function fugue$sampler$trigger_sample_BANG_(sampler_node,actx){
var node = actx.createBufferSource();
var target_obj_35234_35242 = node;
var _STAR_runtime_state_STAR__orig_val__35236_35243 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35237_35244 = oops.state.prepare_state.call(null,target_obj_35234_35242,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35237_35244;

try{var parent_obj_35235_35245 = target_obj_35234_35242;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_35235_35245,(0),"buffer",true,true,true)){
(parent_obj_35235_35245["buffer"] = new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162).cljs$core$IFn$_invoke$arity$1(sampler_node));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35236_35243;
}
new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(sampler_node).connect((function (){var target_obj_35238 = node;
var _STAR_runtime_state_STAR__orig_val__35240 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35241 = oops.state.prepare_state.call(null,target_obj_35238,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35241;

try{var next_obj_35239 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35238,(0),"detune",true,true,false))?(target_obj_35238["detune"]):null);
return next_obj_35239;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35240;
}})());

node.connect(new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(sampler_node));

return node.start();
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,p__35246){
var map__35247 = p__35246;
var map__35247__$1 = (((((!((map__35247 == null))))?(((((map__35247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35247):map__35247);
var param_name = cljs.core.get.call(null,map__35247__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var ch = cljs.core.async.chan.call(null,(1));
var actx = (function (){var target_obj_35249 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35251 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35252 = oops.state.prepare_state.call(null,target_obj_35249,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35252;

try{var next_obj_35250 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35249,(0),"context",true,true,false))?(target_obj_35249["context"]):null);
return next_obj_35250;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35251;
}})();
var detune_param = (function (){var target_obj_35253 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35255 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35256 = oops.state.prepare_state.call(null,target_obj_35253,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35256;

try{var next_obj_35254 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35253,(0),"offset",true,true,false))?(target_obj_35253["offset"]):null);
return next_obj_35254;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35255;
}})();
var c__32685__auto___35285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___35285,ch,actx,detune_param,map__35247,map__35247__$1,param_name){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___35285,ch,actx,detune_param,map__35247,map__35247__$1,param_name){
return (function (state_35270){
var state_val_35271 = (state_35270[(1)]);
if((state_val_35271 === (1))){
var state_35270__$1 = state_35270;
var statearr_35272_35286 = state_35270__$1;
(statearr_35272_35286[(2)] = null);

(statearr_35272_35286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (2))){
var state_35270__$1 = state_35270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35270__$1,(4),ch);
} else {
if((state_val_35271 === (3))){
var inst_35268 = (state_35270[(2)]);
var state_35270__$1 = state_35270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35270__$1,inst_35268);
} else {
if((state_val_35271 === (4))){
var inst_35259 = (state_35270[(2)]);
var state_35270__$1 = (function (){var statearr_35273 = state_35270;
(statearr_35273[(7)] = inst_35259);

return statearr_35273;
})();
var G__35274_35287 = param_name;
var G__35274_35288__$1 = (((G__35274_35287 instanceof cljs.core.Keyword))?G__35274_35287.fqn:null);
switch (G__35274_35288__$1) {
case "fugue.sampler/trigger":
var statearr_35275_35290 = state_35270__$1;
(statearr_35275_35290[(1)] = (6));


break;
case "fugue.sampler/detune":
var statearr_35276_35291 = state_35270__$1;
(statearr_35276_35291[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35274_35288__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (5))){
var inst_35265 = (state_35270[(2)]);
var state_35270__$1 = (function (){var statearr_35277 = state_35270;
(statearr_35277[(8)] = inst_35265);

return statearr_35277;
})();
var statearr_35278_35292 = state_35270__$1;
(statearr_35278_35292[(2)] = null);

(statearr_35278_35292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (6))){
var inst_35260 = fugue.sampler.trigger_sample_BANG_.call(null,dest,actx);
var state_35270__$1 = state_35270;
var statearr_35279_35293 = state_35270__$1;
(statearr_35279_35293[(2)] = inst_35260);

(statearr_35279_35293[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35271 === (7))){
var inst_35259 = (state_35270[(7)]);
var inst_35262 = fugue.ramp.schedule_BANG_.call(null,detune_param,inst_35259);
var state_35270__$1 = state_35270;
var statearr_35280_35294 = state_35270__$1;
(statearr_35280_35294[(2)] = inst_35262);

(statearr_35280_35294[(1)] = (5));


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
});})(c__32685__auto___35285,ch,actx,detune_param,map__35247,map__35247__$1,param_name))
;
return ((function (switch__32590__auto__,c__32685__auto___35285,ch,actx,detune_param,map__35247,map__35247__$1,param_name){
return (function() {
var fugue$sampler$state_machine__32591__auto__ = null;
var fugue$sampler$state_machine__32591__auto____0 = (function (){
var statearr_35281 = [null,null,null,null,null,null,null,null,null];
(statearr_35281[(0)] = fugue$sampler$state_machine__32591__auto__);

(statearr_35281[(1)] = (1));

return statearr_35281;
});
var fugue$sampler$state_machine__32591__auto____1 = (function (state_35270){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_35270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e35282){if((e35282 instanceof Object)){
var ex__32594__auto__ = e35282;
var statearr_35283_35295 = state_35270;
(statearr_35283_35295[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35296 = state_35270;
state_35270 = G__35296;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$sampler$state_machine__32591__auto__ = function(state_35270){
switch(arguments.length){
case 0:
return fugue$sampler$state_machine__32591__auto____0.call(this);
case 1:
return fugue$sampler$state_machine__32591__auto____1.call(this,state_35270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$sampler$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$sampler$state_machine__32591__auto____0;
fugue$sampler$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$sampler$state_machine__32591__auto____1;
return fugue$sampler$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___35285,ch,actx,detune_param,map__35247,map__35247__$1,param_name))
})();
var state__32687__auto__ = (function (){var statearr_35284 = f__32686__auto__.call(null);
(statearr_35284[(6)] = c__32685__auto___35285);

return statearr_35284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___35285,ch,actx,detune_param,map__35247,map__35247__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),ch);
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,___$1){
return src.connect((function (){var target_obj_35297 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35299 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35300 = oops.state.prepare_state.call(null,target_obj_35297,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35300;

try{var next_obj_35298 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35297,(0),"offset",true,true,false))?(target_obj_35297["offset"]):null);
return next_obj_35298;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35299;
}})());
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__35301){
var map__35302 = p__35301;
var map__35302__$1 = (((((!((map__35302 == null))))?(((((map__35302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35302):map__35302);
var param_name = cljs.core.get.call(null,map__35302__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
return new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(src).connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),param_name))?(function (){var target_obj_35304 = dest;
var _STAR_runtime_state_STAR__orig_val__35305 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35306 = oops.state.prepare_state.call(null,target_obj_35304,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35306;

try{return oops.core.get_selector_dynamically.call(null,target_obj_35304,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35305;
}})():dest));
}));
fugue.sampler.note__GT_detune = (function fugue$sampler$note__GT_detune(note){
return ((100) * (note - (60)));
});
fugue.sampler.sampler = (function fugue$sampler$sampler(buffer_name,trigger,detune){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486),buffer_name], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.sampler","trigger","fugue.sampler/trigger",1938922045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger], null),"detune",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [detune], null)], null));
});

//# sourceMappingURL=sampler.js.map?rel=1610304476995
