// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.ctx_ctrls');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('fugue.buffer');
goog.require('fugue.midi');
goog.require('fugue.audio');
fugue.ctx_ctrls.midi_monitor = (function fugue$ctx_ctrls$midi_monitor(midi_ctx){
var inputs = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__34893_34993 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34895_34994 = null;
var count__34896_34995 = (0);
var i__34897_34996 = (0);
while(true){
if((i__34897_34996 < count__34896_34995)){
var vec__34939_34997 = cljs.core._nth.call(null,chunk__34895_34994,i__34897_34996);
var in_name_34998 = cljs.core.nth.call(null,vec__34939_34997,(0),null);
var in_mult_34999 = cljs.core.nth.call(null,vec__34939_34997,(1),null);
var in_chan_35000 = cljs.core.async.chan.call(null);
var c__32685__auto___35001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34893_34993,chunk__34895_34994,count__34896_34995,i__34897_34996,c__32685__auto___35001,in_chan_35000,vec__34939_34997,in_name_34998,in_mult_34999,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34893_34993,chunk__34895_34994,count__34896_34995,i__34897_34996,c__32685__auto___35001,in_chan_35000,vec__34939_34997,in_name_34998,in_mult_34999,inputs){
return (function (state_34950){
var state_val_34951 = (state_34950[(1)]);
if((state_val_34951 === (1))){
var state_34950__$1 = state_34950;
var statearr_34952_35002 = state_34950__$1;
(statearr_34952_35002[(2)] = null);

(statearr_34952_35002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (2))){
var state_34950__$1 = state_34950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34950__$1,(4),in_chan_35000);
} else {
if((state_val_34951 === (3))){
var inst_34948 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34950__$1,inst_34948);
} else {
if((state_val_34951 === (4))){
var inst_34944 = (state_34950[(2)]);
var inst_34945 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_34998,inst_34944);
var state_34950__$1 = (function (){var statearr_34953 = state_34950;
(statearr_34953[(7)] = inst_34945);

return statearr_34953;
})();
var statearr_34954_35003 = state_34950__$1;
(statearr_34954_35003[(2)] = null);

(statearr_34954_35003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34893_34993,chunk__34895_34994,count__34896_34995,i__34897_34996,c__32685__auto___35001,in_chan_35000,vec__34939_34997,in_name_34998,in_mult_34999,inputs))
;
return ((function (seq__34893_34993,chunk__34895_34994,count__34896_34995,i__34897_34996,switch__32590__auto__,c__32685__auto___35001,in_chan_35000,vec__34939_34997,in_name_34998,in_mult_34999,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34955 = [null,null,null,null,null,null,null,null];
(statearr_34955[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34955[(1)] = (1));

return statearr_34955;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34950){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34956){if((e34956 instanceof Object)){
var ex__32594__auto__ = e34956;
var statearr_34957_35004 = state_34950;
(statearr_34957_35004[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35005 = state_34950;
state_34950 = G__35005;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34950){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34893_34993,chunk__34895_34994,count__34896_34995,i__34897_34996,switch__32590__auto__,c__32685__auto___35001,in_chan_35000,vec__34939_34997,in_name_34998,in_mult_34999,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34958 = f__32686__auto__.call(null);
(statearr_34958[(6)] = c__32685__auto___35001);

return statearr_34958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34893_34993,chunk__34895_34994,count__34896_34995,i__34897_34996,c__32685__auto___35001,in_chan_35000,vec__34939_34997,in_name_34998,in_mult_34999,inputs))
);


cljs.core.async.tap.call(null,in_mult_34999,in_chan_35000);


var G__35006 = seq__34893_34993;
var G__35007 = chunk__34895_34994;
var G__35008 = count__34896_34995;
var G__35009 = (i__34897_34996 + (1));
seq__34893_34993 = G__35006;
chunk__34895_34994 = G__35007;
count__34896_34995 = G__35008;
i__34897_34996 = G__35009;
continue;
} else {
var temp__5720__auto___35010 = cljs.core.seq.call(null,seq__34893_34993);
if(temp__5720__auto___35010){
var seq__34893_35011__$1 = temp__5720__auto___35010;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34893_35011__$1)){
var c__4550__auto___35012 = cljs.core.chunk_first.call(null,seq__34893_35011__$1);
var G__35013 = cljs.core.chunk_rest.call(null,seq__34893_35011__$1);
var G__35014 = c__4550__auto___35012;
var G__35015 = cljs.core.count.call(null,c__4550__auto___35012);
var G__35016 = (0);
seq__34893_34993 = G__35013;
chunk__34895_34994 = G__35014;
count__34896_34995 = G__35015;
i__34897_34996 = G__35016;
continue;
} else {
var vec__34959_35017 = cljs.core.first.call(null,seq__34893_35011__$1);
var in_name_35018 = cljs.core.nth.call(null,vec__34959_35017,(0),null);
var in_mult_35019 = cljs.core.nth.call(null,vec__34959_35017,(1),null);
var in_chan_35020 = cljs.core.async.chan.call(null);
var c__32685__auto___35021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34893_34993,chunk__34895_34994,count__34896_34995,i__34897_34996,c__32685__auto___35021,in_chan_35020,vec__34959_35017,in_name_35018,in_mult_35019,seq__34893_35011__$1,temp__5720__auto___35010,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34893_34993,chunk__34895_34994,count__34896_34995,i__34897_34996,c__32685__auto___35021,in_chan_35020,vec__34959_35017,in_name_35018,in_mult_35019,seq__34893_35011__$1,temp__5720__auto___35010,inputs){
return (function (state_34970){
var state_val_34971 = (state_34970[(1)]);
if((state_val_34971 === (1))){
var state_34970__$1 = state_34970;
var statearr_34972_35022 = state_34970__$1;
(statearr_34972_35022[(2)] = null);

(statearr_34972_35022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34971 === (2))){
var state_34970__$1 = state_34970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34970__$1,(4),in_chan_35020);
} else {
if((state_val_34971 === (3))){
var inst_34968 = (state_34970[(2)]);
var state_34970__$1 = state_34970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34970__$1,inst_34968);
} else {
if((state_val_34971 === (4))){
var inst_34964 = (state_34970[(2)]);
var inst_34965 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_35018,inst_34964);
var state_34970__$1 = (function (){var statearr_34973 = state_34970;
(statearr_34973[(7)] = inst_34965);

return statearr_34973;
})();
var statearr_34974_35023 = state_34970__$1;
(statearr_34974_35023[(2)] = null);

(statearr_34974_35023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34893_34993,chunk__34895_34994,count__34896_34995,i__34897_34996,c__32685__auto___35021,in_chan_35020,vec__34959_35017,in_name_35018,in_mult_35019,seq__34893_35011__$1,temp__5720__auto___35010,inputs))
;
return ((function (seq__34893_34993,chunk__34895_34994,count__34896_34995,i__34897_34996,switch__32590__auto__,c__32685__auto___35021,in_chan_35020,vec__34959_35017,in_name_35018,in_mult_35019,seq__34893_35011__$1,temp__5720__auto___35010,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34975 = [null,null,null,null,null,null,null,null];
(statearr_34975[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34975[(1)] = (1));

return statearr_34975;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34970){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34976){if((e34976 instanceof Object)){
var ex__32594__auto__ = e34976;
var statearr_34977_35024 = state_34970;
(statearr_34977_35024[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35025 = state_34970;
state_34970 = G__35025;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34970){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34893_34993,chunk__34895_34994,count__34896_34995,i__34897_34996,switch__32590__auto__,c__32685__auto___35021,in_chan_35020,vec__34959_35017,in_name_35018,in_mult_35019,seq__34893_35011__$1,temp__5720__auto___35010,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34978 = f__32686__auto__.call(null);
(statearr_34978[(6)] = c__32685__auto___35021);

return statearr_34978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34893_34993,chunk__34895_34994,count__34896_34995,i__34897_34996,c__32685__auto___35021,in_chan_35020,vec__34959_35017,in_name_35018,in_mult_35019,seq__34893_35011__$1,temp__5720__auto___35010,inputs))
);


cljs.core.async.tap.call(null,in_mult_35019,in_chan_35020);


var G__35026 = cljs.core.next.call(null,seq__34893_35011__$1);
var G__35027 = null;
var G__35028 = (0);
var G__35029 = (0);
seq__34893_34993 = G__35026;
chunk__34895_34994 = G__35027;
count__34896_34995 = G__35028;
i__34897_34996 = G__35029;
continue;
}
} else {
}
}
break;
}

return ((function (inputs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx)))," ins"].join('')], null),(function (){var iter__4523__auto__ = ((function (inputs){
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34979(s__34980){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34980__$1 = s__34980;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34980__$1);
if(temp__5720__auto__){
var s__34980__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34980__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34980__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34982 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34981 = (0);
while(true){
if((i__34981 < size__4522__auto__)){
var vec__34983 = cljs.core._nth.call(null,c__4521__auto__,i__34981);
var in_name = cljs.core.nth.call(null,vec__34983,(0),null);
var map__34986 = cljs.core.nth.call(null,vec__34983,(1),null);
var map__34986__$1 = (((((!((map__34986 == null))))?(((((map__34986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34986):map__34986);
var type = cljs.core.get.call(null,map__34986__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34986__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34986__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__34982,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__35030 = (i__34981 + (1));
i__34981 = G__35030;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34982),fugue$ctx_ctrls$midi_monitor_$_iter__34979.call(null,cljs.core.chunk_rest.call(null,s__34980__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34982),null);
}
} else {
var vec__34988 = cljs.core.first.call(null,s__34980__$2);
var in_name = cljs.core.nth.call(null,vec__34988,(0),null);
var map__34991 = cljs.core.nth.call(null,vec__34988,(1),null);
var map__34991__$1 = (((((!((map__34991 == null))))?(((((map__34991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34991):map__34991);
var type = cljs.core.get.call(null,map__34991__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34991__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34991__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34979.call(null,cljs.core.rest.call(null,s__34980__$2)));
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
fugue.ctx_ctrls.midi_ctx_ctrls = (function fugue$ctx_ctrls$midi_ctx_ctrls(midi_ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.midi.make_ctx.call(null,cljs.core.partial.call(null,cljs.core.reset_BANG_,midi_ctx));
})], null),"reset midi context"], null),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,midi_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var mctx = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.ctx_ctrls.midi_monitor,mctx], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"midi ctx not loaded"], null);
}
})()], null);
});
fugue.ctx_ctrls.audio_ctx_ctrls = (function fugue$ctx_ctrls$audio_ctx_ctrls(audio_ctx){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var temp__5718__auto___35034 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___35034)){
var old_ctx_35035 = temp__5718__auto___35034;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_35035).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__35032 = temp__5718__auto__;
var map__35032__$1 = (((((!((map__35032 == null))))?(((((map__35032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35032):map__35032);
var outs = cljs.core.get.call(null,map__35032__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__35031_SHARP_){
return console.log(p1__35031_SHARP_);
}));
})], null),"load inputs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = new cljs.core.Keyword("fugue.audio","ins","fugue.audio/ins",906609950).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx));
if(cljs.core.truth_(temp__5718__auto__)){
var ins = temp__5718__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ins.numberOfOutputs)," ins"].join('');
} else {
return "inputs not loaded";
}
})()], null)], null);
});
fugue.ctx_ctrls.read_file_upload = (function fugue$ctx_ctrls$read_file_upload(e,actx,buffer_cb){
var files = Array.from(e.target.files);
var seq__35038 = cljs.core.seq.call(null,files);
var chunk__35039 = null;
var count__35040 = (0);
var i__35041 = (0);
while(true){
if((i__35041 < count__35040)){
var file = cljs.core._nth.call(null,chunk__35039,i__35041);
file.arrayBuffer().then(((function (seq__35038,chunk__35039,count__35040,i__35041,file,files){
return (function (p1__35036_SHARP_){
return actx.decodeAudioData(p1__35036_SHARP_);
});})(seq__35038,chunk__35039,count__35040,i__35041,file,files))
).then(((function (seq__35038,chunk__35039,count__35040,i__35041,file,files){
return (function (p1__35037_SHARP_){
return buffer_cb.call(null,file.name,p1__35037_SHARP_);
});})(seq__35038,chunk__35039,count__35040,i__35041,file,files))
);


var G__35042 = seq__35038;
var G__35043 = chunk__35039;
var G__35044 = count__35040;
var G__35045 = (i__35041 + (1));
seq__35038 = G__35042;
chunk__35039 = G__35043;
count__35040 = G__35044;
i__35041 = G__35045;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35038);
if(temp__5720__auto__){
var seq__35038__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35038__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35038__$1);
var G__35046 = cljs.core.chunk_rest.call(null,seq__35038__$1);
var G__35047 = c__4550__auto__;
var G__35048 = cljs.core.count.call(null,c__4550__auto__);
var G__35049 = (0);
seq__35038 = G__35046;
chunk__35039 = G__35047;
count__35040 = G__35048;
i__35041 = G__35049;
continue;
} else {
var file = cljs.core.first.call(null,seq__35038__$1);
file.arrayBuffer().then(((function (seq__35038,chunk__35039,count__35040,i__35041,file,seq__35038__$1,temp__5720__auto__,files){
return (function (p1__35036_SHARP_){
return actx.decodeAudioData(p1__35036_SHARP_);
});})(seq__35038,chunk__35039,count__35040,i__35041,file,seq__35038__$1,temp__5720__auto__,files))
).then(((function (seq__35038,chunk__35039,count__35040,i__35041,file,seq__35038__$1,temp__5720__auto__,files){
return (function (p1__35037_SHARP_){
return buffer_cb.call(null,file.name,p1__35037_SHARP_);
});})(seq__35038,chunk__35039,count__35040,i__35041,file,seq__35038__$1,temp__5720__auto__,files))
);


var G__35050 = cljs.core.next.call(null,seq__35038__$1);
var G__35051 = null;
var G__35052 = (0);
var G__35053 = (0);
seq__35038 = G__35050;
chunk__35039 = G__35051;
count__35040 = G__35052;
i__35041 = G__35053;
continue;
}
} else {
return null;
}
}
break;
}
});
fugue.ctx_ctrls.buffer_ctrl = (function fugue$ctx_ctrls$buffer_ctrl(audio_ctx,buffer_ctx){
if(cljs.core.truth_(cljs.core.deref.call(null,buffer_ctx))){
} else {
cljs.core.reset_BANG_.call(null,buffer_ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),cljs.core.PersistentArrayMap.EMPTY], null));
}

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var seq__35056 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__35057 = null;
var count__35058 = (0);
var i__35059 = (0);
while(true){
if((i__35059 < count__35058)){
var file = cljs.core._nth.call(null,chunk__35057,i__35059);
file.arrayBuffer().then(((function (seq__35056,chunk__35057,count__35058,i__35059,file){
return (function (p1__35054_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__35054_SHARP_);
});})(seq__35056,chunk__35057,count__35058,i__35059,file))
).then(((function (seq__35056,chunk__35057,count__35058,i__35059,file){
return (function (p1__35055_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__35055_SHARP_);
});})(seq__35056,chunk__35057,count__35058,i__35059,file))
);


var G__35070 = seq__35056;
var G__35071 = chunk__35057;
var G__35072 = count__35058;
var G__35073 = (i__35059 + (1));
seq__35056 = G__35070;
chunk__35057 = G__35071;
count__35058 = G__35072;
i__35059 = G__35073;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35056);
if(temp__5720__auto__){
var seq__35056__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35056__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35056__$1);
var G__35074 = cljs.core.chunk_rest.call(null,seq__35056__$1);
var G__35075 = c__4550__auto__;
var G__35076 = cljs.core.count.call(null,c__4550__auto__);
var G__35077 = (0);
seq__35056 = G__35074;
chunk__35057 = G__35075;
count__35058 = G__35076;
i__35059 = G__35077;
continue;
} else {
var file = cljs.core.first.call(null,seq__35056__$1);
file.arrayBuffer().then(((function (seq__35056,chunk__35057,count__35058,i__35059,file,seq__35056__$1,temp__5720__auto__){
return (function (p1__35054_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__35054_SHARP_);
});})(seq__35056,chunk__35057,count__35058,i__35059,file,seq__35056__$1,temp__5720__auto__))
).then(((function (seq__35056,chunk__35057,count__35058,i__35059,file,seq__35056__$1,temp__5720__auto__){
return (function (p1__35055_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__35055_SHARP_);
});})(seq__35056,chunk__35057,count__35058,i__35059,file,seq__35056__$1,temp__5720__auto__))
);


var G__35078 = cljs.core.next.call(null,seq__35056__$1);
var G__35079 = null;
var G__35080 = (0);
var G__35081 = (0);
seq__35056 = G__35078;
chunk__35057 = G__35079;
count__35058 = G__35080;
i__35059 = G__35081;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__35060(s__35061){
return (new cljs.core.LazySeq(null,(function (){
var s__35061__$1 = s__35061;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__35061__$1);
if(temp__5720__auto__){
var s__35061__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35061__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__35061__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__35063 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__35062 = (0);
while(true){
if((i__35062 < size__4522__auto__)){
var vec__35064 = cljs.core._nth.call(null,c__4521__auto__,i__35062);
var name = cljs.core.nth.call(null,vec__35064,(0),null);
var buffer = cljs.core.nth.call(null,vec__35064,(1),null);
cljs.core.chunk_append.call(null,b__35063,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__35082 = (i__35062 + (1));
i__35062 = G__35082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35063),fugue$ctx_ctrls$buffer_ctrl_$_iter__35060.call(null,cljs.core.chunk_rest.call(null,s__35061__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35063),null);
}
} else {
var vec__35067 = cljs.core.first.call(null,s__35061__$2);
var name = cljs.core.nth.call(null,vec__35067,(0),null);
var buffer = cljs.core.nth.call(null,vec__35067,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__35060.call(null,cljs.core.rest.call(null,s__35061__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648).cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = cljs.core.deref.call(null,buffer_ctx);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
})()], null)], null);
});
});

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610319352426
