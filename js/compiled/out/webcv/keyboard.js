// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.keyboard');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('webcv.synthdef');
goog.require('webcv.midi');
goog.require('webcv.chan');
webcv.keyboard.key__GT_offset = cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","w","s","e","d","f","t","g","y","h","u","j","k","l","p"], null),cljs.core.range.call(null));
/**
 * Returns a stateful transducer that maps keypress events to midi events.
 *   (a) -> c, (w) -> c#, (s) -> d, ...
 *   (z) lowers one octave, (x) raises one octave
 */
webcv.keyboard.keypress_x_midi = (function webcv$keyboard$keypress_x_midi(var_args){
var G__36742 = arguments.length;
switch (G__36742) {
case 0:
return webcv.keyboard.keypress_x_midi.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return webcv.keyboard.keypress_x_midi.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

webcv.keyboard.keypress_x_midi.cljs$core$IFn$_invoke$arity$0 = (function (){
return webcv.keyboard.keypress_x_midi.call(null,(4));
});

webcv.keyboard.keypress_x_midi.cljs$core$IFn$_invoke$arity$1 = (function (octave){
return (function (rf){
var voctave = cljs.core.volatile_BANG_.call(null,(octave - (4)));
return ((function (voctave){
return (function() {
var G__36746 = null;
var G__36746__0 = (function (){
return rf.call(null);
});
var G__36746__1 = (function (result){
return rf.call(null,result);
});
var G__36746__2 = (function (result,keypress){
var type = keypress.type;
var key = keypress.key;
var repeat = keypress.repeat;
var offset = webcv.keyboard.key__GT_offset.call(null,key);
if(cljs.core.not.call(null,(function (){var or__4131__auto__ = (offset == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return repeat;
}
})())){
return rf.call(null,result,cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544),(((60) + offset) + ((12) * cljs.core.deref.call(null,voctave)))], null),(function (){var G__36743 = keypress.type;
switch (G__36743) {
case "keydown":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868),new cljs.core.Keyword("webcv.midi","note-on","webcv.midi/note-on",-513092971),new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691),(127)], null);

break;
case "keyup":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868),new cljs.core.Keyword("webcv.midi","note-off","webcv.midi/note-off",802543303),new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36743)].join('')));

}
})()));
} else {
if(cljs.core._EQ_.call(null,"keydown",type)){
cljs.core._vreset_BANG_.call(null,voctave,(function (){var G__36744 = key;
switch (G__36744) {
case "z":
return cljs.core.dec;

break;
case "x":
return cljs.core.inc;

break;
default:
return cljs.core.identity;

}
})().call(null,cljs.core._deref.call(null,voctave)));

return result;
} else {
return null;
}
}
});
G__36746 = function(result,keypress){
switch(arguments.length){
case 0:
return G__36746__0.call(this);
case 1:
return G__36746__1.call(this,result);
case 2:
return G__36746__2.call(this,result,keypress);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36746.cljs$core$IFn$_invoke$arity$0 = G__36746__0;
G__36746.cljs$core$IFn$_invoke$arity$1 = G__36746__1;
G__36746.cljs$core$IFn$_invoke$arity$2 = G__36746__2;
return G__36746;
})()
;})(voctave))
});
});

webcv.keyboard.keypress_x_midi.cljs$lang$maxFixedArity = 1;

webcv.keyboard.kb_midi_chan = (function webcv$keyboard$kb_midi_chan(var_args){
var G__36750 = arguments.length;
switch (G__36750) {
case 0:
return webcv.keyboard.kb_midi_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return webcv.keyboard.kb_midi_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

webcv.keyboard.kb_midi_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return webcv.keyboard.kb_midi_chan.call(null,(3));
});

webcv.keyboard.kb_midi_chan.cljs$core$IFn$_invoke$arity$1 = (function (octave){
var c = cljs.core.async.chan.call(null,(1),webcv.keyboard.keypress_x_midi.call(null,octave));
var seq__36751_36756 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keydown","keyup"], null));
var chunk__36752_36757 = null;
var count__36753_36758 = (0);
var i__36754_36759 = (0);
while(true){
if((i__36754_36759 < count__36753_36758)){
var type_36760 = cljs.core._nth.call(null,chunk__36752_36757,i__36754_36759);
document.addEventListener(type_36760,cljs.core.partial.call(null,cljs.core.async.put_BANG_,c));


var G__36761 = seq__36751_36756;
var G__36762 = chunk__36752_36757;
var G__36763 = count__36753_36758;
var G__36764 = (i__36754_36759 + (1));
seq__36751_36756 = G__36761;
chunk__36752_36757 = G__36762;
count__36753_36758 = G__36763;
i__36754_36759 = G__36764;
continue;
} else {
var temp__5720__auto___36765 = cljs.core.seq.call(null,seq__36751_36756);
if(temp__5720__auto___36765){
var seq__36751_36766__$1 = temp__5720__auto___36765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36751_36766__$1)){
var c__4550__auto___36767 = cljs.core.chunk_first.call(null,seq__36751_36766__$1);
var G__36768 = cljs.core.chunk_rest.call(null,seq__36751_36766__$1);
var G__36769 = c__4550__auto___36767;
var G__36770 = cljs.core.count.call(null,c__4550__auto___36767);
var G__36771 = (0);
seq__36751_36756 = G__36768;
chunk__36752_36757 = G__36769;
count__36753_36758 = G__36770;
i__36754_36759 = G__36771;
continue;
} else {
var type_36772 = cljs.core.first.call(null,seq__36751_36766__$1);
document.addEventListener(type_36772,cljs.core.partial.call(null,cljs.core.async.put_BANG_,c));


var G__36773 = cljs.core.next.call(null,seq__36751_36766__$1);
var G__36774 = null;
var G__36775 = (0);
var G__36776 = (0);
seq__36751_36756 = G__36773;
chunk__36752_36757 = G__36774;
count__36753_36758 = G__36775;
i__36754_36759 = G__36776;
continue;
}
} else {
}
}
break;
}

return c;
});

webcv.keyboard.kb_midi_chan.cljs$lang$maxFixedArity = 1;

cljs.core._add_method.call(null,webcv.chan.chan_node_spec,new cljs.core.Keyword("webcv.keyboard","keyboard","webcv.keyboard/keyboard",-997514189),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__36777){
return cljs.core.map_QMARK_.call(null,G__36777);
})], null),(function (G__36777){
return cljs.core.map_QMARK_.call(null,G__36777);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null]));
}));
cljs.core._add_method.call(null,webcv.chan.make_chan_node,new cljs.core.Keyword("webcv.keyboard","keyboard","webcv.keyboard/keyboard",-997514189),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("webcv.chan","mult-out","webcv.chan/mult-out",1070529409),cljs.core.async.mult.call(null,webcv.keyboard.kb_midi_chan.call(null))], null);
}));
webcv.keyboard.kb = (function webcv$keyboard$kb(){
return webcv.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.synthdef","node-type","webcv.synthdef/node-type",-1036809122),new cljs.core.Keyword("webcv.chan","chan-node","webcv.chan/chan-node",-367192494),new cljs.core.Keyword("webcv.chan","chan-node-type","webcv.chan/chan-node-type",-1398165608),new cljs.core.Keyword("webcv.keyboard","keyboard","webcv.keyboard/keyboard",-997514189)], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=keyboard.js.map?rel=1601341171860
