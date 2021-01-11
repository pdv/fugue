// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.components');
goog.require('cljs.core');
fugue.components.to_midi_linear = (function fugue$components$to_midi_linear(x,min,max){
return ((127) * ((x - min) / (max - min)));
});
fugue.components.from_midi_linear = (function fugue$components$from_midi_linear(x,min,max){
return (min + ((max - min) * (x / (127))));
});
fugue.components.to_midi_log = (function fugue$components$to_midi_log(x,min,max){
var minv = Math.log(min);
var maxv = Math.log(max);
var scale = ((maxv - minv) / (127));
return ((Math.log(x) - minv) / scale);
});
fugue.components.from_midi_log = (function fugue$components$from_midi_log(x,min,max){
var minv = Math.log(min);
var maxv = Math.log(max);
var scale = ((maxv - minv) / (127));
return Math.exp((minv + (scale * x)));
});
fugue.components.slider = (function fugue$components$slider(var_args){
var G__30756 = arguments.length;
switch (G__30756) {
case 3:
return fugue.components.slider.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fugue.components.slider.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fugue.components.slider.cljs$core$IFn$_invoke$arity$3 = (function (value,min,max){
return fugue.components.slider.call(null,value,min,max,new cljs.core.Keyword(null,"linear","linear",872268697));
});

fugue.components.slider.cljs$core$IFn$_invoke$arity$4 = (function (value,min,max,type){
var to_midi = (function (){var G__30757 = type;
var G__30757__$1 = (((G__30757 instanceof cljs.core.Keyword))?G__30757.fqn:null);
switch (G__30757__$1) {
case "linear":
return fugue.components.to_midi_linear;

break;
case "log":
return fugue.components.to_midi_log;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30757__$1)].join('')));

}
})();
var from_midi = (function (){var G__30758 = type;
var G__30758__$1 = (((G__30758 instanceof cljs.core.Keyword))?G__30758.fqn:null);
switch (G__30758__$1) {
case "linear":
return fugue.components.from_midi_linear;

break;
case "log":
return fugue.components.from_midi_log;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30758__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),to_midi.call(null,cljs.core.deref.call(null,value),min,max),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(127),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (to_midi,from_midi){
return (function (p1__30754_SHARP_){
return cljs.core.reset_BANG_.call(null,value,from_midi.call(null,parseInt(p1__30754_SHARP_.target.value),min,max));
});})(to_midi,from_midi))
], null)], null);
});

fugue.components.slider.cljs$lang$maxFixedArity = 4;

fugue.components.picker = (function fugue$components$picker(value,options){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30762_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__30762_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value)], null),(function (){var iter__4523__auto__ = (function fugue$components$picker_$_iter__30763(s__30764){
return (new cljs.core.LazySeq(null,(function (){
var s__30764__$1 = s__30764;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30764__$1);
if(temp__5720__auto__){
var s__30764__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30764__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__30764__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__30766 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__30765 = (0);
while(true){
if((i__30765 < size__4522__auto__)){
var option = cljs.core._nth.call(null,c__4521__auto__,i__30765);
cljs.core.chunk_append.call(null,b__30766,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),option], null),option], null));

var G__30767 = (i__30765 + (1));
i__30765 = G__30767;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30766),fugue$components$picker_$_iter__30763.call(null,cljs.core.chunk_rest.call(null,s__30764__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30766),null);
}
} else {
var option = cljs.core.first.call(null,s__30764__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),option], null),option], null),fugue$components$picker_$_iter__30763.call(null,cljs.core.rest.call(null,s__30764__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,options);
})()], null);
});

//# sourceMappingURL=components.js.map?rel=1610330672749
