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
var G__29620__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29621__i = 0, G__29621__a = new Array(arguments.length -  0);
while (G__29621__i < G__29621__a.length) {G__29621__a[G__29621__i] = arguments[G__29621__i + 0]; ++G__29621__i;}
  args = new cljs.core.IndexedSeq(G__29621__a,0,null);
} 
return G__29620__delegate.call(this,args);};
G__29620.cljs$lang$maxFixedArity = 0;
G__29620.cljs$lang$applyTo = (function (arglist__29622){
var args = cljs.core.seq(arglist__29622);
return G__29620__delegate(args);
});
G__29620.cljs$core$IFn$_invoke$arity$variadic = G__29620__delegate;
return G__29620;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29623__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29623 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29624__i = 0, G__29624__a = new Array(arguments.length -  0);
while (G__29624__i < G__29624__a.length) {G__29624__a[G__29624__i] = arguments[G__29624__i + 0]; ++G__29624__i;}
  args = new cljs.core.IndexedSeq(G__29624__a,0,null);
} 
return G__29623__delegate.call(this,args);};
G__29623.cljs$lang$maxFixedArity = 0;
G__29623.cljs$lang$applyTo = (function (arglist__29625){
var args = cljs.core.seq(arglist__29625);
return G__29623__delegate(args);
});
G__29623.cljs$core$IFn$_invoke$arity$variadic = G__29623__delegate;
return G__29623;
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

//# sourceMappingURL=debug.js.map?rel=1601259675647
