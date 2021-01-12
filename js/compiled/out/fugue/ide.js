// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('fugue.components');
goog.require('fugue.demo.demo_loader');
goog.require('fugue.editor');
fugue.ide.welcome = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"welcome to fugue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"click 'eval' to evaluate the buffer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"then click 'render' to display the ui"], null)], null);
fugue.ide.file_browser = (function fugue$ide$file_browser(filenames,open_files,on_select){
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
return on_select.call(null,filename);
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
return on_select.call(null,filename);
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
fugue.ide.tabs = (function fugue$ide$tabs(tab_names,selected_tab_name,on_select,on_close){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.ide-tabs","ul.ide-tabs",1748255671),(function (){var iter__4523__auto__ = (function fugue$ide$tabs_$_iter__38358(s__38359){
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
cljs.core.chunk_append.call(null,b__38361,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),((cljs.core._EQ_.call(null,selected_tab_name,name))?"selected":"unselected")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ide-tabs-name","a.ide-tabs-name",-1041874203),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38360,name,c__4521__auto__,size__4522__auto__,b__38361,s__38359__$2,temp__5720__auto__){
return (function (){
return on_select.call(null,name);
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
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38361),fugue$ide$tabs_$_iter__38358.call(null,cljs.core.chunk_rest.call(null,s__38359__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38361),null);
}
} else {
var name = cljs.core.first.call(null,s__38359__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),((cljs.core._EQ_.call(null,selected_tab_name,name))?"selected":"unselected")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ide-tabs-name","a.ide-tabs-name",-1041874203),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,s__38359__$2,temp__5720__auto__){
return (function (){
return on_select.call(null,name);
});})(name,s__38359__$2,temp__5720__auto__))
], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ide-tabs-close","a.ide-tabs-close",2128304181),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,s__38359__$2,temp__5720__auto__){
return (function (){
return on_close.call(null,name);
});})(name,s__38359__$2,temp__5720__auto__))
], null),"\u2715"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null)),fugue$ide$tabs_$_iter__38358.call(null,cljs.core.rest.call(null,s__38359__$2)));
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
fugue.ide.init_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"curr-tab","curr-tab",-1550556568),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"rendering","rendering",-424074478),new cljs.core.Keyword(null,"files","files",-472457450),new cljs.core.Keyword(null,"vim-on","vim-on",783993369),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["user",null], null), null),"user","",fugue.ide.welcome,new cljs.core.PersistentArrayMap(null, 4, ["cantor-harmonies",fugue.demo.demo_loader.cantor,"circle-of-fifths",fugue.demo.demo_loader.cof,"chord-detector",fugue.demo.demo_loader.midi_monitor,"user","(ns fugue.user)\n\n"], null),true,"","",""]);
fugue.ide.load_buffer = (function fugue$ide$load_buffer(state,name){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"tabs","tabs",-779855354),cljs.core.conj,name),new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),name], null))),new cljs.core.Keyword(null,"curr-tab","curr-tab",-1550556568),name);
});
fugue.ide.ide = (function fugue$ide$ide(eval_fn){
var state = reagent.core.atom.call(null,fugue.ide.init_state);
fugue.ide.eval_BANG_ = ((function (state){
return (function fugue$ide$ide_$_eval_BANG_(text){
return eval_fn.call(null,text,cljs.core.partial.call(null,cljs.core.swap_BANG_,state,cljs.core.assoc,new cljs.core.Keyword(null,"output","output",-1105869043)));
});})(state))
;

return ((function (state){
return (function (){
cljs.core.print.call(null,"output: ",new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide","div.ide",109632974),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-left","div.ide-left",-417241263),new cljs.core.Keyword(null,"rendering","rendering",-424074478).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-right","div.ide-right",-6482676),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-editor-container","div.ide-editor-container",2025018323),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ide.file_browser,cljs.core.keys.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))),new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),cljs.core.partial.call(null,cljs.core.swap_BANG_,state,fugue.ide.load_buffer)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-tab-container","div.ide-tab-container",84264859),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ide.tabs,new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"curr-tab","curr-tab",-1550556568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),cljs.core.partial.call(null,cljs.core.swap_BANG_,state,fugue.ide.load_buffer),cljs.core.partial.call(null,cljs.core.swap_BANG_,state,cljs.core.update,new cljs.core.Keyword(null,"tabs","tabs",-779855354),cljs.core.disj)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.editor.editor,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),cljs.core.partial.call(null,cljs.core.swap_BANG_,state,cljs.core.assoc,new cljs.core.Keyword(null,"input","input",556931961)),cljs.core.partial.call(null,cljs.core.swap_BANG_,state,cljs.core.assoc,new cljs.core.Keyword(null,"selection","selection",975998651)),((function (state){
return (function (){
return fugue.ide.eval_BANG_.call(null,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(state))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyMap","keyMap",945500512),(cljs.core.truth_(new cljs.core.Keyword(null,"vim-on","vim-on",783993369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?"vim":"default")], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-toolbar","div.ide-toolbar",989742605),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (state){
return (function (){
return fugue.ide.eval_BANG_.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(state))
], null),"eval"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (state){
return (function (){
return fugue.ide.eval_BANG_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
});})(state))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))], null),"eval selection (ctrl-shift-space)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"rendering","rendering",-424074478),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
});})(state))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(cljs.core.vector_QMARK_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))))], null),"render"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"vim-on","vim-on",783993369),cljs.core.not);
});})(state))
], null),[(cljs.core.truth_(new cljs.core.Keyword(null,"vim-on","vim-on",783993369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?"disable":"enable")," vim bindings"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-output-container","div.ide-output-container",1744014008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.editor.output_box,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null)], null)], null)], null);
});
;})(state))
});

//# sourceMappingURL=ide.js.map?rel=1610418173464
