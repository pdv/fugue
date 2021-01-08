// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.editor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs.pprint');
goog.require('cljs.repl');
fugue.editor.editor = (function fugue$editor$editor(init,on_change,on_selection_change,settings){
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
cm.on("change",((function (node,settings__$1,cm,codemirror){
return (function (p1__38298_SHARP_){
return on_change.call(null,p1__38298_SHARP_.getValue());
});})(node,settings__$1,cm,codemirror))
);

cm.on("cursorActivity",((function (node,settings__$1,cm,codemirror){
return (function (p1__38299_SHARP_){
return on_selection_change.call(null,p1__38299_SHARP_.getSelection());
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
var seq__38300 = cljs.core.seq.call(null,cljs.core.last.call(null,reagent.core.argv.call(null,this$)));
var chunk__38301 = null;
var count__38302 = (0);
var i__38303 = (0);
while(true){
if((i__38303 < count__38302)){
var vec__38310 = cljs.core._nth.call(null,chunk__38301,i__38303);
var key = cljs.core.nth.call(null,vec__38310,(0),null);
var value = cljs.core.nth.call(null,vec__38310,(1),null);
cljs.core.deref.call(null,codemirror).setOption(cljs.core.clj__GT_js.call(null,key),value);


var G__38316 = seq__38300;
var G__38317 = chunk__38301;
var G__38318 = count__38302;
var G__38319 = (i__38303 + (1));
seq__38300 = G__38316;
chunk__38301 = G__38317;
count__38302 = G__38318;
i__38303 = G__38319;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__38300);
if(temp__5720__auto__){
var seq__38300__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38300__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__38300__$1);
var G__38320 = cljs.core.chunk_rest.call(null,seq__38300__$1);
var G__38321 = c__4550__auto__;
var G__38322 = cljs.core.count.call(null,c__4550__auto__);
var G__38323 = (0);
seq__38300 = G__38320;
chunk__38301 = G__38321;
count__38302 = G__38322;
i__38303 = G__38323;
continue;
} else {
var vec__38313 = cljs.core.first.call(null,seq__38300__$1);
var key = cljs.core.nth.call(null,vec__38313,(0),null);
var value = cljs.core.nth.call(null,vec__38313,(1),null);
cljs.core.deref.call(null,codemirror).setOption(cljs.core.clj__GT_js.call(null,key),value);


var G__38324 = cljs.core.next.call(null,seq__38300__$1);
var G__38325 = null;
var G__38326 = (0);
var G__38327 = (0);
seq__38300 = G__38324;
chunk__38301 = G__38325;
count__38302 = G__38326;
i__38303 = G__38327;
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
fugue.editor.output_box = (function fugue$editor$output_box(p__38328){
var map__38329 = p__38328;
var map__38329__$1 = (((((!((map__38329 == null))))?(((((map__38329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38329):map__38329);
var value = cljs.core.get.call(null,map__38329__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__38329__$1,new cljs.core.Keyword(null,"error","error",-978969032));
return fugue.editor.repl_out.call(null,(cljs.core.truth_(error)?new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(cljs.repl.Error__GT_map.call(null,error)):(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38331_38335 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38332_38336 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38333_38337 = true;
var _STAR_print_fn_STAR__temp_val__38334_38338 = ((function (_STAR_print_newline_STAR__orig_val__38331_38335,_STAR_print_fn_STAR__orig_val__38332_38336,_STAR_print_newline_STAR__temp_val__38333_38337,sb__4661__auto__,map__38329,map__38329__$1,value,error){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__38331_38335,_STAR_print_fn_STAR__orig_val__38332_38336,_STAR_print_newline_STAR__temp_val__38333_38337,sb__4661__auto__,map__38329,map__38329__$1,value,error))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38333_38337;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38334_38338;

try{cljs.pprint.pprint.call(null,value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38332_38336;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38331_38335;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()));
});

//# sourceMappingURL=editor.js.map?rel=1610134122057
