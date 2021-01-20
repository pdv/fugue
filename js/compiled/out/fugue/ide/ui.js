// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.js');
goog.require('fugue.demo.demo_loader');
goog.require('fugue.ide.util');
goog.require('fugue.ide.popup');
goog.require('fugue.ide.editor');
goog.require('fugue.ide.file');
goog.require('fugue.ide.state');
fugue.ide.ui.in_text_area_QMARK_ = (function fugue$ide$ui$in_text_area_QMARK_(){
return cljs.core._EQ_.call(null,"TEXTAREA",document.activeElement.tagName);
});
fugue.ide.ui.windows_layout = (function fugue$ide$ui$windows_layout(state,p__19119){
var map__19120 = p__19119;
var map__19120__$1 = (((((!((map__19120 == null))))?(((((map__19120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19120):map__19120);
var on_box_click = cljs.core.get.call(null,map__19120__$1,new cljs.core.Keyword(null,"on-box-click","on-box-click",177704013));
var on_text_change = cljs.core.get.call(null,map__19120__$1,new cljs.core.Keyword(null,"on-text-change","on-text-change",-1719329456));
var on_shortcut = cljs.core.get.call(null,map__19120__$1,new cljs.core.Keyword(null,"on-shortcut","on-shortcut",-393863730));
return fugue.ide.state.layout.call(null,state,((function (map__19120,map__19120__$1,on_box_click,on_text_change,on_shortcut){
return (function (id,name,value,active){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),(cljs.core.truth_(active)?"window focused":"window"),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (map__19120,map__19120__$1,on_box_click,on_text_change,on_shortcut){
return (function (){
return on_box_click.call(null,id);
});})(map__19120,map__19120__$1,on_box_click,on_text_change,on_shortcut))
], null),((cljs.core.vector_QMARK_.call(null,value))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),value], null):((typeof value === 'string')?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ide.editor.editor,value,name,active,cljs.core.partial.call(null,on_text_change,name),((function (map__19120,map__19120__$1,on_box_click,on_text_change,on_shortcut){
return (function (){
return cljs.core.List.EMPTY;
});})(map__19120,map__19120__$1,on_box_click,on_text_change,on_shortcut))
,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keyMap","keyMap",945500512),(cljs.core.truth_(fugue.ide.state.get_toggle.call(null,state,new cljs.core.Keyword(null,"vim","vim",764723904)))?"vim":"default"),new cljs.core.Keyword(null,"theme","theme",-1247880880),"base16-ocean",new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),fugue.ide.state.get_toggle.call(null,state,new cljs.core.Keyword(null,"line-numbers","line-numbers",220179237)),new cljs.core.Keyword(null,"extraKeys","extraKeys",1380834830),({"Shift-Ctrl-Space": on_shortcut})], null)], null):((cljs.core.map_QMARK_.call(null,value))?(function (){var result = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value);
var error = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(value);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output","div.output",1460347316),((cljs.core.vector_QMARK_.call(null,result))?result:(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),error.cause.message], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),result], null)
))], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.output>p.value-box","div.output>p.value-box",-264848635),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)], null)
))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.status-bar","div.status-bar",1890137111),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),name], null)], null)], null);
});})(map__19120,map__19120__$1,on_box_click,on_text_change,on_shortcut))
);
});
fugue.ide.ui.eval_settings = (function fugue$ide$ui$eval_settings(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"load","load",-1318641184),(function (m,cb){
var name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m));
var source = fugue.ide.state.file_contents.call(null,state,name);
if(cljs.core._EQ_.call(null,"live.api",name)){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),fugue.demo.demo_loader.api], null));
} else {
if(cljs.core.truth_(source)){
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),source], null));
} else {
return cb.call(null,null);

}
}
})], null);
});
fugue.ide.ui.on_eval = (function fugue$ide$ui$on_eval(state,result){
var filename = cljs.core.gensym.call(null,"result");
return fugue.ide.state.open_file.call(null,fugue.ide.state.write_file.call(null,state,filename,result),filename,new cljs.core.Keyword(null,"after","after",594996914));
});
fugue.ide.ui.eval_action = (function fugue$ide$ui$eval_action(state,eval_state,swap_cb){
var vec__19122 = cljs.core.juxt.call(null,fugue.ide.state.active_file,fugue.ide.ui.eval_settings).call(null,state);
var source = cljs.core.nth.call(null,vec__19122,(0),null);
var settings = cljs.core.nth.call(null,vec__19122,(1),null);
var on_result = ((function (vec__19122,source,settings){
return (function (result){
if(cljs.core.fn_QMARK_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result))){
return swap_cb.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result));
} else {
return swap_cb.call(null,fugue.ide.ui.on_eval,result);
}
});})(vec__19122,source,settings))
;
return cljs.js.eval_str.call(null,eval_state,source,null,settings,on_result);
});
fugue.ide.ui.add_jumps = (function fugue$ide$ui$add_jumps(state){
return cljs.core.reduce.call(null,(function (acc,i){
return fugue.ide.state.add_shortcut.call(null,acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null),new cljs.core.Keyword(null,"jump-to-window","jump-to-window",1816469031),i);
}),state,cljs.core.range.call(null,(1),(10)));
});
fugue.ide.ui.setup_actions = (function fugue$ide$ui$setup_actions(state){
return fugue.ide.state.add_shortcut.call(null,fugue.ide.state.add_action.call(null,fugue.ide.state.add_shortcut.call(null,fugue.ide.state.add_action.call(null,fugue.ide.state.add_shortcut.call(null,fugue.ide.state.add_action.call(null,fugue.ide.state.add_shortcut_group.call(null,fugue.ide.state.add_shortcut.call(null,fugue.ide.state.add_action.call(null,fugue.ide.state.add_shortcut_group.call(null,fugue.ide.state.add_shortcut.call(null,fugue.ide.state.add_action.call(null,fugue.ide.state.add_shortcut.call(null,fugue.ide.state.add_shortcut.call(null,fugue.ide.state.add_action.call(null,fugue.ide.state.add_shortcut_group.call(null,fugue.ide.state.add_shortcut.call(null,fugue.ide.state.add_shortcut.call(null,fugue.ide.state.add_action.call(null,fugue.ide.state.add_shortcut_group.call(null,fugue.ide.state.add_shortcut.call(null,fugue.ide.state.add_action.call(null,fugue.ide.ui.add_jumps.call(null,fugue.ide.state.add_action.call(null,state,new cljs.core.Keyword(null,"jump-to-window","jump-to-window",1816469031),new cljs.core.Keyword(null,"int","int",-1741416922))),new cljs.core.Keyword(null,"go-back","go-back",1642157803)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tab"], null),new cljs.core.Keyword(null,"go-back","go-back",1642157803)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["t"], null),"toggle"),new cljs.core.Keyword(null,"flip-toggle","flip-toggle",-1812061635),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vim","vim",764723904),null,new cljs.core.Keyword(null,"line-numbers","line-numbers",220179237),null], null), null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["t","v"], null),new cljs.core.Keyword(null,"flip-toggle","flip-toggle",-1812061635),new cljs.core.Keyword(null,"vim","vim",764723904)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["t","l"], null),new cljs.core.Keyword(null,"flip-toggle","flip-toggle",-1812061635),new cljs.core.Keyword(null,"line-numbers","line-numbers",220179237)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w"], null),"window"),new cljs.core.Keyword(null,"split-window","split-window",1750478920),fugue.ide.state.directions),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w","/"], null),new cljs.core.Keyword(null,"split-window","split-window",1750478920),new cljs.core.Keyword(null,"right","right",-452581833)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w","-"], null),new cljs.core.Keyword(null,"split-window","split-window",1750478920),new cljs.core.Keyword(null,"below","below",-926774883)),new cljs.core.Keyword(null,"kill-active-window","kill-active-window",485043525)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w","x"], null),new cljs.core.Keyword(null,"kill-active-window","kill-active-window",485043525)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e"], null),"eval"),new cljs.core.Keyword(null,"eval-active-window","eval-active-window",906142507)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","w"], null),new cljs.core.Keyword(null,"eval-active-window","eval-active-window",906142507)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["f"], null),"file"),new cljs.core.Keyword(null,"open-file","open-file",-895422430),new cljs.core.Keyword(null,"file","file",-1269645878),fugue.ide.state.directions),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["f","o"], null),new cljs.core.Keyword(null,"open-file","open-file",-895422430)),new cljs.core.Keyword(null,"file-download","file-download",-218211756)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["f","d"], null),new cljs.core.Keyword(null,"file-download","file-download",-218211756)),new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["f","u"], null),new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130));
});
fugue.ide.ui.make_actions = (function fugue$ide$ui$make_actions(state_atom,eval_state){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"open-file","open-file",-895422430),new cljs.core.Keyword(null,"kill-active-window","kill-active-window",485043525),new cljs.core.Keyword(null,"jump-to-window","jump-to-window",1816469031),new cljs.core.Keyword(null,"split-window","split-window",1750478920),new cljs.core.Keyword(null,"go-back","go-back",1642157803),new cljs.core.Keyword(null,"eval-active-window","eval-active-window",906142507),new cljs.core.Keyword(null,"file-upload","file-upload",-1929678130),new cljs.core.Keyword(null,"file-download","file-download",-218211756),new cljs.core.Keyword(null,"flip-toggle","flip-toggle",-1812061635)],[cljs.core.partial.call(null,cljs.core.swap_BANG_,state_atom,fugue.ide.state.open_file),cljs.core.partial.call(null,cljs.core.swap_BANG_,state_atom,fugue.ide.state.kill_active_window),cljs.core.partial.call(null,cljs.core.swap_BANG_,state_atom,fugue.ide.state.activate),cljs.core.partial.call(null,cljs.core.swap_BANG_,state_atom,fugue.ide.state.split),cljs.core.partial.call(null,cljs.core.swap_BANG_,state_atom,fugue.ide.state.go_back),(function (){
return fugue.ide.ui.eval_action.call(null,cljs.core.deref.call(null,state_atom),eval_state,cljs.core.partial.call(null,cljs.core.swap_BANG_,state_atom));
}),(function (){
return fugue.ide.file.upload.call(null,cljs.core.partial.call(null,cljs.core.swap_BANG_,state_atom,fugue.ide.state.on_upload));
}),(function (){
return cljs.core.apply.call(null,fugue.ide.file.download,cljs.core.juxt.call(null,fugue.ide.state.active_file_name,fugue.ide.state.active_file).call(null,cljs.core.deref.call(null,state_atom)));
}),cljs.core.partial.call(null,cljs.core.swap_BANG_,state_atom,fugue.ide.state.flip_toggle)]);
});
fugue.ide.ui.init_files = new cljs.core.PersistentArrayMap(null, 2, ["fugue.demo.cantor",fugue.demo.demo_loader.cantor,"fugue.demo.cof",fugue.demo.demo_loader.cof], null);
fugue.ide.ui.app = (function fugue$ide$ui$app(){
var eval_state = cljs.js.empty_state.call(null);
var state = reagent.core.atom.call(null,fugue.ide.ui.setup_actions.call(null,fugue.ide.state.init_state.call(null,fugue.ide.ui.init_files)));
var actions = fugue.ide.ui.make_actions.call(null,state,eval_state);
var swap_cb = cljs.core.partial.call(null,cljs.core.swap_BANG_,state);
var action_cb = ((function (eval_state,state,actions,swap_cb){
return (function() { 
var G__19126__delegate = function (name,args){
return cljs.core.apply.call(null,cljs.core.get.call(null,actions,name),args);
};
var G__19126 = function (name,var_args){
var args = null;
if (arguments.length > 1) {
var G__19127__i = 0, G__19127__a = new Array(arguments.length -  1);
while (G__19127__i < G__19127__a.length) {G__19127__a[G__19127__i] = arguments[G__19127__i + 1]; ++G__19127__i;}
  args = new cljs.core.IndexedSeq(G__19127__a,0,null);
} 
return G__19126__delegate.call(this,name,args);};
G__19126.cljs$lang$maxFixedArity = 1;
G__19126.cljs$lang$applyTo = (function (arglist__19128){
var name = cljs.core.first(arglist__19128);
var args = cljs.core.rest(arglist__19128);
return G__19126__delegate(name,args);
});
G__19126.cljs$core$IFn$_invoke$arity$variadic = G__19126__delegate;
return G__19126;
})()
;})(eval_state,state,actions,swap_cb))
;
fugue.ide.ui.on_key_down = ((function (eval_state,state,actions,swap_cb,action_cb){
return (function fugue$ide$ui$app_$_on_key_down(e){
if(fugue.ide.ui.in_text_area_QMARK_.call(null)){
return null;
} else {
e.preventDefault();

return fugue.ide.state.on_key.call(null,cljs.core.deref.call(null,state),e.key,swap_cb,action_cb);
}
});})(eval_state,state,actions,swap_cb,action_cb))
;

document.addEventListener("keydown",fugue.ide.ui.on_key_down);

CodeMirror.Vim.defineAction("space!",((function (eval_state,state,actions,swap_cb,action_cb){
return (function (){
return cljs.core.swap_BANG_.call(null,state,fugue.ide.state.open_popup);
});})(eval_state,state,actions,swap_cb,action_cb))
);

CodeMirror.Vim.mapCommand("<Space>","action","space!",({}),({"context": "normal"}));

return ((function (eval_state,state,actions,swap_cb,action_cb){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ide","div.ide",109632974),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ide.ui.windows_layout,cljs.core.deref.call(null,state),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-box-click","on-box-click",177704013),((function (eval_state,state,actions,swap_cb,action_cb){
return (function (p1__19125_SHARP_){
return cljs.core.swap_BANG_.call(null,state,fugue.ide.state.activate,p1__19125_SHARP_);
});})(eval_state,state,actions,swap_cb,action_cb))
,new cljs.core.Keyword(null,"on-text-change","on-text-change",-1719329456),cljs.core.partial.call(null,cljs.core.swap_BANG_,state,fugue.ide.state.write_file),new cljs.core.Keyword(null,"on-shortcut","on-shortcut",-393863730),((function (eval_state,state,actions,swap_cb,action_cb){
return (function (){
return cljs.core.swap_BANG_.call(null,state,fugue.ide.state.open_popup);
});})(eval_state,state,actions,swap_cb,action_cb))
], null)], null),(cljs.core.truth_(fugue.ide.state.in_shortcuts_QMARK_.call(null,cljs.core.deref.call(null,state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ide.popup.shortcuts_popup,fugue.ide.state.popup_menu.call(null,cljs.core.deref.call(null,state))], null):null),(cljs.core.truth_(fugue.ide.state.in_minibuffer_QMARK_.call(null,cljs.core.deref.call(null,state)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ide.popup.mini_buffer,fugue.ide.state.minibuffer_options.call(null,cljs.core.deref.call(null,state)),cljs.core.partial.call(null,cljs.core.swap_BANG_,state,fugue.ide.state.close_popup),cljs.core.partial.call(null,fugue.ide.state.on_minibuffer_submit,cljs.core.deref.call(null,state),swap_cb,action_cb)], null):null)], null);
});
;})(eval_state,state,actions,swap_cb,action_cb))
});

//# sourceMappingURL=ui.js.map?rel=1611101812728
