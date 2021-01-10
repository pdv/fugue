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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35212){
return cljs.core.map_QMARK_.call(null,G__35212);
}),(function (G__35212){
return cljs.core.contains_QMARK_.call(null,G__35212,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
})], null),(function (G__35212){
return ((cljs.core.map_QMARK_.call(null,G__35212)) && (cljs.core.contains_QMARK_.call(null,G__35212,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.synthdef.make_node,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (p__35213,p__35214){
var map__35215 = p__35213;
var map__35215__$1 = (((((!((map__35215 == null))))?(((((map__35215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35215):map__35215);
var actx = cljs.core.get.call(null,map__35215__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var buffer_cache = cljs.core.get.call(null,map__35215__$1,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648));
var map__35216 = p__35214;
var map__35216__$1 = (((((!((map__35216 == null))))?(((((map__35216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35216):map__35216);
var buffer_name = cljs.core.get.call(null,map__35216__$1,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174),(function (){var G__35219 = actx.createConstantSource();
G__35219.start();

return G__35219;
})(),new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162),cljs.core.get.call(null,buffer_cache,buffer_name),new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269),actx.createGain()], null);
}));
fugue.sampler.trigger_sample_BANG_ = (function fugue$sampler$trigger_sample_BANG_(sampler_node,actx){
var node = actx.createBufferSource();
var target_obj_35220_35228 = node;
var _STAR_runtime_state_STAR__orig_val__35222_35229 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35223_35230 = oops.state.prepare_state.call(null,target_obj_35220_35228,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35223_35230;

try{var parent_obj_35221_35231 = target_obj_35220_35228;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_35221_35231,(0),"buffer",true,true,true)){
(parent_obj_35221_35231["buffer"] = new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162).cljs$core$IFn$_invoke$arity$1(sampler_node));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35222_35229;
}
new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(sampler_node).connect((function (){var target_obj_35224 = node;
var _STAR_runtime_state_STAR__orig_val__35226 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35227 = oops.state.prepare_state.call(null,target_obj_35224,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35227;

try{var next_obj_35225 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35224,(0),"detune",true,true,false))?(target_obj_35224["detune"]):null);
return next_obj_35225;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35226;
}})());

node.connect(new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(sampler_node));

return node.start();
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,p__35232){
var map__35233 = p__35232;
var map__35233__$1 = (((((!((map__35233 == null))))?(((((map__35233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35233):map__35233);
var param_name = cljs.core.get.call(null,map__35233__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var ch = cljs.core.async.chan.call(null,(1));
var actx = (function (){var target_obj_35235 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35237 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35238 = oops.state.prepare_state.call(null,target_obj_35235,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35238;

try{var next_obj_35236 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35235,(0),"context",true,true,false))?(target_obj_35235["context"]):null);
return next_obj_35236;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35237;
}})();
var detune_param = (function (){var target_obj_35239 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35241 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35242 = oops.state.prepare_state.call(null,target_obj_35239,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35242;

try{var next_obj_35240 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35239,(0),"offset",true,true,false))?(target_obj_35239["offset"]):null);
return next_obj_35240;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35241;
}})();
var c__32685__auto___35271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___35271,ch,actx,detune_param,map__35233,map__35233__$1,param_name){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___35271,ch,actx,detune_param,map__35233,map__35233__$1,param_name){
return (function (state_35256){
var state_val_35257 = (state_35256[(1)]);
if((state_val_35257 === (1))){
var state_35256__$1 = state_35256;
var statearr_35258_35272 = state_35256__$1;
(statearr_35258_35272[(2)] = null);

(statearr_35258_35272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (2))){
var state_35256__$1 = state_35256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35256__$1,(4),ch);
} else {
if((state_val_35257 === (3))){
var inst_35254 = (state_35256[(2)]);
var state_35256__$1 = state_35256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35256__$1,inst_35254);
} else {
if((state_val_35257 === (4))){
var inst_35245 = (state_35256[(2)]);
var state_35256__$1 = (function (){var statearr_35259 = state_35256;
(statearr_35259[(7)] = inst_35245);

return statearr_35259;
})();
var G__35260_35273 = param_name;
var G__35260_35274__$1 = (((G__35260_35273 instanceof cljs.core.Keyword))?G__35260_35273.fqn:null);
switch (G__35260_35274__$1) {
case "fugue.sampler/trigger":
var statearr_35261_35276 = state_35256__$1;
(statearr_35261_35276[(1)] = (6));


break;
case "fugue.sampler/detune":
var statearr_35262_35277 = state_35256__$1;
(statearr_35262_35277[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35260_35274__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (5))){
var inst_35251 = (state_35256[(2)]);
var state_35256__$1 = (function (){var statearr_35263 = state_35256;
(statearr_35263[(8)] = inst_35251);

return statearr_35263;
})();
var statearr_35264_35278 = state_35256__$1;
(statearr_35264_35278[(2)] = null);

(statearr_35264_35278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (6))){
var inst_35246 = fugue.sampler.trigger_sample_BANG_.call(null,dest,actx);
var state_35256__$1 = state_35256;
var statearr_35265_35279 = state_35256__$1;
(statearr_35265_35279[(2)] = inst_35246);

(statearr_35265_35279[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (7))){
var inst_35245 = (state_35256[(7)]);
var inst_35248 = fugue.ramp.schedule_BANG_.call(null,detune_param,inst_35245);
var state_35256__$1 = state_35256;
var statearr_35266_35280 = state_35256__$1;
(statearr_35266_35280[(2)] = inst_35248);

(statearr_35266_35280[(1)] = (5));


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
});})(c__32685__auto___35271,ch,actx,detune_param,map__35233,map__35233__$1,param_name))
;
return ((function (switch__32590__auto__,c__32685__auto___35271,ch,actx,detune_param,map__35233,map__35233__$1,param_name){
return (function() {
var fugue$sampler$state_machine__32591__auto__ = null;
var fugue$sampler$state_machine__32591__auto____0 = (function (){
var statearr_35267 = [null,null,null,null,null,null,null,null,null];
(statearr_35267[(0)] = fugue$sampler$state_machine__32591__auto__);

(statearr_35267[(1)] = (1));

return statearr_35267;
});
var fugue$sampler$state_machine__32591__auto____1 = (function (state_35256){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_35256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e35268){if((e35268 instanceof Object)){
var ex__32594__auto__ = e35268;
var statearr_35269_35281 = state_35256;
(statearr_35269_35281[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35282 = state_35256;
state_35256 = G__35282;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$sampler$state_machine__32591__auto__ = function(state_35256){
switch(arguments.length){
case 0:
return fugue$sampler$state_machine__32591__auto____0.call(this);
case 1:
return fugue$sampler$state_machine__32591__auto____1.call(this,state_35256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$sampler$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$sampler$state_machine__32591__auto____0;
fugue$sampler$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$sampler$state_machine__32591__auto____1;
return fugue$sampler$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___35271,ch,actx,detune_param,map__35233,map__35233__$1,param_name))
})();
var state__32687__auto__ = (function (){var statearr_35270 = f__32686__auto__.call(null);
(statearr_35270[(6)] = c__32685__auto___35271);

return statearr_35270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___35271,ch,actx,detune_param,map__35233,map__35233__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),ch);
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,___$1){
return src.connect((function (){var target_obj_35283 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35285 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35286 = oops.state.prepare_state.call(null,target_obj_35283,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35286;

try{var next_obj_35284 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35283,(0),"offset",true,true,false))?(target_obj_35283["offset"]):null);
return next_obj_35284;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35285;
}})());
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__35287){
var map__35288 = p__35287;
var map__35288__$1 = (((((!((map__35288 == null))))?(((((map__35288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35288):map__35288);
var param_name = cljs.core.get.call(null,map__35288__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
return new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(src).connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),param_name))?(function (){var target_obj_35290 = dest;
var _STAR_runtime_state_STAR__orig_val__35291 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35292 = oops.state.prepare_state.call(null,target_obj_35290,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35292;

try{return oops.core.get_selector_dynamically.call(null,target_obj_35290,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35291;
}})():dest));
}));
fugue.sampler.note__GT_detune = (function fugue$sampler$note__GT_detune(note){
return ((100) * (note - (60)));
});
fugue.sampler.sampler = (function fugue$sampler$sampler(buffer_name,trigger,detune){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486),buffer_name], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.sampler","trigger","fugue.sampler/trigger",1938922045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger], null),"detune",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [detune], null)], null));
});

//# sourceMappingURL=sampler.js.map?rel=1610319352630
