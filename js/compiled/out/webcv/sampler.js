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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36962){
return cljs.core.map_QMARK_.call(null,G__36962);
}),(function (G__36962){
return cljs.core.contains_QMARK_.call(null,G__36962,new cljs.core.Keyword("webcv.sampler","filename","webcv.sampler/filename",2082982354));
})], null),(function (G__36962){
return ((cljs.core.map_QMARK_.call(null,G__36962)) && (cljs.core.contains_QMARK_.call(null,G__36962,new cljs.core.Keyword("webcv.sampler","filename","webcv.sampler/filename",2082982354))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.sampler","filename","webcv.sampler/filename",2082982354)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.sampler","filename","webcv.sampler/filename",2082982354)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.sampler","filename","webcv.sampler/filename",2082982354)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.sampler","filename","webcv.sampler/filename",2082982354)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.synthdef.make_node,new cljs.core.Keyword("webcv.sampler","sampler-node","webcv.sampler/sampler-node",1633438443),(function (p__36963,p__36964){
var map__36965 = p__36963;
var map__36965__$1 = (((((!((map__36965 == null))))?(((((map__36965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36965):map__36965);
var actx = cljs.core.get.call(null,map__36965__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
var buffer_cache = cljs.core.get.call(null,map__36965__$1,new cljs.core.Keyword("webcv.sampler","buffer-cache","webcv.sampler/buffer-cache",169183323));
var map__36966 = p__36964;
var map__36966__$1 = (((((!((map__36966 == null))))?(((((map__36966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36966):map__36966);
var filename = cljs.core.get.call(null,map__36966__$1,new cljs.core.Keyword("webcv.sampler","filename","webcv.sampler/filename",2082982354));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.sampler","detune-controller","webcv.sampler/detune-controller",-1694044649),(function (){var G__36969 = actx.createConstantSource();
G__36969.start();

return G__36969;
})(),new cljs.core.Keyword("webcv.sampler","buffer","webcv.sampler/buffer",1445792127),cljs.core.get.call(null,buffer_cache,filename),new cljs.core.Keyword("webcv.sampler","output","webcv.sampler/output",-852767954),actx.createGain()], null);
}));
webcv.sampler.trigger_sample_BANG_ = (function webcv$sampler$trigger_sample_BANG_(sampler_node,actx){
var node = actx.createBufferSource();
var target_obj_36970_36978 = node;
var _STAR_runtime_state_STAR__orig_val__36972_36979 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36973_36980 = oops.state.prepare_state.call(null,target_obj_36970_36978,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36973_36980;

try{var parent_obj_36971_36981 = target_obj_36970_36978;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_36971_36981,(0),"buffer",true,true,true)){
(parent_obj_36971_36981["buffer"] = new cljs.core.Keyword("webcv.sampler","buffer","webcv.sampler/buffer",1445792127).cljs$core$IFn$_invoke$arity$1(sampler_node));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36972_36979;
}
new cljs.core.Keyword("webcv.sampler","detune-controller","webcv.sampler/detune-controller",-1694044649).cljs$core$IFn$_invoke$arity$1(sampler_node).connect((function (){var target_obj_36974 = node;
var _STAR_runtime_state_STAR__orig_val__36976 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36977 = oops.state.prepare_state.call(null,target_obj_36974,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36977;

try{var next_obj_36975 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_36974,(0),"detune",true,true,false))?(target_obj_36974["detune"]):null);
return next_obj_36975;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36976;
}})());

node.connect(new cljs.core.Keyword("webcv.sampler","output","webcv.sampler/output",-852767954).cljs$core$IFn$_invoke$arity$1(sampler_node));

return node.start();
});
cljs.core._add_method.call(null,webcv.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.sampler","sampler-node","webcv.sampler/sampler-node",1633438443)], null),(function (_,src,dest,p__36982){
var map__36983 = p__36982;
var map__36983__$1 = (((((!((map__36983 == null))))?(((((map__36983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36983):map__36983);
var param_name = cljs.core.get.call(null,map__36983__$1,new cljs.core.Keyword("webcv.synthdef","param-name","webcv.synthdef/param-name",-328756077));
var ch = cljs.core.async.chan.call(null,(1));
var actx = (function (){var target_obj_36985 = new cljs.core.Keyword("webcv.sampler","detune-controller","webcv.sampler/detune-controller",-1694044649).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__36987 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36988 = oops.state.prepare_state.call(null,target_obj_36985,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36988;

try{var next_obj_36986 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_36985,(0),"context",true,true,false))?(target_obj_36985["context"]):null);
return next_obj_36986;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36987;
}})();
var detune_param = (function (){var target_obj_36989 = new cljs.core.Keyword("webcv.sampler","detune-controller","webcv.sampler/detune-controller",-1694044649).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__36991 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36992 = oops.state.prepare_state.call(null,target_obj_36989,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36992;

try{var next_obj_36990 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_36989,(0),"offset",true,true,false))?(target_obj_36989["offset"]):null);
return next_obj_36990;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36991;
}})();
var c__32649__auto___37021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32649__auto___37021,ch,actx,detune_param,map__36983,map__36983__$1,param_name){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (c__32649__auto___37021,ch,actx,detune_param,map__36983,map__36983__$1,param_name){
return (function (state_37006){
var state_val_37007 = (state_37006[(1)]);
if((state_val_37007 === (1))){
var state_37006__$1 = state_37006;
var statearr_37008_37022 = state_37006__$1;
(statearr_37008_37022[(2)] = null);

(statearr_37008_37022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37007 === (2))){
var state_37006__$1 = state_37006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37006__$1,(4),ch);
} else {
if((state_val_37007 === (3))){
var inst_37004 = (state_37006[(2)]);
var state_37006__$1 = state_37006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37006__$1,inst_37004);
} else {
if((state_val_37007 === (4))){
var inst_36995 = (state_37006[(2)]);
var state_37006__$1 = (function (){var statearr_37009 = state_37006;
(statearr_37009[(7)] = inst_36995);

return statearr_37009;
})();
var G__37010_37023 = param_name;
var G__37010_37024__$1 = (((G__37010_37023 instanceof cljs.core.Keyword))?G__37010_37023.fqn:null);
switch (G__37010_37024__$1) {
case "webcv.sampler/trigger":
var statearr_37011_37026 = state_37006__$1;
(statearr_37011_37026[(1)] = (6));


break;
case "webcv.sampler/detune":
var statearr_37012_37027 = state_37006__$1;
(statearr_37012_37027[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37010_37024__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37007 === (5))){
var inst_37001 = (state_37006[(2)]);
var state_37006__$1 = (function (){var statearr_37013 = state_37006;
(statearr_37013[(8)] = inst_37001);

return statearr_37013;
})();
var statearr_37014_37028 = state_37006__$1;
(statearr_37014_37028[(2)] = null);

(statearr_37014_37028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37007 === (6))){
var inst_36996 = webcv.sampler.trigger_sample_BANG_.call(null,dest,actx);
var state_37006__$1 = state_37006;
var statearr_37015_37029 = state_37006__$1;
(statearr_37015_37029[(2)] = inst_36996);

(statearr_37015_37029[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37007 === (7))){
var inst_36995 = (state_37006[(7)]);
var inst_36998 = webcv.ramp.schedule_BANG_.call(null,detune_param,inst_36995);
var state_37006__$1 = state_37006;
var statearr_37016_37030 = state_37006__$1;
(statearr_37016_37030[(2)] = inst_36998);

(statearr_37016_37030[(1)] = (5));


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
});})(c__32649__auto___37021,ch,actx,detune_param,map__36983,map__36983__$1,param_name))
;
return ((function (switch__32554__auto__,c__32649__auto___37021,ch,actx,detune_param,map__36983,map__36983__$1,param_name){
return (function() {
var webcv$sampler$state_machine__32555__auto__ = null;
var webcv$sampler$state_machine__32555__auto____0 = (function (){
var statearr_37017 = [null,null,null,null,null,null,null,null,null];
(statearr_37017[(0)] = webcv$sampler$state_machine__32555__auto__);

(statearr_37017[(1)] = (1));

return statearr_37017;
});
var webcv$sampler$state_machine__32555__auto____1 = (function (state_37006){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_37006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e37018){if((e37018 instanceof Object)){
var ex__32558__auto__ = e37018;
var statearr_37019_37031 = state_37006;
(statearr_37019_37031[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37032 = state_37006;
state_37006 = G__37032;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
webcv$sampler$state_machine__32555__auto__ = function(state_37006){
switch(arguments.length){
case 0:
return webcv$sampler$state_machine__32555__auto____0.call(this);
case 1:
return webcv$sampler$state_machine__32555__auto____1.call(this,state_37006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$sampler$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$sampler$state_machine__32555__auto____0;
webcv$sampler$state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$sampler$state_machine__32555__auto____1;
return webcv$sampler$state_machine__32555__auto__;
})()
;})(switch__32554__auto__,c__32649__auto___37021,ch,actx,detune_param,map__36983,map__36983__$1,param_name))
})();
var state__32651__auto__ = (function (){var statearr_37020 = f__32650__auto__.call(null);
(statearr_37020[(6)] = c__32649__auto___37021);

return statearr_37020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(c__32649__auto___37021,ch,actx,detune_param,map__36983,map__36983__$1,param_name))
);


return cljs.core.async.tap.call(null,new cljs.core.Keyword("webcv.chan","mult-out","webcv.chan/mult-out",1070529409).cljs$core$IFn$_invoke$arity$1(src),ch);
}));
cljs.core._add_method.call(null,webcv.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),new cljs.core.Keyword("webcv.sampler","sampler-node","webcv.sampler/sampler-node",1633438443)], null),(function (_,src,dest,___$1){
return src.connect((function (){var target_obj_37033 = new cljs.core.Keyword("webcv.sampler","detune-controller","webcv.sampler/detune-controller",-1694044649).cljs$core$IFn$_invoke$arity$1(dest);
var _STAR_runtime_state_STAR__orig_val__37035 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__37036 = oops.state.prepare_state.call(null,target_obj_37033,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__37036;

try{var next_obj_37034 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37033,(0),"offset",true,true,false))?(target_obj_37033["offset"]):null);
return next_obj_37034;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__37035;
}})());
}));
cljs.core._add_method.call(null,webcv.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.sampler","sampler-node","webcv.sampler/sampler-node",1633438443),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852)], null),(function (_,src,dest,p__37037){
var map__37038 = p__37037;
var map__37038__$1 = (((((!((map__37038 == null))))?(((((map__37038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37038):map__37038);
var param_name = cljs.core.get.call(null,map__37038__$1,new cljs.core.Keyword("webcv.synthdef","param-name","webcv.synthdef/param-name",-328756077));
return new cljs.core.Keyword("webcv.sampler","output","webcv.sampler/output",-852767954).cljs$core$IFn$_invoke$arity$1(src).connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("webcv.audio","input","webcv.audio/input",1702213034),param_name))?(function (){var target_obj_37040 = dest;
var _STAR_runtime_state_STAR__orig_val__37041 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__37042 = oops.state.prepare_state.call(null,target_obj_37040,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__37042;

try{return oops.core.get_selector_dynamically.call(null,target_obj_37040,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__37041;
}})():dest));
}));
webcv.sampler.note__GT_detune = (function webcv$sampler$note__GT_detune(note){
return ((100) * (note - (60)));
});
webcv.sampler.sampler = (function webcv$sampler$sampler(filename,trigger,detune){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.sampler","sampler-node","webcv.sampler/sampler-node",1633438443),new cljs.core.Keyword("webcv.sampler","filename","webcv.sampler/filename",2082982354),filename], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.sampler","trigger","webcv.sampler/trigger",1427415166),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [trigger], null),"detune",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [detune], null)], null));
});

//# sourceMappingURL=sampler.js.map?rel=1601406065968
