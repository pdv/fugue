// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35007){
var map__35008 = p__35007;
var map__35008__$1 = (((((!((map__35008 == null))))?(((((map__35008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35008):map__35008);
var m = map__35008__$1;
var n = cljs.core.get.call(null,map__35008__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35008__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35010_35042 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35011_35043 = null;
var count__35012_35044 = (0);
var i__35013_35045 = (0);
while(true){
if((i__35013_35045 < count__35012_35044)){
var f_35046 = cljs.core._nth.call(null,chunk__35011_35043,i__35013_35045);
cljs.core.println.call(null,"  ",f_35046);


var G__35047 = seq__35010_35042;
var G__35048 = chunk__35011_35043;
var G__35049 = count__35012_35044;
var G__35050 = (i__35013_35045 + (1));
seq__35010_35042 = G__35047;
chunk__35011_35043 = G__35048;
count__35012_35044 = G__35049;
i__35013_35045 = G__35050;
continue;
} else {
var temp__5720__auto___35051 = cljs.core.seq.call(null,seq__35010_35042);
if(temp__5720__auto___35051){
var seq__35010_35052__$1 = temp__5720__auto___35051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35010_35052__$1)){
var c__4550__auto___35053 = cljs.core.chunk_first.call(null,seq__35010_35052__$1);
var G__35054 = cljs.core.chunk_rest.call(null,seq__35010_35052__$1);
var G__35055 = c__4550__auto___35053;
var G__35056 = cljs.core.count.call(null,c__4550__auto___35053);
var G__35057 = (0);
seq__35010_35042 = G__35054;
chunk__35011_35043 = G__35055;
count__35012_35044 = G__35056;
i__35013_35045 = G__35057;
continue;
} else {
var f_35058 = cljs.core.first.call(null,seq__35010_35052__$1);
cljs.core.println.call(null,"  ",f_35058);


var G__35059 = cljs.core.next.call(null,seq__35010_35052__$1);
var G__35060 = null;
var G__35061 = (0);
var G__35062 = (0);
seq__35010_35042 = G__35059;
chunk__35011_35043 = G__35060;
count__35012_35044 = G__35061;
i__35013_35045 = G__35062;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35063 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35063);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35063)))?cljs.core.second.call(null,arglists_35063):arglists_35063));
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
var seq__35014_35064 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35015_35065 = null;
var count__35016_35066 = (0);
var i__35017_35067 = (0);
while(true){
if((i__35017_35067 < count__35016_35066)){
var vec__35028_35068 = cljs.core._nth.call(null,chunk__35015_35065,i__35017_35067);
var name_35069 = cljs.core.nth.call(null,vec__35028_35068,(0),null);
var map__35031_35070 = cljs.core.nth.call(null,vec__35028_35068,(1),null);
var map__35031_35071__$1 = (((((!((map__35031_35070 == null))))?(((((map__35031_35070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35031_35070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35031_35070):map__35031_35070);
var doc_35072 = cljs.core.get.call(null,map__35031_35071__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35073 = cljs.core.get.call(null,map__35031_35071__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35069);

cljs.core.println.call(null," ",arglists_35073);

if(cljs.core.truth_(doc_35072)){
cljs.core.println.call(null," ",doc_35072);
} else {
}


var G__35074 = seq__35014_35064;
var G__35075 = chunk__35015_35065;
var G__35076 = count__35016_35066;
var G__35077 = (i__35017_35067 + (1));
seq__35014_35064 = G__35074;
chunk__35015_35065 = G__35075;
count__35016_35066 = G__35076;
i__35017_35067 = G__35077;
continue;
} else {
var temp__5720__auto___35078 = cljs.core.seq.call(null,seq__35014_35064);
if(temp__5720__auto___35078){
var seq__35014_35079__$1 = temp__5720__auto___35078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35014_35079__$1)){
var c__4550__auto___35080 = cljs.core.chunk_first.call(null,seq__35014_35079__$1);
var G__35081 = cljs.core.chunk_rest.call(null,seq__35014_35079__$1);
var G__35082 = c__4550__auto___35080;
var G__35083 = cljs.core.count.call(null,c__4550__auto___35080);
var G__35084 = (0);
seq__35014_35064 = G__35081;
chunk__35015_35065 = G__35082;
count__35016_35066 = G__35083;
i__35017_35067 = G__35084;
continue;
} else {
var vec__35033_35085 = cljs.core.first.call(null,seq__35014_35079__$1);
var name_35086 = cljs.core.nth.call(null,vec__35033_35085,(0),null);
var map__35036_35087 = cljs.core.nth.call(null,vec__35033_35085,(1),null);
var map__35036_35088__$1 = (((((!((map__35036_35087 == null))))?(((((map__35036_35087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35036_35087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35036_35087):map__35036_35087);
var doc_35089 = cljs.core.get.call(null,map__35036_35088__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35090 = cljs.core.get.call(null,map__35036_35088__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35086);

cljs.core.println.call(null," ",arglists_35090);

if(cljs.core.truth_(doc_35089)){
cljs.core.println.call(null," ",doc_35089);
} else {
}


var G__35091 = cljs.core.next.call(null,seq__35014_35079__$1);
var G__35092 = null;
var G__35093 = (0);
var G__35094 = (0);
seq__35014_35064 = G__35091;
chunk__35015_35065 = G__35092;
count__35016_35066 = G__35093;
i__35017_35067 = G__35094;
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

var seq__35038 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35039 = null;
var count__35040 = (0);
var i__35041 = (0);
while(true){
if((i__35041 < count__35040)){
var role = cljs.core._nth.call(null,chunk__35039,i__35041);
var temp__5720__auto___35095__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35095__$1)){
var spec_35096 = temp__5720__auto___35095__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35096));
} else {
}


var G__35097 = seq__35038;
var G__35098 = chunk__35039;
var G__35099 = count__35040;
var G__35100 = (i__35041 + (1));
seq__35038 = G__35097;
chunk__35039 = G__35098;
count__35040 = G__35099;
i__35041 = G__35100;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__35038);
if(temp__5720__auto____$1){
var seq__35038__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35038__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35038__$1);
var G__35101 = cljs.core.chunk_rest.call(null,seq__35038__$1);
var G__35102 = c__4550__auto__;
var G__35103 = cljs.core.count.call(null,c__4550__auto__);
var G__35104 = (0);
seq__35038 = G__35101;
chunk__35039 = G__35102;
count__35040 = G__35103;
i__35041 = G__35104;
continue;
} else {
var role = cljs.core.first.call(null,seq__35038__$1);
var temp__5720__auto___35105__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35105__$2)){
var spec_35106 = temp__5720__auto___35105__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35106));
} else {
}


var G__35107 = cljs.core.next.call(null,seq__35038__$1);
var G__35108 = null;
var G__35109 = (0);
var G__35110 = (0);
seq__35038 = G__35107;
chunk__35039 = G__35108;
count__35040 = G__35109;
i__35041 = G__35110;
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
var G__35111 = cljs.core.conj.call(null,via,t);
var G__35112 = cljs.core.ex_cause.call(null,t);
via = G__35111;
t = G__35112;
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
var map__35115 = datafied_throwable;
var map__35115__$1 = (((((!((map__35115 == null))))?(((((map__35115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35115):map__35115);
var via = cljs.core.get.call(null,map__35115__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35115__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35115__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35116 = cljs.core.last.call(null,via);
var map__35116__$1 = (((((!((map__35116 == null))))?(((((map__35116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35116):map__35116);
var type = cljs.core.get.call(null,map__35116__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35116__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35116__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35117 = data;
var map__35117__$1 = (((((!((map__35117 == null))))?(((((map__35117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35117):map__35117);
var problems = cljs.core.get.call(null,map__35117__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35117__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35117__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35118 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35118__$1 = (((((!((map__35118 == null))))?(((((map__35118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35118):map__35118);
var top_data = map__35118__$1;
var source = cljs.core.get.call(null,map__35118__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35123 = phase;
var G__35123__$1 = (((G__35123 instanceof cljs.core.Keyword))?G__35123.fqn:null);
switch (G__35123__$1) {
case "read-source":
var map__35124 = data;
var map__35124__$1 = (((((!((map__35124 == null))))?(((((map__35124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35124):map__35124);
var line = cljs.core.get.call(null,map__35124__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35124__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35126 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35126__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35126,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35126);
var G__35126__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35126__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35126__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35126__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35126__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35127 = top_data;
var G__35127__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35127,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35127);
var G__35127__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35127__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35127__$1);
var G__35127__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35127__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35127__$2);
var G__35127__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35127__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35127__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35127__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35127__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35128 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35128,(0),null);
var method = cljs.core.nth.call(null,vec__35128,(1),null);
var file = cljs.core.nth.call(null,vec__35128,(2),null);
var line = cljs.core.nth.call(null,vec__35128,(3),null);
var G__35131 = top_data;
var G__35131__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35131,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35131);
var G__35131__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35131__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35131__$1);
var G__35131__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__35131__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35131__$2);
var G__35131__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35131__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35131__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35131__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35131__$4;
}

break;
case "execution":
var vec__35132 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35132,(0),null);
var method = cljs.core.nth.call(null,vec__35132,(1),null);
var file = cljs.core.nth.call(null,vec__35132,(2),null);
var line = cljs.core.nth.call(null,vec__35132,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__35132,source__$1,method,file,line,G__35123,G__35123__$1,map__35115,map__35115__$1,via,trace,phase,map__35116,map__35116__$1,type,message,data,map__35117,map__35117__$1,problems,fn,caller,map__35118,map__35118__$1,top_data,source){
return (function (p1__35114_SHARP_){
var or__4131__auto__ = (p1__35114_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35114_SHARP_);
}
});})(vec__35132,source__$1,method,file,line,G__35123,G__35123__$1,map__35115,map__35115__$1,via,trace,phase,map__35116,map__35116__$1,type,message,data,map__35117,map__35117__$1,problems,fn,caller,map__35118,map__35118__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__35135 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35135__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35135,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35135);
var G__35135__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35135__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35135__$1);
var G__35135__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__35135__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35135__$2);
var G__35135__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35135__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35135__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35135__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35135__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35123__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35139){
var map__35140 = p__35139;
var map__35140__$1 = (((((!((map__35140 == null))))?(((((map__35140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35140):map__35140);
var triage_data = map__35140__$1;
var phase = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35142 = phase;
var G__35142__$1 = (((G__35142 instanceof cljs.core.Keyword))?G__35142.fqn:null);
switch (G__35142__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35143_35152 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35144_35153 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35145_35154 = true;
var _STAR_print_fn_STAR__temp_val__35146_35155 = ((function (_STAR_print_newline_STAR__orig_val__35143_35152,_STAR_print_fn_STAR__orig_val__35144_35153,_STAR_print_newline_STAR__temp_val__35145_35154,sb__4661__auto__,G__35142,G__35142__$1,loc,class_name,simple_class,cause_type,format,map__35140,map__35140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35143_35152,_STAR_print_fn_STAR__orig_val__35144_35153,_STAR_print_newline_STAR__temp_val__35145_35154,sb__4661__auto__,G__35142,G__35142__$1,loc,class_name,simple_class,cause_type,format,map__35140,map__35140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35145_35154;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35146_35155;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35143_35152,_STAR_print_fn_STAR__orig_val__35144_35153,_STAR_print_newline_STAR__temp_val__35145_35154,_STAR_print_fn_STAR__temp_val__35146_35155,sb__4661__auto__,G__35142,G__35142__$1,loc,class_name,simple_class,cause_type,format,map__35140,map__35140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35143_35152,_STAR_print_fn_STAR__orig_val__35144_35153,_STAR_print_newline_STAR__temp_val__35145_35154,_STAR_print_fn_STAR__temp_val__35146_35155,sb__4661__auto__,G__35142,G__35142__$1,loc,class_name,simple_class,cause_type,format,map__35140,map__35140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35137_SHARP_){
return cljs.core.dissoc.call(null,p1__35137_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35143_35152,_STAR_print_fn_STAR__orig_val__35144_35153,_STAR_print_newline_STAR__temp_val__35145_35154,_STAR_print_fn_STAR__temp_val__35146_35155,sb__4661__auto__,G__35142,G__35142__$1,loc,class_name,simple_class,cause_type,format,map__35140,map__35140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35143_35152,_STAR_print_fn_STAR__orig_val__35144_35153,_STAR_print_newline_STAR__temp_val__35145_35154,_STAR_print_fn_STAR__temp_val__35146_35155,sb__4661__auto__,G__35142,G__35142__$1,loc,class_name,simple_class,cause_type,format,map__35140,map__35140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35144_35153;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35143_35152;
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
var _STAR_print_newline_STAR__orig_val__35147_35156 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35148_35157 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35149_35158 = true;
var _STAR_print_fn_STAR__temp_val__35150_35159 = ((function (_STAR_print_newline_STAR__orig_val__35147_35156,_STAR_print_fn_STAR__orig_val__35148_35157,_STAR_print_newline_STAR__temp_val__35149_35158,sb__4661__auto__,G__35142,G__35142__$1,loc,class_name,simple_class,cause_type,format,map__35140,map__35140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35147_35156,_STAR_print_fn_STAR__orig_val__35148_35157,_STAR_print_newline_STAR__temp_val__35149_35158,sb__4661__auto__,G__35142,G__35142__$1,loc,class_name,simple_class,cause_type,format,map__35140,map__35140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35149_35158;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35150_35159;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35147_35156,_STAR_print_fn_STAR__orig_val__35148_35157,_STAR_print_newline_STAR__temp_val__35149_35158,_STAR_print_fn_STAR__temp_val__35150_35159,sb__4661__auto__,G__35142,G__35142__$1,loc,class_name,simple_class,cause_type,format,map__35140,map__35140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35147_35156,_STAR_print_fn_STAR__orig_val__35148_35157,_STAR_print_newline_STAR__temp_val__35149_35158,_STAR_print_fn_STAR__temp_val__35150_35159,sb__4661__auto__,G__35142,G__35142__$1,loc,class_name,simple_class,cause_type,format,map__35140,map__35140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35138_SHARP_){
return cljs.core.dissoc.call(null,p1__35138_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35147_35156,_STAR_print_fn_STAR__orig_val__35148_35157,_STAR_print_newline_STAR__temp_val__35149_35158,_STAR_print_fn_STAR__temp_val__35150_35159,sb__4661__auto__,G__35142,G__35142__$1,loc,class_name,simple_class,cause_type,format,map__35140,map__35140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35147_35156,_STAR_print_fn_STAR__orig_val__35148_35157,_STAR_print_newline_STAR__temp_val__35149_35158,_STAR_print_fn_STAR__temp_val__35150_35159,sb__4661__auto__,G__35142,G__35142__$1,loc,class_name,simple_class,cause_type,format,map__35140,map__35140__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35148_35157;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35147_35156;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35142__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1601312567538
