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
var G__22304__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22305__i = 0, G__22305__a = new Array(arguments.length -  0);
while (G__22305__i < G__22305__a.length) {G__22305__a[G__22305__i] = arguments[G__22305__i + 0]; ++G__22305__i;}
  args = new cljs.core.IndexedSeq(G__22305__a,0,null);
} 
return G__22304__delegate.call(this,args);};
G__22304.cljs$lang$maxFixedArity = 0;
G__22304.cljs$lang$applyTo = (function (arglist__22306){
var args = cljs.core.seq(arglist__22306);
return G__22304__delegate(args);
});
G__22304.cljs$core$IFn$_invoke$arity$variadic = G__22304__delegate;
return G__22304;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22307__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22308__i = 0, G__22308__a = new Array(arguments.length -  0);
while (G__22308__i < G__22308__a.length) {G__22308__a[G__22308__i] = arguments[G__22308__i + 0]; ++G__22308__i;}
  args = new cljs.core.IndexedSeq(G__22308__a,0,null);
} 
return G__22307__delegate.call(this,args);};
G__22307.cljs$lang$maxFixedArity = 0;
G__22307.cljs$lang$applyTo = (function (arglist__22309){
var args = cljs.core.seq(arglist__22309);
return G__22307__delegate(args);
});
G__22307.cljs$core$IFn$_invoke$arity$variadic = G__22307__delegate;
return G__22307;
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

//# sourceMappingURL=debug.js.map?rel=1601267793759
