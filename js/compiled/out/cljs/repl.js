// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35228){
var map__35229 = p__35228;
var map__35229__$1 = (((((!((map__35229 == null))))?(((((map__35229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35229):map__35229);
var m = map__35229__$1;
var n = cljs.core.get.call(null,map__35229__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35229__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35231_35263 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35232_35264 = null;
var count__35233_35265 = (0);
var i__35234_35266 = (0);
while(true){
if((i__35234_35266 < count__35233_35265)){
var f_35267 = cljs.core._nth.call(null,chunk__35232_35264,i__35234_35266);
cljs.core.println.call(null,"  ",f_35267);


var G__35268 = seq__35231_35263;
var G__35269 = chunk__35232_35264;
var G__35270 = count__35233_35265;
var G__35271 = (i__35234_35266 + (1));
seq__35231_35263 = G__35268;
chunk__35232_35264 = G__35269;
count__35233_35265 = G__35270;
i__35234_35266 = G__35271;
continue;
} else {
var temp__5720__auto___35272 = cljs.core.seq.call(null,seq__35231_35263);
if(temp__5720__auto___35272){
var seq__35231_35273__$1 = temp__5720__auto___35272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35231_35273__$1)){
var c__4550__auto___35274 = cljs.core.chunk_first.call(null,seq__35231_35273__$1);
var G__35275 = cljs.core.chunk_rest.call(null,seq__35231_35273__$1);
var G__35276 = c__4550__auto___35274;
var G__35277 = cljs.core.count.call(null,c__4550__auto___35274);
var G__35278 = (0);
seq__35231_35263 = G__35275;
chunk__35232_35264 = G__35276;
count__35233_35265 = G__35277;
i__35234_35266 = G__35278;
continue;
} else {
var f_35279 = cljs.core.first.call(null,seq__35231_35273__$1);
cljs.core.println.call(null,"  ",f_35279);


var G__35280 = cljs.core.next.call(null,seq__35231_35273__$1);
var G__35281 = null;
var G__35282 = (0);
var G__35283 = (0);
seq__35231_35263 = G__35280;
chunk__35232_35264 = G__35281;
count__35233_35265 = G__35282;
i__35234_35266 = G__35283;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35284 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35284);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35284)))?cljs.core.second.call(null,arglists_35284):arglists_35284));
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
var seq__35235_35285 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35236_35286 = null;
var count__35237_35287 = (0);
var i__35238_35288 = (0);
while(true){
if((i__35238_35288 < count__35237_35287)){
var vec__35249_35289 = cljs.core._nth.call(null,chunk__35236_35286,i__35238_35288);
var name_35290 = cljs.core.nth.call(null,vec__35249_35289,(0),null);
var map__35252_35291 = cljs.core.nth.call(null,vec__35249_35289,(1),null);
var map__35252_35292__$1 = (((((!((map__35252_35291 == null))))?(((((map__35252_35291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35252_35291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35252_35291):map__35252_35291);
var doc_35293 = cljs.core.get.call(null,map__35252_35292__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35294 = cljs.core.get.call(null,map__35252_35292__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35290);

cljs.core.println.call(null," ",arglists_35294);

if(cljs.core.truth_(doc_35293)){
cljs.core.println.call(null," ",doc_35293);
} else {
}


var G__35295 = seq__35235_35285;
var G__35296 = chunk__35236_35286;
var G__35297 = count__35237_35287;
var G__35298 = (i__35238_35288 + (1));
seq__35235_35285 = G__35295;
chunk__35236_35286 = G__35296;
count__35237_35287 = G__35297;
i__35238_35288 = G__35298;
continue;
} else {
var temp__5720__auto___35299 = cljs.core.seq.call(null,seq__35235_35285);
if(temp__5720__auto___35299){
var seq__35235_35300__$1 = temp__5720__auto___35299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35235_35300__$1)){
var c__4550__auto___35301 = cljs.core.chunk_first.call(null,seq__35235_35300__$1);
var G__35302 = cljs.core.chunk_rest.call(null,seq__35235_35300__$1);
var G__35303 = c__4550__auto___35301;
var G__35304 = cljs.core.count.call(null,c__4550__auto___35301);
var G__35305 = (0);
seq__35235_35285 = G__35302;
chunk__35236_35286 = G__35303;
count__35237_35287 = G__35304;
i__35238_35288 = G__35305;
continue;
} else {
var vec__35254_35306 = cljs.core.first.call(null,seq__35235_35300__$1);
var name_35307 = cljs.core.nth.call(null,vec__35254_35306,(0),null);
var map__35257_35308 = cljs.core.nth.call(null,vec__35254_35306,(1),null);
var map__35257_35309__$1 = (((((!((map__35257_35308 == null))))?(((((map__35257_35308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35257_35308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35257_35308):map__35257_35308);
var doc_35310 = cljs.core.get.call(null,map__35257_35309__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35311 = cljs.core.get.call(null,map__35257_35309__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35307);

cljs.core.println.call(null," ",arglists_35311);

if(cljs.core.truth_(doc_35310)){
cljs.core.println.call(null," ",doc_35310);
} else {
}


var G__35312 = cljs.core.next.call(null,seq__35235_35300__$1);
var G__35313 = null;
var G__35314 = (0);
var G__35315 = (0);
seq__35235_35285 = G__35312;
chunk__35236_35286 = G__35313;
count__35237_35287 = G__35314;
i__35238_35288 = G__35315;
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

var seq__35259 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35260 = null;
var count__35261 = (0);
var i__35262 = (0);
while(true){
if((i__35262 < count__35261)){
var role = cljs.core._nth.call(null,chunk__35260,i__35262);
var temp__5720__auto___35316__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35316__$1)){
var spec_35317 = temp__5720__auto___35316__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35317));
} else {
}


var G__35318 = seq__35259;
var G__35319 = chunk__35260;
var G__35320 = count__35261;
var G__35321 = (i__35262 + (1));
seq__35259 = G__35318;
chunk__35260 = G__35319;
count__35261 = G__35320;
i__35262 = G__35321;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__35259);
if(temp__5720__auto____$1){
var seq__35259__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35259__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35259__$1);
var G__35322 = cljs.core.chunk_rest.call(null,seq__35259__$1);
var G__35323 = c__4550__auto__;
var G__35324 = cljs.core.count.call(null,c__4550__auto__);
var G__35325 = (0);
seq__35259 = G__35322;
chunk__35260 = G__35323;
count__35261 = G__35324;
i__35262 = G__35325;
continue;
} else {
var role = cljs.core.first.call(null,seq__35259__$1);
var temp__5720__auto___35326__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35326__$2)){
var spec_35327 = temp__5720__auto___35326__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35327));
} else {
}


var G__35328 = cljs.core.next.call(null,seq__35259__$1);
var G__35329 = null;
var G__35330 = (0);
var G__35331 = (0);
seq__35259 = G__35328;
chunk__35260 = G__35329;
count__35261 = G__35330;
i__35262 = G__35331;
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
var G__35332 = cljs.core.conj.call(null,via,t);
var G__35333 = cljs.core.ex_cause.call(null,t);
via = G__35332;
t = G__35333;
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
var map__35336 = datafied_throwable;
var map__35336__$1 = (((((!((map__35336 == null))))?(((((map__35336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35336):map__35336);
var via = cljs.core.get.call(null,map__35336__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35336__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35336__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35337 = cljs.core.last.call(null,via);
var map__35337__$1 = (((((!((map__35337 == null))))?(((((map__35337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35337):map__35337);
var type = cljs.core.get.call(null,map__35337__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35337__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35337__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35338 = data;
var map__35338__$1 = (((((!((map__35338 == null))))?(((((map__35338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35338):map__35338);
var problems = cljs.core.get.call(null,map__35338__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35338__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35338__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35339 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35339__$1 = (((((!((map__35339 == null))))?(((((map__35339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35339):map__35339);
var top_data = map__35339__$1;
var source = cljs.core.get.call(null,map__35339__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35344 = phase;
var G__35344__$1 = (((G__35344 instanceof cljs.core.Keyword))?G__35344.fqn:null);
switch (G__35344__$1) {
case "read-source":
var map__35345 = data;
var map__35345__$1 = (((((!((map__35345 == null))))?(((((map__35345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35345):map__35345);
var line = cljs.core.get.call(null,map__35345__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35345__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35347 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35347__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35347,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35347);
var G__35347__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35347__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35347__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35347__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35347__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35348 = top_data;
var G__35348__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35348,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35348);
var G__35348__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35348__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35348__$1);
var G__35348__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35348__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35348__$2);
var G__35348__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35348__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35348__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35348__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35348__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35349 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35349,(0),null);
var method = cljs.core.nth.call(null,vec__35349,(1),null);
var file = cljs.core.nth.call(null,vec__35349,(2),null);
var line = cljs.core.nth.call(null,vec__35349,(3),null);
var G__35352 = top_data;
var G__35352__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35352,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35352);
var G__35352__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35352__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35352__$1);
var G__35352__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__35352__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35352__$2);
var G__35352__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35352__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35352__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35352__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35352__$4;
}

break;
case "execution":
var vec__35353 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35353,(0),null);
var method = cljs.core.nth.call(null,vec__35353,(1),null);
var file = cljs.core.nth.call(null,vec__35353,(2),null);
var line = cljs.core.nth.call(null,vec__35353,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__35353,source__$1,method,file,line,G__35344,G__35344__$1,map__35336,map__35336__$1,via,trace,phase,map__35337,map__35337__$1,type,message,data,map__35338,map__35338__$1,problems,fn,caller,map__35339,map__35339__$1,top_data,source){
return (function (p1__35335_SHARP_){
var or__4131__auto__ = (p1__35335_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35335_SHARP_);
}
});})(vec__35353,source__$1,method,file,line,G__35344,G__35344__$1,map__35336,map__35336__$1,via,trace,phase,map__35337,map__35337__$1,type,message,data,map__35338,map__35338__$1,problems,fn,caller,map__35339,map__35339__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__35356 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35356__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35356,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35356);
var G__35356__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35356__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35356__$1);
var G__35356__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__35356__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35356__$2);
var G__35356__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35356__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35356__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35356__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35356__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35344__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35360){
var map__35361 = p__35360;
var map__35361__$1 = (((((!((map__35361 == null))))?(((((map__35361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35361):map__35361);
var triage_data = map__35361__$1;
var phase = cljs.core.get.call(null,map__35361__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35361__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35361__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35361__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35361__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35361__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35361__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35361__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35363 = phase;
var G__35363__$1 = (((G__35363 instanceof cljs.core.Keyword))?G__35363.fqn:null);
switch (G__35363__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35364_35373 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35365_35374 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35366_35375 = true;
var _STAR_print_fn_STAR__temp_val__35367_35376 = ((function (_STAR_print_newline_STAR__orig_val__35364_35373,_STAR_print_fn_STAR__orig_val__35365_35374,_STAR_print_newline_STAR__temp_val__35366_35375,sb__4661__auto__,G__35363,G__35363__$1,loc,class_name,simple_class,cause_type,format,map__35361,map__35361__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35364_35373,_STAR_print_fn_STAR__orig_val__35365_35374,_STAR_print_newline_STAR__temp_val__35366_35375,sb__4661__auto__,G__35363,G__35363__$1,loc,class_name,simple_class,cause_type,format,map__35361,map__35361__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35366_35375;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35367_35376;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35364_35373,_STAR_print_fn_STAR__orig_val__35365_35374,_STAR_print_newline_STAR__temp_val__35366_35375,_STAR_print_fn_STAR__temp_val__35367_35376,sb__4661__auto__,G__35363,G__35363__$1,loc,class_name,simple_class,cause_type,format,map__35361,map__35361__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35364_35373,_STAR_print_fn_STAR__orig_val__35365_35374,_STAR_print_newline_STAR__temp_val__35366_35375,_STAR_print_fn_STAR__temp_val__35367_35376,sb__4661__auto__,G__35363,G__35363__$1,loc,class_name,simple_class,cause_type,format,map__35361,map__35361__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35358_SHARP_){
return cljs.core.dissoc.call(null,p1__35358_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35364_35373,_STAR_print_fn_STAR__orig_val__35365_35374,_STAR_print_newline_STAR__temp_val__35366_35375,_STAR_print_fn_STAR__temp_val__35367_35376,sb__4661__auto__,G__35363,G__35363__$1,loc,class_name,simple_class,cause_type,format,map__35361,map__35361__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35364_35373,_STAR_print_fn_STAR__orig_val__35365_35374,_STAR_print_newline_STAR__temp_val__35366_35375,_STAR_print_fn_STAR__temp_val__35367_35376,sb__4661__auto__,G__35363,G__35363__$1,loc,class_name,simple_class,cause_type,format,map__35361,map__35361__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35365_35374;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35364_35373;
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
var _STAR_print_newline_STAR__orig_val__35368_35377 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35369_35378 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35370_35379 = true;
var _STAR_print_fn_STAR__temp_val__35371_35380 = ((function (_STAR_print_newline_STAR__orig_val__35368_35377,_STAR_print_fn_STAR__orig_val__35369_35378,_STAR_print_newline_STAR__temp_val__35370_35379,sb__4661__auto__,G__35363,G__35363__$1,loc,class_name,simple_class,cause_type,format,map__35361,map__35361__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35368_35377,_STAR_print_fn_STAR__orig_val__35369_35378,_STAR_print_newline_STAR__temp_val__35370_35379,sb__4661__auto__,G__35363,G__35363__$1,loc,class_name,simple_class,cause_type,format,map__35361,map__35361__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35370_35379;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35371_35380;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35368_35377,_STAR_print_fn_STAR__orig_val__35369_35378,_STAR_print_newline_STAR__temp_val__35370_35379,_STAR_print_fn_STAR__temp_val__35371_35380,sb__4661__auto__,G__35363,G__35363__$1,loc,class_name,simple_class,cause_type,format,map__35361,map__35361__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35368_35377,_STAR_print_fn_STAR__orig_val__35369_35378,_STAR_print_newline_STAR__temp_val__35370_35379,_STAR_print_fn_STAR__temp_val__35371_35380,sb__4661__auto__,G__35363,G__35363__$1,loc,class_name,simple_class,cause_type,format,map__35361,map__35361__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35359_SHARP_){
return cljs.core.dissoc.call(null,p1__35359_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35368_35377,_STAR_print_fn_STAR__orig_val__35369_35378,_STAR_print_newline_STAR__temp_val__35370_35379,_STAR_print_fn_STAR__temp_val__35371_35380,sb__4661__auto__,G__35363,G__35363__$1,loc,class_name,simple_class,cause_type,format,map__35361,map__35361__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35368_35377,_STAR_print_fn_STAR__orig_val__35369_35378,_STAR_print_newline_STAR__temp_val__35370_35379,_STAR_print_fn_STAR__temp_val__35371_35380,sb__4661__auto__,G__35363,G__35363__$1,loc,class_name,simple_class,cause_type,format,map__35361,map__35361__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35369_35378;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35368_35377;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35363__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1608403393391
