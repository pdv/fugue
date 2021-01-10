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
var seq__34907_35007 = cljs.core.seq.call(null,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185).cljs$core$IFn$_invoke$arity$1(midi_ctx));
var chunk__34909_35008 = null;
var count__34910_35009 = (0);
var i__34911_35010 = (0);
while(true){
if((i__34911_35010 < count__34910_35009)){
var vec__34953_35011 = cljs.core._nth.call(null,chunk__34909_35008,i__34911_35010);
var in_name_35012 = cljs.core.nth.call(null,vec__34953_35011,(0),null);
var in_mult_35013 = cljs.core.nth.call(null,vec__34953_35011,(1),null);
var in_chan_35014 = cljs.core.async.chan.call(null);
var c__32685__auto___35015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34907_35007,chunk__34909_35008,count__34910_35009,i__34911_35010,c__32685__auto___35015,in_chan_35014,vec__34953_35011,in_name_35012,in_mult_35013,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34907_35007,chunk__34909_35008,count__34910_35009,i__34911_35010,c__32685__auto___35015,in_chan_35014,vec__34953_35011,in_name_35012,in_mult_35013,inputs){
return (function (state_34964){
var state_val_34965 = (state_34964[(1)]);
if((state_val_34965 === (1))){
var state_34964__$1 = state_34964;
var statearr_34966_35016 = state_34964__$1;
(statearr_34966_35016[(2)] = null);

(statearr_34966_35016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34965 === (2))){
var state_34964__$1 = state_34964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34964__$1,(4),in_chan_35014);
} else {
if((state_val_34965 === (3))){
var inst_34962 = (state_34964[(2)]);
var state_34964__$1 = state_34964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34964__$1,inst_34962);
} else {
if((state_val_34965 === (4))){
var inst_34958 = (state_34964[(2)]);
var inst_34959 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_35012,inst_34958);
var state_34964__$1 = (function (){var statearr_34967 = state_34964;
(statearr_34967[(7)] = inst_34959);

return statearr_34967;
})();
var statearr_34968_35017 = state_34964__$1;
(statearr_34968_35017[(2)] = null);

(statearr_34968_35017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34907_35007,chunk__34909_35008,count__34910_35009,i__34911_35010,c__32685__auto___35015,in_chan_35014,vec__34953_35011,in_name_35012,in_mult_35013,inputs))
;
return ((function (seq__34907_35007,chunk__34909_35008,count__34910_35009,i__34911_35010,switch__32590__auto__,c__32685__auto___35015,in_chan_35014,vec__34953_35011,in_name_35012,in_mult_35013,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34969 = [null,null,null,null,null,null,null,null];
(statearr_34969[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34969[(1)] = (1));

return statearr_34969;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34964){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34970){if((e34970 instanceof Object)){
var ex__32594__auto__ = e34970;
var statearr_34971_35018 = state_34964;
(statearr_34971_35018[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35019 = state_34964;
state_34964 = G__35019;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34964){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34907_35007,chunk__34909_35008,count__34910_35009,i__34911_35010,switch__32590__auto__,c__32685__auto___35015,in_chan_35014,vec__34953_35011,in_name_35012,in_mult_35013,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34972 = f__32686__auto__.call(null);
(statearr_34972[(6)] = c__32685__auto___35015);

return statearr_34972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34907_35007,chunk__34909_35008,count__34910_35009,i__34911_35010,c__32685__auto___35015,in_chan_35014,vec__34953_35011,in_name_35012,in_mult_35013,inputs))
);


cljs.core.async.tap.call(null,in_mult_35013,in_chan_35014);


var G__35020 = seq__34907_35007;
var G__35021 = chunk__34909_35008;
var G__35022 = count__34910_35009;
var G__35023 = (i__34911_35010 + (1));
seq__34907_35007 = G__35020;
chunk__34909_35008 = G__35021;
count__34910_35009 = G__35022;
i__34911_35010 = G__35023;
continue;
} else {
var temp__5720__auto___35024 = cljs.core.seq.call(null,seq__34907_35007);
if(temp__5720__auto___35024){
var seq__34907_35025__$1 = temp__5720__auto___35024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34907_35025__$1)){
var c__4550__auto___35026 = cljs.core.chunk_first.call(null,seq__34907_35025__$1);
var G__35027 = cljs.core.chunk_rest.call(null,seq__34907_35025__$1);
var G__35028 = c__4550__auto___35026;
var G__35029 = cljs.core.count.call(null,c__4550__auto___35026);
var G__35030 = (0);
seq__34907_35007 = G__35027;
chunk__34909_35008 = G__35028;
count__34910_35009 = G__35029;
i__34911_35010 = G__35030;
continue;
} else {
var vec__34973_35031 = cljs.core.first.call(null,seq__34907_35025__$1);
var in_name_35032 = cljs.core.nth.call(null,vec__34973_35031,(0),null);
var in_mult_35033 = cljs.core.nth.call(null,vec__34973_35031,(1),null);
var in_chan_35034 = cljs.core.async.chan.call(null);
var c__32685__auto___35035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__34907_35007,chunk__34909_35008,count__34910_35009,i__34911_35010,c__32685__auto___35035,in_chan_35034,vec__34973_35031,in_name_35032,in_mult_35033,seq__34907_35025__$1,temp__5720__auto___35024,inputs){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (seq__34907_35007,chunk__34909_35008,count__34910_35009,i__34911_35010,c__32685__auto___35035,in_chan_35034,vec__34973_35031,in_name_35032,in_mult_35033,seq__34907_35025__$1,temp__5720__auto___35024,inputs){
return (function (state_34984){
var state_val_34985 = (state_34984[(1)]);
if((state_val_34985 === (1))){
var state_34984__$1 = state_34984;
var statearr_34986_35036 = state_34984__$1;
(statearr_34986_35036[(2)] = null);

(statearr_34986_35036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34985 === (2))){
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34984__$1,(4),in_chan_35034);
} else {
if((state_val_34985 === (3))){
var inst_34982 = (state_34984[(2)]);
var state_34984__$1 = state_34984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34984__$1,inst_34982);
} else {
if((state_val_34985 === (4))){
var inst_34978 = (state_34984[(2)]);
var inst_34979 = cljs.core.swap_BANG_.call(null,inputs,cljs.core.assoc,in_name_35032,inst_34978);
var state_34984__$1 = (function (){var statearr_34987 = state_34984;
(statearr_34987[(7)] = inst_34979);

return statearr_34987;
})();
var statearr_34988_35037 = state_34984__$1;
(statearr_34988_35037[(2)] = null);

(statearr_34988_35037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(seq__34907_35007,chunk__34909_35008,count__34910_35009,i__34911_35010,c__32685__auto___35035,in_chan_35034,vec__34973_35031,in_name_35032,in_mult_35033,seq__34907_35025__$1,temp__5720__auto___35024,inputs))
;
return ((function (seq__34907_35007,chunk__34909_35008,count__34910_35009,i__34911_35010,switch__32590__auto__,c__32685__auto___35035,in_chan_35034,vec__34973_35031,in_name_35032,in_mult_35033,seq__34907_35025__$1,temp__5720__auto___35024,inputs){
return (function() {
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = null;
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0 = (function (){
var statearr_34989 = [null,null,null,null,null,null,null,null];
(statearr_34989[(0)] = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__);

(statearr_34989[(1)] = (1));

return statearr_34989;
});
var fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1 = (function (state_34984){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34990){if((e34990 instanceof Object)){
var ex__32594__auto__ = e34990;
var statearr_34991_35038 = state_34984;
(statearr_34991_35038[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35039 = state_34984;
state_34984 = G__35039;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__ = function(state_34984){
switch(arguments.length){
case 0:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1.call(this,state_34984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____0;
fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto____1;
return fugue$ctx_ctrls$midi_monitor_$_state_machine__32591__auto__;
})()
;})(seq__34907_35007,chunk__34909_35008,count__34910_35009,i__34911_35010,switch__32590__auto__,c__32685__auto___35035,in_chan_35034,vec__34973_35031,in_name_35032,in_mult_35033,seq__34907_35025__$1,temp__5720__auto___35024,inputs))
})();
var state__32687__auto__ = (function (){var statearr_34992 = f__32686__auto__.call(null);
(statearr_34992[(6)] = c__32685__auto___35035);

return statearr_34992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(seq__34907_35007,chunk__34909_35008,count__34910_35009,i__34911_35010,c__32685__auto___35035,in_chan_35034,vec__34973_35031,in_name_35032,in_mult_35033,seq__34907_35025__$1,temp__5720__auto___35024,inputs))
);


cljs.core.async.tap.call(null,in_mult_35033,in_chan_35034);


var G__35040 = cljs.core.next.call(null,seq__34907_35025__$1);
var G__35041 = null;
var G__35042 = (0);
var G__35043 = (0);
seq__34907_35007 = G__35040;
chunk__34909_35008 = G__35041;
count__34910_35009 = G__35042;
i__34911_35010 = G__35043;
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
return (function fugue$ctx_ctrls$midi_monitor_$_iter__34993(s__34994){
return (new cljs.core.LazySeq(null,((function (inputs){
return (function (){
var s__34994__$1 = s__34994;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__34994__$1);
if(temp__5720__auto__){
var s__34994__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34994__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34994__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34996 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34995 = (0);
while(true){
if((i__34995 < size__4522__auto__)){
var vec__34997 = cljs.core._nth.call(null,c__4521__auto__,i__34995);
var in_name = cljs.core.nth.call(null,vec__34997,(0),null);
var map__35000 = cljs.core.nth.call(null,vec__34997,(1),null);
var map__35000__$1 = (((((!((map__35000 == null))))?(((((map__35000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35000):map__35000);
var type = cljs.core.get.call(null,map__35000__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__35000__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__35000__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
cljs.core.chunk_append.call(null,b__34996,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null));

var G__35044 = (i__34995 + (1));
i__34995 = G__35044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34996),fugue$ctx_ctrls$midi_monitor_$_iter__34993.call(null,cljs.core.chunk_rest.call(null,s__34994__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34996),null);
}
} else {
var vec__35002 = cljs.core.first.call(null,s__34994__$2);
var in_name = cljs.core.nth.call(null,vec__35002,(0),null);
var map__35005 = cljs.core.nth.call(null,vec__35002,(1),null);
var map__35005__$1 = (((((!((map__35005 == null))))?(((((map__35005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35005):map__35005);
var type = cljs.core.get.call(null,map__35005__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__35005__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__35005__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in_name)," type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(note)," velo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(velocity)].join('')], null),fugue$ctx_ctrls$midi_monitor_$_iter__34993.call(null,cljs.core.rest.call(null,s__34994__$2)));
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
var temp__5718__auto___35048 = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto___35048)){
var old_ctx_35049 = temp__5718__auto___35048;
new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(old_ctx_35049).close();
} else {
}

return cljs.core.reset_BANG_.call(null,audio_ctx,fugue.audio.make_ctx.call(null));
})], null),"reset audio context"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(function (){var temp__5718__auto__ = cljs.core.deref.call(null,audio_ctx);
if(cljs.core.truth_(temp__5718__auto__)){
var map__35046 = temp__5718__auto__;
var map__35046__$1 = (((((!((map__35046 == null))))?(((((map__35046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35046):map__35046);
var outs = cljs.core.get.call(null,map__35046__$1,new cljs.core.Keyword("fugue.audio","outs","fugue.audio/outs",2088717229));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(outs.numberOfInputs)," outs"].join('');
} else {
return "audio ctx not loaded";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fugue.audio.inputs_promise.call(null).then(cljs.core.partial.call(null,cljs.core.swap_BANG_,audio_ctx,fugue.audio.with_inputs)).catch((function (p1__35045_SHARP_){
return console.log(p1__35045_SHARP_);
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
var seq__35052 = cljs.core.seq.call(null,files);
var chunk__35053 = null;
var count__35054 = (0);
var i__35055 = (0);
while(true){
if((i__35055 < count__35054)){
var file = cljs.core._nth.call(null,chunk__35053,i__35055);
file.arrayBuffer().then(((function (seq__35052,chunk__35053,count__35054,i__35055,file,files){
return (function (p1__35050_SHARP_){
return actx.decodeAudioData(p1__35050_SHARP_);
});})(seq__35052,chunk__35053,count__35054,i__35055,file,files))
).then(((function (seq__35052,chunk__35053,count__35054,i__35055,file,files){
return (function (p1__35051_SHARP_){
return buffer_cb.call(null,file.name,p1__35051_SHARP_);
});})(seq__35052,chunk__35053,count__35054,i__35055,file,files))
);


var G__35056 = seq__35052;
var G__35057 = chunk__35053;
var G__35058 = count__35054;
var G__35059 = (i__35055 + (1));
seq__35052 = G__35056;
chunk__35053 = G__35057;
count__35054 = G__35058;
i__35055 = G__35059;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35052);
if(temp__5720__auto__){
var seq__35052__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35052__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35052__$1);
var G__35060 = cljs.core.chunk_rest.call(null,seq__35052__$1);
var G__35061 = c__4550__auto__;
var G__35062 = cljs.core.count.call(null,c__4550__auto__);
var G__35063 = (0);
seq__35052 = G__35060;
chunk__35053 = G__35061;
count__35054 = G__35062;
i__35055 = G__35063;
continue;
} else {
var file = cljs.core.first.call(null,seq__35052__$1);
file.arrayBuffer().then(((function (seq__35052,chunk__35053,count__35054,i__35055,file,seq__35052__$1,temp__5720__auto__,files){
return (function (p1__35050_SHARP_){
return actx.decodeAudioData(p1__35050_SHARP_);
});})(seq__35052,chunk__35053,count__35054,i__35055,file,seq__35052__$1,temp__5720__auto__,files))
).then(((function (seq__35052,chunk__35053,count__35054,i__35055,file,seq__35052__$1,temp__5720__auto__,files){
return (function (p1__35051_SHARP_){
return buffer_cb.call(null,file.name,p1__35051_SHARP_);
});})(seq__35052,chunk__35053,count__35054,i__35055,file,seq__35052__$1,temp__5720__auto__,files))
);


var G__35064 = cljs.core.next.call(null,seq__35052__$1);
var G__35065 = null;
var G__35066 = (0);
var G__35067 = (0);
seq__35052 = G__35064;
chunk__35053 = G__35065;
count__35054 = G__35066;
i__35055 = G__35067;
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
var seq__35070 = cljs.core.seq.call(null,Array.from(e.target.files));
var chunk__35071 = null;
var count__35072 = (0);
var i__35073 = (0);
while(true){
if((i__35073 < count__35072)){
var file = cljs.core._nth.call(null,chunk__35071,i__35073);
file.arrayBuffer().then(((function (seq__35070,chunk__35071,count__35072,i__35073,file){
return (function (p1__35068_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__35068_SHARP_);
});})(seq__35070,chunk__35071,count__35072,i__35073,file))
).then(((function (seq__35070,chunk__35071,count__35072,i__35073,file){
return (function (p1__35069_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__35069_SHARP_);
});})(seq__35070,chunk__35071,count__35072,i__35073,file))
);


var G__35084 = seq__35070;
var G__35085 = chunk__35071;
var G__35086 = count__35072;
var G__35087 = (i__35073 + (1));
seq__35070 = G__35084;
chunk__35071 = G__35085;
count__35072 = G__35086;
i__35073 = G__35087;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__35070);
if(temp__5720__auto__){
var seq__35070__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35070__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35070__$1);
var G__35088 = cljs.core.chunk_rest.call(null,seq__35070__$1);
var G__35089 = c__4550__auto__;
var G__35090 = cljs.core.count.call(null,c__4550__auto__);
var G__35091 = (0);
seq__35070 = G__35088;
chunk__35071 = G__35089;
count__35072 = G__35090;
i__35073 = G__35091;
continue;
} else {
var file = cljs.core.first.call(null,seq__35070__$1);
file.arrayBuffer().then(((function (seq__35070,chunk__35071,count__35072,i__35073,file,seq__35070__$1,temp__5720__auto__){
return (function (p1__35068_SHARP_){
return new cljs.core.Keyword("fugue.audio","actx","fugue.audio/actx",-1808529001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_ctx)).decodeAudioData(p1__35068_SHARP_);
});})(seq__35070,chunk__35071,count__35072,i__35073,file,seq__35070__$1,temp__5720__auto__))
).then(((function (seq__35070,chunk__35071,count__35072,i__35073,file,seq__35070__$1,temp__5720__auto__){
return (function (p1__35069_SHARP_){
return cljs.core.swap_BANG_.call(null,buffer_ctx,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.buffer","buffer-cache","fugue.buffer/buffer-cache",-2046975648),file.name], null),p1__35069_SHARP_);
});})(seq__35070,chunk__35071,count__35072,i__35073,file,seq__35070__$1,temp__5720__auto__))
);


var G__35092 = cljs.core.next.call(null,seq__35070__$1);
var G__35093 = null;
var G__35094 = (0);
var G__35095 = (0);
seq__35070 = G__35092;
chunk__35071 = G__35093;
count__35072 = G__35094;
i__35073 = G__35095;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function fugue$ctx_ctrls$buffer_ctrl_$_iter__35074(s__35075){
return (new cljs.core.LazySeq(null,(function (){
var s__35075__$1 = s__35075;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__35075__$1);
if(temp__5720__auto__){
var s__35075__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35075__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__35075__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__35077 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__35076 = (0);
while(true){
if((i__35076 < size__4522__auto__)){
var vec__35078 = cljs.core._nth.call(null,c__4521__auto__,i__35076);
var name = cljs.core.nth.call(null,vec__35078,(0),null);
var buffer = cljs.core.nth.call(null,vec__35078,(1),null);
cljs.core.chunk_append.call(null,b__35077,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null));

var G__35096 = (i__35076 + (1));
i__35076 = G__35096;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35077),fugue$ctx_ctrls$buffer_ctrl_$_iter__35074.call(null,cljs.core.chunk_rest.call(null,s__35075__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35077),null);
}
} else {
var vec__35081 = cljs.core.first.call(null,s__35075__$2);
var name = cljs.core.nth.call(null,vec__35081,(0),null);
var buffer = cljs.core.nth.call(null,vec__35081,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer.length)].join('')], null),fugue$ctx_ctrls$buffer_ctrl_$_iter__35074.call(null,cljs.core.rest.call(null,s__35075__$2)));
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

//# sourceMappingURL=ctx_ctrls.js.map?rel=1610304476807
