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

var G__28051 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__28051)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__28051)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__28051)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28051)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__28052 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__28052)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__28052)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__28052)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28052)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28060 = arguments.length;
var i__4731__auto___28061 = (0);
while(true){
if((i__4731__auto___28061 < len__4730__auto___28060)){
args__4736__auto__.push((arguments[i__4731__auto___28061]));

var G__28062 = (i__4731__auto___28061 + (1));
i__4731__auto___28061 = G__28062;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__28055){
var vec__28056 = p__28055;
var info = cljs.core.nth.call(null,vec__28056,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__28059_28063 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__28059_28063)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__28059_28063)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__28059_28063)){
} else {
if(cljs.core._EQ_.call(null,null,G__28059_28063)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28059_28063)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq28053){
var G__28054 = cljs.core.first.call(null,seq28053);
var seq28053__$1 = cljs.core.next.call(null,seq28053);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28054,seq28053__$1);
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
var descriptor_28064 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_28064);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_28065 = temp__5722__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_28065,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
var child_factory_28067 = oops.config.get_child_factory.call(null);
var child_factory_28067__$1 = (function (){var G__28068 = child_factory_28067;
var G__28068__$1 = (((G__28068 instanceof cljs.core.Keyword))?G__28068.fqn:null);
switch (G__28068__$1) {
case "js-obj":
return ((function (G__28068,G__28068__$1,child_factory_28067){
return (function (){
return ({});
});
;})(G__28068,G__28068__$1,child_factory_28067))

break;
case "js-array":
return ((function (G__28068,G__28068__$1,child_factory_28067){
return (function (){
return [];
});
;})(G__28068,G__28068__$1,child_factory_28067))

break;
default:
return child_factory_28067;

}
})();

var child_obj_28066 = child_factory_28067__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_28066);
} else {
}

return child_obj_28066;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_28072 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_28072);

return selector_path_28072;
} else {
var selector_path_28073 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_28073);

return selector_path_28073;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_28074 = temp__5724__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_28074);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_28083 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_28083,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_28076 = (function (){var path_28075 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_28075,(0));

return path_28075;
})();
var len_28077 = path_28076.length;
var i_28078 = (0);
var obj_28079 = obj;
while(true){
if((i_28078 < len_28077)){
var mode_28080 = (path_28076[i_28078]);
var key_28081 = (path_28076[(i_28078 + (1))]);
var next_obj_28082 = oops.core.get_key_dynamically.call(null,obj_28079,key_28081,mode_28080);
var G__28084 = mode_28080;
switch (G__28084) {
case (0):
var G__28086 = (i_28078 + (2));
var G__28087 = next_obj_28082;
i_28078 = G__28086;
obj_28079 = G__28087;
continue;

break;
case (1):
if((!((next_obj_28082 == null)))){
var G__28088 = (i_28078 + (2));
var G__28089 = next_obj_28082;
i_28078 = G__28088;
obj_28079 = G__28089;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28082 == null)))){
var G__28090 = (i_28078 + (2));
var G__28091 = next_obj_28082;
i_28078 = G__28090;
obj_28079 = G__28091;
continue;
} else {
var G__28092 = (i_28078 + (2));
var G__28093 = oops.core.punch_key_dynamically_BANG_.call(null,obj_28079,key_28081);
i_28078 = G__28092;
obj_28079 = G__28093;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28084)].join('')));

}
} else {
return obj_28079;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_28119 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_28119,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_28095 = (function (){var path_28094 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_28094,(0));

return path_28094;
})();
var len_28096 = path_28095.length;
if((len_28096 < (4))){
return [obj,(function (){var path_28098 = path_28095;
var len_28099 = path_28098.length;
var i_28100 = (0);
var obj_28101 = obj;
while(true){
if((i_28100 < len_28099)){
var mode_28102 = (path_28098[i_28100]);
var key_28103 = (path_28098[(i_28100 + (1))]);
var next_obj_28104 = oops.core.get_key_dynamically.call(null,obj_28101,key_28103,mode_28102);
var G__28120 = mode_28102;
switch (G__28120) {
case (0):
var G__28124 = (i_28100 + (2));
var G__28125 = next_obj_28104;
i_28100 = G__28124;
obj_28101 = G__28125;
continue;

break;
case (1):
if((!((next_obj_28104 == null)))){
var G__28126 = (i_28100 + (2));
var G__28127 = next_obj_28104;
i_28100 = G__28126;
obj_28101 = G__28127;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28104 == null)))){
var G__28128 = (i_28100 + (2));
var G__28129 = next_obj_28104;
i_28100 = G__28128;
obj_28101 = G__28129;
continue;
} else {
var G__28130 = (i_28100 + (2));
var G__28131 = oops.core.punch_key_dynamically_BANG_.call(null,obj_28101,key_28103);
i_28100 = G__28130;
obj_28101 = G__28131;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28120)].join('')));

}
} else {
return obj_28101;
}
break;
}
})()];
} else {
var target_obj_28097 = (function (){var path_28105 = path_28095.slice((0),(len_28096 - (2)));
var len_28106 = path_28105.length;
var i_28107 = (0);
var obj_28108 = obj;
while(true){
if((i_28107 < len_28106)){
var mode_28109 = (path_28105[i_28107]);
var key_28110 = (path_28105[(i_28107 + (1))]);
var next_obj_28111 = oops.core.get_key_dynamically.call(null,obj_28108,key_28110,mode_28109);
var G__28121 = mode_28109;
switch (G__28121) {
case (0):
var G__28133 = (i_28107 + (2));
var G__28134 = next_obj_28111;
i_28107 = G__28133;
obj_28108 = G__28134;
continue;

break;
case (1):
if((!((next_obj_28111 == null)))){
var G__28135 = (i_28107 + (2));
var G__28136 = next_obj_28111;
i_28107 = G__28135;
obj_28108 = G__28136;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28111 == null)))){
var G__28137 = (i_28107 + (2));
var G__28138 = next_obj_28111;
i_28107 = G__28137;
obj_28108 = G__28138;
continue;
} else {
var G__28139 = (i_28107 + (2));
var G__28140 = oops.core.punch_key_dynamically_BANG_.call(null,obj_28108,key_28110);
i_28107 = G__28139;
obj_28108 = G__28140;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28121)].join('')));

}
} else {
return obj_28108;
}
break;
}
})();
return [target_obj_28097,(function (){var path_28112 = [(path_28095[(len_28096 - (2))]),(path_28095[(len_28096 - (1))])];
var len_28113 = path_28112.length;
var i_28114 = (0);
var obj_28115 = target_obj_28097;
while(true){
if((i_28114 < len_28113)){
var mode_28116 = (path_28112[i_28114]);
var key_28117 = (path_28112[(i_28114 + (1))]);
var next_obj_28118 = oops.core.get_key_dynamically.call(null,obj_28115,key_28117,mode_28116);
var G__28122 = mode_28116;
switch (G__28122) {
case (0):
var G__28142 = (i_28114 + (2));
var G__28143 = next_obj_28118;
i_28114 = G__28142;
obj_28115 = G__28143;
continue;

break;
case (1):
if((!((next_obj_28118 == null)))){
var G__28144 = (i_28114 + (2));
var G__28145 = next_obj_28118;
i_28114 = G__28144;
obj_28115 = G__28145;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28118 == null)))){
var G__28146 = (i_28114 + (2));
var G__28147 = next_obj_28118;
i_28114 = G__28146;
obj_28115 = G__28147;
continue;
} else {
var G__28148 = (i_28114 + (2));
var G__28149 = oops.core.punch_key_dynamically_BANG_.call(null,obj_28115,key_28117);
i_28114 = G__28148;
obj_28115 = G__28149;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28122)].join('')));

}
} else {
return obj_28115;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_28164 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_28164,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_28151 = (function (){var path_28150 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_28150,(1));

return path_28150;
})();
var len_28154 = path_28151.length;
var parent_obj_path_28155 = path_28151.slice((0),(len_28154 - (2)));
var key_28152 = (path_28151[(len_28154 - (1))]);
var mode_28153 = (path_28151[(len_28154 - (2))]);
var parent_obj_28156 = (function (){var path_28157 = parent_obj_path_28155;
var len_28158 = path_28157.length;
var i_28159 = (0);
var obj_28160 = obj;
while(true){
if((i_28159 < len_28158)){
var mode_28161 = (path_28157[i_28159]);
var key_28162 = (path_28157[(i_28159 + (1))]);
var next_obj_28163 = oops.core.get_key_dynamically.call(null,obj_28160,key_28162,mode_28161);
var G__28165 = mode_28161;
switch (G__28165) {
case (0):
var G__28167 = (i_28159 + (2));
var G__28168 = next_obj_28163;
i_28159 = G__28167;
obj_28160 = G__28168;
continue;

break;
case (1):
if((!((next_obj_28163 == null)))){
var G__28169 = (i_28159 + (2));
var G__28170 = next_obj_28163;
i_28159 = G__28169;
obj_28160 = G__28170;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_28163 == null)))){
var G__28171 = (i_28159 + (2));
var G__28172 = next_obj_28163;
i_28159 = G__28171;
obj_28160 = G__28172;
continue;
} else {
var G__28173 = (i_28159 + (2));
var G__28174 = oops.core.punch_key_dynamically_BANG_.call(null,obj_28160,key_28162);
i_28159 = G__28173;
obj_28160 = G__28174;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28165)].join('')));

}
} else {
return obj_28160;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_28156,key_28152,val,mode_28153);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1600808341160
