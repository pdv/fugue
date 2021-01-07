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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35113){
return cljs.core.map_QMARK_.call(null,G__35113);
}),(function (G__35113){
return cljs.core.contains_QMARK_.call(null,G__35113,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
})], null),(function (G__35113){
return ((cljs.core.map_QMARK_.call(null,G__35113)) && (cljs.core.contains_QMARK_.call(null,G__35113,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.synthdef.make_node,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (p__35114,p__35115){
var map__35116 = p__35114;
var map__35116__$1 = (((((!((map__35116 == null))))?(((((map__35116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35116):map__35116);
var actx = cljs.core.get.call(null,map__35116__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var buffer_cache = cljs.core.get.call(null,map__35116__$1,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648));
var map__35117 = p__35115;
var map__35117__$1 = (((((!((map__35117 == null))))?(((((map__35117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35117):map__35117);
var buffer_name = cljs.core.get.call(null,map__35117__$1,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174),(function (){var G__35120 = actx.createConstantSource();
G__35120.start();

return G__35120;
})(),new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162),cljs.core.get.call(null,buffer_cache,buffer_name),new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269),actx.createGain()], null);
}));
fugue.sampler.trigger_sample_BANG_ = (function fugue$sampler$trigger_sample_BANG_(sampler_node,actx){
var node = actx.createBufferSource();
var target_obj_35121_35129 = node;
var _STAR_runtime_state_STAR__orig_val__35123_35130 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35124_35131 = oops.state.prepare_state.call(null,target_obj_35121_35129,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35124_35131;

try{var parent_obj_35122_35132 = target_obj_35121_35129;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_35122_35132,(0),"buffer",true,true,true)){
(parent_obj_35122_35132["buffer"] = new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162).cljs$core$IFn$_invoke$arity$1(sampler_node));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35123_35130;
}
new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(sampler_node).connect((function (){var target_obj_35125 = node;
var _STAR_runtime_state_STAR__orig_val__35127 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35128 = oops.state.prepare_state.call(null,target_obj_35125,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35128;

try{var next_obj_35126 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35125,(0),"detune",true,true,false))?(target_obj_35125["detune"]):null);
return next_obj_35126;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35127;
}})());

node.connect(new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(sampler_node));

return node.start();
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,p__35133){
var map__35134 = p__35133;
var map__35134__$1 = (((((!((map__35134 == null))))?(((((map__35134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35134):map__35134);
var param_name = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var ch = cljs.core.async.chan.call(null,(1));
var actx = (function (){var target_obj_35136 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35138 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35139 = oops.state.prepare_state.call(null,target_obj_35136,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35139;

try{var next_obj_35137 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35136,(0),"context",true,true,false))?(target_obj_35136["context"]):null);
return next_obj_35137;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35138;
}})();
var detune_param = (function (){var target_obj_35140 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35142 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35143 = oops.state.prepare_state.call(null,target_obj_35140,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35143;

try{var next_obj_35141 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35140,(0),"offset",true,true,false))?(target_obj_35140["offset"]):null);
return next_obj_35141;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35142;
}})();
var c__32685__auto___35172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___35172,ch,actx,detune_param,map__35134,map__35134__$1,param_name){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___35172,ch,actx,detune_param,map__35134,map__35134__$1,param_name){
return (function (state_35157){
var state_val_35158 = (state_35157[(1)]);
if((state_val_35158 === (1))){
var state_35157__$1 = state_35157;
var statearr_35159_35173 = state_35157__$1;
(statearr_35159_35173[(2)] = null);

(statearr_35159_35173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (2))){
var state_35157__$1 = state_35157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35157__$1,(4),ch);
} else {
if((state_val_35158 === (3))){
var inst_35155 = (state_35157[(2)]);
var state_35157__$1 = state_35157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35157__$1,inst_35155);
} else {
if((state_val_35158 === (4))){
var inst_35146 = (state_35157[(2)]);
var state_35157__$1 = (function (){var statearr_35160 = state_35157;
(statearr_35160[(7)] = inst_35146);

return statearr_35160;
})();
var G__35161_35174 = param_name;
var G__35161_35175__$1 = (((G__35161_35174 instanceof cljs.core.Keyword))?G__35161_35174.fqn:null);
switch (G__35161_35175__$1) {
case "fugue.sampler/trigger":
var statearr_35162_35177 = state_35157__$1;
(statearr_35162_35177[(1)] = (6));


break;
case "fugue.sampler/detune":
var statearr_35163_35178 = state_35157__$1;
(statearr_35163_35178[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35161_35175__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (5))){
var inst_35152 = (state_35157[(2)]);
var state_35157__$1 = (function (){var statearr_35164 = state_35157;
(statearr_35164[(8)] = inst_35152);

return statearr_35164;
})();
var statearr_35165_35179 = state_35157__$1;
(statearr_35165_35179[(2)] = null);

(statearr_35165_35179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (6))){
var inst_35147 = fugue.sampler.trigger_sample_BANG_.call(null,dest,actx);
var state_35157__$1 = state_35157;
var statearr_35166_35180 = state_35157__$1;
(statearr_35166_35180[(2)] = inst_35147);

(statearr_35166_35180[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35158 === (7))){
var inst_35146 = (state_35157[(7)]);
var inst_35149 = fugue.ramp.schedule_BANG_.call(null,detune_param,inst_35146);
var state_35157__$1 = state_35157;
var statearr_35167_35181 = state_35157__$1;
(statearr_35167_35181[(2)] = inst_35149);

(statearr_35167_35181[(1)] = (5));


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
});})(c__32685__auto___35172,ch,actx,detune_param,map__35134,map__35134__$1,param_name))
;
return ((function (switch__32590__auto__,c__32685__auto___35172,ch,actx,detune_param,map__35134,map__35134__$1,param_name){
return (function() {
var fugue$sampler$state_machine__32591__auto__ = null;
var fugue$sampler$state_machine__32591__auto____0 = (function (){
var statearr_35168 = [null,null,null,null,null,null,null,null,null];
(statearr_35168[(0)] = fugue$sampler$state_machine__32591__auto__);

(statearr_35168[(1)] = (1));

return statearr_35168;
});
var fugue$sampler$state_machine__32591__auto____1 = (function (state_35157){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_35157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e35169){if((e35169 instanceof Object)){
var ex__32594__auto__ = e35169;
var statearr_35170_35182 = state_35157;
(statearr_35170_35182[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35183 = state_35157;
state_35157 = G__35183;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$sampler$state_machine__32591__auto__ = function(state_35157){
switch(arguments.length){
case 0:
return fugue$sampler$state_machine__32591__auto____0.call(this);
case 1:
return fugue$sampler$state_machine__32591__auto____1.call(this,state_35157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$sampler$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$sampler$state_machine__32591__auto____0;
fugue$sampler$state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$sampler$state_machine__32591__auto____1;
return fugue$sampler$state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___35172,ch,actx,detune_param,map__35134,map__35134__$1,param_name))
})();
var state__32687__auto__ = (function (){var statearr_35171 = f__32686__auto__.call(null);
(statearr_35171[(6)] = c__32685__auto___35172);

return statearr_35171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___35172,ch,actx,detune_param,map__35134,map__35134__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),ch);
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,___$1){
return src.connect((function (){var target_obj_35184 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35186 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35187 = oops.state.prepare_state.call(null,target_obj_35184,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35187;

try{var next_obj_35185 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35184,(0),"offset",true,true,false))?(target_obj_35184["offset"]):null);
return next_obj_35185;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35186;
}})());
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__35188){
var map__35189 = p__35188;
var map__35189__$1 = (((((!((map__35189 == null))))?(((((map__35189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35189):map__35189);
var param_name = cljs.core.get.call(null,map__35189__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
return new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(src).connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),param_name))?(function (){var target_obj_35191 = dest;
var _STAR_runtime_state_STAR__orig_val__35192 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35193 = oops.state.prepare_state.call(null,target_obj_35191,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35193;

try{return oops.core.get_selector_dynamically.call(null,target_obj_35191,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35192;
}})():dest));
}));
fugue.sampler.note__GT_detune = (function fugue$sampler$note__GT_detune(note){
return ((100) * (note - (60)));
});
fugue.sampler.sampler = (function fugue$sampler$sampler(buffer_name,trigger,detune){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486),buffer_name], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.sampler","trigger","fugue.sampler/trigger",1938922045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger], null),"detune",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [detune], null)], null));
});

//# sourceMappingURL=sampler.js.map?rel=1610058838899
