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
return (function (p1__38336_SHARP_){
return on_change.call(null,p1__38336_SHARP_.getValue());
});})(node,settings__$1,cm,codemirror))
);

cm.on("cursorActivity",((function (node,settings__$1,cm,codemirror){
return (function (p1__38337_SHARP_){
return on_selection_change.call(null,p1__38337_SHARP_.getSelection());
});})(node,settings__$1,cm,codemirror))
);

cm.on("inputRead",((function (node,settings__$1,cm,codemirror){
return (function (_,event){
if(cljs.core.truth_(cljs.core.re_find.call(null,/[a-zA-Z]/,cljs.core.first.call(null,(function (){var target_obj_38338 = event;
var _STAR_runtime_state_STAR__orig_val__38340 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__38341 = oops.state.prepare_state.call(null,target_obj_38338,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__38341;

try{var next_obj_38339 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38338,(0),"text",true,true,false))?(target_obj_38338["text"]):null);
return next_obj_38339;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__38340;
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
var argv = reagent.core.argv.call(null,this$);
var old_init_text = cljs.core.second.call(null,old_argv);
var new_init_text = cljs.core.second.call(null,argv);
var new_options = cljs.core.last.call(null,argv);
if(cljs.core.not_EQ_.call(null,old_init_text,new_init_text)){
cljs.core.deref.call(null,codemirror).setValue(new_init_text);
} else {
}

var seq__38342 = cljs.core.seq.call(null,new_options);
var chunk__38343 = null;
var count__38344 = (0);
var i__38345 = (0);
while(true){
if((i__38345 < count__38344)){
var vec__38352 = cljs.core._nth.call(null,chunk__38343,i__38345);
var key = cljs.core.nth.call(null,vec__38352,(0),null);
var value = cljs.core.nth.call(null,vec__38352,(1),null);
cljs.core.deref.call(null,codemirror).setOption(cljs.core.clj__GT_js.call(null,key),value);


var G__38358 = seq__38342;
var G__38359 = chunk__38343;
var G__38360 = count__38344;
var G__38361 = (i__38345 + (1));
seq__38342 = G__38358;
chunk__38343 = G__38359;
count__38344 = G__38360;
i__38345 = G__38361;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__38342);
if(temp__5720__auto__){
var seq__38342__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38342__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__38342__$1);
var G__38362 = cljs.core.chunk_rest.call(null,seq__38342__$1);
var G__38363 = c__4550__auto__;
var G__38364 = cljs.core.count.call(null,c__4550__auto__);
var G__38365 = (0);
seq__38342 = G__38362;
chunk__38343 = G__38363;
count__38344 = G__38364;
i__38345 = G__38365;
continue;
} else {
var vec__38355 = cljs.core.first.call(null,seq__38342__$1);
var key = cljs.core.nth.call(null,vec__38355,(0),null);
var value = cljs.core.nth.call(null,vec__38355,(1),null);
cljs.core.deref.call(null,codemirror).setOption(cljs.core.clj__GT_js.call(null,key),value);


var G__38366 = cljs.core.next.call(null,seq__38342__$1);
var G__38367 = null;
var G__38368 = (0);
var G__38369 = (0);
seq__38342 = G__38366;
chunk__38343 = G__38367;
count__38344 = G__38368;
i__38345 = G__38369;
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
fugue.editor.output_box = (function fugue$editor$output_box(p__38370){
var map__38371 = p__38370;
var map__38371__$1 = (((((!((map__38371 == null))))?(((((map__38371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38371):map__38371);
var value = cljs.core.get.call(null,map__38371__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__38371__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return fugue.editor.repl_out.call(null,(cljs.core.truth_(error)?new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(cljs.repl.Error__GT_map.call(null,error)):(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38373_38377 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38374_38378 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38375_38379 = true;
var _STAR_print_fn_STAR__temp_val__38376_38380 = ((function (_STAR_print_newline_STAR__orig_val__38373_38377,_STAR_print_fn_STAR__orig_val__38374_38378,_STAR_print_newline_STAR__temp_val__38375_38379,sb__4661__auto__,map__38371,map__38371__$1,value,error){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__38373_38377,_STAR_print_fn_STAR__orig_val__38374_38378,_STAR_print_newline_STAR__temp_val__38375_38379,sb__4661__auto__,map__38371,map__38371__$1,value,error))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38375_38379;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38376_38380;

try{cljs.pprint.pprint.call(null,value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38374_38378;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38373_38377;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()));
});

//# sourceMappingURL=editor.js.map?rel=1610339738810
