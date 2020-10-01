// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.sampler');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('oops.core');
goog.require('fugue.audio');
goog.require('fugue.chan');
goog.require('fugue.ramp');
goog.require('fugue.synthdef');
cljs.core._add_method.call(null,fugue.synthdef.node_spec,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__35015){
return cljs.core.map_QMARK_.call(null,G__35015);
}),(function (G__35015){
return cljs.core.contains_QMARK_.call(null,G__35015,new cljs.core.Keyword("fugue.sampler","filename","fugue.sampler/filename",1571739795));
})], null),(function (G__35015){
return ((cljs.core.map_QMARK_.call(null,G__35015)) && (cljs.core.contains_QMARK_.call(null,G__35015,new cljs.core.Keyword("fugue.sampler","filename","fugue.sampler/filename",1571739795))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","filename","fugue.sampler/filename",1571739795)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","filename","fugue.sampler/filename",1571739795)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","filename","fugue.sampler/filename",1571739795)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.sampler","filename","fugue.sampler/filename",1571739795)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.synthdef.make_node,new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),(function (p__35016,p__35017){
var map__35018 = p__35016;
var map__35018__$1 = (((((!((map__35018 == null))))?(((((map__35018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35018):map__35018);
var actx = cljs.core.get.call(null,map__35018__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var buffer_cache = cljs.core.get.call(null,map__35018__$1,new cljs.core.Keyword("fugue.sampler","buffer-cache","fugue.sampler/buffer-cache",663779996));
var map__35019 = p__35017;
var map__35019__$1 = (((((!((map__35019 == null))))?(((((map__35019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35019):map__35019);
var filename = cljs.core.get.call(null,map__35019__$1,new cljs.core.Keyword("fugue.sampler","filename","fugue.sampler/filename",1571739795));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174),(function (){var G__35022 = actx.createConstantSource();
G__35022.start();

return G__35022;
})(),new cljs.core.Keyword("fugue.sampler","buffer","fugue.sampler/buffer",-224394432),cljs.core.get.call(null,buffer_cache,filename),new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269),actx.createGain()], null);
}));
fugue.sampler.trigger_sample_BANG_ = (function fugue$sampler$trigger_sample_BANG_(sampler_node,actx){
var node = actx.createBufferSource();
var target_obj_35023_35031 = node;
var _STAR_runtime_state_STAR__orig_val__35025_35032 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35026_35033 = oops.state.prepare_state.call(null,target_obj_35023_35031,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35026_35033;

try{var parent_obj_35024_35034 = target_obj_35023_35031;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_35024_35034,(0),"buffer",true,true,true)){
(parent_obj_35024_35034["buffer"] = new cljs.core.Keyword("fugue.sampler","buffer","fugue.sampler/buffer",-224394432).cljs$core$IFn$_invoke$arity$1(sampler_node));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35025_35032;
}
new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(sampler_node).connect((function (){var target_obj_35027 = node;
var _STAR_runtime_state_STAR__orig_val__35029 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35030 = oops.state.prepare_state.call(null,target_obj_35027,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35030;

try{var next_obj_35028 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35027,(0),"detune",true,true,false))?(target_obj_35027["detune"]):null);
return next_obj_35028;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35029;
}})());

node.connect(new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(sampler_node));

return node.start();
});
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,p__35035){
var map__35036 = p__35035;
var map__35036__$1 = (((((!((map__35036 == null))))?(((((map__35036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35036):map__35036);
var param_name = cljs.core.get.call(null,map__35036__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
var ch = cljs.core.async.chan.call(null,(1));
var actx = (function (){var target_obj_35038 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35040 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35041 = oops.state.prepare_state.call(null,target_obj_35038,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35041;

try{var next_obj_35039 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35038,(0),"context",true,true,false))?(target_obj_35038["context"]):null);
return next_obj_35039;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35040;
}})();
var detune_param = (function (){var target_obj_35042 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35044 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35045 = oops.state.prepare_state.call(null,target_obj_35042,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35045;

try{var next_obj_35043 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35042,(0),"offset",true,true,false))?(target_obj_35042["offset"]):null);
return next_obj_35043;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35044;
}})();
var c__32652__auto___35074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32652__auto___35074,ch,actx,detune_param,map__35036,map__35036__$1,param_name){
return (function (){
var f__32653__auto__ = (function (){var switch__32557__auto__ = ((function (c__32652__auto___35074,ch,actx,detune_param,map__35036,map__35036__$1,param_name){
return (function (state_35059){
var state_val_35060 = (state_35059[(1)]);
if((state_val_35060 === (1))){
var state_35059__$1 = state_35059;
var statearr_35061_35075 = state_35059__$1;
(statearr_35061_35075[(2)] = null);

(statearr_35061_35075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35060 === (2))){
var state_35059__$1 = state_35059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35059__$1,(4),ch);
} else {
if((state_val_35060 === (3))){
var inst_35057 = (state_35059[(2)]);
var state_35059__$1 = state_35059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35059__$1,inst_35057);
} else {
if((state_val_35060 === (4))){
var inst_35048 = (state_35059[(2)]);
var state_35059__$1 = (function (){var statearr_35062 = state_35059;
(statearr_35062[(7)] = inst_35048);

return statearr_35062;
})();
var G__35063_35076 = param_name;
var G__35063_35077__$1 = (((G__35063_35076 instanceof cljs.core.Keyword))?G__35063_35076.fqn:null);
switch (G__35063_35077__$1) {
case "fugue.sampler/trigger":
var statearr_35064_35079 = state_35059__$1;
(statearr_35064_35079[(1)] = (6));


break;
case "fugue.sampler/detune":
var statearr_35065_35080 = state_35059__$1;
(statearr_35065_35080[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35063_35077__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35060 === (5))){
var inst_35054 = (state_35059[(2)]);
var state_35059__$1 = (function (){var statearr_35066 = state_35059;
(statearr_35066[(8)] = inst_35054);

return statearr_35066;
})();
var statearr_35067_35081 = state_35059__$1;
(statearr_35067_35081[(2)] = null);

(statearr_35067_35081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35060 === (6))){
var inst_35049 = fugue.sampler.trigger_sample_BANG_.call(null,dest,actx);
var state_35059__$1 = state_35059;
var statearr_35068_35082 = state_35059__$1;
(statearr_35068_35082[(2)] = inst_35049);

(statearr_35068_35082[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35060 === (7))){
var inst_35048 = (state_35059[(7)]);
var inst_35051 = fugue.ramp.schedule_BANG_.call(null,detune_param,inst_35048);
var state_35059__$1 = state_35059;
var statearr_35069_35083 = state_35059__$1;
(statearr_35069_35083[(2)] = inst_35051);

(statearr_35069_35083[(1)] = (5));


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
});})(c__32652__auto___35074,ch,actx,detune_param,map__35036,map__35036__$1,param_name))
;
return ((function (switch__32557__auto__,c__32652__auto___35074,ch,actx,detune_param,map__35036,map__35036__$1,param_name){
return (function() {
var fugue$sampler$state_machine__32558__auto__ = null;
var fugue$sampler$state_machine__32558__auto____0 = (function (){
var statearr_35070 = [null,null,null,null,null,null,null,null,null];
(statearr_35070[(0)] = fugue$sampler$state_machine__32558__auto__);

(statearr_35070[(1)] = (1));

return statearr_35070;
});
var fugue$sampler$state_machine__32558__auto____1 = (function (state_35059){
while(true){
var ret_value__32559__auto__ = (function (){try{while(true){
var result__32560__auto__ = switch__32557__auto__.call(null,state_35059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32560__auto__;
}
break;
}
}catch (e35071){if((e35071 instanceof Object)){
var ex__32561__auto__ = e35071;
var statearr_35072_35084 = state_35059;
(statearr_35072_35084[(5)] = ex__32561__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32559__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35085 = state_35059;
state_35059 = G__35085;
continue;
} else {
return ret_value__32559__auto__;
}
break;
}
});
fugue$sampler$state_machine__32558__auto__ = function(state_35059){
switch(arguments.length){
case 0:
return fugue$sampler$state_machine__32558__auto____0.call(this);
case 1:
return fugue$sampler$state_machine__32558__auto____1.call(this,state_35059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$sampler$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$sampler$state_machine__32558__auto____0;
fugue$sampler$state_machine__32558__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$sampler$state_machine__32558__auto____1;
return fugue$sampler$state_machine__32558__auto__;
})()
;})(switch__32557__auto__,c__32652__auto___35074,ch,actx,detune_param,map__35036,map__35036__$1,param_name))
})();
var state__32654__auto__ = (function (){var statearr_35073 = f__32653__auto__.call(null);
(statearr_35073[(6)] = c__32652__auto___35074);

return statearr_35073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32654__auto__);
});})(c__32652__auto___35074,ch,actx,detune_param,map__35036,map__35036__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878).cljs$core$IFn$_invoke$arity$1(src),ch);
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772)], null),(function (_,src,dest,___$1){
return src.connect((function (){var target_obj_35086 = new cljs.core.Keyword("fugue.sampler","detune-controller","fugue.sampler/detune-controller",2072505174).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__35088 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35089 = oops.state.prepare_state.call(null,target_obj_35086,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35089;

try{var next_obj_35087 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35086,(0),"offset",true,true,false))?(target_obj_35086["offset"]):null);
return next_obj_35087;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35088;
}})());
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__35090){
var map__35091 = p__35090;
var map__35091__$1 = (((((!((map__35091 == null))))?(((((map__35091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35091):map__35091);
var param_name = cljs.core.get.call(null,map__35091__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
return new cljs.core.Keyword("fugue.sampler","output","fugue.sampler/output",-357653269).cljs$core$IFn$_invoke$arity$1(src).connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),param_name))?(function (){var target_obj_35093 = dest;
var _STAR_runtime_state_STAR__orig_val__35094 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__35095 = oops.state.prepare_state.call(null,target_obj_35093,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__35095;

try{return oops.core.get_selector_dynamically.call(null,target_obj_35093,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__35094;
}})():dest));
}));
fugue.sampler.note__GT_detune = (function fugue$sampler$note__GT_detune(note){
return ((100) * (note - (60)));
});
fugue.sampler.sampler = (function fugue$sampler$sampler(filename,trigger,detune){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.sampler","sampler-node","fugue.sampler/sampler-node",-1948162772),new cljs.core.Keyword("fugue.sampler","filename","fugue.sampler/filename",1571739795),filename], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.sampler","trigger","fugue.sampler/trigger",1938922045),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger], null),"detune",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [detune], null)], null));
});

//# sourceMappingURL=sampler.js.map?rel=1601516659622
