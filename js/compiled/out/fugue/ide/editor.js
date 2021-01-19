// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide.editor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('oops.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('cljs.repl');
CodeMirror.registerHelper("hintWords","clojure",["midi","audio","buffer","render"]);
fugue.ide.editor.maybe_show_hint = (function fugue$ide$editor$maybe_show_hint(cm,input_read_event){
if(cljs.core.truth_(cljs.core.re_find.call(null,/[a-zA-Z]/,cljs.core.first.call(null,(function (){var target_obj_18458 = input_read_event;
var _STAR_runtime_state_STAR__orig_val__18460 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__18461 = oops.state.prepare_state.call(null,target_obj_18458,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__18461;

try{var next_obj_18459 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_18458,(0),"text",true,true,false))?(target_obj_18458["text"]):null);
return next_obj_18459;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__18460;
}})())))){
return cm.showHint(({"completeSingle": false}));
} else {
return null;
}
});
fugue.ide.editor.editor = (function fugue$ide$editor$editor(init,focused,on_change,on_selection,cm_options){
var codemirror = cljs.core.volatile_BANG_.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render","render",-1408033454),((function (codemirror){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.editor","textarea.editor",-170637094),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-value","default-value",232220170),init], null)], null);
});})(codemirror))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (codemirror){
return (function (this$){
var node = reagent.dom.dom_node.call(null,this$);
var settings = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,cm_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"clojure"], null)));
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

var G__18464 = cm;
G__18464.on("change",((function (G__18464,node,settings,cm,codemirror){
return (function (p1__18462_SHARP_){
return on_change.call(null,p1__18462_SHARP_.getValue());
});})(G__18464,node,settings,cm,codemirror))
);

G__18464.on("cursorActivity",((function (G__18464,node,settings,cm,codemirror){
return (function (p1__18463_SHARP_){
return on_selection.call(null,p1__18463_SHARP_.getSelection());
});})(G__18464,node,settings,cm,codemirror))
);

G__18464.on("inputRead",fugue.ide.editor.maybe_show_hint);

return G__18464;
});})(codemirror))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (codemirror){
return (function (){
var temp__5718__auto__ = cljs.core.deref.call(null,codemirror);
if(cljs.core.truth_(temp__5718__auto__)){
var cm = temp__5718__auto__;
return cm.toTextArea();
} else {
return null;
}
});})(codemirror))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (codemirror){
return (function (this$,old_argv){
var argv = reagent.core.argv.call(null,this$);
var new_text = cljs.core.last.call(null,cljs.core.drop_last.call(null,(4),argv));
var is_focused = cljs.core.last.call(null,cljs.core.drop_last.call(null,(3),argv));
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

var seq__18465 = cljs.core.seq.call(null,new_cm_options);
var chunk__18466 = null;
var count__18467 = (0);
var i__18468 = (0);
while(true){
if((i__18468 < count__18467)){
var vec__18475 = cljs.core._nth.call(null,chunk__18466,i__18468);
var key = cljs.core.nth.call(null,vec__18475,(0),null);
var value = cljs.core.nth.call(null,vec__18475,(1),null);
if(cljs.core.not_EQ_.call(null,value,cljs.core.get.call(null,old_cm_options,key))){
cljs.core.deref.call(null,codemirror).setOption(cljs.core.clj__GT_js.call(null,key),value);
} else {
}


var G__18481 = seq__18465;
var G__18482 = chunk__18466;
var G__18483 = count__18467;
var G__18484 = (i__18468 + (1));
seq__18465 = G__18481;
chunk__18466 = G__18482;
count__18467 = G__18483;
i__18468 = G__18484;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__18465);
if(temp__5720__auto__){
var seq__18465__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18465__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18465__$1);
var G__18485 = cljs.core.chunk_rest.call(null,seq__18465__$1);
var G__18486 = c__4550__auto__;
var G__18487 = cljs.core.count.call(null,c__4550__auto__);
var G__18488 = (0);
seq__18465 = G__18485;
chunk__18466 = G__18486;
count__18467 = G__18487;
i__18468 = G__18488;
continue;
} else {
var vec__18478 = cljs.core.first.call(null,seq__18465__$1);
var key = cljs.core.nth.call(null,vec__18478,(0),null);
var value = cljs.core.nth.call(null,vec__18478,(1),null);
if(cljs.core.not_EQ_.call(null,value,cljs.core.get.call(null,old_cm_options,key))){
cljs.core.deref.call(null,codemirror).setOption(cljs.core.clj__GT_js.call(null,key),value);
} else {
}


var G__18489 = cljs.core.next.call(null,seq__18465__$1);
var G__18490 = null;
var G__18491 = (0);
var G__18492 = (0);
seq__18465 = G__18489;
chunk__18466 = G__18490;
count__18467 = G__18491;
i__18468 = G__18492;
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
fugue.ide.editor.repl_out = (function fugue$ide$editor$repl_out(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.repl-out","textarea.repl-out",-328725189),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
fugue.ide.editor.output_box = (function fugue$ide$editor$output_box(p__18493){
var map__18494 = p__18493;
var map__18494__$1 = (((((!((map__18494 == null))))?(((((map__18494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18494):map__18494);
var value = cljs.core.get.call(null,map__18494__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__18494__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return fugue.ide.editor.repl_out.call(null,(cljs.core.truth_(error)?new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(cljs.repl.Error__GT_map.call(null,error)):(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18496_18500 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18497_18501 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18498_18502 = true;
var _STAR_print_fn_STAR__temp_val__18499_18503 = ((function (_STAR_print_newline_STAR__orig_val__18496_18500,_STAR_print_fn_STAR__orig_val__18497_18501,_STAR_print_newline_STAR__temp_val__18498_18502,sb__4661__auto__,map__18494,map__18494__$1,value,error){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18496_18500,_STAR_print_fn_STAR__orig_val__18497_18501,_STAR_print_newline_STAR__temp_val__18498_18502,sb__4661__auto__,map__18494,map__18494__$1,value,error))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18498_18502;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18499_18503;

try{cljs.pprint.pprint.call(null,value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18497_18501;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18496_18500;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()));
});

//# sourceMappingURL=editor.js.map?rel=1611069722701
