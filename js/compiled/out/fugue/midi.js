// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.midi');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('cljs.core.async');
goog.require('oops.core');
goog.require('fugue.synthdef');
goog.require('fugue.chan');
cljs.core._add_method.call(null,fugue.chan.chan_node_spec,new cljs.core.Keyword("fugue.midi","midi-in","fugue.midi/midi-in",-1281528989),(function (_){
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__34680){
return cljs.core.map_QMARK_.call(null,G__34680);
}),(function (G__34680){
return cljs.core.contains_QMARK_.call(null,G__34680,new cljs.core.Keyword("fugue.midi","input-name","fugue.midi/input-name",1387993924));
})], null),(function (G__34680){
return ((cljs.core.map_QMARK_.call(null,G__34680)) && (cljs.core.contains_QMARK_.call(null,G__34680,new cljs.core.Keyword("fugue.midi","input-name","fugue.midi/input-name",1387993924))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.midi","input-name","fugue.midi/input-name",1387993924)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.midi","input-name","fugue.midi/input-name",1387993924)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fugue.midi","input-name","fugue.midi/input-name",1387993924)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fugue.midi","input-name","fugue.midi/input-name",1387993924)))], null),null]));
}));
cljs.core._add_method.call(null,fugue.chan.make_chan_node,new cljs.core.Keyword("fugue.midi","midi-in","fugue.midi/midi-in",-1281528989),(function (p__34681,p__34682){
var map__34683 = p__34681;
var map__34683__$1 = (((((!((map__34683 == null))))?(((((map__34683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34683):map__34683);
var ins = cljs.core.get.call(null,map__34683__$1,new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185));
var map__34684 = p__34682;
var map__34684__$1 = (((((!((map__34684 == null))))?(((((map__34684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34684):map__34684);
var input_name = cljs.core.get.call(null,map__34684__$1,new cljs.core.Keyword("fugue.midi","input-name","fugue.midi/input-name",1387993924));
var midi_chan = cljs.core.get.call(null,ins,input_name);
var out_chan = cljs.core.async.chan.call(null,(1));
cljs.core.async.tap.call(null,midi_chan,out_chan);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","mult-out","fugue.chan/mult-out",-237670878),cljs.core.async.mult.call(null,out_chan)], null);
}));
fugue.midi.note__GT_hz = (function fugue$midi$note__GT_hz(note){
return (440.0 * Math.pow(2.0,((note - 69.0) / 12.0)));
});
/**
 * Returns a stateful transducer that maps midi events to midi notes based on
 *   priority-fn, which selects from a list of notes currently down.
 */
fugue.midi.midi_x_note = (function fugue$midi$midi_x_note(priority_fn){
return (function (rf){
var v_down = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
return ((function (v_down){
return (function() {
var G__34691 = null;
var G__34691__0 = (function (){
return rf.call(null);
});
var G__34691__1 = (function (result){
return rf.call(null,result);
});
var G__34691__2 = (function (result,midi){
var map__34689 = midi;
var map__34689__$1 = (((((!((map__34689 == null))))?(((((map__34689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34689):map__34689);
var note = cljs.core.get.call(null,map__34689__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34689__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
var note_on = (velocity > (0));
var op = ((note_on)?cljs.core.conj:((function (map__34689,map__34689__$1,note,velocity,note_on,v_down){
return (function (p1__34688_SHARP_,p2__34687_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([p2__34687_SHARP_]),p1__34688_SHARP_);
});})(map__34689,map__34689__$1,note,velocity,note_on,v_down))
);
var down = op.call(null,cljs.core.deref.call(null,v_down),note);
cljs.core.vreset_BANG_.call(null,v_down,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,down));

var temp__5718__auto__ = priority_fn.call(null,down);
if(cljs.core.truth_(temp__5718__auto__)){
var output = temp__5718__auto__;
return rf.call(null,result,output);
} else {
return result;
}
});
G__34691 = function(result,midi){
switch(arguments.length){
case 0:
return G__34691__0.call(this);
case 1:
return G__34691__1.call(this,result);
case 2:
return G__34691__2.call(this,result,midi);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34691.cljs$core$IFn$_invoke$arity$0 = G__34691__0;
G__34691.cljs$core$IFn$_invoke$arity$1 = G__34691__1;
G__34691.cljs$core$IFn$_invoke$arity$2 = G__34691__2;
return G__34691;
})()
;})(v_down))
});
});
/**
 * Returns a stateful transducer that maps midi events to midi velocities,
 *   retriggering if retrigger is truthful
 */
fugue.midi.midi_x_velo = (function fugue$midi$midi_x_velo(retrigger){
return (function (rf){
var v_down_count = cljs.core.volatile_BANG_.call(null,(0));
return ((function (v_down_count){
return (function() {
var G__34694 = null;
var G__34694__0 = (function (){
return rf.call(null);
});
var G__34694__1 = (function (result){
return rf.call(null,result);
});
var G__34694__2 = (function (result,midi){
var map__34692 = midi;
var map__34692__$1 = (((((!((map__34692 == null))))?(((((map__34692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34692):map__34692);
var type = cljs.core.get.call(null,map__34692__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var velocity = cljs.core.get.call(null,map__34692__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
var note_on = ((cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.midi","note-on","fugue.midi/note-on",1265446966),type)) && ((velocity > (0))));
var prev_down_count = cljs.core.deref.call(null,v_down_count);
cljs.core._vreset_BANG_.call(null,v_down_count,((note_on)?cljs.core.inc:cljs.core.dec).call(null,cljs.core._deref.call(null,v_down_count)));

if(cljs.core.truth_((function (){var or__4131__auto__ = (function (){var and__4120__auto__ = note_on;
if(and__4120__auto__){
var and__4120__auto____$1 = retrigger;
if(cljs.core.truth_(and__4120__auto____$1)){
return ((1) > prev_down_count);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((((note_on) && (cljs.core._EQ_.call(null,(0),prev_down_count)))) || ((((!(note_on))) && (cljs.core._EQ_.call(null,(1),prev_down_count)))));
}
})())){
return rf.call(null,result,velocity);
} else {
return result;
}
});
G__34694 = function(result,midi){
switch(arguments.length){
case 0:
return G__34694__0.call(this);
case 1:
return G__34694__1.call(this,result);
case 2:
return G__34694__2.call(this,result,midi);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34694.cljs$core$IFn$_invoke$arity$0 = G__34694__0;
G__34694.cljs$core$IFn$_invoke$arity$1 = G__34694__1;
G__34694.cljs$core$IFn$_invoke$arity$2 = G__34694__2;
return G__34694;
})()
;})(v_down_count))
});
});
/**
 * Naive monophonic algorithm, outputs [0, 1)
 */
fugue.midi.midi_x_gate = cljs.core.comp.call(null,fugue.midi.midi_x_velo.call(null,true),cljs.core.map.call(null,(function (p1__34695_SHARP_){
return (p1__34695_SHARP_ / (128));
})));
cljs.core._add_method.call(null,fugue.chan.make_transducer,new cljs.core.Keyword("fugue.midi","note-x-hz","fugue.midi/note-x-hz",1862530671),(function (_,___$1){
return cljs.core.comp.call(null,cljs.core.map.call(null,new cljs.core.Keyword("fugue.chan","input","fugue.chan/input",-525931471)),cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core.map.call(null,fugue.midi.note__GT_hz));
}));
cljs.core._add_method.call(null,fugue.chan.make_transducer,new cljs.core.Keyword("fugue.midi","midi-x-note","fugue.midi/midi-x-note",-1843602815),(function (_,___$1){
return cljs.core.comp.call(null,cljs.core.map.call(null,new cljs.core.Keyword("fugue.chan","input","fugue.chan/input",-525931471)),fugue.midi.midi_x_note.call(null,cljs.core.last));
}));
cljs.core._add_method.call(null,fugue.chan.make_transducer,new cljs.core.Keyword("fugue.midi","midi-x-gate","fugue.midi/midi-x-gate",62865431),(function (_,___$1){
return cljs.core.comp.call(null,cljs.core.map.call(null,new cljs.core.Keyword("fugue.chan","input","fugue.chan/input",-525931471)),fugue.midi.midi_x_gate);
}));
fugue.midi.map_to_range = (function fugue$midi$map_to_range(x,in_min,in_max,out_min,out_max){
return (out_min + ((out_max - out_min) * ((x - in_min) / in_max)));
});
cljs.core._add_method.call(null,fugue.chan.make_transducer,new cljs.core.Keyword("fugue.midi","midi-x-ctrl","fugue.midi/midi-x-ctrl",1988373092),(function (_,___$1){
return cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p1__34696_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(p1__34696_SHARP_),new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("fugue.chan","input","fugue.chan/input",-525931471).cljs$core$IFn$_invoke$arity$1(p1__34696_SHARP_)));
})),cljs.core.map.call(null,(function (p1__34697_SHARP_){
return fugue.midi.map_to_range.call(null,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("fugue.chan","input","fugue.chan/input",-525931471).cljs$core$IFn$_invoke$arity$1(p1__34697_SHARP_)),(0),(127),new cljs.core.Keyword("fugue.midi","min","fugue.midi/min",-629752999).cljs$core$IFn$_invoke$arity$1(p1__34697_SHARP_),new cljs.core.Keyword("fugue.midi","max","fugue.midi/max",-1023959717).cljs$core$IFn$_invoke$arity$1(p1__34697_SHARP_));
})));
}));
fugue.midi.msg_type = new cljs.core.PersistentArrayMap(null, 4, [(144),new cljs.core.Keyword("fugue.midi","note-on","fugue.midi/note-on",1265446966),(128),new cljs.core.Keyword("fugue.midi","note-off","fugue.midi/note-off",1641005158),(224),new cljs.core.Keyword("fugue.midi","bend","fugue.midi/bend",1370227139),(176),new cljs.core.Keyword("fugue.midi","ctrl","fugue.midi/ctrl",1444532779)], null);
/**
 * Converts a js MIDIMessageEvent into a midi message
 */
fugue.midi.event__GT_msg = (function fugue$midi$event__GT_msg(e){
var js_arr = Array.from(e.data);
var vec__34698 = cljs.core.js__GT_clj.call(null,js_arr);
var status = cljs.core.nth.call(null,vec__34698,(0),null);
var note = cljs.core.nth.call(null,vec__34698,(1),null);
var velocity = cljs.core.nth.call(null,vec__34698,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827),fugue.midi.msg_type.call(null,(status & (240))),new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945),note,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680),velocity], null);
});
fugue.midi.event_x_msg = cljs.core.comp.call(null,cljs.core.filter.call(null,(function (p1__34701_SHARP_){
return cljs.core._EQ_.call(null,(3),p1__34701_SHARP_.data.length);
})),cljs.core.map.call(null,fugue.midi.event__GT_msg));
/**
 * This is probably wrong
 */
fugue.midi.msg__GT_event = (function fugue$midi$msg__GT_event(p__34702){
var map__34703 = p__34702;
var map__34703__$1 = (((((!((map__34703 == null))))?(((((map__34703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34703):map__34703);
var type = cljs.core.get.call(null,map__34703__$1,new cljs.core.Keyword("fugue.midi","type","fugue.midi/type",2122361827));
var note = cljs.core.get.call(null,map__34703__$1,new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945));
var velocity = cljs.core.get.call(null,map__34703__$1,new cljs.core.Keyword("fugue.midi","velocity","fugue.midi/velocity",382164680));
return Array.from(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,note,velocity], null));
});
/**
 * Returns a mult'd chan of midi messages from a js MIDIInput
 */
fugue.midi.midi_in_chan = (function fugue$midi$midi_in_chan(midi_in){
var c = cljs.core.async.chan.call(null,(1),fugue.midi.event_x_msg);
midi_in.onmidimessage = cljs.core.partial.call(null,cljs.core.async.put_BANG_,c);

return cljs.core.async.mult.call(null,c);
});
/**
 * Returns a chan that passes midi messages to a MIDIOutput
 */
fugue.midi.midi_out_chan = (function fugue$midi$midi_out_chan(midi_out){
var c = cljs.core.async.chan.call(null,(1),cljs.core.map.call(null,fugue.midi.msg__GT_event));
var c__32685__auto___34722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32685__auto___34722,c){
return (function (){
var f__32686__auto__ = (function (){var switch__32590__auto__ = ((function (c__32685__auto___34722,c){
return (function (state_34713){
var state_val_34714 = (state_34713[(1)]);
if((state_val_34714 === (1))){
var state_34713__$1 = state_34713;
var statearr_34715_34723 = state_34713__$1;
(statearr_34715_34723[(2)] = null);

(statearr_34715_34723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34714 === (2))){
var state_34713__$1 = state_34713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34713__$1,(4),c);
} else {
if((state_val_34714 === (3))){
var inst_34711 = (state_34713[(2)]);
var state_34713__$1 = state_34713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34713__$1,inst_34711);
} else {
if((state_val_34714 === (4))){
var inst_34707 = (state_34713[(2)]);
var inst_34708 = midi_out.send(inst_34707);
var state_34713__$1 = (function (){var statearr_34716 = state_34713;
(statearr_34716[(7)] = inst_34708);

return statearr_34716;
})();
var statearr_34717_34724 = state_34713__$1;
(statearr_34717_34724[(2)] = null);

(statearr_34717_34724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__32685__auto___34722,c))
;
return ((function (switch__32590__auto__,c__32685__auto___34722,c){
return (function() {
var fugue$midi$midi_out_chan_$_state_machine__32591__auto__ = null;
var fugue$midi$midi_out_chan_$_state_machine__32591__auto____0 = (function (){
var statearr_34718 = [null,null,null,null,null,null,null,null];
(statearr_34718[(0)] = fugue$midi$midi_out_chan_$_state_machine__32591__auto__);

(statearr_34718[(1)] = (1));

return statearr_34718;
});
var fugue$midi$midi_out_chan_$_state_machine__32591__auto____1 = (function (state_34713){
while(true){
var ret_value__32592__auto__ = (function (){try{while(true){
var result__32593__auto__ = switch__32590__auto__.call(null,state_34713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32593__auto__;
}
break;
}
}catch (e34719){if((e34719 instanceof Object)){
var ex__32594__auto__ = e34719;
var statearr_34720_34725 = state_34713;
(statearr_34720_34725[(5)] = ex__32594__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32592__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34726 = state_34713;
state_34713 = G__34726;
continue;
} else {
return ret_value__32592__auto__;
}
break;
}
});
fugue$midi$midi_out_chan_$_state_machine__32591__auto__ = function(state_34713){
switch(arguments.length){
case 0:
return fugue$midi$midi_out_chan_$_state_machine__32591__auto____0.call(this);
case 1:
return fugue$midi$midi_out_chan_$_state_machine__32591__auto____1.call(this,state_34713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fugue$midi$midi_out_chan_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$0 = fugue$midi$midi_out_chan_$_state_machine__32591__auto____0;
fugue$midi$midi_out_chan_$_state_machine__32591__auto__.cljs$core$IFn$_invoke$arity$1 = fugue$midi$midi_out_chan_$_state_machine__32591__auto____1;
return fugue$midi$midi_out_chan_$_state_machine__32591__auto__;
})()
;})(switch__32590__auto__,c__32685__auto___34722,c))
})();
var state__32687__auto__ = (function (){var statearr_34721 = f__32686__auto__.call(null);
(statearr_34721[(6)] = c__32685__auto___34722);

return statearr_34721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32687__auto__);
});})(c__32685__auto___34722,c))
);


return c;
});
/**
 * The Web MIDI Api uses 'maplike' for its MIDIInputMap and MIDIOutputMap
 */
fugue.midi.maplike__GT_seq = (function fugue$midi$maplike__GT_seq(m){
return cljs.core.js__GT_clj.call(null,Array.from(m.values()));
});
/**
 * Maps port name to a channel that sends/receives on that port
 */
fugue.midi.port_map = (function fugue$midi$port_map(ports_maplike,chan_fn){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,(function (p1__34727_SHARP_){
return p1__34727_SHARP_.name;
}),chan_fn),fugue.midi.maplike__GT_seq.call(null,ports_maplike)));
});
fugue.midi.ports = (function fugue$midi$ports(midi_access){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("fugue.midi","ins","fugue.midi/ins",-1182466185),fugue.midi.port_map.call(null,midi_access.inputs,fugue.midi.midi_in_chan),new cljs.core.Keyword("fugue.midi","outs","fugue.midi/outs",-334993848),fugue.midi.port_map.call(null,midi_access.outputs,fugue.midi.midi_out_chan)], null);
});
fugue.midi.make_ctx = (function fugue$midi$make_ctx(cb){
return navigator.requestMIDIAccess().then((function (midi_access){
return cb.call(null,fugue.midi.ports.call(null,midi_access));
}));
});
fugue.midi.midi_in = (function fugue$midi$midi_in(name){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.midi","midi-in","fugue.midi/midi-in",-1281528989),new cljs.core.Keyword("fugue.midi","input-name","fugue.midi/input-name",1387993924),name], null),cljs.core.PersistentArrayMap.EMPTY);
});
fugue.midi.note = (function fugue$midi$note(in$){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.chan","transducer","fugue.chan/transducer",546482313),new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640),new cljs.core.Keyword("fugue.midi","midi-x-note","fugue.midi/midi-x-note",-1843602815)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","input","fugue.chan/input",-525931471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null)], null));
});
fugue.midi.hz = (function fugue$midi$hz(note_in){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.chan","transducer","fugue.chan/transducer",546482313),new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640),new cljs.core.Keyword("fugue.midi","note-x-hz","fugue.midi/note-x-hz",1862530671)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","input","fugue.chan/input",-525931471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [note_in], null)], null));
});
fugue.midi.gate = (function fugue$midi$gate(in$){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.chan","transducer","fugue.chan/transducer",546482313),new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640),new cljs.core.Keyword("fugue.midi","midi-x-gate","fugue.midi/midi-x-gate",62865431)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("fugue.chan","input","fugue.chan/input",-525931471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null)], null));
});
fugue.midi.ctrl = (function fugue$midi$ctrl(var_args){
var G__34729 = arguments.length;
switch (G__34729) {
case 2:
return fugue.midi.ctrl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return fugue.midi.ctrl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fugue.midi.ctrl.cljs$core$IFn$_invoke$arity$2 = (function (in$,note){
return fugue.midi.ctrl.call(null,in$,note,(0),(1));
});

fugue.midi.ctrl.cljs$core$IFn$_invoke$arity$4 = (function (in$,note,min,max){
return fugue.synthdef.synthdef.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("fugue.synthdef","node-type","fugue.synthdef/node-type",806558205),new cljs.core.Keyword("fugue.chan","chan-node","fugue.chan/chan-node",-1139152001),new cljs.core.Keyword("fugue.chan","chan-node-type","fugue.chan/chan-node-type",447830325),new cljs.core.Keyword("fugue.chan","transducer","fugue.chan/transducer",546482313),new cljs.core.Keyword("fugue.chan","xform","fugue.chan/xform",1487931640),new cljs.core.Keyword("fugue.midi","midi-x-ctrl","fugue.midi/midi-x-ctrl",1988373092)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fugue.chan","input","fugue.chan/input",-525931471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [in$], null),new cljs.core.Keyword("fugue.midi","note","fugue.midi/note",343363945),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [note], null),new cljs.core.Keyword("fugue.midi","min","fugue.midi/min",-629752999),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [min], null),new cljs.core.Keyword("fugue.midi","max","fugue.midi/max",-1023959717),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [max], null)], null));
});

fugue.midi.ctrl.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=midi.js.map?rel=1610145023276
