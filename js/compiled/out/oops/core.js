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

var G__24609 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__24609)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__24609)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__24609)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24609)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__24610 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__24610)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__24610)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__24610)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24610)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24618 = arguments.length;
var i__4731__auto___24619 = (0);
while(true){
if((i__4731__auto___24619 < len__4730__auto___24618)){
args__4736__auto__.push((arguments[i__4731__auto___24619]));

var G__24620 = (i__4731__auto___24619 + (1));
i__4731__auto___24619 = G__24620;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__24613){
var vec__24614 = p__24613;
var info = cljs.core.nth.call(null,vec__24614,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__24617_24621 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__24617_24621)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__24617_24621)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__24617_24621)){
} else {
if(cljs.core._EQ_.call(null,null,G__24617_24621)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24617_24621)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq24611){
var G__24612 = cljs.core.first.call(null,seq24611);
var seq24611__$1 = cljs.core.next.call(null,seq24611);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24612,seq24611__$1);
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
var descriptor_24622 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_24622);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_24623 = temp__5722__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_24623,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
var child_factory_24625 = oops.config.get_child_factory.call(null);
var child_factory_24625__$1 = (function (){var G__24626 = child_factory_24625;
var G__24626__$1 = (((G__24626 instanceof cljs.core.Keyword))?G__24626.fqn:null);
switch (G__24626__$1) {
case "js-obj":
return ((function (G__24626,G__24626__$1,child_factory_24625){
return (function (){
return ({});
});
;})(G__24626,G__24626__$1,child_factory_24625))

break;
case "js-array":
return ((function (G__24626,G__24626__$1,child_factory_24625){
return (function (){
return [];
});
;})(G__24626,G__24626__$1,child_factory_24625))

break;
default:
return child_factory_24625;

}
})();

var child_obj_24624 = child_factory_24625__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_24624);
} else {
}

return child_obj_24624;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_24630 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_24630);

return selector_path_24630;
} else {
var selector_path_24631 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_24631);

return selector_path_24631;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_24632 = temp__5724__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_24632);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_24641 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_24641,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_24634 = (function (){var path_24633 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_24633,(0));

return path_24633;
})();
var len_24635 = path_24634.length;
var i_24636 = (0);
var obj_24637 = obj;
while(true){
if((i_24636 < len_24635)){
var mode_24638 = (path_24634[i_24636]);
var key_24639 = (path_24634[(i_24636 + (1))]);
var next_obj_24640 = oops.core.get_key_dynamically.call(null,obj_24637,key_24639,mode_24638);
var G__24642 = mode_24638;
switch (G__24642) {
case (0):
var G__24644 = (i_24636 + (2));
var G__24645 = next_obj_24640;
i_24636 = G__24644;
obj_24637 = G__24645;
continue;

break;
case (1):
if((!((next_obj_24640 == null)))){
var G__24646 = (i_24636 + (2));
var G__24647 = next_obj_24640;
i_24636 = G__24646;
obj_24637 = G__24647;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24640 == null)))){
var G__24648 = (i_24636 + (2));
var G__24649 = next_obj_24640;
i_24636 = G__24648;
obj_24637 = G__24649;
continue;
} else {
var G__24650 = (i_24636 + (2));
var G__24651 = oops.core.punch_key_dynamically_BANG_.call(null,obj_24637,key_24639);
i_24636 = G__24650;
obj_24637 = G__24651;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24642)].join('')));

}
} else {
return obj_24637;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_24677 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_24677,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_24653 = (function (){var path_24652 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_24652,(0));

return path_24652;
})();
var len_24654 = path_24653.length;
if((len_24654 < (4))){
return [obj,(function (){var path_24656 = path_24653;
var len_24657 = path_24656.length;
var i_24658 = (0);
var obj_24659 = obj;
while(true){
if((i_24658 < len_24657)){
var mode_24660 = (path_24656[i_24658]);
var key_24661 = (path_24656[(i_24658 + (1))]);
var next_obj_24662 = oops.core.get_key_dynamically.call(null,obj_24659,key_24661,mode_24660);
var G__24678 = mode_24660;
switch (G__24678) {
case (0):
var G__24682 = (i_24658 + (2));
var G__24683 = next_obj_24662;
i_24658 = G__24682;
obj_24659 = G__24683;
continue;

break;
case (1):
if((!((next_obj_24662 == null)))){
var G__24684 = (i_24658 + (2));
var G__24685 = next_obj_24662;
i_24658 = G__24684;
obj_24659 = G__24685;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24662 == null)))){
var G__24686 = (i_24658 + (2));
var G__24687 = next_obj_24662;
i_24658 = G__24686;
obj_24659 = G__24687;
continue;
} else {
var G__24688 = (i_24658 + (2));
var G__24689 = oops.core.punch_key_dynamically_BANG_.call(null,obj_24659,key_24661);
i_24658 = G__24688;
obj_24659 = G__24689;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24678)].join('')));

}
} else {
return obj_24659;
}
break;
}
})()];
} else {
var target_obj_24655 = (function (){var path_24663 = path_24653.slice((0),(len_24654 - (2)));
var len_24664 = path_24663.length;
var i_24665 = (0);
var obj_24666 = obj;
while(true){
if((i_24665 < len_24664)){
var mode_24667 = (path_24663[i_24665]);
var key_24668 = (path_24663[(i_24665 + (1))]);
var next_obj_24669 = oops.core.get_key_dynamically.call(null,obj_24666,key_24668,mode_24667);
var G__24679 = mode_24667;
switch (G__24679) {
case (0):
var G__24691 = (i_24665 + (2));
var G__24692 = next_obj_24669;
i_24665 = G__24691;
obj_24666 = G__24692;
continue;

break;
case (1):
if((!((next_obj_24669 == null)))){
var G__24693 = (i_24665 + (2));
var G__24694 = next_obj_24669;
i_24665 = G__24693;
obj_24666 = G__24694;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24669 == null)))){
var G__24695 = (i_24665 + (2));
var G__24696 = next_obj_24669;
i_24665 = G__24695;
obj_24666 = G__24696;
continue;
} else {
var G__24697 = (i_24665 + (2));
var G__24698 = oops.core.punch_key_dynamically_BANG_.call(null,obj_24666,key_24668);
i_24665 = G__24697;
obj_24666 = G__24698;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24679)].join('')));

}
} else {
return obj_24666;
}
break;
}
})();
return [target_obj_24655,(function (){var path_24670 = [(path_24653[(len_24654 - (2))]),(path_24653[(len_24654 - (1))])];
var len_24671 = path_24670.length;
var i_24672 = (0);
var obj_24673 = target_obj_24655;
while(true){
if((i_24672 < len_24671)){
var mode_24674 = (path_24670[i_24672]);
var key_24675 = (path_24670[(i_24672 + (1))]);
var next_obj_24676 = oops.core.get_key_dynamically.call(null,obj_24673,key_24675,mode_24674);
var G__24680 = mode_24674;
switch (G__24680) {
case (0):
var G__24700 = (i_24672 + (2));
var G__24701 = next_obj_24676;
i_24672 = G__24700;
obj_24673 = G__24701;
continue;

break;
case (1):
if((!((next_obj_24676 == null)))){
var G__24702 = (i_24672 + (2));
var G__24703 = next_obj_24676;
i_24672 = G__24702;
obj_24673 = G__24703;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24676 == null)))){
var G__24704 = (i_24672 + (2));
var G__24705 = next_obj_24676;
i_24672 = G__24704;
obj_24673 = G__24705;
continue;
} else {
var G__24706 = (i_24672 + (2));
var G__24707 = oops.core.punch_key_dynamically_BANG_.call(null,obj_24673,key_24675);
i_24672 = G__24706;
obj_24673 = G__24707;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24680)].join('')));

}
} else {
return obj_24673;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_24722 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_24722,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_24709 = (function (){var path_24708 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_24708,(1));

return path_24708;
})();
var len_24712 = path_24709.length;
var parent_obj_path_24713 = path_24709.slice((0),(len_24712 - (2)));
var key_24710 = (path_24709[(len_24712 - (1))]);
var mode_24711 = (path_24709[(len_24712 - (2))]);
var parent_obj_24714 = (function (){var path_24715 = parent_obj_path_24713;
var len_24716 = path_24715.length;
var i_24717 = (0);
var obj_24718 = obj;
while(true){
if((i_24717 < len_24716)){
var mode_24719 = (path_24715[i_24717]);
var key_24720 = (path_24715[(i_24717 + (1))]);
var next_obj_24721 = oops.core.get_key_dynamically.call(null,obj_24718,key_24720,mode_24719);
var G__24723 = mode_24719;
switch (G__24723) {
case (0):
var G__24725 = (i_24717 + (2));
var G__24726 = next_obj_24721;
i_24717 = G__24725;
obj_24718 = G__24726;
continue;

break;
case (1):
if((!((next_obj_24721 == null)))){
var G__24727 = (i_24717 + (2));
var G__24728 = next_obj_24721;
i_24717 = G__24727;
obj_24718 = G__24728;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_24721 == null)))){
var G__24729 = (i_24717 + (2));
var G__24730 = next_obj_24721;
i_24717 = G__24729;
obj_24718 = G__24730;
continue;
} else {
var G__24731 = (i_24717 + (2));
var G__24732 = oops.core.punch_key_dynamically_BANG_.call(null,obj_24718,key_24720);
i_24717 = G__24731;
obj_24718 = G__24732;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24723)].join('')));

}
} else {
return obj_24718;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_24714,key_24710,val,mode_24711);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1601320137540
