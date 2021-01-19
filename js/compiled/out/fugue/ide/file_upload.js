// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide.file_upload');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
fugue.ide.file_upload.file_upload = (function fugue$ide$file_upload$file_upload(click,on_upload){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var node = reagent.dom.dom_node.call(null,this$);
return node.addEventListener("change",((function (node){
return (function (){
var files = node.files;
var file = (files[(files.length - (1))]);
var name = file.name;
if(cljs.core.truth_(file)){
return file.text().then(cljs.core.partial.call(null,on_upload,name));
} else {
return null;
}
});})(node))
);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
var argv = reagent.core.argv.call(null,this$);
var was_click = cljs.core.second.call(null,old_argv);
var is_click = cljs.core.second.call(null,argv);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,was_click);
if(and__4120__auto__){
return is_click;
} else {
return and__4120__auto__;
}
})())){
return reagent.dom.dom_node.call(null,this$).click();
} else {
return null;
}
})], null));
});

//# sourceMappingURL=file_upload.js.map?rel=1611070475651
