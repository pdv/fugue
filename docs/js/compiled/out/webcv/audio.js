// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.audio');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('oops.core');
goog.require('webcv.synthdef');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),new cljs.core.Symbol("js","AudioContext","js/AudioContext",406950847,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__31138_SHARP_){
return (AudioContext === cljs.core.type.call(null,p1__31138_SHARP_));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),new cljs.core.Symbol("js","ChannelMergerNode","js/ChannelMergerNode",-695792816,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__31139_SHARP_){
return (ChannelMergerNode === cljs.core.type.call(null,p1__31139_SHARP_));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","node","webcv.audio/node",403635907),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),new cljs.core.Symbol("js","AudioNode","js/AudioNode",1561561537,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__31140_SHARP_){
return (AudioNode === cljs.core.type.call(null,p1__31140_SHARP_));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("webcv.audio","ctx","webcv.audio/ctx",-1630553873),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438),new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__31141){
return cljs.core.map_QMARK_.call(null,G__31141);
}),(function (G__31141){
return cljs.core.contains_QMARK_.call(null,G__31141,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
}),(function (G__31141){
return cljs.core.contains_QMARK_.call(null,G__31141,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968));
})], null),(function (G__31141){
return ((cljs.core.map_QMARK_.call(null,G__31141)) && (cljs.core.contains_QMARK_.call(null,G__31141,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438))) && (cljs.core.contains_QMARK_.call(null,G__31141,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968))));
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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__31142){
return cljs.core.map_QMARK_.call(null,G__31142);
}),(function (G__31142){
return cljs.core.contains_QMARK_.call(null,G__31142,new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658));
})], null),(function (G__31142){
return ((cljs.core.map_QMARK_.call(null,G__31142)) && (cljs.core.contains_QMARK_.call(null,G__31142,new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.audio.audio_node_spec,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__31143){
return cljs.core.map_QMARK_.call(null,G__31143);
}),(function (G__31143){
return cljs.core.contains_QMARK_.call(null,G__31143,new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060));
})], null),(function (G__31143){
return ((cljs.core.map_QMARK_.call(null,G__31143)) && (cljs.core.contains_QMARK_.call(null,G__31143,new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060))));
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
cljs.core._add_method.call(null,webcv.audio.make_audio_node,new cljs.core.Keyword("webcv.audio","output","webcv.audio/output",1909608704),(function (p__31144,p__31145){
var map__31146 = p__31144;
var map__31146__$1 = (((((!((map__31146 == null))))?(((((map__31146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31146):map__31146);
var actx = cljs.core.get.call(null,map__31146__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
var outs = cljs.core.get.call(null,map__31146__$1,new cljs.core.Keyword("webcv.audio","outs","webcv.audio/outs",1732689968));
var map__31147 = p__31145;
var map__31147__$1 = (((((!((map__31147 == null))))?(((((map__31147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31147):map__31147);
var channel_idx = cljs.core.get.call(null,map__31147__$1,new cljs.core.Keyword("webcv.audio","channel-idx","webcv.audio/channel-idx",-486650658));
var G__31150 = actx.createGain();
G__31150.connect(outs,(0),channel_idx);

return G__31150;
}));
cljs.core._add_method.call(null,webcv.audio.make_audio_node,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31151,p__31152){
var map__31153 = p__31151;
var map__31153__$1 = (((((!((map__31153 == null))))?(((((map__31153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31153):map__31153);
var actx = cljs.core.get.call(null,map__31153__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
var map__31154 = p__31152;
var map__31154__$1 = (((((!((map__31154 == null))))?(((((map__31154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31154):map__31154);
var audio_node_type = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword("webcv.audio","audio-node-type","webcv.audio/audio-node-type",1987210761));
var constructor$ = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword("webcv.audio","constructor","webcv.audio/constructor",-951207060));
var props = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword("webcv.audio","props","webcv.audio/props",1497882094));
var static_params = cljs.core.get.call(null,map__31154__$1,new cljs.core.Keyword("webcv.synthdef","static-params","webcv.synthdef/static-params",-622811484));
var node = cljs.core.js_invoke.call(null,actx,constructor$);
var seq__31157_31213 = cljs.core.seq.call(null,props);
var chunk__31158_31214 = null;
var count__31159_31215 = (0);
var i__31160_31216 = (0);
while(true){
if((i__31160_31216 < count__31159_31215)){
var vec__31173_31217 = cljs.core._nth.call(null,chunk__31158_31214,i__31160_31216);
var k_31218 = cljs.core.nth.call(null,vec__31173_31217,(0),null);
var v_31219 = cljs.core.nth.call(null,vec__31173_31217,(1),null);
var target_obj_31176_31220 = node;
var _STAR_runtime_state_STAR__orig_val__31177_31221 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31178_31222 = oops.state.prepare_state.call(null,target_obj_31176_31220,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31178_31222;

try{oops.core.set_selector_dynamically.call(null,target_obj_31176_31220,k_31218,v_31219);

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31177_31221;
}

var G__31223 = seq__31157_31213;
var G__31224 = chunk__31158_31214;
var G__31225 = count__31159_31215;
var G__31226 = (i__31160_31216 + (1));
seq__31157_31213 = G__31223;
chunk__31158_31214 = G__31224;
count__31159_31215 = G__31225;
i__31160_31216 = G__31226;
continue;
} else {
var temp__5720__auto___31227 = cljs.core.seq.call(null,seq__31157_31213);
if(temp__5720__auto___31227){
var seq__31157_31228__$1 = temp__5720__auto___31227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31157_31228__$1)){
var c__4550__auto___31229 = cljs.core.chunk_first.call(null,seq__31157_31228__$1);
var G__31230 = cljs.core.chunk_rest.call(null,seq__31157_31228__$1);
var G__31231 = c__4550__auto___31229;
var G__31232 = cljs.core.count.call(null,c__4550__auto___31229);
var G__31233 = (0);
seq__31157_31213 = G__31230;
chunk__31158_31214 = G__31231;
count__31159_31215 = G__31232;
i__31160_31216 = G__31233;
continue;
} else {
var vec__31179_31234 = cljs.core.first.call(null,seq__31157_31228__$1);
var k_31235 = cljs.core.nth.call(null,vec__31179_31234,(0),null);
var v_31236 = cljs.core.nth.call(null,vec__31179_31234,(1),null);
var target_obj_31182_31237 = node;
var _STAR_runtime_state_STAR__orig_val__31183_31238 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31184_31239 = oops.state.prepare_state.call(null,target_obj_31182_31237,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31184_31239;

try{oops.core.set_selector_dynamically.call(null,target_obj_31182_31237,k_31235,v_31236);

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31183_31238;
}

var G__31240 = cljs.core.next.call(null,seq__31157_31228__$1);
var G__31241 = null;
var G__31242 = (0);
var G__31243 = (0);
seq__31157_31213 = G__31240;
chunk__31158_31214 = G__31241;
count__31159_31215 = G__31242;
i__31160_31216 = G__31243;
continue;
}
} else {
}
}
break;
}

var seq__31185_31244 = cljs.core.seq.call(null,static_params);
var chunk__31186_31245 = null;
var count__31187_31246 = (0);
var i__31188_31247 = (0);
while(true){
if((i__31188_31247 < count__31187_31246)){
var vec__31201_31248 = cljs.core._nth.call(null,chunk__31186_31245,i__31188_31247);
var k_31249 = cljs.core.nth.call(null,vec__31201_31248,(0),null);
var v_31250 = cljs.core.nth.call(null,vec__31201_31248,(1),null);
var target_obj_31204_31251 = node;
var _STAR_runtime_state_STAR__orig_val__31205_31252 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31206_31253 = oops.state.prepare_state.call(null,target_obj_31204_31251,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31206_31253;

try{oops.core.set_selector_dynamically.call(null,target_obj_31204_31251,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_31249),".value"].join(''),v_31250);

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31205_31252;
}

var G__31254 = seq__31185_31244;
var G__31255 = chunk__31186_31245;
var G__31256 = count__31187_31246;
var G__31257 = (i__31188_31247 + (1));
seq__31185_31244 = G__31254;
chunk__31186_31245 = G__31255;
count__31187_31246 = G__31256;
i__31188_31247 = G__31257;
continue;
} else {
var temp__5720__auto___31258 = cljs.core.seq.call(null,seq__31185_31244);
if(temp__5720__auto___31258){
var seq__31185_31259__$1 = temp__5720__auto___31258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31185_31259__$1)){
var c__4550__auto___31260 = cljs.core.chunk_first.call(null,seq__31185_31259__$1);
var G__31261 = cljs.core.chunk_rest.call(null,seq__31185_31259__$1);
var G__31262 = c__4550__auto___31260;
var G__31263 = cljs.core.count.call(null,c__4550__auto___31260);
var G__31264 = (0);
seq__31185_31244 = G__31261;
chunk__31186_31245 = G__31262;
count__31187_31246 = G__31263;
i__31188_31247 = G__31264;
continue;
} else {
var vec__31207_31265 = cljs.core.first.call(null,seq__31185_31259__$1);
var k_31266 = cljs.core.nth.call(null,vec__31207_31265,(0),null);
var v_31267 = cljs.core.nth.call(null,vec__31207_31265,(1),null);
var target_obj_31210_31268 = node;
var _STAR_runtime_state_STAR__orig_val__31211_31269 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31212_31270 = oops.state.prepare_state.call(null,target_obj_31210_31268,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31212_31270;

try{oops.core.set_selector_dynamically.call(null,target_obj_31210_31268,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k_31266),".value"].join(''),v_31267);

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31211_31269;
}

var G__31271 = cljs.core.next.call(null,seq__31185_31259__$1);
var G__31272 = null;
var G__31273 = (0);
var G__31274 = (0);
seq__31185_31244 = G__31271;
chunk__31186_31245 = G__31272;
count__31187_31246 = G__31273;
i__31188_31247 = G__31274;
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
cljs.core._add_method.call(null,webcv.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852),new cljs.core.Keyword("webcv.audio","audio-node","webcv.audio/audio-node",1962286852)], null),(function (_,src,dest,p__31275){
var map__31276 = p__31275;
var map__31276__$1 = (((((!((map__31276 == null))))?(((((map__31276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31276):map__31276);
var param_name = cljs.core.get.call(null,map__31276__$1,new cljs.core.Keyword("webcv.synthdef","param-name","webcv.synthdef/param-name",-328756077));
return src.connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("webcv.audio","input","webcv.audio/input",1702213034),param_name))?(function (){var target_obj_31278 = dest;
var _STAR_runtime_state_STAR__orig_val__31279 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__31280 = oops.state.prepare_state.call(null,target_obj_31278,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__31280;

try{return oops.core.get_selector_dynamically.call(null,target_obj_31278,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__31279;
}})():dest));
}));
webcv.audio.out = (function webcv$audio$out(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31282 = arguments.length;
var i__4731__auto___31283 = (0);
while(true){
if((i__4731__auto___31283 < len__4730__auto___31282)){
args__4736__auto__.push((arguments[i__4731__auto___31283]));

var G__31284 = (i__4731__auto___31283 + (1));
i__4731__auto___31283 = G__31284;
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
webcv.audio.out.cljs$lang$applyTo = (function (seq31281){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31281));
});

webcv.audio.gain = (function webcv$audio$gain(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31287 = arguments.length;
var i__4731__auto___31288 = (0);
while(true){
if((i__4731__auto___31288 < len__4730__auto___31287)){
args__4736__auto__.push((arguments[i__4731__auto___31288]));

var G__31289 = (i__4731__auto___31288 + (1));
i__4731__auto___31288 = G__31289;
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
webcv.audio.gain.cljs$lang$applyTo = (function (seq31285){
var G__31286 = cljs.core.first.call(null,seq31285);
var seq31285__$1 = cljs.core.next.call(null,seq31285);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31286,seq31285__$1);
});

webcv.audio.mix = (function webcv$audio$mix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31291 = arguments.length;
var i__4731__auto___31292 = (0);
while(true){
if((i__4731__auto___31292 < len__4730__auto___31291)){
args__4736__auto__.push((arguments[i__4731__auto___31292]));

var G__31293 = (i__4731__auto___31292 + (1));
i__4731__auto___31292 = G__31293;
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
webcv.audio.mix.cljs$lang$applyTo = (function (seq31290){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31290));
});

webcv.audio.const$ = (function webcv$audio$const(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31295 = arguments.length;
var i__4731__auto___31296 = (0);
while(true){
if((i__4731__auto___31296 < len__4730__auto___31295)){
args__4736__auto__.push((arguments[i__4731__auto___31296]));

var G__31297 = (i__4731__auto___31296 + (1));
i__4731__auto___31296 = G__31297;
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
webcv.audio.const$.cljs$lang$applyTo = (function (seq31294){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31294));
});

webcv.audio.oscillator = (function webcv$audio$oscillator(var_args){
var G__31299 = arguments.length;
switch (G__31299) {
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
var G__31302 = arguments.length;
switch (G__31302) {
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

//# sourceMappingURL=audio.js.map?rel=1601274367366
