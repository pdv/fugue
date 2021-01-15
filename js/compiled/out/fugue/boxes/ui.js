// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.boxes.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.js');
goog.require('fugue.boxes.layout');
goog.require('fugue.boxes.editor');
goog.require('fugue.boxes.state');
fugue.boxes.ui.popup_content = (function fugue$boxes$ui$popup_content(key_seq){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.popup>ul","div.popup>ul",-450599246),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_seq)], null),(function (){var iter__4523__auto__ = (function fugue$boxes$ui$popup_content_$_iter__19001(s__19002){
return (new cljs.core.LazySeq(null,(function (){
var s__19002__$1 = s__19002;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__19002__$1);
if(temp__5720__auto__){
var s__19002__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19002__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19002__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19004 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19003 = (0);
while(true){
if((i__19003 < size__4522__auto__)){
var option = cljs.core._nth.call(null,c__4521__auto__,i__19003);
cljs.core.chunk_append.call(null,b__19004,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),option], null));

var G__19005 = (i__19003 + (1));
i__19003 = G__19005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19004),fugue$boxes$ui$popup_content_$_iter__19001.call(null,cljs.core.chunk_rest.call(null,s__19002__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19004),null);
}
} else {
var option = cljs.core.first.call(null,s__19002__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),option], null),fugue$boxes$ui$popup_content_$_iter__19001.call(null,cljs.core.rest.call(null,s__19002__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,fugue.boxes.state.popup_options.call(null,key_seq));
})()], null);
});
fugue.boxes.ui.boxes = (function fugue$boxes$ui$boxes(state,p__19007){
var map__19008 = p__19007;
var map__19008__$1 = (((((!((map__19008 == null))))?(((((map__19008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19008):map__19008);
var on_box_click = cljs.core.get.call(null,map__19008__$1,new cljs.core.Keyword(null,"on-box-click","on-box-click",177704013));
var on_text_change = cljs.core.get.call(null,map__19008__$1,new cljs.core.Keyword(null,"on-text-change","on-text-change",-1719329456));
var on_shortcut = cljs.core.get.call(null,map__19008__$1,new cljs.core.Keyword(null,"on-shortcut","on-shortcut",-393863730));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.boxes.layout.boxes_container,fugue.boxes.layout.map_values.call(null,((function (map__19008,map__19008__$1,on_box_click,on_text_change,on_shortcut){
return (function (id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),((cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"focused","focused",1851572115).cljs$core$IFn$_invoke$arity$1(state)))?"box focused":"box"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__19008,map__19008__$1,on_box_click,on_text_change,on_shortcut){
return (function (){
return on_box_click.call(null,id);
});})(map__19008,map__19008__$1,on_box_click,on_text_change,on_shortcut))
], null),(function (){var value = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),id], null));
if(cljs.core.vector_QMARK_.call(null,value)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),value], null);
} else {
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.boxes.editor.editor,value,cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"focused","focused",1851572115).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (value,map__19008,map__19008__$1,on_box_click,on_text_change,on_shortcut){
return (function (p1__19006_SHARP_){
return on_text_change.call(null,id,p1__19006_SHARP_);
});})(value,map__19008,map__19008__$1,on_box_click,on_text_change,on_shortcut))
,new cljs.core.Keyword(null,"on-selection-change","on-selection-change",-1774232910),((function (value,map__19008,map__19008__$1,on_box_click,on_text_change,on_shortcut){
return (function (){
return cljs.core.print.call(null,"on-selection-change");
});})(value,map__19008,map__19008__$1,on_box_click,on_text_change,on_shortcut))
,new cljs.core.Keyword(null,"on-shortcut","on-shortcut",-393863730),on_shortcut], null),new cljs.core.PersistentArrayMap(null, 2, ["keyMap","vim","theme","base16-ocean"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output>p.value-box","div.output>p.value-box",-264848635),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null);

}
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.status-bar>a","div.status-bar>a",-1268331913),id], null)], null);
});})(map__19008,map__19008__$1,on_box_click,on_text_change,on_shortcut))
,new cljs.core.Keyword(null,"boxes","boxes",-420813822).cljs$core$IFn$_invoke$arity$1(state))], null);
});
fugue.boxes.ui.app = (function fugue$boxes$ui$app(){
var eval_state = cljs.js.empty_state.call(null);
var state = reagent.core.atom.call(null,fugue.boxes.state.init_state);
fugue.boxes.ui.on_keydown = ((function (eval_state,state){
return (function fugue$boxes$ui$app_$_on_keydown(e){
var in_popup = (!((new cljs.core.Keyword(null,"key-seq","key-seq",-1961389919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)) == null)));
var in_textbox = cljs.core._EQ_.call(null,"TEXTAREA",document.activeElement.tagName);
var key = e.key;
if(((in_popup) || ((!(in_textbox))))){
e.preventDefault();

return fugue.boxes.state.on_key.call(null,cljs.core.deref.call(null,state),fugue.boxes.state.make_actions.call(null,cljs.core.deref.call(null,state),eval_state),key,cljs.core.partial.call(null,cljs.core.swap_BANG_,state));
} else {
return null;
}
});})(eval_state,state))
;

document.addEventListener("keydown",fugue.boxes.ui.on_keydown);

CodeMirror.Vim.defineAction("space!",((function (eval_state,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,fugue.boxes.state.show_popup);
});})(eval_state,state))
);

CodeMirror.Vim.mapCommand("<Space>","action","space!",({}),({"context": "normal"}));

return ((function (eval_state,state){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.boxes","div.boxes",590620451),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.boxes.ui.boxes,cljs.core.deref.call(null,state),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-box-click","on-box-click",177704013),((function (eval_state,state){
return (function (p1__19010_SHARP_){
return cljs.core.swap_BANG_.call(null,state,fugue.boxes.state.activate,p1__19010_SHARP_);
});})(eval_state,state))
,new cljs.core.Keyword(null,"on-text-change","on-text-change",-1719329456),((function (eval_state,state){
return (function (id,new_text){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),id], null),new_text);
});})(eval_state,state))
,new cljs.core.Keyword(null,"on-shortcut","on-shortcut",-393863730),((function (eval_state,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,fugue.boxes.state.show_popup);
});})(eval_state,state))
], null)], null),(function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"key-seq","key-seq",-1961389919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
if(cljs.core.truth_(temp__5718__auto__)){
var keys = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.boxes.ui.popup_content,keys], null);
} else {
return null;
}
})()], null);
});
;})(eval_state,state))
});

//# sourceMappingURL=ui.js.map?rel=1610745459092
