// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34831){
var map__34832 = p__34831;
var map__34832__$1 = (((((!((map__34832 == null))))?(((((map__34832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34832):map__34832);
var m = map__34832__$1;
var n = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34832__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34834_34866 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34835_34867 = null;
var count__34836_34868 = (0);
var i__34837_34869 = (0);
while(true){
if((i__34837_34869 < count__34836_34868)){
var f_34870 = cljs.core._nth.call(null,chunk__34835_34867,i__34837_34869);
cljs.core.println.call(null,"  ",f_34870);


var G__34871 = seq__34834_34866;
var G__34872 = chunk__34835_34867;
var G__34873 = count__34836_34868;
var G__34874 = (i__34837_34869 + (1));
seq__34834_34866 = G__34871;
chunk__34835_34867 = G__34872;
count__34836_34868 = G__34873;
i__34837_34869 = G__34874;
continue;
} else {
var temp__5720__auto___34875 = cljs.core.seq.call(null,seq__34834_34866);
if(temp__5720__auto___34875){
var seq__34834_34876__$1 = temp__5720__auto___34875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34834_34876__$1)){
var c__4550__auto___34877 = cljs.core.chunk_first.call(null,seq__34834_34876__$1);
var G__34878 = cljs.core.chunk_rest.call(null,seq__34834_34876__$1);
var G__34879 = c__4550__auto___34877;
var G__34880 = cljs.core.count.call(null,c__4550__auto___34877);
var G__34881 = (0);
seq__34834_34866 = G__34878;
chunk__34835_34867 = G__34879;
count__34836_34868 = G__34880;
i__34837_34869 = G__34881;
continue;
} else {
var f_34882 = cljs.core.first.call(null,seq__34834_34876__$1);
cljs.core.println.call(null,"  ",f_34882);


var G__34883 = cljs.core.next.call(null,seq__34834_34876__$1);
var G__34884 = null;
var G__34885 = (0);
var G__34886 = (0);
seq__34834_34866 = G__34883;
chunk__34835_34867 = G__34884;
count__34836_34868 = G__34885;
i__34837_34869 = G__34886;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34887 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34887);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34887)))?cljs.core.second.call(null,arglists_34887):arglists_34887));
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
var seq__34838_34888 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34839_34889 = null;
var count__34840_34890 = (0);
var i__34841_34891 = (0);
while(true){
if((i__34841_34891 < count__34840_34890)){
var vec__34852_34892 = cljs.core._nth.call(null,chunk__34839_34889,i__34841_34891);
var name_34893 = cljs.core.nth.call(null,vec__34852_34892,(0),null);
var map__34855_34894 = cljs.core.nth.call(null,vec__34852_34892,(1),null);
var map__34855_34895__$1 = (((((!((map__34855_34894 == null))))?(((((map__34855_34894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34855_34894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34855_34894):map__34855_34894);
var doc_34896 = cljs.core.get.call(null,map__34855_34895__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34897 = cljs.core.get.call(null,map__34855_34895__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34893);

cljs.core.println.call(null," ",arglists_34897);

if(cljs.core.truth_(doc_34896)){
cljs.core.println.call(null," ",doc_34896);
} else {
}


var G__34898 = seq__34838_34888;
var G__34899 = chunk__34839_34889;
var G__34900 = count__34840_34890;
var G__34901 = (i__34841_34891 + (1));
seq__34838_34888 = G__34898;
chunk__34839_34889 = G__34899;
count__34840_34890 = G__34900;
i__34841_34891 = G__34901;
continue;
} else {
var temp__5720__auto___34902 = cljs.core.seq.call(null,seq__34838_34888);
if(temp__5720__auto___34902){
var seq__34838_34903__$1 = temp__5720__auto___34902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34838_34903__$1)){
var c__4550__auto___34904 = cljs.core.chunk_first.call(null,seq__34838_34903__$1);
var G__34905 = cljs.core.chunk_rest.call(null,seq__34838_34903__$1);
var G__34906 = c__4550__auto___34904;
var G__34907 = cljs.core.count.call(null,c__4550__auto___34904);
var G__34908 = (0);
seq__34838_34888 = G__34905;
chunk__34839_34889 = G__34906;
count__34840_34890 = G__34907;
i__34841_34891 = G__34908;
continue;
} else {
var vec__34857_34909 = cljs.core.first.call(null,seq__34838_34903__$1);
var name_34910 = cljs.core.nth.call(null,vec__34857_34909,(0),null);
var map__34860_34911 = cljs.core.nth.call(null,vec__34857_34909,(1),null);
var map__34860_34912__$1 = (((((!((map__34860_34911 == null))))?(((((map__34860_34911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34860_34911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34860_34911):map__34860_34911);
var doc_34913 = cljs.core.get.call(null,map__34860_34912__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34914 = cljs.core.get.call(null,map__34860_34912__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34910);

cljs.core.println.call(null," ",arglists_34914);

if(cljs.core.truth_(doc_34913)){
cljs.core.println.call(null," ",doc_34913);
} else {
}


var G__34915 = cljs.core.next.call(null,seq__34838_34903__$1);
var G__34916 = null;
var G__34917 = (0);
var G__34918 = (0);
seq__34838_34888 = G__34915;
chunk__34839_34889 = G__34916;
count__34840_34890 = G__34917;
i__34841_34891 = G__34918;
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

var seq__34862 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34863 = null;
var count__34864 = (0);
var i__34865 = (0);
while(true){
if((i__34865 < count__34864)){
var role = cljs.core._nth.call(null,chunk__34863,i__34865);
var temp__5720__auto___34919__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___34919__$1)){
var spec_34920 = temp__5720__auto___34919__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34920));
} else {
}


var G__34921 = seq__34862;
var G__34922 = chunk__34863;
var G__34923 = count__34864;
var G__34924 = (i__34865 + (1));
seq__34862 = G__34921;
chunk__34863 = G__34922;
count__34864 = G__34923;
i__34865 = G__34924;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__34862);
if(temp__5720__auto____$1){
var seq__34862__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34862__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34862__$1);
var G__34925 = cljs.core.chunk_rest.call(null,seq__34862__$1);
var G__34926 = c__4550__auto__;
var G__34927 = cljs.core.count.call(null,c__4550__auto__);
var G__34928 = (0);
seq__34862 = G__34925;
chunk__34863 = G__34926;
count__34864 = G__34927;
i__34865 = G__34928;
continue;
} else {
var role = cljs.core.first.call(null,seq__34862__$1);
var temp__5720__auto___34929__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___34929__$2)){
var spec_34930 = temp__5720__auto___34929__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34930));
} else {
}


var G__34931 = cljs.core.next.call(null,seq__34862__$1);
var G__34932 = null;
var G__34933 = (0);
var G__34934 = (0);
seq__34862 = G__34931;
chunk__34863 = G__34932;
count__34864 = G__34933;
i__34865 = G__34934;
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
var G__34935 = cljs.core.conj.call(null,via,t);
var G__34936 = cljs.core.ex_cause.call(null,t);
via = G__34935;
t = G__34936;
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
var map__34939 = datafied_throwable;
var map__34939__$1 = (((((!((map__34939 == null))))?(((((map__34939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34939):map__34939);
var via = cljs.core.get.call(null,map__34939__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__34939__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__34939__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34940 = cljs.core.last.call(null,via);
var map__34940__$1 = (((((!((map__34940 == null))))?(((((map__34940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34940):map__34940);
var type = cljs.core.get.call(null,map__34940__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__34940__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__34940__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34941 = data;
var map__34941__$1 = (((((!((map__34941 == null))))?(((((map__34941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34941):map__34941);
var problems = cljs.core.get.call(null,map__34941__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__34941__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__34941__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34942 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__34942__$1 = (((((!((map__34942 == null))))?(((((map__34942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34942):map__34942);
var top_data = map__34942__$1;
var source = cljs.core.get.call(null,map__34942__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__34947 = phase;
var G__34947__$1 = (((G__34947 instanceof cljs.core.Keyword))?G__34947.fqn:null);
switch (G__34947__$1) {
case "read-source":
var map__34948 = data;
var map__34948__$1 = (((((!((map__34948 == null))))?(((((map__34948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34948):map__34948);
var line = cljs.core.get.call(null,map__34948__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34948__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34950 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__34950__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34950,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34950);
var G__34950__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34950__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34950__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34950__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34950__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34951 = top_data;
var G__34951__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34951,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34951);
var G__34951__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34951__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34951__$1);
var G__34951__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34951__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34951__$2);
var G__34951__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34951__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34951__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34951__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34951__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34952 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34952,(0),null);
var method = cljs.core.nth.call(null,vec__34952,(1),null);
var file = cljs.core.nth.call(null,vec__34952,(2),null);
var line = cljs.core.nth.call(null,vec__34952,(3),null);
var G__34955 = top_data;
var G__34955__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__34955,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34955);
var G__34955__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__34955__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34955__$1);
var G__34955__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__34955__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34955__$2);
var G__34955__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34955__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34955__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34955__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34955__$4;
}

break;
case "execution":
var vec__34956 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34956,(0),null);
var method = cljs.core.nth.call(null,vec__34956,(1),null);
var file = cljs.core.nth.call(null,vec__34956,(2),null);
var line = cljs.core.nth.call(null,vec__34956,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__34956,source__$1,method,file,line,G__34947,G__34947__$1,map__34939,map__34939__$1,via,trace,phase,map__34940,map__34940__$1,type,message,data,map__34941,map__34941__$1,problems,fn,caller,map__34942,map__34942__$1,top_data,source){
return (function (p1__34938_SHARP_){
var or__4131__auto__ = (p1__34938_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__34938_SHARP_);
}
});})(vec__34956,source__$1,method,file,line,G__34947,G__34947__$1,map__34939,map__34939__$1,via,trace,phase,map__34940,map__34940__$1,type,message,data,map__34941,map__34941__$1,problems,fn,caller,map__34942,map__34942__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__34959 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34959__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__34959,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34959);
var G__34959__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34959__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34959__$1);
var G__34959__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__34959__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34959__$2);
var G__34959__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__34959__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34959__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34959__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34959__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34947__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34963){
var map__34964 = p__34963;
var map__34964__$1 = (((((!((map__34964 == null))))?(((((map__34964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34964):map__34964);
var triage_data = map__34964__$1;
var phase = cljs.core.get.call(null,map__34964__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__34964__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__34964__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34964__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__34964__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__34964__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__34964__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__34964__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__34966 = phase;
var G__34966__$1 = (((G__34966 instanceof cljs.core.Keyword))?G__34966.fqn:null);
switch (G__34966__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34967_34976 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34968_34977 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34969_34978 = true;
var _STAR_print_fn_STAR__temp_val__34970_34979 = ((function (_STAR_print_newline_STAR__orig_val__34967_34976,_STAR_print_fn_STAR__orig_val__34968_34977,_STAR_print_newline_STAR__temp_val__34969_34978,sb__4661__auto__,G__34966,G__34966__$1,loc,class_name,simple_class,cause_type,format,map__34964,map__34964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__34967_34976,_STAR_print_fn_STAR__orig_val__34968_34977,_STAR_print_newline_STAR__temp_val__34969_34978,sb__4661__auto__,G__34966,G__34966__$1,loc,class_name,simple_class,cause_type,format,map__34964,map__34964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34969_34978;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34970_34979;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__34967_34976,_STAR_print_fn_STAR__orig_val__34968_34977,_STAR_print_newline_STAR__temp_val__34969_34978,_STAR_print_fn_STAR__temp_val__34970_34979,sb__4661__auto__,G__34966,G__34966__$1,loc,class_name,simple_class,cause_type,format,map__34964,map__34964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__34967_34976,_STAR_print_fn_STAR__orig_val__34968_34977,_STAR_print_newline_STAR__temp_val__34969_34978,_STAR_print_fn_STAR__temp_val__34970_34979,sb__4661__auto__,G__34966,G__34966__$1,loc,class_name,simple_class,cause_type,format,map__34964,map__34964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__34961_SHARP_){
return cljs.core.dissoc.call(null,p1__34961_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__34967_34976,_STAR_print_fn_STAR__orig_val__34968_34977,_STAR_print_newline_STAR__temp_val__34969_34978,_STAR_print_fn_STAR__temp_val__34970_34979,sb__4661__auto__,G__34966,G__34966__$1,loc,class_name,simple_class,cause_type,format,map__34964,map__34964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__34967_34976,_STAR_print_fn_STAR__orig_val__34968_34977,_STAR_print_newline_STAR__temp_val__34969_34978,_STAR_print_fn_STAR__temp_val__34970_34979,sb__4661__auto__,G__34966,G__34966__$1,loc,class_name,simple_class,cause_type,format,map__34964,map__34964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34968_34977;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34967_34976;
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
var _STAR_print_newline_STAR__orig_val__34971_34980 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34972_34981 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34973_34982 = true;
var _STAR_print_fn_STAR__temp_val__34974_34983 = ((function (_STAR_print_newline_STAR__orig_val__34971_34980,_STAR_print_fn_STAR__orig_val__34972_34981,_STAR_print_newline_STAR__temp_val__34973_34982,sb__4661__auto__,G__34966,G__34966__$1,loc,class_name,simple_class,cause_type,format,map__34964,map__34964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__34971_34980,_STAR_print_fn_STAR__orig_val__34972_34981,_STAR_print_newline_STAR__temp_val__34973_34982,sb__4661__auto__,G__34966,G__34966__$1,loc,class_name,simple_class,cause_type,format,map__34964,map__34964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34973_34982;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34974_34983;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__34971_34980,_STAR_print_fn_STAR__orig_val__34972_34981,_STAR_print_newline_STAR__temp_val__34973_34982,_STAR_print_fn_STAR__temp_val__34974_34983,sb__4661__auto__,G__34966,G__34966__$1,loc,class_name,simple_class,cause_type,format,map__34964,map__34964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__34971_34980,_STAR_print_fn_STAR__orig_val__34972_34981,_STAR_print_newline_STAR__temp_val__34973_34982,_STAR_print_fn_STAR__temp_val__34974_34983,sb__4661__auto__,G__34966,G__34966__$1,loc,class_name,simple_class,cause_type,format,map__34964,map__34964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__34962_SHARP_){
return cljs.core.dissoc.call(null,p1__34962_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__34971_34980,_STAR_print_fn_STAR__orig_val__34972_34981,_STAR_print_newline_STAR__temp_val__34973_34982,_STAR_print_fn_STAR__temp_val__34974_34983,sb__4661__auto__,G__34966,G__34966__$1,loc,class_name,simple_class,cause_type,format,map__34964,map__34964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__34971_34980,_STAR_print_fn_STAR__orig_val__34972_34981,_STAR_print_newline_STAR__temp_val__34973_34982,_STAR_print_fn_STAR__temp_val__34974_34983,sb__4661__auto__,G__34966,G__34966__$1,loc,class_name,simple_class,cause_type,format,map__34964,map__34964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34972_34981;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34971_34980;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34966__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1601259682527
