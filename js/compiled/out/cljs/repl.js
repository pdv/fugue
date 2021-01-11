// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35295){
var map__35296 = p__35295;
var map__35296__$1 = (((((!((map__35296 == null))))?(((((map__35296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35296):map__35296);
var m = map__35296__$1;
var n = cljs.core.get.call(null,map__35296__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35296__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35298_35330 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35299_35331 = null;
var count__35300_35332 = (0);
var i__35301_35333 = (0);
while(true){
if((i__35301_35333 < count__35300_35332)){
var f_35334 = cljs.core._nth.call(null,chunk__35299_35331,i__35301_35333);
cljs.core.println.call(null,"  ",f_35334);


var G__35335 = seq__35298_35330;
var G__35336 = chunk__35299_35331;
var G__35337 = count__35300_35332;
var G__35338 = (i__35301_35333 + (1));
seq__35298_35330 = G__35335;
chunk__35299_35331 = G__35336;
count__35300_35332 = G__35337;
i__35301_35333 = G__35338;
continue;
} else {
var temp__5720__auto___35339 = cljs.core.seq.call(null,seq__35298_35330);
if(temp__5720__auto___35339){
var seq__35298_35340__$1 = temp__5720__auto___35339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35298_35340__$1)){
var c__4550__auto___35341 = cljs.core.chunk_first.call(null,seq__35298_35340__$1);
var G__35342 = cljs.core.chunk_rest.call(null,seq__35298_35340__$1);
var G__35343 = c__4550__auto___35341;
var G__35344 = cljs.core.count.call(null,c__4550__auto___35341);
var G__35345 = (0);
seq__35298_35330 = G__35342;
chunk__35299_35331 = G__35343;
count__35300_35332 = G__35344;
i__35301_35333 = G__35345;
continue;
} else {
var f_35346 = cljs.core.first.call(null,seq__35298_35340__$1);
cljs.core.println.call(null,"  ",f_35346);


var G__35347 = cljs.core.next.call(null,seq__35298_35340__$1);
var G__35348 = null;
var G__35349 = (0);
var G__35350 = (0);
seq__35298_35330 = G__35347;
chunk__35299_35331 = G__35348;
count__35300_35332 = G__35349;
i__35301_35333 = G__35350;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35351 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35351);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35351)))?cljs.core.second.call(null,arglists_35351):arglists_35351));
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
var seq__35302_35352 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35303_35353 = null;
var count__35304_35354 = (0);
var i__35305_35355 = (0);
while(true){
if((i__35305_35355 < count__35304_35354)){
var vec__35316_35356 = cljs.core._nth.call(null,chunk__35303_35353,i__35305_35355);
var name_35357 = cljs.core.nth.call(null,vec__35316_35356,(0),null);
var map__35319_35358 = cljs.core.nth.call(null,vec__35316_35356,(1),null);
var map__35319_35359__$1 = (((((!((map__35319_35358 == null))))?(((((map__35319_35358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35319_35358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35319_35358):map__35319_35358);
var doc_35360 = cljs.core.get.call(null,map__35319_35359__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35361 = cljs.core.get.call(null,map__35319_35359__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35357);

cljs.core.println.call(null," ",arglists_35361);

if(cljs.core.truth_(doc_35360)){
cljs.core.println.call(null," ",doc_35360);
} else {
}


var G__35362 = seq__35302_35352;
var G__35363 = chunk__35303_35353;
var G__35364 = count__35304_35354;
var G__35365 = (i__35305_35355 + (1));
seq__35302_35352 = G__35362;
chunk__35303_35353 = G__35363;
count__35304_35354 = G__35364;
i__35305_35355 = G__35365;
continue;
} else {
var temp__5720__auto___35366 = cljs.core.seq.call(null,seq__35302_35352);
if(temp__5720__auto___35366){
var seq__35302_35367__$1 = temp__5720__auto___35366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35302_35367__$1)){
var c__4550__auto___35368 = cljs.core.chunk_first.call(null,seq__35302_35367__$1);
var G__35369 = cljs.core.chunk_rest.call(null,seq__35302_35367__$1);
var G__35370 = c__4550__auto___35368;
var G__35371 = cljs.core.count.call(null,c__4550__auto___35368);
var G__35372 = (0);
seq__35302_35352 = G__35369;
chunk__35303_35353 = G__35370;
count__35304_35354 = G__35371;
i__35305_35355 = G__35372;
continue;
} else {
var vec__35321_35373 = cljs.core.first.call(null,seq__35302_35367__$1);
var name_35374 = cljs.core.nth.call(null,vec__35321_35373,(0),null);
var map__35324_35375 = cljs.core.nth.call(null,vec__35321_35373,(1),null);
var map__35324_35376__$1 = (((((!((map__35324_35375 == null))))?(((((map__35324_35375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35324_35375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35324_35375):map__35324_35375);
var doc_35377 = cljs.core.get.call(null,map__35324_35376__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35378 = cljs.core.get.call(null,map__35324_35376__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35374);

cljs.core.println.call(null," ",arglists_35378);

if(cljs.core.truth_(doc_35377)){
cljs.core.println.call(null," ",doc_35377);
} else {
}


var G__35379 = cljs.core.next.call(null,seq__35302_35367__$1);
var G__35380 = null;
var G__35381 = (0);
var G__35382 = (0);
seq__35302_35352 = G__35379;
chunk__35303_35353 = G__35380;
count__35304_35354 = G__35381;
i__35305_35355 = G__35382;
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

var seq__35326 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35327 = null;
var count__35328 = (0);
var i__35329 = (0);
while(true){
if((i__35329 < count__35328)){
var role = cljs.core._nth.call(null,chunk__35327,i__35329);
var temp__5720__auto___35383__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35383__$1)){
var spec_35384 = temp__5720__auto___35383__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35384));
} else {
}


var G__35385 = seq__35326;
var G__35386 = chunk__35327;
var G__35387 = count__35328;
var G__35388 = (i__35329 + (1));
seq__35326 = G__35385;
chunk__35327 = G__35386;
count__35328 = G__35387;
i__35329 = G__35388;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__35326);
if(temp__5720__auto____$1){
var seq__35326__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35326__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35326__$1);
var G__35389 = cljs.core.chunk_rest.call(null,seq__35326__$1);
var G__35390 = c__4550__auto__;
var G__35391 = cljs.core.count.call(null,c__4550__auto__);
var G__35392 = (0);
seq__35326 = G__35389;
chunk__35327 = G__35390;
count__35328 = G__35391;
i__35329 = G__35392;
continue;
} else {
var role = cljs.core.first.call(null,seq__35326__$1);
var temp__5720__auto___35393__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35393__$2)){
var spec_35394 = temp__5720__auto___35393__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35394));
} else {
}


var G__35395 = cljs.core.next.call(null,seq__35326__$1);
var G__35396 = null;
var G__35397 = (0);
var G__35398 = (0);
seq__35326 = G__35395;
chunk__35327 = G__35396;
count__35328 = G__35397;
i__35329 = G__35398;
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
var G__35399 = cljs.core.conj.call(null,via,t);
var G__35400 = cljs.core.ex_cause.call(null,t);
via = G__35399;
t = G__35400;
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
var map__35403 = datafied_throwable;
var map__35403__$1 = (((((!((map__35403 == null))))?(((((map__35403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35403):map__35403);
var via = cljs.core.get.call(null,map__35403__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35403__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35403__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35404 = cljs.core.last.call(null,via);
var map__35404__$1 = (((((!((map__35404 == null))))?(((((map__35404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35404):map__35404);
var type = cljs.core.get.call(null,map__35404__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35404__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35404__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35405 = data;
var map__35405__$1 = (((((!((map__35405 == null))))?(((((map__35405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35405):map__35405);
var problems = cljs.core.get.call(null,map__35405__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35405__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35405__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35406 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35406__$1 = (((((!((map__35406 == null))))?(((((map__35406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35406):map__35406);
var top_data = map__35406__$1;
var source = cljs.core.get.call(null,map__35406__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35411 = phase;
var G__35411__$1 = (((G__35411 instanceof cljs.core.Keyword))?G__35411.fqn:null);
switch (G__35411__$1) {
case "read-source":
var map__35412 = data;
var map__35412__$1 = (((((!((map__35412 == null))))?(((((map__35412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35412):map__35412);
var line = cljs.core.get.call(null,map__35412__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35412__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35414 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35414__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35414,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35414);
var G__35414__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35414__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35414__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35414__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35414__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35415 = top_data;
var G__35415__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35415,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35415);
var G__35415__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35415__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35415__$1);
var G__35415__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35415__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35415__$2);
var G__35415__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35415__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35415__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35415__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35415__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35416 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35416,(0),null);
var method = cljs.core.nth.call(null,vec__35416,(1),null);
var file = cljs.core.nth.call(null,vec__35416,(2),null);
var line = cljs.core.nth.call(null,vec__35416,(3),null);
var G__35419 = top_data;
var G__35419__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35419,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35419);
var G__35419__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35419__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35419__$1);
var G__35419__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__35419__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35419__$2);
var G__35419__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35419__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35419__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35419__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35419__$4;
}

break;
case "execution":
var vec__35420 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35420,(0),null);
var method = cljs.core.nth.call(null,vec__35420,(1),null);
var file = cljs.core.nth.call(null,vec__35420,(2),null);
var line = cljs.core.nth.call(null,vec__35420,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__35420,source__$1,method,file,line,G__35411,G__35411__$1,map__35403,map__35403__$1,via,trace,phase,map__35404,map__35404__$1,type,message,data,map__35405,map__35405__$1,problems,fn,caller,map__35406,map__35406__$1,top_data,source){
return (function (p1__35402_SHARP_){
var or__4131__auto__ = (p1__35402_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35402_SHARP_);
}
});})(vec__35420,source__$1,method,file,line,G__35411,G__35411__$1,map__35403,map__35403__$1,via,trace,phase,map__35404,map__35404__$1,type,message,data,map__35405,map__35405__$1,problems,fn,caller,map__35406,map__35406__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__35423 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35423__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35423,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35423);
var G__35423__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35423__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35423__$1);
var G__35423__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__35423__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35423__$2);
var G__35423__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35423__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35423__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35423__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35423__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35411__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35427){
var map__35428 = p__35427;
var map__35428__$1 = (((((!((map__35428 == null))))?(((((map__35428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35428):map__35428);
var triage_data = map__35428__$1;
var phase = cljs.core.get.call(null,map__35428__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35428__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35428__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35428__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35428__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35428__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35428__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35428__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35430 = phase;
var G__35430__$1 = (((G__35430 instanceof cljs.core.Keyword))?G__35430.fqn:null);
switch (G__35430__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35431_35440 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35432_35441 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35433_35442 = true;
var _STAR_print_fn_STAR__temp_val__35434_35443 = ((function (_STAR_print_newline_STAR__orig_val__35431_35440,_STAR_print_fn_STAR__orig_val__35432_35441,_STAR_print_newline_STAR__temp_val__35433_35442,sb__4661__auto__,G__35430,G__35430__$1,loc,class_name,simple_class,cause_type,format,map__35428,map__35428__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35431_35440,_STAR_print_fn_STAR__orig_val__35432_35441,_STAR_print_newline_STAR__temp_val__35433_35442,sb__4661__auto__,G__35430,G__35430__$1,loc,class_name,simple_class,cause_type,format,map__35428,map__35428__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35433_35442;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35434_35443;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35431_35440,_STAR_print_fn_STAR__orig_val__35432_35441,_STAR_print_newline_STAR__temp_val__35433_35442,_STAR_print_fn_STAR__temp_val__35434_35443,sb__4661__auto__,G__35430,G__35430__$1,loc,class_name,simple_class,cause_type,format,map__35428,map__35428__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35431_35440,_STAR_print_fn_STAR__orig_val__35432_35441,_STAR_print_newline_STAR__temp_val__35433_35442,_STAR_print_fn_STAR__temp_val__35434_35443,sb__4661__auto__,G__35430,G__35430__$1,loc,class_name,simple_class,cause_type,format,map__35428,map__35428__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35425_SHARP_){
return cljs.core.dissoc.call(null,p1__35425_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35431_35440,_STAR_print_fn_STAR__orig_val__35432_35441,_STAR_print_newline_STAR__temp_val__35433_35442,_STAR_print_fn_STAR__temp_val__35434_35443,sb__4661__auto__,G__35430,G__35430__$1,loc,class_name,simple_class,cause_type,format,map__35428,map__35428__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35431_35440,_STAR_print_fn_STAR__orig_val__35432_35441,_STAR_print_newline_STAR__temp_val__35433_35442,_STAR_print_fn_STAR__temp_val__35434_35443,sb__4661__auto__,G__35430,G__35430__$1,loc,class_name,simple_class,cause_type,format,map__35428,map__35428__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35432_35441;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35431_35440;
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
var _STAR_print_newline_STAR__orig_val__35435_35444 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35436_35445 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35437_35446 = true;
var _STAR_print_fn_STAR__temp_val__35438_35447 = ((function (_STAR_print_newline_STAR__orig_val__35435_35444,_STAR_print_fn_STAR__orig_val__35436_35445,_STAR_print_newline_STAR__temp_val__35437_35446,sb__4661__auto__,G__35430,G__35430__$1,loc,class_name,simple_class,cause_type,format,map__35428,map__35428__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35435_35444,_STAR_print_fn_STAR__orig_val__35436_35445,_STAR_print_newline_STAR__temp_val__35437_35446,sb__4661__auto__,G__35430,G__35430__$1,loc,class_name,simple_class,cause_type,format,map__35428,map__35428__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35437_35446;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35438_35447;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35435_35444,_STAR_print_fn_STAR__orig_val__35436_35445,_STAR_print_newline_STAR__temp_val__35437_35446,_STAR_print_fn_STAR__temp_val__35438_35447,sb__4661__auto__,G__35430,G__35430__$1,loc,class_name,simple_class,cause_type,format,map__35428,map__35428__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35435_35444,_STAR_print_fn_STAR__orig_val__35436_35445,_STAR_print_newline_STAR__temp_val__35437_35446,_STAR_print_fn_STAR__temp_val__35438_35447,sb__4661__auto__,G__35430,G__35430__$1,loc,class_name,simple_class,cause_type,format,map__35428,map__35428__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35426_SHARP_){
return cljs.core.dissoc.call(null,p1__35426_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35435_35444,_STAR_print_fn_STAR__orig_val__35436_35445,_STAR_print_newline_STAR__temp_val__35437_35446,_STAR_print_fn_STAR__temp_val__35438_35447,sb__4661__auto__,G__35430,G__35430__$1,loc,class_name,simple_class,cause_type,format,map__35428,map__35428__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35435_35444,_STAR_print_fn_STAR__orig_val__35436_35445,_STAR_print_newline_STAR__temp_val__35437_35446,_STAR_print_fn_STAR__temp_val__35438_35447,sb__4661__auto__,G__35430,G__35430__$1,loc,class_name,simple_class,cause_type,format,map__35428,map__35428__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35436_35445;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35435_35444;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35430__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1610383903243
