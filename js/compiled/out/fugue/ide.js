// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('fugue.editor');
fugue.ide.ide = (function fugue$ide$ide(init,eval_fn){
var input = reagent.core.atom.call(null,init);
var output = reagent.core.atom.call(null,null);
return ((function (input,output){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide","div.ide",109632974),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-left","div.ide-left",-417241263),(cljs.core.truth_(cljs.core.deref.call(null,output))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.editor.output_box,cljs.core.deref.call(null,output)], null):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-right","div.ide-right",-6482676),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.editor.editor,init,cljs.core.partial.call(null,cljs.core.reset_BANG_,input)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide-toolbar","div.ide-toolbar",989742605),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#eval","button#eval",-429647517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (input,output){
return (function (){
return eval_fn.call(null,cljs.core.deref.call(null,input),cljs.core.partial.call(null,cljs.core.reset_BANG_,output));
});})(input,output))
], null),"eval"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.editor.editor,"repl",cljs.core.partial.call(null,cljs.core.print)], null)], null)], null);
});
;})(input,output))
});

//# sourceMappingURL=ide.js.map?rel=1610128216777
