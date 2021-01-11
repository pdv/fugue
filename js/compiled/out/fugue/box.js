// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.box');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('fugue.editor');
fugue.box.name_input = (function fugue$box$name_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38360_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__38360_SHARP_.target.value);
})], null)], null);
});
fugue.box.box = (function fugue$box$box(init,eval_fn){
var name = reagent.core.atom.call(null,"");
var input = reagent.core.atom.call(null,init);
var output = reagent.core.atom.call(null,null);
return ((function (name,input,output){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-toolbar","div.box-toolbar",-542220004),(cljs.core.truth_(cljs.core.deref.call(null,output))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref.call(null,name)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.box.name_input,name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#eval","button#eval",-429647517),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,input,output){
return (function (){
return eval_fn.call(null,cljs.core.deref.call(null,input),cljs.core.partial.call(null,cljs.core.reset_BANG_,output));
});})(name,input,output))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,name))], null),"evaluate"], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#close","button#close",357025174),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.List.EMPTY], null),"close"], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,output))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-top","div.box-top",-2099572035),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.editor.output_box,cljs.core.deref.call(null,output)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-bottom","div.box-bottom",-1627591847),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.editor.editor,init,cljs.core.partial.call(null,cljs.core.reset_BANG_,input)], null)], null)], null);
});
;})(name,input,output))
});

//# sourceMappingURL=box.js.map?rel=1610383906570
