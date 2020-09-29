// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.sequencer');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('webcv.synthdef');
goog.require('webcv.chan');
cljs.core._add_method.call(null,webcv.chan.make_transducer,new cljs.core.Keyword("webcv.sequencer","sequencer","webcv.sequencer/sequencer",1632171030),(function (_,___$1){
return (function (rf){
var v_index = cljs.core.volatile_BANG_.call(null,(-1));
return ((function (v_index){
return (function() {
var G__37058 = null;
var G__37058__0 = (function (){
return rf.call(null);
});
var G__37058__1 = (function (result){
return rf.call(null,result);
});
var G__37058__2 = (function (result,p__37055){
var map__37056 = p__37055;
var map__37056__$1 = (((((!((map__37056 == null))))?(((((map__37056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37056):map__37056);
var sequence = cljs.core.get.call(null,map__37056__$1,new cljs.core.Keyword("webcv.sequencer","sequence","webcv.sequencer/sequence",-1977401468));
var gate = cljs.core.get.call(null,map__37056__$1,new cljs.core.Keyword("webcv.sequencer","gate","webcv.sequencer/gate",-1437290721));
cljs.core._vreset_BANG_.call(null,v_index,(cljs.core._deref.call(null,v_index) + (1)));

return rf.call(null,result,cljs.core.assoc.call(null,gate,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,sequence,cljs.core.mod.call(null,cljs.core.deref.call(null,v_index),cljs.core.count.call(null,sequence)))));
});
G__37058 = function(result,p__37055){
switch(arguments.length){
case 0:
return G__37058__0.call(this);
case 1:
return G__37058__1.call(this,result);
case 2:
return G__37058__2.call(this,result,p__37055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37058.cljs$core$IFn$_invoke$arity$0 = G__37058__0;
G__37058.cljs$core$IFn$_invoke$arity$1 = G__37058__1;
G__37058.cljs$core$IFn$_invoke$arity$2 = G__37058__2;
return G__37058;
})()
;})(v_index))
});
}));
webcv.sequencer.sequencer = (function webcv$sequencer$sequencer(sequence,gate){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.chan","chan-node-type","webcv.chan/chan-node-type",-1398165608),new cljs.core.Keyword("webcv.chan","transducer","webcv.chan/transducer",311721516),new cljs.core.Keyword("webcv.chan","xform","webcv.chan/xform",-2034901163),new cljs.core.Keyword("webcv.sequencer","sequencer","webcv.sequencer/sequencer",1632171030)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.sequencer","gate","webcv.sequencer/gate",-1437290721),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gate], null),new cljs.core.Keyword("webcv.sequencer","sequence","webcv.sequencer/sequence",-1977401468),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sequence], null)], null));
});

//# sourceMappingURL=sequencer.js.map?rel=1601406066002
