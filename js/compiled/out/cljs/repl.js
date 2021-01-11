// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35375){
var map__35376 = p__35375;
var map__35376__$1 = (((((!((map__35376 == null))))?(((((map__35376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35376):map__35376);
var m = map__35376__$1;
var n = cljs.core.get.call(null,map__35376__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35376__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35378_35410 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35379_35411 = null;
var count__35380_35412 = (0);
var i__35381_35413 = (0);
while(true){
if((i__35381_35413 < count__35380_35412)){
var f_35414 = cljs.core._nth.call(null,chunk__35379_35411,i__35381_35413);
cljs.core.println.call(null,"  ",f_35414);


var G__35415 = seq__35378_35410;
var G__35416 = chunk__35379_35411;
var G__35417 = count__35380_35412;
var G__35418 = (i__35381_35413 + (1));
seq__35378_35410 = G__35415;
chunk__35379_35411 = G__35416;
count__35380_35412 = G__35417;
i__35381_35413 = G__35418;
continue;
} else {
var temp__5720__auto___35419 = cljs.core.seq.call(null,seq__35378_35410);
if(temp__5720__auto___35419){
var seq__35378_35420__$1 = temp__5720__auto___35419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35378_35420__$1)){
var c__4550__auto___35421 = cljs.core.chunk_first.call(null,seq__35378_35420__$1);
var G__35422 = cljs.core.chunk_rest.call(null,seq__35378_35420__$1);
var G__35423 = c__4550__auto___35421;
var G__35424 = cljs.core.count.call(null,c__4550__auto___35421);
var G__35425 = (0);
seq__35378_35410 = G__35422;
chunk__35379_35411 = G__35423;
count__35380_35412 = G__35424;
i__35381_35413 = G__35425;
continue;
} else {
var f_35426 = cljs.core.first.call(null,seq__35378_35420__$1);
cljs.core.println.call(null,"  ",f_35426);


var G__35427 = cljs.core.next.call(null,seq__35378_35420__$1);
var G__35428 = null;
var G__35429 = (0);
var G__35430 = (0);
seq__35378_35410 = G__35427;
chunk__35379_35411 = G__35428;
count__35380_35412 = G__35429;
i__35381_35413 = G__35430;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35431 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35431);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35431)))?cljs.core.second.call(null,arglists_35431):arglists_35431));
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
var seq__35382_35432 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35383_35433 = null;
var count__35384_35434 = (0);
var i__35385_35435 = (0);
while(true){
if((i__35385_35435 < count__35384_35434)){
var vec__35396_35436 = cljs.core._nth.call(null,chunk__35383_35433,i__35385_35435);
var name_35437 = cljs.core.nth.call(null,vec__35396_35436,(0),null);
var map__35399_35438 = cljs.core.nth.call(null,vec__35396_35436,(1),null);
var map__35399_35439__$1 = (((((!((map__35399_35438 == null))))?(((((map__35399_35438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35399_35438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35399_35438):map__35399_35438);
var doc_35440 = cljs.core.get.call(null,map__35399_35439__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35441 = cljs.core.get.call(null,map__35399_35439__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35437);

cljs.core.println.call(null," ",arglists_35441);

if(cljs.core.truth_(doc_35440)){
cljs.core.println.call(null," ",doc_35440);
} else {
}


var G__35442 = seq__35382_35432;
var G__35443 = chunk__35383_35433;
var G__35444 = count__35384_35434;
var G__35445 = (i__35385_35435 + (1));
seq__35382_35432 = G__35442;
chunk__35383_35433 = G__35443;
count__35384_35434 = G__35444;
i__35385_35435 = G__35445;
continue;
} else {
var temp__5720__auto___35446 = cljs.core.seq.call(null,seq__35382_35432);
if(temp__5720__auto___35446){
var seq__35382_35447__$1 = temp__5720__auto___35446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35382_35447__$1)){
var c__4550__auto___35448 = cljs.core.chunk_first.call(null,seq__35382_35447__$1);
var G__35449 = cljs.core.chunk_rest.call(null,seq__35382_35447__$1);
var G__35450 = c__4550__auto___35448;
var G__35451 = cljs.core.count.call(null,c__4550__auto___35448);
var G__35452 = (0);
seq__35382_35432 = G__35449;
chunk__35383_35433 = G__35450;
count__35384_35434 = G__35451;
i__35385_35435 = G__35452;
continue;
} else {
var vec__35401_35453 = cljs.core.first.call(null,seq__35382_35447__$1);
var name_35454 = cljs.core.nth.call(null,vec__35401_35453,(0),null);
var map__35404_35455 = cljs.core.nth.call(null,vec__35401_35453,(1),null);
var map__35404_35456__$1 = (((((!((map__35404_35455 == null))))?(((((map__35404_35455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35404_35455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35404_35455):map__35404_35455);
var doc_35457 = cljs.core.get.call(null,map__35404_35456__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35458 = cljs.core.get.call(null,map__35404_35456__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35454);

cljs.core.println.call(null," ",arglists_35458);

if(cljs.core.truth_(doc_35457)){
cljs.core.println.call(null," ",doc_35457);
} else {
}


var G__35459 = cljs.core.next.call(null,seq__35382_35447__$1);
var G__35460 = null;
var G__35461 = (0);
var G__35462 = (0);
seq__35382_35432 = G__35459;
chunk__35383_35433 = G__35460;
count__35384_35434 = G__35461;
i__35385_35435 = G__35462;
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

var seq__35406 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35407 = null;
var count__35408 = (0);
var i__35409 = (0);
while(true){
if((i__35409 < count__35408)){
var role = cljs.core._nth.call(null,chunk__35407,i__35409);
var temp__5720__auto___35463__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35463__$1)){
var spec_35464 = temp__5720__auto___35463__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35464));
} else {
}


var G__35465 = seq__35406;
var G__35466 = chunk__35407;
var G__35467 = count__35408;
var G__35468 = (i__35409 + (1));
seq__35406 = G__35465;
chunk__35407 = G__35466;
count__35408 = G__35467;
i__35409 = G__35468;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__35406);
if(temp__5720__auto____$1){
var seq__35406__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35406__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35406__$1);
var G__35469 = cljs.core.chunk_rest.call(null,seq__35406__$1);
var G__35470 = c__4550__auto__;
var G__35471 = cljs.core.count.call(null,c__4550__auto__);
var G__35472 = (0);
seq__35406 = G__35469;
chunk__35407 = G__35470;
count__35408 = G__35471;
i__35409 = G__35472;
continue;
} else {
var role = cljs.core.first.call(null,seq__35406__$1);
var temp__5720__auto___35473__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35473__$2)){
var spec_35474 = temp__5720__auto___35473__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35474));
} else {
}


var G__35475 = cljs.core.next.call(null,seq__35406__$1);
var G__35476 = null;
var G__35477 = (0);
var G__35478 = (0);
seq__35406 = G__35475;
chunk__35407 = G__35476;
count__35408 = G__35477;
i__35409 = G__35478;
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
var G__35479 = cljs.core.conj.call(null,via,t);
var G__35480 = cljs.core.ex_cause.call(null,t);
via = G__35479;
t = G__35480;
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
var map__35483 = datafied_throwable;
var map__35483__$1 = (((((!((map__35483 == null))))?(((((map__35483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35483):map__35483);
var via = cljs.core.get.call(null,map__35483__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35483__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35483__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35484 = cljs.core.last.call(null,via);
var map__35484__$1 = (((((!((map__35484 == null))))?(((((map__35484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35484):map__35484);
var type = cljs.core.get.call(null,map__35484__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35484__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35484__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35485 = data;
var map__35485__$1 = (((((!((map__35485 == null))))?(((((map__35485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35485):map__35485);
var problems = cljs.core.get.call(null,map__35485__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35485__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35485__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35486 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35486__$1 = (((((!((map__35486 == null))))?(((((map__35486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35486):map__35486);
var top_data = map__35486__$1;
var source = cljs.core.get.call(null,map__35486__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35491 = phase;
var G__35491__$1 = (((G__35491 instanceof cljs.core.Keyword))?G__35491.fqn:null);
switch (G__35491__$1) {
case "read-source":
var map__35492 = data;
var map__35492__$1 = (((((!((map__35492 == null))))?(((((map__35492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35492):map__35492);
var line = cljs.core.get.call(null,map__35492__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35492__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35494 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35494__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35494,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35494);
var G__35494__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35494__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35494__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35494__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35494__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35495 = top_data;
var G__35495__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35495,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35495);
var G__35495__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35495__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35495__$1);
var G__35495__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35495__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35495__$2);
var G__35495__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35495__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35495__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35495__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35495__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35496 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35496,(0),null);
var method = cljs.core.nth.call(null,vec__35496,(1),null);
var file = cljs.core.nth.call(null,vec__35496,(2),null);
var line = cljs.core.nth.call(null,vec__35496,(3),null);
var G__35499 = top_data;
var G__35499__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35499,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35499);
var G__35499__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35499__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35499__$1);
var G__35499__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__35499__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35499__$2);
var G__35499__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35499__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35499__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35499__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35499__$4;
}

break;
case "execution":
var vec__35500 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35500,(0),null);
var method = cljs.core.nth.call(null,vec__35500,(1),null);
var file = cljs.core.nth.call(null,vec__35500,(2),null);
var line = cljs.core.nth.call(null,vec__35500,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__35500,source__$1,method,file,line,G__35491,G__35491__$1,map__35483,map__35483__$1,via,trace,phase,map__35484,map__35484__$1,type,message,data,map__35485,map__35485__$1,problems,fn,caller,map__35486,map__35486__$1,top_data,source){
return (function (p1__35482_SHARP_){
var or__4131__auto__ = (p1__35482_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35482_SHARP_);
}
});})(vec__35500,source__$1,method,file,line,G__35491,G__35491__$1,map__35483,map__35483__$1,via,trace,phase,map__35484,map__35484__$1,type,message,data,map__35485,map__35485__$1,problems,fn,caller,map__35486,map__35486__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__35503 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35503__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35503,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35503);
var G__35503__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35503__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35503__$1);
var G__35503__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__35503__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35503__$2);
var G__35503__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35503__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35503__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35503__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35503__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35491__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35507){
var map__35508 = p__35507;
var map__35508__$1 = (((((!((map__35508 == null))))?(((((map__35508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35508):map__35508);
var triage_data = map__35508__$1;
var phase = cljs.core.get.call(null,map__35508__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35508__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35508__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35508__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35508__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35508__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35508__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35508__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35510 = phase;
var G__35510__$1 = (((G__35510 instanceof cljs.core.Keyword))?G__35510.fqn:null);
switch (G__35510__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35511_35520 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35512_35521 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35513_35522 = true;
var _STAR_print_fn_STAR__temp_val__35514_35523 = ((function (_STAR_print_newline_STAR__orig_val__35511_35520,_STAR_print_fn_STAR__orig_val__35512_35521,_STAR_print_newline_STAR__temp_val__35513_35522,sb__4661__auto__,G__35510,G__35510__$1,loc,class_name,simple_class,cause_type,format,map__35508,map__35508__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35511_35520,_STAR_print_fn_STAR__orig_val__35512_35521,_STAR_print_newline_STAR__temp_val__35513_35522,sb__4661__auto__,G__35510,G__35510__$1,loc,class_name,simple_class,cause_type,format,map__35508,map__35508__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35513_35522;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35514_35523;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35511_35520,_STAR_print_fn_STAR__orig_val__35512_35521,_STAR_print_newline_STAR__temp_val__35513_35522,_STAR_print_fn_STAR__temp_val__35514_35523,sb__4661__auto__,G__35510,G__35510__$1,loc,class_name,simple_class,cause_type,format,map__35508,map__35508__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35511_35520,_STAR_print_fn_STAR__orig_val__35512_35521,_STAR_print_newline_STAR__temp_val__35513_35522,_STAR_print_fn_STAR__temp_val__35514_35523,sb__4661__auto__,G__35510,G__35510__$1,loc,class_name,simple_class,cause_type,format,map__35508,map__35508__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35505_SHARP_){
return cljs.core.dissoc.call(null,p1__35505_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35511_35520,_STAR_print_fn_STAR__orig_val__35512_35521,_STAR_print_newline_STAR__temp_val__35513_35522,_STAR_print_fn_STAR__temp_val__35514_35523,sb__4661__auto__,G__35510,G__35510__$1,loc,class_name,simple_class,cause_type,format,map__35508,map__35508__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35511_35520,_STAR_print_fn_STAR__orig_val__35512_35521,_STAR_print_newline_STAR__temp_val__35513_35522,_STAR_print_fn_STAR__temp_val__35514_35523,sb__4661__auto__,G__35510,G__35510__$1,loc,class_name,simple_class,cause_type,format,map__35508,map__35508__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35512_35521;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35511_35520;
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
var _STAR_print_newline_STAR__orig_val__35515_35524 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35516_35525 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35517_35526 = true;
var _STAR_print_fn_STAR__temp_val__35518_35527 = ((function (_STAR_print_newline_STAR__orig_val__35515_35524,_STAR_print_fn_STAR__orig_val__35516_35525,_STAR_print_newline_STAR__temp_val__35517_35526,sb__4661__auto__,G__35510,G__35510__$1,loc,class_name,simple_class,cause_type,format,map__35508,map__35508__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35515_35524,_STAR_print_fn_STAR__orig_val__35516_35525,_STAR_print_newline_STAR__temp_val__35517_35526,sb__4661__auto__,G__35510,G__35510__$1,loc,class_name,simple_class,cause_type,format,map__35508,map__35508__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35517_35526;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35518_35527;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35515_35524,_STAR_print_fn_STAR__orig_val__35516_35525,_STAR_print_newline_STAR__temp_val__35517_35526,_STAR_print_fn_STAR__temp_val__35518_35527,sb__4661__auto__,G__35510,G__35510__$1,loc,class_name,simple_class,cause_type,format,map__35508,map__35508__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35515_35524,_STAR_print_fn_STAR__orig_val__35516_35525,_STAR_print_newline_STAR__temp_val__35517_35526,_STAR_print_fn_STAR__temp_val__35518_35527,sb__4661__auto__,G__35510,G__35510__$1,loc,class_name,simple_class,cause_type,format,map__35508,map__35508__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35506_SHARP_){
return cljs.core.dissoc.call(null,p1__35506_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35515_35524,_STAR_print_fn_STAR__orig_val__35516_35525,_STAR_print_newline_STAR__temp_val__35517_35526,_STAR_print_fn_STAR__temp_val__35518_35527,sb__4661__auto__,G__35510,G__35510__$1,loc,class_name,simple_class,cause_type,format,map__35508,map__35508__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35515_35524,_STAR_print_fn_STAR__orig_val__35516_35525,_STAR_print_newline_STAR__temp_val__35517_35526,_STAR_print_fn_STAR__temp_val__35518_35527,sb__4661__auto__,G__35510,G__35510__$1,loc,class_name,simple_class,cause_type,format,map__35508,map__35508__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35516_35525;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35515_35524;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35510__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1610334750786
