// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.editor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('oops.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('cljs.repl');
CodeMirror.registerHelper("hintWords","clojure",["midi","audio","buffer","render"]);
fugue.editor.editor = (function fugue$editor$editor(init,on_change,on_selection_change,on_shortcut,settings){
var codemirror = cljs.core.volatile_BANG_.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",-1408033454),((function (codemirror){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.editor","textarea.editor",-170637094),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-value","default-value",232220170),init], null)], null);
});})(codemirror))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (codemirror){
return (function (this$){
var node = reagent.dom.dom_node.call(null,this$);
var settings__$1 = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,settings,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),"clojure",new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true], null)));
var cm = CodeMirror.fromTextArea(node,settings__$1);
cm.setOption("extraKeys",({"Shift-Ctrl-Space": on_shortcut}));

cm.on("change",((function (node,settings__$1,cm,codemirror){
return (function (p1__38380_SHARP_){
return on_change.call(null,p1__38380_SHARP_.getValue());
});})(node,settings__$1,cm,codemirror))
);

cm.on("cursorActivity",((function (node,settings__$1,cm,codemirror){
return (function (p1__38381_SHARP_){
return on_selection_change.call(null,p1__38381_SHARP_.getSelection());
});})(node,settings__$1,cm,codemirror))
);

cm.on("inputRead",((function (node,settings__$1,cm,codemirror){
return (function (_,event){
if(cljs.core.truth_(cljs.core.re_find.call(null,/[a-zA-Z]/,cljs.core.first.call(null,(function (){var target_obj_38382 = event;
var _STAR_runtime_state_STAR__orig_val__38384 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__38385 = oops.state.prepare_state.call(null,target_obj_38382,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__38385;

try{var next_obj_38383 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38382,(0),"text",true,true,false))?(target_obj_38382["text"]):null);
return next_obj_38383;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__38384;
}})())))){
return cm.showHint(({"completeSingle": false}));
} else {
return null;
}
});})(node,settings__$1,cm,codemirror))
);

cljs.core.vreset_BANG_.call(null,codemirror,cm);

return setTimeout(((function (node,settings__$1,cm,codemirror){
return (function (){
return on_change.call(null,init);
});})(node,settings__$1,cm,codemirror))
,(5));
});})(codemirror))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (codemirror){
return (function (this$,old_argv){
var seq__38386 = cljs.core.seq.call(null,cljs.core.last.call(null,reagent.core.argv.call(null,this$)));
var chunk__38387 = null;
var count__38388 = (0);
var i__38389 = (0);
while(true){
if((i__38389 < count__38388)){
var vec__38396 = cljs.core._nth.call(null,chunk__38387,i__38389);
var key = cljs.core.nth.call(null,vec__38396,(0),null);
var value = cljs.core.nth.call(null,vec__38396,(1),null);
cljs.core.deref.call(null,codemirror).setOption(cljs.core.clj__GT_js.call(null,key),value);


var G__38402 = seq__38386;
var G__38403 = chunk__38387;
var G__38404 = count__38388;
var G__38405 = (i__38389 + (1));
seq__38386 = G__38402;
chunk__38387 = G__38403;
count__38388 = G__38404;
i__38389 = G__38405;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__38386);
if(temp__5720__auto__){
var seq__38386__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38386__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__38386__$1);
var G__38406 = cljs.core.chunk_rest.call(null,seq__38386__$1);
var G__38407 = c__4550__auto__;
var G__38408 = cljs.core.count.call(null,c__4550__auto__);
var G__38409 = (0);
seq__38386 = G__38406;
chunk__38387 = G__38407;
count__38388 = G__38408;
i__38389 = G__38409;
continue;
} else {
var vec__38399 = cljs.core.first.call(null,seq__38386__$1);
var key = cljs.core.nth.call(null,vec__38399,(0),null);
var value = cljs.core.nth.call(null,vec__38399,(1),null);
cljs.core.deref.call(null,codemirror).setOption(cljs.core.clj__GT_js.call(null,key),value);


var G__38410 = cljs.core.next.call(null,seq__38386__$1);
var G__38411 = null;
var G__38412 = (0);
var G__38413 = (0);
seq__38386 = G__38410;
chunk__38387 = G__38411;
count__38388 = G__38412;
i__38389 = G__38413;
continue;
}
} else {
return null;
}
}
break;
}
});})(codemirror))
], null));
});
fugue.editor.repl_out = (function fugue$editor$repl_out(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.repl-out","textarea.repl-out",-328725189),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
fugue.editor.output_box = (function fugue$editor$output_box(p__38414){
var map__38415 = p__38414;
var map__38415__$1 = (((((!((map__38415 == null))))?(((((map__38415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38415):map__38415);
var value = cljs.core.get.call(null,map__38415__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__38415__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return fugue.editor.repl_out.call(null,(cljs.core.truth_(error)?new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(cljs.repl.Error__GT_map.call(null,error)):(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38417_38421 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38418_38422 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38419_38423 = true;
var _STAR_print_fn_STAR__temp_val__38420_38424 = ((function (_STAR_print_newline_STAR__orig_val__38417_38421,_STAR_print_fn_STAR__orig_val__38418_38422,_STAR_print_newline_STAR__temp_val__38419_38423,sb__4661__auto__,map__38415,map__38415__$1,value,error){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__38417_38421,_STAR_print_fn_STAR__orig_val__38418_38422,_STAR_print_newline_STAR__temp_val__38419_38423,sb__4661__auto__,map__38415,map__38415__$1,value,error))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38419_38423;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38420_38424;

try{cljs.pprint.pprint.call(null,value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38418_38422;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38417_38421;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()));
});

//# sourceMappingURL=editor.js.map?rel=1610304480070
