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
var G__22637__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22637 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22638__i = 0, G__22638__a = new Array(arguments.length -  0);
while (G__22638__i < G__22638__a.length) {G__22638__a[G__22638__i] = arguments[G__22638__i + 0]; ++G__22638__i;}
  args = new cljs.core.IndexedSeq(G__22638__a,0,null);
} 
return G__22637__delegate.call(this,args);};
G__22637.cljs$lang$maxFixedArity = 0;
G__22637.cljs$lang$applyTo = (function (arglist__22639){
var args = cljs.core.seq(arglist__22639);
return G__22637__delegate(args);
});
G__22637.cljs$core$IFn$_invoke$arity$variadic = G__22637__delegate;
return G__22637;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__22640__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__22640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22641__i = 0, G__22641__a = new Array(arguments.length -  0);
while (G__22641__i < G__22641__a.length) {G__22641__a[G__22641__i] = arguments[G__22641__i + 0]; ++G__22641__i;}
  args = new cljs.core.IndexedSeq(G__22641__a,0,null);
} 
return G__22640__delegate.call(this,args);};
G__22640.cljs$lang$maxFixedArity = 0;
G__22640.cljs$lang$applyTo = (function (arglist__22642){
var args = cljs.core.seq(arglist__22642);
return G__22640__delegate(args);
});
G__22640.cljs$core$IFn$_invoke$arity$variadic = G__22640__delegate;
return G__22640;
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

//# sourceMappingURL=debug.js.map?rel=1601320134912
