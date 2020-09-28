// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.bootstrap');
goog.require('cljs.core');
goog.require('clojure.string');
webcv.bootstrap.audio_ops = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["out","gain","mix","const","sin-osc","saw","square","tri-osc","lfo","lpf","hpf","bpf"], null);
webcv.bootstrap.init_forms = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [["(require '[webcv.audio :refer [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",webcv.bootstrap.audio_ops)),"]])"].join(''),"(require '[webcv.midi :refer [midi-in hz gate ctrl]])","(require '[webcv.feedback :refer [dub-delay]])","(require '[webcv.keyboard :refer [kb]])","(require '[webcv.envelope :refer [adsr perc env-gen]])"], null);

//# sourceMappingURL=bootstrap.js.map?rel=1601260784762
