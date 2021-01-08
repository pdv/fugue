// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.web');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('fugue.bootstrap');
goog.require('fugue.api');
goog.require('fugue.box');
fugue.web.app = (function fugue$web$app(){
var boxes = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.api.init_text,fugue.api.demo_text], null));
var add_box = ((function (boxes){
return (function (){
return cljs.core.swap_BANG_.call(null,boxes,cljs.core.conj,"");
});})(boxes))
;
return ((function (boxes,add_box){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container","div#container",-1257349488),(function (){var iter__4523__auto__ = ((function (boxes,add_box){
return (function fugue$web$app_$_iter__38790(s__38791){
return (new cljs.core.LazySeq(null,((function (boxes,add_box){
return (function (){
var s__38791__$1 = s__38791;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38791__$1);
if(temp__5720__auto__){
var s__38791__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38791__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__38791__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__38793 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__38792 = (0);
while(true){
if((i__38792 < size__4522__auto__)){
var box_init = cljs.core._nth.call(null,c__4521__auto__,i__38792);
cljs.core.chunk_append.call(null,b__38793,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.box.box,box_init,fugue.bootstrap.eval_str], null));

var G__38794 = (i__38792 + (1));
i__38792 = G__38794;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38793),fugue$web$app_$_iter__38790.call(null,cljs.core.chunk_rest.call(null,s__38791__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38793),null);
}
} else {
var box_init = cljs.core.first.call(null,s__38791__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.box.box,box_init,fugue.bootstrap.eval_str], null),fugue$web$app_$_iter__38790.call(null,cljs.core.rest.call(null,s__38791__$2)));
}
} else {
return null;
}
break;
}
});})(boxes,add_box))
,null,null));
});})(boxes,add_box))
;
return iter__4523__auto__.call(null,cljs.core.deref.call(null,boxes));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#add","button#add",-1256516107),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),add_box], null),"+"], null)], null);
});
;})(boxes,add_box))
});
fugue.web._main = (function fugue$web$_main(){
cljs.core.enable_console_print_BANG_.call(null);

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.web.app], null),document.getElementById("app"));
});
fugue.web.on_js_reload = (function fugue$web$on_js_reload(){
return fugue.web._main.call(null);
});
fugue.web._main.call(null);

//# sourceMappingURL=web.js.map?rel=1610124013976
