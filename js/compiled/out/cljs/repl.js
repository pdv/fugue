// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35423){
var map__35424 = p__35423;
var map__35424__$1 = (((((!((map__35424 == null))))?(((((map__35424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35424):map__35424);
var m = map__35424__$1;
var n = cljs.core.get.call(null,map__35424__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35424__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35426_35458 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35427_35459 = null;
var count__35428_35460 = (0);
var i__35429_35461 = (0);
while(true){
if((i__35429_35461 < count__35428_35460)){
var f_35462 = cljs.core._nth.call(null,chunk__35427_35459,i__35429_35461);
cljs.core.println.call(null,"  ",f_35462);


var G__35463 = seq__35426_35458;
var G__35464 = chunk__35427_35459;
var G__35465 = count__35428_35460;
var G__35466 = (i__35429_35461 + (1));
seq__35426_35458 = G__35463;
chunk__35427_35459 = G__35464;
count__35428_35460 = G__35465;
i__35429_35461 = G__35466;
continue;
} else {
var temp__5720__auto___35467 = cljs.core.seq.call(null,seq__35426_35458);
if(temp__5720__auto___35467){
var seq__35426_35468__$1 = temp__5720__auto___35467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35426_35468__$1)){
var c__4550__auto___35469 = cljs.core.chunk_first.call(null,seq__35426_35468__$1);
var G__35470 = cljs.core.chunk_rest.call(null,seq__35426_35468__$1);
var G__35471 = c__4550__auto___35469;
var G__35472 = cljs.core.count.call(null,c__4550__auto___35469);
var G__35473 = (0);
seq__35426_35458 = G__35470;
chunk__35427_35459 = G__35471;
count__35428_35460 = G__35472;
i__35429_35461 = G__35473;
continue;
} else {
var f_35474 = cljs.core.first.call(null,seq__35426_35468__$1);
cljs.core.println.call(null,"  ",f_35474);


var G__35475 = cljs.core.next.call(null,seq__35426_35468__$1);
var G__35476 = null;
var G__35477 = (0);
var G__35478 = (0);
seq__35426_35458 = G__35475;
chunk__35427_35459 = G__35476;
count__35428_35460 = G__35477;
i__35429_35461 = G__35478;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35479 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35479);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35479)))?cljs.core.second.call(null,arglists_35479):arglists_35479));
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
var seq__35430_35480 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35431_35481 = null;
var count__35432_35482 = (0);
var i__35433_35483 = (0);
while(true){
if((i__35433_35483 < count__35432_35482)){
var vec__35444_35484 = cljs.core._nth.call(null,chunk__35431_35481,i__35433_35483);
var name_35485 = cljs.core.nth.call(null,vec__35444_35484,(0),null);
var map__35447_35486 = cljs.core.nth.call(null,vec__35444_35484,(1),null);
var map__35447_35487__$1 = (((((!((map__35447_35486 == null))))?(((((map__35447_35486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35447_35486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35447_35486):map__35447_35486);
var doc_35488 = cljs.core.get.call(null,map__35447_35487__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35489 = cljs.core.get.call(null,map__35447_35487__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35485);

cljs.core.println.call(null," ",arglists_35489);

if(cljs.core.truth_(doc_35488)){
cljs.core.println.call(null," ",doc_35488);
} else {
}


var G__35490 = seq__35430_35480;
var G__35491 = chunk__35431_35481;
var G__35492 = count__35432_35482;
var G__35493 = (i__35433_35483 + (1));
seq__35430_35480 = G__35490;
chunk__35431_35481 = G__35491;
count__35432_35482 = G__35492;
i__35433_35483 = G__35493;
continue;
} else {
var temp__5720__auto___35494 = cljs.core.seq.call(null,seq__35430_35480);
if(temp__5720__auto___35494){
var seq__35430_35495__$1 = temp__5720__auto___35494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35430_35495__$1)){
var c__4550__auto___35496 = cljs.core.chunk_first.call(null,seq__35430_35495__$1);
var G__35497 = cljs.core.chunk_rest.call(null,seq__35430_35495__$1);
var G__35498 = c__4550__auto___35496;
var G__35499 = cljs.core.count.call(null,c__4550__auto___35496);
var G__35500 = (0);
seq__35430_35480 = G__35497;
chunk__35431_35481 = G__35498;
count__35432_35482 = G__35499;
i__35433_35483 = G__35500;
continue;
} else {
var vec__35449_35501 = cljs.core.first.call(null,seq__35430_35495__$1);
var name_35502 = cljs.core.nth.call(null,vec__35449_35501,(0),null);
var map__35452_35503 = cljs.core.nth.call(null,vec__35449_35501,(1),null);
var map__35452_35504__$1 = (((((!((map__35452_35503 == null))))?(((((map__35452_35503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35452_35503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35452_35503):map__35452_35503);
var doc_35505 = cljs.core.get.call(null,map__35452_35504__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35506 = cljs.core.get.call(null,map__35452_35504__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35502);

cljs.core.println.call(null," ",arglists_35506);

if(cljs.core.truth_(doc_35505)){
cljs.core.println.call(null," ",doc_35505);
} else {
}


var G__35507 = cljs.core.next.call(null,seq__35430_35495__$1);
var G__35508 = null;
var G__35509 = (0);
var G__35510 = (0);
seq__35430_35480 = G__35507;
chunk__35431_35481 = G__35508;
count__35432_35482 = G__35509;
i__35433_35483 = G__35510;
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

var seq__35454 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35455 = null;
var count__35456 = (0);
var i__35457 = (0);
while(true){
if((i__35457 < count__35456)){
var role = cljs.core._nth.call(null,chunk__35455,i__35457);
var temp__5720__auto___35511__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35511__$1)){
var spec_35512 = temp__5720__auto___35511__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35512));
} else {
}


var G__35513 = seq__35454;
var G__35514 = chunk__35455;
var G__35515 = count__35456;
var G__35516 = (i__35457 + (1));
seq__35454 = G__35513;
chunk__35455 = G__35514;
count__35456 = G__35515;
i__35457 = G__35516;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__35454);
if(temp__5720__auto____$1){
var seq__35454__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35454__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35454__$1);
var G__35517 = cljs.core.chunk_rest.call(null,seq__35454__$1);
var G__35518 = c__4550__auto__;
var G__35519 = cljs.core.count.call(null,c__4550__auto__);
var G__35520 = (0);
seq__35454 = G__35517;
chunk__35455 = G__35518;
count__35456 = G__35519;
i__35457 = G__35520;
continue;
} else {
var role = cljs.core.first.call(null,seq__35454__$1);
var temp__5720__auto___35521__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35521__$2)){
var spec_35522 = temp__5720__auto___35521__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35522));
} else {
}


var G__35523 = cljs.core.next.call(null,seq__35454__$1);
var G__35524 = null;
var G__35525 = (0);
var G__35526 = (0);
seq__35454 = G__35523;
chunk__35455 = G__35524;
count__35456 = G__35525;
i__35457 = G__35526;
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
var G__35527 = cljs.core.conj.call(null,via,t);
var G__35528 = cljs.core.ex_cause.call(null,t);
via = G__35527;
t = G__35528;
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
var map__35531 = datafied_throwable;
var map__35531__$1 = (((((!((map__35531 == null))))?(((((map__35531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35531):map__35531);
var via = cljs.core.get.call(null,map__35531__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35531__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35531__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35532 = cljs.core.last.call(null,via);
var map__35532__$1 = (((((!((map__35532 == null))))?(((((map__35532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35532):map__35532);
var type = cljs.core.get.call(null,map__35532__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35532__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35532__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35533 = data;
var map__35533__$1 = (((((!((map__35533 == null))))?(((((map__35533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35533):map__35533);
var problems = cljs.core.get.call(null,map__35533__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35533__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35533__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35534 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35534__$1 = (((((!((map__35534 == null))))?(((((map__35534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35534):map__35534);
var top_data = map__35534__$1;
var source = cljs.core.get.call(null,map__35534__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35539 = phase;
var G__35539__$1 = (((G__35539 instanceof cljs.core.Keyword))?G__35539.fqn:null);
switch (G__35539__$1) {
case "read-source":
var map__35540 = data;
var map__35540__$1 = (((((!((map__35540 == null))))?(((((map__35540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35540):map__35540);
var line = cljs.core.get.call(null,map__35540__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35540__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35542 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35542__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35542,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35542);
var G__35542__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35542__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35542__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35542__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35542__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35543 = top_data;
var G__35543__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35543,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35543);
var G__35543__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35543__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35543__$1);
var G__35543__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35543__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35543__$2);
var G__35543__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35543__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35543__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35543__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35543__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35544 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35544,(0),null);
var method = cljs.core.nth.call(null,vec__35544,(1),null);
var file = cljs.core.nth.call(null,vec__35544,(2),null);
var line = cljs.core.nth.call(null,vec__35544,(3),null);
var G__35547 = top_data;
var G__35547__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35547,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35547);
var G__35547__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35547__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35547__$1);
var G__35547__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__35547__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35547__$2);
var G__35547__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35547__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35547__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35547__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35547__$4;
}

break;
case "execution":
var vec__35548 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35548,(0),null);
var method = cljs.core.nth.call(null,vec__35548,(1),null);
var file = cljs.core.nth.call(null,vec__35548,(2),null);
var line = cljs.core.nth.call(null,vec__35548,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__35548,source__$1,method,file,line,G__35539,G__35539__$1,map__35531,map__35531__$1,via,trace,phase,map__35532,map__35532__$1,type,message,data,map__35533,map__35533__$1,problems,fn,caller,map__35534,map__35534__$1,top_data,source){
return (function (p1__35530_SHARP_){
var or__4131__auto__ = (p1__35530_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35530_SHARP_);
}
});})(vec__35548,source__$1,method,file,line,G__35539,G__35539__$1,map__35531,map__35531__$1,via,trace,phase,map__35532,map__35532__$1,type,message,data,map__35533,map__35533__$1,problems,fn,caller,map__35534,map__35534__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__35551 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35551__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35551,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35551);
var G__35551__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35551__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35551__$1);
var G__35551__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__35551__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35551__$2);
var G__35551__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35551__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35551__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35551__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35551__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35539__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35555){
var map__35556 = p__35555;
var map__35556__$1 = (((((!((map__35556 == null))))?(((((map__35556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35556):map__35556);
var triage_data = map__35556__$1;
var phase = cljs.core.get.call(null,map__35556__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35556__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35556__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35556__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35556__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35556__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35556__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35556__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35558 = phase;
var G__35558__$1 = (((G__35558 instanceof cljs.core.Keyword))?G__35558.fqn:null);
switch (G__35558__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35559_35568 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35560_35569 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35561_35570 = true;
var _STAR_print_fn_STAR__temp_val__35562_35571 = ((function (_STAR_print_newline_STAR__orig_val__35559_35568,_STAR_print_fn_STAR__orig_val__35560_35569,_STAR_print_newline_STAR__temp_val__35561_35570,sb__4661__auto__,G__35558,G__35558__$1,loc,class_name,simple_class,cause_type,format,map__35556,map__35556__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35559_35568,_STAR_print_fn_STAR__orig_val__35560_35569,_STAR_print_newline_STAR__temp_val__35561_35570,sb__4661__auto__,G__35558,G__35558__$1,loc,class_name,simple_class,cause_type,format,map__35556,map__35556__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35561_35570;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35562_35571;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35559_35568,_STAR_print_fn_STAR__orig_val__35560_35569,_STAR_print_newline_STAR__temp_val__35561_35570,_STAR_print_fn_STAR__temp_val__35562_35571,sb__4661__auto__,G__35558,G__35558__$1,loc,class_name,simple_class,cause_type,format,map__35556,map__35556__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35559_35568,_STAR_print_fn_STAR__orig_val__35560_35569,_STAR_print_newline_STAR__temp_val__35561_35570,_STAR_print_fn_STAR__temp_val__35562_35571,sb__4661__auto__,G__35558,G__35558__$1,loc,class_name,simple_class,cause_type,format,map__35556,map__35556__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35553_SHARP_){
return cljs.core.dissoc.call(null,p1__35553_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35559_35568,_STAR_print_fn_STAR__orig_val__35560_35569,_STAR_print_newline_STAR__temp_val__35561_35570,_STAR_print_fn_STAR__temp_val__35562_35571,sb__4661__auto__,G__35558,G__35558__$1,loc,class_name,simple_class,cause_type,format,map__35556,map__35556__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35559_35568,_STAR_print_fn_STAR__orig_val__35560_35569,_STAR_print_newline_STAR__temp_val__35561_35570,_STAR_print_fn_STAR__temp_val__35562_35571,sb__4661__auto__,G__35558,G__35558__$1,loc,class_name,simple_class,cause_type,format,map__35556,map__35556__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35560_35569;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35559_35568;
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
var _STAR_print_newline_STAR__orig_val__35563_35572 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35564_35573 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35565_35574 = true;
var _STAR_print_fn_STAR__temp_val__35566_35575 = ((function (_STAR_print_newline_STAR__orig_val__35563_35572,_STAR_print_fn_STAR__orig_val__35564_35573,_STAR_print_newline_STAR__temp_val__35565_35574,sb__4661__auto__,G__35558,G__35558__$1,loc,class_name,simple_class,cause_type,format,map__35556,map__35556__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35563_35572,_STAR_print_fn_STAR__orig_val__35564_35573,_STAR_print_newline_STAR__temp_val__35565_35574,sb__4661__auto__,G__35558,G__35558__$1,loc,class_name,simple_class,cause_type,format,map__35556,map__35556__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35565_35574;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35566_35575;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35563_35572,_STAR_print_fn_STAR__orig_val__35564_35573,_STAR_print_newline_STAR__temp_val__35565_35574,_STAR_print_fn_STAR__temp_val__35566_35575,sb__4661__auto__,G__35558,G__35558__$1,loc,class_name,simple_class,cause_type,format,map__35556,map__35556__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35563_35572,_STAR_print_fn_STAR__orig_val__35564_35573,_STAR_print_newline_STAR__temp_val__35565_35574,_STAR_print_fn_STAR__temp_val__35566_35575,sb__4661__auto__,G__35558,G__35558__$1,loc,class_name,simple_class,cause_type,format,map__35556,map__35556__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35554_SHARP_){
return cljs.core.dissoc.call(null,p1__35554_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35563_35572,_STAR_print_fn_STAR__orig_val__35564_35573,_STAR_print_newline_STAR__temp_val__35565_35574,_STAR_print_fn_STAR__temp_val__35566_35575,sb__4661__auto__,G__35558,G__35558__$1,loc,class_name,simple_class,cause_type,format,map__35556,map__35556__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35563_35572,_STAR_print_fn_STAR__orig_val__35564_35573,_STAR_print_newline_STAR__temp_val__35565_35574,_STAR_print_fn_STAR__temp_val__35566_35575,sb__4661__auto__,G__35558,G__35558__$1,loc,class_name,simple_class,cause_type,format,map__35556,map__35556__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35564_35573;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35563_35572;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35558__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1610309312923
