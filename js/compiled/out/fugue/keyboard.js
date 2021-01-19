// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.keyboard');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('fugue.synthdef');
goog.require('fugue.midi');
goog.require('fugue.chan');
fugue.keyboard.key__GT_offset = cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","w","s","e","d","f","t","g","y","h","u","j","k","l","p"], null),cljs.core.range.call(null));
/**
 * Returns a stateful transducer that maps keypress events to midi events.
 *   (a) -> c, (w) -> c#, (s) -> d, ...
 *   (z) lowers one octave, (x) raises one octave
 */
fugue.keyboard.keypress_x_midi = (function fugue$keyboard$keypress_x_midi(var_args){
var G__14869 = arguments.length;
switch (G__14869) {
case 0:
return fugue.keyboard.keypress_x_midi.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fugue.keyboard.keypress_x_midi.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fugue.keyboard.keypress_x_midi.cljs$core$IFn$_invoke$arity$0 = (function (){
return fugue.keyboard.keypress_x_midi.call(null,(4));
});

fugue.keyboard.keypress_x_midi.cljs$core$IFn$_invoke$arity$1 = (function (octave){
return (function (rf){
var voctave = cljs.core.volatile_BANG_.call(null,(octave - (4)));
return ((function (voctave){
return (function() {
var G__14873 = null;
var G__14873__0 = (function (){
return rf.call(null);
});
var G__14873__1 = (function (result){
return rf.call(null,result);
});
var G__14873__2 = (function (result,keypress){
var type = keypress.type;
var key = keypress.key;
var repeat = keypress.repeat;
var offset = fugue.keyboard.key__GT_offset.call(null,key);
if(cljs.core.not.call(null,(function (){var or__4131__auto__ = (offset == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return repeat;
}
})())){
return rf.call(null,result,cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"note","note",1426297904),(((60) + offset) + ((12) * cljs.core.deref.call(null,voctave)))], null),(function (){var G__14870 = keypress.type;
switch (G__14870) {
case "keydown":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"note-on","note-on",199386349),new cljs.core.Keyword(null,"velocity","velocity",-581524355),(127)], null);

break;
case "keyup":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"note-off","note-off",559971615),new cljs.core.Keyword(null,"velocity","velocity",-581524355),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14870)].join('')));

}
})()));
} else {
if(cljs.core._EQ_.call(null,"keydown",type)){
cljs.core._vreset_BANG_.call(null,voctave,(function (){var G__14871 = key;
switch (G__14871) {
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
G__14873 = function(result,keypress){
switch(arguments.length){
case 0:
return G__14873__0.call(this);
case 1:
return G__14873__1.call(this,result);
case 2:
return G__14873__2.call(this,result,keypress);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14873.cljs$core$IFn$_invoke$arity$0 = G__14873__0;
G__14873.cljs$core$IFn$_invoke$arity$1 = G__14873__1;
G__14873.cljs$core$IFn$_invoke$arity$2 = G__14873__2;
return G__14873;
})()
;})(voctave))
});
});

fugue.keyboard.keypress_x_midi.cljs$lang$maxFixedArity = 1;

fugue.keyboard.kb_midi_chan = (function fugue$keyboard$kb_midi_chan(var_args){
var G__14877 = arguments.length;
switch (G__14877) {
case 0:
return fugue.keyboard.kb_midi_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fugue.keyboard.kb_midi_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fugue.keyboard.kb_midi_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return fugue.keyboard.kb_midi_chan.call(null,(3));
});

fugue.keyboard.kb_midi_chan.cljs$core$IFn$_invoke$arity$1 = (function (octave){
var c = cljs.core.async.chan.call(null,(1),fugue.keyboard.keypress_x_midi.call(null,octave));
var seq__14878_14883 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keydown","keyup"], null));
var chunk__14879_14884 = null;
var count__14880_14885 = (0);
var i__14881_14886 = (0);
while(true){
if((i__14881_14886 < count__14880_14885)){
var type_14887 = cljs.core._nth.call(null,chunk__14879_14884,i__14881_14886);
document.addEventListener(type_14887,cljs.core.partial.call(null,cljs.core.async.put_BANG_,c));


var G__14888 = seq__14878_14883;
var G__14889 = chunk__14879_14884;
var G__14890 = count__14880_14885;
var G__14891 = (i__14881_14886 + (1));
seq__14878_14883 = G__14888;
chunk__14879_14884 = G__14889;
count__14880_14885 = G__14890;
i__14881_14886 = G__14891;
continue;
} else {
var temp__5720__auto___14892 = cljs.core.seq.call(null,seq__14878_14883);
if(temp__5720__auto___14892){
var seq__14878_14893__$1 = temp__5720__auto___14892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14878_14893__$1)){
var c__4550__auto___14894 = cljs.core.chunk_first.call(null,seq__14878_14893__$1);
var G__14895 = cljs.core.chunk_rest.call(null,seq__14878_14893__$1);
var G__14896 = c__4550__auto___14894;
var G__14897 = cljs.core.count.call(null,c__4550__auto___14894);
var G__14898 = (0);
seq__14878_14883 = G__14895;
chunk__14879_14884 = G__14896;
count__14880_14885 = G__14897;
i__14881_14886 = G__14898;
continue;
} else {
var type_14899 = cljs.core.first.call(null,seq__14878_14893__$1);
document.addEventListener(type_14899,cljs.core.partial.call(null,cljs.core.async.put_BANG_,c));


var G__14900 = cljs.core.next.call(null,seq__14878_14893__$1);
var G__14901 = null;
var G__14902 = (0);
var G__14903 = (0);
seq__14878_14883 = G__14900;
chunk__14879_14884 = G__14901;
count__14880_14885 = G__14902;
i__14881_14886 = G__14903;
continue;
}
} else {
}
}
break;
}

return c;
});

fugue.keyboard.kb_midi_chan.cljs$lang$maxFixedArity = 1;

cljs.core._add_method.call(null,fugue.chan.chan_node_spec,new cljs.core.Keyword("fugue.keyboard","keyboard","fugue.keyboard/keyboard",313094678),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__14904){
return cljs.core.map_QMARK_.call(null,G__14904);
})], null),(function (G__14904){
return cljs.core.map_QMARK_.call(null,G__14904);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.keyboard","keyboard","fugue.keyboard/keyboard",313094678),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,fugue.keyboard.kb_midi_chan.call(null))], null);
}));
fugue.keyboard.kb = (function fugue$keyboard$kb(){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.keyboard","keyboard","fugue.keyboard/keyboard",313094678)], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=keyboard.js.map?rel=1611069718271
