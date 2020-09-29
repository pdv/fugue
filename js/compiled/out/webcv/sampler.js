// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.sampler');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('oops.core');
goog.require('webcv.audio');
goog.require('webcv.chan');
goog.require('webcv.ramp');
goog.require('webcv.synthdef');
cljs.core._add_method.call(null,webcv.synthdef.node_spec,new cljs.core.Keyword("webcv.sampler","sampler-node","webcv.sampler/sampler-node",1633438443),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36913){
return cljs.core.map_QMARK_.call(null,G__36913);
}),(function (G__36913){
return cljs.core.contains_QMARK_.call(null,G__36913,new cljs.core.Keyword("webcv.sampler","filename","webcv.sampler/filename",2082982354));
})], null),(function (G__36913){
return ((cljs.core.map_QMARK_.call(null,G__36913)) && (cljs.core.contains_QMARK_.call(null,G__36913,new cljs.core.Keyword("webcv.sampler","filename","webcv.sampler/filename",2082982354))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.sampler","filename","webcv.sampler/filename",2082982354)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.sampler","filename","webcv.sampler/filename",2082982354)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.sampler","filename","webcv.sampler/filename",2082982354)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.sampler","filename","webcv.sampler/filename",2082982354)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.synthdef.make_node,new cljs.core.Keyword("webcv.sampler","sampler-node","webcv.sampler/sampler-node",1633438443),(function (p__36914,p__36915){
var map__36916 = p__36914;
var map__36916__$1 = (((((!((map__36916 == null))))?(((((map__36916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36916):map__36916);
var actx = cljs.core.get.call(null,map__36916__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
var buffer_cache = cljs.core.get.call(null,map__36916__$1,new cljs.core.Keyword("webcv.sampler","buffer-cache","webcv.sampler/buffer-cache",169183323));
var map__36917 = p__36915;
var map__36917__$1 = (((((!((map__36917 == null))))?(((((map__36917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36917):map__36917);
var filename = cljs.core.get.call(null,map__36917__$1,new cljs.core.Keyword("webcv.sampler","filename","webcv.sampler/filename",2082982354));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.sampler","detune-controller","webcv.sampler/detune-controller",-1694044649),(function (){var G__36920 = actx.createConstantSource();
G__36920.start();

return G__36920;
})(),new cljs.core.Keyword("webcv.sampler","buffer","webcv.sampler/buffer",1445792127),cljs.core.get.call(null,buffer_cache,filename),new cljs.core.Keyword("webcv.sampler","output","webcv.sampler/output",-852767954),actx.createGain()], null);
}));
webcv.sampler.trigger_sample_BANG_ = (function webcv$sampler$trigger_sample_BANG_(sampler_node,actx){
var node = actx.createBufferSource();
var target_obj_36921_36929 = node;
var _STAR_runtime_state_STAR__orig_val__36923_36930 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36924_36931 = oops.state.prepare_state.call(null,target_obj_36921_36929,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36924_36931;

try{var parent_obj_36922_36932 = target_obj_36921_36929;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_36922_36932,(0),"buffer",true,true,true)){
(parent_obj_36922_36932["buffer"] = new cljs.core.Keyword("webcv.sampler","buffer","webcv.sampler/buffer",1445792127).cljs$core$IFn$_invoke$arity$1(sampler_node));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36923_36930;
}
new cljs.core.Keyword("webcv.sampler","detune-controller","webcv.sampler/detune-controller",-1694044649).cljs$core$IFn$_invoke$arity$1(sampler_node).connect((function (){var target_obj_36925 = node;
var _STAR_runtime_state_STAR__orig_val__36927 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36928 = oops.state.prepare_state.call(null,target_obj_36925,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36928;

try{var next_obj_36926 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_36925,(0),"detune",true,true,false))?(target_obj_36925["detune"]):null);
return next_obj_36926;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36927;
}})());

node.connect(new cljs.core.Keyword("webcv.sampler","output","webcv.sampler/output",-852767954).cljs$core$IFn$_invoke$arity$1(sampler_node));

return node.start();
});
cljs.core._add_method.call(null,webcv.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.sampler","sampler-node","webcv.sampler/sampler-node",1633438443)], null),(function (_,src,dest,p__36933){
var map__36934 = p__36933;
var map__36934__$1 = (((((!((map__36934 == null))))?(((((map__36934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36934):map__36934);
var param_name = cljs.core.get.call(null,map__36934__$1,new cljs.core.Keyword("webcv.synthdef","param-name","webcv.synthdef/param-name",-328756077));
var ch = cljs.core.async.chan.call(null,(1));
var actx = (function (){var target_obj_36936 = new cljs.core.Keyword("webcv.sampler","detune-controller","webcv.sampler/detune-controller",-1694044649).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__36938 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36939 = oops.state.prepare_state.call(null,target_obj_36936,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36939;

try{var next_obj_36937 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_36936,(0),"context",true,true,false))?(target_obj_36936["context"]):null);
return next_obj_36937;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36938;
}})();
var detune_param = (function (){var target_obj_36940 = new cljs.core.Keyword("webcv.sampler","detune-controller","webcv.sampler/detune-controller",-1694044649).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__36942 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36943 = oops.state.prepare_state.call(null,target_obj_36940,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36943;

try{var next_obj_36941 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_36940,(0),"offset",true,true,false))?(target_obj_36940["offset"]):null);
return next_obj_36941;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36942;
}})();
var c__32649__auto___36972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___36972,ch,actx,detune_param,map__36934,map__36934__$1,param_name){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___36972,ch,actx,detune_param,map__36934,map__36934__$1,param_name){
return (function (state_36957){
var state_val_36958 = (state_36957[(1)]);
if((state_val_36958 === (1))){
var state_36957__$1 = state_36957;
var statearr_36959_36973 = state_36957__$1;
(statearr_36959_36973[(2)] = null);

(statearr_36959_36973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36958 === (2))){
var state_36957__$1 = state_36957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36957__$1,(4),ch);
} else {
if((state_val_36958 === (3))){
var inst_36955 = (state_36957[(2)]);
var state_36957__$1 = state_36957;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36957__$1,inst_36955);
} else {
if((state_val_36958 === (4))){
var inst_36946 = (state_36957[(2)]);
var state_36957__$1 = (function (){var statearr_36960 = state_36957;
(statearr_36960[(7)] = inst_36946);

return statearr_36960;
})();
var G__36961_36974 = param_name;
var G__36961_36975__$1 = (((G__36961_36974 instanceof cljs.core.Keyword))?G__36961_36974.fqn:null);
switch (G__36961_36975__$1) {
case "webcv.sampler/trigger":
var statearr_36962_36977 = state_36957__$1;
(statearr_36962_36977[(1)] = (6));


break;
case "webcv.sampler/detune":
var statearr_36963_36978 = state_36957__$1;
(statearr_36963_36978[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36961_36975__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36958 === (5))){
var inst_36952 = (state_36957[(2)]);
var state_36957__$1 = (function (){var statearr_36964 = state_36957;
(statearr_36964[(8)] = inst_36952);

return statearr_36964;
})();
var statearr_36965_36979 = state_36957__$1;
(statearr_36965_36979[(2)] = null);

(statearr_36965_36979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36958 === (6))){
var inst_36947 = webcv.sampler.trigger_sample_BANG_.call(null,dest,actx);
var state_36957__$1 = state_36957;
var statearr_36966_36980 = state_36957__$1;
(statearr_36966_36980[(2)] = inst_36947);

(statearr_36966_36980[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36958 === (7))){
var inst_36946 = (state_36957[(7)]);
var inst_36949 = webcv.ramp.schedule_BANG_.call(null,detune_param,inst_36946);
var state_36957__$1 = state_36957;
var statearr_36967_36981 = state_36957__$1;
(statearr_36967_36981[(2)] = inst_36949);

(statearr_36967_36981[(1)] = (5));


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
});})(c__32649__auto___36972,ch,actx,detune_param,map__36934,map__36934__$1,param_name))
;
return ((function (switch__32554__auto__,c__32649__auto___36972,ch,actx,detune_param,map__36934,map__36934__$1,param_name){
return (function() {
var webcv$sampler$state_machine__32555__auto__ = null;
var webcv$sampler$state_machine__32555__auto____0 = (function (){
var statearr_36968 = [null,null,null,null,null,null,null,null,null];
(statearr_36968[(0)] = webcv$sampler$state_machine__32555__auto__);

(statearr_36968[(1)] = (1));

return statearr_36968;
});
var webcv$sampler$state_machine__32555__auto____1 = (function (state_36957){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_36957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e36969){if((e36969 instanceof Object)){
var ex__32558__auto__ = e36969;
var statearr_36970_36982 = state_36957;
(statearr_36970_36982[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36983 = state_36957;
state_36957 = G__36983;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
webcv$sampler$state_machine__32555__auto__ = function(state_36957){
switch(arguments.length){
case 0:
return webcv$sampler$state_machine__32555__auto____0.call(this);
case 1:
return webcv$sampler$state_machine__32555__auto____1.call(this,state_36957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$sampler$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$sampler$state_machine__32555__auto____0;
webcv$sampler$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$sampler$state_machine__32555__auto____1;
return webcv$sampler$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___36972,ch,actx,detune_param,map__36934,map__36934__$1,param_name))
})();
var state__32651__auto__ = (function (){var statearr_36971 = f__32650__auto__.call(null);
(statearr_36971[(6)] = c__32649__auto___36972);

return statearr_36971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___36972,ch,actx,detune_param,map__36934,map__36934__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("webcv.chan","mult-out","webcv.chan/mult-out",1070529409).cljs$core$IFn$_invoke$arity$1(src),ch);
}));
cljs.core._add_method.call(null,webcv.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),new cljs.core.Keyword("webcv.sampler","sampler-node","webcv.sampler/sampler-node",1633438443)], null),(function (_,src,dest,___$1){
return src.connect((function (){var target_obj_36984 = new cljs.core.Keyword("webcv.sampler","detune-controller","webcv.sampler/detune-controller",-1694044649).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__36986 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36987 = oops.state.prepare_state.call(null,target_obj_36984,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36987;

try{var next_obj_36985 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_36984,(0),"offset",true,true,false))?(target_obj_36984["offset"]):null);
return next_obj_36985;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36986;
}})());
}));
cljs.core._add_method.call(null,webcv.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.sampler","sampler-node","webcv.sampler/sampler-node",1633438443),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852)], null),(function (_,src,dest,p__36988){
var map__36989 = p__36988;
var map__36989__$1 = (((((!((map__36989 == null))))?(((((map__36989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36989):map__36989);
var param_name = cljs.core.get.call(null,map__36989__$1,new cljs.core.Keyword("webcv.synthdef","param-name","webcv.synthdef/param-name",-328756077));
return new cljs.core.Keyword("webcv.sampler","output","webcv.sampler/output",-852767954).cljs$core$IFn$_invoke$arity$1(src).connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("webcv.audio","input","webcv.audio/input",1702213034),param_name))?(function (){var target_obj_36991 = dest;
var _STAR_runtime_state_STAR__orig_val__36992 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36993 = oops.state.prepare_state.call(null,target_obj_36991,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36993;

try{return oops.core.get_selector_dynamically.call(null,target_obj_36991,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36992;
}})():dest));
}));
webcv.sampler.note__GT_detune = (function webcv$sampler$note__GT_detune(note){
return ((100) * (note - (60)));
});
webcv.sampler.sampler = (function webcv$sampler$sampler(filename,trigger,detune){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.sampler","sampler-node","webcv.sampler/sampler-node",1633438443),new cljs.core.Keyword("webcv.sampler","filename","webcv.sampler/filename",2082982354),filename], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.sampler","trigger","webcv.sampler/trigger",1427415166),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger], null),"detune",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [detune], null)], null));
});

//# sourceMappingURL=sampler.js.map?rel=1601399208112
