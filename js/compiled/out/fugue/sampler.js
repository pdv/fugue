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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35139){
return cljs.core.map_QMARK_.call(null,G__35139);
}),(function (G__35139){
return cljs.core.contains_QMARK_.call(null,G__35139,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
})], null),(function (G__35139){
return ((cljs.core.map_QMARK_.call(null,G__35139)) && (cljs.core.contains_QMARK_.call(null,G__35139,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.synthdef.make_node,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (p__35140,p__35141){
var map__35142 = p__35140;
var map__35142__$1 = (((((!((map__35142 == null))))?(((((map__35142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35142):map__35142);
var actx = cljs.core.get.call(null,map__35142__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var buffer_cache = cljs.core.get.call(null,map__35142__$1,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648));
var map__35143 = p__35141;
var map__35143__$1 = (((((!((map__35143 == null))))?(((((map__35143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35143):map__35143);
var buffer_name = cljs.core.get.call(null,map__35143__$1,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174),(function (){var G__35146 = actx.createConstantSource();
G__35146.start();

return G__35146;
})(),new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162),cljs.core.get.call(null,buffer_cache,buffer_name),new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269),actx.createGain()], null);
}));
fugue.sampler.trigger_sample_BANG_ = (function fugue$sampler$trigger_sample_BANG_(sampler_node,actx){
var node = actx.createBufferSource();
var target_obj_35147_35155 = node;
var _STAR_runtime_state_STAR__orig_val__35149_35156 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35150_35157 = oops.state.prepare_state.call(null,target_obj_35147_35155,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35150_35157;

try{var parent_obj_35148_35158 = target_obj_35147_35155;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_35148_35158,(0),"buffer",true,true,true)){
(parent_obj_35148_35158["buffer"] = new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162).cljs$core$IFn$_invoke$arity$1(sampler_node));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35149_35156;
}
new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(sampler_node).connect((function (){var target_obj_35151 = node;
var _STAR_runtime_state_STAR__orig_val__35153 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35154 = oops.state.prepare_state.call(null,target_obj_35151,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35154;

try{var next_obj_35152 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35151,(0),"detune",true,true,false))?(target_obj_35151["detune"]):null);
return next_obj_35152;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35153;
}})());

node.connect(new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(sampler_node));

return node.start();
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,p__35159){
var map__35160 = p__35159;
var map__35160__$1 = (((((!((map__35160 == null))))?(((((map__35160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35160):map__35160);
var param_name = cljs.core.get.call(null,map__35160__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var ch = cljs.core.async.chan.call(null,(1));
var actx = (function (){var target_obj_35162 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35164 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35165 = oops.state.prepare_state.call(null,target_obj_35162,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35165;

try{var next_obj_35163 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35162,(0),"context",true,true,false))?(target_obj_35162["context"]):null);
return next_obj_35163;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35164;
}})();
var detune_param = (function (){var target_obj_35166 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35168 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35169 = oops.state.prepare_state.call(null,target_obj_35166,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35169;

try{var next_obj_35167 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35166,(0),"offset",true,true,false))?(target_obj_35166["offset"]):null);
return next_obj_35167;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35168;
}})();
var c__32685__auto___35198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___35198,ch,actx,detune_param,map__35160,map__35160__$1,param_name){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___35198,ch,actx,detune_param,map__35160,map__35160__$1,param_name){
return (function (state_35183){
var state_val_35184 = (state_35183[(1)]);
if((state_val_35184 === (1))){
var state_35183__$1 = state_35183;
var statearr_35185_35199 = state_35183__$1;
(statearr_35185_35199[(2)] = null);

(statearr_35185_35199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (2))){
var state_35183__$1 = state_35183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35183__$1,(4),ch);
} else {
if((state_val_35184 === (3))){
var inst_35181 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35183__$1,inst_35181);
} else {
if((state_val_35184 === (4))){
var inst_35172 = (state_35183[(2)]);
var state_35183__$1 = (function (){var statearr_35186 = state_35183;
(statearr_35186[(7)] = inst_35172);

return statearr_35186;
})();
var G__35187_35200 = param_name;
var G__35187_35201__$1 = (((G__35187_35200 instanceof cljs.core.Keyword))?G__35187_35200.fqn:null);
switch (G__35187_35201__$1) {
case "fugue.sampler/trigger":
var statearr_35188_35203 = state_35183__$1;
(statearr_35188_35203[(1)] = (6));


break;
case "fugue.sampler/detune":
var statearr_35189_35204 = state_35183__$1;
(statearr_35189_35204[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35187_35201__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (5))){
var inst_35178 = (state_35183[(2)]);
var state_35183__$1 = (function (){var statearr_35190 = state_35183;
(statearr_35190[(8)] = inst_35178);

return statearr_35190;
})();
var statearr_35191_35205 = state_35183__$1;
(statearr_35191_35205[(2)] = null);

(statearr_35191_35205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (6))){
var inst_35173 = fugue.sampler.trigger_sample_BANG_.call(null,dest,actx);
var state_35183__$1 = state_35183;
var statearr_35192_35206 = state_35183__$1;
(statearr_35192_35206[(2)] = inst_35173);

(statearr_35192_35206[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (7))){
var inst_35172 = (state_35183[(7)]);
var inst_35175 = fugue.ramp.schedule_BANG_.call(null,detune_param,inst_35172);
var state_35183__$1 = state_35183;
var statearr_35193_35207 = state_35183__$1;
(statearr_35193_35207[(2)] = inst_35175);

(statearr_35193_35207[(1)] = (5));


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
});})(c__32685__auto___35198,ch,actx,detune_param,map__35160,map__35160__$1,param_name))
;
return ((function (switch__32590__auto__,c__32685__auto___35198,ch,actx,detune_param,map__35160,map__35160__$1,param_name){
return (function() {
var fugue$sampler$state_machine__32591__auto__ = null;
var fugue$sampler$state_machine__32591__auto____0 = (function (){
var statearr_35194 = [null,null,null,null,null,null,null,null,null];
(statearr_35194[(0)] = fugue$sampler$state_machine__32591__auto__);

(statearr_35194[(1)] = (1));

return statearr_35194;
});
var fugue$sampler$state_machine__32591__auto____1 = (function (state_35183){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_35183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e35195){if((e35195 instanceof Object)){
var ex__32594__auto__ = e35195;
var statearr_35196_35208 = state_35183;
(statearr_35196_35208[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35209 = state_35183;
state_35183 = G__35209;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$sampler$state_machine__32591__auto__ = function(state_35183){
switch(arguments.length){
case 0:
return fugue$sampler$state_machine__32591__auto____0.call(this);
case 1:
return fugue$sampler$state_machine__32591__auto____1.call(this,state_35183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$sampler$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$sampler$state_machine__32591__auto____0;
fugue$sampler$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$sampler$state_machine__32591__auto____1;
return fugue$sampler$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___35198,ch,actx,detune_param,map__35160,map__35160__$1,param_name))
})();
var state__32687__auto__ = (function (){var statearr_35197 = f__32686__auto__.call(null);
(statearr_35197[(6)] = c__32685__auto___35198);

return statearr_35197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___35198,ch,actx,detune_param,map__35160,map__35160__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),ch);
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,___$1){
return src.connect((function (){var target_obj_35210 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35212 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35213 = oops.state.prepare_state.call(null,target_obj_35210,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35213;

try{var next_obj_35211 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35210,(0),"offset",true,true,false))?(target_obj_35210["offset"]):null);
return next_obj_35211;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35212;
}})());
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__35214){
var map__35215 = p__35214;
var map__35215__$1 = (((((!((map__35215 == null))))?(((((map__35215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35215):map__35215);
var param_name = cljs.core.get.call(null,map__35215__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
return new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(src).connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),param_name))?(function (){var target_obj_35217 = dest;
var _STAR_runtime_state_STAR__orig_val__35218 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35219 = oops.state.prepare_state.call(null,target_obj_35217,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35219;

try{return oops.core.get_selector_dynamically.call(null,target_obj_35217,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35218;
}})():dest));
}));
fugue.sampler.note__GT_detune = (function fugue$sampler$note__GT_detune(note){
return ((100) * (note - (60)));
});
fugue.sampler.sampler = (function fugue$sampler$sampler(buffer_name,trigger,detune){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486),buffer_name], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.sampler","trigger","fugue.sampler/trigger",1938922045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger], null),"detune",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [detune], null)], null));
});

//# sourceMappingURL=sampler.js.map?rel=1610120087794
