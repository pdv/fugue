// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35282){
var map__35283 = p__35282;
var map__35283__$1 = (((((!((map__35283 == null))))?(((((map__35283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35283):map__35283);
var m = map__35283__$1;
var n = cljs.core.get.call(null,map__35283__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35283__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35285_35317 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35286_35318 = null;
var count__35287_35319 = (0);
var i__35288_35320 = (0);
while(true){
if((i__35288_35320 < count__35287_35319)){
var f_35321 = cljs.core._nth.call(null,chunk__35286_35318,i__35288_35320);
cljs.core.println.call(null,"  ",f_35321);


var G__35322 = seq__35285_35317;
var G__35323 = chunk__35286_35318;
var G__35324 = count__35287_35319;
var G__35325 = (i__35288_35320 + (1));
seq__35285_35317 = G__35322;
chunk__35286_35318 = G__35323;
count__35287_35319 = G__35324;
i__35288_35320 = G__35325;
continue;
} else {
var temp__5720__auto___35326 = cljs.core.seq.call(null,seq__35285_35317);
if(temp__5720__auto___35326){
var seq__35285_35327__$1 = temp__5720__auto___35326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35285_35327__$1)){
var c__4550__auto___35328 = cljs.core.chunk_first.call(null,seq__35285_35327__$1);
var G__35329 = cljs.core.chunk_rest.call(null,seq__35285_35327__$1);
var G__35330 = c__4550__auto___35328;
var G__35331 = cljs.core.count.call(null,c__4550__auto___35328);
var G__35332 = (0);
seq__35285_35317 = G__35329;
chunk__35286_35318 = G__35330;
count__35287_35319 = G__35331;
i__35288_35320 = G__35332;
continue;
} else {
var f_35333 = cljs.core.first.call(null,seq__35285_35327__$1);
cljs.core.println.call(null,"  ",f_35333);


var G__35334 = cljs.core.next.call(null,seq__35285_35327__$1);
var G__35335 = null;
var G__35336 = (0);
var G__35337 = (0);
seq__35285_35317 = G__35334;
chunk__35286_35318 = G__35335;
count__35287_35319 = G__35336;
i__35288_35320 = G__35337;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35338 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35338);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35338)))?cljs.core.second.call(null,arglists_35338):arglists_35338));
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
var seq__35289_35339 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35290_35340 = null;
var count__35291_35341 = (0);
var i__35292_35342 = (0);
while(true){
if((i__35292_35342 < count__35291_35341)){
var vec__35303_35343 = cljs.core._nth.call(null,chunk__35290_35340,i__35292_35342);
var name_35344 = cljs.core.nth.call(null,vec__35303_35343,(0),null);
var map__35306_35345 = cljs.core.nth.call(null,vec__35303_35343,(1),null);
var map__35306_35346__$1 = (((((!((map__35306_35345 == null))))?(((((map__35306_35345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35306_35345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35306_35345):map__35306_35345);
var doc_35347 = cljs.core.get.call(null,map__35306_35346__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35348 = cljs.core.get.call(null,map__35306_35346__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35344);

cljs.core.println.call(null," ",arglists_35348);

if(cljs.core.truth_(doc_35347)){
cljs.core.println.call(null," ",doc_35347);
} else {
}


var G__35349 = seq__35289_35339;
var G__35350 = chunk__35290_35340;
var G__35351 = count__35291_35341;
var G__35352 = (i__35292_35342 + (1));
seq__35289_35339 = G__35349;
chunk__35290_35340 = G__35350;
count__35291_35341 = G__35351;
i__35292_35342 = G__35352;
continue;
} else {
var temp__5720__auto___35353 = cljs.core.seq.call(null,seq__35289_35339);
if(temp__5720__auto___35353){
var seq__35289_35354__$1 = temp__5720__auto___35353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35289_35354__$1)){
var c__4550__auto___35355 = cljs.core.chunk_first.call(null,seq__35289_35354__$1);
var G__35356 = cljs.core.chunk_rest.call(null,seq__35289_35354__$1);
var G__35357 = c__4550__auto___35355;
var G__35358 = cljs.core.count.call(null,c__4550__auto___35355);
var G__35359 = (0);
seq__35289_35339 = G__35356;
chunk__35290_35340 = G__35357;
count__35291_35341 = G__35358;
i__35292_35342 = G__35359;
continue;
} else {
var vec__35308_35360 = cljs.core.first.call(null,seq__35289_35354__$1);
var name_35361 = cljs.core.nth.call(null,vec__35308_35360,(0),null);
var map__35311_35362 = cljs.core.nth.call(null,vec__35308_35360,(1),null);
var map__35311_35363__$1 = (((((!((map__35311_35362 == null))))?(((((map__35311_35362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35311_35362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35311_35362):map__35311_35362);
var doc_35364 = cljs.core.get.call(null,map__35311_35363__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35365 = cljs.core.get.call(null,map__35311_35363__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35361);

cljs.core.println.call(null," ",arglists_35365);

if(cljs.core.truth_(doc_35364)){
cljs.core.println.call(null," ",doc_35364);
} else {
}


var G__35366 = cljs.core.next.call(null,seq__35289_35354__$1);
var G__35367 = null;
var G__35368 = (0);
var G__35369 = (0);
seq__35289_35339 = G__35366;
chunk__35290_35340 = G__35367;
count__35291_35341 = G__35368;
i__35292_35342 = G__35369;
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

var seq__35313 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35314 = null;
var count__35315 = (0);
var i__35316 = (0);
while(true){
if((i__35316 < count__35315)){
var role = cljs.core._nth.call(null,chunk__35314,i__35316);
var temp__5720__auto___35370__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35370__$1)){
var spec_35371 = temp__5720__auto___35370__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35371));
} else {
}


var G__35372 = seq__35313;
var G__35373 = chunk__35314;
var G__35374 = count__35315;
var G__35375 = (i__35316 + (1));
seq__35313 = G__35372;
chunk__35314 = G__35373;
count__35315 = G__35374;
i__35316 = G__35375;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__35313);
if(temp__5720__auto____$1){
var seq__35313__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35313__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35313__$1);
var G__35376 = cljs.core.chunk_rest.call(null,seq__35313__$1);
var G__35377 = c__4550__auto__;
var G__35378 = cljs.core.count.call(null,c__4550__auto__);
var G__35379 = (0);
seq__35313 = G__35376;
chunk__35314 = G__35377;
count__35315 = G__35378;
i__35316 = G__35379;
continue;
} else {
var role = cljs.core.first.call(null,seq__35313__$1);
var temp__5720__auto___35380__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35380__$2)){
var spec_35381 = temp__5720__auto___35380__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35381));
} else {
}


var G__35382 = cljs.core.next.call(null,seq__35313__$1);
var G__35383 = null;
var G__35384 = (0);
var G__35385 = (0);
seq__35313 = G__35382;
chunk__35314 = G__35383;
count__35315 = G__35384;
i__35316 = G__35385;
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
var G__35386 = cljs.core.conj.call(null,via,t);
var G__35387 = cljs.core.ex_cause.call(null,t);
via = G__35386;
t = G__35387;
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
var map__35390 = datafied_throwable;
var map__35390__$1 = (((((!((map__35390 == null))))?(((((map__35390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35390):map__35390);
var via = cljs.core.get.call(null,map__35390__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35390__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35390__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35391 = cljs.core.last.call(null,via);
var map__35391__$1 = (((((!((map__35391 == null))))?(((((map__35391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35391):map__35391);
var type = cljs.core.get.call(null,map__35391__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35391__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35391__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35392 = data;
var map__35392__$1 = (((((!((map__35392 == null))))?(((((map__35392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35392):map__35392);
var problems = cljs.core.get.call(null,map__35392__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35392__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35392__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35393 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35393__$1 = (((((!((map__35393 == null))))?(((((map__35393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35393):map__35393);
var top_data = map__35393__$1;
var source = cljs.core.get.call(null,map__35393__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35398 = phase;
var G__35398__$1 = (((G__35398 instanceof cljs.core.Keyword))?G__35398.fqn:null);
switch (G__35398__$1) {
case "read-source":
var map__35399 = data;
var map__35399__$1 = (((((!((map__35399 == null))))?(((((map__35399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35399):map__35399);
var line = cljs.core.get.call(null,map__35399__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35399__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35401 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35401__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35401,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35401);
var G__35401__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35401__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35401__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35401__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35401__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35402 = top_data;
var G__35402__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35402,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35402);
var G__35402__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35402__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35402__$1);
var G__35402__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35402__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35402__$2);
var G__35402__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35402__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35402__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35402__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35402__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35403 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35403,(0),null);
var method = cljs.core.nth.call(null,vec__35403,(1),null);
var file = cljs.core.nth.call(null,vec__35403,(2),null);
var line = cljs.core.nth.call(null,vec__35403,(3),null);
var G__35406 = top_data;
var G__35406__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35406,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35406);
var G__35406__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35406__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35406__$1);
var G__35406__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__35406__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35406__$2);
var G__35406__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35406__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35406__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35406__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35406__$4;
}

break;
case "execution":
var vec__35407 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35407,(0),null);
var method = cljs.core.nth.call(null,vec__35407,(1),null);
var file = cljs.core.nth.call(null,vec__35407,(2),null);
var line = cljs.core.nth.call(null,vec__35407,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__35407,source__$1,method,file,line,G__35398,G__35398__$1,map__35390,map__35390__$1,via,trace,phase,map__35391,map__35391__$1,type,message,data,map__35392,map__35392__$1,problems,fn,caller,map__35393,map__35393__$1,top_data,source){
return (function (p1__35389_SHARP_){
var or__4131__auto__ = (p1__35389_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35389_SHARP_);
}
});})(vec__35407,source__$1,method,file,line,G__35398,G__35398__$1,map__35390,map__35390__$1,via,trace,phase,map__35391,map__35391__$1,type,message,data,map__35392,map__35392__$1,problems,fn,caller,map__35393,map__35393__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__35410 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35410__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35410,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35410);
var G__35410__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35410__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35410__$1);
var G__35410__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__35410__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35410__$2);
var G__35410__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35410__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35410__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35410__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35410__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35398__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35414){
var map__35415 = p__35414;
var map__35415__$1 = (((((!((map__35415 == null))))?(((((map__35415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35415):map__35415);
var triage_data = map__35415__$1;
var phase = cljs.core.get.call(null,map__35415__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35415__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35415__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35415__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35415__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35415__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35415__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35415__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35417 = phase;
var G__35417__$1 = (((G__35417 instanceof cljs.core.Keyword))?G__35417.fqn:null);
switch (G__35417__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35418_35427 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35419_35428 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35420_35429 = true;
var _STAR_print_fn_STAR__temp_val__35421_35430 = ((function (_STAR_print_newline_STAR__orig_val__35418_35427,_STAR_print_fn_STAR__orig_val__35419_35428,_STAR_print_newline_STAR__temp_val__35420_35429,sb__4661__auto__,G__35417,G__35417__$1,loc,class_name,simple_class,cause_type,format,map__35415,map__35415__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35418_35427,_STAR_print_fn_STAR__orig_val__35419_35428,_STAR_print_newline_STAR__temp_val__35420_35429,sb__4661__auto__,G__35417,G__35417__$1,loc,class_name,simple_class,cause_type,format,map__35415,map__35415__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35420_35429;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35421_35430;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35418_35427,_STAR_print_fn_STAR__orig_val__35419_35428,_STAR_print_newline_STAR__temp_val__35420_35429,_STAR_print_fn_STAR__temp_val__35421_35430,sb__4661__auto__,G__35417,G__35417__$1,loc,class_name,simple_class,cause_type,format,map__35415,map__35415__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35418_35427,_STAR_print_fn_STAR__orig_val__35419_35428,_STAR_print_newline_STAR__temp_val__35420_35429,_STAR_print_fn_STAR__temp_val__35421_35430,sb__4661__auto__,G__35417,G__35417__$1,loc,class_name,simple_class,cause_type,format,map__35415,map__35415__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35412_SHARP_){
return cljs.core.dissoc.call(null,p1__35412_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35418_35427,_STAR_print_fn_STAR__orig_val__35419_35428,_STAR_print_newline_STAR__temp_val__35420_35429,_STAR_print_fn_STAR__temp_val__35421_35430,sb__4661__auto__,G__35417,G__35417__$1,loc,class_name,simple_class,cause_type,format,map__35415,map__35415__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35418_35427,_STAR_print_fn_STAR__orig_val__35419_35428,_STAR_print_newline_STAR__temp_val__35420_35429,_STAR_print_fn_STAR__temp_val__35421_35430,sb__4661__auto__,G__35417,G__35417__$1,loc,class_name,simple_class,cause_type,format,map__35415,map__35415__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35419_35428;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35418_35427;
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
var _STAR_print_newline_STAR__orig_val__35422_35431 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35423_35432 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35424_35433 = true;
var _STAR_print_fn_STAR__temp_val__35425_35434 = ((function (_STAR_print_newline_STAR__orig_val__35422_35431,_STAR_print_fn_STAR__orig_val__35423_35432,_STAR_print_newline_STAR__temp_val__35424_35433,sb__4661__auto__,G__35417,G__35417__$1,loc,class_name,simple_class,cause_type,format,map__35415,map__35415__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35422_35431,_STAR_print_fn_STAR__orig_val__35423_35432,_STAR_print_newline_STAR__temp_val__35424_35433,sb__4661__auto__,G__35417,G__35417__$1,loc,class_name,simple_class,cause_type,format,map__35415,map__35415__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35424_35433;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35425_35434;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35422_35431,_STAR_print_fn_STAR__orig_val__35423_35432,_STAR_print_newline_STAR__temp_val__35424_35433,_STAR_print_fn_STAR__temp_val__35425_35434,sb__4661__auto__,G__35417,G__35417__$1,loc,class_name,simple_class,cause_type,format,map__35415,map__35415__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35422_35431,_STAR_print_fn_STAR__orig_val__35423_35432,_STAR_print_newline_STAR__temp_val__35424_35433,_STAR_print_fn_STAR__temp_val__35425_35434,sb__4661__auto__,G__35417,G__35417__$1,loc,class_name,simple_class,cause_type,format,map__35415,map__35415__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35413_SHARP_){
return cljs.core.dissoc.call(null,p1__35413_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35422_35431,_STAR_print_fn_STAR__orig_val__35423_35432,_STAR_print_newline_STAR__temp_val__35424_35433,_STAR_print_fn_STAR__temp_val__35425_35434,sb__4661__auto__,G__35417,G__35417__$1,loc,class_name,simple_class,cause_type,format,map__35415,map__35415__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35422_35431,_STAR_print_fn_STAR__orig_val__35423_35432,_STAR_print_newline_STAR__temp_val__35424_35433,_STAR_print_fn_STAR__temp_val__35425_35434,sb__4661__auto__,G__35417,G__35417__$1,loc,class_name,simple_class,cause_type,format,map__35415,map__35415__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35423_35432;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35422_35431;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35417__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1610481569873
