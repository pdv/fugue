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

var G__25776 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__25776)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__25776)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__25776)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25776)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__25777 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__25777)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__25777)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__25777)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25777)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25785 = arguments.length;
var i__4731__auto___25786 = (0);
while(true){
if((i__4731__auto___25786 < len__4730__auto___25785)){
args__4736__auto__.push((arguments[i__4731__auto___25786]));

var G__25787 = (i__4731__auto___25786 + (1));
i__4731__auto___25786 = G__25787;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__25780){
var vec__25781 = p__25780;
var info = cljs.core.nth.call(null,vec__25781,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__25784_25788 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__25784_25788)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__25784_25788)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__25784_25788)){
} else {
if(cljs.core._EQ_.call(null,null,G__25784_25788)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25784_25788)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq25778){
var G__25779 = cljs.core.first.call(null,seq25778);
var seq25778__$1 = cljs.core.next.call(null,seq25778);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25779,seq25778__$1);
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
var descriptor_25789 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_25789);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_25790 = temp__5722__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_25790,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
var child_factory_25792 = oops.config.get_child_factory.call(null);
var child_factory_25792__$1 = (function (){var G__25793 = child_factory_25792;
var G__25793__$1 = (((G__25793 instanceof cljs.core.Keyword))?G__25793.fqn:null);
switch (G__25793__$1) {
case "js-obj":
return ((function (G__25793,G__25793__$1,child_factory_25792){
return (function (){
return ({});
});
;})(G__25793,G__25793__$1,child_factory_25792))

break;
case "js-array":
return ((function (G__25793,G__25793__$1,child_factory_25792){
return (function (){
return [];
});
;})(G__25793,G__25793__$1,child_factory_25792))

break;
default:
return child_factory_25792;

}
})();

var child_obj_25791 = child_factory_25792__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_25791);
} else {
}

return child_obj_25791;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_25797 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_25797);

return selector_path_25797;
} else {
var selector_path_25798 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_25798);

return selector_path_25798;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_25799 = temp__5724__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_25799);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_25808 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_25808,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_25801 = (function (){var path_25800 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_25800,(0));

return path_25800;
})();
var len_25802 = path_25801.length;
var i_25803 = (0);
var obj_25804 = obj;
while(true){
if((i_25803 < len_25802)){
var mode_25805 = (path_25801[i_25803]);
var key_25806 = (path_25801[(i_25803 + (1))]);
var next_obj_25807 = oops.core.get_key_dynamically.call(null,obj_25804,key_25806,mode_25805);
var G__25809 = mode_25805;
switch (G__25809) {
case (0):
var G__25811 = (i_25803 + (2));
var G__25812 = next_obj_25807;
i_25803 = G__25811;
obj_25804 = G__25812;
continue;

break;
case (1):
if((!((next_obj_25807 == null)))){
var G__25813 = (i_25803 + (2));
var G__25814 = next_obj_25807;
i_25803 = G__25813;
obj_25804 = G__25814;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_25807 == null)))){
var G__25815 = (i_25803 + (2));
var G__25816 = next_obj_25807;
i_25803 = G__25815;
obj_25804 = G__25816;
continue;
} else {
var G__25817 = (i_25803 + (2));
var G__25818 = oops.core.punch_key_dynamically_BANG_.call(null,obj_25804,key_25806);
i_25803 = G__25817;
obj_25804 = G__25818;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25809)].join('')));

}
} else {
return obj_25804;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_25844 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_25844,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_25820 = (function (){var path_25819 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_25819,(0));

return path_25819;
})();
var len_25821 = path_25820.length;
if((len_25821 < (4))){
return [obj,(function (){var path_25823 = path_25820;
var len_25824 = path_25823.length;
var i_25825 = (0);
var obj_25826 = obj;
while(true){
if((i_25825 < len_25824)){
var mode_25827 = (path_25823[i_25825]);
var key_25828 = (path_25823[(i_25825 + (1))]);
var next_obj_25829 = oops.core.get_key_dynamically.call(null,obj_25826,key_25828,mode_25827);
var G__25845 = mode_25827;
switch (G__25845) {
case (0):
var G__25849 = (i_25825 + (2));
var G__25850 = next_obj_25829;
i_25825 = G__25849;
obj_25826 = G__25850;
continue;

break;
case (1):
if((!((next_obj_25829 == null)))){
var G__25851 = (i_25825 + (2));
var G__25852 = next_obj_25829;
i_25825 = G__25851;
obj_25826 = G__25852;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_25829 == null)))){
var G__25853 = (i_25825 + (2));
var G__25854 = next_obj_25829;
i_25825 = G__25853;
obj_25826 = G__25854;
continue;
} else {
var G__25855 = (i_25825 + (2));
var G__25856 = oops.core.punch_key_dynamically_BANG_.call(null,obj_25826,key_25828);
i_25825 = G__25855;
obj_25826 = G__25856;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25845)].join('')));

}
} else {
return obj_25826;
}
break;
}
})()];
} else {
var target_obj_25822 = (function (){var path_25830 = path_25820.slice((0),(len_25821 - (2)));
var len_25831 = path_25830.length;
var i_25832 = (0);
var obj_25833 = obj;
while(true){
if((i_25832 < len_25831)){
var mode_25834 = (path_25830[i_25832]);
var key_25835 = (path_25830[(i_25832 + (1))]);
var next_obj_25836 = oops.core.get_key_dynamically.call(null,obj_25833,key_25835,mode_25834);
var G__25846 = mode_25834;
switch (G__25846) {
case (0):
var G__25858 = (i_25832 + (2));
var G__25859 = next_obj_25836;
i_25832 = G__25858;
obj_25833 = G__25859;
continue;

break;
case (1):
if((!((next_obj_25836 == null)))){
var G__25860 = (i_25832 + (2));
var G__25861 = next_obj_25836;
i_25832 = G__25860;
obj_25833 = G__25861;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_25836 == null)))){
var G__25862 = (i_25832 + (2));
var G__25863 = next_obj_25836;
i_25832 = G__25862;
obj_25833 = G__25863;
continue;
} else {
var G__25864 = (i_25832 + (2));
var G__25865 = oops.core.punch_key_dynamically_BANG_.call(null,obj_25833,key_25835);
i_25832 = G__25864;
obj_25833 = G__25865;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25846)].join('')));

}
} else {
return obj_25833;
}
break;
}
})();
return [target_obj_25822,(function (){var path_25837 = [(path_25820[(len_25821 - (2))]),(path_25820[(len_25821 - (1))])];
var len_25838 = path_25837.length;
var i_25839 = (0);
var obj_25840 = target_obj_25822;
while(true){
if((i_25839 < len_25838)){
var mode_25841 = (path_25837[i_25839]);
var key_25842 = (path_25837[(i_25839 + (1))]);
var next_obj_25843 = oops.core.get_key_dynamically.call(null,obj_25840,key_25842,mode_25841);
var G__25847 = mode_25841;
switch (G__25847) {
case (0):
var G__25867 = (i_25839 + (2));
var G__25868 = next_obj_25843;
i_25839 = G__25867;
obj_25840 = G__25868;
continue;

break;
case (1):
if((!((next_obj_25843 == null)))){
var G__25869 = (i_25839 + (2));
var G__25870 = next_obj_25843;
i_25839 = G__25869;
obj_25840 = G__25870;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_25843 == null)))){
var G__25871 = (i_25839 + (2));
var G__25872 = next_obj_25843;
i_25839 = G__25871;
obj_25840 = G__25872;
continue;
} else {
var G__25873 = (i_25839 + (2));
var G__25874 = oops.core.punch_key_dynamically_BANG_.call(null,obj_25840,key_25842);
i_25839 = G__25873;
obj_25840 = G__25874;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25847)].join('')));

}
} else {
return obj_25840;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_25889 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_25889,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_25876 = (function (){var path_25875 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_25875,(1));

return path_25875;
})();
var len_25879 = path_25876.length;
var parent_obj_path_25880 = path_25876.slice((0),(len_25879 - (2)));
var key_25877 = (path_25876[(len_25879 - (1))]);
var mode_25878 = (path_25876[(len_25879 - (2))]);
var parent_obj_25881 = (function (){var path_25882 = parent_obj_path_25880;
var len_25883 = path_25882.length;
var i_25884 = (0);
var obj_25885 = obj;
while(true){
if((i_25884 < len_25883)){
var mode_25886 = (path_25882[i_25884]);
var key_25887 = (path_25882[(i_25884 + (1))]);
var next_obj_25888 = oops.core.get_key_dynamically.call(null,obj_25885,key_25887,mode_25886);
var G__25890 = mode_25886;
switch (G__25890) {
case (0):
var G__25892 = (i_25884 + (2));
var G__25893 = next_obj_25888;
i_25884 = G__25892;
obj_25885 = G__25893;
continue;

break;
case (1):
if((!((next_obj_25888 == null)))){
var G__25894 = (i_25884 + (2));
var G__25895 = next_obj_25888;
i_25884 = G__25894;
obj_25885 = G__25895;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_25888 == null)))){
var G__25896 = (i_25884 + (2));
var G__25897 = next_obj_25888;
i_25884 = G__25896;
obj_25885 = G__25897;
continue;
} else {
var G__25898 = (i_25884 + (2));
var G__25899 = oops.core.punch_key_dynamically_BANG_.call(null,obj_25885,key_25887);
i_25884 = G__25898;
obj_25885 = G__25899;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25890)].join('')));

}
} else {
return obj_25885;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_25881,key_25877,val,mode_25878);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1610418161306
