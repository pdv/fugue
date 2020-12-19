// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__30852__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30853__i = 0, G__30853__a = new Array(arguments.length -  0);
while (G__30853__i < G__30853__a.length) {G__30853__a[G__30853__i] = arguments[G__30853__i + 0]; ++G__30853__i;}
  args = new cljs.core.IndexedSeq(G__30853__a,0,null);
} 
return G__30852__delegate.call(this,args);};
G__30852.cljs$lang$maxFixedArity = 0;
G__30852.cljs$lang$applyTo = (function (arglist__30854){
var args = cljs.core.seq(arglist__30854);
return G__30852__delegate(args);
});
G__30852.cljs$core$IFn$_invoke$arity$variadic = G__30852__delegate;
return G__30852;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30855__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30856__i = 0, G__30856__a = new Array(arguments.length -  0);
while (G__30856__i < G__30856__a.length) {G__30856__a[G__30856__i] = arguments[G__30856__i + 0]; ++G__30856__i;}
  args = new cljs.core.IndexedSeq(G__30856__a,0,null);
} 
return G__30855__delegate.call(this,args);};
G__30855.cljs$lang$maxFixedArity = 0;
G__30855.cljs$lang$applyTo = (function (arglist__30857){
var args = cljs.core.seq(arglist__30857);
return G__30855__delegate(args);
});
G__30855.cljs$core$IFn$_invoke$arity$variadic = G__30855__delegate;
return G__30855;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1608403390006
