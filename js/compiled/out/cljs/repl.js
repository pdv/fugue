// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35152){
var map__35153 = p__35152;
var map__35153__$1 = (((((!((map__35153 == null))))?(((((map__35153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35153):map__35153);
var m = map__35153__$1;
var n = cljs.core.get.call(null,map__35153__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35153__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35155_35187 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35156_35188 = null;
var count__35157_35189 = (0);
var i__35158_35190 = (0);
while(true){
if((i__35158_35190 < count__35157_35189)){
var f_35191 = cljs.core._nth.call(null,chunk__35156_35188,i__35158_35190);
cljs.core.println.call(null,"  ",f_35191);


var G__35192 = seq__35155_35187;
var G__35193 = chunk__35156_35188;
var G__35194 = count__35157_35189;
var G__35195 = (i__35158_35190 + (1));
seq__35155_35187 = G__35192;
chunk__35156_35188 = G__35193;
count__35157_35189 = G__35194;
i__35158_35190 = G__35195;
continue;
} else {
var temp__5720__auto___35196 = cljs.core.seq.call(null,seq__35155_35187);
if(temp__5720__auto___35196){
var seq__35155_35197__$1 = temp__5720__auto___35196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35155_35197__$1)){
var c__4550__auto___35198 = cljs.core.chunk_first.call(null,seq__35155_35197__$1);
var G__35199 = cljs.core.chunk_rest.call(null,seq__35155_35197__$1);
var G__35200 = c__4550__auto___35198;
var G__35201 = cljs.core.count.call(null,c__4550__auto___35198);
var G__35202 = (0);
seq__35155_35187 = G__35199;
chunk__35156_35188 = G__35200;
count__35157_35189 = G__35201;
i__35158_35190 = G__35202;
continue;
} else {
var f_35203 = cljs.core.first.call(null,seq__35155_35197__$1);
cljs.core.println.call(null,"  ",f_35203);


var G__35204 = cljs.core.next.call(null,seq__35155_35197__$1);
var G__35205 = null;
var G__35206 = (0);
var G__35207 = (0);
seq__35155_35187 = G__35204;
chunk__35156_35188 = G__35205;
count__35157_35189 = G__35206;
i__35158_35190 = G__35207;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35208 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35208);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35208)))?cljs.core.second.call(null,arglists_35208):arglists_35208));
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
var seq__35159_35209 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35160_35210 = null;
var count__35161_35211 = (0);
var i__35162_35212 = (0);
while(true){
if((i__35162_35212 < count__35161_35211)){
var vec__35173_35213 = cljs.core._nth.call(null,chunk__35160_35210,i__35162_35212);
var name_35214 = cljs.core.nth.call(null,vec__35173_35213,(0),null);
var map__35176_35215 = cljs.core.nth.call(null,vec__35173_35213,(1),null);
var map__35176_35216__$1 = (((((!((map__35176_35215 == null))))?(((((map__35176_35215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35176_35215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35176_35215):map__35176_35215);
var doc_35217 = cljs.core.get.call(null,map__35176_35216__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35218 = cljs.core.get.call(null,map__35176_35216__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35214);

cljs.core.println.call(null," ",arglists_35218);

if(cljs.core.truth_(doc_35217)){
cljs.core.println.call(null," ",doc_35217);
} else {
}


var G__35219 = seq__35159_35209;
var G__35220 = chunk__35160_35210;
var G__35221 = count__35161_35211;
var G__35222 = (i__35162_35212 + (1));
seq__35159_35209 = G__35219;
chunk__35160_35210 = G__35220;
count__35161_35211 = G__35221;
i__35162_35212 = G__35222;
continue;
} else {
var temp__5720__auto___35223 = cljs.core.seq.call(null,seq__35159_35209);
if(temp__5720__auto___35223){
var seq__35159_35224__$1 = temp__5720__auto___35223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35159_35224__$1)){
var c__4550__auto___35225 = cljs.core.chunk_first.call(null,seq__35159_35224__$1);
var G__35226 = cljs.core.chunk_rest.call(null,seq__35159_35224__$1);
var G__35227 = c__4550__auto___35225;
var G__35228 = cljs.core.count.call(null,c__4550__auto___35225);
var G__35229 = (0);
seq__35159_35209 = G__35226;
chunk__35160_35210 = G__35227;
count__35161_35211 = G__35228;
i__35162_35212 = G__35229;
continue;
} else {
var vec__35178_35230 = cljs.core.first.call(null,seq__35159_35224__$1);
var name_35231 = cljs.core.nth.call(null,vec__35178_35230,(0),null);
var map__35181_35232 = cljs.core.nth.call(null,vec__35178_35230,(1),null);
var map__35181_35233__$1 = (((((!((map__35181_35232 == null))))?(((((map__35181_35232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35181_35232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35181_35232):map__35181_35232);
var doc_35234 = cljs.core.get.call(null,map__35181_35233__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35235 = cljs.core.get.call(null,map__35181_35233__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35231);

cljs.core.println.call(null," ",arglists_35235);

if(cljs.core.truth_(doc_35234)){
cljs.core.println.call(null," ",doc_35234);
} else {
}


var G__35236 = cljs.core.next.call(null,seq__35159_35224__$1);
var G__35237 = null;
var G__35238 = (0);
var G__35239 = (0);
seq__35159_35209 = G__35236;
chunk__35160_35210 = G__35237;
count__35161_35211 = G__35238;
i__35162_35212 = G__35239;
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

var seq__35183 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35184 = null;
var count__35185 = (0);
var i__35186 = (0);
while(true){
if((i__35186 < count__35185)){
var role = cljs.core._nth.call(null,chunk__35184,i__35186);
var temp__5720__auto___35240__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35240__$1)){
var spec_35241 = temp__5720__auto___35240__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35241));
} else {
}


var G__35242 = seq__35183;
var G__35243 = chunk__35184;
var G__35244 = count__35185;
var G__35245 = (i__35186 + (1));
seq__35183 = G__35242;
chunk__35184 = G__35243;
count__35185 = G__35244;
i__35186 = G__35245;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__35183);
if(temp__5720__auto____$1){
var seq__35183__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35183__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35183__$1);
var G__35246 = cljs.core.chunk_rest.call(null,seq__35183__$1);
var G__35247 = c__4550__auto__;
var G__35248 = cljs.core.count.call(null,c__4550__auto__);
var G__35249 = (0);
seq__35183 = G__35246;
chunk__35184 = G__35247;
count__35185 = G__35248;
i__35186 = G__35249;
continue;
} else {
var role = cljs.core.first.call(null,seq__35183__$1);
var temp__5720__auto___35250__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___35250__$2)){
var spec_35251 = temp__5720__auto___35250__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35251));
} else {
}


var G__35252 = cljs.core.next.call(null,seq__35183__$1);
var G__35253 = null;
var G__35254 = (0);
var G__35255 = (0);
seq__35183 = G__35252;
chunk__35184 = G__35253;
count__35185 = G__35254;
i__35186 = G__35255;
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
var G__35256 = cljs.core.conj.call(null,via,t);
var G__35257 = cljs.core.ex_cause.call(null,t);
via = G__35256;
t = G__35257;
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
var map__35260 = datafied_throwable;
var map__35260__$1 = (((((!((map__35260 == null))))?(((((map__35260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35260):map__35260);
var via = cljs.core.get.call(null,map__35260__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35260__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35260__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35261 = cljs.core.last.call(null,via);
var map__35261__$1 = (((((!((map__35261 == null))))?(((((map__35261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35261):map__35261);
var type = cljs.core.get.call(null,map__35261__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35261__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35261__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35262 = data;
var map__35262__$1 = (((((!((map__35262 == null))))?(((((map__35262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35262):map__35262);
var problems = cljs.core.get.call(null,map__35262__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35262__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35262__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35263 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35263__$1 = (((((!((map__35263 == null))))?(((((map__35263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35263):map__35263);
var top_data = map__35263__$1;
var source = cljs.core.get.call(null,map__35263__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35268 = phase;
var G__35268__$1 = (((G__35268 instanceof cljs.core.Keyword))?G__35268.fqn:null);
switch (G__35268__$1) {
case "read-source":
var map__35269 = data;
var map__35269__$1 = (((((!((map__35269 == null))))?(((((map__35269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35269):map__35269);
var line = cljs.core.get.call(null,map__35269__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35269__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35271 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35271__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35271,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35271);
var G__35271__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35271__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35271__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35271__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35271__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35272 = top_data;
var G__35272__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35272,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35272);
var G__35272__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35272__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35272__$1);
var G__35272__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35272__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35272__$2);
var G__35272__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35272__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35272__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35272__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35272__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35273 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35273,(0),null);
var method = cljs.core.nth.call(null,vec__35273,(1),null);
var file = cljs.core.nth.call(null,vec__35273,(2),null);
var line = cljs.core.nth.call(null,vec__35273,(3),null);
var G__35276 = top_data;
var G__35276__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35276,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35276);
var G__35276__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35276__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35276__$1);
var G__35276__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__35276__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35276__$2);
var G__35276__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35276__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35276__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35276__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35276__$4;
}

break;
case "execution":
var vec__35277 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35277,(0),null);
var method = cljs.core.nth.call(null,vec__35277,(1),null);
var file = cljs.core.nth.call(null,vec__35277,(2),null);
var line = cljs.core.nth.call(null,vec__35277,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__35277,source__$1,method,file,line,G__35268,G__35268__$1,map__35260,map__35260__$1,via,trace,phase,map__35261,map__35261__$1,type,message,data,map__35262,map__35262__$1,problems,fn,caller,map__35263,map__35263__$1,top_data,source){
return (function (p1__35259_SHARP_){
var or__4131__auto__ = (p1__35259_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35259_SHARP_);
}
});})(vec__35277,source__$1,method,file,line,G__35268,G__35268__$1,map__35260,map__35260__$1,via,trace,phase,map__35261,map__35261__$1,type,message,data,map__35262,map__35262__$1,problems,fn,caller,map__35263,map__35263__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__35280 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35280__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35280,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35280);
var G__35280__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35280__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35280__$1);
var G__35280__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__35280__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35280__$2);
var G__35280__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35280__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35280__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35280__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35280__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35268__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35284){
var map__35285 = p__35284;
var map__35285__$1 = (((((!((map__35285 == null))))?(((((map__35285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35285):map__35285);
var triage_data = map__35285__$1;
var phase = cljs.core.get.call(null,map__35285__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35285__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35285__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35285__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35285__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35285__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35285__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35285__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35287 = phase;
var G__35287__$1 = (((G__35287 instanceof cljs.core.Keyword))?G__35287.fqn:null);
switch (G__35287__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35288_35297 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35289_35298 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35290_35299 = true;
var _STAR_print_fn_STAR__temp_val__35291_35300 = ((function (_STAR_print_newline_STAR__orig_val__35288_35297,_STAR_print_fn_STAR__orig_val__35289_35298,_STAR_print_newline_STAR__temp_val__35290_35299,sb__4661__auto__,G__35287,G__35287__$1,loc,class_name,simple_class,cause_type,format,map__35285,map__35285__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35288_35297,_STAR_print_fn_STAR__orig_val__35289_35298,_STAR_print_newline_STAR__temp_val__35290_35299,sb__4661__auto__,G__35287,G__35287__$1,loc,class_name,simple_class,cause_type,format,map__35285,map__35285__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35290_35299;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35291_35300;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35288_35297,_STAR_print_fn_STAR__orig_val__35289_35298,_STAR_print_newline_STAR__temp_val__35290_35299,_STAR_print_fn_STAR__temp_val__35291_35300,sb__4661__auto__,G__35287,G__35287__$1,loc,class_name,simple_class,cause_type,format,map__35285,map__35285__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35288_35297,_STAR_print_fn_STAR__orig_val__35289_35298,_STAR_print_newline_STAR__temp_val__35290_35299,_STAR_print_fn_STAR__temp_val__35291_35300,sb__4661__auto__,G__35287,G__35287__$1,loc,class_name,simple_class,cause_type,format,map__35285,map__35285__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35282_SHARP_){
return cljs.core.dissoc.call(null,p1__35282_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35288_35297,_STAR_print_fn_STAR__orig_val__35289_35298,_STAR_print_newline_STAR__temp_val__35290_35299,_STAR_print_fn_STAR__temp_val__35291_35300,sb__4661__auto__,G__35287,G__35287__$1,loc,class_name,simple_class,cause_type,format,map__35285,map__35285__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35288_35297,_STAR_print_fn_STAR__orig_val__35289_35298,_STAR_print_newline_STAR__temp_val__35290_35299,_STAR_print_fn_STAR__temp_val__35291_35300,sb__4661__auto__,G__35287,G__35287__$1,loc,class_name,simple_class,cause_type,format,map__35285,map__35285__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35289_35298;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35288_35297;
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
var _STAR_print_newline_STAR__orig_val__35292_35301 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35293_35302 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35294_35303 = true;
var _STAR_print_fn_STAR__temp_val__35295_35304 = ((function (_STAR_print_newline_STAR__orig_val__35292_35301,_STAR_print_fn_STAR__orig_val__35293_35302,_STAR_print_newline_STAR__temp_val__35294_35303,sb__4661__auto__,G__35287,G__35287__$1,loc,class_name,simple_class,cause_type,format,map__35285,map__35285__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35292_35301,_STAR_print_fn_STAR__orig_val__35293_35302,_STAR_print_newline_STAR__temp_val__35294_35303,sb__4661__auto__,G__35287,G__35287__$1,loc,class_name,simple_class,cause_type,format,map__35285,map__35285__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35294_35303;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35295_35304;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35292_35301,_STAR_print_fn_STAR__orig_val__35293_35302,_STAR_print_newline_STAR__temp_val__35294_35303,_STAR_print_fn_STAR__temp_val__35295_35304,sb__4661__auto__,G__35287,G__35287__$1,loc,class_name,simple_class,cause_type,format,map__35285,map__35285__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35292_35301,_STAR_print_fn_STAR__orig_val__35293_35302,_STAR_print_newline_STAR__temp_val__35294_35303,_STAR_print_fn_STAR__temp_val__35295_35304,sb__4661__auto__,G__35287,G__35287__$1,loc,class_name,simple_class,cause_type,format,map__35285,map__35285__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35283_SHARP_){
return cljs.core.dissoc.call(null,p1__35283_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35292_35301,_STAR_print_fn_STAR__orig_val__35293_35302,_STAR_print_newline_STAR__temp_val__35294_35303,_STAR_print_fn_STAR__temp_val__35295_35304,sb__4661__auto__,G__35287,G__35287__$1,loc,class_name,simple_class,cause_type,format,map__35285,map__35285__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35292_35301,_STAR_print_fn_STAR__orig_val__35293_35302,_STAR_print_newline_STAR__temp_val__35294_35303,_STAR_print_fn_STAR__temp_val__35295_35304,sb__4661__auto__,G__35287,G__35287__$1,loc,class_name,simple_class,cause_type,format,map__35285,map__35285__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35293_35302;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35292_35301;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35287__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1601408407258
