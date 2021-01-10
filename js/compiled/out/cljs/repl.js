// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35404){
var map__35405 = p__35404;
var map__35405__$1 = (((((!((map__35405 == null))))?(((((map__35405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35405):map__35405);
var m = map__35405__$1;
var n = cljs.core.get.call(null,map__35405__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35405__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35407_35439 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35408_35440 = null;
var count__35409_35441 = (0);
var i__35410_35442 = (0);
while(true){
if((i__35410_35442 < count__35409_35441)){
var f_35443 = cljs.core._nth.call(null,chunk__35408_35440,i__35410_35442);
cljs.core.println.call(null,"  ",f_35443);


var G__35444 = seq__35407_35439;
var G__35445 = chunk__35408_35440;
var G__35446 = count__35409_35441;
var G__35447 = (i__35410_35442 + (1));
seq__35407_35439 = G__35444;
chunk__35408_35440 = G__35445;
count__35409_35441 = G__35446;
i__35410_35442 = G__35447;
continue;
} else {
var temp__5720__auto___35448 = cljs.core.seq.call(null,seq__35407_35439);
if(temp__5720__auto___35448){
var seq__35407_35449__$1 = temp__5720__auto___35448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35407_35449__$1)){
var c__4550__auto___35450 = cljs.core.chunk_first.call(null,seq__35407_35449__$1);
var G__35451 = cljs.core.chunk_rest.call(null,seq__35407_35449__$1);
var G__35452 = c__4550__auto___35450;
var G__35453 = cljs.core.count.call(null,c__4550__auto___35450);
var G__35454 = (0);
seq__35407_35439 = G__35451;
chunk__35408_35440 = G__35452;
count__35409_35441 = G__35453;
i__35410_35442 = G__35454;
continue;
} else {
var f_35455 = cljs.core.first.call(null,seq__35407_35449__$1);
cljs.core.println.call(null,"  ",f_35455);


var G__35456 = cljs.core.next.call(null,seq__35407_35449__$1);
var G__35457 = null;
var G__35458 = (0);
var G__35459 = (0);
seq__35407_35439 = G__35456;
chunk__35408_35440 = G__35457;
count__35409_35441 = G__35458;
i__35410_35442 = G__35459;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35460 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35460);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35460)))?cljs.core.second.call(null,arglists_35460):arglists_35460));
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
var seq__35411_35461 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35412_35462 = null;
var count__35413_35463 = (0);
var i__35414_35464 = (0);
while(true){
if((i__35414_35464 < count__35413_35463)){
var vec__35425_35465 = cljs.core._nth.call(null,chunk__35412_35462,i__35414_35464);
var name_35466 = cljs.core.nth.call(null,vec__35425_35465,(0),null);
var map__35428_35467 = cljs.core.nth.call(null,vec__35425_35465,(1),null);
var map__35428_35468__$1 = (((((!((map__35428_35467 == null))))?(((((map__35428_35467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35428_35467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35428_35467):map__35428_35467);
var doc_35469 = cljs.core.get.call(null,map__35428_35468__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35470 = cljs.core.get.call(null,map__35428_35468__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35466);

cljs.core.println.call(null," ",arglists_35470);

if(cljs.core.truth_(doc_35469)){
cljs.core.println.call(null," ",doc_35469);
} else {
}


var G__35471 = seq__35411_35461;
var G__35472 = chunk__35412_35462;
var G__35473 = count__35413_35463;
var G__35474 = (i__35414_35464 + (1));
seq__35411_35461 = G__35471;
chunk__35412_35462 = G__35472;
count__35413_35463 = G__35473;
i__35414_35464 = G__35474;
continue;
} else {
var temp__5720__auto___35475 = cljs.core.seq.call(null,seq__35411_35461);
if(temp__5720__auto___35475){
var seq__35411_35476__$1 = temp__5720__auto___35475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35411_35476__$1)){
var c__4550__auto___35477 = cljs.core.chunk_first.call(null,seq__35411_35476__$1);
var G__35478 = cljs.core.chunk_rest.call(null,seq__35411_35476__$1);
var G__35479 = c__4550__auto___35477;
var G__35480 = cljs.core.count.call(null,c__4550__auto___35477);
var G__35481 = (0);
seq__35411_35461 = G__35478;
chunk__35412_35462 = G__35479;
count__35413_35463 = G__35480;
i__35414_35464 = G__35481;
continue;
} else {
var vec__35430_35482 = cljs.core.first.call(null,seq__35411_35476__$1);
var name_35483 = cljs.core.nth.call(null,vec__35430_35482,(0),null);
var map__35433_35484 = cljs.core.nth.call(null,vec__35430_35482,(1),null);
var map__35433_35485__$1 = (((((!((map__35433_35484 == null))))?(((((map__35433_35484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35433_35484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35433_35484):map__35433_35484);
var doc_35486 = cljs.core.get.call(null,map__35433_35485__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35487 = cljs.core.get.call(null,map__35433_35485__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35483);

cljs.core.println.call(null," ",arglists_35487);

if(cljs.core.truth_(doc_35486)){
cljs.core.println.call(null," ",doc_35486);
} else {
}


var G__35488 = cljs.core.next.call(null,seq__35411_35476__$1);
var G__35489 = null;
var G__35490 = (0);
var G__35491 = (0);
seq__35411_35461 = G__35488;
chunk__35412_35462 = G__35489;
count__35413_35463 = G__35490;
i__35414_35464 = G__35491;
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

var seq__35435 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35436 = null;
var count__35437 = (0);
var i__35438 = (0);
while(true){
if((i__35438 < count__35437)){
var role = cljs.core._nth.call(null,chunk__35436,i__35438);
var temp__5720__auto___35492__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35492__$1)){
var spec_35493 = temp__5720__auto___35492__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35493));
} else {
}


var G__35494 = seq__35435;
var G__35495 = chunk__35436;
var G__35496 = count__35437;
var G__35497 = (i__35438 + (1));
seq__35435 = G__35494;
chunk__35436 = G__35495;
count__35437 = G__35496;
i__35438 = G__35497;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__35435);
if(temp__5720__auto____$1){
var seq__35435__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35435__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35435__$1);
var G__35498 = cljs.core.chunk_rest.call(null,seq__35435__$1);
var G__35499 = c__4550__auto__;
var G__35500 = cljs.core.count.call(null,c__4550__auto__);
var G__35501 = (0);
seq__35435 = G__35498;
chunk__35436 = G__35499;
count__35437 = G__35500;
i__35438 = G__35501;
continue;
} else {
var role = cljs.core.first.call(null,seq__35435__$1);
var temp__5720__auto___35502__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35502__$2)){
var spec_35503 = temp__5720__auto___35502__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35503));
} else {
}


var G__35504 = cljs.core.next.call(null,seq__35435__$1);
var G__35505 = null;
var G__35506 = (0);
var G__35507 = (0);
seq__35435 = G__35504;
chunk__35436 = G__35505;
count__35437 = G__35506;
i__35438 = G__35507;
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
var G__35508 = cljs.core.conj.call(null,via,t);
var G__35509 = cljs.core.ex_cause.call(null,t);
via = G__35508;
t = G__35509;
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
var map__35512 = datafied_throwable;
var map__35512__$1 = (((((!((map__35512 == null))))?(((((map__35512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35512):map__35512);
var via = cljs.core.get.call(null,map__35512__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35512__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35512__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35513 = cljs.core.last.call(null,via);
var map__35513__$1 = (((((!((map__35513 == null))))?(((((map__35513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35513):map__35513);
var type = cljs.core.get.call(null,map__35513__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35513__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35513__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35514 = data;
var map__35514__$1 = (((((!((map__35514 == null))))?(((((map__35514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35514):map__35514);
var problems = cljs.core.get.call(null,map__35514__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35514__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35514__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35515 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35515__$1 = (((((!((map__35515 == null))))?(((((map__35515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35515):map__35515);
var top_data = map__35515__$1;
var source = cljs.core.get.call(null,map__35515__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35520 = phase;
var G__35520__$1 = (((G__35520 instanceof cljs.core.Keyword))?G__35520.fqn:null);
switch (G__35520__$1) {
case "read-source":
var map__35521 = data;
var map__35521__$1 = (((((!((map__35521 == null))))?(((((map__35521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35521):map__35521);
var line = cljs.core.get.call(null,map__35521__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35521__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35523 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35523__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35523,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35523);
var G__35523__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35523__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35523__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35523__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35523__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35524 = top_data;
var G__35524__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35524,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35524);
var G__35524__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35524__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35524__$1);
var G__35524__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35524__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35524__$2);
var G__35524__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35524__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35524__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35524__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35524__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35525 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35525,(0),null);
var method = cljs.core.nth.call(null,vec__35525,(1),null);
var file = cljs.core.nth.call(null,vec__35525,(2),null);
var line = cljs.core.nth.call(null,vec__35525,(3),null);
var G__35528 = top_data;
var G__35528__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35528,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35528);
var G__35528__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35528__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35528__$1);
var G__35528__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__35528__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35528__$2);
var G__35528__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35528__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35528__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35528__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35528__$4;
}

break;
case "execution":
var vec__35529 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35529,(0),null);
var method = cljs.core.nth.call(null,vec__35529,(1),null);
var file = cljs.core.nth.call(null,vec__35529,(2),null);
var line = cljs.core.nth.call(null,vec__35529,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__35529,source__$1,method,file,line,G__35520,G__35520__$1,map__35512,map__35512__$1,via,trace,phase,map__35513,map__35513__$1,type,message,data,map__35514,map__35514__$1,problems,fn,caller,map__35515,map__35515__$1,top_data,source){
return (function (p1__35511_SHARP_){
var or__4131__auto__ = (p1__35511_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35511_SHARP_);
}
});})(vec__35529,source__$1,method,file,line,G__35520,G__35520__$1,map__35512,map__35512__$1,via,trace,phase,map__35513,map__35513__$1,type,message,data,map__35514,map__35514__$1,problems,fn,caller,map__35515,map__35515__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__35532 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35532__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35532,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35532);
var G__35532__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35532__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35532__$1);
var G__35532__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__35532__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35532__$2);
var G__35532__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35532__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35532__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35532__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35532__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35520__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35536){
var map__35537 = p__35536;
var map__35537__$1 = (((((!((map__35537 == null))))?(((((map__35537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35537):map__35537);
var triage_data = map__35537__$1;
var phase = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35537__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35539 = phase;
var G__35539__$1 = (((G__35539 instanceof cljs.core.Keyword))?G__35539.fqn:null);
switch (G__35539__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35540_35549 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35541_35550 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35542_35551 = true;
var _STAR_print_fn_STAR__temp_val__35543_35552 = ((function (_STAR_print_newline_STAR__orig_val__35540_35549,_STAR_print_fn_STAR__orig_val__35541_35550,_STAR_print_newline_STAR__temp_val__35542_35551,sb__4661__auto__,G__35539,G__35539__$1,loc,class_name,simple_class,cause_type,format,map__35537,map__35537__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35540_35549,_STAR_print_fn_STAR__orig_val__35541_35550,_STAR_print_newline_STAR__temp_val__35542_35551,sb__4661__auto__,G__35539,G__35539__$1,loc,class_name,simple_class,cause_type,format,map__35537,map__35537__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35542_35551;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35543_35552;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35540_35549,_STAR_print_fn_STAR__orig_val__35541_35550,_STAR_print_newline_STAR__temp_val__35542_35551,_STAR_print_fn_STAR__temp_val__35543_35552,sb__4661__auto__,G__35539,G__35539__$1,loc,class_name,simple_class,cause_type,format,map__35537,map__35537__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35540_35549,_STAR_print_fn_STAR__orig_val__35541_35550,_STAR_print_newline_STAR__temp_val__35542_35551,_STAR_print_fn_STAR__temp_val__35543_35552,sb__4661__auto__,G__35539,G__35539__$1,loc,class_name,simple_class,cause_type,format,map__35537,map__35537__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35534_SHARP_){
return cljs.core.dissoc.call(null,p1__35534_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35540_35549,_STAR_print_fn_STAR__orig_val__35541_35550,_STAR_print_newline_STAR__temp_val__35542_35551,_STAR_print_fn_STAR__temp_val__35543_35552,sb__4661__auto__,G__35539,G__35539__$1,loc,class_name,simple_class,cause_type,format,map__35537,map__35537__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35540_35549,_STAR_print_fn_STAR__orig_val__35541_35550,_STAR_print_newline_STAR__temp_val__35542_35551,_STAR_print_fn_STAR__temp_val__35543_35552,sb__4661__auto__,G__35539,G__35539__$1,loc,class_name,simple_class,cause_type,format,map__35537,map__35537__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35541_35550;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35540_35549;
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
var _STAR_print_newline_STAR__orig_val__35544_35553 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35545_35554 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35546_35555 = true;
var _STAR_print_fn_STAR__temp_val__35547_35556 = ((function (_STAR_print_newline_STAR__orig_val__35544_35553,_STAR_print_fn_STAR__orig_val__35545_35554,_STAR_print_newline_STAR__temp_val__35546_35555,sb__4661__auto__,G__35539,G__35539__$1,loc,class_name,simple_class,cause_type,format,map__35537,map__35537__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35544_35553,_STAR_print_fn_STAR__orig_val__35545_35554,_STAR_print_newline_STAR__temp_val__35546_35555,sb__4661__auto__,G__35539,G__35539__$1,loc,class_name,simple_class,cause_type,format,map__35537,map__35537__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35546_35555;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35547_35556;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35544_35553,_STAR_print_fn_STAR__orig_val__35545_35554,_STAR_print_newline_STAR__temp_val__35546_35555,_STAR_print_fn_STAR__temp_val__35547_35556,sb__4661__auto__,G__35539,G__35539__$1,loc,class_name,simple_class,cause_type,format,map__35537,map__35537__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35544_35553,_STAR_print_fn_STAR__orig_val__35545_35554,_STAR_print_newline_STAR__temp_val__35546_35555,_STAR_print_fn_STAR__temp_val__35547_35556,sb__4661__auto__,G__35539,G__35539__$1,loc,class_name,simple_class,cause_type,format,map__35537,map__35537__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35535_SHARP_){
return cljs.core.dissoc.call(null,p1__35535_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35544_35553,_STAR_print_fn_STAR__orig_val__35545_35554,_STAR_print_newline_STAR__temp_val__35546_35555,_STAR_print_fn_STAR__temp_val__35547_35556,sb__4661__auto__,G__35539,G__35539__$1,loc,class_name,simple_class,cause_type,format,map__35537,map__35537__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35544_35553,_STAR_print_fn_STAR__orig_val__35545_35554,_STAR_print_newline_STAR__temp_val__35546_35555,_STAR_print_fn_STAR__temp_val__35547_35556,sb__4661__auto__,G__35539,G__35539__$1,loc,class_name,simple_class,cause_type,format,map__35537,map__35537__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35545_35554;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35544_35553;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35539__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1610319294517
