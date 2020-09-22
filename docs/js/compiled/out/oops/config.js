// Compiled by ClojureScript 1.10.520 {}
goog.provide('oops.config');
goog.require('cljs.core');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031)],[new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"console","console",1228072057),true,new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),true,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032)]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config.call(null);
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_.call(null,new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

oops.config._STAR_runtime_config_STAR_ = new_config;

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22085 = arguments.length;
var i__4731__auto___22086 = (0);
while(true){
if((i__4731__auto___22086 < len__4730__auto___22085)){
args__4736__auto__.push((arguments[i__4731__auto___22086]));

var G__22087 = (i__4731__auto___22086 + (1));
i__4731__auto___22086 = G__22087;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_.call(null,f_or_map)){
return oops.config.update_current_runtime_config_BANG_.call(null,cljs.core.merge,f_or_map);
} else {
return oops.config.set_current_runtime_config_BANG_.call(null,cljs.core.apply.call(null,f_or_map,oops.config.get_current_runtime_config.call(null),args));
}
});

oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq22083){
var G__22084 = cljs.core.first.call(null,seq22083);
var seq22083__$1 = cljs.core.next.call(null,seq22083);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22084,seq22083__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22094 = arguments.length;
var i__4731__auto___22095 = (0);
while(true){
if((i__4731__auto___22095 < len__4730__auto___22094)){
args__4736__auto__.push((arguments[i__4731__auto___22095]));

var G__22096 = (i__4731__auto___22095 + (1));
i__4731__auto___22095 = G__22096;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__22090){
var vec__22091 = p__22090;
var config = cljs.core.nth.call(null,vec__22091,(0),null);
return key.call(null,(function (){var or__4131__auto__ = config;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})());
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.config.get_config_key.cljs$lang$applyTo = (function (seq22088){
var G__22089 = cljs.core.first.call(null,seq22088);
var seq22088__$1 = cljs.core.next.call(null,seq22088);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22089,seq22088__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22103 = arguments.length;
var i__4731__auto___22104 = (0);
while(true){
if((i__4731__auto___22104 < len__4730__auto___22103)){
args__4736__auto__.push((arguments[i__4731__auto___22104]));

var G__22105 = (i__4731__auto___22104 + (1));
i__4731__auto___22104 = G__22105;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__22099){
var vec__22100 = p__22099;
var config = cljs.core.nth.call(null,vec__22100,(0),null);
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457),cljs.core.get.call(null,(function (){var or__4131__auto__ = config;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})(),key,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457)));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq22097){
var G__22098 = cljs.core.first.call(null,seq22097);
var seq22097__$1 = cljs.core.next.call(null,seq22097);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22098,seq22097__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22111 = arguments.length;
var i__4731__auto___22112 = (0);
while(true){
if((i__4731__auto___22112 < len__4730__auto___22111)){
args__4736__auto__.push((arguments[i__4731__auto___22112]));

var G__22113 = (i__4731__auto___22112 + (1));
i__4731__auto___22112 = G__22113;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__22107){
var vec__22108 = p__22107;
var config = cljs.core.nth.call(null,vec__22108,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),config);
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq22106){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22106));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22119 = arguments.length;
var i__4731__auto___22120 = (0);
while(true){
if((i__4731__auto___22120 < len__4730__auto___22119)){
args__4736__auto__.push((arguments[i__4731__auto___22120]));

var G__22121 = (i__4731__auto___22120 + (1));
i__4731__auto___22120 = G__22121;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__22115){
var vec__22116 = p__22115;
var config = cljs.core.nth.call(null,vec__22116,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),config);
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq22114){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22114));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22127 = arguments.length;
var i__4731__auto___22128 = (0);
while(true){
if((i__4731__auto___22128 < len__4730__auto___22127)){
args__4736__auto__.push((arguments[i__4731__auto___22128]));

var G__22129 = (i__4731__auto___22128 + (1));
i__4731__auto___22128 = G__22129;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__22123){
var vec__22124 = p__22123;
var config = cljs.core.nth.call(null,vec__22124,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"suppress-reporting","suppress-reporting",43885458),config);
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq22122){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22122));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22135 = arguments.length;
var i__4731__auto___22136 = (0);
while(true){
if((i__4731__auto___22136 < len__4730__auto___22135)){
args__4736__auto__.push((arguments[i__4731__auto___22136]));

var G__22137 = (i__4731__auto___22136 + (1));
i__4731__auto___22136 = G__22137;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__22131){
var vec__22132 = p__22131;
var config = cljs.core.nth.call(null,vec__22132,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),config);
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_child_factory.cljs$lang$applyTo = (function (seq22130){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22130));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22143 = arguments.length;
var i__4731__auto___22144 = (0);
while(true){
if((i__4731__auto___22144 < len__4730__auto___22143)){
args__4736__auto__.push((arguments[i__4731__auto___22144]));

var G__22145 = (i__4731__auto___22144 + (1));
i__4731__auto___22144 = G__22145;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22139){
var vec__22140 = p__22139;
var config = cljs.core.nth.call(null,vec__22140,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),config) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq22138){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22138));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22151 = arguments.length;
var i__4731__auto___22152 = (0);
while(true){
if((i__4731__auto___22152 < len__4730__auto___22151)){
args__4736__auto__.push((arguments[i__4731__auto___22152]));

var G__22153 = (i__4731__auto___22152 + (1));
i__4731__auto___22152 = G__22153;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22147){
var vec__22148 = p__22147;
var config = cljs.core.nth.call(null,vec__22148,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),config) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq22146){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22146));
});


//# sourceMappingURL=config.js.map?rel=1600808336596
