// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('fugue.editor');
fugue.ide.welcome = (function fugue$ide$welcome(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"welcome to fugue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"click 'eval' to evaluate the buffer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"then click 'render' to display the ui"], null)], null);
});
fugue.ide.ide = (function fugue$ide$ide(init,eval_fn){
var input = reagent.core.atom.call(null,init);
var selected = reagent.core.atom.call(null,"");
var render_out = reagent.core.atom.call(null,null);
var eval_out = reagent.core.atom.call(null,null);
var vim_on = reagent.core.atom.call(null,true);
return ((function (input,selected,render_out,eval_out,vim_on){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide","div.ide",109632974),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-left","div.ide-left",-417241263),(function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,render_out));
if(cljs.core.truth_(temp__5718__auto__)){
var component = temp__5718__auto__;
return component;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ide.welcome], null);
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-right","div.ide-right",-6482676),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.editor.editor,init,cljs.core.partial.call(null,cljs.core.reset_BANG_,input),cljs.core.partial.call(null,cljs.core.reset_BANG_,selected),((function (input,selected,render_out,eval_out,vim_on){
return (function (){
return eval_fn.call(null,cljs.core.deref.call(null,selected),cljs.core.partial.call(null,cljs.core.reset_BANG_,eval_out));
});})(input,selected,render_out,eval_out,vim_on))
,((function (input,selected,render_out,eval_out,vim_on){
return (function (){
return eval_fn.call(null,cljs.core.deref.call(null,selected),((function (input,selected,render_out,eval_out,vim_on){
return (function (new_out){
cljs.core.reset_BANG_.call(null,eval_out,new_out);

return cljs.core.reset_BANG_.call(null,render_out,new_out);
});})(input,selected,render_out,eval_out,vim_on))
);
});})(input,selected,render_out,eval_out,vim_on))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyMap","keyMap",945500512),(cljs.core.truth_(cljs.core.deref.call(null,vim_on))?"vim":"default")], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-toolbar","div.ide-toolbar",989742605),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (input,selected,render_out,eval_out,vim_on){
return (function (){
return eval_fn.call(null,cljs.core.deref.call(null,input),cljs.core.partial.call(null,cljs.core.reset_BANG_,eval_out));
});})(input,selected,render_out,eval_out,vim_on))
], null),"eval"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (input,selected,render_out,eval_out,vim_on){
return (function (){
return cljs.core.reset_BANG_.call(null,render_out,cljs.core.deref.call(null,eval_out));
});})(input,selected,render_out,eval_out,vim_on))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(cljs.core.vector_QMARK_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,eval_out)))))], null),"render"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (input,selected,render_out,eval_out,vim_on){
return (function (){
return eval_fn.call(null,cljs.core.deref.call(null,selected),cljs.core.partial.call(null,cljs.core.reset_BANG_,eval_out));
});})(input,selected,render_out,eval_out,vim_on))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selected))], null),"eval selection (ctrl-space)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (input,selected,render_out,eval_out,vim_on){
return (function (){
return eval_fn.call(null,cljs.core.deref.call(null,selected),((function (input,selected,render_out,eval_out,vim_on){
return (function (new_out){
cljs.core.reset_BANG_.call(null,eval_out,new_out);

return cljs.core.reset_BANG_.call(null,render_out,new_out);
});})(input,selected,render_out,eval_out,vim_on))
);
});})(input,selected,render_out,eval_out,vim_on))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selected))], null),"eval and render selection (ctrl-shift-space)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (input,selected,render_out,eval_out,vim_on){
return (function (){
return cljs.core.swap_BANG_.call(null,vim_on,cljs.core.not);
});})(input,selected,render_out,eval_out,vim_on))
], null),[(cljs.core.truth_(cljs.core.deref.call(null,vim_on))?"disable":"enable")," vim bindings"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.editor.output_box,cljs.core.deref.call(null,eval_out)], null)], null)], null);
});
;})(input,selected,render_out,eval_out,vim_on))
});

//# sourceMappingURL=ide.js.map?rel=1610146515784
