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
fugue.boxes.editor.editor = (function fugue$boxes$editor$editor(init,focused,p__18955,cm_options){
var map__18956 = p__18955;
var map__18956__$1 = (((((!((map__18956 == null))))?(((((map__18956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18956):map__18956);
var on_change = cljs.core.get.call(null,map__18956__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_selection_change = cljs.core.get.call(null,map__18956__$1,new cljs.core.Keyword(null,"on-selection-change","on-selection-change",-1774232910));
var on_shortcut = cljs.core.get.call(null,map__18956__$1,new cljs.core.Keyword(null,"on-shortcut","on-shortcut",-393863730));
var codemirror = cljs.core.volatile_BANG_.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render","render",-1408033454),((function (codemirror,map__18956,map__18956__$1,on_change,on_selection_change,on_shortcut){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.editor","textarea.editor",-170637094),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-value","default-value",232220170),init], null)], null);
});})(codemirror,map__18956,map__18956__$1,on_change,on_selection_change,on_shortcut))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (codemirror,map__18956,map__18956__$1,on_change,on_selection_change,on_shortcut){
return (function (this$){
var node = reagent.dom.dom_node.call(null,this$);
var settings = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,cm_options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),"clojure",new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true], null)));
var cm = CodeMirror.fromTextArea(node,settings);
cljs.core.vreset_BANG_.call(null,codemirror,cm);

if(cljs.core.truth_((function (){var and__4120__auto__ = focused;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,cljs.core.deref.call(null,codemirror).hasFocus());
} else {
return and__4120__auto__;
}
})())){
cljs.core.deref.call(null,codemirror).focus();
} else {
}

var G__18958 = cm;
G__18958.on("change",((function (G__18958,node,settings,cm,codemirror,map__18956,map__18956__$1,on_change,on_selection_change,on_shortcut){
return (function (p1__18954_SHARP_){
return on_change.call(null,p1__18954_SHARP_.getValue());
});})(G__18958,node,settings,cm,codemirror,map__18956,map__18956__$1,on_change,on_selection_change,on_shortcut))
);

G__18958.on("inputRead",fugue.boxes.editor.maybe_show_hint);

G__18958.setOption("extraKeys",({"Shift-Ctrl-Space": on_shortcut}));

return G__18958;
});})(codemirror,map__18956,map__18956__$1,on_change,on_selection_change,on_shortcut))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (codemirror,map__18956,map__18956__$1,on_change,on_selection_change,on_shortcut){
return (function (){
var temp__5718__auto__ = cljs.core.deref.call(null,codemirror);
if(cljs.core.truth_(temp__5718__auto__)){
var cm = temp__5718__auto__;
return cm.toTextArea();
} else {
return null;
}
});})(codemirror,map__18956,map__18956__$1,on_change,on_selection_change,on_shortcut))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (codemirror,map__18956,map__18956__$1,on_change,on_selection_change,on_shortcut){
return (function (this$,old_argv){
var argv = reagent.core.argv.call(null,this$);
var new_text = cljs.core.last.call(null,cljs.core.drop_last.call(null,(3),argv));
var is_focused = cljs.core.last.call(null,cljs.core.drop_last.call(null,(2),argv));
var old_cm_options = cljs.core.last.call(null,old_argv);
var new_cm_options = cljs.core.last.call(null,argv);
if(cljs.core.not.call(null,is_focused)){
cljs.core.deref.call(null,codemirror).setValue(new_text);

cljs.core.deref.call(null,codemirror).display.input.blur();
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = is_focused;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,cljs.core.deref.call(null,codemirror).hasFocus());
} else {
return and__4120__auto__;
}
})())){
cljs.core.deref.call(null,codemirror).focus();
} else {
}

var seq__18959 = cljs.core.seq.call(null,new_cm_options);
var chunk__18960 = null;
var count__18961 = (0);
var i__18962 = (0);
while(true){
if((i__18962 < count__18961)){
var vec__18969 = cljs.core._nth.call(null,chunk__18960,i__18962);
var key = cljs.core.nth.call(null,vec__18969,(0),null);
var value = cljs.core.nth.call(null,vec__18969,(1),null);
if(cljs.core.not_EQ_.call(null,value,cljs.core.get.call(null,old_cm_options,key))){
cljs.core.deref.call(null,codemirror).setOption(cljs.core.clj__GT_js.call(null,key),value);
} else {
}


var G__18975 = seq__18959;
var G__18976 = chunk__18960;
var G__18977 = count__18961;
var G__18978 = (i__18962 + (1));
seq__18959 = G__18975;
chunk__18960 = G__18976;
count__18961 = G__18977;
i__18962 = G__18978;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__18959);
if(temp__5720__auto__){
var seq__18959__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18959__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18959__$1);
var G__18979 = cljs.core.chunk_rest.call(null,seq__18959__$1);
var G__18980 = c__4550__auto__;
var G__18981 = cljs.core.count.call(null,c__4550__auto__);
var G__18982 = (0);
seq__18959 = G__18979;
chunk__18960 = G__18980;
count__18961 = G__18981;
i__18962 = G__18982;
continue;
} else {
var vec__18972 = cljs.core.first.call(null,seq__18959__$1);
var key = cljs.core.nth.call(null,vec__18972,(0),null);
var value = cljs.core.nth.call(null,vec__18972,(1),null);
if(cljs.core.not_EQ_.call(null,value,cljs.core.get.call(null,old_cm_options,key))){
cljs.core.deref.call(null,codemirror).setOption(cljs.core.clj__GT_js.call(null,key),value);
} else {
}


var G__18983 = cljs.core.next.call(null,seq__18959__$1);
var G__18984 = null;
var G__18985 = (0);
var G__18986 = (0);
seq__18959 = G__18983;
chunk__18960 = G__18984;
count__18961 = G__18985;
i__18962 = G__18986;
continue;
}
} else {
return null;
}
}
break;
}
});})(codemirror,map__18956,map__18956__$1,on_change,on_selection_change,on_shortcut))
], null));
});
fugue.boxes.editor.repl_out = (function fugue$boxes$editor$repl_out(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.repl-out","textarea.repl-out",-328725189),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
fugue.boxes.editor.output_box = (function fugue$boxes$editor$output_box(p__18987){
var map__18988 = p__18987;
var map__18988__$1 = (((((!((map__18988 == null))))?(((((map__18988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18988):map__18988);
var value = cljs.core.get.call(null,map__18988__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__18988__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return fugue.boxes.editor.repl_out.call(null,(cljs.core.truth_(error)?new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(cljs.repl.Error__GT_map.call(null,error)):(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18990_18994 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18991_18995 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18992_18996 = true;
var _STAR_print_fn_STAR__temp_val__18993_18997 = ((function (_STAR_print_newline_STAR__orig_val__18990_18994,_STAR_print_fn_STAR__orig_val__18991_18995,_STAR_print_newline_STAR__temp_val__18992_18996,sb__4661__auto__,map__18988,map__18988__$1,value,error){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18990_18994,_STAR_print_fn_STAR__orig_val__18991_18995,_STAR_print_newline_STAR__temp_val__18992_18996,sb__4661__auto__,map__18988,map__18988__$1,value,error))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18992_18996;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18993_18997;

try{cljs.pprint.pprint.call(null,value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18991_18995;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18990_18994;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()));
});

//# sourceMappingURL=editor.js.map?rel=1610907678430
