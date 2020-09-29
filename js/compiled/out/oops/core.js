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

var G__36246 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__36246)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__36246)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__36246)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36246)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__36247 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__36247)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__36247)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__36247)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36247)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36255 = arguments.length;
var i__4731__auto___36256 = (0);
while(true){
if((i__4731__auto___36256 < len__4730__auto___36255)){
args__4736__auto__.push((arguments[i__4731__auto___36256]));

var G__36257 = (i__4731__auto___36256 + (1));
i__4731__auto___36256 = G__36257;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__36250){
var vec__36251 = p__36250;
var info = cljs.core.nth.call(null,vec__36251,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__36254_36258 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__36254_36258)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__36254_36258)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__36254_36258)){
} else {
if(cljs.core._EQ_.call(null,null,G__36254_36258)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36254_36258)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq36248){
var G__36249 = cljs.core.first.call(null,seq36248);
var seq36248__$1 = cljs.core.next.call(null,seq36248);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36249,seq36248__$1);
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
var descriptor_36259 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_36259);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_36260 = temp__5722__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_36260,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
var child_factory_36262 = oops.config.get_child_factory.call(null);
var child_factory_36262__$1 = (function (){var G__36263 = child_factory_36262;
var G__36263__$1 = (((G__36263 instanceof cljs.core.Keyword))?G__36263.fqn:null);
switch (G__36263__$1) {
case "js-obj":
return ((function (G__36263,G__36263__$1,child_factory_36262){
return (function (){
return ({});
});
;})(G__36263,G__36263__$1,child_factory_36262))

break;
case "js-array":
return ((function (G__36263,G__36263__$1,child_factory_36262){
return (function (){
return [];
});
;})(G__36263,G__36263__$1,child_factory_36262))

break;
default:
return child_factory_36262;

}
})();

var child_obj_36261 = child_factory_36262__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_36261);
} else {
}

return child_obj_36261;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_36267 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_36267);

return selector_path_36267;
} else {
var selector_path_36268 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_36268);

return selector_path_36268;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_36269 = temp__5724__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_36269);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_36278 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_36278,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_36271 = (function (){var path_36270 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_36270,(0));

return path_36270;
})();
var len_36272 = path_36271.length;
var i_36273 = (0);
var obj_36274 = obj;
while(true){
if((i_36273 < len_36272)){
var mode_36275 = (path_36271[i_36273]);
var key_36276 = (path_36271[(i_36273 + (1))]);
var next_obj_36277 = oops.core.get_key_dynamically.call(null,obj_36274,key_36276,mode_36275);
var G__36279 = mode_36275;
switch (G__36279) {
case (0):
var G__36281 = (i_36273 + (2));
var G__36282 = next_obj_36277;
i_36273 = G__36281;
obj_36274 = G__36282;
continue;

break;
case (1):
if((!((next_obj_36277 == null)))){
var G__36283 = (i_36273 + (2));
var G__36284 = next_obj_36277;
i_36273 = G__36283;
obj_36274 = G__36284;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_36277 == null)))){
var G__36285 = (i_36273 + (2));
var G__36286 = next_obj_36277;
i_36273 = G__36285;
obj_36274 = G__36286;
continue;
} else {
var G__36287 = (i_36273 + (2));
var G__36288 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36274,key_36276);
i_36273 = G__36287;
obj_36274 = G__36288;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36279)].join('')));

}
} else {
return obj_36274;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_36314 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_36314,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_36290 = (function (){var path_36289 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_36289,(0));

return path_36289;
})();
var len_36291 = path_36290.length;
if((len_36291 < (4))){
return [obj,(function (){var path_36293 = path_36290;
var len_36294 = path_36293.length;
var i_36295 = (0);
var obj_36296 = obj;
while(true){
if((i_36295 < len_36294)){
var mode_36297 = (path_36293[i_36295]);
var key_36298 = (path_36293[(i_36295 + (1))]);
var next_obj_36299 = oops.core.get_key_dynamically.call(null,obj_36296,key_36298,mode_36297);
var G__36315 = mode_36297;
switch (G__36315) {
case (0):
var G__36319 = (i_36295 + (2));
var G__36320 = next_obj_36299;
i_36295 = G__36319;
obj_36296 = G__36320;
continue;

break;
case (1):
if((!((next_obj_36299 == null)))){
var G__36321 = (i_36295 + (2));
var G__36322 = next_obj_36299;
i_36295 = G__36321;
obj_36296 = G__36322;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_36299 == null)))){
var G__36323 = (i_36295 + (2));
var G__36324 = next_obj_36299;
i_36295 = G__36323;
obj_36296 = G__36324;
continue;
} else {
var G__36325 = (i_36295 + (2));
var G__36326 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36296,key_36298);
i_36295 = G__36325;
obj_36296 = G__36326;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36315)].join('')));

}
} else {
return obj_36296;
}
break;
}
})()];
} else {
var target_obj_36292 = (function (){var path_36300 = path_36290.slice((0),(len_36291 - (2)));
var len_36301 = path_36300.length;
var i_36302 = (0);
var obj_36303 = obj;
while(true){
if((i_36302 < len_36301)){
var mode_36304 = (path_36300[i_36302]);
var key_36305 = (path_36300[(i_36302 + (1))]);
var next_obj_36306 = oops.core.get_key_dynamically.call(null,obj_36303,key_36305,mode_36304);
var G__36316 = mode_36304;
switch (G__36316) {
case (0):
var G__36328 = (i_36302 + (2));
var G__36329 = next_obj_36306;
i_36302 = G__36328;
obj_36303 = G__36329;
continue;

break;
case (1):
if((!((next_obj_36306 == null)))){
var G__36330 = (i_36302 + (2));
var G__36331 = next_obj_36306;
i_36302 = G__36330;
obj_36303 = G__36331;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_36306 == null)))){
var G__36332 = (i_36302 + (2));
var G__36333 = next_obj_36306;
i_36302 = G__36332;
obj_36303 = G__36333;
continue;
} else {
var G__36334 = (i_36302 + (2));
var G__36335 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36303,key_36305);
i_36302 = G__36334;
obj_36303 = G__36335;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36316)].join('')));

}
} else {
return obj_36303;
}
break;
}
})();
return [target_obj_36292,(function (){var path_36307 = [(path_36290[(len_36291 - (2))]),(path_36290[(len_36291 - (1))])];
var len_36308 = path_36307.length;
var i_36309 = (0);
var obj_36310 = target_obj_36292;
while(true){
if((i_36309 < len_36308)){
var mode_36311 = (path_36307[i_36309]);
var key_36312 = (path_36307[(i_36309 + (1))]);
var next_obj_36313 = oops.core.get_key_dynamically.call(null,obj_36310,key_36312,mode_36311);
var G__36317 = mode_36311;
switch (G__36317) {
case (0):
var G__36337 = (i_36309 + (2));
var G__36338 = next_obj_36313;
i_36309 = G__36337;
obj_36310 = G__36338;
continue;

break;
case (1):
if((!((next_obj_36313 == null)))){
var G__36339 = (i_36309 + (2));
var G__36340 = next_obj_36313;
i_36309 = G__36339;
obj_36310 = G__36340;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_36313 == null)))){
var G__36341 = (i_36309 + (2));
var G__36342 = next_obj_36313;
i_36309 = G__36341;
obj_36310 = G__36342;
continue;
} else {
var G__36343 = (i_36309 + (2));
var G__36344 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36310,key_36312);
i_36309 = G__36343;
obj_36310 = G__36344;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36317)].join('')));

}
} else {
return obj_36310;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_36359 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_36359,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_36346 = (function (){var path_36345 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_36345,(1));

return path_36345;
})();
var len_36349 = path_36346.length;
var parent_obj_path_36350 = path_36346.slice((0),(len_36349 - (2)));
var key_36347 = (path_36346[(len_36349 - (1))]);
var mode_36348 = (path_36346[(len_36349 - (2))]);
var parent_obj_36351 = (function (){var path_36352 = parent_obj_path_36350;
var len_36353 = path_36352.length;
var i_36354 = (0);
var obj_36355 = obj;
while(true){
if((i_36354 < len_36353)){
var mode_36356 = (path_36352[i_36354]);
var key_36357 = (path_36352[(i_36354 + (1))]);
var next_obj_36358 = oops.core.get_key_dynamically.call(null,obj_36355,key_36357,mode_36356);
var G__36360 = mode_36356;
switch (G__36360) {
case (0):
var G__36362 = (i_36354 + (2));
var G__36363 = next_obj_36358;
i_36354 = G__36362;
obj_36355 = G__36363;
continue;

break;
case (1):
if((!((next_obj_36358 == null)))){
var G__36364 = (i_36354 + (2));
var G__36365 = next_obj_36358;
i_36354 = G__36364;
obj_36355 = G__36365;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_36358 == null)))){
var G__36366 = (i_36354 + (2));
var G__36367 = next_obj_36358;
i_36354 = G__36366;
obj_36355 = G__36367;
continue;
} else {
var G__36368 = (i_36354 + (2));
var G__36369 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36355,key_36357);
i_36354 = G__36368;
obj_36355 = G__36369;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36360)].join('')));

}
} else {
return obj_36355;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_36351,key_36347,val,mode_36348);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1601406065452
