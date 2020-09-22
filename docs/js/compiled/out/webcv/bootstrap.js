// Compiled by ClojureScript 1.10.520 {}
goog.provide('webcv.bootstrap');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.js');
goog.require('webcv.audio');
webcv.bootstrap.compiler_state = cljs.js.empty_state.call(null);
webcv.bootstrap.audio_ops = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["out","gain","mix","const","sin-osc","saw","square","tri-osc","lfo","lpf","hpf","bpf"], null);
webcv.bootstrap.init_forms = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["(require '[webcv.audio :refer [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," ",webcv.bootstrap.audio_ops)),"]])"].join(''),"(require '[webcv.midi :refer [midi-in hz gate]])","(require '[webcv.feedback :refer [dub-delay]])","(require '[webcv.envelope :refer [adsr perc env-gen]])"], null);
var init_34681 = cljs.core.atom.call(null,false);
webcv.bootstrap.read_eval = ((function (init_34681){
return (function webcv$bootstrap$read_eval(s){
var x = cljs.core.atom.call(null,null);
var call_eval = ((function (x,init_34681){
return (function (text){
return cljs.js.eval_str.call(null,webcv.bootstrap.compiler_state,text,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval], null),cljs.core.partial.call(null,cljs.core.reset_BANG_,x));
});})(x,init_34681))
;
if(cljs.core.truth_(cljs.core.deref.call(null,init_34681))){
} else {
var seq__34677_34682 = cljs.core.seq.call(null,webcv.bootstrap.init_forms);
var chunk__34678_34683 = null;
var count__34679_34684 = (0);
var i__34680_34685 = (0);
while(true){
if((i__34680_34685 < count__34679_34684)){
var f_34686 = cljs.core._nth.call(null,chunk__34678_34683,i__34680_34685);
call_eval.call(null,f_34686);


var G__34687 = seq__34677_34682;
var G__34688 = chunk__34678_34683;
var G__34689 = count__34679_34684;
var G__34690 = (i__34680_34685 + (1));
seq__34677_34682 = G__34687;
chunk__34678_34683 = G__34688;
count__34679_34684 = G__34689;
i__34680_34685 = G__34690;
continue;
} else {
var temp__5720__auto___34691 = cljs.core.seq.call(null,seq__34677_34682);
if(temp__5720__auto___34691){
var seq__34677_34692__$1 = temp__5720__auto___34691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34677_34692__$1)){
var c__4550__auto___34693 = cljs.core.chunk_first.call(null,seq__34677_34692__$1);
var G__34694 = cljs.core.chunk_rest.call(null,seq__34677_34692__$1);
var G__34695 = c__4550__auto___34693;
var G__34696 = cljs.core.count.call(null,c__4550__auto___34693);
var G__34697 = (0);
seq__34677_34682 = G__34694;
chunk__34678_34683 = G__34695;
count__34679_34684 = G__34696;
i__34680_34685 = G__34697;
continue;
} else {
var f_34698 = cljs.core.first.call(null,seq__34677_34692__$1);
call_eval.call(null,f_34698);


var G__34699 = cljs.core.next.call(null,seq__34677_34692__$1);
var G__34700 = null;
var G__34701 = (0);
var G__34702 = (0);
seq__34677_34682 = G__34699;
chunk__34678_34683 = G__34700;
count__34679_34684 = G__34701;
i__34680_34685 = G__34702;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_.call(null,init_34681,true);
}

if(cljs.core.truth_(s)){
call_eval.call(null,s);
} else {
}

return cljs.core.deref.call(null,x);
});})(init_34681))
;

//# sourceMappingURL=bootstrap.js.map?rel=1600808349179
