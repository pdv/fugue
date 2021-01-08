// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.box');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs.pprint');
goog.require('cljs.repl');
fugue.box.editor = (function fugue$box$editor(init,on_change){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.editor","textarea.editor",-170637094),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-value","default-value",232220170),init], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var node = reagent.dom.dom_node.call(null,this$);
var settings = ({"mode": "clojure", "lineNumbers": true});
var cm = CodeMirror.fromTextArea(node,settings);
cm.on("change",((function (node,settings,cm){
return (function (p1__38279_SHARP_){
return on_change.call(null,p1__38279_SHARP_.getValue());
});})(node,settings,cm))
);

return setTimeout(((function (node,settings,cm){
return (function (){
return on_change.call(null,init);
});})(node,settings,cm))
,(5));
})], null));
});
fugue.box.top_text = (function fugue$box$top_text(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.repl-out","textarea.repl-out",-328725189),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
fugue.box.output_box = (function fugue$box$output_box(p__38280){
var map__38281 = p__38280;
var map__38281__$1 = (((((!((map__38281 == null))))?(((((map__38281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38281):map__38281);
var value = cljs.core.get.call(null,map__38281__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__38281__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.vector_QMARK_.call(null,value)){
return value;
} else {
if(cljs.core.truth_(error)){
return fugue.box.top_text.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(cljs.repl.Error__GT_map.call(null,error)));
} else {
return fugue.box.top_text.call(null,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38283_38287 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38284_38288 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38285_38289 = true;
var _STAR_print_fn_STAR__temp_val__38286_38290 = ((function (_STAR_print_newline_STAR__orig_val__38283_38287,_STAR_print_fn_STAR__orig_val__38284_38288,_STAR_print_newline_STAR__temp_val__38285_38289,sb__4661__auto__,map__38281,map__38281__$1,value,error){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__38283_38287,_STAR_print_fn_STAR__orig_val__38284_38288,_STAR_print_newline_STAR__temp_val__38285_38289,sb__4661__auto__,map__38281,map__38281__$1,value,error))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38285_38289;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38286_38290;

try{cljs.pprint.pprint.call(null,value);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38284_38288;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38283_38287;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());

}
}
});
fugue.box.name_input = (function fugue$box$name_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38291_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__38291_SHARP_.target.value);
})], null)], null);
});
fugue.box.box = (function fugue$box$box(init,eval_fn){
var name = reagent.core.atom.call(null,"");
var input = reagent.core.atom.call(null,init);
var output = reagent.core.atom.call(null,null);
return ((function (name,input,output){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-toolbar","div.box-toolbar",-542220004),(cljs.core.truth_(cljs.core.deref.call(null,output))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref.call(null,name)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.box.name_input,name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#eval","button#eval",-429647517),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,input,output){
return (function (){
return eval_fn.call(null,cljs.core.deref.call(null,input),cljs.core.partial.call(null,cljs.core.reset_BANG_,output));
});})(name,input,output))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,name))], null),"evaluate"], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#close","button#close",357025174),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.List.EMPTY], null),"close"], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,output))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-top","div.box-top",-2099572035),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.box.output_box,cljs.core.deref.call(null,output)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-bottom","div.box-bottom",-1627591847),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.box.editor,init,cljs.core.partial.call(null,cljs.core.reset_BANG_,input)], null)], null)], null);
});
;})(name,input,output))
});

//# sourceMappingURL=box.js.map?rel=1610066036074
