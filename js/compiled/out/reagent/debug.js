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
var G__3291__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__3291 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3292__i = 0, G__3292__a = new Array(arguments.length -  0);
while (G__3292__i < G__3292__a.length) {G__3292__a[G__3292__i] = arguments[G__3292__i + 0]; ++G__3292__i;}
  args = new cljs.core.IndexedSeq(G__3292__a,0,null);
} 
return G__3291__delegate.call(this,args);};
G__3291.cljs$lang$maxFixedArity = 0;
G__3291.cljs$lang$applyTo = (function (arglist__3293){
var args = cljs.core.seq(arglist__3293);
return G__3291__delegate(args);
});
G__3291.cljs$core$IFn$_invoke$arity$variadic = G__3291__delegate;
return G__3291;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__3294__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__3294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3295__i = 0, G__3295__a = new Array(arguments.length -  0);
while (G__3295__i < G__3295__a.length) {G__3295__a[G__3295__i] = arguments[G__3295__i + 0]; ++G__3295__i;}
  args = new cljs.core.IndexedSeq(G__3295__a,0,null);
} 
return G__3294__delegate.call(this,args);};
G__3294.cljs$lang$maxFixedArity = 0;
G__3294.cljs$lang$applyTo = (function (arglist__3296){
var args = cljs.core.seq(arglist__3296);
return G__3294__delegate(args);
});
G__3294.cljs$core$IFn$_invoke$arity$variadic = G__3294__delegate;
return G__3294;
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

//# sourceMappingURL=debug.js.map?rel=1611075054932
