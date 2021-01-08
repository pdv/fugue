// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.web');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('fugue.bootstrap');
goog.require('fugue.api');
goog.require('fugue.ide');
goog.require('fugue.box');
fugue.web.app = (function fugue$web$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ide.ide,fugue.api.init_text,fugue.bootstrap.eval_str], null);
});
fugue.web.boxes_component = (function fugue$web$boxes_component(){
var boxes = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.api.init_text,fugue.api.demo_text], null));
var add_box = ((function (boxes){
return (function (){
return cljs.core.swap_BANG_.call(null,boxes,cljs.core.conj,"");
});})(boxes))
;
return ((function (boxes,add_box){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container","div#container",-1257349488),(function (){var iter__4523__auto__ = ((function (boxes,add_box){
return (function fugue$web$boxes_component_$_iter__38827(s__38828){
return (new cljs.core.LazySeq(null,((function (boxes,add_box){
return (function (){
var s__38828__$1 = s__38828;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38828__$1);
if(temp__5720__auto__){
var s__38828__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38828__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__38828__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__38830 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__38829 = (0);
while(true){
if((i__38829 < size__4522__auto__)){
var box_init = cljs.core._nth.call(null,c__4521__auto__,i__38829);
cljs.core.chunk_append.call(null,b__38830,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.box.box,box_init,fugue.bootstrap.eval_str], null));

var G__38831 = (i__38829 + (1));
i__38829 = G__38831;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38830),fugue$web$boxes_component_$_iter__38827.call(null,cljs.core.chunk_rest.call(null,s__38828__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38830),null);
}
} else {
var box_init = cljs.core.first.call(null,s__38828__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.box.box,box_init,fugue.bootstrap.eval_str], null),fugue$web$boxes_component_$_iter__38827.call(null,cljs.core.rest.call(null,s__38828__$2)));
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

//# sourceMappingURL=web.js.map?rel=1610142286125
