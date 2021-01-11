// Compiled by ClojureScript 1.10.520 {}
goog.provide('devtools.util');
goog.require('cljs.core');
goog.require('goog.userAgent');
goog.require('clojure.data');
goog.require('devtools.version');
goog.require('devtools.context');
goog.require('cljs.pprint');
goog.require('devtools.prefs');
devtools.util.lib_info_style = "color:black;font-weight:bold;";
devtools.util.reset_style = "color:black";
devtools.util.advanced_build_explanation_url = "https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-custom-formatters-do-not-work-for-advanced-builds";
devtools.util._STAR_custom_formatters_active_STAR_ = false;
devtools.util._STAR_console_open_STAR_ = false;
devtools.util._STAR_custom_formatters_warning_reported_STAR_ = false;
devtools.util.pprint_str = (function devtools$util$pprint_str(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39786 = arguments.length;
var i__4731__auto___39787 = (0);
while(true){
if((i__4731__auto___39787 < len__4730__auto___39786)){
args__4736__auto__.push((arguments[i__4731__auto___39787]));

var G__39788 = (i__4731__auto___39787 + (1));
i__4731__auto___39787 = G__39788;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.util.pprint_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39780_39789 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39781_39790 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39782_39791 = true;
var _STAR_print_fn_STAR__temp_val__39783_39792 = ((function (_STAR_print_newline_STAR__orig_val__39780_39789,_STAR_print_fn_STAR__orig_val__39781_39790,_STAR_print_newline_STAR__temp_val__39782_39791,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__39780_39789,_STAR_print_fn_STAR__orig_val__39781_39790,_STAR_print_newline_STAR__temp_val__39782_39791,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39782_39791;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39783_39792;

try{var _STAR_print_level_STAR__orig_val__39784_39793 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__39785_39794 = (300);
cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__39785_39794;

try{cljs.core.apply.call(null,cljs.pprint.pprint,args);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__39784_39793;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39781_39790;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39780_39789;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});

devtools.util.pprint_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.util.pprint_str.cljs$lang$applyTo = (function (seq39779){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39779));
});

devtools.util.make_version_info = (function devtools$util$make_version_info(){
return "0.9.10";
});
devtools.util.make_lib_info = (function devtools$util$make_lib_info(){
return ["CLJS DevTools ",devtools.util.make_version_info.call(null)].join('');
});
devtools.util.get_lib_info = (function devtools$util$get_lib_info(){
return devtools.util.make_lib_info.call(null);
});
devtools.util.get_node_info = (function devtools$util$get_node_info(root){
try{var process = (root["process"]);
var version = (process["version"]);
var platform = (process["platform"]);
if(cljs.core.truth_((function (){var and__4120__auto__ = version;
if(cljs.core.truth_(and__4120__auto__)){
return platform;
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),version,new cljs.core.Keyword(null,"platform","platform",-1086422114),platform], null);
} else {
return null;
}
}catch (e39795){var _ = e39795;
return null;
}});
devtools.util.get_node_description = (function devtools$util$get_node_description(node_info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"platform","platform",-1086422114).cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "?";
}
})()),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "?";
}
})())].join('');
});
devtools.util.in_node_context_QMARK_ = (function devtools$util$in_node_context_QMARK_(){
return (!((devtools.util.get_node_info.call(null,devtools.context.get_root.call(null)) == null)));
});
devtools.util.get_js_context_description = (function devtools$util$get_js_context_description(){
var temp__5718__auto__ = devtools.util.get_node_info.call(null,devtools.context.get_root.call(null));
if(cljs.core.truth_(temp__5718__auto__)){
var node_info = temp__5718__auto__;
return ["node/",devtools.util.get_node_description.call(null,node_info)].join('');
} else {
var user_agent = goog.userAgent.getUserAgentString();
if(cljs.core.empty_QMARK_.call(null,user_agent)){
return "<unknown context>";
} else {
return user_agent;
}
}
});
devtools.util.unknown_feature_msg = (function devtools$util$unknown_feature_msg(feature,known_features,lib_info){
return ["No such feature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)," is currently available in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_info),". ","The list of supported features is ",cljs.core.pr_str.call(null,known_features),"."].join('');
});
devtools.util.feature_not_available_msg = (function devtools$util$feature_not_available_msg(feature){
return ["Feature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)," cannot be installed. ","Unsupported Javascript context: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_js_context_description.call(null)),"."].join('');
});
devtools.util.custom_formatters_not_active_msg = (function devtools$util$custom_formatters_not_active_msg(){
return ["CLJS DevTools: some custom formatters were not rendered.\n","https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-some-custom-formatters-were-not-rendered"].join('');
});
devtools.util.formatter_key = "devtoolsFormatters";
devtools.util.get_formatters_safe = (function devtools$util$get_formatters_safe(){
var formatters = (devtools.context.get_root.call(null)[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_.call(null,formatters)){
return formatters;
} else {
return [];
}
});
devtools.util.set_formatters_safe_BANG_ = (function devtools$util$set_formatters_safe_BANG_(new_formatters){
if((((new_formatters == null)) || (cljs.core.array_QMARK_.call(null,new_formatters)))){
} else {
throw (new Error("Assert failed: (or (nil? new-formatters) (array? new-formatters))"));
}

return (devtools.context.get_root.call(null)[devtools.util.formatter_key] = ((cljs.core.empty_QMARK_.call(null,new_formatters))?null:new_formatters));
});
devtools.util.print_config_overrides_if_requested_BANG_ = (function devtools$util$print_config_overrides_if_requested_BANG_(msg){
if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"print-config-overrides","print-config-overrides",-274716965)))){
var diff = cljs.core.second.call(null,clojure.data.diff.call(null,cljs.core.deref.call(null,devtools.prefs.default_config),devtools.prefs.get_prefs.call(null)));
if((!(cljs.core.empty_QMARK_.call(null,diff)))){
return devtools.context.get_console.call(null).info(msg,devtools.util.pprint_str.call(null,diff));
} else {
return null;
}
} else {
return null;
}
});

/**
* @constructor
*/
devtools.util.CustomFormattersDetector = (function (){
});

devtools.util.CustomFormattersDetector.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

devtools.util.CustomFormattersDetector.cljs$lang$type = true;

devtools.util.CustomFormattersDetector.cljs$lang$ctorStr = "devtools.util/CustomFormattersDetector";

devtools.util.CustomFormattersDetector.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"devtools.util/CustomFormattersDetector");
});

/**
 * Positional factory function for devtools.util/CustomFormattersDetector.
 */
devtools.util.__GT_CustomFormattersDetector = (function devtools$util$__GT_CustomFormattersDetector(){
return (new devtools.util.CustomFormattersDetector());
});

devtools.util.make_detector = (function devtools$util$make_detector(){
var detector = (new devtools.util.CustomFormattersDetector());
(detector["header"] = ((function (detector){
return (function (_object,_config){
devtools.util._STAR_custom_formatters_active_STAR_ = true;

return null;
});})(detector))
);

(detector["hasBody"] = cljs.core.constantly.call(null,false));

(detector["body"] = cljs.core.constantly.call(null,null));

return detector;
});
devtools.util.install_detector_BANG_ = (function devtools$util$install_detector_BANG_(detector){
var formatters = devtools.util.get_formatters_safe.call(null);
formatters.push(detector);

return devtools.util.set_formatters_safe_BANG_.call(null,formatters);
});
devtools.util.uninstall_detector_BANG_ = (function devtools$util$uninstall_detector_BANG_(detector){
var current_formatters = (devtools.context.get_root.call(null)[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_.call(null,current_formatters)){
var new_formatters = current_formatters.filter(((function (current_formatters){
return (function (p1__39796_SHARP_){
return (!(cljs.core._EQ_.call(null,detector,p1__39796_SHARP_)));
});})(current_formatters))
);
return devtools.util.set_formatters_safe_BANG_.call(null,new_formatters);
} else {
return null;
}
});
devtools.util.check_custom_formatters_active_BANG_ = (function devtools$util$check_custom_formatters_active_BANG_(){
if(((devtools.util._STAR_console_open_STAR_) && ((!(devtools.util._STAR_custom_formatters_active_STAR_))))){
if(devtools.util._STAR_custom_formatters_warning_reported_STAR_){
return null;
} else {
devtools.util._STAR_custom_formatters_warning_reported_STAR_ = true;

return devtools.context.get_console.call(null).warn(devtools.util.custom_formatters_not_active_msg.call(null));
}
} else {
return null;
}
});
devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_ = (function devtools$util$uninstall_detector_and_check_custom_formatters_active_BANG_(detector){
devtools.util.uninstall_detector_BANG_.call(null,detector);

return devtools.util.check_custom_formatters_active_BANG_.call(null);
});
devtools.util.make_detection_printer = (function devtools$util$make_detection_printer(){
var f = (function (){
return null;
});
var G__39797_39798 = f;
var target__38948__auto___39799 = G__39797_39798;
if(cljs.core.truth_(target__38948__auto___39799)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39797_39798)].join(''),"\n","target__38948__auto__"].join('')));
}

(target__38948__auto___39799["toString"] = ((function (G__39797_39798,target__38948__auto___39799,f){
return (function (){
devtools.util._STAR_console_open_STAR_ = true;

setTimeout(devtools.util.check_custom_formatters_active_BANG_,(0));

return "";
});})(G__39797_39798,target__38948__auto___39799,f))
);


return f;
});
devtools.util.wrap_with_custom_formatter_detection_BANG_ = (function devtools$util$wrap_with_custom_formatter_detection_BANG_(f){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-detect-custom-formatters","dont-detect-custom-formatters",-29005804)))){
var detector = devtools.util.make_detector.call(null);
devtools.util.install_detector_BANG_.call(null,detector);

f.call(null,"%c%s","color:transparent",devtools.util.make_detection_printer.call(null));

return setTimeout(cljs.core.partial.call(null,devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_,detector),(0));
} else {
return f.call(null);
}
});
devtools.util.feature_for_display = (function devtools$util$feature_for_display(installed_features,feature){
var color = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),installed_features))?"color:#0000ff":"color:#ccc");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)], null)], null);
});
devtools.util.feature_list_display = (function devtools$util$feature_list_display(installed_features,feature_groups){
var labels = cljs.core.map.call(null,cljs.core.partial.call(null,devtools.util.feature_for_display,installed_features),new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups));
var _STAR_ = ((function (labels){
return (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,accum))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,val))].join(''),cljs.core.concat.call(null,cljs.core.second.call(null,accum),cljs.core.second.call(null,val))], null);
});})(labels))
;
return cljs.core.reduce.call(null,_STAR_,cljs.core.first.call(null,labels),cljs.core.rest.call(null,labels));
});
devtools.util.display_banner_BANG_ = (function devtools$util$display_banner_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39807 = arguments.length;
var i__4731__auto___39808 = (0);
while(true){
if((i__4731__auto___39808 < len__4730__auto___39807)){
args__4736__auto__.push((arguments[i__4731__auto___39808]));

var G__39809 = (i__4731__auto___39808 + (1));
i__4731__auto___39808 = G__39809;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (installed_features,feature_groups,fmt,params){
var vec__39804 = devtools.util.feature_list_display.call(null,installed_features,feature_groups);
var fmt_str = cljs.core.nth.call(null,vec__39804,(0),null);
var fmt_params = cljs.core.nth.call(null,vec__39804,(1),null);
return devtools.util.wrap_with_custom_formatter_detection_BANG_.call(null,((function (vec__39804,fmt_str,fmt_params){
return (function() { 
var G__39810__delegate = function (add_fmt,add_args){
var items = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(add_fmt)].join('')], null),params,fmt_params,add_args);
var console = devtools.context.get_console.call(null);
return console.info.apply(console,cljs.core.into_array.call(null,items));
};
var G__39810 = function (add_fmt,var_args){
var add_args = null;
if (arguments.length > 1) {
var G__39811__i = 0, G__39811__a = new Array(arguments.length -  1);
while (G__39811__i < G__39811__a.length) {G__39811__a[G__39811__i] = arguments[G__39811__i + 1]; ++G__39811__i;}
  add_args = new cljs.core.IndexedSeq(G__39811__a,0,null);
} 
return G__39810__delegate.call(this,add_fmt,add_args);};
G__39810.cljs$lang$maxFixedArity = 1;
G__39810.cljs$lang$applyTo = (function (arglist__39812){
var add_fmt = cljs.core.first(arglist__39812);
var add_args = cljs.core.rest(arglist__39812);
return G__39810__delegate(add_fmt,add_args);
});
G__39810.cljs$core$IFn$_invoke$arity$variadic = G__39810__delegate;
return G__39810;
})()
;})(vec__39804,fmt_str,fmt_params))
);
});

devtools.util.display_banner_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
devtools.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq39800){
var G__39801 = cljs.core.first.call(null,seq39800);
var seq39800__$1 = cljs.core.next.call(null,seq39800);
var G__39802 = cljs.core.first.call(null,seq39800__$1);
var seq39800__$2 = cljs.core.next.call(null,seq39800__$1);
var G__39803 = cljs.core.first.call(null,seq39800__$2);
var seq39800__$3 = cljs.core.next.call(null,seq39800__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39801,G__39802,G__39803,seq39800__$3);
});

devtools.util.display_banner_if_needed_BANG_ = (function devtools$util$display_banner_if_needed_BANG_(features_to_install,feature_groups){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-banner","dont-display-banner",-1175550370)))){
var banner = "Installing %c%s%c and enabling features";
return devtools.util.display_banner_BANG_.call(null,features_to_install,feature_groups,banner,devtools.util.lib_info_style,devtools.util.get_lib_info.call(null),devtools.util.reset_style);
} else {
return devtools.util._STAR_custom_formatters_active_STAR_ = true;
}
});
devtools.util.report_unknown_features_BANG_ = (function devtools$util$report_unknown_features_BANG_(features,known_features){
var lib_info = devtools.util.get_lib_info.call(null);
var seq__39813 = cljs.core.seq.call(null,features);
var chunk__39814 = null;
var count__39815 = (0);
var i__39816 = (0);
while(true){
if((i__39816 < count__39815)){
var feature = cljs.core._nth.call(null,chunk__39814,i__39816);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features))){
devtools.context.get_console.call(null).warn(devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}


var G__39817 = seq__39813;
var G__39818 = chunk__39814;
var G__39819 = count__39815;
var G__39820 = (i__39816 + (1));
seq__39813 = G__39817;
chunk__39814 = G__39818;
count__39815 = G__39819;
i__39816 = G__39820;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__39813);
if(temp__5720__auto__){
var seq__39813__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39813__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39813__$1);
var G__39821 = cljs.core.chunk_rest.call(null,seq__39813__$1);
var G__39822 = c__4550__auto__;
var G__39823 = cljs.core.count.call(null,c__4550__auto__);
var G__39824 = (0);
seq__39813 = G__39821;
chunk__39814 = G__39822;
count__39815 = G__39823;
i__39816 = G__39824;
continue;
} else {
var feature = cljs.core.first.call(null,seq__39813__$1);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features))){
devtools.context.get_console.call(null).warn(devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}


var G__39825 = cljs.core.next.call(null,seq__39813__$1);
var G__39826 = null;
var G__39827 = (0);
var G__39828 = (0);
seq__39813 = G__39825;
chunk__39814 = G__39826;
count__39815 = G__39827;
i__39816 = G__39828;
continue;
}
} else {
return null;
}
}
break;
}
});
devtools.util.is_known_feature_QMARK_ = (function devtools$util$is_known_feature_QMARK_(known_features,feature){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features));
});
devtools.util.convert_legacy_feature = (function devtools$util$convert_legacy_feature(feature){
var G__39829 = feature;
var G__39829__$1 = (((G__39829 instanceof cljs.core.Keyword))?G__39829.fqn:null);
switch (G__39829__$1) {
case "custom-formatters":
return new cljs.core.Keyword(null,"formatters","formatters",-1875637118);

break;
case "sanity-hints":
return new cljs.core.Keyword(null,"hints","hints",-991113151);

break;
default:
return feature;

}
});
devtools.util.convert_legacy_features = (function devtools$util$convert_legacy_features(features){
return cljs.core.map.call(null,devtools.util.convert_legacy_feature,features);
});
devtools.util.sanititze_features_BANG_ = (function devtools$util$sanititze_features_BANG_(features,feature_groups){
var known_features = new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups);
var features__$1 = devtools.util.convert_legacy_features.call(null,features);
devtools.util.report_unknown_features_BANG_.call(null,features__$1,known_features);

return cljs.core.filter.call(null,cljs.core.partial.call(null,devtools.util.is_known_feature_QMARK_,known_features),features__$1);
});
devtools.util.resolve_features_BANG_ = (function devtools$util$resolve_features_BANG_(features_desc,feature_groups){
var features = (cljs.core.truth_((function (){var and__4120__auto__ = (features_desc instanceof cljs.core.Keyword);
if(and__4120__auto__){
return features_desc.call(null,feature_groups);
} else {
return and__4120__auto__;
}
})())?features_desc.call(null,feature_groups):(((features_desc == null))?new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(feature_groups):((cljs.core.seqable_QMARK_.call(null,features_desc))?features_desc:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features_desc], null)
)));
return devtools.util.sanititze_features_BANG_.call(null,features,feature_groups);
});
devtools.util.under_advanced_build_QMARK_ = (function devtools$util$under_advanced_build_QMARK_(){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"disable-advanced-mode-check","disable-advanced-mode-check",-968346539)))){
return ((function (){var temp__5718__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5718__auto__)){
var o39831 = temp__5718__auto__;
return (o39831["version"]);
} else {
return null;
}
})() == null);
} else {
return null;
}
});
devtools.util.display_advanced_build_warning_if_needed_BANG_ = (function devtools$util$display_advanced_build_warning_if_needed_BANG_(){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-advanced-build-warning","dont-display-advanced-build-warning",-91321563)))){
var banner = ["%cNOT%c installing %c%s%c under advanced build. See ",devtools.util.advanced_build_explanation_url,"."].join('');
return devtools.context.get_console.call(null).warn(banner,"font-weight:bold",devtools.util.reset_style,devtools.util.lib_info_style,devtools.util.get_lib_info.call(null),devtools.util.reset_style);
} else {
return null;
}
});
devtools.util.install_feature_BANG_ = (function devtools$util$install_feature_BANG_(feature,features_to_install,available_fn,install_fn){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),features_to_install))){
if(cljs.core.truth_((function (){var or__4131__auto__ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"bypass-availability-checks","bypass-availability-checks",1934691680));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return available_fn.call(null,feature);
}
})())){
return install_fn.call(null);
} else {
return devtools.context.get_console.call(null).warn(devtools.util.feature_not_available_msg.call(null,feature));
}
} else {
return null;
}
});

//# sourceMappingURL=util.js.map?rel=1610329054958
