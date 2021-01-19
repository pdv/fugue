// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ide.actions');
goog.require('cljs.core');
goog.require('cljs.js');
goog.require('fugue.ide.state');
fugue.ide.actions.eval_settings = (function fugue$ide$actions$eval_settings(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"load","load",-1318641184),(function (m,cb){
var temp__5718__auto__ = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('')], null));
if(cljs.core.truth_(temp__5718__auto__)){
var source = temp__5718__auto__;
return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),source], null));
} else {
return cb.call(null,null);
}
})], null);
});
fugue.ide.actions.on_eval = (function fugue$ide$actions$on_eval(state,result){
var filename = cljs.core.gensym.call(null,"result");
return fugue.ide.state.open_file.call(null,fugue.ide.state.write_file.call(null,state,filename,result),filename,new cljs.core.Keyword(null,"after","after",594996914));
});
fugue.ide.actions.eval_action = (function fugue$ide$actions$eval_action(state,eval_state,swap_cb){
var vec__11980 = cljs.core.juxt.call(null,fugue.ide.state.active_window_file_contents,fugue.ide.actions.eval_settings).call(null,state);
var source = cljs.core.nth.call(null,vec__11980,(0),null);
var settings = cljs.core.nth.call(null,vec__11980,(1),null);
var on_result = ((function (vec__11980,source,settings){
return (function (result){
if(cljs.core.fn_QMARK_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result))){
return swap_cb.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result));
} else {
return swap_cb.call(null,fugue.ide.actions.on_eval,result);
}
});})(vec__11980,source,settings))
;
return cljs.js.eval_str.call(null,eval_state,source,null,settings,on_result);
});
fugue.ide.actions.number_jumps = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null),(function (_,cb){
return cb.call(null,fugue.ide.state.activate,i);
})], null);
}),cljs.core.range.call(null,(10))));
fugue.ide.actions.split_right = (function fugue$ide$actions$split_right(state,cb){
return cb.call(null,fugue.ide.state.open_file,fugue.ide.state.active_window_name.call(null,state),new cljs.core.Keyword(null,"right","right",-452581833));
});
fugue.ide.actions.split_down = (function fugue$ide$actions$split_down(state,cb){
return cb.call(null,fugue.ide.state.open_file,fugue.ide.state.active_window_name.call(null,state),new cljs.core.Keyword(null,"below","below",-926774883));
});
fugue.ide.actions.go_back = (function fugue$ide$actions$go_back(_,cb){
return cb.call(null,fugue.ide.state.go_back);
});

//# sourceMappingURL=actions.js.map?rel=1611075877182
