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

var G__25761 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__25761)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__25761)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__25761)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25761)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__25762 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__25762)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__25762)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__25762)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25762)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25770 = arguments.length;
var i__4731__auto___25771 = (0);
while(true){
if((i__4731__auto___25771 < len__4730__auto___25770)){
args__4736__auto__.push((arguments[i__4731__auto___25771]));

var G__25772 = (i__4731__auto___25771 + (1));
i__4731__auto___25771 = G__25772;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__25765){
var vec__25766 = p__25765;
var info = cljs.core.nth.call(null,vec__25766,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__25769_25773 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__25769_25773)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__25769_25773)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__25769_25773)){
} else {
if(cljs.core._EQ_.call(null,null,G__25769_25773)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25769_25773)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq25763){
var G__25764 = cljs.core.first.call(null,seq25763);
var seq25763__$1 = cljs.core.next.call(null,seq25763);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25764,seq25763__$1);
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
var descriptor_25774 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_25774);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_25775 = temp__5722__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_25775,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
var child_factory_25777 = oops.config.get_child_factory.call(null);
var child_factory_25777__$1 = (function (){var G__25778 = child_factory_25777;
var G__25778__$1 = (((G__25778 instanceof cljs.core.Keyword))?G__25778.fqn:null);
switch (G__25778__$1) {
case "js-obj":
return ((function (G__25778,G__25778__$1,child_factory_25777){
return (function (){
return ({});
});
;})(G__25778,G__25778__$1,child_factory_25777))

break;
case "js-array":
return ((function (G__25778,G__25778__$1,child_factory_25777){
return (function (){
return [];
});
;})(G__25778,G__25778__$1,child_factory_25777))

break;
default:
return child_factory_25777;

}
})();

var child_obj_25776 = child_factory_25777__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_25776);
} else {
}

return child_obj_25776;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_25782 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_25782);

return selector_path_25782;
} else {
var selector_path_25783 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_25783);

return selector_path_25783;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_25784 = temp__5724__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_25784);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_25793 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_25793,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_25786 = (function (){var path_25785 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_25785,(0));

return path_25785;
})();
var len_25787 = path_25786.length;
var i_25788 = (0);
var obj_25789 = obj;
while(true){
if((i_25788 < len_25787)){
var mode_25790 = (path_25786[i_25788]);
var key_25791 = (path_25786[(i_25788 + (1))]);
var next_obj_25792 = oops.core.get_key_dynamically.call(null,obj_25789,key_25791,mode_25790);
var G__25794 = mode_25790;
switch (G__25794) {
case (0):
var G__25796 = (i_25788 + (2));
var G__25797 = next_obj_25792;
i_25788 = G__25796;
obj_25789 = G__25797;
continue;

break;
case (1):
if((!((next_obj_25792 == null)))){
var G__25798 = (i_25788 + (2));
var G__25799 = next_obj_25792;
i_25788 = G__25798;
obj_25789 = G__25799;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_25792 == null)))){
var G__25800 = (i_25788 + (2));
var G__25801 = next_obj_25792;
i_25788 = G__25800;
obj_25789 = G__25801;
continue;
} else {
var G__25802 = (i_25788 + (2));
var G__25803 = oops.core.punch_key_dynamically_BANG_.call(null,obj_25789,key_25791);
i_25788 = G__25802;
obj_25789 = G__25803;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25794)].join('')));

}
} else {
return obj_25789;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_25829 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_25829,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_25805 = (function (){var path_25804 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_25804,(0));

return path_25804;
})();
var len_25806 = path_25805.length;
if((len_25806 < (4))){
return [obj,(function (){var path_25808 = path_25805;
var len_25809 = path_25808.length;
var i_25810 = (0);
var obj_25811 = obj;
while(true){
if((i_25810 < len_25809)){
var mode_25812 = (path_25808[i_25810]);
var key_25813 = (path_25808[(i_25810 + (1))]);
var next_obj_25814 = oops.core.get_key_dynamically.call(null,obj_25811,key_25813,mode_25812);
var G__25830 = mode_25812;
switch (G__25830) {
case (0):
var G__25834 = (i_25810 + (2));
var G__25835 = next_obj_25814;
i_25810 = G__25834;
obj_25811 = G__25835;
continue;

break;
case (1):
if((!((next_obj_25814 == null)))){
var G__25836 = (i_25810 + (2));
var G__25837 = next_obj_25814;
i_25810 = G__25836;
obj_25811 = G__25837;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_25814 == null)))){
var G__25838 = (i_25810 + (2));
var G__25839 = next_obj_25814;
i_25810 = G__25838;
obj_25811 = G__25839;
continue;
} else {
var G__25840 = (i_25810 + (2));
var G__25841 = oops.core.punch_key_dynamically_BANG_.call(null,obj_25811,key_25813);
i_25810 = G__25840;
obj_25811 = G__25841;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25830)].join('')));

}
} else {
return obj_25811;
}
break;
}
})()];
} else {
var target_obj_25807 = (function (){var path_25815 = path_25805.slice((0),(len_25806 - (2)));
var len_25816 = path_25815.length;
var i_25817 = (0);
var obj_25818 = obj;
while(true){
if((i_25817 < len_25816)){
var mode_25819 = (path_25815[i_25817]);
var key_25820 = (path_25815[(i_25817 + (1))]);
var next_obj_25821 = oops.core.get_key_dynamically.call(null,obj_25818,key_25820,mode_25819);
var G__25831 = mode_25819;
switch (G__25831) {
case (0):
var G__25843 = (i_25817 + (2));
var G__25844 = next_obj_25821;
i_25817 = G__25843;
obj_25818 = G__25844;
continue;

break;
case (1):
if((!((next_obj_25821 == null)))){
var G__25845 = (i_25817 + (2));
var G__25846 = next_obj_25821;
i_25817 = G__25845;
obj_25818 = G__25846;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_25821 == null)))){
var G__25847 = (i_25817 + (2));
var G__25848 = next_obj_25821;
i_25817 = G__25847;
obj_25818 = G__25848;
continue;
} else {
var G__25849 = (i_25817 + (2));
var G__25850 = oops.core.punch_key_dynamically_BANG_.call(null,obj_25818,key_25820);
i_25817 = G__25849;
obj_25818 = G__25850;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25831)].join('')));

}
} else {
return obj_25818;
}
break;
}
})();
return [target_obj_25807,(function (){var path_25822 = [(path_25805[(len_25806 - (2))]),(path_25805[(len_25806 - (1))])];
var len_25823 = path_25822.length;
var i_25824 = (0);
var obj_25825 = target_obj_25807;
while(true){
if((i_25824 < len_25823)){
var mode_25826 = (path_25822[i_25824]);
var key_25827 = (path_25822[(i_25824 + (1))]);
var next_obj_25828 = oops.core.get_key_dynamically.call(null,obj_25825,key_25827,mode_25826);
var G__25832 = mode_25826;
switch (G__25832) {
case (0):
var G__25852 = (i_25824 + (2));
var G__25853 = next_obj_25828;
i_25824 = G__25852;
obj_25825 = G__25853;
continue;

break;
case (1):
if((!((next_obj_25828 == null)))){
var G__25854 = (i_25824 + (2));
var G__25855 = next_obj_25828;
i_25824 = G__25854;
obj_25825 = G__25855;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_25828 == null)))){
var G__25856 = (i_25824 + (2));
var G__25857 = next_obj_25828;
i_25824 = G__25856;
obj_25825 = G__25857;
continue;
} else {
var G__25858 = (i_25824 + (2));
var G__25859 = oops.core.punch_key_dynamically_BANG_.call(null,obj_25825,key_25827);
i_25824 = G__25858;
obj_25825 = G__25859;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25832)].join('')));

}
} else {
return obj_25825;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_25874 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_25874,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_25861 = (function (){var path_25860 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_25860,(1));

return path_25860;
})();
var len_25864 = path_25861.length;
var parent_obj_path_25865 = path_25861.slice((0),(len_25864 - (2)));
var key_25862 = (path_25861[(len_25864 - (1))]);
var mode_25863 = (path_25861[(len_25864 - (2))]);
var parent_obj_25866 = (function (){var path_25867 = parent_obj_path_25865;
var len_25868 = path_25867.length;
var i_25869 = (0);
var obj_25870 = obj;
while(true){
if((i_25869 < len_25868)){
var mode_25871 = (path_25867[i_25869]);
var key_25872 = (path_25867[(i_25869 + (1))]);
var next_obj_25873 = oops.core.get_key_dynamically.call(null,obj_25870,key_25872,mode_25871);
var G__25875 = mode_25871;
switch (G__25875) {
case (0):
var G__25877 = (i_25869 + (2));
var G__25878 = next_obj_25873;
i_25869 = G__25877;
obj_25870 = G__25878;
continue;

break;
case (1):
if((!((next_obj_25873 == null)))){
var G__25879 = (i_25869 + (2));
var G__25880 = next_obj_25873;
i_25869 = G__25879;
obj_25870 = G__25880;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_25873 == null)))){
var G__25881 = (i_25869 + (2));
var G__25882 = next_obj_25873;
i_25869 = G__25881;
obj_25870 = G__25882;
continue;
} else {
var G__25883 = (i_25869 + (2));
var G__25884 = oops.core.punch_key_dynamically_BANG_.call(null,obj_25870,key_25872);
i_25869 = G__25883;
obj_25870 = G__25884;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25875)].join('')));

}
} else {
return obj_25870;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_25866,key_25862,val,mode_25863);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1610147336170
