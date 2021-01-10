// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.audio');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('oops.core');
goog.require('fugue.synthdef');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),new cljs.core.Symbol("js","AudioContext","js/AudioContext",406950847,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__26849_SHARP_){
return (AudioContext === cljs.core.type.call(null,p1__26849_SHARP_));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.audio","ins","fugue.audio/ins",906609950),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),new cljs.core.Symbol("js","ChannelSplitterNode","js/ChannelSplitterNode",2087290016,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__26850_SHARP_){
return (ChannelSplitterNode === cljs.core.type.call(null,p1__26850_SHARP_));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),new cljs.core.Symbol("js","ChannelMergerNode","js/ChannelMergerNode",-695792816,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__26851_SHARP_){
return (ChannelMergerNode === cljs.core.type.call(null,p1__26851_SHARP_));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.audio","node","fugue.audio/node",-174035650),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),new cljs.core.Symbol("js","AudioNode","js/AudioNode",1561561537,null),cljs.core.list(new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__26852_SHARP_){
return (AudioNode === cljs.core.type.call(null,p1__26852_SHARP_));
}));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.audio","ctx","fugue.audio/ctx",-1252517014),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","ins","fugue.audio/ins",906609950),new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__26853){
return cljs.core.map_QMARK_.call(null,G__26853);
}),(function (G__26853){
return cljs.core.contains_QMARK_.call(null,G__26853,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
})], null),(function (G__26853){
return ((cljs.core.map_QMARK_.call(null,G__26853)) && (cljs.core.contains_QMARK_.call(null,G__26853,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","ins","fugue.audio/ins",906609950),new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","ins","fugue.audio/ins",906609950),new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","ins","fugue.audio/ins",906609950),new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229)], null)])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fugue.audio","constructor","fugue.audio/constructor",-693804571),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
if((typeof fugue !== 'undefined') && (typeof fugue.audio !== 'undefined') && (typeof fugue.audio.audio_node_spec !== 'undefined')){
} else {
fugue.audio.audio_node_spec = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fugue.audio","audio-node-spec"),new cljs.core.Keyword("fugue.audio","audio-node-type","fugue.audio/audio-node-type",1294633356),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,fugue.synthdef.node_spec,new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),(function (_){
return cljs.spec.alpha.multi_spec_impl.call(null,new cljs.core.Symbol("fugue.audio","audio-node-spec","fugue.audio/audio-node-spec",1721189228,null),new cljs.core.Var(function(){return fugue.audio.audio_node_spec;},new cljs.core.Symbol("fugue.audio","audio-node-spec","fugue.audio/audio-node-spec",1721189228,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"fugue.audio","fugue.audio",-598774464,null),new cljs.core.Symbol(null,"audio-node-spec","audio-node-spec",865813468,null),"/home/runner/work/fugue/fugue/src/fugue/audio.cljs",26,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(fugue.audio.audio_node_spec)?fugue.audio.audio_node_spec.cljs$lang$test:null)])),new cljs.core.Keyword("fugue.audio","audio-node-type","fugue.audio/audio-node-type",1294633356));
}));
cljs.core._add_method.call(null,fugue.audio.audio_node_spec,new cljs.core.Keyword("fugue.audio","output","fugue.audio/output",1092208253),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__26854){
return cljs.core.map_QMARK_.call(null,G__26854);
}),(function (G__26854){
return cljs.core.contains_QMARK_.call(null,G__26854,new cljs.core.Keyword("fugue.audio","channel-idx","fugue.audio/channel-idx",-201997219));
})], null),(function (G__26854){
return ((cljs.core.map_QMARK_.call(null,G__26854)) && (cljs.core.contains_QMARK_.call(null,G__26854,new cljs.core.Keyword("fugue.audio","channel-idx","fugue.audio/channel-idx",-201997219))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","channel-idx","fugue.audio/channel-idx",-201997219)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","channel-idx","fugue.audio/channel-idx",-201997219)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","channel-idx","fugue.audio/channel-idx",-201997219)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.audio","channel-idx","fugue.audio/channel-idx",-201997219)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.audio.audio_node_spec,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__26855){
return cljs.core.map_QMARK_.call(null,G__26855);
}),(function (G__26855){
return cljs.core.contains_QMARK_.call(null,G__26855,new cljs.core.Keyword("fugue.audio","channel-idx","fugue.audio/channel-idx",-201997219));
})], null),(function (G__26855){
return ((cljs.core.map_QMARK_.call(null,G__26855)) && (cljs.core.contains_QMARK_.call(null,G__26855,new cljs.core.Keyword("fugue.audio","channel-idx","fugue.audio/channel-idx",-201997219))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","channel-idx","fugue.audio/channel-idx",-201997219)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","channel-idx","fugue.audio/channel-idx",-201997219)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","channel-idx","fugue.audio/channel-idx",-201997219)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.audio","channel-idx","fugue.audio/channel-idx",-201997219)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.audio.audio_node_spec,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__26856){
return cljs.core.map_QMARK_.call(null,G__26856);
}),(function (G__26856){
return cljs.core.contains_QMARK_.call(null,G__26856,new cljs.core.Keyword("fugue.audio","constructor","fugue.audio/constructor",-693804571));
})], null),(function (G__26856){
return ((cljs.core.map_QMARK_.call(null,G__26856)) && (cljs.core.contains_QMARK_.call(null,G__26856,new cljs.core.Keyword("fugue.audio","constructor","fugue.audio/constructor",-693804571))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","constructor","fugue.audio/constructor",-693804571)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","constructor","fugue.audio/constructor",-693804571)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","constructor","fugue.audio/constructor",-693804571)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.audio","constructor","fugue.audio/constructor",-693804571)))], null),null]));
}));
if((typeof fugue !== 'undefined') && (typeof fugue.audio !== 'undefined') && (typeof fugue.audio.make_audio_node !== 'undefined')){
} else {
fugue.audio.make_audio_node = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"fugue.audio","make-audio-node"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (_,nodedef){
return new cljs.core.Keyword("fugue.audio","audio-node-type","fugue.audio/audio-node-type",1294633356).cljs$core$IFn$_invoke$arity$1(nodedef);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,fugue.synthdef.make_node,new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),(function (ctx,nodedef){
return fugue.audio.make_audio_node.call(null,ctx,nodedef);
}));
fugue.audio.inputs_promise = (function fugue$audio$inputs_promise(){
return navigator.mediaDevices.getUserMedia(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"audio","audio",1819127321),true], null)));
});
fugue.audio.with_inputs = (function fugue$audio$with_inputs(ctx,in_stream){
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fugue.audio","ctx","fugue.audio/ctx",-1252517014),ctx)){
} else {
throw (new Error("Assert failed: (s/valid? :fugue.audio/ctx ctx)"));
}

var _PERCENT_ = (function (){
console.log("with-inputs");

var actx = new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(ctx);
var source = actx.createMediaStreamSource(in_stream);
var splitter = actx.createChannelSplitter(source.channelCount);
console.log(source,splitter);

source.connect(splitter);

return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword("fugue.audio","ins","fugue.audio/ins",906609950),splitter);
})()
;
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fugue.audio","ctx","fugue.audio/ctx",-1252517014),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :fugue.audio/ctx %)"));
}

return _PERCENT_;
});
fugue.audio.with_outputs = (function fugue$audio$with_outputs(ctx){
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fugue.audio","ctx","fugue.audio/ctx",-1252517014),ctx)){
} else {
throw (new Error("Assert failed: (s/valid? :fugue.audio/ctx ctx)"));
}

var _PERCENT_ = (function (){var actx = new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(ctx);
var dest = actx.destination;
var merger = actx.createChannelMerger(dest.maxChannelCount);
merger.connect(dest);

return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229),merger);
})();
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fugue.audio","ctx","fugue.audio/ctx",-1252517014),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :fugue.audio/ctx %)"));
}

return _PERCENT_;
});
fugue.audio.make_ctx = (function fugue$audio$make_ctx(){
var _PERCENT_ = fugue.audio.with_outputs.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001),(new AudioContext())], null));
if(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("fugue.audio","ctx","fugue.audio/ctx",-1252517014),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :fugue.audio/ctx %)"));
}

return _PERCENT_;
});
cljs.core._add_method.call(null,fugue.audio.make_audio_node,new cljs.core.Keyword("fugue.audio","output","fugue.audio/output",1092208253),(function (p__26857,p__26858){
var map__26859 = p__26857;
var map__26859__$1 = (((((!((map__26859 == null))))?(((((map__26859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26859):map__26859);
var actx = cljs.core.get.call(null,map__26859__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var outs = cljs.core.get.call(null,map__26859__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
var map__26860 = p__26858;
var map__26860__$1 = (((((!((map__26860 == null))))?(((((map__26860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26860):map__26860);
var channel_idx = cljs.core.get.call(null,map__26860__$1,new cljs.core.Keyword("fugue.audio","channel-idx","fugue.audio/channel-idx",-201997219));
var node = actx.createGain();
if(cljs.core.truth_(channel_idx)){
node.connect(outs,(0),channel_idx);
} else {
node.connect(actx.destination);
}

return node;
}));
cljs.core._add_method.call(null,fugue.audio.make_audio_node,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),(function (p__26863,p__26864){
var map__26865 = p__26863;
var map__26865__$1 = (((((!((map__26865 == null))))?(((((map__26865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26865):map__26865);
var actx = cljs.core.get.call(null,map__26865__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var ins = cljs.core.get.call(null,map__26865__$1,new cljs.core.Keyword("fugue.audio","ins","fugue.audio/ins",906609950));
var map__26866 = p__26864;
var map__26866__$1 = (((((!((map__26866 == null))))?(((((map__26866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26866):map__26866);
var channel_idx = cljs.core.get.call(null,map__26866__$1,new cljs.core.Keyword("fugue.audio","channel-idx","fugue.audio/channel-idx",-201997219));
var node = actx.createGain();
ins.connect(node,channel_idx);

return node;
}));
fugue.audio.set_param = (function fugue$audio$set_param(node,param_name,value){
if(typeof value === 'number'){
var target_obj_26873 = node;
var _STAR_runtime_state_STAR__orig_val__26874 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__26875 = oops.state.prepare_state.call(null,target_obj_26873,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__26875;

try{oops.core.set_selector_dynamically.call(null,target_obj_26873,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_name),".value"].join(''),value);

return target_obj_26873;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__26874;
}} else {
if((((!((value == null))))?(((((value.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IWatchable$))))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,value):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,value))){
return cljs.core.add_watch.call(null,value,param_name,(function (p1__26870_SHARP_,p2__26871_SHARP_,p3__26872_SHARP_,p4__26869_SHARP_){
return fugue.audio.set_param.call(null,node,param_name,p4__26869_SHARP_);
}));
} else {
return null;
}
}
});
cljs.core._add_method.call(null,fugue.audio.make_audio_node,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26877,p__26878){
var map__26879 = p__26877;
var map__26879__$1 = (((((!((map__26879 == null))))?(((((map__26879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26879):map__26879);
var actx = cljs.core.get.call(null,map__26879__$1,new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001));
var map__26880 = p__26878;
var map__26880__$1 = (((((!((map__26880 == null))))?(((((map__26880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26880):map__26880);
var audio_node_type = cljs.core.get.call(null,map__26880__$1,new cljs.core.Keyword("fugue.audio","audio-node-type","fugue.audio/audio-node-type",1294633356));
var constructor$ = cljs.core.get.call(null,map__26880__$1,new cljs.core.Keyword("fugue.audio","constructor","fugue.audio/constructor",-693804571));
var props = cljs.core.get.call(null,map__26880__$1,new cljs.core.Keyword("fugue.audio","props","fugue.audio/props",671123311));
var static_params = cljs.core.get.call(null,map__26880__$1,new cljs.core.Keyword("fugue.synthdef","static-params","fugue.synthdef/static-params",-2134943037));
var node = cljs.core.js_invoke.call(null,actx,constructor$);
var seq__26883_26927 = cljs.core.seq.call(null,props);
var chunk__26884_26928 = null;
var count__26885_26929 = (0);
var i__26886_26930 = (0);
while(true){
if((i__26886_26930 < count__26885_26929)){
var vec__26899_26931 = cljs.core._nth.call(null,chunk__26884_26928,i__26886_26930);
var k_26932 = cljs.core.nth.call(null,vec__26899_26931,(0),null);
var v_26933 = cljs.core.nth.call(null,vec__26899_26931,(1),null);
var target_obj_26902_26934 = node;
var _STAR_runtime_state_STAR__orig_val__26903_26935 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__26904_26936 = oops.state.prepare_state.call(null,target_obj_26902_26934,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__26904_26936;

try{oops.core.set_selector_dynamically.call(null,target_obj_26902_26934,k_26932,v_26933);

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__26903_26935;
}

var G__26937 = seq__26883_26927;
var G__26938 = chunk__26884_26928;
var G__26939 = count__26885_26929;
var G__26940 = (i__26886_26930 + (1));
seq__26883_26927 = G__26937;
chunk__26884_26928 = G__26938;
count__26885_26929 = G__26939;
i__26886_26930 = G__26940;
continue;
} else {
var temp__5720__auto___26941 = cljs.core.seq.call(null,seq__26883_26927);
if(temp__5720__auto___26941){
var seq__26883_26942__$1 = temp__5720__auto___26941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26883_26942__$1)){
var c__4550__auto___26943 = cljs.core.chunk_first.call(null,seq__26883_26942__$1);
var G__26944 = cljs.core.chunk_rest.call(null,seq__26883_26942__$1);
var G__26945 = c__4550__auto___26943;
var G__26946 = cljs.core.count.call(null,c__4550__auto___26943);
var G__26947 = (0);
seq__26883_26927 = G__26944;
chunk__26884_26928 = G__26945;
count__26885_26929 = G__26946;
i__26886_26930 = G__26947;
continue;
} else {
var vec__26905_26948 = cljs.core.first.call(null,seq__26883_26942__$1);
var k_26949 = cljs.core.nth.call(null,vec__26905_26948,(0),null);
var v_26950 = cljs.core.nth.call(null,vec__26905_26948,(1),null);
var target_obj_26908_26951 = node;
var _STAR_runtime_state_STAR__orig_val__26909_26952 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__26910_26953 = oops.state.prepare_state.call(null,target_obj_26908_26951,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__26910_26953;

try{oops.core.set_selector_dynamically.call(null,target_obj_26908_26951,k_26949,v_26950);

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__26909_26952;
}

var G__26954 = cljs.core.next.call(null,seq__26883_26942__$1);
var G__26955 = null;
var G__26956 = (0);
var G__26957 = (0);
seq__26883_26927 = G__26954;
chunk__26884_26928 = G__26955;
count__26885_26929 = G__26956;
i__26886_26930 = G__26957;
continue;
}
} else {
}
}
break;
}

var seq__26911_26958 = cljs.core.seq.call(null,static_params);
var chunk__26912_26959 = null;
var count__26913_26960 = (0);
var i__26914_26961 = (0);
while(true){
if((i__26914_26961 < count__26913_26960)){
var vec__26921_26962 = cljs.core._nth.call(null,chunk__26912_26959,i__26914_26961);
var k_26963 = cljs.core.nth.call(null,vec__26921_26962,(0),null);
var v_26964 = cljs.core.nth.call(null,vec__26921_26962,(1),null);
fugue.audio.set_param.call(null,node,k_26963,v_26964);


var G__26965 = seq__26911_26958;
var G__26966 = chunk__26912_26959;
var G__26967 = count__26913_26960;
var G__26968 = (i__26914_26961 + (1));
seq__26911_26958 = G__26965;
chunk__26912_26959 = G__26966;
count__26913_26960 = G__26967;
i__26914_26961 = G__26968;
continue;
} else {
var temp__5720__auto___26969 = cljs.core.seq.call(null,seq__26911_26958);
if(temp__5720__auto___26969){
var seq__26911_26970__$1 = temp__5720__auto___26969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26911_26970__$1)){
var c__4550__auto___26971 = cljs.core.chunk_first.call(null,seq__26911_26970__$1);
var G__26972 = cljs.core.chunk_rest.call(null,seq__26911_26970__$1);
var G__26973 = c__4550__auto___26971;
var G__26974 = cljs.core.count.call(null,c__4550__auto___26971);
var G__26975 = (0);
seq__26911_26958 = G__26972;
chunk__26912_26959 = G__26973;
count__26913_26960 = G__26974;
i__26914_26961 = G__26975;
continue;
} else {
var vec__26924_26976 = cljs.core.first.call(null,seq__26911_26970__$1);
var k_26977 = cljs.core.nth.call(null,vec__26924_26976,(0),null);
var v_26978 = cljs.core.nth.call(null,vec__26924_26976,(1),null);
fugue.audio.set_param.call(null,node,k_26977,v_26978);


var G__26979 = cljs.core.next.call(null,seq__26911_26970__$1);
var G__26980 = null;
var G__26981 = (0);
var G__26982 = (0);
seq__26911_26958 = G__26979;
chunk__26912_26959 = G__26980;
count__26913_26960 = G__26981;
i__26914_26961 = G__26982;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.audio","source","fugue.audio/source",-1457079555),audio_node_type)){
node.start();
} else {
}

return node;
}));
cljs.core._add_method.call(null,fugue.synthdef.make_edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893)], null),(function (_,src,dest,p__26983){
var map__26984 = p__26983;
var map__26984__$1 = (((((!((map__26984 == null))))?(((((map__26984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26984):map__26984);
var param_name = cljs.core.get.call(null,map__26984__$1,new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252));
return src.connect(((cljs.core.not_EQ_.call(null,new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),param_name))?(function (){var target_obj_26986 = dest;
var _STAR_runtime_state_STAR__orig_val__26987 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__26988 = oops.state.prepare_state.call(null,target_obj_26986,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__26988;

try{return oops.core.get_selector_dynamically.call(null,target_obj_26986,param_name);
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__26987;
}})():dest));
}));
fugue.audio.out = (function fugue$audio$out(var_args){
var G__26990 = arguments.length;
switch (G__26990) {
case 1:
return fugue.audio.out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fugue.audio.out.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fugue.audio.out.cljs$core$IFn$_invoke$arity$1 = (function (in$){
return fugue.audio.out.call(null,in$,null);
});

fugue.audio.out.cljs$core$IFn$_invoke$arity$2 = (function (in$,channel_idx){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.audio","audio-node-type","fugue.audio/audio-node-type",1294633356),new cljs.core.Keyword("fugue.audio","output","fugue.audio/output",1092208253),new cljs.core.Keyword("fugue.audio","channel-idx","fugue.audio/channel-idx",-201997219),channel_idx], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null)], null));
});

fugue.audio.out.cljs$lang$maxFixedArity = 2;

fugue.audio.in$ = (function fugue$audio$in(channel_idx){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.audio","audio-node-type","fugue.audio/audio-node-type",1294633356),new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),new cljs.core.Keyword("fugue.audio","channel-idx","fugue.audio/channel-idx",-201997219),channel_idx], null),cljs.core.PersistentArrayMap.EMPTY);
});
fugue.audio.gain = (function fugue$audio$gain(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26994 = arguments.length;
var i__4731__auto___26995 = (0);
while(true){
if((i__4731__auto___26995 < len__4730__auto___26994)){
args__4736__auto__.push((arguments[i__4731__auto___26995]));

var G__26996 = (i__4731__auto___26995 + (1));
i__4731__auto___26995 = G__26996;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return fugue.audio.gain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

fugue.audio.gain.cljs$core$IFn$_invoke$arity$variadic = (function (in$,gains){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.audio","audio-node-type","fugue.audio/audio-node-type",1294633356),new cljs.core.Keyword("fugue.audio","effect","fugue.audio/effect",-642774199),new cljs.core.Keyword("fugue.audio","constructor","fugue.audio/constructor",-693804571),"createGain"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null),"gain",gains], null));
});

fugue.audio.gain.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
fugue.audio.gain.cljs$lang$applyTo = (function (seq26992){
var G__26993 = cljs.core.first.call(null,seq26992);
var seq26992__$1 = cljs.core.next.call(null,seq26992);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26993,seq26992__$1);
});

fugue.audio.mix = (function fugue$audio$mix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26998 = arguments.length;
var i__4731__auto___26999 = (0);
while(true){
if((i__4731__auto___26999 < len__4730__auto___26998)){
args__4736__auto__.push((arguments[i__4731__auto___26999]));

var G__27000 = (i__4731__auto___26999 + (1));
i__4731__auto___26999 = G__27000;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fugue.audio.mix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fugue.audio.mix.cljs$core$IFn$_invoke$arity$variadic = (function (ins){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.audio","audio-node-type","fugue.audio/audio-node-type",1294633356),new cljs.core.Keyword("fugue.audio","effect","fugue.audio/effect",-642774199),new cljs.core.Keyword("fugue.audio","constructor","fugue.audio/constructor",-693804571),"createGain"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),ins], null));
});

fugue.audio.mix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fugue.audio.mix.cljs$lang$applyTo = (function (seq26997){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26997));
});

fugue.audio.const$ = (function fugue$audio$const(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27002 = arguments.length;
var i__4731__auto___27003 = (0);
while(true){
if((i__4731__auto___27003 < len__4730__auto___27002)){
args__4736__auto__.push((arguments[i__4731__auto___27003]));

var G__27004 = (i__4731__auto___27003 + (1));
i__4731__auto___27003 = G__27004;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fugue.audio.const$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fugue.audio.const$.cljs$core$IFn$_invoke$arity$variadic = (function (offsets){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.audio","audio-node-type","fugue.audio/audio-node-type",1294633356),new cljs.core.Keyword("fugue.audio","source","fugue.audio/source",-1457079555),new cljs.core.Keyword("fugue.audio","constructor","fugue.audio/constructor",-693804571),"createConstantSource"], null),new cljs.core.PersistentArrayMap(null, 1, ["offset",offsets], null));
});

fugue.audio.const$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fugue.audio.const$.cljs$lang$applyTo = (function (seq27001){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27001));
});

fugue.audio.oscillator = (function fugue$audio$oscillator(var_args){
var G__27006 = arguments.length;
switch (G__27006) {
case 2:
return fugue.audio.oscillator.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fugue.audio.oscillator.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fugue.audio.oscillator.cljs$core$IFn$_invoke$arity$2 = (function (type,frequency){
return fugue.audio.oscillator.call(null,type,frequency,(0));
});

fugue.audio.oscillator.cljs$core$IFn$_invoke$arity$3 = (function (type,frequency,detune){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.audio","audio-node-type","fugue.audio/audio-node-type",1294633356),new cljs.core.Keyword("fugue.audio","source","fugue.audio/source",-1457079555),new cljs.core.Keyword("fugue.audio","constructor","fugue.audio/constructor",-693804571),"createOscillator",new cljs.core.Keyword("fugue.audio","props","fugue.audio/props",671123311),new cljs.core.PersistentArrayMap(null, 1, ["type",type], null)], null),new cljs.core.PersistentArrayMap(null, 2, ["frequency",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),frequency], null),"detune",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),detune], null)], null));
});

fugue.audio.oscillator.cljs$lang$maxFixedArity = 3;

fugue.audio.sin_osc = cljs.core.partial.call(null,fugue.audio.oscillator,"sine");
fugue.audio.saw = cljs.core.partial.call(null,fugue.audio.oscillator,"sawtooth");
fugue.audio.square = cljs.core.partial.call(null,fugue.audio.oscillator,"square");
fugue.audio.tri_osc = cljs.core.partial.call(null,fugue.audio.oscillator,"triangle");
fugue.audio.lfo = (function fugue$audio$lfo(bias,scale,freq){
return fugue.audio.mix.call(null,fugue.audio.const$.call(null,bias),fugue.audio.gain.call(null,fugue.audio.sin_osc.call(null,freq),scale));
});
fugue.audio.biquad_filter = (function fugue$audio$biquad_filter(var_args){
var G__27009 = arguments.length;
switch (G__27009) {
case 3:
return fugue.audio.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fugue.audio.biquad_filter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fugue.audio.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,in$,freq){
return fugue.audio.biquad_filter.call(null,type,in$,freq,(-1));
});

fugue.audio.biquad_filter.cljs$core$IFn$_invoke$arity$4 = (function (type,in$,freq,q){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.audio","audio-node-type","fugue.audio/audio-node-type",1294633356),new cljs.core.Keyword("fugue.audio","effect","fugue.audio/effect",-642774199),new cljs.core.Keyword("fugue.audio","constructor","fugue.audio/constructor",-693804571),"createBiquadFilter",new cljs.core.Keyword("fugue.audio","props","fugue.audio/props",671123311),new cljs.core.PersistentArrayMap(null, 1, ["type",type], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null),"frequency",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),freq], null),"Q",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),q], null)], null));
});

fugue.audio.biquad_filter.cljs$lang$maxFixedArity = 4;

fugue.audio.lpf = cljs.core.partial.call(null,fugue.audio.biquad_filter,"lowpass");
fugue.audio.hpf = cljs.core.partial.call(null,fugue.audio.biquad_filter,"highpass");
fugue.audio.bpf = cljs.core.partial.call(null,fugue.audio.biquad_filter,"bandpass");
fugue.audio.delay_node = (function fugue$audio$delay_node(in$,time){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.audio","audio-node-type","fugue.audio/audio-node-type",1294633356),new cljs.core.Keyword("fugue.audio","effect","fugue.audio/effect",-642774199),new cljs.core.Keyword("fugue.audio","constructor","fugue.audio/constructor",-693804571),"createDelay"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null),"delayTime",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),time], null)], null));
});
fugue.audio.panner = (function fugue$audio$panner(in$,amt){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.audio","audio-node-type","fugue.audio/audio-node-type",1294633356),new cljs.core.Keyword("fugue.audio","effect","fugue.audio/effect",-642774199),new cljs.core.Keyword("fugue.audio","constructor","fugue.audio/constructor",-693804571),"createStereoPanner"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null),"pan",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),amt], null)], null));
});
fugue.audio.compressor = (function fugue$audio$compressor(in$,threshold,knee,ratio,reduction,attack,release){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.audio","audio-node","fugue.audio/audio-node",-1096960893),new cljs.core.Keyword("fugue.audio","audio-node-type","fugue.audio/audio-node-type",1294633356),new cljs.core.Keyword("fugue.audio","effect","fugue.audio/effect",-642774199),new cljs.core.Keyword("fugue.audio","constructor","fugue.audio/constructor",-693804571),"createDynamicsCompressor"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null),"threshold",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-24),threshold], null),"knee",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),knee], null),"ratio",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),ratio], null),"reduction",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),reduction], null),"attack",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.003,attack], null),"release",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.25,release], null)], null));
});

//# sourceMappingURL=audio.js.map?rel=1610304472288
