// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.Uri');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4700 = arguments.length;
var i__4731__auto___4701 = (0);
while(true){
if((i__4731__auto___4701 < len__4730__auto___4700)){
args__4736__auto__.push((arguments[i__4731__auto___4701]));

var G__4702 = (i__4731__auto___4701 + (1));
i__4731__auto___4701 = G__4702;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq4699){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4699));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4704 = arguments.length;
var i__4731__auto___4705 = (0);
while(true){
if((i__4731__auto___4705 < len__4730__auto___4704)){
args__4736__auto__.push((arguments[i__4731__auto___4705]));

var G__4706 = (i__4731__auto___4705 + (1));
i__4731__auto___4705 = G__4706;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq4703){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4703));
});

var g_QMARK__4707 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," never required"].join('')));
}
}),null));
var g_4708 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__4707){
return (function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," never required"].join('')));
}
});})(g_QMARK__4707))
,null));
var mkg_4709 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__4707,g_4708){
return (function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," never required"].join('')));
}
});})(g_QMARK__4707,g_4708))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__4707,g_4708,mkg_4709){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__4707).call(null,x);
});})(g_QMARK__4707,g_4708,mkg_4709))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__4707,g_4708,mkg_4709){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_4709).call(null,gfn);
});})(g_QMARK__4707,g_4708,mkg_4709))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__4707,g_4708,mkg_4709){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_4708).call(null,generator);
});})(g_QMARK__4707,g_4708,mkg_4709))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__2766__auto___4730 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__2766__auto___4730){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4731 = arguments.length;
var i__4731__auto___4732 = (0);
while(true){
if((i__4731__auto___4732 < len__4730__auto___4731)){
args__4736__auto__.push((arguments[i__4731__auto___4732]));

var G__4733 = (i__4731__auto___4732 + (1));
i__4731__auto___4732 = G__4733;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4730))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4730){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4730),args);
});})(g__2766__auto___4730))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__2766__auto___4730){
return (function (seq4710){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4710));
});})(g__2766__auto___4730))
;


var g__2766__auto___4734 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__2766__auto___4734){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4735 = arguments.length;
var i__4731__auto___4736 = (0);
while(true){
if((i__4731__auto___4736 < len__4730__auto___4735)){
args__4736__auto__.push((arguments[i__4731__auto___4736]));

var G__4737 = (i__4731__auto___4736 + (1));
i__4731__auto___4736 = G__4737;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4734))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4734){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4734),args);
});})(g__2766__auto___4734))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__2766__auto___4734){
return (function (seq4711){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4711));
});})(g__2766__auto___4734))
;


var g__2766__auto___4738 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__2766__auto___4738){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4739 = arguments.length;
var i__4731__auto___4740 = (0);
while(true){
if((i__4731__auto___4740 < len__4730__auto___4739)){
args__4736__auto__.push((arguments[i__4731__auto___4740]));

var G__4741 = (i__4731__auto___4740 + (1));
i__4731__auto___4740 = G__4741;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4738))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4738){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4738),args);
});})(g__2766__auto___4738))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__2766__auto___4738){
return (function (seq4712){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4712));
});})(g__2766__auto___4738))
;


var g__2766__auto___4742 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__2766__auto___4742){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4743 = arguments.length;
var i__4731__auto___4744 = (0);
while(true){
if((i__4731__auto___4744 < len__4730__auto___4743)){
args__4736__auto__.push((arguments[i__4731__auto___4744]));

var G__4745 = (i__4731__auto___4744 + (1));
i__4731__auto___4744 = G__4745;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4742))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4742){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4742),args);
});})(g__2766__auto___4742))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__2766__auto___4742){
return (function (seq4713){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4713));
});})(g__2766__auto___4742))
;


var g__2766__auto___4746 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__2766__auto___4746){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4747 = arguments.length;
var i__4731__auto___4748 = (0);
while(true){
if((i__4731__auto___4748 < len__4730__auto___4747)){
args__4736__auto__.push((arguments[i__4731__auto___4748]));

var G__4749 = (i__4731__auto___4748 + (1));
i__4731__auto___4748 = G__4749;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4746))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4746){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4746),args);
});})(g__2766__auto___4746))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__2766__auto___4746){
return (function (seq4714){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4714));
});})(g__2766__auto___4746))
;


var g__2766__auto___4750 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__2766__auto___4750){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4751 = arguments.length;
var i__4731__auto___4752 = (0);
while(true){
if((i__4731__auto___4752 < len__4730__auto___4751)){
args__4736__auto__.push((arguments[i__4731__auto___4752]));

var G__4753 = (i__4731__auto___4752 + (1));
i__4731__auto___4752 = G__4753;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4750))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4750){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4750),args);
});})(g__2766__auto___4750))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__2766__auto___4750){
return (function (seq4715){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4715));
});})(g__2766__auto___4750))
;


var g__2766__auto___4754 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__2766__auto___4754){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4755 = arguments.length;
var i__4731__auto___4756 = (0);
while(true){
if((i__4731__auto___4756 < len__4730__auto___4755)){
args__4736__auto__.push((arguments[i__4731__auto___4756]));

var G__4757 = (i__4731__auto___4756 + (1));
i__4731__auto___4756 = G__4757;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4754))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4754){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4754),args);
});})(g__2766__auto___4754))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__2766__auto___4754){
return (function (seq4716){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4716));
});})(g__2766__auto___4754))
;


var g__2766__auto___4758 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__2766__auto___4758){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4759 = arguments.length;
var i__4731__auto___4760 = (0);
while(true){
if((i__4731__auto___4760 < len__4730__auto___4759)){
args__4736__auto__.push((arguments[i__4731__auto___4760]));

var G__4761 = (i__4731__auto___4760 + (1));
i__4731__auto___4760 = G__4761;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4758))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4758){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4758),args);
});})(g__2766__auto___4758))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__2766__auto___4758){
return (function (seq4717){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4717));
});})(g__2766__auto___4758))
;


var g__2766__auto___4762 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__2766__auto___4762){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4763 = arguments.length;
var i__4731__auto___4764 = (0);
while(true){
if((i__4731__auto___4764 < len__4730__auto___4763)){
args__4736__auto__.push((arguments[i__4731__auto___4764]));

var G__4765 = (i__4731__auto___4764 + (1));
i__4731__auto___4764 = G__4765;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4762))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4762){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4762),args);
});})(g__2766__auto___4762))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__2766__auto___4762){
return (function (seq4718){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4718));
});})(g__2766__auto___4762))
;


var g__2766__auto___4766 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__2766__auto___4766){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4767 = arguments.length;
var i__4731__auto___4768 = (0);
while(true){
if((i__4731__auto___4768 < len__4730__auto___4767)){
args__4736__auto__.push((arguments[i__4731__auto___4768]));

var G__4769 = (i__4731__auto___4768 + (1));
i__4731__auto___4768 = G__4769;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4766))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4766){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4766),args);
});})(g__2766__auto___4766))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__2766__auto___4766){
return (function (seq4719){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4719));
});})(g__2766__auto___4766))
;


var g__2766__auto___4770 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__2766__auto___4770){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4771 = arguments.length;
var i__4731__auto___4772 = (0);
while(true){
if((i__4731__auto___4772 < len__4730__auto___4771)){
args__4736__auto__.push((arguments[i__4731__auto___4772]));

var G__4773 = (i__4731__auto___4772 + (1));
i__4731__auto___4772 = G__4773;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4770))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4770){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4770),args);
});})(g__2766__auto___4770))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__2766__auto___4770){
return (function (seq4720){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4720));
});})(g__2766__auto___4770))
;


var g__2766__auto___4774 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__2766__auto___4774){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4775 = arguments.length;
var i__4731__auto___4776 = (0);
while(true){
if((i__4731__auto___4776 < len__4730__auto___4775)){
args__4736__auto__.push((arguments[i__4731__auto___4776]));

var G__4777 = (i__4731__auto___4776 + (1));
i__4731__auto___4776 = G__4777;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4774))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4774){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4774),args);
});})(g__2766__auto___4774))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__2766__auto___4774){
return (function (seq4721){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4721));
});})(g__2766__auto___4774))
;


var g__2766__auto___4778 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__2766__auto___4778){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4779 = arguments.length;
var i__4731__auto___4780 = (0);
while(true){
if((i__4731__auto___4780 < len__4730__auto___4779)){
args__4736__auto__.push((arguments[i__4731__auto___4780]));

var G__4781 = (i__4731__auto___4780 + (1));
i__4731__auto___4780 = G__4781;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4778))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4778){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4778),args);
});})(g__2766__auto___4778))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__2766__auto___4778){
return (function (seq4722){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4722));
});})(g__2766__auto___4778))
;


var g__2766__auto___4782 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__2766__auto___4782){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4783 = arguments.length;
var i__4731__auto___4784 = (0);
while(true){
if((i__4731__auto___4784 < len__4730__auto___4783)){
args__4736__auto__.push((arguments[i__4731__auto___4784]));

var G__4785 = (i__4731__auto___4784 + (1));
i__4731__auto___4784 = G__4785;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4782))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4782){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4782),args);
});})(g__2766__auto___4782))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__2766__auto___4782){
return (function (seq4723){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4723));
});})(g__2766__auto___4782))
;


var g__2766__auto___4786 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__2766__auto___4786){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4787 = arguments.length;
var i__4731__auto___4788 = (0);
while(true){
if((i__4731__auto___4788 < len__4730__auto___4787)){
args__4736__auto__.push((arguments[i__4731__auto___4788]));

var G__4789 = (i__4731__auto___4788 + (1));
i__4731__auto___4788 = G__4789;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4786))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4786){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4786),args);
});})(g__2766__auto___4786))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__2766__auto___4786){
return (function (seq4724){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4724));
});})(g__2766__auto___4786))
;


var g__2766__auto___4790 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__2766__auto___4790){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4791 = arguments.length;
var i__4731__auto___4792 = (0);
while(true){
if((i__4731__auto___4792 < len__4730__auto___4791)){
args__4736__auto__.push((arguments[i__4731__auto___4792]));

var G__4793 = (i__4731__auto___4792 + (1));
i__4731__auto___4792 = G__4793;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4790))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4790){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4790),args);
});})(g__2766__auto___4790))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__2766__auto___4790){
return (function (seq4725){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4725));
});})(g__2766__auto___4790))
;


var g__2766__auto___4794 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__2766__auto___4794){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4795 = arguments.length;
var i__4731__auto___4796 = (0);
while(true){
if((i__4731__auto___4796 < len__4730__auto___4795)){
args__4736__auto__.push((arguments[i__4731__auto___4796]));

var G__4797 = (i__4731__auto___4796 + (1));
i__4731__auto___4796 = G__4797;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4794))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4794){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4794),args);
});})(g__2766__auto___4794))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__2766__auto___4794){
return (function (seq4726){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4726));
});})(g__2766__auto___4794))
;


var g__2766__auto___4798 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__2766__auto___4798){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4799 = arguments.length;
var i__4731__auto___4800 = (0);
while(true){
if((i__4731__auto___4800 < len__4730__auto___4799)){
args__4736__auto__.push((arguments[i__4731__auto___4800]));

var G__4801 = (i__4731__auto___4800 + (1));
i__4731__auto___4800 = G__4801;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4798))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4798){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4798),args);
});})(g__2766__auto___4798))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__2766__auto___4798){
return (function (seq4727){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4727));
});})(g__2766__auto___4798))
;


var g__2766__auto___4802 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__2766__auto___4802){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4803 = arguments.length;
var i__4731__auto___4804 = (0);
while(true){
if((i__4731__auto___4804 < len__4730__auto___4803)){
args__4736__auto__.push((arguments[i__4731__auto___4804]));

var G__4805 = (i__4731__auto___4804 + (1));
i__4731__auto___4804 = G__4805;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4802))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4802){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4802),args);
});})(g__2766__auto___4802))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__2766__auto___4802){
return (function (seq4728){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4728));
});})(g__2766__auto___4802))
;


var g__2766__auto___4806 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.shuffle !== 'undefined')){
return clojure.test.check.generators.shuffle;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/shuffle
 */
cljs.spec.gen.alpha.shuffle = ((function (g__2766__auto___4806){
return (function cljs$spec$gen$alpha$shuffle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4807 = arguments.length;
var i__4731__auto___4808 = (0);
while(true){
if((i__4731__auto___4808 < len__4730__auto___4807)){
args__4736__auto__.push((arguments[i__4731__auto___4808]));

var G__4809 = (i__4731__auto___4808 + (1));
i__4731__auto___4808 = G__4809;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2766__auto___4806))
;

cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2766__auto___4806){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__2766__auto___4806),args);
});})(g__2766__auto___4806))
;

cljs.spec.gen.alpha.shuffle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.shuffle.cljs$lang$applyTo = ((function (g__2766__auto___4806){
return (function (seq4729){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4729));
});})(g__2766__auto___4806))
;

var g__2779__auto___4831 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__2779__auto___4831){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4832 = arguments.length;
var i__4731__auto___4833 = (0);
while(true){
if((i__4731__auto___4833 < len__4730__auto___4832)){
args__4736__auto__.push((arguments[i__4731__auto___4833]));

var G__4834 = (i__4731__auto___4833 + (1));
i__4731__auto___4833 = G__4834;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4831))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4831){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4831);
});})(g__2779__auto___4831))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__2779__auto___4831){
return (function (seq4810){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4810));
});})(g__2779__auto___4831))
;


var g__2779__auto___4835 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__2779__auto___4835){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4836 = arguments.length;
var i__4731__auto___4837 = (0);
while(true){
if((i__4731__auto___4837 < len__4730__auto___4836)){
args__4736__auto__.push((arguments[i__4731__auto___4837]));

var G__4838 = (i__4731__auto___4837 + (1));
i__4731__auto___4837 = G__4838;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4835))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4835){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4835);
});})(g__2779__auto___4835))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__2779__auto___4835){
return (function (seq4811){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4811));
});})(g__2779__auto___4835))
;


var g__2779__auto___4839 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__2779__auto___4839){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4840 = arguments.length;
var i__4731__auto___4841 = (0);
while(true){
if((i__4731__auto___4841 < len__4730__auto___4840)){
args__4736__auto__.push((arguments[i__4731__auto___4841]));

var G__4842 = (i__4731__auto___4841 + (1));
i__4731__auto___4841 = G__4842;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4839))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4839){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4839);
});})(g__2779__auto___4839))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__2779__auto___4839){
return (function (seq4812){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4812));
});})(g__2779__auto___4839))
;


var g__2779__auto___4843 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__2779__auto___4843){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4844 = arguments.length;
var i__4731__auto___4845 = (0);
while(true){
if((i__4731__auto___4845 < len__4730__auto___4844)){
args__4736__auto__.push((arguments[i__4731__auto___4845]));

var G__4846 = (i__4731__auto___4845 + (1));
i__4731__auto___4845 = G__4846;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4843))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4843){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4843);
});})(g__2779__auto___4843))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__2779__auto___4843){
return (function (seq4813){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4813));
});})(g__2779__auto___4843))
;


var g__2779__auto___4847 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__2779__auto___4847){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4848 = arguments.length;
var i__4731__auto___4849 = (0);
while(true){
if((i__4731__auto___4849 < len__4730__auto___4848)){
args__4736__auto__.push((arguments[i__4731__auto___4849]));

var G__4850 = (i__4731__auto___4849 + (1));
i__4731__auto___4849 = G__4850;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4847))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4847){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4847);
});})(g__2779__auto___4847))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__2779__auto___4847){
return (function (seq4814){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4814));
});})(g__2779__auto___4847))
;


var g__2779__auto___4851 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__2779__auto___4851){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4852 = arguments.length;
var i__4731__auto___4853 = (0);
while(true){
if((i__4731__auto___4853 < len__4730__auto___4852)){
args__4736__auto__.push((arguments[i__4731__auto___4853]));

var G__4854 = (i__4731__auto___4853 + (1));
i__4731__auto___4853 = G__4854;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4851))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4851){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4851);
});})(g__2779__auto___4851))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__2779__auto___4851){
return (function (seq4815){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4815));
});})(g__2779__auto___4851))
;


var g__2779__auto___4855 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__2779__auto___4855){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4856 = arguments.length;
var i__4731__auto___4857 = (0);
while(true){
if((i__4731__auto___4857 < len__4730__auto___4856)){
args__4736__auto__.push((arguments[i__4731__auto___4857]));

var G__4858 = (i__4731__auto___4857 + (1));
i__4731__auto___4857 = G__4858;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4855))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4855){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4855);
});})(g__2779__auto___4855))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__2779__auto___4855){
return (function (seq4816){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4816));
});})(g__2779__auto___4855))
;


var g__2779__auto___4859 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__2779__auto___4859){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4860 = arguments.length;
var i__4731__auto___4861 = (0);
while(true){
if((i__4731__auto___4861 < len__4730__auto___4860)){
args__4736__auto__.push((arguments[i__4731__auto___4861]));

var G__4862 = (i__4731__auto___4861 + (1));
i__4731__auto___4861 = G__4862;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4859))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4859){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4859);
});})(g__2779__auto___4859))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__2779__auto___4859){
return (function (seq4817){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4817));
});})(g__2779__auto___4859))
;


var g__2779__auto___4863 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__2779__auto___4863){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4864 = arguments.length;
var i__4731__auto___4865 = (0);
while(true){
if((i__4731__auto___4865 < len__4730__auto___4864)){
args__4736__auto__.push((arguments[i__4731__auto___4865]));

var G__4866 = (i__4731__auto___4865 + (1));
i__4731__auto___4865 = G__4866;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4863))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4863){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4863);
});})(g__2779__auto___4863))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__2779__auto___4863){
return (function (seq4818){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4818));
});})(g__2779__auto___4863))
;


var g__2779__auto___4867 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__2779__auto___4867){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4868 = arguments.length;
var i__4731__auto___4869 = (0);
while(true){
if((i__4731__auto___4869 < len__4730__auto___4868)){
args__4736__auto__.push((arguments[i__4731__auto___4869]));

var G__4870 = (i__4731__auto___4869 + (1));
i__4731__auto___4869 = G__4870;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4867))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4867){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4867);
});})(g__2779__auto___4867))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__2779__auto___4867){
return (function (seq4819){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4819));
});})(g__2779__auto___4867))
;


var g__2779__auto___4871 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__2779__auto___4871){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4872 = arguments.length;
var i__4731__auto___4873 = (0);
while(true){
if((i__4731__auto___4873 < len__4730__auto___4872)){
args__4736__auto__.push((arguments[i__4731__auto___4873]));

var G__4874 = (i__4731__auto___4873 + (1));
i__4731__auto___4873 = G__4874;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4871))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4871){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4871);
});})(g__2779__auto___4871))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__2779__auto___4871){
return (function (seq4820){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4820));
});})(g__2779__auto___4871))
;


var g__2779__auto___4875 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__2779__auto___4875){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4876 = arguments.length;
var i__4731__auto___4877 = (0);
while(true){
if((i__4731__auto___4877 < len__4730__auto___4876)){
args__4736__auto__.push((arguments[i__4731__auto___4877]));

var G__4878 = (i__4731__auto___4877 + (1));
i__4731__auto___4877 = G__4878;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4875))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4875){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4875);
});})(g__2779__auto___4875))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__2779__auto___4875){
return (function (seq4821){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4821));
});})(g__2779__auto___4875))
;


var g__2779__auto___4879 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__2779__auto___4879){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4880 = arguments.length;
var i__4731__auto___4881 = (0);
while(true){
if((i__4731__auto___4881 < len__4730__auto___4880)){
args__4736__auto__.push((arguments[i__4731__auto___4881]));

var G__4882 = (i__4731__auto___4881 + (1));
i__4731__auto___4881 = G__4882;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4879))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4879){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4879);
});})(g__2779__auto___4879))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__2779__auto___4879){
return (function (seq4822){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4822));
});})(g__2779__auto___4879))
;


var g__2779__auto___4883 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__2779__auto___4883){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4884 = arguments.length;
var i__4731__auto___4885 = (0);
while(true){
if((i__4731__auto___4885 < len__4730__auto___4884)){
args__4736__auto__.push((arguments[i__4731__auto___4885]));

var G__4886 = (i__4731__auto___4885 + (1));
i__4731__auto___4885 = G__4886;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4883))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4883){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4883);
});})(g__2779__auto___4883))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__2779__auto___4883){
return (function (seq4823){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4823));
});})(g__2779__auto___4883))
;


var g__2779__auto___4887 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__2779__auto___4887){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4888 = arguments.length;
var i__4731__auto___4889 = (0);
while(true){
if((i__4731__auto___4889 < len__4730__auto___4888)){
args__4736__auto__.push((arguments[i__4731__auto___4889]));

var G__4890 = (i__4731__auto___4889 + (1));
i__4731__auto___4889 = G__4890;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4887))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4887){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4887);
});})(g__2779__auto___4887))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__2779__auto___4887){
return (function (seq4824){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4824));
});})(g__2779__auto___4887))
;


var g__2779__auto___4891 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__2779__auto___4891){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4892 = arguments.length;
var i__4731__auto___4893 = (0);
while(true){
if((i__4731__auto___4893 < len__4730__auto___4892)){
args__4736__auto__.push((arguments[i__4731__auto___4893]));

var G__4894 = (i__4731__auto___4893 + (1));
i__4731__auto___4893 = G__4894;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4891))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4891){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4891);
});})(g__2779__auto___4891))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__2779__auto___4891){
return (function (seq4825){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4825));
});})(g__2779__auto___4891))
;


var g__2779__auto___4895 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__2779__auto___4895){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4896 = arguments.length;
var i__4731__auto___4897 = (0);
while(true){
if((i__4731__auto___4897 < len__4730__auto___4896)){
args__4736__auto__.push((arguments[i__4731__auto___4897]));

var G__4898 = (i__4731__auto___4897 + (1));
i__4731__auto___4897 = G__4898;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4895))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4895){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4895);
});})(g__2779__auto___4895))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__2779__auto___4895){
return (function (seq4826){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4826));
});})(g__2779__auto___4895))
;


var g__2779__auto___4899 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__2779__auto___4899){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4900 = arguments.length;
var i__4731__auto___4901 = (0);
while(true){
if((i__4731__auto___4901 < len__4730__auto___4900)){
args__4736__auto__.push((arguments[i__4731__auto___4901]));

var G__4902 = (i__4731__auto___4901 + (1));
i__4731__auto___4901 = G__4902;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4899))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4899){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4899);
});})(g__2779__auto___4899))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__2779__auto___4899){
return (function (seq4827){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4827));
});})(g__2779__auto___4899))
;


var g__2779__auto___4903 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__2779__auto___4903){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4904 = arguments.length;
var i__4731__auto___4905 = (0);
while(true){
if((i__4731__auto___4905 < len__4730__auto___4904)){
args__4736__auto__.push((arguments[i__4731__auto___4905]));

var G__4906 = (i__4731__auto___4905 + (1));
i__4731__auto___4905 = G__4906;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4903))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4903){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4903);
});})(g__2779__auto___4903))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__2779__auto___4903){
return (function (seq4828){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4828));
});})(g__2779__auto___4903))
;


var g__2779__auto___4907 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__2779__auto___4907){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4908 = arguments.length;
var i__4731__auto___4909 = (0);
while(true){
if((i__4731__auto___4909 < len__4730__auto___4908)){
args__4736__auto__.push((arguments[i__4731__auto___4909]));

var G__4910 = (i__4731__auto___4909 + (1));
i__4731__auto___4909 = G__4910;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4907))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4907){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4907);
});})(g__2779__auto___4907))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__2779__auto___4907){
return (function (seq4829){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4829));
});})(g__2779__auto___4907))
;


var g__2779__auto___4911 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__2779__auto___4911){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4912 = arguments.length;
var i__4731__auto___4913 = (0);
while(true){
if((i__4731__auto___4913 < len__4730__auto___4912)){
args__4736__auto__.push((arguments[i__4731__auto___4913]));

var G__4914 = (i__4731__auto___4913 + (1));
i__4731__auto___4913 = G__4914;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__2779__auto___4911))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__2779__auto___4911){
return (function (args){
return cljs.core.deref.call(null,g__2779__auto___4911);
});})(g__2779__auto___4911))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__2779__auto___4911){
return (function (seq4830){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4830));
});})(g__2779__auto___4911))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4736__auto__ = [];
var len__4730__auto___4917 = arguments.length;
var i__4731__auto___4918 = (0);
while(true){
if((i__4731__auto___4918 < len__4730__auto___4917)){
args__4736__auto__.push((arguments[i__4731__auto___4918]));

var G__4919 = (i__4731__auto___4918 + (1));
i__4731__auto___4918 = G__4919;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__4915_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__4915_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq4916){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq4916));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return (!((cljs.core.namespace.call(null,ident) == null)));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.some_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.such_that.call(null,cljs.core.some_QMARK_,cljs.spec.gen.alpha.any_printable.call(null)),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__4921_SHARP_){
return (new Date(p1__4921_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__4920_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4920_SHARP_),".com"].join('')));
});})(simple))
,cljs.spec.gen.alpha.uuid.call(null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1611075056474
