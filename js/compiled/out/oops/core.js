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

var G__25749 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__25749)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__25749)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__25749)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25749)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__25750 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__25750)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__25750)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__25750)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25750)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25758 = arguments.length;
var i__4731__auto___25759 = (0);
while(true){
if((i__4731__auto___25759 < len__4730__auto___25758)){
args__4736__auto__.push((arguments[i__4731__auto___25759]));

var G__25760 = (i__4731__auto___25759 + (1));
i__4731__auto___25759 = G__25760;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__25753){
var vec__25754 = p__25753;
var info = cljs.core.nth.call(null,vec__25754,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__25757_25761 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__25757_25761)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__25757_25761)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__25757_25761)){
} else {
if(cljs.core._EQ_.call(null,null,G__25757_25761)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25757_25761)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq25751){
var G__25752 = cljs.core.first.call(null,seq25751);
var seq25751__$1 = cljs.core.next.call(null,seq25751);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25752,seq25751__$1);
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
var descriptor_25762 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_25762);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_25763 = temp__5722__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_25763,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
var child_factory_25765 = oops.config.get_child_factory.call(null);
var child_factory_25765__$1 = (function (){var G__25766 = child_factory_25765;
var G__25766__$1 = (((G__25766 instanceof cljs.core.Keyword))?G__25766.fqn:null);
switch (G__25766__$1) {
case "js-obj":
return ((function (G__25766,G__25766__$1,child_factory_25765){
return (function (){
return ({});
});
;})(G__25766,G__25766__$1,child_factory_25765))

break;
case "js-array":
return ((function (G__25766,G__25766__$1,child_factory_25765){
return (function (){
return [];
});
;})(G__25766,G__25766__$1,child_factory_25765))

break;
default:
return child_factory_25765;

}
})();

var child_obj_25764 = child_factory_25765__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_25764);
} else {
}

return child_obj_25764;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_25770 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_25770);

return selector_path_25770;
} else {
var selector_path_25771 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_25771);

return selector_path_25771;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_25772 = temp__5724__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_25772);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_25781 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_25781,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_25774 = (function (){var path_25773 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_25773,(0));

return path_25773;
})();
var len_25775 = path_25774.length;
var i_25776 = (0);
var obj_25777 = obj;
while(true){
if((i_25776 < len_25775)){
var mode_25778 = (path_25774[i_25776]);
var key_25779 = (path_25774[(i_25776 + (1))]);
var next_obj_25780 = oops.core.get_key_dynamically.call(null,obj_25777,key_25779,mode_25778);
var G__25782 = mode_25778;
switch (G__25782) {
case (0):
var G__25784 = (i_25776 + (2));
var G__25785 = next_obj_25780;
i_25776 = G__25784;
obj_25777 = G__25785;
continue;

break;
case (1):
if((!((next_obj_25780 == null)))){
var G__25786 = (i_25776 + (2));
var G__25787 = next_obj_25780;
i_25776 = G__25786;
obj_25777 = G__25787;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_25780 == null)))){
var G__25788 = (i_25776 + (2));
var G__25789 = next_obj_25780;
i_25776 = G__25788;
obj_25777 = G__25789;
continue;
} else {
var G__25790 = (i_25776 + (2));
var G__25791 = oops.core.punch_key_dynamically_BANG_.call(null,obj_25777,key_25779);
i_25776 = G__25790;
obj_25777 = G__25791;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25782)].join('')));

}
} else {
return obj_25777;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_25817 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_25817,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_25793 = (function (){var path_25792 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_25792,(0));

return path_25792;
})();
var len_25794 = path_25793.length;
if((len_25794 < (4))){
return [obj,(function (){var path_25796 = path_25793;
var len_25797 = path_25796.length;
var i_25798 = (0);
var obj_25799 = obj;
while(true){
if((i_25798 < len_25797)){
var mode_25800 = (path_25796[i_25798]);
var key_25801 = (path_25796[(i_25798 + (1))]);
var next_obj_25802 = oops.core.get_key_dynamically.call(null,obj_25799,key_25801,mode_25800);
var G__25818 = mode_25800;
switch (G__25818) {
case (0):
var G__25822 = (i_25798 + (2));
var G__25823 = next_obj_25802;
i_25798 = G__25822;
obj_25799 = G__25823;
continue;

break;
case (1):
if((!((next_obj_25802 == null)))){
var G__25824 = (i_25798 + (2));
var G__25825 = next_obj_25802;
i_25798 = G__25824;
obj_25799 = G__25825;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_25802 == null)))){
var G__25826 = (i_25798 + (2));
var G__25827 = next_obj_25802;
i_25798 = G__25826;
obj_25799 = G__25827;
continue;
} else {
var G__25828 = (i_25798 + (2));
var G__25829 = oops.core.punch_key_dynamically_BANG_.call(null,obj_25799,key_25801);
i_25798 = G__25828;
obj_25799 = G__25829;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25818)].join('')));

}
} else {
return obj_25799;
}
break;
}
})()];
} else {
var target_obj_25795 = (function (){var path_25803 = path_25793.slice((0),(len_25794 - (2)));
var len_25804 = path_25803.length;
var i_25805 = (0);
var obj_25806 = obj;
while(true){
if((i_25805 < len_25804)){
var mode_25807 = (path_25803[i_25805]);
var key_25808 = (path_25803[(i_25805 + (1))]);
var next_obj_25809 = oops.core.get_key_dynamically.call(null,obj_25806,key_25808,mode_25807);
var G__25819 = mode_25807;
switch (G__25819) {
case (0):
var G__25831 = (i_25805 + (2));
var G__25832 = next_obj_25809;
i_25805 = G__25831;
obj_25806 = G__25832;
continue;

break;
case (1):
if((!((next_obj_25809 == null)))){
var G__25833 = (i_25805 + (2));
var G__25834 = next_obj_25809;
i_25805 = G__25833;
obj_25806 = G__25834;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_25809 == null)))){
var G__25835 = (i_25805 + (2));
var G__25836 = next_obj_25809;
i_25805 = G__25835;
obj_25806 = G__25836;
continue;
} else {
var G__25837 = (i_25805 + (2));
var G__25838 = oops.core.punch_key_dynamically_BANG_.call(null,obj_25806,key_25808);
i_25805 = G__25837;
obj_25806 = G__25838;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25819)].join('')));

}
} else {
return obj_25806;
}
break;
}
})();
return [target_obj_25795,(function (){var path_25810 = [(path_25793[(len_25794 - (2))]),(path_25793[(len_25794 - (1))])];
var len_25811 = path_25810.length;
var i_25812 = (0);
var obj_25813 = target_obj_25795;
while(true){
if((i_25812 < len_25811)){
var mode_25814 = (path_25810[i_25812]);
var key_25815 = (path_25810[(i_25812 + (1))]);
var next_obj_25816 = oops.core.get_key_dynamically.call(null,obj_25813,key_25815,mode_25814);
var G__25820 = mode_25814;
switch (G__25820) {
case (0):
var G__25840 = (i_25812 + (2));
var G__25841 = next_obj_25816;
i_25812 = G__25840;
obj_25813 = G__25841;
continue;

break;
case (1):
if((!((next_obj_25816 == null)))){
var G__25842 = (i_25812 + (2));
var G__25843 = next_obj_25816;
i_25812 = G__25842;
obj_25813 = G__25843;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_25816 == null)))){
var G__25844 = (i_25812 + (2));
var G__25845 = next_obj_25816;
i_25812 = G__25844;
obj_25813 = G__25845;
continue;
} else {
var G__25846 = (i_25812 + (2));
var G__25847 = oops.core.punch_key_dynamically_BANG_.call(null,obj_25813,key_25815);
i_25812 = G__25846;
obj_25813 = G__25847;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25820)].join('')));

}
} else {
return obj_25813;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_25862 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_25862,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_25849 = (function (){var path_25848 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_25848,(1));

return path_25848;
})();
var len_25852 = path_25849.length;
var parent_obj_path_25853 = path_25849.slice((0),(len_25852 - (2)));
var key_25850 = (path_25849[(len_25852 - (1))]);
var mode_25851 = (path_25849[(len_25852 - (2))]);
var parent_obj_25854 = (function (){var path_25855 = parent_obj_path_25853;
var len_25856 = path_25855.length;
var i_25857 = (0);
var obj_25858 = obj;
while(true){
if((i_25857 < len_25856)){
var mode_25859 = (path_25855[i_25857]);
var key_25860 = (path_25855[(i_25857 + (1))]);
var next_obj_25861 = oops.core.get_key_dynamically.call(null,obj_25858,key_25860,mode_25859);
var G__25863 = mode_25859;
switch (G__25863) {
case (0):
var G__25865 = (i_25857 + (2));
var G__25866 = next_obj_25861;
i_25857 = G__25865;
obj_25858 = G__25866;
continue;

break;
case (1):
if((!((next_obj_25861 == null)))){
var G__25867 = (i_25857 + (2));
var G__25868 = next_obj_25861;
i_25857 = G__25867;
obj_25858 = G__25868;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_25861 == null)))){
var G__25869 = (i_25857 + (2));
var G__25870 = next_obj_25861;
i_25857 = G__25869;
obj_25858 = G__25870;
continue;
} else {
var G__25871 = (i_25857 + (2));
var G__25872 = oops.core.punch_key_dynamically_BANG_.call(null,obj_25858,key_25860);
i_25857 = G__25871;
obj_25858 = G__25872;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25863)].join('')));

}
} else {
return obj_25858;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_25854,key_25850,val,mode_25851);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1601516651497
