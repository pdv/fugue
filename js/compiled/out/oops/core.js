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

var G__36197 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__36197)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__36197)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__36197)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36197)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__36198 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__36198)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__36198)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__36198)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36198)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36206 = arguments.length;
var i__4731__auto___36207 = (0);
while(true){
if((i__4731__auto___36207 < len__4730__auto___36206)){
args__4736__auto__.push((arguments[i__4731__auto___36207]));

var G__36208 = (i__4731__auto___36207 + (1));
i__4731__auto___36207 = G__36208;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__36201){
var vec__36202 = p__36201;
var info = cljs.core.nth.call(null,vec__36202,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__36205_36209 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__36205_36209)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__36205_36209)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__36205_36209)){
} else {
if(cljs.core._EQ_.call(null,null,G__36205_36209)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36205_36209)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq36199){
var G__36200 = cljs.core.first.call(null,seq36199);
var seq36199__$1 = cljs.core.next.call(null,seq36199);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36200,seq36199__$1);
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
var descriptor_36210 = temp__5722__auto__;
var temp__5722__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_36210);
if((temp__5722__auto____$1 == null)){
return true;
} else {
var reason_36211 = temp__5722__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_36211,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
var child_factory_36213 = oops.config.get_child_factory.call(null);
var child_factory_36213__$1 = (function (){var G__36214 = child_factory_36213;
var G__36214__$1 = (((G__36214 instanceof cljs.core.Keyword))?G__36214.fqn:null);
switch (G__36214__$1) {
case "js-obj":
return ((function (G__36214,G__36214__$1,child_factory_36213){
return (function (){
return ({});
});
;})(G__36214,G__36214__$1,child_factory_36213))

break;
case "js-array":
return ((function (G__36214,G__36214__$1,child_factory_36213){
return (function (){
return [];
});
;})(G__36214,G__36214__$1,child_factory_36213))

break;
default:
return child_factory_36213;

}
})();

var child_obj_36212 = child_factory_36213__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_36212);
} else {
}

return child_obj_36212;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_36218 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_36218);

return selector_path_36218;
} else {
var selector_path_36219 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_36219);

return selector_path_36219;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5724__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5724__auto__ == null)){
return null;
} else {
var issue_36220 = temp__5724__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_36220);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_36229 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_36229,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_36222 = (function (){var path_36221 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_36221,(0));

return path_36221;
})();
var len_36223 = path_36222.length;
var i_36224 = (0);
var obj_36225 = obj;
while(true){
if((i_36224 < len_36223)){
var mode_36226 = (path_36222[i_36224]);
var key_36227 = (path_36222[(i_36224 + (1))]);
var next_obj_36228 = oops.core.get_key_dynamically.call(null,obj_36225,key_36227,mode_36226);
var G__36230 = mode_36226;
switch (G__36230) {
case (0):
var G__36232 = (i_36224 + (2));
var G__36233 = next_obj_36228;
i_36224 = G__36232;
obj_36225 = G__36233;
continue;

break;
case (1):
if((!((next_obj_36228 == null)))){
var G__36234 = (i_36224 + (2));
var G__36235 = next_obj_36228;
i_36224 = G__36234;
obj_36225 = G__36235;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_36228 == null)))){
var G__36236 = (i_36224 + (2));
var G__36237 = next_obj_36228;
i_36224 = G__36236;
obj_36225 = G__36237;
continue;
} else {
var G__36238 = (i_36224 + (2));
var G__36239 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36225,key_36227);
i_36224 = G__36238;
obj_36225 = G__36239;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36230)].join('')));

}
} else {
return obj_36225;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_36265 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_36265,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_36241 = (function (){var path_36240 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_36240,(0));

return path_36240;
})();
var len_36242 = path_36241.length;
if((len_36242 < (4))){
return [obj,(function (){var path_36244 = path_36241;
var len_36245 = path_36244.length;
var i_36246 = (0);
var obj_36247 = obj;
while(true){
if((i_36246 < len_36245)){
var mode_36248 = (path_36244[i_36246]);
var key_36249 = (path_36244[(i_36246 + (1))]);
var next_obj_36250 = oops.core.get_key_dynamically.call(null,obj_36247,key_36249,mode_36248);
var G__36266 = mode_36248;
switch (G__36266) {
case (0):
var G__36270 = (i_36246 + (2));
var G__36271 = next_obj_36250;
i_36246 = G__36270;
obj_36247 = G__36271;
continue;

break;
case (1):
if((!((next_obj_36250 == null)))){
var G__36272 = (i_36246 + (2));
var G__36273 = next_obj_36250;
i_36246 = G__36272;
obj_36247 = G__36273;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_36250 == null)))){
var G__36274 = (i_36246 + (2));
var G__36275 = next_obj_36250;
i_36246 = G__36274;
obj_36247 = G__36275;
continue;
} else {
var G__36276 = (i_36246 + (2));
var G__36277 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36247,key_36249);
i_36246 = G__36276;
obj_36247 = G__36277;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36266)].join('')));

}
} else {
return obj_36247;
}
break;
}
})()];
} else {
var target_obj_36243 = (function (){var path_36251 = path_36241.slice((0),(len_36242 - (2)));
var len_36252 = path_36251.length;
var i_36253 = (0);
var obj_36254 = obj;
while(true){
if((i_36253 < len_36252)){
var mode_36255 = (path_36251[i_36253]);
var key_36256 = (path_36251[(i_36253 + (1))]);
var next_obj_36257 = oops.core.get_key_dynamically.call(null,obj_36254,key_36256,mode_36255);
var G__36267 = mode_36255;
switch (G__36267) {
case (0):
var G__36279 = (i_36253 + (2));
var G__36280 = next_obj_36257;
i_36253 = G__36279;
obj_36254 = G__36280;
continue;

break;
case (1):
if((!((next_obj_36257 == null)))){
var G__36281 = (i_36253 + (2));
var G__36282 = next_obj_36257;
i_36253 = G__36281;
obj_36254 = G__36282;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_36257 == null)))){
var G__36283 = (i_36253 + (2));
var G__36284 = next_obj_36257;
i_36253 = G__36283;
obj_36254 = G__36284;
continue;
} else {
var G__36285 = (i_36253 + (2));
var G__36286 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36254,key_36256);
i_36253 = G__36285;
obj_36254 = G__36286;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36267)].join('')));

}
} else {
return obj_36254;
}
break;
}
})();
return [target_obj_36243,(function (){var path_36258 = [(path_36241[(len_36242 - (2))]),(path_36241[(len_36242 - (1))])];
var len_36259 = path_36258.length;
var i_36260 = (0);
var obj_36261 = target_obj_36243;
while(true){
if((i_36260 < len_36259)){
var mode_36262 = (path_36258[i_36260]);
var key_36263 = (path_36258[(i_36260 + (1))]);
var next_obj_36264 = oops.core.get_key_dynamically.call(null,obj_36261,key_36263,mode_36262);
var G__36268 = mode_36262;
switch (G__36268) {
case (0):
var G__36288 = (i_36260 + (2));
var G__36289 = next_obj_36264;
i_36260 = G__36288;
obj_36261 = G__36289;
continue;

break;
case (1):
if((!((next_obj_36264 == null)))){
var G__36290 = (i_36260 + (2));
var G__36291 = next_obj_36264;
i_36260 = G__36290;
obj_36261 = G__36291;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_36264 == null)))){
var G__36292 = (i_36260 + (2));
var G__36293 = next_obj_36264;
i_36260 = G__36292;
obj_36261 = G__36293;
continue;
} else {
var G__36294 = (i_36260 + (2));
var G__36295 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36261,key_36263);
i_36260 = G__36294;
obj_36261 = G__36295;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36268)].join('')));

}
} else {
return obj_36261;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_36310 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_36310,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_36297 = (function (){var path_36296 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_36296,(1));

return path_36296;
})();
var len_36300 = path_36297.length;
var parent_obj_path_36301 = path_36297.slice((0),(len_36300 - (2)));
var key_36298 = (path_36297[(len_36300 - (1))]);
var mode_36299 = (path_36297[(len_36300 - (2))]);
var parent_obj_36302 = (function (){var path_36303 = parent_obj_path_36301;
var len_36304 = path_36303.length;
var i_36305 = (0);
var obj_36306 = obj;
while(true){
if((i_36305 < len_36304)){
var mode_36307 = (path_36303[i_36305]);
var key_36308 = (path_36303[(i_36305 + (1))]);
var next_obj_36309 = oops.core.get_key_dynamically.call(null,obj_36306,key_36308,mode_36307);
var G__36311 = mode_36307;
switch (G__36311) {
case (0):
var G__36313 = (i_36305 + (2));
var G__36314 = next_obj_36309;
i_36305 = G__36313;
obj_36306 = G__36314;
continue;

break;
case (1):
if((!((next_obj_36309 == null)))){
var G__36315 = (i_36305 + (2));
var G__36316 = next_obj_36309;
i_36305 = G__36315;
obj_36306 = G__36316;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_36309 == null)))){
var G__36317 = (i_36305 + (2));
var G__36318 = next_obj_36309;
i_36305 = G__36317;
obj_36306 = G__36318;
continue;
} else {
var G__36319 = (i_36305 + (2));
var G__36320 = oops.core.punch_key_dynamically_BANG_.call(null,obj_36306,key_36308);
i_36305 = G__36319;
obj_36306 = G__36320;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36311)].join('')));

}
} else {
return obj_36306;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_36302,key_36298,val,mode_36299);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1601341171483
