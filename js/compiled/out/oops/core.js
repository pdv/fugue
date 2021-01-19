// Compiled by ClojureScript 1.10.520 {}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_.call(null)){
return null;
} else {
oops.state.mark_error_reported_BANG_.call(null);

var G__5884 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__5884)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__5884)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__5884)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5884)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__5885 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__5885)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__5885)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__5885)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5885)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5893 = arguments.length;
var i__4731__auto___5894 = (0);
while(true){
if((i__4731__auto___5894 < len__4730__auto___5893)){
args__4736__auto__.push((arguments[i__4731__auto___5894]));

var G__5895 = (i__4731__auto___5894 + (1));
i__4731__auto___5894 = G__5895;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__5888){
var vec__5889 = p__5888;
var info = cljs.core.nth.call(null,vec__5889,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__5892_5896 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__5892_5896)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__5892_5896)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__5892_5896)){
} else {
if(cljs.core._EQ_.call(null,null,G__5892_5896)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5892_5896)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq5886){
var G__5887 = cljs.core.first.call(null,seq5886);
var seq5886__$1 = cljs.core.next.call(null,seq5886);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5887,seq5886__$1);
});

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.call(null,mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((((cljs.core._EQ_.call(null,mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.not.call(null,goog.isObject(obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_.call(null,key);

oops.state.set_last_access_modifier_BANG_.call(null,mode);
} else {
}

var and__4120__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.call(null,mode,(0))) && (cljs.core.not.call(null,goog.object.containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):true):true);
if(cljs.core.truth_(and__4120__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5722__auto__ = oops.helpers.get_property_descriptor.call(null,obj,key);
if((temp__5722__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
return true;

}
}
} else {
var descriptor_5897 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_5897);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_5898 = temp__5722__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_5898,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
}
}
} else {
return true;
}
} else {
return and__4120__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.call(null,mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_5900 = oops.config.get_child_factory.call(null);
var child_factory_5900__$1 = (function (){var G__5901 = child_factory_5900;
var G__5901__$1 = (((G__5901 instanceof cljs.core.Keyword))?G__5901.fqn:null);
switch (G__5901__$1) {
case "js-obj":
return ((function (G__5901,G__5901__$1,child_factory_5900){
return (function (){
return ({});
});
;})(G__5901,G__5901__$1,child_factory_5900))

break;
case "js-array":
return ((function (G__5901,G__5901__$1,child_factory_5900){
return (function (){
return [];
});
;})(G__5901,G__5901__$1,child_factory_5900))

break;
default:
return child_factory_5900;

}
})();

var child_obj_5899 = child_factory_5900__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_5899);
} else {
}

return child_obj_5899;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_5905 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_5905);

return selector_path_5905;
} else {
var selector_path_5906 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_5906);

return selector_path_5906;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_5907 = temp__5724__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_5907);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_5916 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_5916,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_5909 = (function (){var path_5908 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_5908,(0));

return path_5908;
})();
var len_5910 = path_5909.length;
var i_5911 = (0);
var obj_5912 = obj;
while(true){
if((i_5911 < len_5910)){
var mode_5913 = (path_5909[i_5911]);
var key_5914 = (path_5909[(i_5911 + (1))]);
var next_obj_5915 = oops.core.get_key_dynamically.call(null,obj_5912,key_5914,mode_5913);
var G__5917 = mode_5913;
switch (G__5917) {
case (0):
var G__5919 = (i_5911 + (2));
var G__5920 = next_obj_5915;
i_5911 = G__5919;
obj_5912 = G__5920;
continue;

break;
case (1):
if((!((next_obj_5915 == null)))){
var G__5921 = (i_5911 + (2));
var G__5922 = next_obj_5915;
i_5911 = G__5921;
obj_5912 = G__5922;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_5915 == null)))){
var G__5923 = (i_5911 + (2));
var G__5924 = next_obj_5915;
i_5911 = G__5923;
obj_5912 = G__5924;
continue;
} else {
var G__5925 = (i_5911 + (2));
var G__5926 = oops.core.punch_key_dynamically_BANG_.call(null,obj_5912,key_5914);
i_5911 = G__5925;
obj_5912 = G__5926;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5917)].join('')));

}
} else {
return obj_5912;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_5952 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_5952,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_5928 = (function (){var path_5927 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_5927,(0));

return path_5927;
})();
var len_5929 = path_5928.length;
if((len_5929 < (4))){
return [obj,(function (){var path_5931 = path_5928;
var len_5932 = path_5931.length;
var i_5933 = (0);
var obj_5934 = obj;
while(true){
if((i_5933 < len_5932)){
var mode_5935 = (path_5931[i_5933]);
var key_5936 = (path_5931[(i_5933 + (1))]);
var next_obj_5937 = oops.core.get_key_dynamically.call(null,obj_5934,key_5936,mode_5935);
var G__5953 = mode_5935;
switch (G__5953) {
case (0):
var G__5957 = (i_5933 + (2));
var G__5958 = next_obj_5937;
i_5933 = G__5957;
obj_5934 = G__5958;
continue;

break;
case (1):
if((!((next_obj_5937 == null)))){
var G__5959 = (i_5933 + (2));
var G__5960 = next_obj_5937;
i_5933 = G__5959;
obj_5934 = G__5960;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_5937 == null)))){
var G__5961 = (i_5933 + (2));
var G__5962 = next_obj_5937;
i_5933 = G__5961;
obj_5934 = G__5962;
continue;
} else {
var G__5963 = (i_5933 + (2));
var G__5964 = oops.core.punch_key_dynamically_BANG_.call(null,obj_5934,key_5936);
i_5933 = G__5963;
obj_5934 = G__5964;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5953)].join('')));

}
} else {
return obj_5934;
}
break;
}
})()];
} else {
var target_obj_5930 = (function (){var path_5938 = path_5928.slice((0),(len_5929 - (2)));
var len_5939 = path_5938.length;
var i_5940 = (0);
var obj_5941 = obj;
while(true){
if((i_5940 < len_5939)){
var mode_5942 = (path_5938[i_5940]);
var key_5943 = (path_5938[(i_5940 + (1))]);
var next_obj_5944 = oops.core.get_key_dynamically.call(null,obj_5941,key_5943,mode_5942);
var G__5954 = mode_5942;
switch (G__5954) {
case (0):
var G__5966 = (i_5940 + (2));
var G__5967 = next_obj_5944;
i_5940 = G__5966;
obj_5941 = G__5967;
continue;

break;
case (1):
if((!((next_obj_5944 == null)))){
var G__5968 = (i_5940 + (2));
var G__5969 = next_obj_5944;
i_5940 = G__5968;
obj_5941 = G__5969;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_5944 == null)))){
var G__5970 = (i_5940 + (2));
var G__5971 = next_obj_5944;
i_5940 = G__5970;
obj_5941 = G__5971;
continue;
} else {
var G__5972 = (i_5940 + (2));
var G__5973 = oops.core.punch_key_dynamically_BANG_.call(null,obj_5941,key_5943);
i_5940 = G__5972;
obj_5941 = G__5973;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5954)].join('')));

}
} else {
return obj_5941;
}
break;
}
})();
return [target_obj_5930,(function (){var path_5945 = [(path_5928[(len_5929 - (2))]),(path_5928[(len_5929 - (1))])];
var len_5946 = path_5945.length;
var i_5947 = (0);
var obj_5948 = target_obj_5930;
while(true){
if((i_5947 < len_5946)){
var mode_5949 = (path_5945[i_5947]);
var key_5950 = (path_5945[(i_5947 + (1))]);
var next_obj_5951 = oops.core.get_key_dynamically.call(null,obj_5948,key_5950,mode_5949);
var G__5955 = mode_5949;
switch (G__5955) {
case (0):
var G__5975 = (i_5947 + (2));
var G__5976 = next_obj_5951;
i_5947 = G__5975;
obj_5948 = G__5976;
continue;

break;
case (1):
if((!((next_obj_5951 == null)))){
var G__5977 = (i_5947 + (2));
var G__5978 = next_obj_5951;
i_5947 = G__5977;
obj_5948 = G__5978;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_5951 == null)))){
var G__5979 = (i_5947 + (2));
var G__5980 = next_obj_5951;
i_5947 = G__5979;
obj_5948 = G__5980;
continue;
} else {
var G__5981 = (i_5947 + (2));
var G__5982 = oops.core.punch_key_dynamically_BANG_.call(null,obj_5948,key_5950);
i_5947 = G__5981;
obj_5948 = G__5982;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5955)].join('')));

}
} else {
return obj_5948;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_5997 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_5997,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_5984 = (function (){var path_5983 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_5983,(1));

return path_5983;
})();
var len_5987 = path_5984.length;
var parent_obj_path_5988 = path_5984.slice((0),(len_5987 - (2)));
var key_5985 = (path_5984[(len_5987 - (1))]);
var mode_5986 = (path_5984[(len_5987 - (2))]);
var parent_obj_5989 = (function (){var path_5990 = parent_obj_path_5988;
var len_5991 = path_5990.length;
var i_5992 = (0);
var obj_5993 = obj;
while(true){
if((i_5992 < len_5991)){
var mode_5994 = (path_5990[i_5992]);
var key_5995 = (path_5990[(i_5992 + (1))]);
var next_obj_5996 = oops.core.get_key_dynamically.call(null,obj_5993,key_5995,mode_5994);
var G__5998 = mode_5994;
switch (G__5998) {
case (0):
var G__6000 = (i_5992 + (2));
var G__6001 = next_obj_5996;
i_5992 = G__6000;
obj_5993 = G__6001;
continue;

break;
case (1):
if((!((next_obj_5996 == null)))){
var G__6002 = (i_5992 + (2));
var G__6003 = next_obj_5996;
i_5992 = G__6002;
obj_5993 = G__6003;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_5996 == null)))){
var G__6004 = (i_5992 + (2));
var G__6005 = next_obj_5996;
i_5992 = G__6004;
obj_5993 = G__6005;
continue;
} else {
var G__6006 = (i_5992 + (2));
var G__6007 = oops.core.punch_key_dynamically_BANG_.call(null,obj_5993,key_5995);
i_5992 = G__6006;
obj_5993 = G__6007;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5998)].join('')));

}
} else {
return obj_5993;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_5989,key_5985,val,mode_5986);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1611075869619
