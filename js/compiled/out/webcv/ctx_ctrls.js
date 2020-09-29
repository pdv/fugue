// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.ctx_ctrls');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('webcv.midi');
goog.require('webcv.audio');
webcv.ctx_ctrls.midi_monitor = (function webcv$ctx_ctrls$midi_monitor(midi_ctx){
var inputs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__36534_36634 = cljs.core.seq.call(null,new cljs.core.Keyword("webcv.midi","ins","webcv.midi/ins",1736405462).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__36536_36635 = null;
var count__36537_36636 = (0);
var i__36538_36637 = (0);
while(true){
if((i__36538_36637 < count__36537_36636)){
var vec__36580_36638 = cljs.core._nth.call(null,chunk__36536_36635,i__36538_36637);
var in_name_36639 = cljs.core.nth.call(null,vec__36580_36638,(0),null);
var in_mult_36640 = cljs.core.nth.call(null,vec__36580_36638,(1),null);
var in_chan_36641 = cljs.core.async.chan.call(null);
var c__32649__auto___36642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__36534_36634,chunk__36536_36635,count__36537_36636,i__36538_36637,c__32649__auto___36642,in_chan_36641,vec__36580_36638,in_name_36639,in_mult_36640,inputs){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (seq__36534_36634,chunk__36536_36635,count__36537_36636,i__36538_36637,c__32649__auto___36642,in_chan_36641,vec__36580_36638,in_name_36639,in_mult_36640,inputs){
return (function (state_36591){
var state_val_36592 = (state_36591[(1)]);
if((state_val_36592 === (1))){
var state_36591__$1 = state_36591;
var statearr_36593_36643 = state_36591__$1;
(statearr_36593_36643[(2)] = null);

(statearr_36593_36643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36592 === (2))){
var state_36591__$1 = state_36591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36591__$1,(4),in_chan_36641);
} else {
if((state_val_36592 === (3))){
var inst_36589 = (state_36591[(2)]);
var state_36591__$1 = state_36591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36591__$1,inst_36589);
} else {
if((state_val_36592 === (4))){
var inst_36585 = (state_36591[(2)]);
var inst_36586 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_36639,inst_36585);
var state_36591__$1 = (function (){var statearr_36594 = state_36591;
(statearr_36594[(7)] = inst_36586);

return statearr_36594;
})();
var statearr_36595_36644 = state_36591__$1;
(statearr_36595_36644[(2)] = null);

(statearr_36595_36644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__36534_36634,chunk__36536_36635,count__36537_36636,i__36538_36637,c__32649__auto___36642,in_chan_36641,vec__36580_36638,in_name_36639,in_mult_36640,inputs))
;
return ((function (seq__36534_36634,chunk__36536_36635,count__36537_36636,i__36538_36637,switch__32554__auto__,c__32649__auto___36642,in_chan_36641,vec__36580_36638,in_name_36639,in_mult_36640,inputs){
return (function() {
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__ = null;
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0 = (function (){
var statearr_36596 = [null,null,null,null,null,null,null,null];
(statearr_36596[(0)] = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__);

(statearr_36596[(1)] = (1));

return statearr_36596;
});
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1 = (function (state_36591){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_36591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e36597){if((e36597 instanceof Object)){
var ex__32558__auto__ = e36597;
var statearr_36598_36645 = state_36591;
(statearr_36598_36645[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36646 = state_36591;
state_36591 = G__36646;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__ = function(state_36591){
switch(arguments.length){
case 0:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0.call(this);
case 1:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1.call(this,state_36591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0;
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1;
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__;
})()
;})(seq__36534_36634,chunk__36536_36635,count__36537_36636,i__36538_36637,switch__32554__auto__,c__32649__auto___36642,in_chan_36641,vec__36580_36638,in_name_36639,in_mult_36640,inputs))
})();
var state__32651__auto__ = (function (){var statearr_36599 = f__32650__auto__.call(null);
(statearr_36599[(6)] = c__32649__auto___36642);

return statearr_36599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(seq__36534_36634,chunk__36536_36635,count__36537_36636,i__36538_36637,c__32649__auto___36642,in_chan_36641,vec__36580_36638,in_name_36639,in_mult_36640,inputs))
);


cljs.core.async.tap.call(null,in_mult_36640,in_chan_36641);


var G__36647 = seq__36534_36634;
var G__36648 = chunk__36536_36635;
var G__36649 = count__36537_36636;
var G__36650 = (i__36538_36637 + (1));
seq__36534_36634 = G__36647;
chunk__36536_36635 = G__36648;
count__36537_36636 = G__36649;
i__36538_36637 = G__36650;
continue;
} else {
var temp__5720__auto___36651 = cljs.core.seq.call(null,seq__36534_36634);
if(temp__5720__auto___36651){
var seq__36534_36652__$1 = temp__5720__auto___36651;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36534_36652__$1)){
var c__4550__auto___36653 = cljs.core.chunk_first.call(null,seq__36534_36652__$1);
var G__36654 = cljs.core.chunk_rest.call(null,seq__36534_36652__$1);
var G__36655 = c__4550__auto___36653;
var G__36656 = cljs.core.count.call(null,c__4550__auto___36653);
var G__36657 = (0);
seq__36534_36634 = G__36654;
chunk__36536_36635 = G__36655;
count__36537_36636 = G__36656;
i__36538_36637 = G__36657;
continue;
} else {
var vec__36600_36658 = cljs.core.first.call(null,seq__36534_36652__$1);
var in_name_36659 = cljs.core.nth.call(null,vec__36600_36658,(0),null);
var in_mult_36660 = cljs.core.nth.call(null,vec__36600_36658,(1),null);
var in_chan_36661 = cljs.core.async.chan.call(null);
var c__32649__auto___36662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__36534_36634,chunk__36536_36635,count__36537_36636,i__36538_36637,c__32649__auto___36662,in_chan_36661,vec__36600_36658,in_name_36659,in_mult_36660,seq__36534_36652__$1,temp__5720__auto___36651,inputs){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (seq__36534_36634,chunk__36536_36635,count__36537_36636,i__36538_36637,c__32649__auto___36662,in_chan_36661,vec__36600_36658,in_name_36659,in_mult_36660,seq__36534_36652__$1,temp__5720__auto___36651,inputs){
return (function (state_36611){
var state_val_36612 = (state_36611[(1)]);
if((state_val_36612 === (1))){
var state_36611__$1 = state_36611;
var statearr_36613_36663 = state_36611__$1;
(statearr_36613_36663[(2)] = null);

(statearr_36613_36663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36612 === (2))){
var state_36611__$1 = state_36611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36611__$1,(4),in_chan_36661);
} else {
if((state_val_36612 === (3))){
var inst_36609 = (state_36611[(2)]);
var state_36611__$1 = state_36611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36611__$1,inst_36609);
} else {
if((state_val_36612 === (4))){
var inst_36605 = (state_36611[(2)]);
var inst_36606 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_36659,inst_36605);
var state_36611__$1 = (function (){var statearr_36614 = state_36611;
(statearr_36614[(7)] = inst_36606);

return statearr_36614;
})();
var statearr_36615_36664 = state_36611__$1;
(statearr_36615_36664[(2)] = null);

(statearr_36615_36664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__36534_36634,chunk__36536_36635,count__36537_36636,i__36538_36637,c__32649__auto___36662,in_chan_36661,vec__36600_36658,in_name_36659,in_mult_36660,seq__36534_36652__$1,temp__5720__auto___36651,inputs))
;
return ((function (seq__36534_36634,chunk__36536_36635,count__36537_36636,i__36538_36637,switch__32554__auto__,c__32649__auto___36662,in_chan_36661,vec__36600_36658,in_name_36659,in_mult_36660,seq__36534_36652__$1,temp__5720__auto___36651,inputs){
return (function() {
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__ = null;
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0 = (function (){
var statearr_36616 = [null,null,null,null,null,null,null,null];
(statearr_36616[(0)] = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__);

(statearr_36616[(1)] = (1));

return statearr_36616;
});
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1 = (function (state_36611){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_36611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e36617){if((e36617 instanceof Object)){
var ex__32558__auto__ = e36617;
var statearr_36618_36665 = state_36611;
(statearr_36618_36665[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36666 = state_36611;
state_36611 = G__36666;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__ = function(state_36611){
switch(arguments.length){
case 0:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0.call(this);
case 1:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1.call(this,state_36611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0;
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1;
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__;
})()
;})(seq__36534_36634,chunk__36536_36635,count__36537_36636,i__36538_36637,switch__32554__auto__,c__32649__auto___36662,in_chan_36661,vec__36600_36658,in_name_36659,in_mult_36660,seq__36534_36652__$1,temp__5720__auto___36651,inputs))
})();
var state__32651__auto__ = (function (){var statearr_36619 = f__32650__auto__.call(null);
(statearr_36619[(6)] = c__32649__auto___36662);

return statearr_36619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(seq__36534_36634,chunk__36536_36635,count__36537_36636,i__36538_36637,c__32649__auto___36662,in_chan_36661,vec__36600_36658,in_name_36659,in_mult_36660,seq__36534_36652__$1,temp__5720__auto___36651,inputs))
);


cljs.core.async.tap.call(null,in_mult_36660,in_chan_36661);


var G__36667 = cljs.core.next.call(null,seq__36534_36652__$1);
var G__36668 = null;
var G__36669 = (0);
var G__36670 = (0);
seq__36534_36634 = G__36667;
chunk__36536_36635 = G__36668;
count__36537_36636 = G__36669;
i__36538_36637 = G__36670;
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
return (function webcv$ctx_ctrls$midi_monitor_$_iter__36620(s__36621){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__36621__$1 = s__36621;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36621__$1);
if(temp__5720__auto__){
var s__36621__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36621__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__36621__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__36623 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__36622 = (0);
while(true){
if((i__36622 < size__4522__auto__)){
var vec__36624 = cljs.core._nth.call(null,c__4521__auto__,i__36622);
var in_name = cljs.core.nth.call(null,vec__36624,(0),null);
var map__36627 = cljs.core.nth.call(null,vec__36624,(1),null);
var map__36627__$1 = (((((!((map__36627 == null))))?(((((map__36627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36627):map__36627);
var type = cljs.core.get.call(null,map__36627__$1,new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868));
var note = cljs.core.get.call(null,map__36627__$1,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544));
var velocity = cljs.core.get.call(null,map__36627__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
cljs.core.chunk_append.call(null,b__36623,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__36671 = (i__36622 + (1));
i__36622 = G__36671;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36623),webcv$ctx_ctrls$midi_monitor_$_iter__36620.call(null,cljs.core.chunk_rest.call(null,s__36621__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36623),null);
}
} else {
var vec__36629 = cljs.core.first.call(null,s__36621__$2);
var in_name = cljs.core.nth.call(null,vec__36629,(0),null);
var map__36632 = cljs.core.nth.call(null,vec__36629,(1),null);
var map__36632__$1 = (((((!((map__36632 == null))))?(((((map__36632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36632):map__36632);
var type = cljs.core.get.call(null,map__36632__$1,new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868));
var note = cljs.core.get.call(null,map__36632__$1,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544));
var velocity = cljs.core.get.call(null,map__36632__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),webcv$ctx_ctrls$midi_monitor_$_iter__36620.call(null,cljs.core.rest.call(null,s__36621__$2)));
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
webcv.ctx_ctrls.midi_controls = (function webcv$ctx_ctrls$midi_controls(midi_ctx){
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
webcv.ctx_ctrls.audio_controls = (function webcv$ctx_ctrls$audio_controls(audio_ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5718__auto___36674 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___36674)){
var old_ctx_36675 = temp__5718__auto___36674;
new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438).cljs$core$IFn$_invoke$arity$1(old_ctx_36675).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,webcv.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__36672 = temp__5718__auto__;
var map__36672__$1 = (((((!((map__36672 == null))))?(((((map__36672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36672):map__36672);
var actx = cljs.core.get.call(null,map__36672__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(actx.destination.maxChannelCount)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null)], null);
});

//# sourceMappingURL=ctx_ctrls.js.map?rel=1601344973722
