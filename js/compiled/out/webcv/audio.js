// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.audio');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('oops.core');
goog.require('webcv.synthdef');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),new cljs.core.Symbol("js","AudioContext","js/AudioContext",406950847,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__36376_SHARP_){
return (AudioContext === cljs.core.type.call(null,p1__36376_SHARP_));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),new cljs.core.Symbol("js","ChannelMergerNode","js/ChannelMergerNode",-695792816,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__36377_SHARP_){
return (ChannelMergerNode === cljs.core.type.call(null,p1__36377_SHARP_));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","node","webcv.audio/node",403635907),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),new cljs.core.Symbol("js","AudioNode","js/AudioNode",1561561537,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__36378_SHARP_){
return (AudioNode === cljs.core.type.call(null,p1__36378_SHARP_));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","ctx","webcv.audio/ctx",-1630553873),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438),new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36379){
return cljs.core.map_QMARK_.call(null,G__36379);
}),(function (G__36379){
return cljs.core.contains_QMARK_.call(null,G__36379,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
}),(function (G__36379){
return cljs.core.contains_QMARK_.call(null,G__36379,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968));
})], null),(function (G__36379){
return ((cljs.core.map_QMARK_.call(null,G__36379)) && (cljs.core.contains_QMARK_.call(null,G__36379,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438))) && (cljs.core.contains_QMARK_.call(null,G__36379,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968))));
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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36380){
return cljs.core.map_QMARK_.call(null,G__36380);
}),(function (G__36380){
return cljs.core.contains_QMARK_.call(null,G__36380,new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658));
})], null),(function (G__36380){
return ((cljs.core.map_QMARK_.call(null,G__36380)) && (cljs.core.contains_QMARK_.call(null,G__36380,new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.audio.audio_node_spec,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36381){
return cljs.core.map_QMARK_.call(null,G__36381);
}),(function (G__36381){
return cljs.core.contains_QMARK_.call(null,G__36381,new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060));
})], null),(function (G__36381){
return ((cljs.core.map_QMARK_.call(null,G__36381)) && (cljs.core.contains_QMARK_.call(null,G__36381,new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060))));
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
cljs.core._add_method.call(null,webcv.audio.make_audio_node,new cljs.core.Keyword("webcv.audio","output","webcv.audio/output",1909608704),(function (p__36382,p__36383){
var map__36384 = p__36382;
var map__36384__$1 = (((((!((map__36384 == null))))?(((((map__36384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36384):map__36384);
var actx = cljs.core.get.call(null,map__36384__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
var outs = cljs.core.get.call(null,map__36384__$1,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968));
var map__36385 = p__36383;
var map__36385__$1 = (((((!((map__36385 == null))))?(((((map__36385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36385):map__36385);
var channel_idx = cljs.core.get.call(null,map__36385__$1,new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658));
var node = actx.createGain();
if(cljs.core.truth_(channel_idx)){
node.connect(outs,(0),channel_idx);
} else {
node.connect(actx.destination);
}

return node;
}));
webcv.audio.set_param = (function webcv$audio$set_param(node,param_name,value){
if(typeof value === 'number'){
var target_obj_36392 = node;
var _STAR_runtime_state_STAR__orig_val__36393 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36394 = oops.state.prepare_state.call(null,target_obj_36392,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36394;

try{oops.core.set_selector_dynamically.call(null,target_obj_36392,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_name),".value"].join(''),value);

return target_obj_36392;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36393;
}} else {
if((((!((value == null))))?(((((value.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IWatchable$))))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,value))){
return cljs.core.add_watch.call(null,value,param_name,(function (p1__36389_SHARP_,p2__36390_SHARP_,p3__36391_SHARP_,p4__36388_SHARP_){
return webcv.audio.set_param.call(null,node,param_name,p4__36388_SHARP_);
}));
} else {
return null;
}
}
});
cljs.core._add_method.call(null,webcv.audio.make_audio_node,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__36396,p__36397){
var map__36398 = p__36396;
var map__36398__$1 = (((((!((map__36398 == null))))?(((((map__36398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36398):map__36398);
var actx = cljs.core.get.call(null,map__36398__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
var map__36399 = p__36397;
var map__36399__$1 = (((((!((map__36399 == null))))?(((((map__36399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36399):map__36399);
var audio_node_type = cljs.core.get.call(null,map__36399__$1,new cljs.core.Keyword("webcv.audio","audio-node-type","webcv.audio/audio-node-type",1987210761));
var constructor$ = cljs.core.get.call(null,map__36399__$1,new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060));
var props = cljs.core.get.call(null,map__36399__$1,new cljs.core.Keyword("webcv.audio","props","webcv.audio/props",1497882094));
var static_params = cljs.core.get.call(null,map__36399__$1,new cljs.core.Keyword("webcv.synthdef","static-params","webcv.synthdef/static-params",-622811484));
var node = cljs.core.js_invoke.call(null,actx,constructor$);
var seq__36402_36446 = cljs.core.seq.call(null,props);
var chunk__36403_36447 = null;
var count__36404_36448 = (0);
var i__36405_36449 = (0);
while(true){
if((i__36405_36449 < count__36404_36448)){
var vec__36418_36450 = cljs.core._nth.call(null,chunk__36403_36447,i__36405_36449);
var k_36451 = cljs.core.nth.call(null,vec__36418_36450,(0),null);
var v_36452 = cljs.core.nth.call(null,vec__36418_36450,(1),null);
var target_obj_36421_36453 = node;
var _STAR_runtime_state_STAR__orig_val__36422_36454 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36423_36455 = oops.state.prepare_state.call(null,target_obj_36421_36453,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36423_36455;

try{oops.core.set_selector_dynamically.call(null,target_obj_36421_36453,k_36451,v_36452);

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36422_36454;
}

var G__36456 = seq__36402_36446;
var G__36457 = chunk__36403_36447;
var G__36458 = count__36404_36448;
var G__36459 = (i__36405_36449 + (1));
seq__36402_36446 = G__36456;
chunk__36403_36447 = G__36457;
count__36404_36448 = G__36458;
i__36405_36449 = G__36459;
continue;
} else {
var temp__5720__auto___36460 = cljs.core.seq.call(null,seq__36402_36446);
if(temp__5720__auto___36460){
var seq__36402_36461__$1 = temp__5720__auto___36460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36402_36461__$1)){
var c__4550__auto___36462 = cljs.core.chunk_first.call(null,seq__36402_36461__$1);
var G__36463 = cljs.core.chunk_rest.call(null,seq__36402_36461__$1);
var G__36464 = c__4550__auto___36462;
var G__36465 = cljs.core.count.call(null,c__4550__auto___36462);
var G__36466 = (0);
seq__36402_36446 = G__36463;
chunk__36403_36447 = G__36464;
count__36404_36448 = G__36465;
i__36405_36449 = G__36466;
continue;
} else {
var vec__36424_36467 = cljs.core.first.call(null,seq__36402_36461__$1);
var k_36468 = cljs.core.nth.call(null,vec__36424_36467,(0),null);
var v_36469 = cljs.core.nth.call(null,vec__36424_36467,(1),null);
var target_obj_36427_36470 = node;
var _STAR_runtime_state_STAR__orig_val__36428_36471 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36429_36472 = oops.state.prepare_state.call(null,target_obj_36427_36470,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36429_36472;

try{oops.core.set_selector_dynamically.call(null,target_obj_36427_36470,k_36468,v_36469);

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36428_36471;
}

var G__36473 = cljs.core.next.call(null,seq__36402_36461__$1);
var G__36474 = null;
var G__36475 = (0);
var G__36476 = (0);
seq__36402_36446 = G__36473;
chunk__36403_36447 = G__36474;
count__36404_36448 = G__36475;
i__36405_36449 = G__36476;
continue;
}
} else {
}
}
break;
}

var seq__36430_36477 = cljs.core.seq.call(null,static_params);
var chunk__36431_36478 = null;
var count__36432_36479 = (0);
var i__36433_36480 = (0);
while(true){
if((i__36433_36480 < count__36432_36479)){
var vec__36440_36481 = cljs.core._nth.call(null,chunk__36431_36478,i__36433_36480);
var k_36482 = cljs.core.nth.call(null,vec__36440_36481,(0),null);
var v_36483 = cljs.core.nth.call(null,vec__36440_36481,(1),null);
webcv.audio.set_param.call(null,node,k_36482,v_36483);


var G__36484 = seq__36430_36477;
var G__36485 = chunk__36431_36478;
var G__36486 = count__36432_36479;
var G__36487 = (i__36433_36480 + (1));
seq__36430_36477 = G__36484;
chunk__36431_36478 = G__36485;
count__36432_36479 = G__36486;
i__36433_36480 = G__36487;
continue;
} else {
var temp__5720__auto___36488 = cljs.core.seq.call(null,seq__36430_36477);
if(temp__5720__auto___36488){
var seq__36430_36489__$1 = temp__5720__auto___36488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36430_36489__$1)){
var c__4550__auto___36490 = cljs.core.chunk_first.call(null,seq__36430_36489__$1);
var G__36491 = cljs.core.chunk_rest.call(null,seq__36430_36489__$1);
var G__36492 = c__4550__auto___36490;
var G__36493 = cljs.core.count.call(null,c__4550__auto___36490);
var G__36494 = (0);
seq__36430_36477 = G__36491;
chunk__36431_36478 = G__36492;
count__36432_36479 = G__36493;
i__36433_36480 = G__36494;
continue;
} else {
var vec__36443_36495 = cljs.core.first.call(null,seq__36430_36489__$1);
var k_36496 = cljs.core.nth.call(null,vec__36443_36495,(0),null);
var v_36497 = cljs.core.nth.call(null,vec__36443_36495,(1),null);
webcv.audio.set_param.call(null,node,k_36496,v_36497);


var G__36498 = cljs.core.next.call(null,seq__36430_36489__$1);
var G__36499 = null;
var G__36500 = (0);
var G__36501 = (0);
seq__36430_36477 = G__36498;
chunk__36431_36478 = G__36499;
count__36432_36479 = G__36500;
i__36433_36480 = G__36501;
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
cljs.core._add_method.call(null,webcv.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852)], null),(function (_,src,dest,p__36502){
var map__36503 = p__36502;
var map__36503__$1 = (((((!((map__36503 == null))))?(((((map__36503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36503):map__36503);
var param_name = cljs.core.get.call(null,map__36503__$1,new cljs.core.Keyword("webcv.synthdef","param-name","webcv.synthdef/param-name",-328756077));
return src.connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("webcv.audio","input","webcv.audio/input",1702213034),param_name))?(function (){var target_obj_36505 = dest;
var _STAR_runtime_state_STAR__orig_val__36506 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__36507 = oops.state.prepare_state.call(null,target_obj_36505,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__36507;

try{return oops.core.get_selector_dynamically.call(null,target_obj_36505,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__36506;
}})():dest));
}));
webcv.audio.out = (function webcv$audio$out(var_args){
var G__36509 = arguments.length;
switch (G__36509) {
case 1:
return webcv.audio.out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return webcv.audio.out.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

webcv.audio.out.cljs$core$IFn$_invoke$arity$1 = (function (in$){
return webcv.audio.out.call(null,in$,null);
});

webcv.audio.out.cljs$core$IFn$_invoke$arity$2 = (function (in$,channel_idx){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),new cljs.core.Keyword("webcv.audio","audio-node-type","webcv.audio/audio-node-type",1987210761),new cljs.core.Keyword("webcv.audio","output","webcv.audio/output",1909608704),new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658),channel_idx], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("webcv.audio","input","webcv.audio/input",1702213034),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null)], null));
});

webcv.audio.out.cljs$lang$maxFixedArity = 2;

webcv.audio.gain = (function webcv$audio$gain(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36513 = arguments.length;
var i__4731__auto___36514 = (0);
while(true){
if((i__4731__auto___36514 < len__4730__auto___36513)){
args__4736__auto__.push((arguments[i__4731__auto___36514]));

var G__36515 = (i__4731__auto___36514 + (1));
i__4731__auto___36514 = G__36515;
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
webcv.audio.gain.cljs$lang$applyTo = (function (seq36511){
var G__36512 = cljs.core.first.call(null,seq36511);
var seq36511__$1 = cljs.core.next.call(null,seq36511);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36512,seq36511__$1);
});

webcv.audio.mix = (function webcv$audio$mix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36517 = arguments.length;
var i__4731__auto___36518 = (0);
while(true){
if((i__4731__auto___36518 < len__4730__auto___36517)){
args__4736__auto__.push((arguments[i__4731__auto___36518]));

var G__36519 = (i__4731__auto___36518 + (1));
i__4731__auto___36518 = G__36519;
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
webcv.audio.mix.cljs$lang$applyTo = (function (seq36516){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36516));
});

webcv.audio.const$ = (function webcv$audio$const(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36521 = arguments.length;
var i__4731__auto___36522 = (0);
while(true){
if((i__4731__auto___36522 < len__4730__auto___36521)){
args__4736__auto__.push((arguments[i__4731__auto___36522]));

var G__36523 = (i__4731__auto___36522 + (1));
i__4731__auto___36522 = G__36523;
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
webcv.audio.const$.cljs$lang$applyTo = (function (seq36520){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36520));
});

webcv.audio.oscillator = (function webcv$audio$oscillator(var_args){
var G__36525 = arguments.length;
switch (G__36525) {
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
var G__36528 = arguments.length;
switch (G__36528) {
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
webcv.audio.panner = (function webcv$audio$panner(in$,amt){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),new cljs.core.Keyword("webcv.audio","audio-node-type","webcv.audio/audio-node-type",1987210761),new cljs.core.Keyword("webcv.audio","effect","webcv.audio/effect",-933765172),new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060),"createStereoPanner"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.audio","input","webcv.audio/input",1702213034),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null),"pan",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),amt], null)], null));
});

//# sourceMappingURL=audio.js.map?rel=1601347617114
