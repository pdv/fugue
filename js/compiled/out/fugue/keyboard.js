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
var G__34922 = arguments.length;
switch (G__34922) {
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
var G__34926 = null;
var G__34926__0 = (function (){
return rf.call(null);
});
var G__34926__1 = (function (result){
return rf.call(null,result);
});
var G__34926__2 = (function (result,keypress){
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
return rf.call(null,result,cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945),(((60) + offset) + ((12) * cljs.core.deref.call(null,voctave)))], null),(function (){var G__34923 = keypress.type;
switch (G__34923) {
case "keydown":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827),new cljs.core.Keyword("fugue.midi","note-on","fugue.midi/note-on",1265446966),new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680),(127)], null);

break;
case "keyup":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827),new cljs.core.Keyword("fugue.midi","note-off","fugue.midi/note-off",1641005158),new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34923)].join('')));

}
})()));
} else {
if(cljs.core._EQ_.call(null,"keydown",type)){
cljs.core._vreset_BANG_.call(null,voctave,(function (){var G__34924 = key;
switch (G__34924) {
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
G__34926 = function(result,keypress){
switch(arguments.length){
case 0:
return G__34926__0.call(this);
case 1:
return G__34926__1.call(this,result);
case 2:
return G__34926__2.call(this,result,keypress);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34926.cljs$core$IFn$_invoke$arity$0 = G__34926__0;
G__34926.cljs$core$IFn$_invoke$arity$1 = G__34926__1;
G__34926.cljs$core$IFn$_invoke$arity$2 = G__34926__2;
return G__34926;
})()
;})(voctave))
});
});

fugue.keyboard.keypress_x_midi.cljs$lang$maxFixedArity = 1;

fugue.keyboard.kb_midi_chan = (function fugue$keyboard$kb_midi_chan(var_args){
var G__34930 = arguments.length;
switch (G__34930) {
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
var seq__34931_34936 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keydown","keyup"], null));
var chunk__34932_34937 = null;
var count__34933_34938 = (0);
var i__34934_34939 = (0);
while(true){
if((i__34934_34939 < count__34933_34938)){
var type_34940 = cljs.core._nth.call(null,chunk__34932_34937,i__34934_34939);
document.addEventListener(type_34940,cljs.core.partial.call(null,cljs.core.async.put_BANG_,c));


var G__34941 = seq__34931_34936;
var G__34942 = chunk__34932_34937;
var G__34943 = count__34933_34938;
var G__34944 = (i__34934_34939 + (1));
seq__34931_34936 = G__34941;
chunk__34932_34937 = G__34942;
count__34933_34938 = G__34943;
i__34934_34939 = G__34944;
continue;
} else {
var temp__5720__auto___34945 = cljs.core.seq.call(null,seq__34931_34936);
if(temp__5720__auto___34945){
var seq__34931_34946__$1 = temp__5720__auto___34945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34931_34946__$1)){
var c__4550__auto___34947 = cljs.core.chunk_first.call(null,seq__34931_34946__$1);
var G__34948 = cljs.core.chunk_rest.call(null,seq__34931_34946__$1);
var G__34949 = c__4550__auto___34947;
var G__34950 = cljs.core.count.call(null,c__4550__auto___34947);
var G__34951 = (0);
seq__34931_34936 = G__34948;
chunk__34932_34937 = G__34949;
count__34933_34938 = G__34950;
i__34934_34939 = G__34951;
continue;
} else {
var type_34952 = cljs.core.first.call(null,seq__34931_34946__$1);
document.addEventListener(type_34952,cljs.core.partial.call(null,cljs.core.async.put_BANG_,c));


var G__34953 = cljs.core.next.call(null,seq__34931_34946__$1);
var G__34954 = null;
var G__34955 = (0);
var G__34956 = (0);
seq__34931_34936 = G__34953;
chunk__34932_34937 = G__34954;
count__34933_34938 = G__34955;
i__34934_34939 = G__34956;
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
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34957){
return cljs.core.map_QMARK_.call(null,G__34957);
})], null),(function (G__34957){
return cljs.core.map_QMARK_.call(null,G__34957);
}),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.keyboard","keyboard","fugue.keyboard/keyboard",313094678),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,fugue.keyboard.kb_midi_chan.call(null))], null);
}));
fugue.keyboard.kb = (function fugue$keyboard$kb(){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.keyboard","keyboard","fugue.keyboard/keyboard",313094678)], null),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=keyboard.js.map?rel=1610051744507