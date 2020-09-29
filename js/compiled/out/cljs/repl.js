// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35207){
var map__35208 = p__35207;
var map__35208__$1 = (((((!((map__35208 == null))))?(((((map__35208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35208):map__35208);
var m = map__35208__$1;
var n = cljs.core.get.call(null,map__35208__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35208__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35210_35242 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35211_35243 = null;
var count__35212_35244 = (0);
var i__35213_35245 = (0);
while(true){
if((i__35213_35245 < count__35212_35244)){
var f_35246 = cljs.core._nth.call(null,chunk__35211_35243,i__35213_35245);
cljs.core.println.call(null,"  ",f_35246);


var G__35247 = seq__35210_35242;
var G__35248 = chunk__35211_35243;
var G__35249 = count__35212_35244;
var G__35250 = (i__35213_35245 + (1));
seq__35210_35242 = G__35247;
chunk__35211_35243 = G__35248;
count__35212_35244 = G__35249;
i__35213_35245 = G__35250;
continue;
} else {
var temp__5720__auto___35251 = cljs.core.seq.call(null,seq__35210_35242);
if(temp__5720__auto___35251){
var seq__35210_35252__$1 = temp__5720__auto___35251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35210_35252__$1)){
var c__4550__auto___35253 = cljs.core.chunk_first.call(null,seq__35210_35252__$1);
var G__35254 = cljs.core.chunk_rest.call(null,seq__35210_35252__$1);
var G__35255 = c__4550__auto___35253;
var G__35256 = cljs.core.count.call(null,c__4550__auto___35253);
var G__35257 = (0);
seq__35210_35242 = G__35254;
chunk__35211_35243 = G__35255;
count__35212_35244 = G__35256;
i__35213_35245 = G__35257;
continue;
} else {
var f_35258 = cljs.core.first.call(null,seq__35210_35252__$1);
cljs.core.println.call(null,"  ",f_35258);


var G__35259 = cljs.core.next.call(null,seq__35210_35252__$1);
var G__35260 = null;
var G__35261 = (0);
var G__35262 = (0);
seq__35210_35242 = G__35259;
chunk__35211_35243 = G__35260;
count__35212_35244 = G__35261;
i__35213_35245 = G__35262;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35263 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35263);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35263)))?cljs.core.second.call(null,arglists_35263):arglists_35263));
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
var seq__35214_35264 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35215_35265 = null;
var count__35216_35266 = (0);
var i__35217_35267 = (0);
while(true){
if((i__35217_35267 < count__35216_35266)){
var vec__35228_35268 = cljs.core._nth.call(null,chunk__35215_35265,i__35217_35267);
var name_35269 = cljs.core.nth.call(null,vec__35228_35268,(0),null);
var map__35231_35270 = cljs.core.nth.call(null,vec__35228_35268,(1),null);
var map__35231_35271__$1 = (((((!((map__35231_35270 == null))))?(((((map__35231_35270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35231_35270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35231_35270):map__35231_35270);
var doc_35272 = cljs.core.get.call(null,map__35231_35271__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35273 = cljs.core.get.call(null,map__35231_35271__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35269);

cljs.core.println.call(null," ",arglists_35273);

if(cljs.core.truth_(doc_35272)){
cljs.core.println.call(null," ",doc_35272);
} else {
}


var G__35274 = seq__35214_35264;
var G__35275 = chunk__35215_35265;
var G__35276 = count__35216_35266;
var G__35277 = (i__35217_35267 + (1));
seq__35214_35264 = G__35274;
chunk__35215_35265 = G__35275;
count__35216_35266 = G__35276;
i__35217_35267 = G__35277;
continue;
} else {
var temp__5720__auto___35278 = cljs.core.seq.call(null,seq__35214_35264);
if(temp__5720__auto___35278){
var seq__35214_35279__$1 = temp__5720__auto___35278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35214_35279__$1)){
var c__4550__auto___35280 = cljs.core.chunk_first.call(null,seq__35214_35279__$1);
var G__35281 = cljs.core.chunk_rest.call(null,seq__35214_35279__$1);
var G__35282 = c__4550__auto___35280;
var G__35283 = cljs.core.count.call(null,c__4550__auto___35280);
var G__35284 = (0);
seq__35214_35264 = G__35281;
chunk__35215_35265 = G__35282;
count__35216_35266 = G__35283;
i__35217_35267 = G__35284;
continue;
} else {
var vec__35233_35285 = cljs.core.first.call(null,seq__35214_35279__$1);
var name_35286 = cljs.core.nth.call(null,vec__35233_35285,(0),null);
var map__35236_35287 = cljs.core.nth.call(null,vec__35233_35285,(1),null);
var map__35236_35288__$1 = (((((!((map__35236_35287 == null))))?(((((map__35236_35287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35236_35287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35236_35287):map__35236_35287);
var doc_35289 = cljs.core.get.call(null,map__35236_35288__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35290 = cljs.core.get.call(null,map__35236_35288__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35286);

cljs.core.println.call(null," ",arglists_35290);

if(cljs.core.truth_(doc_35289)){
cljs.core.println.call(null," ",doc_35289);
} else {
}


var G__35291 = cljs.core.next.call(null,seq__35214_35279__$1);
var G__35292 = null;
var G__35293 = (0);
var G__35294 = (0);
seq__35214_35264 = G__35291;
chunk__35215_35265 = G__35292;
count__35216_35266 = G__35293;
i__35217_35267 = G__35294;
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

var seq__35238 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35239 = null;
var count__35240 = (0);
var i__35241 = (0);
while(true){
if((i__35241 < count__35240)){
var role = cljs.core._nth.call(null,chunk__35239,i__35241);
var temp__5720__auto___35295__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35295__$1)){
var spec_35296 = temp__5720__auto___35295__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35296));
} else {
}


var G__35297 = seq__35238;
var G__35298 = chunk__35239;
var G__35299 = count__35240;
var G__35300 = (i__35241 + (1));
seq__35238 = G__35297;
chunk__35239 = G__35298;
count__35240 = G__35299;
i__35241 = G__35300;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__35238);
if(temp__5720__auto____$1){
var seq__35238__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35238__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35238__$1);
var G__35301 = cljs.core.chunk_rest.call(null,seq__35238__$1);
var G__35302 = c__4550__auto__;
var G__35303 = cljs.core.count.call(null,c__4550__auto__);
var G__35304 = (0);
seq__35238 = G__35301;
chunk__35239 = G__35302;
count__35240 = G__35303;
i__35241 = G__35304;
continue;
} else {
var role = cljs.core.first.call(null,seq__35238__$1);
var temp__5720__auto___35305__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35305__$2)){
var spec_35306 = temp__5720__auto___35305__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35306));
} else {
}


var G__35307 = cljs.core.next.call(null,seq__35238__$1);
var G__35308 = null;
var G__35309 = (0);
var G__35310 = (0);
seq__35238 = G__35307;
chunk__35239 = G__35308;
count__35240 = G__35309;
i__35241 = G__35310;
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
var G__35311 = cljs.core.conj.call(null,via,t);
var G__35312 = cljs.core.ex_cause.call(null,t);
via = G__35311;
t = G__35312;
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
var map__35315 = datafied_throwable;
var map__35315__$1 = (((((!((map__35315 == null))))?(((((map__35315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35315):map__35315);
var via = cljs.core.get.call(null,map__35315__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35315__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35315__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35316 = cljs.core.last.call(null,via);
var map__35316__$1 = (((((!((map__35316 == null))))?(((((map__35316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35316):map__35316);
var type = cljs.core.get.call(null,map__35316__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35316__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35316__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35317 = data;
var map__35317__$1 = (((((!((map__35317 == null))))?(((((map__35317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35317):map__35317);
var problems = cljs.core.get.call(null,map__35317__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35317__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35317__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35318 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35318__$1 = (((((!((map__35318 == null))))?(((((map__35318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35318):map__35318);
var top_data = map__35318__$1;
var source = cljs.core.get.call(null,map__35318__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35323 = phase;
var G__35323__$1 = (((G__35323 instanceof cljs.core.Keyword))?G__35323.fqn:null);
switch (G__35323__$1) {
case "read-source":
var map__35324 = data;
var map__35324__$1 = (((((!((map__35324 == null))))?(((((map__35324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35324):map__35324);
var line = cljs.core.get.call(null,map__35324__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35324__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35326 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35326__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35326,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35326);
var G__35326__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35326__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35326__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35326__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35326__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35327 = top_data;
var G__35327__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35327,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35327);
var G__35327__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35327__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35327__$1);
var G__35327__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35327__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35327__$2);
var G__35327__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35327__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35327__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35327__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35327__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35328 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35328,(0),null);
var method = cljs.core.nth.call(null,vec__35328,(1),null);
var file = cljs.core.nth.call(null,vec__35328,(2),null);
var line = cljs.core.nth.call(null,vec__35328,(3),null);
var G__35331 = top_data;
var G__35331__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35331,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35331);
var G__35331__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35331__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35331__$1);
var G__35331__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__35331__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35331__$2);
var G__35331__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35331__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35331__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35331__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35331__$4;
}

break;
case "execution":
var vec__35332 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35332,(0),null);
var method = cljs.core.nth.call(null,vec__35332,(1),null);
var file = cljs.core.nth.call(null,vec__35332,(2),null);
var line = cljs.core.nth.call(null,vec__35332,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__35332,source__$1,method,file,line,G__35323,G__35323__$1,map__35315,map__35315__$1,via,trace,phase,map__35316,map__35316__$1,type,message,data,map__35317,map__35317__$1,problems,fn,caller,map__35318,map__35318__$1,top_data,source){
return (function (p1__35314_SHARP_){
var or__4131__auto__ = (p1__35314_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35314_SHARP_);
}
});})(vec__35332,source__$1,method,file,line,G__35323,G__35323__$1,map__35315,map__35315__$1,via,trace,phase,map__35316,map__35316__$1,type,message,data,map__35317,map__35317__$1,problems,fn,caller,map__35318,map__35318__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__35335 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35335__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35335,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35335);
var G__35335__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35335__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35335__$1);
var G__35335__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__35335__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35335__$2);
var G__35335__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35335__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35335__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35335__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35335__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35323__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35339){
var map__35340 = p__35339;
var map__35340__$1 = (((((!((map__35340 == null))))?(((((map__35340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35340):map__35340);
var triage_data = map__35340__$1;
var phase = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35342 = phase;
var G__35342__$1 = (((G__35342 instanceof cljs.core.Keyword))?G__35342.fqn:null);
switch (G__35342__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35343_35352 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35344_35353 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35345_35354 = true;
var _STAR_print_fn_STAR__temp_val__35346_35355 = ((function (_STAR_print_newline_STAR__orig_val__35343_35352,_STAR_print_fn_STAR__orig_val__35344_35353,_STAR_print_newline_STAR__temp_val__35345_35354,sb__4661__auto__,G__35342,G__35342__$1,loc,class_name,simple_class,cause_type,format,map__35340,map__35340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35343_35352,_STAR_print_fn_STAR__orig_val__35344_35353,_STAR_print_newline_STAR__temp_val__35345_35354,sb__4661__auto__,G__35342,G__35342__$1,loc,class_name,simple_class,cause_type,format,map__35340,map__35340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35345_35354;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35346_35355;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35343_35352,_STAR_print_fn_STAR__orig_val__35344_35353,_STAR_print_newline_STAR__temp_val__35345_35354,_STAR_print_fn_STAR__temp_val__35346_35355,sb__4661__auto__,G__35342,G__35342__$1,loc,class_name,simple_class,cause_type,format,map__35340,map__35340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35343_35352,_STAR_print_fn_STAR__orig_val__35344_35353,_STAR_print_newline_STAR__temp_val__35345_35354,_STAR_print_fn_STAR__temp_val__35346_35355,sb__4661__auto__,G__35342,G__35342__$1,loc,class_name,simple_class,cause_type,format,map__35340,map__35340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35337_SHARP_){
return cljs.core.dissoc.call(null,p1__35337_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35343_35352,_STAR_print_fn_STAR__orig_val__35344_35353,_STAR_print_newline_STAR__temp_val__35345_35354,_STAR_print_fn_STAR__temp_val__35346_35355,sb__4661__auto__,G__35342,G__35342__$1,loc,class_name,simple_class,cause_type,format,map__35340,map__35340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35343_35352,_STAR_print_fn_STAR__orig_val__35344_35353,_STAR_print_newline_STAR__temp_val__35345_35354,_STAR_print_fn_STAR__temp_val__35346_35355,sb__4661__auto__,G__35342,G__35342__$1,loc,class_name,simple_class,cause_type,format,map__35340,map__35340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35344_35353;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35343_35352;
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
var _STAR_print_newline_STAR__orig_val__35347_35356 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35348_35357 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35349_35358 = true;
var _STAR_print_fn_STAR__temp_val__35350_35359 = ((function (_STAR_print_newline_STAR__orig_val__35347_35356,_STAR_print_fn_STAR__orig_val__35348_35357,_STAR_print_newline_STAR__temp_val__35349_35358,sb__4661__auto__,G__35342,G__35342__$1,loc,class_name,simple_class,cause_type,format,map__35340,map__35340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35347_35356,_STAR_print_fn_STAR__orig_val__35348_35357,_STAR_print_newline_STAR__temp_val__35349_35358,sb__4661__auto__,G__35342,G__35342__$1,loc,class_name,simple_class,cause_type,format,map__35340,map__35340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35349_35358;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35350_35359;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35347_35356,_STAR_print_fn_STAR__orig_val__35348_35357,_STAR_print_newline_STAR__temp_val__35349_35358,_STAR_print_fn_STAR__temp_val__35350_35359,sb__4661__auto__,G__35342,G__35342__$1,loc,class_name,simple_class,cause_type,format,map__35340,map__35340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35347_35356,_STAR_print_fn_STAR__orig_val__35348_35357,_STAR_print_newline_STAR__temp_val__35349_35358,_STAR_print_fn_STAR__temp_val__35350_35359,sb__4661__auto__,G__35342,G__35342__$1,loc,class_name,simple_class,cause_type,format,map__35340,map__35340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35338_SHARP_){
return cljs.core.dissoc.call(null,p1__35338_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35347_35356,_STAR_print_fn_STAR__orig_val__35348_35357,_STAR_print_newline_STAR__temp_val__35349_35358,_STAR_print_fn_STAR__temp_val__35350_35359,sb__4661__auto__,G__35342,G__35342__$1,loc,class_name,simple_class,cause_type,format,map__35340,map__35340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35347_35356,_STAR_print_fn_STAR__orig_val__35348_35357,_STAR_print_newline_STAR__temp_val__35349_35358,_STAR_print_fn_STAR__temp_val__35350_35359,sb__4661__auto__,G__35342,G__35342__$1,loc,class_name,simple_class,cause_type,format,map__35340,map__35340__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35348_35357;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35347_35356;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35342__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1601415264903
