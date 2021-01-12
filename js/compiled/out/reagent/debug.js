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
var G__30886__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30886 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30887__i = 0, G__30887__a = new Array(arguments.length -  0);
while (G__30887__i < G__30887__a.length) {G__30887__a[G__30887__i] = arguments[G__30887__i + 0]; ++G__30887__i;}
  args = new cljs.core.IndexedSeq(G__30887__a,0,null);
} 
return G__30886__delegate.call(this,args);};
G__30886.cljs$lang$maxFixedArity = 0;
G__30886.cljs$lang$applyTo = (function (arglist__30888){
var args = cljs.core.seq(arglist__30888);
return G__30886__delegate(args);
});
G__30886.cljs$core$IFn$_invoke$arity$variadic = G__30886__delegate;
return G__30886;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30889__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30889 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30890__i = 0, G__30890__a = new Array(arguments.length -  0);
while (G__30890__i < G__30890__a.length) {G__30890__a[G__30890__i] = arguments[G__30890__i + 0]; ++G__30890__i;}
  args = new cljs.core.IndexedSeq(G__30890__a,0,null);
} 
return G__30889__delegate.call(this,args);};
G__30889.cljs$lang$maxFixedArity = 0;
G__30889.cljs$lang$applyTo = (function (arglist__30891){
var args = cljs.core.seq(arglist__30891);
return G__30889__delegate(args);
});
G__30889.cljs$core$IFn$_invoke$arity$variadic = G__30889__delegate;
return G__30889;
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

//# sourceMappingURL=debug.js.map?rel=1610422543438
