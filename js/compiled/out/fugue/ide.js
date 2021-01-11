// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('fugue.components');
goog.require('fugue.demo.demo_loader');
goog.require('fugue.editor');
/**
 * Drops everything before the first comment (the ns clause)
 */
fugue.ide.prepare_demo = (function fugue$ide$prepare_demo(text){
return clojure.string.join.call(null,"",cljs.core.drop_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,";"),text));
});
fugue.ide.init_files = new cljs.core.PersistentArrayMap(null, 4, ["harmonic cantor table",fugue.demo.demo_loader.cantor,"circle of intervals",fugue.demo.demo_loader.cof,"midi chord detector",fugue.demo.demo_loader.midi_monitor,"user","(ns fugue.user)\n\n"], null);
fugue.ide.welcome = (function fugue$ide$welcome(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"welcome to fugue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"click 'eval' to evaluate the buffer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"then click 'render' to display the ui"], null)], null);
});
fugue.ide.file_browser = (function fugue$ide$file_browser(open_files,filenames,on_change){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.ide-file-list","ul.ide-file-list",307034477),(function (){var iter__4523__auto__ = (function fugue$ide$file_browser_$_iter__38353(s__38354){
return (new cljs.core.LazySeq(null,(function (){
var s__38354__$1 = s__38354;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38354__$1);
if(temp__5720__auto__){
var s__38354__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38354__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__38354__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__38356 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__38355 = (0);
while(true){
if((i__38355 < size__4522__auto__)){
var filename = cljs.core._nth.call(null,c__4521__auto__,i__38355);
cljs.core.chunk_append.call(null,b__38356,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38355,filename,c__4521__auto__,size__4522__auto__,b__38356,s__38354__$2,temp__5720__auto__){
return (function (){
return on_change.call(null,filename);
});})(i__38355,filename,c__4521__auto__,size__4522__auto__,b__38356,s__38354__$2,temp__5720__auto__))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core.contains_QMARK_.call(null,open_files,filename))?"#666":"inherit")], null)], null),filename], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),filename], null)));

var G__38357 = (i__38355 + (1));
i__38355 = G__38357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38356),fugue$ide$file_browser_$_iter__38353.call(null,cljs.core.chunk_rest.call(null,s__38354__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38356),null);
}
} else {
var filename = cljs.core.first.call(null,s__38354__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (filename,s__38354__$2,temp__5720__auto__){
return (function (){
return on_change.call(null,filename);
});})(filename,s__38354__$2,temp__5720__auto__))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core.contains_QMARK_.call(null,open_files,filename))?"#666":"inherit")], null)], null),filename], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),filename], null)),fugue$ide$file_browser_$_iter__38353.call(null,cljs.core.rest.call(null,s__38354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,filenames);
})()], null);
});
fugue.ide.tabs_component = (function fugue$ide$tabs_component(selected,tab_names,on_change,on_close){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.ide-tabs","ul.ide-tabs",1748255671),(function (){var iter__4523__auto__ = (function fugue$ide$tabs_component_$_iter__38358(s__38359){
return (new cljs.core.LazySeq(null,(function (){
var s__38359__$1 = s__38359;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38359__$1);
if(temp__5720__auto__){
var s__38359__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38359__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__38359__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__38361 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__38360 = (0);
while(true){
if((i__38360 < size__4522__auto__)){
var name = cljs.core._nth.call(null,c__4521__auto__,i__38360);
cljs.core.chunk_append.call(null,b__38361,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),((cljs.core._EQ_.call(null,selected,name))?"selected":"unselected")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ide-tabs-name","a.ide-tabs-name",-1041874203),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38360,name,c__4521__auto__,size__4522__auto__,b__38361,s__38359__$2,temp__5720__auto__){
return (function (){
return on_change.call(null,name);
});})(i__38360,name,c__4521__auto__,size__4522__auto__,b__38361,s__38359__$2,temp__5720__auto__))
], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ide-tabs-close","a.ide-tabs-close",2128304181),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38360,name,c__4521__auto__,size__4522__auto__,b__38361,s__38359__$2,temp__5720__auto__){
return (function (){
return on_close.call(null,name);
});})(i__38360,name,c__4521__auto__,size__4522__auto__,b__38361,s__38359__$2,temp__5720__auto__))
], null),"\u2715"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)));

var G__38362 = (i__38360 + (1));
i__38360 = G__38362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38361),fugue$ide$tabs_component_$_iter__38358.call(null,cljs.core.chunk_rest.call(null,s__38359__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38361),null);
}
} else {
var name = cljs.core.first.call(null,s__38359__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),((cljs.core._EQ_.call(null,selected,name))?"selected":"unselected")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ide-tabs-name","a.ide-tabs-name",-1041874203),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,s__38359__$2,temp__5720__auto__){
return (function (){
return on_change.call(null,name);
});})(name,s__38359__$2,temp__5720__auto__))
], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ide-tabs-close","a.ide-tabs-close",2128304181),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,s__38359__$2,temp__5720__auto__){
return (function (){
return on_close.call(null,name);
});})(name,s__38359__$2,temp__5720__auto__))
], null),"\u2715"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)),fugue$ide$tabs_component_$_iter__38358.call(null,cljs.core.rest.call(null,s__38359__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,tab_names);
})()], null);
});
fugue.ide.ide = (function fugue$ide$ide(eval_fn){
var demo = reagent.core.atom.call(null,"");
var tabs = reagent.core.atom.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["user",null], null), null));
var current_tab = reagent.core.atom.call(null,"user");
var files = reagent.core.atom.call(null,fugue.ide.init_files);
var input = reagent.core.atom.call(null,"");
var selected = reagent.core.atom.call(null,"");
var render_out = reagent.core.atom.call(null,null);
var eval_out = reagent.core.atom.call(null,null);
var vim_on = reagent.core.atom.call(null,true);
return ((function (demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide","div.ide",109632974),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-left","div.ide-left",-417241263),(function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,render_out));
if(cljs.core.truth_(temp__5718__auto__)){
var component = temp__5718__auto__;
return component;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ide.welcome,cljs.core.partial.call(null,cljs.core.reset_BANG_,demo)], null);
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-right","div.ide-right",-6482676),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-editor-container","div.ide-editor-container",2025018323),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ide.file_browser,cljs.core.deref.call(null,tabs),cljs.core.keys.call(null,cljs.core.deref.call(null,files)),((function (demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on){
return (function (new_filename){
cljs.core.swap_BANG_.call(null,tabs,((function (demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on){
return (function (p1__38363_SHARP_){
if((!(cljs.core.contains_QMARK_.call(null,p1__38363_SHARP_,new_filename)))){
return cljs.core.conj.call(null,p1__38363_SHARP_,new_filename);
} else {
return p1__38363_SHARP_;
}
});})(demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on))
);

cljs.core.reset_BANG_.call(null,demo,cljs.core.get.call(null,cljs.core.deref.call(null,files),new_filename));

return cljs.core.reset_BANG_.call(null,current_tab,new_filename);
});})(demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-tab-container","div.ide-tab-container",84264859),(((cljs.core.count.call(null,cljs.core.deref.call(null,tabs)) > (0)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ide.tabs_component,cljs.core.deref.call(null,current_tab),cljs.core.deref.call(null,tabs),((function (demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on){
return (function (tab_name){
cljs.core.reset_BANG_.call(null,demo,cljs.core.get.call(null,cljs.core.deref.call(null,files),tab_name));

return cljs.core.reset_BANG_.call(null,current_tab,tab_name);
});})(demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on))
,cljs.core.partial.call(null,cljs.core.swap_BANG_,tabs,cljs.core.disj)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.editor.editor,cljs.core.deref.call(null,demo),((function (demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on){
return (function (new_input){
return cljs.core.swap_BANG_.call(null,files,((function (demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on){
return (function (p1__38364_SHARP_){
return cljs.core.assoc.call(null,p1__38364_SHARP_,cljs.core.deref.call(null,current_tab),new_input);
});})(demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on))
);
});})(demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on))
,cljs.core.partial.call(null,cljs.core.reset_BANG_,selected),((function (demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on){
return (function (){
return eval_fn.call(null,cljs.core.deref.call(null,selected),cljs.core.partial.call(null,cljs.core.reset_BANG_,eval_out));
});})(demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyMap","keyMap",945500512),(cljs.core.truth_(cljs.core.deref.call(null,vim_on))?"vim":"default")], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-toolbar","div.ide-toolbar",989742605),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on){
return (function (){
return eval_fn.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,files),cljs.core.deref.call(null,current_tab)),cljs.core.partial.call(null,cljs.core.reset_BANG_,eval_out));
});})(demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on))
], null),"eval"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on){
return (function (){
return eval_fn.call(null,cljs.core.deref.call(null,selected),cljs.core.partial.call(null,cljs.core.reset_BANG_,eval_out));
});})(demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selected))], null),"eval selection (ctrl-shift-space)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on){
return (function (){
return cljs.core.reset_BANG_.call(null,render_out,cljs.core.deref.call(null,eval_out));
});})(demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(cljs.core.vector_QMARK_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,eval_out)))))], null),"render"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on){
return (function (){
return cljs.core.swap_BANG_.call(null,vim_on,cljs.core.not);
});})(demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on))
], null),[(cljs.core.truth_(cljs.core.deref.call(null,vim_on))?"disable":"enable")," vim bindings"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-output-container","div.ide-output-container",1744014008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.editor.output_box,cljs.core.deref.call(null,eval_out)], null)], null)], null)], null);
});
;})(demo,tabs,current_tab,files,input,selected,render_out,eval_out,vim_on))
});

//# sourceMappingURL=ide.js.map?rel=1610405473024
