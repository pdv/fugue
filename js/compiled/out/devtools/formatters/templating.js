// Compiled by ClojureScript 1.10.520 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x20051_20052 = value;
x20051_20052.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x20054_20055 = value;
x20054_20055.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x20057_20058 = value;
x20057_20058.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
return ((devtools.formatters.templating.group_QMARK_.call(null,value)) && (cljs.core._EQ_.call(null,(value[(0)]),"object")));
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20065 = arguments.length;
var i__4731__auto___20066 = (0);
while(true){
if((i__4731__auto___20066 < len__4730__auto___20065)){
args__4736__auto__.push((arguments[i__4731__auto___20066]));

var G__20067 = (i__4731__auto___20066 + (1));
i__4731__auto___20066 = G__20067;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__20061_20068 = cljs.core.seq.call(null,items);
var chunk__20062_20069 = null;
var count__20063_20070 = (0);
var i__20064_20071 = (0);
while(true){
if((i__20064_20071 < count__20063_20070)){
var item_20072 = cljs.core._nth.call(null,chunk__20062_20069,i__20064_20071);
if((!((item_20072 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_20072)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_20072)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_20072));
}
} else {
}


var G__20073 = seq__20061_20068;
var G__20074 = chunk__20062_20069;
var G__20075 = count__20063_20070;
var G__20076 = (i__20064_20071 + (1));
seq__20061_20068 = G__20073;
chunk__20062_20069 = G__20074;
count__20063_20070 = G__20075;
i__20064_20071 = G__20076;
continue;
} else {
var temp__5720__auto___20077 = cljs.core.seq.call(null,seq__20061_20068);
if(temp__5720__auto___20077){
var seq__20061_20078__$1 = temp__5720__auto___20077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20061_20078__$1)){
var c__4550__auto___20079 = cljs.core.chunk_first.call(null,seq__20061_20078__$1);
var G__20080 = cljs.core.chunk_rest.call(null,seq__20061_20078__$1);
var G__20081 = c__4550__auto___20079;
var G__20082 = cljs.core.count.call(null,c__4550__auto___20079);
var G__20083 = (0);
seq__20061_20068 = G__20080;
chunk__20062_20069 = G__20081;
count__20063_20070 = G__20082;
i__20064_20071 = G__20083;
continue;
} else {
var item_20084 = cljs.core.first.call(null,seq__20061_20078__$1);
if((!((item_20084 == null)))){
if(cljs.core.coll_QMARK_.call(null,item_20084)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_20084)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_20084));
}
} else {
}


var G__20085 = cljs.core.next.call(null,seq__20061_20078__$1);
var G__20086 = null;
var G__20087 = (0);
var G__20088 = (0);
seq__20061_20068 = G__20085;
chunk__20062_20069 = G__20086;
count__20063_20070 = G__20087;
i__20064_20071 = G__20088;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq20060){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20060));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20096 = arguments.length;
var i__4731__auto___20097 = (0);
while(true){
if((i__4731__auto___20097 < len__4730__auto___20096)){
args__4736__auto__.push((arguments[i__4731__auto___20097]));

var G__20098 = (i__4731__auto___20097 + (1));
i__4731__auto___20097 = G__20098;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__20092_20099 = cljs.core.seq.call(null,children);
var chunk__20093_20100 = null;
var count__20094_20101 = (0);
var i__20095_20102 = (0);
while(true){
if((i__20095_20102 < count__20094_20101)){
var child_20103 = cljs.core._nth.call(null,chunk__20093_20100,i__20095_20102);
if((!((child_20103 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_20103)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_20103))));
} else {
var temp__5718__auto___20104 = devtools.formatters.helpers.pref.call(null,child_20103);
if(cljs.core.truth_(temp__5718__auto___20104)){
var child_value_20105 = temp__5718__auto___20104;
template.push(child_value_20105);
} else {
}
}
} else {
}


var G__20106 = seq__20092_20099;
var G__20107 = chunk__20093_20100;
var G__20108 = count__20094_20101;
var G__20109 = (i__20095_20102 + (1));
seq__20092_20099 = G__20106;
chunk__20093_20100 = G__20107;
count__20094_20101 = G__20108;
i__20095_20102 = G__20109;
continue;
} else {
var temp__5720__auto___20110 = cljs.core.seq.call(null,seq__20092_20099);
if(temp__5720__auto___20110){
var seq__20092_20111__$1 = temp__5720__auto___20110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20092_20111__$1)){
var c__4550__auto___20112 = cljs.core.chunk_first.call(null,seq__20092_20111__$1);
var G__20113 = cljs.core.chunk_rest.call(null,seq__20092_20111__$1);
var G__20114 = c__4550__auto___20112;
var G__20115 = cljs.core.count.call(null,c__4550__auto___20112);
var G__20116 = (0);
seq__20092_20099 = G__20113;
chunk__20093_20100 = G__20114;
count__20094_20101 = G__20115;
i__20095_20102 = G__20116;
continue;
} else {
var child_20117 = cljs.core.first.call(null,seq__20092_20111__$1);
if((!((child_20117 == null)))){
if(cljs.core.coll_QMARK_.call(null,child_20117)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_20117))));
} else {
var temp__5718__auto___20118 = devtools.formatters.helpers.pref.call(null,child_20117);
if(cljs.core.truth_(temp__5718__auto___20118)){
var child_value_20119 = temp__5718__auto___20118;
template.push(child_value_20119);
} else {
}
}
} else {
}


var G__20120 = cljs.core.next.call(null,seq__20092_20111__$1);
var G__20121 = null;
var G__20122 = (0);
var G__20123 = (0);
seq__20092_20099 = G__20120;
chunk__20093_20100 = G__20121;
count__20094_20101 = G__20122;
i__20095_20102 = G__20123;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq20089){
var G__20090 = cljs.core.first.call(null,seq20089);
var seq20089__$1 = cljs.core.next.call(null,seq20089);
var G__20091 = cljs.core.first.call(null,seq20089__$1);
var seq20089__$2 = cljs.core.next.call(null,seq20089__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20090,G__20091,seq20089__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20126 = arguments.length;
var i__4731__auto___20127 = (0);
while(true){
if((i__4731__auto___20127 < len__4730__auto___20126)){
args__4736__auto__.push((arguments[i__4731__auto___20127]));

var G__20128 = (i__4731__auto___20127 + (1));
i__4731__auto___20127 = G__20128;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq20124){
var G__20125 = cljs.core.first.call(null,seq20124);
var seq20124__$1 = cljs.core.next.call(null,seq20124);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20125,seq20124__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20131 = arguments.length;
var i__4731__auto___20132 = (0);
while(true){
if((i__4731__auto___20132 < len__4730__auto___20131)){
args__4736__auto__.push((arguments[i__4731__auto___20132]));

var G__20133 = (i__4731__auto___20132 + (1));
i__4731__auto___20132 = G__20133;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq20129){
var G__20130 = cljs.core.first.call(null,seq20129);
var seq20129__$1 = cljs.core.next.call(null,seq20129);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20130,seq20129__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__20135 = arguments.length;
switch (G__20135) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj20137 = ({"target":object,"header":header,"body":body,"startIndex":(function (){var or__4131__auto__ = start_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})()});
return obj20137;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate)){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20145 = arguments.length;
var i__4731__auto___20146 = (0);
while(true){
if((i__4731__auto___20146 < len__4730__auto___20145)){
args__4736__auto__.push((arguments[i__4731__auto___20146]));

var G__20147 = (i__4731__auto___20146 + (1));
i__4731__auto___20146 = G__20147;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__20141){
var vec__20142 = p__20141;
var state_override_fn = cljs.core.nth.call(null,vec__20142,(0),null);
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = (((!((state_override_fn == null))))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq20139){
var G__20140 = cljs.core.first.call(null,seq20139);
var seq20139__$1 = cljs.core.next.call(null,seq20139);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20140,seq20139__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR__orig_val__20148 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__20149 = (1);
cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__20149;

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__20148;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__20150 = name;
switch (G__20150) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = ((devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string'))){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__20152 = tag;
var html_tag = cljs.core.nth.call(null,vec__20152,(0),null);
var style = cljs.core.nth.call(null,vec__20152,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if((!(cljs.core.sequential_QMARK_.call(null,markup)))){
return markup;
} else {
var _STAR_current_render_path_STAR__orig_val__20155 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_path_STAR__temp_val__20156 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));
devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__20156;

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__20155;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR__orig_val__20157 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR__orig_val__20158 = devtools.formatters.templating._STAR_current_render_path_STAR_;
var _STAR_current_render_stack_STAR__temp_val__20159 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);
var _STAR_current_render_path_STAR__temp_val__20160 = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");
devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__temp_val__20159;

devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__temp_val__20160;

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR__orig_val__20158;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR__orig_val__20157;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",["result of markup rendering must be a template,\n","resolved to ",devtools.util.pprint_str.call(null,value),"initial value: ",devtools.util.pprint_str.call(null,initial_value)].join(''),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__20161 = initial_value;
var G__20162 = value.call(null);
initial_value = G__20161;
value = G__20162;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__20163 = initial_value;
var G__20164 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__20163;
value = G__20164;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__20165 = initial_value;
var G__20166 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__20165;
value = G__20166;
continue;
} else {
if(devtools.formatters.templating.template_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.surrogate_QMARK_.call(null,value)){
return value;
} else {
if(devtools.formatters.templating.reference_QMARK_.call(null,value)){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1611075071540
