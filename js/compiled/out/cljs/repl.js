// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15397){
var map__15398 = p__15397;
var map__15398__$1 = (((((!((map__15398 == null))))?(((((map__15398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15398):map__15398);
var m = map__15398__$1;
var n = cljs.core.get.call(null,map__15398__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__15398__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__15400_15432 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15401_15433 = null;
var count__15402_15434 = (0);
var i__15403_15435 = (0);
while(true){
if((i__15403_15435 < count__15402_15434)){
var f_15436 = cljs.core._nth.call(null,chunk__15401_15433,i__15403_15435);
cljs.core.println.call(null,"  ",f_15436);


var G__15437 = seq__15400_15432;
var G__15438 = chunk__15401_15433;
var G__15439 = count__15402_15434;
var G__15440 = (i__15403_15435 + (1));
seq__15400_15432 = G__15437;
chunk__15401_15433 = G__15438;
count__15402_15434 = G__15439;
i__15403_15435 = G__15440;
continue;
} else {
var temp__5720__auto___15441 = cljs.core.seq.call(null,seq__15400_15432);
if(temp__5720__auto___15441){
var seq__15400_15442__$1 = temp__5720__auto___15441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15400_15442__$1)){
var c__4550__auto___15443 = cljs.core.chunk_first.call(null,seq__15400_15442__$1);
var G__15444 = cljs.core.chunk_rest.call(null,seq__15400_15442__$1);
var G__15445 = c__4550__auto___15443;
var G__15446 = cljs.core.count.call(null,c__4550__auto___15443);
var G__15447 = (0);
seq__15400_15432 = G__15444;
chunk__15401_15433 = G__15445;
count__15402_15434 = G__15446;
i__15403_15435 = G__15447;
continue;
} else {
var f_15448 = cljs.core.first.call(null,seq__15400_15442__$1);
cljs.core.println.call(null,"  ",f_15448);


var G__15449 = cljs.core.next.call(null,seq__15400_15442__$1);
var G__15450 = null;
var G__15451 = (0);
var G__15452 = (0);
seq__15400_15432 = G__15449;
chunk__15401_15433 = G__15450;
count__15402_15434 = G__15451;
i__15403_15435 = G__15452;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15453 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_15453);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_15453)))?cljs.core.second.call(null,arglists_15453):arglists_15453));
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
var seq__15404_15454 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15405_15455 = null;
var count__15406_15456 = (0);
var i__15407_15457 = (0);
while(true){
if((i__15407_15457 < count__15406_15456)){
var vec__15418_15458 = cljs.core._nth.call(null,chunk__15405_15455,i__15407_15457);
var name_15459 = cljs.core.nth.call(null,vec__15418_15458,(0),null);
var map__15421_15460 = cljs.core.nth.call(null,vec__15418_15458,(1),null);
var map__15421_15461__$1 = (((((!((map__15421_15460 == null))))?(((((map__15421_15460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15421_15460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15421_15460):map__15421_15460);
var doc_15462 = cljs.core.get.call(null,map__15421_15461__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15463 = cljs.core.get.call(null,map__15421_15461__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15459);

cljs.core.println.call(null," ",arglists_15463);

if(cljs.core.truth_(doc_15462)){
cljs.core.println.call(null," ",doc_15462);
} else {
}


var G__15464 = seq__15404_15454;
var G__15465 = chunk__15405_15455;
var G__15466 = count__15406_15456;
var G__15467 = (i__15407_15457 + (1));
seq__15404_15454 = G__15464;
chunk__15405_15455 = G__15465;
count__15406_15456 = G__15466;
i__15407_15457 = G__15467;
continue;
} else {
var temp__5720__auto___15468 = cljs.core.seq.call(null,seq__15404_15454);
if(temp__5720__auto___15468){
var seq__15404_15469__$1 = temp__5720__auto___15468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15404_15469__$1)){
var c__4550__auto___15470 = cljs.core.chunk_first.call(null,seq__15404_15469__$1);
var G__15471 = cljs.core.chunk_rest.call(null,seq__15404_15469__$1);
var G__15472 = c__4550__auto___15470;
var G__15473 = cljs.core.count.call(null,c__4550__auto___15470);
var G__15474 = (0);
seq__15404_15454 = G__15471;
chunk__15405_15455 = G__15472;
count__15406_15456 = G__15473;
i__15407_15457 = G__15474;
continue;
} else {
var vec__15423_15475 = cljs.core.first.call(null,seq__15404_15469__$1);
var name_15476 = cljs.core.nth.call(null,vec__15423_15475,(0),null);
var map__15426_15477 = cljs.core.nth.call(null,vec__15423_15475,(1),null);
var map__15426_15478__$1 = (((((!((map__15426_15477 == null))))?(((((map__15426_15477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15426_15477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15426_15477):map__15426_15477);
var doc_15479 = cljs.core.get.call(null,map__15426_15478__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15480 = cljs.core.get.call(null,map__15426_15478__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15476);

cljs.core.println.call(null," ",arglists_15480);

if(cljs.core.truth_(doc_15479)){
cljs.core.println.call(null," ",doc_15479);
} else {
}


var G__15481 = cljs.core.next.call(null,seq__15404_15469__$1);
var G__15482 = null;
var G__15483 = (0);
var G__15484 = (0);
seq__15404_15454 = G__15481;
chunk__15405_15455 = G__15482;
count__15406_15456 = G__15483;
i__15407_15457 = G__15484;
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

var seq__15428 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15429 = null;
var count__15430 = (0);
var i__15431 = (0);
while(true){
if((i__15431 < count__15430)){
var role = cljs.core._nth.call(null,chunk__15429,i__15431);
var temp__5720__auto___15485__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___15485__$1)){
var spec_15486 = temp__5720__auto___15485__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_15486));
} else {
}


var G__15487 = seq__15428;
var G__15488 = chunk__15429;
var G__15489 = count__15430;
var G__15490 = (i__15431 + (1));
seq__15428 = G__15487;
chunk__15429 = G__15488;
count__15430 = G__15489;
i__15431 = G__15490;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__15428);
if(temp__5720__auto____$1){
var seq__15428__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15428__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15428__$1);
var G__15491 = cljs.core.chunk_rest.call(null,seq__15428__$1);
var G__15492 = c__4550__auto__;
var G__15493 = cljs.core.count.call(null,c__4550__auto__);
var G__15494 = (0);
seq__15428 = G__15491;
chunk__15429 = G__15492;
count__15430 = G__15493;
i__15431 = G__15494;
continue;
} else {
var role = cljs.core.first.call(null,seq__15428__$1);
var temp__5720__auto___15495__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___15495__$2)){
var spec_15496 = temp__5720__auto___15495__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_15496));
} else {
}


var G__15497 = cljs.core.next.call(null,seq__15428__$1);
var G__15498 = null;
var G__15499 = (0);
var G__15500 = (0);
seq__15428 = G__15497;
chunk__15429 = G__15498;
count__15430 = G__15499;
i__15431 = G__15500;
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
var G__15501 = cljs.core.conj.call(null,via,t);
var G__15502 = cljs.core.ex_cause.call(null,t);
via = G__15501;
t = G__15502;
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
var map__15505 = datafied_throwable;
var map__15505__$1 = (((((!((map__15505 == null))))?(((((map__15505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15505):map__15505);
var via = cljs.core.get.call(null,map__15505__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__15505__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__15505__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__15506 = cljs.core.last.call(null,via);
var map__15506__$1 = (((((!((map__15506 == null))))?(((((map__15506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15506):map__15506);
var type = cljs.core.get.call(null,map__15506__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__15506__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__15506__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__15507 = data;
var map__15507__$1 = (((((!((map__15507 == null))))?(((((map__15507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15507):map__15507);
var problems = cljs.core.get.call(null,map__15507__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__15507__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__15507__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__15508 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__15508__$1 = (((((!((map__15508 == null))))?(((((map__15508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15508):map__15508);
var top_data = map__15508__$1;
var source = cljs.core.get.call(null,map__15508__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__15513 = phase;
var G__15513__$1 = (((G__15513 instanceof cljs.core.Keyword))?G__15513.fqn:null);
switch (G__15513__$1) {
case "read-source":
var map__15514 = data;
var map__15514__$1 = (((((!((map__15514 == null))))?(((((map__15514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15514):map__15514);
var line = cljs.core.get.call(null,map__15514__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__15514__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__15516 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__15516__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__15516,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15516);
var G__15516__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__15516__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15516__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__15516__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15516__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__15517 = top_data;
var G__15517__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__15517,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15517);
var G__15517__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__15517__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15517__$1);
var G__15517__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__15517__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15517__$2);
var G__15517__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__15517__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15517__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__15517__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15517__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__15518 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__15518,(0),null);
var method = cljs.core.nth.call(null,vec__15518,(1),null);
var file = cljs.core.nth.call(null,vec__15518,(2),null);
var line = cljs.core.nth.call(null,vec__15518,(3),null);
var G__15521 = top_data;
var G__15521__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__15521,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__15521);
var G__15521__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__15521__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__15521__$1);
var G__15521__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__15521__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__15521__$2);
var G__15521__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__15521__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15521__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__15521__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15521__$4;
}

break;
case "execution":
var vec__15522 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__15522,(0),null);
var method = cljs.core.nth.call(null,vec__15522,(1),null);
var file = cljs.core.nth.call(null,vec__15522,(2),null);
var line = cljs.core.nth.call(null,vec__15522,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__15522,source__$1,method,file,line,G__15513,G__15513__$1,map__15505,map__15505__$1,via,trace,phase,map__15506,map__15506__$1,type,message,data,map__15507,map__15507__$1,problems,fn,caller,map__15508,map__15508__$1,top_data,source){
return (function (p1__15504_SHARP_){
var or__4131__auto__ = (p1__15504_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__15504_SHARP_);
}
});})(vec__15522,source__$1,method,file,line,G__15513,G__15513__$1,map__15505,map__15505__$1,via,trace,phase,map__15506,map__15506__$1,type,message,data,map__15507,map__15507__$1,problems,fn,caller,map__15508,map__15508__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__15525 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__15525__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__15525,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__15525);
var G__15525__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__15525__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15525__$1);
var G__15525__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__15525__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__15525__$2);
var G__15525__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__15525__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__15525__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__15525__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15525__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15513__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__15529){
var map__15530 = p__15529;
var map__15530__$1 = (((((!((map__15530 == null))))?(((((map__15530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15530):map__15530);
var triage_data = map__15530__$1;
var phase = cljs.core.get.call(null,map__15530__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__15530__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__15530__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__15530__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__15530__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__15530__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__15530__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__15530__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__15532 = phase;
var G__15532__$1 = (((G__15532 instanceof cljs.core.Keyword))?G__15532.fqn:null);
switch (G__15532__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15533_15542 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15534_15543 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15535_15544 = true;
var _STAR_print_fn_STAR__temp_val__15536_15545 = ((function (_STAR_print_newline_STAR__orig_val__15533_15542,_STAR_print_fn_STAR__orig_val__15534_15543,_STAR_print_newline_STAR__temp_val__15535_15544,sb__4661__auto__,G__15532,G__15532__$1,loc,class_name,simple_class,cause_type,format,map__15530,map__15530__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15533_15542,_STAR_print_fn_STAR__orig_val__15534_15543,_STAR_print_newline_STAR__temp_val__15535_15544,sb__4661__auto__,G__15532,G__15532__$1,loc,class_name,simple_class,cause_type,format,map__15530,map__15530__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15535_15544;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15536_15545;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__15533_15542,_STAR_print_fn_STAR__orig_val__15534_15543,_STAR_print_newline_STAR__temp_val__15535_15544,_STAR_print_fn_STAR__temp_val__15536_15545,sb__4661__auto__,G__15532,G__15532__$1,loc,class_name,simple_class,cause_type,format,map__15530,map__15530__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__15533_15542,_STAR_print_fn_STAR__orig_val__15534_15543,_STAR_print_newline_STAR__temp_val__15535_15544,_STAR_print_fn_STAR__temp_val__15536_15545,sb__4661__auto__,G__15532,G__15532__$1,loc,class_name,simple_class,cause_type,format,map__15530,map__15530__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__15527_SHARP_){
return cljs.core.dissoc.call(null,p1__15527_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__15533_15542,_STAR_print_fn_STAR__orig_val__15534_15543,_STAR_print_newline_STAR__temp_val__15535_15544,_STAR_print_fn_STAR__temp_val__15536_15545,sb__4661__auto__,G__15532,G__15532__$1,loc,class_name,simple_class,cause_type,format,map__15530,map__15530__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__15533_15542,_STAR_print_fn_STAR__orig_val__15534_15543,_STAR_print_newline_STAR__temp_val__15535_15544,_STAR_print_fn_STAR__temp_val__15536_15545,sb__4661__auto__,G__15532,G__15532__$1,loc,class_name,simple_class,cause_type,format,map__15530,map__15530__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15534_15543;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15533_15542;
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
var _STAR_print_newline_STAR__orig_val__15537_15546 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15538_15547 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15539_15548 = true;
var _STAR_print_fn_STAR__temp_val__15540_15549 = ((function (_STAR_print_newline_STAR__orig_val__15537_15546,_STAR_print_fn_STAR__orig_val__15538_15547,_STAR_print_newline_STAR__temp_val__15539_15548,sb__4661__auto__,G__15532,G__15532__$1,loc,class_name,simple_class,cause_type,format,map__15530,map__15530__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15537_15546,_STAR_print_fn_STAR__orig_val__15538_15547,_STAR_print_newline_STAR__temp_val__15539_15548,sb__4661__auto__,G__15532,G__15532__$1,loc,class_name,simple_class,cause_type,format,map__15530,map__15530__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15539_15548;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15540_15549;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__15537_15546,_STAR_print_fn_STAR__orig_val__15538_15547,_STAR_print_newline_STAR__temp_val__15539_15548,_STAR_print_fn_STAR__temp_val__15540_15549,sb__4661__auto__,G__15532,G__15532__$1,loc,class_name,simple_class,cause_type,format,map__15530,map__15530__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__15537_15546,_STAR_print_fn_STAR__orig_val__15538_15547,_STAR_print_newline_STAR__temp_val__15539_15548,_STAR_print_fn_STAR__temp_val__15540_15549,sb__4661__auto__,G__15532,G__15532__$1,loc,class_name,simple_class,cause_type,format,map__15530,map__15530__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__15528_SHARP_){
return cljs.core.dissoc.call(null,p1__15528_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__15537_15546,_STAR_print_fn_STAR__orig_val__15538_15547,_STAR_print_newline_STAR__temp_val__15539_15548,_STAR_print_fn_STAR__temp_val__15540_15549,sb__4661__auto__,G__15532,G__15532__$1,loc,class_name,simple_class,cause_type,format,map__15530,map__15530__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__15537_15546,_STAR_print_fn_STAR__orig_val__15538_15547,_STAR_print_newline_STAR__temp_val__15539_15548,_STAR_print_fn_STAR__temp_val__15540_15549,sb__4661__auto__,G__15532,G__15532__$1,loc,class_name,simple_class,cause_type,format,map__15530,map__15530__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15538_15547;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15537_15546;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15532__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1611089346229
