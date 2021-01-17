// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('fugue.demo.demo_loader');
goog.require('fugue.boxes.editor');
fugue.ide.welcome = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"welcome to fugue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"click 'eval' to evaluate the buffer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"then click 'render' to display the ui"], null)], null);
fugue.ide.init_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.Keyword(null,"curr-tab","curr-tab",-1550556568),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"rendering","rendering",-424074478),new cljs.core.Keyword(null,"files","files",-472457450),new cljs.core.Keyword(null,"vim-on","vim-on",783993369),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["fugue.user",null], null), null),"fugue.user","",fugue.ide.welcome,new cljs.core.PersistentArrayMap(null, 5, ["demo.cantor-harmonies",fugue.demo.demo_loader.cantor,"demo.circle-of-fifths",fugue.demo.demo_loader.cof,"demo.chord-detector",fugue.demo.demo_loader.midi_monitor,"live.api",fugue.demo.demo_loader.api,"fugue.user","(ns fugue.user)\n\n"], null),true,"","",""]);
fugue.ide.load_buffer = (function fugue$ide$load_buffer(state,name){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"tabs","tabs",-779855354),cljs.core.conj,name),new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),name], null))),new cljs.core.Keyword(null,"curr-tab","curr-tab",-1550556568),name);
});
fugue.ide.ide = (function fugue$ide$ide(eval_fn){
var state = reagent.core.atom.call(null,fugue.ide.init_state);
fugue.ide.eval_BANG_ = ((function (state){
return (function fugue$ide$ide_$_eval_BANG_(text){
return eval_fn.call(null,text,((function (state){
return (function (m,cb){
var filename = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m));
var source = ((cljs.core._EQ_.call(null,"fugue.api",filename))?"":cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),filename], null)));
return cb.call(null,(cljs.core.truth_(source)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),source], null):null));
});})(state))
,cljs.core.partial.call(null,cljs.core.swap_BANG_,state,cljs.core.assoc,new cljs.core.Keyword(null,"output","output",-1105869043)));
});})(state))
;

return ((function (state){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide","div.ide",109632974),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-left","div.ide-left",-417241263),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-editor-container","div.ide-editor-container",2025018323),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.ide-file-list","ul.ide-file-list",307034477),(function (){var iter__4523__auto__ = ((function (state){
return (function fugue$ide$ide_$_iter__19046(s__19047){
return (new cljs.core.LazySeq(null,((function (state){
return (function (){
var s__19047__$1 = s__19047;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__19047__$1);
if(temp__5720__auto__){
var s__19047__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19047__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19047__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19049 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19048 = (0);
while(true){
if((i__19048 < size__4522__auto__)){
var filename = cljs.core._nth.call(null,c__4521__auto__,i__19048);
cljs.core.chunk_append.call(null,b__19049,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19048,filename,c__4521__auto__,size__4522__auto__,b__19049,s__19047__$2,temp__5720__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,fugue.ide.load_buffer,filename);
});})(i__19048,filename,c__4521__auto__,size__4522__auto__,b__19049,s__19047__$2,temp__5720__auto__,state))
,new cljs.core.Keyword(null,"class-name","class-name",945142584),((cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),filename))?"open":"closed")], null),filename], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),filename], null)));

var G__19054 = (i__19048 + (1));
i__19048 = G__19054;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19049),fugue$ide$ide_$_iter__19046.call(null,cljs.core.chunk_rest.call(null,s__19047__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19049),null);
}
} else {
var filename = cljs.core.first.call(null,s__19047__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (filename,s__19047__$2,temp__5720__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,fugue.ide.load_buffer,filename);
});})(filename,s__19047__$2,temp__5720__auto__,state))
,new cljs.core.Keyword(null,"class-name","class-name",945142584),((cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),filename))?"open":"closed")], null),filename], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),filename], null)),fugue$ide$ide_$_iter__19046.call(null,cljs.core.rest.call(null,s__19047__$2)));
}
} else {
return null;
}
break;
}
});})(state))
,null,null));
});})(state))
;
return iter__4523__auto__.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-tab-container","div.ide-tab-container",84264859),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.ide-tabs","ul.ide-tabs",1748255671),(function (){var iter__4523__auto__ = ((function (state){
return (function fugue$ide$ide_$_iter__19050(s__19051){
return (new cljs.core.LazySeq(null,((function (state){
return (function (){
var s__19051__$1 = s__19051;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__19051__$1);
if(temp__5720__auto__){
var s__19051__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19051__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19051__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19053 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19052 = (0);
while(true){
if((i__19052 < size__4522__auto__)){
var tab_name = cljs.core._nth.call(null,c__4521__auto__,i__19052);
cljs.core.chunk_append.call(null,b__19053,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),((cljs.core._EQ_.call(null,tab_name,new cljs.core.Keyword(null,"curr-tab","curr-tab",-1550556568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))?"selected":"unselected")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ide-tabs-name","a.ide-tabs-name",-1041874203),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19052,tab_name,c__4521__auto__,size__4522__auto__,b__19053,s__19051__$2,temp__5720__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,fugue.ide.load_buffer,tab_name);
});})(i__19052,tab_name,c__4521__auto__,size__4522__auto__,b__19053,s__19051__$2,temp__5720__auto__,state))
], null),tab_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ide-tabs-close","a.ide-tabs-close",2128304181),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19052,tab_name,c__4521__auto__,size__4522__auto__,b__19053,s__19051__$2,temp__5720__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"tabs","tabs",-779855354),cljs.core.disj,tab_name);
});})(i__19052,tab_name,c__4521__auto__,size__4522__auto__,b__19053,s__19051__$2,temp__5720__auto__,state))
], null),"\u2715"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tab_name], null)));

var G__19055 = (i__19052 + (1));
i__19052 = G__19055;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19053),fugue$ide$ide_$_iter__19050.call(null,cljs.core.chunk_rest.call(null,s__19051__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19053),null);
}
} else {
var tab_name = cljs.core.first.call(null,s__19051__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),((cljs.core._EQ_.call(null,tab_name,new cljs.core.Keyword(null,"curr-tab","curr-tab",-1550556568).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))))?"selected":"unselected")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ide-tabs-name","a.ide-tabs-name",-1041874203),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tab_name,s__19051__$2,temp__5720__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,fugue.ide.load_buffer,tab_name);
});})(tab_name,s__19051__$2,temp__5720__auto__,state))
], null),tab_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.ide-tabs-close","a.ide-tabs-close",2128304181),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tab_name,s__19051__$2,temp__5720__auto__,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"tabs","tabs",-779855354),cljs.core.disj,tab_name);
});})(tab_name,s__19051__$2,temp__5720__auto__,state))
], null),"\u2715"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tab_name], null)),fugue$ide$ide_$_iter__19050.call(null,cljs.core.rest.call(null,s__19051__$2)));
}
} else {
return null;
}
break;
}
});})(state))
,null,null));
});})(state))
;
return iter__4523__auto__.call(null,new cljs.core.Keyword(null,"tabs","tabs",-779855354).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
})()], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.boxes.editor.editor,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),cljs.core.partial.call(null,cljs.core.swap_BANG_,state,cljs.core.assoc,new cljs.core.Keyword(null,"input","input",556931961)),cljs.core.partial.call(null,cljs.core.swap_BANG_,state,cljs.core.assoc,new cljs.core.Keyword(null,"selection","selection",975998651)),((function (state){
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
], null),[(cljs.core.truth_(new cljs.core.Keyword(null,"vim-on","vim-on",783993369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))?"disable":"enable")," vim bindings"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-output-container","div.ide-output-container",1744014008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.boxes.editor.output_box,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-right","div.ide-right",-6482676),new cljs.core.Keyword(null,"rendering","rendering",-424074478).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null)], null);
});
;})(state))
});

//# sourceMappingURL=ide.js.map?rel=1610894172427
