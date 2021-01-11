// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('fugue.api');
goog.require('fugue.components');
goog.require('fugue.editor');
fugue.ide.demos = new cljs.core.PersistentArrayMap(null, 1, ["cantor harmonies",fugue.api.cantor_demo], null);
fugue.ide.welcome = (function fugue$ide$welcome(reset_input){
var selected_demo = reagent.core.atom.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,fugue.ide.demos)));
return ((function (selected_demo){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"welcome to fugue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"click 'eval' to evaluate the buffer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"then click 'render' to display the ui"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.components.picker,selected_demo,cljs.core.keys.call(null,fugue.ide.demos)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_demo){
return (function (){
return reset_input.call(null,cljs.core.get.call(null,fugue.ide.demos,cljs.core.deref.call(null,selected_demo)));
});})(selected_demo))
], null),"load demo"], null)], null);
});
;})(selected_demo))
});
fugue.ide.ide = (function fugue$ide$ide(eval_fn){
var demo = reagent.core.atom.call(null,"");
var input = reagent.core.atom.call(null,"");
var selected = reagent.core.atom.call(null,"");
var render_out = reagent.core.atom.call(null,null);
var eval_out = reagent.core.atom.call(null,null);
var vim_on = reagent.core.atom.call(null,true);
return ((function (demo,input,selected,render_out,eval_out,vim_on){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide","div.ide",109632974),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-left","div.ide-left",-417241263),(function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,render_out));
if(cljs.core.truth_(temp__5718__auto__)){
var component = temp__5718__auto__;
return component;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ide.welcome,cljs.core.partial.call(null,cljs.core.reset_BANG_,demo)], null);
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-right","div.ide-right",-6482676),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.editor.editor,cljs.core.deref.call(null,demo),cljs.core.partial.call(null,cljs.core.reset_BANG_,input),cljs.core.partial.call(null,cljs.core.reset_BANG_,selected),((function (demo,input,selected,render_out,eval_out,vim_on){
return (function (){
return eval_fn.call(null,cljs.core.deref.call(null,selected),cljs.core.partial.call(null,cljs.core.reset_BANG_,eval_out));
});})(demo,input,selected,render_out,eval_out,vim_on))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyMap","keyMap",945500512),(cljs.core.truth_(cljs.core.deref.call(null,vim_on))?"vim":"default")], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-toolbar","div.ide-toolbar",989742605),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (demo,input,selected,render_out,eval_out,vim_on){
return (function (){
return eval_fn.call(null,cljs.core.deref.call(null,input),cljs.core.partial.call(null,cljs.core.reset_BANG_,eval_out));
});})(demo,input,selected,render_out,eval_out,vim_on))
], null),"eval"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (demo,input,selected,render_out,eval_out,vim_on){
return (function (){
return eval_fn.call(null,cljs.core.deref.call(null,selected),cljs.core.partial.call(null,cljs.core.reset_BANG_,eval_out));
});})(demo,input,selected,render_out,eval_out,vim_on))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selected))], null),"eval selection (ctrl-shift-space)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (demo,input,selected,render_out,eval_out,vim_on){
return (function (){
return cljs.core.reset_BANG_.call(null,render_out,cljs.core.deref.call(null,eval_out));
});})(demo,input,selected,render_out,eval_out,vim_on))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(cljs.core.vector_QMARK_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,eval_out)))))], null),"render"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (demo,input,selected,render_out,eval_out,vim_on){
return (function (){
return cljs.core.swap_BANG_.call(null,vim_on,cljs.core.not);
});})(demo,input,selected,render_out,eval_out,vim_on))
], null),[(cljs.core.truth_(cljs.core.deref.call(null,vim_on))?"disable":"enable")," vim bindings"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.editor.output_box,cljs.core.deref.call(null,eval_out)], null)], null)], null);
});
;})(demo,input,selected,render_out,eval_out,vim_on))
});

//# sourceMappingURL=ide.js.map?rel=1610330680692
