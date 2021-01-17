// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.boxes.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.js');
goog.require('fugue.boxes.util');
goog.require('fugue.boxes.layout');
goog.require('fugue.boxes.editor');
goog.require('fugue.boxes.state');
fugue.boxes.ui.popup_content = (function fugue$boxes$ui$popup_content(actions){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.popup>ul","div.popup>ul",-450599246),(function (){var iter__4523__auto__ = (function fugue$boxes$ui$popup_content_$_iter__19002(s__19003){
return (new cljs.core.LazySeq(null,(function (){
var s__19003__$1 = s__19003;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__19003__$1);
if(temp__5720__auto__){
var s__19003__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19003__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19003__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19005 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19004 = (0);
while(true){
if((i__19004 < size__4522__auto__)){
var vec__19006 = cljs.core._nth.call(null,c__4521__auto__,i__19004);
var key = cljs.core.nth.call(null,vec__19006,(0),null);
var name = cljs.core.nth.call(null,vec__19006,(1),null);
cljs.core.chunk_append.call(null,b__19005,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null));

var G__19012 = (i__19004 + (1));
i__19004 = G__19012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19005),fugue$boxes$ui$popup_content_$_iter__19002.call(null,cljs.core.chunk_rest.call(null,s__19003__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19005),null);
}
} else {
var vec__19009 = cljs.core.first.call(null,s__19003__$2);
var key = cljs.core.nth.call(null,vec__19009,(0),null);
var name = cljs.core.nth.call(null,vec__19009,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),fugue$boxes$ui$popup_content_$_iter__19002.call(null,cljs.core.rest.call(null,s__19003__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,actions);
})()], null);
});
fugue.boxes.ui.cm_settings = new cljs.core.PersistentArrayMap(null, 2, ["keyMap","vim","theme","base16-ocean"], null);
fugue.boxes.ui.box = (function fugue$boxes$ui$box(value,focused,editor_callbacks){
if(cljs.core.vector_QMARK_.call(null,value)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),value], null);
} else {
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.boxes.editor.editor,value,focused,editor_callbacks,fugue.boxes.ui.cm_settings], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output>p.value-box","div.output>p.value-box",-264848635),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(value);
if(cljs.core.truth_(temp__5718__auto__)){
var error = temp__5718__auto__;
return error.cause.message;
} else {
return null;
}
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return value;
}
}
})())], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output>p.value-box","div.output>p.value-box",-264848635),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);

}
}
}
});
fugue.boxes.ui.boxes = (function fugue$boxes$ui$boxes(state,p__19014){
var map__19015 = p__19014;
var map__19015__$1 = (((((!((map__19015 == null))))?(((((map__19015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19015):map__19015);
var on_box_click = cljs.core.get.call(null,map__19015__$1,new cljs.core.Keyword(null,"on-box-click","on-box-click",177704013));
var on_text_change = cljs.core.get.call(null,map__19015__$1,new cljs.core.Keyword(null,"on-text-change","on-text-change",-1719329456));
var on_shortcut = cljs.core.get.call(null,map__19015__$1,new cljs.core.Keyword(null,"on-shortcut","on-shortcut",-393863730));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.boxes.layout.boxes_container,fugue.boxes.layout.map_values.call(null,((function (map__19015,map__19015__$1,on_box_click,on_text_change,on_shortcut){
return (function (id){
var filename = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffers","buffers",471409492),id], null));
var value = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),filename], null));
var focused = ((cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state))) && (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"key-seq","key-seq",-1961389919).cljs$core$IFn$_invoke$arity$1(state))));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),((focused)?"box focused":"box"),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (filename,value,focused,map__19015,map__19015__$1,on_box_click,on_text_change,on_shortcut){
return (function (){
return on_box_click.call(null,id);
});})(filename,value,focused,map__19015,map__19015__$1,on_box_click,on_text_change,on_shortcut))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.boxes.ui.box,value,focused,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (filename,value,focused,map__19015,map__19015__$1,on_box_click,on_text_change,on_shortcut){
return (function (p1__19013_SHARP_){
if(focused){
return on_text_change.call(null,id,p1__19013_SHARP_);
} else {
return null;
}
});})(filename,value,focused,map__19015,map__19015__$1,on_box_click,on_text_change,on_shortcut))
,new cljs.core.Keyword(null,"on-shortcut","on-shortcut",-393863730),on_shortcut], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.focus-stealer","input.focus-stealer",-1841554415),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"autoFocus","autoFocus",-552622425),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.status-bar>a","div.status-bar>a",-1268331913),id], null)], null);
});})(map__19015,map__19015__$1,on_box_click,on_text_change,on_shortcut))
,new cljs.core.Keyword(null,"boxes","boxes",-420813822).cljs$core$IFn$_invoke$arity$1(state))], null);
});
fugue.boxes.ui.app = (function fugue$boxes$ui$app(){
var eval_state = cljs.js.empty_state.call(null);
var state = reagent.core.atom.call(null,fugue.boxes.state.init_state);
fugue.boxes.ui.on_keydown = ((function (eval_state,state){
return (function fugue$boxes$ui$app_$_on_keydown(e){
if(cljs.core._EQ_.call(null,"TEXTAREA",document.activeElement.tagName)){
return null;
} else {
e.preventDefault();

var new_seq = cljs.core.conj.call(null,new cljs.core.Keyword(null,"key-seq","key-seq",-1961389919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),e.key);
var keymap = fugue.boxes.state.default_keymap.call(null,eval_state);
if(cljs.core.contains_QMARK_.call(null,keymap,new_seq)){
return cljs.core.get.call(null,keymap,new_seq).call(null,cljs.core.deref.call(null,state),cljs.core.partial.call(null,cljs.core.swap_BANG_,state));
} else {
if(cljs.core.contains_QMARK_.call(null,fugue.boxes.state.popup_options,new_seq)){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"key-seq","key-seq",-1961389919),new_seq);
} else {
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"key-seq","key-seq",-1961389919),cljs.core.PersistentVector.EMPTY);

}
}
}
});})(eval_state,state))
;

document.addEventListener("keydown",fugue.boxes.ui.on_keydown);

CodeMirror.Vim.defineAction("space!",((function (eval_state,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"key-seq","key-seq",-1961389919),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null));
});})(eval_state,state))
);

CodeMirror.Vim.mapCommand("<Space>","action","space!",({}),({"context": "normal"}));

return ((function (eval_state,state){
return (function (){
fugue.boxes.util.log.call(null,cljs.core.deref.call(null,state));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.boxes","div.boxes",590620451),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.boxes.ui.boxes,cljs.core.deref.call(null,state),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-box-click","on-box-click",177704013),((function (eval_state,state){
return (function (p1__19017_SHARP_){
return cljs.core.swap_BANG_.call(null,state,fugue.boxes.state.activate,p1__19017_SHARP_);
});})(eval_state,state))
,new cljs.core.Keyword(null,"on-text-change","on-text-change",-1719329456),((function (eval_state,state){
return (function (id,new_text){
var filename = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffers","buffers",471409492),id], null));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),filename], null),new_text);
});})(eval_state,state))
,new cljs.core.Keyword(null,"on-shortcut","on-shortcut",-393863730),((function (eval_state,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"key-seq","key-seq",-1961389919),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null));
});})(eval_state,state))
], null)], null),(function (){var temp__5718__auto__ = cljs.core.get.call(null,fugue.boxes.state.popup_options,new cljs.core.Keyword(null,"key-seq","key-seq",-1961389919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
if(cljs.core.truth_(temp__5718__auto__)){
var options = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.boxes.ui.popup_content,options], null);
} else {
return null;
}
})()], null);
});
;})(eval_state,state))
});

//# sourceMappingURL=ui.js.map?rel=1610907678465
