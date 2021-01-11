// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.chords');
goog.require('cljs.core');
fugue.chords.chord_names = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"dim7","dim7",627538437),new cljs.core.Keyword(null,"Aug","Aug",-264269528),new cljs.core.Keyword(null,"Maj7","Maj7",-1271929143),new cljs.core.Keyword(null,"min7","min7",-1135270228),new cljs.core.Keyword(null,"7","7",993885869),new cljs.core.Keyword(null,"Maj","Maj",1076280334),new cljs.core.Keyword(null,"Maj6","Maj6",-552622449),new cljs.core.Keyword(null,"7b9","7b9",-1112591569),new cljs.core.Keyword(null,"Maj9","Maj9",1597682452),new cljs.core.Keyword(null,"min9","min9",-1178641286)],[new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(0),null,(7),null,(3),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(6),null,(3),null,(9),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(0),null,(4),null,(8),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(7),null,(4),null,(11),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(7),null,(3),null,(10),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(7),null,(4),null,(10),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(0),null,(7),null,(4),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(7),null,(4),null,(9),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(0),null,(7),null,(1),null,(4),null,(10),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(0),null,(7),null,(4),null,(2),null,(11),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(0),null,(7),null,(3),null,(2),null,(10),null], null), null)]);
fugue.chords.note_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"Db","Db",149001889),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"Eb","Eb",-1311042062),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"F#","F#",2099594331),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"Ab","Ab",-633504833),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"Bb","Bb",523391152),new cljs.core.Keyword(null,"B","B",-1422503380)], null);
fugue.chords.chords_where = (function fugue$chords$chords_where(predicate,notes){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.call(null,(function (root){
var relative = cljs.core.map.call(null,(function (p1__34753_SHARP_){
return cljs.core.mod.call(null,(p1__34753_SHARP_ - root),(12));
}),notes);
return cljs.core.map.call(null,((function (relative){
return (function (p__34754){
var vec__34755 = p__34754;
var name = cljs.core.nth.call(null,vec__34755,(0),null);
var _ = cljs.core.nth.call(null,vec__34755,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,fugue.chords.note_names,cljs.core.mod.call(null,root,(12))),name], null);
});})(relative))
,cljs.core.filter.call(null,((function (relative){
return (function (p__34758){
var vec__34759 = p__34758;
var _ = cljs.core.nth.call(null,vec__34759,(0),null);
var chord = cljs.core.nth.call(null,vec__34759,(1),null);
return predicate.call(null,chord,relative);
});})(relative))
,fugue.chords.chord_names));
}),notes));
});
fugue.chords.possible_chords = (function fugue$chords$possible_chords(notes){
return fugue.chords.chords_where.call(null,(function (chord,relative){
return cljs.core.every_QMARK_.call(null,(function (p1__34762_SHARP_){
return cljs.core.contains_QMARK_.call(null,chord,p1__34762_SHARP_);
}),relative);
}),notes);
});
fugue.chords.contained_chords = (function fugue$chords$contained_chords(notes){
return fugue.chords.chords_where.call(null,(function (chord,relative){
return cljs.core.every_QMARK_.call(null,(function (p1__34763_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,relative),p1__34763_SHARP_);
}),chord);
}),notes);
});

//# sourceMappingURL=chords.js.map?rel=1610330675685
