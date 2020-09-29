// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.ctx_ctrls');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('webcv.midi');
goog.require('webcv.audio');
webcv.ctx_ctrls.midi_monitor = (function webcv$ctx_ctrls$midi_monitor(midi_ctx){
var inputs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__36581_36681 = cljs.core.seq.call(null,new cljs.core.Keyword("webcv.midi","ins","webcv.midi/ins",1736405462).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__36583_36682 = null;
var count__36584_36683 = (0);
var i__36585_36684 = (0);
while(true){
if((i__36585_36684 < count__36584_36683)){
var vec__36627_36685 = cljs.core._nth.call(null,chunk__36583_36682,i__36585_36684);
var in_name_36686 = cljs.core.nth.call(null,vec__36627_36685,(0),null);
var in_mult_36687 = cljs.core.nth.call(null,vec__36627_36685,(1),null);
var in_chan_36688 = cljs.core.async.chan.call(null);
var c__32649__auto___36689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__36581_36681,chunk__36583_36682,count__36584_36683,i__36585_36684,c__32649__auto___36689,in_chan_36688,vec__36627_36685,in_name_36686,in_mult_36687,inputs){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (seq__36581_36681,chunk__36583_36682,count__36584_36683,i__36585_36684,c__32649__auto___36689,in_chan_36688,vec__36627_36685,in_name_36686,in_mult_36687,inputs){
return (function (state_36638){
var state_val_36639 = (state_36638[(1)]);
if((state_val_36639 === (1))){
var state_36638__$1 = state_36638;
var statearr_36640_36690 = state_36638__$1;
(statearr_36640_36690[(2)] = null);

(statearr_36640_36690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36639 === (2))){
var state_36638__$1 = state_36638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36638__$1,(4),in_chan_36688);
} else {
if((state_val_36639 === (3))){
var inst_36636 = (state_36638[(2)]);
var state_36638__$1 = state_36638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36638__$1,inst_36636);
} else {
if((state_val_36639 === (4))){
var inst_36632 = (state_36638[(2)]);
var inst_36633 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_36686,inst_36632);
var state_36638__$1 = (function (){var statearr_36641 = state_36638;
(statearr_36641[(7)] = inst_36633);

return statearr_36641;
})();
var statearr_36642_36691 = state_36638__$1;
(statearr_36642_36691[(2)] = null);

(statearr_36642_36691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__36581_36681,chunk__36583_36682,count__36584_36683,i__36585_36684,c__32649__auto___36689,in_chan_36688,vec__36627_36685,in_name_36686,in_mult_36687,inputs))
;
return ((function (seq__36581_36681,chunk__36583_36682,count__36584_36683,i__36585_36684,switch__32554__auto__,c__32649__auto___36689,in_chan_36688,vec__36627_36685,in_name_36686,in_mult_36687,inputs){
return (function() {
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__ = null;
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0 = (function (){
var statearr_36643 = [null,null,null,null,null,null,null,null];
(statearr_36643[(0)] = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__);

(statearr_36643[(1)] = (1));

return statearr_36643;
});
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1 = (function (state_36638){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_36638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e36644){if((e36644 instanceof Object)){
var ex__32558__auto__ = e36644;
var statearr_36645_36692 = state_36638;
(statearr_36645_36692[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36693 = state_36638;
state_36638 = G__36693;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__ = function(state_36638){
switch(arguments.length){
case 0:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0.call(this);
case 1:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1.call(this,state_36638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0;
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1;
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__;
})()
;})(seq__36581_36681,chunk__36583_36682,count__36584_36683,i__36585_36684,switch__32554__auto__,c__32649__auto___36689,in_chan_36688,vec__36627_36685,in_name_36686,in_mult_36687,inputs))
})();
var state__32651__auto__ = (function (){var statearr_36646 = f__32650__auto__.call(null);
(statearr_36646[(6)] = c__32649__auto___36689);

return statearr_36646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(seq__36581_36681,chunk__36583_36682,count__36584_36683,i__36585_36684,c__32649__auto___36689,in_chan_36688,vec__36627_36685,in_name_36686,in_mult_36687,inputs))
);


cljs.core.async.tap.call(null,in_mult_36687,in_chan_36688);


var G__36694 = seq__36581_36681;
var G__36695 = chunk__36583_36682;
var G__36696 = count__36584_36683;
var G__36697 = (i__36585_36684 + (1));
seq__36581_36681 = G__36694;
chunk__36583_36682 = G__36695;
count__36584_36683 = G__36696;
i__36585_36684 = G__36697;
continue;
} else {
var temp__5720__auto___36698 = cljs.core.seq.call(null,seq__36581_36681);
if(temp__5720__auto___36698){
var seq__36581_36699__$1 = temp__5720__auto___36698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36581_36699__$1)){
var c__4550__auto___36700 = cljs.core.chunk_first.call(null,seq__36581_36699__$1);
var G__36701 = cljs.core.chunk_rest.call(null,seq__36581_36699__$1);
var G__36702 = c__4550__auto___36700;
var G__36703 = cljs.core.count.call(null,c__4550__auto___36700);
var G__36704 = (0);
seq__36581_36681 = G__36701;
chunk__36583_36682 = G__36702;
count__36584_36683 = G__36703;
i__36585_36684 = G__36704;
continue;
} else {
var vec__36647_36705 = cljs.core.first.call(null,seq__36581_36699__$1);
var in_name_36706 = cljs.core.nth.call(null,vec__36647_36705,(0),null);
var in_mult_36707 = cljs.core.nth.call(null,vec__36647_36705,(1),null);
var in_chan_36708 = cljs.core.async.chan.call(null);
var c__32649__auto___36709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__36581_36681,chunk__36583_36682,count__36584_36683,i__36585_36684,c__32649__auto___36709,in_chan_36708,vec__36647_36705,in_name_36706,in_mult_36707,seq__36581_36699__$1,temp__5720__auto___36698,inputs){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (seq__36581_36681,chunk__36583_36682,count__36584_36683,i__36585_36684,c__32649__auto___36709,in_chan_36708,vec__36647_36705,in_name_36706,in_mult_36707,seq__36581_36699__$1,temp__5720__auto___36698,inputs){
return (function (state_36658){
var state_val_36659 = (state_36658[(1)]);
if((state_val_36659 === (1))){
var state_36658__$1 = state_36658;
var statearr_36660_36710 = state_36658__$1;
(statearr_36660_36710[(2)] = null);

(statearr_36660_36710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36659 === (2))){
var state_36658__$1 = state_36658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36658__$1,(4),in_chan_36708);
} else {
if((state_val_36659 === (3))){
var inst_36656 = (state_36658[(2)]);
var state_36658__$1 = state_36658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36658__$1,inst_36656);
} else {
if((state_val_36659 === (4))){
var inst_36652 = (state_36658[(2)]);
var inst_36653 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_36706,inst_36652);
var state_36658__$1 = (function (){var statearr_36661 = state_36658;
(statearr_36661[(7)] = inst_36653);

return statearr_36661;
})();
var statearr_36662_36711 = state_36658__$1;
(statearr_36662_36711[(2)] = null);

(statearr_36662_36711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__36581_36681,chunk__36583_36682,count__36584_36683,i__36585_36684,c__32649__auto___36709,in_chan_36708,vec__36647_36705,in_name_36706,in_mult_36707,seq__36581_36699__$1,temp__5720__auto___36698,inputs))
;
return ((function (seq__36581_36681,chunk__36583_36682,count__36584_36683,i__36585_36684,switch__32554__auto__,c__32649__auto___36709,in_chan_36708,vec__36647_36705,in_name_36706,in_mult_36707,seq__36581_36699__$1,temp__5720__auto___36698,inputs){
return (function() {
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__ = null;
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0 = (function (){
var statearr_36663 = [null,null,null,null,null,null,null,null];
(statearr_36663[(0)] = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__);

(statearr_36663[(1)] = (1));

return statearr_36663;
});
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1 = (function (state_36658){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_36658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e36664){if((e36664 instanceof Object)){
var ex__32558__auto__ = e36664;
var statearr_36665_36712 = state_36658;
(statearr_36665_36712[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36713 = state_36658;
state_36658 = G__36713;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__ = function(state_36658){
switch(arguments.length){
case 0:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0.call(this);
case 1:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1.call(this,state_36658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0;
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1;
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__;
})()
;})(seq__36581_36681,chunk__36583_36682,count__36584_36683,i__36585_36684,switch__32554__auto__,c__32649__auto___36709,in_chan_36708,vec__36647_36705,in_name_36706,in_mult_36707,seq__36581_36699__$1,temp__5720__auto___36698,inputs))
})();
var state__32651__auto__ = (function (){var statearr_36666 = f__32650__auto__.call(null);
(statearr_36666[(6)] = c__32649__auto___36709);

return statearr_36666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(seq__36581_36681,chunk__36583_36682,count__36584_36683,i__36585_36684,c__32649__auto___36709,in_chan_36708,vec__36647_36705,in_name_36706,in_mult_36707,seq__36581_36699__$1,temp__5720__auto___36698,inputs))
);


cljs.core.async.tap.call(null,in_mult_36707,in_chan_36708);


var G__36714 = cljs.core.next.call(null,seq__36581_36699__$1);
var G__36715 = null;
var G__36716 = (0);
var G__36717 = (0);
seq__36581_36681 = G__36714;
chunk__36583_36682 = G__36715;
count__36584_36683 = G__36716;
i__36585_36684 = G__36717;
continue;
}
} else {
}
}
break;
}

return ((function (inputs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword("webcv.midi","ins","webcv.midi/ins",1736405462).cljs$core$IFn$_invoke$arity$1(midi_ctx)))," ins"].join('')], null),(function (){var iter__4523__auto__ = ((function (inputs){
return (function webcv$ctx_ctrls$midi_monitor_$_iter__36667(s__36668){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__36668__$1 = s__36668;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36668__$1);
if(temp__5720__auto__){
var s__36668__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36668__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__36668__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__36670 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__36669 = (0);
while(true){
if((i__36669 < size__4522__auto__)){
var vec__36671 = cljs.core._nth.call(null,c__4521__auto__,i__36669);
var in_name = cljs.core.nth.call(null,vec__36671,(0),null);
var map__36674 = cljs.core.nth.call(null,vec__36671,(1),null);
var map__36674__$1 = (((((!((map__36674 == null))))?(((((map__36674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36674):map__36674);
var type = cljs.core.get.call(null,map__36674__$1,new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868));
var note = cljs.core.get.call(null,map__36674__$1,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544));
var velocity = cljs.core.get.call(null,map__36674__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
cljs.core.chunk_append.call(null,b__36670,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__36718 = (i__36669 + (1));
i__36669 = G__36718;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36670),webcv$ctx_ctrls$midi_monitor_$_iter__36667.call(null,cljs.core.chunk_rest.call(null,s__36668__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36670),null);
}
} else {
var vec__36676 = cljs.core.first.call(null,s__36668__$2);
var in_name = cljs.core.nth.call(null,vec__36676,(0),null);
var map__36679 = cljs.core.nth.call(null,vec__36676,(1),null);
var map__36679__$1 = (((((!((map__36679 == null))))?(((((map__36679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36679):map__36679);
var type = cljs.core.get.call(null,map__36679__$1,new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868));
var note = cljs.core.get.call(null,map__36679__$1,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544));
var velocity = cljs.core.get.call(null,map__36679__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),webcv$ctx_ctrls$midi_monitor_$_iter__36667.call(null,cljs.core.rest.call(null,s__36668__$2)));
}
} else {
return null;
}
break;
}
});})(inputs))
,null,null));
});})(inputs))
;
return iter__4523__auto__.call(null,cljs.core.deref.call(null,inputs));
})()], null);
});
;})(inputs))
});
webcv.ctx_ctrls.midi_ctx_ctrls = (function webcv$ctx_ctrls$midi_ctx_ctrls(midi_ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return webcv.midi.make_ctx.call(null,cljs.core.partial.call(null,cljs.core.reset_BANG_,midi_ctx));
})], null),"reset midi context"], null),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,midi_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var mctx = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webcv.ctx_ctrls.midi_monitor,mctx], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"midi ctx not loaded"], null);
}
})()], null);
});
webcv.ctx_ctrls.audio_ctx_ctrls = (function webcv$ctx_ctrls$audio_ctx_ctrls(audio_ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5718__auto___36721 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___36721)){
var old_ctx_36722 = temp__5718__auto___36721;
new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438).cljs$core$IFn$_invoke$arity$1(old_ctx_36722).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,webcv.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__36719 = temp__5718__auto__;
var map__36719__$1 = (((((!((map__36719 == null))))?(((((map__36719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36719):map__36719);
var actx = cljs.core.get.call(null,map__36719__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(actx.destination.maxChannelCount)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null)], null);
});
webcv.ctx_ctrls.read_file_upload = (function webcv$ctx_ctrls$read_file_upload(e,actx,buffer_cb){
var files = Array.from(e.target.files);
var seq__36725 = cljs.core.seq.call(null,files);
var chunk__36726 = null;
var count__36727 = (0);
var i__36728 = (0);
while(true){
if((i__36728 < count__36727)){
var file = cljs.core._nth.call(null,chunk__36726,i__36728);
file.arrayBuffer().then(((function (seq__36725,chunk__36726,count__36727,i__36728,file,files){
return (function (p1__36723_SHARP_){
return actx.decodeAudioData(p1__36723_SHARP_);
});})(seq__36725,chunk__36726,count__36727,i__36728,file,files))
).then(((function (seq__36725,chunk__36726,count__36727,i__36728,file,files){
return (function (p1__36724_SHARP_){
return buffer_cb.call(null,file.name,p1__36724_SHARP_);
});})(seq__36725,chunk__36726,count__36727,i__36728,file,files))
);


var G__36729 = seq__36725;
var G__36730 = chunk__36726;
var G__36731 = count__36727;
var G__36732 = (i__36728 + (1));
seq__36725 = G__36729;
chunk__36726 = G__36730;
count__36727 = G__36731;
i__36728 = G__36732;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__36725);
if(temp__5720__auto__){
var seq__36725__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36725__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__36725__$1);
var G__36733 = cljs.core.chunk_rest.call(null,seq__36725__$1);
var G__36734 = c__4550__auto__;
var G__36735 = cljs.core.count.call(null,c__4550__auto__);
var G__36736 = (0);
seq__36725 = G__36733;
chunk__36726 = G__36734;
count__36727 = G__36735;
i__36728 = G__36736;
continue;
} else {
var file = cljs.core.first.call(null,seq__36725__$1);
file.arrayBuffer().then(((function (seq__36725,chunk__36726,count__36727,i__36728,file,seq__36725__$1,temp__5720__auto__,files){
return (function (p1__36723_SHARP_){
return actx.decodeAudioData(p1__36723_SHARP_);
});})(seq__36725,chunk__36726,count__36727,i__36728,file,seq__36725__$1,temp__5720__auto__,files))
).then(((function (seq__36725,chunk__36726,count__36727,i__36728,file,seq__36725__$1,temp__5720__auto__,files){
return (function (p1__36724_SHARP_){
return buffer_cb.call(null,file.name,p1__36724_SHARP_);
});})(seq__36725,chunk__36726,count__36727,i__36728,file,seq__36725__$1,temp__5720__auto__,files))
);


var G__36737 = cljs.core.next.call(null,seq__36725__$1);
var G__36738 = null;
var G__36739 = (0);
var G__36740 = (0);
seq__36725 = G__36737;
chunk__36726 = G__36738;
count__36727 = G__36739;
i__36728 = G__36740;
continue;
}
} else {
return null;
}
}
break;
}
});
webcv.ctx_ctrls.buffer_ctrl = (function webcv$ctx_ctrls$buffer_ctrl(actx_atom,buffer_cache_atom){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var seq__36743 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__36744 = null;
var count__36745 = (0);
var i__36746 = (0);
while(true){
if((i__36746 < count__36745)){
var file = cljs.core._nth.call(null,chunk__36744,i__36746);
file.arrayBuffer().then(((function (seq__36743,chunk__36744,count__36745,i__36746,file){
return (function (p1__36741_SHARP_){
return new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__36741_SHARP_);
});})(seq__36743,chunk__36744,count__36745,i__36746,file))
).then(((function (seq__36743,chunk__36744,count__36745,i__36746,file){
return (function (p1__36742_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__36742_SHARP_);
});})(seq__36743,chunk__36744,count__36745,i__36746,file))
);


var G__36757 = seq__36743;
var G__36758 = chunk__36744;
var G__36759 = count__36745;
var G__36760 = (i__36746 + (1));
seq__36743 = G__36757;
chunk__36744 = G__36758;
count__36745 = G__36759;
i__36746 = G__36760;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__36743);
if(temp__5720__auto__){
var seq__36743__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36743__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__36743__$1);
var G__36761 = cljs.core.chunk_rest.call(null,seq__36743__$1);
var G__36762 = c__4550__auto__;
var G__36763 = cljs.core.count.call(null,c__4550__auto__);
var G__36764 = (0);
seq__36743 = G__36761;
chunk__36744 = G__36762;
count__36745 = G__36763;
i__36746 = G__36764;
continue;
} else {
var file = cljs.core.first.call(null,seq__36743__$1);
file.arrayBuffer().then(((function (seq__36743,chunk__36744,count__36745,i__36746,file,seq__36743__$1,temp__5720__auto__){
return (function (p1__36741_SHARP_){
return new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__36741_SHARP_);
});})(seq__36743,chunk__36744,count__36745,i__36746,file,seq__36743__$1,temp__5720__auto__))
).then(((function (seq__36743,chunk__36744,count__36745,i__36746,file,seq__36743__$1,temp__5720__auto__){
return (function (p1__36742_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__36742_SHARP_);
});})(seq__36743,chunk__36744,count__36745,i__36746,file,seq__36743__$1,temp__5720__auto__))
);


var G__36765 = cljs.core.next.call(null,seq__36743__$1);
var G__36766 = null;
var G__36767 = (0);
var G__36768 = (0);
seq__36743 = G__36765;
chunk__36744 = G__36766;
count__36745 = G__36767;
i__36746 = G__36768;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function webcv$ctx_ctrls$buffer_ctrl_$_iter__36747(s__36748){
return (new cljs.core.LazySeq(null,(function (){
var s__36748__$1 = s__36748;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36748__$1);
if(temp__5720__auto__){
var s__36748__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36748__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__36748__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__36750 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__36749 = (0);
while(true){
if((i__36749 < size__4522__auto__)){
var vec__36751 = cljs.core._nth.call(null,c__4521__auto__,i__36749);
var name = cljs.core.nth.call(null,vec__36751,(0),null);
var buffer = cljs.core.nth.call(null,vec__36751,(1),null);
cljs.core.chunk_append.call(null,b__36750,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__36769 = (i__36749 + (1));
i__36749 = G__36769;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36750),webcv$ctx_ctrls$buffer_ctrl_$_iter__36747.call(null,cljs.core.chunk_rest.call(null,s__36748__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36750),null);
}
} else {
var vec__36754 = cljs.core.first.call(null,s__36748__$2);
var name = cljs.core.nth.call(null,vec__36754,(0),null);
var buffer = cljs.core.nth.call(null,vec__36754,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),webcv$ctx_ctrls$buffer_ctrl_$_iter__36747.call(null,cljs.core.rest.call(null,s__36748__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.deref.call(null,buffer_cache_atom));
})()], null)], null);
});
});

//# sourceMappingURL=ctx_ctrls.js.map?rel=1601406065743
