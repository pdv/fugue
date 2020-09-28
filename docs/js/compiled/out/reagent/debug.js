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
var G__22323__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22324__i = 0, G__22324__a = new Array(arguments.length -  0);
while (G__22324__i < G__22324__a.length) {G__22324__a[G__22324__i] = arguments[G__22324__i + 0]; ++G__22324__i;}
  args = new cljs.core.IndexedSeq(G__22324__a,0,null);
} 
return G__22323__delegate.call(this,args);};
G__22323.cljs$lang$maxFixedArity = 0;
G__22323.cljs$lang$applyTo = (function (arglist__22325){
var args = cljs.core.seq(arglist__22325);
return G__22323__delegate(args);
});
G__22323.cljs$core$IFn$_invoke$arity$variadic = G__22323__delegate;
return G__22323;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22326__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22326 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22327__i = 0, G__22327__a = new Array(arguments.length -  0);
while (G__22327__i < G__22327__a.length) {G__22327__a[G__22327__i] = arguments[G__22327__i + 0]; ++G__22327__i;}
  args = new cljs.core.IndexedSeq(G__22327__a,0,null);
} 
return G__22326__delegate.call(this,args);};
G__22326.cljs$lang$maxFixedArity = 0;
G__22326.cljs$lang$applyTo = (function (arglist__22328){
var args = cljs.core.seq(arglist__22328);
return G__22326__delegate(args);
});
G__22326.cljs$core$IFn$_invoke$arity$variadic = G__22326__delegate;
return G__22326;
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

//# sourceMappingURL=debug.js.map?rel=1601307450071
