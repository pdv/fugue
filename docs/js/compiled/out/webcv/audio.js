// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.audio');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('oops.core');
goog.require('webcv.synthdef');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),new cljs.core.Symbol("js","AudioContext","js/AudioContext",406950847,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__30075_SHARP_){
return (AudioContext === cljs.core.type.call(null,p1__30075_SHARP_));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),new cljs.core.Symbol("js","ChannelMergerNode","js/ChannelMergerNode",-695792816,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__30076_SHARP_){
return (ChannelMergerNode === cljs.core.type.call(null,p1__30076_SHARP_));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","node","webcv.audio/node",403635907),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),new cljs.core.Symbol("js","AudioNode","js/AudioNode",1561561537,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__30077_SHARP_){
return (AudioNode === cljs.core.type.call(null,p1__30077_SHARP_));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","ctx","webcv.audio/ctx",-1630553873),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438),new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__30078){
return cljs.core.map_QMARK_.call(null,G__30078);
}),(function (G__30078){
return cljs.core.contains_QMARK_.call(null,G__30078,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
}),(function (G__30078){
return cljs.core.contains_QMARK_.call(null,G__30078,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968));
})], null),(function (G__30078){
return ((cljs.core.map_QMARK_.call(null,G__30078)) && (cljs.core.contains_QMARK_.call(null,G__30078,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438))) && (cljs.core.contains_QMARK_.call(null,G__30078,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968))));
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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__30079){
return cljs.core.map_QMARK_.call(null,G__30079);
}),(function (G__30079){
return cljs.core.contains_QMARK_.call(null,G__30079,new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658));
})], null),(function (G__30079){
return ((cljs.core.map_QMARK_.call(null,G__30079)) && (cljs.core.contains_QMARK_.call(null,G__30079,new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.audio.audio_node_spec,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__30080){
return cljs.core.map_QMARK_.call(null,G__30080);
}),(function (G__30080){
return cljs.core.contains_QMARK_.call(null,G__30080,new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060));
})], null),(function (G__30080){
return ((cljs.core.map_QMARK_.call(null,G__30080)) && (cljs.core.contains_QMARK_.call(null,G__30080,new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060))));
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
cljs.core._add_method.call(null,webcv.audio.make_audio_node,new cljs.core.Keyword("webcv.audio","output","webcv.audio/output",1909608704),(function (p__30081,p__30082){
var map__30083 = p__30081;
var map__30083__$1 = (((((!((map__30083 == null))))?(((((map__30083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30083):map__30083);
var actx = cljs.core.get.call(null,map__30083__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
var outs = cljs.core.get.call(null,map__30083__$1,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968));
var map__30084 = p__30082;
var map__30084__$1 = (((((!((map__30084 == null))))?(((((map__30084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30084):map__30084);
var channel_idx = cljs.core.get.call(null,map__30084__$1,new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658));
var G__30087 = actx.createGain();
G__30087.connect(outs,(0),channel_idx);

return G__30087;
}));
cljs.core._add_method.call(null,webcv.audio.make_audio_node,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30088,p__30089){
var map__30090 = p__30088;
var map__30090__$1 = (((((!((map__30090 == null))))?(((((map__30090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30090):map__30090);
var actx = cljs.core.get.call(null,map__30090__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
var map__30091 = p__30089;
var map__30091__$1 = (((((!((map__30091 == null))))?(((((map__30091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30091):map__30091);
var audio_node_type = cljs.core.get.call(null,map__30091__$1,new cljs.core.Keyword("webcv.audio","audio-node-type","webcv.audio/audio-node-type",1987210761));
var constructor$ = cljs.core.get.call(null,map__30091__$1,new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060));
var props = cljs.core.get.call(null,map__30091__$1,new cljs.core.Keyword("webcv.audio","props","webcv.audio/props",1497882094));
var static_params = cljs.core.get.call(null,map__30091__$1,new cljs.core.Keyword("webcv.synthdef","static-params","webcv.synthdef/static-params",-622811484));
var node = cljs.core.js_invoke.call(null,actx,constructor$);
var seq__30094_30150 = cljs.core.seq.call(null,props);
var chunk__30095_30151 = null;
var count__30096_30152 = (0);
var i__30097_30153 = (0);
while(true){
if((i__30097_30153 < count__30096_30152)){
var vec__30110_30154 = cljs.core._nth.call(null,chunk__30095_30151,i__30097_30153);
var k_30155 = cljs.core.nth.call(null,vec__30110_30154,(0),null);
var v_30156 = cljs.core.nth.call(null,vec__30110_30154,(1),null);
var target_obj_30113_30157 = node;
var _STAR_runtime_state_STAR__orig_val__30114_30158 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__30115_30159 = oops.state.prepare_state.call(null,target_obj_30113_30157,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__30115_30159;

try{oops.core.set_selector_dynamically.call(null,target_obj_30113_30157,k_30155,v_30156);

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__30114_30158;
}

var G__30160 = seq__30094_30150;
var G__30161 = chunk__30095_30151;
var G__30162 = count__30096_30152;
var G__30163 = (i__30097_30153 + (1));
seq__30094_30150 = G__30160;
chunk__30095_30151 = G__30161;
count__30096_30152 = G__30162;
i__30097_30153 = G__30163;
continue;
} else {
var temp__5720__auto___30164 = cljs.core.seq.call(null,seq__30094_30150);
if(temp__5720__auto___30164){
var seq__30094_30165__$1 = temp__5720__auto___30164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30094_30165__$1)){
var c__4550__auto___30166 = cljs.core.chunk_first.call(null,seq__30094_30165__$1);
var G__30167 = cljs.core.chunk_rest.call(null,seq__30094_30165__$1);
var G__30168 = c__4550__auto___30166;
var G__30169 = cljs.core.count.call(null,c__4550__auto___30166);
var G__30170 = (0);
seq__30094_30150 = G__30167;
chunk__30095_30151 = G__30168;
count__30096_30152 = G__30169;
i__30097_30153 = G__30170;
continue;
} else {
var vec__30116_30171 = cljs.core.first.call(null,seq__30094_30165__$1);
var k_30172 = cljs.core.nth.call(null,vec__30116_30171,(0),null);
var v_30173 = cljs.core.nth.call(null,vec__30116_30171,(1),null);
var target_obj_30119_30174 = node;
var _STAR_runtime_state_STAR__orig_val__30120_30175 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__30121_30176 = oops.state.prepare_state.call(null,target_obj_30119_30174,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__30121_30176;

try{oops.core.set_selector_dynamically.call(null,target_obj_30119_30174,k_30172,v_30173);

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__30120_30175;
}

var G__30177 = cljs.core.next.call(null,seq__30094_30165__$1);
var G__30178 = null;
var G__30179 = (0);
var G__30180 = (0);
seq__30094_30150 = G__30177;
chunk__30095_30151 = G__30178;
count__30096_30152 = G__30179;
i__30097_30153 = G__30180;
continue;
}
} else {
}
}
break;
}

var seq__30122_30181 = cljs.core.seq.call(null,static_params);
var chunk__30123_30182 = null;
var count__30124_30183 = (0);
var i__30125_30184 = (0);
while(true){
if((i__30125_30184 < count__30124_30183)){
var vec__30138_30185 = cljs.core._nth.call(null,chunk__30123_30182,i__30125_30184);
var k_30186 = cljs.core.nth.call(null,vec__30138_30185,(0),null);
var v_30187 = cljs.core.nth.call(null,vec__30138_30185,(1),null);
var target_obj_30141_30188 = node;
var _STAR_runtime_state_STAR__orig_val__30142_30189 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__30143_30190 = oops.state.prepare_state.call(null,target_obj_30141_30188,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__30143_30190;

try{oops.core.set_selector_dynamically.call(null,target_obj_30141_30188,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_30186),".value"].join(''),v_30187);

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__30142_30189;
}

var G__30191 = seq__30122_30181;
var G__30192 = chunk__30123_30182;
var G__30193 = count__30124_30183;
var G__30194 = (i__30125_30184 + (1));
seq__30122_30181 = G__30191;
chunk__30123_30182 = G__30192;
count__30124_30183 = G__30193;
i__30125_30184 = G__30194;
continue;
} else {
var temp__5720__auto___30195 = cljs.core.seq.call(null,seq__30122_30181);
if(temp__5720__auto___30195){
var seq__30122_30196__$1 = temp__5720__auto___30195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30122_30196__$1)){
var c__4550__auto___30197 = cljs.core.chunk_first.call(null,seq__30122_30196__$1);
var G__30198 = cljs.core.chunk_rest.call(null,seq__30122_30196__$1);
var G__30199 = c__4550__auto___30197;
var G__30200 = cljs.core.count.call(null,c__4550__auto___30197);
var G__30201 = (0);
seq__30122_30181 = G__30198;
chunk__30123_30182 = G__30199;
count__30124_30183 = G__30200;
i__30125_30184 = G__30201;
continue;
} else {
var vec__30144_30202 = cljs.core.first.call(null,seq__30122_30196__$1);
var k_30203 = cljs.core.nth.call(null,vec__30144_30202,(0),null);
var v_30204 = cljs.core.nth.call(null,vec__30144_30202,(1),null);
var target_obj_30147_30205 = node;
var _STAR_runtime_state_STAR__orig_val__30148_30206 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__30149_30207 = oops.state.prepare_state.call(null,target_obj_30147_30205,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__30149_30207;

try{oops.core.set_selector_dynamically.call(null,target_obj_30147_30205,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_30203),".value"].join(''),v_30204);

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__30148_30206;
}

var G__30208 = cljs.core.next.call(null,seq__30122_30196__$1);
var G__30209 = null;
var G__30210 = (0);
var G__30211 = (0);
seq__30122_30181 = G__30208;
chunk__30123_30182 = G__30209;
count__30124_30183 = G__30210;
i__30125_30184 = G__30211;
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
cljs.core._add_method.call(null,webcv.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852)], null),(function (_,src,dest,p__30212){
var map__30213 = p__30212;
var map__30213__$1 = (((((!((map__30213 == null))))?(((((map__30213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30213):map__30213);
var param_name = cljs.core.get.call(null,map__30213__$1,new cljs.core.Keyword("webcv.synthdef","param-name","webcv.synthdef/param-name",-328756077));
return src.connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("webcv.audio","input","webcv.audio/input",1702213034),param_name))?(function (){var target_obj_30215 = dest;
var _STAR_runtime_state_STAR__orig_val__30216 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__30217 = oops.state.prepare_state.call(null,target_obj_30215,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__30217;

try{return oops.core.get_selector_dynamically.call(null,target_obj_30215,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__30216;
}})():dest));
}));
webcv.audio.out = (function webcv$audio$out(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30219 = arguments.length;
var i__4731__auto___30220 = (0);
while(true){
if((i__4731__auto___30220 < len__4730__auto___30219)){
args__4736__auto__.push((arguments[i__4731__auto___30220]));

var G__30221 = (i__4731__auto___30220 + (1));
i__4731__auto___30220 = G__30221;
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
webcv.audio.out.cljs$lang$applyTo = (function (seq30218){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30218));
});

webcv.audio.gain = (function webcv$audio$gain(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30224 = arguments.length;
var i__4731__auto___30225 = (0);
while(true){
if((i__4731__auto___30225 < len__4730__auto___30224)){
args__4736__auto__.push((arguments[i__4731__auto___30225]));

var G__30226 = (i__4731__auto___30225 + (1));
i__4731__auto___30225 = G__30226;
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
webcv.audio.gain.cljs$lang$applyTo = (function (seq30222){
var G__30223 = cljs.core.first.call(null,seq30222);
var seq30222__$1 = cljs.core.next.call(null,seq30222);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30223,seq30222__$1);
});

webcv.audio.mix = (function webcv$audio$mix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30228 = arguments.length;
var i__4731__auto___30229 = (0);
while(true){
if((i__4731__auto___30229 < len__4730__auto___30228)){
args__4736__auto__.push((arguments[i__4731__auto___30229]));

var G__30230 = (i__4731__auto___30229 + (1));
i__4731__auto___30229 = G__30230;
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
webcv.audio.mix.cljs$lang$applyTo = (function (seq30227){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30227));
});

webcv.audio.const$ = (function webcv$audio$const(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30232 = arguments.length;
var i__4731__auto___30233 = (0);
while(true){
if((i__4731__auto___30233 < len__4730__auto___30232)){
args__4736__auto__.push((arguments[i__4731__auto___30233]));

var G__30234 = (i__4731__auto___30233 + (1));
i__4731__auto___30233 = G__30234;
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
webcv.audio.const$.cljs$lang$applyTo = (function (seq30231){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30231));
});

webcv.audio.oscillator = (function webcv$audio$oscillator(var_args){
var G__30236 = arguments.length;
switch (G__30236) {
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
var G__30239 = arguments.length;
switch (G__30239) {
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

//# sourceMappingURL=audio.js.map?rel=1601260776657
