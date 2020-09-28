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

var G__24276 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__24276)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__24276)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__24276)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24276)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__24277 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__24277)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__24277)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__24277)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24277)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24285 = arguments.length;
var i__4731__auto___24286 = (0);
while(true){
if((i__4731__auto___24286 < len__4730__auto___24285)){
args__4736__auto__.push((arguments[i__4731__auto___24286]));

var G__24287 = (i__4731__auto___24286 + (1));
i__4731__auto___24286 = G__24287;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__24280){
var vec__24281 = p__24280;
var info = cljs.core.nth.call(null,vec__24281,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__24284_24288 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__24284_24288)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__24284_24288)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__24284_24288)){
} else {
if(cljs.core._EQ_.call(null,null,G__24284_24288)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24284_24288)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq24278){
var G__24279 = cljs.core.first.call(null,seq24278);
var seq24278__$1 = cljs.core.next.call(null,seq24278);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24279,seq24278__$1);
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
var descriptor_24289 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_24289);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_24290 = temp__5722__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_24290,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
var child_factory_24292 = oops.config.get_child_factory.call(null);
var child_factory_24292__$1 = (function (){var G__24293 = child_factory_24292;
var G__24293__$1 = (((G__24293 instanceof cljs.core.Keyword))?G__24293.fqn:null);
switch (G__24293__$1) {
case "js-obj":
return ((function (G__24293,G__24293__$1,child_factory_24292){
return (function (){
return ({});
});
;})(G__24293,G__24293__$1,child_factory_24292))

break;
case "js-array":
return ((function (G__24293,G__24293__$1,child_factory_24292){
return (function (){
return [];
});
;})(G__24293,G__24293__$1,child_factory_24292))

break;
default:
return child_factory_24292;

}
})();

var child_obj_24291 = child_factory_24292__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_24291);
} else {
}

return child_obj_24291;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_24297 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_24297);

return selector_path_24297;
} else {
var selector_path_24298 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_24298);

return selector_path_24298;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_24299 = temp__5724__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_24299);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_24308 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_24308,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_24301 = (function (){var path_24300 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_24300,(0));

return path_24300;
})();
var len_24302 = path_24301.length;
var i_24303 = (0);
var obj_24304 = obj;
while(true){
if((i_24303 < len_24302)){
var mode_24305 = (path_24301[i_24303]);
var key_24306 = (path_24301[(i_24303 + (1))]);
var next_obj_24307 = oops.core.get_key_dynamically.call(null,obj_24304,key_24306,mode_24305);
var G__24309 = mode_24305;
switch (G__24309) {
case (0):
var G__24311 = (i_24303 + (2));
var G__24312 = next_obj_24307;
i_24303 = G__24311;
obj_24304 = G__24312;
continue;

break;
case (1):
if((!((next_obj_24307 == null)))){
var G__24313 = (i_24303 + (2));
var G__24314 = next_obj_24307;
i_24303 = G__24313;
obj_24304 = G__24314;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24307 == null)))){
var G__24315 = (i_24303 + (2));
var G__24316 = next_obj_24307;
i_24303 = G__24315;
obj_24304 = G__24316;
continue;
} else {
var G__24317 = (i_24303 + (2));
var G__24318 = oops.core.punch_key_dynamically_BANG_.call(null,obj_24304,key_24306);
i_24303 = G__24317;
obj_24304 = G__24318;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24309)].join('')));

}
} else {
return obj_24304;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_24344 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_24344,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_24320 = (function (){var path_24319 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_24319,(0));

return path_24319;
})();
var len_24321 = path_24320.length;
if((len_24321 < (4))){
return [obj,(function (){var path_24323 = path_24320;
var len_24324 = path_24323.length;
var i_24325 = (0);
var obj_24326 = obj;
while(true){
if((i_24325 < len_24324)){
var mode_24327 = (path_24323[i_24325]);
var key_24328 = (path_24323[(i_24325 + (1))]);
var next_obj_24329 = oops.core.get_key_dynamically.call(null,obj_24326,key_24328,mode_24327);
var G__24345 = mode_24327;
switch (G__24345) {
case (0):
var G__24349 = (i_24325 + (2));
var G__24350 = next_obj_24329;
i_24325 = G__24349;
obj_24326 = G__24350;
continue;

break;
case (1):
if((!((next_obj_24329 == null)))){
var G__24351 = (i_24325 + (2));
var G__24352 = next_obj_24329;
i_24325 = G__24351;
obj_24326 = G__24352;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24329 == null)))){
var G__24353 = (i_24325 + (2));
var G__24354 = next_obj_24329;
i_24325 = G__24353;
obj_24326 = G__24354;
continue;
} else {
var G__24355 = (i_24325 + (2));
var G__24356 = oops.core.punch_key_dynamically_BANG_.call(null,obj_24326,key_24328);
i_24325 = G__24355;
obj_24326 = G__24356;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24345)].join('')));

}
} else {
return obj_24326;
}
break;
}
})()];
} else {
var target_obj_24322 = (function (){var path_24330 = path_24320.slice((0),(len_24321 - (2)));
var len_24331 = path_24330.length;
var i_24332 = (0);
var obj_24333 = obj;
while(true){
if((i_24332 < len_24331)){
var mode_24334 = (path_24330[i_24332]);
var key_24335 = (path_24330[(i_24332 + (1))]);
var next_obj_24336 = oops.core.get_key_dynamically.call(null,obj_24333,key_24335,mode_24334);
var G__24346 = mode_24334;
switch (G__24346) {
case (0):
var G__24358 = (i_24332 + (2));
var G__24359 = next_obj_24336;
i_24332 = G__24358;
obj_24333 = G__24359;
continue;

break;
case (1):
if((!((next_obj_24336 == null)))){
var G__24360 = (i_24332 + (2));
var G__24361 = next_obj_24336;
i_24332 = G__24360;
obj_24333 = G__24361;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24336 == null)))){
var G__24362 = (i_24332 + (2));
var G__24363 = next_obj_24336;
i_24332 = G__24362;
obj_24333 = G__24363;
continue;
} else {
var G__24364 = (i_24332 + (2));
var G__24365 = oops.core.punch_key_dynamically_BANG_.call(null,obj_24333,key_24335);
i_24332 = G__24364;
obj_24333 = G__24365;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24346)].join('')));

}
} else {
return obj_24333;
}
break;
}
})();
return [target_obj_24322,(function (){var path_24337 = [(path_24320[(len_24321 - (2))]),(path_24320[(len_24321 - (1))])];
var len_24338 = path_24337.length;
var i_24339 = (0);
var obj_24340 = target_obj_24322;
while(true){
if((i_24339 < len_24338)){
var mode_24341 = (path_24337[i_24339]);
var key_24342 = (path_24337[(i_24339 + (1))]);
var next_obj_24343 = oops.core.get_key_dynamically.call(null,obj_24340,key_24342,mode_24341);
var G__24347 = mode_24341;
switch (G__24347) {
case (0):
var G__24367 = (i_24339 + (2));
var G__24368 = next_obj_24343;
i_24339 = G__24367;
obj_24340 = G__24368;
continue;

break;
case (1):
if((!((next_obj_24343 == null)))){
var G__24369 = (i_24339 + (2));
var G__24370 = next_obj_24343;
i_24339 = G__24369;
obj_24340 = G__24370;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24343 == null)))){
var G__24371 = (i_24339 + (2));
var G__24372 = next_obj_24343;
i_24339 = G__24371;
obj_24340 = G__24372;
continue;
} else {
var G__24373 = (i_24339 + (2));
var G__24374 = oops.core.punch_key_dynamically_BANG_.call(null,obj_24340,key_24342);
i_24339 = G__24373;
obj_24340 = G__24374;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24347)].join('')));

}
} else {
return obj_24340;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_24389 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_24389,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_24376 = (function (){var path_24375 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_24375,(1));

return path_24375;
})();
var len_24379 = path_24376.length;
var parent_obj_path_24380 = path_24376.slice((0),(len_24379 - (2)));
var key_24377 = (path_24376[(len_24379 - (1))]);
var mode_24378 = (path_24376[(len_24379 - (2))]);
var parent_obj_24381 = (function (){var path_24382 = parent_obj_path_24380;
var len_24383 = path_24382.length;
var i_24384 = (0);
var obj_24385 = obj;
while(true){
if((i_24384 < len_24383)){
var mode_24386 = (path_24382[i_24384]);
var key_24387 = (path_24382[(i_24384 + (1))]);
var next_obj_24388 = oops.core.get_key_dynamically.call(null,obj_24385,key_24387,mode_24386);
var G__24390 = mode_24386;
switch (G__24390) {
case (0):
var G__24392 = (i_24384 + (2));
var G__24393 = next_obj_24388;
i_24384 = G__24392;
obj_24385 = G__24393;
continue;

break;
case (1):
if((!((next_obj_24388 == null)))){
var G__24394 = (i_24384 + (2));
var G__24395 = next_obj_24388;
i_24384 = G__24394;
obj_24385 = G__24395;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24388 == null)))){
var G__24396 = (i_24384 + (2));
var G__24397 = next_obj_24388;
i_24384 = G__24396;
obj_24385 = G__24397;
continue;
} else {
var G__24398 = (i_24384 + (2));
var G__24399 = oops.core.punch_key_dynamically_BANG_.call(null,obj_24385,key_24387);
i_24384 = G__24398;
obj_24385 = G__24399;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24390)].join('')));

}
} else {
return obj_24385;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_24381,key_24377,val,mode_24378);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1601267796526
