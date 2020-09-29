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
return (function webcv$web$app_$_iter__36920(s__36921){
return (new cljs.core.LazySeq(null,((function (boxes,add_box){
return (function (){
var s__36921__$1 = s__36921;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36921__$1);
if(temp__5720__auto__){
var s__36921__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36921__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__36921__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__36923 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__36922 = (0);
while(true){
if((i__36922 < size__4522__auto__)){
var box_init = cljs.core._nth.call(null,c__4521__auto__,i__36922);
cljs.core.chunk_append.call(null,b__36923,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webcv.box.box,box_init,webcv.bootstrap.eval_str], null));

var G__36924 = (i__36922 + (1));
i__36922 = G__36924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36923),webcv$web$app_$_iter__36920.call(null,cljs.core.chunk_rest.call(null,s__36921__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36923),null);
}
} else {
var box_init = cljs.core.first.call(null,s__36921__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webcv.box.box,box_init,webcv.bootstrap.eval_str], null),webcv$web$app_$_iter__36920.call(null,cljs.core.rest.call(null,s__36921__$2)));
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

//# sourceMappingURL=web.js.map?rel=1601347617511
