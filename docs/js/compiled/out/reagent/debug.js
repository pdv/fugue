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
var G__28342__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28343__i = 0, G__28343__a = new Array(arguments.length -  0);
while (G__28343__i < G__28343__a.length) {G__28343__a[G__28343__i] = arguments[G__28343__i + 0]; ++G__28343__i;}
  args = new cljs.core.IndexedSeq(G__28343__a,0,null);
} 
return G__28342__delegate.call(this,args);};
G__28342.cljs$lang$maxFixedArity = 0;
G__28342.cljs$lang$applyTo = (function (arglist__28344){
var args = cljs.core.seq(arglist__28344);
return G__28342__delegate(args);
});
G__28342.cljs$core$IFn$_invoke$arity$variadic = G__28342__delegate;
return G__28342;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28345__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28346__i = 0, G__28346__a = new Array(arguments.length -  0);
while (G__28346__i < G__28346__a.length) {G__28346__a[G__28346__i] = arguments[G__28346__i + 0]; ++G__28346__i;}
  args = new cljs.core.IndexedSeq(G__28346__a,0,null);
} 
return G__28345__delegate.call(this,args);};
G__28345.cljs$lang$maxFixedArity = 0;
G__28345.cljs$lang$applyTo = (function (arglist__28347){
var args = cljs.core.seq(arglist__28347);
return G__28345__delegate(args);
});
G__28345.cljs$core$IFn$_invoke$arity$variadic = G__28345__delegate;
return G__28345;
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

//# sourceMappingURL=debug.js.map?rel=1600808341413
