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

var G__24295 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__24295)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__24295)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__24295)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24295)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__24296 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__24296)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__24296)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__24296)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24296)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24304 = arguments.length;
var i__4731__auto___24305 = (0);
while(true){
if((i__4731__auto___24305 < len__4730__auto___24304)){
args__4736__auto__.push((arguments[i__4731__auto___24305]));

var G__24306 = (i__4731__auto___24305 + (1));
i__4731__auto___24305 = G__24306;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__24299){
var vec__24300 = p__24299;
var info = cljs.core.nth.call(null,vec__24300,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__24303_24307 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__24303_24307)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__24303_24307)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__24303_24307)){
} else {
if(cljs.core._EQ_.call(null,null,G__24303_24307)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24303_24307)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq24297){
var G__24298 = cljs.core.first.call(null,seq24297);
var seq24297__$1 = cljs.core.next.call(null,seq24297);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24298,seq24297__$1);
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
var descriptor_24308 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_24308);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_24309 = temp__5722__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_24309,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
var child_factory_24311 = oops.config.get_child_factory.call(null);
var child_factory_24311__$1 = (function (){var G__24312 = child_factory_24311;
var G__24312__$1 = (((G__24312 instanceof cljs.core.Keyword))?G__24312.fqn:null);
switch (G__24312__$1) {
case "js-obj":
return ((function (G__24312,G__24312__$1,child_factory_24311){
return (function (){
return ({});
});
;})(G__24312,G__24312__$1,child_factory_24311))

break;
case "js-array":
return ((function (G__24312,G__24312__$1,child_factory_24311){
return (function (){
return [];
});
;})(G__24312,G__24312__$1,child_factory_24311))

break;
default:
return child_factory_24311;

}
})();

var child_obj_24310 = child_factory_24311__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_24310);
} else {
}

return child_obj_24310;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_24316 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_24316);

return selector_path_24316;
} else {
var selector_path_24317 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_24317);

return selector_path_24317;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_24318 = temp__5724__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_24318);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_24327 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_24327,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_24320 = (function (){var path_24319 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_24319,(0));

return path_24319;
})();
var len_24321 = path_24320.length;
var i_24322 = (0);
var obj_24323 = obj;
while(true){
if((i_24322 < len_24321)){
var mode_24324 = (path_24320[i_24322]);
var key_24325 = (path_24320[(i_24322 + (1))]);
var next_obj_24326 = oops.core.get_key_dynamically.call(null,obj_24323,key_24325,mode_24324);
var G__24328 = mode_24324;
switch (G__24328) {
case (0):
var G__24330 = (i_24322 + (2));
var G__24331 = next_obj_24326;
i_24322 = G__24330;
obj_24323 = G__24331;
continue;

break;
case (1):
if((!((next_obj_24326 == null)))){
var G__24332 = (i_24322 + (2));
var G__24333 = next_obj_24326;
i_24322 = G__24332;
obj_24323 = G__24333;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24326 == null)))){
var G__24334 = (i_24322 + (2));
var G__24335 = next_obj_24326;
i_24322 = G__24334;
obj_24323 = G__24335;
continue;
} else {
var G__24336 = (i_24322 + (2));
var G__24337 = oops.core.punch_key_dynamically_BANG_.call(null,obj_24323,key_24325);
i_24322 = G__24336;
obj_24323 = G__24337;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24328)].join('')));

}
} else {
return obj_24323;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_24363 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_24363,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_24339 = (function (){var path_24338 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_24338,(0));

return path_24338;
})();
var len_24340 = path_24339.length;
if((len_24340 < (4))){
return [obj,(function (){var path_24342 = path_24339;
var len_24343 = path_24342.length;
var i_24344 = (0);
var obj_24345 = obj;
while(true){
if((i_24344 < len_24343)){
var mode_24346 = (path_24342[i_24344]);
var key_24347 = (path_24342[(i_24344 + (1))]);
var next_obj_24348 = oops.core.get_key_dynamically.call(null,obj_24345,key_24347,mode_24346);
var G__24364 = mode_24346;
switch (G__24364) {
case (0):
var G__24368 = (i_24344 + (2));
var G__24369 = next_obj_24348;
i_24344 = G__24368;
obj_24345 = G__24369;
continue;

break;
case (1):
if((!((next_obj_24348 == null)))){
var G__24370 = (i_24344 + (2));
var G__24371 = next_obj_24348;
i_24344 = G__24370;
obj_24345 = G__24371;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24348 == null)))){
var G__24372 = (i_24344 + (2));
var G__24373 = next_obj_24348;
i_24344 = G__24372;
obj_24345 = G__24373;
continue;
} else {
var G__24374 = (i_24344 + (2));
var G__24375 = oops.core.punch_key_dynamically_BANG_.call(null,obj_24345,key_24347);
i_24344 = G__24374;
obj_24345 = G__24375;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24364)].join('')));

}
} else {
return obj_24345;
}
break;
}
})()];
} else {
var target_obj_24341 = (function (){var path_24349 = path_24339.slice((0),(len_24340 - (2)));
var len_24350 = path_24349.length;
var i_24351 = (0);
var obj_24352 = obj;
while(true){
if((i_24351 < len_24350)){
var mode_24353 = (path_24349[i_24351]);
var key_24354 = (path_24349[(i_24351 + (1))]);
var next_obj_24355 = oops.core.get_key_dynamically.call(null,obj_24352,key_24354,mode_24353);
var G__24365 = mode_24353;
switch (G__24365) {
case (0):
var G__24377 = (i_24351 + (2));
var G__24378 = next_obj_24355;
i_24351 = G__24377;
obj_24352 = G__24378;
continue;

break;
case (1):
if((!((next_obj_24355 == null)))){
var G__24379 = (i_24351 + (2));
var G__24380 = next_obj_24355;
i_24351 = G__24379;
obj_24352 = G__24380;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24355 == null)))){
var G__24381 = (i_24351 + (2));
var G__24382 = next_obj_24355;
i_24351 = G__24381;
obj_24352 = G__24382;
continue;
} else {
var G__24383 = (i_24351 + (2));
var G__24384 = oops.core.punch_key_dynamically_BANG_.call(null,obj_24352,key_24354);
i_24351 = G__24383;
obj_24352 = G__24384;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24365)].join('')));

}
} else {
return obj_24352;
}
break;
}
})();
return [target_obj_24341,(function (){var path_24356 = [(path_24339[(len_24340 - (2))]),(path_24339[(len_24340 - (1))])];
var len_24357 = path_24356.length;
var i_24358 = (0);
var obj_24359 = target_obj_24341;
while(true){
if((i_24358 < len_24357)){
var mode_24360 = (path_24356[i_24358]);
var key_24361 = (path_24356[(i_24358 + (1))]);
var next_obj_24362 = oops.core.get_key_dynamically.call(null,obj_24359,key_24361,mode_24360);
var G__24366 = mode_24360;
switch (G__24366) {
case (0):
var G__24386 = (i_24358 + (2));
var G__24387 = next_obj_24362;
i_24358 = G__24386;
obj_24359 = G__24387;
continue;

break;
case (1):
if((!((next_obj_24362 == null)))){
var G__24388 = (i_24358 + (2));
var G__24389 = next_obj_24362;
i_24358 = G__24388;
obj_24359 = G__24389;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24362 == null)))){
var G__24390 = (i_24358 + (2));
var G__24391 = next_obj_24362;
i_24358 = G__24390;
obj_24359 = G__24391;
continue;
} else {
var G__24392 = (i_24358 + (2));
var G__24393 = oops.core.punch_key_dynamically_BANG_.call(null,obj_24359,key_24361);
i_24358 = G__24392;
obj_24359 = G__24393;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24366)].join('')));

}
} else {
return obj_24359;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_24408 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_24408,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_24395 = (function (){var path_24394 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_24394,(1));

return path_24394;
})();
var len_24398 = path_24395.length;
var parent_obj_path_24399 = path_24395.slice((0),(len_24398 - (2)));
var key_24396 = (path_24395[(len_24398 - (1))]);
var mode_24397 = (path_24395[(len_24398 - (2))]);
var parent_obj_24400 = (function (){var path_24401 = parent_obj_path_24399;
var len_24402 = path_24401.length;
var i_24403 = (0);
var obj_24404 = obj;
while(true){
if((i_24403 < len_24402)){
var mode_24405 = (path_24401[i_24403]);
var key_24406 = (path_24401[(i_24403 + (1))]);
var next_obj_24407 = oops.core.get_key_dynamically.call(null,obj_24404,key_24406,mode_24405);
var G__24409 = mode_24405;
switch (G__24409) {
case (0):
var G__24411 = (i_24403 + (2));
var G__24412 = next_obj_24407;
i_24403 = G__24411;
obj_24404 = G__24412;
continue;

break;
case (1):
if((!((next_obj_24407 == null)))){
var G__24413 = (i_24403 + (2));
var G__24414 = next_obj_24407;
i_24403 = G__24413;
obj_24404 = G__24414;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24407 == null)))){
var G__24415 = (i_24403 + (2));
var G__24416 = next_obj_24407;
i_24403 = G__24415;
obj_24404 = G__24416;
continue;
} else {
var G__24417 = (i_24403 + (2));
var G__24418 = oops.core.punch_key_dynamically_BANG_.call(null,obj_24404,key_24406);
i_24403 = G__24417;
obj_24404 = G__24418;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24409)].join('')));

}
} else {
return obj_24404;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_24400,key_24396,val,mode_24397);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1601274357805
