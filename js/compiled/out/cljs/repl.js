// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35418){
var map__35419 = p__35418;
var map__35419__$1 = (((((!((map__35419 == null))))?(((((map__35419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35419):map__35419);
var m = map__35419__$1;
var n = cljs.core.get.call(null,map__35419__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35419__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35421_35453 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35422_35454 = null;
var count__35423_35455 = (0);
var i__35424_35456 = (0);
while(true){
if((i__35424_35456 < count__35423_35455)){
var f_35457 = cljs.core._nth.call(null,chunk__35422_35454,i__35424_35456);
cljs.core.println.call(null,"  ",f_35457);


var G__35458 = seq__35421_35453;
var G__35459 = chunk__35422_35454;
var G__35460 = count__35423_35455;
var G__35461 = (i__35424_35456 + (1));
seq__35421_35453 = G__35458;
chunk__35422_35454 = G__35459;
count__35423_35455 = G__35460;
i__35424_35456 = G__35461;
continue;
} else {
var temp__5720__auto___35462 = cljs.core.seq.call(null,seq__35421_35453);
if(temp__5720__auto___35462){
var seq__35421_35463__$1 = temp__5720__auto___35462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35421_35463__$1)){
var c__4550__auto___35464 = cljs.core.chunk_first.call(null,seq__35421_35463__$1);
var G__35465 = cljs.core.chunk_rest.call(null,seq__35421_35463__$1);
var G__35466 = c__4550__auto___35464;
var G__35467 = cljs.core.count.call(null,c__4550__auto___35464);
var G__35468 = (0);
seq__35421_35453 = G__35465;
chunk__35422_35454 = G__35466;
count__35423_35455 = G__35467;
i__35424_35456 = G__35468;
continue;
} else {
var f_35469 = cljs.core.first.call(null,seq__35421_35463__$1);
cljs.core.println.call(null,"  ",f_35469);


var G__35470 = cljs.core.next.call(null,seq__35421_35463__$1);
var G__35471 = null;
var G__35472 = (0);
var G__35473 = (0);
seq__35421_35453 = G__35470;
chunk__35422_35454 = G__35471;
count__35423_35455 = G__35472;
i__35424_35456 = G__35473;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35474 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35474);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35474)))?cljs.core.second.call(null,arglists_35474):arglists_35474));
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
var seq__35425_35475 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35426_35476 = null;
var count__35427_35477 = (0);
var i__35428_35478 = (0);
while(true){
if((i__35428_35478 < count__35427_35477)){
var vec__35439_35479 = cljs.core._nth.call(null,chunk__35426_35476,i__35428_35478);
var name_35480 = cljs.core.nth.call(null,vec__35439_35479,(0),null);
var map__35442_35481 = cljs.core.nth.call(null,vec__35439_35479,(1),null);
var map__35442_35482__$1 = (((((!((map__35442_35481 == null))))?(((((map__35442_35481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35442_35481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35442_35481):map__35442_35481);
var doc_35483 = cljs.core.get.call(null,map__35442_35482__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35484 = cljs.core.get.call(null,map__35442_35482__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35480);

cljs.core.println.call(null," ",arglists_35484);

if(cljs.core.truth_(doc_35483)){
cljs.core.println.call(null," ",doc_35483);
} else {
}


var G__35485 = seq__35425_35475;
var G__35486 = chunk__35426_35476;
var G__35487 = count__35427_35477;
var G__35488 = (i__35428_35478 + (1));
seq__35425_35475 = G__35485;
chunk__35426_35476 = G__35486;
count__35427_35477 = G__35487;
i__35428_35478 = G__35488;
continue;
} else {
var temp__5720__auto___35489 = cljs.core.seq.call(null,seq__35425_35475);
if(temp__5720__auto___35489){
var seq__35425_35490__$1 = temp__5720__auto___35489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35425_35490__$1)){
var c__4550__auto___35491 = cljs.core.chunk_first.call(null,seq__35425_35490__$1);
var G__35492 = cljs.core.chunk_rest.call(null,seq__35425_35490__$1);
var G__35493 = c__4550__auto___35491;
var G__35494 = cljs.core.count.call(null,c__4550__auto___35491);
var G__35495 = (0);
seq__35425_35475 = G__35492;
chunk__35426_35476 = G__35493;
count__35427_35477 = G__35494;
i__35428_35478 = G__35495;
continue;
} else {
var vec__35444_35496 = cljs.core.first.call(null,seq__35425_35490__$1);
var name_35497 = cljs.core.nth.call(null,vec__35444_35496,(0),null);
var map__35447_35498 = cljs.core.nth.call(null,vec__35444_35496,(1),null);
var map__35447_35499__$1 = (((((!((map__35447_35498 == null))))?(((((map__35447_35498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35447_35498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35447_35498):map__35447_35498);
var doc_35500 = cljs.core.get.call(null,map__35447_35499__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35501 = cljs.core.get.call(null,map__35447_35499__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35497);

cljs.core.println.call(null," ",arglists_35501);

if(cljs.core.truth_(doc_35500)){
cljs.core.println.call(null," ",doc_35500);
} else {
}


var G__35502 = cljs.core.next.call(null,seq__35425_35490__$1);
var G__35503 = null;
var G__35504 = (0);
var G__35505 = (0);
seq__35425_35475 = G__35502;
chunk__35426_35476 = G__35503;
count__35427_35477 = G__35504;
i__35428_35478 = G__35505;
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

var seq__35449 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35450 = null;
var count__35451 = (0);
var i__35452 = (0);
while(true){
if((i__35452 < count__35451)){
var role = cljs.core._nth.call(null,chunk__35450,i__35452);
var temp__5720__auto___35506__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35506__$1)){
var spec_35507 = temp__5720__auto___35506__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35507));
} else {
}


var G__35508 = seq__35449;
var G__35509 = chunk__35450;
var G__35510 = count__35451;
var G__35511 = (i__35452 + (1));
seq__35449 = G__35508;
chunk__35450 = G__35509;
count__35451 = G__35510;
i__35452 = G__35511;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__35449);
if(temp__5720__auto____$1){
var seq__35449__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35449__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35449__$1);
var G__35512 = cljs.core.chunk_rest.call(null,seq__35449__$1);
var G__35513 = c__4550__auto__;
var G__35514 = cljs.core.count.call(null,c__4550__auto__);
var G__35515 = (0);
seq__35449 = G__35512;
chunk__35450 = G__35513;
count__35451 = G__35514;
i__35452 = G__35515;
continue;
} else {
var role = cljs.core.first.call(null,seq__35449__$1);
var temp__5720__auto___35516__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35516__$2)){
var spec_35517 = temp__5720__auto___35516__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35517));
} else {
}


var G__35518 = cljs.core.next.call(null,seq__35449__$1);
var G__35519 = null;
var G__35520 = (0);
var G__35521 = (0);
seq__35449 = G__35518;
chunk__35450 = G__35519;
count__35451 = G__35520;
i__35452 = G__35521;
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
var G__35522 = cljs.core.conj.call(null,via,t);
var G__35523 = cljs.core.ex_cause.call(null,t);
via = G__35522;
t = G__35523;
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
var map__35526 = datafied_throwable;
var map__35526__$1 = (((((!((map__35526 == null))))?(((((map__35526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35526):map__35526);
var via = cljs.core.get.call(null,map__35526__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35526__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35526__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35527 = cljs.core.last.call(null,via);
var map__35527__$1 = (((((!((map__35527 == null))))?(((((map__35527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35527):map__35527);
var type = cljs.core.get.call(null,map__35527__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35527__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35527__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35528 = data;
var map__35528__$1 = (((((!((map__35528 == null))))?(((((map__35528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35528):map__35528);
var problems = cljs.core.get.call(null,map__35528__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35528__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35528__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35529 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35529__$1 = (((((!((map__35529 == null))))?(((((map__35529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35529):map__35529);
var top_data = map__35529__$1;
var source = cljs.core.get.call(null,map__35529__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35534 = phase;
var G__35534__$1 = (((G__35534 instanceof cljs.core.Keyword))?G__35534.fqn:null);
switch (G__35534__$1) {
case "read-source":
var map__35535 = data;
var map__35535__$1 = (((((!((map__35535 == null))))?(((((map__35535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35535):map__35535);
var line = cljs.core.get.call(null,map__35535__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35535__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35537 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35537__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35537,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35537);
var G__35537__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35537__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35537__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35537__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35537__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35538 = top_data;
var G__35538__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35538,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35538);
var G__35538__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35538__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35538__$1);
var G__35538__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35538__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35538__$2);
var G__35538__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35538__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35538__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35538__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35538__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35539 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35539,(0),null);
var method = cljs.core.nth.call(null,vec__35539,(1),null);
var file = cljs.core.nth.call(null,vec__35539,(2),null);
var line = cljs.core.nth.call(null,vec__35539,(3),null);
var G__35542 = top_data;
var G__35542__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35542,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35542);
var G__35542__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35542__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35542__$1);
var G__35542__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__35542__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35542__$2);
var G__35542__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35542__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35542__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35542__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35542__$4;
}

break;
case "execution":
var vec__35543 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35543,(0),null);
var method = cljs.core.nth.call(null,vec__35543,(1),null);
var file = cljs.core.nth.call(null,vec__35543,(2),null);
var line = cljs.core.nth.call(null,vec__35543,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__35543,source__$1,method,file,line,G__35534,G__35534__$1,map__35526,map__35526__$1,via,trace,phase,map__35527,map__35527__$1,type,message,data,map__35528,map__35528__$1,problems,fn,caller,map__35529,map__35529__$1,top_data,source){
return (function (p1__35525_SHARP_){
var or__4131__auto__ = (p1__35525_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35525_SHARP_);
}
});})(vec__35543,source__$1,method,file,line,G__35534,G__35534__$1,map__35526,map__35526__$1,via,trace,phase,map__35527,map__35527__$1,type,message,data,map__35528,map__35528__$1,problems,fn,caller,map__35529,map__35529__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__35546 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35546__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35546,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35546);
var G__35546__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35546__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35546__$1);
var G__35546__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__35546__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35546__$2);
var G__35546__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35546__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35546__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35546__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35546__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35534__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35550){
var map__35551 = p__35550;
var map__35551__$1 = (((((!((map__35551 == null))))?(((((map__35551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35551):map__35551);
var triage_data = map__35551__$1;
var phase = cljs.core.get.call(null,map__35551__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35551__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35551__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35551__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35551__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35551__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35551__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35551__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35553 = phase;
var G__35553__$1 = (((G__35553 instanceof cljs.core.Keyword))?G__35553.fqn:null);
switch (G__35553__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35554_35563 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35555_35564 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35556_35565 = true;
var _STAR_print_fn_STAR__temp_val__35557_35566 = ((function (_STAR_print_newline_STAR__orig_val__35554_35563,_STAR_print_fn_STAR__orig_val__35555_35564,_STAR_print_newline_STAR__temp_val__35556_35565,sb__4661__auto__,G__35553,G__35553__$1,loc,class_name,simple_class,cause_type,format,map__35551,map__35551__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35554_35563,_STAR_print_fn_STAR__orig_val__35555_35564,_STAR_print_newline_STAR__temp_val__35556_35565,sb__4661__auto__,G__35553,G__35553__$1,loc,class_name,simple_class,cause_type,format,map__35551,map__35551__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35556_35565;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35557_35566;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35554_35563,_STAR_print_fn_STAR__orig_val__35555_35564,_STAR_print_newline_STAR__temp_val__35556_35565,_STAR_print_fn_STAR__temp_val__35557_35566,sb__4661__auto__,G__35553,G__35553__$1,loc,class_name,simple_class,cause_type,format,map__35551,map__35551__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35554_35563,_STAR_print_fn_STAR__orig_val__35555_35564,_STAR_print_newline_STAR__temp_val__35556_35565,_STAR_print_fn_STAR__temp_val__35557_35566,sb__4661__auto__,G__35553,G__35553__$1,loc,class_name,simple_class,cause_type,format,map__35551,map__35551__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35548_SHARP_){
return cljs.core.dissoc.call(null,p1__35548_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35554_35563,_STAR_print_fn_STAR__orig_val__35555_35564,_STAR_print_newline_STAR__temp_val__35556_35565,_STAR_print_fn_STAR__temp_val__35557_35566,sb__4661__auto__,G__35553,G__35553__$1,loc,class_name,simple_class,cause_type,format,map__35551,map__35551__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35554_35563,_STAR_print_fn_STAR__orig_val__35555_35564,_STAR_print_newline_STAR__temp_val__35556_35565,_STAR_print_fn_STAR__temp_val__35557_35566,sb__4661__auto__,G__35553,G__35553__$1,loc,class_name,simple_class,cause_type,format,map__35551,map__35551__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35555_35564;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35554_35563;
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
var _STAR_print_newline_STAR__orig_val__35558_35567 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35559_35568 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35560_35569 = true;
var _STAR_print_fn_STAR__temp_val__35561_35570 = ((function (_STAR_print_newline_STAR__orig_val__35558_35567,_STAR_print_fn_STAR__orig_val__35559_35568,_STAR_print_newline_STAR__temp_val__35560_35569,sb__4661__auto__,G__35553,G__35553__$1,loc,class_name,simple_class,cause_type,format,map__35551,map__35551__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35558_35567,_STAR_print_fn_STAR__orig_val__35559_35568,_STAR_print_newline_STAR__temp_val__35560_35569,sb__4661__auto__,G__35553,G__35553__$1,loc,class_name,simple_class,cause_type,format,map__35551,map__35551__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35560_35569;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35561_35570;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35558_35567,_STAR_print_fn_STAR__orig_val__35559_35568,_STAR_print_newline_STAR__temp_val__35560_35569,_STAR_print_fn_STAR__temp_val__35561_35570,sb__4661__auto__,G__35553,G__35553__$1,loc,class_name,simple_class,cause_type,format,map__35551,map__35551__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35558_35567,_STAR_print_fn_STAR__orig_val__35559_35568,_STAR_print_newline_STAR__temp_val__35560_35569,_STAR_print_fn_STAR__temp_val__35561_35570,sb__4661__auto__,G__35553,G__35553__$1,loc,class_name,simple_class,cause_type,format,map__35551,map__35551__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35549_SHARP_){
return cljs.core.dissoc.call(null,p1__35549_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35558_35567,_STAR_print_fn_STAR__orig_val__35559_35568,_STAR_print_newline_STAR__temp_val__35560_35569,_STAR_print_fn_STAR__temp_val__35561_35570,sb__4661__auto__,G__35553,G__35553__$1,loc,class_name,simple_class,cause_type,format,map__35551,map__35551__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35558_35567,_STAR_print_fn_STAR__orig_val__35559_35568,_STAR_print_newline_STAR__temp_val__35560_35569,_STAR_print_fn_STAR__temp_val__35561_35570,sb__4661__auto__,G__35553,G__35553__$1,loc,class_name,simple_class,cause_type,format,map__35551,map__35551__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35559_35568;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35558_35567;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35553__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1610304477109
