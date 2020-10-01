// Compiled by ClojureScript 1.10.520 {}
goog.provide('fugue.feedback');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('loom.graph');
goog.require('loom.attr');
goog.require('fugue.synthdef');
goog.require('fugue.audio');
fugue.feedback.feedback = (function fugue$feedback$feedback(in$,f){
var gain = fugue.audio.gain.call(null,in$,(1));
var gain_id = cljs.core.first.call(null,fugue.synthdef.outputs.call(null,gain));
var fb = f.call(null,gain);
var fb_id = cljs.core.first.call(null,fugue.synthdef.outputs.call(null,fb));
var output = fugue.audio.gain.call(null,gain,(1));
var fb_edge = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fb_id,gain_id], null);
return loom.attr.add_attr_to_edges.call(null,loom.graph.add_edges.call(null,fugue.synthdef.merge_graphs.call(null,fb,output),fb_edge),new cljs.core.Keyword("fugue.synthdef","param-name","fugue.synthdef/param-name",-1639242252),new cljs.core.Keyword("fugue.audio","input","fugue.audio/input",-1816257751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fb_edge], null));
});
fugue.feedback.dub_delay = (function fugue$feedback$dub_delay(in$,time,fb){
return fugue.feedback.feedback.call(null,in$,(function (p1__34640_SHARP_){
return fugue.audio.gain.call(null,fugue.audio.delay_node.call(null,p1__34640_SHARP_,time),fb);
}));
});

//# sourceMappingURL=feedback.js.map?rel=1601516333087
