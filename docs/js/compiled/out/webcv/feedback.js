// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.feedback');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('loom.graph');
goog.require('webcv.synthdef');
goog.require('webcv.audio');
webcv.feedback.feedback = (function webcv$feedback$feedback(in$,f){
var gain = webcv.audio.gain.call(null,in$,(1));
var gain_id = cljs.core.first.call(null,webcv.synthdef.outputs.call(null,gain));
var fb = f.call(null,gain);
var fb_id = cljs.core.first.call(null,webcv.synthdef.outputs.call(null,fb));
var output = webcv.audio.gain.call(null,gain,(1));
return loom.graph.add_edges.call(null,loom.graph.digraph.call(null,fb,output),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fb_id,gain_id], null));
});
webcv.feedback.dub_delay = (function webcv$feedback$dub_delay(in$,time,fb){
return webcv.feedback.feedback.call(null,in$,(function (p1__34813_SHARP_){
return webcv.audio.gain.call(null,webcv.audio.delay_node.call(null,p1__34813_SHARP_,time),fb);
}));
});

//# sourceMappingURL=feedback.js.map?rel=1600808349351
