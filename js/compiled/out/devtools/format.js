// Compiled by ClojureScript 1.10.520 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._header[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,value);
} else {
var m__4431__auto__ = (devtools.format._header["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._has_body[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,value);
} else {
var m__4431__auto__ = (devtools.format._has_body["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4433__auto__ = (((value == null))?null:value);
var m__4434__auto__ = (devtools.format._body[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,value);
} else {
var m__4431__auto__ = (devtools.format._body["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o38939 = temp__5718__auto__;
var temp__5718__auto____$1 = (o38939["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o38940 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o38940["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o38941 = temp__5718__auto____$2;
return (o38941["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o38942 = temp__5718__auto__;
var temp__5718__auto____$1 = (o38942["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o38943 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o38943["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o38944 = temp__5718__auto____$2;
return (o38944["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o38945 = temp__5718__auto__;
var temp__5718__auto____$1 = (o38945["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o38946 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o38946["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o38947 = temp__5718__auto____$2;
return (o38947["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o38948 = temp__5718__auto__;
var temp__5718__auto____$1 = (o38948["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o38949 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o38949["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o38950 = temp__5718__auto____$2;
return (o38950["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o38951 = temp__5718__auto__;
var temp__5718__auto____$1 = (o38951["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o38952 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o38952["templating"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o38953 = temp__5718__auto____$2;
return (o38953["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o38954 = temp__5718__auto__;
var temp__5718__auto____$1 = (o38954["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o38955 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o38955["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o38956 = temp__5718__auto____$2;
return (o38956["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o38957 = temp__5718__auto__;
var temp__5718__auto____$1 = (o38957["formatters"]);
if(cljs.core.truth_(temp__5718__auto____$1)){
var o38958 = temp__5718__auto____$1;
var temp__5718__auto____$2 = (o38958["markup"]);
if(cljs.core.truth_(temp__5718__auto____$2)){
var o38959 = temp__5718__auto____$2;
return (o38959["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38961 = arguments.length;
var i__4731__auto___38962 = (0);
while(true){
if((i__4731__auto___38962 < len__4730__auto___38961)){
args__4736__auto__.push((arguments[i__4731__auto___38962]));

var G__38963 = (i__4731__auto___38962 + (1));
i__4731__auto___38962 = G__38963;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq38960){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38960));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38965 = arguments.length;
var i__4731__auto___38966 = (0);
while(true){
if((i__4731__auto___38966 < len__4730__auto___38965)){
args__4736__auto__.push((arguments[i__4731__auto___38966]));

var G__38967 = (i__4731__auto___38966 + (1));
i__4731__auto___38966 = G__38967;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq38964){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38964));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38969 = arguments.length;
var i__4731__auto___38970 = (0);
while(true){
if((i__4731__auto___38970 < len__4730__auto___38969)){
args__4736__auto__.push((arguments[i__4731__auto___38970]));

var G__38971 = (i__4731__auto___38970 + (1));
i__4731__auto___38970 = G__38971;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq38968){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38968));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38973 = arguments.length;
var i__4731__auto___38974 = (0);
while(true){
if((i__4731__auto___38974 < len__4730__auto___38973)){
args__4736__auto__.push((arguments[i__4731__auto___38974]));

var G__38975 = (i__4731__auto___38974 + (1));
i__4731__auto___38974 = G__38975;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq38972){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38972));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38977 = arguments.length;
var i__4731__auto___38978 = (0);
while(true){
if((i__4731__auto___38978 < len__4730__auto___38977)){
args__4736__auto__.push((arguments[i__4731__auto___38978]));

var G__38979 = (i__4731__auto___38978 + (1));
i__4731__auto___38978 = G__38979;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq38976){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38976));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38981 = arguments.length;
var i__4731__auto___38982 = (0);
while(true){
if((i__4731__auto___38982 < len__4730__auto___38981)){
args__4736__auto__.push((arguments[i__4731__auto___38982]));

var G__38983 = (i__4731__auto___38982 + (1));
i__4731__auto___38982 = G__38983;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq38980){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38980));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38985 = arguments.length;
var i__4731__auto___38986 = (0);
while(true){
if((i__4731__auto___38986 < len__4730__auto___38985)){
args__4736__auto__.push((arguments[i__4731__auto___38986]));

var G__38987 = (i__4731__auto___38986 + (1));
i__4731__auto___38986 = G__38987;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq38984){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38984));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38995 = arguments.length;
var i__4731__auto___38996 = (0);
while(true){
if((i__4731__auto___38996 < len__4730__auto___38995)){
args__4736__auto__.push((arguments[i__4731__auto___38996]));

var G__38997 = (i__4731__auto___38996 + (1));
i__4731__auto___38996 = G__38997;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38991){
var vec__38992 = p__38991;
var state_override = cljs.core.nth.call(null,vec__38992,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__38992,state_override){
return (function (p1__38988_SHARP_){
return cljs.core.merge.call(null,p1__38988_SHARP_,state_override);
});})(vec__38992,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq38989){
var G__38990 = cljs.core.first.call(null,seq38989);
var seq38989__$1 = cljs.core.next.call(null,seq38989);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38990,seq38989__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38999 = arguments.length;
var i__4731__auto___39000 = (0);
while(true){
if((i__4731__auto___39000 < len__4730__auto___38999)){
args__4736__auto__.push((arguments[i__4731__auto___39000]));

var G__39001 = (i__4731__auto___39000 + (1));
i__4731__auto___39000 = G__39001;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq38998){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38998));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39004 = arguments.length;
var i__4731__auto___39005 = (0);
while(true){
if((i__4731__auto___39005 < len__4730__auto___39004)){
args__4736__auto__.push((arguments[i__4731__auto___39005]));

var G__39006 = (i__4731__auto___39005 + (1));
i__4731__auto___39005 = G__39006;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq39002){
var G__39003 = cljs.core.first.call(null,seq39002);
var seq39002__$1 = cljs.core.next.call(null,seq39002);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39003,seq39002__$1);
});


//# sourceMappingURL=format.js.map?rel=1610422551216
