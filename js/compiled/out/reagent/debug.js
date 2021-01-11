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
var G__30870__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30870 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30871__i = 0, G__30871__a = new Array(arguments.length -  0);
while (G__30871__i < G__30871__a.length) {G__30871__a[G__30871__i] = arguments[G__30871__i + 0]; ++G__30871__i;}
  args = new cljs.core.IndexedSeq(G__30871__a,0,null);
} 
return G__30870__delegate.call(this,args);};
G__30870.cljs$lang$maxFixedArity = 0;
G__30870.cljs$lang$applyTo = (function (arglist__30872){
var args = cljs.core.seq(arglist__30872);
return G__30870__delegate(args);
});
G__30870.cljs$core$IFn$_invoke$arity$variadic = G__30870__delegate;
return G__30870;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30873__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30873 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30874__i = 0, G__30874__a = new Array(arguments.length -  0);
while (G__30874__i < G__30874__a.length) {G__30874__a[G__30874__i] = arguments[G__30874__i + 0]; ++G__30874__i;}
  args = new cljs.core.IndexedSeq(G__30874__a,0,null);
} 
return G__30873__delegate.call(this,args);};
G__30873.cljs$lang$maxFixedArity = 0;
G__30873.cljs$lang$applyTo = (function (arglist__30875){
var args = cljs.core.seq(arglist__30875);
return G__30873__delegate(args);
});
G__30873.cljs$core$IFn$_invoke$arity$variadic = G__30873__delegate;
return G__30873;
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

//# sourceMappingURL=debug.js.map?rel=1610339731711
