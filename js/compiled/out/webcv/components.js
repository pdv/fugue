// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.components');
goog.require('cljs.core');
webcv.components.to_midi_linear = (function webcv$components$to_midi_linear(x,min,max){
return ((127) * ((x - min) / (max - min)));
});
webcv.components.from_midi_linear = (function webcv$components$from_midi_linear(x,min,max){
return (min + ((max - min) * (x / (127))));
});
webcv.components.to_midi_log = (function webcv$components$to_midi_log(x,min,max){
var minv = Math.log(min);
var maxv = Math.log(max);
var scale = ((maxv - minv) / (127));
return ((Math.log(x) - minv) / scale);
});
webcv.components.from_midi_log = (function webcv$components$from_midi_log(x,min,max){
var minv = Math.log(min);
var maxv = Math.log(max);
var scale = ((maxv - minv) / (127));
return Math.exp((minv + (scale * x)));
});
webcv.components.slider = (function webcv$components$slider(var_args){
var G__37047 = arguments.length;
switch (G__37047) {
case 3:
return webcv.components.slider.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return webcv.components.slider.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

webcv.components.slider.cljs$core$IFn$_invoke$arity$3 = (function (value,min,max){
return webcv.components.slider.call(null,value,min,max,new cljs.core.Keyword(null,"linear","linear",872268697));
});

webcv.components.slider.cljs$core$IFn$_invoke$arity$4 = (function (value,min,max,type){
var to_midi = (function (){var G__37048 = type;
var G__37048__$1 = (((G__37048 instanceof cljs.core.Keyword))?G__37048.fqn:null);
switch (G__37048__$1) {
case "linear":
return webcv.components.to_midi_linear;

break;
case "log":
return webcv.components.to_midi_log;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37048__$1)].join('')));

}
})();
var from_midi = (function (){var G__37049 = type;
var G__37049__$1 = (((G__37049 instanceof cljs.core.Keyword))?G__37049.fqn:null);
switch (G__37049__$1) {
case "linear":
return webcv.components.from_midi_linear;

break;
case "log":
return webcv.components.from_midi_log;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37049__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),to_midi.call(null,cljs.core.deref.call(null,value),min,max),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(127),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (to_midi,from_midi){
return (function (p1__37045_SHARP_){
return cljs.core.reset_BANG_.call(null,value,from_midi.call(null,parseInt(p1__37045_SHARP_.target.value),min,max));
});})(to_midi,from_midi))
], null)], null);
});

webcv.components.slider.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=components.js.map?rel=1601406065989
