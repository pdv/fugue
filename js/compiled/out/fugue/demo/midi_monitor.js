// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.demo.midi_monitor');
goog.require('cljs.core');
goog.require('live.api');
fugue.demo.midi_monitor.chord_names = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"dim7","dim7",627538437),new cljs.core.Keyword(null,"Aug","Aug",-264269528),new cljs.core.Keyword(null,"Maj7","Maj7",-1271929143),new cljs.core.Keyword(null,"min7","min7",-1135270228),new cljs.core.Keyword(null,"7","7",993885869),new cljs.core.Keyword(null,"Maj","Maj",1076280334),new cljs.core.Keyword(null,"Maj6","Maj6",-552622449),new cljs.core.Keyword(null,"7b9","7b9",-1112591569),new cljs.core.Keyword(null,"Maj9","Maj9",1597682452),new cljs.core.Keyword(null,"min9","min9",-1178641286)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(0),null,(7),null,(3),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(6),null,(3),null,(9),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(0),null,(4),null,(8),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(7),null,(4),null,(11),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(7),null,(3),null,(10),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(7),null,(4),null,(10),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(0),null,(7),null,(4),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(7),null,(4),null,(9),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(0),null,(7),null,(1),null,(4),null,(10),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(0),null,(7),null,(4),null,(2),null,(11),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(0),null,(7),null,(3),null,(2),null,(10),null], null), null)]);
fugue.demo.midi_monitor.note_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"Db","Db",149001889),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"Eb","Eb",-1311042062),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"F#","F#",2099594331),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"Ab","Ab",-633504833),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"Bb","Bb",523391152),new cljs.core.Keyword(null,"B","B",-1422503380)], null);
fugue.demo.midi_monitor.chords_from = (function fugue$demo$midi_monitor$chords_from(predicate,root,notes){
var relative_notes = cljs.core.map.call(null,(function (p1__18554_SHARP_){
return cljs.core.mod.call(null,(p1__18554_SHARP_ - root),(12));
}),notes);
return cljs.core.map.call(null,((function (relative_notes){
return (function (p__18555){
var vec__18556 = p__18555;
var name = cljs.core.nth.call(null,vec__18556,(0),null);
var _ = cljs.core.nth.call(null,vec__18556,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,fugue.demo.midi_monitor.note_names,cljs.core.mod.call(null,root,(12))),name], null);
});})(relative_notes))
,cljs.core.filter.call(null,((function (relative_notes){
return (function (p__18559){
var vec__18560 = p__18559;
var _ = cljs.core.nth.call(null,vec__18560,(0),null);
var chord = cljs.core.nth.call(null,vec__18560,(1),null);
return predicate.call(null,chord,relative_notes);
});})(relative_notes))
,fugue.demo.midi_monitor.chord_names));
});
fugue.demo.midi_monitor.chords_where = (function fugue$demo$midi_monitor$chords_where(predicate,notes){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,(function (p1__18563_SHARP_){
return fugue.demo.midi_monitor.chords_from.call(null,predicate,p1__18563_SHARP_,notes);
}),notes));
});
fugue.demo.midi_monitor.every_note_in_chord_QMARK_ = (function fugue$demo$midi_monitor$every_note_in_chord_QMARK_(chord,relative_notes){
return cljs.core.every_QMARK_.call(null,(function (p1__18564_SHARP_){
return cljs.core.contains_QMARK_.call(null,chord,p1__18564_SHARP_);
}),relative_notes);
});
fugue.demo.midi_monitor.chord_contained_in_notes_QMARK_ = (function fugue$demo$midi_monitor$chord_contained_in_notes_QMARK_(chord,relative_notes){
return cljs.core.every_QMARK_.call(null,(function (p1__18565_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,relative_notes),p1__18565_SHARP_);
}),chord);
});
fugue.demo.midi_monitor.component = (function fugue$demo$midi_monitor$component(){
var midi_in_chan = live.api.chan.call(null);
var held_notes = live.api.ratom.call(null,cljs.core.PersistentHashSet.EMPTY);
live.api.monitor_chan.call(null,midi_in_chan,((function (midi_in_chan,held_notes){
return (function (msg){
cljs.core.print.call(null,msg);

if(cljs.core.truth_(live.api.note_on_QMARK_.call(null,msg))){
return cljs.core.swap_BANG_.call(null,held_notes,cljs.core.conj,new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(msg));
} else {
if(cljs.core.truth_(live.api.note_off_QMARK_.call(null,msg))){
return cljs.core.swap_BANG_.call(null,held_notes,cljs.core.disj,new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(msg));
} else {
return null;
}
}
});})(midi_in_chan,held_notes))
);

return ((function (midi_in_chan,held_notes){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [live.api.midi_input,midi_in_chan], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref.call(null,held_notes)], null),(function (){var iter__4523__auto__ = ((function (midi_in_chan,held_notes){
return (function fugue$demo$midi_monitor$component_$_iter__18566(s__18567){
return (new cljs.core.LazySeq(null,((function (midi_in_chan,held_notes){
return (function (){
var s__18567__$1 = s__18567;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__18567__$1);
if(temp__5720__auto__){
var s__18567__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18567__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18567__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18569 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18568 = (0);
while(true){
if((i__18568 < size__4522__auto__)){
var chord = cljs.core._nth.call(null,c__4521__auto__,i__18568);
cljs.core.chunk_append.call(null,b__18569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null));

var G__18570 = (i__18568 + (1));
i__18568 = G__18570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18569),fugue$demo$midi_monitor$component_$_iter__18566.call(null,cljs.core.chunk_rest.call(null,s__18567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18569),null);
}
} else {
var chord = cljs.core.first.call(null,s__18567__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chord)], null),fugue$demo$midi_monitor$component_$_iter__18566.call(null,cljs.core.rest.call(null,s__18567__$2)));
}
} else {
return null;
}
break;
}
});})(midi_in_chan,held_notes))
,null,null));
});})(midi_in_chan,held_notes))
;
return iter__4523__auto__.call(null,fugue.demo.midi_monitor.chords_where.call(null,fugue.demo.midi_monitor.every_note_in_chord_QMARK_,cljs.core.deref.call(null,held_notes)));
})()], null);
});
;})(midi_in_chan,held_notes))
});
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.demo.midi_monitor.component], null);

//# sourceMappingURL=midi_monitor.js.map?rel=1611104223389
