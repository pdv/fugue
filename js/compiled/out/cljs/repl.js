// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35240){
var map__35241 = p__35240;
var map__35241__$1 = (((((!((map__35241 == null))))?(((((map__35241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35241):map__35241);
var m = map__35241__$1;
var n = cljs.core.get.call(null,map__35241__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35241__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35243_35275 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35244_35276 = null;
var count__35245_35277 = (0);
var i__35246_35278 = (0);
while(true){
if((i__35246_35278 < count__35245_35277)){
var f_35279 = cljs.core._nth.call(null,chunk__35244_35276,i__35246_35278);
cljs.core.println.call(null,"  ",f_35279);


var G__35280 = seq__35243_35275;
var G__35281 = chunk__35244_35276;
var G__35282 = count__35245_35277;
var G__35283 = (i__35246_35278 + (1));
seq__35243_35275 = G__35280;
chunk__35244_35276 = G__35281;
count__35245_35277 = G__35282;
i__35246_35278 = G__35283;
continue;
} else {
var temp__5720__auto___35284 = cljs.core.seq.call(null,seq__35243_35275);
if(temp__5720__auto___35284){
var seq__35243_35285__$1 = temp__5720__auto___35284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35243_35285__$1)){
var c__4550__auto___35286 = cljs.core.chunk_first.call(null,seq__35243_35285__$1);
var G__35287 = cljs.core.chunk_rest.call(null,seq__35243_35285__$1);
var G__35288 = c__4550__auto___35286;
var G__35289 = cljs.core.count.call(null,c__4550__auto___35286);
var G__35290 = (0);
seq__35243_35275 = G__35287;
chunk__35244_35276 = G__35288;
count__35245_35277 = G__35289;
i__35246_35278 = G__35290;
continue;
} else {
var f_35291 = cljs.core.first.call(null,seq__35243_35285__$1);
cljs.core.println.call(null,"  ",f_35291);


var G__35292 = cljs.core.next.call(null,seq__35243_35285__$1);
var G__35293 = null;
var G__35294 = (0);
var G__35295 = (0);
seq__35243_35275 = G__35292;
chunk__35244_35276 = G__35293;
count__35245_35277 = G__35294;
i__35246_35278 = G__35295;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35296 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35296);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35296)))?cljs.core.second.call(null,arglists_35296):arglists_35296));
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
var seq__35247_35297 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35248_35298 = null;
var count__35249_35299 = (0);
var i__35250_35300 = (0);
while(true){
if((i__35250_35300 < count__35249_35299)){
var vec__35261_35301 = cljs.core._nth.call(null,chunk__35248_35298,i__35250_35300);
var name_35302 = cljs.core.nth.call(null,vec__35261_35301,(0),null);
var map__35264_35303 = cljs.core.nth.call(null,vec__35261_35301,(1),null);
var map__35264_35304__$1 = (((((!((map__35264_35303 == null))))?(((((map__35264_35303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35264_35303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35264_35303):map__35264_35303);
var doc_35305 = cljs.core.get.call(null,map__35264_35304__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35306 = cljs.core.get.call(null,map__35264_35304__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35302);

cljs.core.println.call(null," ",arglists_35306);

if(cljs.core.truth_(doc_35305)){
cljs.core.println.call(null," ",doc_35305);
} else {
}


var G__35307 = seq__35247_35297;
var G__35308 = chunk__35248_35298;
var G__35309 = count__35249_35299;
var G__35310 = (i__35250_35300 + (1));
seq__35247_35297 = G__35307;
chunk__35248_35298 = G__35308;
count__35249_35299 = G__35309;
i__35250_35300 = G__35310;
continue;
} else {
var temp__5720__auto___35311 = cljs.core.seq.call(null,seq__35247_35297);
if(temp__5720__auto___35311){
var seq__35247_35312__$1 = temp__5720__auto___35311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35247_35312__$1)){
var c__4550__auto___35313 = cljs.core.chunk_first.call(null,seq__35247_35312__$1);
var G__35314 = cljs.core.chunk_rest.call(null,seq__35247_35312__$1);
var G__35315 = c__4550__auto___35313;
var G__35316 = cljs.core.count.call(null,c__4550__auto___35313);
var G__35317 = (0);
seq__35247_35297 = G__35314;
chunk__35248_35298 = G__35315;
count__35249_35299 = G__35316;
i__35250_35300 = G__35317;
continue;
} else {
var vec__35266_35318 = cljs.core.first.call(null,seq__35247_35312__$1);
var name_35319 = cljs.core.nth.call(null,vec__35266_35318,(0),null);
var map__35269_35320 = cljs.core.nth.call(null,vec__35266_35318,(1),null);
var map__35269_35321__$1 = (((((!((map__35269_35320 == null))))?(((((map__35269_35320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35269_35320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35269_35320):map__35269_35320);
var doc_35322 = cljs.core.get.call(null,map__35269_35321__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35323 = cljs.core.get.call(null,map__35269_35321__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35319);

cljs.core.println.call(null," ",arglists_35323);

if(cljs.core.truth_(doc_35322)){
cljs.core.println.call(null," ",doc_35322);
} else {
}


var G__35324 = cljs.core.next.call(null,seq__35247_35312__$1);
var G__35325 = null;
var G__35326 = (0);
var G__35327 = (0);
seq__35247_35297 = G__35324;
chunk__35248_35298 = G__35325;
count__35249_35299 = G__35326;
i__35250_35300 = G__35327;
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

var seq__35271 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35272 = null;
var count__35273 = (0);
var i__35274 = (0);
while(true){
if((i__35274 < count__35273)){
var role = cljs.core._nth.call(null,chunk__35272,i__35274);
var temp__5720__auto___35328__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35328__$1)){
var spec_35329 = temp__5720__auto___35328__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35329));
} else {
}


var G__35330 = seq__35271;
var G__35331 = chunk__35272;
var G__35332 = count__35273;
var G__35333 = (i__35274 + (1));
seq__35271 = G__35330;
chunk__35272 = G__35331;
count__35273 = G__35332;
i__35274 = G__35333;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__35271);
if(temp__5720__auto____$1){
var seq__35271__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35271__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35271__$1);
var G__35334 = cljs.core.chunk_rest.call(null,seq__35271__$1);
var G__35335 = c__4550__auto__;
var G__35336 = cljs.core.count.call(null,c__4550__auto__);
var G__35337 = (0);
seq__35271 = G__35334;
chunk__35272 = G__35335;
count__35273 = G__35336;
i__35274 = G__35337;
continue;
} else {
var role = cljs.core.first.call(null,seq__35271__$1);
var temp__5720__auto___35338__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35338__$2)){
var spec_35339 = temp__5720__auto___35338__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35339));
} else {
}


var G__35340 = cljs.core.next.call(null,seq__35271__$1);
var G__35341 = null;
var G__35342 = (0);
var G__35343 = (0);
seq__35271 = G__35340;
chunk__35272 = G__35341;
count__35273 = G__35342;
i__35274 = G__35343;
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
var G__35344 = cljs.core.conj.call(null,via,t);
var G__35345 = cljs.core.ex_cause.call(null,t);
via = G__35344;
t = G__35345;
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
var map__35348 = datafied_throwable;
var map__35348__$1 = (((((!((map__35348 == null))))?(((((map__35348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35348):map__35348);
var via = cljs.core.get.call(null,map__35348__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35348__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35348__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35349 = cljs.core.last.call(null,via);
var map__35349__$1 = (((((!((map__35349 == null))))?(((((map__35349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35349):map__35349);
var type = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35349__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35350 = data;
var map__35350__$1 = (((((!((map__35350 == null))))?(((((map__35350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35350):map__35350);
var problems = cljs.core.get.call(null,map__35350__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35350__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35350__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35351 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35351__$1 = (((((!((map__35351 == null))))?(((((map__35351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35351):map__35351);
var top_data = map__35351__$1;
var source = cljs.core.get.call(null,map__35351__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35356 = phase;
var G__35356__$1 = (((G__35356 instanceof cljs.core.Keyword))?G__35356.fqn:null);
switch (G__35356__$1) {
case "read-source":
var map__35357 = data;
var map__35357__$1 = (((((!((map__35357 == null))))?(((((map__35357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35357):map__35357);
var line = cljs.core.get.call(null,map__35357__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35357__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35359 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35359__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35359,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35359);
var G__35359__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35359__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35359__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35359__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35359__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35360 = top_data;
var G__35360__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35360,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35360);
var G__35360__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35360__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35360__$1);
var G__35360__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35360__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35360__$2);
var G__35360__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35360__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35360__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35360__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35360__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35361 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35361,(0),null);
var method = cljs.core.nth.call(null,vec__35361,(1),null);
var file = cljs.core.nth.call(null,vec__35361,(2),null);
var line = cljs.core.nth.call(null,vec__35361,(3),null);
var G__35364 = top_data;
var G__35364__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35364,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35364);
var G__35364__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35364__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35364__$1);
var G__35364__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__35364__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35364__$2);
var G__35364__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35364__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35364__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35364__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35364__$4;
}

break;
case "execution":
var vec__35365 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35365,(0),null);
var method = cljs.core.nth.call(null,vec__35365,(1),null);
var file = cljs.core.nth.call(null,vec__35365,(2),null);
var line = cljs.core.nth.call(null,vec__35365,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__35365,source__$1,method,file,line,G__35356,G__35356__$1,map__35348,map__35348__$1,via,trace,phase,map__35349,map__35349__$1,type,message,data,map__35350,map__35350__$1,problems,fn,caller,map__35351,map__35351__$1,top_data,source){
return (function (p1__35347_SHARP_){
var or__4131__auto__ = (p1__35347_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35347_SHARP_);
}
});})(vec__35365,source__$1,method,file,line,G__35356,G__35356__$1,map__35348,map__35348__$1,via,trace,phase,map__35349,map__35349__$1,type,message,data,map__35350,map__35350__$1,problems,fn,caller,map__35351,map__35351__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__35368 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35368__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35368,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35368);
var G__35368__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35368__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35368__$1);
var G__35368__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__35368__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35368__$2);
var G__35368__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35368__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35368__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35368__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35368__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35356__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35372){
var map__35373 = p__35372;
var map__35373__$1 = (((((!((map__35373 == null))))?(((((map__35373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35373):map__35373);
var triage_data = map__35373__$1;
var phase = cljs.core.get.call(null,map__35373__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35373__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35373__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35373__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35373__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35373__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35373__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35373__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35375 = phase;
var G__35375__$1 = (((G__35375 instanceof cljs.core.Keyword))?G__35375.fqn:null);
switch (G__35375__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35376_35385 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35377_35386 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35378_35387 = true;
var _STAR_print_fn_STAR__temp_val__35379_35388 = ((function (_STAR_print_newline_STAR__orig_val__35376_35385,_STAR_print_fn_STAR__orig_val__35377_35386,_STAR_print_newline_STAR__temp_val__35378_35387,sb__4661__auto__,G__35375,G__35375__$1,loc,class_name,simple_class,cause_type,format,map__35373,map__35373__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35376_35385,_STAR_print_fn_STAR__orig_val__35377_35386,_STAR_print_newline_STAR__temp_val__35378_35387,sb__4661__auto__,G__35375,G__35375__$1,loc,class_name,simple_class,cause_type,format,map__35373,map__35373__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35378_35387;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35379_35388;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35376_35385,_STAR_print_fn_STAR__orig_val__35377_35386,_STAR_print_newline_STAR__temp_val__35378_35387,_STAR_print_fn_STAR__temp_val__35379_35388,sb__4661__auto__,G__35375,G__35375__$1,loc,class_name,simple_class,cause_type,format,map__35373,map__35373__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35376_35385,_STAR_print_fn_STAR__orig_val__35377_35386,_STAR_print_newline_STAR__temp_val__35378_35387,_STAR_print_fn_STAR__temp_val__35379_35388,sb__4661__auto__,G__35375,G__35375__$1,loc,class_name,simple_class,cause_type,format,map__35373,map__35373__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35370_SHARP_){
return cljs.core.dissoc.call(null,p1__35370_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35376_35385,_STAR_print_fn_STAR__orig_val__35377_35386,_STAR_print_newline_STAR__temp_val__35378_35387,_STAR_print_fn_STAR__temp_val__35379_35388,sb__4661__auto__,G__35375,G__35375__$1,loc,class_name,simple_class,cause_type,format,map__35373,map__35373__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35376_35385,_STAR_print_fn_STAR__orig_val__35377_35386,_STAR_print_newline_STAR__temp_val__35378_35387,_STAR_print_fn_STAR__temp_val__35379_35388,sb__4661__auto__,G__35375,G__35375__$1,loc,class_name,simple_class,cause_type,format,map__35373,map__35373__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35377_35386;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35376_35385;
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
var _STAR_print_newline_STAR__orig_val__35380_35389 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35381_35390 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35382_35391 = true;
var _STAR_print_fn_STAR__temp_val__35383_35392 = ((function (_STAR_print_newline_STAR__orig_val__35380_35389,_STAR_print_fn_STAR__orig_val__35381_35390,_STAR_print_newline_STAR__temp_val__35382_35391,sb__4661__auto__,G__35375,G__35375__$1,loc,class_name,simple_class,cause_type,format,map__35373,map__35373__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35380_35389,_STAR_print_fn_STAR__orig_val__35381_35390,_STAR_print_newline_STAR__temp_val__35382_35391,sb__4661__auto__,G__35375,G__35375__$1,loc,class_name,simple_class,cause_type,format,map__35373,map__35373__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35382_35391;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35383_35392;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35380_35389,_STAR_print_fn_STAR__orig_val__35381_35390,_STAR_print_newline_STAR__temp_val__35382_35391,_STAR_print_fn_STAR__temp_val__35383_35392,sb__4661__auto__,G__35375,G__35375__$1,loc,class_name,simple_class,cause_type,format,map__35373,map__35373__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35380_35389,_STAR_print_fn_STAR__orig_val__35381_35390,_STAR_print_newline_STAR__temp_val__35382_35391,_STAR_print_fn_STAR__temp_val__35383_35392,sb__4661__auto__,G__35375,G__35375__$1,loc,class_name,simple_class,cause_type,format,map__35373,map__35373__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35371_SHARP_){
return cljs.core.dissoc.call(null,p1__35371_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35380_35389,_STAR_print_fn_STAR__orig_val__35381_35390,_STAR_print_newline_STAR__temp_val__35382_35391,_STAR_print_fn_STAR__temp_val__35383_35392,sb__4661__auto__,G__35375,G__35375__$1,loc,class_name,simple_class,cause_type,format,map__35373,map__35373__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35380_35389,_STAR_print_fn_STAR__orig_val__35381_35390,_STAR_print_newline_STAR__temp_val__35382_35391,_STAR_print_fn_STAR__temp_val__35383_35392,sb__4661__auto__,G__35375,G__35375__$1,loc,class_name,simple_class,cause_type,format,map__35373,map__35373__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35381_35390;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35380_35389;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35375__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1610051744881
