// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.audio');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('oops.core');
goog.require('webcv.synthdef');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),new cljs.core.Symbol("js","AudioContext","js/AudioContext",406950847,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__34538_SHARP_){
return (AudioContext === cljs.core.type.call(null,p1__34538_SHARP_));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),new cljs.core.Symbol("js","ChannelMergerNode","js/ChannelMergerNode",-695792816,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__34539_SHARP_){
return (ChannelMergerNode === cljs.core.type.call(null,p1__34539_SHARP_));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","node","webcv.audio/node",403635907),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),new cljs.core.Symbol("js","AudioNode","js/AudioNode",1561561537,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__34540_SHARP_){
return (AudioNode === cljs.core.type.call(null,p1__34540_SHARP_));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","ctx","webcv.audio/ctx",-1630553873),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438),new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34541){
return cljs.core.map_QMARK_.call(null,G__34541);
}),(function (G__34541){
return cljs.core.contains_QMARK_.call(null,G__34541,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
}),(function (G__34541){
return cljs.core.contains_QMARK_.call(null,G__34541,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968));
})], null),(function (G__34541){
return ((cljs.core.map_QMARK_.call(null,G__34541)) && (cljs.core.contains_QMARK_.call(null,G__34541,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438))) && (cljs.core.contains_QMARK_.call(null,G__34541,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438),new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438),new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438),new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968)))], null),null])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
if((typeof webcv !== 'undefined') && (typeof webcv.audio !== 'undefined') && (typeof webcv.audio.audio_node_spec !== 'undefined')){
} else {
webcv.audio.audio_node_spec = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"webcv.audio","audio-node-spec"),new cljs.core.Keyword("webcv.audio","audio-node-type","webcv.audio/audio-node-type",1987210761),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,webcv.synthdef.node_spec,new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),(function (_){
return cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("webcv.audio","audio-node-spec","webcv.audio/audio-node-spec",2011150829,null),new cljs.core.Var(function(){return webcv.audio.audio_node_spec;},new cljs.core.Symbol("webcv.audio","audio-node-spec","webcv.audio/audio-node-spec",2011150829,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"webcv.audio","webcv.audio",1590939795,null),new cljs.core.Symbol(null,"audio-node-spec","audio-node-spec",865813468,null),"src/webcv/audio.cljs",26,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(webcv.audio.audio_node_spec)?webcv.audio.audio_node_spec.cljs$lang$test:null)])),new cljs.core.Keyword("webcv.audio","audio-node-type","webcv.audio/audio-node-type",1987210761));
}));
cljs.core._add_method.call(null,webcv.audio.audio_node_spec,new cljs.core.Keyword("webcv.audio","output","webcv.audio/output",1909608704),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34542){
return cljs.core.map_QMARK_.call(null,G__34542);
}),(function (G__34542){
return cljs.core.contains_QMARK_.call(null,G__34542,new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658));
})], null),(function (G__34542){
return ((cljs.core.map_QMARK_.call(null,G__34542)) && (cljs.core.contains_QMARK_.call(null,G__34542,new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.audio.audio_node_spec,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34543){
return cljs.core.map_QMARK_.call(null,G__34543);
}),(function (G__34543){
return cljs.core.contains_QMARK_.call(null,G__34543,new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060));
})], null),(function (G__34543){
return ((cljs.core.map_QMARK_.call(null,G__34543)) && (cljs.core.contains_QMARK_.call(null,G__34543,new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060)))], null),null]));
}));
if((typeof webcv !== 'undefined') && (typeof webcv.audio !== 'undefined') && (typeof webcv.audio.make_audio_node !== 'undefined')){
} else {
webcv.audio.make_audio_node = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"webcv.audio","make-audio-node"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (_,nodedef){
return new cljs.core.Keyword("webcv.audio","audio-node-type","webcv.audio/audio-node-type",1987210761).cljs$core$IFn$_invoke$arity$1(nodedef);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,webcv.synthdef.make_node,new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),(function (ctx,nodedef){
return webcv.audio.make_audio_node.call(null,ctx,nodedef);
}));
webcv.audio.make_ctx = (function webcv$audio$make_ctx(){
var _PERCENT_ = (function (){var ctx = (new AudioContext());
var dest = ctx.destination;
var out_chans = dest.maxChannelCount;
var outs = ctx.createChannelMerger(out_chans);
dest.channelCount = out_chans;

outs.connect(dest);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438),ctx,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968),outs], null);
})();
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("webcv.audio","ctx","webcv.audio/ctx",-1630553873),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :webcv.audio/ctx %)"));
}

return _PERCENT_;
});
cljs.core._add_method.call(null,webcv.audio.make_audio_node,new cljs.core.Keyword("webcv.audio","output","webcv.audio/output",1909608704),(function (p__34544,p__34545){
var map__34546 = p__34544;
var map__34546__$1 = (((((!((map__34546 == null))))?(((((map__34546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34546):map__34546);
var actx = cljs.core.get.call(null,map__34546__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
var outs = cljs.core.get.call(null,map__34546__$1,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968));
var map__34547 = p__34545;
var map__34547__$1 = (((((!((map__34547 == null))))?(((((map__34547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34547):map__34547);
var channel_idx = cljs.core.get.call(null,map__34547__$1,new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658));
var G__34550 = actx.createGain();
G__34550.connect(outs,(0),channel_idx);

return G__34550;
}));
webcv.audio.set_param = (function webcv$audio$set_param(node,param_name,value){
if(typeof value === 'number'){
var target_obj_34555 = node;
var _STAR_runtime_state_STAR__orig_val__34556 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34557 = oops.state.prepare_state.call(null,target_obj_34555,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34557;

try{oops.core.set_selector_dynamically.call(null,target_obj_34555,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_name),".value"].join(''),value);

return target_obj_34555;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34556;
}} else {
if((((!((value == null))))?(((((value.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IWatchable$))))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,value))){
return cljs.core.add_watch.call(null,value,param_name,(function (p1__34552_SHARP_,p2__34553_SHARP_,p3__34554_SHARP_,p4__34551_SHARP_){
return webcv.audio.set_param.call(null,node,param_name,p4__34551_SHARP_);
}));
} else {
return null;
}
}
});
cljs.core._add_method.call(null,webcv.audio.make_audio_node,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__34559,p__34560){
var map__34561 = p__34559;
var map__34561__$1 = (((((!((map__34561 == null))))?(((((map__34561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34561):map__34561);
var actx = cljs.core.get.call(null,map__34561__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
var map__34562 = p__34560;
var map__34562__$1 = (((((!((map__34562 == null))))?(((((map__34562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34562):map__34562);
var audio_node_type = cljs.core.get.call(null,map__34562__$1,new cljs.core.Keyword("webcv.audio","audio-node-type","webcv.audio/audio-node-type",1987210761));
var constructor$ = cljs.core.get.call(null,map__34562__$1,new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060));
var props = cljs.core.get.call(null,map__34562__$1,new cljs.core.Keyword("webcv.audio","props","webcv.audio/props",1497882094));
var static_params = cljs.core.get.call(null,map__34562__$1,new cljs.core.Keyword("webcv.synthdef","static-params","webcv.synthdef/static-params",-622811484));
var node = cljs.core.js_invoke.call(null,actx,constructor$);
var seq__34565_34609 = cljs.core.seq.call(null,props);
var chunk__34566_34610 = null;
var count__34567_34611 = (0);
var i__34568_34612 = (0);
while(true){
if((i__34568_34612 < count__34567_34611)){
var vec__34581_34613 = cljs.core._nth.call(null,chunk__34566_34610,i__34568_34612);
var k_34614 = cljs.core.nth.call(null,vec__34581_34613,(0),null);
var v_34615 = cljs.core.nth.call(null,vec__34581_34613,(1),null);
var target_obj_34584_34616 = node;
var _STAR_runtime_state_STAR__orig_val__34585_34617 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34586_34618 = oops.state.prepare_state.call(null,target_obj_34584_34616,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34586_34618;

try{oops.core.set_selector_dynamically.call(null,target_obj_34584_34616,k_34614,v_34615);

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34585_34617;
}

var G__34619 = seq__34565_34609;
var G__34620 = chunk__34566_34610;
var G__34621 = count__34567_34611;
var G__34622 = (i__34568_34612 + (1));
seq__34565_34609 = G__34619;
chunk__34566_34610 = G__34620;
count__34567_34611 = G__34621;
i__34568_34612 = G__34622;
continue;
} else {
var temp__5720__auto___34623 = cljs.core.seq.call(null,seq__34565_34609);
if(temp__5720__auto___34623){
var seq__34565_34624__$1 = temp__5720__auto___34623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34565_34624__$1)){
var c__4550__auto___34625 = cljs.core.chunk_first.call(null,seq__34565_34624__$1);
var G__34626 = cljs.core.chunk_rest.call(null,seq__34565_34624__$1);
var G__34627 = c__4550__auto___34625;
var G__34628 = cljs.core.count.call(null,c__4550__auto___34625);
var G__34629 = (0);
seq__34565_34609 = G__34626;
chunk__34566_34610 = G__34627;
count__34567_34611 = G__34628;
i__34568_34612 = G__34629;
continue;
} else {
var vec__34587_34630 = cljs.core.first.call(null,seq__34565_34624__$1);
var k_34631 = cljs.core.nth.call(null,vec__34587_34630,(0),null);
var v_34632 = cljs.core.nth.call(null,vec__34587_34630,(1),null);
var target_obj_34590_34633 = node;
var _STAR_runtime_state_STAR__orig_val__34591_34634 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34592_34635 = oops.state.prepare_state.call(null,target_obj_34590_34633,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34592_34635;

try{oops.core.set_selector_dynamically.call(null,target_obj_34590_34633,k_34631,v_34632);

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34591_34634;
}

var G__34636 = cljs.core.next.call(null,seq__34565_34624__$1);
var G__34637 = null;
var G__34638 = (0);
var G__34639 = (0);
seq__34565_34609 = G__34636;
chunk__34566_34610 = G__34637;
count__34567_34611 = G__34638;
i__34568_34612 = G__34639;
continue;
}
} else {
}
}
break;
}

var seq__34593_34640 = cljs.core.seq.call(null,static_params);
var chunk__34594_34641 = null;
var count__34595_34642 = (0);
var i__34596_34643 = (0);
while(true){
if((i__34596_34643 < count__34595_34642)){
var vec__34603_34644 = cljs.core._nth.call(null,chunk__34594_34641,i__34596_34643);
var k_34645 = cljs.core.nth.call(null,vec__34603_34644,(0),null);
var v_34646 = cljs.core.nth.call(null,vec__34603_34644,(1),null);
webcv.audio.set_param.call(null,node,k_34645,v_34646);


var G__34647 = seq__34593_34640;
var G__34648 = chunk__34594_34641;
var G__34649 = count__34595_34642;
var G__34650 = (i__34596_34643 + (1));
seq__34593_34640 = G__34647;
chunk__34594_34641 = G__34648;
count__34595_34642 = G__34649;
i__34596_34643 = G__34650;
continue;
} else {
var temp__5720__auto___34651 = cljs.core.seq.call(null,seq__34593_34640);
if(temp__5720__auto___34651){
var seq__34593_34652__$1 = temp__5720__auto___34651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34593_34652__$1)){
var c__4550__auto___34653 = cljs.core.chunk_first.call(null,seq__34593_34652__$1);
var G__34654 = cljs.core.chunk_rest.call(null,seq__34593_34652__$1);
var G__34655 = c__4550__auto___34653;
var G__34656 = cljs.core.count.call(null,c__4550__auto___34653);
var G__34657 = (0);
seq__34593_34640 = G__34654;
chunk__34594_34641 = G__34655;
count__34595_34642 = G__34656;
i__34596_34643 = G__34657;
continue;
} else {
var vec__34606_34658 = cljs.core.first.call(null,seq__34593_34652__$1);
var k_34659 = cljs.core.nth.call(null,vec__34606_34658,(0),null);
var v_34660 = cljs.core.nth.call(null,vec__34606_34658,(1),null);
webcv.audio.set_param.call(null,node,k_34659,v_34660);


var G__34661 = cljs.core.next.call(null,seq__34593_34652__$1);
var G__34662 = null;
var G__34663 = (0);
var G__34664 = (0);
seq__34593_34640 = G__34661;
chunk__34594_34641 = G__34662;
count__34595_34642 = G__34663;
i__34596_34643 = G__34664;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword("webcv.audio","source","webcv.audio/source",-1234292092),audio_node_type)){
node.start();
} else {
}

return node;
}));
cljs.core._add_method.call(null,webcv.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852)], null),(function (_,src,dest,p__34665){
var map__34666 = p__34665;
var map__34666__$1 = (((((!((map__34666 == null))))?(((((map__34666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34666):map__34666);
var param_name = cljs.core.get.call(null,map__34666__$1,new cljs.core.Keyword("webcv.synthdef","param-name","webcv.synthdef/param-name",-328756077));
return src.connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("webcv.audio","input","webcv.audio/input",1702213034),param_name))?(function (){var target_obj_34668 = dest;
var _STAR_runtime_state_STAR__orig_val__34669 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__34670 = oops.state.prepare_state.call(null,target_obj_34668,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__34670;

try{return oops.core.get_selector_dynamically.call(null,target_obj_34668,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__34669;
}})():dest));
}));
webcv.audio.out = (function webcv$audio$out(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34672 = arguments.length;
var i__4731__auto___34673 = (0);
while(true){
if((i__4731__auto___34673 < len__4730__auto___34672)){
args__4736__auto__.push((arguments[i__4731__auto___34673]));

var G__34674 = (i__4731__auto___34673 + (1));
i__4731__auto___34673 = G__34674;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return webcv.audio.out.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

webcv.audio.out.cljs$core$IFn$_invoke$arity$variadic = (function (ins){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),new cljs.core.Keyword("webcv.audio","audio-node-type","webcv.audio/audio-node-type",1987210761),new cljs.core.Keyword("webcv.audio","output","webcv.audio/output",1909608704),new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658),(0)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("webcv.audio","input","webcv.audio/input",1702213034),ins], null));
});

webcv.audio.out.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
webcv.audio.out.cljs$lang$applyTo = (function (seq34671){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34671));
});

webcv.audio.gain = (function webcv$audio$gain(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34677 = arguments.length;
var i__4731__auto___34678 = (0);
while(true){
if((i__4731__auto___34678 < len__4730__auto___34677)){
args__4736__auto__.push((arguments[i__4731__auto___34678]));

var G__34679 = (i__4731__auto___34678 + (1));
i__4731__auto___34678 = G__34679;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return webcv.audio.gain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

webcv.audio.gain.cljs$core$IFn$_invoke$arity$variadic = (function (in$,gains){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),new cljs.core.Keyword("webcv.audio","audio-node-type","webcv.audio/audio-node-type",1987210761),new cljs.core.Keyword("webcv.audio","effect","webcv.audio/effect",-933765172),new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060),"createGain"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.audio","input","webcv.audio/input",1702213034),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null),"gain",gains], null));
});

webcv.audio.gain.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
webcv.audio.gain.cljs$lang$applyTo = (function (seq34675){
var G__34676 = cljs.core.first.call(null,seq34675);
var seq34675__$1 = cljs.core.next.call(null,seq34675);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34676,seq34675__$1);
});

webcv.audio.mix = (function webcv$audio$mix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34681 = arguments.length;
var i__4731__auto___34682 = (0);
while(true){
if((i__4731__auto___34682 < len__4730__auto___34681)){
args__4736__auto__.push((arguments[i__4731__auto___34682]));

var G__34683 = (i__4731__auto___34682 + (1));
i__4731__auto___34682 = G__34683;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return webcv.audio.mix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

webcv.audio.mix.cljs$core$IFn$_invoke$arity$variadic = (function (ins){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),new cljs.core.Keyword("webcv.audio","audio-node-type","webcv.audio/audio-node-type",1987210761),new cljs.core.Keyword("webcv.audio","effect","webcv.audio/effect",-933765172),new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060),"createGain"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("webcv.audio","input","webcv.audio/input",1702213034),ins], null));
});

webcv.audio.mix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
webcv.audio.mix.cljs$lang$applyTo = (function (seq34680){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34680));
});

webcv.audio.const$ = (function webcv$audio$const(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34685 = arguments.length;
var i__4731__auto___34686 = (0);
while(true){
if((i__4731__auto___34686 < len__4730__auto___34685)){
args__4736__auto__.push((arguments[i__4731__auto___34686]));

var G__34687 = (i__4731__auto___34686 + (1));
i__4731__auto___34686 = G__34687;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return webcv.audio.const$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

webcv.audio.const$.cljs$core$IFn$_invoke$arity$variadic = (function (offsets){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),new cljs.core.Keyword("webcv.audio","audio-node-type","webcv.audio/audio-node-type",1987210761),new cljs.core.Keyword("webcv.audio","source","webcv.audio/source",-1234292092),new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060),"createConstantSource"], null),new cljs.core.PersistentArrayMap(null, 1, ["offset",offsets], null));
});

webcv.audio.const$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
webcv.audio.const$.cljs$lang$applyTo = (function (seq34684){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34684));
});

webcv.audio.oscillator = (function webcv$audio$oscillator(var_args){
var G__34689 = arguments.length;
switch (G__34689) {
case 2:
return webcv.audio.oscillator.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return webcv.audio.oscillator.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

webcv.audio.oscillator.cljs$core$IFn$_invoke$arity$2 = (function (type,frequency){
return webcv.audio.oscillator.call(null,type,frequency,(0));
});

webcv.audio.oscillator.cljs$core$IFn$_invoke$arity$3 = (function (type,frequency,detune){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),new cljs.core.Keyword("webcv.audio","audio-node-type","webcv.audio/audio-node-type",1987210761),new cljs.core.Keyword("webcv.audio","source","webcv.audio/source",-1234292092),new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060),"createOscillator",new cljs.core.Keyword("webcv.audio","props","webcv.audio/props",1497882094),new cljs.core.PersistentArrayMap(null, 1, ["type",type], null)], null),new cljs.core.PersistentArrayMap(null, 2, ["frequency",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),frequency], null),"detune",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),detune], null)], null));
});

webcv.audio.oscillator.cljs$lang$maxFixedArity = 3;

webcv.audio.sin_osc = cljs.core.partial.call(null,webcv.audio.oscillator,"sine");
webcv.audio.saw = cljs.core.partial.call(null,webcv.audio.oscillator,"sawtooth");
webcv.audio.square = cljs.core.partial.call(null,webcv.audio.oscillator,"square");
webcv.audio.tri_osc = cljs.core.partial.call(null,webcv.audio.oscillator,"triangle");
webcv.audio.lfo = (function webcv$audio$lfo(bias,scale,freq){
return webcv.audio.mix.call(null,webcv.audio.const$.call(null,bias),webcv.audio.gain.call(null,webcv.audio.sin_osc.call(null,freq),scale));
});
webcv.audio.biquad_filter = (function webcv$audio$biquad_filter(var_args){
var G__34692 = arguments.length;
switch (G__34692) {
case 3:
return webcv.audio.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return webcv.audio.biquad_filter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

webcv.audio.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,in$,freq){
return webcv.audio.biquad_filter.call(null,type,in$,freq,(-1));
});

webcv.audio.biquad_filter.cljs$core$IFn$_invoke$arity$4 = (function (type,in$,freq,q){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),new cljs.core.Keyword("webcv.audio","audio-node-type","webcv.audio/audio-node-type",1987210761),new cljs.core.Keyword("webcv.audio","effect","webcv.audio/effect",-933765172),new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060),"createBiquadFilter",new cljs.core.Keyword("webcv.audio","props","webcv.audio/props",1497882094),new cljs.core.PersistentArrayMap(null, 1, ["type",type], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.audio","input","webcv.audio/input",1702213034),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null),"frequency",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),freq], null),"Q",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),q], null)], null));
});

webcv.audio.biquad_filter.cljs$lang$maxFixedArity = 4;

webcv.audio.lpf = cljs.core.partial.call(null,webcv.audio.biquad_filter,"lowpass");
webcv.audio.hpf = cljs.core.partial.call(null,webcv.audio.biquad_filter,"highpass");
webcv.audio.bpf = cljs.core.partial.call(null,webcv.audio.biquad_filter,"bandpass");
webcv.audio.delay_node = (function webcv$audio$delay_node(in$,time){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),new cljs.core.Keyword("webcv.audio","audio-node-type","webcv.audio/audio-node-type",1987210761),new cljs.core.Keyword("webcv.audio","effect","webcv.audio/effect",-933765172),new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060),"createDelay"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.audio","input","webcv.audio/input",1702213034),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null),"delayTime",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),time], null)], null));
});

//# sourceMappingURL=audio.js.map?rel=1601321438570
