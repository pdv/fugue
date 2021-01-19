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
if(cljs.core.truth_(cljs.core.re_find.call(null,/[a-zA-Z]/,cljs.core.first.call(null,(function (){var target_obj_18469 = input_read_event;
var _STAR_runtime_state_STAR__orig_val__18471 = oops.state._STAR_runtime_state_STAR_;
var _STAR_runtime_state_STAR__temp_val__18472 = oops.state.prepare_state.call(null,target_obj_18469,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});
oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__temp_val__18472;

try{var next_obj_18470 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_18469,(0),"text",true,true,false))?(target_obj_18469["text"]):null);
return next_obj_18470;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR__orig_val__18471;
}})())))){
return cm.showHint(({"completeSingle": false}));
} else {
return null;
}
});
fugue.ide.editor.editor = (function fugue$ide$editor$editor(init,name,focused,on_change,on_selection,cm_options){
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

var G__18475 = cm;
G__18475.on("change",((function (G__18475,node,settings,cm,codemirror){
return (function (p1__18473_SHARP_){
return on_change.call(null,p1__18473_SHARP_.getValue());
});})(G__18475,node,settings,cm,codemirror))
);

G__18475.on("cursorActivity",((function (G__18475,node,settings,cm,codemirror){
return (function (p1__18474_SHARP_){
return on_selection.call(null,p1__18474_SHARP_.getSelection());
});})(G__18475,node,settings,cm,codemirror))
);

G__18475.on("inputRead",fugue.ide.editor.maybe_show_hint);

return G__18475;
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
var vec__18476 = old_argv;
var _ = cljs.core.nth.call(null,vec__18476,(0),null);
var old_text = cljs.core.nth.call(null,vec__18476,(1),null);
var old_name = cljs.core.nth.call(null,vec__18476,(2),null);
var was_focused = cljs.core.nth.call(null,vec__18476,(3),null);
var ___$1 = cljs.core.nth.call(null,vec__18476,(4),null);
var ___$2 = cljs.core.nth.call(null,vec__18476,(5),null);
var old_cm_options = cljs.core.nth.call(null,vec__18476,(6),null);
var vec__18479 = reagent.core.argv.call(null,this$);
var ___$3 = cljs.core.nth.call(null,vec__18479,(0),null);
var new_text = cljs.core.nth.call(null,vec__18479,(1),null);
var new_name = cljs.core.nth.call(null,vec__18479,(2),null);
var is_focused = cljs.core.nth.call(null,vec__18479,(3),null);
var ___$4 = cljs.core.nth.call(null,vec__18479,(4),null);
var ___$5 = cljs.core.nth.call(null,vec__18479,(5),null);
var new_cm_options = cljs.core.nth.call(null,vec__18479,(6),null);
if(cljs.core.truth_(is_focused)){
} else {
cljs.core.deref.call(null,codemirror).display.input.blur();
}

if(((cljs.core.not_EQ_.call(null,old_name,new_name)) || (((cljs.core.not.call(null,is_focused)) && (cljs.core.not_EQ_.call(null,old_text,new_text)))))){
cljs.core.deref.call(null,codemirror).setValue(new_text);
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

var seq__18482 = cljs.core.seq.call(null,new_cm_options);
var chunk__18483 = null;
var count__18484 = (0);
var i__18485 = (0);
while(true){
if((i__18485 < count__18484)){
var vec__18492 = cljs.core._nth.call(null,chunk__18483,i__18485);
var key = cljs.core.nth.call(null,vec__18492,(0),null);
var value = cljs.core.nth.call(null,vec__18492,(1),null);
if(cljs.core.not_EQ_.call(null,value,cljs.core.get.call(null,old_cm_options,key))){
cljs.core.deref.call(null,codemirror).setOption(cljs.core.clj__GT_js.call(null,key),value);
} else {
}


var G__18498 = seq__18482;
var G__18499 = chunk__18483;
var G__18500 = count__18484;
var G__18501 = (i__18485 + (1));
seq__18482 = G__18498;
chunk__18483 = G__18499;
count__18484 = G__18500;
i__18485 = G__18501;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__18482);
if(temp__5720__auto__){
var seq__18482__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18482__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18482__$1);
var G__18502 = cljs.core.chunk_rest.call(null,seq__18482__$1);
var G__18503 = c__4550__auto__;
var G__18504 = cljs.core.count.call(null,c__4550__auto__);
var G__18505 = (0);
seq__18482 = G__18502;
chunk__18483 = G__18503;
count__18484 = G__18504;
i__18485 = G__18505;
continue;
} else {
var vec__18495 = cljs.core.first.call(null,seq__18482__$1);
var key = cljs.core.nth.call(null,vec__18495,(0),null);
var value = cljs.core.nth.call(null,vec__18495,(1),null);
if(cljs.core.not_EQ_.call(null,value,cljs.core.get.call(null,old_cm_options,key))){
cljs.core.deref.call(null,codemirror).setOption(cljs.core.clj__GT_js.call(null,key),value);
} else {
}


var G__18506 = cljs.core.next.call(null,seq__18482__$1);
var G__18507 = null;
var G__18508 = (0);
var G__18509 = (0);
seq__18482 = G__18506;
chunk__18483 = G__18507;
count__18484 = G__18508;
i__18485 = G__18509;
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
fugue.ide.editor.output_box = (function fugue$ide$editor$output_box(p__18510){
var map__18511 = p__18510;
var map__18511__$1 = (((((!((map__18511 == null))))?(((((map__18511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18511):map__18511);
var value = cljs.core.get.call(null,map__18511__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__18511__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return fugue.ide.editor.repl_out.call(null,(cljs.core.truth_(error)?new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(cljs.repl.Error__GT_map.call(null,error)):(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18513_18517 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18514_18518 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18515_18519 = true;
var _STAR_print_fn_STAR__temp_val__18516_18520 = ((function (_STAR_print_newline_STAR__orig_val__18513_18517,_STAR_print_fn_STAR__orig_val__18514_18518,_STAR_print_newline_STAR__temp_val__18515_18519,sb__4661__auto__,map__18511,map__18511__$1,value,error){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18513_18517,_STAR_print_fn_STAR__orig_val__18514_18518,_STAR_print_newline_STAR__temp_val__18515_18519,sb__4661__auto__,map__18511,map__18511__$1,value,error))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18515_18519;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18516_18520;

try{cljs.pprint.pprint.call(null,value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18514_18518;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18513_18517;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()));
});

//# sourceMappingURL=editor.js.map?rel=1611088689061
