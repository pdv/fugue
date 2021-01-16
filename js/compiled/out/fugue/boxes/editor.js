// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.boxes.editor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('oops.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('cljs.repl');
CodeMirror.registerHelper("hintWords","clojure",["midi","audio","buffer","render"]);
fugue.boxes.editor.maybe_show_hint = (function fugue$boxes$editor$maybe_show_hint(cm,input_read_event){
if(cljs.core.truth_(cljs.core.re_find.call(null,/[a-zA-Z]/,cljs.core.first.call(null,(function (){var target_obj_18950 = input_read_event;
var _STAR_runtime_state_STAR__orig_val__18952 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__18953 = oops.state.prepare_state.call(null,target_obj_18950,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__18953;

try{var next_obj_18951 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_18950,(0),"text",true,true,false))?(target_obj_18950["text"]):null);
return next_obj_18951;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__18952;
}})())))){
return cm.showHint(({"completeSingle": false}));
} else {
return null;
}
});
fugue.boxes.editor.editor = (function fugue$boxes$editor$editor(init,focused,p__18956,cm_options){
var map__18957 = p__18956;
var map__18957__$1 = (((((!((map__18957 == null))))?(((((map__18957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18957):map__18957);
var on_change = cljs.core.get.call(null,map__18957__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_selection_change = cljs.core.get.call(null,map__18957__$1,new cljs.core.Keyword(null,"on-selection-change","on-selection-change",-1774232910));
var on_shortcut = cljs.core.get.call(null,map__18957__$1,new cljs.core.Keyword(null,"on-shortcut","on-shortcut",-393863730));
var codemirror = cljs.core.volatile_BANG_.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render","render",-1408033454),((function (codemirror,map__18957,map__18957__$1,on_change,on_selection_change,on_shortcut){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.editor","textarea.editor",-170637094),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-value","default-value",232220170),init], null)], null);
});})(codemirror,map__18957,map__18957__$1,on_change,on_selection_change,on_shortcut))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (codemirror,map__18957,map__18957__$1,on_change,on_selection_change,on_shortcut){
return (function (this$){
var node = reagent.dom.dom_node.call(null,this$);
var settings = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,cm_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),"clojure",new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true], null)));
var cm = CodeMirror.fromTextArea(node,settings);
cljs.core.vreset_BANG_.call(null,codemirror,cm);

var G__18959 = cm;
G__18959.on("change",((function (G__18959,node,settings,cm,codemirror,map__18957,map__18957__$1,on_change,on_selection_change,on_shortcut){
return (function (p1__18954_SHARP_){
return on_change.call(null,p1__18954_SHARP_.getValue());
});})(G__18959,node,settings,cm,codemirror,map__18957,map__18957__$1,on_change,on_selection_change,on_shortcut))
);

G__18959.on("cursorActivity",((function (G__18959,node,settings,cm,codemirror,map__18957,map__18957__$1,on_change,on_selection_change,on_shortcut){
return (function (p1__18955_SHARP_){
return on_selection_change.call(null,p1__18955_SHARP_.getSelection());
});})(G__18959,node,settings,cm,codemirror,map__18957,map__18957__$1,on_change,on_selection_change,on_shortcut))
);

G__18959.on("inputRead",fugue.boxes.editor.maybe_show_hint);

G__18959.setOption("extraKeys",({"Shift-Ctrl-Space": on_shortcut}));

G__18959.focus();

return G__18959;
});})(codemirror,map__18957,map__18957__$1,on_change,on_selection_change,on_shortcut))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (codemirror,map__18957,map__18957__$1,on_change,on_selection_change,on_shortcut){
return (function (){
var temp__5718__auto__ = cljs.core.deref.call(null,codemirror);
if(cljs.core.truth_(temp__5718__auto__)){
var cm = temp__5718__auto__;
return cm.toTextArea();
} else {
return null;
}
});})(codemirror,map__18957,map__18957__$1,on_change,on_selection_change,on_shortcut))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (codemirror,map__18957,map__18957__$1,on_change,on_selection_change,on_shortcut){
return (function (this$,old_argv){
var argv = reagent.core.argv.call(null,this$);
var was_focused = cljs.core.last.call(null,cljs.core.drop_last.call(null,(2),old_argv));
var is_focused = cljs.core.last.call(null,cljs.core.drop_last.call(null,(2),argv));
var old_cm_options = cljs.core.last.call(null,old_argv);
var new_cm_options = cljs.core.last.call(null,argv);
if(cljs.core.truth_((function (){var and__4120__auto__ = was_focused;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,is_focused);
} else {
return and__4120__auto__;
}
})())){
cljs.core.deref.call(null,codemirror).display.input.blur();
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,was_focused);
if(and__4120__auto__){
return is_focused;
} else {
return and__4120__auto__;
}
})())){
cljs.core.deref.call(null,codemirror).focus();
} else {
}

var seq__18960 = cljs.core.seq.call(null,new_cm_options);
var chunk__18961 = null;
var count__18962 = (0);
var i__18963 = (0);
while(true){
if((i__18963 < count__18962)){
var vec__18970 = cljs.core._nth.call(null,chunk__18961,i__18963);
var key = cljs.core.nth.call(null,vec__18970,(0),null);
var value = cljs.core.nth.call(null,vec__18970,(1),null);
if(cljs.core.not_EQ_.call(null,value,cljs.core.get.call(null,old_cm_options,key))){
cljs.core.deref.call(null,codemirror).setOption(cljs.core.clj__GT_js.call(null,key),value);
} else {
}


var G__18976 = seq__18960;
var G__18977 = chunk__18961;
var G__18978 = count__18962;
var G__18979 = (i__18963 + (1));
seq__18960 = G__18976;
chunk__18961 = G__18977;
count__18962 = G__18978;
i__18963 = G__18979;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__18960);
if(temp__5720__auto__){
var seq__18960__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18960__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18960__$1);
var G__18980 = cljs.core.chunk_rest.call(null,seq__18960__$1);
var G__18981 = c__4550__auto__;
var G__18982 = cljs.core.count.call(null,c__4550__auto__);
var G__18983 = (0);
seq__18960 = G__18980;
chunk__18961 = G__18981;
count__18962 = G__18982;
i__18963 = G__18983;
continue;
} else {
var vec__18973 = cljs.core.first.call(null,seq__18960__$1);
var key = cljs.core.nth.call(null,vec__18973,(0),null);
var value = cljs.core.nth.call(null,vec__18973,(1),null);
if(cljs.core.not_EQ_.call(null,value,cljs.core.get.call(null,old_cm_options,key))){
cljs.core.deref.call(null,codemirror).setOption(cljs.core.clj__GT_js.call(null,key),value);
} else {
}


var G__18984 = cljs.core.next.call(null,seq__18960__$1);
var G__18985 = null;
var G__18986 = (0);
var G__18987 = (0);
seq__18960 = G__18984;
chunk__18961 = G__18985;
count__18962 = G__18986;
i__18963 = G__18987;
continue;
}
} else {
return null;
}
}
break;
}
});})(codemirror,map__18957,map__18957__$1,on_change,on_selection_change,on_shortcut))
], null));
});
fugue.boxes.editor.repl_out = (function fugue$boxes$editor$repl_out(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.repl-out","textarea.repl-out",-328725189),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
fugue.boxes.editor.output_box = (function fugue$boxes$editor$output_box(p__18988){
var map__18989 = p__18988;
var map__18989__$1 = (((((!((map__18989 == null))))?(((((map__18989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18989):map__18989);
var value = cljs.core.get.call(null,map__18989__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__18989__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return fugue.boxes.editor.repl_out.call(null,(cljs.core.truth_(error)?new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(cljs.repl.Error__GT_map.call(null,error)):(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18991_18995 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18992_18996 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18993_18997 = true;
var _STAR_print_fn_STAR__temp_val__18994_18998 = ((function (_STAR_print_newline_STAR__orig_val__18991_18995,_STAR_print_fn_STAR__orig_val__18992_18996,_STAR_print_newline_STAR__temp_val__18993_18997,sb__4661__auto__,map__18989,map__18989__$1,value,error){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18991_18995,_STAR_print_fn_STAR__orig_val__18992_18996,_STAR_print_newline_STAR__temp_val__18993_18997,sb__4661__auto__,map__18989,map__18989__$1,value,error))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18993_18997;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18994_18998;

try{cljs.pprint.pprint.call(null,value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18992_18996;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18991_18995;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()));
});

//# sourceMappingURL=editor.js.map?rel=1610837655642
