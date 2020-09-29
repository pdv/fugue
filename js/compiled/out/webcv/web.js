// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.web');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('webcv.bootstrap');
goog.require('webcv.api');
goog.require('webcv.box');
goog.require('cljs.repl');
webcv.web.app = (function webcv$web$app(){
var boxes = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webcv.api.init_text,webcv.api.demo_text], null));
var add_box = ((function (boxes){
return (function (){
return cljs.core.swap_BANG_.call(null,boxes,cljs.core.conj,"");
});})(boxes))
;
return ((function (boxes,add_box){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container","div#container",-1257349488),(function (){var iter__4523__auto__ = ((function (boxes,add_box){
return (function webcv$web$app_$_iter__37050(s__37051){
return (new cljs.core.LazySeq(null,((function (boxes,add_box){
return (function (){
var s__37051__$1 = s__37051;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__37051__$1);
if(temp__5720__auto__){
var s__37051__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37051__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__37051__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__37053 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__37052 = (0);
while(true){
if((i__37052 < size__4522__auto__)){
var box_init = cljs.core._nth.call(null,c__4521__auto__,i__37052);
cljs.core.chunk_append.call(null,b__37053,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webcv.box.box,box_init,webcv.bootstrap.eval_str], null));

var G__37054 = (i__37052 + (1));
i__37052 = G__37054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37053),webcv$web$app_$_iter__37050.call(null,cljs.core.chunk_rest.call(null,s__37051__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37053),null);
}
} else {
var box_init = cljs.core.first.call(null,s__37051__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webcv.box.box,box_init,webcv.bootstrap.eval_str], null),webcv$web$app_$_iter__37050.call(null,cljs.core.rest.call(null,s__37051__$2)));
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
webcv.web._main = (function webcv$web$_main(){
cljs.core.enable_console_print_BANG_.call(null);

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webcv.web.app], null),document.getElementById("app"));
});
webcv.web.on_js_reload = (function webcv$web$on_js_reload(){
return webcv.web._main.call(null);
});
webcv.web._main.call(null);

//# sourceMappingURL=web.js.map?rel=1601399208285
