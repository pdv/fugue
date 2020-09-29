// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.ctx_ctrls');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('webcv.midi');
goog.require('webcv.audio');
webcv.ctx_ctrls.midi_monitor = (function webcv$ctx_ctrls$midi_monitor(midi_ctx){
var inputs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__36532_36632 = cljs.core.seq.call(null,new cljs.core.Keyword("webcv.midi","ins","webcv.midi/ins",1736405462).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__36534_36633 = null;
var count__36535_36634 = (0);
var i__36536_36635 = (0);
while(true){
if((i__36536_36635 < count__36535_36634)){
var vec__36578_36636 = cljs.core._nth.call(null,chunk__36534_36633,i__36536_36635);
var in_name_36637 = cljs.core.nth.call(null,vec__36578_36636,(0),null);
var in_mult_36638 = cljs.core.nth.call(null,vec__36578_36636,(1),null);
var in_chan_36639 = cljs.core.async.chan.call(null);
var c__32649__auto___36640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__36532_36632,chunk__36534_36633,count__36535_36634,i__36536_36635,c__32649__auto___36640,in_chan_36639,vec__36578_36636,in_name_36637,in_mult_36638,inputs){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (seq__36532_36632,chunk__36534_36633,count__36535_36634,i__36536_36635,c__32649__auto___36640,in_chan_36639,vec__36578_36636,in_name_36637,in_mult_36638,inputs){
return (function (state_36589){
var state_val_36590 = (state_36589[(1)]);
if((state_val_36590 === (1))){
var state_36589__$1 = state_36589;
var statearr_36591_36641 = state_36589__$1;
(statearr_36591_36641[(2)] = null);

(statearr_36591_36641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36590 === (2))){
var state_36589__$1 = state_36589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36589__$1,(4),in_chan_36639);
} else {
if((state_val_36590 === (3))){
var inst_36587 = (state_36589[(2)]);
var state_36589__$1 = state_36589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36589__$1,inst_36587);
} else {
if((state_val_36590 === (4))){
var inst_36583 = (state_36589[(2)]);
var inst_36584 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_36637,inst_36583);
var state_36589__$1 = (function (){var statearr_36592 = state_36589;
(statearr_36592[(7)] = inst_36584);

return statearr_36592;
})();
var statearr_36593_36642 = state_36589__$1;
(statearr_36593_36642[(2)] = null);

(statearr_36593_36642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__36532_36632,chunk__36534_36633,count__36535_36634,i__36536_36635,c__32649__auto___36640,in_chan_36639,vec__36578_36636,in_name_36637,in_mult_36638,inputs))
;
return ((function (seq__36532_36632,chunk__36534_36633,count__36535_36634,i__36536_36635,switch__32554__auto__,c__32649__auto___36640,in_chan_36639,vec__36578_36636,in_name_36637,in_mult_36638,inputs){
return (function() {
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__ = null;
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0 = (function (){
var statearr_36594 = [null,null,null,null,null,null,null,null];
(statearr_36594[(0)] = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__);

(statearr_36594[(1)] = (1));

return statearr_36594;
});
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1 = (function (state_36589){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_36589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e36595){if((e36595 instanceof Object)){
var ex__32558__auto__ = e36595;
var statearr_36596_36643 = state_36589;
(statearr_36596_36643[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36644 = state_36589;
state_36589 = G__36644;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__ = function(state_36589){
switch(arguments.length){
case 0:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0.call(this);
case 1:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1.call(this,state_36589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0;
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1;
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__;
})()
;})(seq__36532_36632,chunk__36534_36633,count__36535_36634,i__36536_36635,switch__32554__auto__,c__32649__auto___36640,in_chan_36639,vec__36578_36636,in_name_36637,in_mult_36638,inputs))
})();
var state__32651__auto__ = (function (){var statearr_36597 = f__32650__auto__.call(null);
(statearr_36597[(6)] = c__32649__auto___36640);

return statearr_36597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(seq__36532_36632,chunk__36534_36633,count__36535_36634,i__36536_36635,c__32649__auto___36640,in_chan_36639,vec__36578_36636,in_name_36637,in_mult_36638,inputs))
);


cljs.core.async.tap.call(null,in_mult_36638,in_chan_36639);


var G__36645 = seq__36532_36632;
var G__36646 = chunk__36534_36633;
var G__36647 = count__36535_36634;
var G__36648 = (i__36536_36635 + (1));
seq__36532_36632 = G__36645;
chunk__36534_36633 = G__36646;
count__36535_36634 = G__36647;
i__36536_36635 = G__36648;
continue;
} else {
var temp__5720__auto___36649 = cljs.core.seq.call(null,seq__36532_36632);
if(temp__5720__auto___36649){
var seq__36532_36650__$1 = temp__5720__auto___36649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36532_36650__$1)){
var c__4550__auto___36651 = cljs.core.chunk_first.call(null,seq__36532_36650__$1);
var G__36652 = cljs.core.chunk_rest.call(null,seq__36532_36650__$1);
var G__36653 = c__4550__auto___36651;
var G__36654 = cljs.core.count.call(null,c__4550__auto___36651);
var G__36655 = (0);
seq__36532_36632 = G__36652;
chunk__36534_36633 = G__36653;
count__36535_36634 = G__36654;
i__36536_36635 = G__36655;
continue;
} else {
var vec__36598_36656 = cljs.core.first.call(null,seq__36532_36650__$1);
var in_name_36657 = cljs.core.nth.call(null,vec__36598_36656,(0),null);
var in_mult_36658 = cljs.core.nth.call(null,vec__36598_36656,(1),null);
var in_chan_36659 = cljs.core.async.chan.call(null);
var c__32649__auto___36660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__36532_36632,chunk__36534_36633,count__36535_36634,i__36536_36635,c__32649__auto___36660,in_chan_36659,vec__36598_36656,in_name_36657,in_mult_36658,seq__36532_36650__$1,temp__5720__auto___36649,inputs){
return (function (){
var f__32650__auto__ = (function (){var switch__32554__auto__ = ((function (seq__36532_36632,chunk__36534_36633,count__36535_36634,i__36536_36635,c__32649__auto___36660,in_chan_36659,vec__36598_36656,in_name_36657,in_mult_36658,seq__36532_36650__$1,temp__5720__auto___36649,inputs){
return (function (state_36609){
var state_val_36610 = (state_36609[(1)]);
if((state_val_36610 === (1))){
var state_36609__$1 = state_36609;
var statearr_36611_36661 = state_36609__$1;
(statearr_36611_36661[(2)] = null);

(statearr_36611_36661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36610 === (2))){
var state_36609__$1 = state_36609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36609__$1,(4),in_chan_36659);
} else {
if((state_val_36610 === (3))){
var inst_36607 = (state_36609[(2)]);
var state_36609__$1 = state_36609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36609__$1,inst_36607);
} else {
if((state_val_36610 === (4))){
var inst_36603 = (state_36609[(2)]);
var inst_36604 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_36657,inst_36603);
var state_36609__$1 = (function (){var statearr_36612 = state_36609;
(statearr_36612[(7)] = inst_36604);

return statearr_36612;
})();
var statearr_36613_36662 = state_36609__$1;
(statearr_36613_36662[(2)] = null);

(statearr_36613_36662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__36532_36632,chunk__36534_36633,count__36535_36634,i__36536_36635,c__32649__auto___36660,in_chan_36659,vec__36598_36656,in_name_36657,in_mult_36658,seq__36532_36650__$1,temp__5720__auto___36649,inputs))
;
return ((function (seq__36532_36632,chunk__36534_36633,count__36535_36634,i__36536_36635,switch__32554__auto__,c__32649__auto___36660,in_chan_36659,vec__36598_36656,in_name_36657,in_mult_36658,seq__36532_36650__$1,temp__5720__auto___36649,inputs){
return (function() {
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__ = null;
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0 = (function (){
var statearr_36614 = [null,null,null,null,null,null,null,null];
(statearr_36614[(0)] = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__);

(statearr_36614[(1)] = (1));

return statearr_36614;
});
var webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1 = (function (state_36609){
while(true){
var ret_value__32556__auto__ = (function (){try{while(true){
var result__32557__auto__ = switch__32554__auto__.call(null,state_36609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32557__auto__;
}
break;
}
}catch (e36615){if((e36615 instanceof Object)){
var ex__32558__auto__ = e36615;
var statearr_36616_36663 = state_36609;
(statearr_36616_36663[(5)] = ex__32558__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36664 = state_36609;
state_36609 = G__36664;
continue;
} else {
return ret_value__32556__auto__;
}
break;
}
});
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__ = function(state_36609){
switch(arguments.length){
case 0:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0.call(this);
case 1:
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1.call(this,state_36609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$0 = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____0;
webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__.cljs$core$IFn$_invoke$arity$1 = webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto____1;
return webcv$ctx_ctrls$midi_monitor_$_state_machine__32555__auto__;
})()
;})(seq__36532_36632,chunk__36534_36633,count__36535_36634,i__36536_36635,switch__32554__auto__,c__32649__auto___36660,in_chan_36659,vec__36598_36656,in_name_36657,in_mult_36658,seq__36532_36650__$1,temp__5720__auto___36649,inputs))
})();
var state__32651__auto__ = (function (){var statearr_36617 = f__32650__auto__.call(null);
(statearr_36617[(6)] = c__32649__auto___36660);

return statearr_36617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32651__auto__);
});})(seq__36532_36632,chunk__36534_36633,count__36535_36634,i__36536_36635,c__32649__auto___36660,in_chan_36659,vec__36598_36656,in_name_36657,in_mult_36658,seq__36532_36650__$1,temp__5720__auto___36649,inputs))
);


cljs.core.async.tap.call(null,in_mult_36658,in_chan_36659);


var G__36665 = cljs.core.next.call(null,seq__36532_36650__$1);
var G__36666 = null;
var G__36667 = (0);
var G__36668 = (0);
seq__36532_36632 = G__36665;
chunk__36534_36633 = G__36666;
count__36535_36634 = G__36667;
i__36536_36635 = G__36668;
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
return (function webcv$ctx_ctrls$midi_monitor_$_iter__36618(s__36619){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__36619__$1 = s__36619;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36619__$1);
if(temp__5720__auto__){
var s__36619__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36619__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__36619__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__36621 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__36620 = (0);
while(true){
if((i__36620 < size__4522__auto__)){
var vec__36622 = cljs.core._nth.call(null,c__4521__auto__,i__36620);
var in_name = cljs.core.nth.call(null,vec__36622,(0),null);
var map__36625 = cljs.core.nth.call(null,vec__36622,(1),null);
var map__36625__$1 = (((((!((map__36625 == null))))?(((((map__36625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36625):map__36625);
var type = cljs.core.get.call(null,map__36625__$1,new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868));
var note = cljs.core.get.call(null,map__36625__$1,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544));
var velocity = cljs.core.get.call(null,map__36625__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
cljs.core.chunk_append.call(null,b__36621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__36669 = (i__36620 + (1));
i__36620 = G__36669;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36621),webcv$ctx_ctrls$midi_monitor_$_iter__36618.call(null,cljs.core.chunk_rest.call(null,s__36619__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36621),null);
}
} else {
var vec__36627 = cljs.core.first.call(null,s__36619__$2);
var in_name = cljs.core.nth.call(null,vec__36627,(0),null);
var map__36630 = cljs.core.nth.call(null,vec__36627,(1),null);
var map__36630__$1 = (((((!((map__36630 == null))))?(((((map__36630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36630):map__36630);
var type = cljs.core.get.call(null,map__36630__$1,new cljs.core.Keyword("webcv.midi","type","webcv.midi/type",1350996868));
var note = cljs.core.get.call(null,map__36630__$1,new cljs.core.Keyword("webcv.midi","note","webcv.midi/note",1114457544));
var velocity = cljs.core.get.call(null,map__36630__$1,new cljs.core.Keyword("webcv.midi","velocity","webcv.midi/velocity",-1464249691));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),webcv$ctx_ctrls$midi_monitor_$_iter__36618.call(null,cljs.core.rest.call(null,s__36619__$2)));
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
var temp__5718__auto___36672 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___36672)){
var old_ctx_36673 = temp__5718__auto___36672;
new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438).cljs$core$IFn$_invoke$arity$1(old_ctx_36673).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,webcv.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__36670 = temp__5718__auto__;
var map__36670__$1 = (((((!((map__36670 == null))))?(((((map__36670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36670):map__36670);
var actx = cljs.core.get.call(null,map__36670__$1,new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(actx.destination.maxChannelCount)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null)], null);
});
webcv.ctx_ctrls.read_file_upload = (function webcv$ctx_ctrls$read_file_upload(e,actx,buffer_cb){
var files = Array.from(e.target.files);
var seq__36676 = cljs.core.seq.call(null,files);
var chunk__36677 = null;
var count__36678 = (0);
var i__36679 = (0);
while(true){
if((i__36679 < count__36678)){
var file = cljs.core._nth.call(null,chunk__36677,i__36679);
file.arrayBuffer().then(((function (seq__36676,chunk__36677,count__36678,i__36679,file,files){
return (function (p1__36674_SHARP_){
return actx.decodeAudioData(p1__36674_SHARP_);
});})(seq__36676,chunk__36677,count__36678,i__36679,file,files))
).then(((function (seq__36676,chunk__36677,count__36678,i__36679,file,files){
return (function (p1__36675_SHARP_){
return buffer_cb.call(null,file.name,p1__36675_SHARP_);
});})(seq__36676,chunk__36677,count__36678,i__36679,file,files))
);


var G__36680 = seq__36676;
var G__36681 = chunk__36677;
var G__36682 = count__36678;
var G__36683 = (i__36679 + (1));
seq__36676 = G__36680;
chunk__36677 = G__36681;
count__36678 = G__36682;
i__36679 = G__36683;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__36676);
if(temp__5720__auto__){
var seq__36676__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36676__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__36676__$1);
var G__36684 = cljs.core.chunk_rest.call(null,seq__36676__$1);
var G__36685 = c__4550__auto__;
var G__36686 = cljs.core.count.call(null,c__4550__auto__);
var G__36687 = (0);
seq__36676 = G__36684;
chunk__36677 = G__36685;
count__36678 = G__36686;
i__36679 = G__36687;
continue;
} else {
var file = cljs.core.first.call(null,seq__36676__$1);
file.arrayBuffer().then(((function (seq__36676,chunk__36677,count__36678,i__36679,file,seq__36676__$1,temp__5720__auto__,files){
return (function (p1__36674_SHARP_){
return actx.decodeAudioData(p1__36674_SHARP_);
});})(seq__36676,chunk__36677,count__36678,i__36679,file,seq__36676__$1,temp__5720__auto__,files))
).then(((function (seq__36676,chunk__36677,count__36678,i__36679,file,seq__36676__$1,temp__5720__auto__,files){
return (function (p1__36675_SHARP_){
return buffer_cb.call(null,file.name,p1__36675_SHARP_);
});})(seq__36676,chunk__36677,count__36678,i__36679,file,seq__36676__$1,temp__5720__auto__,files))
);


var G__36688 = cljs.core.next.call(null,seq__36676__$1);
var G__36689 = null;
var G__36690 = (0);
var G__36691 = (0);
seq__36676 = G__36688;
chunk__36677 = G__36689;
count__36678 = G__36690;
i__36679 = G__36691;
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
var seq__36694 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__36695 = null;
var count__36696 = (0);
var i__36697 = (0);
while(true){
if((i__36697 < count__36696)){
var file = cljs.core._nth.call(null,chunk__36695,i__36697);
file.arrayBuffer().then(((function (seq__36694,chunk__36695,count__36696,i__36697,file){
return (function (p1__36692_SHARP_){
return new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__36692_SHARP_);
});})(seq__36694,chunk__36695,count__36696,i__36697,file))
).then(((function (seq__36694,chunk__36695,count__36696,i__36697,file){
return (function (p1__36693_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__36693_SHARP_);
});})(seq__36694,chunk__36695,count__36696,i__36697,file))
);


var G__36708 = seq__36694;
var G__36709 = chunk__36695;
var G__36710 = count__36696;
var G__36711 = (i__36697 + (1));
seq__36694 = G__36708;
chunk__36695 = G__36709;
count__36696 = G__36710;
i__36697 = G__36711;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__36694);
if(temp__5720__auto__){
var seq__36694__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36694__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__36694__$1);
var G__36712 = cljs.core.chunk_rest.call(null,seq__36694__$1);
var G__36713 = c__4550__auto__;
var G__36714 = cljs.core.count.call(null,c__4550__auto__);
var G__36715 = (0);
seq__36694 = G__36712;
chunk__36695 = G__36713;
count__36696 = G__36714;
i__36697 = G__36715;
continue;
} else {
var file = cljs.core.first.call(null,seq__36694__$1);
file.arrayBuffer().then(((function (seq__36694,chunk__36695,count__36696,i__36697,file,seq__36694__$1,temp__5720__auto__){
return (function (p1__36692_SHARP_){
return new cljs.core.Keyword("webcv.audio","actx","webcv.audio/actx",686780438).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,actx_atom)).decodeAudioData(p1__36692_SHARP_);
});})(seq__36694,chunk__36695,count__36696,i__36697,file,seq__36694__$1,temp__5720__auto__))
).then(((function (seq__36694,chunk__36695,count__36696,i__36697,file,seq__36694__$1,temp__5720__auto__){
return (function (p1__36693_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_cache_atom,cljs.core.assoc,file.name,p1__36693_SHARP_);
});})(seq__36694,chunk__36695,count__36696,i__36697,file,seq__36694__$1,temp__5720__auto__))
);


var G__36716 = cljs.core.next.call(null,seq__36694__$1);
var G__36717 = null;
var G__36718 = (0);
var G__36719 = (0);
seq__36694 = G__36716;
chunk__36695 = G__36717;
count__36696 = G__36718;
i__36697 = G__36719;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function webcv$ctx_ctrls$buffer_ctrl_$_iter__36698(s__36699){
return (new cljs.core.LazySeq(null,(function (){
var s__36699__$1 = s__36699;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__36699__$1);
if(temp__5720__auto__){
var s__36699__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36699__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__36699__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__36701 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__36700 = (0);
while(true){
if((i__36700 < size__4522__auto__)){
var vec__36702 = cljs.core._nth.call(null,c__4521__auto__,i__36700);
var name = cljs.core.nth.call(null,vec__36702,(0),null);
var buffer = cljs.core.nth.call(null,vec__36702,(1),null);
cljs.core.chunk_append.call(null,b__36701,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__36720 = (i__36700 + (1));
i__36700 = G__36720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36701),webcv$ctx_ctrls$buffer_ctrl_$_iter__36698.call(null,cljs.core.chunk_rest.call(null,s__36699__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36701),null);
}
} else {
var vec__36705 = cljs.core.first.call(null,s__36699__$2);
var name = cljs.core.nth.call(null,vec__36705,(0),null);
var buffer = cljs.core.nth.call(null,vec__36705,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),webcv$ctx_ctrls$buffer_ctrl_$_iter__36698.call(null,cljs.core.rest.call(null,s__36699__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1601399207859
