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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35103){
return cljs.core.map_QMARK_.call(null,G__35103);
}),(function (G__35103){
return cljs.core.contains_QMARK_.call(null,G__35103,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
})], null),(function (G__35103){
return ((cljs.core.map_QMARK_.call(null,G__35103)) && (cljs.core.contains_QMARK_.call(null,G__35103,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.synthdef.make_node,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (p__35104,p__35105){
var map__35106 = p__35104;
var map__35106__$1 = (((((!((map__35106 == null))))?(((((map__35106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35106):map__35106);
var actx = cljs.core.get.call(null,map__35106__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var buffer_cache = cljs.core.get.call(null,map__35106__$1,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648));
var map__35107 = p__35105;
var map__35107__$1 = (((((!((map__35107 == null))))?(((((map__35107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35107):map__35107);
var buffer_name = cljs.core.get.call(null,map__35107__$1,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174),(function (){var G__35110 = actx.createConstantSource();
G__35110.start();

return G__35110;
})(),new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162),cljs.core.get.call(null,buffer_cache,buffer_name),new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269),actx.createGain()], null);
}));
fugue.sampler.trigger_sample_BANG_ = (function fugue$sampler$trigger_sample_BANG_(sampler_node,actx){
var node = actx.createBufferSource();
var target_obj_35111_35119 = node;
var _STAR_runtime_state_STAR__orig_val__35113_35120 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35114_35121 = oops.state.prepare_state.call(null,target_obj_35111_35119,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35114_35121;

try{var parent_obj_35112_35122 = target_obj_35111_35119;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_35112_35122,(0),"buffer",true,true,true)){
(parent_obj_35112_35122["buffer"] = new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162).cljs$core$IFn$_invoke$arity$1(sampler_node));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35113_35120;
}
new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(sampler_node).connect((function (){var target_obj_35115 = node;
var _STAR_runtime_state_STAR__orig_val__35117 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35118 = oops.state.prepare_state.call(null,target_obj_35115,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35118;

try{var next_obj_35116 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35115,(0),"detune",true,true,false))?(target_obj_35115["detune"]):null);
return next_obj_35116;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35117;
}})());

node.connect(new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(sampler_node));

return node.start();
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,p__35123){
var map__35124 = p__35123;
var map__35124__$1 = (((((!((map__35124 == null))))?(((((map__35124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35124):map__35124);
var param_name = cljs.core.get.call(null,map__35124__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var ch = cljs.core.async.chan.call(null,(1));
var actx = (function (){var target_obj_35126 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35128 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35129 = oops.state.prepare_state.call(null,target_obj_35126,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35129;

try{var next_obj_35127 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35126,(0),"context",true,true,false))?(target_obj_35126["context"]):null);
return next_obj_35127;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35128;
}})();
var detune_param = (function (){var target_obj_35130 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35132 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35133 = oops.state.prepare_state.call(null,target_obj_35130,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35133;

try{var next_obj_35131 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35130,(0),"offset",true,true,false))?(target_obj_35130["offset"]):null);
return next_obj_35131;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35132;
}})();
var c__32707__auto___35162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___35162,ch,actx,detune_param,map__35124,map__35124__$1,param_name){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___35162,ch,actx,detune_param,map__35124,map__35124__$1,param_name){
return (function (state_35147){
var state_val_35148 = (state_35147[(1)]);
if((state_val_35148 === (1))){
var state_35147__$1 = state_35147;
var statearr_35149_35163 = state_35147__$1;
(statearr_35149_35163[(2)] = null);

(statearr_35149_35163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (2))){
var state_35147__$1 = state_35147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35147__$1,(4),ch);
} else {
if((state_val_35148 === (3))){
var inst_35145 = (state_35147[(2)]);
var state_35147__$1 = state_35147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35147__$1,inst_35145);
} else {
if((state_val_35148 === (4))){
var inst_35136 = (state_35147[(2)]);
var state_35147__$1 = (function (){var statearr_35150 = state_35147;
(statearr_35150[(7)] = inst_35136);

return statearr_35150;
})();
var G__35151_35164 = param_name;
var G__35151_35165__$1 = (((G__35151_35164 instanceof cljs.core.Keyword))?G__35151_35164.fqn:null);
switch (G__35151_35165__$1) {
case "fugue.sampler/trigger":
var statearr_35152_35167 = state_35147__$1;
(statearr_35152_35167[(1)] = (6));


break;
case "fugue.sampler/detune":
var statearr_35153_35168 = state_35147__$1;
(statearr_35153_35168[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35151_35165__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (5))){
var inst_35142 = (state_35147[(2)]);
var state_35147__$1 = (function (){var statearr_35154 = state_35147;
(statearr_35154[(8)] = inst_35142);

return statearr_35154;
})();
var statearr_35155_35169 = state_35147__$1;
(statearr_35155_35169[(2)] = null);

(statearr_35155_35169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (6))){
var inst_35137 = fugue.sampler.trigger_sample_BANG_.call(null,dest,actx);
var state_35147__$1 = state_35147;
var statearr_35156_35170 = state_35147__$1;
(statearr_35156_35170[(2)] = inst_35137);

(statearr_35156_35170[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (7))){
var inst_35136 = (state_35147[(7)]);
var inst_35139 = fugue.ramp.schedule_BANG_.call(null,detune_param,inst_35136);
var state_35147__$1 = state_35147;
var statearr_35157_35171 = state_35147__$1;
(statearr_35157_35171[(2)] = inst_35139);

(statearr_35157_35171[(1)] = (5));


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
});})(c__32707__auto___35162,ch,actx,detune_param,map__35124,map__35124__$1,param_name))
;
return ((function (switch__32612__auto__,c__32707__auto___35162,ch,actx,detune_param,map__35124,map__35124__$1,param_name){
return (function() {
var fugue$sampler$state_machine__32613__auto__ = null;
var fugue$sampler$state_machine__32613__auto____0 = (function (){
var statearr_35158 = [null,null,null,null,null,null,null,null,null];
(statearr_35158[(0)] = fugue$sampler$state_machine__32613__auto__);

(statearr_35158[(1)] = (1));

return statearr_35158;
});
var fugue$sampler$state_machine__32613__auto____1 = (function (state_35147){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_35147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e35159){if((e35159 instanceof Object)){
var ex__32616__auto__ = e35159;
var statearr_35160_35172 = state_35147;
(statearr_35160_35172[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35173 = state_35147;
state_35147 = G__35173;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
fugue$sampler$state_machine__32613__auto__ = function(state_35147){
switch(arguments.length){
case 0:
return fugue$sampler$state_machine__32613__auto____0.call(this);
case 1:
return fugue$sampler$state_machine__32613__auto____1.call(this,state_35147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$sampler$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$sampler$state_machine__32613__auto____0;
fugue$sampler$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$sampler$state_machine__32613__auto____1;
return fugue$sampler$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___35162,ch,actx,detune_param,map__35124,map__35124__$1,param_name))
})();
var state__32709__auto__ = (function (){var statearr_35161 = f__32708__auto__.call(null);
(statearr_35161[(6)] = c__32707__auto___35162);

return statearr_35161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___35162,ch,actx,detune_param,map__35124,map__35124__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),ch);
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,___$1){
return src.connect((function (){var target_obj_35174 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35176 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35177 = oops.state.prepare_state.call(null,target_obj_35174,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35177;

try{var next_obj_35175 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35174,(0),"offset",true,true,false))?(target_obj_35174["offset"]):null);
return next_obj_35175;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35176;
}})());
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__35178){
var map__35179 = p__35178;
var map__35179__$1 = (((((!((map__35179 == null))))?(((((map__35179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35179.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35179):map__35179);
var param_name = cljs.core.get.call(null,map__35179__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
return new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(src).connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),param_name))?(function (){var target_obj_35181 = dest;
var _STAR_runtime_state_STAR__orig_val__35182 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35183 = oops.state.prepare_state.call(null,target_obj_35181,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35183;

try{return oops.core.get_selector_dynamically.call(null,target_obj_35181,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35182;
}})():dest));
}));
fugue.sampler.note__GT_detune = (function fugue$sampler$note__GT_detune(note){
return ((100) * (note - (60)));
});
fugue.sampler.sampler = (function fugue$sampler$sampler(buffer_name,trigger,detune){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486),buffer_name], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.sampler","trigger","fugue.sampler/trigger",1938922045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger], null),"detune",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [detune], null)], null));
});

//# sourceMappingURL=sampler.js.map?rel=1610383903120
