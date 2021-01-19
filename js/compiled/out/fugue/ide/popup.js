// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide.popup');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('fugue.ide.editor');
fugue.ide.popup.mini_buffer = (function fugue$ide$popup$mini_buffer(options,on_esc,on_submit){
var text = reagent.core.atom.call(null,"");
var highlighted = reagent.core.atom.call(null,(0));
return ((function (text,highlighted){
return (function (options__$1,on_esc__$1,on_submit__$1){
var filtered = cljs.core.filter.call(null,((function (text,highlighted){
return (function (p1__18525_SHARP_){
return clojure.string.includes_QMARK_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18525_SHARP_),cljs.core.deref.call(null,text));
});})(text,highlighted))
,options__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.popup.focused","div.popup.focused",1034008686),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ide.editor.editor,"",cljs.core.first.call(null,options__$1),true,cljs.core.partial.call(null,cljs.core.reset_BANG_,text),((function (filtered,text,highlighted){
return (function (){
return cljs.core.List.EMPTY;
});})(filtered,text,highlighted))
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),"base16-ocean",new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),false,new cljs.core.Keyword(null,"extraKeys","extraKeys",1380834830),({"Esc": on_esc__$1, "Up": ((function (filtered,text,highlighted){
return (function (){
return cljs.core.swap_BANG_.call(null,highlighted,((function (filtered,text,highlighted){
return (function (p1__18526_SHARP_){
var x__4219__auto__ = (0);
var y__4220__auto__ = (p1__18526_SHARP_ - (1));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});})(filtered,text,highlighted))
);
});})(filtered,text,highlighted))
, "Down": ((function (filtered,text,highlighted){
return (function (){
return cljs.core.swap_BANG_.call(null,highlighted,((function (filtered,text,highlighted){
return (function (p1__18527_SHARP_){
var x__4222__auto__ = (cljs.core.count.call(null,filtered) - (1));
var y__4223__auto__ = (p1__18527_SHARP_ + (1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
});})(filtered,text,highlighted))
);
});})(filtered,text,highlighted))
, "Tab": ((function (filtered,text,highlighted){
return (function (cm){
cm.setValue(cljs.core.nth.call(null,filtered,cljs.core.deref.call(null,highlighted)));

return cm.setCursor(cm.lineCount(),(0));
});})(filtered,text,highlighted))
, "Enter": ((function (filtered,text,highlighted){
return (function (){
return on_submit__$1.call(null,cljs.core.nth.call(null,filtered,cljs.core.deref.call(null,highlighted)));
});})(filtered,text,highlighted))
})], null)], null),(cljs.core.truth_(cljs.core.not_empty.call(null,filtered))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),cljs.core.deref.call(null,highlighted)], null),(function (){var iter__4523__auto__ = ((function (filtered,text,highlighted){
return (function fugue$ide$popup$mini_buffer_$_iter__18528(s__18529){
return (new cljs.core.LazySeq(null,((function (filtered,text,highlighted){
return (function (){
var s__18529__$1 = s__18529;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__18529__$1);
if(temp__5720__auto__){
var s__18529__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18529__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18529__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18531 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18530 = (0);
while(true){
if((i__18530 < size__4522__auto__)){
var vec__18532 = cljs.core._nth.call(null,c__4521__auto__,i__18530);
var i = cljs.core.nth.call(null,vec__18532,(0),null);
var option = cljs.core.nth.call(null,vec__18532,(1),null);
cljs.core.chunk_append.call(null,b__18531,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class-name","class-name",945142584),((cljs.core._EQ_.call(null,i,cljs.core.deref.call(null,highlighted)))?"minibuffer-selected":"")], null),option], null));

var G__18538 = (i__18530 + (1));
i__18530 = G__18538;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18531),fugue$ide$popup$mini_buffer_$_iter__18528.call(null,cljs.core.chunk_rest.call(null,s__18529__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18531),null);
}
} else {
var vec__18535 = cljs.core.first.call(null,s__18529__$2);
var i = cljs.core.nth.call(null,vec__18535,(0),null);
var option = cljs.core.nth.call(null,vec__18535,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class-name","class-name",945142584),((cljs.core._EQ_.call(null,i,cljs.core.deref.call(null,highlighted)))?"minibuffer-selected":"")], null),option], null),fugue$ide$popup$mini_buffer_$_iter__18528.call(null,cljs.core.rest.call(null,s__18529__$2)));
}
} else {
return null;
}
break;
}
});})(filtered,text,highlighted))
,null,null));
});})(filtered,text,highlighted))
;
return iter__4523__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,filtered));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul>li","ul>li",819311387),"no results"], null))], null);
});
;})(text,highlighted))
});
fugue.ide.popup.shortcuts_popup = (function fugue$ide$popup$shortcuts_popup(options){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.popup.focused>ul","div.popup.focused>ul",-437545703),(function (){var iter__4523__auto__ = (function fugue$ide$popup$shortcuts_popup_$_iter__18539(s__18540){
return (new cljs.core.LazySeq(null,(function (){
var s__18540__$1 = s__18540;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__18540__$1);
if(temp__5720__auto__){
var s__18540__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18540__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18540__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18542 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18541 = (0);
while(true){
if((i__18541 < size__4522__auto__)){
var vec__18543 = cljs.core._nth.call(null,c__4521__auto__,i__18541);
var key = cljs.core.nth.call(null,vec__18543,(0),null);
var name = cljs.core.nth.call(null,vec__18543,(1),null);
cljs.core.chunk_append.call(null,b__18542,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null));

var G__18549 = (i__18541 + (1));
i__18541 = G__18549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18542),fugue$ide$popup$shortcuts_popup_$_iter__18539.call(null,cljs.core.chunk_rest.call(null,s__18540__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18542),null);
}
} else {
var vec__18546 = cljs.core.first.call(null,s__18540__$2);
var key = cljs.core.nth.call(null,vec__18546,(0),null);
var name = cljs.core.nth.call(null,vec__18546,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),fugue$ide$popup$shortcuts_popup_$_iter__18539.call(null,cljs.core.rest.call(null,s__18540__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.first,options));
})()], null);
});

//# sourceMappingURL=popup.js.map?rel=1611099819692
