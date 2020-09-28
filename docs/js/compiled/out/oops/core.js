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

var G__29324 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__29324)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__29324)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__29324)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29324)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__29325 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__29325)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__29325)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__29325)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29325)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29333 = arguments.length;
var i__4731__auto___29334 = (0);
while(true){
if((i__4731__auto___29334 < len__4730__auto___29333)){
args__4736__auto__.push((arguments[i__4731__auto___29334]));

var G__29335 = (i__4731__auto___29334 + (1));
i__4731__auto___29334 = G__29335;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__29328){
var vec__29329 = p__29328;
var info = cljs.core.nth.call(null,vec__29329,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__29332_29336 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__29332_29336)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__29332_29336)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__29332_29336)){
} else {
if(cljs.core._EQ_.call(null,null,G__29332_29336)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29332_29336)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq29326){
var G__29327 = cljs.core.first.call(null,seq29326);
var seq29326__$1 = cljs.core.next.call(null,seq29326);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29327,seq29326__$1);
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
var descriptor_29337 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_29337);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_29338 = temp__5722__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_29338,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
var child_factory_29340 = oops.config.get_child_factory.call(null);
var child_factory_29340__$1 = (function (){var G__29341 = child_factory_29340;
var G__29341__$1 = (((G__29341 instanceof cljs.core.Keyword))?G__29341.fqn:null);
switch (G__29341__$1) {
case "js-obj":
return ((function (G__29341,G__29341__$1,child_factory_29340){
return (function (){
return ({});
});
;})(G__29341,G__29341__$1,child_factory_29340))

break;
case "js-array":
return ((function (G__29341,G__29341__$1,child_factory_29340){
return (function (){
return [];
});
;})(G__29341,G__29341__$1,child_factory_29340))

break;
default:
return child_factory_29340;

}
})();

var child_obj_29339 = child_factory_29340__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_29339);
} else {
}

return child_obj_29339;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_29345 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_29345);

return selector_path_29345;
} else {
var selector_path_29346 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_29346);

return selector_path_29346;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_29347 = temp__5724__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_29347);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_29356 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_29356,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_29349 = (function (){var path_29348 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_29348,(0));

return path_29348;
})();
var len_29350 = path_29349.length;
var i_29351 = (0);
var obj_29352 = obj;
while(true){
if((i_29351 < len_29350)){
var mode_29353 = (path_29349[i_29351]);
var key_29354 = (path_29349[(i_29351 + (1))]);
var next_obj_29355 = oops.core.get_key_dynamically.call(null,obj_29352,key_29354,mode_29353);
var G__29357 = mode_29353;
switch (G__29357) {
case (0):
var G__29359 = (i_29351 + (2));
var G__29360 = next_obj_29355;
i_29351 = G__29359;
obj_29352 = G__29360;
continue;

break;
case (1):
if((!((next_obj_29355 == null)))){
var G__29361 = (i_29351 + (2));
var G__29362 = next_obj_29355;
i_29351 = G__29361;
obj_29352 = G__29362;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29355 == null)))){
var G__29363 = (i_29351 + (2));
var G__29364 = next_obj_29355;
i_29351 = G__29363;
obj_29352 = G__29364;
continue;
} else {
var G__29365 = (i_29351 + (2));
var G__29366 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29352,key_29354);
i_29351 = G__29365;
obj_29352 = G__29366;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29357)].join('')));

}
} else {
return obj_29352;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_29392 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_29392,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_29368 = (function (){var path_29367 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_29367,(0));

return path_29367;
})();
var len_29369 = path_29368.length;
if((len_29369 < (4))){
return [obj,(function (){var path_29371 = path_29368;
var len_29372 = path_29371.length;
var i_29373 = (0);
var obj_29374 = obj;
while(true){
if((i_29373 < len_29372)){
var mode_29375 = (path_29371[i_29373]);
var key_29376 = (path_29371[(i_29373 + (1))]);
var next_obj_29377 = oops.core.get_key_dynamically.call(null,obj_29374,key_29376,mode_29375);
var G__29393 = mode_29375;
switch (G__29393) {
case (0):
var G__29397 = (i_29373 + (2));
var G__29398 = next_obj_29377;
i_29373 = G__29397;
obj_29374 = G__29398;
continue;

break;
case (1):
if((!((next_obj_29377 == null)))){
var G__29399 = (i_29373 + (2));
var G__29400 = next_obj_29377;
i_29373 = G__29399;
obj_29374 = G__29400;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29377 == null)))){
var G__29401 = (i_29373 + (2));
var G__29402 = next_obj_29377;
i_29373 = G__29401;
obj_29374 = G__29402;
continue;
} else {
var G__29403 = (i_29373 + (2));
var G__29404 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29374,key_29376);
i_29373 = G__29403;
obj_29374 = G__29404;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29393)].join('')));

}
} else {
return obj_29374;
}
break;
}
})()];
} else {
var target_obj_29370 = (function (){var path_29378 = path_29368.slice((0),(len_29369 - (2)));
var len_29379 = path_29378.length;
var i_29380 = (0);
var obj_29381 = obj;
while(true){
if((i_29380 < len_29379)){
var mode_29382 = (path_29378[i_29380]);
var key_29383 = (path_29378[(i_29380 + (1))]);
var next_obj_29384 = oops.core.get_key_dynamically.call(null,obj_29381,key_29383,mode_29382);
var G__29394 = mode_29382;
switch (G__29394) {
case (0):
var G__29406 = (i_29380 + (2));
var G__29407 = next_obj_29384;
i_29380 = G__29406;
obj_29381 = G__29407;
continue;

break;
case (1):
if((!((next_obj_29384 == null)))){
var G__29408 = (i_29380 + (2));
var G__29409 = next_obj_29384;
i_29380 = G__29408;
obj_29381 = G__29409;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29384 == null)))){
var G__29410 = (i_29380 + (2));
var G__29411 = next_obj_29384;
i_29380 = G__29410;
obj_29381 = G__29411;
continue;
} else {
var G__29412 = (i_29380 + (2));
var G__29413 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29381,key_29383);
i_29380 = G__29412;
obj_29381 = G__29413;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29394)].join('')));

}
} else {
return obj_29381;
}
break;
}
})();
return [target_obj_29370,(function (){var path_29385 = [(path_29368[(len_29369 - (2))]),(path_29368[(len_29369 - (1))])];
var len_29386 = path_29385.length;
var i_29387 = (0);
var obj_29388 = target_obj_29370;
while(true){
if((i_29387 < len_29386)){
var mode_29389 = (path_29385[i_29387]);
var key_29390 = (path_29385[(i_29387 + (1))]);
var next_obj_29391 = oops.core.get_key_dynamically.call(null,obj_29388,key_29390,mode_29389);
var G__29395 = mode_29389;
switch (G__29395) {
case (0):
var G__29415 = (i_29387 + (2));
var G__29416 = next_obj_29391;
i_29387 = G__29415;
obj_29388 = G__29416;
continue;

break;
case (1):
if((!((next_obj_29391 == null)))){
var G__29417 = (i_29387 + (2));
var G__29418 = next_obj_29391;
i_29387 = G__29417;
obj_29388 = G__29418;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29391 == null)))){
var G__29419 = (i_29387 + (2));
var G__29420 = next_obj_29391;
i_29387 = G__29419;
obj_29388 = G__29420;
continue;
} else {
var G__29421 = (i_29387 + (2));
var G__29422 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29388,key_29390);
i_29387 = G__29421;
obj_29388 = G__29422;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29395)].join('')));

}
} else {
return obj_29388;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_29437 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_29437,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_29424 = (function (){var path_29423 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_29423,(1));

return path_29423;
})();
var len_29427 = path_29424.length;
var parent_obj_path_29428 = path_29424.slice((0),(len_29427 - (2)));
var key_29425 = (path_29424[(len_29427 - (1))]);
var mode_29426 = (path_29424[(len_29427 - (2))]);
var parent_obj_29429 = (function (){var path_29430 = parent_obj_path_29428;
var len_29431 = path_29430.length;
var i_29432 = (0);
var obj_29433 = obj;
while(true){
if((i_29432 < len_29431)){
var mode_29434 = (path_29430[i_29432]);
var key_29435 = (path_29430[(i_29432 + (1))]);
var next_obj_29436 = oops.core.get_key_dynamically.call(null,obj_29433,key_29435,mode_29434);
var G__29438 = mode_29434;
switch (G__29438) {
case (0):
var G__29440 = (i_29432 + (2));
var G__29441 = next_obj_29436;
i_29432 = G__29440;
obj_29433 = G__29441;
continue;

break;
case (1):
if((!((next_obj_29436 == null)))){
var G__29442 = (i_29432 + (2));
var G__29443 = next_obj_29436;
i_29432 = G__29442;
obj_29433 = G__29443;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_29436 == null)))){
var G__29444 = (i_29432 + (2));
var G__29445 = next_obj_29436;
i_29432 = G__29444;
obj_29433 = G__29445;
continue;
} else {
var G__29446 = (i_29432 + (2));
var G__29447 = oops.core.punch_key_dynamically_BANG_.call(null,obj_29433,key_29435);
i_29432 = G__29446;
obj_29433 = G__29447;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29438)].join('')));

}
} else {
return obj_29433;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_29429,key_29425,val,mode_29426);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1601260775335
