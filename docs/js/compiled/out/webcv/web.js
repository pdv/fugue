// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.web');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('cljs.pprint');
goog.require('oops.core');
goog.require('webcv.synthdef');
goog.require('webcv.audio');
goog.require('webcv.midi');
goog.require('webcv.envelope');
goog.require('webcv.feedback');
goog.require('webcv.bootstrap');
webcv.web.render = (function webcv$web$render(ctx,text,cb){
var graph = webcv.bootstrap.read_eval.call(null,text);
webcv.synthdef.make_synth.call(null,ctx,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(graph));

return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("webcv.web","ctx","webcv.web/ctx",992368429),ctx,new cljs.core.Keyword("webcv.web","graph","webcv.web/graph",-179502524),graph], null));
});
webcv.web.editor_did_mount = (function webcv$web$editor_did_mount(input){
return (function (this$){
var cm = CodeMirror.fromTextArea(reagent.dom.dom_node.call(null,this$),({"mode": "clojure", "lineNumbers": true}));
return cm.on("change",((function (cm){
return (function (p1__34816_SHARP_){
return cljs.core.reset_BANG_.call(null,input,p1__34816_SHARP_.getValue());
});})(cm))
);
});
});
webcv.web.editor = (function webcv$web$editor(input){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.deref.call(null,input),new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"off"], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),webcv.web.editor_did_mount.call(null,input)], null));
});
webcv.web.init_text_old = "(out (sin-osc (lfo 440 100 0.2)))";
webcv.web.init_text_2 = "(let [midi (midi-in \"Portable Grand-1\")]\n     (-> (sin-osc (hz midi))\n         (gain (gate midi))\n         (out)))";
webcv.web.init_text = "(let [midi (midi-in \"Portable Grand-1\")\n      env (env-gen (adsr 0.1 0.3 0.4 0.4) (gate midi) 1400 50)]\n     (-> (saw (hz midi))\n         (lpf env)\n         (gain 0.5)\n         (dub-delay 0.3 0.5)\n         (out)))";
webcv.web.repl = (function webcv$web$repl(){
var audio_ctx = reagent.core.atom.call(null,null);
var midi_ctx = reagent.core.atom.call(null,null);
var input = reagent.core.atom.call(null,webcv.web.init_text);
var output = reagent.core.atom.call(null,null);
return ((function (audio_ctx,midi_ctx,input,output){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webcv.web.editor,input], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (audio_ctx,midi_ctx,input,output){
return (function (){
var temp__5718__auto___34843 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___34843)){
var old_ctx_34844 = temp__5718__auto___34843;
new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438).cljs$core$IFn$_invoke$arity$1(old_ctx_34844).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,webcv.audio.make_ctx.call(null));
});})(audio_ctx,midi_ctx,input,output))
], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (audio_ctx,midi_ctx,input,output){
return (function (){
return webcv.web.render.call(null,cljs.core.merge.call(null,cljs.core.deref.call(null,audio_ctx),cljs.core.deref.call(null,midi_ctx)),cljs.core.deref.call(null,input),cljs.core.partial.call(null,cljs.core.reset_BANG_,output));
});})(audio_ctx,midi_ctx,input,output))
], null),"run"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (audio_ctx,midi_ctx,input,output){
return (function (){
return webcv.midi.make_ctx.call(null,cljs.core.partial.call(null,cljs.core.reset_BANG_,midi_ctx));
});})(audio_ctx,midi_ctx,input,output))
], null),"reset midi context"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__34817 = temp__5718__auto__;
var map__34817__$1 = (((((!((map__34817 == null))))?(((((map__34817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34817):map__34817);
var actx = cljs.core.get.call(null,map__34817__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
return ["audio ctx loaded, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actx.destination.maxChannelCount)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,midi_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var mctx = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"midi ins"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = ((function (mctx,temp__5718__auto__,audio_ctx,midi_ctx,input,output){
return (function webcv$web$repl_$_iter__34819(s__34820){
return (new cljs.core.LazySeq(null,((function (mctx,temp__5718__auto__,audio_ctx,midi_ctx,input,output){
return (function (){
var s__34820__$1 = s__34820;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34820__$1);
if(temp__5720__auto__){
var s__34820__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34820__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34820__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34822 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34821 = (0);
while(true){
if((i__34821 < size__4522__auto__)){
var vec__34823 = cljs.core._nth.call(null,c__4521__auto__,i__34821);
var name = cljs.core.nth.call(null,vec__34823,(0),null);
var _ = cljs.core.nth.call(null,vec__34823,(1),null);
cljs.core.chunk_append.call(null,b__34822,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),name], null));

var G__34845 = (i__34821 + (1));
i__34821 = G__34845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34822),webcv$web$repl_$_iter__34819.call(null,cljs.core.chunk_rest.call(null,s__34820__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34822),null);
}
} else {
var vec__34826 = cljs.core.first.call(null,s__34820__$2);
var name = cljs.core.nth.call(null,vec__34826,(0),null);
var _ = cljs.core.nth.call(null,vec__34826,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),name], null),webcv$web$repl_$_iter__34819.call(null,cljs.core.rest.call(null,s__34820__$2)));
}
} else {
return null;
}
break;
}
});})(mctx,temp__5718__auto__,audio_ctx,midi_ctx,input,output))
,null,null));
});})(mctx,temp__5718__auto__,audio_ctx,midi_ctx,input,output))
;
return iter__4523__auto__.call(null,new cljs.core.Keyword("webcv.midi","ins","webcv.midi/ins",1736405462).cljs$core$IFn$_invoke$arity$1(mctx));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"midi outs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = ((function (mctx,temp__5718__auto__,audio_ctx,midi_ctx,input,output){
return (function webcv$web$repl_$_iter__34829(s__34830){
return (new cljs.core.LazySeq(null,((function (mctx,temp__5718__auto__,audio_ctx,midi_ctx,input,output){
return (function (){
var s__34830__$1 = s__34830;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34830__$1);
if(temp__5720__auto__){
var s__34830__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34830__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34830__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34832 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34831 = (0);
while(true){
if((i__34831 < size__4522__auto__)){
var vec__34833 = cljs.core._nth.call(null,c__4521__auto__,i__34831);
var name = cljs.core.nth.call(null,vec__34833,(0),null);
var _ = cljs.core.nth.call(null,vec__34833,(1),null);
cljs.core.chunk_append.call(null,b__34832,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),name], null));

var G__34846 = (i__34831 + (1));
i__34831 = G__34846;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34832),webcv$web$repl_$_iter__34829.call(null,cljs.core.chunk_rest.call(null,s__34830__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34832),null);
}
} else {
var vec__34836 = cljs.core.first.call(null,s__34830__$2);
var name = cljs.core.nth.call(null,vec__34836,(0),null);
var _ = cljs.core.nth.call(null,vec__34836,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),name], null),webcv$web$repl_$_iter__34829.call(null,cljs.core.rest.call(null,s__34830__$2)));
}
} else {
return null;
}
break;
}
});})(mctx,temp__5718__auto__,audio_ctx,midi_ctx,input,output))
,null,null));
});})(mctx,temp__5718__auto__,audio_ctx,midi_ctx,input,output))
;
return iter__4523__auto__.call(null,new cljs.core.Keyword("webcv.midi","outs","webcv.midi/outs",838958117).cljs$core$IFn$_invoke$arity$1(mctx));
})()], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"midi ctx not loaded"], null);
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34839_34847 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34840_34848 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34841_34849 = true;
var _STAR_print_fn_STAR__temp_val__34842_34850 = ((function (_STAR_print_newline_STAR__orig_val__34839_34847,_STAR_print_fn_STAR__orig_val__34840_34848,_STAR_print_newline_STAR__temp_val__34841_34849,sb__4661__auto__,audio_ctx,midi_ctx,input,output){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__34839_34847,_STAR_print_fn_STAR__orig_val__34840_34848,_STAR_print_newline_STAR__temp_val__34841_34849,sb__4661__auto__,audio_ctx,midi_ctx,input,output))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34841_34849;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34842_34850;

try{cljs.pprint.pprint.call(null,new cljs.core.Keyword("webcv.web","graph","webcv.web/graph",-179502524).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,output)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34840_34848;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34839_34847;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], null)], null);
});
;})(audio_ctx,midi_ctx,input,output))
});
webcv.web._main = (function webcv$web$_main(){
cljs.core.enable_console_print_BANG_.call(null);

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webcv.web.repl], null),document.getElementById("app"));
});
webcv.web.on_js_reload = (function webcv$web$on_js_reload(){
return webcv.web._main.call(null);
});
webcv.web._main.call(null);

//# sourceMappingURL=web.js.map?rel=1600808349389
