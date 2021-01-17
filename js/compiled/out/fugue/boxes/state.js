// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.boxes.state');
goog.require('cljs.core');
goog.require('fugue.boxes.layout');
fugue.boxes.state.init_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"boxes","boxes",-420813822),cljs.core.list((1)),new cljs.core.Keyword(null,"active","active",1895962068),(1),new cljs.core.Keyword(null,"next-id","next-id",-224240762),(2),new cljs.core.Keyword(null,"files","files",-472457450),new cljs.core.PersistentArrayMap(null, 1, [(1),"#(fugue.boxes.state/insert % \"nice\" :left)"], null),new cljs.core.Keyword(null,"key-seq","key-seq",-1961389919),null], null);
fugue.boxes.state.current_buffer_text = (function fugue$boxes$state$current_buffer_text(state){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state)], null));
});
fugue.boxes.state.valid_buffer_QMARK_ = (function fugue$boxes$state$valid_buffer_QMARK_(state,id){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,id),cljs.core.flatten.call(null,new cljs.core.Keyword(null,"boxes","boxes",-420813822).cljs$core$IFn$_invoke$arity$1(state)));
});
fugue.boxes.state.activate = (function fugue$boxes$state$activate(state,id){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"active","active",1895962068),(cljs.core.truth_(fugue.boxes.state.valid_buffer_QMARK_.call(null,state,id))?id:new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state))),new cljs.core.Keyword(null,"key-seq","key-seq",-1961389919),cljs.core.PersistentVector.EMPTY);
});
fugue.boxes.state.eval_settings = (function fugue$boxes$state$eval_settings(state){
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
fugue.boxes.state.insert = (function fugue$boxes$state$insert(state,value,direction){
return cljs.core.update.call(null,fugue.boxes.state.activate.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(state)], null),value),new cljs.core.Keyword(null,"boxes","boxes",-420813822),fugue.boxes.layout.insert,direction,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc);
});
fugue.boxes.state.window_count = (function fugue$boxes$state$window_count(state){
return (new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(state) - (1));
});
fugue.boxes.state.multiple_windows_QMARK_ = (function fugue$boxes$state$multiple_windows_QMARK_(state){
return ((1) < fugue.boxes.state.window_count.call(null,state));
});
fugue.boxes.state.kill_window = (function fugue$boxes$state$kill_window(state,id){
return fugue.boxes.state.activate.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword(null,"boxes","boxes",-420813822),fugue.boxes.layout.remove,id),(id - (1)));
});
fugue.boxes.state.popup_options = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "], null),new cljs.core.PersistentArrayMap(null, 3, ["1-9","jump to buffer","e","eval","w","window"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","e"], null),new cljs.core.PersistentArrayMap(null, 1, ["b","eval current buffer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","w"], null),new cljs.core.PersistentArrayMap(null, 3, ["/","split left-right","-","split top-bottom","x","kill buffer and window"], null)]);
fugue.boxes.state.eval_action = (function fugue$boxes$state$eval_action(eval_state){
return (function (state,cb){
var vec__17676 = cljs.core.juxt.call(null,fugue.boxes.state.current_buffer_text,fugue.boxes.state.eval_settings).call(null,state);
var source = cljs.core.nth.call(null,vec__17676,(0),null);
var settings = cljs.core.nth.call(null,vec__17676,(1),null);
var on_result = ((function (vec__17676,source,settings){
return (function (result){
if(cljs.core.fn_QMARK_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result))){
return cb.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result));
} else {
return cb.call(null,fugue.boxes.state.insert,result,new cljs.core.Keyword(null,"after","after",594996914));
}
});})(vec__17676,source,settings))
;
return cljs.js.eval_str.call(null,eval_state,source,null,settings,on_result);
});
});
fugue.boxes.state.number_jumps = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null),(function (_,cb){
return cb.call(null,fugue.boxes.state.activate,i);
})], null);
}),cljs.core.range.call(null,(10))));
fugue.boxes.state.default_keymap = (function fugue$boxes$state$default_keymap(eval_state){
return cljs.core.merge.call(null,fugue.boxes.state.number_jumps,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","w","x"], null),(function (s,cb){
return cb.call(null,fugue.boxes.state.kill_window,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(s));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","w","/"], null),(function (_,cb){
return cb.call(null,fugue.boxes.state.insert,"",new cljs.core.Keyword(null,"right","right",-452581833));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","w","-"], null),(function (_,cb){
return cb.call(null,fugue.boxes.state.insert,"",new cljs.core.Keyword(null,"below","below",-926774883));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","e","b"], null),fugue.boxes.state.eval_action.call(null,eval_state)]));
});

//# sourceMappingURL=state.js.map?rel=1610894170876
