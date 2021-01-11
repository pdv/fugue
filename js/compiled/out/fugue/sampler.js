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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35130){
return cljs.core.map_QMARK_.call(null,G__35130);
}),(function (G__35130){
return cljs.core.contains_QMARK_.call(null,G__35130,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
})], null),(function (G__35130){
return ((cljs.core.map_QMARK_.call(null,G__35130)) && (cljs.core.contains_QMARK_.call(null,G__35130,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.synthdef.make_node,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (p__35131,p__35132){
var map__35133 = p__35131;
var map__35133__$1 = (((((!((map__35133 == null))))?(((((map__35133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35133):map__35133);
var actx = cljs.core.get.call(null,map__35133__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var buffer_cache = cljs.core.get.call(null,map__35133__$1,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648));
var map__35134 = p__35132;
var map__35134__$1 = (((((!((map__35134 == null))))?(((((map__35134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35134):map__35134);
var buffer_name = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174),(function (){var G__35137 = actx.createConstantSource();
G__35137.start();

return G__35137;
})(),new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162),cljs.core.get.call(null,buffer_cache,buffer_name),new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269),actx.createGain()], null);
}));
fugue.sampler.trigger_sample_BANG_ = (function fugue$sampler$trigger_sample_BANG_(sampler_node,actx){
var node = actx.createBufferSource();
var target_obj_35138_35146 = node;
var _STAR_runtime_state_STAR__orig_val__35140_35147 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35141_35148 = oops.state.prepare_state.call(null,target_obj_35138_35146,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35141_35148;

try{var parent_obj_35139_35149 = target_obj_35138_35146;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_35139_35149,(0),"buffer",true,true,true)){
(parent_obj_35139_35149["buffer"] = new cljs.core.Keyword("fugue.buffer","audio-buffer","fugue.buffer/audio-buffer",-783824162).cljs$core$IFn$_invoke$arity$1(sampler_node));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35140_35147;
}
new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(sampler_node).connect((function (){var target_obj_35142 = node;
var _STAR_runtime_state_STAR__orig_val__35144 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35145 = oops.state.prepare_state.call(null,target_obj_35142,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35145;

try{var next_obj_35143 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35142,(0),"detune",true,true,false))?(target_obj_35142["detune"]):null);
return next_obj_35143;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35144;
}})());

node.connect(new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(sampler_node));

return node.start();
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,p__35150){
var map__35151 = p__35150;
var map__35151__$1 = (((((!((map__35151 == null))))?(((((map__35151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35151):map__35151);
var param_name = cljs.core.get.call(null,map__35151__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var ch = cljs.core.async.chan.call(null,(1));
var actx = (function (){var target_obj_35153 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35155 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35156 = oops.state.prepare_state.call(null,target_obj_35153,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35156;

try{var next_obj_35154 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35153,(0),"context",true,true,false))?(target_obj_35153["context"]):null);
return next_obj_35154;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35155;
}})();
var detune_param = (function (){var target_obj_35157 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35159 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35160 = oops.state.prepare_state.call(null,target_obj_35157,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35160;

try{var next_obj_35158 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35157,(0),"offset",true,true,false))?(target_obj_35157["offset"]):null);
return next_obj_35158;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35159;
}})();
var c__32707__auto___35189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32707__auto___35189,ch,actx,detune_param,map__35151,map__35151__$1,param_name){
return (function (){
var f__32708__auto__ = (function (){var switch__32612__auto__ = ((function (c__32707__auto___35189,ch,actx,detune_param,map__35151,map__35151__$1,param_name){
return (function (state_35174){
var state_val_35175 = (state_35174[(1)]);
if((state_val_35175 === (1))){
var state_35174__$1 = state_35174;
var statearr_35176_35190 = state_35174__$1;
(statearr_35176_35190[(2)] = null);

(statearr_35176_35190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35175 === (2))){
var state_35174__$1 = state_35174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35174__$1,(4),ch);
} else {
if((state_val_35175 === (3))){
var inst_35172 = (state_35174[(2)]);
var state_35174__$1 = state_35174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35174__$1,inst_35172);
} else {
if((state_val_35175 === (4))){
var inst_35163 = (state_35174[(2)]);
var state_35174__$1 = (function (){var statearr_35177 = state_35174;
(statearr_35177[(7)] = inst_35163);

return statearr_35177;
})();
var G__35178_35191 = param_name;
var G__35178_35192__$1 = (((G__35178_35191 instanceof cljs.core.Keyword))?G__35178_35191.fqn:null);
switch (G__35178_35192__$1) {
case "fugue.sampler/trigger":
var statearr_35179_35194 = state_35174__$1;
(statearr_35179_35194[(1)] = (6));


break;
case "fugue.sampler/detune":
var statearr_35180_35195 = state_35174__$1;
(statearr_35180_35195[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35178_35192__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35175 === (5))){
var inst_35169 = (state_35174[(2)]);
var state_35174__$1 = (function (){var statearr_35181 = state_35174;
(statearr_35181[(8)] = inst_35169);

return statearr_35181;
})();
var statearr_35182_35196 = state_35174__$1;
(statearr_35182_35196[(2)] = null);

(statearr_35182_35196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35175 === (6))){
var inst_35164 = fugue.sampler.trigger_sample_BANG_.call(null,dest,actx);
var state_35174__$1 = state_35174;
var statearr_35183_35197 = state_35174__$1;
(statearr_35183_35197[(2)] = inst_35164);

(statearr_35183_35197[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35175 === (7))){
var inst_35163 = (state_35174[(7)]);
var inst_35166 = fugue.ramp.schedule_BANG_.call(null,detune_param,inst_35163);
var state_35174__$1 = state_35174;
var statearr_35184_35198 = state_35174__$1;
(statearr_35184_35198[(2)] = inst_35166);

(statearr_35184_35198[(1)] = (5));


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
});})(c__32707__auto___35189,ch,actx,detune_param,map__35151,map__35151__$1,param_name))
;
return ((function (switch__32612__auto__,c__32707__auto___35189,ch,actx,detune_param,map__35151,map__35151__$1,param_name){
return (function() {
var fugue$sampler$state_machine__32613__auto__ = null;
var fugue$sampler$state_machine__32613__auto____0 = (function (){
var statearr_35185 = [null,null,null,null,null,null,null,null,null];
(statearr_35185[(0)] = fugue$sampler$state_machine__32613__auto__);

(statearr_35185[(1)] = (1));

return statearr_35185;
});
var fugue$sampler$state_machine__32613__auto____1 = (function (state_35174){
while(true){
var ret_value__32614__auto__ = (function (){try{while(true){
var result__32615__auto__ = switch__32612__auto__.call(null,state_35174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32615__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32615__auto__;
}
break;
}
}catch (e35186){if((e35186 instanceof Object)){
var ex__32616__auto__ = e35186;
var statearr_35187_35199 = state_35174;
(statearr_35187_35199[(5)] = ex__32616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32614__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35200 = state_35174;
state_35174 = G__35200;
continue;
} else {
return ret_value__32614__auto__;
}
break;
}
});
fugue$sampler$state_machine__32613__auto__ = function(state_35174){
switch(arguments.length){
case 0:
return fugue$sampler$state_machine__32613__auto____0.call(this);
case 1:
return fugue$sampler$state_machine__32613__auto____1.call(this,state_35174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$sampler$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$sampler$state_machine__32613__auto____0;
fugue$sampler$state_machine__32613__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$sampler$state_machine__32613__auto____1;
return fugue$sampler$state_machine__32613__auto__;
})()
;})(switch__32612__auto__,c__32707__auto___35189,ch,actx,detune_param,map__35151,map__35151__$1,param_name))
})();
var state__32709__auto__ = (function (){var statearr_35188 = f__32708__auto__.call(null);
(statearr_35188[(6)] = c__32707__auto___35189);

return statearr_35188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32709__auto__);
});})(c__32707__auto___35189,ch,actx,detune_param,map__35151,map__35151__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),ch);
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,___$1){
return src.connect((function (){var target_obj_35201 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35203 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35204 = oops.state.prepare_state.call(null,target_obj_35201,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35204;

try{var next_obj_35202 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35201,(0),"offset",true,true,false))?(target_obj_35201["offset"]):null);
return next_obj_35202;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35203;
}})());
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__35205){
var map__35206 = p__35205;
var map__35206__$1 = (((((!((map__35206 == null))))?(((((map__35206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35206):map__35206);
var param_name = cljs.core.get.call(null,map__35206__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
return new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(src).connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),param_name))?(function (){var target_obj_35208 = dest;
var _STAR_runtime_state_STAR__orig_val__35209 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35210 = oops.state.prepare_state.call(null,target_obj_35208,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35210;

try{return oops.core.get_selector_dynamically.call(null,target_obj_35208,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35209;
}})():dest));
}));
fugue.sampler.note__GT_detune = (function fugue$sampler$note__GT_detune(note){
return ((100) * (note - (60)));
});
fugue.sampler.sampler = (function fugue$sampler$sampler(buffer_name,trigger,detune){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.buffer","buffer-name","fugue.buffer/buffer-name",-1610711486),buffer_name], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.sampler","trigger","fugue.sampler/trigger",1938922045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger], null),"detune",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [detune], null)], null));
});

//# sourceMappingURL=sampler.js.map?rel=1610381656300
