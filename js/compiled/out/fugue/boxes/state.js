// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.boxes.state');
goog.require('cljs.core');
goog.require('fugue.boxes.layout');
fugue.boxes.state.init_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"boxes","boxes",-420813822),cljs.core.list((1)),new cljs.core.Keyword(null,"active","active",1895962068),(1),new cljs.core.Keyword(null,"focused","focused",1851572115),(1),new cljs.core.Keyword(null,"next-id","next-id",-224240762),(2),new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"files","files",-472457450),new cljs.core.PersistentArrayMap(null, 1, [(1),"(+ 1 23)"], null),new cljs.core.Keyword(null,"key-seq","key-seq",-1961389919),null], null);
fugue.boxes.state.current_buffer_text = (function fugue$boxes$state$current_buffer_text(state){
return cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state)], null));
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
fugue.boxes.state.show_popup = (function fugue$boxes$state$show_popup(state){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"focused","focused",1851572115),null),new cljs.core.Keyword(null,"key-seq","key-seq",-1961389919),cljs.core.PersistentVector.EMPTY);
});
fugue.boxes.state.hide_popup = (function fugue$boxes$state$hide_popup(state){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"focused","focused",1851572115),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"key-seq","key-seq",-1961389919),null);
});
fugue.boxes.state.activate = (function fugue$boxes$state$activate(state,id){
return fugue.boxes.state.hide_popup.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"active","active",1895962068),id));
});
fugue.boxes.state.on_eval = (function fugue$boxes$state$on_eval(state,result){
return cljs.core.update.call(null,fugue.boxes.state.activate.call(null,cljs.core.update.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result)),new cljs.core.Keyword(null,"boxes","boxes",-420813822),fugue.boxes.layout.insert,new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"next-id","next-id",-224240762),cljs.core.inc);
});
fugue.boxes.state.do_eval = (function fugue$boxes$state$do_eval(eval_state,state,state_cb){
var vec__17675 = cljs.core.juxt.call(null,fugue.boxes.state.current_buffer_text,fugue.boxes.state.eval_settings).call(null,state);
var source = cljs.core.nth.call(null,vec__17675,(0),null);
var settings = cljs.core.nth.call(null,vec__17675,(1),null);
var eval_cb = ((function (vec__17675,source,settings){
return (function (result){
return state_cb.call(null,((function (vec__17675,source,settings){
return (function (state__$1){
return fugue.boxes.state.on_eval.call(null,state__$1,result);
});})(vec__17675,source,settings))
);
});})(vec__17675,source,settings))
;
return cljs.js.eval_str.call(null,eval_state,source,null,settings,eval_cb);
});
fugue.boxes.state.popup_options = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e - eval","f - files","w - windows","x - x"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["b - eval current buffer"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["f"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["o - open","u - upload","d - download"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["w"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["s - split"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["x"], null)]);
fugue.boxes.state.jump_action = (function fugue$boxes$state$jump_action(id){
return (function (s){
return fugue.boxes.state.activate.call(null,s,id);
});
});
fugue.boxes.state.jump_actions = (function fugue$boxes$state$jump_actions(state){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__17678_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17678_SHARP_)], null),(function (_,cb){
return cb.call(null,fugue.boxes.state.jump_action.call(null,p1__17678_SHARP_));
})],null));
}),cljs.core.range.call(null,new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(state))));
});
fugue.boxes.state.eval_actions = (function fugue$boxes$state$eval_actions(eval_state){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","b"], null),cljs.core.partial.call(null,fugue.boxes.state.do_eval,eval_state)]);
});
/**
 * actions take the current state and a callback, and call the callback with a function on state
 */
fugue.boxes.state.make_actions = (function fugue$boxes$state$make_actions(state,eval_state){
return cljs.core.merge.call(null,fugue.boxes.state.jump_actions.call(null,state),fugue.boxes.state.eval_actions.call(null,eval_state));
});
/**
 * actions is a map of key sequences to actions (see make-actions)
 * cb takes functions on state
 */
fugue.boxes.state.on_key = (function fugue$boxes$state$on_key(state,actions,key,cb){
var old_seq = new cljs.core.Keyword(null,"key-seq","key-seq",-1961389919).cljs$core$IFn$_invoke$arity$1(state);
var new_seq = cljs.core.conj.call(null,old_seq,key);
if(((cljs.core.empty_QMARK_.call(null,old_seq)) && (cljs.core._EQ_.call(null," ",key)))){
return cb.call(null,fugue.boxes.state.show_popup);
} else {
if(cljs.core.contains_QMARK_.call(null,actions,new_seq)){
return cljs.core.get.call(null,actions,new_seq).call(null,state,cb);
} else {
if(cljs.core.contains_QMARK_.call(null,fugue.boxes.state.popup_options,new_seq)){
return cb.call(null,((function (old_seq,new_seq){
return (function (p1__17679_SHARP_){
return cljs.core.assoc.call(null,p1__17679_SHARP_,new cljs.core.Keyword(null,"key-seq","key-seq",-1961389919),new_seq);
});})(old_seq,new_seq))
);
} else {
return cb.call(null,fugue.boxes.state.hide_popup);

}
}
}
});

//# sourceMappingURL=state.js.map?rel=1610745457847
