// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__7278){
var map__7279 = p__7278;
var map__7279__$1 = (((((!((map__7279 == null))))?(((((map__7279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7279):map__7279);
var m = map__7279__$1;
var n = cljs.core.get.call(null,map__7279__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__7279__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7281_7313 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7282_7314 = null;
var count__7283_7315 = (0);
var i__7284_7316 = (0);
while(true){
if((i__7284_7316 < count__7283_7315)){
var f_7317 = cljs.core._nth.call(null,chunk__7282_7314,i__7284_7316);
cljs.core.println.call(null,"  ",f_7317);


var G__7318 = seq__7281_7313;
var G__7319 = chunk__7282_7314;
var G__7320 = count__7283_7315;
var G__7321 = (i__7284_7316 + (1));
seq__7281_7313 = G__7318;
chunk__7282_7314 = G__7319;
count__7283_7315 = G__7320;
i__7284_7316 = G__7321;
continue;
} else {
var temp__5720__auto___7322 = cljs.core.seq.call(null,seq__7281_7313);
if(temp__5720__auto___7322){
var seq__7281_7323__$1 = temp__5720__auto___7322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7281_7323__$1)){
var c__4550__auto___7324 = cljs.core.chunk_first.call(null,seq__7281_7323__$1);
var G__7325 = cljs.core.chunk_rest.call(null,seq__7281_7323__$1);
var G__7326 = c__4550__auto___7324;
var G__7327 = cljs.core.count.call(null,c__4550__auto___7324);
var G__7328 = (0);
seq__7281_7313 = G__7325;
chunk__7282_7314 = G__7326;
count__7283_7315 = G__7327;
i__7284_7316 = G__7328;
continue;
} else {
var f_7329 = cljs.core.first.call(null,seq__7281_7323__$1);
cljs.core.println.call(null,"  ",f_7329);


var G__7330 = cljs.core.next.call(null,seq__7281_7323__$1);
var G__7331 = null;
var G__7332 = (0);
var G__7333 = (0);
seq__7281_7313 = G__7330;
chunk__7282_7314 = G__7331;
count__7283_7315 = G__7332;
i__7284_7316 = G__7333;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7334 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7334);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7334)))?cljs.core.second.call(null,arglists_7334):arglists_7334));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7285_7335 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7286_7336 = null;
var count__7287_7337 = (0);
var i__7288_7338 = (0);
while(true){
if((i__7288_7338 < count__7287_7337)){
var vec__7299_7339 = cljs.core._nth.call(null,chunk__7286_7336,i__7288_7338);
var name_7340 = cljs.core.nth.call(null,vec__7299_7339,(0),null);
var map__7302_7341 = cljs.core.nth.call(null,vec__7299_7339,(1),null);
var map__7302_7342__$1 = (((((!((map__7302_7341 == null))))?(((((map__7302_7341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7302_7341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7302_7341):map__7302_7341);
var doc_7343 = cljs.core.get.call(null,map__7302_7342__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7344 = cljs.core.get.call(null,map__7302_7342__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7340);

cljs.core.println.call(null," ",arglists_7344);

if(cljs.core.truth_(doc_7343)){
cljs.core.println.call(null," ",doc_7343);
} else {
}


var G__7345 = seq__7285_7335;
var G__7346 = chunk__7286_7336;
var G__7347 = count__7287_7337;
var G__7348 = (i__7288_7338 + (1));
seq__7285_7335 = G__7345;
chunk__7286_7336 = G__7346;
count__7287_7337 = G__7347;
i__7288_7338 = G__7348;
continue;
} else {
var temp__5720__auto___7349 = cljs.core.seq.call(null,seq__7285_7335);
if(temp__5720__auto___7349){
var seq__7285_7350__$1 = temp__5720__auto___7349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7285_7350__$1)){
var c__4550__auto___7351 = cljs.core.chunk_first.call(null,seq__7285_7350__$1);
var G__7352 = cljs.core.chunk_rest.call(null,seq__7285_7350__$1);
var G__7353 = c__4550__auto___7351;
var G__7354 = cljs.core.count.call(null,c__4550__auto___7351);
var G__7355 = (0);
seq__7285_7335 = G__7352;
chunk__7286_7336 = G__7353;
count__7287_7337 = G__7354;
i__7288_7338 = G__7355;
continue;
} else {
var vec__7304_7356 = cljs.core.first.call(null,seq__7285_7350__$1);
var name_7357 = cljs.core.nth.call(null,vec__7304_7356,(0),null);
var map__7307_7358 = cljs.core.nth.call(null,vec__7304_7356,(1),null);
var map__7307_7359__$1 = (((((!((map__7307_7358 == null))))?(((((map__7307_7358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7307_7358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7307_7358):map__7307_7358);
var doc_7360 = cljs.core.get.call(null,map__7307_7359__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7361 = cljs.core.get.call(null,map__7307_7359__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7357);

cljs.core.println.call(null," ",arglists_7361);

if(cljs.core.truth_(doc_7360)){
cljs.core.println.call(null," ",doc_7360);
} else {
}


var G__7362 = cljs.core.next.call(null,seq__7285_7350__$1);
var G__7363 = null;
var G__7364 = (0);
var G__7365 = (0);
seq__7285_7335 = G__7362;
chunk__7286_7336 = G__7363;
count__7287_7337 = G__7364;
i__7288_7338 = G__7365;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__7309 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__7310 = null;
var count__7311 = (0);
var i__7312 = (0);
while(true){
if((i__7312 < count__7311)){
var role = cljs.core._nth.call(null,chunk__7310,i__7312);
var temp__5720__auto___7366__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___7366__$1)){
var spec_7367 = temp__5720__auto___7366__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7367));
} else {
}


var G__7368 = seq__7309;
var G__7369 = chunk__7310;
var G__7370 = count__7311;
var G__7371 = (i__7312 + (1));
seq__7309 = G__7368;
chunk__7310 = G__7369;
count__7311 = G__7370;
i__7312 = G__7371;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__7309);
if(temp__5720__auto____$1){
var seq__7309__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7309__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__7309__$1);
var G__7372 = cljs.core.chunk_rest.call(null,seq__7309__$1);
var G__7373 = c__4550__auto__;
var G__7374 = cljs.core.count.call(null,c__4550__auto__);
var G__7375 = (0);
seq__7309 = G__7372;
chunk__7310 = G__7373;
count__7311 = G__7374;
i__7312 = G__7375;
continue;
} else {
var role = cljs.core.first.call(null,seq__7309__$1);
var temp__5720__auto___7376__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___7376__$2)){
var spec_7377 = temp__5720__auto___7376__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7377));
} else {
}


var G__7378 = cljs.core.next.call(null,seq__7309__$1);
var G__7379 = null;
var G__7380 = (0);
var G__7381 = (0);
seq__7309 = G__7378;
chunk__7310 = G__7379;
count__7311 = G__7380;
i__7312 = G__7381;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__7382 = cljs.core.conj.call(null,via,t);
var G__7383 = cljs.core.ex_cause.call(null,t);
via = G__7382;
t = G__7383;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__7386 = datafied_throwable;
var map__7386__$1 = (((((!((map__7386 == null))))?(((((map__7386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7386):map__7386);
var via = cljs.core.get.call(null,map__7386__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__7386__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__7386__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__7387 = cljs.core.last.call(null,via);
var map__7387__$1 = (((((!((map__7387 == null))))?(((((map__7387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7387):map__7387);
var type = cljs.core.get.call(null,map__7387__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__7387__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__7387__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__7388 = data;
var map__7388__$1 = (((((!((map__7388 == null))))?(((((map__7388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7388):map__7388);
var problems = cljs.core.get.call(null,map__7388__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__7388__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__7388__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__7389 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__7389__$1 = (((((!((map__7389 == null))))?(((((map__7389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7389):map__7389);
var top_data = map__7389__$1;
var source = cljs.core.get.call(null,map__7389__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__7394 = phase;
var G__7394__$1 = (((G__7394 instanceof cljs.core.Keyword))?G__7394.fqn:null);
switch (G__7394__$1) {
case "read-source":
var map__7395 = data;
var map__7395__$1 = (((((!((map__7395 == null))))?(((((map__7395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7395):map__7395);
var line = cljs.core.get.call(null,map__7395__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__7395__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__7397 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__7397__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__7397,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__7397);
var G__7397__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__7397__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__7397__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__7397__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__7397__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__7398 = top_data;
var G__7398__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__7398,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__7398);
var G__7398__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__7398__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__7398__$1);
var G__7398__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__7398__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__7398__$2);
var G__7398__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__7398__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__7398__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__7398__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__7398__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__7399 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__7399,(0),null);
var method = cljs.core.nth.call(null,vec__7399,(1),null);
var file = cljs.core.nth.call(null,vec__7399,(2),null);
var line = cljs.core.nth.call(null,vec__7399,(3),null);
var G__7402 = top_data;
var G__7402__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__7402,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__7402);
var G__7402__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__7402__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__7402__$1);
var G__7402__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__7402__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__7402__$2);
var G__7402__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__7402__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__7402__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__7402__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__7402__$4;
}

break;
case "execution":
var vec__7403 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__7403,(0),null);
var method = cljs.core.nth.call(null,vec__7403,(1),null);
var file = cljs.core.nth.call(null,vec__7403,(2),null);
var line = cljs.core.nth.call(null,vec__7403,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__7403,source__$1,method,file,line,G__7394,G__7394__$1,map__7386,map__7386__$1,via,trace,phase,map__7387,map__7387__$1,type,message,data,map__7388,map__7388__$1,problems,fn,caller,map__7389,map__7389__$1,top_data,source){
return (function (p1__7385_SHARP_){
var or__4131__auto__ = (p1__7385_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__7385_SHARP_);
}
});})(vec__7403,source__$1,method,file,line,G__7394,G__7394__$1,map__7386,map__7386__$1,via,trace,phase,map__7387,map__7387__$1,type,message,data,map__7388,map__7388__$1,problems,fn,caller,map__7389,map__7389__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__7406 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__7406__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__7406,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__7406);
var G__7406__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__7406__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__7406__$1);
var G__7406__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__7406__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__7406__$2);
var G__7406__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__7406__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__7406__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__7406__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__7406__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7394__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__7410){
var map__7411 = p__7410;
var map__7411__$1 = (((((!((map__7411 == null))))?(((((map__7411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7411):map__7411);
var triage_data = map__7411__$1;
var phase = cljs.core.get.call(null,map__7411__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__7411__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__7411__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__7411__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__7411__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__7411__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__7411__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__7411__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__7413 = phase;
var G__7413__$1 = (((G__7413 instanceof cljs.core.Keyword))?G__7413.fqn:null);
switch (G__7413__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7414_7423 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7415_7424 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7416_7425 = true;
var _STAR_print_fn_STAR__temp_val__7417_7426 = ((function (_STAR_print_newline_STAR__orig_val__7414_7423,_STAR_print_fn_STAR__orig_val__7415_7424,_STAR_print_newline_STAR__temp_val__7416_7425,sb__4661__auto__,G__7413,G__7413__$1,loc,class_name,simple_class,cause_type,format,map__7411,map__7411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__7414_7423,_STAR_print_fn_STAR__orig_val__7415_7424,_STAR_print_newline_STAR__temp_val__7416_7425,sb__4661__auto__,G__7413,G__7413__$1,loc,class_name,simple_class,cause_type,format,map__7411,map__7411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7416_7425;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7417_7426;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__7414_7423,_STAR_print_fn_STAR__orig_val__7415_7424,_STAR_print_newline_STAR__temp_val__7416_7425,_STAR_print_fn_STAR__temp_val__7417_7426,sb__4661__auto__,G__7413,G__7413__$1,loc,class_name,simple_class,cause_type,format,map__7411,map__7411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__7414_7423,_STAR_print_fn_STAR__orig_val__7415_7424,_STAR_print_newline_STAR__temp_val__7416_7425,_STAR_print_fn_STAR__temp_val__7417_7426,sb__4661__auto__,G__7413,G__7413__$1,loc,class_name,simple_class,cause_type,format,map__7411,map__7411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__7408_SHARP_){
return cljs.core.dissoc.call(null,p1__7408_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__7414_7423,_STAR_print_fn_STAR__orig_val__7415_7424,_STAR_print_newline_STAR__temp_val__7416_7425,_STAR_print_fn_STAR__temp_val__7417_7426,sb__4661__auto__,G__7413,G__7413__$1,loc,class_name,simple_class,cause_type,format,map__7411,map__7411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__7414_7423,_STAR_print_fn_STAR__orig_val__7415_7424,_STAR_print_newline_STAR__temp_val__7416_7425,_STAR_print_fn_STAR__temp_val__7417_7426,sb__4661__auto__,G__7413,G__7413__$1,loc,class_name,simple_class,cause_type,format,map__7411,map__7411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7415_7424;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7414_7423;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7418_7427 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7419_7428 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7420_7429 = true;
var _STAR_print_fn_STAR__temp_val__7421_7430 = ((function (_STAR_print_newline_STAR__orig_val__7418_7427,_STAR_print_fn_STAR__orig_val__7419_7428,_STAR_print_newline_STAR__temp_val__7420_7429,sb__4661__auto__,G__7413,G__7413__$1,loc,class_name,simple_class,cause_type,format,map__7411,map__7411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__7418_7427,_STAR_print_fn_STAR__orig_val__7419_7428,_STAR_print_newline_STAR__temp_val__7420_7429,sb__4661__auto__,G__7413,G__7413__$1,loc,class_name,simple_class,cause_type,format,map__7411,map__7411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7420_7429;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7421_7430;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__7418_7427,_STAR_print_fn_STAR__orig_val__7419_7428,_STAR_print_newline_STAR__temp_val__7420_7429,_STAR_print_fn_STAR__temp_val__7421_7430,sb__4661__auto__,G__7413,G__7413__$1,loc,class_name,simple_class,cause_type,format,map__7411,map__7411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__7418_7427,_STAR_print_fn_STAR__orig_val__7419_7428,_STAR_print_newline_STAR__temp_val__7420_7429,_STAR_print_fn_STAR__temp_val__7421_7430,sb__4661__auto__,G__7413,G__7413__$1,loc,class_name,simple_class,cause_type,format,map__7411,map__7411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__7409_SHARP_){
return cljs.core.dissoc.call(null,p1__7409_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__7418_7427,_STAR_print_fn_STAR__orig_val__7419_7428,_STAR_print_newline_STAR__temp_val__7420_7429,_STAR_print_fn_STAR__temp_val__7421_7430,sb__4661__auto__,G__7413,G__7413__$1,loc,class_name,simple_class,cause_type,format,map__7411,map__7411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__7418_7427,_STAR_print_fn_STAR__orig_val__7419_7428,_STAR_print_newline_STAR__temp_val__7420_7429,_STAR_print_fn_STAR__temp_val__7421_7430,sb__4661__auto__,G__7413,G__7413__$1,loc,class_name,simple_class,cause_type,format,map__7411,map__7411__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7419_7428;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7418_7427;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7413__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1611075871286
