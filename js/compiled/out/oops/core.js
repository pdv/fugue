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

var G__5550 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__5550)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__5550)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__5550)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5550)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__5551 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__5551)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__5551)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__5551)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5551)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5559 = arguments.length;
var i__4731__auto___5560 = (0);
while(true){
if((i__4731__auto___5560 < len__4730__auto___5559)){
args__4736__auto__.push((arguments[i__4731__auto___5560]));

var G__5561 = (i__4731__auto___5560 + (1));
i__4731__auto___5560 = G__5561;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__5554){
var vec__5555 = p__5554;
var info = cljs.core.nth.call(null,vec__5555,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__5558_5562 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__5558_5562)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__5558_5562)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__5558_5562)){
} else {
if(cljs.core._EQ_.call(null,null,G__5558_5562)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5558_5562)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq5552){
var G__5553 = cljs.core.first.call(null,seq5552);
var seq5552__$1 = cljs.core.next.call(null,seq5552);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5553,seq5552__$1);
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
var descriptor_5563 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_5563);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_5564 = temp__5722__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_5564,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
var child_factory_5566 = oops.config.get_child_factory.call(null);
var child_factory_5566__$1 = (function (){var G__5567 = child_factory_5566;
var G__5567__$1 = (((G__5567 instanceof cljs.core.Keyword))?G__5567.fqn:null);
switch (G__5567__$1) {
case "js-obj":
return ((function (G__5567,G__5567__$1,child_factory_5566){
return (function (){
return ({});
});
;})(G__5567,G__5567__$1,child_factory_5566))

break;
case "js-array":
return ((function (G__5567,G__5567__$1,child_factory_5566){
return (function (){
return [];
});
;})(G__5567,G__5567__$1,child_factory_5566))

break;
default:
return child_factory_5566;

}
})();

var child_obj_5565 = child_factory_5566__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_5565);
} else {
}

return child_obj_5565;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_5571 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_5571);

return selector_path_5571;
} else {
var selector_path_5572 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_5572);

return selector_path_5572;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_5573 = temp__5724__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_5573);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_5582 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_5582,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_5575 = (function (){var path_5574 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_5574,(0));

return path_5574;
})();
var len_5576 = path_5575.length;
var i_5577 = (0);
var obj_5578 = obj;
while(true){
if((i_5577 < len_5576)){
var mode_5579 = (path_5575[i_5577]);
var key_5580 = (path_5575[(i_5577 + (1))]);
var next_obj_5581 = oops.core.get_key_dynamically.call(null,obj_5578,key_5580,mode_5579);
var G__5583 = mode_5579;
switch (G__5583) {
case (0):
var G__5585 = (i_5577 + (2));
var G__5586 = next_obj_5581;
i_5577 = G__5585;
obj_5578 = G__5586;
continue;

break;
case (1):
if((!((next_obj_5581 == null)))){
var G__5587 = (i_5577 + (2));
var G__5588 = next_obj_5581;
i_5577 = G__5587;
obj_5578 = G__5588;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_5581 == null)))){
var G__5589 = (i_5577 + (2));
var G__5590 = next_obj_5581;
i_5577 = G__5589;
obj_5578 = G__5590;
continue;
} else {
var G__5591 = (i_5577 + (2));
var G__5592 = oops.core.punch_key_dynamically_BANG_.call(null,obj_5578,key_5580);
i_5577 = G__5591;
obj_5578 = G__5592;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5583)].join('')));

}
} else {
return obj_5578;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_5618 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_5618,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_5594 = (function (){var path_5593 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_5593,(0));

return path_5593;
})();
var len_5595 = path_5594.length;
if((len_5595 < (4))){
return [obj,(function (){var path_5597 = path_5594;
var len_5598 = path_5597.length;
var i_5599 = (0);
var obj_5600 = obj;
while(true){
if((i_5599 < len_5598)){
var mode_5601 = (path_5597[i_5599]);
var key_5602 = (path_5597[(i_5599 + (1))]);
var next_obj_5603 = oops.core.get_key_dynamically.call(null,obj_5600,key_5602,mode_5601);
var G__5619 = mode_5601;
switch (G__5619) {
case (0):
var G__5623 = (i_5599 + (2));
var G__5624 = next_obj_5603;
i_5599 = G__5623;
obj_5600 = G__5624;
continue;

break;
case (1):
if((!((next_obj_5603 == null)))){
var G__5625 = (i_5599 + (2));
var G__5626 = next_obj_5603;
i_5599 = G__5625;
obj_5600 = G__5626;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_5603 == null)))){
var G__5627 = (i_5599 + (2));
var G__5628 = next_obj_5603;
i_5599 = G__5627;
obj_5600 = G__5628;
continue;
} else {
var G__5629 = (i_5599 + (2));
var G__5630 = oops.core.punch_key_dynamically_BANG_.call(null,obj_5600,key_5602);
i_5599 = G__5629;
obj_5600 = G__5630;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5619)].join('')));

}
} else {
return obj_5600;
}
break;
}
})()];
} else {
var target_obj_5596 = (function (){var path_5604 = path_5594.slice((0),(len_5595 - (2)));
var len_5605 = path_5604.length;
var i_5606 = (0);
var obj_5607 = obj;
while(true){
if((i_5606 < len_5605)){
var mode_5608 = (path_5604[i_5606]);
var key_5609 = (path_5604[(i_5606 + (1))]);
var next_obj_5610 = oops.core.get_key_dynamically.call(null,obj_5607,key_5609,mode_5608);
var G__5620 = mode_5608;
switch (G__5620) {
case (0):
var G__5632 = (i_5606 + (2));
var G__5633 = next_obj_5610;
i_5606 = G__5632;
obj_5607 = G__5633;
continue;

break;
case (1):
if((!((next_obj_5610 == null)))){
var G__5634 = (i_5606 + (2));
var G__5635 = next_obj_5610;
i_5606 = G__5634;
obj_5607 = G__5635;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_5610 == null)))){
var G__5636 = (i_5606 + (2));
var G__5637 = next_obj_5610;
i_5606 = G__5636;
obj_5607 = G__5637;
continue;
} else {
var G__5638 = (i_5606 + (2));
var G__5639 = oops.core.punch_key_dynamically_BANG_.call(null,obj_5607,key_5609);
i_5606 = G__5638;
obj_5607 = G__5639;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5620)].join('')));

}
} else {
return obj_5607;
}
break;
}
})();
return [target_obj_5596,(function (){var path_5611 = [(path_5594[(len_5595 - (2))]),(path_5594[(len_5595 - (1))])];
var len_5612 = path_5611.length;
var i_5613 = (0);
var obj_5614 = target_obj_5596;
while(true){
if((i_5613 < len_5612)){
var mode_5615 = (path_5611[i_5613]);
var key_5616 = (path_5611[(i_5613 + (1))]);
var next_obj_5617 = oops.core.get_key_dynamically.call(null,obj_5614,key_5616,mode_5615);
var G__5621 = mode_5615;
switch (G__5621) {
case (0):
var G__5641 = (i_5613 + (2));
var G__5642 = next_obj_5617;
i_5613 = G__5641;
obj_5614 = G__5642;
continue;

break;
case (1):
if((!((next_obj_5617 == null)))){
var G__5643 = (i_5613 + (2));
var G__5644 = next_obj_5617;
i_5613 = G__5643;
obj_5614 = G__5644;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_5617 == null)))){
var G__5645 = (i_5613 + (2));
var G__5646 = next_obj_5617;
i_5613 = G__5645;
obj_5614 = G__5646;
continue;
} else {
var G__5647 = (i_5613 + (2));
var G__5648 = oops.core.punch_key_dynamically_BANG_.call(null,obj_5614,key_5616);
i_5613 = G__5647;
obj_5614 = G__5648;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5621)].join('')));

}
} else {
return obj_5614;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_5663 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_5663,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_5650 = (function (){var path_5649 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_5649,(1));

return path_5649;
})();
var len_5653 = path_5650.length;
var parent_obj_path_5654 = path_5650.slice((0),(len_5653 - (2)));
var key_5651 = (path_5650[(len_5653 - (1))]);
var mode_5652 = (path_5650[(len_5653 - (2))]);
var parent_obj_5655 = (function (){var path_5656 = parent_obj_path_5654;
var len_5657 = path_5656.length;
var i_5658 = (0);
var obj_5659 = obj;
while(true){
if((i_5658 < len_5657)){
var mode_5660 = (path_5656[i_5658]);
var key_5661 = (path_5656[(i_5658 + (1))]);
var next_obj_5662 = oops.core.get_key_dynamically.call(null,obj_5659,key_5661,mode_5660);
var G__5664 = mode_5660;
switch (G__5664) {
case (0):
var G__5666 = (i_5658 + (2));
var G__5667 = next_obj_5662;
i_5658 = G__5666;
obj_5659 = G__5667;
continue;

break;
case (1):
if((!((next_obj_5662 == null)))){
var G__5668 = (i_5658 + (2));
var G__5669 = next_obj_5662;
i_5658 = G__5668;
obj_5659 = G__5669;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_5662 == null)))){
var G__5670 = (i_5658 + (2));
var G__5671 = next_obj_5662;
i_5658 = G__5670;
obj_5659 = G__5671;
continue;
} else {
var G__5672 = (i_5658 + (2));
var G__5673 = oops.core.punch_key_dynamically_BANG_.call(null,obj_5659,key_5661);
i_5658 = G__5672;
obj_5659 = G__5673;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5664)].join('')));

}
} else {
return obj_5659;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_5655,key_5651,val,mode_5652);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1610745447695
