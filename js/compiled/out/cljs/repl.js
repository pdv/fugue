// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34999){
var map__35000 = p__34999;
var map__35000__$1 = (((((!((map__35000 == null))))?(((((map__35000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35000):map__35000);
var m = map__35000__$1;
var n = cljs.core.get.call(null,map__35000__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35000__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35002_35034 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35003_35035 = null;
var count__35004_35036 = (0);
var i__35005_35037 = (0);
while(true){
if((i__35005_35037 < count__35004_35036)){
var f_35038 = cljs.core._nth.call(null,chunk__35003_35035,i__35005_35037);
cljs.core.println.call(null,"  ",f_35038);


var G__35039 = seq__35002_35034;
var G__35040 = chunk__35003_35035;
var G__35041 = count__35004_35036;
var G__35042 = (i__35005_35037 + (1));
seq__35002_35034 = G__35039;
chunk__35003_35035 = G__35040;
count__35004_35036 = G__35041;
i__35005_35037 = G__35042;
continue;
} else {
var temp__5720__auto___35043 = cljs.core.seq.call(null,seq__35002_35034);
if(temp__5720__auto___35043){
var seq__35002_35044__$1 = temp__5720__auto___35043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35002_35044__$1)){
var c__4550__auto___35045 = cljs.core.chunk_first.call(null,seq__35002_35044__$1);
var G__35046 = cljs.core.chunk_rest.call(null,seq__35002_35044__$1);
var G__35047 = c__4550__auto___35045;
var G__35048 = cljs.core.count.call(null,c__4550__auto___35045);
var G__35049 = (0);
seq__35002_35034 = G__35046;
chunk__35003_35035 = G__35047;
count__35004_35036 = G__35048;
i__35005_35037 = G__35049;
continue;
} else {
var f_35050 = cljs.core.first.call(null,seq__35002_35044__$1);
cljs.core.println.call(null,"  ",f_35050);


var G__35051 = cljs.core.next.call(null,seq__35002_35044__$1);
var G__35052 = null;
var G__35053 = (0);
var G__35054 = (0);
seq__35002_35034 = G__35051;
chunk__35003_35035 = G__35052;
count__35004_35036 = G__35053;
i__35005_35037 = G__35054;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35055 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35055);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35055)))?cljs.core.second.call(null,arglists_35055):arglists_35055));
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
var seq__35006_35056 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35007_35057 = null;
var count__35008_35058 = (0);
var i__35009_35059 = (0);
while(true){
if((i__35009_35059 < count__35008_35058)){
var vec__35020_35060 = cljs.core._nth.call(null,chunk__35007_35057,i__35009_35059);
var name_35061 = cljs.core.nth.call(null,vec__35020_35060,(0),null);
var map__35023_35062 = cljs.core.nth.call(null,vec__35020_35060,(1),null);
var map__35023_35063__$1 = (((((!((map__35023_35062 == null))))?(((((map__35023_35062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35023_35062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35023_35062):map__35023_35062);
var doc_35064 = cljs.core.get.call(null,map__35023_35063__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35065 = cljs.core.get.call(null,map__35023_35063__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35061);

cljs.core.println.call(null," ",arglists_35065);

if(cljs.core.truth_(doc_35064)){
cljs.core.println.call(null," ",doc_35064);
} else {
}


var G__35066 = seq__35006_35056;
var G__35067 = chunk__35007_35057;
var G__35068 = count__35008_35058;
var G__35069 = (i__35009_35059 + (1));
seq__35006_35056 = G__35066;
chunk__35007_35057 = G__35067;
count__35008_35058 = G__35068;
i__35009_35059 = G__35069;
continue;
} else {
var temp__5720__auto___35070 = cljs.core.seq.call(null,seq__35006_35056);
if(temp__5720__auto___35070){
var seq__35006_35071__$1 = temp__5720__auto___35070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35006_35071__$1)){
var c__4550__auto___35072 = cljs.core.chunk_first.call(null,seq__35006_35071__$1);
var G__35073 = cljs.core.chunk_rest.call(null,seq__35006_35071__$1);
var G__35074 = c__4550__auto___35072;
var G__35075 = cljs.core.count.call(null,c__4550__auto___35072);
var G__35076 = (0);
seq__35006_35056 = G__35073;
chunk__35007_35057 = G__35074;
count__35008_35058 = G__35075;
i__35009_35059 = G__35076;
continue;
} else {
var vec__35025_35077 = cljs.core.first.call(null,seq__35006_35071__$1);
var name_35078 = cljs.core.nth.call(null,vec__35025_35077,(0),null);
var map__35028_35079 = cljs.core.nth.call(null,vec__35025_35077,(1),null);
var map__35028_35080__$1 = (((((!((map__35028_35079 == null))))?(((((map__35028_35079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35028_35079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35028_35079):map__35028_35079);
var doc_35081 = cljs.core.get.call(null,map__35028_35080__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35082 = cljs.core.get.call(null,map__35028_35080__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35078);

cljs.core.println.call(null," ",arglists_35082);

if(cljs.core.truth_(doc_35081)){
cljs.core.println.call(null," ",doc_35081);
} else {
}


var G__35083 = cljs.core.next.call(null,seq__35006_35071__$1);
var G__35084 = null;
var G__35085 = (0);
var G__35086 = (0);
seq__35006_35056 = G__35083;
chunk__35007_35057 = G__35084;
count__35008_35058 = G__35085;
i__35009_35059 = G__35086;
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

var seq__35030 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35031 = null;
var count__35032 = (0);
var i__35033 = (0);
while(true){
if((i__35033 < count__35032)){
var role = cljs.core._nth.call(null,chunk__35031,i__35033);
var temp__5720__auto___35087__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35087__$1)){
var spec_35088 = temp__5720__auto___35087__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35088));
} else {
}


var G__35089 = seq__35030;
var G__35090 = chunk__35031;
var G__35091 = count__35032;
var G__35092 = (i__35033 + (1));
seq__35030 = G__35089;
chunk__35031 = G__35090;
count__35032 = G__35091;
i__35033 = G__35092;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__35030);
if(temp__5720__auto____$1){
var seq__35030__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35030__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35030__$1);
var G__35093 = cljs.core.chunk_rest.call(null,seq__35030__$1);
var G__35094 = c__4550__auto__;
var G__35095 = cljs.core.count.call(null,c__4550__auto__);
var G__35096 = (0);
seq__35030 = G__35093;
chunk__35031 = G__35094;
count__35032 = G__35095;
i__35033 = G__35096;
continue;
} else {
var role = cljs.core.first.call(null,seq__35030__$1);
var temp__5720__auto___35097__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35097__$2)){
var spec_35098 = temp__5720__auto___35097__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35098));
} else {
}


var G__35099 = cljs.core.next.call(null,seq__35030__$1);
var G__35100 = null;
var G__35101 = (0);
var G__35102 = (0);
seq__35030 = G__35099;
chunk__35031 = G__35100;
count__35032 = G__35101;
i__35033 = G__35102;
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
var G__35103 = cljs.core.conj.call(null,via,t);
var G__35104 = cljs.core.ex_cause.call(null,t);
via = G__35103;
t = G__35104;
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
var map__35107 = datafied_throwable;
var map__35107__$1 = (((((!((map__35107 == null))))?(((((map__35107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35107):map__35107);
var via = cljs.core.get.call(null,map__35107__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35107__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35107__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35108 = cljs.core.last.call(null,via);
var map__35108__$1 = (((((!((map__35108 == null))))?(((((map__35108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35108):map__35108);
var type = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35109 = data;
var map__35109__$1 = (((((!((map__35109 == null))))?(((((map__35109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35109):map__35109);
var problems = cljs.core.get.call(null,map__35109__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35109__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35109__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35110 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35110__$1 = (((((!((map__35110 == null))))?(((((map__35110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35110):map__35110);
var top_data = map__35110__$1;
var source = cljs.core.get.call(null,map__35110__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35115 = phase;
var G__35115__$1 = (((G__35115 instanceof cljs.core.Keyword))?G__35115.fqn:null);
switch (G__35115__$1) {
case "read-source":
var map__35116 = data;
var map__35116__$1 = (((((!((map__35116 == null))))?(((((map__35116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35116):map__35116);
var line = cljs.core.get.call(null,map__35116__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35116__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35118 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35118__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35118,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35118);
var G__35118__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35118__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35118__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35118__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35118__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35119 = top_data;
var G__35119__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35119,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35119);
var G__35119__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35119__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35119__$1);
var G__35119__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35119__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35119__$2);
var G__35119__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35119__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35119__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35119__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35119__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35120 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35120,(0),null);
var method = cljs.core.nth.call(null,vec__35120,(1),null);
var file = cljs.core.nth.call(null,vec__35120,(2),null);
var line = cljs.core.nth.call(null,vec__35120,(3),null);
var G__35123 = top_data;
var G__35123__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35123,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35123);
var G__35123__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35123__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35123__$1);
var G__35123__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__35123__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35123__$2);
var G__35123__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35123__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35123__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35123__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35123__$4;
}

break;
case "execution":
var vec__35124 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35124,(0),null);
var method = cljs.core.nth.call(null,vec__35124,(1),null);
var file = cljs.core.nth.call(null,vec__35124,(2),null);
var line = cljs.core.nth.call(null,vec__35124,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__35124,source__$1,method,file,line,G__35115,G__35115__$1,map__35107,map__35107__$1,via,trace,phase,map__35108,map__35108__$1,type,message,data,map__35109,map__35109__$1,problems,fn,caller,map__35110,map__35110__$1,top_data,source){
return (function (p1__35106_SHARP_){
var or__4131__auto__ = (p1__35106_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35106_SHARP_);
}
});})(vec__35124,source__$1,method,file,line,G__35115,G__35115__$1,map__35107,map__35107__$1,via,trace,phase,map__35108,map__35108__$1,type,message,data,map__35109,map__35109__$1,problems,fn,caller,map__35110,map__35110__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__35127 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35127__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35127,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35127);
var G__35127__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35127__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35127__$1);
var G__35127__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__35127__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35127__$2);
var G__35127__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35127__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35127__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35127__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35127__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35115__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35131){
var map__35132 = p__35131;
var map__35132__$1 = (((((!((map__35132 == null))))?(((((map__35132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35132):map__35132);
var triage_data = map__35132__$1;
var phase = cljs.core.get.call(null,map__35132__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35132__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35132__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35132__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35132__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35132__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35132__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35132__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35134 = phase;
var G__35134__$1 = (((G__35134 instanceof cljs.core.Keyword))?G__35134.fqn:null);
switch (G__35134__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35135_35144 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35136_35145 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35137_35146 = true;
var _STAR_print_fn_STAR__temp_val__35138_35147 = ((function (_STAR_print_newline_STAR__orig_val__35135_35144,_STAR_print_fn_STAR__orig_val__35136_35145,_STAR_print_newline_STAR__temp_val__35137_35146,sb__4661__auto__,G__35134,G__35134__$1,loc,class_name,simple_class,cause_type,format,map__35132,map__35132__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35135_35144,_STAR_print_fn_STAR__orig_val__35136_35145,_STAR_print_newline_STAR__temp_val__35137_35146,sb__4661__auto__,G__35134,G__35134__$1,loc,class_name,simple_class,cause_type,format,map__35132,map__35132__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35137_35146;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35138_35147;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35135_35144,_STAR_print_fn_STAR__orig_val__35136_35145,_STAR_print_newline_STAR__temp_val__35137_35146,_STAR_print_fn_STAR__temp_val__35138_35147,sb__4661__auto__,G__35134,G__35134__$1,loc,class_name,simple_class,cause_type,format,map__35132,map__35132__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35135_35144,_STAR_print_fn_STAR__orig_val__35136_35145,_STAR_print_newline_STAR__temp_val__35137_35146,_STAR_print_fn_STAR__temp_val__35138_35147,sb__4661__auto__,G__35134,G__35134__$1,loc,class_name,simple_class,cause_type,format,map__35132,map__35132__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35129_SHARP_){
return cljs.core.dissoc.call(null,p1__35129_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35135_35144,_STAR_print_fn_STAR__orig_val__35136_35145,_STAR_print_newline_STAR__temp_val__35137_35146,_STAR_print_fn_STAR__temp_val__35138_35147,sb__4661__auto__,G__35134,G__35134__$1,loc,class_name,simple_class,cause_type,format,map__35132,map__35132__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35135_35144,_STAR_print_fn_STAR__orig_val__35136_35145,_STAR_print_newline_STAR__temp_val__35137_35146,_STAR_print_fn_STAR__temp_val__35138_35147,sb__4661__auto__,G__35134,G__35134__$1,loc,class_name,simple_class,cause_type,format,map__35132,map__35132__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35136_35145;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35135_35144;
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
var _STAR_print_newline_STAR__orig_val__35139_35148 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35140_35149 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35141_35150 = true;
var _STAR_print_fn_STAR__temp_val__35142_35151 = ((function (_STAR_print_newline_STAR__orig_val__35139_35148,_STAR_print_fn_STAR__orig_val__35140_35149,_STAR_print_newline_STAR__temp_val__35141_35150,sb__4661__auto__,G__35134,G__35134__$1,loc,class_name,simple_class,cause_type,format,map__35132,map__35132__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35139_35148,_STAR_print_fn_STAR__orig_val__35140_35149,_STAR_print_newline_STAR__temp_val__35141_35150,sb__4661__auto__,G__35134,G__35134__$1,loc,class_name,simple_class,cause_type,format,map__35132,map__35132__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35141_35150;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35142_35151;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35139_35148,_STAR_print_fn_STAR__orig_val__35140_35149,_STAR_print_newline_STAR__temp_val__35141_35150,_STAR_print_fn_STAR__temp_val__35142_35151,sb__4661__auto__,G__35134,G__35134__$1,loc,class_name,simple_class,cause_type,format,map__35132,map__35132__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35139_35148,_STAR_print_fn_STAR__orig_val__35140_35149,_STAR_print_newline_STAR__temp_val__35141_35150,_STAR_print_fn_STAR__temp_val__35142_35151,sb__4661__auto__,G__35134,G__35134__$1,loc,class_name,simple_class,cause_type,format,map__35132,map__35132__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35130_SHARP_){
return cljs.core.dissoc.call(null,p1__35130_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35139_35148,_STAR_print_fn_STAR__orig_val__35140_35149,_STAR_print_newline_STAR__temp_val__35141_35150,_STAR_print_fn_STAR__temp_val__35142_35151,sb__4661__auto__,G__35134,G__35134__$1,loc,class_name,simple_class,cause_type,format,map__35132,map__35132__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35139_35148,_STAR_print_fn_STAR__orig_val__35140_35149,_STAR_print_newline_STAR__temp_val__35141_35150,_STAR_print_fn_STAR__temp_val__35142_35151,sb__4661__auto__,G__35134,G__35134__$1,loc,class_name,simple_class,cause_type,format,map__35132,map__35132__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35140_35149;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35139_35148;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35134__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1601321438952
