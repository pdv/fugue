// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.demo.midi_monitor');
goog.require('cljs.core');
fugue.demo.midi_monitor.component = (function fugue$demo$midi_monitor$component(){
var midi_in_chan = async.chan();
var held_notes = fugue.demo.midi_monitor.ratom.call(null,cljs.core.PersistentHashSet.EMPTY);
fugue.demo.midi_monitor.monitor_held_notes.call(null,midi_in_chan,held_notes);

return ((function (midi_in_chan,held_notes){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.demo.midi_monitor.midi_input,midi_in_chan], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref.call(null,held_notes)], null)], null);
});
;})(midi_in_chan,held_notes))
});
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fugue.demo.midi_monitor.component], null);

//# sourceMappingURL=midi_monitor.js.map?rel=1610381658261
