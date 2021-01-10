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
var seq__34912_35012 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34914_35013 = null;
var count__34915_35014 = (0);
var i__34916_35015 = (0);
while(true){
if((i__34916_35015 < count__34915_35014)){
var vec__34958_35016 = cljs.core._nth.call(null,chunk__34914_35013,i__34916_35015);
var in_name_35017 = cljs.core.nth.call(null,vec__34958_35016,(0),null);
var in_mult_35018 = cljs.core.nth.call(null,vec__34958_35016,(1),null);
var in_chan_35019 = cljs.core.async.chan.call(null);
var c__32685__auto___35020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34912_35012,chunk__34914_35013,count__34915_35014,i__34916_35015,c__32685__auto___35020,in_chan_35019,vec__34958_35016,in_name_35017,in_mult_35018,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34912_35012,chunk__34914_35013,count__34915_35014,i__34916_35015,c__32685__auto___35020,in_chan_35019,vec__34958_35016,in_name_35017,in_mult_35018,inputs){
return (function (state_34969){
var state_val_34970 = (state_34969[(1)]);
if((state_val_34970 === (1))){
var state_34969__$1 = state_34969;
var statearr_34971_35021 = state_34969__$1;
(statearr_34971_35021[(2)] = null);

(statearr_34971_35021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34970 === (2))){
var state_34969__$1 = state_34969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34969__$1,(4),in_chan_35019);
} else {
if((state_val_34970 === (3))){
var inst_34967 = (state_34969[(2)]);
var state_34969__$1 = state_34969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34969__$1,inst_34967);
} else {
if((state_val_34970 === (4))){
var inst_34963 = (state_34969[(2)]);
var inst_34964 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_35017,inst_34963);
var state_34969__$1 = (function (){var statearr_34972 = state_34969;
(statearr_34972[(7)] = inst_34964);

return statearr_34972;
})();
var statearr_34973_35022 = state_34969__$1;
(statearr_34973_35022[(2)] = null);

(statearr_34973_35022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34912_35012,chunk__34914_35013,count__34915_35014,i__34916_35015,c__32685__auto___35020,in_chan_35019,vec__34958_35016,in_name_35017,in_mult_35018,inputs))
;
return ((function (seq__34912_35012,chunk__34914_35013,count__34915_35014,i__34916_35015,switch__32590__auto__,c__32685__auto___35020,in_chan_35019,vec__34958_35016,in_name_35017,in_mult_35018,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34974 = [null,null,null,null,null,null,null,null];
(statearr_34974[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34974[(1)] = (1));

return statearr_34974;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34969){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34975){if((e34975 instanceof Object)){
var ex__32594__auto__ = e34975;
var statearr_34976_35023 = state_34969;
(statearr_34976_35023[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35024 = state_34969;
state_34969 = G__35024;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34969){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34912_35012,chunk__34914_35013,count__34915_35014,i__34916_35015,switch__32590__auto__,c__32685__auto___35020,in_chan_35019,vec__34958_35016,in_name_35017,in_mult_35018,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34977 = f__32686__auto__.call(null);
(statearr_34977[(6)] = c__32685__auto___35020);

return statearr_34977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34912_35012,chunk__34914_35013,count__34915_35014,i__34916_35015,c__32685__auto___35020,in_chan_35019,vec__34958_35016,in_name_35017,in_mult_35018,inputs))
);


cljs.core.async.tap.call(null,in_mult_35018,in_chan_35019);


var G__35025 = seq__34912_35012;
var G__35026 = chunk__34914_35013;
var G__35027 = count__34915_35014;
var G__35028 = (i__34916_35015 + (1));
seq__34912_35012 = G__35025;
chunk__34914_35013 = G__35026;
count__34915_35014 = G__35027;
i__34916_35015 = G__35028;
continue;
} else {
var temp__5720__auto___35029 = cljs.core.seq.call(null,seq__34912_35012);
if(temp__5720__auto___35029){
var seq__34912_35030__$1 = temp__5720__auto___35029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34912_35030__$1)){
var c__4550__auto___35031 = cljs.core.chunk_first.call(null,seq__34912_35030__$1);
var G__35032 = cljs.core.chunk_rest.call(null,seq__34912_35030__$1);
var G__35033 = c__4550__auto___35031;
var G__35034 = cljs.core.count.call(null,c__4550__auto___35031);
var G__35035 = (0);
seq__34912_35012 = G__35032;
chunk__34914_35013 = G__35033;
count__34915_35014 = G__35034;
i__34916_35015 = G__35035;
continue;
} else {
var vec__34978_35036 = cljs.core.first.call(null,seq__34912_35030__$1);
var in_name_35037 = cljs.core.nth.call(null,vec__34978_35036,(0),null);
var in_mult_35038 = cljs.core.nth.call(null,vec__34978_35036,(1),null);
var in_chan_35039 = cljs.core.async.chan.call(null);
var c__32685__auto___35040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34912_35012,chunk__34914_35013,count__34915_35014,i__34916_35015,c__32685__auto___35040,in_chan_35039,vec__34978_35036,in_name_35037,in_mult_35038,seq__34912_35030__$1,temp__5720__auto___35029,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34912_35012,chunk__34914_35013,count__34915_35014,i__34916_35015,c__32685__auto___35040,in_chan_35039,vec__34978_35036,in_name_35037,in_mult_35038,seq__34912_35030__$1,temp__5720__auto___35029,inputs){
return (function (state_34989){
var state_val_34990 = (state_34989[(1)]);
if((state_val_34990 === (1))){
var state_34989__$1 = state_34989;
var statearr_34991_35041 = state_34989__$1;
(statearr_34991_35041[(2)] = null);

(statearr_34991_35041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (2))){
var state_34989__$1 = state_34989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34989__$1,(4),in_chan_35039);
} else {
if((state_val_34990 === (3))){
var inst_34987 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34989__$1,inst_34987);
} else {
if((state_val_34990 === (4))){
var inst_34983 = (state_34989[(2)]);
var inst_34984 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_35037,inst_34983);
var state_34989__$1 = (function (){var statearr_34992 = state_34989;
(statearr_34992[(7)] = inst_34984);

return statearr_34992;
})();
var statearr_34993_35042 = state_34989__$1;
(statearr_34993_35042[(2)] = null);

(statearr_34993_35042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34912_35012,chunk__34914_35013,count__34915_35014,i__34916_35015,c__32685__auto___35040,in_chan_35039,vec__34978_35036,in_name_35037,in_mult_35038,seq__34912_35030__$1,temp__5720__auto___35029,inputs))
;
return ((function (seq__34912_35012,chunk__34914_35013,count__34915_35014,i__34916_35015,switch__32590__auto__,c__32685__auto___35040,in_chan_35039,vec__34978_35036,in_name_35037,in_mult_35038,seq__34912_35030__$1,temp__5720__auto___35029,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34994 = [null,null,null,null,null,null,null,null];
(statearr_34994[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34994[(1)] = (1));

return statearr_34994;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34989){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34995){if((e34995 instanceof Object)){
var ex__32594__auto__ = e34995;
var statearr_34996_35043 = state_34989;
(statearr_34996_35043[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35044 = state_34989;
state_34989 = G__35044;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34989){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34912_35012,chunk__34914_35013,count__34915_35014,i__34916_35015,switch__32590__auto__,c__32685__auto___35040,in_chan_35039,vec__34978_35036,in_name_35037,in_mult_35038,seq__34912_35030__$1,temp__5720__auto___35029,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34997 = f__32686__auto__.call(null);
(statearr_34997[(6)] = c__32685__auto___35040);

return statearr_34997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34912_35012,chunk__34914_35013,count__34915_35014,i__34916_35015,c__32685__auto___35040,in_chan_35039,vec__34978_35036,in_name_35037,in_mult_35038,seq__34912_35030__$1,temp__5720__auto___35029,inputs))
);


cljs.core.async.tap.call(null,in_mult_35038,in_chan_35039);


var G__35045 = cljs.core.next.call(null,seq__34912_35030__$1);
var G__35046 = null;
var G__35047 = (0);
var G__35048 = (0);
seq__34912_35012 = G__35045;
chunk__34914_35013 = G__35046;
count__34915_35014 = G__35047;
i__34916_35015 = G__35048;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34998(s__34999){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34999__$1 = s__34999;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34999__$1);
if(temp__5720__auto__){
var s__34999__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34999__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34999__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__35001 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__35000 = (0);
while(true){
if((i__35000 < size__4522__auto__)){
var vec__35002 = cljs.core._nth.call(null,c__4521__auto__,i__35000);
var in_name = cljs.core.nth.call(null,vec__35002,(0),null);
var map__35005 = cljs.core.nth.call(null,vec__35002,(1),null);
var map__35005__$1 = (((((!((map__35005 == null))))?(((((map__35005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35005):map__35005);
var type = cljs.core.get.call(null,map__35005__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__35005__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__35005__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__35001,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__35049 = (i__35000 + (1));
i__35000 = G__35049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35001),fugue$ctx_ctrls$midi_monitor_$_iter__34998.call(null,cljs.core.chunk_rest.call(null,s__34999__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35001),null);
}
} else {
var vec__35007 = cljs.core.first.call(null,s__34999__$2);
var in_name = cljs.core.nth.call(null,vec__35007,(0),null);
var map__35010 = cljs.core.nth.call(null,vec__35007,(1),null);
var map__35010__$1 = (((((!((map__35010 == null))))?(((((map__35010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35010):map__35010);
var type = cljs.core.get.call(null,map__35010__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__35010__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__35010__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34998.call(null,cljs.core.rest.call(null,s__34999__$2)));
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
var temp__5718__auto___35053 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___35053)){
var old_ctx_35054 = temp__5718__auto___35053;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_35054).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__35051 = temp__5718__auto__;
var map__35051__$1 = (((((!((map__35051 == null))))?(((((map__35051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35051):map__35051);
var outs = cljs.core.get.call(null,map__35051__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__35050_SHARP_){
return console.log(p1__35050_SHARP_);
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
var seq__35057 = cljs.core.seq.call(null,files);
var chunk__35058 = null;
var count__35059 = (0);
var i__35060 = (0);
while(true){
if((i__35060 < count__35059)){
var file = cljs.core._nth.call(null,chunk__35058,i__35060);
file.arrayBuffer().then(((function (seq__35057,chunk__35058,count__35059,i__35060,file,files){
return (function (p1__35055_SHARP_){
return actx.decodeAudioData(p1__35055_SHARP_);
});})(seq__35057,chunk__35058,count__35059,i__35060,file,files))
).then(((function (seq__35057,chunk__35058,count__35059,i__35060,file,files){
return (function (p1__35056_SHARP_){
return buffer_cb.call(null,file.name,p1__35056_SHARP_);
});})(seq__35057,chunk__35058,count__35059,i__35060,file,files))
);


var G__35061 = seq__35057;
var G__35062 = chunk__35058;
var G__35063 = count__35059;
var G__35064 = (i__35060 + (1));
seq__35057 = G__35061;
chunk__35058 = G__35062;
count__35059 = G__35063;
i__35060 = G__35064;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35057);
if(temp__5720__auto__){
var seq__35057__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35057__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35057__$1);
var G__35065 = cljs.core.chunk_rest.call(null,seq__35057__$1);
var G__35066 = c__4550__auto__;
var G__35067 = cljs.core.count.call(null,c__4550__auto__);
var G__35068 = (0);
seq__35057 = G__35065;
chunk__35058 = G__35066;
count__35059 = G__35067;
i__35060 = G__35068;
continue;
} else {
var file = cljs.core.first.call(null,seq__35057__$1);
file.arrayBuffer().then(((function (seq__35057,chunk__35058,count__35059,i__35060,file,seq__35057__$1,temp__5720__auto__,files){
return (function (p1__35055_SHARP_){
return actx.decodeAudioData(p1__35055_SHARP_);
});})(seq__35057,chunk__35058,count__35059,i__35060,file,seq__35057__$1,temp__5720__auto__,files))
).then(((function (seq__35057,chunk__35058,count__35059,i__35060,file,seq__35057__$1,temp__5720__auto__,files){
return (function (p1__35056_SHARP_){
return buffer_cb.call(null,file.name,p1__35056_SHARP_);
});})(seq__35057,chunk__35058,count__35059,i__35060,file,seq__35057__$1,temp__5720__auto__,files))
);


var G__35069 = cljs.core.next.call(null,seq__35057__$1);
var G__35070 = null;
var G__35071 = (0);
var G__35072 = (0);
seq__35057 = G__35069;
chunk__35058 = G__35070;
count__35059 = G__35071;
i__35060 = G__35072;
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
var seq__35075 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__35076 = null;
var count__35077 = (0);
var i__35078 = (0);
while(true){
if((i__35078 < count__35077)){
var file = cljs.core._nth.call(null,chunk__35076,i__35078);
file.arrayBuffer().then(((function (seq__35075,chunk__35076,count__35077,i__35078,file){
return (function (p1__35073_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__35073_SHARP_);
});})(seq__35075,chunk__35076,count__35077,i__35078,file))
).then(((function (seq__35075,chunk__35076,count__35077,i__35078,file){
return (function (p1__35074_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__35074_SHARP_);
});})(seq__35075,chunk__35076,count__35077,i__35078,file))
);


var G__35089 = seq__35075;
var G__35090 = chunk__35076;
var G__35091 = count__35077;
var G__35092 = (i__35078 + (1));
seq__35075 = G__35089;
chunk__35076 = G__35090;
count__35077 = G__35091;
i__35078 = G__35092;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35075);
if(temp__5720__auto__){
var seq__35075__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35075__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35075__$1);
var G__35093 = cljs.core.chunk_rest.call(null,seq__35075__$1);
var G__35094 = c__4550__auto__;
var G__35095 = cljs.core.count.call(null,c__4550__auto__);
var G__35096 = (0);
seq__35075 = G__35093;
chunk__35076 = G__35094;
count__35077 = G__35095;
i__35078 = G__35096;
continue;
} else {
var file = cljs.core.first.call(null,seq__35075__$1);
file.arrayBuffer().then(((function (seq__35075,chunk__35076,count__35077,i__35078,file,seq__35075__$1,temp__5720__auto__){
return (function (p1__35073_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__35073_SHARP_);
});})(seq__35075,chunk__35076,count__35077,i__35078,file,seq__35075__$1,temp__5720__auto__))
).then(((function (seq__35075,chunk__35076,count__35077,i__35078,file,seq__35075__$1,temp__5720__auto__){
return (function (p1__35074_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__35074_SHARP_);
});})(seq__35075,chunk__35076,count__35077,i__35078,file,seq__35075__$1,temp__5720__auto__))
);


var G__35097 = cljs.core.next.call(null,seq__35075__$1);
var G__35098 = null;
var G__35099 = (0);
var G__35100 = (0);
seq__35075 = G__35097;
chunk__35076 = G__35098;
count__35077 = G__35099;
i__35078 = G__35100;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__35079(s__35080){
return (new cljs.core.LazySeq(null,(function (){
var s__35080__$1 = s__35080;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__35080__$1);
if(temp__5720__auto__){
var s__35080__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35080__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__35080__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__35082 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__35081 = (0);
while(true){
if((i__35081 < size__4522__auto__)){
var vec__35083 = cljs.core._nth.call(null,c__4521__auto__,i__35081);
var name = cljs.core.nth.call(null,vec__35083,(0),null);
var buffer = cljs.core.nth.call(null,vec__35083,(1),null);
cljs.core.chunk_append.call(null,b__35082,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__35101 = (i__35081 + (1));
i__35081 = G__35101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35082),fugue$ctx_ctrls$buffer_ctrl_$_iter__35079.call(null,cljs.core.chunk_rest.call(null,s__35080__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35082),null);
}
} else {
var vec__35086 = cljs.core.first.call(null,s__35080__$2);
var name = cljs.core.nth.call(null,vec__35086,(0),null);
var buffer = cljs.core.nth.call(null,vec__35086,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__35079.call(null,cljs.core.rest.call(null,s__35080__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610309312586
