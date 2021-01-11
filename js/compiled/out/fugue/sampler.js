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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35090){
return cljs.core.map_QMARK_.call(null,G__35090);
}),(function (G__35090){
return cljs.core.contains_QMARK_.call(null,G__35090,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
})], null),(function (G__35090){
return ((cljs.core.map_QMARK_.call(null,G__35090)) && (cljs.core.contains_QMARK_.call(null,G__35090,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.synthdef.make_node,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (p__35091,p__35092){
var map__35093 = p__35091;
var map__35093__$1 = (((((!((map__35093 == null))))?(((((map__35093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35093):map__35093);
var actx = cljs.core.get.call(null,map__35093__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var buffer_cache = cljs.core.get.call(null,map__35093__$1,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648));
var map__35094 = p__35092;
var map__35094__$1 = (((((!((map__35094 == null))))?(((((map__35094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35094):map__35094);
var buffer_name = cljs.core.get.call(null,map__35094__$1,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174),(function (){var G__35097 = actx.createConstantSource();
G__35097.start();

return G__35097;
})(),new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162),cljs.core.get.call(null,buffer_cache,buffer_name),new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269),actx.createGain()], null);
}));
fugue.sampler.trigger_sample_BANG_ = (function fugue$sampler$trigger_sample_BANG_(sampler_node,actx){
var node = actx.createBufferSource();
var target_obj_35098_35106 = node;
var _STAR_runtime_state_STAR__orig_val__35100_35107 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35101_35108 = oops.state.prepare_state.call(null,target_obj_35098_35106,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35101_35108;

try{var parent_obj_35099_35109 = target_obj_35098_35106;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_35099_35109,(0),"buffer",true,true,true)){
(parent_obj_35099_35109["buffer"] = new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162).cljs$core$IFn$_invoke$arity$1(sampler_node));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35100_35107;
}
new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(sampler_node).connect((function (){var target_obj_35102 = node;
var _STAR_runtime_state_STAR__orig_val__35104 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35105 = oops.state.prepare_state.call(null,target_obj_35102,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35105;

try{var next_obj_35103 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35102,(0),"detune",true,true,false))?(target_obj_35102["detune"]):null);
return next_obj_35103;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35104;
}})());

node.connect(new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(sampler_node));

return node.start();
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,p__35110){
var map__35111 = p__35110;
var map__35111__$1 = (((((!((map__35111 == null))))?(((((map__35111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35111):map__35111);
var param_name = cljs.core.get.call(null,map__35111__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var ch = cljs.core.async.chan.call(null,(1));
var actx = (function (){var target_obj_35113 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35115 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35116 = oops.state.prepare_state.call(null,target_obj_35113,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35116;

try{var next_obj_35114 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35113,(0),"context",true,true,false))?(target_obj_35113["context"]):null);
return next_obj_35114;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35115;
}})();
var detune_param = (function (){var target_obj_35117 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35119 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35120 = oops.state.prepare_state.call(null,target_obj_35117,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35120;

try{var next_obj_35118 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35117,(0),"offset",true,true,false))?(target_obj_35117["offset"]):null);
return next_obj_35118;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35119;
}})();
var c__32707__auto___35149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___35149,ch,actx,detune_param,map__35111,map__35111__$1,param_name){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___35149,ch,actx,detune_param,map__35111,map__35111__$1,param_name){
return (function (state_35134){
var state_val_35135 = (state_35134[(1)]);
if((state_val_35135 === (1))){
var state_35134__$1 = state_35134;
var statearr_35136_35150 = state_35134__$1;
(statearr_35136_35150[(2)] = null);

(statearr_35136_35150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35135 === (2))){
var state_35134__$1 = state_35134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35134__$1,(4),ch);
} else {
if((state_val_35135 === (3))){
var inst_35132 = (state_35134[(2)]);
var state_35134__$1 = state_35134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35134__$1,inst_35132);
} else {
if((state_val_35135 === (4))){
var inst_35123 = (state_35134[(2)]);
var state_35134__$1 = (function (){var statearr_35137 = state_35134;
(statearr_35137[(7)] = inst_35123);

return statearr_35137;
})();
var G__35138_35151 = param_name;
var G__35138_35152__$1 = (((G__35138_35151 instanceof cljs.core.Keyword))?G__35138_35151.fqn:null);
switch (G__35138_35152__$1) {
case "fugue.sampler/trigger":
var statearr_35139_35154 = state_35134__$1;
(statearr_35139_35154[(1)] = (6));


break;
case "fugue.sampler/detune":
var statearr_35140_35155 = state_35134__$1;
(statearr_35140_35155[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35138_35152__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35135 === (5))){
var inst_35129 = (state_35134[(2)]);
var state_35134__$1 = (function (){var statearr_35141 = state_35134;
(statearr_35141[(8)] = inst_35129);

return statearr_35141;
})();
var statearr_35142_35156 = state_35134__$1;
(statearr_35142_35156[(2)] = null);

(statearr_35142_35156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35135 === (6))){
var inst_35124 = fugue.sampler.trigger_sample_BANG_.call(null,dest,actx);
var state_35134__$1 = state_35134;
var statearr_35143_35157 = state_35134__$1;
(statearr_35143_35157[(2)] = inst_35124);

(statearr_35143_35157[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35135 === (7))){
var inst_35123 = (state_35134[(7)]);
var inst_35126 = fugue.ramp.schedule_BANG_.call(null,detune_param,inst_35123);
var state_35134__$1 = state_35134;
var statearr_35144_35158 = state_35134__$1;
(statearr_35144_35158[(2)] = inst_35126);

(statearr_35144_35158[(1)] = (5));


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
});})(c__32707__auto___35149,ch,actx,detune_param,map__35111,map__35111__$1,param_name))
;
return ((function (switch__32612__auto__,c__32707__auto___35149,ch,actx,detune_param,map__35111,map__35111__$1,param_name){
return (function() {
var fugue$sampler$state_machine__32613__auto__ = null;
var fugue$sampler$state_machine__32613__auto____0 = (function (){
var statearr_35145 = [null,null,null,null,null,null,null,null,null];
(statearr_35145[(0)] = fugue$sampler$state_machine__32613__auto__);

(statearr_35145[(1)] = (1));

return statearr_35145;
});
var fugue$sampler$state_machine__32613__auto____1 = (function (state_35134){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_35134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e35146){if((e35146 instanceof Object)){
var ex__32616__auto__ = e35146;
var statearr_35147_35159 = state_35134;
(statearr_35147_35159[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35160 = state_35134;
state_35134 = G__35160;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
fugue$sampler$state_machine__32613__auto__ = function(state_35134){
switch(arguments.length){
case 0:
return fugue$sampler$state_machine__32613__auto____0.call(this);
case 1:
return fugue$sampler$state_machine__32613__auto____1.call(this,state_35134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$sampler$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$sampler$state_machine__32613__auto____0;
fugue$sampler$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$sampler$state_machine__32613__auto____1;
return fugue$sampler$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___35149,ch,actx,detune_param,map__35111,map__35111__$1,param_name))
})();
var state__32709__auto__ = (function (){var statearr_35148 = f__32708__auto__.call(null);
(statearr_35148[(6)] = c__32707__auto___35149);

return statearr_35148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___35149,ch,actx,detune_param,map__35111,map__35111__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),ch);
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,___$1){
return src.connect((function (){var target_obj_35161 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35163 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35164 = oops.state.prepare_state.call(null,target_obj_35161,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35164;

try{var next_obj_35162 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35161,(0),"offset",true,true,false))?(target_obj_35161["offset"]):null);
return next_obj_35162;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35163;
}})());
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__35165){
var map__35166 = p__35165;
var map__35166__$1 = (((((!((map__35166 == null))))?(((((map__35166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35166):map__35166);
var param_name = cljs.core.get.call(null,map__35166__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
return new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(src).connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),param_name))?(function (){var target_obj_35168 = dest;
var _STAR_runtime_state_STAR__orig_val__35169 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35170 = oops.state.prepare_state.call(null,target_obj_35168,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35170;

try{return oops.core.get_selector_dynamically.call(null,target_obj_35168,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35169;
}})():dest));
}));
fugue.sampler.note__GT_detune = (function fugue$sampler$note__GT_detune(note){
return ((100) * (note - (60)));
});
fugue.sampler.sampler = (function fugue$sampler$sampler(buffer_name,trigger,detune){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486),buffer_name], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.sampler","trigger","fugue.sampler/trigger",1938922045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger], null),"detune",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [detune], null)], null));
});

//# sourceMappingURL=sampler.js.map?rel=1610405468805
