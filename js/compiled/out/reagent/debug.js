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
var G__10660__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10661__i = 0, G__10661__a = new Array(arguments.length -  0);
while (G__10661__i < G__10661__a.length) {G__10661__a[G__10661__i] = arguments[G__10661__i + 0]; ++G__10661__i;}
  args = new cljs.core.IndexedSeq(G__10661__a,0,null);
} 
return G__10660__delegate.call(this,args);};
G__10660.cljs$lang$maxFixedArity = 0;
G__10660.cljs$lang$applyTo = (function (arglist__10662){
var args = cljs.core.seq(arglist__10662);
return G__10660__delegate(args);
});
G__10660.cljs$core$IFn$_invoke$arity$variadic = G__10660__delegate;
return G__10660;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__10663__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10664__i = 0, G__10664__a = new Array(arguments.length -  0);
while (G__10664__i < G__10664__a.length) {G__10664__a[G__10664__i] = arguments[G__10664__i + 0]; ++G__10664__i;}
  args = new cljs.core.IndexedSeq(G__10664__a,0,null);
} 
return G__10663__delegate.call(this,args);};
G__10663.cljs$lang$maxFixedArity = 0;
G__10663.cljs$lang$applyTo = (function (arglist__10665){
var args = cljs.core.seq(arglist__10665);
return G__10663__delegate(args);
});
G__10663.cljs$core$IFn$_invoke$arity$variadic = G__10663__delegate;
return G__10663;
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

//# sourceMappingURL=debug.js.map?rel=1611069715689
