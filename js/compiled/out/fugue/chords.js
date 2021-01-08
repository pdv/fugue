// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.chords');
goog.require('cljs.core');
fugue.chords.chord_names = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dim7","dim7",627538437),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(6),null,(3),null,(9),null], null), null),new cljs.core.Keyword(null,"min7","min7",-1135270228),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(7),null,(3),null,(10),null], null), null),new cljs.core.Keyword(null,"7","7",993885869),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(7),null,(4),null,(10),null], null), null),new cljs.core.Keyword(null,"maj7","maj7",-285345011),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(7),null,(4),null,(11),null], null), null)], null);
fugue.chords.note_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"Db","Db",149001889),new cljs.core.Keyword(null,"D","D",-8015893),new cljs.core.Keyword(null,"Eb","Eb",-1311042062),new cljs.core.Keyword(null,"E","E",230849842),new cljs.core.Keyword(null,"F","F",-1115543258),new cljs.core.Keyword(null,"F#","F#",2099594331),new cljs.core.Keyword(null,"G","G",-738544397),new cljs.core.Keyword(null,"Ab","Ab",-633504833),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"Bb","Bb",523391152),new cljs.core.Keyword(null,"B","B",-1422503380)], null);
fugue.chords.possible_chords = (function fugue$chords$possible_chords(notes){
return cljs.core.mapcat.call(null,(function (root){
var relative = cljs.core.map.call(null,(function (p1__34607_SHARP_){
return cljs.core.mod.call(null,(p1__34607_SHARP_ - root),(12));
}),notes);
return cljs.core.map.call(null,((function (relative){
return (function (p__34609){
var vec__34610 = p__34609;
var name = cljs.core.nth.call(null,vec__34610,(0),null);
var _ = cljs.core.nth.call(null,vec__34610,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,fugue.chords.note_names,cljs.core.mod.call(null,root,(12))),name], null);
});})(relative))
,cljs.core.filter.call(null,((function (relative){
return (function (p__34613){
var vec__34614 = p__34613;
var _ = cljs.core.nth.call(null,vec__34614,(0),null);
var chord = cljs.core.nth.call(null,vec__34614,(1),null);
return cljs.core.every_QMARK_.call(null,((function (vec__34614,_,chord,relative){
return (function (p1__34608_SHARP_){
return cljs.core.contains_QMARK_.call(null,chord,p1__34608_SHARP_);
});})(vec__34614,_,chord,relative))
,relative);
});})(relative))
,fugue.chords.chord_names));
}),notes);
});

//# sourceMappingURL=chords.js.map?rel=1610064396213
