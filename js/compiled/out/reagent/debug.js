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
var G__24349__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24350__i = 0, G__24350__a = new Array(arguments.length -  0);
while (G__24350__i < G__24350__a.length) {G__24350__a[G__24350__i] = arguments[G__24350__i + 0]; ++G__24350__i;}
  args = new cljs.core.IndexedSeq(G__24350__a,0,null);
} 
return G__24349__delegate.call(this,args);};
G__24349.cljs$lang$maxFixedArity = 0;
G__24349.cljs$lang$applyTo = (function (arglist__24351){
var args = cljs.core.seq(arglist__24351);
return G__24349__delegate(args);
});
G__24349.cljs$core$IFn$_invoke$arity$variadic = G__24349__delegate;
return G__24349;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__24352__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24353__i = 0, G__24353__a = new Array(arguments.length -  0);
while (G__24353__i < G__24353__a.length) {G__24353__a[G__24353__i] = arguments[G__24353__i + 0]; ++G__24353__i;}
  args = new cljs.core.IndexedSeq(G__24353__a,0,null);
} 
return G__24352__delegate.call(this,args);};
G__24352.cljs$lang$maxFixedArity = 0;
G__24352.cljs$lang$applyTo = (function (arglist__24354){
var args = cljs.core.seq(arglist__24354);
return G__24352__delegate(args);
});
G__24352.cljs$core$IFn$_invoke$arity$variadic = G__24352__delegate;
return G__24352;
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

//# sourceMappingURL=debug.js.map?rel=1601344961563
